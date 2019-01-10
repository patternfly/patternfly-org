module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: `/img`,
  siteMetadata: {
    title: 'PatternFly 4',
    description: 'Documentation for PatternFly 4',
    author: 'Red Hat'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    // following plugins common to REACT and CORE
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `repos`,
    //     path: `${__dirname}/_repos`
    //   }
    // },
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
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [],
        precision: 5
      }
    },
    // {
    //   resolve: `gatsby-plugin-page-creator`,
    //   options: {
    //     path: `${__dirname}/_repos/core/src/patternfly`
    //   }
    // },
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
