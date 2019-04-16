const fs = require('fs-extra');

const source = '../../node_modules/@patternfly/src-patternfly-next/src/patternfly';
const destination = '_repos/core/src/patternfly';
const sourceHelpers = '../../node_modules/@patternfly/src-patternfly-next/build/helpers';
const destinationHelpers = '_repos/core/build/helpers';
const sourceAssets = '../../node_modules/@patternfly/src-patternfly-next/static/assets';
const destinationAssets = './static/assets';
const sourceGatsbyVariables = '../../node_modules/@patternfly/src-patternfly-next/src/site/gatsby-variables.scss';
const destinationGatsbyVariables = '_repos/core/src/site/gatsby-variables.scss';
const sourceIconDefs = '../../node_modules/@patternfly/src-patternfly-next/src/icons/definitions/pf-icons.json';
const destinationIconDefs = '_repos/core/src/icons/definitions/pf-icons.json';

fs.remove('_repos/core', (errRemove) => {
if (errRemove) {
  // eslint-disable-next-line no-console
  return console.error(errRemove);
}
// eslint-disable-next-line no-console
console.log('Removed _repos/core dir');

  // core
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

  // helpers
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

  // assets
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

  // gatsby-variables.scss
  fs.copy(sourceGatsbyVariables, destinationGatsbyVariables, (errCopyGatsbyVariables) => {
    if (errCopyGatsbyVariables) {
      // eslint-disable-next-line no-console
      return console.error(errCopyGatsbyVariables);
    }
    // eslint-disable-next-line no-console
    console.log('Copied gatsby-variables.scss');
  });

  // pf-icons.json
  fs.copy(sourceIconDefs, destinationIconDefs, (errCopyIconDefs) => {
    if (errCopyIconDefs) {
      // eslint-disable-next-line no-console
      return console.error(errCopyIconDefs);
    }
    // eslint-disable-next-line no-console
    console.log('Copied pf-icons.json');
  });

});