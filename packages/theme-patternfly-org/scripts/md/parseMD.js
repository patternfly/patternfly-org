const path = require('path');
const fs = require('fs-extra');
const unified = require('unified');
const remove = require('unist-util-remove');
const toVfile = require('to-vfile'); // https://github.com/vfile/vfile
const vfileReport = require('vfile-reporter');
const yaml = require('js-yaml'); // https://github.com/nodeca/js-yaml
const { makeSlug } = require('../../helpers/slugger');
const { extractTableOfContents } = require('../../helpers/extractTableOfContents');
const { tsDocgen } = require('../tsDocgen');

const outputBase = path.join(process.cwd(), `src/generated`);
const tsDocs = {};
const routes = {};

function toReactComponent(mdFilePath, source) {
  // vfiles allow for nicer error messages and have native `unified` support
  const vfile = toVfile.readSync(mdFilePath);

  const relPath = path.relative(process.cwd(), vfile.path);

  let jsx;
  let outPath;
  let pageData = {};
  let frontmatter = {};
  let toc = [];

  unified()
    .use(require('remark-parse'))
    .use(require('remark-frontmatter'), ['yaml'])
    // Extract frontmatter
    .use(() => (tree, file) => {
      const yamlNode = tree.children.shift();
      frontmatter = yaml.safeLoad(yamlNode.value);

      // Fail early
      if (!frontmatter.id) {
        file.fail('id attribute is required in frontmatter for PatternFly docs');
      }
      else if (frontmatter.id === 'Forms') {
        // Temporarily override section until https://github.com/patternfly/patternfly/pull/3428
        // lands in react-docs
        frontmatter.id = 'Form';
      }
      if (frontmatter.section === 'overview') {
        // Temporarily override section until last org release and backport to core/react
        // Affected pages are release notes and upgrade guides
        frontmatter.section = 'get-started';
      }
      if (!frontmatter.hideTOC) {
        toc = extractTableOfContents(tree);
      }
      source = frontmatter.source || source;
      const slug = makeSlug(source, frontmatter.section, frontmatter.id);
      outPath = path.join(outputBase, `${slug}.js`);

      let sourceRepo = 'patternfly-org';
      if (source === 'html') {
        sourceRepo = 'patternfly';
      }
      else if (source === 'react') {
        sourceRepo = 'patternfly-react';
      }

      const propComponents = [...new Set(frontmatter.propComponents || [])]
        .filter(propComponent => {
          if (tsDocs[propComponent]) {
            return true;
          }
          console.warn('Prop component', propComponent, 'missing from tsDocgen');
          return false;
        })
        .map(propComponent => tsDocs[propComponent])

      const normalizedPath = relPath
        .replace('node_modules/@patternfly/patternfly/docs', 'src/patternfly')
        .replace(/node_modules\/@patternfly\/react-([\w-])/, (_, match) => `packages/react-${match}`)
        .replace(/\.\.\//g, '');

      pageData = {
        id: frontmatter.id,
        section: frontmatter.section || 'components',
        source,
        slug,
        sourceLink: `https://github.com/patternfly/${
          sourceRepo}/blob/master/${
          normalizedPath}`
      };

      pageData.id = pageData.id.replace('Forms', 'Form');
      // Temporarily override section for Demo tabs until we port this upstream
      if (frontmatter.section === 'demos' && routes[slug.replace('demos', 'components')]) {
        pageData.section = 'components';
        pageData.source = `${source}-demos`;
        pageData.slug = makeSlug(pageData.source, pageData.section, pageData.id);
        outPath = path.join(outputBase, `${pageData.slug}.js`);
      }
      if (frontmatter.title) {
        pageData.title = frontmatter.title;
      }
      if (propComponents.length > 0) {
        pageData.propComponents = propComponents;
      }
      if (toc.length > 0) {
        pageData.toc = toc;
      }
      if (frontmatter.optIn) {
        pageData.optIn = frontmatter.optIn;
      }
      if (frontmatter.beta) {
        pageData.beta = frontmatter.beta;
      }
      if (frontmatter.cssPrefix) {
        pageData.cssPrefix = Array.isArray(frontmatter.cssPrefix)
          ? frontmatter.cssPrefix
          : [frontmatter.cssPrefix];
      }
      if (frontmatter.katacodaBroken) {
        pageData.katacodaBroken = frontmatter.katacodaBroken;
      }
    })
    // Delete HTML comments
    .use(require('./remove-comments'))
    // remark-mdx removes auto-link support
    // this adds it back ONLY for links which are easily differentiable from JSX 
    .use(require('./auto-link-url'))
    // Support for JSX in MD
    .use(require('remark-mdx'))
    // Support for import/exports in MD
    .use(require('remark-mdxjs'))
    // Insert footnotes
    .use(require('remark-footnotes'))
    // Remove whitespace
    .use(require('remark-squeeze-paragraphs'))
    // Support example captions
    .use(require('./example-captions'))
    // .use(require('remark-rehype'))
    // .use(require('rehype-react'), { createElement: require('react').createElement })
    // Transform AST to JSX elements. Includes special code block parsing
    .use(require('./mdx-ast-to-mdx-hast'))
    // Don't allow exports
    .use(() => tree => remove(tree, 'export'))
    // Comments aren't very useful in generated files no one wants to look at
    .use(() => tree => remove(tree, 'comment'))
    // Add custom PatternFly doc design things
    .use(require('./anchor-header'))
    .use(require('./styled-tags'))
    // Transform HAST object to JSX string, 
    .use(require('./mdx-hast-to-jsx'), {
      getRelPath: () => path.relative(path.dirname(outPath), vfile.dirname), // for imports
      getPageData: () => pageData // For @reach/router routing
    })
    .process(vfile, (err, file) => {
      if (err) {
        console.error(vfileReport(err || file));
        process.exit(2);
      } else {
        // console.log(relPath, '->', path.relative(process.cwd(), outPath));
        jsx = file.contents;
      }
    });

  return {
    jsx,
    pageData,
    outPath
  };
}

module.exports = {
  sourceProps(files) {
    files
      .map(tsDocgen)
      .flat()
      .filter(({ hide }) => !hide)
      .forEach(({ name, description, props }) => {
        tsDocs[name] = { name, description, props };
      });
  },
  sourceMD(files, source) {
    if (!Array.isArray(files)) {
      files = [files];
    }
    files.forEach(file => {
      const { jsx, pageData, outPath } = toReactComponent(file, source);
  
      if (jsx) {
        fs.outputFileSync(outPath, jsx);
        routes[pageData.slug] = {
          id: pageData.id,
          title: pageData.title || pageData.id,
          toc: pageData.toc || [],
          section: pageData.section,
          source: pageData.source
        };
      }
    });
  },
  writeIndex() {
    const stringifyRoute = ([route, pageData]) => `'${route}': {\n    ${Object.entries(pageData)
      .map(([key, val]) => `${key}: ${JSON.stringify(val)}`)
      .concat(`Component: () => import(/* webpackChunkName: "${route.substr(1)}/index" */ '.${route}')`)
      .join(',\n    ')}\n  }`;

    const indexContent = `module.exports = {\n  ${Object.entries(routes)
        .map(stringifyRoute)
        .join(',\n  ')}\n};`;
    fs.outputFileSync(path.join(outputBase, 'index.js'), indexContent);
  }
};
