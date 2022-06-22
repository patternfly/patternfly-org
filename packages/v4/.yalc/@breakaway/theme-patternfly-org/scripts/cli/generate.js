const path = require('path');
const { sourceMD, sourceProps, writeIndex } = require('../md/parseMD');

function getSource(options) {
  return require(path.join(process.cwd(), options.parent.source));
}

function generate(options) {
  const start = new Date();
  console.log('write source files to src/generated');
  const sourceMDWithOptions = (glob, source, ignore) => sourceMD(glob, source, ignore, options._name);
  getSource(options)(sourceMDWithOptions, sourceProps);
  const exitCode = writeIndex();
  if (exitCode !== 0) {
    process.exit(exitCode);
  }
  const duration = new Date() - start;
  console.log('generating took %ss', duration / 1000);
}

module.exports = {
  generate
};
