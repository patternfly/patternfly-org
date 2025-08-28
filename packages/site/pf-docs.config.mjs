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
    // packageName: "../../../node_modules/@patternfly/react-core",
    // base: "../../node_modules/@patternfly/react-core",
    // src/{components/*/examples,layouts/*/examples,demos/**}
    {
      base: "../../node_modules/@patternfly/react-core",
      pattern: "src/{components/*/examples,layouts/*/examples,demos/**}/*.{md,mdx}",
      name: "react-component-docs", // must be "react-component-docs" to assign "react" tab properly
    },
    {
      base: "../../node_modules/@patternfly/patternfly",
      pattern: "docs/**/*.{md,mdx}",
      name: "core-component-docs", // must be "core-component-docs" to assign "html" tab properly
    },
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
