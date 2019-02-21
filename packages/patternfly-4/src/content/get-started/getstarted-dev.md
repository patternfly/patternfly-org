---
path: "/get-started/developers"
---
# Develop with PatternFly
Before you begin, check out [About PatternFly 4](/get-started/about) to get acquainted with the basic elements of the design system.

Get started with:
* [HTML/CSS](#html/css)
* [React](#react)

## HTML/CSS
The HTML/CSS library provides a collection of code samples you can use to build interfaces with consistent PatternFly markup and styling.

### Before you begin
**Install NPM**
NPM is a package manager that’s bundled with Node.js. It’s required to download dependencies. Download the installer from https://nodejs.org/en/download

### Installing
Using npm, run the following commands to install:
```
npm install @patternfly/patternfly-next
```

**What’s included?**
Each of the three modules (layouts, components, and utilities) delivers a sass file (.scss) and CSS file, so you can include them in your build environment or consume the CSS from your page header.

If you need to overwrite any elements, we recommend extending the variables found in the .scss files, rather than manually overwriting the CSS.

* PatternFly 4 **components** are kept under ``` @patternfly/patternfly-next/components/ ```
* PatternFly 4 **layouts** are kept under ```@patternfly/patternfly-next/layouts/```
* PatternFly 4 **utilities** are kept under``` @patternfly/patternfly-next/utilities/```

**In additional detail, the package includes:**
A single file for the entire compiled library: ```node_modules/@patternfly/patternfly-next/patternfly.css```

A minified version of the patternfly.css: ```node_modules/@patternfly/patternfly-next/patternfly.min.css```

Individual files with each layout,  component, and utility compiled separately:
* ```node_modules/@patternfly/patternfly-next/layouts/<LayoutName>/<layout-name>.css```
* ```node_modules/@patternfly/patternfly-next/components/<ComponentName>/<component-name>.css```
* ```node_modules/@patternfly/patternfly-next/utilities/<UtilityName>/<utility-name>.css```

A single file for the entire library's source (SASS): ```node_modules/@patternfly/patternfly-next/patternfly.scss```

Individual source files for each layout, component, and utility (SASS):
* ```node_modules/@patternfly/patternfly-next/components/<ComponentName>/<component-name>.scss```
* ```node_modules/@patternfly/patternfly-next/layouts/<LayoutName>/<layout-name>.scss```
* ```node_modules/@patternfly/patternfly-next/utilities/<UtilityName>/<utility-name>.scss```

Use these files to consume the library. The recommended consumption approach will vary from project to project.

### Configuring your project
1. Navigate to the patternfly-next package you just installed and find the PatternFly 4 CSS stylesheet, ```patternfly.css```

2. Copy ```patternfly.css``` to your project's CSS directory.

3. In your HTML file, add the following line to the bottom of your list of CSS files to link to your new stylesheet:

  ```
  <link rel="stylesheet" href="css/patternfly.css">
  ```

  This will ensure that PatternFly 4 styles take precedence over anything that currently resides in your application.

4. If you want to use PatterFly 4 utilities in your project, find the utilities file,  ```patternfly-addons.css```

5. Copy ```patternfly-addons.scss``` into your project’s CSS directory.

6. In your HTML file, add the following line to the bottom of your list of CSS files:

  ```
  <link rel="stylesheet" href="css/patternfly-addons.scss">
  ```

### Using styles
**Typography**
PatternFly 4 uses the Overpass font family. Overpass can be utilized in two different ways:

  Built into PatternFly 4
  By default, Overpass is included as part of the PatternFly 4 distributed CSS file. You do not need to do anything with your configuration to use this font family.

  Used as a CDN
  If you wish to use the CDN for Overpass rather than the default approach, you need to update the ```utilities/variables.scss``` file and build PatternFly 4 as part of your build process.

  To use the CDN vs the standard build, update the ```utilities/variables.scss``` file as follows:

  ```
  $pf-global--enable-font-overpass-cdn: true !default;
  ```

**Icons**
PatternFly 4 uses Font Awesome 5. Font Awesome 5 can be utilized in two different ways:

  Built into PatternFly 4
  By default, Overpass is included as part of the PatternFly 4 distributed CSS file. You do not need to do anything with your configuration to use this font family.

  Used as a CDN
  If you wish to use the CDN for Font Awesome 5 rather than the default approach, you need to update the ```utilities/variables.scss``` file (from source ```node_modules/@patternfly/patternfly-next/```) and build PatternFly 4 as part of your build process.

  To use the CDN vs the standard build, update the ```utilities/variables.scss``` file as follows:

  ```
  $pf-global--enable-fontawesome-cdn: true !default;
  ```

### Customizing PatternFly for your project
The CSS variable system enables you to easily customize things like color or shape without overwriting existing PatternFly styles.

[Learn more and view CSS variables.](/documentation/react/css-variables/)

<!-- PF class structure is scoped so you can use PF4 with another design system
Use PF3 and 4 at the same time
All the CSS classes
Using bootstrap, for example, bootstrap will not inadvertently style our elements, scoped = name uniquely to pf
-->

## React

The React library provides a collection of React components you can use to build interfaces with consistent markup, styling, and behavior.

## Before you begin
### Install NPM
NPM is a package manager that’s bundled with Node.js. It’s required to download dependencies. Download the installer from https://nodejs.org/en/download

## Getting started
**If you’re starting from scratch and would like to use a sample project**, we recommend starting with the PatternFly React seed.

The React seed is an open source build scaffolding utility created to give developers a jump start when creating new projects that will use Patternfly.

**If you already have a project**, you can skip to the next section, [Installing and configuring PatternFly React](#installing-and-configuring-patternfly).

### Starting with the React seed
**Fork the project**
[Fork and clone](https://help.github.com/articles/fork-a-repo/) the PatternFly React Seed project from https://github.com/patternfly/patternfly-react-seed.

**Install the project**
Follow the steps outlined in the [React seed README](https://github.com/patternfly/patternfly-react-seed#quick-start) to install.

### Installing and configuring PatternFly React
Using npm, run the following commands to install:
```
npm install @patternfly/react-core --save
```

**OR**

Using yarn, run the following commands to install:
```
yarn add @patternfly/react-core
```

**If you’re using webpack...**
Check out the following files for example configurations:
* [webpack.common.js](https://github.com/patternfly/patternfly-react-seed/blob/master/webpack.common.js)
* [webpack.dev.js](https://github.com/patternfly/patternfly-react-seed/blob/master/webpack.dev.js)
* [webpack.prod.js](https://github.com/patternfly/patternfly-react-seed/blob/master/webpack.prod.js)

**If you’re using babel...**
See [babel.config.js](https://github.com/patternfly/patternfly-react-seed/blob/master/babel.config.js) for an example configuration.

<!-- We don't have this yet, but we will need it.

**If you’re using typescript...**
See [typescript.example.js](URL) for an example configuration. -->

<!--### Importing and using components -->
