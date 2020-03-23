/* eslint-disable no-case-declarations */
const { copySync } = require('fs-extra');
const { resolve, dirname, join } = require('path');
const stylesDir = resolve(__dirname, './static');
const pfDir = dirname(require.resolve('@patternfly/patternfly/patternfly.css'));
const versionsFile = require.resolve('gatsby-theme-patternfly-org/versions.json');

copySync(versionsFile, join(stylesDir, 'versions.json'));
copySync(join(pfDir, 'assets/images'), join(stylesDir, 'assets/images'));
copySync(join(pfDir, 'assets/fonts'), join(stylesDir, 'assets/fonts'), {
  filter(src) {
    return !/(fa-|\.html$|\.css$)/.test(src);
  }
});
