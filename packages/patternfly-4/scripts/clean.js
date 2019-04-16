const fs = require('fs-extra');

const reposDir = '_repos';

fs.remove(reposDir, (errRemove) => {
  if (errRemove) {
    // eslint-disable-next-line no-console
    return console.error(errRemove);
  }
  // eslint-disable-next-line no-console
  console.log('Removed _repos dir');
});