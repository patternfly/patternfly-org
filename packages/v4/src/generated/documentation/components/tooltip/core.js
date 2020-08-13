import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsTooltipCoreDocs = {
  "slug": "/documentation/components/tooltip/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Tooltip/examples/Tooltip.md",
  "section": "components",
  "id": "Tooltip",
  "title": "Tooltip",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-tooltip"
};
DocumentationComponentsTooltipCoreDocs.liveContext = {
  
};
DocumentationComponentsTooltipCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsTooltipCoreDocs} {...{"code":"<div class=\"pf-c-tooltip pf-m-top\" role=\"tooltip\">\n  <div class=\"pf-c-tooltip__arrow\"></div>\n  <div class=\"pf-c-tooltip__content\" id=\"tooltip-top-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n</div>","title":"Top","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTooltipCoreDocs} {...{"code":"<div class=\"pf-c-tooltip pf-m-right\" role=\"tooltip\">\n  <div class=\"pf-c-tooltip__arrow\"></div>\n  <div class=\"pf-c-tooltip__content\" id=\"tooltip-right-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n</div>","title":"Right","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTooltipCoreDocs} {...{"code":"<div class=\"pf-c-tooltip pf-m-bottom\" role=\"tooltip\">\n  <div class=\"pf-c-tooltip__arrow\"></div>\n  <div class=\"pf-c-tooltip__content\" id=\"tooltip-bottom-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n</div>","title":"Bottom","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTooltipCoreDocs} {...{"code":"<div class=\"pf-c-tooltip pf-m-left\" role=\"tooltip\">\n  <div class=\"pf-c-tooltip__arrow\"></div>\n  <div class=\"pf-c-tooltip__content\" id=\"tooltip-left-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n</div>","title":"Left","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTooltipCoreDocs} {...{"code":"<div class=\"pf-c-tooltip pf-m-top\" role=\"tooltip\">\n  <div class=\"pf-c-tooltip__arrow\"></div>\n  <div class=\"pf-c-tooltip__content pf-m-text-align-left\" id=\"tooltip-text-align-left-example\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n</div>","title":"Left aligned text","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A tooltip is used to provide contextual information for another component on hover.  The tooltip itself is made up of two elements: arrow and content. One of the directional modifiers (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-left`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-top`}
      </code>
      {`, etc.) is required on the tooltip component.`}
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
              {`role="tooltip"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tooltip`}
            </code>
          </td>
          <td>
            {`Adds a tooltip role to the tooltip component. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-describedby="[id of .pf-c-tooltip__content]"`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby="[id of .pf-c-tooltip__content]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`[element that triggers the tooltip]`}
            </code>
          </td>
          <td>
            {`Makes the contents of the tooltip accessible to assistive technologies by associating the tooltip text with the element that triggers the tooltip. Use `}
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby`}
            </code>
            {` if the tooltip provides a label for the element. Use `}
            <code {...{"className":"ws-code"}}>
              {`aria-describedby`}
            </code>
            {` if the element already has an accessible label that is different from the tooltip text. `}
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
              {`.pf-c-tooltip`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates a tooltip. Always use with a modifier class that positions the tooltip relative to the element it describes. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tooltip__arrow`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates an arrow pointing towards the element the tooltip describes. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tooltip__content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates the body of the tooltip. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-left`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tooltip`}
            </code>
          </td>
          <td>
            {`Positions the tooltip to the left of the element.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-right`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tooltip`}
            </code>
          </td>
          <td>
            {`Positions the tooltip to the right of the element.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-top`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tooltip`}
            </code>
          </td>
          <td>
            {`Positions the tooltip to the top of the element.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-bottom`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tooltip`}
            </code>
          </td>
          <td>
            {`Positions the tooltip to the bottom of the element.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-text-align-left`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tooltip__content`}
            </code>
          </td>
          <td>
            {`Modifies tooltip content to text align left.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsTooltipCoreDocs.Component.displayName = 'DocumentationComponentsTooltipCoreDocs';
