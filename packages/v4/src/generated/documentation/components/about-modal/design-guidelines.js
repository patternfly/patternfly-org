import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport23 from '../../../../content/design-guidelines/usage-and-behavior/about-modal/./img/about-modal.png';
import srcImport24 from '../../../../content/design-guidelines/usage-and-behavior/about-modal/./img/about-dropdown.png';

export const DocumentationComponentsAboutModalDesignGuidelinesDocs = {
  "slug": "/documentation/components/about-modal/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/about-modal/about-modal.md",
  "section": "components",
  "id": "About modal",
  "title": "About modal",
  "toc": [
    "Primary elements",
    "Usage",
    "Related components and demos"
  ]
};
DocumentationComponentsAboutModalDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsAboutModalDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`The about modal stores the version number(s) of the application as well as any appropriate legal text.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Primary elements`}
    </AutoLinkHeader>
    <img src={srcImport23} {...{"alt":"About modal","width":"1500","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Backdrop:`}
        </strong>
        {` Blurs any interface elements in the background to bring the modal content into focus`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Branding:`}
        </strong>
        {` Provides logo and branding for the product. Substitute your own logotype by providing an SVG that can be scaled proportionately to fit the space.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Product title`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Close button`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Content:`}
        </strong>
        {` Label and version`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`When version and build information are both shown: Version 6.3 (Build 5)`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`When version only: Version 6.3`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`When build only: Build 5`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal image:`}
        </strong>
        {` The modal image should be the same as the `}
        <PatternflyThemeLink {...{"to":"/documentation/react/components/backgroundimage"}}>
          {`background image`}
        </PatternflyThemeLink>
        {` you use for your application.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Trademark and copyright information:`}
        </strong>
        {` Optionally include legal text. Suggested format for copyright -  Copyright (c) 2018 Company`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use the about modal to provide information about the product including the product name, logo, version numbers, and any appropriate legal text.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Accessing the about modal`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Provide access to the about modal using a help icon in the application masthead. Clicking the help icon will launch a dropdown menu. The help menu should always include an option labeled "About" that launches the about modal.`}
    </p>
    <img src={srcImport24} {...{"alt":"About modal dropdown","width":"1500","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Related components and demos`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`HTML/CSS`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/demos/aboutmodal"}}>
          {`About modal`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/aboutmodalbox"}}>
          {`About modal box`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/backdrop"}}>
          {`Backdrop`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/backgroundimage"}}>
          {`Background image`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/button"}}>
          {`Button`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`React`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/aboutmodal"}}>
          {`About modal`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/backgroundimage"}}>
          {`Background image`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/brand"}}>
          {`Brand`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/button"}}>
          {`Button`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
DocumentationComponentsAboutModalDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsAboutModalDesignGuidelinesDocs';
