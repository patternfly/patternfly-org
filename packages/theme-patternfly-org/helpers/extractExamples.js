const visit = require('unist-util-visit');
const { render } = require('html-formatter');
const { getId } = require('./getId');

module.exports = {
  // Map example page urls to HTML
  extractExamples: (mdxAST, hbsInstance, fileName) => {
    const examples = {};
    
    if (!mdxAST) {
      return examples;
    }

    visit(mdxAST, 'code', (node, _index, parent) => {
      let id = 'no-id';
      let wrapperTag;
      if (node.meta) {
        if (node.meta.includes('noLive')) {
          // Don't create fullscreen pages for non-live code
          return;
        }

        let match = node.meta.match(/title=(\S*)/);
        if (match) {
          id = getId(match[1]);
        }
        match = node.meta.match(/wrapperTag=(\S*)/);
        if (match) {
          wrapperTag = match[1].toLowerCase();
        }
      }

      if (id === 'no-id') {
        // Starting from node, look up for h3s
        let startLooking = false;
        for (let i = parent.children.length - 1; i >= 0; i--) {
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
              id = getId(child.children[0].value);
              break;
            }
          }
        }
      }

      if (node.lang === 'hbs') {
        try {
          const html = hbsInstance.compile(node.value)({});
          // Add rendered HTML to make fullscreen page from
          examples[id] = {
            code: render(` ${html} `).replace(/\t/g, '  '),
            wrapperTag
          };
        }
        catch(error) {
          console.error(`\x1b[31m${fileName}: ${error} for PatternFly example ${id}\x1b[0m`)
        }
      }
      else if (node.lang === 'js') {
        node.lang = 'jsx';
        // Add rendered MDX body to make fullscreen page from
        examples[id] = {
          code: node.value,
          wrapperTag
        };
      }
    });

    return examples;
  }
}
