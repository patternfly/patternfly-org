const versions  = require('../versions.json');
const overpass = require('./fonts');
const { jsxParser } = require('../helpers/acorn');
const { capitalize } = require('./capitalize');

// TODO: Use a template that has our assets.
const getStaticParams = (title, html) => ({
  files: {
    'index.html': {
      content: `<!DOCTYPE html>
<html lang="en" class="pf-m-redhat-font">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="fonts.css" />
  <!-- Include latest PatternFly CSS via CDN -->
  <link 
    rel="stylesheet" 
    href="https://unpkg.com/@patternfly/patternfly/patternfly.css" 
    crossorigin="anonymous"
  >
  <link rel="stylesheet" href="style.css" />
  <title>PatternFly ${title} CodeSandbox Example</title>
</head>
<body>
  ${html}
</body>
</html>`,
    },
    'package.json': {
      content: {},
    },
    'style.css': {
      content: ''
    },
    'fonts.css': {
      content: overpass
    },
    'sandbox.config.json': {
      content: { template: 'static' }
    }
  },
  template: 'static',
});

// Allow 3 formats for example identifiers
// 1. Example = () => { [some logic] return <jsx />; }
// 2. class Example {}
// 3. function Example() { return <jsx /> }
const allowedIdentifiers = [
  'ClassDeclaration',
  'FunctionDeclaration',
  'ExpressionStatement'
];
function getExampleDeclaration(code) {
  return jsxParser.parse(code, { sourceType: 'module' })
    .body
    .find(node => allowedIdentifiers.includes(node.type));
}

function prettyExampleCode(title, code, declaration) {
  // Create identifier from title
  const ident = capitalize(
    title
      .replace(/^[^A-Za-z]/, '')
      .replace(/\s+([a-z])?/g, (_, match) => match ? capitalize(match) : '')
      .replace(/[^A-Za-z0-9_]/g, '')
  );
  const jsxBlock = code.substring(declaration.start, declaration.end);
  if (jsxBlock.includes('\n')) {
    // Make pretty
    return code.replace(jsxBlock, `${ident} = () => (\n  ${
      jsxBlock
        .replace(/\n/g, '\n  ')
        .replace(/;[ \t]*$/, '')
      }\n)`);
  }
  else {
    return code.replace(jsxBlock, `${ident} = () => ${jsxBlock}`);
  }
}

// TODO: Make React examples work and use a template that has our assets.
function getReactParams(title, code, scope) {
  let toRender = null;
  try {
    let declaration = getExampleDeclaration(code);
    if (declaration.type === 'ExpressionStatement') {
      if (!declaration.expression.left) {
        code = prettyExampleCode(title, code, declaration);
        declaration = getExampleDeclaration(code);
      }
      const jsxString = code.substring(declaration.start, declaration.end);
      code = code.replace(jsxString, `const ${jsxString}`);
      if (declaration.expression.type === 'AssignmentExpression') {
        toRender = declaration.expression.left.name;
      }
    }
    else if (declaration.id) {
      toRender = declaration.id.name;
    }
  }
  catch (err) {
    // Ignore
  }

  // import avatarImg from './examples/avatarImg.svg';
  const svgRegex = /import\s+(\w[\w\d]*).*\.svg['"]/g;
  let match;
  while ((match = svgRegex.exec(code))) {
    const svgToken = match[1];
    code = code.replace(match[0], `const ${svgToken} = "${scope[svgToken]}"`);
  }

  const dependencies = {
    '@patternfly/react-core': versions.Releases[0].versions['@patternfly/react-core']
  };

  Object.entries(versions.Releases[0].versions)
    .filter(([pkg]) => code.includes(pkg))
    .forEach(([pkg, version]) => dependencies[pkg] = version);

  return {
    files: {
      'index.html': {
        content: `<!DOCTYPE html>
<html lang="en" class="pf-m-redhat-font">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>PatternFly-React ${title} CodeSandbox Example</title>
  </head>
<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <div id="root" style="height:100%"></div>
</body>
</html>`,
      },
      'index.js': {
        content: `import ReactDOM from 'react-dom';
import "@patternfly/react-core/dist/styles/base.css";
import './fonts.css';

${code}

const rootElement = document.getElementById("root");
ReactDOM.render(<${toRender} />, rootElement);`
      },
      'fonts.css': {
        content: overpass
      },
      'package.json': {
        content: {
          dependencies: {
            ...dependencies,
            'react': '^16.8.0',
            'react-dom': '^16.8.0'
          }
        },
      },
      'sandbox.config.json': {
        content: { template: 'create-react-app' }
      }
    },
  }
}

module.exports = {
  getReactParams,
  getStaticParams,
  getExampleDeclaration,
  prettyExampleCode
};
