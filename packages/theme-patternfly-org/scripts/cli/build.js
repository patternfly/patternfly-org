const webpack = require('webpack');

async function build(webpackConfig) {
  let compiler;
  try {
    compiler = webpack(webpackConfig);
  } catch (err) {
    if (err.name === "WebpackOptionsValidationError") {
      console.error(err.message);
      process.exit(1);
    }

    throw err;
  }

  return new Promise((res, rej) => 
    compiler.run((err, stats) => {
      if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        rej();
      }
    
      const info = stats.toJson();
    
      if (stats.hasErrors()) {
        console.error(info.errors);
        rej();
      }
    
      if (stats.hasWarnings()) {
        console.warn(info.warnings.join('\n'));
      }

      res();
    })
  );
}

module.exports = {
  build
};