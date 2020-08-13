import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsChipGroupCoreDocs = {
  "slug": "/documentation/components/chip-group/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/ChipGroup/examples/ChipGroup.md",
  "section": "components",
  "id": "Chip group",
  "title": "Chip group",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-chip-group"
};
DocumentationComponentsChipGroupCoreDocs.liveContext = {
  
};
DocumentationComponentsChipGroupCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsChipGroupCoreDocs} {...{"code":"<div class=\"pf-c-chip-group\">\n  <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-label=\"Chip group list\">\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"simple-inline-chip-group-overflowchip_one_select_collapsed\">Chip one</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"simple-inline-chip-group-overflowremove_chip_one_select_collapsed simple-inline-chip-group-overflowchip_one_select_collapsed\" aria-label=\"Remove\" id=\"simple-inline-chip-group-overflowremove_chip_one_select_collapsed\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"simple-inline-chip-group-overflowchip_two_select_collapsed\">Chip two</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"simple-inline-chip-group-overflowremove_chip_two_select_collapsed simple-inline-chip-group-overflowchip_two_select_collapsed\" aria-label=\"Remove\" id=\"simple-inline-chip-group-overflowremove_chip_two_select_collapsed\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"simple-inline-chip-group-overflowchip_three_select_collapsed\">Chip three</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"simple-inline-chip-group-overflowremove_chip_three_select_collapsed simple-inline-chip-group-overflowchip_three_select_collapsed\" aria-label=\"Remove\" id=\"simple-inline-chip-group-overflowremove_chip_three_select_collapsed\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <button class=\"pf-c-chip pf-m-overflow\">\n        <span class=\"pf-c-chip__text\">2 more</span>\n      </button>\n    </li>\n  </ul>\n</div>","title":"Simple inline chip group overflow","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsChipGroupCoreDocs} {...{"code":"<div class=\"pf-c-chip-group\">\n  <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-label=\"Chip group list\">\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"simple-inline-chip-group-expandedchip_one_select\">Chip one</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"simple-inline-chip-group-expandedremove_chip_one_select simple-inline-chip-group-expandedchip_one_select\" aria-label=\"Remove\" id=\"simple-inline-chip-group-expandedremove_chip_one_select\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"simple-inline-chip-group-expandedchip_two_select\">Chip two</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"simple-inline-chip-group-expandedremove_chip_two_select simple-inline-chip-group-expandedchip_two_select\" aria-label=\"Remove\" id=\"simple-inline-chip-group-expandedremove_chip_two_select\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"simple-inline-chip-group-expandedchip_three_select\">Chip three</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"simple-inline-chip-group-expandedremove_chip_three_select simple-inline-chip-group-expandedchip_three_select\" aria-label=\"Remove\" id=\"simple-inline-chip-group-expandedremove_chip_three_select\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"simple-inline-chip-group-expandedchip_four_select\">Chip four</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"simple-inline-chip-group-expandedremove_chip_four_select simple-inline-chip-group-expandedchip_four_select\" aria-label=\"Remove\" id=\"simple-inline-chip-group-expandedremove_chip_four_select\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"simple-inline-chip-group-expandedchip_five_select\">Chip five</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"simple-inline-chip-group-expandedremove_chip_five_select simple-inline-chip-group-expandedchip_five_select\" aria-label=\"Remove\" id=\"simple-inline-chip-group-expandedremove_chip_five_select\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <button class=\"pf-c-chip pf-m-overflow\">\n        <span class=\"pf-c-chip__text\">Show less</span>\n      </button>\n    </li>\n  </ul>\n</div>","title":"Simple inline chip group expanded","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsChipGroupCoreDocs} {...{"code":"<div class=\"pf-c-chip-group pf-m-category\">\n  <span class=\"pf-c-chip-group__label\" aria-hidden=\"true\" id=\"chip-group-with-categories-label\">Category one</span>\n  <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-labelledby=\"chip-group-with-categories-label\">\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"chip-group-with-categorieschip_one_toolbar_collapsed\">Chip one</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"chip-group-with-categoriesremove_chip_one_toolbar_collapsed chip-group-with-categorieschip_one_toolbar_collapsed\" aria-label=\"Remove\" id=\"chip-group-with-categoriesremove_chip_one_toolbar_collapsed\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"chip-group-with-categorieschip_two_toolbar_collapsed\">Chip two</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"chip-group-with-categoriesremove_chip_two_toolbar_collapsed chip-group-with-categorieschip_two_toolbar_collapsed\" aria-label=\"Remove\" id=\"chip-group-with-categoriesremove_chip_two_toolbar_collapsed\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"chip-group-with-categorieschip_three_toolbar_collapsed\">Chip three</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"chip-group-with-categoriesremove_chip_three_toolbar_collapsed chip-group-with-categorieschip_three_toolbar_collapsed\" aria-label=\"Remove\" id=\"chip-group-with-categoriesremove_chip_three_toolbar_collapsed\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n  </ul>\n</div>","title":"Chip group with categories","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsChipGroupCoreDocs} {...{"code":"<div class=\"pf-c-chip-group pf-m-category\">\n  <span class=\"pf-c-chip-group__label\" aria-hidden=\"true\" id=\"chip-group-with-categories-overflow-label\">Category one</span>\n  <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-labelledby=\"chip-group-with-categories-overflow-label\">\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"chip-group-with-categories-overflowchip_one_toolbar_collapsed\">Chip one</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"chip-group-with-categories-overflowremove_chip_one_toolbar_collapsed chip-group-with-categories-overflowchip_one_toolbar_collapsed\" aria-label=\"Remove\" id=\"chip-group-with-categories-overflowremove_chip_one_toolbar_collapsed\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"chip-group-with-categories-overflowchip_two_toolbar_collapsed\">Chip two</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"chip-group-with-categories-overflowremove_chip_two_toolbar_collapsed chip-group-with-categories-overflowchip_two_toolbar_collapsed\" aria-label=\"Remove\" id=\"chip-group-with-categories-overflowremove_chip_two_toolbar_collapsed\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"chip-group-with-categories-overflowchip_three_toolbar_collapsed\">Chip three</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"chip-group-with-categories-overflowremove_chip_three_toolbar_collapsed chip-group-with-categories-overflowchip_three_toolbar_collapsed\" aria-label=\"Remove\" id=\"chip-group-with-categories-overflowremove_chip_three_toolbar_collapsed\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <button class=\"pf-c-chip pf-m-overflow\">\n        <span class=\"pf-c-chip__text\">2 more</span>\n      </button>\n    </li>\n  </ul>\n</div>","title":"Chip group with categories overflow","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsChipGroupCoreDocs} {...{"code":"<div class=\"pf-c-chip-group pf-m-category\">\n  <span class=\"pf-c-chip-group__label\" aria-hidden=\"true\" id=\"chip-group-with-categories-overflow-expanded-label\">Category one</span>\n  <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-labelledby=\"chip-group-with-categories-overflow-expanded-label\">\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"chip-group-with-categories-overflow-expandedchip_one_toolbar\">Chip one</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"chip-group-with-categories-overflow-expandedremove_chip_one_toolbar chip-group-with-categories-overflow-expandedchip_one_toolbar\" aria-label=\"Remove\" id=\"chip-group-with-categories-overflow-expandedremove_chip_one_toolbar\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"chip-group-with-categories-overflow-expandedchip_two_toolbar\">Chip two</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"chip-group-with-categories-overflow-expandedremove_chip_two_toolbar chip-group-with-categories-overflow-expandedchip_two_toolbar\" aria-label=\"Remove\" id=\"chip-group-with-categories-overflow-expandedremove_chip_two_toolbar\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"chip-group-with-categories-overflow-expandedchip_three_toolbar\">Chip three</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"chip-group-with-categories-overflow-expandedremove_chip_three_toolbar chip-group-with-categories-overflow-expandedchip_three_toolbar\" aria-label=\"Remove\" id=\"chip-group-with-categories-overflow-expandedremove_chip_three_toolbar\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"chip-group-with-categories-overflow-expandedchip_four_toolbar\">Chip four</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"chip-group-with-categories-overflow-expandedremove_chip_four_toolbar chip-group-with-categories-overflow-expandedchip_four_toolbar\" aria-label=\"Remove\" id=\"chip-group-with-categories-overflow-expandedremove_chip_four_toolbar\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"chip-group-with-categories-overflow-expandedchip_five_select\">Chip five</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"chip-group-with-categories-overflow-expandedremove_chip_five_select chip-group-with-categories-overflow-expandedchip_five_select\" aria-label=\"Remove\" id=\"chip-group-with-categories-overflow-expandedremove_chip_five_select\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <button class=\"pf-c-chip pf-m-overflow\">\n        <span class=\"pf-c-chip__text\">Show less</span>\n      </button>\n    </li>\n  </ul>\n</div>","title":"Chip group with categories overflow expanded","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsChipGroupCoreDocs} {...{"code":"<div class=\"pf-c-chip-group pf-m-category\">\n  <span class=\"pf-c-chip-group__label\" aria-hidden=\"true\" id=\"Chip-group-with-categories-removable-label\">Category one</span>\n  <ul class=\"pf-c-chip-group__list\" role=\"list\" aria-labelledby=\"Chip-group-with-categories-removable-label\">\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"Chip-group-with-categories-removablechip_one_toolbar\">Chip one</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"Chip-group-with-categories-removableremove_chip_one_toolbar Chip-group-with-categories-removablechip_one_toolbar\" aria-label=\"Remove\" id=\"Chip-group-with-categories-removableremove_chip_one_toolbar\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"Chip-group-with-categories-removablechip_two_toolbar\">Chip two</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"Chip-group-with-categories-removableremove_chip_two_toolbar Chip-group-with-categories-removablechip_two_toolbar\" aria-label=\"Remove\" id=\"Chip-group-with-categories-removableremove_chip_two_toolbar\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n    <li class=\"pf-c-chip-group__list-item\">\n      <div class=\"pf-c-chip\">\n        <span class=\"pf-c-chip__text\" id=\"Chip-group-with-categories-removablechip_three_toolbar\">Chip three</span>\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"Chip-group-with-categories-removableremove_chip_three_toolbar Chip-group-with-categories-removablechip_three_toolbar\" aria-label=\"Remove\" id=\"Chip-group-with-categories-removableremove_chip_three_toolbar\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </li>\n  </ul>\n  <div class=\"pf-c-chip-group__close\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"Chip-group-with-categories-removable-button Chip-group-with-categories-removable-label\" aria-label=\"Close chip group\" id=\"Chip-group-with-categories-removable-button\">\n      <i class=\"fas fa-times-circle\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>","title":"Chip group with categories removable","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A chip group is constrained to the width of its container and will wrap when it exceeds that width. An overflow value can be set and when the number of chips exceeds that value, additional chips will be hidden by default. The default overflow value will be set to 3 chips but this can be adjusted per application needs. The toggle button after the last chip allows the group to be expanded (or collapsed).`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If you want to create sub-groupings of chips to represent multiple values applied against the same category, chips can be grouped by category. This can be useful in filtering use cases, for example, where you want all items that match more than one value of the same attribute, e.g., ‘status = down OR needs maintenance’.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The chip group requires the `}
      <PatternflyThemeLink {...{"to":"/documentation/core/components/chip"}}>
        {`chip component`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`All single chip accessibility and usage requirements apply.`}
      </strong>
    </p>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Attributes for closable chip group button`}
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
              {`role="list"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-chip-group__list`}
            </code>
          </td>
          <td>
            {`Indicates that the chip group list is a list element. This role is redundant since `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-chip-group__list`}
            </code>
            {` is a `}
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
            {` but is required for screen readers to announce the list propertly. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="[button label text]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-chip-group__close > button`}
            </code>
          </td>
          <td>
            {`Provides an accessible name for a chip group close when an icon is used instead of text. Required when an icon is used with no supporting text. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby="[id value of .pf-c-chip-group__close > button] [id value of .pf-c-chip-group__label]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-chip-group__close > button`}
            </code>
          </td>
          <td>
            {`Provides an accessible name for the button. `}
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
              {`.pf-c-chip-group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the chip group component. `}
            <strong>
              {`Required.`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-chip-group__list`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
          </td>
          <td>
            {`Initiates the container for a list of chips. `}
            <strong>
              {`Required.`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-chip-group__list-item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Initiates the list item inside of the chip group. `}
            <strong>
              {`Required.`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-chip-group__label`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the label to be used in the chip group.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-chip-group__close`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the container used for the button to remove the chip group.`}
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
              {`.pf-c-chip-group__close <button>`}
            </code>
          </td>
          <td>
            {`Initiates the button used to remove the chip group.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-category`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-chip-group`}
            </code>
          </td>
          <td>
            {`Modifies the chip group to support category styling.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsChipGroupCoreDocs.Component.displayName = 'DocumentationComponentsChipGroupCoreDocs';
