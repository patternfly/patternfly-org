import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsBackgroundImageCoreDocs = {
  "slug": "/documentation/components/background-image/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/BackgroundImage/examples/BackgroundImage.md",
  "section": "components",
  "id": "Background image",
  "title": "Background image",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-background-image"
};
DocumentationComponentsBackgroundImageCoreDocs.liveContext = {
  
};
DocumentationComponentsBackgroundImageCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsBackgroundImageCoreDocs} {...{"code":"<div class=\"pf-c-background-image\">\n  <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"pf-c-background-image__filter\" width=\"0\" height=\"0\">\n    <filter id=\"image_overlay\">\n      <feColorMatrix type=\"matrix\" values=\"1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0\"></feColorMatrix>\n      <feComponentTransfer color-interpolation-filters=\"sRGB\" result=\"duotone\">\n        <feFuncR type=\"table\" tableValues=\"0.086274509803922 0.43921568627451\"></feFuncR>\n        <feFuncG type=\"table\" tableValues=\"0.086274509803922 0.43921568627451\"></feFuncG>\n        <feFuncB type=\"table\" tableValues=\"0.086274509803922 0.43921568627451\"></feFuncB>\n        <feFuncA type=\"table\" tableValues=\"0 1\"></feFuncA>\n      </feComponentTransfer>\n    </filter>\n  </svg>\n</div>","title":"Basic","lang":"html","isFullscreen":true}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`This component puts an image on the background with an svg filter applied to it. The svg must be inline on the page for the filter to work in all browsers.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Class`}
          </th>
          <th>
            {`Applied to`}
          </th>
          <th>
            {`Outcome`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-background-image`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`A fixed background image is applied to the background of the page.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-background-image__filter`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`The inline svg that provides the filter for the background image.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsBackgroundImageCoreDocs.Component.displayName = 'DocumentationComponentsBackgroundImageCoreDocs';
