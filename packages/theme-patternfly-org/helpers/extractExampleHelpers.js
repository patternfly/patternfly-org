const { slugger } = require('./slugger');

// Used in core's dev:lite
function getExampleClassName(source, componentType, componentName) {
  return slugger(`ws-${source}-${componentType}-${componentName}`);
}

// Used in core's dev:lite
function getExampleId(source, componentType, componentName, exampleTitle) {
  return slugger(`ws-${source}-${componentType}-${componentName}-${exampleTitle}`);
}

module.exports = {
  getExampleClassName,
  getExampleId
};
