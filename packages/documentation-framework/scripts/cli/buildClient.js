const { buildWebpack } = require('./build');
const clientConfig = require('../webpack/webpack.client.config');

const options = JSON.parse(process.argv[2]);

async function buildClient() {
  console.log('load client webpack config');
  
  const webpackArgv = {
    mode: 'production',
    ...options
  };
  const webpackClientConfig = await clientConfig(options.analyze && 'analyze', webpackArgv);
  console.log('build client');
  await buildWebpack(webpackClientConfig);
}

buildClient()
  .catch(err => {
    console.error(err);
    process.exit(3);
  })
  .then(() => process.exit(0));
