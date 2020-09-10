const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { googleAnalyticsID, algolia } = require(`${process.cwd()}/patternfly-docs.config`);
const { prerender } = require('./prerender');
const { getTitle } = require('../../helpers/getTitle');

const templateDir = path.join(__dirname, '../../templates');

async function getHtmlWebpackPlugin(url, isProd, title, isFullscreen) {
  return new HtmlWebpackPlugin({
    template: path.join(templateDir, 'html.ejs'),
    filename: `${url}/index.html`.replace(/^\/+/, ''),
    templateParameters: {
      title: getTitle(title),
      // Don't prerender fullscreen pages (expensive!)
      prerendering: (isProd && !isFullscreen) ? await prerender(url) : 'Loading...',
      // Don't use GA in dev mode
      googleAnalyticsID: isProd ? googleAnalyticsID : false,
      algolia
    },
    scriptLoading: 'defer',
    inject: false,
    minify: false
  })
}

async function getHtmlWebpackPlugins(isProd) {
  const { routes, fullscreenRoutes } = require(path.join(process.cwd(), 'src/routes'));
  const res = [
    // Sitemap
    new HtmlWebpackPlugin({
      template: path.join(templateDir, 'sitemap.ejs'),
      filename: 'sitemap.xml',
      templateParameters: {
        urls: Object.keys(routes)
      },
      inject: false,
      minify: false,
    })
  ];

  if (!isProd) {
    // Only render the index page in dev mode and rely on historyApiFallback
    res.push(await getHtmlWebpackPlugin('', isProd, 'Dev', false));
    return res;
  }

  const titledRoutes = Object.entries(routes)
    .concat(Object.entries(fullscreenRoutes))
    .map(([url, { sources = [], ...props }]) => [
      [url, props],
      // Add pages for sources
      ...sources.map(source => [source.slug, source])
    ])
    .flat();

  for (const [url, { title, isFullscreen }] of titledRoutes) {
    res.push(await getHtmlWebpackPlugin(url, isProd, title, isFullscreen));
  }

  console.log('done prerendering');
  return res;
};

module.exports = {
  getHtmlWebpackPlugins
};
