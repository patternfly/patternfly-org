import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsTitleCoreDocs = {
  "slug": "/documentation/components/title/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Title/examples/Title.md",
  "section": "components",
  "id": "Title",
  "title": "Title",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-title"
};
DocumentationComponentsTitleCoreDocs.liveContext = {
  
};
DocumentationComponentsTitleCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsTitleCoreDocs} {...{"code":"<h1 class=\"pf-c-title pf-m-4xl\">4xl title</h1>\n<h1 class=\"pf-c-title pf-m-3xl\">3xl title</h1>\n<h1 class=\"pf-c-title pf-m-2xl\">2xl title</h1>\n<h1 class=\"pf-c-title pf-m-xl\">xl title</h1>\n<h1 class=\"pf-c-title pf-m-lg\">lg title</h1>\n<h1 class=\"pf-c-title pf-m-md\">md title</h1>","title":"Size modifiers","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The title component styles font-size, font-weight, and line-height to titles.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The content component defines margin on headers. To regain the same spacing use, spacer utility classes:`}
    </p>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Title`}
          </th>
          <th>
            {`Margin top`}
          </th>
          <th>
            {`Margin bottom`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {`4xl`}
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-mt-lg`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-mb-sm`}
            </code>
          </td>
        </tr>
        <tr>
          <td>
            {`3xl`}
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-mt-lg`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-mb-sm`}
            </code>
          </td>
        </tr>
        <tr>
          <td>
            {`2xl`}
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-mt-lg`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-mb-sm`}
            </code>
          </td>
        </tr>
        <tr>
          <td>
            {`xl`}
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-mt-lg`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-mb-sm`}
            </code>
          </td>
        </tr>
        <tr>
          <td>
            {`lg`}
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-mt-lg`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-mb-sm`}
            </code>
          </td>
        </tr>
        <tr>
          <td>
            {`md`}
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-mt-lg`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-mb-sm`}
            </code>
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
            {`Applied`}
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
              {`.pf-c-title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Initiates a title. Always use it with a modifier class.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-4xl`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-title`}
            </code>
          </td>
          <td>
            {`Modifies for 4xl size`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-3xl`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-title`}
            </code>
          </td>
          <td>
            {`Modifies for 3xl size`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-2xl`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-title`}
            </code>
          </td>
          <td>
            {`Modifies for 2xl size`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-xl`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-title`}
            </code>
          </td>
          <td>
            {`Modifies for xl size`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-lg`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-title`}
            </code>
          </td>
          <td>
            {`Modifies for lg size`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-md`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-title`}
            </code>
          </td>
          <td>
            {`Modifies for md size`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsTitleCoreDocs.Component.displayName = 'DocumentationComponentsTitleCoreDocs';
