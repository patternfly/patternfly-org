---
path: "/get-started/developers"
---
<h1 class="pf-c-title pf-m-4xl">Develop with PatternFly</h1>
<p>Before you begin, check out <a href="/get-started/about">About Patternfly 4</a> to get acquainted with the basic elements of the design system.</p>

<h1 class="pf-c-title pf-m-xl pf-u-mt-xl">Get started with:</h1>

<div class="link"><a href="#react">React</a> <a href="#html/css">HTML/CSS</a></div>

<h1 class="pf-c-title pf-m-3xl pf-u-mt-3xl">React</h1>
<p>The React library provides a collection of React components you can use to build interfaces with consistent markup, styling, and behavior.</p>

<h1 class="pf-c-title pf-m-xl pf-u-mt-xl">Before you begin</h1>
<p><b>Install a Package Manager</b></p>

<p><b>NPM</b></p>
<p><a target="_blank" href="https://nodejs.org/en/download">Use npm</a></p>

<p><b>Yarn</b></p>
<p><a target="_blank" href="https://yarnpkg.com/en/docs/getting-started">Use Yarn</a></p>


<h1 class="pf-c-title pf-m-xl pf-u-mt-xl">Getting started</h1>
<p><b>If you’re starting from scratch and would like to use a sample project</b>, we recommend starting with the PatternFly React seed.</p>

<p>The React seed is an open source build scaffolding utility created to give developers a jump start when creating new projects that will use Patternfly.</p>

<p><b>If you already have a project</b>, you can skip to the next section, [Installing and configuring PatternFly React](#installing-and-configuring-patternfly).</p>

<h1 class="pf-c-title pf-m-xl pf-u-mt-xl">Starting with the React Seed</h1>
<p><b>Fork the project</b> <a target="_blank" href="https://help.github.com/articles/fork-a-repo/">Fork and clone</a> the PatternFly React Seed project from <a target="_blank" href="https://github.com/patternfly/patternfly-react-seed">https://github.com/patternfly/patternfly-react-seed.</a></p>

<p><b>Install the project</b>
Follow the steps outlined in the [React seed README](https://github.com/patternfly/patternfly-react-seed#quick-start) to install.</p>

<h1 class="pf-c-title pf-m-xl pf-u-mt-xl">Installing and configuring PatternFly React</h1>
<p>Using npm, run the following commands to install:</p>

<div class="code">npm install @patternfly/react-core --save</div>

<b>OR</b>

<p>Using yarn, run the following commands to install:</p>

<div class="code">yarn add @patternfly/react-core</div>

<b>If you're using webpack...</b> Check out the following files for example configurations:
* [webpack.common.js](https://github.com/patternfly/patternfly-react-seed/blob/master/webpack.common.js)
* [webpack.dev.js](https://github.com/patternfly/patternfly-react-seed/blob/master/webpack.dev.js)
* [webpack.prod.js](https://github.com/patternfly/patternfly-react-seed/blob/master/webpack.prod.js)

<p><b>If you’re using babel...</b>See [babel.config.js](https://github.com/patternfly/patternfly-react-seed/blob/master/babel.config.js) for an example configuration.</p>

<p>We don't have this yet, but we will need it.</p>

<p><b>If you’re using typescript...</b>See <a href="URL"> typescript.example.js</a>for an example configuration.</p>

<h1 class="pf-c-title pf-m-3xl pf-u-mt-3xl">HTML/CSS</h1>
<p>The HTML/CSS library provides a collection of code samples you can use to build interfaces with consistent PatternFly markup and styling.</p>

<h1 class="pf-c-title pf-m-xl pf-u-mt-xl">Before you begin</h1>
<p><b>Install NPM</b>, NPM is a package manager that’s bundled with Node.js. It’s required to download dependencies. Download the installer from <a target="_blank" href="https://nodejs.org/en/download">https://nodejs.org/en/download</a></p>

<h1 class="pf-c-title pf-m-xl pf-u-mt-xl">Installing</h1>
<p>Using npm, run the following commands to install:</p>
<div class="code">npm install @patternfly/patternfly-next</div>

<p><b>What’s included? </b>Each of the three modules (layouts, components, and utilities) delivers a sass file (.scss) and CSS file, so you can include them in your build environment or consume the CSS from your page header.</p>

<p>If you need to overwrite any elements, we recommend extending the variables found in the .scss files, rather than manually overwriting the CSS.</p>

* <p><b>PatternFly 4 components</b> are kept under ``` @patternfly/patternfly-next/components/ ```</p>
* <p><b>PatternFly 4 layouts</b> are kept under ```@patternfly/patternfly-next/layouts/```</p>
* <p><b>PatternFly 4 utilities</b> are kept under``` @patternfly/patternfly-next/utilities/```</p>

<p><b>In additional detail, the package includes:</b> A single file for the entire compiled library:</p>
```node_modules/@patternfly/patternfly-next/patternfly.css```

<p>A minified version of the patternfly.css:</p>
```node_modules/@patternfly/patternfly-next/patternfly.min.css```

<p>Individual files with each layout,  component, and utility compiled separately:</p>
* <p>```node_modules/@patternfly/patternfly-next/layouts/<LayoutName>/<layout-name>.css```</p>
* <p>```node_modules/@patternfly/patternfly-next/components/<ComponentName>/<component-name>.css```</p>
* <p>```node_modules/@patternfly/patternfly-next/utilities/<UtilityName>/<utility-name>.css```</p>

<p>A single file for the entire library's source (SASS):</p>
<p>```node_modules/@patternfly/patternfly-next/patternfly.scss```</p>

<p>Individual source files for each layout, component, and utility (SASS):</p>
* <p>```node_modules/@patternfly/patternfly-next/components/<ComponentName>/<component-name>.scss```</p>
* <p>```node_modules/@patternfly/patternfly-next/layouts/<LayoutName>/<layout-name>.scss```</p>
* <p>```node_modules/@patternfly/patternfly-next/utilities/<UtilityName>/<utility-name>.scss```</p>

<p>Use these files to consume the library. The recommended consumption approach will vary from project to project.</p>

<h1 class="pf-c-title pf-m-xl pf-u-mt-xl">Configuring your project</h1>
<p>1. Navigate to the patternfly-next package you just installed and find the PatternFly 4 CSS stylesheet, ```patternfly.css```</p>

<p>2.Copy ```patternfly.css``` to your project's CSS directory.</p>

<p>3.In your HTML file, add the following line to the bottom of your list of CSS files to link to your new stylesheet:</p>

  <div class="code">
    link rel="stylesheet" href="css/patternfly.css"
  </div>

  This will ensure that PatternFly 4 styles take precedence over anything that currently resides in your application.

4. If you want to use PatterFly 4 utilities in your project, find the utilities file,  ```patternfly-addons.css```

5. Copy ```patternfly-addons.scss``` into your project’s CSS directory.

6. In your HTML file, add the following line to the bottom of your list of CSS files:

  <div class="code">
    link rel="stylesheet" href="css/patternfly-addons.scss"
  </div>

<h1 class="pf-c-title pf-m-xl pf-u-mt-xl">Using styles</h1>
<p><b>Typography</b> PatternFly 4 uses the Overpass font family. Overpass can be utilized in two different ways:</p>

<p>1. Built into PatternFly 4</p>
<p>By default, Overpass is included as part of the PatternFly 4 distributed CSS file. You do not need to do anything with your configuration to use this font family.</p>

<p>2. Used as a CDN</p>
<p>If you wish to use the CDN for Overpass rather than the default approach, you need to update the ```utilities/variables.scss``` file and build PatternFly 4 as part of your build process.</p>

<p>To use the CDN vs the standard build, update the ```utilities/variables.scss``` file as follows:</p>

<div class="code">$pf-global--enable-font-overpass-cdn: true !default;</div>

<p><b>Icons</b> PatternFly 4 uses Font Awesome 5. Font Awesome 5 can be utilized in two different ways:</p>

<p>1. Built into PatternFly 4
  By default, Overpass is included as part of the PatternFly 4 distributed CSS file. You do not need to do anything with your configuration to use this font family.</p>

<p>2. Used as a CDN
  If you wish to use the CDN for Font Awesome 5 rather than the default approach, you need to update the ```utilities/variables.scss``` file (from source ```node_modules/@patternfly/patternfly-next/```) and build PatternFly 4 as part of your build process.</p>

<p>To use the CDN vs the standard build, update the ```utilities/variables.scss``` file as follows:</p>
<div class="code">$pf-global--enable-fontawesome-cdn: true !default;</div>

<h1 class="pf-c-title pf-m-xl pf-u-mt-xl">Customizing Patternfly for your project</h1>
<p>The CSS variable system enables you to easily customize things like color or shape without overwriting existing PatternFly styles.</p>

<div class="link"><a href="/documentation/react/css-variables/">Learn more and view CSS variables.</a><i class="blueArrow fas fa-arrow-right pf-u-mx-sm"></i></div>
