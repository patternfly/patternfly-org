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
const glob = require('glob');
const findInFiles = require('find-in-files');
// const styleFinder = require('./scripts/find-react-styles');

// Map to handlebars partial files for Core
let partialsToLocationsMap = null;

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  const reactComponentPathRegEx = /\/documentation\/react\/.*(components|layouts|demos)\//;
  const coreComponentPathRegEx = /\/documentation\/core\/.*(components|layouts|demos|upgrade-examples|utilities)\//;
  const isSitePage = node.internal.type === 'SitePage';
  if (isSitePage) {
    if (reactComponentPathRegEx.test(node.path)) {
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
    } else if (coreComponentPathRegEx.test(node.path)) {
      createNodeField({
        node,
        name: 'label',
        value: pascalCase(node.path.split('/').pop())
      });
      createNodeField({
        node,
        name: 'type',
        value: node.path.split('/')[3]
      });
    }
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const markdownPageTemplate = path.resolve(`src/templates/markdownPageTemplate.js`)
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
        docs: allFile(filter: { sourceInstanceName: { eq: "react" }, absolutePath: { glob: "**/*.docs.js" } }) {
          edges {
            node {
              ...DocFile
            }
          }
        }
        examples: allFile(filter: { sourceInstanceName: { eq: "react" }, absolutePath: { glob: "**/examples/!(*.styles).js" } }) {
          edges {
            node {
              ...DocFile
            }
          }
        }
        exampleImages: allFile(filter: { sourceInstanceName: { eq: "react" }, extension: { regex: "/(png|svg|jpg)/" } }) {
          edges {
            node {
              ...DocFile
            }
          }
        }
        coreExamples: allFile(filter: { sourceInstanceName: { eq: "core" }, absolutePath: { glob: "**/examples/index.js" } }) {
          edges {
            node {
              ...DocFile
            }
          }
        }
        markdownPages: allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/patternfly-4/content/**"}, frontmatter: {path: {ne: null}}}) {
          edges {
            node {
              fileAbsolutePath
              frontmatter {
                path
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return reject(result.errors);
      }
      const { docs, examples, exampleImages, coreExamples, markdownPages} = result.data;
      const docExports = [];
      const docsComponentPath = path.resolve(__dirname, './src/components/_react/Documentation');
      docs.edges.forEach(({ node: doc }) => {
        const filePath = path.resolve(__dirname, '.tmp', doc.base);

        const rawExamples = [];
        const getPackage = pkg => doc.absolutePath.indexOf(pkg) !== -1 && pkg;
        const packageDir = getPackage('react-core') || getPackage('react-charts') || getPackage('react-table');
        examples.edges.forEach(({ node: example }) => {
          if (
            example.relativeDirectory
              .split('/')
              .slice(0, 3)
              .join('/') === doc.relativeDirectory
          ) {
            const examplePath = `../_repos/${packageDir}/${example.relativePath}`;
            rawExamples.push(`{name: '${example.name}', path: '${examplePath}', file: require('!!raw-loader!${examplePath}')}`);
          }
        });
        const allImages = [];
        exampleImages.edges.forEach(({ node: image }) => {
          const imagePath = `../_repos/react-core/${image.relativePath}`;
          allImages.push(`{name: '${image.base}', file: require('${imagePath}')}`);
        });

        const content = `
        import React from 'react';
        import docs from '${doc.absolutePath}';
        import Documentation from '${docsComponentPath}';

        const rawExamples = [${rawExamples}];
        const images = [${allImages}];

        export const ${doc.base.split('.')[0].toLowerCase()}_docs = docs;
        export const ${doc.base.split('.')[0].toLowerCase()}_package = '${packageDir}';

        export default () => <Documentation rawExamples={rawExamples} images={images} {...docs} />;
        `;

        docExports.push(
          `export { ${doc.base.split('.')[0].toLowerCase()}_docs, ${doc.base
            .split('.')[0]
            .toLowerCase()}_package } from './${doc.base}';`
        );

        fs.outputFileSync(filePath, content);
        const shortenedPath = doc.relativePath.split('/').slice(1).join('/');
        console.log(`creating page for: /documentation/react/${path.dirname(shortenedPath).toLowerCase()}`);
        createPage({
          path: `/documentation/react/${path.dirname(shortenedPath).toLowerCase()}`,
          component: filePath
        });
      });

      const indexFilePath = path.resolve(__dirname, '.tmp', 'index.js');
      fs.writeFileSync(indexFilePath, docExports.join('\n'));

      examples.edges.forEach(({ node: example }) => {
        const shortenedPath = example.relativePath.split('/').slice(1).join('/');
        const examplePath = `/documentation/react/${path.dirname(shortenedPath).toLowerCase()}/${paramCase(example.name)}`;
        console.log(`creating page for: ${examplePath}`);
        createPage({
          path: examplePath,
          layout: 'example',
          component: example.absolutePath
        });
      });

      coreExamples && coreExamples.edges.forEach(({ node }) => {
        const shortenedPath = node.relativePath.split('/').slice(2, 4).join('/').toLowerCase();
        const examplePath = `/documentation/core/${shortenedPath}`;

        console.log(`creating page for: ${examplePath}`);
        createPage({
          path: examplePath,
          component: path.resolve(__dirname, node.absolutePath)
        });
        // also create a full demo page for each component
        console.log(`creating page for: ${examplePath}-full`);
        createPage({
          path: `${examplePath}-full`,
          component: path.resolve(__dirname, node.absolutePath)
        });
      });

      markdownPages.edges.forEach(({ node }) => {
        console.log(`creating page for: ${node.frontmatter.path}`);
        createPage({
          path: node.frontmatter.path,
          component: markdownPageTemplate,
          context: {}, // additional data can be passed via context
        })
      });
    });
    resolve();
  })
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions, plugins, getConfig }) => 
  new Promise((resolve, reject) => {
    if (partialsToLocationsMap === null) {
      partialsToLocationsMap = {};
      glob(path.resolve(__dirname, './_repos/core/src/patternfly/**/*.hbs'), { ignore: '**/examples/**' }, (err, files) => {
        files.forEach(file => {
          const fileNameArr = file.split('/');
          const fileName = fileNameArr[fileNameArr.length - 1].slice(0, -4);
          partialsToLocationsMap[fileName] = file;
        });
        continueWebpackConfig({ stage, loaders, actions, plugins, getConfig });
        resolve();
      });
    } else {
      continueWebpackConfig({ stage, loaders, actions, plugins, getConfig });
      resolve();
    }
});

const continueWebpackConfig = ({ stage, loaders, actions, plugins, getConfig }) => {
  const pfStylesTest = /patternfly.*(components|layouts|utilities).*\.css$/;
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
            extensions: '.hbs',
            partialResolver(partial, callback) {
              if (partialsToLocationsMap[partial]) {
                callback(null, partialsToLocationsMap[partial]);
              } else {
                callback(new Error(`Could not find partial: ${partial}`), '');
              }
            },
            helperDirs: path.resolve(__dirname, './_repos/core/build/helpers')
          },
          loader: 'handlebars-loader'
        }
      ]
    },
    resolve: {
      alias: {
        '@siteComponents': path.resolve(__dirname, './src/components/_core'),
        '@components': path.resolve(__dirname, './_repos/core/src/patternfly/components'),
        '@layouts': path.resolve(__dirname, './_repos/core/src/patternfly/layouts'),
        '@demos': path.resolve(__dirname, './_repos/core/src/patternfly/demos'),
        '@project': path.resolve(__dirname, './_repos/core/src')
      }
    },
    resolveLoader: {
      alias: { raw: 'raw-loader' }
    }
  });

  const configAfter = getConfig();
  // configAfter.module.rules = configAfter.module.rules.filter(rule => rule.oneOf === undefined);
  const minimizer = [
    plugins.minifyJs({
      terserOptions: {
        // keep function names so that we can find the corresponding example components in src/components/componentDocs/componentDocs.js
        keep_fnames: true
      }
    }),
    plugins.minifyCss()
  ];
  if (!configAfter.optimization) {
    configAfter.optimization = {};
  }
  configAfter.optimization.minimizer = minimizer;

  actions.replaceWebpackConfig(configAfter);
};
