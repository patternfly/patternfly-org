const { transform } = require('./buble');

module.exports = {
  transformCode(code) {
    if (typeof code !== 'string') {
      return;
    }
    code = code
      .replace(/export default/g, '')
      .replace(/export/g, '');

    return transform(code).trim();
  }
}
