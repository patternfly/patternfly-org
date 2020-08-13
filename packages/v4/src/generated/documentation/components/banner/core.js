import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsBannerCoreDocs = {
  "slug": "/documentation/components/banner/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Banner/examples/Banner.md",
  "section": "components",
  "id": "Banner",
  "title": "Banner",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-banner"
};
DocumentationComponentsBannerCoreDocs.liveContext = {
  
};
DocumentationComponentsBannerCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsBannerCoreDocs} {...{"code":"<div class=\"pf-c-banner\">Default banner</div>\n<br />\n<div class=\"pf-c-banner pf-m-info\">Info banner</div>\n<br />\n<div class=\"pf-c-banner pf-m-danger\">Danger banner</div>\n<br />\n<div class=\"pf-c-banner pf-m-success\">Success banner</div>\n<br />\n<div class=\"pf-c-banner pf-m-warning\">Warning banner</div>","title":"Basic","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Add a modifier class to the default banner to change the presentation: `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-info`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-danger`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-success`}
      </code>
      {`, or `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-warning`}
      </code>
      {`.`}
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
              {`.pf-c-banner`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a banner. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-info`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-banner`}
            </code>
          </td>
          <td>
            {`Modifies banner for info styles.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-danger`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-banner`}
            </code>
          </td>
          <td>
            {`Modifies banner for danger styles.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-success`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-banner`}
            </code>
          </td>
          <td>
            {`Modifies banner for success styles.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-warning`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-banner`}
            </code>
          </td>
          <td>
            {`Modifies banner for warning styles.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-sticky`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-banner`}
            </code>
          </td>
          <td>
            {`Modifies banner to be sticky to the top of its container.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsBannerCoreDocs.Component.displayName = 'DocumentationComponentsBannerCoreDocs';
