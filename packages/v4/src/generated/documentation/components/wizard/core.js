import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/components/Wizard/examples/./Wizard.css'

export const DocumentationComponentsWizardCoreDocs = {
  "slug": "/documentation/components/wizard/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Wizard/examples/Wizard.md",
  "section": "components",
  "id": "Wizard",
  "title": "Wizard",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-wizard"
};
DocumentationComponentsWizardCoreDocs.liveContext = {
  
};
DocumentationComponentsWizardCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsWizardCoreDocs} {...{"code":"<div class=\"pf-c-wizard\">\n  <div class=\"pf-c-wizard__header\">\n    <button class=\"pf-c-button pf-m-plain pf-c-wizard__close\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-3xl pf-c-wizard__title\">Wizard title</h1>\n    <p class=\"pf-c-wizard__description\">Here is where the description goes</p>\n  </div>\n  <button aria-label=\"Wizard Header Toggle\" class=\"pf-c-wizard__toggle\" aria-expanded=\"false\">\n    <ol class=\"pf-c-wizard__toggle-list\">\n      <li class=\"pf-c-wizard__toggle-list-item\">\n        <span class=\"pf-c-wizard__toggle-num\">2</span>Configuration\n        <i class=\"fas fa-angle-right pf-c-wizard__toggle-separator\" aria-hidden=\"true\"></i>\n      </li>\n      <li class=\"pf-c-wizard__toggle-list-item\">Substep B</li>\n    </ol>\n    <span class=\"pf-c-wizard__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-wizard__outer-wrap\">\n    <div class=\"pf-c-wizard__inner-wrap\">\n      <nav class=\"pf-c-wizard__nav\" aria-label=\"Steps\">\n        <ol class=\"pf-c-wizard__nav-list\">\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Information</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link pf-m-current\">Configuration</button>\n            <ol class=\"pf-c-wizard__nav-list\">\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep A</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link pf-m-current\" aria-current=\"page\">Substep B</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep C</button>\n              </li>\n            </ol>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Additional</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\" disabled>Review</button>\n          </li>\n        </ol>\n      </nav>\n      <main class=\"pf-c-wizard__main\">\n        <div class=\"pf-c-wizard__main-body\">\n          <p>Wizard content goes here</p>\n        </div>\n      </main>\n    </div>\n    <footer class=\"pf-c-wizard__footer\">\n      <button class=\"pf-c-button pf-m-primary\" type=\"submit\">Next</button>\n      <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Back</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Cancel</button>\n    </footer>\n  </div>\n</div>","title":"Basic","lang":"html","isFullscreen":true}}>
    </Example>
    <Example {...DocumentationComponentsWizardCoreDocs} {...{"code":"<div class=\"pf-c-wizard\">\n  <div class=\"pf-c-wizard__header\">\n    <button class=\"pf-c-button pf-m-plain pf-c-wizard__close\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-3xl pf-c-wizard__title\">Wizard title</h1>\n    <p class=\"pf-c-wizard__description\">Here is where the description goes</p>\n  </div>\n  <button aria-label=\"Wizard Header Toggle\" class=\"pf-c-wizard__toggle pf-m-expanded\" aria-expanded=\"true\">\n    <ol class=\"pf-c-wizard__toggle-list\">\n      <li class=\"pf-c-wizard__toggle-list-item\">\n        <span class=\"pf-c-wizard__toggle-num\">2</span>Configuration\n        <i class=\"fas fa-angle-right pf-c-wizard__toggle-separator\" aria-hidden=\"true\"></i>\n      </li>\n      <li class=\"pf-c-wizard__toggle-list-item\">Substep B</li>\n    </ol>\n    <span class=\"pf-c-wizard__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-wizard__outer-wrap\">\n    <div class=\"pf-c-wizard__inner-wrap\">\n      <nav class=\"pf-c-wizard__nav pf-m-expanded\" aria-label=\"Steps\">\n        <ol class=\"pf-c-wizard__nav-list\">\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Information</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link pf-m-current\">Configuration</button>\n            <ol class=\"pf-c-wizard__nav-list\">\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep A</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link pf-m-current\" aria-current=\"page\">Substep B</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep C</button>\n              </li>\n            </ol>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Additional</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\" disabled>Review</button>\n          </li>\n        </ol>\n      </nav>\n      <main class=\"pf-c-wizard__main\">\n        <div class=\"pf-c-wizard__main-body\">\n          <p>Wizard content goes here</p>\n        </div>\n      </main>\n    </div>\n    <footer class=\"pf-c-wizard__footer\">\n      <button class=\"pf-c-button pf-m-primary\" type=\"submit\">Next</button>\n      <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Back</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Cancel</button>\n    </footer>\n  </div>\n</div>","title":"Nav expanded (mobile)","lang":"html","isFullscreen":true}}>
    </Example>
    <Example {...DocumentationComponentsWizardCoreDocs} {...{"code":"<div class=\"pf-c-wizard pf-m-finished\">\n  <div class=\"pf-c-wizard__header\">\n    <button class=\"pf-c-button pf-m-plain pf-c-wizard__close\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-3xl pf-c-wizard__title\">Wizard title</h1>\n    <p class=\"pf-c-wizard__description\">Here is where the description goes</p>\n  </div>\n  <button aria-label=\"Wizard Header Toggle\" class=\"pf-c-wizard__toggle\" aria-expanded=\"false\">\n    <ol class=\"pf-c-wizard__toggle-list\">\n      <li class=\"pf-c-wizard__toggle-list-item\">\n        <span class=\"pf-c-wizard__toggle-num\">2</span>Configuration\n        <i class=\"fas fa-angle-right pf-c-wizard__toggle-separator\" aria-hidden=\"true\"></i>\n      </li>\n      <li class=\"pf-c-wizard__toggle-list-item\">Substep B</li>\n    </ol>\n    <span class=\"pf-c-wizard__toggle-icon\">\n      <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n    </span>\n  </button>\n  <div class=\"pf-c-wizard__outer-wrap\">\n    <div class=\"pf-c-wizard__inner-wrap\">\n      <nav class=\"pf-c-wizard__nav\" aria-label=\"Steps\">\n        <ol class=\"pf-c-wizard__nav-list\">\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Information</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Configuration</button>\n            <ol class=\"pf-c-wizard__nav-list\">\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep A</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep B</button>\n              </li>\n              <li class=\"pf-c-wizard__nav-item\">\n                <button class=\"pf-c-wizard__nav-link\">Substep C</button>\n              </li>\n            </ol>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Additional</button>\n          </li>\n          <li class=\"pf-c-wizard__nav-item\">\n            <button class=\"pf-c-wizard__nav-link\">Review</button>\n          </li>\n        </ol>\n      </nav>\n      <main class=\"pf-c-wizard__main\">\n        <div class=\"pf-c-wizard__main-body\">\n          <div class=\"pf-l-bullseye\">\n            <div class=\"pf-c-empty-state pf-m-lg\">\n              <div class=\"pf-c-empty-state__content\">\n                <i class=\"fas fa- fa-cogs pf-c-empty-state__icon\" aria-hidden=\"true\"></i>\n                <h1 class=\"pf-c-title pf-m-lg\">Configuration in progress</h1>\n                <div class=\"pf-c-empty-state__body\">\n                  <div class=\"pf-c-progress pf-m-singleline\" id=\"progress-singleline-example\">\n                    <div class=\"pf-c-progress__description\" id=\"progress-singleline-example-description\"></div>\n                    <div class=\"pf-c-progress__status\" aria-hidden=\"true\">\n                      <span class=\"pf-c-progress__measure\">33%</span>\n                    </div>\n                    <div class=\"pf-c-progress__bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"33\" aria-describedby=\"progress-singleline-example-description\">\n                      <div class=\"pf-c-progress__indicator\" style=\"width:33%;\"></div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"pf-c-empty-state__body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non pulvinar tortor. Maecenas sit amet pellentesque velit, eu eleifend mauris.</div>\n                <div class=\"pf-c-empty-state__secondary\">\n                  <button class=\"pf-c-button pf-m-link\" type=\"button\">Cancel</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </main>\n    </div>\n    <footer class=\"pf-c-wizard__footer\">\n      <button class=\"pf-c-button pf-m-primary\" type=\"submit\">Next</button>\n      <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Back</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Cancel</button>\n    </footer>\n  </div>\n</div>","title":"Finished","lang":"html","isFullscreen":true}}>
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
              {`.pf-c-wizard__toggle`}
            </code>
          </td>
          <td>
            {`Indicates that the steps menu is visible. `}
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
              {`.pf-c-wizard__toggle`}
            </code>
          </td>
          <td>
            {`Indicates that the steps menu is hidden. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="close"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__toggle-icon`}
            </code>
          </td>
          <td>
            {`Gives the close button an accessible name. `}
            <strong>
              {`Required`}
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
              {`.pf-c-wizard__toggle-icon`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__toggle-divider`}
            </code>
          </td>
          <td>
            {`Hides the icon from assistive technologies. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="Steps"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__nav`}
            </code>
          </td>
          <td>
            {`Gives the steps nav element an accessible name. `}
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
              {`button.pf-c-wizard__nav-link`}
            </code>
          </td>
          <td>
            {`Indicates that the element is disabled. `}
            <strong>
              {`Required when a nav item is disabled`}
            </strong>
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
              {`a.pf-c-wizard__nav-link`}
            </code>
          </td>
          <td>
            {`Indicates that the element is disabled. `}
            <strong>
              {`Required for disabled links with `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-disabled`}
              </code>
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-current="page"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__nav-link`}
            </code>
          </td>
          <td>
            {`Indicates the current page link. Can only occur once on page. `}
            <strong>
              {`Required for the current link`}
            </strong>
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
              {`a.pf-c-wizard__nav-link`}
            </code>
          </td>
          <td>
            {`Removes a link from keyboard focus. `}
            <strong>
              {`Required for disabled links with `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-disabled`}
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
              {`.pf-c-wizard`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the wizard component. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__header`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<header>`}
            </code>
          </td>
          <td>
            {`Initiates the header. `}
            <strong>
              {`Required`}
            </strong>
            {` when the wizard is in a modal. Not recommended to use when the wizard is placed on a page.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__close`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button.pf-m-plain`}
            </code>
          </td>
          <td>
            {`Initiates the close button. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-title.pf-m-3xl`}
            </code>
          </td>
          <td>
            {`Initiates the title. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__description`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<p>`}
            </code>
          </td>
          <td>
            {`Initiates the description.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates the mobile steps menu toggle button. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__toggle-list`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ol>`}
            </code>
          </td>
          <td>
            {`Initiates the toggle list. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__toggle-list-item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Initiates a toggle list item. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__toggle-num`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the step number. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__toggle-separator`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<i>`}
            </code>
          </td>
          <td>
            {`Initiates the separator between steps.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__toggle-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the toggle icon wrapper. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__outer-wrap`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the outer wrapper. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__inner-wrap`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the inner wrapper. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__nav`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<nav>`}
            </code>
          </td>
          <td>
            {`Initiates the steps nav. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__nav-list`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ol>`}
            </code>
          </td>
          <td>
            {`Initiates a list of steps. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__nav-item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Initiates a step list item. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__nav-link`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<a>`}
            </code>
          </td>
          <td>
            {`Initiates a step link. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__main`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<main>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the main container. `}
            <strong>
              {`Required`}
            </strong>
            {` Note: use the `}
            <code {...{"className":"ws-code"}}>
              {`<main>`}
            </code>
            {` element when when there are no other `}
            <code {...{"className":"ws-code"}}>
              {`<main>`}
            </code>
            {` elements on the page.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__main-body`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the main container body section. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__footer`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<footer>`}
            </code>
          </td>
          <td>
            {`Initiates the footer. `}
            <strong>
              {`Required`}
            </strong>
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
              {`.pf-c-wizard__toggle`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard__nav`}
            </code>
          </td>
          <td>
            {`Modifies the mobile steps toggle and steps menu for the expanded state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-finished`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-wizard`}
            </code>
          </td>
          <td>
            {`Modifies the wizard for the finished state.`}
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
              {`.pf-c-wizard__nav-link`}
            </code>
          </td>
          <td>
            {`Modifies a step link for the current state. `}
            <strong>
              {`Required`}
            </strong>
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
              {`.pf-c-wizard__nav-link`}
            </code>
          </td>
          <td>
            {`Modifies a step link for the disabled state.`}
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
              {`.pf-c-wizard__main-body`}
            </code>
          </td>
          <td>
            {`Modifies the main container body to remove the padding.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsWizardCoreDocs.Component.displayName = 'DocumentationComponentsWizardCoreDocs';
