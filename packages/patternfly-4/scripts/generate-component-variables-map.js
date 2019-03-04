const tokensModule = require('@patternfly/react-tokens');
const { writeFileSync } = require('fs-extra');
const { resolve, dirname, join } = require('path');

let allVariables = {};
Object.entries(tokensModule).map(([key, token]) => {
  const shortName = token.name.split('--')[1].split('__')[0];
  if (!allVariables[shortName]) {
    allVariables[shortName] = [];
  }
}, []);

const json = JSON.stringify(allVariables, null, 2);
const contentDir = resolve(__dirname, '../content');
writeFileSync(join(contentDir, 'react-css-variables-map.json'), json);