// File exists to allow `require.resolve('gatsby-theme-patternfly-org')`

// If React or release notes aren't included
// We can't include these in gatsby-node since we aren't gatsby-mdx
exports.mdxTypeDefs = `
  type MdxFrontmatter @dontInfer {
    id: String!
    title: String
    section: String
    cssPrefix: String
    hideTOC: Boolean
    optIn: String
    beta: Boolean
    katacodaBroken: Boolean
    propComponents: [String]
    hideDarkMode: Boolean
    reactComponentName: String
    coreComponentName: String
    showTitle: Boolean
    releaseNoteTOC: Boolean
    hideSource: Boolean
    wrapperTag: String
  }
  type MdxFields @dontInfer {
    slug: String!
    source: String
    navSection: String
    title: String
    propComponents: [String]
    componentName: String
    wrapperTag: String
  }
  type Mdx implements Node @dontInfer {
    frontmatter: MdxFrontmatter
    fields: MdxFields
  }
  type TypeType @dontInfer {
    name: String
  }
  type TsType @dontInfer {
    name: String
    raw: String
  }
  type defaultValue @dontInfer {
    value: String
  }
  type PropsType @dontInfer {
    beta: Boolean
    katacodaBroken: Boolean
    name: String!
    description: String
    required: Boolean
    type: TypeType
    tsType: TsType
    defaultValue: defaultValue
    hide: Boolean
    deprecated: Boolean
    annotatedType: String
  }
  type ComponentMetadata implements Node @dontInfer {
    name: String!
    props: [PropsType]
  }
`;
