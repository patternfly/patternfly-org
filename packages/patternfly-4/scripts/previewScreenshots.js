process.setMaxListeners(500);

const captureWebsite = require('capture-website');
const fs = require('fs');
const path = require('path');
const src = path.resolve(__dirname, '../content/preview-screenshots.json');
const previews = JSON.parse(fs.readFileSync(src));

const options = {
	width: 1280,
  height: 800,
  overwrite: true, 
  element: '#___gatsby > div',
  scaleFactor: 2,
  fullPage: true,
  delay: 1
};

const backgroundOptions = {
  width: 1280,
  height: 800,
  overwrite: true, 
  waitForElement: '#___gatsby > div',
  scaleFactor: 2,
  delay: 1
};

function fileNameFromUrl(url) {
  return url.replace('https://v2.patternfly.org', '').replace(/\//g, '!').replace(/\?/g, '__').replace(/\s/g, '_').replace(/%20/g, '_');
}

(async () => {
  await Promise.all(previews[0].map(url => {
		return captureWebsite.file(url, `previews/${fileNameFromUrl(url)}.png`, options);
  }));
  await Promise.all(previews[1].map(url => {
		return captureWebsite.file(url, `previews/${fileNameFromUrl(url)}.png`, backgroundOptions);
	}));
})();