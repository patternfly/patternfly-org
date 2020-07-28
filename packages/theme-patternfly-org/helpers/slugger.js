const React = require('react');

// Should produce valid URLs and valid CSS ids
const slugger = children => {
  const value = React.Children.toArray(children).join('');
  return value
    .toLowerCase()
    .trim()
    .replace(/index$/, '')
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
    .replace(/\s/g, '-');
}

const makeSlug = (source, section, id) => {
  let url = '';

  if (!source.includes('pages-')) {
    url += `/documentation`;
  }

  if (section) {
    url += `/${slugger(section)}`
  }

  if (id) {
    url += `/${slugger(id)}`;
  }

  if (source && !source.includes('pages-')) {
    url += `/${source}`;
  }

  return url;
}

module.exports = {
  slugger,
  makeSlug 
};
