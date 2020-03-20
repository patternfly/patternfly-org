const fs = require('fs-extra');
const exec = require('child_process').execSync;
const versions = require('gatsby-theme-patternfly-org/versions.json');
const packageJsonOrgPath = 'patternfly-org-4/package.json';
const packageJsonOrg = require(packageJsonOrgPath);

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

Object.entries(version.versions).forEach(([key, val]) => {
  if (packageJsonOrg.dependencies[key]) {
    packageJsonOrg.dependencies[key] = val;
  }
});
fs.writeFileSync(require.resolve(packageJsonOrgPath), JSON.stringify(packageJsonOrg, null, 2));
console.log('Updated', packageJsonOrgPath)

execWithLog('yarn install');
// TODO: git tag