module.exports = {
  transformCode: (code, language) => {
    if (typeof code !== 'string') {
      return;
    }
    if (language === 'jsx') {
      return code
        .replace(/^\s*import.*from.*/gm, '') // single line import
        .replace(/^\s*import\s+{[\s\S]+?}\s+from.*/gm, '') // multi line import
        .replace(/^\s*export.*;/gm, '') // single line export
        .replace(/export default/gm, '') // inline export
    }
    // HTML/HBS
    return `<div className="ws-preview-html" dangerouslySetInnerHTML={{ __html: "${code
      .replace(/"/g, '\\"')
      .replace(/\n/g, '')}"}} />`;;
  }
}