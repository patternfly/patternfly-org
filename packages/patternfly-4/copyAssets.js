/* eslint-disable no-case-declarations */
const { copySync } = require('fs-extra');
const { resolve, dirname, join } = require('path');
const baseCSSFilename = 'patternfly-base.css';
const stylesDir = resolve(__dirname, './static');
const pfDir = dirname(require.resolve(`@patternfly/patternfly/${baseCSSFilename}`));


const ununsedFontFilesRegExt = /(fa-|\.html$|\.css$)/;

copySync(join(pfDir, 'assets/images'), join(stylesDir, 'assets/images'));
copySync(join(pfDir, 'assets/fonts'), join(stylesDir, 'assets/fonts'), {
  filter(src) {
    return !ununsedFontFilesRegExt.test(src);
  }
});
