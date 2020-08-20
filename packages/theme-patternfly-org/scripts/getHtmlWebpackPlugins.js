const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { googleAnalyticsID, algolia } = require(`${process.cwd()}/patternfly-docs.config`);
const { prerender } = require('./prerender');
const { getTitle } = require('../helpers/getTitle');

async function getHtmlWebpackPlugin(url, isProd, title) {
  return new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../templates/html.ejs'),
    filename: `${url}/index.html`.replace(/^\/+/, ''),
    templateParameters: {
      title: getTitle(title),
      prerendering: isProd ? await prerender(url) : 'Loading...',
      // Don't use GA in dev mode
      googleAnalyticsID: isProd ? googleAnalyticsID : false,
      algolia
    },
    scriptLoading: 'defer',
    inject: false
  })
}

async function getHtmlWebpackPlugins(routes, isProd) {
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
    .map(([url, { sources = [], ...props }]) => [
      [url, props],
      // Add pages for sources
      ...sources.map(source => [source.slug, source])
    ])
    .flat();

  for (const [url, { title }] of titledRoutes) {
    res.push(await getHtmlWebpackPlugin(url, isProd, title));
  }

  console.log('done prerendering')
  return res;
};

module.exports = {
  getHtmlWebpackPlugins
};
