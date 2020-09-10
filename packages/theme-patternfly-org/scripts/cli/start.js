const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

function start(webpackConfig) {
  const { port } = webpackConfig.devServer;
  const compiler = webpack(webpackConfig);
  const server = new WebpackDevServer(compiler, webpackConfig.devServer);

  server.listen(port, 'localhost', err => {
    if (err) {
      console.log(err);
    }
  });
}

module.exports = {
  start
};
