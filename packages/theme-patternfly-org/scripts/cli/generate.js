const path = require('path');
const { sourceMD, sourceProps, writeIndex } = require('../md/parseMD');

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

module.exports = {
  generate
};
