import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/utilities/Display/examples/./Display.css'

export const DocumentationUtilitiesDisplayCoreDocs = {
  "slug": "/documentation/utilities/display/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/utilities/Display/examples/Display.md",
  "section": "utilities",
  "id": "Display",
  "title": "Display",
  "toc": [
    "Examples",
    "Documentation"
  ]
};
DocumentationUtilitiesDisplayCoreDocs.liveContext = {
  
};
DocumentationUtilitiesDisplayCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationUtilitiesDisplayCoreDocs} {...{"code":"<div class=\"pf-u-display-inline-block\">.pf-u-display-inline-block</div>","title":"Inline block","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesDisplayCoreDocs} {...{"code":"<div class=\"pf-u-display-block\">.pf-u-display-block</div>","title":"Block","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesDisplayCoreDocs} {...{"code":"<div class=\"pf-u-display-flex\">.pf-u-display-flex</div>","title":"Flex","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesDisplayCoreDocs} {...{"code":"<div class=\"pf-u-display-inline-flex\">.pf-u-display-inline-flex</div>","title":"Inline flex","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesDisplayCoreDocs} {...{"code":"<div class=\"pf-u-display-grid\">.pf-u-display-grid</div>","title":"Grid","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesDisplayCoreDocs} {...{"code":"<div class=\"pf-u-display-inline\">.pf-u-display-inline</div>","title":"Inline","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesDisplayCoreDocs} {...{"code":"<div class=\"pf-u-display-table\">\n  <div class=\"pf-u-display-table-row\">\n    <div class=\"pf-u-display-table-cell\">table-cell</div>\n    <div class=\"pf-u-display-table-cell\">table-cell</div>\n    <div class=\"pf-u-display-table-cell\">table-cell</div>\n  </div>\n  <div class=\"pf-u-display-table-row\">\n    <div class=\"pf-u-display-table-cell\">table-cell</div>\n    <div class=\"pf-u-display-table-cell\">table-cell</div>\n    <div class=\"pf-u-display-table-cell\">table-cell</div>\n  </div>\n</div>","title":"Table","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesDisplayCoreDocs} {...{"code":"<div class=\"pf-u-display-none-on-sm\">Hidden on sm breakpoint</div>","title":"None","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. `}
      <strong>
        {`Example .pf-u-display-inline-block-on-lg`}
      </strong>
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
              {`.pf-u-display-inline-block{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets display: inline-block`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-display-block{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets display: block`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-display-inline{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets display: inline`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-display-flex{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets display: flex`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-display-inline-flex{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets display: inline-flex`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-display-table{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets display: table`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-display-table-row{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets display: table-row`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-display-table-cell{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets display: table-cell`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-display-none{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets display: none`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationUtilitiesDisplayCoreDocs.Component.displayName = 'DocumentationUtilitiesDisplayCoreDocs';
