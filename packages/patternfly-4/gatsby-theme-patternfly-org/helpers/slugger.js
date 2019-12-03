const React = require('react');

// Should produce valid URLs and valid CSS ids
module.exports = {
  slugger: children => {
    const value = React.Children.toArray(children).join('');
    return value
      .toLowerCase()
      .trim()
      .replace(/index$/, '')
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
      .replace(/\s/g, '-');
  }
}