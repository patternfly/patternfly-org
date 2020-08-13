import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsHintCoreDocs = {
  "slug": "/documentation/components/hint/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Hint/examples/Hint.md",
  "section": "components",
  "id": "Hint",
  "title": "Hint",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-hint"
};
DocumentationComponentsHintCoreDocs.liveContext = {
  
};
DocumentationComponentsHintCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsHintCoreDocs} {...{"code":"<div class=\"pf-c-hint\">\n  <div class=\"pf-c-hint__actions\">\n    <div class=\"pf-c-dropdown\">\n      <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"hint-with-title-dropdown-kebab-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n        <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n      </button>\n      <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"hint-with-title-dropdown-kebab-button\" hidden>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n        </li>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"pf-c-hint__title\">Do more with Find it Fix it capabilities</div>\n  <div class=\"pf-c-hint__body\">Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.</div>\n</div>\n<br />\n<div class=\"pf-c-hint\">\n  <div class=\"pf-c-hint__actions\">\n    <div class=\"pf-c-dropdown\">\n      <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"hint-with-title-with-footer-dropdown-kebab-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n        <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n      </button>\n      <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"hint-with-title-with-footer-dropdown-kebab-button\" hidden>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n        </li>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"pf-c-hint__title\">Do more with Find it Fix it capabilities</div>\n  <div class=\"pf-c-hint__body\">Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.</div>\n  <div class=\"pf-c-hint__footer\">\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Try it for 90 days</button>\n  </div>\n</div>","title":"Hint with title","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsHintCoreDocs} {...{"code":"<div class=\"pf-c-hint\">\n  <div class=\"pf-c-hint__body\">Welcome to the new documentation experience.\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Learn more about the improved features.</button>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-hint\">\n  <div class=\"pf-c-hint__actions\">\n    <div class=\"pf-c-dropdown\">\n      <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"hint-with-no-title-dropdown-kebab-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n        <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n      </button>\n      <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"hint-with-no-title-dropdown-kebab-button\" hidden>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n        </li>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n        </li>\n        <li>\n          <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n        </li>\n        <li class=\"pf-c-divider\" role=\"separator\"></li>\n        <li>\n          <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"pf-c-hint__body\">Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.</div>\n  <div class=\"pf-c-hint__footer\">\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Try it for 90 days</button>\n  </div>\n</div>","title":"Default with no title","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
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
              {`.pf-c-hint`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the hint component. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-hint__title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the hint title element.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-hint__body`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the hint body element.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-hint__footer`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the hint footer element.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-hint__actions`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the hint actions element.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsHintCoreDocs.Component.displayName = 'DocumentationComponentsHintCoreDocs';
