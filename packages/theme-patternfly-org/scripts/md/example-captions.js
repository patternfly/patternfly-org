const visit = require('unist-util-visit');
const remove = require('unist-util-remove');

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
            parent.children[i].needsDeletion = true;
            break;
          }
          else {
            caption.unshift(child);
            parent.children[i].needsDeletion = true;
          }
        }
      }

      node.title = title;
      node.children = caption;
    });
    remove(tree, node => node.needsDeletion);
  }
}

module.exports = exampleCaptions;
