---
id: Develop
title: Develop with PatternFly
section: get-started
---
import './get-started.css';

## Getting started 

In order to develop with PatternFly, you will need to:

1. [Learn about the PatternFly design system](/get-started/about-patternfly) to get acquainted with all of its elements.

1. [Learn about our design token system](/tokens/about-tokens), which enables you to build interfaces with consistent PatternFly styling, including colors, shadows, spacing, and more.

1. Install a package manager to help you install, update, and configure all necessary PatternFly packages. We recommend [npm](https://nodejs.org/en/download) or [Yarn](https://yarnpkg.com/getting-started).

1. Configure your environment to get started with our [React](#develop-with-react) and/or [HTML/CSS](#develop-with-htmlcss) libraries.

## Develop with React

[PatternFly's React library](https://github.com/patternfly/patternfly-react) contains a collection of components that you can use to build interfaces with consistent markup, styling, and behavior. It is composed of a number of React packages, which are published in the following npm packages:

* [@patternfly/react-core](https://www.npmjs.com/package/@patternfly/react-core): Most React core components.
* [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts): PatternFly charting components.
* [@patternfly/react-code-editor](https://www.npmjs.com/package/@patternfly/react-code-editor): A PatternFly wrapper for the Monaco code editor.
* [@patternfly/react-icons](https://www.npmjs.com/package/@patternfly/react-icons): PatternFly icons as React components.
* [@patternfly/react-styles](https://www.npmjs.com/package/@patternfly/react-styles): CSS-in-JS capabilities. 
* [@patternfly/react-table](https://www.npmjs.com/package/@patternfly/react-table): PatternFly table components.
* [@patternfly/react-tokens](https://www.npmjs.com/package/@patternfly/react-tokens): PatternFly's CSS variables, transformed into JavaScript objects for use with React.

These packages are maintained together. To determine which versions of each package are compatible with the rest, view our [release highlights](https://www.patternfly.org/get-started/release-highlights).

We support the following configurations:
* [TypeScript](https://github.com/patternfly/patternfly-react-seed/blob/master/tsconfig.json)
* [Webpack](https://github.com/patternfly/patternfly-react-seed/blob/master/webpack.common.js)
* [Jest](https://github.com/patternfly/patternfly-react-seed/blob/master/jest.config.js)
* [Editor](https://github.com/patternfly/patternfly-react-seed/blob/master/.editorconfig)

### Install and configure PatternFly React

#### New projects

If you'd like to start using PatternFly via a sample project, you can use the [PatternFly React seed](https://github.com/patternfly/patternfly-react-seed). We created this open-source build scaffolding utility to help developers jump start new PatternFly projects.

To get started:

1. Fork the React seed:
    - TypeScript: [Fork and clone the PatternFly React seed project](https://github.com/patternfly/patternfly-react-seed).
    - JavaScript: [Fork and clone the JavaScript branch of the PatternFly React seed project](https://github.com/patternfly/patternfly-react-seed/tree/javascript).

  For more information about how to fork and clone a repo, [view GitHub Help](https://help.github.com/articles/fork-a-repo/).

1. Install the project:

  Follow the steps outlined in the [React seed README](https://github.com/patternfly/patternfly-react-seed#quick-start) to install.

#### Existing projects

If you wish to migrate an existing project to PatternFly you must install and configure PatternFly React using either of these methods:

* Using npm, run the following command:
    ```sh
    npm install @patternfly/react-core --save
    ```

* Using Yarn, run the following command:
    ```sh
    yarn add @patternfly/react-core
    ```

## Develop with HTML/CSS 

The PatternFly HTML/CSS library contains a collection of code samples that you can use to build interfaces with consistent PatternFly markup and styling.

Each of the 3 modules (layouts, components, and utilities) delivers Sass (.scss) and CSS files that you can include in your build environment or consume from your page header. If you need to overwrite any elements, we recommend extending the variables found in the Sass files, rather than manually overwriting the CSS.

When you install PatternFly, the package includes:

  * A single file for the entire compiled library: ```node_modules/@patternfly/patternfly/patternfly.css```
  * Individual files with each component compiled separately: ```node_modules/@patternfly/patternfly/<ComponentName>/styles.css```
  * A single file for the entire library's source: ```node_modules/@patternfly/patternfly/patternfly.scss```
  * Individual files for each component's source: ```node_modules/@patternfly/patternfly/<ComponentName>/styles.scss```

Use these files to consume the library. The recommended consumption approach will vary from project to project.

### Install and configure PatternFly HTML/CSS

1. Using npm, run the following command to install the HTML/CSS library:
    
    ```sh
    npm install @patternfly/patternfly --save
    ```

1. Navigate to the package you just installed to find the PatternFly CSS stylesheet, ```patternfly.css```, and copy it into your project's CSS directory.

1. In your HTML file, link to your new PatternFly stylesheet by adding the following line to the bottom of your list of CSS files:

  ```html noLive
  <link rel="stylesheet" href="css/patternfly.css">
  ```
  <br />
  This will ensure that PatternFly styles take precedence over anything that currently resides in your application.

1. If you want to use PatternFly utilities in your project, find the utilities file, ```patternfly-addons.css```, and copy it into your project’s CSS directory.

1. In your HTML file, add the following line to the bottom of your list of CSS files:

  ```html noLive
  <link rel="stylesheet" href="css/patternfly-addons.css">
  ```

### Using icons

PatternFly uses [Font Awesome 5](https://fontawesome.com/), which can be utilized in 2 different ways:

  * **Built into PatternFly:** By default, Font Awesome is included as part of the PatternFly CSS file. You do not need to do anything else to use this icon font family.

  * **Used as a CDN:** If you wish to use the CDN for Font Awesome 5 rather than the default approach, you need to complete the following steps: 
    1. Update the ```sass-utilities/scss-variables.scss``` file (from source ```node_modules/@patternfly/patternfly/```) to include:

      ```scss
      $pf-v6-global--enable-fontawesome-cdn: true !default;
      ```

    1. Build PatternFly as part of your build process. 

## Testing

Many PatternFly components comply with the Open UI Automation (OUIA) guidelines, which are designed to ease the burden of creating and maintaining automated testing environments.  Additional details about OUIA and the full list of compliant components [can be found in our developer resources.](/developer-resources/open-ui-automation)

## Supported browsers and operating systems

PatternFly is supported on the 2 latest major versions of the following browsers: 
- Chrome
- Firefox
- Safari
- Edge

## Breaking changes

A breaking change is any modification to our design system that is significant enough to require intervention to ensure proper functionality in a UI built with PatternFly. These changes can occur in both the code and design of PatternFly features. To minimize major and unexpected disruptions, PatternFly typically reserves breaking changes for major version releases, with the following exceptions:
- Critical bug fixes reported outside of the major release schedule.
- Updates to components and features labeled as "beta."

### Design breaking changes

Breaking changes in PatternFly’s design include visual changes that would alter the UI and significantly disrupt the user experience. To restore the proper visual functioning of a UI, intentional updates are required to account for the changes.

These changes include: 
- Significant changes to a component’s style, which may be different enough to confuse users. 
- Increases in the size of text or spacers that forcibly change content layout in a UI in ways that aren’t desired.

### Core CSS breaking changes 

Breaking changes to our core CSS library are the result of code changes that include:
- CSS variables:
  - Removing or renaming a CSS variable.
  - Repurposing or changing the role of a CSS variable.
  - Changing the relationship between tokens in the semantic layer (tokens that start with `--pf-t` and do not end in a number).
- Class names:
  - Removing or renaming a class.
  - Making a class required that was not previously required.

### React breaking changes

Breaking changes to our React library are the result of code changes that include:
- Component props: 
  - Removing a prop. 
  - Changing the name, type, role, or function of a prop. 
  - Making a prop required that was not previously required.  
- Dependencies: 
  - Changes that alter component behavior. 
  - Changes that alter a consumer’s build process. 
  - Changes to the signature of an event handler.

