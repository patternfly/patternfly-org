const fs = require('fs-extra');
const download = require('download-git-repo');

const reposDir = '_repos';
const sourceCore = '_repos/_tmp/src';
const destinationCore = '_repos/core';

// need to pull down github repo: https://github.com/patternfly/patternfly-next/tarball/master

fs.remove(reposDir, (errRemove) => {
  if (errRemove) {
    // eslint-disable-next-line no-console
    return console.error(errRemove);
  }
  // eslint-disable-next-line no-console
  console.log('Removed _repos dir');

  // create directory structure
  fs.ensureDir(destinationCore, (errCreateCore) => {
    if (errCreateCore) {
      // eslint-disable-next-line no-console
      return console.error(errCreateCore);
    }
    // eslint-disable-next-line no-console
    console.log('Created _repos/core dir');

    fs.ensureDir('_repos/_tmp', (errCreateTmp) => {
      if (errCreateTmp) {
        // eslint-disable-next-line no-console
        return console.error(errCreateTmp);
      }
      // eslint-disable-next-line no-console
      console.log('Created _repos/_tmp dir');

      download('patternfly/patternfly-next', '_repos/_tmp', {clone: false}, function (err) {
        if (err) {
          console.log('Failed to download patternfly-next repo');
        }
        // Copy files
        fs.copy(sourceCore, destinationCore, (errCopyCore) => {
          if (errCopyCore) {
            // eslint-disable-next-line no-console
            return console.error(errCopyCore);
          }
          // eslint-disable-next-line no-console
          console.log('Copied core src into _repos/core dir');
        });
      });
    });
  });
});