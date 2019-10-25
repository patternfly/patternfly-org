const path = require('path');
const fs = require('fs-extra');

const sourceAssets = path.resolve(__dirname, '../packages/patternfly-4/public/assets');
const destinationRoot = path.resolve(__dirname, '../out/assets');
const destinationDocs = path.resolve(__dirname, '../out/documentation/assets');
const sourceStatic = path.resolve(__dirname, '../packages/patternfly-4/public/static');
const destinationStatic = path.resolve(__dirname, '../out/static');

fs.copy(sourceAssets, destinationRoot, (errCopy) => {
  if (errCopy) {
    // eslint-disable-next-line no-console
    return console.error(errCopy);
  }
  // eslint-disable-next-line no-console
  console.log(`Copied assets to ${destinationRoot}`);
});

fs.copy(sourceAssets, destinationDocs, (errCopy) => {
  if (errCopy) {
    // eslint-disable-next-line no-console
    return console.error(errCopy);
  }
  // eslint-disable-next-line no-console
  console.log(`Copied assets to ${destinationDocs}`);
});

fs.copy(sourceStatic, destinationStatic, (errCopy) => {
  if (errCopy) {
    // eslint-disable-next-line no-console
    return console.error(errCopy);
  }
  // eslint-disable-next-line no-console
  console.log(`Copied static to ${destinationStatic}`);
});