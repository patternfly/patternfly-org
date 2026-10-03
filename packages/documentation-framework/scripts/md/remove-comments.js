// Strips HTML comments from markdown source before the parser sees them.
// This replaces the old tokenizer-based approach that used deprecated
// this.Parser.prototype.blockTokenizers APIs (removed in remark-parse v11).
//
// Wraps the processor's parse method to strip comments from the raw
// vfile contents before remark-parse and remark-mdx process the text.
function plugin() {
  const self = this;
  const originalParse = self.parse;

  self.parse = function (file) {
    const str = String(file.contents || file.value || '');
    const stripped = str.replace(/<!--[\s\S]*?-->/g, '');
    if (file.contents !== undefined) {
      file.contents = stripped;
    }
    if (file.value !== undefined) {
      file.value = stripped;
    }
    return originalParse.call(this, file);
  };
}

module.exports = plugin;
