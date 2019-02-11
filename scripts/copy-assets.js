const path = require('path');
const fs = require('fs-extra');

const source = path.resolve(__dirname, '../packages/patternfly-4/public/assets');
const destinationRoot = path.resolve(__dirname, '../out/assets');
const destinationDocs = path.resolve(__dirname, '../out/documentation/assets');

fs.copy(source, destinationRoot, (errCopy) => {
  if (errCopy) {
    // eslint-disable-next-line no-console
    return console.error(errCopy);
  }
  // eslint-disable-next-line no-console
  console.log(errCopy);
});

fs.copy(source, destinationDocs, (errCopy) => {
  if (errCopy) {
    // eslint-disable-next-line no-console
    return console.error(errCopy);
  }
  // eslint-disable-next-line no-console
  console.log(errCopy);
});