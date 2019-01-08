const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname);

const plugins = [
  'gatsby-plugin-react-helmet',
  'gatsby-transformer-react-docgen',
  'gatsby-transformer-remark',
  {
    resolve: `gatsby-plugin-postcss-sass`,
    options: {
      postCssPlugins: [],
      precision: 5
    }
  },
  {
    resolve: `gatsby-plugin-page-creator`,
    options: {
      path: `${PROJECT_ROOT}/_repos/core/patternfly`
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `react-core`,
      path: `${PROJECT_ROOT}/_repos/react-core/src`
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `markdown-pages`,
      path: `${PROJECT_ROOT}/src/markdown`
    }
  }
];

module.exports = {
  siteMetadata: {
    title: 'PatternFly 4'
  },
  pathPrefix: '/4.0',
  plugins
};
