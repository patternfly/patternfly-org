const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');
const versions = require('theme-patternfly-org/versions.json');

const version = versions.Releases.find(release => release.latest).name;

glob.sync(path.join(__dirname, '../build/patternfly-org/v4/**'))
  .filter(file => fs.lstatSync(file).isFile())
  .forEach(file => {
    const newPath = file.replace('patternfly-org/v4', `patternfly-org/${version}`);

    let contents = fs.readFileSync(file, 'utf8');
    if (file.endsWith('.js') || file.endsWith('.html')) {
      contents = contents.replace(/\/v4/g, `/${version}`);
    }

    fs.ensureFileSync(newPath);
    fs.writeFileSync(newPath, contents);
  });

fs.writeFileSync(
  path.join(__dirname, '../build/patternfly-org/versions.json'),
  JSON.stringify(versions)
);
