import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/components/Divider/examples/./Divider.css'

export const DocumentationComponentsDividerCoreDocs = {
  "slug": "/documentation/components/divider/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Divider/examples/Divider.md",
  "section": "components",
  "id": "Divider",
  "title": "Divider",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-divider"
};
DocumentationComponentsDividerCoreDocs.liveContext = {
  
};
DocumentationComponentsDividerCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsDividerCoreDocs} {...{"code":"<hr class=\"pf-c-divider\" />","title":"hr","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDividerCoreDocs} {...{"code":"<ul>\n  <li>List item one</li>\n  <li class=\"pf-c-divider\" role=\"separator\"></li>\n  <li>List item two</li>\n</ul>","title":"li","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDividerCoreDocs} {...{"code":"<div class=\"pf-c-divider\" role=\"separator\"></div>","title":"div","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDividerCoreDocs} {...{"code":"<div class=\"pf-c-divider pf-m-inset-md\" role=\"separator\"></div>","title":"Inset medium","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDividerCoreDocs} {...{"code":"<div class=\"pf-c-divider pf-m-inset-md pf-m-inset-none-on-md pf-m-inset-3xl-on-lg pf-m-inset-lg-on-xl\" role=\"separator\"></div>","title":"Md inset, no inset on md, 3xl inset on lg, lg inset on xl","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDividerCoreDocs} {...{"code":"<div class=\"pf-c-divider pf-m-vertical pf-m-inset-md\" role=\"separator\"></div>","title":"Vertical","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDividerCoreDocs} {...{"code":"<div class=\"pf-c-divider pf-m-vertical pf-m-inset-md\" role=\"separator\"></div>","title":"Vertical, inset medium","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDividerCoreDocs} {...{"code":"<div class=\"pf-c-divider pf-m-vertical pf-m-inset-md pf-m-inset-none-on-md pf-m-inset-lg-on-lg pf-m-inset-sm-on-xl\" role=\"separator\"></div>","title":"Vertical, md inset, no inset on md, lg inset on lg, sm inset on xl","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The divider renders as an `}
      <code {...{"className":"ws-code"}}>
        {`<hr>`}
      </code>
      {` by default. It is possible to make the divider render as an `}
      <code {...{"className":"ws-code"}}>
        {`li`}
      </code>
      {` or a `}
      <code {...{"className":"ws-code"}}>
        {`div`}
      </code>
      {` to match the HTML5 specification and context of the divider.`}
    </p>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Attribute`}
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
              {`role="separator"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`li.pf-c-divider`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`div.pf-c-divider`}
            </code>
          </td>
          <td>
            {`Indicates that the separator is a separator.`}
          </td>
        </tr>
      </tbody>
    </table>
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
              {`.pf-c-divider`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<hr>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Defines the divider component.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-vertical`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-divider`}
            </code>
          </td>
          <td>
            {`Modifies the divider component from horizontal to vertical. This modifier requires that the parent has an explicit or implicit height, or has a flex or grid based layout parent.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-inset-{none, sm, md, lg, xl, 2xl, 3xl}{-on-[sm, md, lg, xl, 2xl]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-divider`}
            </code>
          </td>
          <td>
            {`Modifies divider padding/inset to visually match padding of other adjacent components.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsDividerCoreDocs.Component.displayName = 'DocumentationComponentsDividerCoreDocs';
