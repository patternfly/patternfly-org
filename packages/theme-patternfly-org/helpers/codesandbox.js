const versions  = require('../versions.json');
const overpass = require('./fonts');
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

// Support 3 formats for example identifiers
function getExampleIdentifier(code) {
  // 1. class Example {}
  const classMatch = code.match(/^class ([0-9A-Za-z_$]+)/m);
  if (classMatch) {
    return [code, classMatch[1]];
  }
  // 2. function Example() { return <jsx /> }
  const functionMatch = code.match(/^function ([0-9A-Za-z_$]+)/m);
  if (functionMatch) {
    return [code, functionMatch[1]];
  }
  // 3. Example = () => <jsx />
  // While technically an arrow function could take args, we won't support it
  const constFnRegex = /^([0-9A-Za-z_$]+)\s*=\s*\(\s*\)\s*=>/m;
  const constFnMatch = code.match(constFnRegex);
  if (constFnMatch) {
    code = code.replace(constFnRegex, `const ${constFnMatch[1]} = () =>`)
    return [code, constFnMatch[1]];
  }

  return [code, null];
}

// TODO: Make React examples work and use a template that has our assets.
function getReactParams(title, code, scope) {
  let [code2, toRender] = getExampleIdentifier(code);
  code = code2;

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
  <div id="root"></div>
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
  getExampleIdentifier
};
