#!/usr/bin/env node
const path = require('path');
const { fork } = require('child_process');
const program = require('commander');
const { start } = require('./start');
const clientConfig = require('../webpack/webpack.client.config');
const { version } = require('../../package.json');
const { sourceMD, sourceProps, writeIndex, watchMD } = require('../md/parseMD');

function getConfig(options) {
  return require(path.join(process.cwd(), options.parent.config));
}

function getSource(options) {
  return require(path.join(process.cwd(), options.parent.source));
}

function generate(options) {
  const start = new Date();
  console.log('write source files to src/generated');
  getSource(options)(sourceMD, sourceProps);
  writeIndex();
  const duration = new Date() - start;
  console.log('generating took %ss', duration / 1000);
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
    generate(options, true);
    const webpackClientConfig = await clientConfig(null, { mode: 'development', ...getConfig(options) });
    console.log('start webpack-dev-server');
    watchMD();
    start(webpackClientConfig);
  });

async function execFile(file, args) {
  const start = new Date();
  return new Promise((res, rej) => {
    const child = fork(path.join(__dirname, file), args);
    function errorHandler(err) {
      console.error(err);
      rej();
    };
    function successHandler(code) {
      if (code === 0) {
        const duration = new Date() - start;
        console.log('%s took %ss', file, duration / 1000);
        res();
      }
      else {
        console.error('Exited with', code);
        rej();
      }
    }
    child.on('error', errorHandler);
    child.on('exit', successHandler);
  });
}

program
  .command('build <server|client|all>')
  .option('-a, --analyze', 'use webpack-bundle-analyzer', false)
  .description('generates source files and runs webpack')
  .action(async (cmd, options) => {
    generate(options);
    const toBuild = cmd === 'all'
      ? ['server', 'client']
      : cmd;
    const config = getConfig(options);
    config.analyze = options.analyze;
    // console.log('build', cmd, options.parent.cssconfig);
    if (toBuild.includes('server')) {
      // Need to fork since first webpack build puts pressure on GC
      // Otherwise CircleCI will fail with 4GB RAM
      await execFile('buildServer.js', [JSON.stringify(config)]);
    }
    if (toBuild.includes('client')) {
      await execFile('buildClient.js', [JSON.stringify(config)]);
    }
  });

program
  .command('screenshots')
  .option('-u, --urlPrefix', 'where fullscreen pages are hosted', 'http://localhost:5000/v4')
  .description('updates screenshots for generated components')
  .action(options => {
    const { writeScreenshots } = require('../writeScreenshots');
    writeScreenshots(options);
  });


program.parse(process.argv);
