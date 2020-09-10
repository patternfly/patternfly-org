const { build } = require('./build');
const clientConfig = require('../webpack/webpack.client.config');

async function buildClient() {
  console.log('load client webpack config');
  const webpackClientConfig = await clientConfig(process.argv[3] || {}, { mode: 'production' });
  console.log('build client');
  await build(webpackClientConfig);
}

buildClient();
