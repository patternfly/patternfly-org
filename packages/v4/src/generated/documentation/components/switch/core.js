import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsSwitchCoreDocs = {
  "slug": "/documentation/components/switch/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Switch/examples/Switch.md",
  "section": "components",
  "id": "Switch",
  "title": "Switch",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-switch"
};
DocumentationComponentsSwitchCoreDocs.liveContext = {
  
};
DocumentationComponentsSwitchCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsSwitchCoreDocs} {...{"code":"<label class=\"pf-c-switch\" for=\"switch-with-label-1\">\n  <input class=\"pf-c-switch__input\" type=\"checkbox\" id=\"switch-with-label-1\" aria-labelledby=\"switch-with-label-1-on\" name=\"switchExample1\" checked />\n  <span class=\"pf-c-switch__toggle\"></span>\n  <span class=\"pf-c-switch__label pf-m-on\" id=\"switch-with-label-1-on\" aria-hidden=\"true\">Message when on</span>\n  <span class=\"pf-c-switch__label pf-m-off\" id=\"switch-with-label-1-off\" aria-hidden=\"true\">Message when off</span>\n</label>\n<br/>\n<br/>\n<label class=\"pf-c-switch\" for=\"switch-with-label-2\">\n  <input class=\"pf-c-switch__input\" type=\"checkbox\" id=\"switch-with-label-2\" aria-labelledby=\"switch-with-label-2-on\" name=\"switchExample2\" />\n  <span class=\"pf-c-switch__toggle\"></span>\n  <span class=\"pf-c-switch__label pf-m-on\" id=\"switch-with-label-2-on\" aria-hidden=\"true\">Message when on</span>\n  <span class=\"pf-c-switch__label pf-m-off\" id=\"switch-with-label-2-off\" aria-hidden=\"true\">Message when off</span>\n</label>","title":"Basic","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSwitchCoreDocs} {...{"code":"<label class=\"pf-c-switch\" for=\"switch-with-icon-1\">\n  <input class=\"pf-c-switch__input\" type=\"checkbox\" id=\"switch-with-icon-1\" aria-label=\"switch is off\" name=\"switchExample3\" checked />\n  <span class=\"pf-c-switch__toggle\">\n    <span class=\"pf-c-switch__toggle-icon\">\n      <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</label>\n<br/>\n<br/>\n<label class=\"pf-c-switch\" for=\"switch-with-icon-2\">\n  <input class=\"pf-c-switch__input\" type=\"checkbox\" id=\"switch-with-icon-2\" aria-label=\"switch is off\" name=\"switchExample4\" />\n  <span class=\"pf-c-switch__toggle\">\n    <span class=\"pf-c-switch__toggle-icon\">\n      <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n    </span>\n  </span>\n</label>","title":"Without label","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSwitchCoreDocs} {...{"code":"<label class=\"pf-c-switch\" for=\"switch-disabled-1\">\n  <input class=\"pf-c-switch__input\" type=\"checkbox\" id=\"switch-disabled-1\" aria-labelledby=\"switch-disabled-1-on\" name=\"switchExample5\" disabled checked />\n  <span class=\"pf-c-switch__toggle\"></span>\n  <span class=\"pf-c-switch__label pf-m-on\" id=\"switch-disabled-1-on\" aria-hidden=\"true\">Message when on</span>\n  <span class=\"pf-c-switch__label pf-m-off\" id=\"switch-disabled-1-off\" aria-hidden=\"true\">Message when off</span>\n</label>\n<br/>\n<br/>\n<label class=\"pf-c-switch\" for=\"switch-disabled-2\">\n  <input class=\"pf-c-switch__input\" type=\"checkbox\" id=\"switch-disabled-2\" aria-labelledby=\"switch-disabled-2-on\" name=\"switchExample6\" disabled />\n  <span class=\"pf-c-switch__toggle\"></span>\n  <span class=\"pf-c-switch__label pf-m-on\" id=\"switch-disabled-2-on\" aria-hidden=\"true\">Message when on</span>\n  <span class=\"pf-c-switch__label pf-m-off\" id=\"switch-disabled-2-off\" aria-hidden=\"true\">Message when off</span>\n</label>","title":"Disabled","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A switch is an alternative to the checkbox component.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a switch when your user needs to perform instantaneous actions without confirmation.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use checkbox if your user has to perform additional steps for changes to become effective.`}
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
              {`aria-labelledby="..."`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`aria-label="..."`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-switch__input`}
            </code>
          </td>
          <td>
            {`Indicates the action triggered by the switch. If an additional text label is included with the switch besides `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-switch__label.pf-m-on`}
            </code>
            {`, then `}
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby`}
            </code>
            {` can reference the `}
            <code {...{"className":"ws-code"}}>
              {`id`}
            </code>
            {` of this text, or this text can be used as the value for `}
            <code {...{"className":"ws-code"}}>
              {`aria-label`}
            </code>
            {`. If the text included for `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-switch__label.pf-m-on`}
            </code>
            {` provides additional meaning to the primary label that's referenced, then it can also be represented as part of the `}
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby`}
            </code>
            {` or `}
            <code {...{"className":"ws-code"}}>
              {`aria-label`}
            </code>
            {` attribute. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`for`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<label>`}
            </code>
          </td>
          <td>
            {`Each `}
            <code {...{"className":"ws-code"}}>
              {`<label>`}
            </code>
            {` must have a `}
            <code {...{"className":"ws-code"}}>
              {`for`}
            </code>
            {` attribute that matches its input id. `}
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
              {`<input type="checkbox">`}
            </code>
          </td>
          <td>
            {`Each `}
            <code {...{"className":"ws-code"}}>
              {`<input>`}
            </code>
            {` must have an `}
            <code {...{"className":"ws-code"}}>
              {`id`}
            </code>
            {` attribute that matches its label's `}
            <code {...{"className":"ws-code"}}>
              {`for`}
            </code>
            {` value. `}
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
              {`.pf-c-switch__label`}
            </code>
          </td>
          <td>
            {`Each `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-switch__label`}
            </code>
            {` must have an `}
            <code {...{"className":"ws-code"}}>
              {`id`}
            </code>
            {` attribute that matches the `}
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby`}
            </code>
            {` on `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-switch__input`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`checked`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-switch__input`}
            </code>
          </td>
          <td>
            {`Indicates that the input is checked`}
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
              {`.pf-c-switch__input`}
            </code>
          </td>
          <td>
            {`Indicates that the input is disabled`}
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
              {`.pf-c-switch__label`}
            </code>
          </td>
          <td>
            {`Hides the text from the screen reader.`}
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
              {`.pf-c-switch`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<label>`}
            </code>
          </td>
          <td>
            {`Initiates a switch. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-switch__input`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<input type="checkbox">`}
            </code>
          </td>
          <td>
            {`Hide the checkbox inside the switch. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-switch__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the toggle inside the switch. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-switch__toggle-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the switch toggle icon wrapper. `}
            <strong>
              {`Required when the switch is used without a label`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-switch__label`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates a label inside the switch.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-on`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-switch__label`}
            </code>
          </td>
          <td>
            {`Modifies the switch label to display the on message.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-off`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-switch__label`}
            </code>
          </td>
          <td>
            {`Modifies the switch label to display the off message.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsSwitchCoreDocs.Component.displayName = 'DocumentationComponentsSwitchCoreDocs';
