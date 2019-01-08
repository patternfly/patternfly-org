const path = require('path');
const fs = require('fs-extra');
const pascalCase = require('pascal-case');
const paramCase = require('param-case');
const WebpackNotifierPlugin = require('webpack-notifier');
const resolveAliases = require('./build/resolveAliases');

const COMPONENTS_PATH = path.resolve(__dirname, './_repos/core/patternfly/components');
const DEMOS_PATH = path.resolve(__dirname, './_repos/core/patternfly/demos');
const LAYOUTS_PATH = path.resolve(__dirname, './_repos/core/patternfly/layouts');
const UTILITIES_PATH = path.resolve(__dirname, './_repos/core/patternfly/utilities');

const COMPONENT_PATHS = fs.readdirSync(COMPONENTS_PATH).map(name => path.resolve(COMPONENTS_PATH, `./${name}`));
const DEMO_PATH = fs.readdirSync(DEMOS_PATH).map(name => path.resolve(DEMOS_PATH, `./${name}`));
const LAYOUT_PATHS = fs.readdirSync(LAYOUTS_PATH).map(name => path.resolve(LAYOUTS_PATH, `./${name}`));
const UTILITIES_PATHS = fs.readdirSync(UTILITIES_PATH).map(name => path.resolve(UTILITIES_PATH, `./${name}`));
const reactComponentPathRegEx = /\/react-core(\/src\/components|\/src\/layouts|\/src\/apis|\/_docs)\//;
const coreComponentPathRegEx = /\/core\/patternfly\/(components|layouts|utilities)\//;
const coreDemoPathRegEx = /\/core\/patternfly\/demos\//;
const pagesComponentPathRegEx = /\/pages\//;

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  const isSitePage = node.internal.type === 'SitePage';
  const isComponentMetadata = node.internal.type === 'ComponentMetadata';

  if (isSitePage) {
    let pathLabel;
    if (reactComponentPathRegEx.test(node.componentPath)) {
      pathLabel = node.path
        .split('/')
        .filter(Boolean)
        .pop();
      createNodeField({
        node,
        name: 'system',
        value: 'react'
      });
    } else if (coreComponentPathRegEx.test(node.componentPath)) {
      pathLabel = node.path
        .split('/')[4];
      createNodeField({
        node,
        name: 'system',
        value: 'core'
      });
    } else if (coreDemoPathRegEx.test(node.componentPath)) {
      pathLabel = node.path
        .split('/')[2];
      createNodeField({
        node,
        name: 'system',
        value: 'core'
      });
    } else if (pagesComponentPathRegEx.test(node.componentPath)) {
      createNodeField({
        node,
        name: 'system',
        value: 'page'
      });
    } else {
      createNodeField({
        node,
        name: 'system',
        value: 'other'
      });
    }
    createNodeField({
      node,
      name: 'label',
      value: pascalCase(pathLabel)
    });

  } else if (isComponentMetadata) {
    // Add an extra field to graphql so we can name the sidebar item
    createNodeField({
      node,
      name: 'label',
      value: node.displayName
    });
    // Add field for first character so we can group by it
    createNodeField({
      node,
      name: 'firstChar',
      value: node.displayName.charAt(0)
    });
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    fragment DocFile on File {
      relativePath
      relativeDirectory
      absolutePath
      base
      name
    }
    query AllDocsFiles {
      reactDocs: allFile(filter: { absolutePath: { glob: "**/*.docs.js" } }) {
        edges {
          node {
            ...DocFile
          }
        }
      }
      reactExamples: allFile(filter: { absolutePath: { glob: "**/react-core/**/examples/!(*.styles).js" } }) {
        edges {
          node {
            ...DocFile
          }
        }
      }
      reactApi: allComponentMetadata(
        sort: {fields:[displayName], order: ASC}
        filter: {displayName: {ne: "index"}}
      ) {
        edges {
          node {
            fields {
              label
            }
            displayName
            description
            props {
              name
              type {
                value
                raw
              }
              required
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    // Pull in react-core docs
    const docsComponentPath = path.resolve(__dirname, './src/components/componentDocs');
    result.data.reactDocs.edges.forEach(({ node: doc }) => {
      const filePath = path.resolve(__dirname, '_repos/react-core/_docs', doc.base);

      let rawExamples = [];
      result.data.reactExamples.edges.forEach(({ node: example }) => {
        if (example.relativeDirectory.split('/').slice(0, 2).join('/') === doc.relativeDirectory) {
          // e.g. components/Alert/examples/DangerAlert.js
          let path = `../src/${example.relativePath}`;
          rawExamples.push(`{name: '${example.name}', path: '${path}', file: require('!!raw!${path}')}`);
        }
      });

      const content = `
      import React from 'react';
      import docs from '${doc.absolutePath}';
      import ComponentDocs from '${docsComponentPath}';
      const relativePath = '${doc.relativePath}';
      const rawExamples = [${rawExamples}];
      export default () => <ComponentDocs rawExamples={rawExamples} {...docs} />
      `;
      fs.outputFileSync(filePath, content);
      boundActionCreators.createPage({
        path: `/docs/react/${path.dirname(doc.relativePath).toLowerCase()}`,
        layout: 'docs',
        component: filePath
      });
    });
    result.data.reactExamples.edges.forEach(({ node: example }) => {
      const examplePath = `/docs/react/${path.dirname(example.relativePath).toLowerCase()}/${paramCase(example.name)}`;

      boundActionCreators.createPage({
        path: examplePath,
        component: example.absolutePath
      });
    });
    // Generate API pages for React
    result.data.reactApi.edges.forEach(({ node }) => {
      createPage({
        path: `docs/api/${node.displayName}`,
        layout: 'docs',
        component: path.resolve(`./src/templates/api.js`),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          name: node.displayName
        }
      });
    });
  });
};

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const CATEGORY_PAGE_REGEX = /^\/docs\/core\/(components|layouts|demos|utilities)\/$/;
  const CATEGORY_CHILD_PAGE_REGEX = /^\/docs\/core\/(components|layouts|demos|utilities)\/([A-Za-z0-9_-]+)/;
  const DEMO_PAGE_REGEX = /^\/demos\/([A-Za-z0-9_-]+)/;
  const GET_STARTED_PAGE_REGEX = /\/src\/pages\/get-started\//;
  const DOCS_PAGE = /\/docs\//;
  return new Promise((resolve, reject) => {
    const isCategoryChildPage = page.path.match(CATEGORY_CHILD_PAGE_REGEX);
    const isGetStartedPage = page.componentPath.match(GET_STARTED_PAGE_REGEX);
    const isDemoPage = page.path.match(DEMO_PAGE_REGEX);
    const isDocsPage = page.path.match(DOCS_PAGE);

    page.context.type = 'page';
    page.context.category = 'page';
    page.context.slug = '';
    page.context.name = '';
    page.context.title = '';
    page.layout = 'index';

    if (isGetStartedPage) {
      page.layout = 'get-started';
      createPage(page);
    } else if (isDemoPage) {
      createPage(page);
    } else if (isCategoryChildPage) {
      page.layout = 'docs';
      createPage(page);

      // create full demo page for each component
      const demoPage = Object.assign({}, page);
      demoPage.layout = 'demo';
      const nodePath = demoPage.path;
      demoPage.path = `${nodePath.substr(0, nodePath.length - 1)}-full/`;
      createPage(demoPage);
    } else if (isDocsPage) {
      page.layout = 'docs';
    }

    resolve();
  });
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  const oldCSSLoader = config._loaders.css;
  const pfStylesTest = /patternfly-next.*(components|layouts).*\.*css$/;
  config.removeLoader('css');
  if (
    oldCSSLoader.config.loaders &&
    oldCSSLoader.config.loaders.includes('postcss')
  ) {
    oldCSSLoader.config.loaders.splice(
      oldCSSLoader.config.loaders.indexOf('postcss'),
      1
    );
  }
  config
    .loader('pf-styles', {
      test: pfStylesTest,
      loaders: [
        'babel-loader',
        require.resolve('@patternfly/react-styles/loader')
      ]
    })
    .loader('css', {
      ...oldCSSLoader.config,
      exclude: pfStylesTest
    });

  config.loader('markdown-loader', current => {
    current.test = /\.md$/;
    current.loader = 'html-loader!markdown-loader';
    return current;
  });
  config.loader('html-loader', current => {
    current.test = /\.html$/;
    current.loader = 'html-loader';
    return current;
  });
  config.loader('handlebars-loader', current => {
    current.test = /\.hbs$/;
    current.loader = 'handlebars-loader';
    current.query = {
      partialDirs: COMPONENT_PATHS.concat(LAYOUT_PATHS)
        .concat(DEMO_PATH)
        .concat(UTILITIES_PATHS)
    };
    return current;
  });

  config.merge({
    resolve: {
      alias: resolveAliases
    },
    plugins: [
      new WebpackNotifierPlugin({
        title: 'PF-4',
        skipFirstNotification: true
      })
    ]
  });
  return config;
};

exports.modifyBabelrc = ({ stage, babelrc }) => {
  babelrc.plugins.push(require.resolve('babel-plugin-react-docgen'));
  return babelrc;
};