import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsExpandableSectionCoreDocs = {
  "slug": "/documentation/components/expandable-section/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/ExpandableSection/examples/ExpandableSection.md",
  "section": "components",
  "id": "Expandable section",
  "title": "Expandable section",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-expandable-section"
};
DocumentationComponentsExpandableSectionCoreDocs.liveContext = {
  
};
DocumentationComponentsExpandableSectionCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsExpandableSectionCoreDocs} {...{"code":"<div class=\"pf-c-expandable-section\">\n  <button type=\"button\" class=\"pf-c-expandable-section__toggle\" aria-expanded=\"false\">\n    <span class=\"pf-c-expandable-section__toggle-icon\">\n      <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-expandable-section__toggle-text\">Show more</span>\n  </button>\n  <div class=\"pf-c-expandable-section__content\" hidden>This content is visible only when the component is expanded.</div>\n</div>","title":"Hidden","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsExpandableSectionCoreDocs} {...{"code":"<div class=\"pf-c-expandable-section pf-m-expanded\">\n  <button type=\"button\" class=\"pf-c-expandable-section__toggle\" aria-expanded=\"true\">\n    <span class=\"pf-c-expandable-section__toggle-icon\">\n      <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-expandable-section__toggle-text\">Show less</span>\n  </button>\n  <div class=\"pf-c-expandable-section__content\">This content is visible only when the component is expanded.</div>\n</div>","title":"Expanded","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
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
              {`aria-expanded="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-expandable-section__toggle`}
            </code>
          </td>
          <td>
            {`Indicates that the expandable section content is visible. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-expanded="false"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-expandable-section__toggle`}
            </code>
          </td>
          <td>
            {`Indicates the the expandable section content is hidden. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`hidden`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-expandable-section__content`}
            </code>
          </td>
          <td>
            {`Indicates that the expandable section content element is hidden. Use with `}
            <code {...{"className":"ws-code"}}>
              {`aria-expanded="false"`}
            </code>
            {` `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-hidden="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-expandable-section__toggle-icon`}
            </code>
          </td>
          <td>
            {`Hides the icon from screen readers. `}
            <strong>
              {`Required`}
            </strong>
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
              {`.pf-c-expandable-section`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the expandable section component. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-expandable-section__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates the expandable section toggle. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-expandable-section__toggle-text`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the expandable toggle text. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-expandable-section__toggle-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the expandable toggle icon. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-expandable-section__content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the expandable section content. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-expanded`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-expandable-section`}
            </code>
          </td>
          <td>
            {`Modifies the component for the expanded state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-active`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-expandable-section__toggle`}
            </code>
          </td>
          <td>
            {`Forces display of the active state of the toggle.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsExpandableSectionCoreDocs.Component.displayName = 'DocumentationComponentsExpandableSectionCoreDocs';
