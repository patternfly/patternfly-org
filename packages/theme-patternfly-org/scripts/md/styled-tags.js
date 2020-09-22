const visit = require('unist-util-visit');

const styledMdTags = [
  'p',
  'ul',
  'ul',
  'ul',
  'ol',
  'li',
  'dl',
  'blockquote',
  'small',
  'hr',
  'dt',
  'code',
  'table',
  'img'
];

function styledTags() {
  return tree => {
    visit(tree, 'element', node => {
      if (styledMdTags.includes(node.tagName)) {
        node.properties.className = node.properties.className || '';
        node.properties.className += node.properties.className ? ' ' : '';
        node.properties.className += `ws-${node.tagName}`;
      }
    });
  }
}

module.exports = styledTags;
