// Copies build outputs from patternfly 3 and patternfly 4 and combines it into the out directory

const fs = require('fs-extra');
const path = require('path');

const pf3_build = 'packages/patternfly-3/_site/.';
const pf4_build = 'packages/patternfly-4/public/.';
const build_root = 'out/';
// const pf3_root = 'out/v3/';
const pf3_root = build_root;
const pf4_root = 'out/v4/';

fs.remove(build_root, (errRemove) => {
  if (errRemove) {
    // eslint-disable-next-line no-console
    return console.error(errRemove);
  }
  // eslint-disable-next-line no-console
  console.log(`Removed ${build_root} dir`);

  // create directory structure
  fs.ensureDir(pf4_root, (errMakeDir) => {
    if (errMakeDir) {
      // eslint-disable-next-line no-console
      return console.error(errMakeDir);
    }
    // eslint-disable-next-line no-console
    console.log(`Created ${pf4_root} dir`);

    // Copy PF4 files into /v4
    fs.copy(pf4_build, pf4_root, (errPf4) => {
      if (errPf4) {
        // eslint-disable-next-line no-console
        return console.error(errPf4);
      }
      // eslint-disable-next-line no-console
      console.log(`Copied pf4 build into ${pf4_root}`);

      fs.moveSync(path.join(pf4_root, 'sitemap.xml'), path.join(build_root, 'sitemap.xml'));
      fs.moveSync(path.join(pf4_root, 'robots.txt'), path.join(build_root, 'robots.txt'));
    });
  });

  fs.ensureDir(pf3_root, (errMakeDir) => {
    if (errMakeDir) {
      // eslint-disable-next-line no-console
      return console.error(errMakeDir);
    }
    // eslint-disable-next-line no-console
    console.log(`Created ${pf3_root} dir`);

    // Copy PF3 files into /
    fs.copy(pf3_build, pf3_root, (errPf3) => {
      if (errPf3) {
        // eslint-disable-next-line no-console
        return console.error(errPf3);
      }
      // eslint-disable-next-line no-console
      console.log(`Copied pf3 build into ${build_root}`);
    });
  });
});