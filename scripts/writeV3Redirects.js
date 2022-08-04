const fs = require('fs');
const path = require('path');

const outDir = 'build/patternfly-org';
const writeRedirect = (file, to) => {
  const parentFolder = path.dirname(file);
  if (!fs.existsSync(parentFolder)) {
    fs.mkdirSync(path.dirname(file), {recursive: true});
  }
  fs.writeFileSync(file,
`<!DOCTYPE HTML>
<meta charset="UTF-8">
<meta http-equiv="refresh" content="0; url=${to}">
<script>
    window.location.href = "${to}"
</script>
<title>Page Redirection</title>
If you are not redirected automatically, click <a href='${to}'>here.</a>
`);
}

// Write static files
writeRedirect(`${outDir}/index.html`, '/v4/');
writeRedirect(`${outDir}/404.html`, '/v4/404/');
writeRedirect(`${outDir}/v4/developer-resources/accessibility-guide`, '/v4/accessibility/accessibility-fundamentals');
fs.writeFileSync(`${outDir}/robots.txt`,
`User-agent: *
Allow: /
Sitemap: https://www.patternfly.org/sitemap.xml
Host: https://www.patternfly.org`);
fs.writeFileSync(`${outDir}/sitemap.xml`,
`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.patternfly.org/v4/sitemap.xml</loc>
  </sitemap>
</sitemapindex>`);
console.log('Wrote 4 static files');

