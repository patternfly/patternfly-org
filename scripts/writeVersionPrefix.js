const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');
const versions = require('theme-patternfly-org/versions.json');

const version = versions.Releases.find(release => release.latest).name;

glob.sync(path.join(__dirname, '../build/patternfly-org/v4/**'))
  .filter(file => fs.lstatSync(file).isFile())
  .forEach(file => {
    const newPath = file.replace('patternfly-org/v4', `patternfly-org/${version}`);

    if (file.endsWith('.js') || file.endsWith('.html')) {
      let contents = fs.readFileSync(file, 'utf8');
      contents = contents.replace(/\/v4/g, `/${version}`);
      fs.outputFileSync(newPath, contents);
    } else {
      fs.ensureDirSync(path.dirname(newPath));
      fs.copyFileSync(file, newPath);
    }

  });

fs.writeFileSync(
  path.join(__dirname, '../build/patternfly-org/versions.json'),
  JSON.stringify(versions)
);
