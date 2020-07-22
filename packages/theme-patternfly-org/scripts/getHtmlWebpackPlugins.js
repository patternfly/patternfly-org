const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const prerender = require('./prerender');
const { googleAnalyticsID } = require(`${process.cwd()}/patternfly-docs.config`);

module.exports = (routes, isProd) => {
  return Object.entries(routes).map(([url, { title }]) => 
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../template.ejs'),
      filename: `${url}/index.html`.replace(/^\/+/, ''),
      title: `PatternFly 4${title ? `- ${title}` : ''}`,
      templateParameters: {
        prerendering: isProd ? prerender(url) : 'Loading...',
        googleAnalyticsID
      },
      scriptLoading: 'defer',
      inject: false
    }),
  );
}
