#!/usr/bin/env node
const program = require('commander');

program
  .option('-c, --config <path>', 'set config path', 'patternfly-docs/patternfly-docs.config.js')
  .option('-css, --cssconfig <path>', 'set css import file path', 'patternfly-docs/patternfly-docs.css.js')
  .option('-s, --source <path>', 'set source generation file path', 'patternfly-docs/patternfly-docs.source.js');

program
  .command('generate')
  .description('generates source files')
  .action(options => {
    const { generate } = require('./generate');
    generate(options);
  });

program
  .command('start')
  .description('generates source files and runs webpack-dev-server')
  .action(options => {
    const { start } = require('./start');
    start(options);
  });

program
  .command('build <server|client|all>')
  .option('-a, --analyze', 'use webpack-bundle-analyzer', false)
  .option('-o, --output <folder>', 'output folder', 'public')
  .option('--legacySSL', 'use legacy version of openssl, needed to support Node 18 until we upgrade webpack to v5', false)
  .description('generates source files and runs webpack')
  .action((cmd, options) => {
    const { build } = require('./build');
    build(cmd, options);
  });

program
  .command('serve <folder>')
  .option('-p, --port <port>', 'port to serve on', 5000)
  .description('serves a directory on a port')
  .action((cmd, options) => {
    const { serve } = require('./serve');
    serve(cmd, options);
  });

program
  .command('screenshots')
  .option('-u, --urlPrefix <prefix>', 'where fullscreen pages are hosted', 'http://localhost:5000/v4')
  .option('-a, --allRoutes', 'true if screenshots of all examples - not just full screen', false)
  .description('updates screenshots for generated components')
  .action(options => {
    const { writeScreenshots } = require('../writeScreenshots');
    writeScreenshots(options);
  });

program
  .command('init')
  .option('-n, --name <extension>', 'name of the extension', 'extension')
  .option('-s, --scripts', 'Adds script targets to package.json', false)
  .description('Initialize patternfly-docs')
  .action(options => {
    const { init } = require('./init');
    init(options);
  });

program.parse(process.argv);
