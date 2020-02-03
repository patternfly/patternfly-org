const visit = require('unist-util-visit');
var { render } = require('html-formatter');
const { getId } = require('./getId');

module.exports = {
  // Map example page urls to HTML
  extractExamples: (mdxAST, hbsInstance, fileName) => {
    const examples = {};
    
    if (!mdxAST) {
      return examples;
    }

    visit(mdxAST, 'code', node => {
      let id = 'no-id';
      if (node.meta) {
        if (node.meta.includes('noLive')) {
          // Don't create fullscreen pages for non-live code
          return;
        }
        const match = node.meta.match(/title=(\S*)/);
        if (match) {
          id = getId(match[1]);
        }
      }
      if (node.lang === 'hbs') {
        try {
          const html = hbsInstance.compile(node.value)({});
          // Add rendered HTML to make fullscreen page from
          examples[id] = render(` ${html} `).replace(/\t/g, '  ');
        }
        catch(error) {
          console.error(`\x1b[31m${fileName}: ${error} for PatternFly example ${id}\x1b[0m`)
        }
      }
      else if (node.lang === 'js') {
        node.lang = 'jsx';
        // Add rendered MDX body to make fullscreen page from
        examples[id] = node.value;
      }
    });

    return examples;
  },
}

// TODO: Write some tests for example MDXAsts
