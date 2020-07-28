const visit = require('unist-util-visit');

function exampleCaptions() {
  return tree => {
    visit(tree, 'element', (node, _index, parent) => {
      if (node.tagName !== 'pre') {
        return;
      }
      const codeNode = node.children[0];
      if (codeNode.tagName !== 'code' || codeNode.properties.title) {
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
            child.tagName === 'h3' &&
            child.children && 
            child.children[0].value
          ) {
            title = child.children[0].value;
            parent.children.splice(i, 1);
            break;
          }
        }
      }

      codeNode.properties.title = title;
    });
  }
}

module.exports = exampleCaptions;