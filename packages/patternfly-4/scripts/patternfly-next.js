const fs = require('fs-extra');

const source = 'node_modules/@patternfly/src-patternfly-next/src';
const destination = '_repos/core/src';
const sourceHelpers = 'node_modules/@patternfly/src-patternfly-next/build/helpers';
const destinationHelpers = '_repos/core/build/helpers';
const sourceAssets = 'node_modules/@patternfly/src-patternfly-next/static/assets';
const destinationAssets = './static/assets';

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

  // create directory structure
  fs.ensureDir(destinationHelpers, (errCreateHelpers) => {
    if (errCreateHelpers) {
      // eslint-disable-next-line no-console
      return console.error(errCreateHelpers);
    }
    // eslint-disable-next-line no-console
    console.log('Created _repos/core/build/helpers dir');

    // Copy files
    fs.copy(sourceHelpers, destinationHelpers, (errCopyHelpers) => {
      if (errCopyHelpers) {
        // eslint-disable-next-line no-console
        return console.error(errCopyHelpers);
      }
      // eslint-disable-next-line no-console
      console.log('Copied core/build/helpers into _repos/core/build/helpers dir');
    });
  });

  // create directory structure
  fs.ensureDir(destinationAssets, (errCreateAssets) => {
    if (errCreateAssets) {
      // eslint-disable-next-line no-console
      return console.error(errCreateAssets);
    }
    // eslint-disable-next-line no-console
    console.log('Created static/assets dir');

    // Copy files
    fs.copy(sourceAssets, destinationAssets, (errCopyAssets) => {
      if (errCopyAssets) {
        // eslint-disable-next-line no-console
        return console.error(errCopyAssets);
      }
      // eslint-disable-next-line no-console
      console.log('Copied core/static/assets into static dir');
    });
  });

});