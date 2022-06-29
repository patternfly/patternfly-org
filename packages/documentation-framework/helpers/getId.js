module.exports = {
  getId: text => text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
}