[![Build Status](https://travis-ci.org/patternfly/patternfly-org.svg?branch=master)](https://travis-ci.org/patternfly/patternfly-org)

# patternfly-org

The PatternFly Org is the new source for the official documentation for PatternFly.

## Development Setup - with Docker

The easiest way to get the site running locally for development purposes is via docker.  Run the pair of commands:

```
npm run docker:build
npm run docker:run
```

The first time you run these commands will be quite slow, as a number of docker layers have to be downloaded, and a number of docker layers have to be built locally.
Subsequent executions however will use cached layers and be much faster.

The docker environment supports "live reloading" of the site, so any source changes will trigger a jekyll incremental build and reload your browser.

## Development Setup - Manually

Development setup requires nodejs and Ruby. If you do not already have nodejs, npm, and Ruby installed on your system, see https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager and https://www.ruby-lang.org/en/downloads.

### Install Dependencies

Install the site dependencies using npm:

    npm install

This will install all necessary packages into `node_modules/`. At this point, the gruntjs tasks are available for use such as starting a local development server or building the site from source.

Additionally you may need to install the grunt command line utility.  To do this run:

    npm install -g grunt-cli

The site is generated using [Jekyll](http://jekyllrb.com/).  After ensuring Ruby is installed and available, run:

    bundle install

### Live Reload Server

A local development server can be quickly fired up by using the Gruntjs server task:

    grunt serve

This local server (i.e., [http://localhost:9002](http://localhost:9002)) has the advantage of having livereload integration. Thus, if you start the Gruntjs server, any changes you make to `.html` or `.less` files will be automatically reloaded into your browser and the changes reflected almost immediately. This has the obvious benefit of not having to refresh your browser and still be able to see the changes as you add or remove them from your development files.  Additionally, any changes made to Jekyll source files (`source/`) will trigger a Jekyll build.

## Getting Started

Asssuming you've completed <a href="#development-setup">Development Setup</a>, from a command line run:

1. `grunt serve`
1.  Visit [http://localhost:9002](http://localhost:9002)
