const findInFiles = require('find-in-files');
const { lstatSync, readdirSync } = require('fs')
const { resolve, dirname, join } = require('path');
const { writeFileSync } = require('fs-extra');
const contentDir = resolve(__dirname, '../_repos/react-core/src/components');

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory);

let mapping = {};

getDirectories(contentDir).map(dir => {
  const component = dir.split('/').pop();
  if (!mapping[component]) {
    mapping[component] = [];
  }

  findInFiles.find({'term': "@patternfly/patternfly/components", 'flags': 'g'}, dir)
    .then(function(results) {
      // console.log(dir);
      for (const result in results) {
          const res = results[result];
          // console.log(
          //     'found "' + res.matches[0] + '" ' + res.count
          //     + ' times in "' + result + '": '
          // );
          let imports = [];
          for (const line in res.line) {
            // console.log(res.line[line]);
            const stylesheet = res.line[line].split('/').pop().split('.')[0];
            // console.log(stylesheet);
            // console.log(mapping[component].indexOf(stylesheet));
            if (mapping[component].indexOf(stylesheet) === -1) {
              mapping[component].push(stylesheet);
            }
          }
      }
    });

    console.log(JSON.stringify(mapping, null, 2));
});