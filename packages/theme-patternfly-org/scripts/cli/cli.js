#!/usr/bin/env node
const path = require('path');
const program = require('commander');
const { build } = require('./build');
const { start } = require('./start');
const serverConfig = require('../webpack/webpack.server.config');
const clientConfig = require('../webpack/webpack.client.config');
const { version } = require('../../package.json');

function getConfig(options) {
  return require(path.join(process.cwd(), options.parent.config))
}

function getSource(options) {
  return require(path.join(process.cwd(), options.parent.source))
}

function generate(options) {
  console.log('write source files to src/generated');
  getSource(options);
}

program
  .version(version)
  .option('-c, --config <path>', 'set config path', './patternfly-docs.config.js')
  .option('-css, --cssconfig <path>', 'set css import file path', './patternfly-docs.css.js')
  .option('-s, --source <path>', 'set source generation file path', './patternfly-docs.source.js');

program
  .command('generate')
  .description('generates source files')
  .action(options => generate(options));

program
  .command('start')
  .description('generates source files and runs webpack-dev-server')
  .action(async options => {
    generate(options);
    const webpackClientConfig = await clientConfig(null, { mode: 'development' });
    console.log('start webpack-dev-server');
    start(webpackClientConfig);
  });
 
program
  .command('build <server|client|all>')
  .option('-a, --analyze', 'use webpack-bundle-analyzer', false)
  .description('generates source files and runs webpack')
  .action(async (cmd, options) => {
    generate(options);
    const toBuild = cmd === 'all'
      ? ['server', 'client']
      : cmd;
    // console.log('build', cmd, options.parent.cssconfig);
    if (toBuild.includes('server')) {
      console.log('load server webpack config');
      const webpackServerConfig = await serverConfig(null, { mode: 'production' });
      console.log('build server');
      await build(webpackServerConfig);
    }
    if (toBuild.includes('client')) {
      console.log('load client webpack config');
      const webpackClientConfig = await clientConfig(options.analyze ? 'analyze' : null, { mode: 'production' });
      console.log('build client');
      await build(webpackClientConfig);
    }
  });

program.parse(process.argv);
