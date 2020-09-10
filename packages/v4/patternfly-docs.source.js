const path = require('path');
const glob = require('glob');
const { sourceMD, sourceProps, writeIndex } = require('theme-patternfly-org/scripts/md/parseMD');

// Content md
const contentBase = path.join(__dirname, 'src/content');
sourceMD(
  glob.sync(path.join(contentBase, 'contribute/**/*.md')),
  'pages-contribute'
);
sourceMD(
  glob.sync(path.join(contentBase, 'get-started/**/*.md')),
  'pages-get-started'
);
sourceMD(
  glob.sync(path.join(contentBase, 'design-guidelines/**/*.md')),
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
const coreDocsIgnore = path.join(coreDocsPath, '/pages/**'); // Compatibility for old gatsby workspace
sourceMD(
  glob.sync(path.join(coreDocsPath, '/**/examples/**/*.md'), { ignore: coreDocsIgnore }),
  'html'
);
sourceMD(
  glob.sync(path.join(coreDocsPath, '/**/demos/**/*.md'), { ignore: coreDocsIgnore }),
  'html'
);

// React props
const reactCorePath = require
  .resolve('@patternfly/react-core/package.json')
  .replace('package.json', 'src');
const reactTablePath = require
  .resolve('@patternfly/react-table/package.json')
  .replace('package.json', 'src');
const reactChartsPath = require
  .resolve('@patternfly/react-charts/package.json')
  .replace('package.json', 'src');
const reactPropsIgnore = '**/*.test.tsx';
sourceProps(
  glob.sync(path.join(reactCorePath, '/**/*.tsx'), { ignore: reactPropsIgnore }),
  'react'
);
sourceProps(
  glob.sync(path.join(reactTablePath, '/**/*.tsx'), { ignore: reactPropsIgnore }),
  'react'
);
sourceProps(
  glob.sync(path.join(reactChartsPath, '/**/*.tsx'), { ignore: reactPropsIgnore }),
  'react'
);

// React MD
sourceMD(
  glob.sync(path.join(reactCorePath, '/**/examples/*.md')),
  'react'
);
sourceMD(
  glob.sync(path.join(reactCorePath, '/**/demos/**/*.md')),
  'react'
);

// React-table MD
sourceMD(
  glob.sync(path.join(reactTablePath, '/**/examples/*.md')),
  'react'
);
sourceMD(
  glob.sync(path.join(reactTablePath, '/**/demos/*.md')),
  'react'
);

// Charts MD (no demos yet)
sourceMD(
  glob.sync(path.join(reactChartsPath, '/**/examples/*.md')),
  'react'
);

// Release notes
sourceMD(
  require.resolve('@patternfly/patternfly/RELEASE-NOTES.md'),
  'html'
);
sourceMD(
  require.resolve('@patternfly/react-docs/RELEASE-NOTES.md'),
  'react'
);

// Upgrade guides
sourceMD(
  require.resolve('@patternfly/patternfly/UPGRADE-GUIDE.md'),
  'html'
);
sourceMD(
  require.resolve('@patternfly/react-docs/UPGRADE-GUIDE.md'),
  'react'
);
writeIndex();
