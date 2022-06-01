const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { prerender } = require('./prerender');
const { getTitle } = require('../../helpers/getTitle');

const templateDir = path.join(__dirname, '../../templates');

async function getHtmlWebpackPlugin({
  isProd,
  googleAnalyticsID,
  algolia,
  pathPrefix = '',
  url,
  title,
  isFullscreen
}) {
  return new HtmlWebpackPlugin({
    template: path.join(templateDir, 'html.ejs'),
    filename: `${url}/index.html`.replace(/^\/+/, ''),
    templateParameters: {
      title: getTitle(title),
      // Don't prerender fullscreen pages (expensive!)
      // prerendering: (isProd && !isFullscreen) ? await prerender(url, pathPrefix) : 'Loading...',
      prerendering: 'Loading...',
      // Don't use GA in dev mode
      googleAnalyticsID: isProd ? googleAnalyticsID : false,
      algolia
    },
    scriptLoading: 'defer',
    inject: false,
    minify: false
  })
}

async function getHtmlWebpackPlugins(options) {
  const { isProd } = options;
  const { routes, fullscreenRoutes } = require('../../routes');
  const res = [
    // Sitemap
    new HtmlWebpackPlugin({
      template: path.join(templateDir, 'sitemap.ejs'),
      filename: 'sitemap.xml',
      templateParameters: {
        urls: Object.entries(routes)
          .map(([path, { sources }]) => [path, ...(sources || []).slice(1).map(source => source.slug)])
          .flat()
      },
      inject: false,
      minify: false,
    })
  ];

  if (!isProd) {
    // Only render the index page in dev mode and rely on historyApiFallback
    res.push(await getHtmlWebpackPlugin({ isProd, url: '', title: 'Dev', ...options }));
    return res;
  }

  const titledRoutes = Object.entries(routes)
    .concat(Object.entries(fullscreenRoutes))
    .map(([url, { sources = [], title, isFullscreen }]) => [
      [url, { title, isFullscreen }],
      // Add pages for sources
      ...sources.slice(1).map(source => [source.slug, source])
    ])
    .flat()
    .sort();

  for (const [url, { title, isFullscreen }] of titledRoutes) {
    res.push(await getHtmlWebpackPlugin({ url, title, isFullscreen, ...options }));
  }

  console.log('done prerendering');
  return res;
};

module.exports = {
  getHtmlWebpackPlugins
};
