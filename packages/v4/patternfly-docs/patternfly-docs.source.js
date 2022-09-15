const path = require('path');

module.exports = (sourceMD, sourceProps) => {
  // Content md
  const contentBase = path.join(__dirname, '../patternfly-docs/content');
  sourceMD(path.join(contentBase, 'contribute/**/*.md'), 'pages-contribute');
  sourceMD(path.join(contentBase, 'get-started/**/*.md'), 'pages-get-started');
  sourceMD(path.join(contentBase, 'developer-resources/**/*.md'), 'developer-resources');
  sourceMD(path.join(contentBase, 'accessibility/**/*.md'), 'accessibility');
  sourceMD(path.join(contentBase, 'design-guidelines/**/*.md'), 'design-guidelines');
  sourceMD(path.join(contentBase, 'training/**/*.md'), 'training');
  sourceMD(path.join(contentBase, 'extensions/**/*.md'), 'extensions');

  // Theme pages
  const themePagesPath = require
    .resolve('@patternfly/documentation-framework/package.json')
    .replace('package.json', 'pages');
  sourceMD(path.join(themePagesPath, '*.md'), 'pages-overview');

  // Core MD
  const coreDocsPath = require
    .resolve('@patternfly/patternfly/package.json')
    .replace('package.json', 'docs');
  const coreDocsIgnore = path.join(coreDocsPath, '/pages/**'); // Compatibility for old gatsby workspace
  sourceMD(path.join(coreDocsPath, '!(demos)/**/examples/**/*.md'), 'html', coreDocsIgnore);
  sourceMD(path.join(coreDocsPath, 'demos/**/*.md'), 'html-demos', coreDocsIgnore);

  // React props
  const reactCorePath = require
    .resolve('@patternfly/react-core/package.json')
    .replace('package.json', 'src');
  const reactTablePath = require
    .resolve('@patternfly/react-table/package.json')
    .replace('package.json', 'src');
  const reactCodeEditorPath = require
    .resolve('@patternfly/react-code-editor/package.json')
    .replace('package.json', 'src');
  const reactChartsPath = require
      .resolve('@patternfly/react-charts/package.json')
      .replace('package.json', 'src');

  const reactLogViewerPath = require
      .resolve('@ausuliv/react-log-viewer/package.json')
  const logViewerContentBase = path.join(reactLogViewerPath.replace('package.json', 'patternfly-docs'), '/content/extensions/react-log-viewer')
  const logViewerPropsBase = reactLogViewerPath.replace('package.json', 'src')
  const logViewerPropsIgnore = ['**/*.test.tsx', '**/examples/*.tsx'];

  const reactPropsIgnore = ['**/*.test.tsx', '**/examples/*.tsx'];
  sourceProps(path.join(reactCorePath, '/**/*.tsx'), reactPropsIgnore);
  sourceProps(path.join(reactTablePath, '/**/*.tsx'), reactPropsIgnore);
  sourceProps(path.join(reactCodeEditorPath, '/**/*.tsx'),reactPropsIgnore);
  sourceProps(path.join(reactChartsPath, '/**/*.tsx'),reactPropsIgnore);
  sourceProps(path.join(logViewerPropsBase, '/**/*.tsx'), logViewerPropsIgnore);

  // React MD
  sourceMD(path.join(reactCorePath, '/components/**/examples/*.md'), 'react');
  sourceMD(path.join(reactCorePath, '/layouts/**/examples/*.md'), 'react');
  sourceMD(path.join(reactCorePath, '/next/components/**/examples/*.md'), 'react-next');
  sourceMD(path.join(reactCorePath, '/**/demos/**/*.md'), 'react-demos');

  // React-table MD
  sourceMD(path.join(reactTablePath, '/**/TableComposable/examples/*.md'), 'react-composable');
  sourceMD(path.join(reactTablePath, '/**/demos/*.md'), 'react-demos');
  sourceMD(path.join(reactTablePath, '/**/Table/examples/*.md'), 'react-legacy');

  // Charts MD (no demos yet)
  sourceMD(path.join(reactChartsPath, '/**/examples/*.md'), 'react');

  // React-code-editor MD
  sourceMD(path.join(reactCodeEditorPath, '/**/examples/*.md'), 'react');

  // React-log-viewer MD
  sourceMD(path.join(logViewerContentBase, '/**/examples/*.md'), 'react');
  sourceMD(path.join(logViewerContentBase, '/**/demos/*.md'), 'react-demos');

  // React OUIA MD
  sourceMD(path.join(reactCorePath, '/**/helpers/OUIA/*.md'), 'react');

  // Release notes
  sourceMD(require.resolve('@patternfly/patternfly/RELEASE-NOTES.md'), 'html');
  sourceMD(require.resolve('@patternfly/react-docs/RELEASE-NOTES.md'), 'react');

  // Upgrade guides
  sourceMD(require.resolve('@patternfly/patternfly/UPGRADE-GUIDE.md'), 'html');
  sourceMD(require.resolve('@patternfly/react-docs/UPGRADE-GUIDE.md'), 'react');

  // Quickstarts extension
  const qsPath = require
    .resolve('@patternfly/quickstarts/package.json')
  const qsContentBase = path.join(qsPath.replace('package.json', 'dist'), '/patternfly-docs/quick-starts');
  const qsPropsBase = qsPath.replace('package.json', 'src')
  const qsPropsIgnore = ['**/*.test.tsx', '**/examples/*.tsx'];

  sourceProps(path.join(qsPropsBase, '/**/*.tsx'), qsPropsIgnore);
  sourceMD(path.join(qsContentBase, '**/*.md'));
}
