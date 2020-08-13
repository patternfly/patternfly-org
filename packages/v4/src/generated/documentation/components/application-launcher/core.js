import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/components/AppLauncher/examples/./AppLauncher.css'

export const DocumentationComponentsApplicationLauncherCoreDocs = {
  "slug": "/documentation/components/application-launcher/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/AppLauncher/examples/AppLauncher.md",
  "section": "components",
  "id": "Application launcher",
  "title": "Application launcher",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-app-launcher"
};
DocumentationComponentsApplicationLauncherCoreDocs.liveContext = {
  
};
DocumentationComponentsApplicationLauncherCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsApplicationLauncherCoreDocs} {...{"code":"<nav class=\"pf-c-app-launcher\" aria-label=\"Application launcher\">\n  <button class=\"pf-c-app-launcher__toggle\" type=\"button\" id=\"app-launcher-collapsed-button\" aria-expanded=\"false\" aria-label=\"Application launcher\">\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-app-launcher__menu\" aria-labelledby=\"app-launcher-collapsed-button\" hidden>\n    <li>\n      <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-app-launcher__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-app-launcher__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n  </ul>\n</nav>","title":"Collapsed","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsApplicationLauncherCoreDocs} {...{"code":"<nav class=\"pf-c-app-launcher\" aria-label=\"Application launcher\">\n  <button class=\"pf-c-app-launcher__toggle\" type=\"button\" id=\"app-launcher-disabled-button\" aria-expanded=\"false\" aria-label=\"Application launcher\" disabled>\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-app-launcher__menu\" aria-labelledby=\"app-launcher-disabled-button\" hidden>\n    <li>\n      <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-app-launcher__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-app-launcher__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n  </ul>\n</nav>","title":"Disabled","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsApplicationLauncherCoreDocs} {...{"code":"<nav class=\"pf-c-app-launcher pf-m-expanded\" aria-label=\"Application launcher\">\n  <button class=\"pf-c-app-launcher__toggle\" type=\"button\" id=\"app-launcher-expanded-button\" aria-expanded=\"true\" aria-label=\"Application launcher\">\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-app-launcher__menu\" aria-labelledby=\"app-launcher-expanded-button\">\n    <li>\n      <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-app-launcher__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-app-launcher__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n  </ul>\n</nav>","title":"Expanded","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsApplicationLauncherCoreDocs} {...{"code":"<nav class=\"pf-c-app-launcher pf-m-expanded\" aria-label=\"Application launcher\">\n  <button class=\"pf-c-app-launcher__toggle\" type=\"button\" id=\"app-launcher-aligned-right-button\" aria-expanded=\"true\" aria-label=\"Application launcher\">\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-app-launcher__menu pf-m-align-right\" aria-labelledby=\"app-launcher-aligned-right-button\">\n    <li>\n      <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-app-launcher__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-app-launcher__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n  </ul>\n</nav>","title":"Aligned right","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsApplicationLauncherCoreDocs} {...{"code":"<nav class=\"pf-c-app-launcher pf-m-expanded pf-m-top\" aria-label=\"Application launcher\">\n  <button class=\"pf-c-app-launcher__toggle\" type=\"button\" id=\"app-launcher-aligned-top-button\" aria-expanded=\"true\" aria-label=\"Application launcher\">\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-app-launcher__menu\" aria-labelledby=\"app-launcher-aligned-top-button\">\n    <li>\n      <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Link</a>\n    </li>\n    <li>\n      <button class=\"pf-c-app-launcher__menu-item\" type=\"button\">Action</button>\n    </li>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <li>\n      <a class=\"pf-c-app-launcher__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n    </li>\n  </ul>\n</nav>","title":"Aligned top","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsApplicationLauncherCoreDocs} {...{"code":"<nav class=\"pf-c-app-launcher pf-m-expanded\" aria-label=\"Application launcher\">\n  <button class=\"pf-c-app-launcher__toggle\" type=\"button\" id=\"app-launcher-sections-and-dividers-between-sections-button\" aria-expanded=\"true\" aria-label=\"Application launcher\">\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <div class=\"pf-c-app-launcher__menu\" aria-labelledby=\"app-launcher-sections-and-dividers-between-sections-button\">\n    <section class=\"pf-c-app-launcher__group\">\n      <ul>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Link not in group</a>\n        </li>\n      </ul>\n    </section>\n    <hr class=\"pf-c-divider\" />\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Group 1</h1>\n      <ul>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Group 1 link</a>\n        </li>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Group 1 link</a>\n        </li>\n      </ul>\n    </section>\n    <hr class=\"pf-c-divider\" />\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Group 2</h1>\n      <ul>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Group 2 link</a>\n        </li>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Group 2 link</a>\n        </li>\n      </ul>\n    </section>\n  </div>\n</nav>","title":"With sections and dividers between sections","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsApplicationLauncherCoreDocs} {...{"code":"<nav class=\"pf-c-app-launcher pf-m-expanded\" aria-label=\"Application launcher\">\n  <button class=\"pf-c-app-launcher__toggle\" type=\"button\" id=\"app-launcher-sections-and-dividers-between-items-button\" aria-expanded=\"true\" aria-label=\"Application launcher\">\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <div class=\"pf-c-app-launcher__menu\" aria-labelledby=\"app-launcher-sections-and-dividers-between-items-button\">\n    <section class=\"pf-c-app-launcher__group\">\n      <ul>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Link not in group</a>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n      </ul>\n    </section>\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Group 1</h1>\n      <ul>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Group 1 link</a>\n        </li>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Group 1 link</a>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n      </ul>\n    </section>\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Group 2</h1>\n      <ul>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Group 2 link</a>\n        </li>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">Group 2 link</a>\n        </li>\n      </ul>\n    </section>\n  </div>\n</nav>","title":"With sections and dividers between items","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsApplicationLauncherCoreDocs} {...{"code":"<nav class=\"pf-c-app-launcher pf-m-expanded\" aria-label=\"Application launcher\">\n  <button class=\"pf-c-app-launcher__toggle\" type=\"button\" id=\"app-launcher-sections-dividers-icons-and-external-links-button\" aria-expanded=\"true\" aria-label=\"Application launcher\">\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <div class=\"pf-c-app-launcher__menu\" aria-labelledby=\"app-launcher-sections-dividers-icons-and-external-links-button\">\n    <section class=\"pf-c-app-launcher__group\">\n      <ul>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item\" href=\"#\">\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>Link not in group</a>\n        </li>\n      </ul>\n    </section>\n    <li class=\"pf-c-divider\" role=\"separator\"></li>\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Group 1</h1>\n      <ul>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item pf-m-external\" href=\"#\" target=\"_blank\">\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>Group 1 link\n            <span class=\"pf-c-app-launcher__menu-item-external-icon\">\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n        </li>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item pf-m-external\" href=\"#\" target=\"_blank\">\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>Group 1 link\n            <span class=\"pf-c-app-launcher__menu-item-external-icon\">\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n      </ul>\n    </section>\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Group 2</h1>\n      <ul>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item pf-m-external\" href=\"#\" target=\"_blank\">\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>Group 2 link\n            <span class=\"pf-c-app-launcher__menu-item-external-icon\">\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n        </li>\n        <li>\n          <a class=\"pf-c-app-launcher__menu-item pf-m-external\" href=\"#\" target=\"_blank\">\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>Group 2 link\n            <span class=\"pf-c-app-launcher__menu-item-external-icon\">\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n        </li>\n      </ul>\n    </section>\n  </div>\n</nav>","title":"With sections, dividers, icons, and external links","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsApplicationLauncherCoreDocs} {...{"code":"<nav class=\"pf-c-app-launcher pf-m-expanded\" aria-label=\"Application launcher\">\n  <button class=\"pf-c-app-launcher__toggle\" type=\"button\" id=\"app-launcher-favorites-button\" aria-expanded=\"true\" aria-label=\"Application launcher\">\n    <i class=\"fas fa-th\" aria-hidden=\"true\"></i>\n  </button>\n  <div class=\"pf-c-app-launcher__menu\" aria-labelledby=\"app-launcher-favorites-button\">\n    <div class=\"pf-c-app-launcher__menu-search\">\n      <input class=\"pf-c-form-control\" type=\"search\" aria-label=\"Type to filter\" placeholder=\"Filter by name...\" id=\"app-launcher-favorites-text-input\" name=\"textInput1\" />\n    </div>\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Favorites</h1>\n      <ul>\n        <li class=\"pf-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite\">\n          <a class=\"pf-c-app-launcher__menu-item pf-m-link\" href=\"#\" target=\"_blank\">\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>Link 2\n            <span class=\"pf-c-app-launcher__menu-item-external-icon\">\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n          <button class=\"pf-c-app-launcher__menu-item pf-m-action\" type=\"button\">\n            <i class=\"fas fa-star\" aria-label=\"Favorite\"></i>\n          </button>\n        </li>\n        <li class=\"pf-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite\">\n          <a class=\"pf-c-app-launcher__menu-item pf-m-link\" href=\"#\" target=\"_blank\">\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>Link 3\n            <span class=\"pf-c-app-launcher__menu-item-external-icon\">\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n          <button class=\"pf-c-app-launcher__menu-item pf-m-action\" type=\"button\">\n            <i class=\"fas fa-star\" aria-label=\"Favorite\"></i>\n          </button>\n        </li>\n      </ul>\n    </section>\n    <hr class=\"pf-c-divider\" />\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Group 1</h1>\n      <ul>\n        <li class=\"pf-c-app-launcher__menu-wrapper pf-m-external\">\n          <a class=\"pf-c-app-launcher__menu-item pf-m-link\" href=\"#\" target=\"_blank\">\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>Link 1\n            <span class=\"pf-c-app-launcher__menu-item-external-icon\">\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n          <button class=\"pf-c-app-launcher__menu-item pf-m-action\" type=\"button\">\n            <i class=\"fas fa-star\" aria-label=\"Favorite\"></i>\n          </button>\n        </li>\n        <li class=\"pf-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite\">\n          <a class=\"pf-c-app-launcher__menu-item pf-m-link\" href=\"#\" target=\"_blank\">\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>Link 2\n            <span class=\"pf-c-app-launcher__menu-item-external-icon\">\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n          <button class=\"pf-c-app-launcher__menu-item pf-m-action\" type=\"button\">\n            <i class=\"fas fa-star\" aria-label=\"Favorite\"></i>\n          </button>\n        </li>\n      </ul>\n    </section>\n    <hr class=\"pf-c-divider\" />\n    <section class=\"pf-c-app-launcher__group\">\n      <h1 class=\"pf-c-app-launcher__group-title\">Group 2</h1>\n      <ul>\n        <li class=\"pf-c-app-launcher__menu-wrapper pf-m-external pf-m-favorite\">\n          <a class=\"pf-c-app-launcher__menu-item pf-m-link\" href=\"#\" target=\"_blank\">\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>Link 3\n            <span class=\"pf-c-app-launcher__menu-item-external-icon\">\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n          <button class=\"pf-c-app-launcher__menu-item pf-m-action\" type=\"button\">\n            <i class=\"fas fa-star\" aria-label=\"Favorite\"></i>\n          </button>\n        </li>\n        <li class=\"pf-c-app-launcher__menu-wrapper pf-m-external\">\n          <a class=\"pf-c-app-launcher__menu-item pf-m-link\" href=\"#\" target=\"_blank\">\n            <span class=\"pf-c-app-launcher__menu-item-icon\">\n              <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n            </span>Link 4\n            <span class=\"pf-c-app-launcher__menu-item-external-icon\">\n              <i class=\"fas fa-external-link-alt\" aria-hidden=\"true\"></i>\n            </span>\n            <span class=\"pf-screen-reader\">(opens new window)</span>\n          </a>\n          <button class=\"pf-c-app-launcher__menu-item pf-m-action\" type=\"button\">\n            <i class=\"fas fa-star\" aria-label=\"Favorite\"></i>\n          </button>\n        </li>\n      </ul>\n    </section>\n  </div>\n</nav>","title":"Favorites","lang":"html"}}>
    </Example>
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
            {`Applied`}
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
              {`aria-label="Application launcher"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-app-launcher`}
            </code>
          </td>
          <td>
            {`Gives the app launcher element an accessible name. `}
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
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Indicates that the menu is hidden.`}
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
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Indicates that the menu is visible.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="Actions"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Provides an accessible name for the app launcher when an icon is used. `}
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
              {`.pf-c-app-launcher__menu`}
            </code>
          </td>
          <td>
            {`Indicates that the menu is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies.`}
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
              {`.pf-c-app-launcher__toggle`}
            </code>
          </td>
          <td>
            {`Disables the app launcher toggle and removes it from keyboard focus.`}
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
              {`button.pf-c-app-launcher__menu-item`}
            </code>
          </td>
          <td>
            {`When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-disabled="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`a.pf-c-app-launcher__menu-item`}
            </code>
          </td>
          <td>
            {`When the menu item uses a link element, indicates that it is unavailable.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`tabindex="-1"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`a.pf-c-app-launcher__menu-item`}
            </code>
          </td>
          <td>
            {`When the menu item uses a link element, removes it from keyboard focus.`}
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
              {`.pf-c-app-launcher__menu-item-external-icon > *`}
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
            {`Applied`}
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
              {`.pf-c-app-launcher`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<nav>`}
            </code>
          </td>
          <td>
            {`Defines the parent wrapper of the app launcher.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-app-launcher__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Defines the app launcher toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-app-launcher__menu`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Defines the parent wrapper of the menu items. Use a `}
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
            {` if your app launcher has groups.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-app-launcher__menu-search`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Defines the wrapper for the search input.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-app-launcher__group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<section>`}
            </code>
          </td>
          <td>
            {`Defines a group of items. Required when there is more than one group.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-app-launcher__group-title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<h1>`}
            </code>
          </td>
          <td>
            {`Defines a title for a group of items.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-app-launcher__menu-wrapper`}
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
              {`.pf-c-app-launcher__menu-item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<a>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Defines a menu item.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-app-launcher__menu-item-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Defines the wrapper for the menu item icon.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-app-launcher__menu-item-external-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Defines the wrapper for the external link icon that appears on hover/focus. Use with `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-external`}
            </code>
            {`.`}
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
              {`.pf-c-app-launcher`}
            </code>
          </td>
          <td>
            {`Modifies for the expanded state.`}
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
              {`.pf-c-app-launcher`}
            </code>
          </td>
          <td>
            {`Modifies to display the menu above the toggle.`}
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
              {`.pf-c-app-launcher__menu`}
            </code>
          </td>
          <td>
            {`Modifies to display the menu aligned to the right edge of the toggle.`}
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
              {`a.pf-c-app-launcher__menu-item`}
            </code>
          </td>
          <td>
            {`Modifies to display the menu item as disabled.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-external`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-app-launcher__menu-item`}
            </code>
          </td>
          <td>
            {`Modifies to display the menu item as having an external link icon on hover/focus.`}
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
              {`.pf-c-app-launcher__menu-wrapper`}
            </code>
          </td>
          <td>
            {`Modifies wrapper to indicate that the item row has been favorited.`}
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
              {`.pf-c-app-launcher__menu-item.pf-m-wrapper > .pf-c-app-launcher__menu-item`}
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
              {`.pf-c-app-launcher__menu-item.pf-m-wrapper > .pf-c-app-launcher__menu-item`}
            </code>
          </td>
          <td>
            {`Modifies item to for action styles.`}
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
              {`.pf-c-app-launcher__toggle`}
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
DocumentationComponentsApplicationLauncherCoreDocs.Component.displayName = 'DocumentationComponentsApplicationLauncherCoreDocs';
