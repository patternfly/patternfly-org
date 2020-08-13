import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../content/get-started/./get-started.css';

export const GetStartedAboutDocs = {
  "slug": "/get-started/about",
  "source": "pages-get-started",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/get-started/about.md",
  "section": "get-started",
  "id": "About",
  "title": "About PatternFly",
  "toc": [
    "Basic structure",
    "Design guidelines",
    "Additional tools",
    "Supported browsers"
  ]
};
GetStartedAboutDocs.liveContext = {
  
};
GetStartedAboutDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`PatternFly is an open source design system created to enable consistency and usability across a wide range of applications and use cases. PatternFly provides clear standards, guidance, and tools that help designers and developers work together more efficiently and build better user experiences.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Basic structure`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Components`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Components, like buttons and alerts, can be assembled together to build applications.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Layouts`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Layouts are generic tools that allow you to structure and organize the content on your pages.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Demos`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Demos use components and layouts in combination to show you how to build more complex structures and application views.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/core/overview/release-notes"}}>
        <strong>
          {`View components, layouts, and demos in HTML/CSS`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/react/overview/release-notes"}}>
        <strong>
          {`View components, layouts, and demos in React`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Design guidelines`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Styles`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Style guidelines define foundational elements of the design system, like color, typography, and spacing.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Usage and behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Usage and behavior guidelines communicate standards and best practices for common design patterns like navigation, dashboards, or forms.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Content`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Content guidelines provide principles and best practices around writing for user experience along with general voice and style guidance.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/design-guidelines/styles/colors"}}>
        <strong>
          {`View design guidelines`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Additional tools`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`CSS variables`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`You can customize PatternFly for your project using the CSS variable system, which enables you to change style elements like color across your project. The CSS variable system is a two-layer theming system where global variables inform component variables.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Global variables`}
      </strong>
      {`
Global variables define and enforce style elements (like global values for color, spacing, and font size) across the entire system.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Component variables`}
      </strong>
      {`
Component variables are used to define custom properties at the component level. Component variables are always defined by global variables.`}
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
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Utilities`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Utilities are a set of classes that enable you to further customize and modify elements in your project without having to write any custom CSS.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For example, you might use a utility class to add additional spacing between elements, align content in a layout, or even add a box shadow to an element.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/core/utilities/accessibility"}}>
        <strong>
          {`View utilities`}
        </strong>
      </PatternflyThemeLink>
      {` `}
            <i className="ws-content-blueArrow fas fa-arrow-right pf-u-mx-sm"/>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Supported browsers`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Browser`}
          </th>
          <th>
            {`Version`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {`Chrome`}
          </td>
          <td>
            {`latest`}
          </td>
        </tr>
        <tr>
          <td>
            {`Firefox`}
          </td>
          <td>
            {`latest`}
          </td>
        </tr>
        <tr>
          <td>
            {`Safari`}
          </td>
          <td>
            {`latest`}
          </td>
        </tr>
        <tr>
          <td>
            {`Edge`}
          </td>
          <td>
            {`latest`}
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      {`If you encounter an issue with an earlier browser version and have a question about whether or not that behavior should be supported, please feel free to contact us.`}
    </p>
  </React.Fragment>
);
GetStartedAboutDocs.Component.displayName = 'GetStartedAboutDocs';
