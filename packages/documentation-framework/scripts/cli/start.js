const { RspackDevServer }= require('@rspack/dev-server');
const rspack = require('@rspack/core');
const clientConfig = require('../webpack/webpack.client.config');
const { generate } = require('./generate');
const { getConfig } = require('./helpers');
const { watchMD } = require('../md/parseMD');

function startDevServer(webpackConfig) {
  webpackConfig.devServer.static = false;
  const { port } = webpackConfig.devServer;
  const compiler = rspack(webpackConfig);
  const server = new RspackDevServer(webpackConfig.devServer, compiler);

  (async () => {
    await server.start();
    console.log(`Dev server is listening on port ${port}`);
  })();
}

async function start(options) {
  generate(options, true);
  const webpackClientConfig = await clientConfig(null, { mode: 'development', ...getConfig(options) });
  console.log('start rspack-dev-server');
  watchMD();
  startDevServer(webpackClientConfig);
}

module.exports = {
  start
};
