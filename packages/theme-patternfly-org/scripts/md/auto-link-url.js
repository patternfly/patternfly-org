// https://github.com/remarkjs/remark/tree/main/packages/remark-parse#processoruseparse-options
// https://github.com/remarkjs/remark/blob/main/packages/remark-parse/lib/tokenize/auto-link.js
const decode = require('parse-entities');

// Support `<https://google.com>`
// This is removed in MDX 2: https://github.com/mdx-js/mdx/issues/1049
function plugin({ beginMarker = '<http', endMarker = '>' } = {}) {
  const Parser = this.Parser;
  const tokenizers = Parser.prototype.inlineTokenizers;
  const methods = Parser.prototype.inlineMethods;

  tokenizers.autoLinkUrl = function autoLinkUrl(eat, value) {
    if (!value.startsWith(beginMarker)) {
      return;
    }
    const endIndex = value.indexOf(endMarker);
    if (endIndex >= 1) {
      const link = value.substr(1, endIndex);
      return eat(value.substr(0, endIndex))({
        type: 'link',
        title: null,
        url: decode(link, { nonTerminated: false })
      });
    }
    return true;
  }
  tokenizers.autoLinkUrl.locator = (value, fromIndex) => value.indexOf(beginMarker, fromIndex);

  // Put before existing `autoLink` which will be deleted in remark-mdx
  methods.splice(methods.indexOf('autoLink'), 0, 'autoLinkUrl')
}

module.exports = plugin;
