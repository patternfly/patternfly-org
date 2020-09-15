#!/usr/bin/env node
const program = require('commander');
const { start } = require('./start');
const { generate } = require('./generate');
const { build } = require('./build');
const { version } = require('../../package.json');

program
  .version(version)
  .option('-c, --config <path>', 'set config path', './patternfly-docs.config.js')
  .option('-css, --cssconfig <path>', 'set css import file path', './patternfly-docs.css.js')
  .option('-s, --source <path>', 'set source generation file path', './patternfly-docs.source.js');

program
  .command('generate')
  .description('generates source files')
  .action(generate);

program
  .command('start')
  .description('generates source files and runs webpack-dev-server')
  .action(start);

program
  .command('build <server|client|all>')
  .option('-a, --analyze', 'use webpack-bundle-analyzer', false)
  .description('generates source files and runs webpack')
  .action(build);

program
  .command('screenshots')
  .option('-u, --urlPrefix <prefix>', 'where fullscreen pages are hosted', 'http://localhost:5000/v4')
  .description('updates screenshots for generated components')
  .action(options => {
    const { writeScreenshots } = require('../writeScreenshots');
    writeScreenshots(options);
  });


program.parse(process.argv);
