import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/components/Toolbar/examples/./Toolbar.css'

export const DocumentationComponentsToolbarCoreDocs = {
  "slug": "/documentation/components/toolbar/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Toolbar/examples/Toolbar.md",
  "section": "components",
  "id": "Toolbar",
  "title": "Toolbar",
  "toc": [
    "Introduction",
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-toolbar"
};
DocumentationComponentsToolbarCoreDocs.liveContext = {
  
};
DocumentationComponentsToolbarCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Introduction`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Toolbar relies on groups (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-toolbar__group`}
      </code>
      {`) and items (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-toolbar__item`}
      </code>
      {`), with default spacer values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group or item. Each modifier applies a unique CSS variable, therefore, the base spacer value for all elements can be customized and item/groups spacers can be themed individually. The default spacer value for items and groups is set to `}
      <code {...{"className":"ws-code"}}>
        {`--pf-c-toolbar--spacer--base`}
      </code>
      {`, whose value is `}
      <code {...{"className":"ws-code"}}>
        {`--pf-global--spacer--md`}
      </code>
      {` or 16px.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Default spacing for items and groups:`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Class`}
          </th>
          <th>
            {`CSS Variable`}
          </th>
          <th>
            {`Computed Value`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`--pf-c-toolbar__item--spacer`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`16px`}
            </code>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`--pf-c-toolbar__group--spacer`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`16px`}
            </code>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Toolbar item types`}
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
              {`.pf-m-bulk-select`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__item`}
            </code>
          </td>
          <td>
            {`Initiates bulk select spacing. Spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-toolbar--m-bulk-select--spacer)`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-overflow-menu`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__item`}
            </code>
          </td>
          <td>
            {`Initiates overflow menu spacing. Spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-toolbar--m-overflow-menu--spacer)`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-pagination`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__item`}
            </code>
          </td>
          <td>
            {`Initiates pagination spacing and margin. Spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-toolbar--m-pagination--spacer)`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-search-filter`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__item`}
            </code>
          </td>
          <td>
            {`Initiates search filter spacing. Spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-toolbar--m-search-filter--spacer)`}
            </code>
            {`.`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Modifiers`}
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
              {`.pf-m-hidden{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar > *`}
            </code>
          </td>
          <td>
            {`Modifies toolbar element to be hidden, at optional breakpoint.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-visible{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar > *`}
            </code>
          </td>
          <td>
            {`Modifies toolbar element to be shown, at optional breakpoint.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-align-right{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar > *`}
            </code>
          </td>
          <td>
            {`Modifies toolbar element to align right, at optional breakpoint.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-align-left{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar > *`}
            </code>
          </td>
          <td>
            {`Modifies toolbar element to align left, at optional breakpoint.`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Special notes`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Several components in the following examples do not include functional and/or accessibility specifications (for example `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-select`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-options-menu`}
      </code>
      {`). Rather, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-toolbar`}
      </code>
      {` focuses on functionality and accessibility specifications that apply to it only.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Available breakpoints are: `}
        <code {...{"className":"ws-code"}}>
          {`-on-md, -on-lg, -on-xl, -on-2xl`}
        </code>
        {`.`}
      </strong>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsToolbarCoreDocs} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-simple-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__item\">Item</div>\n      <div class=\"pf-c-toolbar__item\">Item</div>\n      <div class=\"pf-c-toolbar__item\">Item</div>\n      <hr class=\"pf-c-divider pf-m-vertical\" />\n      <div class=\"pf-c-toolbar__group\">\n        <div class=\"pf-c-toolbar__item\">Item</div>\n        <div class=\"pf-c-toolbar__item\">Item</div>\n        <div class=\"pf-c-toolbar__item\">Item</div>\n      </div>\n      <hr class=\"pf-c-divider pf-m-vertical\" />\n      <div class=\"pf-c-toolbar__item\">Item</div>\n      <div class=\"pf-c-toolbar__item\">Item</div>\n      <div class=\"pf-c-toolbar__item\">Item</div>\n    </div>\n  </div>\n</div>","title":"Simple","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Item types`}
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
              {`.pf-c-toolbar__item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the toolbar component item. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the toolbar component group.`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Spacers`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In some instances, it may be necessary to adjust spacing explicitly where items are hidden/shown. For example, if a `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-toggle-group`}
      </code>
      {` is adjacent to an element being hidden/shown, the spacing may appear to be inconsistent. If possible, rely on modifier values. Available spacer modifiers are `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-spacer-{none, sm, md, lg}{-on-md, -on-lg, -on-xl}`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-space-items-{none, sm, md, lg}{-on-md, -on-lg, -on-xl}`}
      </code>
      {`. These modifiers will overwrite existing modifiers provided by `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-toolbar`}
      </code>
      {`.`}
    </p>
    <Example {...DocumentationComponentsToolbarCoreDocs} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-spacer-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__item pf-m-spacer-none\">Item</div>\n      <div class=\"pf-c-toolbar__item pf-m-spacer-sm\">Item</div>\n      <div class=\"pf-c-toolbar__item pf-m-spacer-md\">Item</div>\n      <div class=\"pf-c-toolbar__item pf-m-spacer-lg\">Item</div>\n      <hr class=\"pf-c-divider pf-m-vertical\" />\n      <div class=\"pf-c-toolbar__item pf-m-spacer-none pf-m-spacer-sm-on-md pf-m-spacer-md-on-lg pf-m-spacer-lg-on-xl\">Item</div>\n      <div class=\"pf-c-toolbar__item\">Item</div>\n    </div>\n  </div>\n</div>","title":"Adjusted spacers","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsToolbarCoreDocs} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-group-spacer-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__group pf-m-space-items-lg\">\n        <div class=\"pf-c-toolbar__item\">Item</div>\n        <div class=\"pf-c-toolbar__item\">Item</div>\n      </div>\n      <hr class=\"pf-c-divider pf-m-vertical\" />\n      <div class=\"pf-c-toolbar__group pf-m-space-items-none pf-m-space-items-sm-on-md pf-m-space-items-md-on-lg pf-m-space-items-lg-on-xl\">\n        <div class=\"pf-c-toolbar__item\">Item</div>\n        <div class=\"pf-c-toolbar__item\">Item</div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Adjusted group spacers","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Toolbar spacers`}
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
              {`.pf-m-spacer-{none, sm, md, lg}{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__item`}
            </code>
          </td>
          <td>
            {`Modifies toolbar group or item spacing.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-space-items-{none, sm, md, lg}{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
          </td>
          <td>
            {`Modifies toolbar group child spacing.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsToolbarCoreDocs} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-group-types-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__group pf-m-filter-group\">\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <span id=\"toolbar-group-types-example-select-checkbox-filter1-label\" hidden>Choose one</span>\n            <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-group-types-example-select-checkbox-filter1-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"toolbar-group-types-example-select-checkbox-filter1-label toolbar-group-types-example-select-checkbox-filter1-toggle\">\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Filter 1</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n            <ul class=\"pf-c-select__menu\" aria-labelledby=\"toolbar-group-types-example-select-checkbox-filter1-label\" hidden>\n              <li>\n                <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Running</button>\n              </li>\n              <li>\n                <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Stopped</button>\n              </li>\n              <li>\n                <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Down</button>\n              </li>\n              <li>\n                <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Degraded</button>\n              </li>\n              <li>\n                <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Needs Maintenance</button>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <span id=\"toolbar-group-types-example-select-checkbox-filter2-label\" hidden>Choose one</span>\n            <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-group-types-example-select-checkbox-filter2-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"toolbar-group-types-example-select-checkbox-filter2-label toolbar-group-types-example-select-checkbox-filter2-toggle\">\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Filter 2</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n            <ul class=\"pf-c-select__menu\" aria-labelledby=\"toolbar-group-types-example-select-checkbox-filter2-label\" hidden>\n              <li>\n                <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Running</button>\n              </li>\n              <li>\n                <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Stopped</button>\n              </li>\n              <li>\n                <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Down</button>\n              </li>\n              <li>\n                <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Degraded</button>\n              </li>\n              <li>\n                <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Needs Maintenance</button>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <span id=\"toolbar-group-types-example-select-checkbox-filter3-label\" hidden>Choose one</span>\n            <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-group-types-example-select-checkbox-filter3-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"toolbar-group-types-example-select-checkbox-filter3-label toolbar-group-types-example-select-checkbox-filter3-toggle\">\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Filter 3</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n            <ul class=\"pf-c-select__menu\" aria-labelledby=\"toolbar-group-types-example-select-checkbox-filter3-label\" hidden>\n              <li>\n                <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Running</button>\n              </li>\n              <li>\n                <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Stopped</button>\n              </li>\n              <li>\n                <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Down</button>\n              </li>\n              <li>\n                <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Degraded</button>\n              </li>\n              <li>\n                <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Needs Maintenance</button>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-icon-button-group\">\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Edit\">\n            <i class=\"fas fa-edit\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Clone\">\n            <i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sync\">\n            <i class=\"fas fa-sync\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-button-group\">\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-primary\" type=\"button\">Action</button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-tertiary\" type=\"button\">Tertiary</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Group types","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Toolbar group types`}
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
              {`.pf-m-filter-group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
          </td>
          <td>
            {`Modifies toolbar group spacing. Spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-toolbar__group--m-filter-group--spacer)`}
            </code>
            {`. Child spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-toolbar__group--m-filter-group--space-items)`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-icon-button-group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
          </td>
          <td>
            {`Modifies toolbar group spacing. Spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-toolbar__group--m-toggle-group--spacer)`}
            </code>
            {`. Child spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-toolbar__group--m-icon-button-group--space-items)`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-button-group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
          </td>
          <td>
            {`Modifies toolbar group spacing. Spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-toolbar__group--m-toggle-group--spacer)`}
            </code>
            {`. Child spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-toolbar__group--m-button-group--space-items)`}
            </code>
            {`.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsToolbarCoreDocs} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-toggle-group-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__group pf-m-toggle-group pf-m-show-on-lg\">\n        <div class=\"pf-c-toolbar__toggle\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Show filters\" aria-expanded=\"false\" aria-controls=\"toolbar-toggle-group-example-expandable-content\">\n            <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item pf-m-search-filter \">\n          <div class=\"pf-c-input-group\" aria-label=\"search filter\" role=\"group\">\n            <div class=\"pf-c-dropdown\">\n              <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"toolbar-toggle-group-example-content-button\" aria-expanded=\"false\">\n                <span class=\"pf-c-dropdown__toggle-text\">Name</span>\n                <span class=\"pf-c-dropdown__toggle-icon\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n              <div class=\"pf-c-dropdown__menu\" hidden>[Panel contents here]</div>\n            </div>\n            <input class=\"pf-c-form-control\" type=\"search\" id=\"toolbar-toggle-group-example-content-search-filter-input\" name=\"toolbar-toggle-group-example-search-filter-input\" aria-label=\"input with dropdown and button\" aria-describedby=\"toolbar-toggle-group-example-content-button\" />\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__group pf-m-filter-group\">\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <span id=\"toolbar-toggle-group-example-select-checkbox-status-label\" hidden>Choose one</span>\n              <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-toggle-group-example-select-checkbox-status-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"toolbar-toggle-group-example-select-checkbox-status-label toolbar-toggle-group-example-select-checkbox-status-toggle\">\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Status</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-toggle-group-example-select-checkbox-status-active\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-example-select-checkbox-status-active\" name=\"toolbar-toggle-group-example-select-checkbox-status-active\" />\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <div class=\"pf-c-check__description\">This is a description</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-toggle-group-example-select-checkbox-status-cancelled\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-example-select-checkbox-status-cancelled\" name=\"toolbar-toggle-group-example-select-checkbox-status-cancelled\" />\n                    <span class=\"pf-c-check__label\">Cancelled</span>\n                    <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-toggle-group-example-select-checkbox-status-paused\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-example-select-checkbox-status-paused\" name=\"toolbar-toggle-group-example-select-checkbox-status-paused\" />\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-toggle-group-example-select-checkbox-status-warning\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-example-select-checkbox-status-warning\" name=\"toolbar-toggle-group-example-select-checkbox-status-warning\" />\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-toggle-group-example-select-checkbox-status-restarted\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-example-select-checkbox-status-restarted\" name=\"toolbar-toggle-group-example-select-checkbox-status-restarted\" />\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <span id=\"toolbar-toggle-group-example-select-checkbox-risk-label\" hidden>Choose one</span>\n              <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-toggle-group-example-select-checkbox-risk-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"toolbar-toggle-group-example-select-checkbox-risk-label toolbar-toggle-group-example-select-checkbox-risk-toggle\">\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Risk</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-toggle-group-example-select-checkbox-risk-active\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-example-select-checkbox-risk-active\" name=\"toolbar-toggle-group-example-select-checkbox-risk-active\" />\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <div class=\"pf-c-check__description\">This is a description</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-toggle-group-example-select-checkbox-risk-cancelled\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-example-select-checkbox-risk-cancelled\" name=\"toolbar-toggle-group-example-select-checkbox-risk-cancelled\" />\n                    <span class=\"pf-c-check__label\">Cancelled</span>\n                    <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-toggle-group-example-select-checkbox-risk-paused\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-example-select-checkbox-risk-paused\" name=\"toolbar-toggle-group-example-select-checkbox-risk-paused\" />\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-toggle-group-example-select-checkbox-risk-warning\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-example-select-checkbox-risk-warning\" name=\"toolbar-toggle-group-example-select-checkbox-risk-warning\" />\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-toggle-group-example-select-checkbox-risk-restarted\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-example-select-checkbox-risk-restarted\" name=\"toolbar-toggle-group-example-select-checkbox-risk-restarted\" />\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-toolbar__expandable-content pf-m-hidden\" id=\"toolbar-toggle-group-example-expandable-content\" hidden></div>\n  </div>\n</div>","title":"Toggle group","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsToolbarCoreDocs} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-toggle-group-collapsed-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__group pf-m-toggle-group\">\n        <div class=\"pf-c-toolbar__toggle pf-m-expanded\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Show filters\" aria-expanded=\"true\" aria-controls=\"toolbar-toggle-group-collapsed-example-expandable-content\">\n            <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-toolbar__expandable-content pf-m-expanded\" id=\"toolbar-toggle-group-collapsed-example-expandable-content\">\n      <div class=\"pf-c-toolbar__item pf-m-search-filter \">\n        <div class=\"pf-c-input-group\" aria-label=\"search filter\" role=\"group\">\n          <div class=\"pf-c-dropdown\">\n            <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"toolbar-toggle-group-collapsed-example-expandable-content-button\" aria-expanded=\"false\">\n              <span class=\"pf-c-dropdown__toggle-text\">Name</span>\n              <span class=\"pf-c-dropdown__toggle-icon\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n            <div class=\"pf-c-dropdown__menu\" hidden>[Panel contents here]</div>\n          </div>\n          <input class=\"pf-c-form-control\" type=\"search\" id=\"toolbar-toggle-group-collapsed-example-expandable-content-search-filter-input\" name=\"toolbar-toggle-group-collapsed-example-search-filter-input\" aria-label=\"input with dropdown and button\" aria-describedby=\"toolbar-toggle-group-collapsed-example-expandable-content-button\" />\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-filter-group\">\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <span id=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-label\" hidden>Choose one</span>\n            <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-label toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-toggle\">\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Status</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n            <div class=\"pf-c-select__menu\" hidden>\n              <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-active\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-active\" name=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-active\" />\n                  <span class=\"pf-c-check__label\">Active</span>\n                  <div class=\"pf-c-check__description\">This is a description</div>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-cancelled\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-cancelled\" name=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-cancelled\" />\n                  <span class=\"pf-c-check__label\">Cancelled</span>\n                  <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-paused\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-paused\" name=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-paused\" />\n                  <span class=\"pf-c-check__label\">Paused</span>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-warning\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-warning\" name=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-warning\" />\n                  <span class=\"pf-c-check__label\">Warning</span>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted\" name=\"toolbar-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted\" />\n                  <span class=\"pf-c-check__label\">Restarted</span>\n                </label>\n              </fieldset>\n            </div>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <span id=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-label\" hidden>Choose one</span>\n            <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-label toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-toggle\">\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Risk</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n            <div class=\"pf-c-select__menu\" hidden>\n              <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-active\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-active\" name=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-active\" />\n                  <span class=\"pf-c-check__label\">Active</span>\n                  <div class=\"pf-c-check__description\">This is a description</div>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-cancelled\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-cancelled\" name=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-cancelled\" />\n                  <span class=\"pf-c-check__label\">Cancelled</span>\n                  <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused\" name=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused\" />\n                  <span class=\"pf-c-check__label\">Paused</span>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning\" name=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning\" />\n                  <span class=\"pf-c-check__label\">Warning</span>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted\" name=\"toolbar-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted\" />\n                  <span class=\"pf-c-check__label\">Restarted</span>\n                </label>\n              </fieldset>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Toggle group on mobile (filters collapsed, expandable content expanded)","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Toggle group modifier`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-toggle-group`}
      </code>
      {` controls when, and at which breakpoint, filters will be hidden/shown. By default, all filters are hidden until the specified breakpoint is reached. `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-show-on-{md, lg, xl}`}
      </code>
      {` controls when filters are shown and when the toggle button is hidden.`}
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
              {`hidden`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__item`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__toggle`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__expandable-content`}
            </code>
          </td>
          <td>
            {`Indicates that the toggle group element is hidden. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-expanded="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__toggle > .pf-c-button`}
            </code>
          </td>
          <td>
            {`Indicates that the expandable content is visible. `}
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
              {`.pf-c-toolbar__toggle > .pf-c-button`}
            </code>
          </td>
          <td>
            {`Indicates the the expandable content is hidden. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-controls="[id of expandable content]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__toggle > .pf-c-button`}
            </code>
          </td>
          <td>
            {`Identifies the expanded content controlled by the toggle button. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`id="[expandable-content_id]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__expandable-content`}
            </code>
          </td>
          <td>
            {`Provides a reference for toggle button description. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Responsive attributes`}
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
              {`aria-haspopup="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__toggle > .pf-c-button`}
            </code>
          </td>
          <td>
            {`When expandable content appears above content (mobile viewport), `}
            <code {...{"className":"ws-code"}}>
              {`aria-haspopup="true"`}
            </code>
            {` should be applied to indicate that focus should be trapped. `}
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
              {`.pf-m-show{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group.pf-m-toggle-group`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__expandable-content`}
            </code>
          </td>
          <td>
            {`Modifies toolbar element visibility at breakpoint. This selector must be applied consistently to toggle group and expandable content.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-chip-container`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__content-section`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
          </td>
          <td>
            {`Modifies the toolbar element for applied filters layout.`}
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
              {`.pf-c-toolbar__expandable-content`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__toggle`}
            </code>
          </td>
          <td>
            {`Modifies the component for the expanded state.`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Selected`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsToolbarCoreDocs} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-selected-filters-toggle-group-collapsed-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__item pf-m-bulk-select\">\n        <div class=\"pf-c-dropdown\">\n          <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n            <label class=\"pf-c-dropdown__toggle-check\" for=\"toolbar-selected-filters-toggle-group-collapsed-example-bulk-select-toggle-check\">\n              <input type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-bulk-select-toggle-check\" aria-label=\"Select all\" />\n            </label>\n            <button class=\"pf-c-dropdown__toggle-button\" type=\"button\" aria-expanded=\"false\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-bulk-select-toggle-button\" aria-label=\"Select\">\n              <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n          <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-bulk-select-toggle-button\" hidden>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select all</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select none</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-toggle-group\">\n        <div class=\"pf-c-toolbar__toggle\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Show filters\" aria-expanded=\"false\" aria-controls=\"toolbar-selected-filters-toggle-group-collapsed-example-expandable-content\">\n            <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item pf-m-search-filter \">\n          <div class=\"pf-c-input-group\" aria-label=\"search filter\" role=\"group\">\n            <div class=\"pf-c-dropdown\">\n              <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-content-button\" aria-expanded=\"false\">\n                <span class=\"pf-c-dropdown__toggle-text\">Name</span>\n                <span class=\"pf-c-dropdown__toggle-icon\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n              <div class=\"pf-c-dropdown__menu\" hidden>[Panel contents here]</div>\n            </div>\n            <input class=\"pf-c-form-control\" type=\"search\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-content-search-filter-input\" name=\"toolbar-selected-filters-toggle-group-collapsed-example-search-filter-input\" aria-label=\"input with dropdown and button\" aria-describedby=\"toolbar-selected-filters-toggle-group-collapsed-example-content-button\" />\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__group pf-m-filter-group\">\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <span id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-label\" hidden>Choose one</span>\n              <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-label toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-toggle\">\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Status</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-active\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-active\" name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-active\" />\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <div class=\"pf-c-check__description\">This is a description</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-cancelled\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-cancelled\" name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-cancelled\" />\n                    <span class=\"pf-c-check__label\">Cancelled</span>\n                    <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-paused\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-paused\" name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-paused\" />\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-warning\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-warning\" name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-warning\" />\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted\" name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-status-expanded-restarted\" />\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <span id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-label\" hidden>Choose one</span>\n              <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-label toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-toggle\">\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Risk</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-active\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-active\" name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-active\" />\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <div class=\"pf-c-check__description\">This is a description</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-cancelled\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-cancelled\" name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-cancelled\" />\n                    <span class=\"pf-c-check__label\">Cancelled</span>\n                    <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused\" name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-paused\" />\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning\" name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-warning\" />\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted\" name=\"toolbar-selected-filters-toggle-group-collapsed-example-select-checkbox-risk-expanded-restarted\" />\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-icon-button-group\">\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Edit\">\n            <i class=\"fas fa-edit\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Clone\">\n            <i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sync\">\n            <i class=\"fas fa-sync\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-overflow-menu\">\n        <div class=\"pf-c-overflow-menu\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-overflow-menu\">\n          <div class=\"pf-c-overflow-menu__control\">\n            <div class=\"pf-c-dropdown\">\n              <button class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-overflow-menu-dropdown-toggle\" aria-label=\"Overflow menu\">\n                <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n              </button>\n              <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-overflow-menu-dropdown-toggle\" hidden>\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Primary</button>\n                </li>\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Secondary</button>\n                </li>\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Tertiary</button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-toolbar__expandable-content pf-m-hidden\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-expandable-content\" hidden>\n      <div class=\"pf-c-toolbar__group pf-m-chip-container\">\n        <div class=\"pf-c-toolbar__item pf-m-chip-group \">\n          <div class=\"pf-c-chip-group pf-m-category\">\n            <span class=\"pf-c-chip-group__label\" aria-hidden=\"true\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-status-chip-group-label\">Status</span>\n            <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-status-chip-group-label\">\n              <li class=\"pf-c-chip-group__list-item\">\n                <div class=\"pf-c-chip\">\n                  <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-one\">Chip one</span>\n                  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-one toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-one\" aria-label=\"Remove\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-one\">\n                    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </li>\n              <li class=\"pf-c-chip-group__list-item\">\n                <div class=\"pf-c-chip\">\n                  <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-two\">Chip two</span>\n                  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-two toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-two\" aria-label=\"Remove\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-two\">\n                    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </li>\n              <li class=\"pf-c-chip-group__list-item\">\n                <div class=\"pf-c-chip\">\n                  <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-three\">Chip three</span>\n                  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-three toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statuschip-three\" aria-label=\"Remove\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-statusremove-chip-three\">\n                    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__item pf-m-chip-group \">\n          <div class=\"pf-c-chip-group pf-m-category\">\n            <span class=\"pf-c-chip-group__label\" aria-hidden=\"true\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-risk-chip-group-label\">Risk</span>\n            <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-risk-chip-group-label\">\n              <li class=\"pf-c-chip-group__list-item\">\n                <div class=\"pf-c-chip\">\n                  <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-one\">Chip one</span>\n                  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-one toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-one\" aria-label=\"Remove\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-one\">\n                    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </li>\n              <li class=\"pf-c-chip-group__list-item\">\n                <div class=\"pf-c-chip\">\n                  <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-two\">Chip two</span>\n                  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-two toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-two\" aria-label=\"Remove\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-two\">\n                    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </li>\n              <li class=\"pf-c-chip-group__list-item\">\n                <div class=\"pf-c-chip\">\n                  <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-three\">Chip three</span>\n                  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-three toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskchip-three\" aria-label=\"Remove\" id=\"toolbar-selected-filters-toggle-group-collapsed-example-chip-group-riskremove-chip-three\">\n                    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                  </button>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__item\">6 filters applied</div>\n    <div class=\"pf-c-toolbar__item\">\n      <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Clear all filters</button>\n    </div>\n  </div>\n</div>","title":"Selected filters on mobile (filters collapsed, selected filters summary visible)","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsToolbarCoreDocs} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-selected-filters-toggle-group-expanded-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__item pf-m-bulk-select\">\n        <div class=\"pf-c-dropdown\">\n          <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n            <label class=\"pf-c-dropdown__toggle-check\" for=\"toolbar-selected-filters-toggle-group-expanded-example-bulk-select-toggle-check\">\n              <input type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-expanded-example-bulk-select-toggle-check\" aria-label=\"Select all\" />\n            </label>\n            <button class=\"pf-c-dropdown__toggle-button\" type=\"button\" aria-expanded=\"false\" id=\"toolbar-selected-filters-toggle-group-expanded-example-bulk-select-toggle-button\" aria-label=\"Select\">\n              <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n          <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-bulk-select-toggle-button\" hidden>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select all</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select none</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-toggle-group\">\n        <div class=\"pf-c-toolbar__toggle pf-m-expanded\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Show filters\" aria-expanded=\"true\" aria-controls=\"toolbar-selected-filters-toggle-group-expanded-example-expandable-content\">\n            <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-icon-button-group\">\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Edit\">\n            <i class=\"fas fa-edit\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Clone\">\n            <i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sync\">\n            <i class=\"fas fa-sync\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-overflow-menu\">\n        <div class=\"pf-c-overflow-menu\" id=\"toolbar-selected-filters-toggle-group-expanded-example-overflow-menu\">\n          <div class=\"pf-c-overflow-menu__control\">\n            <div class=\"pf-c-dropdown\">\n              <button class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"toolbar-selected-filters-toggle-group-expanded-example-overflow-menu-dropdown-toggle\" aria-label=\"Overflow menu\">\n                <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n              </button>\n              <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-overflow-menu-dropdown-toggle\" hidden>\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Primary</button>\n                </li>\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Secondary</button>\n                </li>\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Tertiary</button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-toolbar__expandable-content pf-m-expanded\" id=\"toolbar-selected-filters-toggle-group-expanded-example-expandable-content\">\n      <div class=\"pf-c-toolbar__item pf-m-search-filter \">\n        <div class=\"pf-c-input-group\" aria-label=\"search filter\" role=\"group\">\n          <div class=\"pf-c-dropdown\">\n            <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"toolbar-selected-filters-toggle-group-expanded-example-expanded-content-button\" aria-expanded=\"false\">\n              <span class=\"pf-c-dropdown__toggle-text\">Name</span>\n              <span class=\"pf-c-dropdown__toggle-icon\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n            <div class=\"pf-c-dropdown__menu\" hidden>[Panel contents here]</div>\n          </div>\n          <input class=\"pf-c-form-control\" type=\"search\" id=\"toolbar-selected-filters-toggle-group-expanded-example-expanded-content-search-filter-input\" name=\"toolbar-selected-filters-toggle-group-expanded-example-search-filter-input\" aria-label=\"input with dropdown and button\" aria-describedby=\"toolbar-selected-filters-toggle-group-expanded-example-expanded-content-button\" />\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-filter-group\">\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <span id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-label\" hidden>Choose one</span>\n            <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-label toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-toggle\">\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Status</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n            <div class=\"pf-c-select__menu\" hidden>\n              <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-active\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-active\" name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-active\" />\n                  <span class=\"pf-c-check__label\">Active</span>\n                  <div class=\"pf-c-check__description\">This is a description</div>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-cancelled\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-cancelled\" name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-cancelled\" />\n                  <span class=\"pf-c-check__label\">Cancelled</span>\n                  <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-paused\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-paused\" name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-paused\" />\n                  <span class=\"pf-c-check__label\">Paused</span>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-warning\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-warning\" name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-warning\" />\n                  <span class=\"pf-c-check__label\">Warning</span>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-restarted\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-restarted\" name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-status-expanded-restarted\" />\n                  <span class=\"pf-c-check__label\">Restarted</span>\n                </label>\n              </fieldset>\n            </div>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <span id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-label\" hidden>Choose one</span>\n            <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-label toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-toggle\">\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Risk</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n            <div class=\"pf-c-select__menu\" hidden>\n              <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-active\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-active\" name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-active\" />\n                  <span class=\"pf-c-check__label\">Active</span>\n                  <div class=\"pf-c-check__description\">This is a description</div>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-cancelled\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-cancelled\" name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-cancelled\" />\n                  <span class=\"pf-c-check__label\">Cancelled</span>\n                  <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-paused\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-paused\" name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-paused\" />\n                  <span class=\"pf-c-check__label\">Paused</span>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-warning\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-warning\" name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-warning\" />\n                  <span class=\"pf-c-check__label\">Warning</span>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-restarted\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-restarted\" name=\"toolbar-selected-filters-toggle-group-expanded-example-select-checkbox-risk-expanded-restarted\" />\n                  <span class=\"pf-c-check__label\">Restarted</span>\n                </label>\n              </fieldset>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-chip-container\">\n        <div class=\"pf-c-toolbar__group\">\n          <div class=\"pf-c-toolbar__item pf-m-chip-group \">\n            <div class=\"pf-c-chip-group pf-m-category\">\n              <span class=\"pf-c-chip-group__label\" aria-hidden=\"true\" id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-status-chip-group-label\">Status</span>\n              <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-status-chip-group-label\">\n                <li class=\"pf-c-chip-group__list-item\">\n                  <div class=\"pf-c-chip\">\n                    <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-one\">Chip one</span>\n                    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-one toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-one\" aria-label=\"Remove\" id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-one\">\n                      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                    </button>\n                  </div>\n                </li>\n                <li class=\"pf-c-chip-group__list-item\">\n                  <div class=\"pf-c-chip\">\n                    <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-two\">Chip two</span>\n                    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-two toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-two\" aria-label=\"Remove\" id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-two\">\n                      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                    </button>\n                  </div>\n                </li>\n                <li class=\"pf-c-chip-group__list-item\">\n                  <div class=\"pf-c-chip\">\n                    <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-three\">Chip three</span>\n                    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-three toolbar-selected-filters-toggle-group-expanded-example-chip-group-statuschip-three\" aria-label=\"Remove\" id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-statusremove-chip-three\">\n                      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                    </button>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"pf-c-toolbar__item pf-m-chip-group \">\n            <div class=\"pf-c-chip-group pf-m-category\">\n              <span class=\"pf-c-chip-group__label\" aria-hidden=\"true\" id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-risk-chip-group-label\">Risk</span>\n              <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-risk-chip-group-label\">\n                <li class=\"pf-c-chip-group__list-item\">\n                  <div class=\"pf-c-chip\">\n                    <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-one\">Chip one</span>\n                    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-one toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-one\" aria-label=\"Remove\" id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-one\">\n                      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                    </button>\n                  </div>\n                </li>\n                <li class=\"pf-c-chip-group__list-item\">\n                  <div class=\"pf-c-chip\">\n                    <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-two\">Chip two</span>\n                    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-two toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-two\" aria-label=\"Remove\" id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-two\">\n                      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                    </button>\n                  </div>\n                </li>\n                <li class=\"pf-c-chip-group__list-item\">\n                  <div class=\"pf-c-chip\">\n                    <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-three\">Chip three</span>\n                    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-three toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskchip-three\" aria-label=\"Remove\" id=\"toolbar-selected-filters-toggle-group-expanded-example-chip-group-riskremove-chip-three\">\n                      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                    </button>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Clear all filters</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Selected filters on mobile (filters collapsed, expandable content expanded)","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsToolbarCoreDocs} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-selected-filters-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__item pf-m-bulk-select\">\n        <div class=\"pf-c-dropdown\">\n          <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n            <label class=\"pf-c-dropdown__toggle-check\" for=\"toolbar-selected-filters-example-bulk-select-toggle-check\">\n              <input type=\"checkbox\" id=\"toolbar-selected-filters-example-bulk-select-toggle-check\" aria-label=\"Select all\" />\n            </label>\n            <button class=\"pf-c-dropdown__toggle-button\" type=\"button\" aria-expanded=\"false\" id=\"toolbar-selected-filters-example-bulk-select-toggle-button\" aria-label=\"Select\">\n              <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n          <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"toolbar-selected-filters-example-bulk-select-toggle-button\" hidden>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select all</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select none</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-toggle-group pf-m-show\">\n        <div class=\"pf-c-toolbar__toggle\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Show filters\" aria-expanded=\"false\" aria-controls=\"toolbar-selected-filters-example-expandable-content\">\n            <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__group pf-m-filter-group\">\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <span id=\"toolbar-selected-filters-example-select-checkbox-status-label\" hidden>Choose one</span>\n              <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-selected-filters-example-select-checkbox-status-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"toolbar-selected-filters-example-select-checkbox-status-label toolbar-selected-filters-example-select-checkbox-status-toggle\">\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Status</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-selected-filters-example-select-checkbox-status-active\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-example-select-checkbox-status-active\" name=\"toolbar-selected-filters-example-select-checkbox-status-active\" />\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <div class=\"pf-c-check__description\">This is a description</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-selected-filters-example-select-checkbox-status-cancelled\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-example-select-checkbox-status-cancelled\" name=\"toolbar-selected-filters-example-select-checkbox-status-cancelled\" />\n                    <span class=\"pf-c-check__label\">Cancelled</span>\n                    <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-example-select-checkbox-status-paused\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-example-select-checkbox-status-paused\" name=\"toolbar-selected-filters-example-select-checkbox-status-paused\" />\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-example-select-checkbox-status-warning\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-example-select-checkbox-status-warning\" name=\"toolbar-selected-filters-example-select-checkbox-status-warning\" />\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-example-select-checkbox-status-restarted\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-example-select-checkbox-status-restarted\" name=\"toolbar-selected-filters-example-select-checkbox-status-restarted\" />\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <span id=\"toolbar-selected-filters-example-select-checkbox-risk-label\" hidden>Choose one</span>\n              <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-selected-filters-example-select-checkbox-risk-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"toolbar-selected-filters-example-select-checkbox-risk-label toolbar-selected-filters-example-select-checkbox-risk-toggle\">\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Risk</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-selected-filters-example-select-checkbox-risk-active\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-example-select-checkbox-risk-active\" name=\"toolbar-selected-filters-example-select-checkbox-risk-active\" />\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <div class=\"pf-c-check__description\">This is a description</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-selected-filters-example-select-checkbox-risk-cancelled\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-example-select-checkbox-risk-cancelled\" name=\"toolbar-selected-filters-example-select-checkbox-risk-cancelled\" />\n                    <span class=\"pf-c-check__label\">Cancelled</span>\n                    <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-example-select-checkbox-risk-paused\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-example-select-checkbox-risk-paused\" name=\"toolbar-selected-filters-example-select-checkbox-risk-paused\" />\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-example-select-checkbox-risk-warning\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-example-select-checkbox-risk-warning\" name=\"toolbar-selected-filters-example-select-checkbox-risk-warning\" />\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-selected-filters-example-select-checkbox-risk-restarted\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-selected-filters-example-select-checkbox-risk-restarted\" name=\"toolbar-selected-filters-example-select-checkbox-risk-restarted\" />\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-icon-button-group\">\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Edit\">\n            <i class=\"fas fa-edit\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Clone\">\n            <i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sync\">\n            <i class=\"fas fa-sync\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-overflow-menu\">\n        <div class=\"pf-c-overflow-menu\" id=\"toolbar-selected-filters-example-overflow-menu\">\n          <div class=\"pf-c-overflow-menu__content\">\n            <div class=\"pf-c-overflow-menu__group pf-m-button-group\">\n              <div class=\"pf-c-overflow-menu__item\">\n                <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n              </div>\n              <div class=\"pf-c-overflow-menu__item\">\n                <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"pf-c-overflow-menu__control\">\n            <div class=\"pf-c-dropdown\">\n              <button class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"toolbar-selected-filters-example-overflow-menu-dropdown-toggle\" aria-label=\"Overflow menu\">\n                <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n              </button>\n              <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"toolbar-selected-filters-example-overflow-menu-dropdown-toggle\" hidden>\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Tertiary</button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-toolbar__content pf-m-chip-container\">\n    <div class=\"pf-c-toolbar__group\">\n      <div class=\"pf-c-toolbar__item pf-m-chip-group \">\n        <div class=\"pf-c-chip-group pf-m-category\">\n          <span class=\"pf-c-chip-group__label\" aria-hidden=\"true\" id=\"toolbar-selected-filters-example-chip-group-status-chip-group-label\">Status</span>\n          <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-labelledby=\"toolbar-selected-filters-example-chip-group-status-chip-group-label\">\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-example-chip-group-statuschip-one\">Chip one</span>\n                <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-example-chip-group-statusremove-chip-one toolbar-selected-filters-example-chip-group-statuschip-one\" aria-label=\"Remove\" id=\"toolbar-selected-filters-example-chip-group-statusremove-chip-one\">\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-example-chip-group-statuschip-two\">Chip two</span>\n                <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-example-chip-group-statusremove-chip-two toolbar-selected-filters-example-chip-group-statuschip-two\" aria-label=\"Remove\" id=\"toolbar-selected-filters-example-chip-group-statusremove-chip-two\">\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-example-chip-group-statuschip-three\">Chip three</span>\n                <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-example-chip-group-statusremove-chip-three toolbar-selected-filters-example-chip-group-statuschip-three\" aria-label=\"Remove\" id=\"toolbar-selected-filters-example-chip-group-statusremove-chip-three\">\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-chip-group \">\n        <div class=\"pf-c-chip-group pf-m-category\">\n          <span class=\"pf-c-chip-group__label\" aria-hidden=\"true\" id=\"toolbar-selected-filters-example-chip-group-risk-chip-group-label\">Risk</span>\n          <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-labelledby=\"toolbar-selected-filters-example-chip-group-risk-chip-group-label\">\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-example-chip-group-riskchip-one\">Chip one</span>\n                <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-example-chip-group-riskremove-chip-one toolbar-selected-filters-example-chip-group-riskchip-one\" aria-label=\"Remove\" id=\"toolbar-selected-filters-example-chip-group-riskremove-chip-one\">\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-example-chip-group-riskchip-two\">Chip two</span>\n                <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-example-chip-group-riskremove-chip-two toolbar-selected-filters-example-chip-group-riskchip-two\" aria-label=\"Remove\" id=\"toolbar-selected-filters-example-chip-group-riskremove-chip-two\">\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n            <li class=\"pf-c-chip-group__list-item\">\n              <div class=\"pf-c-chip\">\n                <span class=\"pf-c-chip__text\" id=\"toolbar-selected-filters-example-chip-group-riskchip-three\">Chip three</span>\n                <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"toolbar-selected-filters-example-chip-group-riskremove-chip-three toolbar-selected-filters-example-chip-group-riskchip-three\" aria-label=\"Remove\" id=\"toolbar-selected-filters-example-chip-group-riskremove-chip-three\">\n                  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n                </button>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-toolbar__item\">\n      <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Clear all filters</button>\n    </div>\n  </div>\n</div>","title":"Selected filters on desktop (not responsive)","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Stacked`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsToolbarCoreDocs} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-stacked-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__group pf-m-toggle-group pf-m-show-on-2xl\">\n        <div class=\"pf-c-toolbar__toggle\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Show filters\" aria-expanded=\"false\" aria-controls=\"toolbar-stacked-example-expandable-content\">\n            <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__group\">\n          <div class=\"pf-c-toolbar__item pf-m-label\" id=\"-select-checkbox-resource-label\" aria-hidden=\"true\">Resource</div>\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <button class=\"pf-c-select__toggle\" type=\"button\" id=\"-select-checkbox-resource-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"-select-checkbox-resource-label -select-checkbox-resource-toggle\">\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Pod</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"-select-checkbox-resource-active\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"-select-checkbox-resource-active\" name=\"-select-checkbox-resource-active\" />\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <div class=\"pf-c-check__description\">This is a description</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"-select-checkbox-resource-cancelled\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"-select-checkbox-resource-cancelled\" name=\"-select-checkbox-resource-cancelled\" />\n                    <span class=\"pf-c-check__label\">Cancelled</span>\n                    <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"-select-checkbox-resource-paused\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"-select-checkbox-resource-paused\" name=\"-select-checkbox-resource-paused\" />\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"-select-checkbox-resource-warning\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"-select-checkbox-resource-warning\" name=\"-select-checkbox-resource-warning\" />\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"-select-checkbox-resource-restarted\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"-select-checkbox-resource-restarted\" name=\"-select-checkbox-resource-restarted\" />\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__group\">\n          <div class=\"pf-c-toolbar__item pf-m-label\" id=\"-select-checkbox-status-label\" aria-hidden=\"true\">Status</div>\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <button class=\"pf-c-select__toggle\" type=\"button\" id=\"-select-checkbox-status-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"-select-checkbox-status-label -select-checkbox-status-toggle\">\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Running</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"-select-checkbox-status-active\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"-select-checkbox-status-active\" name=\"-select-checkbox-status-active\" />\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <div class=\"pf-c-check__description\">This is a description</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"-select-checkbox-status-cancelled\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"-select-checkbox-status-cancelled\" name=\"-select-checkbox-status-cancelled\" />\n                    <span class=\"pf-c-check__label\">Cancelled</span>\n                    <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"-select-checkbox-status-paused\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"-select-checkbox-status-paused\" name=\"-select-checkbox-status-paused\" />\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"-select-checkbox-status-warning\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"-select-checkbox-status-warning\" name=\"-select-checkbox-status-warning\" />\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"-select-checkbox-status-restarted\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"-select-checkbox-status-restarted\" name=\"-select-checkbox-status-restarted\" />\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__group\">\n          <div class=\"pf-c-toolbar__item pf-m-label\" id=\"-select-checkbox-type-label\" aria-hidden=\"true\">Type</div>\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select\">\n              <button class=\"pf-c-select__toggle\" type=\"button\" id=\"-select-checkbox-type-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"-select-checkbox-type-label -select-checkbox-type-toggle\">\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Any</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n              <div class=\"pf-c-select__menu\" hidden>\n                <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"-select-checkbox-type-active\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"-select-checkbox-type-active\" name=\"-select-checkbox-type-active\" />\n                    <span class=\"pf-c-check__label\">Active</span>\n                    <div class=\"pf-c-check__description\">This is a description</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"-select-checkbox-type-cancelled\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"-select-checkbox-type-cancelled\" name=\"-select-checkbox-type-cancelled\" />\n                    <span class=\"pf-c-check__label\">Cancelled</span>\n                    <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"-select-checkbox-type-paused\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"-select-checkbox-type-paused\" name=\"-select-checkbox-type-paused\" />\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"-select-checkbox-type-warning\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"-select-checkbox-type-warning\" name=\"-select-checkbox-type-warning\" />\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"-select-checkbox-type-restarted\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"-select-checkbox-type-restarted\" name=\"-select-checkbox-type-restarted\" />\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-icon-button-group\">\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Edit\">\n            <i class=\"fas fa-edit\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Clone\">\n            <i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sync\">\n            <i class=\"fas fa-sync\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-overflow-menu\">\n        <div class=\"pf-c-overflow-menu\" id=\"toolbar-stacked-example-overflow-menu\">\n          <div class=\"pf-c-overflow-menu__content\">\n            <div class=\"pf-c-overflow-menu__group pf-m-button-group\">\n              <div class=\"pf-c-overflow-menu__item\">\n                <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n              </div>\n              <div class=\"pf-c-overflow-menu__item\">\n                <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"pf-c-overflow-menu__control\">\n            <div class=\"pf-c-dropdown\">\n              <button class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"toolbar-stacked-example-overflow-menu-dropdown-toggle\" aria-label=\"Overflow menu\">\n                <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n              </button>\n              <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"toolbar-stacked-example-overflow-menu-dropdown-toggle\" hidden>\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Tertiary</button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-toolbar__expandable-content pf-m-hidden\" id=\"toolbar-stacked-example-expandable-content\" hidden></div>\n  </div>\n  <hr class=\"pf-c-divider\" />\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__item pf-m-bulk-select\">\n        <div class=\"pf-c-dropdown\">\n          <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n            <label class=\"pf-c-dropdown__toggle-check\" for=\"toolbar-stacked-example-bulk-select-toggle-check\">\n              <input type=\"checkbox\" id=\"toolbar-stacked-example-bulk-select-toggle-check\" aria-label=\"Select all\" />\n            </label>\n            <button class=\"pf-c-dropdown__toggle-button\" type=\"button\" aria-expanded=\"false\" id=\"toolbar-stacked-example-bulk-select-toggle-button\" aria-label=\"Select\">\n              <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n          <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"toolbar-stacked-example-bulk-select-toggle-button\" hidden>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select all</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select none</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-pagination \">\n        <div class=\"pf-c-pagination\" aria-label=\"Element pagination\">\n          <div class=\"pf-c-pagination__total-items\">37 items</div>\n          <div class=\"pf-c-options-menu\">\n            <div class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\">\n              <span class=\"pf-c-options-menu__toggle-text\">\n                <b>1 - 10</b>&nbsp;of&nbsp;\n                <b>37</b>\n              </span>\n              <button class=\"pf-c-options-menu__toggle-button\" id=\"toolbar-stacked-example-pagination-options-menu-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"false\" aria-label=\"Items per page\">\n                <span class=\"pf-c-options-menu__toggle-button-icon\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n            </div>\n            <ul class=\"pf-c-options-menu__menu\" aria-labelledby=\"toolbar-stacked-example-pagination-options-menu-toggle\" hidden>\n              <li>\n                <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n              </li>\n              <li>\n                <button class=\"pf-c-options-menu__menu-item\" type=\"button\">10 per page\n                  <div class=\"pf-c-options-menu__menu-item-icon\">\n                    <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n                  </div>\n                </button>\n              </li>\n              <li>\n                <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n              </li>\n            </ul>\n          </div>\n          <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n            <button class=\"pf-c-button pf-m-plain pf-m-disabled\" type=\"button\" aria-label=\"Go to first page\" aria-disabled=\"true\">\n              <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n            </button>\n            <button class=\"pf-c-button pf-m-plain pf-m-disabled\" type=\"button\" aria-label=\"Go to previous page\" aria-disabled=\"true\">\n              <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n            </button>\n            <div class=\"pf-c-pagination__nav-page-select\" aria-label=\"Current page 1 of 4\">\n              <input class=\"pf-c-form-control\" aria-label=\"Current page\" type=\"number\" min=\"1\" max=\"4\" value=\"1\" />\n              <span aria-hidden=\"true\">of 4</span>\n            </div>\n            <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Go to next page\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </button>\n            <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Go to last page\">\n              <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n            </button>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Stacked on desktop","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsToolbarCoreDocs} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-stacked-collapsed-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__group pf-m-toggle-group\">\n        <div class=\"pf-c-toolbar__toggle pf-m-expanded\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Show filters\" aria-expanded=\"true\" aria-controls=\"toolbar-stacked-collapsed-example-expandable-content\">\n            <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-icon-button-group\">\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Edit\">\n            <i class=\"fas fa-edit\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Clone\">\n            <i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sync\">\n            <i class=\"fas fa-sync\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-overflow-menu\">\n        <div class=\"pf-c-overflow-menu\" id=\"toolbar-stacked-collapsed-example-overflow-menu\">\n          <div class=\"pf-c-overflow-menu__control\">\n            <div class=\"pf-c-dropdown\">\n              <button class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"toolbar-stacked-collapsed-example-overflow-menu-dropdown-toggle\" aria-label=\"Overflow menu\">\n                <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n              </button>\n              <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"toolbar-stacked-collapsed-example-overflow-menu-dropdown-toggle\" hidden>\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Primary</button>\n                </li>\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Secondary</button>\n                </li>\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Tertiary</button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-toolbar__expandable-content pf-m-expanded\" id=\"toolbar-stacked-collapsed-example-expandable-content\">\n      <div class=\"pf-c-toolbar__group\">\n        <div class=\"pf-c-toolbar__item pf-m-label\" id=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-label\">Resource</div>\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-label toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-toggle\">\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Pod</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n            <div class=\"pf-c-select__menu\" hidden>\n              <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-active\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-active\" name=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-active\" />\n                  <span class=\"pf-c-check__label\">Active</span>\n                  <div class=\"pf-c-check__description\">This is a description</div>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-cancelled\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-cancelled\" name=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-cancelled\" />\n                  <span class=\"pf-c-check__label\">Cancelled</span>\n                  <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-paused\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-paused\" name=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-paused\" />\n                  <span class=\"pf-c-check__label\">Paused</span>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-warning\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-warning\" name=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-warning\" />\n                  <span class=\"pf-c-check__label\">Warning</span>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-restarted\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-restarted\" name=\"toolbar-stacked-collapsed-example-select-checkbox-resource-expanded-restarted\" />\n                  <span class=\"pf-c-check__label\">Restarted</span>\n                </label>\n              </fieldset>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group\">\n        <div class=\"pf-c-toolbar__item pf-m-label\" id=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-label\">Status</div>\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-label toolbar-stacked-collapsed-example-select-checkbox-status-expanded-toggle\">\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Running</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n            <div class=\"pf-c-select__menu\" hidden>\n              <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-active\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-active\" name=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-active\" />\n                  <span class=\"pf-c-check__label\">Active</span>\n                  <div class=\"pf-c-check__description\">This is a description</div>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-cancelled\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-cancelled\" name=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-cancelled\" />\n                  <span class=\"pf-c-check__label\">Cancelled</span>\n                  <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-paused\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-paused\" name=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-paused\" />\n                  <span class=\"pf-c-check__label\">Paused</span>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-warning\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-warning\" name=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-warning\" />\n                  <span class=\"pf-c-check__label\">Warning</span>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-restarted\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-restarted\" name=\"toolbar-stacked-collapsed-example-select-checkbox-status-expanded-restarted\" />\n                  <span class=\"pf-c-check__label\">Restarted</span>\n                </label>\n              </fieldset>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group\">\n        <div class=\"pf-c-toolbar__item pf-m-label\" id=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-label\">Type</div>\n        <div class=\"pf-c-toolbar__item\">\n          <div class=\"pf-c-select\">\n            <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-label toolbar-stacked-collapsed-example-select-checkbox-type-expanded-toggle\">\n              <div class=\"pf-c-select__toggle-wrapper\">\n                <span class=\"pf-c-select__toggle-text\">Any</span>\n              </div>\n              <span class=\"pf-c-select__toggle-arrow\">\n                <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n              </span>\n            </button>\n            <div class=\"pf-c-select__menu\" hidden>\n              <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-active\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-active\" name=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-active\" />\n                  <span class=\"pf-c-check__label\">Active</span>\n                  <div class=\"pf-c-check__description\">This is a description</div>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item pf-m-description\" for=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-cancelled\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-cancelled\" name=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-cancelled\" />\n                  <span class=\"pf-c-check__label\">Cancelled</span>\n                  <div class=\"pf-c-check__description\">This is a really long description that describes the menu item. This is a really long description that describes the menu item.</div>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-paused\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-paused\" name=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-paused\" />\n                  <span class=\"pf-c-check__label\">Paused</span>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-warning\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-warning\" name=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-warning\" />\n                  <span class=\"pf-c-check__label\">Warning</span>\n                </label>\n                <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-restarted\">\n                  <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-restarted\" name=\"toolbar-stacked-collapsed-example-select-checkbox-type-expanded-restarted\" />\n                  <span class=\"pf-c-check__label\">Restarted</span>\n                </label>\n              </fieldset>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr class=\"pf-c-divider\" />\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__item pf-m-bulk-select\">\n        <div class=\"pf-c-dropdown\">\n          <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n            <label class=\"pf-c-dropdown__toggle-check\" for=\"toolbar-stacked-collapsed-example-bulk-select-toggle-check\">\n              <input type=\"checkbox\" id=\"toolbar-stacked-collapsed-example-bulk-select-toggle-check\" aria-label=\"Select all\" />\n            </label>\n            <button class=\"pf-c-dropdown__toggle-button\" type=\"button\" aria-expanded=\"false\" id=\"toolbar-stacked-collapsed-example-bulk-select-toggle-button\" aria-label=\"Select\">\n              <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n          <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"toolbar-stacked-collapsed-example-bulk-select-toggle-button\" hidden>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select all</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select none</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-pagination \">\n        <div class=\"pf-c-pagination\" aria-label=\"Element pagination\">\n          <div class=\"pf-c-pagination__total-items\">37 items</div>\n          <div class=\"pf-c-options-menu\">\n            <div class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\">\n              <span class=\"pf-c-options-menu__toggle-text\">\n                <b>1 - 10</b>&nbsp;of&nbsp;\n                <b>37</b>\n              </span>\n              <button class=\"pf-c-options-menu__toggle-button\" id=\"toolbar-stacked-collapsed-example-pagination-options-menu-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"false\" aria-label=\"Items per page\">\n                <span class=\"pf-c-options-menu__toggle-button-icon\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n            </div>\n            <ul class=\"pf-c-options-menu__menu\" aria-labelledby=\"toolbar-stacked-collapsed-example-pagination-options-menu-toggle\" hidden>\n              <li>\n                <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n              </li>\n              <li>\n                <button class=\"pf-c-options-menu__menu-item\" type=\"button\">10 per page\n                  <div class=\"pf-c-options-menu__menu-item-icon\">\n                    <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n                  </div>\n                </button>\n              </li>\n              <li>\n                <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n              </li>\n            </ul>\n          </div>\n          <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n            <button class=\"pf-c-button pf-m-plain pf-m-disabled\" type=\"button\" aria-label=\"Go to first page\" aria-disabled=\"true\">\n              <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n            </button>\n            <button class=\"pf-c-button pf-m-plain pf-m-disabled\" type=\"button\" aria-label=\"Go to previous page\" aria-disabled=\"true\">\n              <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n            </button>\n            <div class=\"pf-c-pagination__nav-page-select\" aria-label=\"Current page 1 of 4\">\n              <input class=\"pf-c-form-control\" aria-label=\"Current page\" type=\"number\" min=\"1\" max=\"4\" value=\"1\" />\n              <span aria-hidden=\"true\">of 4</span>\n            </div>\n            <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Go to next page\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </button>\n            <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Go to last page\">\n              <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n            </button>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Stacked on mobile (filters collapsed, expandable content expanded)","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Expanded elements`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsToolbarCoreDocs} {...{"code":"<div class=\"pf-c-toolbar\" id=\"toolbar-expanded-elements-example\">\n  <div class=\"pf-c-toolbar__content\">\n    <div class=\"pf-c-toolbar__content-section\">\n      <div class=\"pf-c-toolbar__item pf-m-bulk-select\">\n        <div class=\"pf-c-dropdown pf-m-expanded\">\n          <div class=\"pf-c-dropdown__toggle pf-m-split-button\">\n            <label class=\"pf-c-dropdown__toggle-check\" for=\"toolbar-expanded-elements-example-dropdown-toggle-check\">\n              <input type=\"checkbox\" id=\"toolbar-expanded-elements-example-dropdown-toggle-check\" aria-label=\"Select all\" />\n            </label>\n            <button class=\"pf-c-dropdown__toggle-button\" type=\"button\" aria-expanded=\"true\" id=\"toolbar-expanded-elements-example-dropdown-toggle-button\" aria-label=\"Select\">\n              <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n          <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"toolbar-expanded-elements-example-dropdown-toggle-button\">\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select all</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Select none</button>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Other action</button>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-toggle-group pf-m-show-on-xl\">\n        <div class=\"pf-c-toolbar__toggle\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Show filters\" aria-expanded=\"false\" aria-controls=\"toolbar-expanded-elements-example-expandable-content\">\n            <i class=\"fas fa-filter\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item pf-m-search-filter \">\n          <div class=\"pf-c-input-group\" aria-label=\"search filter\" role=\"group\">\n            <div class=\"pf-c-dropdown\">\n              <button class=\"pf-c-dropdown__toggle\" type=\"button\" id=\"toolbar-expanded-elements-example-content-button\" aria-expanded=\"false\">\n                <span class=\"pf-c-dropdown__toggle-text\">Name</span>\n                <span class=\"pf-c-dropdown__toggle-icon\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n              <div class=\"pf-c-dropdown__menu\" hidden>[Panel contents here]</div>\n            </div>\n            <input class=\"pf-c-form-control\" type=\"search\" id=\"toolbar-expanded-elements-example-content-search-filter-input\" name=\"toolbar-expanded-elements-example-search-filter-input\" aria-label=\"input with dropdown and button\" aria-describedby=\"toolbar-expanded-elements-example-content-button\" />\n          </div>\n        </div>\n        <div class=\"pf-c-toolbar__group pf-m-filter-group\">\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select pf-m-expanded\">\n              <span id=\"toolbar-expanded-elements-example-select-checkbox-status-label\" hidden>Choose one</span>\n              <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-expanded-elements-example-select-checkbox-status-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"toolbar-expanded-elements-example-select-checkbox-status-label toolbar-expanded-elements-example-select-checkbox-status-toggle\">\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Status</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n              <div class=\"pf-c-select__menu\">\n                <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-expanded-elements-example-select-checkbox-status-active\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-expanded-elements-example-select-checkbox-status-active\" name=\"toolbar-expanded-elements-example-select-checkbox-status-active\" />\n                    <span class=\"pf-c-check__label\">Active</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-expanded-elements-example-select-checkbox-status-cancelled\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-expanded-elements-example-select-checkbox-status-cancelled\" name=\"toolbar-expanded-elements-example-select-checkbox-status-cancelled\" checked />\n                    <span class=\"pf-c-check__label\">Cancelled</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-expanded-elements-example-select-checkbox-status-paused\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-expanded-elements-example-select-checkbox-status-paused\" name=\"toolbar-expanded-elements-example-select-checkbox-status-paused\" checked />\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-expanded-elements-example-select-checkbox-status-warning\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-expanded-elements-example-select-checkbox-status-warning\" name=\"toolbar-expanded-elements-example-select-checkbox-status-warning\" />\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-expanded-elements-example-select-checkbox-status-restarted\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-expanded-elements-example-select-checkbox-status-restarted\" name=\"toolbar-expanded-elements-example-select-checkbox-status-restarted\" checked />\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n          <div class=\"pf-c-toolbar__item\">\n            <div class=\"pf-c-select pf-m-expanded\">\n              <span id=\"toolbar-expanded-elements-example-select-checkbox-risk-label\" hidden>Choose one</span>\n              <button class=\"pf-c-select__toggle\" type=\"button\" id=\"toolbar-expanded-elements-example-select-checkbox-risk-toggle\" aria-haspopup=\"true\" aria-expanded=\"true\" aria-labelledby=\"toolbar-expanded-elements-example-select-checkbox-risk-label toolbar-expanded-elements-example-select-checkbox-risk-toggle\">\n                <div class=\"pf-c-select__toggle-wrapper\">\n                  <span class=\"pf-c-select__toggle-text\">Risk</span>\n                </div>\n                <span class=\"pf-c-select__toggle-arrow\">\n                  <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n                </span>\n              </button>\n              <div class=\"pf-c-select__menu\">\n                <fieldset class=\"pf-c-select__menu-fieldset\" aria-label=\"Select input\">\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-expanded-elements-example-select-checkbox-risk-active\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-expanded-elements-example-select-checkbox-risk-active\" name=\"toolbar-expanded-elements-example-select-checkbox-risk-active\" />\n                    <span class=\"pf-c-check__label\">Active</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-expanded-elements-example-select-checkbox-risk-cancelled\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-expanded-elements-example-select-checkbox-risk-cancelled\" name=\"toolbar-expanded-elements-example-select-checkbox-risk-cancelled\" checked />\n                    <span class=\"pf-c-check__label\">Cancelled</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-expanded-elements-example-select-checkbox-risk-paused\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-expanded-elements-example-select-checkbox-risk-paused\" name=\"toolbar-expanded-elements-example-select-checkbox-risk-paused\" checked />\n                    <span class=\"pf-c-check__label\">Paused</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-expanded-elements-example-select-checkbox-risk-warning\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-expanded-elements-example-select-checkbox-risk-warning\" name=\"toolbar-expanded-elements-example-select-checkbox-risk-warning\" />\n                    <span class=\"pf-c-check__label\">Warning</span>\n                  </label>\n                  <label class=\"pf-c-check pf-c-select__menu-item\" for=\"toolbar-expanded-elements-example-select-checkbox-risk-restarted\">\n                    <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"toolbar-expanded-elements-example-select-checkbox-risk-restarted\" name=\"toolbar-expanded-elements-example-select-checkbox-risk-restarted\" checked />\n                    <span class=\"pf-c-check__label\">Restarted</span>\n                  </label>\n                </fieldset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__group pf-m-icon-button-group\">\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Edit\">\n            <i class=\"fas fa-edit\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Clone\">\n            <i class=\"fas fa-clone\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n        <div class=\"pf-c-toolbar__item\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Sync\">\n            <i class=\"fas fa-sync\" aria-hidden=\"true\"></i>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-toolbar__item pf-m-overflow-menu\">\n        <div class=\"pf-c-overflow-menu\" id=\"toolbar-expanded-elements-example-overflow-menu\">\n          <div class=\"pf-c-overflow-menu__content\">\n            <div class=\"pf-c-overflow-menu__group pf-m-button-group\">\n              <div class=\"pf-c-overflow-menu__item\">\n                <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n              </div>\n              <div class=\"pf-c-overflow-menu__item\">\n                <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"pf-c-overflow-menu__control\">\n            <div class=\"pf-c-dropdown pf-m-expanded\">\n              <button class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"toolbar-expanded-elements-example-overflow-menu-dropdown-toggle\" aria-label=\"Overflow menu\">\n                <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n              </button>\n              <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"toolbar-expanded-elements-example-overflow-menu-dropdown-toggle\">\n                <li>\n                  <button class=\"pf-c-dropdown__menu-item\">Tertiary</button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"pf-c-toolbar__expandable-content pf-m-hidden\" id=\"toolbar-expanded-elements-example-expandable-content\" hidden></div>\n  </div>\n</div>","title":"Expanded elements","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`As the toolbar component is a hybrid layout and component, some of its elements are presentational, while some require accessibility support.`}
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
              {`.pf-c-toolbar`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the toolbar component. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a toolbar item. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a toolbar group.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a toolbar content container. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__content-section`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a toolbar content section. This is used to separate static elements from dynamic elements within a content container. There should be no more than one `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__content-section`}
            </code>
            {` per `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__content`}
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
              {`.pf-c-toolbar__expandable-content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a toolbar expandable content section.`}
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
              {`.pf-c-toolbar__expandable-content`}
            </code>
          </td>
          <td>
            {`Modifies expandable content section for the expanded state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-bulk-select`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__item`}
            </code>
          </td>
          <td>
            {`Initiates bulk select spacing.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-overflow-menu`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__item`}
            </code>
          </td>
          <td>
            {`Initiates overflow menu spacing.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-pagination`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__item`}
            </code>
          </td>
          <td>
            {`Initiates pagination spacing and margin.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-search-filter`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__item`}
            </code>
          </td>
          <td>
            {`Initiates search filter spacing.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-chip-group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__item`}
            </code>
          </td>
          <td>
            {`Initiates chip group spacing.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-button-group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
          </td>
          <td>
            {`Initiates button group spacing.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-icon-button-group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
          </td>
          <td>
            {`Initiates icon button group spacing.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-filter-group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
          </td>
          <td>
            {`Initiates filter group spacing.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-hidden{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar > *`}
            </code>
          </td>
          <td>
            {`Modifies toolbar element to be hidden, at optional breakpoint.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-visible{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar > *`}
            </code>
          </td>
          <td>
            {`Modifies toolbar element to be shown, at optional breakpoint.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-align-right{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar > *`}
            </code>
          </td>
          <td>
            {`Modifies toolbar element to align right, at optional breakpoint.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-align-left{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar > *`}
            </code>
          </td>
          <td>
            {`Modifies toolbar element to align left, at optional breakpoint.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-label`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__item`}
            </code>
          </td>
          <td>
            {`Modifies toolbar item to label.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-chip-container`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__content`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
          </td>
          <td>
            {`Modifies the toolbar element for applied filters layout.`}
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
              {`.pf-c-toolbar__expandable-content`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__toggle`}
            </code>
          </td>
          <td>
            {`Modifies the component for the expanded state.`}
          </td>
        </tr>
      </tbody>
    </table>
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
              {`hidden`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__item`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__toggle`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__expandable-content`}
            </code>
          </td>
          <td>
            {`Indicates that the toolbar element is hidden. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-expanded="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__toggle > .pf-c-button`}
            </code>
          </td>
          <td>
            {`Indicates that the expandable content is visible. `}
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
              {`.pf-c-toolbar__toggle > .pf-c-button`}
            </code>
          </td>
          <td>
            {`Indicates the the expandable content is hidden. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-controls="[id of expandable content]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__toggle > .pf-c-button`}
            </code>
          </td>
          <td>
            {`Identifies the expanded content controlled by the toggle button. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`id="[expandable-content_id]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__expandable-content`}
            </code>
          </td>
          <td>
            {`Provides a reference for toggle button description. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Toggle group usage`}
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
              {`.pf-m-toggle-group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
          </td>
          <td>
            {`Modifies toolbar group to control when, and at which breakpoint, filters will be hidden/shown. By default, all filters are hidden until the specified breakpoint is reached.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-show{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group.pf-m-toggle-group`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__expandable-content`}
            </code>
          </td>
          <td>
            {`Modifies toolbar element to hidden at breakpoint. This selector must be applied consistently to toggle group and expandable content.`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Spacer system`}
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
              {`.pf-m-spacer-{none, sm, md, lg, xl}{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__item`}
            </code>
          </td>
          <td>
            {`Modifies toolbar group or item spacing.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-space-items-{none, sm, md, lg, xl}{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-toolbar__group`}
            </code>
          </td>
          <td>
            {`Modifies toolbar group child spacing.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsToolbarCoreDocs.Component.displayName = 'DocumentationComponentsToolbarCoreDocs';
