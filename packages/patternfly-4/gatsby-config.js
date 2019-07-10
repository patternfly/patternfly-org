const globImporter = require('node-sass-glob-importer');

const ignore = [
  `**/dist`,
  `**/helpers`,
  `**/scripts`,
  `**/styles`,
  `**/build`,
  `**/utils`,
  `**/test-helpers`,
  /.*react-styles.*/,
  /.*react-docs.*/,
  /.*react-integration.*/,
  `**/\..*`, // dotfiles
  `**/*.d.ts`,
  `**/*.test.*`,
  `**/tsconfig.*`,
  `**/tslint.*`,
  `**/README.*`,
  `**/CHANGELOG.*`,
];

module.exports = {
  pathPrefix: '/v4',
  siteMetadata: {
    title: 'PatternFly 4',
    description: 'Documentation for PatternFly 4',
    author: 'Red Hat',
    siteUrl: 'https://www.patternfly.org'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content-pages`,
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react-pages`,
        path: `${__dirname}/_repos/patternfly-react/packages/patternfly-4/react-core`,
        ignore: ignore.concat(`**/*.json`, `**/index.*`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react-pages`,
        path: `${__dirname}/_repos/patternfly-react/packages/patternfly-4/react-charts`,
        ignore: ignore.concat(`**/*.json`, `**/index.*`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react-pages`,
        path: `${__dirname}/_repos/patternfly-react/packages/patternfly-4/react-table`,
        ignore: ignore.concat(`**/*.json`, `**/index.*`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `core-pages`,
        path: `${__dirname}/_repos/patternfly-next/src`,
        ignore: [`**/*.scss`, `**/*.md`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `previews`,
        path: `${__dirname}/previews`,
      },
    },
    'gatsby-plugin-no-sourcemaps',
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
    {
      // Our custom plugin for *.js?x *.ts?x files to get prop types
      resolve: require.resolve(`${__dirname}/plugins/gatsby-transformer-react-docgen-typescript`),
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700
            }
          },
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        importer: globImporter(),
        postCssPlugins: [],
        precision: 5
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name is used in the app install prompt
        name: 'PatternFly',
        // short_name is used on the user's home screen, launcher, or other places where space may be limited
        short_name: 'PatternFly',
        // The start_url tells the browser where your application should start when it is launched
        start_url: '/v4',
        // The background_color property is used on the splash screen when the application is first launched
        background_color: '#151515',
        // The theme_color sets the color of the tool bar, and may be reflected in the app's preview in task switchers.
        theme_color: '#151515',
        // Opens the web app to look and feel like a standalone native app
        display: 'standalone',
        // icon used for splash screen, on home screen
        icon: 'src/images/patternfly-orb.svg',
        // do not build favicon from icon image
        include_favicon: false
      },
    },
    // gatsby-plugin-offline should be listed after gatsby-plugin-manifest so the manifest file can be included in the service worker
    // this plugin enables Progressive Web App + Offline functionality https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-47523816-6',
        respectDNT: true
      }
    }
  ]
}
