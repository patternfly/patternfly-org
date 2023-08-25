const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');
const versions = require('@patternfly/documentation-framework/versions.json');

const version = versions.Releases.find(release => release.latest).name;

glob.sync(path.join(__dirname, "../build/patternfly-org/site/**"))
  .filter(file => fs.lstatSync(file).isFile())
  .forEach(file => {
    const newPath = file.replace("patternfly-org/site", `patternfly-org/${version}`);
    
    if (file.endsWith('.js') || file.endsWith('.html')) {
      let contents = fs.readFileSync(file, 'utf8');
      contents = contents.replace(/\/site/g, `/${version}`);
      fs.outputFileSync(newPath, contents);
    } else {
      fs.ensureDirSync(path.dirname(newPath));
      fs.copyFileSync(file, newPath);
    }

  });

const outputDir = path.join(__dirname, "../build/patternfly-org");
fs.moveSync(`${outputDir}/${version}`, `${outputDir}/site/${version}`);

fs.writeFileSync(
  path.join(__dirname, '../build/patternfly-org/versions.json'),
  JSON.stringify(versions)
);
