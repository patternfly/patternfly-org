import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../content/get-started/./get-started.css';

export const GetStartedDevelopDocs = {
  "slug": "/get-started/develop",
  "source": "pages-get-started",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/get-started/develop.md",
  "section": "get-started",
  "id": "Develop",
  "title": "Develop with PatternFly",
  "toc": [
    "React",
    "Getting started",
    "HTML/CSS"
  ]
};
GetStartedDevelopDocs.liveContext = {
  
};
GetStartedDevelopDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Before you begin, check out our `}
      <PatternflyThemeLink {...{"to":"/get-started/about"}}>
        {`overview of PatternFly`}
      </PatternflyThemeLink>
      {` to get acquainted with the basic elements of the design system.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Before you begin, install a package manager:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"https://nodejs.org/en/download"}}>
          {`Use npm`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"https://yarnpkg.com/en/docs/getting-started"}}>
          {`Use Yarn`}
        </a>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Get started with:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#react"}}>
          {`React`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#htmlcss"}}>
          {`HTML/CSS`}
        </a>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`React`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The React library provides a collection of React components you can use to build interfaces with consistent markup, styling, and behavior.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Getting started`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Start with a sample project`}
          </strong>
        </p>
        <p {...{"className":"ws-p"}}>
          <a {...{"href":"#start-with-the-react-seed"}}>
            {`Start with the PatternFly React seed`}
          </a>
          {`, which is an open source build scaffolding utility created to give developers a jump start when creating new projects that will use PatternFly.`}
        </p>
      </li>
    </ul>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Start with your existing project`}
          </strong>
        </p>
        <p {...{"className":"ws-p"}}>
          {`If you want to start with your existing project, skip to: `}
          <a {...{"href":"#install-and-configure-patternfly-react"}}>
            {`Install and configure PatternFly React`}
          </a>
          {`.`}
        </p>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Start with the React seed`}
    </AutoLinkHeader>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Fork the project`}
        </strong>
      </li>
    </ol>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`TypeScript: `}
          <a {...{"href":"https://github.com/patternfly/patternfly-react-seed"}}>
            {`Fork and clone the PatternFly React Seed project`}
          </a>
          {`.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`JavaScript: `}
          <a {...{"href":"https://github.com/patternfly/patternfly-react-seed/tree/javascript"}}>
            {`Fork and clone the JavaScript branch of the PatternFly React Seed project`}
          </a>
          {`.`}
        </p>
        <p {...{"className":"ws-p"}}>
          {`For more information about how to fork and clone a repo, `}
          <a {...{"href":"https://help.github.com/articles/fork-a-repo/"}}>
            {`view GitHub Help`}
          </a>
          {`.`}
        </p>
      </li>
    </ul>
    <ol {...{"start":2,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Install the project`}
          </strong>
        </p>
        <p {...{"className":"ws-p"}}>
          {`Follow the steps outlined in the `}
          <a {...{"href":"https://github.com/patternfly/patternfly-react-seed#quick-start"}}>
            {`README`}
          </a>
          {` to install.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Install and configure PatternFly React`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Using npm, run the following command to install:`}
        </p>
        <Example {...GetStartedDevelopDocs} {...{"code":"npm install @patternfly/react-core --save","title":"Untitled example"}}>
        </Example>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`OR`}
          </strong>
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Using yarn, run the following command to install:`}
        </p>
        <Example {...GetStartedDevelopDocs} {...{"code":"yarn add @patternfly/react-core","title":"Untitled example"}}>
        </Example>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Configurations`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"https://github.com/patternfly/patternfly-react-seed/blob/master/tsconfig.json"}}>
          {`TypeScript`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"https://github.com/patternfly/patternfly-react-seed/blob/master/webpack.common.js"}}>
          {`Webpack`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"https://github.com/patternfly/patternfly-react-seed/blob/master/jest.config.js"}}>
          {`Jest`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"https://github.com/patternfly/patternfly-react-seed/blob/master/.editorconfig"}}>
          {`Editor`}
        </a>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`HTML/CSS`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The HTML/CSS library provides a collection of code samples you can use to build interfaces with consistent PatternFly markup and styling.`}
    </p>
    <Example {...GetStartedDevelopDocs} {...{"code":"npm install @patternfly/patternfly --save","title":"Install"}}>
      <p {...{"className":"ws-p"}}>
        {`Using npm, run the following commands to install:`}
      </p>
    </Example>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`What’s included?`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Each of the three modules (layouts, components, and utilities) delivers a Sass file (.scss) and CSS file, so you can include them in your build environment or consume the CSS from your page header.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If you need to overwrite any elements, we recommend extending the variables found in the .scss files, rather than manually overwriting the CSS.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When you install PatternFly, the package includes:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`A single file for the entire compiled library: `}
        <code {...{"className":"ws-code"}}>
          {`node_modules/@patternfly/patternfly/patternfly.css`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Individual files with each component compiled separately: `}
        <code {...{"className":"ws-code"}}>
          {`node_modules/@patternfly/patternfly/<ComponentName>/styles.css`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`A single file for the entire library's source (Sass): `}
        <code {...{"className":"ws-code"}}>
          {`node_modules/@patternfly/patternfly/patternfly.scss`}
        </code>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Individual files for each component's source (Sass): `}
        <code {...{"className":"ws-code"}}>
          {`node_modules/@patternfly/patternfly/<ComponentName>/styles.scss`}
        </code>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Use these files to consume the library. The recommended consumption approach will vary from project to project.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Configure your project`}
    </AutoLinkHeader>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Navigate to the patternfly-next package you just installed and find the PatternFly CSS stylesheet, `}
          <code {...{"className":"ws-code"}}>
            {`patternfly.css`}
          </code>
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Copy `}
          <code {...{"className":"ws-code"}}>
            {`patternfly.css`}
          </code>
          {` to your project's CSS directory.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`In your HTML file, add the following line to the bottom of your list of CSS files to link to your new stylesheet:`}
        </p>
        <Example {...GetStartedDevelopDocs} {...{"code":"<link rel=\"stylesheet\" href=\"css/patternfly.css\">","title":"Untitled example"}}>
        </Example>
        <p {...{"className":"ws-p"}}>
          {`This will ensure that PatternFly styles take precedence over anything that currently resides in your application.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`If you want to use PatternFly utilities in your project, find the utilities file,  `}
          <code {...{"className":"ws-code"}}>
            {`patternfly-addons.css`}
          </code>
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Copy `}
          <code {...{"className":"ws-code"}}>
            {`patternfly-addons.css`}
          </code>
          {` into your project’s CSS directory.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`In your HTML file, add the following line to the bottom of your list of CSS files:`}
        </p>
        <Example {...GetStartedDevelopDocs} {...{"code":"<link rel=\"stylesheet\" href=\"css/patternfly-addons.css\">","title":"Untitled example"}}>
        </Example>
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Using styles`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Typography`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`PatternFly uses the Overpass font family. Overpass can be utilized in two different ways:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Built into PatternFly`}
          </strong>
        </p>
        <p {...{"className":"ws-p"}}>
          {`By default, Overpass is included as part of the PatternFly distributed CSS file. You do not need to do anything with your configuration to use this font family.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Used as a CDN`}
          </strong>
        </p>
        <Example {...GetStartedDevelopDocs} {...{"code":"$pf-global--enable-font-overpass-cdn: true !default;","title":"Untitled example"}}>
          <p {...{"className":"ws-p"}}>
            {`If you wish to use the CDN for Overpass rather than the default approach, you need to update the `}
            <code {...{"className":"ws-code"}}>
              {`sass-utilities/scss-variables.scss`}
            </code>
            {` file and build PatternFly as part of your build process.`}
          </p>
          <p {...{"className":"ws-p"}}>
            {`To use the CDN vs the standard build, update the `}
            <code {...{"className":"ws-code"}}>
              {`sass-utilities/scss-variables.scss`}
            </code>
            {` file as follows:`}
          </p>
        </Example>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Icons`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`PatternFly uses Font Awesome 5. Font Awesome 5 can be utilized in two different ways:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Built into PatternFly`}
          </strong>
        </p>
        <p {...{"className":"ws-p"}}>
          {`By default, Overpass is included as part of the PatternFly distributed CSS file. You do not need to do anything with your configuration to use this font family.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Used as a CDN`}
          </strong>
        </p>
        <Example {...GetStartedDevelopDocs} {...{"code":"$pf-global--enable-fontawesome-cdn: true !default;","title":"Untitled example"}}>
          <p {...{"className":"ws-p"}}>
            {`If you wish to use the CDN for Font Awesome 5 rather than the default approach, you need to update the `}
            <code {...{"className":"ws-code"}}>
              {`utilities/variables.scss`}
            </code>
            {` file (from source `}
            <code {...{"className":"ws-code"}}>
              {`node_modules/@patternfly/patternfly-next/`}
            </code>
            {`) and build PatternFly as part of your build process.`}
          </p>
          <p {...{"className":"ws-p"}}>
            {`To use the CDN vs the standard build, update the `}
            <code {...{"className":"ws-code"}}>
              {`sass-utilities/scss-variables.scss`}
            </code>
            {` file as follows:`}
          </p>
        </Example>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Customizing PatternFly for your project`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The CSS variable system enables you to easily customize things like color or shape without overwriting existing PatternFly styles.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/overview/global-css-variables"}}>
        <strong>
          {`Learn more and view CSS variables`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
  </React.Fragment>
);
GetStartedDevelopDocs.Component.displayName = 'GetStartedDevelopDocs';
