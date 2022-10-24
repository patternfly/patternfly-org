module.exports = {
  transformCode: (code, language, isFullscreenOnly) => {
    if (typeof code !== 'string') {
      return;
    }
    if (language === 'jsx') {
      return code
        .replace(/^\s*import.*from.*/gm, '') // single line import
        .replace(/^\s*import\s+{[\s\S]+?}\s+from.*/gm, '') // multi line import
        .replace(/^\s*export.*;/gm, '') // single line export
        .replace(/export default/gm, '') // inline export
        .trim(); // pretty
    }
    // HTML/HBS
    return `<div className="ws-preview-html${isFullscreenOnly ? ' pf-u-h-100' : ''}" dangerouslySetInnerHTML={{ __html: "${code
      .replace(/"/g, '\\"')
      .replace(/\n/g, '')}"}} />`;
  }
}