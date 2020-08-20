const visit = require('unist-util-visit');

function exampleCaptions() {
  return tree => {
    visit(tree, 'code', (node, _index, parent) => {
      let title = 'Untitled example';
      let caption = [];

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
            parent.children.splice(i, 1);
            break;
          }
          else {
            caption.unshift(child);
            parent.children.splice(i, 1);
          }
        }
      }

      node.title = title;
      node.children = caption;
    });
  }
}

module.exports = exampleCaptions;
