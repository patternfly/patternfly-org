---
id: Develop
title: Develop with PatternFly
section: get-started
---
import './get-started.css';


Before you begin, check out our [overview of PatternFly](/get-started/about) to get acquainted with the basic elements of the design system.

**Before you begin, install a package manager:**

* [Use npm](https://nodejs.org/en/download)
* [Use Yarn](https://yarnpkg.com/en/docs/getting-started)

**Get started with:**

* [React](#react)
* [HTML/CSS](#htmlcss)

## React

The React library provides a collection of React components you can use to build interfaces with consistent markup, styling, and behavior.

## Getting started
  * **Start with a sample project**

  [Start with the PatternFly React seed](#start-with-the-react-seed), which is an open source build scaffolding utility created to give developers a jump start when creating new projects that will use PatternFly.


  * **Start with your existing project**

  If you want to start with your existing project, skip to: [Install and configure PatternFly React](#install-and-configure-patternfly-react).

### Start with the React seed
1. **Fork the project**

  * TypeScript: [Fork and clone the PatternFly React Seed project](https://github.com/patternfly/patternfly-react-seed).
  * JavaScript: [Fork and clone the JavaScript branch of the PatternFly React Seed project](https://github.com/patternfly/patternfly-react-seed/tree/javascript).

  For more information about how to fork and clone a repo, [view GitHub Help](https://help.github.com/articles/fork-a-repo/).


2. **Install the project**

  Follow the steps outlined in the [README](https://github.com/patternfly/patternfly-react-seed#quick-start) to install.

### Install and configure PatternFly React
* Using npm, run the following command to install:
  ```
  npm install @patternfly/react-core --save
  ```

  **OR**

* Using yarn, run the following command to install:
  ```
  yarn add @patternfly/react-core
  ```

**Configurations**
* [TypeScript](https://github.com/patternfly/patternfly-react-seed/blob/master/tsconfig.json)
* [Webpack](https://github.com/patternfly/patternfly-react-seed/blob/master/webpack.common.js)
* [Jest](https://github.com/patternfly/patternfly-react-seed/blob/master/jest.config.js)
* [Editor](https://github.com/patternfly/patternfly-react-seed/blob/master/.editorconfig)

## HTML/CSS
The HTML/CSS library provides a collection of code samples you can use to build interfaces with consistent PatternFly markup and styling.

### Install
Using npm, run the following commands to install:
```
npm install @patternfly/patternfly --save
```

**What’s included?**

Each of the three modules (layouts, components, and utilities) delivers a Sass file (.scss) and CSS file, so you can include them in your build environment or consume the CSS from your page header.

If you need to overwrite any elements, we recommend extending the variables found in the .scss files, rather than manually overwriting the CSS.

When you install PatternFly, the package includes:

  * A single file for the entire compiled library: ```node_modules/@patternfly/patternfly/patternfly.css```
  * Individual files with each component compiled separately: ```node_modules/@patternfly/patternfly/<ComponentName>/styles.css```
  * A single file for the entire library's source (Sass): ```node_modules/@patternfly/patternfly/patternfly.scss```
  * Individual files for each component's source (Sass): ```node_modules/@patternfly/patternfly/<ComponentName>/styles.scss```

Use these files to consume the library. The recommended consumption approach will vary from project to project.

### Configure your project
1. Navigate to the patternfly-next package you just installed and find the PatternFly CSS stylesheet, ```patternfly.css```

2. Copy ```patternfly.css``` to your project's CSS directory.

3. In your HTML file, add the following line to the bottom of your list of CSS files to link to your new stylesheet:

  ```
  <link rel="stylesheet" href="css/patternfly.css">
  ```

  This will ensure that PatternFly styles take precedence over anything that currently resides in your application.

4. If you want to use PatternFly utilities in your project, find the utilities file,  ```patternfly-addons.css```

5. Copy ```patternfly-addons.css``` into your project’s CSS directory.

6. In your HTML file, add the following line to the bottom of your list of CSS files:

  ```
  <link rel="stylesheet" href="css/patternfly-addons.css">
  ```

### Using styles
**Typography**

PatternFly uses the Overpass font family. Overpass can be utilized in two different ways:

  * **Built into PatternFly**

  By default, Overpass is included as part of the PatternFly distributed CSS file. You do not need to do anything with your configuration to use this font family.

  * **Used as a CDN**

  If you wish to use the CDN for Overpass rather than the default approach, you need to update the ```sass-utilities/scss-variables.scss``` file and build PatternFly as part of your build process.

  To use the CDN vs the standard build, update the ```sass-utilities/scss-variables.scss``` file as follows:

  ```
  $pf-global--enable-font-overpass-cdn: true !default;
  ```

**Icons**

PatternFly uses Font Awesome 5. Font Awesome 5 can be utilized in two different ways:

  * **Built into PatternFly**

  By default, Overpass is included as part of the PatternFly distributed CSS file. You do not need to do anything with your configuration to use this font family.

  * **Used as a CDN**

  If you wish to use the CDN for Font Awesome 5 rather than the default approach, you need to update the ```utilities/variables.scss``` file (from source ```node_modules/@patternfly/patternfly-next/```) and build PatternFly as part of your build process.

  To use the CDN vs the standard build, update the ```sass-utilities/scss-variables.scss``` file as follows:

  ```
  $pf-global--enable-fontawesome-cdn: true !default;
  ```

### Customizing PatternFly for your project
The CSS variable system enables you to easily customize things like color or shape without overwriting existing PatternFly styles.

[**Learn more and view CSS variables**](/documentation/overview/global-css-variables) <i class="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"></i>
