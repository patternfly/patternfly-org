const path = require('path');

module.exports = {
  // For production build
  pathPrefix: '/v4',
  siteMetadata: {
    title: 'PatternFly 4',
    // For SEO
    description: 'Documentation for PatternFly 4',
    // For Gatsby plugin sitemap
    siteUrl: 'https://www.patternfly.org'
  },
  plugins: [
    {
      resolve: `gatsby-theme-patternfly-org`,
      options: {
        context: 'org',
        hiddenPages: ['withOuia', 'Training'], // By title
        showBanner: true, // PF3 banner
        sideNav: {
          core: [
            { section: 'overview' },
            { section: 'components' },
            { section: 'layouts' },
            { section: 'utilities' },
            { section: 'demos' },
            { section: 'experimental' },
          ],
          react: [
            { section: 'overview' },
            { section: 'charts' },
            { section: 'components' },
            { section: 'demos' },
            { section: 'experimental' },
            { section: 'inline table' },
            { section: 'layouts' },
            { section: 'virtual scroll' },
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
          },
          {
            text: 'Blog',
            path: 'https://blog.patternfly.org/'
          }
        ]
      }
    },
    // Core docs
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'core', // This goes in URLs
        path: `${path.resolve(__dirname)}/patternfly-next/src/patternfly`
      }
    },
    // Core release notes
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'core', // This goes in URLs
        path: `${path.resolve(__dirname)}/patternfly-next/RELEASE-NOTES.md`
      }
    },
    // Core training
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'core', // This goes in URLs
        path: `${path.resolve(__dirname)}/patternfly-next/src/site/training.md`
      }
    },
    // React docs
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'react', // This goes in URLs
        path: `${path.resolve(__dirname)}/patternfly-react/packages/patternfly-4`,
        /* Files we never care to pull data from
         * Matched by https://github.com/paulmillr/chokidar */
         ignore: [
          '**/dist',
          '**/helpers',
          '**/scripts',
          '**/styles',
          '**/build',
          '**/utils',
          '**/test-helpers',
          /.*react-styles.*/,
          /.*react-docs.*/,
          /.*react-integration.*/,
          // eslint-disable-next-line no-useless-escape
          '**/\..*', // dotfiles
          '**/*.d.ts',
          '**/*.test.*',
          '**/index.*',
          '**/tsconfig.*',
          '**/tslint.*',
          '**/README.*',
          '**/CHANGELOG.*'
        ]
      }
    },
    // React release notes
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'react', // This goes in URLs
        path: `${path.resolve(__dirname)}/patternfly-react/RELEASE-NOTES.md`
      }
    },
    // React training
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'react', // This goes in URLs
        path:`${path.resolve(__dirname)}/patternfly-react/packages/patternfly-4/react-docs/src/training.md`
      }
    },
    // Org docs
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contribute', // This goes in URLs
        path: `${path.resolve(__dirname)}/src/content/contribute`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'get-started', // This goes in URLs
        path: `${path.resolve(__dirname)}/src/content/get-started`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'design-guidelines', // This goes in URLs
        path: `${path.resolve(__dirname)}/src/content/design-guidelines`
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
        path: `${path.resolve(__dirname)}/src/content/design-snippets`
      }
    },
    // Our custom plugin for *.js?x *.ts?x files to get prop types
    {
      resolve: path.resolve(__dirname, './patternfly-react/packages/patternfly-4/react-docs/plugins/gatsby-transformer-react-docgen-typescript')
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
        ]
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
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'patternfly-org-preview',
        protocol: 'https',
        hostname: 'www.patternfly.org'
      },
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
