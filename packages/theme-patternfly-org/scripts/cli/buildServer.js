const { build } = require('./build');
const serverConfig = require('../webpack/webpack.server.config');

async function buildServer() {
  console.log('load server webpack config');
  const webpackServerConfig = await serverConfig(null, { mode: 'production' });
  console.log('build server');
  await build(webpackServerConfig);
}

buildServer();
