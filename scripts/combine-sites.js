// Copies build outputs from patternfly 3 and patternfly 4 and combines it into the out directory

const fs = require('fs-extra');
const path = require('path');

const pf3_build = 'packages/patternfly-3/_site/.';
const pf4_build = 'packages/patternfly-4/public/.';
const build_root = 'out/';
// const pf3_root = 'out/v3/';
const pf3_root = build_root;
const pf4_root = 'out/v4/';

fs.removeSync(build_root);
console.log(`Removed ${build_root} dir`);

// create directory structure
fs.ensureDirSync(pf4_root);
console.log(`Created ${pf4_root} dir`);

// Copy PF4 files into /v4
fs.copySync(pf4_build, pf4_root)
fs.moveSync(path.join(pf4_root, 'sitemap.xml'), path.join(build_root, 'sitemap.xml'));
fs.moveSync(path.join(pf4_root, 'robots.txt'), path.join(build_root, 'robots.txt'));
console.log(`Copied pf4 build into ${pf4_root}`);

// Copy PF3 files into /
fs.ensureDirSync(pf3_root)
console.log(`Created ${pf3_root} dir`);
fs.copySync(pf3_build, pf3_root);
console.log(`Copied pf3 build into ${build_root}`);
// Use v4's 404
const path404 = path.join(pf3_root, '404.html');
fs.removeSync(path404);
const page404 = `<!DOCTYPE html><html lang="en">
  <script>
    window.location.replace("/v4/404.html");
  </script>
</html>`;
fs.writeFileSync(path404, page404);
console.log(`Replaced 404 page at ${path404}`);
