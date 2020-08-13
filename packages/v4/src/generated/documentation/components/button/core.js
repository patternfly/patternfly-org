import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/components/Button/examples/./Button.css'

export const DocumentationComponentsButtonCoreDocs = {
  "slug": "/documentation/components/button/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Button/examples/Button.md",
  "section": "components",
  "id": "Button",
  "title": "Button",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-button"
};
DocumentationComponentsButtonCoreDocs.liveContext = {
  
};
DocumentationComponentsButtonCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsButtonCoreDocs} {...{"code":"<button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary</button>\n<button class=\"pf-c-button pf-m-secondary\" type=\"button\">Secondary</button>\n<button class=\"pf-c-button pf-m-tertiary\" type=\"button\">Tertiary</button>\n<button class=\"pf-c-button pf-m-danger\" type=\"button\">Danger</button>\n<br />\n<br />\n<button class=\"pf-c-button pf-m-link\" type=\"button\">\n  <span class=\"pf-c-button__icon pf-m-start\">\n    <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n  </span>Link</button>\n<button class=\"pf-c-button pf-m-link\" type=\"button\">Link\n  <span class=\"pf-c-button__icon pf-m-end\">\n    <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n  </span>\n</button>\n<button class=\"pf-c-button pf-m-inline pf-m-link\" type=\"button\">Inline link</button>\n<br />\n<br />\n<button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Remove\">\n  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n</button>\n<br />\n<br />\n<button class=\"pf-c-button pf-m-control\" type=\"button\">Control</button>\n<button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Copy input\">\n  <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n</button>\n<br />\n<br />\n<br />\n<button class=\"pf-c-button pf-m-primary pf-m-small\" type=\"button\">Primary</button>\n<button class=\"pf-c-button pf-m-secondary pf-m-small\" type=\"button\">Secondary</button>\n<button class=\"pf-c-button pf-m-tertiary pf-m-small\" type=\"button\">Tertiary</button>\n<button class=\"pf-c-button pf-m-danger pf-m-small\" type=\"button\">Danger</button>\n<button class=\"pf-c-button pf-m-link pf-m-small\" type=\"button\">Link\n  <span class=\"pf-c-button__icon pf-m-end\">\n    <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n  </span>\n</button>\n<button class=\"pf-c-button pf-m-inline pf-m-link pf-m-small\" type=\"button\">Inline link</button>\n<button class=\"pf-c-button pf-m-control pf-m-small\" type=\"button\">Control</button>","title":"Variations","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsButtonCoreDocs} {...{"code":"<button class=\"pf-c-button pf-m-primary\" type=\"button\" disabled>Primary disabled</button>\n<button class=\"pf-c-button pf-m-secondary\" type=\"button\" disabled>Secondary disabled</button>\n<button class=\"pf-c-button pf-m-tertiary\" type=\"button\" disabled>Tertiary disabled</button>\n<button class=\"pf-c-button pf-m-danger\" type=\"button\" disabled>Danger disabled</button>\n<button class=\"pf-c-button pf-m-link\" type=\"button\" disabled>\n  <span class=\"pf-c-button__icon pf-m-start\">\n    <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n  </span>Link disabled</button>\n<button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\" disabled>Inline link disabled</button>\n<button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Remove\" disabled>\n  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n</button>\n<button class=\"pf-c-button pf-m-control\" type=\"button\" disabled>Control disabled</button>","title":"Disabled","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsButtonCoreDocs} {...{"code":"<button class=\"pf-c-button pf-m-primary pf-m-aria-disabled\" type=\"button\" aria-disabled=\"true\">Primary disabled</button>\n<button class=\"pf-c-button pf-m-secondary pf-m-aria-disabled\" type=\"button\" aria-disabled=\"true\">Secondary disabled</button>\n<button class=\"pf-c-button pf-m-tertiary pf-m-aria-disabled\" type=\"button\" aria-disabled=\"true\">Tertiary disabled</button>\n<button class=\"pf-c-button pf-m-danger pf-m-aria-disabled\" type=\"button\" aria-disabled=\"true\">Danger disabled</button>\n<button class=\"pf-c-button pf-m-link pf-m-aria-disabled\" type=\"button\" aria-disabled=\"true\">\n  <span class=\"pf-c-button__icon pf-m-start\">\n    <i class=\"fas fa-plus-circle\" aria-hidden=\"true\"></i>\n  </span>Link disabled</button>\n<button class=\"pf-c-button pf-m-link pf-m-inline pf-m-aria-disabled\" type=\"button\" aria-disabled=\"true\">Inline link disabled</button>\n<button class=\"pf-c-button pf-m-plain pf-m-aria-disabled\" type=\"button\" aria-label=\"Remove\" aria-disabled=\"true\">\n  <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n</button>\n<button class=\"pf-c-button pf-m-control pf-m-aria-disabled\" type=\"button\" aria-disabled=\"true\">Control disabled</button>","title":"Aria-disabled","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsButtonCoreDocs} {...{"code":"<a class=\"pf-c-button pf-m-primary\" href=\"https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples\">Primary link to W3.org</a>\n<a class=\"pf-c-button pf-m-secondary\" href=\"#overview\" aria-label=\"Read more about button documentation\">Secondary link to anchor</a>\n<a class=\"pf-c-button pf-m-tertiary pf-m-disabled\" href=\"https://www.w3.org/TR/WCAG20-TECHS/ARIA8.html#ARIA8-examples\" aria-disabled=\"true\" tabindex=\"-1\">Tertiary link to W3.org</a>","title":"Links as buttons","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsButtonCoreDocs} {...{"code":"<button class=\"pf-c-button pf-m-primary pf-m-block\" type=\"button\">Block level button</button>","title":"Block level","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsButtonCoreDocs} {...{"code":"<button class=\"pf-c-button pf-m-primary\" type=\"submit\">Submit</button>\n<button class=\"pf-c-button pf-m-primary\" type=\"reset\">Reset</button>\n<button class=\"pf-c-button pf-m-primary\" type=\"button\">Default</button>","title":"Types","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsButtonCoreDocs} {...{"code":"<button class=\"pf-c-button pf-m-primary pf-m-display-lg\" type=\"button\">Call to action</button>\n<button class=\"pf-c-button pf-m-secondary pf-m-display-lg\" type=\"button\">Call to action</button>\n<button class=\"pf-c-button pf-m-tertiary pf-m-display-lg\" type=\"button\">Call to action</button>\n<button class=\"pf-c-button pf-m-link pf-m-display-lg\" type=\"button\">Call to action\n  <span class=\"pf-c-button__icon pf-m-end\">\n    <i class=\"fas fa-arrow-right\" aria-hidden=\"true\"></i>\n  </span>\n</button>\n<button class=\"pf-c-button pf-m-link pf-m-inline pf-m-display-lg\" type=\"button\">Call to action\n  <span class=\"pf-c-button__icon pf-m-end\">\n    <i class=\"fas fa-arrow-right\" aria-hidden=\"true\"></i>\n  </span>\n</button>","title":"Call to action","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Always add a modifier class to add color to the button.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Button vs link`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Semantic buttons and links are important for usability as well as accessibility. Using an `}
      <code {...{"className":"ws-code"}}>
        {`a`}
      </code>
      {` instead of a `}
      <code {...{"className":"ws-code"}}>
        {`button`}
      </code>
      {` element to perform user initiated actions should be avoided, unless absolutely necessary.`}
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
              {`aria-pressed="true or false"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Indicates that the button is a toggle. When set to "true", `}
            <code {...{"className":"ws-code"}}>
              {`pf-m-active`}
            </code>
            {` should also be set so that the button displays in an active state. `}
            <strong>
              {`Required when button is a toggle`}
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
              {`.pf-m-plain`}
            </code>
          </td>
          <td>
            {`Provides an accessible name for the button when an icon is used instead of text. `}
            <strong>
              {`Required when icon is used with no supporting text`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="[link description]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`a.pf-c-button`}
            </code>
          </td>
          <td>
            {`The link text should adequately describe the link's purpose. If it does not, aria-label can provide more detailed interaction information.`}
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
              {`button.pf-c-button`}
            </code>
          </td>
          <td>
            {`When a button element is used, indicates that it is unavailable and removes it from keyboard focus. `}
            <strong>
              {`Required when button is disabled`}
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
              {`button.pf-c-button`}
            </code>
          </td>
          <td>
            {`When a button element is used, indicates that it is unavailable but does not prevent keyboard or hover interactions. Used when a disabled button provides interactive elements like a tooltip.`}
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
              {`a.pf-c-button`}
            </code>
          </td>
          <td>
            {`When a link element is used, indicates that it is unavailable. `}
            <strong>
              {`Required when link is disabled`}
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
              {`.pf-c-button.pf-m-expanded`}
            </code>
          </td>
          <td>
            {`Indicates that the expanded content element is visible. `}
            <strong>
              {`Required`}
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
              {`a.pf-c-button`}
            </code>
          </td>
          <td>
            {`When a link element is used, removes it from keyboard focus. `}
            <strong>
              {`Required when link is disabled`}
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
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates a button. Always use it with a modifier class. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button__icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates a button icon.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-primary`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Modifies for primary styles.`}
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
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Modifies for secondary styles.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-tertiary`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Modifies for tertiary styles.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-danger`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Modifies for danger styles.`}
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
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Modifies for link styles. This button has no background or border and is styled as a link. This button would commonly appear in a form and may include an icon.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-plain`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Modifies for icon styles. This button has no background or border, uses a standard text color, and is used for `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-plain`}
            </code>
            {` icon buttons such as close, expand, kebab, etc.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-inline`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button.pf-m-link`}
            </code>
          </td>
          <td>
            {`Modifies for inline styles. This button is presented similar to a normal link, has no padding, and is displayed inline with other inline content.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-block`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Creates a block level button.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-control`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Modifies for control styles. `}
            <strong>
              {`Note:`}
            </strong>
            {` This modifier should only be used when using buttons in the Input Group or Clipboard Copy components.`}
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
              {`.pf-c-button.pf-m-control`}
            </code>
          </td>
          <td>
            {`Modifies a control button for the expanded state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-start`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button__icon`}
            </code>
          </td>
          <td>
            {`Applies right spacing to an icon inside of a button when the icon comes before text.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-end`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button__icon`}
            </code>
          </td>
          <td>
            {`Applies left spacing to an icon inside of a button when the icon comes after text.`}
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
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Forces display of the active state of the button. This modifier should be used when `}
            <code {...{"className":"ws-code"}}>
              {`aria-pressed`}
            </code>
            {` is set to true so that the button displays in an active state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-small`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Modifies the button so that it has small font size.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-aria-disabled`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            {`Modifies a button to be visually disabled, yet is still focusable.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-display-lg`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`pf-c-button.pf-m-link`}
            </code>
          </td>
          <td>
            {`Modifies the button and link button for large display styling. For example, use this modifier to achieve "call to action" styles.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsButtonCoreDocs.Component.displayName = 'DocumentationComponentsButtonCoreDocs';
