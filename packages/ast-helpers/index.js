const { parse } = require('./acorn');
const { convertToReactComponent, convertToJSX } = require('./stringify');

module.exports = {
  parse,
  convertToReactComponent,
  convertToJSX
};
