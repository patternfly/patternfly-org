// https://github.com/remarkjs/remark/tree/main/packages/remark-parse#processoruseparse-options

function plugin({ beginMarker = '<!--', endMarker = '-->' } = {}) {
  const Parser = this.Parser
  const tokenizers = Parser.prototype.blockTokenizers
  const methods = Parser.prototype.blockMethods

  tokenizers.comments = function tokenizeComment(eat, value) {
    const trimmed = value.trimRight();
    const endIndex = trimmed.indexOf(endMarker);
    if (trimmed.startsWith(beginMarker) && endIndex >= 1) {
      eat(value.substr(0, endIndex));
    }
    return true;
  }

  // Run it just before `html`.
  methods.splice(methods.indexOf('html'), 0, 'comments')
}

module.exports = plugin;
