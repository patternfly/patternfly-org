const { slugger } = require('./slugger');

// Used in core's dev:lite
function getExampleClassName(source, componentType, componentName) {
  return `ws-${source}-${componentType}-${componentName}`;
}

// Used in core's dev:lite
function getExampleId(source, componentType, componentName, exampleTitle) {
  return `ws-${source}-${componentType}-${componentName}-${slugger(exampleTitle)}`;
}

module.exports = {
  getExampleClassName,
  getExampleId
};
