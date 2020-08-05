const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { googleAnalyticsID } = require(`${process.cwd()}/patternfly-docs.config`);

module.exports = (routes, isProd) => 
  Object.entries(routes).map(([url, { title }]) => 
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../templates/html.ejs'),
      filename: `${url}/index.html`.replace(/^\/+/, ''),
      title: `PatternFly 4${title ? ` • ${title}` : ''}`,
      templateParameters: {
        prerendering: isProd ? require('./prerender')(url) : 'Loading...',
        // Don't use GA in dev mode
        googleAnalyticsID: isProd ? googleAnalyticsID : false
      },
      scriptLoading: 'defer',
      inject: false
    }),
  ).concat(
    // Sitemap
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../templates/sitemap.ejs'),
      filename: 'sitemap.xml',
      templateParameters: {
        urls: Object.keys(routes)
      },
      inject: false
    })
  );
