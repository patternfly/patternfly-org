import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsBackdropCoreDocs = {
  "slug": "/documentation/components/backdrop/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Backdrop/examples/Backdrop.md",
  "section": "components",
  "id": "Backdrop",
  "title": "Backdrop",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-backdrop"
};
DocumentationComponentsBackdropCoreDocs.liveContext = {
  
};
DocumentationComponentsBackdropCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsBackdropCoreDocs} {...{"code":"<div class=\"pf-c-backdrop\"></div>","title":"Basic","lang":"html","isFullscreen":true}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`This component puts a backdrop over the entire viewport.`}
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
              {`.pf-c-backdrop`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates backdrop. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-backdrop__open`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<body>`}
            </code>
          </td>
          <td>
            {`Lock scrolling when backdrop is active. This class should be set on `}
            <code {...{"className":"ws-code"}}>
              {`<body>`}
            </code>
            {` while backdrop is active and removed while backdrop is inactive. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsBackdropCoreDocs.Component.displayName = 'DocumentationComponentsBackdropCoreDocs';
