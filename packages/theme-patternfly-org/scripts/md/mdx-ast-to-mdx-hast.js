const toHAST = require('mdast-util-to-hast');
const detab = require('detab');
const normalize = require('mdurl/encode');
const all = require('mdast-util-to-hast/lib/all');
const { parseJSXAttributes } = require('./jsxAttributes');
const styleToObject = require('style-to-object');
const camelCaseCSS = require('camelcase-css');

let srcCounter = 0;

function mdxAstToMdxHast() {
  
  return (tree, file) => {
    const srcImports = [];

    function imageHandler(h, node) {
      const { src, ...rest } = node.props || {};
      const srcImport = `srcImport${srcCounter++}`;
      const props = {
        src: srcImport,
        alt: node.alt,
        title: node.title,
        ...rest
      };
      // Add import statement
      srcImports.push({
        type: 'import',
        value: `import ${srcImport} from '${(node.url || src).replace(/'/g, "\\'")}';`
      });
    
      return h(node, 'img', props);
    }

    function mdxExpression(h, node) {
      // Treat JSX <img> tags like commonmark ![]() image tags
      if (node.name === 'img') {
        node.props = node.attributes.reduce((acc, attr) => {
          acc[attr.name] = attr.value;
          return acc;
        }, {});
        if (typeof node.props.src === 'string') {
          return imageHandler(h, node);
        }
      }
      node.attributes.forEach(attr => {
        // style="backgroundcolor: black" -> style={{backgroundColor: "black"}}
        if (attr.name === 'style' && typeof attr.value === 'string') {
          const styleObject = {};
          styleToObject(attr.value, (name, value) => styleObject[camelCaseCSS(name)] = value);
          attr.value = {
            type: 'mdxValueExpression',
            value: JSON.stringify(styleObject)
          };
        }
    
        // class="my-class" -> className="my-class"
        if (attr.name === 'class') {
          attr.name = 'className';
        }
      });

      return Object.assign({}, node, {children: all(h, node)});
    }

    const handlers = {
      // `inlineCode` gets passed as `code` by the HAST transform.
      // This makes sure it ends up being `inlineCode`
      inlineCode(h, node) {
        return Object.assign({}, node, {
          type: 'element',
          tagName: 'code',
          properties: {},
          children: [
            {
              type: 'text',
              value: node.value
            }
          ]
        });
      },
      code(h, node) {
        const properties = {
          code: node.value ? detab(node.value + '\n').trim() : '',
          title: node.title
        };
        
        if (node.lang) {
          properties.lang = node.lang;
        }

        if (node.meta) {
          try {
            Object.entries(parseJSXAttributes(`<Component ${node.meta} />`))
              .forEach(([key, val]) => {
                properties[key] = val;
              }); 
          }
          catch(error) {
            file.fail(`Error parsing "${node.meta}": ${error}`);
          }
        }
        return Object.assign({}, node, {
          type: 'element',
          tagName: 'Example',
          properties,
          children: all(h, node)
        });
      },
      import(h, node) {
        return Object.assign({}, node, {
          type: 'import'
        });
      },
      export(h, node) {
        return Object.assign({}, node, {
          type: 'export'
        });
      },
      comment(h, node) {
        return Object.assign({}, node, {
          type: 'comment'
        });
      },
      image(h, node) {
        return imageHandler(h, node);
      },
      link(h, node) {
        const href = normalize(node.href || node.url);

        const properties = {};
        if (node.title !== null && node.title !== undefined) {
          properties.title = node.title;
        }
  
        if (href && href.startsWith('/')) {
          properties.to = href;
          
          return Object.assign({}, node, {
            type: 'element',
            tagName: 'PatternflyThemeLink',
            properties,
            children: all(h, node)
          });
        }
  
        properties.href = href;
        return h(node, 'a', properties, all(h, node));
      },
      mdxBlockElement(h, node) {
        return mdxExpression(h, node);
      },
      mdxSpanElement(h, node) {
        return mdxExpression(h, node);
      },
      mdxBlockExpression(h, node) {
        return Object.assign({}, node, {
          type: 'mdxBlockExpression'
        });
      },
      mdxSpanExpression(h, node) {
        return Object.assign({}, node, {
          type: 'mdxSpanExpression'
        });
      }
    };

    const hast = toHAST(tree, { handlers });

    hast.children.unshift(...srcImports);

    return hast;
  }
}

module.exports = mdxAstToMdxHast
