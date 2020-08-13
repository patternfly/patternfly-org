import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsSearchInputCoreDocs = {
  "slug": "/documentation/components/search-input/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/SearchInput/examples/SearchInput.md",
  "section": "components",
  "id": "Search input",
  "title": "Search input",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-search-input"
};
DocumentationComponentsSearchInputCoreDocs.liveContext = {
  
};
DocumentationComponentsSearchInputCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsSearchInputCoreDocs} {...{"code":"<div class=\"pf-c-search-input\">\n  <span class=\"pf-c-search-input__text\">\n    <span class=\"pf-c-search-input__icon\">\n      <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n    </span>\n    <input class=\"pf-c-search-input__text-input\" type=\"text\" placeholder=\"Find by name\" aria-label=\"Find by name\" />\n  </span>\n</div>","title":"Basic","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSearchInputCoreDocs} {...{"code":"<div class=\"pf-c-search-input\">\n  <span class=\"pf-c-search-input__text\">\n    <span class=\"pf-c-search-input__icon\">\n      <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n    </span>\n    <input class=\"pf-c-search-input__text-input\" type=\"text\" placeholder=\"Find by name\" aria-label=\"Find by name\" value=\"Joh\" />\n  </span>\n  <span class=\"pf-c-search-input__utilities\">\n    <span class=\"pf-c-search-input__clear\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Clear\">\n        <i class=\"fas fa-times fa-fw\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </span>\n</div>","title":"No match","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSearchInputCoreDocs} {...{"code":"<div class=\"pf-c-search-input\">\n  <span class=\"pf-c-search-input__text\">\n    <span class=\"pf-c-search-input__icon\">\n      <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n    </span>\n    <input class=\"pf-c-search-input__text-input\" type=\"text\" placeholder=\"Find by name\" aria-label=\"Find by name\" value=\"John Doe\" />\n  </span>\n  <span class=\"pf-c-search-input__utilities\">\n    <span class=\"pf-c-search-input__count\">\n      <span class=\"pf-c-badge pf-m-read\">3</span>\n    </span>\n    <span class=\"pf-c-search-input__clear\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Clear\">\n        <i class=\"fas fa-times fa-fw\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </span>\n</div>","title":"Match with result count","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSearchInputCoreDocs} {...{"code":"<div class=\"pf-c-search-input\">\n  <span class=\"pf-c-search-input__text\">\n    <span class=\"pf-c-search-input__icon\">\n      <i class=\"fas fa-search fa-fw\" aria-hidden=\"true\"></i>\n    </span>\n    <input class=\"pf-c-search-input__text-input\" type=\"text\" placeholder=\"Find by name\" aria-label=\"Find by name\" value=\"John Doe\" />\n  </span>\n  <span class=\"pf-c-search-input__utilities\">\n    <span class=\"pf-c-search-input__count\">\n      <span class=\"pf-c-badge pf-m-read\">1 / 3</span>\n    </span>\n    <span class=\"pf-c-search-input__nav\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" disabled aria-label=\"Previous\">\n        <i class=\"fas fa-angle-down fa-fw\" aria-hidden=\"true\"></i>\n      </button>\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Next\">\n        <i class=\"fas fa-angle-up fa-fw\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n    <span class=\"pf-c-search-input__clear\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Clear\">\n        <i class=\"fas fa-times fa-fw\" aria-hidden=\"true\"></i>\n      </button>\n    </span>\n  </span>\n</div>","title":"Match with navigable options","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Attributes`}
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
              {`.pf-c-search-input__icon > *`}
            </code>
          </td>
          <td>
            {`Hides the search icon from assistive technologies. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="Previous"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-search-input__nav > .pf-c-button`}
            </code>
          </td>
          <td>
            {`Provides an accessible label for the previous nav button. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="Next"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-search-input__nav > .pf-c-button`}
            </code>
          </td>
          <td>
            {`Provides an accessible label for the next nav button. `}
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
              {`.pf-c-search-input__text-input`}
            </code>
          </td>
          <td>
            {`Provides an accessible label for the search input. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="Clear"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-search-input__clear > .pf-c-button`}
            </code>
          </td>
          <td>
            {`Provides an accessible label for the clear button. `}
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
              {`.pf-c-search-input`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the custom search input component. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-search-input__text`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the text area. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-search-input__text-input`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<input>`}
            </code>
          </td>
          <td>
            {`Initiates the search input. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-search-input__icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the search icon container. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-search-input__utilities`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the utilities area beside the search input.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-search-input__count`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the item count container.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-search-input__nav`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the navigable buttons container.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-search-input__clear`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the clear button container. `}
            <strong>
              {`Required when there is text in the search input`}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsSearchInputCoreDocs.Component.displayName = 'DocumentationComponentsSearchInputCoreDocs';
