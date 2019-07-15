const sections = require('../static/versions.json');
const packageJson = require('../package.json');

const group = Object.values(sections)
  .reduce((acc, cur) => acc.concat(cur))
  .find(g => g.name === process.argv[2])
console.log(group, process.argv[2])

// replace versions in package.json
console.log('Replacing versions in package.json')
Object.entries(group.versions).forEach(([key, value]) => packageJson.dependencies[key] = value)
console.log(packageJson)

// checkout right submodule
// set env var for prefix path
