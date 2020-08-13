import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/components/Select/examples/./Select.css'

export const DocumentationComponentsSelectCoreDocs = {
  "slug": "/documentation/components/select/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Select/examples/Select.md",
  "section": "components",
  "id": "Select",
  "title": "Select",
  "toc": [
    "Examples",
    "Documentation",
    "Usage",
    "Usage",
    "Usage",
    "Usage",
    "Documentation"
  ],
  "cssPrefix": "pf-c-select"
};
DocumentationComponentsSelectCoreDocs.liveContext = {
  
};
DocumentationComponentsSelectCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select\">\n  <span id=\"select-single-label\" hidden>Choose one</span>\n  <button class=\"pf-c-select__toggle\" type=\"button\" id=\"select-single-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"select-single-label select-single-toggle\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by birth month</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-select__menu\" aria-labelledby=\"select-single-label\" hidden>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Running</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Stopped</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Down</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Degraded</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Needs Maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Single","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select\">\n  <span id=\"select-disabled-label\" hidden>Choose one</span>\n  <button class=\"pf-c-select__toggle\" type=\"button\" id=\"select-disabled-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"select-disabled-label select-disabled-toggle\" disabled>\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by birth month</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-select__menu\" aria-labelledby=\"select-disabled-label\" hidden>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Running</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Stopped</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Down</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Degraded</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Needs Maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Disabled","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-single-expanded-label\" hidden>Choose one</span>\n  <button class=\"pf-c-select__toggle\" type=\"button\" id=\"select-single-expanded-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"select-single-expanded-label select-single-expanded-toggle\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by birth month</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-select__menu\" aria-labelledby=\"select-single-expanded-label\">\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Running</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Stopped</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Down</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Degraded</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Needs Maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Single expanded","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select pf-m-expanded pf-m-top\">\n  <span id=\"select-single-top-expanded-label\" hidden>Choose one</span>\n  <button class=\"pf-c-select__toggle\" type=\"button\" id=\"select-single-top-expanded-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"select-single-top-expanded-label select-single-top-expanded-toggle\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by birth month</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-select__menu\" aria-labelledby=\"select-single-top-expanded-label\">\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Running</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Stopped</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Down</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Degraded</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Needs Maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Single with top expanded","lang":"html"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`The top select variation should be used when you want the menu to display above the toggle.`}
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
              {`.pf-c-select`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a custom select.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates a custom toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-wrapper`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a custom select toggle wrapper.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-arrow`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the caret to toggle the dropdown.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
          </td>
          <td>
            {`Initiates the custom select dropdown menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Initiates the items in the custom select dropdown menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<i>`}
            </code>
          </td>
          <td>
            {`Initiates the selected item icon.`}
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
              {`.pf-c-select`}
            </code>
          </td>
          <td>
            {`Modifies the select menu to display above the toggle.`}
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
              {`.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            {`Forces display of the active state of the toggle.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-single-expanded-selected-label\" hidden>Choose one</span>\n  <button class=\"pf-c-select__toggle\" type=\"button\" id=\"select-single-expanded-selected-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"select-single-expanded-selected-label select-single-expanded-selected-toggle\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">April</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-select__menu\" aria-labelledby=\"select-single-expanded-selected-label\">\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Running</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item pf-m-selected\" aria-selected=\"true\">Stopped\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Down</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Degraded</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Needs Maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Single expanded and selected","lang":"html"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`The single select should be used when the user is selecting an option from a list of items. Although the presentation is similar to the basic dropdown, the underlying HTML and ARIA tag structure is specific to a select list. The selection will replace the default text in the toggle. The selection is highlighted with the list is opened. If the selection is cleared elsewhere (i.e. from the filter bar), the default text is restored.`}
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
              {`aria-selected="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            {`Should be set programmatically to indicate the active item.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`disabled`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            {`Disables the dropdown toggle and removes it from keyboard focus.`}
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
              {`.pf-c-select`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select component.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates the select toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-wrapper`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select toggle wrapper.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-arrow`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the caret to toggle the dropdown.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
          </td>
          <td>
            {`Initiates the select dropdown menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Initiates the items in the select dropdown menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the selected item icon wrapper.`}
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
              {`.pf-c-select`}
            </code>
          </td>
          <td>
            {`Indicates the select is expanded.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-selected`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            {`Indicates the menu item is selected.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-disabled`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`div.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            {`Modifies to display the select toggle as disabled. This applies to `}
            <code {...{"className":"ws-code"}}>
              {`div.pf-c-select__toggle`}
            </code>
            {` and should not be used in lieu of the `}
            <code {...{"className":"ws-code"}}>
              {`disabled`}
            </code>
            {` attribute on `}
            <code {...{"className":"ws-code"}}>
              {`button.pf-c-select__toggle`}
            </code>
            {`. When this is used, `}
            <code {...{"className":"ws-code"}}>
              {`disabled`}
            </code>
            {` should also be added to any form elements in `}
            <code {...{"className":"ws-code"}}>
              {`div.pf-c-select__toggle`}
            </code>
          </td>
        </tr>
      </tbody>
    </table>
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
              {`aria-selected="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            {`Should be set programmatically to indicate the active item.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`disabled`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            {`Disables the dropdown toggle and removes it from keyboard focus.`}
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
              {`.pf-c-select`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select component.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates the select toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-wrapper`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select toggle wrapper.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-arrow`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the caret to toggle the dropdown.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
          </td>
          <td>
            {`Initiates the select dropdown menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Initiates the items in the select dropdown menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<i>`}
            </code>
          </td>
          <td>
            {`Initiates the selected item icon.`}
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
              {`.pf-c-select`}
            </code>
          </td>
          <td>
            {`Indicates the select is expanded.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-selected`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            {`Indicates the menu item is selected.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-disabled`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`div.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            {`Modifies to display the select toggle as disabled. This applies to `}
            <code {...{"className":"ws-code"}}>
              {`div.pf-c-select__toggle`}
            </code>
            {` and should not be used in lieu of the `}
            <code {...{"className":"ws-code"}}>
              {`disabled`}
            </code>
            {` attribute on `}
            <code {...{"className":"ws-code"}}>
              {`button.pf-c-select__toggle`}
            </code>
            {`. When this is used, `}
            <code {...{"className":"ws-code"}}>
              {`disabled`}
            </code>
            {` should also be added to any form elements in `}
            <code {...{"className":"ws-code"}}>
              {`div.pf-c-select__toggle`}
            </code>
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select\">\n  <span id=\"select-single-typeahead-label\" hidden>Choose a state</span>\n  <div class=\"pf-c-select__toggle pf-m-typeahead\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <input class=\"pf-c-form-control pf-c-select__toggle-typeahead\" type=\"text\" id=\"select-single-typeahead-typeahead\" aria-label=\"Type to filter\" placeholder=\"Choose a state\" />\n    </div>\n    <button class=\"pf-c-button pf-m-plain pf-c-select__toggle-button\" type=\"button\" id=\"select-single-typeahead-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"select-single-typeahead-label select-single-typeahead-toggle\" aria-label=\"Select\">\n      <i class=\"fas fa-caret-down pf-c-select__toggle-arrow\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-select__menu\" aria-labelledby=\"select-single-typeahead-label\" hidden>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Alabama</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Florida</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">New Jersey</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">New Mexico</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">New York</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">North Carolina</button>\n    </li>\n  </ul>\n</div>","title":"Single with typeahead","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-single-typeahead-expanded-label\" hidden>New</span>\n  <div class=\"pf-c-select__toggle pf-m-typeahead\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <input class=\"pf-c-form-control pf-c-select__toggle-typeahead\" type=\"text\" id=\"select-single-typeahead-expanded-typeahead\" aria-label=\"Type to filter\" value=\"New\" />\n    </div>\n    <button class=\"pf-c-button pf-m-plain pf-c-select__toggle-clear\" type=\"button\" aria-label=\"Clear all\">\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </button>\n    <button class=\"pf-c-button pf-m-plain pf-c-select__toggle-button\" type=\"button\" id=\"select-single-typeahead-expanded-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"select-single-typeahead-expanded-label select-single-typeahead-expanded-toggle\" aria-label=\"Select\">\n      <i class=\"fas fa-caret-down pf-c-select__toggle-arrow\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-select__menu\" aria-labelledby=\"select-single-typeahead-expanded-label\">\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">\n        <mark class=\"pf-c-select__menu-item--match\">New</mark>Jersey</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item pf-m-selected\" aria-selected=\"true\">\n        <mark class=\"pf-c-select__menu-item--match\">New</mark>Mexico\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">\n        <mark class=\"pf-c-select__menu-item--match\">New</mark>York</button>\n    </li>\n  </ul>\n</div>","title":"Single with typeahead expanded","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-single-typeahead-expanded-selected-label\" hidden>New Mexico</span>\n  <div class=\"pf-c-select__toggle pf-m-typeahead\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <input class=\"pf-c-form-control pf-c-select__toggle-typeahead\" type=\"text\" id=\"select-single-typeahead-expanded-selected-typeahead\" aria-label=\"Type to filter\" value=\"New Mexico\" />\n    </div>\n    <button class=\"pf-c-button pf-m-plain pf-c-select__toggle-clear\" type=\"button\" aria-label=\"Clear all\">\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </button>\n    <button class=\"pf-c-button pf-m-plain pf-c-select__toggle-button\" type=\"button\" id=\"select-single-typeahead-expanded-selected-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"select-single-typeahead-expanded-selected-label select-single-typeahead-expanded-selected-toggle\" aria-label=\"Select\">\n      <i class=\"fas fa-caret-down pf-c-select__toggle-arrow\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-select__menu\" aria-labelledby=\"select-single-typeahead-expanded-selected-label\">\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Alabama</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Florida</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">New Jersey</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item pf-m-selected\" aria-selected=\"true\">New Mexico\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">New York</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">North Carolina</button>\n    </li>\n  </ul>\n</div>","title":"Single with typeahead expanded and selected","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select\">\n  <span id=\"select-single-typeahead-disabled-label\" hidden>Choose a state</span>\n  <div class=\"pf-c-select__toggle pf-m-disabled pf-m-typeahead\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <input class=\"pf-c-form-control pf-c-select__toggle-typeahead\" type=\"text\" id=\"select-single-typeahead-disabled-typeahead\" aria-label=\"Type to filter\" placeholder=\"Choose a state\" disabled />\n    </div>\n    <button class=\"pf-c-button pf-m-plain pf-c-select__toggle-button\" type=\"button\" id=\"select-single-typeahead-disabled-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"select-single-typeahead-disabled-label select-single-typeahead-disabled-toggle\" aria-label=\"Select\" disabled>\n      <i class=\"fas fa-caret-down pf-c-select__toggle-arrow\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-select__menu\" aria-labelledby=\"select-single-typeahead-disabled-label\" hidden>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Alabama</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Florida</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">New Jersey</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">New Mexico</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">New York</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">North Carolina</button>\n    </li>\n  </ul>\n</div>","title":"Disabled with typeahead","lang":"html"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`The single select typeahead should be used when the user is selecting one option from a list of items with the option to narrow the list by typing from the keyboard. Selected items are removed from the list. The user can clear the selection and restore the placeholder text.`}
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
              {`aria-selected="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            {`Should be set programmatically to indicate the active item.`}
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
              {`.pf-c-select`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select component.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-wrapper`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select toggle wrapper.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-typeahead`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`input.pf-c-form-control`}
            </code>
          </td>
          <td>
            {`Initiates the input field for typeahead.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-clear`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`button.pf-c-button.pf-m-plain`}
            </code>
          </td>
          <td>
            {`Initiates a clear button in the toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-button`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`button.pf-c-button.pf-m-plain`}
            </code>
          </td>
          <td>
            {`Initiates a toggle button.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-arrow`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the caret icon.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
          </td>
          <td>
            {`Initiates the select dropdown menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Initiates the items in the select dropdown menu.`}
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
              {`.pf-c-select`}
            </code>
          </td>
          <td>
            {`Indicates the select is expanded.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-typeahead`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            {`Indicates the select has a typeahead.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-focus`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            {`Modifies the menu item to apply `}
            <code {...{"className":"ws-code"}}>
              {`:focus`}
            </code>
            {` styling. For use when navigating the menu items by keyboard when the typeahead input field has browser focus.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select\">\n  <span id=\"select-multi-typeahead-label\" hidden>Choose states</span>\n  <div class=\"pf-c-select__toggle pf-m-typeahead\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <input class=\"pf-c-form-control pf-c-select__toggle-typeahead\" type=\"text\" id=\"select-multi-typeahead-typeahead\" aria-label=\"Type to filter\" placeholder=\"Choose states\" />\n    </div>\n    <button class=\"pf-c-button pf-m-plain pf-c-select__toggle-button\" type=\"button\" id=\"select-multi-typeahead-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"select-multi-typeahead-label select-multi-typeahead-toggle\" aria-label=\"Select\">\n      <i class=\"fas fa-caret-down pf-c-select__toggle-arrow\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-select__menu\" aria-labelledby=\"select-multi-typeahead-label\" hidden>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Alabama</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Florida</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">New Jersey</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">New York</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">North Carolina</button>\n    </li>\n  </ul>\n</div>","title":"Select multi with typeahead","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-multi-typeahead-expanded-label\" hidden>Choose states</span>\n  <div class=\"pf-c-select__toggle pf-m-typeahead\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <div class=\"pf-c-chip-group\">\n        <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-label=\"Chip group list\">\n          <li class=\"pf-c-chip-group__list-item\">\n            <div class=\"pf-c-chip\">\n              <span class=\"pf-c-chip__text\" id=\"select-multi-typeahead-expanded-chip_one\">Arkansas</span>\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"remove_select-multi-typeahead-expanded_chip_one select-multi-typeahead-expanded-chip_two\" aria-label=\"Remove\" id=\"remove_select-multi-typeahead-expanded_chip_one\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </li>\n          <li class=\"pf-c-chip-group__list-item\">\n            <div class=\"pf-c-chip\">\n              <span class=\"pf-c-chip__text\" id=\"select-multi-typeahead-expanded-chip_two\">Massachusetts</span>\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"remove_select-multi-typeahead-expanded_chip_two select-multi-typeahead-expanded-chip_two\" aria-label=\"Remove\" id=\"remove_select-multi-typeahead-expanded_chip_two\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </li>\n          <li class=\"pf-c-chip-group__list-item\">\n            <div class=\"pf-c-chip\">\n              <span class=\"pf-c-chip__text\" id=\"select-multi-typeahead-expanded-chip_three\">New Mexico</span>\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"remove_select-multi-typeahead-expanded_chip_three select-multi-typeahead-expanded-chip_three\" aria-label=\"Remove\" id=\"remove_select-multi-typeahead-expanded_chip_three\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </li>\n          <li class=\"pf-c-chip-group__list-item\">\n            <div class=\"pf-c-chip\">\n              <span class=\"pf-c-chip__text\" id=\"select-multi-typeahead-expanded-chip_four\">Ohio</span>\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"remove_select-multi-typeahead-expanded_chip_four select-multi-typeahead-expanded-chip_four\" aria-label=\"Remove\" id=\"remove_select-multi-typeahead-expanded_chip_four\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </li>\n          <li class=\"pf-c-chip-group__list-item\">\n            <div class=\"pf-c-chip\">\n              <span class=\"pf-c-chip__text\" id=\"select-multi-typeahead-expanded-chip_five\">Washington</span>\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"remove_select-multi-typeahead-expanded_chip_five select-multi-typeahead-expanded-chip_five\" aria-label=\"Remove\" id=\"remove_select-multi-typeahead-expanded_chip_five\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <input class=\"pf-c-form-control pf-c-select__toggle-typeahead\" type=\"text\" id=\"select-multi-typeahead-expanded-typeahead\" aria-label=\"Type to filter\" value=\"Choose states\" />\n    </div>\n    <button class=\"pf-c-button pf-m-plain pf-c-select__toggle-clear\" type=\"button\" aria-label=\"Clear all\">\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </button>\n    <button class=\"pf-c-button pf-m-plain pf-c-select__toggle-button\" type=\"button\" id=\"select-multi-typeahead-expanded-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"select-multi-typeahead-expanded-label select-multi-typeahead-expanded-toggle\" aria-label=\"Select\">\n      <i class=\"fas fa-caret-down pf-c-select__toggle-arrow\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-select__menu\" aria-labelledby=\"select-multi-typeahead-expanded-label\">\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Alabama</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Florida</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">New Jersey</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">New York</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">North Carolina</button>\n    </li>\n  </ul>\n</div>","title":"Multi with typeahead (chip group expanded)","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-multi-typeahead-expanded-selected-label\" hidden>New</span>\n  <div class=\"pf-c-select__toggle pf-m-typeahead\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <div class=\"pf-c-chip-group\">\n        <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-label=\"Chip group list\">\n          <li class=\"pf-c-chip-group__list-item\">\n            <div class=\"pf-c-chip\">\n              <span class=\"pf-c-chip__text\" id=\"select-multi-typeahead-expanded-selected-chip_one\">Arkansas</span>\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"remove_select-multi-typeahead-expanded-selected_chip_one select-multi-typeahead-expanded-selected-chip_one\" aria-label=\"Remove\" id=\"remove_select-multi-typeahead-expanded-selected_chip_one\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </li>\n          <li class=\"pf-c-chip-group__list-item\">\n            <div class=\"pf-c-chip\">\n              <span class=\"pf-c-chip__text\" id=\"select-multi-typeahead-expanded-selected-chip_two\">Massachusetts</span>\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"remove_select-multi-typeahead-expanded-selected_chip_two select-multi-typeahead-expanded-selected-chip_two\" aria-label=\"Remove\" id=\"remove_select-multi-typeahead-expanded-selected_chip_two\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </li>\n          <li class=\"pf-c-chip-group__list-item\">\n            <div class=\"pf-c-chip\">\n              <span class=\"pf-c-chip__text\" id=\"select-multi-typeahead-expanded-selected-chip_three\">New Mexico</span>\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"remove_select-multi-typeahead-expanded-selected_chip_three select-multi-typeahead-expanded-selected-chip_three\" aria-label=\"Remove\" id=\"remove_select-multi-typeahead-expanded-selected_chip_three\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </li>\n          <li class=\"pf-c-chip-group__list-item\">\n            <button class=\"pf-c-chip pf-m-overflow\">\n              <span class=\"pf-c-chip__text\">2 more</span>\n            </button>\n          </li>\n        </ul>\n      </div>\n      <input class=\"pf-c-form-control pf-c-select__toggle-typeahead\" type=\"text\" id=\"select-multi-typeahead-expanded-selected-typeahead\" aria-label=\"Type to filter\" value=\"New\" />\n    </div>\n    <button class=\"pf-c-button pf-m-plain pf-c-select__toggle-clear\" type=\"button\" aria-label=\"Clear all\">\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </button>\n    <button class=\"pf-c-button pf-m-plain pf-c-select__toggle-button\" type=\"button\" id=\"select-multi-typeahead-expanded-selected-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"select-multi-typeahead-expanded-selected-label select-multi-typeahead-expanded-selected-toggle\" aria-label=\"Select\">\n      <i class=\"fas fa-caret-down pf-c-select__toggle-arrow\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <ul class=\"pf-c-select__menu\" aria-labelledby=\"select-multi-typeahead-expanded-selected-label\">\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">\n        <mark class=\"pf-c-select__menu-item--match\">New</mark>Jersey</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">\n        <mark class=\"pf-c-select__menu-item--match\">New</mark>York</button>\n    </li>\n  </ul>\n</div>","title":"Multi with typeahead (chip group collapsed)","lang":"html"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`The Dropdown Multi Select should be used when the user is selecting multiple items from a list. The user can narrow the list by typing from the keyboard. The List updates while typing. Selected items create a new chip and are removed from the list. The user may clear selections individually or all at once to restore the placeholder.`}
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
              {`aria-selected="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            {`Should be set programmatically to indicate the active item.`}
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
              {`.pf-c-select`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select component.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-wrapper`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select toggle wrapper so that chips and input field can wrap together.`}
          </td>
        </tr>
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
          </td>
          <td>
            {`Initiates a chip. (See `}
            <PatternflyThemeLink {...{"to":"/documentation/core/components/check"}}>
              {`chip component`}
            </PatternflyThemeLink>
            {` for more details)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-typeahead`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`input.pf-c-form-control`}
            </code>
          </td>
          <td>
            {`Initiates the input field for typeahead.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-clear`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`button.pf-m-plain`}
            </code>
          </td>
          <td>
            {`Initiates a clear button in the toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-button`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates a toggle button.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-arrow`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the caret icon.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
          </td>
          <td>
            {`Initiates the select dropdown menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Initiates the items in the select dropdown menu.`}
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
              {`.pf-c-select`}
            </code>
          </td>
          <td>
            {`Indicates the select is expanded.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-typeahead`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            {`Indicates the select has a typeahead.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select\">\n  <span id=\"select-checkbox-label\" hidden>Choose one</span>\n  <button class=\"pf-c-select__toggle\" type=\"button\" id=\"select-checkbox-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"select-checkbox-label select-checkbox-toggle\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-select__menu\" hidden>\n    <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n      <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"select-checkbox-active\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-active\" name=\"select-checkbox-active\" />\n        <span class=\"pf-c-check__label\">Active</span>\n        <div class=\"pf-c-check__description\">This is a description</div>\n      </label>\n      <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"select-checkbox-cancelled\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-cancelled\" name=\"select-checkbox-cancelled\" />\n        <span class=\"pf-c-check__label\">Cancelled</span>\n        <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n      </label>\n      <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-paused\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-paused\" name=\"select-checkbox-paused\" />\n        <span class=\"pf-c-check__label\">Paused</span>\n      </label>\n      <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-warning\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-warning\" name=\"select-checkbox-warning\" />\n        <span class=\"pf-c-check__label\">Warning</span>\n      </label>\n      <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-restarted\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-restarted\" name=\"select-checkbox-restarted\" />\n        <span class=\"pf-c-check__label\">Restarted</span>\n      </label>\n    </fieldset>\n  </div>\n</div>","title":"Checkbox","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-checkbox-expanded-label\" hidden>Choose one</span>\n  <button class=\"pf-c-select__toggle\" type=\"button\" id=\"select-checkbox-expanded-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"select-checkbox-expanded-label select-checkbox-expanded-toggle\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-select__menu\">\n    <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n      <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-active\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-active\" name=\"select-checkbox-expanded-active\" />\n        <span class=\"pf-c-check__label\">Active</span>\n      </label>\n      <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-cancelled\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-cancelled\" name=\"select-checkbox-expanded-cancelled\" checked />\n        <span class=\"pf-c-check__label\">Cancelled</span>\n      </label>\n      <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-paused\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-paused\" name=\"select-checkbox-expanded-paused\" checked />\n        <span class=\"pf-c-check__label\">Paused</span>\n      </label>\n      <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-warning\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-warning\" name=\"select-checkbox-expanded-warning\" />\n        <span class=\"pf-c-check__label\">Warning</span>\n      </label>\n      <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-restarted\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-restarted\" name=\"select-checkbox-expanded-restarted\" checked />\n        <span class=\"pf-c-check__label\">Restarted</span>\n      </label>\n    </fieldset>\n  </div>\n</div>","title":"Checkbox expanded","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-checkbox-expanded-selected-label\" hidden>Choose one</span>\n  <button class=\"pf-c-select__toggle\" type=\"button\" id=\"select-checkbox-expanded-selected-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"select-checkbox-expanded-selected-label select-checkbox-expanded-selected-toggle\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-select__menu\">\n    <div class=\"pf-c-select__menu-group\">\n      <div class=\"pf-c-select__menu-group-title\" aria-hidden=\"true\" id=\"select-checkbox-expanded-selected-group-status\">Status</div>\n      <fieldset class=\"pf-c-select__menu-fieldset\" aria-labelledby=\"select-checkbox-expanded-selected-group-status\">\n        <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-selected-running\">\n          <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-selected-running\" name=\"running\" />\n          <span class=\"pf-c-check__label\">Running</span>\n        </label>\n        <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-selected-stopped\">\n          <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-selected-stopped\" name=\"stopped\" checked />\n          <span class=\"pf-c-check__label\">Stopped</span>\n        </label>\n        <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-selected-down\">\n          <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-selected-down\" name=\"down\" checked />\n          <span class=\"pf-c-check__label\">Down</span>\n        </label>\n        <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-selected-degraded\">\n          <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-selected-degraded\" name=\"degraded\" />\n          <span class=\"pf-c-check__label\">Degraded</span>\n        </label>\n        <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-selected-needsMaintenance\">\n          <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-selected-needsMaintenance\" name=\"needsMaintenance\" checked />\n          <span class=\"pf-c-check__label\">Needs maintenance</span>\n        </label>\n      </fieldset>\n    </div>\n    <div class=\"pf-c-select__menu-group\">\n      <div class=\"pf-c-select__menu-group-title\" aria-hidden=\"true\" id=\"select-checkbox-expanded-selected-group-vendor\">Vendor</div>\n      <fieldset class=\"pf-c-select__menu-fieldset\" aria-labelledby=\"select-checkbox-expanded-selected-group-vendor\">\n        <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-selected-dell\">\n          <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-selected-dell\" name=\"dell\" />\n          <span class=\"pf-c-check__label\">Dell</span>\n        </label>\n        <label class=\"pf-c-check pf-c-select__menu-item pf-m-disabled\" for=\"select-checkbox-expanded-selected-samsung\">\n          <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-selected-samsung\" name=\"samsung\" disabled />\n          <span class=\"pf-c-check__label pf-m-disabled\">Samsung</span>\n        </label>\n        <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-selected-hp\">\n          <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-selected-hp\" name=\"hp\" />\n          <span class=\"pf-c-check__label\">Hewlett-Packard</span>\n        </label>\n      </fieldset>\n    </div>\n  </div>\n</div>","title":"Checkbox expanded and selected with groups","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-checkbox-expanded-selected-filter-example-label\" hidden>Choose one</span>\n  <button class=\"pf-c-select__toggle\" type=\"button\" id=\"select-checkbox-expanded-selected-filter-example-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"select-checkbox-expanded-selected-filter-example-label select-checkbox-expanded-selected-filter-example-toggle\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-select__menu\">\n    <div class=\"pf-c-select__menu-search\">\n      <input class=\"pf-c-form-control pf-m-search\" type=\"search\" id=\"select-checkbox-expanded-selected-filter-example-search-input\" name=\"select-checkbox-expanded-selected-filter-example-search-input\" aria-label=\"Search\" />\n    </div>\n    <hr class=\"pf-c-divider\" />\n    <div class=\"pf-c-select__menu-group\">\n      <div class=\"pf-c-select__menu-group-title\" aria-hidden=\"true\" id=\"select-checkbox-expanded-selected-filter-example-group-status\">Status</div>\n      <fieldset class=\"pf-c-select__menu-fieldset\" aria-labelledby=\"select-checkbox-expanded-selected-filter-example-group-status\">\n        <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-selected-filter-example-running\">\n          <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-selected-filter-example-running\" name=\"running\" />\n          <span class=\"pf-c-check__label\">Running</span>\n        </label>\n        <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-selected-filter-example-stopped\">\n          <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-selected-filter-example-stopped\" name=\"stopped\" checked />\n          <span class=\"pf-c-check__label\">Stopped</span>\n        </label>\n        <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-selected-filter-example-down\">\n          <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-selected-filter-example-down\" name=\"down\" checked />\n          <span class=\"pf-c-check__label\">Down</span>\n        </label>\n        <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-selected-filter-example-degraded\">\n          <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-selected-filter-example-degraded\" name=\"degraded\" />\n          <span class=\"pf-c-check__label\">Degraded</span>\n        </label>\n        <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-selected-filter-example-needsMaintenance\">\n          <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-selected-filter-example-needsMaintenance\" name=\"needsMaintenance\" checked />\n          <span class=\"pf-c-check__label\">Needs maintenance</span>\n        </label>\n      </fieldset>\n    </div>\n    <div class=\"pf-c-select__menu-group\">\n      <div class=\"pf-c-select__menu-group-title\" aria-hidden=\"true\" id=\"select-checkbox-expanded-selected-filter-example-group-vendor\">Vendor</div>\n      <fieldset class=\"pf-c-select__menu-fieldset\" aria-labelledby=\"select-checkbox-expanded-selected-filter-example-group-vendor\">\n        <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-selected-filter-example-dell\">\n          <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-selected-filter-example-dell\" name=\"dell\" />\n          <span class=\"pf-c-check__label\">Dell</span>\n        </label>\n        <label class=\"pf-c-check pf-c-select__menu-item pf-m-disabled\" for=\"select-checkbox-expanded-selected-filter-example-samsung\">\n          <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-selected-filter-example-samsung\" name=\"samsung\" disabled />\n          <span class=\"pf-c-check__label pf-m-disabled\">Samsung</span>\n        </label>\n        <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-expanded-selected-filter-example-hp\">\n          <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-expanded-selected-filter-example-hp\" name=\"hp\" />\n          <span class=\"pf-c-check__label\">Hewlett-Packard</span>\n        </label>\n      </fieldset>\n    </div>\n  </div>\n</div>","title":"Checkbox expanded and selected with groups and filter","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-checkbox-without-badge-label\" hidden>Choose one</span>\n  <button class=\"pf-c-select__toggle\" type=\"button\" id=\"select-checkbox-without-badge-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"select-checkbox-without-badge-label select-checkbox-without-badge-toggle\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-select__menu\">\n    <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n      <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-without-badge-active\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-without-badge-active\" name=\"select-checkbox-without-badge-active\" />\n        <span class=\"pf-c-check__label\">Active</span>\n      </label>\n      <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-without-badge-cancelled\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-without-badge-cancelled\" name=\"select-checkbox-without-badge-cancelled\" checked />\n        <span class=\"pf-c-check__label\">Cancelled</span>\n      </label>\n      <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-without-badge-paused\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-without-badge-paused\" name=\"select-checkbox-without-badge-paused\" checked />\n        <span class=\"pf-c-check__label\">Paused</span>\n      </label>\n      <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-without-badge-warning\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-without-badge-warning\" name=\"select-checkbox-without-badge-warning\" />\n        <span class=\"pf-c-check__label\">Warning</span>\n      </label>\n      <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-without-badge-restarted\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-without-badge-restarted\" name=\"select-checkbox-without-badge-restarted\" checked />\n        <span class=\"pf-c-check__label\">Restarted</span>\n      </label>\n    </fieldset>\n  </div>\n</div>","title":"Checkbox expanded without badge","lang":"html"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`The checkbox select can select multiple items using checkboxes. The number of items selected is reflected in an optional badge in the dropdown toggle. The user may clear items by unchecking or using the clear button. Optionally, items may be grouped.`}
    </p>
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
              {`.pf-c-select`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select component.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates the select toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-wrapper`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select toggle wrapper so that chips and input field can wrap together.`}
          </td>
        </tr>
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
          </td>
          <td>
            {`Initiates a chip. (See `}
            <PatternflyThemeLink {...{"to":"/documentation/core/components/chip"}}>
              {`chip component`}
            </PatternflyThemeLink>
            {` for more details)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-typeahead`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`input.pf-c-form-control`}
            </code>
          </td>
          <td>
            {`Initiates the input field for typeahead.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-badge`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a container for a badge to indicate the number of items checked. `}
            <em>
              {` note: This should contain an unread badge `}
            </em>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-clear`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`button.pf-m-plain`}
            </code>
          </td>
          <td>
            {`Initiates a clear button in the toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-arrow`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the caret to toggle the dropdown.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select dropdown menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`div.pf-c-check`}
            </code>
          </td>
          <td>
            {`Initiates the items in the select dropdown menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-fieldset`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<fieldset>`}
            </code>
          </td>
          <td>
            {`Initiates a fieldset for the items in a checkbox select.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a group within a select menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-group-title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a title for a group with a select menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-search`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a container for the search input group.`}
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
              {`.pf-c-select`}
            </code>
          </td>
          <td>
            {`Indicates the select is expanded.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-typeahead`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            {`Indicates the select has a typeahead.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select\">\n  <span id=\"select-plain-label\" hidden>Choose one</span>\n  <button class=\"pf-c-select__toggle pf-m-plain\" type=\"button\" id=\"select-plain-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"select-plain-label select-plain-toggle\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by birth month</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-select__menu\" aria-labelledby=\"select-plain-label\" hidden>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Running</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Stopped</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Down</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Degraded</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Needs Maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Plain","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-plain-expanded-label\" hidden>Choose one</span>\n  <button class=\"pf-c-select__toggle pf-m-plain\" type=\"button\" id=\"select-plain-expanded-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"select-plain-expanded-label select-plain-expanded-toggle\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by birth month</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-select__menu\" aria-labelledby=\"select-plain-expanded-label\">\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Running</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Stopped</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Down</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Degraded</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Needs Maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Plain expanded","lang":"html"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`The plain select variation should be used when you do not want a border applied to the select toggle.`}
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
              {`.pf-c-select`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select component.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates the select toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-wrapper`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select toggle wrapper.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-arrow`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the caret to toggle the dropdown.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
          </td>
          <td>
            {`Initiates the select dropdown menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Initiates the items in the select dropdown menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<i>`}
            </code>
          </td>
          <td>
            {`Initiates the selected item icon.`}
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
              {`.pf-c-select`}
            </code>
          </td>
          <td>
            {`Indicates the select is expanded.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-plain`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            {`Modifies to display the toggle with no border.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-selected`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            {`Indicates the menu item is selected.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select\">\n  <span id=\"select-icon-label\" hidden>Choose one</span>\n  <button class=\"pf-c-select__toggle\" type=\"button\" id=\"select-icon-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"select-icon-label select-icon-toggle\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-icon\">\n        <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n      </span>\n      <span class=\"pf-c-select__toggle-text\">Filter by status</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-select__menu\" aria-labelledby=\"select-icon-label\" hidden>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Running</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Stopped</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Down</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Degraded</button>\n    </li>\n    <li>\n      <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Needs Maintenance</button>\n    </li>\n  </ul>\n</div>","title":"Icon","lang":"html"}}>
    </Example>
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
              {`aria-hidden="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-icon`}
            </code>
          </td>
          <td>
            {`Hides the icon from assistive technologies.`}
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
              {`.pf-c-select`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select component.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates the select toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-wrapper`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select toggle wrapper.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the icon in the dropdown toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-arrow`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the caret to toggle the dropdown.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-panel-label\" hidden>Choose one</span>\n  <button class=\"pf-c-select__toggle\" type=\"button\" id=\"select-panel-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"select-panel-label select-panel-toggle\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter by birth month</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-select__menu\" aria-labelledby=\"select-panel-label\">[Panel contents here]</div>\n</div>","title":"Panel","lang":"html"}}>
    </Example>
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
              {`.pf-c-select`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select component.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates the select toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-wrapper`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select toggle wrapper.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__toggle-arrow`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the caret to toggle the dropdown.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the select dropdown menu.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-with-description-label\" hidden>Choose one</span>\n  <button class=\"pf-c-select__toggle\" type=\"button\" id=\"select-with-description-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"select-with-description-label select-with-description-toggle\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Select with description</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <ul class=\"pf-c-select__menu pf-m-wrap\" aria-labelledby=\"select-with-description-label\">\n    <li>\n      <button class=\"pf-c-select__menu-item\">Menu item</button>\n    </li>\n    <li>\n      <button class=\"pf-c-select__menu-item pf-m-selected\" aria-selected=\"true\">Menu item selected\n        <span class=\"pf-c-select__menu-item-icon\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-select__menu-item pf-m-description\">\n        <span class=\"pf-c-select__menu-item-main\">Menu item description</span>\n        <span class=\"pf-c-select__menu-item-description\">This is a description.</span>\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-select__menu-item pf-m-description\" disabled>\n        <span class=\"pf-c-select__menu-item-main\">\n          <span class=\"pf-c-select__menu-item-main\">Menu item description disabled</span>\n        </span>\n        <span class=\"pf-c-select__menu-item-description\">This is a description.</span>\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-select__menu-item pf-m-selected pf-m-description\" aria-selected=\"true\">\n        <span class=\"pf-c-select__menu-item-main\">Menu item description selected\n          <span class=\"pf-c-select__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n        <span class=\"pf-c-select__menu-item-description\">This is a description.</span>\n      </button>\n    </li>\n    <li>\n      <button class=\"pf-c-select__menu-item pf-m-selected pf-m-description\" aria-selected=\"true\">\n        <span class=\"pf-c-select__menu-item-main\">Menu item long description\n          <span class=\"pf-c-select__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n        <span class=\"pf-c-select__menu-item-description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</span>\n      </button>\n    </li>\n  </ul>\n</div>","title":"With description","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-checkbox-description-label\" hidden>Choose one</span>\n  <button class=\"pf-c-select__toggle\" type=\"button\" id=\"select-checkbox-description-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"select-checkbox-description-label select-checkbox-description-toggle\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Filter</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-select__menu\">\n    <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n      <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"select-checkbox-description-active\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-description-active\" name=\"select-checkbox-description-active\" />\n        <span class=\"pf-c-check__label\">Active</span>\n        <div class=\"pf-c-check__description\">This is a description</div>\n      </label>\n      <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"select-checkbox-description-cancelled\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-description-cancelled\" name=\"select-checkbox-description-cancelled\" />\n        <span class=\"pf-c-check__label\">Cancelled</span>\n        <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n      </label>\n      <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-description-paused\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-description-paused\" name=\"select-checkbox-description-paused\" />\n        <span class=\"pf-c-check__label\">Paused</span>\n      </label>\n      <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-description-warning\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-description-warning\" name=\"select-checkbox-description-warning\" />\n        <span class=\"pf-c-check__label\">Warning</span>\n      </label>\n      <label class=\"pf-c-check pf-c-select__menu-item\" for=\"select-checkbox-description-restarted\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"select-checkbox-description-restarted\" name=\"select-checkbox-description-restarted\" />\n        <span class=\"pf-c-check__label\">Restarted</span>\n      </label>\n    </fieldset>\n  </div>\n</div>","title":"Checkbox with description","lang":"html"}}>
    </Example>
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
              {`.pf-c-select__menu-item-description`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the select menu item description element.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item-main`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the select menu item main element. Used when the description element is present.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-description`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            {`Modifies the select menu item when selected to accommodate the description element.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsSelectCoreDocs} {...{"code":"<div class=\"pf-c-select pf-m-expanded\">\n  <span id=\"select-favorites-label\" hidden>Choose one</span>\n  <button class=\"pf-c-select__toggle\" type=\"button\" id=\"select-favorites-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"select-favorites-label select-favorites-toggle\">\n    <div class=\"pf-c-select__toggle-wrapper\">\n      <span class=\"pf-c-select__toggle-text\">Favorites</span>\n    </div>\n    <span class=\"pf-c-select__toggle-arrow\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-select__menu\" aria-labelledby=\"select-favorites-label\">\n    <div class=\"pf-c-select__menu-search\">\n      <input class=\"pf-c-form-control pf-m-search\" type=\"search\" id=\"select-favorites-search-input\" name=\"select-favorites-search-input\" aria-label=\"Search\" />\n    </div>\n    <hr class=\"pf-c-divider\" />\n    <div class=\"pf-c-select__menu-group\">\n      <div class=\"pf-c-select__menu-group-title\" aria-hidden=\"true\">Favorites</div>\n      <ul>\n        <li class=\"pf-c-select__menu-wrapper pf-m-favorite\">\n          <button class=\"pf-c-select__menu-item pf-m-link pf-m-description\" aria-label=\"Not starred\">\n            <span class=\"pf-c-select__menu-item-main\">Item 1</span>\n            <span class=\"pf-c-select__menu-item-description\">This is a description.</span>\n          </button>\n          <button class=\"pf-c-select__menu-item pf-m-action pf-m-favorite-action\" aria-label=\"Starred\">\n            <span class=\"pf-c-select__menu-item-action-icon\">\n              <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-select__menu-wrapper pf-m-favorite\">\n          <button class=\"pf-c-select__menu-item pf-m-link\" aria-label=\"Not starred\">Item 4</button>\n          <button class=\"pf-c-select__menu-item pf-m-action pf-m-favorite-action\" aria-label=\"Starred\">\n            <span class=\"pf-c-select__menu-item-action-icon\">\n              <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n    <hr class=\"pf-c-divider\" />\n    <div class=\"pf-c-select__menu-group\">\n      <div class=\"pf-c-select__menu-group-title\" aria-hidden=\"true\">Group 1</div>\n      <ul>\n        <li class=\"pf-c-select__menu-wrapper pf-m-favorite\">\n          <button class=\"pf-c-select__menu-item pf-m-link pf-m-description\" aria-label=\"Not starred\">\n            <span class=\"pf-c-select__menu-item-main\">Item 1</span>\n            <span class=\"pf-c-select__menu-item-description\">This is a description.</span>\n          </button>\n          <button class=\"pf-c-select__menu-item pf-m-action pf-m-favorite-action\" aria-label=\"Starred\">\n            <span class=\"pf-c-select__menu-item-action-icon\">\n              <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-select__menu-wrapper\">\n          <button class=\"pf-c-select__menu-item pf-m-selected pf-m-link\" aria-selected=\"true\">Item 2\n            <span class=\"pf-c-select__menu-item-icon\">\n              <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n          <button class=\"pf-c-select__menu-item pf-m-action pf-m-favorite-action\">\n            <span class=\"pf-c-select__menu-item-action-icon\">\n              <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-select__menu-wrapper pf-m-disabled\">\n          <button class=\"pf-c-select__menu-item pf-m-link\" disabled>Item 3 (disabled)</button>\n          <button class=\"pf-c-select__menu-item pf-m-action pf-m-favorite-action\" disabled>\n            <span class=\"pf-c-select__menu-item-action-icon\">\n              <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n    <hr class=\"pf-c-divider\" />\n    <div class=\"pf-c-select__menu-group\">\n      <div class=\"pf-c-select__menu-group-title\" aria-hidden=\"true\">Group 2</div>\n      <ul>\n        <li class=\"pf-c-select__menu-wrapper pf-m-favorite\">\n          <button class=\"pf-c-select__menu-item pf-m-link\" aria-label=\"Not starred\">Item 4</button>\n          <button class=\"pf-c-select__menu-item pf-m-action pf-m-favorite-action\" aria-label=\"Starred\">\n            <span class=\"pf-c-select__menu-item-action-icon\">\n              <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </li>\n        <li class=\"pf-c-select__menu-wrapper\">\n          <button class=\"pf-c-select__menu-item pf-m-link pf-m-description\">\n            <span class=\"pf-c-select__menu-item-main\">Item 5</span>\n            <span class=\"pf-c-select__menu-item-description\">This is a description.</span>\n          </button>\n          <button class=\"pf-c-select__menu-item pf-m-action pf-m-favorite-action\">\n            <span class=\"pf-c-select__menu-item-action-icon\">\n              <i class=\"fas fa-star\" aria-hidden=\"true\"></i>\n            </span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>","title":"Favorites","lang":"html"}}>
    </Example>
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
              {`aria-label="Not starred"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-wrapper > .pf-c-select__menu-item.pf-m-action`}
            </code>
          </td>
          <td>
            {`Provides an accessible label indicating that the favorite action is not selected.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="Starred"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-wrapper.pf-m-favorite > .pf-c-select__menu-item.pf-m-action`}
            </code>
          </td>
          <td>
            {`Provides an accessible label indicating that the favorite action is selected.`}
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
              {`.pf-c-select__menu-wrapper`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Defines a menu wrapper for use with multiple actionable items in a single item row.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-favorite`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-wrapper`}
            </code>
          </td>
          <td>
            {`Modifies wrapper to indicate that the item row has been favorited.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-favorite-action`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            {`Modifies an item for favorite styles.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-link`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item.pf-m-wrapper > .pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            {`Modifies item for link styles.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-action`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-select__menu-item.pf-m-wrapper > .pf-c-select__menu-item`}
            </code>
          </td>
          <td>
            {`Modifies item to for action styles.`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are 4 variants of the select component: single select, single select with typeahead, multiple select with typeahead, and a multiple checkbox select. See the examples for more details about each variation.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The single select should be used when the user is selecting an option from a list of items. Although the presentation is similar to the basic dropdown, the underlying HTML and ARIA tag structure is specific to a select list. The selection will replace the default text in the toggle. The selection is highlighted with the list is opened. If the selection is cleared elsewhere (i.e. from the filter bar), the default text is restored.`}
    </p>
  </React.Fragment>
);
DocumentationComponentsSelectCoreDocs.Component.displayName = 'DocumentationComponentsSelectCoreDocs';
