const { program } = require('commander');
const { version } = require('../../package.json');

program
  .version(version)
  .option('-c, --config <path>', 'set config path', './patternfly-docs.config.js')
  .option('-css, --cssconfig <path>', 'set css import file path', './patternfly-docs.css.js');
 
program
  .command('start')
  .description('generates source files and runs webpack-dev-server')
  .action((function(env, options){
    console.log('start', env, options);
  }));
 
program
  .command('build <server|client|all>')
  .description('generates source files and runs webpack')
  .action(function(cmd, options){
    console.log('build', cmd);
  });

program.parse(process.argv);
