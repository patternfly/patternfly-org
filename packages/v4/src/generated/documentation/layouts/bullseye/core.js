import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/layouts/Bullseye/examples/./Bullseye.css'

export const DocumentationLayoutsBullseyeCoreDocs = {
  "slug": "/documentation/layouts/bullseye/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/layouts/Bullseye/examples/Bullseye.md",
  "section": "layouts",
  "id": "Bullseye",
  "title": "Bullseye",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-l-bullseye"
};
DocumentationLayoutsBullseyeCoreDocs.liveContext = {
  
};
DocumentationLayoutsBullseyeCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsBullseyeCoreDocs} {...{"code":"<div class=\"pf-l-bullseye\">\n  <div class=\"pf-l-bullseye__item\">content</div>\n</div>","title":"Basic","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The bullseye layout is designed to center a single child element horizontally and vertically within its parent.`}
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
              {`.pf-l-bullseye`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initializes the bullseye layout. A bullseye can only have one child.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-l-bullseye__item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Explicitly sets the child for the bullseye. This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationLayoutsBullseyeCoreDocs.Component.displayName = 'DocumentationLayoutsBullseyeCoreDocs';
