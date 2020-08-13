import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/layouts/Stack/examples/./Stack.css'

export const DocumentationLayoutsStackCoreDocs = {
  "slug": "/documentation/layouts/stack/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/layouts/Stack/examples/Stack.md",
  "section": "layouts",
  "id": "Stack",
  "title": "Stack",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-l-stack"
};
DocumentationLayoutsStackCoreDocs.liveContext = {
  
};
DocumentationLayoutsStackCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsStackCoreDocs} {...{"code":"<div class=\"pf-l-stack\">\n  <div class=\"pf-l-stack__item\">content</div>\n  <div class=\"pf-l-stack__item pf-m-fill\">pf-m-fill</div>\n  <div class=\"pf-l-stack__item\">content</div>\n</div>","title":"Basic","lang":"html"}}>
    </Example>
    <Example {...DocumentationLayoutsStackCoreDocs} {...{"code":"<div class=\"pf-l-stack pf-m-gutter\">\n  <div class=\"pf-l-stack__item\">content</div>\n  <div class=\"pf-l-stack__item pf-m-fill\">pf-m-fill</div>\n  <div class=\"pf-l-stack__item\">content</div>\n</div>","title":"With gutter","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The stack layout is designed to position items vertically, with one item filling the available vertical space.`}
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
              {`.pf-l-stack`}
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
            {`Initiates the stack layout.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-l-stack__item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a stack item. `}
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
              {`.pf-l-stack`}
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
              {`.pf-l-stack__item`}
            </code>
          </td>
          <td>
            {`Specifies which item(s) should fill the avaiable vertical space.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationLayoutsStackCoreDocs.Component.displayName = 'DocumentationLayoutsStackCoreDocs';
