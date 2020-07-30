const { slugger } = require('./slugger');

// Used in core's dev:lite
function getExampleClassName(source, componentType, componentName) {
  return `ws-${source}-${componentType}-${componentName}`.toLowerCase();
}

// Used in core's dev:lite
function getExampleId(source, componentType, componentName, exampleTitle) {
  return `ws-${source}-${componentType}-${componentName}-${slugger(exampleTitle)}`.toLowerCase();
}

module.exports = {
  getExampleClassName,
  getExampleId
};
