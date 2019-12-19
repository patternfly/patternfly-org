const fs = require('fs-extra');
const exec = require('child_process').execSync;
const versions = require('gatsby-theme-patternfly-org/versions.json');
const packageJsonOrg = require('patternfly-org-4/package.json');

const versionToCheckout = process.argv[2] || '';
const version = versions.Releases.find(({ name }) => name === versionToCheckout);


if (!versionToCheckout || !version) {
  console.error('Must specify valid version');
  process.exit(1);
}

console.log('Checking out', versionToCheckout);

function execWithLog(command) {
  console.log('>', command);
  console.log(exec(command).toString());
}

execWithLog('git pull --recurse-submodules');
execWithLog(`cd packages/patternfly-4/patternfly-next && git merge v${version.versions['@patternfly/patternfly']}`);
execWithLog(`cd packages/patternfly-4/patternfly-react && git merge @patternfly/react-core@${version.versions['@patternfly/react-core']}`);

Object.entries(version.versions).forEach(([key, val]) => {
  if (packageJsonOrg.dependencies[key]) {
    packageJsonOrg.dependencies[key] = `^${val}`;
  }
});
fs.writeFileSync(require.resolve('patternfly-org-4/package.json'), JSON.stringify(packageJsonOrg, null, 2));

execWithLog('yarn install');
// TODO: git tag