# @breakaway/documentation-framework

## Install

We publish this theme [on npm.](https://www.npmjs.com/package/@breakaway/documentation-framework) Install it as a devDependency with your package manager.

`npm i --save-dev @breakaway/documentation-framework`

`yarn add -D @breakaway/documentation-framework`

## First time setup

### Puppeteer

Puppeteer is used to create screenshots, it requires chromium to be installed on your machine

- install chromium using brew:

  `brew install chromium`
- check the chromium path, should point to /opt/homebrew/bin/chromium:

  `which chromium`
- export out the path:

  export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

  export PUPPETEER_EXECUTABLE_PATH=\`which chromium\`

- So you don't have to retype this in the future, save to your shell rc file like .bashrc or .zshrc:

  echo 'export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true' >> ~/.zshrc

  echo 'export PUPPETEER_EXECUTABLE_PATH=\`which chromium\`' >> ~/.zshrc 

### Init documentation project

To get started, you can scaffold out a sample extension docs setup:

`npx pf-docs-framework init --name "My extension"`

If you also want to add relevant script targets to package.json, pass in `--scripts` as well:

`npx pf-docs-framework init --name "My extension" --scripts`

## Usage

For all CLI options, run `npx pf-docs-framework --help`

For individual CLI commands, you can also display more information by running `npx pf-docs-framework <COMMAND> --help`

### Develop docs

`yarn docs:develop`

or

`npx pf-docs-framework start`

### Build docs

`yarn docs:build`

or

`npx pf-docs-framework build all --output public`

> NOTE: If you have `sideEffects: false` in your package.json, that will prevent the CSS from loading in the documentation production build. Set it to true or remove it to enable the CSS from being loaded.

### Generate screenshots

You can generate screenshots against development or production builds.

- Development:

  Terminal 1:

  `yarn docs:develop` or `npx pf-docs-framework start` (Take note of the port it started on, you can modify it in patternfly-docs.config)

  Terminal 2:

  `yarn docs:screenshots` or `npx pf-docs-framework screenshots --urlPrefix http://localhost:<PORT>`

- Production:

  Terminal 1:
  
  - `yarn docs:build` or `npx pf-docs-framework build all --output public`
  - `yarn docs:serve` or `npx pf-docs-framework serve public --port 5000`

  Terminal 2:

  `yarn docs:screenshots` or `npx pf-docs-framework screenshots --urlPrefix http://localhost:5000`