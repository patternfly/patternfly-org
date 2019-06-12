const fs = require('fs');
const request = require('request');

const packageJson = require('@patternfly/react-core/package.json');
// get the specific version of patternfly as used by the react examples
const pfVersion = packageJson.devDependencies['@patternfly/patternfly'];
const patternFlySrc = `https://unpkg.com/@patternfly/patternfly@${pfVersion}/patternfly.min.css`;
const patternFlyDest = '_repos/react-core/patternfly.min.css';
const patternFlyAddonsSrc = `https://unpkg.com/@patternfly/patternfly@${pfVersion}/patternfly-addons.css`;
const patternFlyAddonsDest = '_repos/react-core/patternfly-addons.css';
const patternFlyIconsSrc = `https://unpkg.com/@patternfly/patternfly@${pfVersion}/patternfly-icons.css`;
const patternFlyIconsDest = '_repos/react-core/patternfly-icons.css'

const download = (url, dest, cb) => {
    const file = fs.createWriteStream(dest);
    const sendReq = request.get(url);

    // verify response code
    sendReq.on('response', (response) => {
        if (response.statusCode !== 200) {
            return cb('Response status was ' + response.statusCode);
        }

        sendReq.pipe(file);
    });

    // close() is async, call cb after close completes
    file.on('finish', () => file.close(cb));

    // check for request errors
    sendReq.on('error', (err) => {
        fs.unlink(dest);
        return cb(err.message);
    });

    file.on('error', (err) => { // Handle errors
        fs.unlink(dest); // Delete the file async. (But we don't check the result)
        return cb(err.message);
    });
};

const errorCb = msg => {
  console.log(msg);
};

download(patternFlySrc, patternFlyDest, errorCb);
download(patternFlyAddonsSrc, patternFlyAddonsDest, errorCb);
download(patternFlyIconsSrc, patternFlyIconsDest, errorCb);