const fs = require('fs-extra');

const packages = ['react-core', 'react-charts'];

packages.forEach(pkg => {
  const source = `../../node_modules/@patternfly/src-patternfly-react/packages/patternfly-4/${pkg}/src`;
  const destination = `_repos/${pkg}/src`;

  fs.remove(`_repos/${pkg}`, (errRemove) => {
  if (errRemove) {
    // eslint-disable-next-line no-console
    return console.error(errRemove);
  }
  // eslint-disable-next-line no-console
  console.log(`Removed _repos/${pkg} dir`);

    // create directory structure
    fs.ensureDir(destination, (errCreate) => {
      if (errCreate) {
        // eslint-disable-next-line no-console
        return console.error(errCreate);
      }
      // eslint-disable-next-line no-console
      console.log(`Created _repos/${pkg} dir`);

      // Copy files
      fs.copy(source, destination, (errCopy) => {
        if (errCopy) {
          // eslint-disable-next-line no-console
          return console.error(errCopy);
        }
        // eslint-disable-next-line no-console
        console.log(`Copied ${pkg}/src into _repos/${pkg}/src dir`);
      });
    });

  });
});