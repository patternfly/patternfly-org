const path = require('path');

module.exports = (sourceMD, sourceProps, sourceFunctionDocs) => {
  // Note: you must source props before sourcing the markdown files, otherwise the props table won't be rendered. Also
  // source function docs (by calling sourceFunctionDocs with the package name) before sourcing markdown as well.

  // Content md
  const contentBase = path.join(__dirname, '../patternfly-docs/content');
  const reactPropsIgnore = ['**/*.test.tsx', '**/examples/*.tsx'];
  sourceMD(path.join(contentBase, 'extensions/**/*.md'), 'extensions');
  if (!(process.env.EXTENSIONS_ONLY === 'true')) {

    sourceMD(path.join(contentBase, 'contribute/**/*.md'), 'pages-contribute');
    sourceMD(path.join(contentBase, 'get-started/**/*.md'), 'pages-get-started');
    sourceMD(path.join(contentBase, 'developer-resources/**/*.md'), 'developer-resources');
    sourceMD(path.join(contentBase, 'accessibility/**/*.md'), 'accessibility');
    sourceMD(path.join(contentBase, 'design-guidelines/**/*.md'), 'design-guidelines');
    sourceMD(path.join(contentBase, 'training/**/*.md'), 'training');
    sourceMD(path.join(contentBase, 'tokens/**/*.md'), 'tokens');

    // Gallery pages
    const galleryBase = path.join(__dirname, '../patternfly-docs/pages');
    sourceMD(path.join(galleryBase, 'landing-pages/**/*.md'), 'landing-pages');

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
    sourceMD(path.join(coreDocsPath, 'components/**/deprecated/**/*.md'), 'html-deprecated', coreDocsIgnore);

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

    const reactTopologyPath = require
    .resolve('@patternfly/react-topology/package.json')
    .replace('package.json', 'patternfly-docs/content/examples');

    sourceProps(path.join(reactCorePath, '/**/*.tsx'), reactPropsIgnore);
    sourceProps(path.join(reactTablePath, '/**/*.tsx'), reactPropsIgnore);
    sourceProps(path.join(reactCodeEditorPath, '/**/*.tsx'),reactPropsIgnore);
    sourceProps(path.join(reactChartsPath, '/**/*.tsx'),reactPropsIgnore);
    sourceProps(path.join(reactTopologyPath, '/**/*.tsx'), reactPropsIgnore);

    // React MD
    sourceMD(path.join(reactCorePath, '/components/**/examples/*.md'), 'react');
    sourceMD(path.join(reactCorePath, '/layouts/**/examples/*.md'), 'react');
    sourceMD(path.join(reactCorePath, '/next/components/**/examples/*.md'), 'react-next');
    sourceMD(path.join(reactCorePath, '/deprecated/components/**/examples/*.md'), 'react-deprecated');
    sourceMD(path.join(reactCorePath, '/**/demos/**/*.md'), 'react-demos');

    // React-table MD
    sourceMD(path.join(reactTablePath, '/components/**/examples/*.md'), 'react');
    sourceMD(path.join(reactTablePath, '/deprecated/components/**/examples/*.md'), 'react-deprecated');
    sourceMD(path.join(reactTablePath, '/**/demos/*.md'), 'react-demos');

    // Charts MD (no demos yet)
    sourceMD(path.join(reactChartsPath, '/**/examples/*.md'), 'react');

    // React-code-editor MD
    sourceMD(path.join(reactCodeEditorPath, '/**/examples/*.md'), 'react');

    // React-topology MD
    sourceMD(path.join(reactTopologyPath, '/**/*.md'), 'extensions');

    // React OUIA MD
    sourceMD(path.join(reactCorePath, '/**/helpers/OUIA/*.md'), 'react');
  }
  // EXTENSIONS:

  // Quickstarts extension
  const qsPath = require
    .resolve('@patternfly/quickstarts/package.json')
  const qsContentBase = path.join(qsPath.replace('package.json', 'dist'), '/patternfly-docs/quick-starts');
  const qsPropsBase = qsPath.replace('package.json', 'src')
  const qsPropsIgnore = ['**/*.test.tsx', '**/examples/*.tsx'];

  sourceProps(path.join(qsPropsBase, '/**/*.tsx'), qsPropsIgnore);
  sourceMD(path.join(qsContentBase, '**/*.md'));

  // Catalog view extension
  const catalogViewPath = require.resolve("@patternfly/react-catalog-view-extension/package.json")
  const reactCatalogViewDocsPath = catalogViewPath.replace("package.json", "patternfly-docs");
  const reactCatalogViewSrcPath = catalogViewPath.replace("package.json", "src/components");

  sourceProps(path.join(reactCatalogViewSrcPath, "/**/*.tsx"), reactPropsIgnore);
  sourceMD(path.join(reactCatalogViewDocsPath, '/**/examples/*.md'), 'react');

  // Console extension
  const consolePath = require.resolve("@patternfly/react-console/package.json");
  const consoleDocsPath = consolePath.replace("package.json", "patternfly-docs/content/extensions/react-console");
  const consoleSrcPath = consolePath.replace("package.json", "src/components");

  sourceProps(path.join(consoleSrcPath, "/**/*.tsx"), reactPropsIgnore);
  sourceMD(path.join(consoleDocsPath, "/examples/*.md"), 'react');

  // Log viewer extension
  const reactLogViewerPath = require
  .resolve('@patternfly/react-log-viewer/package.json')
  .replace('package.json', 'src');


  const logViewerContentBase = require
  .resolve('@patternfly/react-log-viewer/package.json')
  .replace('package.json', 'patternfly-docs/content/extensions/react-log-viewer');

  sourceProps(path.join(reactLogViewerPath, '/**/*.tsx'), reactPropsIgnore);
  sourceMD(path.join(logViewerContentBase, '/**/examples/*.md'), 'react');
  sourceMD(path.join(logViewerContentBase, '/**/demos/*.md'), 'react-demos');

  // User feedback extension
  const reactUserFeedbackPath = require
  .resolve('@patternfly/react-user-feedback/package.json')
  .replace('package.json', 'patternfly-docs/');

  sourceProps(path.join(reactUserFeedbackPath, '/**/*.tsx'), reactPropsIgnore);
  sourceMD(path.join(reactUserFeedbackPath, '/**/examples/*.md'), 'react');
  sourceMD(path.join(reactUserFeedbackPath, '/**/design-guidelines/*.md'), 'design-guidelines');

  const reactComponentGroupsPath = require
    .resolve('@patternfly/react-component-groups/package.json')
    .replace('package.json', 'src');

  const reactComponentGroupsBase = require
    .resolve('@patternfly/react-component-groups/package.json')
    .replace('package.json', 'patternfly-docs/content/extensions/component-groups');

  sourceProps(path.join(reactComponentGroupsPath, '/**/*.tsx'), reactPropsIgnore);
  sourceMD(path.join(reactComponentGroupsBase, '/**/*.md'), 'react');
  sourceMD(path.join(reactComponentGroupsPath, '/**/examples/*.md'), 'react');
  sourceMD(path.join(reactComponentGroupsPath, '/**/design-guidelines/*.md'), 'design-guidelines');

  // Prerelease sections:
  // Component Groups extension (Currently in PRERELEASE, so only include in PRERELEASE builds)
  if (process.env.PRERELEASE === 'true') {
    const reactVirtualizedTablePath = require
      .resolve('@patternfly/react-virtualized-extension/package.json')
      .replace('package.json', 'src');

    const reactVirtualizedTableBase = require
      .resolve('@patternfly/react-virtualized-extension/package.json')
      .replace('package.json', 'patternfly-docs/');

    sourceProps(path.join(reactVirtualizedTablePath, '/**/*.tsx'), reactPropsIgnore);
    sourceMD(path.join(reactVirtualizedTableBase, '/**/*.md'), 'react');
  }
}
