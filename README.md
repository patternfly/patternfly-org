# patternfly-toolkit

The PatternFly Toolkit is the new source for the official documentation for PatternFly.

## Development Setup

Development setup requires nodejs and Ruby. If you do not already have nodejs, npm, and Ruby installed on your system, see https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager and https://www.ruby-lang.org/en/downloads.

### Install Bower

After ensuring nodejs and npm are available, install [Bower](http://bower.io/) globally:

    npm install -g bower

Bower is used to install and update dependencies.

### Install Development Dependencies

The development includes the use of a number of helpful tasks. In order to setup your development environment to allow running of these tasks, you need to install the local nodejs packages declared in `package.json`. To do this run:

    npm install

This will install all necessary development packages into `node_modules/`. At this point, the gruntjs tasks are available for use such as starting a local development server or building the site from source.

Additionally you may need to install the grunt command line utility.  To do this run:

    npm install -g grunt-cli

The site is generated using [Jekyll](http://jekyllrb.com/).  After ensuring Ruby is installed and available, run:

    gem install jekyll

### Live Reload Server

A local development server can be quickly fired up by using the Gruntjs server task:

    grunt server

This local server (i.e., [http://localhost:9002](http://localhost:9002)) has the advantage of having livereload integration. Thus, if you start the Gruntjs server, any changes you make to `.html` or `.less` files will be automatically reloaded into your browser and the changes reflected almost immediately. This has the obvious benefit of not having to refresh your browser and still be able to see the changes as you add or remove them from your development files.  Additionally, any changes made to Jekyll source files (`source/`) will trigger a Jekyll build.

## Getting Started

Asssuming you've completed <a href="#development-setup">Development Setup</a>, from a command line run:

1. `grunt server`
1.  Visit http://localhost:9002/
