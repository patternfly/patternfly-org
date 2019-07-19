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
  delay: 3,
  overwrite: true,
  debug: false,
  disableAnimations: true
};

function fileNameFromUrl(url) {
  return url
    .replace('patternfly-4/', 'documentation/react/')
    .replace(/http.*\.(org|sh)\/v4/, '')
    .replace(/[^A-Za-z]+/g, '');
}

function adjustSourcePath(url) {
  let sourceUrl = url;
  if (url.indexOf('/core/') > -1) {
    // Transform from: https://www.patternfly.org/v4/documentation/core/components/aboutmodalbox-full/?component=About%20modal%20box
    // to: https://pf4.patternfly.org/components/AboutModalBox/examples-full/?component=About%20modal%20box
    sourceUrl = url.replace('https://www.patternfly.org/v4/documentation/core/', 'https://pf4.patternfly.org/');
    let sourceUrlArr = sourceUrl.split('/');
    sourceUrl = sourceUrlArr.map(part => part.replace('-full', '/examples-full')).join('/');
  } else if (url.indexOf('/react/' > -1)) {
    // Transform from: https://www.patternfly.org/v4/documentation/react/components/loginpage/simpleloginpage/
    // to: https://patternfly-react.surge.sh/patternfly-4/components/loginpage/simpleloginpage/
    sourceUrl = url.replace('https://www.patternfly.org/v4/documentation/react/', 'https://patternfly-react.surge.sh/patternfly-4/');
  }
  return sourceUrl;
}

(async () => {
  await Promise.all(previews.paths.map(path => {
    const combinedOptions = {
      ...options,
      ...path.options
    };
    
		return captureWebsite.file(path.src || adjustSourcePath(path.url), `previews/${fileNameFromUrl(path.url)}.png`, combinedOptions);
	}));
})();