process.setMaxListeners(500);

const captureWebsite = require('capture-website');
const fs = require('fs');
const path = require('path');
const src = path.resolve(__dirname, './preview-screenshots.json');
const previews = JSON.parse(fs.readFileSync(src));

const options = {
  width: 1280,
  height: 800,
  overwrite: true, 
  waitForElement: '#___gatsby > div',
  scaleFactor: 2,
  delay: 1,
  overwrite: true
};

function fileNameFromUrl(url) {
  return url
    .replace('?', '/?')
    .replace('patternfly-4/', 'documentation/react/')
    .replace(/http.*\.(org|sh)/, '')
    .replace(/\//g, '!');
}

(async () => {
  await Promise.all(previews.paths.map(path => {
    const combinedOptions = {
      ...options,
      ...path.options
    };
		return captureWebsite.file(path.url, `previews/${fileNameFromUrl(path.url)}.png`, combinedOptions);
	}));
})();