const visit = require('unist-util-visit');

// This transforms headers in markdown to AutoLinkHeader JSX components
function anchorHeader() {
  return tree => {
    visit(tree, 'element', node => {
      if (node.tagName.match(/h\d/)) {
        node.properties.size = node.tagName;
        node.properties.className = node.properties.className || '';
        node.properties.className += node.properties.className ? ' ' : '';
        node.properties.className += `ws-title ws-${node.tagName}`;
        node.tagName = 'AutoLinkHeader';
      }
    });
  }
}

module.exports = anchorHeader;
