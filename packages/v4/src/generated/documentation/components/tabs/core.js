import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsTabsCoreDocs = {
  "slug": "/documentation/components/tabs/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Tabs/examples/Tabs.md",
  "section": "components",
  "id": "Tabs",
  "title": "Tabs",
  "toc": [
    "Examples",
    "Usage"
  ],
  "cssPrefix": "pf-c-tabs"
};
DocumentationComponentsTabsCoreDocs.liveContext = {
  
};
DocumentationComponentsTabsCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsTabsCoreDocs} {...{"code":"<div class=\"pf-c-tabs\" id=\"default-example\">\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-example-users-link\">\n        <span class=\"pf-c-tabs__item-text\">Users</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <button class=\"pf-c-tabs__link\" id=\"default-example-containers-link\">\n        <span class=\"pf-c-tabs__item-text\">Containers</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-example-database-link\">\n        <span class=\"pf-c-tabs__item-text\">Database</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-example-server-link\">\n        <span class=\"pf-c-tabs__item-text\">Server</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-example-system-link\">\n        <span class=\"pf-c-tabs__item-text\">System</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-example-network-wired-link\">\n        <span class=\"pf-c-tabs__item-text\">Network</span>\n      </button>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</div>","title":"Default","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTabsCoreDocs} {...{"code":"<div class=\"pf-c-tabs pf-m-scrollable\" id=\"default-overflow-beginning-of-list-example\">\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-overflow-beginning-of-list-example-users-link\">\n        <span class=\"pf-c-tabs__item-text\">Users</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <button class=\"pf-c-tabs__link\" id=\"default-overflow-beginning-of-list-example-containers-link\">\n        <span class=\"pf-c-tabs__item-text\">Containers</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-overflow-beginning-of-list-example-database-link\">\n        <span class=\"pf-c-tabs__item-text\">Database</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-overflow-beginning-of-list-example-server-link\">\n        <span class=\"pf-c-tabs__item-text\">Server</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-overflow-beginning-of-list-example-system-link\">\n        <span class=\"pf-c-tabs__item-text\">System</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-overflow-beginning-of-list-example-network-wired-link\">\n        <span class=\"pf-c-tabs__item-text\">Network</span>\n      </button>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</div>","title":"Default overflow beginning of list","lang":"html"}}>
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
              {`disabled`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs__scroll-button`}
            </code>
          </td>
          <td>
            {`Indicates that a scroll button is disabled, when at the first or last item of a list. `}
            <strong>
              {`Required when disabled`}
            </strong>
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
              {`.pf-c-tabs__scroll-button`}
            </code>
          </td>
          <td>
            {`Hides the icon from assistive technologies.`}
            <strong>
              {`Required when not scrollable`}
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
              {`.pf-m-scrollable`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs`}
            </code>
          </td>
          <td>
            {`Enables the directional scroll buttons.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs__scroll-button`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates a tabs component scroll button.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsTabsCoreDocs} {...{"code":"<div class=\"pf-c-tabs pf-m-vertical\" id=\"vertical-example\">\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"vertical-example-users-link\">\n        <span class=\"pf-c-tabs__item-text\">Users</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <button class=\"pf-c-tabs__link\" id=\"vertical-example-containers-link\">\n        <span class=\"pf-c-tabs__item-text\">Containers</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"vertical-example-database-link\">\n        <span class=\"pf-c-tabs__item-text\">Database</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"vertical-example-server-link\">\n        <span class=\"pf-c-tabs__item-text\">Server</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"vertical-example-system-link\">\n        <span class=\"pf-c-tabs__item-text\">System</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"vertical-example-network-wired-link\">\n        <span class=\"pf-c-tabs__item-text\">Network</span>\n      </button>\n    </li>\n  </ul>\n</div>","title":"Vertical","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTabsCoreDocs} {...{"code":"<div class=\"pf-c-tabs pf-m-box\" id=\"box-example\">\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-example-users-link\">\n        <span class=\"pf-c-tabs__item-text\">Users</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <button class=\"pf-c-tabs__link\" id=\"box-example-containers-link\">\n        <span class=\"pf-c-tabs__item-text\">Containers</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-example-database-link\">\n        <span class=\"pf-c-tabs__item-text\">Database</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-example-server-link\">\n        <span class=\"pf-c-tabs__item-text\">Server</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-example-system-link\">\n        <span class=\"pf-c-tabs__item-text\">System</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-example-network-wired-link\">\n        <span class=\"pf-c-tabs__item-text\">Network</span>\n      </button>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</div>","title":"Box","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTabsCoreDocs} {...{"code":"<div class=\"pf-c-tabs pf-m-box pf-m-scrollable\" id=\"box-overflow-example\">\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-overflow-example-users-link\">\n        <span class=\"pf-c-tabs__item-text\">Users</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <button class=\"pf-c-tabs__link\" id=\"box-overflow-example-containers-link\">\n        <span class=\"pf-c-tabs__item-text\">Containers</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-overflow-example-database-link\">\n        <span class=\"pf-c-tabs__item-text\">Database</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-overflow-example-server-link\">\n        <span class=\"pf-c-tabs__item-text\">Server</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-overflow-example-system-link\">\n        <span class=\"pf-c-tabs__item-text\">System</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-overflow-example-network-wired-link\">\n        <span class=\"pf-c-tabs__item-text\">Network</span>\n      </button>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</div>","title":"Box overflow","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTabsCoreDocs} {...{"code":"<div class=\"pf-c-tabs pf-m-box pf-m-vertical\" id=\"box-vertical-example\">\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-vertical-example-users-link\">\n        <span class=\"pf-c-tabs__item-text\">Users</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <button class=\"pf-c-tabs__link\" id=\"box-vertical-example-containers-link\">\n        <span class=\"pf-c-tabs__item-text\">Containers</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-vertical-example-database-link\">\n        <span class=\"pf-c-tabs__item-text\">Database</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-vertical-example-server-link\">\n        <span class=\"pf-c-tabs__item-text\">Server</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-vertical-example-system-link\">\n        <span class=\"pf-c-tabs__item-text\">System</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-vertical-example-network-wired-link\">\n        <span class=\"pf-c-tabs__item-text\">Network</span>\n      </button>\n    </li>\n  </ul>\n</div>","title":"Box vertical","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTabsCoreDocs} {...{"code":"<div class=\"pf-c-tabs pf-m-inset-sm-on-md pf-m-inset-lg-on-lg pf-m-inset-2xl-on-xl\" id=\"inset-example\">\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"inset-example-users-link\">\n        <span class=\"pf-c-tabs__item-text\">Users</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <button class=\"pf-c-tabs__link\" id=\"inset-example-containers-link\">\n        <span class=\"pf-c-tabs__item-text\">Containers</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"inset-example-database-link\">\n        <span class=\"pf-c-tabs__item-text\">Database</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"inset-example-server-link\">\n        <span class=\"pf-c-tabs__item-text\">Server</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"inset-example-system-link\">\n        <span class=\"pf-c-tabs__item-text\">System</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"inset-example-network-wired-link\">\n        <span class=\"pf-c-tabs__item-text\">Network</span>\n      </button>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</div>","title":"Inset","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTabsCoreDocs} {...{"code":"<div class=\"pf-c-tabs pf-m-box pf-m-inset-sm-on-md pf-m-inset-lg-on-lg pf-m-inset-2xl-on-xl\" id=\"inset-box-example\">\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"inset-box-example-users-link\">\n        <span class=\"pf-c-tabs__item-text\">Users</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <button class=\"pf-c-tabs__link\" id=\"inset-box-example-containers-link\">\n        <span class=\"pf-c-tabs__item-text\">Containers</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"inset-box-example-database-link\">\n        <span class=\"pf-c-tabs__item-text\">Database</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"inset-box-example-server-link\">\n        <span class=\"pf-c-tabs__item-text\">Server</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"inset-box-example-system-link\">\n        <span class=\"pf-c-tabs__item-text\">System</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"inset-box-example-network-wired-link\">\n        <span class=\"pf-c-tabs__item-text\">Network</span>\n      </button>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</div>","title":"Inset box","lang":"html"}}>
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
              {`.pf-m-inset-{none, sm, md, lg, xl, 2xl, 3xl}{-on-[sm, md, lg, xl, 2xl]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs`}
            </code>
          </td>
          <td>
            {`Modifies the tabs component padding/inset to visually match padding of other adjacent components.`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsTabsCoreDocs} {...{"code":"<div class=\"pf-c-tabs\" id=\"icons-example\">\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"icons-example-users-link\">\n        <span class=\"pf-c-tabs__item-icon\" aria-hidden=\"true\">\n          <i class=\"fas fa-fas fa-users\"></i>\n        </span>\n        <span class=\"pf-c-tabs__item-text\">Users</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <button class=\"pf-c-tabs__link\" id=\"icons-example-containers-link\">\n        <span class=\"pf-c-tabs__item-icon\" aria-hidden=\"true\">\n          <i class=\"fas fa-fas fa-box\"></i>\n        </span>\n        <span class=\"pf-c-tabs__item-text\">Containers</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"icons-example-database-link\">\n        <span class=\"pf-c-tabs__item-icon\" aria-hidden=\"true\">\n          <i class=\"fas fa-database\"></i>\n        </span>\n        <span class=\"pf-c-tabs__item-text\">Database</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"icons-example-server-link\">\n        <span class=\"pf-c-tabs__item-icon\" aria-hidden=\"true\">\n          <i class=\"fas fa-server\"></i>\n        </span>\n        <span class=\"pf-c-tabs__item-text\">Server</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"icons-example-system-link\">\n        <span class=\"pf-c-tabs__item-icon\" aria-hidden=\"true\">\n          <i class=\"fas fa-laptop\"></i>\n        </span>\n        <span class=\"pf-c-tabs__item-text\">System</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"icons-example-network-wired-link\">\n        <span class=\"pf-c-tabs__item-icon\" aria-hidden=\"true\">\n          <i class=\"fas fa-project-diagram\"></i>\n        </span>\n        <span class=\"pf-c-tabs__item-text\">Network</span>\n      </button>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</div>","title":"Icons and text","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTabsCoreDocs} {...{"code":"<div class=\"pf-c-tabs pf-m-scrollable\" id=\"default-parent-example\">\n  <button class=\"pf-c-tabs__scroll-button\" aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-parent-example-users-link\">\n        <span class=\"pf-c-tabs__item-text\">Users</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <button class=\"pf-c-tabs__link\" id=\"default-parent-example-containers-link\">\n        <span class=\"pf-c-tabs__item-text\">Containers</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-parent-example-database-link\">\n        <span class=\"pf-c-tabs__item-text\">Database</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-parent-example-server-link\">\n        <span class=\"pf-c-tabs__item-text\">Server</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-parent-example-system-link\">\n        <span class=\"pf-c-tabs__item-text\">System</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-parent-example-network-wired-link\">\n        <span class=\"pf-c-tabs__item-text\">Network</span>\n      </button>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n<div class=\"pf-c-tabs pf-m-secondary pf-m-scrollable\" id=\"default-child-example\">\n  <button class=\"pf-c-tabs__scroll-button\" aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-child-example-sub-1-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 1</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-child-example-sub-2-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 2</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <button class=\"pf-c-tabs__link\" id=\"default-child-example-sub-3-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 3</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-child-example-sub-4-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 4</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-child-example-sub-5-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 5</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"default-child-example-sub-6-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 6</span>\n      </button>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</div>","title":"Tabs with sub tabs","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTabsCoreDocs} {...{"code":"<div class=\"pf-c-tabs pf-m-box pf-m-scrollable\" id=\"box-parent-example\">\n  <button class=\"pf-c-tabs__scroll-button\" aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-parent-example-users-link\">\n        <span class=\"pf-c-tabs__item-text\">Users</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <button class=\"pf-c-tabs__link\" id=\"box-parent-example-containers-link\">\n        <span class=\"pf-c-tabs__item-text\">Containers</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-parent-example-database-link\">\n        <span class=\"pf-c-tabs__item-text\">Database</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-parent-example-server-link\">\n        <span class=\"pf-c-tabs__item-text\">Server</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-parent-example-system-link\">\n        <span class=\"pf-c-tabs__item-text\">System</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-parent-example-network-wired-link\">\n        <span class=\"pf-c-tabs__item-text\">Network</span>\n      </button>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n<div class=\"pf-c-tabs pf-m-secondary pf-m-scrollable\" id=\"box-child-example\">\n  <button class=\"pf-c-tabs__scroll-button\" aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-child-example-sub-1-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 1</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-child-example-sub-2-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 2</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <button class=\"pf-c-tabs__link\" id=\"box-child-example-sub-3-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 3</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-child-example-sub-4-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 4</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-child-example-sub-5-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 5</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"box-child-example-sub-6-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 6</span>\n      </button>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</div>","title":"Box tabs with sub tabs","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTabsCoreDocs} {...{"code":"<div class=\"pf-c-tabs pf-m-fill\" id=\"filled-example\">\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"filled-example-users-link\">\n        <span class=\"pf-c-tabs__item-text\">Users</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <button class=\"pf-c-tabs__link\" id=\"filled-example-containers-link\">\n        <span class=\"pf-c-tabs__item-text\">Containers</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"filled-example-database-link\">\n        <span class=\"pf-c-tabs__item-text\">Database</span>\n      </button>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</div>","title":"Filled","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTabsCoreDocs} {...{"code":"<div class=\"pf-c-tabs pf-m-fill\" id=\"filled-with-icons-example\">\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"filled-with-icons-example-users-link\">\n        <span class=\"pf-c-tabs__item-icon\" aria-hidden=\"true\">\n          <i class=\"fas fa-fas fa-users\"></i>\n        </span>\n        <span class=\"pf-c-tabs__item-text\">Users</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <button class=\"pf-c-tabs__link\" id=\"filled-with-icons-example-containers-link\">\n        <span class=\"pf-c-tabs__item-icon\" aria-hidden=\"true\">\n          <i class=\"fas fa-fas fa-box\"></i>\n        </span>\n        <span class=\"pf-c-tabs__item-text\">Containers</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"filled-with-icons-example-database-link\">\n        <span class=\"pf-c-tabs__item-icon\" aria-hidden=\"true\">\n          <i class=\"fas fa-database\"></i>\n        </span>\n        <span class=\"pf-c-tabs__item-text\">Database</span>\n      </button>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</div>","title":"Filled with icons","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTabsCoreDocs} {...{"code":"<div class=\"pf-c-tabs pf-m-fill pf-m-box\" id=\"filled-box-example\">\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"filled-box-example-users-link\">\n        <span class=\"pf-c-tabs__item-text\">Users</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <button class=\"pf-c-tabs__link\" id=\"filled-box-example-containers-link\">\n        <span class=\"pf-c-tabs__item-text\">Containers</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"filled-box-example-database-link\">\n        <span class=\"pf-c-tabs__item-text\">Database</span>\n      </button>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</div>","title":"Filled box","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTabsCoreDocs} {...{"code":"<div class=\"pf-c-tabs pf-m-fill pf-m-box\" id=\"filled-box-with-icons-example\">\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"filled-box-with-icons-example-users-link\">\n        <span class=\"pf-c-tabs__item-icon\" aria-hidden=\"true\">\n          <i class=\"fas fa-fas fa-users\"></i>\n        </span>\n        <span class=\"pf-c-tabs__item-text\">Users</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <button class=\"pf-c-tabs__link\" id=\"filled-box-with-icons-example-containers-link\">\n        <span class=\"pf-c-tabs__item-icon\" aria-hidden=\"true\">\n          <i class=\"fas fa-fas fa-box\"></i>\n        </span>\n        <span class=\"pf-c-tabs__item-text\">Containers</span>\n      </button>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <button class=\"pf-c-tabs__link\" id=\"filled-box-with-icons-example-database-link\">\n        <span class=\"pf-c-tabs__item-icon\" aria-hidden=\"true\">\n          <i class=\"fas fa-database\"></i>\n        </span>\n        <span class=\"pf-c-tabs__item-text\">Database</span>\n      </button>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</div>","title":"Filled box with icons","lang":"html"}}>
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
              {`.pf-m-fill`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs`}
            </code>
          </td>
          <td>
            {`Modifies the tabs to fill the available space. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsTabsCoreDocs} {...{"code":"<nav class=\"pf-c-tabs pf-m-scrollable\" aria-label=\"Local\" id=\"default-scroll-nav-example\">\n  <button class=\"pf-c-tabs__scroll-button\" aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"default-scroll-nav-example-users-link\">\n        <span class=\"pf-c-tabs__item-text\">Users</span>\n      </a>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"default-scroll-nav-example-containers-link\">\n        <span class=\"pf-c-tabs__item-text\">Containers</span>\n      </a>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"default-scroll-nav-example-database-link\">\n        <span class=\"pf-c-tabs__item-text\">Database</span>\n      </a>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"default-scroll-nav-example-server-link\">\n        <span class=\"pf-c-tabs__item-text\">Server</span>\n      </a>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"default-scroll-nav-example-system-link\">\n        <span class=\"pf-c-tabs__item-text\">System</span>\n      </a>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"default-scroll-nav-example-network-wired-link\">\n        <span class=\"pf-c-tabs__item-text\">Network</span>\n      </a>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</nav>","title":"Using the nav element","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTabsCoreDocs} {...{"code":"<nav class=\"pf-c-tabs\" aria-label=\"Local\" id=\"primary-nav-example\">\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"primary-nav-example-users-link\">\n        <span class=\"pf-c-tabs__item-text\">Users</span>\n      </a>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"primary-nav-example-containers-link\">\n        <span class=\"pf-c-tabs__item-text\">Containers</span>\n      </a>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"primary-nav-example-database-link\">\n        <span class=\"pf-c-tabs__item-text\">Database</span>\n      </a>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"primary-nav-example-server-link\">\n        <span class=\"pf-c-tabs__item-text\">Server</span>\n      </a>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"primary-nav-example-system-link\">\n        <span class=\"pf-c-tabs__item-text\">System</span>\n      </a>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"primary-nav-example-network-wired-link\">\n        <span class=\"pf-c-tabs__item-text\">Network</span>\n      </a>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</nav>\n<nav class=\"pf-c-tabs pf-m-secondary\" aria-label=\"Local secondary\" id=\"secondary-nav-example\">\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-tabs__list\">\n    <li class=\"pf-c-tabs__item\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"secondary-nav-example-sub-1-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 1</span>\n      </a>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"secondary-nav-example-sub-2-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 2</span>\n      </a>\n    </li>\n    <li class=\"pf-c-tabs__item pf-m-current\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"secondary-nav-example-sub-3-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 3</span>\n      </a>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"secondary-nav-example-sub-4-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 4</span>\n      </a>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"secondary-nav-example-sub-5-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 5</span>\n      </a>\n    </li>\n    <li class=\"pf-c-tabs__item\">\n      <a class=\"pf-c-tabs__link\" href=\"#\" id=\"secondary-nav-example-sub-6-link\">\n        <span class=\"pf-c-tabs__item-text\">Item 6</span>\n      </a>\n    </li>\n  </ul>\n  <button class=\"pf-c-tabs__scroll-button\" disabled aria-hidden=\"true\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</nav>","title":"Sub nav using the nav element","lang":"html"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`The tabs component should only be used to change content views within a page. The similar-looking but semantically different `}
      <PatternflyThemeLink {...{"to":"/documentation/core/components/nav"}}>
        {`horizontal nav component`}
      </PatternflyThemeLink>
      {` is available for general navigation use cases.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Tabs should be used with the `}
      <PatternflyThemeLink {...{"to":"/documentation/core/components/tabcontent"}}>
        {`tab content component`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Whenever a list of tabs is unique on the current page, it can be used in a `}
      <code {...{"className":"ws-code"}}>
        {`<nav>`}
      </code>
      {` element. Cases where the same set of tabs are duplicated in multiple regions on a page (e.g. cards on a dashboard) are less likely to benefit from using the `}
      <code {...{"className":"ws-code"}}>
        {`<nav>`}
      </code>
      {` element.`}
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
              {`aria-label="Descriptive text"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`nav.pf-c-tabs`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`nav.pf-c-tabs.pf-m-secondary`}
            </code>
          </td>
          <td>
            {`Gives the `}
            <code {...{"className":"ws-code"}}>
              {`<nav>`}
            </code>
            {` an accessible label. `}
            <strong>
              {`Required when `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-tabs`}
              </code>
              {` is used with `}
              <code {...{"className":"ws-code"}}>
                {`<nav>`}
              </code>
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="Descriptive text"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-inline-edit__toggle > button`}
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
              {`disabled`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs__scroll-button`}
            </code>
          </td>
          <td>
            {`Indicates that a scroll button is disable, typically when at the first or last item of a list or scroll buttons are hidden. `}
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
              {`.pf-c-tabs`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<nav>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the tabs component. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs__list`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
          </td>
          <td>
            {`Initiates a tabs component list. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs__item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Initiates a tabs component item. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs__item-text`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates a tabs component item icon. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs__item-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates a tabs component item text. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs__link`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<a>`}
            </code>
          </td>
          <td>
            {`Initiates a tabs component link. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs__scroll-button`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates a tabs component scroll button.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-secondary`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs`}
            </code>
          </td>
          <td>
            {`Applies secondary styling to the tab component.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-no-border-bottom`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs`}
            </code>
          </td>
          <td>
            {`Removes bottom border from a tab component.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-box`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs`}
            </code>
          </td>
          <td>
            {`Applies box styling to the tab component.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-vertical`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs`}
            </code>
          </td>
          <td>
            {`Applies vertical styling to the tab component.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-fill`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs`}
            </code>
          </td>
          <td>
            {`Modifies the tabs to fill the available space.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-current`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs__item`}
            </code>
          </td>
          <td>
            {`Indicates that a tab item is currently selected.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-inset-{none, sm, md, lg, xl, 2xl}{-on-[md, lg, xl, 2xl]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tabs`}
            </code>
          </td>
          <td>
            {`Modifies the tabs component padding/inset to visually match padding of other adjacent components.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsTabsCoreDocs.Component.displayName = 'DocumentationComponentsTabsCoreDocs';
