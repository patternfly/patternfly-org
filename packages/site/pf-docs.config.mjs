export const config = {
  content: [
    // example content entry for local content, this would feed all markdown files in the content directory to the
    // documentation core with a content identifier of 'content':
    {
      base: 'src/',
      pattern: "**/*.md*",
      name: 'content'
    },
    //
    // example content entry for remote content, this would fetch all markdown files matching the glob in 'pattern'
    // from the specified npm package and serve them with a content identifier of 'react-component-docs':
    // {
    //   packageName: "@patternfly/react-core",
    //   pattern: "**/components/**/*.md",
    //   name: "react-component-docs",
    // },
  ],
  navSectionOrder: [],
  outputDir: './dist',
  propsGlobs: [
    // {
    //   include: ['*/@patternfly/react-core/src/**/*.tsx'],
    //   exclude: [
    //     '/**/examples/**',
    //     '/**/__mocks__/**',
    //     '/**/__tests__/**',
    //     '/**/*.test.tsx',
    //   ],
    // },
  ],
}
