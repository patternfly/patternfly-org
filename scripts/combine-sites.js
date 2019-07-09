const fs = require('fs-extra');
const path = require('path');
const copy = require('recursive-copy');
const through = require('through2');

const pf3_build = 'packages/patternfly-3/_site/.';
const pf4_build = 'packages/patternfly-4/public/.';
const build_root = 'out/';
const pf3_root = 'out/v3/';
const pf4_root = 'out/v4/';

// Copies build outputs from patternfly 3 and patternfly 4 and combines it into the out directory
fs.removeSync(build_root);
console.log(`Removed ${build_root} dir`);

// create directory structure
fs.ensureDirSync(pf4_root);
console.log(`Created ${pf4_root} dir`);

// Copy PF4 files into /v4
fs.copySync(pf4_build, pf4_root)
console.log(`Copied pf4 build into ${pf4_root}`);

// Copy PF3 files into /v3
fs.ensureDirSync(pf3_root)
console.log(`Created ${pf3_root} dir`);
fs.copySync(pf3_build, pf3_root);
console.log(`Copied pf3 build into ${build_root}`);

// Use v4's 404
const path404 = path.join(pf3_root, '404.html');
fs.removeSync(path404);
const page404 = `
<!DOCTYPE HTML>
<meta charset="UTF-8">
<meta http-equiv="refresh" content="0; url=/v4/404.html">
<script>
  window.location.href = "/v4/404.html"
</script>
`;
fs.writeFileSync(path404, page404);
console.log(`Replaced 404 page at ${path404}`);

// write the root sitemap file
const rootSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.patternfly.org/v3/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://www.patternfly.org/v4/sitemap.xml</loc>
  </sitemap>
</sitemapindex>
`;
const pathRootSitemap = path.join(build_root, 'sitemap.xml');
fs.writeFileSync(pathRootSitemap, rootSitemap);
console.log(`Wrote root sitemap.xml at ${pathRootSitemap}`);

// write the root robots file
const robotsFile = `User-agent: *
Allow: /
Sitemap: https://www.patternfly.org/sitemap.xml
Host: https://www.patternfly.org
`;
const pathRobotsFile = path.join(build_root, 'robots.txt');
fs.writeFileSync(pathRobotsFile, robotsFile);
console.log(`Wrote robots.txt at ${pathRobotsFile}`);

// write the cname file
const rootCname = `www.patternfly.org`;
const pathCnameFile = path.join(build_root, 'CNAME');
fs.writeFileSync(pathCnameFile, rootCname);
console.log(`Wrote CNAME at ${pathCnameFile}`);

// copy PF3 folders into root so we can setup redirects 
const options = {
    overwrite: true,
    filter: [
        '**/*.html',
        '!components/**/*'
    ],
    transform: function(src, dest, stats) {
        if (src.endsWith('404.html') || path.extname(src) !== '.html') { return null; }
        let redirectPath;
        if (src.endsWith('index.html')) {
          // remove 'out' at beginning and 'index.html' at end
          redirectPath = src.slice(3, src.length - 10);
        } else {
          // keep the html file name
          redirectPath = src.slice(3);
        }
        return through(function(chunk, enc, done)  {
            // var output = chunk.toString().toUpperCase();
            const output = `<!DOCTYPE HTML>
<meta charset="UTF-8">
<meta http-equiv="refresh" content="0; url=${redirectPath}">
<script>
  window.location.href = "${redirectPath}"
</script>
<title>Page Redirection</title>
If you are not redirected automatically, follow the <a href='${redirectPath}'>link</a>`;
            done(null, output);
        });
    }
};
 
copy('out/v3', 'out', options)
  .on(copy.events.COPY_FILE_START, function(copyOperation) {
      // console.info('Copying file ' + copyOperation.src + '...');
  })
  .on(copy.events.COPY_FILE_COMPLETE, function(copyOperation) {
      // console.info('Copied to ' + copyOperation.dest);
  })
  .on(copy.events.ERROR, function(error, copyOperation) {
      console.error('Unable to copy ' + copyOperation.dest);
  })
  .then(function(results) {
      console.info(results.length + ' file(s) copied from /v3 to root for redirects');
  })
  .catch(function(error) {
      return console.error('Copy failed: ' + error);
  });
