// Re-adds support for <https://...> autolinks in MDX.
// remark-mdx treats angle brackets as JSX, so <https://google.com>
// fails to parse. This plugin converts autolinks to standard markdown
// link syntax [url](url) before the parser sees them.
//
// Replaces the old this.Parser.prototype.inlineTokenizers approach
// (removed in remark-parse v11). Compatible with unified v9 and v11.
function plugin() {
  const self = this;
  const originalParse = self.parse;

  self.parse = function (file) {
    const str = String(file.contents || file.value || '');
    // Match <http://...> or <https://...> autolinks and convert to [url](url)
    const converted = str.replace(/<(https?:\/\/[^>]+)>/g, '[$1]($1)');
    if (file.contents !== undefined) {
      file.contents = converted;
    }
    if (file.value !== undefined) {
      file.value = converted;
    }
    return originalParse.call(this, file);
  };
}

module.exports = plugin;
