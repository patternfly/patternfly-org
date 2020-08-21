const { slugger } = require('./slugger');

// Used in core's dev:lite
function getExampleClassName(source, componentType, componentName) {
  // Compatibility with old gatsby workspace
  if (source === 'html') {
    source = 'core';
  }
  return slugger(`ws-${source}-${componentType}-${componentName}`);
}

// Used in core's dev:lite
function getExampleId(source, componentType, componentName, exampleTitle) {
  // Compatibility with old gatsby workspace
  if (source === 'html') {
    source = 'core';
  }
  return slugger(`ws-${source}-${componentType}-${componentName}-${exampleTitle}`);
}

module.exports = {
  getExampleClassName,
  getExampleId
};
