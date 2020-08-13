import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsTabContentCoreDocs = {
  "slug": "/documentation/components/tab-content/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/TabContent/examples/TabContent.md",
  "section": "components",
  "id": "Tab content",
  "title": "Tab content",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-tab-content"
};
DocumentationComponentsTabContentCoreDocs.liveContext = {
  
};
DocumentationComponentsTabContentCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsTabContentCoreDocs} {...{"code":"<section class=\"pf-c-tab-content\" id=\"tab1-panel\" role=\"tabpanel\" tabindex=\"0\">Panel 1</section>\n<section class=\"pf-c-tab-content\" id=\"tab2-panel\" role=\"tabpanel\" tabindex=\"0\" hidden>Panel 2</section>\n<section class=\"pf-c-tab-content\" id=\"tab3-panel\" role=\"tabpanel\" tabindex=\"0\" hidden>Panel 3</section>\n<section class=\"pf-c-tab-content\" id=\"tab4-panel\" role=\"tabpanel\" tabindex=\"0\" hidden>Panel 4</section>","title":"Basic","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Tab content should be used with the `}
      <PatternflyThemeLink {...{"to":"/documentation/core/components/tabs"}}>
        {`tabs component`}
      </PatternflyThemeLink>
      {`.`}
    </p>
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
              {`role="tabpanel"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tab-content`}
            </code>
          </td>
          <td>
            {`Indicates that the element serves as a container for a set of tabs. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby=[ID of tab element]`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tab-content`}
            </code>
          </td>
          <td>
            {`Provides an accessible name for the tab panel by referring to the tab element that controls it. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`id=[ID of tab panel]`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tab-content`}
            </code>
          </td>
          <td>
            {`Provides an ID for the tab panel, and should be used as the value of `}
            <code {...{"className":"ws-code"}}>
              {`aria-controls`}
            </code>
            {` on the tab element that controls the panel.  `}
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
              {`.pf-c-tab-content`}
            </code>
          </td>
          <td>
            {`Indicates that the tab panel is not visible. `}
            <strong>
              {`Required on all but the active tab panel`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`tabindex="0"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tab-content`}
            </code>
          </td>
          <td>
            {`Puts the tab panel in the page tab sequence and facilitates movement to panel content for assistive technology users. `}
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
              {`.pf-c-tab-content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<section>`}
            </code>
          </td>
          <td>
            {`Initiates the tab content component. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsTabContentCoreDocs.Component.displayName = 'DocumentationComponentsTabContentCoreDocs';
