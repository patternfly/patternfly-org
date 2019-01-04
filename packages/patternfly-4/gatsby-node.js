/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const fs = require('fs-extra');
const pascalCase = require('pascal-case');
const paramCase = require('param-case');

exports.onCreateNode = ({ node, actions }) => {
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

exports.createPages = ({ graphql, actions }) => {
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
        createPage({
          path: `/${path.dirname(doc.relativePath).toLowerCase()}`,
          component: filePath
        });
      });

      const indexFilePath = path.resolve(__dirname, '.tmp', 'index.js');
      fs.writeFileSync(indexFilePath, docExports.join('\n'));

      examples.edges.forEach(({ node: example }) => {
        const examplePath = `/${path.dirname(example.relativePath).toLowerCase()}/${paramCase(example.name)}`;

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