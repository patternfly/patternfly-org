[![Build Status](https://travis-ci.org/patternfly/patternfly-org.svg?branch=master)](https://travis-ci.org/patternfly/patternfly-org)

# patternfly-org

The PatternFly Org is the source for the official documentation for PatternFly 3 and PatternFly 4.

## Development Setup

Development setup requires yarn. If you do not already have yarn installed on your system, see https://yarnpkg.com/en/.

### Build

Install the site dependencies and build it using yarn:

    yarn install
    yarn bootstrap
    yarn build

The packages/patternfly-3 site is generated using [Jekyll](http://jekyllrb.com/).
The packages/patternfly-4 site is generated using [Gatsby](https://www.gatsbyjs.org/).

### Live Reload Server

A local development server can be quickly fired up for patternfly 3 or patternfly 4 by using either of these commands:

    yarn start:pf3
    yarn start:pf4

### Deploy

Deploy the static content with your favorite web-publishing tool. For example with surge:
    yarn global add surge
    cd out/
    surge
