import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsBadgeCoreDocs = {
  "slug": "/documentation/components/badge/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Badge/examples/Badge.md",
  "section": "components",
  "id": "Badge",
  "title": "Badge",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-badge"
};
DocumentationComponentsBadgeCoreDocs.liveContext = {
  
};
DocumentationComponentsBadgeCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsBadgeCoreDocs} {...{"code":"<span class=\"pf-c-badge pf-m-read\">7</span>\n<span class=\"pf-c-badge pf-m-read\">24</span>\n<span class=\"pf-c-badge pf-m-read\">240</span>\n<span class=\"pf-c-badge pf-m-read\">999+</span>","title":"Read","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsBadgeCoreDocs} {...{"code":"<span class=\"pf-c-badge pf-m-unread\">7</span>\n<span class=\"pf-c-badge pf-m-unread\">24</span>\n<span class=\"pf-c-badge pf-m-unread\">240</span>\n<span class=\"pf-c-badge pf-m-unread\">999+</span>","title":"Unread","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Always add a modifier class. Never use the class `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-badge`}
      </code>
      {` on its own.`}
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
              {`.pf-c-badge`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates a badge. `}
            <strong>
              {`Always use with a modifier class.`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-read`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-badge`}
            </code>
          </td>
          <td>
            {`Applies read badge styling.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-unread`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-badge`}
            </code>
          </td>
          <td>
            {`Applies unread badge styling.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsBadgeCoreDocs.Component.displayName = 'DocumentationComponentsBadgeCoreDocs';
