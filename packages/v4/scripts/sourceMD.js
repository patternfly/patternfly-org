const path = require('path');
const glob = require('glob');
const { sourceMD, sourceProps, writeIndex } = require('theme-patternfly-org/scripts/md/parseMD');

// Content md
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

// Theme pages
const themePagesPath = require
  .resolve('theme-patternfly-org/package.json')
  .replace('package.json', 'pages');

sourceMD(
  glob.sync(path.join(themePagesPath, '*.md')),
  'pages-overview'
);

// Core MD
const coreDocsPath = require
  .resolve('@patternfly/patternfly/package.json')
  .replace('package.json', 'docs');

sourceMD(
  glob.sync(path.join(coreDocsPath, '/**/examples/*.md'), { ignore: path.join(coreDocsPath, '/pages/**') }),
  'core'
);

// React props
const reactCorePath = require
  .resolve('@patternfly/react-core/package.json')
  .replace('package.json', 'src');

sourceProps(
  glob.sync(path.join(reactCorePath, '/**/*.tsx'), { ignore: '**/*.test.tsx' }),
  'react'
);

// React MD
sourceMD(
  glob.sync(path.join(reactCorePath, '/**/examples/*.md')),
  'react'
);

// Charts props
const reactChartsPath = require
  .resolve('@patternfly/react-charts/package.json')
  .replace('package.json', 'src');

sourceProps(
  glob.sync(path.join(reactChartsPath, '/**/*.tsx'), { ignore: '**/*.test.tsx' }),
  'react'
);

// Charts MD
const reactChartsMDPath = require
  .resolve('@patternfly/react-charts/package.json')
  .replace('package.json', 'src');

sourceMD(
  glob.sync(path.join(reactChartsMDPath, '/**/examples/*.md')),
  'react'
);

// Release notes
const corePath = require.resolve('@patternfly/patternfly/package.json');
sourceMD(
  corePath.replace('package.json', 'RELEASE-NOTES.md'),
  'core'
);
const reactDocsPath = require.resolve('@patternfly/react-docs/package.json');
// TODO: parse the `{...props}` string in the file correctly
// sourceMD(
//   reactDocsPath.replace('package.json', 'RELEASE-NOTES.md'),
//   'react'
// );

// Upgrade guides
sourceMD(
  corePath.replace('package.json', 'UPGRADE-GUIDE.md'),
  'core'
);
sourceMD(
  reactDocsPath.replace('package.json', 'UPGRADE-GUIDE.md'),
  'react'
);
writeIndex();
