import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsChipCoreDocs = {
  "slug": "/documentation/components/chip/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Chip/examples/Chip.md",
  "section": "components",
  "id": "Chip",
  "title": "Chip",
  "toc": [
    "Examples",
    "Documentation",
    "Accessibility",
    "Usage"
  ],
  "cssPrefix": "pf-c-chip"
};
DocumentationComponentsChipCoreDocs.liveContext = {
  
};
DocumentationComponentsChipCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsChipCoreDocs} {...{"code":"<div class=\"pf-c-chip\">\n  <span class=\"pf-c-chip__text\" id=\"chip_one\">Chip</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"remove_chip_one chip_one\" aria-label=\"Remove\" id=\"remove_chip_one\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n<br />\n<br />\n<div class=\"pf-c-chip\">\n  <span class=\"pf-c-chip__text\" id=\"chip_two\">Really long chip that goes on and on</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"remove_chip_two chip_two\" aria-label=\"Remove\" id=\"remove_chip_two\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n<br />\n<br />\n<div class=\"pf-c-chip\">\n  <span class=\"pf-c-chip__text\" id=\"chip_three\">Chip</span>\n  <span class=\"pf-c-badge pf-m-read\">00</span>\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"remove_chip_three chip_three\" aria-label=\"Remove\" id=\"remove_chip_three\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n<br />\n<br />\n<div class=\"pf-c-chip pf-m-read-only\">\n  <span class=\"pf-c-chip__text\">Read-only chip</span>\n</div>\n<br />\n<br />\n<button class=\"pf-c-chip pf-m-overflow\">\n  <span class=\"pf-c-chip__text\">Overflow chip</span>\n</button>","title":"Basic","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A Chip is used to display items that have been filtered or selected from a larger group. They comprise of a text element and a button component that is used to remove the chip from selection. When the text overflows it is truncated using ellipses. A chip can be grouped by using the "chip-group" component.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
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
              {`aria-label="[button label text]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Provides an accessible name for the button when an icon is used instead of text. Required when an icon is used with no supporting text.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby="[id value of .pf-c-button]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Gives the button an accessible name by referring to the element that provides the position of the button within a list. Required when the button is being removed.`}
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
              {`<i>`}
            </code>
          </td>
          <td>
            {`Hides the icon from assistive technologies.`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
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
              {`.pf-c-chip`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
            {`,`}
          </td>
          <td>
            {`Initiates the chip component. Use a `}
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
            {` with overflow chips `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-chip__text`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the text inside of the chip. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-chip <button>`}
            </code>
          </td>
          <td>
            {`Initiates the button used to remove the chip.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-badge`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the badge inside the chip.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-overflow`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`button.pf-c-chip`}
            </code>
          </td>
          <td>
            {`Applies styling of the overflow chip.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsChipCoreDocs.Component.displayName = 'DocumentationComponentsChipCoreDocs';
