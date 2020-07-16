const visit = require('unist-util-visit');
const { render } = require('html-formatter');
const { getId } = require('./getId');
const { slugger } = require('./slugger');

// Used in core's dev:lite
function getExampleClassName(source, componentType, componentName) {
  return `ws-${source}-${componentType}-${componentName}`;
}

// Used in core's dev:lite
function getExampleId(source, componentType, componentName, exampleTitle) {
  return `ws-${source}-${componentType}-${componentName}-${slugger(exampleTitle)}`;
}

module.exports = {
  // Map example page urls to HTML
  extractExamples: mdxAST => {
    const examples = {};
    
    if (!mdxAST) {
      return examples;
    }

    visit(mdxAST, 'code', (node, _index, parent) => {
      if (node.meta && node.meta.includes('noLive')) {
        // Don't create fullscreen pages for non-live code
        return;
      }

      let title = 'Untitled example';
      
      // Starting from node, look up for h3s
      let startLooking = false;
      for(let i = parent.children.length - 1; i > 0; i--) {
        const child = parent.children[i];
        if (child === node) {
          startLooking = true;
        }
        else if (startLooking) {
          if (
            child.type === 'heading' &&
            child.depth === 3 &&
            child.children && 
            child.children[0].value
          ) {
            title = child.children[0].value;
            break;
          }
        }
      }
      examples[title] = node.value;
    });

    return examples;
  },
  getExampleClassName,
  getExampleId
}

// TODO: Write some tests for example MDXAsts
