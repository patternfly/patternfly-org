const path = require('path');

function getConfig(options) {
  return require(path.join(process.cwd(), options.parent.config));
}

module.exports = {
  getConfig
};
