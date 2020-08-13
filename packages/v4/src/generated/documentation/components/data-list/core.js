import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsDataListCoreDocs = {
  "slug": "/documentation/components/data-list/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/DataList/examples/DataList.md",
  "section": "components",
  "id": "Data list",
  "title": "Data list",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-data-list"
};
DocumentationComponentsDataListCoreDocs.liveContext = {
  
};
DocumentationComponentsDataListCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsDataListCoreDocs} {...{"code":"<ul class=\"pf-c-data-list\" role=\"list\" aria-label=\"Basic data list example\" id=\"data-list-basic\">\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-basic-item1\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-basic-item1\">Primary content</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">Secondary content</div>\n      </div>\n    </div>\n  </li>\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-basic-item2\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-no-fill\">\n          <span id=\"data-list-basic-item2\">Secondary content (pf-m-no-fill)</span>\n        </div>\n        <div class=\"pf-c-data-list__cell pf-m-no-fill pf-m-align-right\">Secondary content (pf-m-align-right pf-m-no-fill)</div>\n      </div>\n    </div>\n  </li>\n</ul>","title":"Basic","lang":"html"}}>
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
              {`role="list"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list`}
            </code>
          </td>
          <td>
            {`Indicates that the data list is a list. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list`}
            </code>
          </td>
          <td>
            {`Provides an accessible name for the data list. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__item`}
            </code>
          </td>
          <td>
            {`Provides an accessible description for data list item. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`id`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__cell`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__cell *`}
            </code>
          </td>
          <td>
            {`Provides a reference for data list item description. `}
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
              {`.pf-c-data-list`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
          </td>
          <td>
            {`Initiates a data list. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Initiates a data list item. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__item-row`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a data list item row. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__item-content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a container for data list content. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__cell`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Initiates a data list content cell. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-align-left`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__cell`}
            </code>
          </td>
          <td>
            {`Modifies a data list cell to not grow and align-left when its the first data-list`}
            {`_`}
            {`_`}
            {`cell element.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-no-fill`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__cell`}
            </code>
          </td>
          <td>
            {`Modifies a data list cell to not fill the available horizontal space.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-align-right`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__cell`}
            </code>
          </td>
          <td>
            {`Modifies a data list cell to align-right.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsDataListCoreDocs} {...{"code":"<ul class=\"pf-c-data-list\" role=\"list\" aria-label=\"With headings data list example\" id=\"data-list-with-headings\">\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-with-headings-item1\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <h2 id=\"data-list-with-headings-item1\">Primary content</h2>\n        </div>\n        <div class=\"pf-c-data-list__cell\">Secondary content</div>\n      </div>\n    </div>\n  </li>\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-with-headings-item2\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-no-fill\">\n          <h2 id=\"data-list-with-headings-item2\">Secondary content (pf-m-no-fill)</h2>\n        </div>\n        <div class=\"pf-c-data-list__cell pf-m-no-fill pf-m-align-right\">Secondary content (pf-m-align-right pf-m-no-fill)</div>\n      </div>\n    </div>\n  </li>\n</ul>","title":"With headings","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When a list item includes more than one block of content, it can be difficult for some screen reader users to discern where one list item ends and the next one begins. A simple way to provide better separation of list items is to define the primary content section as a heading. Headings are useful for indicating a new section of contents, but also provide an easy way for screen reader users to navigate to specific sections on the page. The heading level should be based on the context in which the DataList component is being used. For example, if the heading for the section that contains the DataList is a level 3, then `}
      <code {...{"className":"ws-code"}}>
        {`h4`}
      </code>
      {` elements should be used in the DataList list items.`}
    </p>
    <Example {...DocumentationComponentsDataListCoreDocs} {...{"code":"<ul class=\"pf-c-data-list\" role=\"list\" aria-label=\"Checkbox and action data list example\" id=\"data-list-checkboxes-actions-addl-cells\">\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-checkboxes-actions-addl-cells-item1\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__check\">\n          <input type=\"checkbox\" name=\"data-list-checkboxes-actions-addl-cells-check-action-check1\" aria-labelledby=\"data-list-checkboxes-actions-addl-cells-item1\" />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-checkboxes-actions-addl-cells-item1\">Primary content</span>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n        <div class=\"pf-c-data-list__cell\">Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Tertiary Content</span>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>More Content</span>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>More Content</span>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"data-list-checkboxes-actions-addl-cells-action1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"data-list-checkboxes-actions-addl-cells-action1-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </li>\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-checkboxes-actions-addl-cells-item2\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__check\">\n          <input type=\"checkbox\" name=\"data-list-checkboxes-actions-addl-cells-check-action-check2\" aria-labelledby=\"data-list-checkboxes-actions-addl-cells-item2\" />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-checkboxes-actions-addl-cells-item2\">Primary content - lorem ipsum</span>dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n        <div class=\"pf-c-data-list__cell\">Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n      </div>\n      <div class=\"pf-c-data-list__item-action pf-m-hidden-on-lg\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"data-list-checkboxes-actions-addl-cells-action2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"data-list-checkboxes-actions-addl-cells-action2-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action pf-m-hidden pf-m-visible-on-lg\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n      </div>\n    </div>\n  </li>\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-checkboxes-actions-addl-cells-item3\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__check\">\n          <input type=\"checkbox\" name=\"data-list-checkboxes-actions-addl-cells-check-action-check3\" aria-labelledby=\"data-list-checkboxes-actions-addl-cells-item3\" />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-checkboxes-actions-addl-cells-item3\">Primary content - lorem ipsum</span>dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n        <div class=\"pf-c-data-list__cell\">Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n      </div>\n      <div class=\"pf-c-data-list__item-action pf-m-hidden-on-xl\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"data-list-checkboxes-actions-addl-cells-action3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"data-list-checkboxes-actions-addl-cells-action3-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action pf-m-hidden pf-m-visible-on-xl\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n      </div>\n    </div>\n  </li>\n</ul>","title":"Checkboxes, actions, and additional cells","lang":"html"}}>
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
              {`aria-label="[descriptive text]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__action`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Provides an accessible label buttons. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby="{title_cell_id}"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__check`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-check__input`}
            </code>
          </td>
          <td>
            {`Creates an accessible label for the checkbox based on the title cell. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby="{title_cell_id} {data_list_action_id}"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__action`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Creates an accessible label for the action button using the title cell and button label `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`id`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__cell > *`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__check`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-check__input`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__action`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Provides a reference for interactive elements. `}
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
              {`.pf-c-data-list__item-control`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a container for data list controls. For example, add `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__check`}
            </code>
            {` here. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__item-action`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a container for the data list actions. For example, add `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__action`}
            </code>
            {` here. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__check`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a data list check cell. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__action`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a data list action button cell. `}
            <strong>
              {`Required`}
            </strong>
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
              {`.pf-c-data-list__item-action`}
            </code>
          </td>
          <td>
            {`Hides an actions container at a given breakpoint, or hides it at all breakpoints with `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-hidden`}
            </code>
            {`.`}
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
              {`.pf-c-data-list__item-action`}
            </code>
          </td>
          <td>
            {`Shows an actions container at a given breakpoint.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsDataListCoreDocs} {...{"code":"<ul class=\"pf-c-data-list\" role=\"list\" aria-label=\"Expandable data list example\" id=\"data-list-expandable\">\n  <li class=\"pf-c-data-list__item pf-m-expanded\" aria-labelledby=\"data-list-expandable-item1\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"data-list-expandable-toggle1 data-list-expandable-item1\" id=\"data-list-expandable-toggle1\" aria-label=\"Toggle details for\" aria-expanded=\"true\" aria-controls=\"data-list-expandable-content1\">\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-icon\">\n          <i class=\"fas fa-code-branch\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <div id=\"data-list-expandable-item1\">Primary content</div>\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n          <a href=\"#\">link</a>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"data-list-expandable-action1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"data-list-expandable-action1-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <section class=\"pf-c-data-list__expandable-content\" id=\"data-list-expandable-content1\" aria-label=\"Primary content details\">\n      <div class=\"pf-c-data-list__expandable-content-body\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>\n    </section>\n  </li>\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-expandable-item2\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"data-list-expandable-toggle2 data-list-expandable-item2\" id=\"data-list-expandable-toggle2\" aria-label=\"Toggle details for\" aria-expanded=\"false\" aria-controls=\"data-list-expandable-content2\">\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-icon\">\n          <i class=\"fas fa-code-branch\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <div id=\"data-list-expandable-item2\">Secondary content</div>\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"data-list-expandable-action2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"data-list-expandable-action2-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <section class=\"pf-c-data-list__expandable-content\" id=\"data-list-expandable-content2\" aria-label=\"Secondary content details\" hidden>\n      <div class=\"pf-c-data-list__expandable-content-body\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>\n    </section>\n  </li>\n  <li class=\"pf-c-data-list__item pf-m-expanded\" aria-labelledby=\"data-list-expandable-item3\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"data-list-expandable-toggle3 data-list-expandable-item3\" id=\"data-list-expandable-toggle3\" aria-label=\"Toggle details for\" aria-expanded=\"true\" aria-controls=\"data-list-expandable-content3\">\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-icon\">\n          <i class=\"fas fa-code-branch\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <div id=\"data-list-expandable-item3\">Tertiary content</div>\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet.</span>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"data-list-expandable-action3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"data-list-expandable-action3-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <section class=\"pf-c-data-list__expandable-content\" id=\"data-list-expandable-content3\" aria-label=\"Tertiary content details\">\n      <div class=\"pf-c-data-list__expandable-content-body pf-m-no-padding\">This expanded section has no padding.</div>\n    </section>\n  </li>\n</ul>","title":"Expandable","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDataListCoreDocs} {...{"code":"<ul class=\"pf-c-data-list pf-m-compact\" role=\"list\" aria-label=\"Compact data list example\" id=\"data-list-compact\">\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-compact-item1\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__check\">\n          <input type=\"checkbox\" name=\"data-list-compact-check-action-check1\" aria-labelledby=\"data-list-compact-item1\" />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-compact-item1\">Primary content</span>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n        <div class=\"pf-c-data-list__cell\">Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>Tertiary Content</span>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>More Content</span>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n        <div class=\"pf-c-data-list__cell\">\n          <span>More Content</span>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"data-list-compact-action1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"data-list-compact-action1-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </li>\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-compact-item2\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__check\">\n          <input type=\"checkbox\" name=\"data-list-compact-check-action-check2\" aria-labelledby=\"data-list-compact-item2\" />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-compact-item2\">Primary content - lorem ipsum</span>dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n        <div class=\"pf-c-data-list__cell\">Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n      </div>\n      <div class=\"pf-c-data-list__item-action pf-m-hidden-on-lg\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"data-list-compact-action2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"data-list-compact-action2-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action pf-m-hidden pf-m-visible-on-lg\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n      </div>\n    </div>\n  </li>\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-compact-item3\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__check\">\n          <input type=\"checkbox\" name=\"data-list-compact-check-action-check3\" aria-labelledby=\"data-list-compact-item3\" />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-compact-item3\">Primary content - lorem ipsum</span>dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n        <div class=\"pf-c-data-list__cell\">Secondary content. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</div>\n      </div>\n      <div class=\"pf-c-data-list__item-action pf-m-hidden-on-xl\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"data-list-compact-action3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"data-list-compact-action3-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action pf-m-hidden pf-m-visible-on-xl\">\n        <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n        <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n      </div>\n    </div>\n  </li>\n</ul>","title":"Compact","lang":"html"}}>
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
              {`aria-expanded="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__toggle`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
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
              {`hidden`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__expandable-content`}
            </code>
          </td>
          <td>
            {`Indicates that the expandable content is hidden. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="[descriptive text]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__toggle`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Provides an accessible name for toggle button. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby="{title_cell_id} {button_id}"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__toggle`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Establishes relationship between aria-label text and toggle button. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`id="{button_id}"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__toggle`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Provides a reference for toggle button description. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-controls="[id of element controlled]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__toggle`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Identifies the section controlled by the toggle button. `}
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
              {`.pf-c-data-list__item-control`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a container for data list controls. For example, add `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__toggle`}
            </code>
            {` here. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a toggle button.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__toggle-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates a toggle icon.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__expandable-content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates an expandable content container.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__expandable-content-body`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates an expandable content container body. `}
            <strong>
              {`Required`}
            </strong>
            {` when `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__expandable-content`}
            </code>
            {` is used.`}
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
              {`.pf-c-data-list__item`}
            </code>
          </td>
          <td>
            {`Modifies for expanded state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-compact`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list`}
            </code>
          </td>
          <td>
            {`Modifies for compact variation.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-no-padding`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__expandable-content-body`}
            </code>
          </td>
          <td>
            {`Removes padding for the expandable content body.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__cell`}
            </code>
          </td>
          <td>
            {`Modifies a data list cell to not grow and align-left when its the first data-list`}
            {`_`}
            {`_`}
            {`cell element.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsDataListCoreDocs} {...{"code":"<h2 class=\"Preview__section-title\">Default fitting - example 1</h2>\n<ul class=\"pf-c-data-list\" role=\"list\" aria-label=\"Width modifier data list example 1\" id=\"data-list-default-fitting\">\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-default-fitting-item1\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__check\">\n          <input type=\"checkbox\" name=\"data-list-default-fittingcheck-action-check1\" aria-labelledby=\"data-list-default-fitting-item1\" />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <div class=\"Preview__placeholder\">\n            <b id=\"data-list-default-fitting-item1\">default</b>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n          </div>\n        </div>\n        <div class=\"pf-c-data-list__cell\">\n          <div class=\"Preview__placeholder\">\n            <b>default</b>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </li>\n</ul>\n<h2 class=\"Preview__section-title\">Flex modifiers - example 2</h2>\n<ul class=\"pf-c-data-list\" role=\"list\" aria-label=\"Width modifier data list example 2\" id=\"data-list-flex-modifiers\">\n  <li class=\"pf-c-data-list__item\" aria-labelledby=\"data-list-flex-modifiers-item1\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__check\">\n          <input type=\"checkbox\" name=\"data-list-flex-modifierscheck-action-check1\" aria-labelledby=\"data-list-flex-modifiers-item1\" />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-flex-2\">\n          <div class=\"Preview__placeholder\">\n            <b id=\"data-list-flex-modifiers-item1\">.pf-m-flex-2</b>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>\n          </div>\n        </div>\n        <div class=\"pf-c-data-list__cell pf-m-flex-4\">\n          <div class=\"Preview__placeholder\">\n            <b>.pf-m-flex-4</b>\n            <p>Lorem ipsum dolor sit amet.</p>\n          </div>\n        </div>\n        <div class=\"pf-c-data-list__cell pf-m-flex-6\">\n          <div class=\"Preview__placeholder\">\n            <b>.pf-m-flex-6</b>\n            <p>Lorem ipsum dolor sit amet.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"data-list-flex-modifiers-action1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"data-list-flex-modifiers-action1-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </li>\n</ul>\n<h2 class=\"Preview__section-title\">Flex modifiers - example 3</h2>\n<ul class=\"pf-c-data-list\" role=\"list\" aria-label=\"Width modifier data list example 3\" id=\"data-list-flex-modifiers-2\">\n  <li class=\"pf-c-data-list__item pf-m-expanded\" aria-labelledby=\"data-list-flex-modifiers-2-item1\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"data-list-flex-modifiers-2-toggle1 data-list-flex-modifiers-2-item1\" id=\"data-list-flex-modifiers-2-toggle1\" aria-label=\"Toggle details for\" aria-expanded=\"true\" aria-controls=\"data-list-flex-modifiers-2-content1\">\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n        <div class=\"pf-c-data-list__check\">\n          <input type=\"checkbox\" name=\"data-list-flex-modifiers-2check-action-check1\" aria-labelledby=\"data-list-flex-modifiers-2-item1\" />\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell pf-m-flex-5\">\n          <div class=\"Preview__placeholder\">\n            <b id=\"data-list-flex-modifiers-2-item1\">.pf-m-flex-5</b>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n          </div>\n        </div>\n        <div class=\"pf-c-data-list__cell pf-m-flex-2\">\n          <div class=\"Preview__placeholder\">\n            <b>.pf-m-flex-2</b>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n          </div>\n        </div>\n        <div class=\"pf-c-data-list__cell pf-m-flex-3\">\n          <div class=\"Preview__placeholder\">\n            <b>.pf-m-flex-3</b>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n          </div>\n        </div>\n        <div class=\"pf-c-data-list__cell pf-m-flex-3\">\n          <div class=\"Preview__placeholder\">\n            <b>.pf-m-flex-3</b>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-action\">\n        <div class=\"pf-c-data-list__action\">\n          <div class=\"pf-c-dropdown\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"data-list-flex-modifiers-2-action1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"data-list-flex-modifiers-2-action1-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <section class=\"pf-c-data-list__expandable-content\" id=\"data-list-flex-modifiers-2-content1\" aria-label=\"Primary content details\">\n      <div class=\"pf-c-data-list__expandable-content-body\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>\n    </section>\n  </li>\n</ul>","title":"Modifiers","lang":"html"}}>
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
              {`aria-controls="[id of element controlled]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__toggle`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Identifies the section controlled by the toggle button. `}
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
              {`.pf-m-flex-{1, 2, 3, 4, 5}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__cell`}
            </code>
          </td>
          <td>
            {`Percentage based modifier for `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__cell`}
            </code>
            {` widths.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsDataListCoreDocs} {...{"code":"<ul class=\"pf-c-data-list\" role=\"list\" aria-label=\"Selectable rows data list example\" id=\"data-list-selectable-rows\">\n  <li class=\"pf-c-data-list__item pf-m-selectable\" aria-labelledby=\"data-list-selectable-rows-item1\" tabindex=\"0\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-selectable-rows-item1\">Primary content</span>\n        </div>\n      </div>\n    </div>\n  </li>\n  <li class=\"pf-c-data-list__item pf-m-selectable pf-m-selected\" aria-labelledby=\"data-list-selectable-rows-item2\" tabindex=\"0\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-selectable-rows-item2\">Secondary content (selected)</span>\n        </div>\n      </div>\n    </div>\n  </li>\n  <li class=\"pf-c-data-list__item pf-m-selectable\" aria-labelledby=\"data-list-selectable-rows-item3\" tabindex=\"0\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-selectable-rows-item3\">Tertiary content</span>\n        </div>\n      </div>\n    </div>\n  </li>\n</ul>","title":"Selectable rows","lang":"html"}}>
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
              {`tabindex="0"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__item.pf-m-selectable`}
            </code>
          </td>
          <td>
            {`Inserts the selectable row into the tab order of the page so that it is focusable. `}
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
              {`.pf-m-selectable`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-data-list__item`}
            </code>
          </td>
          <td>
            {`Modifies a data list item so that it is selectable.`}
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
              {`.pf-c-data-list__item`}
            </code>
          </td>
          <td>
            {`Modifies a data list item for the selected state.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsDataListCoreDocs} {...{"code":"<ul class=\"pf-c-data-list\" role=\"list\" aria-label=\"Selectable, expandable data list example\" id=\"data-list-selectable-expandable-rows\">\n  <li class=\"pf-c-data-list__item pf-m-selectable pf-m-selected pf-m-expanded\" aria-labelledby=\"data-list-selectable-expandable-rows-item1\" tabindex=\"0\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"data-list-selectable-expandable-rows-toggle1 data-list-selectable-expandable-rows-item1\" id=\"data-list-selectable-expandable-rows-toggle1\" aria-label=\"Toggle details for\" aria-expanded=\"true\" aria-controls=\"data-list-selectable-expandable-rows-content1\">\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-selectable-expandable-rows-item1\">Primary content (selected, expanded)</span>\n        </div>\n      </div>\n    </div>\n    <section class=\"pf-c-data-list__expandable-content\" id=\"data-list-selectable-expandable-rows-content1\" aria-label=\"Primary content details\">\n      <div class=\"pf-c-data-list__expandable-content-body\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>\n    </section>\n  </li>\n  <li class=\"pf-c-data-list__item pf-m-selectable\" aria-labelledby=\"data-list-selectable-expandable-rows-item2\" tabindex=\"0\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"data-list-selectable-expandable-rows-toggle2 data-list-selectable-expandable-rows-item2\" id=\"data-list-selectable-expandable-rows-toggle2\" aria-label=\"Toggle details for\" aria-expanded=\"false\" aria-controls=\"data-list-selectable-expandable-rows-content2\">\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-selectable-expandable-rows-item2\">Secondary content</span>\n        </div>\n      </div>\n    </div>\n    <section class=\"pf-c-data-list__expandable-content\" id=\"data-list-selectable-expandable-rows-content2\" aria-label=\"Secondary content details\" hidden>\n      <div class=\"pf-c-data-list__expandable-content-body\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>\n    </section>\n  </li>\n  <li class=\"pf-c-data-list__item pf-m-selectable pf-m-expanded\" aria-labelledby=\"data-list-selectable-expandable-rows-item3\" tabindex=\"0\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"data-list-selectable-expandable-rows-toggle3 data-list-selectable-expandable-rows-item3\" id=\"data-list-selectable-expandable-rows-toggle3\" aria-label=\"Toggle details for\" aria-expanded=\"true\" aria-controls=\"data-list-selectable-expandable-rows-content3\">\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-selectable-expandable-rows-item3\">Tertiary content (not selected, expanded)</span>\n        </div>\n      </div>\n    </div>\n    <section class=\"pf-c-data-list__expandable-content\" id=\"data-list-selectable-expandable-rows-content3\" aria-label=\"Tertiary content details\">\n      <div class=\"pf-c-data-list__expandable-content-body pf-m-no-padding\">This expanded section has no padding.</div>\n    </section>\n  </li>\n  <li class=\"pf-c-data-list__item pf-m-selectable\" aria-labelledby=\"data-list-selectable-expandable-rows-item4\" tabindex=\"0\">\n    <div class=\"pf-c-data-list__item-row\">\n      <div class=\"pf-c-data-list__item-control\">\n        <div class=\"pf-c-data-list__toggle\">\n          <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-labelledby=\"data-list-selectable-expandable-rows-toggle4 data-list-selectable-expandable-rows-item4\" id=\"data-list-selectable-expandable-rows-toggle4\" aria-label=\"Toggle details for\" aria-expanded=\"false\" aria-controls=\"data-list-selectable-expandable-rows-content4\">\n            <div class=\"pf-c-data-list__toggle-icon\">\n              <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n            </div>\n          </button>\n        </div>\n      </div>\n      <div class=\"pf-c-data-list__item-content\">\n        <div class=\"pf-c-data-list__cell\">\n          <span id=\"data-list-selectable-expandable-rows-item4\">Quaternary content (selected)</span>\n        </div>\n      </div>\n    </div>\n    <section class=\"pf-c-data-list__expandable-content\" id=\"data-list-selectable-expandable-rows-content4\" aria-label=\"Quaternary content details\" hidden>\n      <div class=\"pf-c-data-list__expandable-content-body\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>\n    </section>\n  </li>\n</ul>","title":"Selectable expandable rows","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The DataList component provides a flexible alternative to the Table component, wherein individual data points may or may not exist within each row. DataList relies upon PatternFly layouts to achieve desired presentation within `}
      <code {...{"className":"ws-code"}}>
        {`pf-c-data-list__cell`}
      </code>
      {`s. DataLists do not have headers. If headers are required, use the `}
      <PatternflyThemeLink {...{"to":"/documentation/core/components/table"}}>
        {`table component`}
      </PatternflyThemeLink>
      {`.`}
    </p>
  </React.Fragment>
);
DocumentationComponentsDataListCoreDocs.Component.displayName = 'DocumentationComponentsDataListCoreDocs';
