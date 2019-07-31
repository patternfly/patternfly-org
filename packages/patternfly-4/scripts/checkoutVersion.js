const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const sections = require('../static/versions.json');
const packageJson = require('../package.json');

const group = Object.values(sections)
  .reduce((acc, cur) => acc.concat(cur))
  .find(g => g.name === process.argv[2]);
console.log('Checking out resources for', group);

// replace versions in package.json
console.log('Installing new versions in package.json');
Object.entries(group.versions).forEach(([key, value]) => packageJson.dependencies[key] = value)
fs.writeFileSync(path.resolve(__dirname, '../package.json'), JSON.stringify(packageJson, null, 2))
console.log(execSync('yarn').toString());

// checkout right submodules
console.log('Checking out submodules');
execSync('git submodule update --remote');
execSync(`cd _repos/patternfly-react && git checkout @patternfly/react-core@${group.versions['@patternfly/react-core']}`);
execSync(`cd _repos/patternfly-next && git checkout v${group.versions['@patternfly/patternfly']}`);

// set env var for prefix path
console.log(`TODO: export PATH_PREFIX=${group.date}`);

