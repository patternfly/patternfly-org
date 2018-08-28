const fs = require('fs-extra');

const sourceReact = 'node_modules/@patternfly/react-lerna-root/packages/react-core/src';
// const sourceReact = 'node_modules/@patternfly/react-core/dist';
const destinationReact = '_repos/react-core/src';

fs.remove('_repos/react-core', (errRemove) => {
if (errRemove) {
  // eslint-disable-next-line no-console
  return console.error(errRemove);
}
// eslint-disable-next-line no-console
console.log('Removed _repos/react-core dir');

  // create directory structure
  fs.ensureDir(destinationReact, (errCreateReact) => {
    if (errCreateReact) {
      // eslint-disable-next-line no-console
      return console.error(errCreateReact);
    }
    // eslint-disable-next-line no-console
    console.log('Created _repos/react-core dir');

    // Copy files
    fs.copy(sourceReact, destinationReact, (errCopyReact) => {
      if (errCopyReact) {
        // eslint-disable-next-line no-console
        return console.error(errCopyReact);
      }
      // eslint-disable-next-line no-console
      console.log('Copied react into _repos/react-core dir');
    });
  });

});