// Copies build outputs from patternfly 3 and patternfly 4 and combines it into the out directory

const fs = require('fs-extra');

const pf3_build = 'packages/patternfly-3/_site/.';
const pf4_build = 'packages/patternfly-4/public/.';
const build_root = 'out/';
const pf4_root = 'out/4.0/';

fs.remove(build_root, (errRemove) => {
  if (errRemove) {
    // eslint-disable-next-line no-console
    return console.error(errRemove);
  }
  // eslint-disable-next-line no-console
  console.log('Removed out dir');

  // create directory structure
  fs.ensureDir(pf4_root, (errMakeDir) => {
    if (errMakeDir) {
      // eslint-disable-next-line no-console
      return console.error(errMakeDir);
    }
    // eslint-disable-next-line no-console
    console.log('Created out/4.0 dir');

    // Copy files
    // fs.copy(pf3_build, build_root, (errPf3) => {
    //   if (errPf3) {
    //     // eslint-disable-next-line no-console
    //     return console.error(errPf3);
    //   }
    //   // eslint-disable-next-line no-console
    //   console.log('Copied pf3 build into out dir');
    // });

    // TODO: Change dest back to pf4_root
    fs.copy(pf4_build, build_root, (errPf4) => {
      if (errPf4) {
        // eslint-disable-next-line no-console
        return console.error(errPf4);
      }
      // eslint-disable-next-line no-console
      console.log('Copied pf4 build into out/4.0 dir');
    });

  });
});