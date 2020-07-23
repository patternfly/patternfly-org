const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const prerender = require('./prerender');
const { googleAnalyticsID } = require(`${process.cwd()}/patternfly-docs.config`);

module.exports = (routes, isProd) =>
  Object.entries(routes).map(([url, { title }]) => 
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../template.ejs'),
      filename: `${url}/index.html`.replace(/^\/+/, ''),
      title: `PatternFly 4${title ? `• ${title}` : ''}`,
      templateParameters: {
        prerendering: isProd ? prerender(url) : 'Loading...',
        googleAnalyticsID: isProd ? googleAnalyticsID : false
      },
      scriptLoading: 'defer',
      inject: false
    }),
  );
