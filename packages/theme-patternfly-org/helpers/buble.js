const { generate, baseGenerator } = require('astring');
const { jsxParser } = require('./acorn');

const generator = Object.assign({}, baseGenerator, {
  JSXElement(node, state) {
    state.write('React.createElement(');
    this.JSXOpeningElement(node.openingElement, state);
    for (var i = 0; i < node.children.length; i++) {
      var child = node.children[i];
      if (child.type !== 'JSXText') {
        state.write(',');
      }
      this[child.type](child, state);
    }
    state.write(')');
  },
  JSXOpeningElement(node, state) {
    this[node.name.type](node.name, state, node.name.name && node.name.name[0] === node.name.name[0].toLowerCase());
    state.write(',{');
    for (var i = 0; i < node.attributes.length; i++) {
      var attr = node.attributes[i];
      this[attr.type](attr, state);
      if (i !== node.attributes.length - 1) {
        state.write(',');
      }
    }
    state.write('}');
  },
  JSXIdentifier(node, state, escape) {
    if (escape) {
      state.write(JSON.stringify(node.name));
    }
    else {
      state.write(node.name);
    }
  },
  JSXMemberExpression(node, state) {
    this[node.object.type](node.object, state);
    state.write('.');
    this[node.property.type](node.property, state);
  },
  JSXAttribute(node, state) {
    this[node.name.type](node.name, state, true);
    state.write(':');
    if (node.value) {
      this[node.value.type](node.value, state);
    }
    else {
      state.write('true');
    }
  },
  JSXExpressionContainer(node, state) {
    this[node.expression.type](node.expression, state);
  },
  JSXText(node, state) {
    if (node.value.trim() === '') {
      node.value = null;
    }
    if (node.value) {
      state.write(',"');
      state.write(node.value.replace(/"/g, '\\"').replace(/^\s+/, '').replace(/\s*\n\s*/g, ''));
      state.write('"');
    }
  },
  JSXSpreadAttribute(node, state) {
    state.write('...(');
    if (node.argument.type === 'LogicalExpression') {
      this[node.argument.left.type](node.argument.left, state);
      state.write(' ');
      state.write(node.argument.operator);
      state.write(' ');
      this[node.argument.right.type](node.argument.right, state);
    }
    else {
      this[node.argument.type](node.argument, state);
    }
    state.write(')');
  },
  JSXFragment(node, state) {
    this.JSXElement({
      openingElement: {
        attributes: [],
        name: {
          type: 'JSXIdentifier',
          name: 'React.Fragment'
        }
      },
      children: node.children
    }, state);
  },
  FieldDefinition(node, state) {
    this[node.key.type](node.key, state);
    state.write('=');
    this[node.value.type](node.value, state);
    state.write(';');
  },
  JSXEmptyExpression(_node, state) {
    state.write('null');
  }
});

function transform(code) {
  const ast = jsxParser.parse(code, {
    sourceType: 'module',
    allowReturnOutsideFunction: true
  });
  code = generate(ast, { generator });
  return { code };
}

module.exports = {
  transform
};
