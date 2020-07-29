const path = require('path');
const glob = require('glob');
const { sourceMD, writeIndex } = require('theme-patternfly-org/scripts/md/parseMD');

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
  'usage-and-behavior'
);

// Source core md
const coreMDPath = require
  .resolve('@patternfly/patternfly/package.json')
  .replace('package.json', 'docs');

sourceMD(
  glob.sync(path.join(coreMDPath, '/**/examples/*.md'), { ignore: path.join(coreMDPath, '/pages/**') }),
  'core'
);

// Source react md
const reactMDPath = require
  .resolve('@patternfly/react-core/package.json')
  .replace('package.json', 'src');

sourceMD(
  glob.sync(path.join(reactMDPath, '/**/examples/*.md')),
  'react'
);

const reactTableMDPath = require
  .resolve('@patternfly/react-table/package.json')
  .replace('package.json', 'src');

sourceMD(
  glob.sync(path.join(reactTableMDPath, '/**/examples/*.md')),
  'react'
);

writeIndex();
