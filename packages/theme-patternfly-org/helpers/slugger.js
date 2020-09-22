const React = require('react');

// Should produce valid URLs and valid CSS ids
const slugger = children => {
  const value = React.Children.toArray(children).join('');
  return value
    .toLowerCase()
    .trim()
    .replace(/index$/, '')
    .replace(/\s/g, '-')
    .replace(/[^A-Za-z0-9.\-~]/g, '');
}

const makeSlug = (source, section, id, noSource) => {
  let url = '';

  if (section) {
    url += `/${slugger(section)}`
  }

  if (id) {
    url += `/${slugger(id)}`;
  }

  if (source && !source.includes('pages-') && !noSource) {
    url += `/${source}`;
  }

  return url;
}

module.exports = {
  slugger,
  makeSlug 
};
