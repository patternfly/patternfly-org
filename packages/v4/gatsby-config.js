const fs = require('fs');
const path = require('path');

// We only want MD files.
// Matched by https://github.com/micromatch/anymatch
const reactIgnore = [
  '**/*.test.*',
  filePath => {
    if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
      return !['.md', '.tsx'].includes(path.extname(filePath));
    }

    return false;
  },
  '**/README.md',
  '**/CHANGELOG.md',
  '**/__snapshots__',
  '**/__tests__',
  '**/dist'
];

module.exports = {
  // For production build
  pathPrefix: '/v4',
  siteMetadata: {
    title: 'PatternFly 4',
    // For SEO
    description: 'PatternFly 4 Documentation',
    // For Gatsby plugin sitemap
    siteUrl: 'https://www.patternfly.org'
  },
  plugins: [
    {
      resolve: `gatsby-theme-patternfly-org`,
      options: {
        context: 'org',
        hiddenPages: ['withOuia'], // By title
        showGdprBanner: true, // GDPR banner
        showFooter: true, // Footer
        sideNav: {
          core: [
            { section: 'overview' },
            { section: 'components' },
            { section: 'layouts' },
            { section: 'utilities' },
            { section: 'demos' },
          ],
          react: [
            { section: 'overview' },
            { section: 'charts' },
            { section: 'components' },
            { section: 'demos' },
            { section: 'layouts' },
          ],
          get_started: [
            { text: 'About', path: '/get-started/about' },
            { text: 'Develop', path: '/get-started/developers' },
            { text: 'Design', path: '/get-started/designers' },
            { text: 'Migration guide', path: '/get-started/migrate' },
            { text: 'Accessibility guide', path: '/get-started/accessibility-guide' },
          ],
          contribute: [
            { text: 'About', path: '/contribute/about' },
            { text: 'Develop', path: '/contribute/developers' },
            { text: 'Design', path: '/contribute/designers' },
          ],
          design_guidelines: [
            { section: 'styles' },
            { section: 'usage and behavior' },
            { section: 'content' }
          ],
        },
        topNavItems: [
          {
            text: 'Get started',
            path: '/get-started/about',
            contexts: ['get-started']
          },
          {
            text: 'Design guidelines',
            path: '/design-guidelines/styles/colors',
            contexts: ['design-guidelines']
          },
          {
            text: 'Documentation',
            path: '/documentation/react/overview/release-notes',
            contexts: ['react', 'core']
          },
          {
            text: 'Contribute',
            path: '/contribute/about',
            contexts: ['contribute']
          },
          {
            text: 'Get in touch',
            path: '/get-in-touch'
          }
        ]
      }
    },
    // Core docs (MD + HBS)
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'core', // This goes in URLs
        path: require.resolve('@patternfly/patternfly/package.json').replace('package.json', 'site/docs')
      }
    },
    // Core release notes
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'core', // This goes in URLs
        path: require.resolve('@patternfly/patternfly/RELEASE-NOTES.md')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'core', // This goes in URLs
        path: path.join(__dirname, 'UPGRADE-GUIDE.md')
      }
    },
    // Core training
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'core', // This goes in URLs
        path: path.join(__dirname, '/src/content/training/core-training.md')
      }
    },
    // React docs (MD + TSX)
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'react', // This goes in URLs
        path: require.resolve('@patternfly/react-catalog-view-extension/package.json').replace('package.json', 'src'),
        ignore: reactIgnore
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'react', // This goes in URLs
        path: require.resolve('@patternfly/react-charts/package.json').replace('package.json', 'src'),
        ignore: reactIgnore
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'react', // This goes in URLs
        path: require.resolve('@patternfly/react-core/package.json').replace('package.json', 'src'),
        ignore: reactIgnore
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'react', // This goes in URLs
        path: require.resolve('@patternfly/react-table/package.json').replace('package.json', 'src'),
        ignore: reactIgnore
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'react', // This goes in URLs
        path: require.resolve('@patternfly/react-topology/package.json').replace('package.json', 'src'),
        ignore: reactIgnore
      }
    },
    // React release notes
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'react', // This goes in URLs
        path: require.resolve('@patternfly/react-docs/RELEASE-NOTES.md')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'react', // This goes in URLs
        path: require.resolve('@patternfly/react-docs/UPGRADE-GUIDE.md')
      }
    },
    // React training
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'react', // This goes in URLs
        path: path.join(__dirname, '/src/content/training/react-training.md')
      }
    },
    // Org docs
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contribute', // This goes in URLs
        path: path.join(__dirname, '/src/content/contribute')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'get-started', // This goes in URLs
        path: path.join(__dirname, '/src/content/get-started')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'design-guidelines', // This goes in URLs
        path: path.join(__dirname, '/src/content/design-guidelines')
      }
    },
    // Shared pages
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'shared', // This goes in URLs
        // TODO: prettier way to do this
        path: require.resolve('gatsby-theme-patternfly-org').replace('index.js', 'pages')
      }
    },
    // Design snippets to inject in template
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'design-snippets', // We DON'T create pages from these
        path: path.join(__dirname, '/src/content/design-snippets')
      }
    },
    // Our custom plugin for *.js?x *.ts?x files to get prop types
    {
      resolve: 'gatsby-transformer-react-docgen-typescript'
    },
    // The plugin for package.json files (to get version numbers)
    'gatsby-transformer-json',
    // Pipe MDX files through this plugin that spits out React components
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md'],
        gatsbyRemarkPlugins: [
          // Plugin for jpg, png, gif, svg
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: f => `img/${f.hash}-${f.name}`,
              ignoreFileExtensions: []
            }
          },
        ],
        rehypePlugins: [require('gatsby-theme-patternfly-org/helpers/codeTitleTransformer')]
      }
    },
    // For Algogia global doc search
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        // Exclude fullscreen previews from sitemap
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage(filter: {context: {isFullscreen: {ne: true}}}) {
            edges {
              node {
                path
              }
            }
          }
        }
        `
      }
    },
    // We used to use service workers pre-refactor in gatsby-plugin-offline.
    // We don't need service workers except for a high Lighthouse score. Kill them.
    'gatsby-plugin-remove-serviceworker',
    // Google Analytics
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-47523816-6',
        respectDNT: true
      }
    },
  ]
}
