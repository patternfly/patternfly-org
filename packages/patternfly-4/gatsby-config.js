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
    siteUrl: 'https://jschuler.github.io/v4'
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
        path: `${__dirname}/_repos/react-core`,
        ignore: ignore.concat(`**/*.json`, `**/index.*`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react-pages`,
        path: `${__dirname}/_repos/react-charts`,
        ignore: ignore.concat(`**/*.json`, `**/index.*`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react-pages`,
        path: `${__dirname}/_repos/react-table`,
        ignore: ignore.concat(`**/*.json`, `**/index.*`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `core-pages`,
        path: `${__dirname}/_repos/core/src`,
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
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-catch-links', // catch links in markdown files and use gatsby-link to navigate
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline', // this plugin enables Progressive Web App + Offline functionality https://gatsby.app/offline
    {
      // Our custom plugin for *.js?x *.ts?x files to get prop types
      resolve: require.resolve(`${__dirname}/plugins/gatsby-transformer-react-docgen-typescript`),
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        // gatsbyRemarkPlugins: [
        //   {
        //     resolve: `gatsby-remark-images`,
        //     options: {
        //       maxWidth: 700
        //     }
        //   }
        // ]
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
        name: 'PatternFly',
        short_name: 'PatternFly',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui'
      },
    }
  ],
}
