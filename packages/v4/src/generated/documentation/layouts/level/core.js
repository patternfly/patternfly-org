import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/layouts/Level/examples/./Level.css'

export const DocumentationLayoutsLevelCoreDocs = {
  "slug": "/documentation/layouts/level/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/layouts/Level/examples/Level.md",
  "section": "layouts",
  "id": "Level",
  "title": "Level",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-l-level"
};
DocumentationLayoutsLevelCoreDocs.liveContext = {
  
};
DocumentationLayoutsLevelCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsLevelCoreDocs} {...{"code":"<div class=\"pf-l-level\">\n  <div class=\"pf-l-level__item\">content</div>\n  <div class=\"pf-l-level__item\">content</div>\n</div>","title":"Two items","lang":"html"}}>
    </Example>
    <Example {...DocumentationLayoutsLevelCoreDocs} {...{"code":"<div class=\"pf-l-level\">\n  <div class=\"pf-l-level__item\">content</div>\n  <div class=\"pf-l-level__item\">content</div>\n  <div class=\"pf-l-level__item\">content</div>\n</div>","title":"Three items","lang":"html"}}>
    </Example>
    <Example {...DocumentationLayoutsLevelCoreDocs} {...{"code":"<div class=\"pf-l-level pf-m-gutter\">\n  <div class=\"pf-l-level__item\">content with gutter</div>\n  <div class=\"pf-l-level__item\">content with gutter</div>\n  <div class=\"pf-l-level__item\">content with gutter</div>\n</div>","title":"With gutters","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The level layout is designed to distribute space between children evenly and center them on the x-axis. By default the children are placed horizontally and wrap responsively.`}
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
              {`.pf-l-level`}
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
            {`Initializes the level layout`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-l-level__item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Explicitly sets a child of the level. This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers.`}
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
              {`.pf-l-level`}
            </code>
          </td>
          <td>
            {`Adds space between children by using the globally defined gutter value.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationLayoutsLevelCoreDocs.Component.displayName = 'DocumentationLayoutsLevelCoreDocs';
