const { slugger } = require('../../helpers/slugger');
const visit = require('unist-util-visit');
const toText = require('hast-util-to-text')

// This transforms headers in markdown to AutoLinkHeader JSX components
function anchorHeader(tocCallback) {
  return tree => {
    const ids = {};
    const toc = [];
    visit(tree, 'element', node => {
      if (node.tagName.match(/h\d/)) {
        // Add a unique id for auto link headers
        const text = toText(node);
        node.properties.id = node.properties.id || slugger(text);
        const idNum = ids[node.properties.id];
        if (idNum !== undefined) {
          ids[node.properties.id] += 1;
          node.properties.id += `-${idNum}`;
        }
        else {
          ids[node.properties.id] = 0;
        }
        // Add to TOC for indexing
        let tocItem = {
          text,
          id: node.properties.id
        };
        if (node.tagName === 'h2') {
          toc.push(tocItem);
        }
        else if (node.tagName === 'h3') {
          // Only need to support up to h3s, so this array structure works fine
          const lastTOC = toc[toc.length - 1];
          if (Array.isArray(lastTOC)) {
            lastTOC.push(tocItem);
          }
          else {
            toc.push([tocItem]);
          }
        }

        node.properties.size = node.tagName;
        node.properties.className = node.properties.className || '';
        node.properties.className += node.properties.className ? ' ' : '';
        node.properties.className += `ws-title ws-${node.tagName}`;
        node.tagName = 'AutoLinkHeader';
      }
    });

    tocCallback(toc);
  }
}

module.exports = anchorHeader;
