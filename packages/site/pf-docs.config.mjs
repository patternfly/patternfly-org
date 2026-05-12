export const config = {
  content: [
    // example content entry for local content, this would feed all markdown files in the content directory to the
    // documentation core with a content identifier of 'content':
    {
      base: 'src/',
      pattern: "**/*.{md,mdx}",
      name: 'content'
    },
    //
    // example content entry for remote content, this would fetch all markdown files matching the glob in 'pattern'
    // from the specified npm package and serve them with a content identifier of 'react-component-docs':
    {
      base: "../../node_modules/@patternfly/react-core",
      pattern: "src/{components/*/examples,layouts/*/examples,demos/**}/*.{md,mdx}",
      name: "react-component-docs",
    },
    {
      base: "../../node_modules/@patternfly/patternfly",
      pattern: "docs/**/*.{md,mdx}",
      name: "core-component-docs",
    },
    {
      base: "../../node_modules/@patternfly/react-charts",
      pattern: "src/victory/**/*.{md,mdx}", // we need to update the docs-core to support objects in propComponents at the schema level to support echarts
      name: "react-charts-docs",
    },
    {
      base: "../../node_modules/@patternfly/react-topology",
      pattern: "patternfly-docs/**/*.{md,mdx}",
      name: "react-topology-docs",
    },
    {
      base: "../../node_modules/@patternfly/react-templates",
      pattern: "src/**/*.{md,mdx}",
      name: "react-templates-docs",
    },
    {
      base: "../../node_modules/@patternfly/react-drag-drop",
      pattern: "src/**/*.{md,mdx}",
      name: "react-drag-drop-docs",
    },
    {
      base: "../../node_modules/@patternfly/react-code-editor",
      pattern: "src/**/*.{md,mdx}",
      name: "react-code-editor-docs",
    },
    {
      base: "../../node_modules/@patternfly/react-table",
      pattern: "src/**/*.{md,mdx}",
      name: "react-table-docs",
    },
    {
      base: "../../node_modules/@patternfly/react-console",
      pattern: "patternfly-docs/**/*.{md,mdx}",
      name: "react-console-docs",
    },
    {
      base: "../../node_modules/@patternfly/react-data-view",
      pattern: "patternfly-docs/**/*.{md,mdx}",
      name: "react-data-view-docs",
    },
    {
      base: "../../node_modules/@patternfly/react-log-viewer",
      pattern: "patternfly-docs/**/*.{md,mdx}",
      name: "react-log-viewer-docs",
    },
    {
      base: "../../node_modules/@patternfly/react-user-feedback",
      pattern: "patternfly-docs/**/*.{md,mdx}",
      name: "react-user-feedback-docs",
    },
    {
      base: "../../node_modules/@patternfly/react-virtualized-extension",
      pattern: "patternfly-docs/**/*.{md,mdx}",
      name: "react-virtualized-extension-docs",
    },
    {
      base: "../../node_modules/@patternfly/react-catalog-view-extension",
      pattern: "patternfly-docs/**/*.{md,mdx}",
      name: "react-catalog-view-extension-docs",
    },
    {
      base: "../../node_modules/@patternfly/react-component-groups",
      pattern: "patternfly-docs/**/*.{md,mdx}",
      name: "react-component-groups-docs",
    },
    {
      base: "../../node_modules/@patternfly/chatbot",
      pattern: "patternfly-docs/**/*.{md,mdx}",
      name: "chatbot-docs",
    }
  ],
  navSectionOrder: [],
  outputDir: './dist',
  propsGlobs: [
    {
      include: ['*/../../../node_modules/@patternfly/react-core/src/**/*.tsx'],
      exclude: [
        '/**/examples/**',
        '/**/__mocks__/**',
        '/**/__tests__/**',
        '/**/*.test.tsx',
      ],
    },
  ],
}
