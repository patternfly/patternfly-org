const path = require('path');
const fs = require('fs');
const { extractExamples } = require('./helpers/extractExamples');
const { extractTableOfContents } = require('./helpers/extractTableOfContents');
const { createHandlebars } = require('./helpers/createHandlebars');
const { slugger } = require('./helpers/slugger');

// Add map PR-related environment variables to GraphQL
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const num = process.env.CIRCLE_PR_NUMBER || process.env.PR_NUMBER || '';
  const url = process.env.CIRCLE_PULL_REQUEST || '';
  // Docs https://www.gatsbyjs.org/docs/actions/#createNode
  actions.createNode({
    name: 'PR_INFO',
    num,
    url,
    id: createNodeId('PR_INFO'),
    parent: null,
    children: [],
    internal: {
      contentDigest: createContentDigest({ a: 'PR_INFO' }),
      type: 'EnvVars'
    }
  });
};

// Build URL an MDX page should be created at
// We support a `pages-*` source for Core, where we won't prefix the slug.
// This allows them to create urls like `/accessibility-guide`, etc.
const makeSlug = (source, section, componentName) => {
  let url = '';

  // We know these belong in the "documentation" section of the site
  if (['react', 'core',].includes(source)) {
    url += `/documentation/${source}`;
  }
  else if (source === 'shared') {
    url += '/documentation';
  }
  else if (!source.includes('pages-')) {
    url += `/${source}`;
  }

  if (section !== 'root') {
    url += `/${slugger(section)}`
  }

  url += `/${slugger(componentName)}`;

  return url;
}

let addedFileFieldsToSchema = false;
// Here we transform all the data we later need for `createPages`
// We handle creating slugs and navigation abstraction
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    // Parent comes from gatsby-source-filesystem definition in gatsby-config.js
    const parent = getNode(node.parent);
    const source = parent.sourceInstanceName;
    const componentName = path.basename(node.fileAbsolutePath, '.md');

    let { section = 'root', title, propComponents = [''], wrapperTag = 'main' } = node.frontmatter;
    // Source determines sideNav context and some features like context switcher
    createNodeField({
      node,
      name: 'source',
      value: source.replace('pages-', '')
    });
    // Slug is the URL we create the page at
    createNodeField({
      node,
      name: 'slug',
      value: makeSlug(source, section, componentName).toLowerCase()
    });
    // What sideNav menu to include items under
    createNodeField({
      node,
      name: 'navSection',
      value: section.toLowerCase()
    });
    // The page's name to be used for context switching and the URL.
    // We don't make the assumption this will always be the last part of the URL
    // so that we can make changes to the slugger later.
    createNodeField({
      node,
      name: 'componentName',
      value: componentName.toLowerCase()
    });
    // The <h1> to put at the top of the page
    createNodeField({
      node,
      name: 'title',
      value: title
    });
    // We need to populate this for the query on `fields` in createPages
    createNodeField({
      node,
      name: 'propComponents',
      value: propComponents
    });
    // Fullscreen pages which have their own `<main>` should NOT be wrapped in another `<main>`
    createNodeField({
      node,
      name: 'wrapperTag',
      value: wrapperTag
    });
  } else if (node.internal.type === 'File') {
    if (!addedFileFieldsToSchema) {
      // This is just to add the Handlbars file fields
      // to the schema so GraphQL queries don't fail
      // TODO: Is there a way to do this in createSchemaCustomization?
      createNodeField({ node, name: 'name', value: '' });
      createNodeField({ node, name: 'partial', value: '' });
      createNodeField({ node, name: 'source', value: '' });
      createNodeField({ node, name: 'slug', value: '' });
      createNodeField({ node, name: 'title', value: '' });

      addedFileFieldsToSchema = true;
    }
    if (node.extension === 'hbs') {
      // Partial name has always come from file name in patternfly
      createNodeField({
        node,
        name: 'name',
        value: path.basename(node.absolutePath, '.hbs')
      });
      createNodeField({
        node,
        name: 'partial',
        value: fs.readFileSync(node.absolutePath, 'utf8')
      });
    }
  }
};

const fullscreenPages = {};

exports.createPages = ({ actions, graphql }, pluginOptions) => graphql(`
  {
    docs: allMdx(filter: { fields: { source: { ne: "design-snippets" } } }) {
      nodes {
        id
        fileAbsolutePath
        mdxAST
        fields {
          slug
          source
          navSection
          title
          propComponents
          componentName
          wrapperTag
        }
      }
    }
    designSnippets: allMdx(filter: { fields: { source: { eq: "design-snippets" } } }) {
      nodes {
        id
        frontmatter {
          reactComponentName
          coreComponentName
        }
      }
    }
    pages: allFile(filter: { fields: { slug: { nin: ["", null] } } }) {
      nodes {
        absolutePath
        fields {
          slug
          source
          title
        }
      }
    }
    partials: allFile(filter: { fields: { name: { nin: ["", null] } } }) {
      nodes {
        fields {
          name
          partial
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const hbsInstance = createHandlebars(result.data.partials.nodes);
    const hiddenTitles = (pluginOptions.hiddenPages || []).map(title => title.toLowerCase());
    const { showBanner = false, showGdprBanner = false, showFooter = false } = pluginOptions;
    // Create 404 page
    actions.createPage({
      path: '/404',
      component: path.resolve(__dirname, './pages/404.js')
    });
    // Create our per-MDX file pages
    result.data.docs.nodes
      .concat(result.data.pages.nodes)
      .filter(node => !hiddenTitles.includes(node.fields.title.toLowerCase()))
      .forEach(node => {
        const { componentName, slug, navSection = null, title, source, propComponents = [''], wrapperTag } = node.fields;
        const fileRelativePath = path.relative(__dirname, node.absolutePath || node.fileAbsolutePath);
        let sourceLink = 'https://github.com/patternfly/';
        if (source === 'react') {
          sourceLink += 'patternfly-react/blob/master/';
        } else if (source === 'core') {
          sourceLink += 'patternfly/blob/master/';
        } else if (source === 'shared') {
          sourceLink += 'patternfly-org/blob/master/packages/gatsby-theme-patternfly-org/';
        } else {
          sourceLink += 'patternfly-org/blob/master/packages/v4/';
        }
        sourceLink += fileRelativePath
          .replace(/\\/g, '/')
          .replace(/\.\.\//g, '')
          .replace(/patternfly-(react|next)\//, '');
        // Process the MDX AST to dynamically create a TOC and per-example fullscreen pages
        const tableOfContents = extractTableOfContents(node.mdxAST);
        const examples = extractExamples(node.mdxAST, hbsInstance, fileRelativePath);

        // Not a huge fan of this component mapping disaster
        const designNode = result.data.designSnippets.nodes.find(
          node => node.frontmatter[`${source}ComponentName`] === componentName
        );
        
        // Create our dynamic templated pages
        actions.createPage({
          path: slug,
          component: node.absolutePath || path.resolve(__dirname, `./templates/mdx.js`),
          context: {
            // Required by template to fetch more MDX/React docgen data from GraphQL
            id: node.id,
            designId: designNode ? designNode.id : 'undefined',
            propComponents,
            // For dynamic TOC on templated page
            tableOfContents,
            // For sideNav GraphQL query and dynamic classNames in Example.js
            navSection,
            // For top of TOC
            title,
            // For top of TOC, dynamic classNames in Example.js, and some feature flags
            source,
            // To render static example HTML from patternfly
            htmlExamples: source === 'core' ? examples : undefined,
            // To hide the banner for core/React sites
            showBanner,
            // To hide the GDPR banner
            showGdprBanner,
            // To hide the footer
            showFooter,
            // To link each MD file back to Github
            sourceLink,
          }
        });

        // Create per-example fullscreen pages for documentation pages
        if (['core', 'react'].includes(source)) {
          Object.entries(examples).forEach(([key, example]) => {
            const pagePath = `${slug}/${key}`;
            fullscreenPages[pagePath] = true;
            actions.createPage({
              path: pagePath,
              component: source === 'core'
                ? path.resolve(__dirname, './templates/fullscreenHTML.js')
                : path.resolve(__dirname, './templates/fullscreenMDX.js'),
              context: {
                // To exclude fullscreen pages from sitemap
                isFullscreen: true,
                // For page title
                title: `${source === 'core' ? 'HTML' : 'React'} - ${title} ${key.replace(/-/g, ' ')}`,
                // The HTML or JSX to render
                code: example,
                // The tag to use as a wrapper
                wrapperTag
              }
            });
          });
          
          fs.writeFileSync(
            '.cache/fullscreenPages.json',
            JSON.stringify(Object.keys(fullscreenPages).sort(), null, 2),
          );
        }
      });
  });

// https://www.gatsbyjs.org/docs/schema-customization/
exports.createSchemaCustomization = ({ actions }) => {
  // Define types for sideNav if any of core, react, or org aren't included
  const sideNavTypeDefs = `
    type SideNavItem @infer {
      section: String
      text: String
      path: String
    }
    type SideNav @infer {
      core: [SideNavItem]
      react: [SideNavItem]
      get_started: [SideNavItem]
      design_guidelines: [SideNavItem]
      contribute: [SideNavItem]
    }
    type TopNavItem @infer {
      text: String
      path: String
      contexts: [String]
    }
    type SitePluginOptions @infer {
      sideNav: SideNav
      topNavItems: [TopNavItem]
      showBanner: Boolean
      showGdprBanner: Boolean
    }
    type SitePlugin implements Node @infer {
      pluginOptions: SitePluginOptions
    }
  `;

  actions.createTypes(sideNavTypeDefs);
}

exports.onCreateWebpackConfig = ({ actions, stage, getConfig }) => {
  const config = getConfig();

  // Exclude CSS-in-JS styles included from React. They override
  // the patternfly.css styles which we would rather have.
  const cssRules = config.module.rules.find(rule => rule.oneOf);
  const cssRule = cssRules.oneOf.find(rule => rule.test.test('a.css'));
  cssRule.exclude = /react-styles\/css\/.*\.css/;
  config.module.rules.push({
    test: /react-styles\/css\/.*\.css/,
    use: 'null-loader'
  });

  // Gatsby's webpack config is not very performant. Unfortunately we have to muck
  // around with it because it slows builds down 5-10x and we still need to compile
  // some node_module code (mainly our src/**/examples/*.md). The key to performance
  // is to properly include/exclude which JS files we transpile with babel-loader.
  // https://github.com/gatsbyjs/gatsby/blob/gatsby%402.21.0/packages/gatsby/src/utils/webpack-utils.ts#L304
  const jsRules = config.module.rules.filter(rule => rule.test && rule.test.test && rule.test.test('a.js'));
  const babelRule = jsRules[0];
  const oldIncludeFn = babelRule.include.bind({});
  // This is for example MD/JS files
  const reactDepRegex = /node_modules\/@patternfly\/react-[\w-]+\/src\/.*\.(md|js)/;
  const reactDistRegex = /react-[\w-]+\/dist|react-styles\/css/;
  const alreadyCJSRegex = /node_modules\/(victory|lodash|regenerate-unicode-properties|css-loader|d3-\w+|babel-runtime|react-is|dom-helpers|gatsby-core-utils|gatsby-plugin-mdx\/loaders)/;
  babelRule.include = modulePath => reactDepRegex.test(modulePath) || oldIncludeFn(modulePath);
  babelRule.exclude = modulePath => reactDistRegex.test(modulePath) || alreadyCJSRegex.test(modulePath);
  // Use caching for babel loader 
  babelRule.use[0].options.cacheDirectory = '.cache/babel-loader';
  babelRule.use[0].options.cacheCompression = false;

  if (stage === 'build-javascript') {
    // Turn off source-maps because dist sizes are huge
    config.devtool = false;

    // Tweak Gatsby vendor babel-loader to exclude more
    const babelVendorRule = jsRules[1];
    const oldExcludeFn = babelVendorRule.exclude.bind({})
    babelVendorRule.exclude = modulePath => reactDepRegex.test(modulePath)
      || reactDistRegex.test(modulePath)
      || alreadyCJSRegex.test(modulePath)
      || oldExcludeFn(modulePath);
    
    babelVendorRule.use[0].options.cacheDirectory = '.cache/babel-loader';
    babelVendorRule.use[0].options.cacheCompression = false;
  } else if (stage === 'develop') {
    config.optimization = {
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false,
    };
  }

  actions.replaceWebpackConfig(config);
};
