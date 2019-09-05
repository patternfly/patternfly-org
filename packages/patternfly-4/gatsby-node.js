/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const glob = require('glob');
const navHelpers = require('./src/helpers/navHelpers');
const coreExperimental = require('./_repos/patternfly-next/experimental-features.js');

// Map to handlebars partial files for Core
let partialsToLocationsMap = null;

const coreComponentPathRegEx = /\/documentation\/core\/.*/;
const coreExperimentalRE = new RegExp(coreExperimental.map(c => c.name.toLowerCase()).join('|'));

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  const isSitePage = node.internal.type === 'SitePage';
  const isMdx = node.internal.type === 'Mdx';
  if (isMdx) {
    createNodeField({
      node,
      name: 'optIn',
      value: (node.frontmatter && node.frontmatter.optIn) || ''
    });
  }
  if (isSitePage && coreComponentPathRegEx.test(node.path)) {
    const corePathLabel = node.component
      .split('/')
      .slice(-3)[0]
      .replace(/([A-Z])/g, ' $1')
      .trim();

    const label = corePathLabel.charAt(0) + corePathLabel.slice(1).toLowerCase();

    createNodeField({
      node,
      name: 'label',
      value: label
    });
    createNodeField({
      node,
      name: 'type',
      value: node.path.split('/')[3]
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const redirects = [
    { f: '/get-started', t: '/get-started/about/' },
    { f: '/contribute', t: '/contribute/about/' },
    { f: '/design-guidelines', t: '/design-guidelines/styles/colors/' },
    { f: '/design-guidelines/styles', t: '/design-guidelines/styles/colors/' },
    { f: '/documentation/core', t: '/documentation/core/components/aboutmodalbox/'},
    { f: '/documentation/core/demos', t: '/documentation/core/demos/aboutmodal/'},
    { f: '/documentation/react', t: '/documentation/react/components/aboutmodal/'},
    { f: '/documentation/react/components', t: '/documentation/react/components/aboutmodal/'},
    { f: '/documentation/react/layouts', t: '/documentation/react/layouts/bullseye/'},
    { f: '/documentation/react/demos', t: '/documentation/react/demos/pagelayout/'}
  ];
  redirects.forEach(({ f, t }) => {
    actions.createRedirect({
      fromPath: f,
      redirectInBrowser: true,
      toPath: t
    })
    // console.log('\nRedirecting: ' + f + ' to: ' + t);
  })

  await graphql(`
    {
      pf4Docs: allMdx(filter: {fileAbsolutePath: {glob: "**/packages/patternfly-4/react-*/**"} }) {
        nodes {
          fileAbsolutePath
          frontmatter {
            section
            title
            fullscreen
            propComponents
          }
        }
      },
      coreDocs: allFile(filter: { absolutePath: { glob: "**/patternfly-next/**/examples/index.js" } } ) {
        nodes {
          relativePath
          relativeDirectory
          absolutePath
          base
          name
        }
      }
      contentPages: allMdx(filter: {fileAbsolutePath: {glob: "**/patternfly-4/content/**"}, frontmatter: {path: {ne: null}}}) {
        nodes {
          fileAbsolutePath
          frontmatter {
            path
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const { pf4Docs, coreDocs, contentPages} = result.data;

    contentPages.nodes.forEach(node => {
      // console.log(`creating content page (mdx): ${node.frontmatter.path}`);
      actions.createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/contentTemplate.js`),
      })
    });

    pf4Docs.nodes.forEach(node => {
      const componentName = navHelpers.getFileName(node.fileAbsolutePath);
      const parentFolderName = navHelpers.getParentFolder(node.fileAbsolutePath, 3);
      const section = node.frontmatter.section ? node.frontmatter.section : 'components';

      let link = '/bad-page/';
      // Create fullscreen example component pages
      if (node.frontmatter.fullscreen) {
        link = `/documentation/react/${section}/${parentFolderName}/${componentName}/`.toLowerCase();
        // console.log('creating pf4 fullscreen page (mdx):', link);
        actions.createPage({
          path: link,
          component: path.resolve('./src/templates/mdxFullscreenTemplate.js'),
          context: {
            title: node.frontmatter.title,
            fileAbsolutePath: node.fileAbsolutePath, // Helps us get the markdown
            fullscreen: true
          }
        });
      } else {
        // Normal templated component pages
        link = `/documentation/react/${section}/${componentName}/`.toLowerCase();
        // console.log('creating pf4 doc page (mdx):', link);
        actions.createPage({
          path: link,
          component: path.resolve('./src/templates/mdxPF4Template.js'),
          context: {
            title: node.frontmatter.title,
            fileAbsolutePath: node.fileAbsolutePath, // Helps us get the markdown
            propComponents: node.frontmatter.propComponents || [], // Helps us get the docgenned props
            reactUrl: componentName, // Helps us get the description
            pathRegex: node.frontmatter.section === 'experimental' ? '/.*/experimental/.*/' : '/^((?!experimental).)*$/', // Since experimental components have same class names
          }
        });
      }
    });

    coreDocs.nodes.forEach(node => {
      let shortenedPath = node.relativePath.split('/').slice(1, 3).join('/').toLowerCase();
      const componentName = shortenedPath.split('/').pop();

      if (coreExperimentalRE.test(componentName)) {
        shortenedPath = `experimental/${componentName}`;
      }
      const examplePath = `/documentation/core/${shortenedPath}`;

      // console.log(`creating core doc page (${shortenedPath}):`, examplePath);
      actions.createPage({
        path: examplePath,
        component: path.resolve(__dirname, node.absolutePath),
      });

      // also create a full demo page for each component
      // console.log(`creating page for: ${examplePath}-full`);
      actions.createPage({
        path: `${examplePath}-full`,
        component: path.resolve(__dirname, node.absolutePath)
      });
    });
  });
}

exports.onCreateWebpackConfig = ({ stage, actions, plugins, getConfig }) => {
  if (partialsToLocationsMap === null) {
    partialsToLocationsMap = {};
    glob(path.resolve(__dirname, './_repos/patternfly-next/src/patternfly/**/*.hbs'), { ignore: '**/examples/**' }, (err, files) => {
      files.forEach(file => {
        const fileNameArr = file.split('/');
        const fileName = fileNameArr[fileNameArr.length - 1].slice(0, -4);
        partialsToLocationsMap[fileName] = file;
      });
    });
  }

  let config = getConfig();

  let nonMDRules = config.module.rules.filter(rule => !(rule.test && rule.test.test('.md')));
  config.module.rules = [
    // Core handlebars loader
    {
      test: /\.hbs$/,
      query: {
        extensions: '.hbs',
        partialResolver(partial, callback) {
          if (partialsToLocationsMap[partial]) {
            callback(null, partialsToLocationsMap[partial]);
          } else {
            callback(new Error(`Could not find partial: ${partial}`), '');
          }
        },
        helperDirs: path.resolve(__dirname, './_repos/patternfly-next/build/helpers')
      },
      loader: 'handlebars-loader'
    },
    // Core md loader (replace MDX's markdown loader)
    {
      test: /\.md$/,
      loader: 'html-loader!markdown-loader'
    },
    ...nonMDRules
  ];

  config.resolve.alias = {
    '@siteComponents': path.resolve(__dirname, './src/components/_core'),
    '@components': path.resolve(__dirname, './_repos/patternfly-next/src/patternfly/components'),
    '@layouts': path.resolve(__dirname, './_repos/patternfly-next/src/patternfly/layouts'),
    '@demos': path.resolve(__dirname, './_repos/patternfly-next/src/patternfly/demos'),
    '@project': path.resolve(__dirname, './_repos/patternfly-next/src'),
    '@content': path.resolve(__dirname, './src/components/content'),
    ...config.resolve.alias
  };

  config.resolveLoader = {
    alias: { raw: 'raw-loader' },
    ...config.resolveLoader
  };

  if (stage === `build-javascript`) {
    config.optimization = {
      runtimeChunk: {
        name: `webpack-runtime`,
      },
      splitChunks: {
        name: false,
        cacheGroups: {
          styles: {
            name: `styles`,
            // This should cover all our types of CSS.
            test: /\.(css|scss|sass|less|styl)$/,
            chunks: `all`,
            enforce: true,
          },
        },
      },
      minimizer: [
        plugins.minifyJs({
          terserOptions: {
            keep_fnames: true
          }
        }),
        plugins.minifyCss(),
      ].filter(Boolean),
    };
    // No sourcemaps
    config.devtool = false;
  }

  actions.replaceWebpackConfig(config);
}
