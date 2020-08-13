import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/layouts/Split/examples/./Split.css'

export const DocumentationLayoutsSplitCoreDocs = {
  "slug": "/documentation/layouts/split/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/layouts/Split/examples/Split.md",
  "section": "layouts",
  "id": "Split",
  "title": "Split",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-l-split"
};
DocumentationLayoutsSplitCoreDocs.liveContext = {
  
};
DocumentationLayoutsSplitCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsSplitCoreDocs} {...{"code":"<div class=\"pf-l-split\">\n  <div class=\"pf-l-split__item\">content</div>\n  <div class=\"pf-l-split__item pf-m-fill\">pf-m-fill</div>\n  <div class=\"pf-l-split__item\">content</div>\n</div>","title":"Basic","lang":"html"}}>
    </Example>
    <Example {...DocumentationLayoutsSplitCoreDocs} {...{"code":"<div class=\"pf-l-split pf-m-gutter\">\n  <div class=\"pf-l-split__item\">content</div>\n  <div class=\"pf-l-split__item pf-m-fill\">pf-m-fill</div>\n  <div class=\"pf-l-split__item\">content</div>\n</div>","title":"With gutter","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The split layout is designed to position items horizontally, with one item filling the available horizontal space.`}
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
              {`.pf-l-split`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<section>`}
            </code>
            {`, or `}
            <code {...{"className":"ws-code"}}>
              {`<article>`}
            </code>
          </td>
          <td>
            {`Initiates the split layout.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-l-split__item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a split item. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-gutter`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-l-split`}
            </code>
          </td>
          <td>
            {`Adds space between children by using the globally defined gutter value.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-fill`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-l-split__item`}
            </code>
          </td>
          <td>
            {`Specifies which item(s) should fill the avaiable horizontal space.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationLayoutsSplitCoreDocs.Component.displayName = 'DocumentationLayoutsSplitCoreDocs';
