const path = require('path');
const fs = require('fs-extra');

const sourceAssets =  path.resolve(__dirname, '../public/assets');
const destinationAssetsDev = path.resolve(__dirname, '../public/documentation/core/assets');
const destinationAssetsProd = path.resolve(__dirname, '../public/documentation/assets');
fs.symlink(sourceAssets, destinationAssetsDev, 'dir', err => {
  console.log(err);
});
// fs.link(sourceAssets, destinationAssetsProd, err => {
//   console.log(err);
// });
