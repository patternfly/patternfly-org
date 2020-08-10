const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { googleAnalyticsID, algolia } = require(`${process.cwd()}/patternfly-docs.config`);
const { prerender } = require('./prerender');

module.exports = async (routes, isProd) => {
  const res = [
    // Sitemap
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../templates/sitemap.ejs'),
      filename: 'sitemap.xml',
      templateParameters: {
        urls: Object.keys(routes)
      },
      inject: false
    })
  ];

  const titledRoutes = Object.entries(routes)
    .map(([url, { title, id }]) => [url, { title: title || id }]);

  for (const [url, { title }] of titledRoutes) {
    res.push(new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../templates/html.ejs'),
      filename: `${url}/index.html`.replace(/^\/+/, ''),
      title: `PatternFly 4${title ? ` • ${title}` : ''}`,
      templateParameters: {
        prerendering: isProd ? await prerender(url) : 'Loading...',
        // Don't use GA in dev mode
        googleAnalyticsID: isProd ? googleAnalyticsID : false,
        algolia
      },
      scriptLoading: 'defer',
      inject: false
    }));
  }

  return res;
};
