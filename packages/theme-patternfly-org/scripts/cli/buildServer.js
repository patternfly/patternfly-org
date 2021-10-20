const { buildWebpack } = require('./build');
const serverConfig = require('../webpack/webpack.server.config');

const options = JSON.parse(process.argv[2]);

async function buildServer() {
  console.log('load server webpack config');

  const webpackArgv = {
    mode: 'production',
    ...options
  };
  const webpackServerConfig = await serverConfig(null, webpackArgv);
  console.log('build server');
  await buildWebpack(webpackServerConfig);
}

buildServer()
  .catch(err => {
    console.error(err);
    process.exit(2);
  })
  .then(() => process.exit(0));

