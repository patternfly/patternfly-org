import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/components/ContextSelector/examples/./ContextSelector.css'

export const DocumentationComponentsContextSelectorCoreDocs = {
  "slug": "/documentation/components/context-selector/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/ContextSelector/examples/ContextSelector.md",
  "section": "components",
  "id": "Context selector",
  "title": "Context selector",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-context-selector"
};
DocumentationComponentsContextSelectorCoreDocs.liveContext = {
  
};
DocumentationComponentsContextSelectorCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsContextSelectorCoreDocs} {...{"code":"<div class=\"pf-c-context-selector\">\n  <span id=\"context-selector-collapsed-example-label\" hidden>Selected project:</span>\n  <button class=\"pf-c-context-selector__toggle\" id=\"context-selector-collapsed-example-toggle\"aria-labelledby=\"context-selector-collapsed-example-label context-selector-collapsed-example-toggle\">\n    <span class=\"pf-c-context-selector__toggle-text\">My project</span>\n    <span class=\"pf-c-context-selector__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-context-selector__menu\" hidden>\n    <div class=\"pf-c-context-selector__menu-search\">\n      <div class=\"pf-c-input-group\">\n        <input class=\"pf-c-form-control\" type=\"search\"placeholder=\"Search\"id=\"textInput1\"name=\"textInput1\"aria-labelledby=\"context-selector-collapsed-example-search-button\" />\n        <button class=\"pf-c-button pf-m-control\" type=\"button\" id=\"context-selector-collapsed-example-search-button\"aria-label=\"Search menu items\">\n          <i class=\"fas fa-search\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n    <ul class=\"pf-c-context-selector__menu-list\">\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">My project</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">OpenShift cluster</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">Production Ansible</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">AWS</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">Azure</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">My project</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">OpenShift cluster</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">Production Ansible</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">AWS</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">Azure</button>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class=\"pf-c-context-selector pf-m-expanded\">\n  <span id=\"context-selector-expanded-example-label\" hidden>Selected Project:</span>\n  <button class=\"pf-c-context-selector__toggle\" id=\"context-selector-expanded-example-toggle\"aria-labelledby=\"context-selector-expanded-example-label context-selector-expanded-example-toggle\">\n    <span class=\"pf-c-context-selector__toggle-text\">My project</span>\n    <span class=\"pf-c-context-selector__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-context-selector__menu\">\n    <div class=\"pf-c-context-selector__menu-search\">\n      <div class=\"pf-c-input-group\">\n        <input class=\"pf-c-form-control\" type=\"search\" placeholder=\"Search\" id=\"textInput2\" name=\"textInput2\" aria-labelledby=\"context-selector-expanded-example-search-button\" />\n        <button class=\"pf-c-button pf-m-control\" type=\"button\" id=\"context-selector-expanded-example-search-button\"aria-label=\"Search menu items\">\n          <i class=\"fas fa-search\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n    <ul class=\"pf-c-context-selector__menu-list\">\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">My project</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">OpenShift cluster</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">Production Ansible</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">AWS</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">Azure</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">My project</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">OpenShift cluster</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">Production Ansible</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">AWS</button>\n      </li>\n      <li>\n        <button class=\"pf-c-context-selector__menu-list-item\">Azure</button>\n      </li>\n    </ul>\n  </div>\n</div>","title":"Basic","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Added after React implementation.`}
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
              {`.pf-c-context-selector`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a context selector.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-context-selector__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates a toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-context-selector__toggle-text`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates text inside the toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-context-selector__toggle-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Inititiates the toggle icon wrapper.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-context-selector__menu`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiaties a menu.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-context-selector__menu-search`}
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
              {`.pf-c-context-selector__menu-list`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
          </td>
          <td>
            {`Initiaties an unordered list of menu items that sits under the input container.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-context-selector__menu-list-item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Initiaties a menu item.`}
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
              {`.pf-c-context-selector`}
            </code>
          </td>
          <td>
            {`Modifies for the expanded state.`}
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
              {`.pf-c-context-selector__toggle`}
            </code>
          </td>
          <td>
            {`Forces display of the active state of the toggle.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsContextSelectorCoreDocs.Component.displayName = 'DocumentationComponentsContextSelectorCoreDocs';
