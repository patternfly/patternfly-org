const path = require('path');
const fs = require('fs-extra');

const source = path.resolve(__dirname, '../_repos/patternfly-next/src/patternfly/assets');
const destination = path.resolve(__dirname, '../static/assets');

fs.copy(source, destination, (errCopy) => {
  if (errCopy) {
    // eslint-disable-next-line no-console
    return console.error(errCopy);
  }
  // eslint-disable-next-line no-console
  console.log(`Copied assets to ${destination}`);
});
