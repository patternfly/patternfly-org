import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/components/OverflowMenu/examples/./OverflowMenu.css'

export const DocumentationComponentsOverflowMenuCoreDocs = {
  "slug": "/documentation/components/overflow-menu/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/OverflowMenu/examples/OverflowMenu.md",
  "section": "components",
  "id": "Overflow menu",
  "title": "Overflow menu",
  "toc": [
    "Introduction",
    "Persistent configuration"
  ],
  "cssPrefix": "pf-c-overflow-menu"
};
DocumentationComponentsOverflowMenuCoreDocs.liveContext = {
  
};
DocumentationComponentsOverflowMenuCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Introduction`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The overflow menu component condenses actions inside `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-overflow-menu__content`}
      </code>
      {` container into a single dropdown button wrapped in `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-overflow-menu__control`}
      </code>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The overflow menu relies on groups (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-overflow-menu__group`}
      </code>
      {`) and items (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-overflow-menu__item`}
      </code>
      {`), with default spacer values. Groups and items can be siblings and/or items can be nested within groups. Modifier selectors adjust spacing based on the type of group. Each modifier applies a unique CSS variable, therefore, the base spacer value for all elements can be customized and item/groups spacers can be themed individually. The default spacer value for items and groups is set to `}
      <code {...{"className":"ws-code"}}>
        {`--pf-c-toolbar--spacer--base`}
      </code>
      {`, whose value is `}
      <code {...{"className":"ws-code"}}>
        {`--pf-global--spacer--md`}
      </code>
      {` or 16px.`}
    </p>
    <Example {...DocumentationComponentsOverflowMenuCoreDocs} {...{"code":"<div class=\"pf-c-overflow-menu\" id=\"overflow-menu-simple\">\n  <div class=\"pf-c-overflow-menu__control\">\n    <div class=\"pf-c-dropdown pf-m-expanded\">\n      <button class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"overflow-menu-simple-dropdown-toggle\" aria-label=\"Generic options\">\n        <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n      </button>\n      <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"overflow-menu-simple-dropdown-toggle\">\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Item 1</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Item 2</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Item 3</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Item 4</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Item 5</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>","title":"Simple collapsed","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsOverflowMenuCoreDocs} {...{"code":"<div class=\"pf-c-overflow-menu\" id=\"overflow-menu-simple-expanded\">\n  <div class=\"pf-c-overflow-menu__content\">\n    <div class=\"pf-c-overflow-menu__item\">Item 1</div>\n    <div class=\"pf-c-overflow-menu__item\">Item 2</div>\n    <div class=\"pf-c-overflow-menu__group\">\n      <div class=\"pf-c-overflow-menu__item\">Item 3</div>\n      <div class=\"pf-c-overflow-menu__item\">Item 4</div>\n      <div class=\"pf-c-overflow-menu__item\">Item 5</div>\n    </div>\n  </div>\n</div>","title":"Simple expanded","lang":"html"}}>
    </Example>
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
              {`.pf-c-overflow-menu__group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`--pf-c-overflow-menu__group--spacer`}
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
              {`.pf-c-overflow-menu__item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`--pf-c-overflow-menu__item--spacer`}
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
      {`Overflow menu item types`}
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
              {`.pf-c-overflow-menu`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates an overflow menu. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-overflow-menu__content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates an overflow menu content section. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-overflow-menu__control`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the overflow menu control. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-overflow-menu__group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates an overflow menu group.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-overflow-menu__item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates an overflow menu item. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsOverflowMenuCoreDocs} {...{"code":"<div class=\"pf-c-overflow-menu\" id=\"overflow-menu-button-group-example\">\n  <div class=\"pf-c-overflow-menu__content\">\n    <div class=\"pf-c-overflow-menu__group\">\n      <div class=\"pf-c-overflow-menu__item\">Item 1</div>\n      <div class=\"pf-c-overflow-menu__item\">Item 2</div>\n      <div class=\"pf-c-overflow-menu__item\">Item 3</div>\n    </div>\n    <div class=\"pf-c-overflow-menu__group pf-m-button-group\">\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-tertiary\" type=\"button\">Tertiary</button>\n      </div>\n    </div>\n    <div class=\"pf-c-overflow-menu__group pf-m-icon-button-group\">\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Align left\">\n          <i class=\"fas fa-align-left\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Align center\">\n          <i class=\"fas fa-align-center\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Align right\">\n          <i class=\"fas fa-align-right\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>","title":"Group types","lang":"html"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`The action group consists of a primary and secondary action. Any additional actions are part of the overflow control dropdown.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overflow menu group types`}
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
              {`.pf-c-overflow-menu__group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates an overflow menu component group.`}
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
              {`.pf-c-overflow-menu__group`}
            </code>
          </td>
          <td>
            {`Modifies overflow menu group spacing. Spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-overflow-menu__group--m-button-group--spacer)`}
            </code>
            {`. Child `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
            {` spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-overflow-menu__group--m-button-group--space-items)`}
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
              {`.pf-c-overflow-menu__group`}
            </code>
          </td>
          <td>
            {`Modifies overflow menu group spacing. Spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-overflow-menu__group--m-icon-button-group--spacer)`}
            </code>
            {`. Child `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button.pf-m-button-plain`}
            </code>
            {` spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-overflow-menu__group--m-icon-button-group--space-items)`}
            </code>
            {`.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsOverflowMenuCoreDocs} {...{"code":"<div class=\"pf-c-overflow-menu\" id=\"overflow-menu-simple-additional-options-hidden\">\n  <div class=\"pf-c-overflow-menu__control\">\n    <div class=\"pf-c-dropdown pf-m-expanded\">\n      <button class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"overflow-menu-simple-additional-options-hidden-dropdown-toggle\" aria-label=\"Dropdown with additional options\">\n        <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n      </button>\n      <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"overflow-menu-simple-additional-options-hidden-dropdown-toggle\">\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Primary</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Secondary</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Tertiary</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Align left</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Align center</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Align right</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Action 7</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>","title":"Additional options in dropdown (hidden)","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsOverflowMenuCoreDocs} {...{"code":"<div class=\"pf-c-overflow-menu\" id=\"overflow-menu-simple-additional-options-visible\">\n  <div class=\"pf-c-overflow-menu__content\">\n    <div class=\"pf-c-overflow-menu__group pf-m-button-group\">\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-tertiary\" type=\"button\">Tertiary</button>\n      </div>\n    </div>\n    <div class=\"pf-c-overflow-menu__group pf-m-icon-button-group\">\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Align left\">\n          <i class=\"fas fa-align-left\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Align center\">\n          <i class=\"fas fa-align-center\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Align right\">\n          <i class=\"fas fa-align-right\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-overflow-menu__control\">\n    <div class=\"pf-c-dropdown pf-m-expanded\">\n      <button class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"overflow-menu-simple-additional-options-visible-dropdown-toggle\" aria-label=\"Dropdown with additional options\">\n        <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n      </button>\n      <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"overflow-menu-simple-additional-options-visible-dropdown-toggle\">\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Action 7</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>","title":"Additional options in dropdown (visible)","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Persistent configuration`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsOverflowMenuCoreDocs} {...{"code":"<div class=\"pf-c-overflow-menu\" id=\"overflow-menu-persistent-hidden\">\n  <div class=\"pf-c-overflow-menu__content\">\n    <div class=\"pf-c-overflow-menu__group pf-m-button-group\">\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-overflow-menu__control\">\n    <div class=\"pf-c-dropdown pf-m-expanded\">\n      <button class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"overflow-menu-persistent-hidden-dropdown-toggle\" aria-label=\"Dropdown for persistent example\">\n        <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n      </button>\n      <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"overflow-menu-persistent-hidden-dropdown-toggle\">\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Secondary</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Tertiary</button>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Action 4</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>","title":"Persistent additional options (hidden)","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsOverflowMenuCoreDocs} {...{"code":"<div class=\"pf-c-overflow-menu\" id=\"overflow-menu-persistent-visible-example\">\n  <div class=\"pf-c-overflow-menu__content\">\n    <div class=\"pf-c-overflow-menu__group pf-m-button-group\">\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n      </div>\n      <div class=\"pf-c-overflow-menu__item\">\n        <button class=\"pf-c-button pf-m-tertiary\" type=\"button\">Tertiary</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"pf-c-overflow-menu__control\">\n    <div class=\"pf-c-dropdown pf-m-expanded\">\n      <button class=\"pf-c-button pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"overflow-menu-persistent-visible-example-dropdown-toggle\" aria-label=\"Dropdown for persistent example\">\n        <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n      </button>\n      <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"overflow-menu-persistent-visible-example-dropdown-toggle\">\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\">Action 4</button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>","title":"Persistent additional options (visible)","lang":"html"}}>
    </Example>
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
              {`.pf-c-overflow-menu`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates an overflow menu. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-overflow-menu__content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates an overflow menu content section. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-overflow-menu__control`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the overflow menu control. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-overflow-menu__group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates an overflow menu group.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-overflow-menu__item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates an overflow menu item. `}
            <strong>
              {`Required`}
            </strong>
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
              {`.pf-c-overflow-menu__group`}
            </code>
          </td>
          <td>
            {`Modifies overflow menu group spacing. Spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-overflow-menu__group--m-button-group--spacer)`}
            </code>
            {`. Child spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-overflow-menu__group--m-button-group--space-items)`}
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
              {`.pf-c-overflow-menu__group`}
            </code>
          </td>
          <td>
            {`Modifies overflow menu group spacing. Spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-overflow-menu__group--m-icon-button-group--spacer)`}
            </code>
            {`. Child spacer value is set to `}
            <code {...{"className":"ws-code"}}>
              {`var(--pf-c-overflow-menu__group--m-icon-button-group--space-items)`}
            </code>
            {`.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsOverflowMenuCoreDocs.Component.displayName = 'DocumentationComponentsOverflowMenuCoreDocs';
