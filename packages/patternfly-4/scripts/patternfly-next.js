const fs = require('fs-extra');

const source = 'node_modules/@patternfly/patternfly-next/src';
const destination = '_repos/core/src';

fs.remove('_repos/core', (errRemove) => {
if (errRemove) {
  // eslint-disable-next-line no-console
  return console.error(errRemove);
}
// eslint-disable-next-line no-console
console.log('Removed _repos/core dir');

  // create directory structure
  fs.ensureDir(destination, (errCreate) => {
    if (errCreate) {
      // eslint-disable-next-line no-console
      return console.error(errCreate);
    }
    // eslint-disable-next-line no-console
    console.log('Created _repos/core dir');

    // Copy files
    fs.copy(source, destination, (errCopy) => {
      if (errCopy) {
        // eslint-disable-next-line no-console
        return console.error(errCopy);
      }
      // eslint-disable-next-line no-console
      console.log('Copied core/src into _repos/core/src dir');
    });
  });

});