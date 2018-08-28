/* eslint-disable global-require,import/no-dynamic-require */
const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');

const dest = path.resolve(__dirname, '../_repos/react-core/dist');

const packageDirs = ['react-core'];
const moduleTypes = ['js', 'esm'];

moduleTypes.forEach(moduleType => {
  packageDirs.forEach(packageDir => copyPackageDocs(packageDir, moduleType));
});

function copyPackageDocs(packageDir, moduleType) {
  const srcBase = path.resolve(__dirname, '../node_modules/@patternfly/react-lerna-root/packages/', packageDir);
  const distBase = path.resolve(__dirname, '../node_modules/@patternfly/', packageDir);
  const distModule = path.join(distBase, 'dist', moduleType);
  
  const { name } = require(path.join(srcBase, 'package.json'));

  const formattedName = name.replace('@patternfly/', '');

  const docFiles = glob.sync('**/*.docs.js', { cwd: distModule });
  const exampleFiles = glob.sync('**/examples/**', { cwd: distModule });
  const copyDocFile = createCopyFunction(formattedName, distModule, moduleType);

  docFiles.forEach(copyDocFile);
  exampleFiles.forEach(copyDocFile);
}

function createCopyFunction(packageName, distModule, moduleType) {
  console.log(`packageName: ${packageName}`);
  console.log(`distModule: ${distModule}`);
  console.log(`moduleType: ${moduleType}`);
  return filePath => {
    const from = path.join(distModule, filePath);
    const to = path.join(dest, moduleType, packageName, filePath);
    fs.copySync(from, to);
  };
}
