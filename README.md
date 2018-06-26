[![Build Status](https://travis-ci.org/patternfly/patternfly-org.svg?branch=master)](https://travis-ci.org/patternfly/patternfly-org)

# patternfly-org

The PatternFly Org is the source for the official documentation for PatternFly 3 and PatternFly 4.

## Development Setup

Development setup requires nodejs and Ruby. If you do not already have nodejs, npm, and Ruby installed on your system, see https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager and https://www.ruby-lang.org/en/downloads.

### Install Dependencies

Install the site dependencies using yarn:

    yarn global add lerna grunt-cli gatsby-cli
    yarn bootstrap
    yarn build

This will install all necessary packages into `node_modules/`.

The packages/patternfly-3 site is generated using [Jekyll](http://jekyllrb.com/).
The packages/patternfly-4 site is generated using [Gatsby](https://www.gatsbyjs.org/).