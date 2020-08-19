import versions from '../versions.json';
import { overpass } from './fonts';

// TODO: Use a template that has our assets.
export const getStaticParams = (title, html) => ({
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

// TODO: Make React examples work and use a template that has our assets.
export const getReactParams = (title, code, scope) => {
  let toRender = 'Example';
  const classNameMatch = /class (\w+) /.exec(code);
  const equalityMatch = /(\w+) =/.exec(code);
  if (classNameMatch) {
    toRender = classNameMatch[1];
  } else if (equalityMatch) {
    toRender = equalityMatch[1];
    code = code.replace(/(\w+) =/, `const ${toRender} =`)
  }

  // import avatarImg from './examples/avatarImg.svg';
  const svgRegex = /import\s+(\w[\w\d]*).*\.svg['"]/g;
  let match;
  while ((match = svgRegex.exec(code))) {
    const svgToken = match[1];
    code = code.replace(match[0], `const ${svgToken} = "${scope[svgToken]}"`);
  }

  const dependencies = {};

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
