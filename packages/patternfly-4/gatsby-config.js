const globImporter = require('node-sass-glob-importer');

module.exports = {
  pathPrefix: '/4.0',
  siteMetadata: {
    title: 'PatternFly 4',
    description: 'Documentation for PatternFly 4',
    author: 'Red Hat',
    siteUrl: 'http://patternfly-react.surge.sh'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    // catch links in markdown files and use gatsby-link to navigate
    'gatsby-plugin-catch-links',
    // create sitemap (only in prod) and save to /sitemap.xml
    'gatsby-plugin-sitemap',
    // create robots.txt
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*'}]
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
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
    },
    // following plugins common to REACT and CORE
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content`
      }
    },
    // following plugins for REACT
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react`,
        path: `${__dirname}/_repos/react-core`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `react`,
        path: `${__dirname}/_repos/react-charts`
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-transformer-react-docgen',
    // following plugins for CORE
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `core`,
        path: `${__dirname}/_repos/core`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            }
          }
        ]
      }
    },
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       `gatsby-remark-autolink-headers`,
    //       // {
    //       //   resolve: `gatsby-remark-prismjs`,
    //       //   options: {
    //       //     classPrefix: 'prism-language-'
    //       //   }
    //       // }
    //     ]
    //   }
    // },
    // {
    //   resolve: 'gatsby-remark-embed-snippet',
    //   options: {
    //     directory: `${__dirname}/_repos/core`
    //   }
    // },
  ],
}
