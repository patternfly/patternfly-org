const {serializeTags} = require('remark-mdx/lib/serialize/mdx-element');
const serializeMdxExpression = require('remark-mdx/lib/serialize/mdx-expression');
const toH = require('hast-to-hyperscript');
const {toTemplateLiteral} = require('@mdx-js/util');
const acorn = require('acorn');
const jsx = require('acorn-jsx');
const { capitalize } = require('theme-patternfly-org/helpers/capitalize');

const jsxParser = acorn.Parser.extend(jsx());

function toJSX(node, parentNode = {}, options = {}) {
  options.indent = options.indent ||2;
  if (node.type === 'root') {
    return serializeRoot(node, options);
  }

  if (node.type === 'element') {
    return serializeElement(node, options, parentNode);
  }

  // Wraps text nodes inside template string, so that we don't run into escaping issues.
  if (node.type === 'text') {
    return serializeText(node, options, parentNode);
  }

  if (node.type === 'mdxBlockExpression' || node.type === 'mdxSpanExpression') {
    return serializeMdxExpression(node);
  }

  if (node.type === 'mdxBlockElement' || node.type === 'mdxSpanElement') {
    return serializeComponent(node, options, parentNode);
  }

  if (node.type === 'import') {
    return serializeEsSyntax(node);
  }
}

function compile(options = {}) {
  this.Compiler = function (tree) {
    return toJSX(tree, {}, options);
  }
}

function serializeRoot(node, options) {
  const { getRelPath, getPageData } = options;
  const pageData = {...getPageData()};
  const exportName = pageData.slug.replace(/[\/-](.)?/g, (_, match) => capitalize(match)) + 'Docs';
  options.exportName = exportName;
  const groups = {
    import: [],
    rest: []
  };

  for (const child of node.children) {
    let kind = 'rest'

    if (child.type === 'import') {
      kind = child.type
    }

    groups[kind].push(child)
  }

  const importStatements = groups.import
    .map(childNode => toJSX(childNode, node))
    .map(imp => imp.replace(/(['"])\./g, (_, match) => `${match}${getRelPath()}`))
    .join('\n')

  // https://astexplorer.net/#/gist/9c531dd372dfc57e194c13c2889d31c3/03f2d6e889db1a733c6a079554e8af7784863739
  const importSpecifiers = jsxParser.parse(importStatements, { sourceType: 'module' }).body
    .map(node => node.specifiers)
    .flat(1)
    .map(spec => spec.local ? spec.local.name : null)
    .filter(localName => !/srcImport\d+/.test(localName)) // Images in MD like [!img](./src)
    .filter(Boolean)
    .join(',\n  ');

  const childNodes = groups.rest
    .map(childNode => toJSX(childNode, node, options))
    .join('');

  return `import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
${importStatements}

export const ${exportName} = ${JSON.stringify(pageData, null, 2)};
${exportName}.liveContext = {
  ${importSpecifiers}
};
${exportName}.Component = () => (
  <React.Fragment>${childNodes.replace(/\n\s*\n/g, '\n')}
  </React.Fragment>
);
`;
}

function serializeElement(node, options) {
  const { indent, exportName } = options;
  const {type, props} = toH(
    fakeReactCreateElement,
    Object.assign({}, node, {children: []}),
    {prefix: false}
  );
  const content = serializeChildren(node, {...options});

  delete props.key;

  const srcImport = node.properties.src;
  if (type === 'img') {
    delete props.src;
  }
  const spread = Object.keys(props).length === 0
    ? null
    : JSON.stringify(props);

  const indentText = '  '.repeat(indent);

  return `
${indentText}<${type}${
  type === 'Example' ? ` {...${exportName}}` : ''}${
  type === 'img' && srcImport ? ` src={${srcImport}}` : ''}${
  spread ? ` {...${spread}}` : ''}>
${indentText}  ${content}
${indentText}</${type}>`;
}

function serializeComponent(node, options) {
  let content = serializeChildren(node, options);
  const tags = serializeTags(
    Object.assign({}, node, {children: content ? ['!'] : []})
  );

  if (node.type === 'mdxBlockElement' && content) {
    content = '\n' + content + '\n';
  }

  const indentText = '  '.repeat(options.indent);
  return `${indentText}${tags.open}${content}${tags.close || ''}`;
}

function serializeText(node, options, parentNode) {
  const preserveNewlines = options.preserveNewlines;
  // Don't wrap newlines unless specifically instructed to by the flag,
  // to avoid issues like React warnings caused by text nodes in tables.
  const shouldPreserveNewlines = preserveNewlines || parentNode.tagName === 'p';

  if (node.value === '\n' && !shouldPreserveNewlines) {
    return node.value;
  }

  return toTemplateLiteral(node.value);
}

function serializeEsSyntax(node) {
  return node.value;
}

function serializeChildren(node, options) {
  const children = node.children || [];
  const childOptions = Object.assign({}, options, {
    // Tell all children inside <pre> tags to preserve newlines as text nodes
    preserveNewlines: options.preserveNewlines || node.tagName === 'pre',
    indent: options.indent + 1
  });

  const indentText = '  '.repeat(options.indent + 1);

  return children
    .map(childNode => toJSX(childNode, node, childOptions))
    .join(`\n${indentText}`);
}

// We only do this for the props, so we’re ignoring children.
function fakeReactCreateElement(name, props) {
  return {
    type: name,
    props: props,
    // Needed for `toH` to think this is React.
    key: null,
    _owner: null
  }
}

module.exports = compile;
