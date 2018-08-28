const path = require('path');

module.exports = {
  '@siteComponents': path.resolve(__dirname, '../_repos/core/site/_site'),
  '@components': path.resolve(__dirname, '../_repos/core/patternfly/components'),
  '@layouts': path.resolve(__dirname, '../_repos/core/patternfly/layouts'),
  '@demos': path.resolve(__dirname, '../_repos/core/demos'),
  '@project': path.resolve(__dirname, '../_repos/core'),
  '@patternfly/react-core': path.resolve(__dirname, '../_repos/react-core/src')
};
