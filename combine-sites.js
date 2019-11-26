const fs = require('fs-extra');
const glob = require('glob');

const v3_from = 'packages/patternfly-3/_site';
const v4_from = 'packages/patternfly-4/public';

const outDir = 'public';
const v3_to = `${outDir}/v3`;
const v4_to = `${outDir}/v4`;
const writeRedirect = (file, to) => {
  fs.ensureFileSync(file);
  fs.writeFileSync(file,
    `<!DOCTYPE HTML>
<meta charset="UTF-8">
<meta http-equiv="refresh" content="0; url=${to}">
<script>
    window.location.href = "${to}"
</script>
<title>Page Redirection</title>
If you are not redirected automatically, click <a href='${to}'>here.</a>
`
  );
}

// Clean last build
fs.removeSync(outDir);

// Copy PF3 files into /v3
fs.copySync(v3_from, v3_to);
console.log(`Copied pf3 build into ${v3_to}`);

// Copy PF4 files into /v4
fs.copySync(v4_from, v4_to)
console.log(`Copied pf4 build into ${v4_to}`);

// Write static files
writeRedirect(`${outDir}/index.html`, '/v4/');
writeRedirect(`${outDir}/404.html`, '/v4/404/');
fs.writeFileSync(`${outDir}/robots.txt`, `User-agent: *
Allow: /
Sitemap: https://www.patternfly.org/sitemap.xml
Host: https://www.patternfly.org`);
fs.writeFileSync(`${outDir}/sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.patternfly.org/v3/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://www.patternfly.org/v4/sitemap.xml</loc>
  </sitemap>
</sitemapindex>`);
console.log('Wrote 4 static files');

// Write PF3 redirects
const redirectPaths = glob.sync(
  `${v3_to}/**/*.html`,
  { ignore: [`${v3_to}/components/**`, `${v3_to}/*.html`] }
);

redirectPaths.forEach(file => {
  writeRedirect(file.replace(v3_to, outDir), file.replace(outDir, ''))
});
console.log(`Wrote ${redirectPaths.length} redirects`);
