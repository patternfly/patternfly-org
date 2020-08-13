import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsPaginationCoreDocs = {
  "slug": "/documentation/components/pagination/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Pagination/examples/Pagination.md",
  "section": "components",
  "id": "Pagination",
  "title": "Pagination",
  "toc": [
    "Examples",
    "Documentation",
    "Pagination nav input"
  ],
  "cssPrefix": "pf-c-pagination"
};
DocumentationComponentsPaginationCoreDocs.liveContext = {
  
};
DocumentationComponentsPaginationCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsPaginationCoreDocs} {...{"code":"<div class=\"pf-c-pagination\">\n  <div class=\"pf-c-pagination__total-items\">\n    <b>1 - 10</b>&nbsp;of&nbsp;\n    <b>37</b>\n  </div>\n  <div class=\"pf-c-options-menu\">\n    <div class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\">\n      <span class=\"pf-c-options-menu__toggle-text\">\n        <b>1 - 10</b>&nbsp;of&nbsp;\n        <b>37</b>\n      </span>\n      <button class=\"pf-c-options-menu__toggle-button\" id=\"pagination-options-menu-top-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"false\" aria-label=\"Items per page\">\n        <span class=\"pf-c-options-menu__toggle-button-icon\">\n          <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </div>\n    <ul class=\"pf-c-options-menu__menu\" aria-labelledby=\"pagination-options-menu-top-example-toggle\" hidden>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">10 per page\n          <div class=\"pf-c-options-menu__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n      </li>\n    </ul>\n  </div>\n  <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n    <div class=\"pf-c-pagination__nav-control pf-m-first\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" disabled aria-label=\"Go to first page\">\n        <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-prev\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" disabled aria-label=\"Go to previous page\">\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-page-select\">\n      <input class=\"pf-c-form-control\" aria-label=\"Current page\" type=\"number\" min=\"1\" max=\"4\" value=\"1\" />\n      <span aria-hidden=\"true\">of 4</span>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-next\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Go to next page\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-last\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Go to last page\">\n        <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </nav>\n</div>","title":"Top","lang":"html","isFullscreen":true}}>
    </Example>
    <Example {...DocumentationComponentsPaginationCoreDocs} {...{"code":"<div class=\"pf-c-pagination\">\n  <div class=\"pf-c-pagination__total-items\">\n    <b>1 - 10</b>&nbsp;of&nbsp;\n    <b>37</b>\n  </div>\n  <div class=\"pf-c-options-menu pf-m-expanded\">\n    <div class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\">\n      <span class=\"pf-c-options-menu__toggle-text\">\n        <b>1 - 10</b>&nbsp;of&nbsp;\n        <b>37</b>\n      </span>\n      <button class=\"pf-c-options-menu__toggle-button\" id=\"pagination-options-menu-top-expanded-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"true\" aria-label=\"Items per page\">\n        <span class=\"pf-c-options-menu__toggle-button-icon\">\n          <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </div>\n    <ul class=\"pf-c-options-menu__menu\" aria-labelledby=\"pagination-options-menu-top-expanded-example-toggle\">\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">10 per page\n          <div class=\"pf-c-options-menu__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n      </li>\n    </ul>\n  </div>\n  <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n    <div class=\"pf-c-pagination__nav-control pf-m-first\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" disabled aria-label=\"Go to first page\">\n        <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-prev\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" disabled aria-label=\"Go to previous page\">\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-page-select\">\n      <input class=\"pf-c-form-control\" aria-label=\"Current page\" type=\"number\" min=\"1\" max=\"4\" value=\"1\" />\n      <span aria-hidden=\"true\">of 4</span>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-next\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Go to next page\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-last\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Go to last page\">\n        <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </nav>\n</div>","title":"Top expanded","lang":"html","isFullscreen":true}}>
    </Example>
    <Example {...DocumentationComponentsPaginationCoreDocs} {...{"code":"<div class=\"pf-c-pagination pf-m-bottom\">\n  <div class=\"pf-c-options-menu\">\n    <div class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\">\n      <span class=\"pf-c-options-menu__toggle-text\">\n        <b>1 - 10</b>&nbsp;of&nbsp;\n        <b>37</b>\n      </span>\n      <button class=\"pf-c-options-menu__toggle-button\" id=\"pagination-options-menu-bottom-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"false\" aria-label=\"Items per page\">\n        <span class=\"pf-c-options-menu__toggle-button-icon\">\n          <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </div>\n    <ul class=\"pf-c-options-menu__menu\" aria-labelledby=\"pagination-options-menu-bottom-example-toggle\" hidden>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">10 per page\n          <div class=\"pf-c-options-menu__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n      </li>\n    </ul>\n  </div>\n  <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n    <div class=\"pf-c-pagination__nav-control pf-m-first\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" disabled aria-label=\"Go to first page\">\n        <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-prev\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" disabled aria-label=\"Go to previous page\">\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-page-select\">\n      <input class=\"pf-c-form-control\" aria-label=\"Current page\" type=\"number\" min=\"1\" max=\"4\" value=\"1\" />\n      <span aria-hidden=\"true\">of 4</span>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-next\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Go to next page\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-last\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Go to last page\">\n        <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </nav>\n</div>","title":"Bottom","lang":"html","isFullscreen":true}}>
    </Example>
    <Example {...DocumentationComponentsPaginationCoreDocs} {...{"code":"<div class=\"pf-c-pagination\">\n  <div class=\"pf-c-pagination__total-items\">\n    <b>1 - 10</b>&nbsp;of&nbsp;\n    <b>37</b>\n  </div>\n  <div class=\"pf-c-options-menu\">\n    <div class=\"pf-c-options-menu__toggle pf-m-text pf-m-disabled pf-m-plain\">\n      <span class=\"pf-c-options-menu__toggle-text\">\n        <b>1 - 10</b>&nbsp;of&nbsp;\n        <b>37</b>\n      </span>\n      <button class=\"pf-c-options-menu__toggle-button\" id=\"pagination-options-menu-top-disabled-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"false\" aria-label=\"Items per page\" disabled>\n        <span class=\"pf-c-options-menu__toggle-button-icon\">\n          <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </div>\n    <ul class=\"pf-c-options-menu__menu\" aria-labelledby=\"pagination-options-menu-top-disabled-example-toggle\" hidden>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">10 per page\n          <div class=\"pf-c-options-menu__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n      </li>\n    </ul>\n  </div>\n  <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n    <div class=\"pf-c-pagination__nav-control pf-m-first\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" disabled aria-label=\"Go to first page\">\n        <i class=\"fas fa-angle-double-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-prev\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" disabled aria-label=\"Go to previous page\">\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-page-select\">\n      <input class=\"pf-c-form-control\" disabled aria-label=\"Current page\" type=\"number\" min=\"1\" max=\"4\" value=\"1\" />\n      <span aria-hidden=\"true\">of 4</span>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-next\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" disabled aria-label=\"Go to next page\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-last\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" disabled aria-label=\"Go to last page\">\n        <i class=\"fas fa-angle-double-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </nav>\n</div>","title":"Top disabled","lang":"html","isFullscreen":true}}>
    </Example>
    <Example {...DocumentationComponentsPaginationCoreDocs} {...{"code":"<div class=\"pf-c-pagination pf-m-compact\">\n  <div class=\"pf-c-pagination__total-items\">\n    <b>1 - 10</b>&nbsp;of&nbsp;\n    <b>37</b>\n  </div>\n  <div class=\"pf-c-options-menu\">\n    <div class=\"pf-c-options-menu__toggle pf-m-text pf-m-plain\">\n      <span class=\"pf-c-options-menu__toggle-text\">\n        <b>1 - 10</b>&nbsp;of&nbsp;\n        <b>37</b>\n      </span>\n      <button class=\"pf-c-options-menu__toggle-button\" id=\"pagination-options-menu-compact-example-toggle\" aria-haspopup=\"listbox\" aria-expanded=\"false\" aria-label=\"Items per page\">\n        <span class=\"pf-c-options-menu__toggle-button-icon\">\n          <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n        </span>\n      </button>\n    </div>\n    <ul class=\"pf-c-options-menu__menu\" aria-labelledby=\"pagination-options-menu-compact-example-toggle\" hidden>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">5 per page</button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">10 per page\n          <div class=\"pf-c-options-menu__menu-item-icon\">\n            <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n          </div>\n        </button>\n      </li>\n      <li>\n        <button class=\"pf-c-options-menu__menu-item\" type=\"button\">20 per page</button>\n      </li>\n    </ul>\n  </div>\n  <nav class=\"pf-c-pagination__nav\" aria-label=\"Pagination\">\n    <div class=\"pf-c-pagination__nav-control pf-m-prev\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" disabled aria-label=\"Go to previous page\">\n        <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-pagination__nav-control pf-m-next\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Go to next page\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </nav>\n</div>","title":"Compact","lang":"html","isFullscreen":true}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Note: `}
      <code {...{"className":"ws-code"}}>
        {`<button>`}
      </code>
      {` or `}
      <code {...{"className":"ws-code"}}>
        {`<a>`}
      </code>
      {` elements can be used in `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-pagination__nav-page-select`}
      </code>
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
              {`aria-label`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-pagination__nav`}
            </code>
          </td>
          <td>
            {`Provides an accessible name for pagination navigation element. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Pagination nav input`}
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
              {`type="number"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-pagination`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form-control`}
            </code>
          </td>
          <td>
            {`Defines a field as a number. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`value`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-pagination__nav-page-select`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form-control`}
            </code>
          </td>
          <td>
            {`Provides initial integer value. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`min`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-pagination__nav-page-select`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form-control`}
            </code>
          </td>
          <td>
            {`Provides minimum integer value. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`max`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-pagination__nav-page-select`}
            </code>
            {` > `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form-control`}
            </code>
          </td>
          <td>
            {`Provides max integer value. `}
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
              {`.pf-c-pagination`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates pagination.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-pagination__current`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates element to display currently displayed items for use in responsive view. Only needed for default pagination, not `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-bottom`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-pagination__total-items`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates element to replace the options menu on mobile.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-pagination__nav`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<nav>`}
            </code>
          </td>
          <td>
            {`Initiates pagination nav.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-pagination__nav-control`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates pagination nav control.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-pagination__nav-page-select`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates pagination nav page select.`}
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
              {`.pf-c-pagination`}
            </code>
          </td>
          <td>
            {`Modifies for bottom pagination component styles.`}
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
              {`.pf-c-pagination`}
            </code>
          </td>
          <td>
            {`Modifies for compact pagination component styles.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-static`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-pagination.pf-m-bottom`}
            </code>
          </td>
          <td>
            {`Modifies bottom pagination to not be positioned sticky on mobile.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-first`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-pagination__nav-control`}
            </code>
          </td>
          <td>
            {`Indicates the control is for the first page button.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-prev`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-pagination__nav-control`}
            </code>
          </td>
          <td>
            {`Indicates the control is for the previous page button.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-next`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-pagination__nav-control`}
            </code>
          </td>
          <td>
            {`Indicates the control is for the next page button.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-last`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-pagination__nav-control`}
            </code>
          </td>
          <td>
            {`Indicates the control is for the last page button.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsPaginationCoreDocs.Component.displayName = 'DocumentationComponentsPaginationCoreDocs';
