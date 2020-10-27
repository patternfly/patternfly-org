const { Parser } = require('acorn');
const jsx = require('acorn-jsx');
const classFields = require('acorn-class-fields');

const jsxParser = Parser.extend(jsx(), classFields);

module.exports = {
  jsxParser
};
