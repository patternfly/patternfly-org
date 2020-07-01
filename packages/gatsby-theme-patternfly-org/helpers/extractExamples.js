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
  extractExamples: (mdxAST, hbsInstance, fileName) => {
    const examples = {};
    
    if (!mdxAST) {
      return examples;
    }

    visit(mdxAST, 'code', node => {
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
  },
  getExampleClassName,
  getExampleId
}

// TODO: Write some tests for example MDXAsts
