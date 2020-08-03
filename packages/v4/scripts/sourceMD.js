const path = require('path');
const glob = require('glob');
const { sourceMD, sourceProps, writeIndex } = require('theme-patternfly-org/scripts/md/parseMD');

// Source org md
sourceMD(
  glob.sync(path.join(__dirname, '../src/content/contribute/**/*.md')),
  'pages-contribute'
);

sourceMD(
  glob.sync(path.join(__dirname, '../src/content/get-started/**/*.md')),
  'pages-get-started'
);

sourceMD(
  glob.sync(path.join(__dirname, '../src/content/design-snippets/**/*.md')),
  'design-snippets'
);

sourceMD(
  glob.sync(path.join(__dirname, '../src/content/design-guidelines/**/*.md')),
  'design-guidelines'
);

// Source core md
const coreMDPath = require
  .resolve('@patternfly/patternfly/package.json')
  .replace('package.json', 'docs');

sourceMD(
  glob.sync(path.join(coreMDPath, '/**/examples/*.md'), { ignore: path.join(coreMDPath, '/pages/**') }),
  'core'
);

// Source react props
const reactPath = require
  .resolve('@patternfly/react-core/package.json')
  .replace('package.json', 'src');

sourceProps(
  glob.sync(path.join(reactPath, '/**/*.tsx'), { ignore: '**/*.test.tsx' }),
  'react'
);

// Source react md
sourceMD(
  glob.sync(path.join(reactPath, '/**/examples/*.md')),
  'react'
);

// Source charts props
const reactChartsPath = require
  .resolve('@patternfly/react-charts/package.json')
  .replace('package.json', 'src');

sourceProps(
  glob.sync(path.join(reactChartsPath, '/**/*.tsx'), { ignore: '**/*.test.tsx' }),
  'react'
);

const reactChartsMDPath = require
  .resolve('@patternfly/react-charts/package.json')
  .replace('package.json', 'src');

sourceMD(
  glob.sync(path.join(reactChartsMDPath, '/**/examples/*.md')),
  'react'
);

writeIndex();
