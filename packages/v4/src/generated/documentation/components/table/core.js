import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/components/Table/examples/./Table.css'

export const DocumentationComponentsTableCoreDocs = {
  "slug": "/documentation/components/table/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Table/examples/Table.md",
  "section": "components",
  "id": "Table",
  "title": "Table",
  "toc": [
    "Examples",
    "Controlling text",
    "The table-text element",
    "Long strings in table cells will push content. Add a width modifier to ",
    "Documentation"
  ],
  "cssPrefix": "pf-c-table"
};
DocumentationComponentsTableCoreDocs.liveContext = {
  
};
DocumentationComponentsTableCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsTableCoreDocs} {...{"code":"<table class=\"pf-c-table pf-m-grid-md\" role=\"grid\" aria-label=\"This is a simple table example\" id=\"table-basic\">\n  <caption>This is the table caption</caption>\n  <thead>\n    <tr role=\"row\">\n      <th role=\"columnheader\" scope=\"col\">Repositories</th>\n      <th role=\"columnheader\" scope=\"col\">Branches</th>\n      <th role=\"columnheader\" scope=\"col\">Pull requests</th>\n      <th role=\"columnheader\" scope=\"col\">Workspaces</th>\n      <th role=\"columnheader\" scope=\"col\">Last commit</th>\n    </tr>\n  </thead>\n  <tbody role=\"rowgroup\">\n    <tr role=\"row\">\n      <td role=\"cell\" data-label=\"Repository name\">Repository 1</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n    <tr role=\"row\">\n      <td role=\"cell\" data-label=\"Repository name\">Repository 2</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n    <tr role=\"row\">\n      <td role=\"cell\" data-label=\"Repository name\">Repository 3</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n    <tr role=\"row\">\n      <td role=\"cell\" data-label=\"Repository name\">Repository 4</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n  </tbody>\n</table>","title":"Basic table","lang":"html"}}>
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
              {`role="grid"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table`}
            </code>
          </td>
          <td>
            {`Identifies the element that serves as the grid widget container. `}
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
              {`.pf-c-table`}
            </code>
          </td>
          <td>
            {`Provides an accessible name for the table when a descriptive `}
            <code {...{"className":"ws-code"}}>
              {`<caption>`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`<h*>`}
            </code>
            {` is not available. `}
            <strong>
              {`Required in the absence of `}
              <code {...{"className":"ws-code"}}>
                {`<caption>`}
              </code>
              {` or `}
              <code {...{"className":"ws-code"}}>
                {`<h*>`}
              </code>
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`data-label="[td description]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<td>`}
            </code>
          </td>
          <td>
            {`This attribute replaces table header in mobile viewport. It is rendered by `}
            <code {...{"className":"ws-code"}}>
              {`::before`}
            </code>
            {` pseudo element.`}
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
              {`.pf-c-table`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<table>`}
            </code>
          </td>
          <td>
            {`Initiates a table element. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__caption`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<caption>`}
            </code>
          </td>
          <td>
            {`Initiates a table caption.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-center`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<th>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<td>`}
            </code>
          </td>
          <td>
            {`Modifies cell to center its contents.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsTableCoreDocs} {...{"code":"<table class=\"pf-c-table pf-m-grid-lg\" role=\"grid\" aria-label=\"This is a sortable table example\" id=\"table-sortable\">\n  <thead>\n    <tr role=\"row\">\n      <th class=\"pf-c-table__sort pf-m-selected\" role=\"columnheader\" aria-sort=\"ascending\" scope=\"col\">\n        <button class=\"pf-c-table__button\">\n          <div class=\"pf-c-table__button-content\">\n            <span class=\"pf-c-table__text\">Repositories</span>\n            <span class=\"pf-c-table__sort-indicator\">\n              <i class=\"fas fa-long-arrow-alt-up\"></i>\n            </span>\n          </div>\n        </button>\n      </th>\n      <th class=\"pf-c-table__sort \" role=\"columnheader\" aria-sort=\"none\" scope=\"col\">\n        <div class=\"pf-c-table__column-help\">\n          <button class=\"pf-c-table__button\">\n            <div class=\"pf-c-table__button-content\">\n              <span class=\"pf-c-table__text\">Branches</span>\n              <span class=\"pf-c-table__sort-indicator\">\n                <i class=\"fas fa-arrows-alt-v\"></i>\n              </span>\n            </div>\n          </button>\n          <span class=\"pf-c-table__column-help-action\">\n            <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"More info\">\n              <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n            </button>\n          </span>\n        </div>\n      </th>\n      <th class=\"pf-c-table__sort \" role=\"columnheader\" aria-sort=\"none\" scope=\"col\">\n        <button class=\"pf-c-table__button\">\n          <div class=\"pf-c-table__button-content\">\n            <span class=\"pf-c-table__text\">Pull requests</span>\n            <span class=\"pf-c-table__sort-indicator\">\n              <i class=\"fas fa-arrows-alt-v\"></i>\n            </span>\n          </div>\n        </button>\n      </th>\n      <th role=\"columnheader\" scope=\"col\">Workspaces</th>\n      <th role=\"columnheader\" scope=\"col\">\n        <div class=\"pf-c-table__column-help\">Last commit\n          <span class=\"pf-c-table__column-help-action\">\n            <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"More info\">\n              <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n            </button>\n          </span>\n        </div>\n      </th>\n    </tr>\n  </thead>\n  <tbody role=\"rowgroup\">\n    <tr role=\"row\">\n      <td role=\"cell\" data-label=\"Repository name\">Repository 1</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n    <tr role=\"row\">\n      <td role=\"cell\" data-label=\"Repository name\">Repository 2</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n    <tr role=\"row\">\n      <td role=\"cell\" data-label=\"Repository name\">Repository 3</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n    <tr role=\"row\">\n      <td role=\"cell\" data-label=\"Repository name\">Repository 4</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n  </tbody>\n</table>","title":"Sortable","lang":"html"}}>
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
              {`aria-sort=[ascending or descending]`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__sort`}
            </code>
          </td>
          <td>
            {`Indicates if columns in a table are sorted in ascending or descending order. For each table, authors `}
            <strong>
              {`SHOULD`}
            </strong>
            {` apply aria-sort to only one header at a time. `}
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
              {`.pf-c-table__sort`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<th>`}
            </code>
          </td>
          <td>
            {`Initiates a table header sort cell. `}
            <strong>
              {`Required for sortable table columns`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__button`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates a table header sort cell button. `}
            <strong>
              {`Required for sortable table columns`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__button-content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a table header sort cell button content container. `}
            <strong>
              {`Required for sortable table columns`}
            </strong>
            {` Note: this is only necessary because `}
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
            {` does not support`}
            <code {...{"className":"ws-code"}}>
              {`display: grid`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__sort-indicator`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__sort > button > span`}
            </code>
          </td>
          <td>
            {`Initiates a sort indicator. `}
            <strong>
              {`Required for sortable table columns`}
            </strong>
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
              {`.pf-c-table__sort`}
            </code>
          </td>
          <td>
            {`Modifies for sort selected state. `}
            <strong>
              {`Required for sortable table columns`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.fa-arrows-alt-v`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__sort > button > span > .fas`}
            </code>
          </td>
          <td>
            {`Initiates icon within unsorted, sortable table header. `}
            <strong>
              {`Required for sortable table columns`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.fa-long-arrow-alt-up`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__sort > button > span > .fas`}
            </code>
          </td>
          <td>
            {`Initiates icon within ascending sorted and selected, sortable table header. `}
            <strong>
              {`Required for sortable table columns`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.fa-long-arrow-alt-down`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__sort > button > span > .fas`}
            </code>
          </td>
          <td>
            {`Initiates icon within descending sorted and selected, sortable table header. `}
            <strong>
              {`Required for sortable table columns`}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsTableCoreDocs} {...{"code":"<table class=\"pf-c-table pf-m-grid-lg\" role=\"grid\" aria-label=\"This is a table with checkboxes\" id=\"table-checkboxes-and-actions\">\n  <thead>\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-checkboxes-and-actions-check-all\" aria-label=\"Select all rows\" />\n      </td>\n      <th role=\"columnheader\" scope=\"col\">Repositories</th>\n      <th role=\"columnheader\" scope=\"col\">Branches</th>\n      <th role=\"columnheader\" scope=\"col\">Pull requests</th>\n      <th role=\"columnheader\" scope=\"col\">Workspaces</th>\n      <th role=\"columnheader\" scope=\"col\">Last commit</th>\n      <td></td>\n    </tr>\n  </thead>\n  <tbody role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-checkboxes-and-actions-checkrow1\" aria-labelledby=\"table-checkboxes-and-actions-node1\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Repository name\">\n        <div id=\"table-checkboxes-and-actions-node1\">Node 1</div>\n      </th>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-checkboxes-and-actions-dropdown-kebab-right-aligned-1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-checkboxes-and-actions-dropdown-kebab-right-aligned-1-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-checkboxes-and-actions-checkrow2\" aria-labelledby=\"table-checkboxes-and-actions-node2\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Repository name\">\n        <div>\n          <div id=\"table-checkboxes-and-actions-node2\">Node 2</div>\n          <a href=\"#\">siemur/test-space</a>\n        </div>\n      </th>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-checkboxes-and-actions-dropdown-kebab-right-aligned-2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-checkboxes-and-actions-dropdown-kebab-right-aligned-2-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-checkboxes-and-actions-checkrow3\" aria-labelledby=\"table-checkboxes-and-actions-node3\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Repository name\">\n        <div>\n          <div id=\"table-checkboxes-and-actions-node3\">Node 3</div>\n          <a href=\"#\">siemur/test-space</a>\n        </div>\n      </th>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-checkboxes-and-actions-dropdown-kebab-right-aligned-3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-checkboxes-and-actions-dropdown-kebab-right-aligned-3-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-checkboxes-and-actions-checkrow4\" aria-labelledby=\"table-checkboxes-and-actions-node4\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Repository name\">\n        <div>\n          <div id=\"table-checkboxes-and-actions-node4\">Node 4</div>\n          <a href=\"#\">siemur/test-space</a>\n        </div>\n      </th>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-checkboxes-and-actions-dropdown-kebab-right-aligned-4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-checkboxes-and-actions-dropdown-kebab-right-aligned-4-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>","title":"With checkboxes and actions","lang":"html"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`When including interactive elements in a table, the primary, descriptive cell in the corresponding row is a `}
      <code {...{"className":"ws-code"}}>
        {`<th>`}
      </code>
      {`, rather than a `}
      <code {...{"className":"ws-code"}}>
        {`<td>`}
      </code>
      {`. In this example, 'Node 1' and 'Node 2 siemur/test-space' are `}
      <code {...{"className":"ws-code"}}>
        {`<th>`}
      </code>
      {`s.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When header cells are empty or they contain interactive elements, `}
      <code {...{"className":"ws-code"}}>
        {`<th>`}
      </code>
      {` should be replaced with `}
      <code {...{"className":"ws-code"}}>
        {`<td>`}
      </code>
      {`.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Thead accessibility`}
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
              {`.pf-c-table__check input[type="checkbox"]`}
            </code>
          </td>
          <td>
            {`Provides an accessible name for the checkbox. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Tbody accessibility`}
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
              {`aria-labelledby="[row_header_id]"`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`aria-label="[descriptive text]`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__check input[type="checkbox"]`}
            </code>
          </td>
          <td>
            {`Provides an accessible name for the checkbox. `}
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
            {`row header `}
            <code {...{"className":"ws-code"}}>
              {`<th>`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Provides an accessible description for the checkbox. `}
            <strong>
              {`Required if using `}
              <code {...{"className":"ws-code"}}>
                {`aria-labelledby`}
              </code>
              {` for `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-table__check input[type="checkbox"]`}
              </code>
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
              {`.pf-c-table__check`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<th>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<td>`}
            </code>
          </td>
          <td>
            {`Initiates a check table cell.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__action`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<th>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<td>`}
            </code>
          </td>
          <td>
            {`Initiates an action table cell.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__inline-edit-action`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<th>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<td>`}
            </code>
          </td>
          <td>
            {`Initiates an inline edit action table cell.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsTableCoreDocs} {...{"code":"<table class=\"pf-c-table pf-m-expandable pf-m-grid-lg\" role=\"grid\" aria-label=\"Expandable table example\" id=\"table-expandable\">\n  <thead>\n    <tr role=\"row\">\n      <td></td>\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-expandable-check-all\" aria-label=\"Select all rows\" />\n      </td>\n      <th class=\"pf-m-width-30 pf-c-table__sort pf-m-selected\" role=\"columnheader\" aria-sort=\"ascending\" scope=\"col\">\n        <button class=\"pf-c-table__button\">\n          <div class=\"pf-c-table__button-content\">\n            <span class=\"pf-c-table__text\">Repositories</span>\n            <span class=\"pf-c-table__sort-indicator\">\n              <i class=\"fas fa-long-arrow-alt-up\"></i>\n            </span>\n          </div>\n        </button>\n      </th>\n      <th class=\"pf-c-table__sort \" role=\"columnheader\" aria-sort=\"none\" scope=\"col\">\n        <button class=\"pf-c-table__button\">\n          <div class=\"pf-c-table__button-content\">\n            <span class=\"pf-c-table__text\">Branches</span>\n            <span class=\"pf-c-table__sort-indicator\">\n              <i class=\"fas fa-arrows-alt-v\"></i>\n            </span>\n          </div>\n        </button>\n      </th>\n      <th class=\"pf-c-table__sort \" role=\"columnheader\" aria-sort=\"none\" scope=\"col\">\n        <button class=\"pf-c-table__button\">\n          <div class=\"pf-c-table__button-content\">\n            <span class=\"pf-c-table__text\">Pull requests</span>\n            <span class=\"pf-c-table__sort-indicator\">\n              <i class=\"fas fa-arrows-alt-v\"></i>\n            </span>\n          </div>\n        </button>\n      </th>\n      <td></td>\n      <td></td>\n    </tr>\n  </thead>\n  <tbody class=\"pf-m-expanded\" role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-c-table__toggle\" role=\"cell\">\n        <button class=\"pf-c-button pf-m-plain pf-m-expanded\" aria-labelledby=\"table-expandable-node1 table-expandable-expandable-toggle1\" id=\"table-expandable-expandable-toggle1\" aria-label=\"Details\" aria-controls=\"table-expandable-content1\" aria-expanded=\"true\">\n          <div class=\"pf-c-table__toggle-icon\">\n            <i class=\"fas fa-angle-down\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </td>\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-expandable-checkrow1\" aria-labelledby=\"table-expandable-node1\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Repository name\">\n        <div>\n          <div id=\"table-expandable-node1\">Node 1</div>\n          <a href=\"#\">siemur/test-space</a>\n        </div>\n      </th>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Link 1</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-expandable-dropdown-kebab-right-aligned-1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-expandable-dropdown-kebab-right-aligned-1-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row pf-m-expanded\" role=\"row\">\n      <td></td>\n      <td></td>\n      <td role=\"cell\" colspan=\"4\" id=\"table-expandable-content1\">\n        <div class=\"pf-c-table__expandable-row-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>\n      </td>\n      <td></td>\n    </tr>\n  </tbody>\n  <tbody role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-c-table__toggle\" role=\"cell\">\n        <button class=\"pf-c-button pf-m-plain\" aria-labelledby=\"table-expandable-node2 table-expandable-expandable-toggle2\" id=\"table-expandable-expandable-toggle2\" aria-label=\"Details\" aria-controls=\"table-expandable-content2\">\n          <div class=\"pf-c-table__toggle-icon\">\n            <i class=\"fas fa-angle-down\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </td>\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-expandable-checkrow2\" aria-labelledby=\"table-expandable-node2\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Repository name\">\n        <div>\n          <div id=\"table-expandable-node2\">Node 2</div>\n          <a href=\"#\">siemur/test-space</a>\n        </div>\n      </th>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Link 2</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-expandable-dropdown-kebab-right-aligned-2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-expandable-dropdown-kebab-right-aligned-2-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row\" role=\"row\">\n      <td role=\"cell\" colspan=\"7\" id=\"table-expandable-content2\">\n        <div class=\"pf-c-table__expandable-row-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>\n      </td>\n    </tr>\n  </tbody>\n  <tbody class=\"pf-m-expanded\" role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-c-table__toggle\" role=\"cell\">\n        <button class=\"pf-c-button pf-m-plain pf-m-expanded\" aria-labelledby=\"table-expandable-node3 expandable-toggle3\" id=\"expandable-toggle3\" aria-label=\"Details\" aria-controls=\"table-expandable-content3\" aria-expanded=\"true\">\n          <div class=\"pf-c-table__toggle-icon\">\n            <i class=\"fas fa-angle-down\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </td>\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-expandable-checkrow3\" aria-labelledby=\"table-expandable-node3\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Repository name\">\n        <div>\n          <div id=\"table-expandable-node3\">Node 3</div>\n          <a href=\"#\">siemur/test-space</a>\n        </div>\n      </th>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Link 3</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-expandable-dropdown-kebab-right-aligned-3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-expandable-dropdown-kebab-right-aligned-3-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row pf-m-expanded\" role=\"row\">\n      <td role=\"cell\" colspan=\"7\" id=\"table-expandable-content3\">\n        <div class=\"pf-c-table__expandable-row-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>\n      </td>\n    </tr>\n  </tbody>\n  <tbody class=\"pf-m-expanded\" role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-c-table__toggle\" role=\"cell\">\n        <button class=\"pf-c-button pf-m-plain pf-m-expanded\" aria-labelledby=\"table-expandable-node4 expandable-toggle4\" id=\"expandable-toggle4\" aria-label=\"Details\" aria-controls=\"table-expandable-content4\" aria-expanded=\"true\">\n          <div class=\"pf-c-table__toggle-icon\">\n            <i class=\"fas fa-angle-down\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </td>\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-expandable-checkrow4\" aria-labelledby=\"table-expandable-node4\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Repository name\">\n        <div>\n          <div id=\"table-expandable-node4\">Node 4</div>\n          <a href=\"#\">siemur/test-space</a>\n        </div>\n      </th>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Link 4</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-expandable-dropdown-kebab-right-aligned-4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-expandable-dropdown-kebab-right-aligned-4-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row pf-m-expanded\" role=\"row\">\n      <td class=\"pf-m-no-padding\" role=\"cell\" colspan=\"7\" id=\"table-expandable-content4\">\n        <div class=\"pf-c-table__expandable-row-content\">Expandable row content has no padding.</div>\n      </td>\n    </tr>\n  </tbody>\n</table>","title":"Expandable","lang":"html"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`Note: To apply padding to `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-table__expandable-row`}
      </code>
      {`, wrap the content in `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-table__expandable-row-content`}
      </code>
      {`. For no padding add `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-no-padding`}
      </code>
      {` to `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-table__expandable-row`}
      </code>
      {` > `}
      <code {...{"className":"ws-code"}}>
        {`<td>`}
      </code>
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
              {`.pf-c-table__expandable-row`}
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
              {`aria-expanded="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__toggle`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Indicates that the row is visible. `}
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
              {`.pf-c-table__toggle`}
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
              {`aria-labelledby="[title_cell_id] [button_id]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__toggle`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Provides an accessible description for toggle button. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`id="[button_id]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__toggle`}
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
              {`aria-controls="[id of element the button controls]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__toggle`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Identifies the expanded content controlled by the toggle button. `}
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
              {`.pf-c-table__toggle-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the table toggle icon wrapper.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__expandable-row`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<tr>`}
            </code>
          </td>
          <td>
            {`Initiates an expandable row.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__expandable-row-content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__expandable-row`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`<td>`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates an expandable row content wrapper.`}
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
              {`.pf-c-table__toggle`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__expandable-row`}
            </code>
          </td>
          <td>
            {`Modifies for expanded state.`}
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
              {`.pf-c-table__expandable-row`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`<td>`}
            </code>
          </td>
          <td>
            {`Modifies the expandable row to have no padding.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsTableCoreDocs} {...{"code":"<table class=\"pf-c-table pf-m-expandable pf-m-grid-md\" role=\"grid\" aria-label=\"Compound expandable table example\" id=\"table-compound-expansion\">\n  <thead>\n    <tr role=\"row\">\n      <th class=\"pf-c-table__sort pf-m-selected\" role=\"columnheader\" aria-sort=\"ascending\" scope=\"col\">\n        <button class=\"pf-c-table__button\">\n          <div class=\"pf-c-table__button-content\">\n            <span class=\"pf-c-table__text\">Repositories</span>\n            <span class=\"pf-c-table__sort-indicator\">\n              <i class=\"fas fa-long-arrow-alt-up\"></i>\n            </span>\n          </div>\n        </button>\n      </th>\n      <th class=\"pf-c-table__sort \" role=\"columnheader\" aria-sort=\"none\" scope=\"col\">\n        <button class=\"pf-c-table__button\">\n          <div class=\"pf-c-table__button-content\">\n            <span class=\"pf-c-table__text\">Branches</span>\n            <span class=\"pf-c-table__sort-indicator\">\n              <i class=\"fas fa-arrows-alt-v\"></i>\n            </span>\n          </div>\n        </button>\n      </th>\n      <th class=\"pf-c-table__sort \" role=\"columnheader\" aria-sort=\"none\" scope=\"col\">\n        <button class=\"pf-c-table__button\">\n          <div class=\"pf-c-table__button-content\">\n            <span class=\"pf-c-table__text\">Pull requests</span>\n            <span class=\"pf-c-table__sort-indicator\">\n              <i class=\"fas fa-arrows-alt-v\"></i>\n            </span>\n          </div>\n        </button>\n      </th>\n      <th role=\"columnheader\" scope=\"col\">Workspaces</th>\n      <th role=\"columnheader\" scope=\"col\">Last commit</th>\n      <td></td>\n      <td></td>\n    </tr>\n  </thead>\n  <tbody class=\"pf-m-expanded\" role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-c-table__compound-expansion-toggle pf-m-expanded\" role=\"cell\" data-label=\"Repositories\">\n        <button class=\"pf-c-table__button\">\n          <span class=\"pf-c-table__text\">\n            <i class=\"fas fa-code-branch\" aria-hidden=\"true\"></i>\n&nbsp;10\n          </span>\n        </button>\n      </td>\n      <td class=\"pf-c-table__compound-expansion-toggle \" role=\"cell\" data-label=\"Branches\">\n        <button class=\"pf-c-table__button\">\n          <span class=\"pf-c-table__text\">\n            <i class=\"fas fa-code\" aria-hidden=\"true\"></i>\n&nbsp; 234\n          </span>\n        </button>\n      </td>\n      <td class=\"pf-c-table__compound-expansion-toggle \" role=\"cell\" data-label=\"Pull requests\">\n        <button class=\"pf-c-table__button\">\n          <span class=\"pf-c-table__text\">\n            <i class=\"fas fa-cube\" aria-hidden=\"true\"></i>\n&nbsp; 4\n          </span>\n        </button>\n      </td>\n      <th role=\"columnheader\" data-label=\"Workspaces\">\n        <a href=\"#\">siemur/test-space</a>\n      </th>\n      <td role=\"cell\" data-label=\"Last commit\">\n        <span>20 minutes</span>\n      </td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Open in Github</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-dropdown-kebab-right-aligned-1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-dropdown-kebab-right-aligned-1-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row pf-m-expanded\" role=\"row\">\n      <td class=\"pf-m-no-padding\" role=\"cell\" colspan=\"7\">\n        <table class=\"pf-c-table pf-m-compact pf-m-no-border-rows\" role=\"grid\" id=\"table-compound-expansion-nested-table-1\" aria-label=\"Nested table\" id=\"table-compound-expansion-nested-table-1\">\n          <thead>\n            <tr role=\"row\">\n              <th class=\"pf-c-table__sort \" role=\"columnheader\" aria-sort=\"none\" scope=\"col\">\n                <button class=\"pf-c-table__button\">\n                  <div class=\"pf-c-table__button-content\">\n                    <span class=\"pf-c-table__text\">Description</span>\n                    <span class=\"pf-c-table__sort-indicator\">\n                      <i class=\"fas fa-arrows-alt-v\"></i>\n                    </span>\n                  </div>\n                </button>\n              </th>\n              <th role=\"columnheader\" scope=\"col\">Date</th>\n              <th role=\"columnheader\" scope=\"col\">Status</th>\n              <td role=\"cell\"></td>\n            </tr>\n          </thead>\n          <tbody role=\"rowgroup\">\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item one</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr1-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item two</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Warning</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr2-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item three</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr3-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item four</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr4-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item five</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr5-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-1-dropdown-kebab-nested-tr5-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row\" role=\"row\">\n      <td class=\"pf-m-no-padding\" role=\"cell\" colspan=\"7\">\n        <table class=\"pf-c-table pf-m-compact pf-m-no-border-rows\" role=\"grid\" id=\"table-compound-expansion-nested-table-2\" aria-label=\"Nested table\" id=\"table-compound-expansion-nested-table-2\">\n          <thead>\n            <tr role=\"row\">\n              <th class=\"pf-c-table__sort \" role=\"columnheader\" aria-sort=\"none\" scope=\"col\">\n                <button class=\"pf-c-table__button\">\n                  <div class=\"pf-c-table__button-content\">\n                    <span class=\"pf-c-table__text\">Description</span>\n                    <span class=\"pf-c-table__sort-indicator\">\n                      <i class=\"fas fa-arrows-alt-v\"></i>\n                    </span>\n                  </div>\n                </button>\n              </th>\n              <th role=\"columnheader\" scope=\"col\">Date</th>\n              <th role=\"columnheader\" scope=\"col\">Status</th>\n              <td role=\"cell\"></td>\n            </tr>\n          </thead>\n          <tbody role=\"rowgroup\">\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item one</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr1-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item two</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Warning</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr2-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item three</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr3-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item four</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr4-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item five</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr5-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-2-dropdown-kebab-nested-tr5-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row\" role=\"row\">\n      <td class=\"pf-m-no-padding\" role=\"cell\" colspan=\"7\">\n        <table class=\"pf-c-table pf-m-compact pf-m-no-border-rows\" role=\"grid\" id=\"table-compound-expansion-nested-table-3\" aria-label=\"Nested table\" id=\"table-compound-expansion-nested-table-3\">\n          <thead>\n            <tr role=\"row\">\n              <th class=\"pf-c-table__sort \" role=\"columnheader\" aria-sort=\"none\" scope=\"col\">\n                <button class=\"pf-c-table__button\">\n                  <div class=\"pf-c-table__button-content\">\n                    <span class=\"pf-c-table__text\">Description</span>\n                    <span class=\"pf-c-table__sort-indicator\">\n                      <i class=\"fas fa-arrows-alt-v\"></i>\n                    </span>\n                  </div>\n                </button>\n              </th>\n              <th role=\"columnheader\" scope=\"col\">Date</th>\n              <th role=\"columnheader\" scope=\"col\">Status</th>\n              <td role=\"cell\"></td>\n            </tr>\n          </thead>\n          <tbody role=\"rowgroup\">\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item one</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr1-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item two</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Warning</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr2-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item three</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr3-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item four</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr4-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item five</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr5-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-3-dropdown-kebab-nested-tr5-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </td>\n    </tr>\n  </tbody>\n  <tbody role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-c-table__compound-expansion-toggle \" role=\"cell\" data-label=\"Repositories\">\n        <button class=\"pf-c-table__button\">\n          <span class=\"pf-c-table__text\">\n            <i class=\"fas fa-code-branch\" aria-hidden=\"true\"></i>\n&nbsp; 2\n          </span>\n        </button>\n      </td>\n      <td class=\"pf-c-table__compound-expansion-toggle \" role=\"cell\" data-label=\"Branches\">\n        <button class=\"pf-c-table__button\">\n          <span class=\"pf-c-table__text\">\n            <i class=\"fas fa-code\" aria-hidden=\"true\"></i>\n&nbsp; 82\n          </span>\n        </button>\n      </td>\n      <td class=\"pf-c-table__compound-expansion-toggle \" role=\"cell\" data-label=\"Pull requests\">\n        <button class=\"pf-c-table__button\">\n          <span class=\"pf-c-table__text\">\n            <i class=\"fas fa-cube\" aria-hidden=\"true\"></i>\n&nbsp; 1\n          </span>\n        </button>\n      </td>\n      <th role=\"columnheader\" data-label=\"Workspaces\">\n        <a href=\"#\">siemur/test-space</a>\n      </th>\n      <td role=\"cell\" data-label=\"Last commit\">\n        <span>1 day ago</span>\n      </td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Open in Github</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-dropdown-kebab-right-aligned-2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-dropdown-kebab-right-aligned-2-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row\" role=\"row\">\n      <td class=\"pf-m-no-padding\" role=\"cell\" colspan=\"7\">\n        <table class=\"pf-c-table pf-m-compact pf-m-no-border-rows\" role=\"grid\" id=\"table-compound-expansion-nested-table-4\" aria-label=\"Nested table\" id=\"table-compound-expansion-nested-table-4\">\n          <thead>\n            <tr role=\"row\">\n              <th class=\"pf-c-table__sort \" role=\"columnheader\" aria-sort=\"none\" scope=\"col\">\n                <button class=\"pf-c-table__button\">\n                  <div class=\"pf-c-table__button-content\">\n                    <span class=\"pf-c-table__text\">Description</span>\n                    <span class=\"pf-c-table__sort-indicator\">\n                      <i class=\"fas fa-arrows-alt-v\"></i>\n                    </span>\n                  </div>\n                </button>\n              </th>\n              <th role=\"columnheader\" scope=\"col\">Date</th>\n              <th role=\"columnheader\" scope=\"col\">Status</th>\n              <td role=\"cell\"></td>\n            </tr>\n          </thead>\n          <tbody role=\"rowgroup\">\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item one</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr1-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item two</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Warning</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr2-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item three</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr3-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item four</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr4-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item five</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr5-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-4-dropdown-kebab-nested-tr5-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row\" role=\"row\">\n      <td class=\"pf-m-no-padding\" role=\"cell\" colspan=\"7\">\n        <table class=\"pf-c-table pf-m-compact pf-m-no-border-rows\" role=\"grid\" id=\"table-compound-expansion-nested-table-5\" aria-label=\"Nested table\" id=\"table-compound-expansion-nested-table-5\">\n          <thead>\n            <tr role=\"row\">\n              <th class=\"pf-c-table__sort \" role=\"columnheader\" aria-sort=\"none\" scope=\"col\">\n                <button class=\"pf-c-table__button\">\n                  <div class=\"pf-c-table__button-content\">\n                    <span class=\"pf-c-table__text\">Description</span>\n                    <span class=\"pf-c-table__sort-indicator\">\n                      <i class=\"fas fa-arrows-alt-v\"></i>\n                    </span>\n                  </div>\n                </button>\n              </th>\n              <th role=\"columnheader\" scope=\"col\">Date</th>\n              <th role=\"columnheader\" scope=\"col\">Status</th>\n              <td role=\"cell\"></td>\n            </tr>\n          </thead>\n          <tbody role=\"rowgroup\">\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item one</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr1-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item two</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Warning</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr2-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item three</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr3-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item four</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr4-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item five</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr5-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-5-dropdown-kebab-nested-tr5-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row\" role=\"row\">\n      <td class=\"pf-m-no-padding\" role=\"cell\" colspan=\"7\">\n        <table class=\"pf-c-table pf-m-compact pf-m-no-border-rows\" role=\"grid\" id=\"table-compound-expansion-nested-table-6\" aria-label=\"Nested table\" id=\"table-compound-expansion-nested-table-6\">\n          <thead>\n            <tr role=\"row\">\n              <th class=\"pf-c-table__sort \" role=\"columnheader\" aria-sort=\"none\" scope=\"col\">\n                <button class=\"pf-c-table__button\">\n                  <div class=\"pf-c-table__button-content\">\n                    <span class=\"pf-c-table__text\">Description</span>\n                    <span class=\"pf-c-table__sort-indicator\">\n                      <i class=\"fas fa-arrows-alt-v\"></i>\n                    </span>\n                  </div>\n                </button>\n              </th>\n              <th role=\"columnheader\" scope=\"col\">Date</th>\n              <th role=\"columnheader\" scope=\"col\">Status</th>\n              <td role=\"cell\"></td>\n            </tr>\n          </thead>\n          <tbody role=\"rowgroup\">\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item one</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr1-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item two</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Warning</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr2-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item three</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr3-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item four</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr4-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item five</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr5-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-6-dropdown-kebab-nested-tr5-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </td>\n    </tr>\n  </tbody>\n  <tbody role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-c-table__compound-expansion-toggle \" role=\"cell\" data-label=\"Repositories\">\n        <button class=\"pf-c-table__button\">\n          <span class=\"pf-c-table__text\">\n            <i class=\"fas fa-code-branch\" aria-hidden=\"true\"></i>\n&nbsp; 4\n          </span>\n        </button>\n      </td>\n      <td class=\"pf-c-table__compound-expansion-toggle \" role=\"cell\" data-label=\"Branches\">\n        <button class=\"pf-c-table__button\">\n          <span class=\"pf-c-table__text\">\n            <i class=\"fas fa-code\" aria-hidden=\"true\"></i>\n&nbsp; 4\n          </span>\n        </button>\n      </td>\n      <td class=\"pf-c-table__compound-expansion-toggle \" role=\"cell\" data-label=\"Pull requests\">\n        <button class=\"pf-c-table__button\">\n          <span class=\"pf-c-table__text\">\n            <i class=\"fas fa-cube\" aria-hidden=\"true\"></i>\n&nbsp; 1\n          </span>\n        </button>\n      </td>\n      <th role=\"columnheader\" data-label=\"Workspaces\">\n        <a href=\"#\">siemur/test-space</a>\n      </th>\n      <td role=\"cell\" data-label=\"Last commit\">\n        <span>2 days ago</span>\n      </td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Open in Github</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-dropdown-kebab-right-aligned-3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-dropdown-kebab-right-aligned-3-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row\" role=\"row\">\n      <td class=\"pf-m-no-padding\" role=\"cell\" colspan=\"7\">\n        <table class=\"pf-c-table pf-m-compact pf-m-no-border-rows\" role=\"grid\" id=\"table-compound-expansion-nested-table-7\" aria-label=\"Nested table\" id=\"table-compound-expansion-nested-table-7\">\n          <thead>\n            <tr role=\"row\">\n              <th class=\"pf-c-table__sort \" role=\"columnheader\" aria-sort=\"none\" scope=\"col\">\n                <button class=\"pf-c-table__button\">\n                  <div class=\"pf-c-table__button-content\">\n                    <span class=\"pf-c-table__text\">Description</span>\n                    <span class=\"pf-c-table__sort-indicator\">\n                      <i class=\"fas fa-arrows-alt-v\"></i>\n                    </span>\n                  </div>\n                </button>\n              </th>\n              <th role=\"columnheader\" scope=\"col\">Date</th>\n              <th role=\"columnheader\" scope=\"col\">Status</th>\n              <td role=\"cell\"></td>\n            </tr>\n          </thead>\n          <tbody role=\"rowgroup\">\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item one</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr1-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item two</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Warning</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr2-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item three</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr3-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item four</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr4-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item five</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr5-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-7-dropdown-kebab-nested-tr5-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row\" role=\"row\">\n      <td class=\"pf-m-no-padding\" role=\"cell\" colspan=\"7\">\n        <table class=\"pf-c-table pf-m-compact pf-m-no-border-rows\" role=\"grid\" id=\"table-compound-expansion-nested-table-8\" aria-label=\"Nested table\" id=\"table-compound-expansion-nested-table-8\">\n          <thead>\n            <tr role=\"row\">\n              <th class=\"pf-c-table__sort \" role=\"columnheader\" aria-sort=\"none\" scope=\"col\">\n                <button class=\"pf-c-table__button\">\n                  <div class=\"pf-c-table__button-content\">\n                    <span class=\"pf-c-table__text\">Description</span>\n                    <span class=\"pf-c-table__sort-indicator\">\n                      <i class=\"fas fa-arrows-alt-v\"></i>\n                    </span>\n                  </div>\n                </button>\n              </th>\n              <th role=\"columnheader\" scope=\"col\">Date</th>\n              <th role=\"columnheader\" scope=\"col\">Status</th>\n              <td role=\"cell\"></td>\n            </tr>\n          </thead>\n          <tbody role=\"rowgroup\">\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item one</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr1-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item two</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Warning</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr2-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item three</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr3-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item four</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr4-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item five</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr5-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-8-dropdown-kebab-nested-tr5-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row\" role=\"row\">\n      <td class=\"pf-m-no-padding\" role=\"cell\" colspan=\"7\">\n        <table class=\"pf-c-table pf-m-compact pf-m-no-border-rows\" role=\"grid\" id=\"table-compound-expansion-nested-table-9\" aria-label=\"Nested table\" id=\"table-compound-expansion-nested-table-9\">\n          <thead>\n            <tr role=\"row\">\n              <th class=\"pf-c-table__sort \" role=\"columnheader\" aria-sort=\"none\" scope=\"col\">\n                <button class=\"pf-c-table__button\">\n                  <div class=\"pf-c-table__button-content\">\n                    <span class=\"pf-c-table__text\">Description</span>\n                    <span class=\"pf-c-table__sort-indicator\">\n                      <i class=\"fas fa-arrows-alt-v\"></i>\n                    </span>\n                  </div>\n                </button>\n              </th>\n              <th role=\"columnheader\" scope=\"col\">Date</th>\n              <th role=\"columnheader\" scope=\"col\">Status</th>\n              <td role=\"cell\"></td>\n            </tr>\n          </thead>\n          <tbody role=\"rowgroup\">\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item one</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr1-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item two</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Warning</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr2-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item three</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr3-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item four</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr4-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n            <tr role=\"row\">\n              <th role=\"columnheader\" data-label=\"Description\">Item five</th>\n              <td role=\"cell\" data-label=\"Date\">May 9, 2018</td>\n              <td role=\"cell\" data-label=\"Status\">Active</td>\n              <td class=\"pf-c-table__action\" role=\"cell\">\n                <div class=\"pf-c-dropdown\">\n                  <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr5-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n                    <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n                  </button>\n                  <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compound-expansion-nested-table-9-dropdown-kebab-nested-tr5-button\" hidden>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n                    </li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n                    </li>\n                    <li>\n                      <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n                    </li>\n                    <li class=\"pf-c-divider\" role=\"separator\"></li>\n                    <li>\n                      <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n                    </li>\n                  </ul>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </td>\n    </tr>\n  </tbody>\n</table>","title":"With compound expansion","lang":"html"}}>
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
              {`hidden`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__expandable-row`}
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
              {`aria-expanded="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__compound-expansion-toggle`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Indicates that the row is visible. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-controls="[id of element the button controls]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__compound-expansion-toggle`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Identifies the expanded content controlled by the toggle button. `}
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
              {`.pf-m-expanded`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<tbody>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__compound-expansion-toggle`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Modifies a tbody with a row and an expandable row.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__compound-expansion-toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<td>`}
            </code>
          </td>
          <td>
            {`Modifies a `}
            <code {...{"className":"ws-code"}}>
              {`<td>`}
            </code>
            {` on active/focus.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsTableCoreDocs} {...{"code":"<table class=\"pf-c-table pf-m-compact pf-m-grid-md\" role=\"grid\" aria-label=\"This is a compact table example\" id=\"table-compact\">\n  <thead>\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-compact-check-all\" aria-label=\"Select all rows\" />\n      </td>\n      <th role=\"columnheader\" scope=\"col\">Contributor</th>\n      <th role=\"columnheader\" scope=\"col\">Position</th>\n      <th role=\"columnheader\" scope=\"col\">Location</th>\n      <th role=\"columnheader\" scope=\"col\">Last seen</th>\n      <th role=\"columnheader\" scope=\"col\">Numbers</th>\n      <th class=\"pf-c-table__icon \" role=\"columnheader\" scope=\"col\">Icons</th>\n      <td></td>\n      <td></td>\n    </tr>\n  </thead>\n  <tbody role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-compact-checkrow1\" aria-labelledby=\"table-compact-name1\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Contributor\">\n        <span id=\"table-compact-name1\">Sam Jones</span>\n      </th>\n      <td role=\"cell\" data-label=\"Position\">CSS guru</td>\n      <td role=\"cell\" data-label=\"Location\">Not too sure</td>\n      <td role=\"cell\" data-label=\"Last seen\">May 9, 2018</td>\n      <td role=\"cell\" data-label=\"Numbers\">0556</td>\n      <td class=\"pf-c-table__icon\" role=\"cell\" data-label=\"Icon\">\n        <i class=\"fas fa-check\"></i>\n      </td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Action link</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compact-dropdown-kebab-right-aligned-1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compact-dropdown-kebab-right-aligned-1-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-compact-checkrow2\" aria-labelledby=\"table-compact-name2\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Contributor\">\n        <span id=\"table-compact-name2\">Amy Miller</span>\n      </th>\n      <td role=\"cell\" data-label=\"Position\">Visual design</td>\n      <td role=\"cell\" data-label=\"Location\">Raleigh</td>\n      <td role=\"cell\" data-label=\"Last seen\">May 9, 2018</td>\n      <td role=\"cell\" data-label=\"Numbers\">9492</td>\n      <td class=\"pf-c-table__icon\" role=\"cell\" data-label=\"Icon\">\n        <i class=\"fas fa-check\"></i>\n      </td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Action link</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compact-dropdown-kebab-right-aligned-2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compact-dropdown-kebab-right-aligned-2-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-compact-checkrow3\" aria-labelledby=\"table-compact-name3\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Contributor\">\n        <span id=\"table-compact-name3\">Steve Wilson</span>\n      </th>\n      <td role=\"cell\" data-label=\"Position\">Visual design lead</td>\n      <td role=\"cell\" data-label=\"Location\">Westford</td>\n      <td role=\"cell\" data-label=\"Last seen\">May 9, 2018</td>\n      <td role=\"cell\" data-label=\"Numbers\">9929</td>\n      <td class=\"pf-c-table__icon\" role=\"cell\" data-label=\"Icon\">\n        <i class=\"fas fa-check\"></i>\n      </td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Action link</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compact-dropdown-kebab-right-aligned-3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compact-dropdown-kebab-right-aligned-3-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-compact-checkrow4\" aria-labelledby=\"table-compact-name4\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Contributor name\">\n        <span id=\"table-compact-name4\">Emma Jackson</span>\n      </th>\n      <td role=\"cell\" data-label=\"Position\">Interaction design</td>\n      <td role=\"cell\" data-label=\"Location\">Westford</td>\n      <td role=\"cell\" data-label=\"Workspaces\">May 9, 2018</td>\n      <td role=\"cell\" data-label=\"Last commit\">2217</td>\n      <td class=\"pf-c-table__icon\" role=\"cell\" data-label=\"Icon\">\n        <i class=\"fas fa-check\"></i>\n      </td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Action link</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compact-dropdown-kebab-right-aligned-4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compact-dropdown-kebab-right-aligned-4-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>","title":"Compact","lang":"html"}}>
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
              {`.pf-m-compact`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table`}
            </code>
          </td>
          <td>
            {`Modifies for a compact table.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsTableCoreDocs} {...{"code":"<table class=\"pf-c-table pf-m-compact pf-m-grid-md pf-m-no-border-rows\" role=\"grid\" aria-label=\"This is a compact table with border rows example\" id=\"table-compact-no-borders\">\n  <thead>\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-compact-no-borders-check-all\" aria-label=\"Select all rows\" />\n      </td>\n      <th role=\"columnheader\" scope=\"col\">Contributor</th>\n      <th role=\"columnheader\" scope=\"col\">Position</th>\n      <th role=\"columnheader\" scope=\"col\">Location</th>\n      <th role=\"columnheader\" scope=\"col\">Last seen</th>\n      <th role=\"columnheader\" scope=\"col\">Numbers</th>\n      <th class=\"pf-c-table__icon \" role=\"columnheader\" scope=\"col\">Icons</th>\n      <td></td>\n      <td></td>\n    </tr>\n  </thead>\n  <tbody role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-compact-no-borders-checkrow1\" aria-labelledby=\"table-compact-no-borders-name1\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Contributor\">\n        <span id=\"table-compact-no-borders-name1\">Sam Jones</span>\n      </th>\n      <td role=\"cell\" data-label=\"Position\">CSS guru</td>\n      <td role=\"cell\" data-label=\"Location\">Not too sure</td>\n      <td role=\"cell\" data-label=\"Last seen\">May 9, 2018</td>\n      <td role=\"cell\" data-label=\"Numbers\">0556</td>\n      <td class=\"pf-c-table__icon\" role=\"cell\" data-label=\"Icon\">\n        <i class=\"fas fa-check\"></i>\n      </td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Action link</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compact-no-borders-dropdown-kebab-right-aligned-1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compact-no-borders-dropdown-kebab-right-aligned-1-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-compact-no-borders-checkrow2\" aria-labelledby=\"table-compact-no-borders-name2\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Contributor\">\n        <span id=\"table-compact-no-borders-name2\">Amy Miller</span>\n      </th>\n      <td role=\"cell\" data-label=\"Position\">Visual design</td>\n      <td role=\"cell\" data-label=\"Location\">Raleigh</td>\n      <td role=\"cell\" data-label=\"Last seen\">May 9, 2018</td>\n      <td role=\"cell\" data-label=\"Numbers\">9492</td>\n      <td class=\"pf-c-table__icon\" role=\"cell\" data-label=\"Icon\">\n        <i class=\"fas fa-check\"></i>\n      </td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Action link</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compact-no-borders-dropdown-kebab-right-aligned-2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compact-no-borders-dropdown-kebab-right-aligned-2-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-compact-no-borders-checkrow3\" aria-labelledby=\"table-compact-no-borders-name3\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Contributor\">\n        <span id=\"table-compact-no-borders-name3\">Steve Wilson</span>\n      </th>\n      <td role=\"cell\" data-label=\"Position\">Visual design lead</td>\n      <td role=\"cell\" data-label=\"Location\">Westford</td>\n      <td role=\"cell\" data-label=\"Last seen\">May 9, 2018</td>\n      <td role=\"cell\" data-label=\"Numbers\">9929</td>\n      <td class=\"pf-c-table__icon\" role=\"cell\" data-label=\"Icon\">\n        <i class=\"fas fa-check\"></i>\n      </td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Action link</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compact-no-borders-dropdown-kebab-right-aligned-3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compact-no-borders-dropdown-kebab-right-aligned-3-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-compact-no-borders-checkrow4\" aria-labelledby=\"table-compact-no-borders-name4\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Contributor name\">\n        <span id=\"table-compact-no-borders-name4\">Emma Jackson</span>\n      </th>\n      <td role=\"cell\" data-label=\"Position\">Interaction design</td>\n      <td role=\"cell\" data-label=\"Location\">Westford</td>\n      <td role=\"cell\" data-label=\"Workspaces\">May 9, 2018</td>\n      <td role=\"cell\" data-label=\"Last commit\">2217</td>\n      <td class=\"pf-c-table__icon\" role=\"cell\" data-label=\"Icon\">\n        <i class=\"fas fa-check\"></i>\n      </td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Action link</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compact-no-borders-dropdown-kebab-right-aligned-4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compact-no-borders-dropdown-kebab-right-aligned-4-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>","title":"Compact with no borders","lang":"html"}}>
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
              {`.pf-m-no-border-rows`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table.pf-m-compact`}
            </code>
          </td>
          <td>
            {`Modifies to remove borders between rows. `}
            <strong>
              {`Note: Can not be used with `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-expandable`}
              </code>
              {`.`}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsTableCoreDocs} {...{"code":"<table class=\"pf-c-table pf-m-expandable pf-m-compact pf-m-grid-md\" role=\"grid\" aria-label=\"Compact expandable table example\" id=\"table-compact-expandable\">\n  <thead>\n    <tr role=\"row\">\n      <td></td>\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-compact-expandable-check-all\" aria-label=\"Select all rows\" />\n      </td>\n      <th class=\"pf-m-width-30 \" role=\"columnheader\" scope=\"col\">Repositories</th>\n      <th role=\"columnheader\" scope=\"col\">Branches</th>\n      <th role=\"columnheader\" scope=\"col\">Pull requests</th>\n      <td></td>\n      <td></td>\n    </tr>\n  </thead>\n  <tbody class=\"pf-m-expanded\" role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-c-table__toggle\" role=\"cell\">\n        <button class=\"pf-c-button pf-m-plain pf-m-expanded\" aria-labelledby=\"table-compact-expandable-node1 table-compact-expandable-expandable-toggle1\" id=\"table-compact-expandable-expandable-toggle1\" aria-label=\"Details\" aria-controls=\"table-compact-expandable-content1\" aria-expanded=\"true\">\n          <div class=\"pf-c-table__toggle-icon\">\n            <i class=\"fas fa-angle-down\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </td>\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-compact-expandable-checkrow1\" aria-labelledby=\"table-compact-expandable-node1\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Repository name\">\n        <p id=\"table-compact-expandable-node1\">Node 1</p>\n      </th>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Link</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compact-expandable-dropdown-kebab-right-aligned-1-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compact-expandable-dropdown-kebab-right-aligned-1-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row pf-m-expanded\" role=\"row\">\n      <td></td>\n      <td></td>\n      <td role=\"cell\" colspan=\"4\" id=\"table-compact-expandable-content1\">\n        <div class=\"pf-c-table__expandable-row-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>\n      </td>\n      <td></td>\n    </tr>\n  </tbody>\n  <tbody role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-c-table__toggle\" role=\"cell\">\n        <button class=\"pf-c-button pf-m-plain\" aria-labelledby=\"table-compact-expandable-node2 table-compact-expandable-expandable-toggle2\" id=\"table-compact-expandable-expandable-toggle2\" aria-label=\"Details\" aria-controls=\"table-compact-expandable-content2\">\n          <div class=\"pf-c-table__toggle-icon\">\n            <i class=\"fas fa-angle-down\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </td>\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-compact-expandable-checkrow2\" aria-labelledby=\"table-compact-expandable-node2\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Repository name\">\n        <p id=\"table-compact-expandable-node2\">Node 2</p>\n      </th>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Link</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compact-expandable-dropdown-kebab-right-aligned-2-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compact-expandable-dropdown-kebab-right-aligned-2-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row\" role=\"row\">\n      <td class=\"pf-m-no-padding\" role=\"cell\" colspan=\"7\" id=\"table-compact-expandable-content2\">\n        <div class=\"pf-c-table__expandable-row-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>\n      </td>\n    </tr>\n  </tbody>\n  <tbody class=\"pf-m-expanded\" role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-c-table__toggle\" role=\"cell\">\n        <button class=\"pf-c-button pf-m-plain pf-m-expanded\" aria-labelledby=\"table-compact-expandable-node3 table-compact-expandable-expandable-toggle3\" id=\"table-compact-expandable-expandable-toggle3\" aria-label=\"Details\" aria-controls=\"table-compact-expandable-content3\" aria-expanded=\"true\">\n          <div class=\"pf-c-table__toggle-icon\">\n            <i class=\"fas fa-angle-down\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </td>\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-compact-expandable-checkrow3\" aria-labelledby=\"table-compact-expandable-node3\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Repository name\">\n        <p id=\"table-compact-expandable-node3\">Node 3</p>\n      </th>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Link</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compact-expandable-dropdown-kebab-right-aligned-3-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compact-expandable-dropdown-kebab-right-aligned-3-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row pf-m-expanded\" role=\"row\">\n      <td role=\"cell\" colspan=\"7\" id=\"table-compact-expandable-content3\">\n        <div class=\"pf-c-table__expandable-row-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>\n      </td>\n    </tr>\n  </tbody>\n  <tbody class=\"pf-m-expanded\" role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-c-table__toggle\" role=\"cell\">\n        <button class=\"pf-c-button pf-m-plain pf-m-expanded\" aria-labelledby=\"table-compact-expandable-node4 table-compact-expandable-expandable-toggle4\" id=\"table-compact-expandable-expandable-toggle4\" aria-label=\"Details\" aria-controls=\"table-compact-expandable-content4\" aria-expanded=\"true\">\n          <div class=\"pf-c-table__toggle-icon\">\n            <i class=\"fas fa-angle-down\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </td>\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-compact-expandable-checkrow4\" aria-labelledby=\"table-compact-expandable-node4\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Repository name\">\n        <p id=\"table-compact-expandable-node4\">Node 4</p>\n      </th>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Link</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compact-expandable-dropdown-kebab-right-aligned-4-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compact-expandable-dropdown-kebab-right-aligned-4-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row pf-m-expanded\" role=\"row\">\n      <td class=\"pf-m-no-padding\" role=\"cell\" colspan=\"7\" id=\"table-compact-expandable-content4\">\n        <div class=\"pf-c-table__expandable-row-content\">This content has no padding.</div>\n      </td>\n    </tr>\n  </tbody>\n  <tbody role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-c-table__toggle\" role=\"cell\">\n        <button class=\"pf-c-button pf-m-plain\" aria-labelledby=\"table-compact-expandable-node5 table-compact-expandable-expandable-toggle5\" id=\"table-compact-expandable-expandable-toggle5\" aria-label=\"Details\" aria-controls=\"table-compact-expandable-content5\">\n          <div class=\"pf-c-table__toggle-icon\">\n            <i class=\"fas fa-angle-down\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </td>\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-compact-expandable-checkrow5\" aria-labelledby=\"table-compact-expandable-node5\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Repository name\">\n        <p id=\"table-compact-expandable-node5\">Node 5</p>\n      </th>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Action\">\n        <a href=\"#\">Link</a>\n      </td>\n      <td class=\"pf-c-table__action\" role=\"cell\">\n        <div class=\"pf-c-dropdown\">\n          <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"table-compact-expandable-dropdown-kebab-right-aligned-5-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n            <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n          </button>\n          <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"table-compact-expandable-dropdown-kebab-right-aligned-5-button\" hidden>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n            </li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n            </li>\n            <li>\n              <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n            </li>\n            <li class=\"pf-c-divider\" role=\"separator\"></li>\n            <li>\n              <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n            </li>\n          </ul>\n        </div>\n      </td>\n    </tr>\n    <tr class=\"pf-c-table__expandable-row\" role=\"row\">\n      <td role=\"cell\" colspan=\"7\" id=\"table-compact-expandable-content5\">\n        <div class=\"pf-c-table__expandable-row-content\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>\n      </td>\n    </tr>\n  </tbody>\n</table>","title":"Compact expandable","lang":"html"}}>
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
              {`.pf-m-expandable`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table.pf-m-compact`}
            </code>
          </td>
          <td>
            {`Indicates that the table has expandable rows. `}
            <strong>
              {`Note: Can not be used with `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-no-border-rows`}
              </code>
              {`.`}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsTableCoreDocs} {...{"code":"<table class=\"pf-c-table pf-m-grid-md\" role=\"grid\" aria-label=\"This is a width modifier expandable\" id=\"table-width-modifiers\">\n  <thead>\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-width-modifiers-check-all\" aria-label=\"Check all rows\" />\n      </td>\n      <th class=\"pf-m-width-30 pf-c-table__sort pf-m-selected\" role=\"columnheader\" aria-sort=\"ascending\" scope=\"col\">\n        <button class=\"pf-c-table__button\">\n          <div class=\"pf-c-table__button-content\">\n            <span class=\"pf-c-table__text\">Repositories</span>\n            <span class=\"pf-c-table__sort-indicator\">\n              <i class=\"fas fa-long-arrow-alt-up\"></i>\n            </span>\n          </div>\n        </button>\n      </th>\n      <th class=\"pf-c-table__sort \" role=\"columnheader\" aria-sort=\"none\" scope=\"col\">\n        <button class=\"pf-c-table__button\">\n          <div class=\"pf-c-table__button-content\">\n            <span class=\"pf-c-table__text\">Branches</span>\n            <span class=\"pf-c-table__sort-indicator\">\n              <i class=\"fas fa-arrows-alt-v\"></i>\n            </span>\n          </div>\n        </button>\n      </th>\n      <th class=\"pf-c-table__sort \" role=\"columnheader\" aria-sort=\"none\" scope=\"col\">\n        <button class=\"pf-c-table__button\">\n          <div class=\"pf-c-table__button-content\">\n            <span class=\"pf-c-table__text\">Pull requests</span>\n            <span class=\"pf-c-table__sort-indicator\">\n              <i class=\"fas fa-arrows-alt-v\"></i>\n            </span>\n          </div>\n        </button>\n      </th>\n      <th class=\"pf-m-fit-content \" role=\"columnheader\" scope=\"col\">Workspaces</th>\n      <th class=\"pf-m-fit-content \" role=\"columnheader\" scope=\"col\">Last commit</th>\n    </tr>\n  </thead>\n  <tbody role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-width-modifiers-checkrow1\" aria-labelledby=\"table-width-modifiers-node1\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Repository name\">\n        <div id=\"table-width-modifiers-node1\">Node 1</div>\n      </th>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-width-modifiers-checkrow2\" aria-labelledby=\"table-width-modifiers-node2\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Repository name\">\n        <div>\n          <div id=\"table-width-modifiers-node2\">Node 2</div>\n          <a href=\"#\">siemur/test-space</a>\n        </div>\n      </th>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-width-modifiers-checkrow3\" aria-labelledby=\"table-width-modifiers-node3\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Repository name\">\n        <div>\n          <div id=\"table-width-modifiers-node3\">Node 3</div>\n          <a href=\"#\">siemur/test-space</a>\n        </div>\n      </th>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n    <tr role=\"row\">\n      <td class=\"pf-c-table__check\" role=\"cell\">\n        <input type=\"checkbox\" name=\"table-width-modifiers-checkrow4\" aria-labelledby=\"table-width-modifiers-node4\" />\n      </td>\n      <th role=\"columnheader\" data-label=\"Repository name\">\n        <div>\n          <div id=\"table-width-modifiers-node4\">Node 4</div>\n          <a href=\"#\">siemur/test-space</a>\n        </div>\n      </th>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n  </tbody>\n</table>","title":"With width modifiers","lang":"html"}}>
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
              {`.pf-m-width-[10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, or 90]`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<th>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<td>`}
            </code>
          </td>
          <td>
            {`Percentage based modifier for `}
            <code {...{"className":"ws-code"}}>
              {`th`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`td`}
            </code>
            {` widths. `}
            <strong>
              {`Recommended for sortable title cell`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-width-max`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<th>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<td>`}
            </code>
          </td>
          <td>
            {`Percentage based modifier for `}
            <code {...{"className":"ws-code"}}>
              {`th`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`td`}
            </code>
            {` maximum width.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-fit-content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<th>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<td>`}
            </code>
          </td>
          <td>
            {`Percentage based modifier for `}
            <code {...{"className":"ws-code"}}>
              {`th`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`td`}
            </code>
            {` minimum width with no text wrapping.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsTableCoreDocs} {...{"code":"<table class=\"pf-c-table pf-m-grid-lg\" role=\"grid\" aria-label=\"Table with hidden and visible modifiers example\" id=\"table-hidden-visible\">\n  <thead>\n    <tr role=\"row\">\n      <th class=\"pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg \" role=\"columnheader\" scope=\"col\">Repositories</th>\n      <th role=\"columnheader\" scope=\"col\">Branches</th>\n      <th class=\"pf-m-hidden-on-md pf-m-visible-on-lg \" role=\"columnheader\" scope=\"col\">Pull requests</th>\n      <th role=\"columnheader\" scope=\"col\">Workspaces</th>\n      <th class=\"pf-m-hidden pf-m-visible-on-sm \" role=\"columnheader\" scope=\"col\">Last commit</th>\n    </tr>\n  </thead>\n  <tbody role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg\" role=\"cell\" data-label=\"Repository name\">Visible only on md breakpoint</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td class=\"pf-m-hidden-on-md pf-m-visible-on-lg\" role=\"cell\" data-label=\"Pull requests\">Hidden only on md breakpoint</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td class=\"pf-m-hidden pf-m-visible-on-sm\" role=\"cell\" data-label=\"Last commit\">Hidden on xs breakpoint</td>\n    </tr>\n    <tr role=\"row\">\n      <td class=\"pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg\" role=\"cell\" data-label=\"Repository name\">Repository 2</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td class=\"pf-m-hidden-on-md pf-m-visible-on-lg\" role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td class=\"pf-m-hidden pf-m-visible-on-sm\" role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n    <tr role=\"row\">\n      <td class=\"pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg\" role=\"cell\" data-label=\"Repository name\">Repository 3</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td class=\"pf-m-hidden-on-md pf-m-visible-on-lg\" role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td class=\"pf-m-hidden pf-m-visible-on-sm\" role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n    <tr role=\"row\">\n      <td class=\"pf-m-hidden pf-m-visible-on-md pf-m-hidden-on-lg\" role=\"cell\" data-label=\"Repository name\">Repository 4</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td class=\"pf-m-hidden-on-md pf-m-visible-on-lg\" role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td class=\"pf-m-hidden pf-m-visible-on-sm\" role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n  </tbody>\n</table>","title":"With hidden/visible breakpoint modifiers","lang":"html"}}>
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
              {`.pf-m-hidden{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table tr > *`}
            </code>
          </td>
          <td>
            {`Hides a table cell at a given breakpoint, or hides it at all breakpoints with `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-hidden`}
            </code>
            {`. `}
            <strong>
              {`Note: Needs to apply to all cells in the column you want to hide.`}
            </strong>
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
              {`.pf-c-table tr > *`}
            </code>
          </td>
          <td>
            {`Shows a table cell at a given breakpoint.`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Controlling text`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`To better control table cell behavior, PatternFly provides a series of modifiers to help contextually control layout. By default, `}
      <code {...{"className":"ws-code"}}>
        {`thead`}
      </code>
      {` cells are set to truncate, whereas `}
      <code {...{"className":"ws-code"}}>
        {`tbody`}
      </code>
      {` cells are set to wrap. Both `}
      <code {...{"className":"ws-code"}}>
        {`th`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`td`}
      </code>
      {` cells use a set of shared css properties mapped to customizable css variable values. Because only the shared css variables are changed by the modifier selector and not the properties, the modifier can be applied to any parent element up until `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-table`}
      </code>
      {` itself `}
      {`[`}
      <code {...{"className":"ws-code"}}>
        {`thead`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`tbody`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`tr`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`th`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`td`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-table__text`}
      </code>
      {`]`}
      {`.`}
    </p>
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
              {`.pf-m-wrap`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`thead`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tbody`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tr`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`th`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`td`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__text`}
            </code>
          </td>
          <td>
            {`Sets table cell content to wrap. If applied to `}
            <code {...{"className":"ws-code"}}>
              {`thead`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tbody`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`tr`}
            </code>
            {`, then all child cells will be affected. This is the default behavior for `}
                        <code>{`tbody`}</code>
            {` cells.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-truncate`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`thead`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tbody`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tr`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`th`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`td`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__text`}
            </code>
          </td>
          <td>
            {`Sets text to truncate based on a minimum width and available space adjacent table cells.  If applied to `}
            <code {...{"className":"ws-code"}}>
              {`thead`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tbody`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`tr`}
            </code>
            {`, then all child cells will be affected. This is the default behavior for `}
                        <code>{`thead`}</code>
            {` cells.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-nowrap`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`thead`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tbody`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tr`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`th`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`td`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__text`}
            </code>
          </td>
          <td>
            {`Unsets min/max width and sets whitespace to nowrap.  If applied to `}
            <code {...{"className":"ws-code"}}>
              {`thead`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tbody`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`tr`}
            </code>
            {`, then all child cells will be affected. This is specifically beneficial for cell's whose `}
                        <code>{`thead th`}</code>
            {` cells are blank. The following example highlights link text that should display inline. Be careful with this modifier, it will prioritize its cell's content above all other cell's contents.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-fit-content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`thead`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tbody`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tr`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`th`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`td`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__text`}
            </code>
          </td>
          <td>
            {`Fit column width to cell content.  If applied to `}
            <code {...{"className":"ws-code"}}>
              {`thead`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tbody`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`tr`}
            </code>
            {`, then all child cells will be affected.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-break-word`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`thead`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tbody`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tr`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`th`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`td`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__text`}
            </code>
          </td>
          <td>
            {`Breaks long strings wherever necessary as defined by the table layout. If applied to `}
            <code {...{"className":"ws-code"}}>
              {`thead`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tbody`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`tr`}
            </code>
            {`, then all child cells will be affected.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsTableCoreDocs} {...{"code":"<table class=\"pf-c-table pf-m-grid-lg\" role=\"grid\" aria-label=\"This is a simple table example\" id=\"modifiers-without-text-wrapper-example\">\n  <thead>\n    <tr role=\"row\">\n      <th class=\"pf-m-width-20 \" role=\"columnheader\" scope=\"col\">Truncate (width 20%)</th>\n      <th role=\"columnheader\" scope=\"col\">Break word</th>\n      <th class=\"pf-m-wrap \" role=\"columnheader\" scope=\"col\">Wrapping table header text. This\n        <code>th</code>text will wrap instead of truncate.</th>\n      <th class=\"pf-m-fit-content \" role=\"columnheader\" scope=\"col\">Fit content</th>\n      <td></td>\n    </tr>\n  </thead>\n  <tbody role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-m-truncate\" role=\"cell\" data-label=\"Truncating text\">This text will truncate instead of wrap in table layout and wrap gracefully in grid layout.</td>\n      <td class=\"pf-m-break-word\" role=\"cell\" data-label=\"Break word\">\n        <a href=\"#\">http://thisisaverylongurlthatneedstobreakusethebreakwordmodifier.org</a>\n      </td>\n      <td role=\"cell\" data-label=\"Wrapping\">\n        <p>By default,\n          <code>thead</code>cells will truncate and\n          <code>tbody</code>cells will wrap. Use\n          <code>.pf-m-wrap</code>on a\n          <code>th</code>to change its behavior.</p>\n      </td>\n      <td role=\"cell\" data-label=\"Fit content\">This cell's content will adjust itself to the parent th width. This modifier only affects table layouts.</td>\n      <td class=\"pf-m-nowrap\" role=\"cell\" data-label=\"No wrap\">\n        <a href=\"#\">No wrap</a>\n      </td>\n    </tr>\n  </tbody>\n</table>","title":"Modifiers without text wrapper","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`The table-text element`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`By default, truncation and wrapping settings do not affect the grid layout, but text will fallback gracefully by passively wrapping long strings. Truncation and wrapping settings will persist with the addition of a `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-table__text`}
      </code>
      {` wrapper on table cell content. In addition to `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-table__text`}
      </code>
      {`, all PatternFly layouts can be used in table cells and contain table text elements.`}
    </p>
    <Example {...DocumentationComponentsTableCoreDocs} {...{"code":"<table class=\"pf-c-table pf-m-grid-md\" role=\"grid\" aria-label=\"This is a simple table example\" id=\"table-text-element-example\">\n  <caption>This table contains\n    <code>.pf-c-table__text</code>&nbsp; examples. The\n    <code>.pf-c-table__text</code>&nbsp; element can be using alone or in a nested configuration.</caption>\n  <thead>\n    <tr role=\"row\">\n      <th role=\"columnheader\" scope=\"col\">Selector/element</th>\n      <th role=\"columnheader\" scope=\"col\">Result</th>\n    </tr>\n  </thead>\n  <tbody role=\"rowgroup\">\n    <tr role=\"row\">\n      <th class=\"pf-m-fit-content \" role=\"rowheader\" data-label=\"Element\" scope=\"row\">\n        <div class=\"pf-c-table__text\">\n          <b>\n            <code>th.pf-m-truncate</code>\n          </b>\n        </div>\n      </th>\n      <td class=\"pf-m-truncate\" role=\"cell\" data-label=\"Truncating text\">\n        <span class=\"pf-c-table__text\">This table cell contains a single\n          <code>`.pf-c-table__text`</code>&nbsp; wrapper with the parent table cell applying\n          <code>`.pf-m-truncate`</code>. The child\n          <code>`.pf-c-table__text`</code>&nbsp; element will inherit the modifier settings and apply to the grid layout.</span>\n      </td>\n    </tr>\n    <tr role=\"row\">\n      <th class=\"pf-m-fit-content \" role=\"rowheader\" data-label=\"Element\" scope=\"row\">\n        <div class=\"pf-c-table__text\">\n          <b>\n            <code>.pf-l-stack</code>\n          </b>\n        </div>\n      </th>\n      <td role=\"cell\" data-label=\"Truncating text\">\n        <div class=\"pf-l-stack pf-m-gutter\">\n          <div class=\"pf-l-stack__item\">\n            <div class=\"pf-c-table__text\">Because\n              <code>.pf-m-grid</code>&nbsp; applies a grid layout to\n              <code>.pf-c-table</code>, child elements will stack in the grid layout. To prevent this, wrap multiple elements with a div or use a PatternFly layout.</div>\n          </div>\n          <div class=\"pf-l-stack__item\">\n            <p class=\"pf-c-table__text\">The\n              <b>\n                <code>.pf-c-table__text</code>&nbsp;element</b>&nbsp; can additionally be nested, like in this example. The next\n              <code>.pf-c-table__text</code>element has a very long url whose width needs be constrained.</p>\n          </div>\n          <div class=\"pf-l-stack__item\">\n            <a class=\"pf-c-table__text pf-m-truncate\" href=\"#\">http://truncatemodifierappliedtoaverylongurlthatwillforcethetabletobreakluckilywehavethepfctabletextelement.com</a>\n          </div>\n          <div class=\"pf-l-stack__item\">\n            <p class=\"pf-c-table__text\">This\n              <b>\n                <code>.pf-c-table__text</code>&nbsp;element</b>&nbsp; applies its own built in grid layout\n              <b>\n                <code>.pf-m-stack</code>\n              </b>&nbsp;as well as a gutter\n              <b>\n                <code>.pf-m-gutter</code>\n              </b>.</p>\n          </div>\n        </div>\n      </td>\n    </tr>\n    <tr role=\"row\">\n      <th class=\"pf-m-fit-content \" role=\"rowheader\" data-label=\"Element\" scope=\"row\">\n        <div class=\"pf-c-table__text\">\n          <b>\n            <code>.pf-l-flex</code>\n          </b>\n        </div>\n      </th>\n      <td role=\"cell\" data-label=\"Truncating text\">\n        <div class=\"pf-l-flex pf-m-column pf-m-row-on-xl\">\n          <div class=\"pf-l-flex__item pf-m-flex-1\">\n            <p class=\"pf-c-table__text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>\n          </div>\n          <div class=\"pf-l-flex__item pf-m-flex-1\">\n            <a class=\"pf-c-table__text pf-m-break-word\" href=\"#\">http://breakwordmodifierappliedtoaverylongurlthatwillforcethetabletobreakluckilywehavethepfctabletextelement.com</a>\n          </div>\n        </div>\n      </td>\n    </tr>\n    <tr role=\"row\">\n      <th class=\"pf-m-fit-content \" role=\"rowheader\" data-label=\"Element\" scope=\"row\">\n        <div class=\"pf-c-table__text\">\n          <b>\n            <code>.pf-l-flex</code>\n          </b>\n        </div>\n      </th>\n      <td role=\"cell\" data-label=\"Truncating text\">\n        <div class=\"pf-l-flex pf-m-column\">\n          <div class=\"pf-l-flex\">\n            <div class=\"pf-l-flex__item\">\n              <i class=\"fas fa-code-branch\" aria-hidden=\"true\"></i>\n&nbsp;5\n            </div>\n            <div class=\"pf-l-flex__item\">\n              <i class=\"fas fa-code\" aria-hidden=\"true\"></i>\n&nbsp;9\n            </div>\n            <div class=\"pf-l-flex__item\">\n              <i class=\"fas fa-cube\" aria-hidden=\"true\"></i>\n&nbsp;2\n            </div>\n            <div class=\"pf-l-flex__item\">\n              <i class=\"fas fa-check-circle\" aria-hidden=\"true\"></i>\n&nbsp;11\n            </div>\n          </div>\n          <div class=\"pf-l-flex__item\">\n            <p class=\"pf-c-table__text\">This is paragraph that we want to wrap. It doesn't need a modifier and has no extra long strings. Any modifier available for the flex layout can be used here.</p>\n          </div>\n          <div class=\"pf-l-flex__item\">\n            <a class=\"pf-c-table__text pf-m-break-word\" href=\"#\">http://breakwordmodifierappliedtoaverylongurlthatwillforcethetabletobreakluckilywehavethepfctabletextelement.com</a>\n          </div>\n        </div>\n      </td>\n    </tr>\n    <tr role=\"row\">\n      <th class=\"pf-m-fit-content \" role=\"rowheader\" data-label=\"Element\" scope=\"row\">\n        <div class=\"pf-c-table__text\">\n          <b>\n            <code>.pf-l-grid</code>\n          </b>\n        </div>\n      </th>\n      <td role=\"cell\" data-label=\"Truncating text\">\n        <div class=\"pf-l-grid pf-m-gutter\">\n          <div class=\"pf-l-grid__item pf-m-6-col pf-m-3-col-on-md\">Item 1</div>\n          <div class=\"pf-l-grid__item pf-m-6-col pf-m-3-col-on-md\">Item 2</div>\n          <div class=\"pf-l-grid__item pf-m-6-col pf-m-3-col-on-md\">Item 3</div>\n          <div class=\"pf-l-grid__item pf-m-6-col pf-m-3-col-on-md\">Item 4</div>\n          <div class=\"pf-l-grid__item\">\n            <p class=\"pf-c-table__text\">This is paragraph that we want to wrap. It doesn't need a modifier and has no extra long strings. Any modifier available for the flex layout can be used here.</p>\n          </div>\n          <div class=\"pf-l-grid__item\">\n            <a class=\"pf-c-table__text pf-m-truncate\" href=\"#\">http://breakwordmodifierappliedtoaverylongurlthatwillforcethetabletobreakluckilywehavethepfctabletextelement.com</a>\n          </div>\n        </div>\n      </td>\n    </tr>\n  </tbody>\n</table>","title":"Table text element","lang":"html"}}>
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
              {`.pf-c-table__text`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`th > *`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`td > *`}
            </code>
          </td>
          <td>
            {`Initiates a table text element.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-truncate`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`thead`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tbody`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tr`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`th`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`td`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__text`}
            </code>
          </td>
          <td>
            {`Modifies text to truncate.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-nowrap`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`thead`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tbody`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tr`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`th`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`td`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__text`}
            </code>
          </td>
          <td>
            {`Modifies text to not wrap.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-wrap`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`thead`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tbody`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tr`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`th`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`td`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__text`}
            </code>
          </td>
          <td>
            {`Modifies text to wrap.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-fit-content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`thead`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tr`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`th`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__text`}
            </code>
          </td>
          <td>
            {`Modifies `}
            <code {...{"className":"ws-code"}}>
              {`th`}
            </code>
            {` to fit its contents.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-break-word`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`thead`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tbody`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`tr`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`th`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`td`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table__text`}
            </code>
          </td>
          <td>
            {`Modifies text strings to break.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsTableCoreDocs} {...{"code":"<div class=\"pf-c-tooltip pf-m-top\" role=\"tooltip\">\n  <div class=\"pf-c-tooltip__arrow\"></div>\n  <div class=\"pf-c-tooltip__content\" id=\"tooltip-top-content\">Pull Requests</div>\n</div>\n<table class=\"pf-c-table\" aria-label=\"This is a simple table example\" id=\"th-truncation-example\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Repositories</th>\n      <th scope=\"col\">Branches</th>\n      <th scope=\"col\">Pull requests</th>\n      <th scope=\"col\">Workspaces</th>\n      <th scope=\"col\">Last commit</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td role=\"cell\" data-label=\"Repository name\">Long lines of text will shrink adjacent column widths.</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n  </tbody>\n  <tbody>\n    <tr>\n      <td role=\"cell\" data-label=\"Repository name\">This example is not responsive. Adjacent\n        <code>tbody</code>cells will shrink as a result of this text being a longer string and adjacent text being shorter in length. Truncation can be overridden in\n        <code>th</code>cells with the addition of\n        <code>.pf-m-wrap</code>,\n        <code>.pf-m-nowrap</code>or\n        <code>.pf-m-fit-content</code>.</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n  </tbody>\n</table>","title":"th truncation","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Long strings in table cells will push content. Add a width modifier to `}
      <code {...{"className":"ws-code"}}>
        {`thead th`}
      </code>
      {` to limit string length or add `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-truncate`}
      </code>
      {` to `}
      <code {...{"className":"ws-code"}}>
        {`tbody td`}
      </code>
      {`.`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsTableCoreDocs} {...{"code":"<table class=\"pf-c-table pf-m-grid-md\" role=\"grid\" aria-label=\"This is a simple table example\" id=\"width-constrained-example\">\n  <thead>\n    <tr role=\"row\">\n      <th class=\"pf-m-width-40 \" role=\"columnheader\" scope=\"col\">Width 40</th>\n      <th role=\"columnheader\" scope=\"col\">Branches</th>\n      <th role=\"columnheader\" scope=\"col\">Pull requests</th>\n      <th class=\"pf-m-fit-content \" role=\"columnheader\" scope=\"col\">Fit content th</th>\n      <th role=\"columnheader\" scope=\"col\">Last commit</th>\n    </tr>\n  </thead>\n  <tbody role=\"rowgroup\">\n    <tr role=\"row\">\n      <td role=\"cell\" data-label=\"Repository name\">Since this is a long string of text and the other cells contain short strings (narrower than their table header), we'll need to control width this table header's width. Let's set width to 40%.</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n  </tbody>\n  <tbody role=\"rowgroup\">\n    <tr role=\"row\">\n      <td class=\"pf-m-truncate\" role=\"cell\" data-label=\"Repository name\">This string will truncate in table mode only. Since this is a long string of text and the other cells contain short strings (narrower than their table header), we'll need to control width this table header's width. Let's set width to 40%.</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n  </tbody>\n</table>","title":"Width constrained","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTableCoreDocs} {...{"code":"<table class=\"pf-c-table pf-m-grid-md pf-m-sticky-header\" role=\"grid\" aria-label=\"This is a table with sticky header cells\" id=\"table-sticky-header\">\n  <thead>\n    <tr role=\"row\">\n      <th role=\"columnheader\" scope=\"col\">Repositories</th>\n      <th role=\"columnheader\" scope=\"col\">Branches</th>\n      <th role=\"columnheader\" scope=\"col\">Pull requests</th>\n      <th role=\"columnheader\" scope=\"col\">Workspaces</th>\n      <th role=\"columnheader\" scope=\"col\">Last commit</th>\n    </tr>\n  </thead>\n  <tbody role=\"rowgroup\">\n    <tr role=\"row\">\n      <td role=\"cell\" data-label=\"Repository name\">Repository 1</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n    <tr role=\"row\">\n      <td role=\"cell\" data-label=\"Repository name\">Repository 2</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n    <tr role=\"row\">\n      <td role=\"cell\" data-label=\"Repository name\">Repository 3</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n    <tr role=\"row\">\n      <td role=\"cell\" data-label=\"Repository name\">Repository 4</td>\n      <td role=\"cell\" data-label=\"Branches\">10</td>\n      <td role=\"cell\" data-label=\"Pull requests\">25</td>\n      <td role=\"cell\" data-label=\"Workspaces\">5</td>\n      <td role=\"cell\" data-label=\"Last commit\">2 days ago</td>\n    </tr>\n  </tbody>\n</table>","title":"Sticky header","lang":"html"}}>
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
              {`.pf-m-wrap`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<th>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<td>`}
            </code>
          </td>
          <td>
            {`Modifies content to wrap.`}
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
      {`Because the table component is not used for layout and presents tabular data only, it requires the use of `}
      <code {...{"className":"ws-code"}}>
        {`role="grid"`}
      </code>
      {`. Expandable table content (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-table__expandable-content`}
      </code>
      {`) is placed within a singular `}
      <code {...{"className":"ws-code"}}>
        {`<td>`}
      </code>
      {` per expandable row, that can span multiple columns.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Role="grid"`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Applying `}
      <code {...{"className":"ws-code"}}>
        {`role="grid"`}
      </code>
      {` to tables enhances accessible interaction while in table layout, however the responsive, css grid based layout can cause unexpected interactions. Therefore, for css grid layout, it is recommended that `}
      <code {...{"className":"ws-code"}}>
        {`role="grid"`}
      </code>
      {` be removed.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Sortable tables`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Table columns may shift when expanding/collapsing. To address this, set `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-fit-content`}
      </code>
      {`, or assign a width `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-width-[width]`}
      </code>
      {` to the corresponding `}
      <code {...{"className":"ws-code"}}>
        {`<th>`}
      </code>
      {` defining the column or `}
      <code {...{"className":"ws-code"}}>
        {`<td>`}
      </code>
      {` within the column. Width values are `}
      <code {...{"className":"ws-code"}}>
        {`[10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90]`}
      </code>
      {` or `}
      <code {...{"className":"ws-code"}}>
        {`max`}
      </code>
      {`.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Table header cells`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`By default, all table header cells are set to `}
      <code {...{"className":"ws-code"}}>
        {`white-space: nowrap`}
      </code>
      {`. If a `}
      <code {...{"className":"ws-code"}}>
        {`<th>`}
      </code>
      {`'s content needs to wrap, apply `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-wrap`}
      </code>
      {`.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Implementation support`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`One expandable toggle button, positioned in the first cell of a non-expandable row, preceding an expandable row.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`One checkbox, positioned in the first or second cell of a non-expandable row.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`One action button, positioned in the last cell of a non-expandable row.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Tabular data.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Compact presentation modifier (not compatible with expandable table).`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Responsive layout modifiers`}
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
              {`.pf-m-grid-md`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-grid-lg`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-grid-xl`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-grid-2xl`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table`}
            </code>
          </td>
          <td>
            {`Changes tabular layout to responsive, grid based layout at suffixed breakpoint.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-grid`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table`}
            </code>
          </td>
          <td>
            {`Changes tabular layout to responsive, grid based layout. This approach requires JavaScript to set this class at some prescribed viewport width value.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-sticky-header`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-table`}
            </code>
          </td>
          <td>
            {`Makes the table cells in `}
            <code {...{"className":"ws-code"}}>
              {`<thead>`}
            </code>
            {` sticky to the top of the table on scroll.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsTableCoreDocs.Component.displayName = 'DocumentationComponentsTableCoreDocs';
