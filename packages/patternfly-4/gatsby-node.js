/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const fs = require('fs-extra');
const pascalCase = require('pascal-case');
const paramCase = require('param-case');
const inflection = require('inflection');

const reactOnCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  const componentPathRegEx = /(components|layouts|demos)\//;
  if (node.internal.type === 'SitePage' && componentPathRegEx.test(node.path)) {
    const pathLabel = node.component
      .split('/')
      .pop()
      .split('.')
      .shift();

    createNodeField({
      node,
      name: 'label',
      value: pathLabel
    });
  }
};

const coreOnCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  const COMPONENTS_BASE_DIR = path.resolve(__dirname, './_repos/core/src/patternfly/components');
  const DEMOS_BASE_DIR = path.resolve(__dirname, './_repos/core/src/patternfly/demos');
  const LAYOUTS_BASE_DIR = path.resolve(__dirname, './_repos/core/src/patternfly/layouts');
  const UTILITIES_BASE_DIR = path.resolve(__dirname, './_repos/core/src/patternfly/utilities');
  const UPGRADES_BASE_DIR = path.resolve(__dirname, './_repos/core/src/patternfly/upgrade-examples');
  const isMarkdown = node.internal.type === 'MarkdownRemark';

  if (isMarkdown && node.fileAbsolutePath) {
    const isComponent = node.fileAbsolutePath.includes(COMPONENTS_BASE_DIR);
    const isLayout = node.fileAbsolutePath.includes(LAYOUTS_BASE_DIR);
    const isDemo = node.fileAbsolutePath.includes(DEMOS_BASE_DIR);
    const isUtility = node.fileAbsolutePath.includes(UTILITIES_BASE_DIR);
    const isUpgrade = node.fileAbsolutePath.includes(UPGRADES_BASE_DIR);
    if (isComponent) {
      const componentName = path.basename(path.dirname(node.fileAbsolutePath));
      const pagePath = `/components/${componentName}/docs`;
      createNodeField({ node, name: 'path', value: pagePath });
      createNodeField({ node, name: 'type', value: 'documentation' });
      createNodeField({ node, name: 'contentType', value: 'component' });
    } else if (isLayout) {
      const layoutName = path.basename(path.dirname(node.fileAbsolutePath));
      const pagePath = `/layouts/${layoutName}/docs`;
      createNodeField({ node, name: 'path', value: pagePath });
      createNodeField({ node, name: 'type', value: 'documentation' });
      createNodeField({ node, name: 'contentType', value: 'layout' });
    } else if (isDemo) {
      const demoName = path.basename(path.dirname(node.fileAbsolutePath));
      const pagePath = `/demos/${demoName}/docs`;
      createNodeField({ node, name: 'path', value: pagePath });
      createNodeField({ node, name: 'type', value: 'documentation' });
      createNodeField({ node, name: 'contentType', value: 'demo' });
    } else if (isUtility) {
      const utilityName = path.basename(path.dirname(node.fileAbsolutePath));
      const pagePath = `/utilities/${utilityName}/docs`;
      createNodeField({ node, name: 'path', value: pagePath });
      createNodeField({ node, name: 'type', value: 'documentation' });
      createNodeField({ node, name: 'contentType', value: 'utility' });
    } else if (isUpgrade) {
      const upgradeName = path.basename(path.dirname(node.fileAbsolutePath));
      const pagePath = `/upgrades/${upgradeName}/docs`;
      createNodeField({ node, name: 'path', value: pagePath });
      createNodeField({ node, name: 'type', value: 'documentation' });
      createNodeField({ node, name: 'contentType', value: 'upgrade' });
    }
  }
};

exports.onCreateNode = ({ node, actions }) => {
  reactOnCreateNode({ node, actions });
  // coreOnCreateNode({ node, actions });
};

const reactCreatePages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      fragment DocFile on File {
        relativePath
        relativeDirectory
        absolutePath
        base
        name
      }
      query AllDocsFiles {
        docs: allFile(filter: { absolutePath: { glob: "**/_repos/react-*/**/*.docs.js" } }) {
          edges {
            node {
              ...DocFile
            }
          }
        }
        examples: allFile(filter: { absolutePath: { glob: "**/_repos/react-*/**/examples/!(*.styles).js" } }) {
          edges {
            node {
              ...DocFile
            }
          }
        }
        exampleImages: allFile(filter: { absolutePath: { glob: "**/_repos/react-*/**" }, extension: { regex: "/(png|svg|jpg)/" } }) {
          edges {
            node {
              ...DocFile
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return reject(result.errors);
      }
      const { docs, examples, exampleImages} = result.data;
      const docExports = [];
      const docsComponentPath = path.resolve(__dirname, './src/components/componentDocs');
      docs.edges.forEach(({ node: doc }) => {
        const filePath = path.resolve(__dirname, '.tmp', doc.base);

        const rawExamples = [];
        const getPackage = pkg => doc.absolutePath.indexOf(pkg) !== -1 && pkg;
        const packageDir = getPackage('react-core') || getPackage('react-charts');
        examples.edges.forEach(({ node: example }) => {
          if (
            example.relativeDirectory
              .split('/')
              .slice(0, 4)
              .join('/') === doc.relativeDirectory
          ) {
            const examplePath = `../_repos/${example.relativePath}`;
            rawExamples.push(`{name: '${example.name}', path: '${examplePath}', file: require('!!raw-loader!${examplePath}')}`);
          }
        });
        const allImages = [];
        exampleImages.edges.forEach(({ node: image }) => {
          const imagePath = `../_repos/${image.relativePath}`;
          allImages.push(`{name: '${image.base}', file: require('${imagePath}')}`);
        });

        const content = `
        import React from 'react';
        import docs from '${doc.absolutePath}';
        import ComponentDocs from '${docsComponentPath}';

        const rawExamples = [${rawExamples}];
        const images = [${allImages}];

        export const ${doc.base.split('.')[0].toLowerCase()}_docs = docs;
        export const ${doc.base.split('.')[0].toLowerCase()}_package = '${packageDir}';

        export default () => <ComponentDocs rawExamples={rawExamples} images={images} {...docs} />;
        `;

        docExports.push(
          `export { ${doc.base.split('.')[0].toLowerCase()}_docs, ${doc.base
            .split('.')[0]
            .toLowerCase()}_package } from './${doc.base}';`
        );

        fs.outputFileSync(filePath, content);
        const shortenedPath = doc.relativePath.split('/').slice(2).join('/');
        createPage({
          path: `/docs/react/${path.dirname(shortenedPath).toLowerCase()}`,
          component: filePath
        });
      });

      const indexFilePath = path.resolve(__dirname, '.tmp', 'index.js');
      fs.writeFileSync(indexFilePath, docExports.join('\n'));

      examples.edges.forEach(({ node: example }) => {
        const shortenedPath = example.relativePath.split('/').slice(2).join('/');
        const examplePath = `/docs/react/${path.dirname(shortenedPath).toLowerCase()}/${paramCase(example.name)}`;

        createPage({
          path: examplePath,
          layout: 'example',
          component: example.absolutePath
        });
      });
    });
    resolve();
  })
};

const coreCreatePages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              type
              path
              contentType
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (!node.fields) {
        return;
      }
      console.log(`creating page for: ${node.fields.path}`);
      createPage({
        path: node.fields.path,
        component: path.resolve(__dirname, `./_repos/core/src/_site/templates/${node.fields.type}.js`),
        context: {
          pagePath: node.fields.path,
          type: node.fields.type,
          contentType: node.fields.contentType
        }
      });
    });
  });
};

exports.createPages = ({ graphql, actions }) => {
  reactCreatePages({ graphql, actions });
  // coreCreatePages({ graphql, actions });
};

exports.NO_onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  const CATEGORY_PAGE_REGEX = /^\/(components|layouts|demos|utilities)\/$/;
  const CATEGORY_CHILD_PAGE_REGEX = /^\/(components|layouts|demos|utilities)\/([A-Za-z0-9_-]+)/;
  const UPGRADES_PAGE_REGEX = /^\/(upgrade-examples)\/([A-Za-z0-9_-]+)/;
  return new Promise((resolve, reject) => {
    console.log(`checking: ${page.path}`);
    const isCategoryPage = page.path.match(CATEGORY_PAGE_REGEX);
    const isCategoryChildPage = page.path.match(CATEGORY_CHILD_PAGE_REGEX);
    const isUpgradePage = page.path.match(UPGRADES_PAGE_REGEX);

    page.context.type = 'page';
    page.context.category = 'page';
    page.context.slug = '';
    page.context.name = '';
    page.context.title = '';
    page.layout = 'index';

    if (isCategoryPage) {
      page.context.type = 'category';
      page.context.category = page.path.match(CATEGORY_PAGE_REGEX)[1];
    } else if (isCategoryChildPage) {
      const pageCategory = page.path.match(CATEGORY_CHILD_PAGE_REGEX)[1];
      const pageSlug = page.path.match(CATEGORY_CHILD_PAGE_REGEX)[2];
      const pageName = pageSlug.replace('-', ' ');
      const pageTitle = inflection.titleize(pageName);
      page.context.type = inflection.singularize(pageCategory);
      page.context.category = pageCategory;
      page.context.slug = pageSlug;
      page.context.name = pageName;
      page.context.title = pageTitle;
    } else if (isUpgradePage) {
      const pageCategory = 'upgrade';
      const pageSlug = page.path.match(UPGRADES_PAGE_REGEX)[2];
      const pageName = pageSlug.replace('-', ' ');
      const pageTitle = inflection.titleize(pageName);
      page.context.type = inflection.singularize(pageCategory);
      page.context.category = pageCategory;
      page.context.slug = pageSlug;
      page.context.name = pageName;
      page.context.title = pageTitle;
      page.layout = 'upgrade';
    }
    createPage(page);

    if (isCategoryChildPage || isUpgradePage) {
      // create full demo page for each component
      const demoPage = Object.assign({}, page);
      demoPage.layout = 'demo';
      const nodePath = demoPage.path;
      demoPage.path = `${nodePath.substr(0, nodePath.length - 1)}-full/`;
      createPage(demoPage);
    }
    resolve();
  });
};

exports.NO_onCreateWebpackConfig = ({ stage, actions }) => {
  const COMPONENTS_PATH = path.resolve(__dirname, './_repos/core/src/patternfly/components');
  const DEMOS_PATH = path.resolve(__dirname, './_repos/core/src/patternfly/demos');
  const LAYOUTS_PATH = path.resolve(__dirname, './_repos/core/src/patternfly/layouts');
  const UTILITIES_PATH = path.resolve(__dirname, './_repos/core/src/patternfly/utilities');
  const UPGRADE_PATH = path.resolve(__dirname, './_repos/core/src/patternfly/upgrade-examples');
  const COMPONENT_PATHS = fs.readdirSync(COMPONENTS_PATH).map(name => path.resolve(COMPONENTS_PATH, `./${name}`));
  const DEMO_PATH = fs.readdirSync(DEMOS_PATH).map(name => path.resolve(DEMOS_PATH, `./${name}`));
  const LAYOUT_PATHS = fs.readdirSync(LAYOUTS_PATH).map(name => path.resolve(LAYOUTS_PATH, `./${name}`));
  const UTILITIES_PATHS = fs.readdirSync(UTILITIES_PATH).map(name => path.resolve(UTILITIES_PATH, `./${name}`));
  const UPGRADES_PATHS = fs.readdirSync(UPGRADE_PATH).map(name => path.resolve(UPGRADE_PATH, `./${name}`));

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.md$/,
          loader: 'html-loader!markdown-loader'
        },
        {
          test: /\.hbs$/,
          query: {
            partialDirs: COMPONENT_PATHS.concat(LAYOUT_PATHS)
              .concat(DEMO_PATH)
              .concat(UTILITIES_PATHS)
              .concat(UPGRADES_PATHS),
            helperDirs: path.resolve(__dirname, './_repos/core/build/helpers')
          },
          loader: 'handlebars-loader'
        }
      ]
    },
    resolve: {
      alias: {
        '@siteComponents': path.resolve(__dirname, './_repos/core/src/site/_site'),
        '@components': path.resolve(__dirname, './_repos/core/src/patternfly/components'),
        '@layouts': path.resolve(__dirname, './_repos/core/src/patternfly/layouts'),
        '@demos': path.resolve(__dirname, './_repos/core/src/demos'),
        '@project': path.resolve(__dirname, './_repos/core/src')
      }
    },
    resolveLoader: {
      alias: { raw: 'raw-loader' }
    }
  });
};

////////// EXPERIMENTAL TYPESCRIPT CODE BELOW - TRYING TO PARSE TSX TO DOCGEN //////////

// exports.resolvableExtensions = () => {
//   return [`.js`, `.jsx`, `.ts`, `.tsx`]
// };

// const { transpileModule } = require(`typescript`)

// const test = /\.tsx?$/
// const compilerDefaults = {
//   target: `esnext`,
//   experimentalDecorators: true,
//   jsx: `react`,
//   module: `es6`,
// }

// exports.onCreateWebpackConfig = (
//   { stage, plugins, actions, loaders },
//   { compilerOptions, ...options }
// ) => {
//   const typescriptOptions = {
//     transpileOnly: false,
//     compilerOptions: {
//       ...compilerDefaults,
//       ...compilerOptions,
//     },
//   }
//   actions.setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test,
//           use: [
//             loaders.js(),
//             {
//               loader: require.resolve(`ts-loader`),
//               options: typescriptOptions,
//             },
//           ],
//         },
//       ],
//     },
//   });
//   switch (stage) {
//     case 'build-javascript': {
//       actions.setWebpackConfig({
//         optimization: {
//           minimizer: [
//             plugins.minifyJs({
//               terserOptions: {
//                 keep_classnames: true,
//                 keep_fnames: true
//               }
//             }),
//             plugins.minifyCss()
//           ]
//         } // optimization
//       })
//     }
//   }
// }

// exports.preprocessSource = ({ contents, filename }, { compilerOptions }) => {
//   const copts = { ...compilerDefaults, ...compilerOptions }

//   // return the transpiled source if it's TypeScript, otherwise null
//   return test.test(filename)
//     ? transpileModule(contents, { compilerOptions: copts }).outputText
//     : null
// }