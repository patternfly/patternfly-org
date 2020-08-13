import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsListCoreDocs = {
  "slug": "/documentation/components/list/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/List/examples/List.md",
  "section": "components",
  "id": "List",
  "title": "List",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-list"
};
DocumentationComponentsListCoreDocs.liveContext = {
  
};
DocumentationComponentsListCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsListCoreDocs} {...{"code":"<ul class=\"pf-c-list\">\n  <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n  <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n  <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.\n    <ul class=\"pf-c-list\">\n      <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>\n      <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>\n      <li>Ut venenatis, nisl scelerisque.\n        <ol class=\"pf-c-list\">\n          <li>Donec blandit a lorem id convallis.</li>\n          <li>Cras gravida arcu at diam gravida gravida.</li>\n          <li>Integer in volutpat libero.</li>\n        </ol>\n      </li>\n    </ul>\n  </li>\n  <li>Ut non enim metus.</li>\n</ul>","title":"Unordered","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsListCoreDocs} {...{"code":"<ol class=\"pf-c-list\">\n  <li>Donec blandit a lorem id convallis.</li>\n  <li>Cras gravida arcu at diam gravida gravida.</li>\n  <li>Integer in volutpat libero.</li>\n  <li>Donec a diam tellus.</li>\n  <li>Etiam auctor nisl et.\n    <ul class=\"pf-c-list\">\n      <li>Donec blandit a lorem id convallis.</li>\n      <li>Cras gravida arcu at diam gravida gravida.</li>\n      <li>Integer in volutpat libero.\n        <ol class=\"pf-c-list\">\n          <li>Donec blandit a lorem id convallis.</li>\n          <li>Cras gravida arcu at diam gravida gravida.</li>\n        </ol>\n      </li>\n    </ul>\n    <li>Aenean nec tortor orci.</li>\n    <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>\n    <li>Vivamus maximus ultricies pulvinar.</li>\n  </ol>","title":"Ordered","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsListCoreDocs} {...{"code":"<ul class=\"pf-c-list pf-m-inline\">\n  <li>Inline list item 1</li>\n  <li>Inline list item 2</li>\n  <li>Inline list item 3</li>\n</ul>","title":"Inline","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Non-inline lists can be nested up to any level.`}
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
              {`.pf-c-list`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>, <ol>`}
            </code>
          </td>
          <td>
            {`Initiates a list. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-inline`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-list`}
            </code>
          </td>
          <td>
            {`Modifies for inline list style.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsListCoreDocs.Component.displayName = 'DocumentationComponentsListCoreDocs';
