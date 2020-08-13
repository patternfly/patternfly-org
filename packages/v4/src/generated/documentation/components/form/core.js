import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsFormCoreDocs = {
  "slug": "/documentation/components/form/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Form/examples/Form.md",
  "section": "components",
  "id": "Form",
  "title": "Form",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-form"
};
DocumentationComponentsFormCoreDocs.liveContext = {
  
};
DocumentationComponentsFormCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsFormCoreDocs} {...{"code":"<form novalidate class=\"pf-c-form\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"vertical-align-labels-form-name\">\n        <span class=\"pf-c-form__label-text\">Name</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n      <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n        <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input class=\"pf-c-form-control\" type=\"text\" id=\"vertical-align-labels-form-name\" name=\"vertical-align-labels-form-name\" required />\n    </div>\n  </div>\n</form>","title":"Vertically aligned labels","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsFormCoreDocs} {...{"code":"<form novalidate class=\"pf-c-form pf-m-horizontal\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"horizontal-align-labels-1-form-name\">\n        <span class=\"pf-c-form__label-text\">Name</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input class=\"pf-c-form-control\" type=\"text\" id=\"horizontal-align-labels-1-form-name\" name=\"horizontal-align-labels-1-form-name\" required />\n    </div>\n  </div>\n</form>\n<br />\n<form novalidate class=\"pf-c-form pf-m-horizontal\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"horizontal-align-labels-2-form-name\">\n        <span class=\"pf-c-form__label-text\">Information</span>\n      </label>\n      <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n        <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <textarea class=\"pf-c-form-control\" type=\"text\" id=\"horizontal-align-labels-2-form-name-2\" name=\"horizontal-align-labels-2-form-name-2\" aria-label=\"textarea example\"></textarea>\n    </div>\n  </div>\n</form>\n<br />\n<form novalidate class=\"pf-c-form pf-m-horizontal\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label pf-m-no-padding-top\">\n      <label class=\"pf-c-form__label\" for=\"horizontal-align-labels-top-form-name\">\n        <span class=\"pf-c-form__label-text\">Label (no top padding)</span>\n      </label>\n      <button class=\"pf-c-form__group-label-help\" aria-label=\"More info\">\n        <i class=\"pficon pf-icon-help\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <div class=\"pf-c-check\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"alt-form-checkbox1\" name=\"alt-form-checkbox1\" />\n        <label class=\"pf-c-check__label\" for=\"alt-form-checkbox1\">Option 1</label>\n      </div>\n      <div class=\"pf-c-check\">\n        <input class=\"pf-c-check__input\" type=\"checkbox\" type=\"checkbox\" id=\"alt-form-checkbox2\" name=\"alt-form-checkbox2\" />\n        <label class=\"pf-c-check__label\" for=\"alt-form-checkbox2\">Option 2</label>\n      </div>\n    </div>\n  </div>\n</form>","title":"Horizontally aligned labels","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsFormCoreDocs} {...{"code":"<form novalidate class=\"pf-c-form\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"help-text-form-name\">\n        <span class=\"pf-c-form__label-text\">Name</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input class=\"pf-c-form-control\" required type=\"text\" id=\"help-text-form-name\" name=\"help-text-form-name\" aria-describedby=\"help-text-form-name-helper\" />\n      <p class=\"pf-c-form__helper-text\" id=\"help-text-form-name-helper\" aria-live=\"polite\">This is helper text</p>\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"help-text-form-email\">\n        <span class=\"pf-c-form__label-text\">E-mail</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input class=\"pf-c-form-control pf-m-warning\" required type=\"text\" id=\"help-text-form-email\" name=\"help-text-form-email\" aria-describedby=\"help-text-form-email-helper\" />\n      <p class=\"pf-c-form__helper-text pf-m-warning\" id=\"help-text-form-email-helper\" aria-live=\"polite\">This is helper text for a warning input</p>\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"help-text-form-address\">\n        <span class=\"pf-c-form__label-text\">Address</span>\n        <span class=\"pf-c-form__label-required\" aria-hidden=\"true\">&#42;</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input class=\"pf-c-form-control\" required type=\"text\" id=\"help-text-form-address\" name=\"help-text-form-address\" aria-invalid=\"true\" aria-describedby=\"help-text-form-address-helper\" />\n      <p class=\"pf-c-form__helper-text pf-m-error\" id=\"help-text-form-address-helper\" aria-live=\"polite\">This is helper text for an invalid input</p>\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-form__group-label\">\n      <label class=\"pf-c-form__label\" for=\"help-text-form-comment\">\n        <span class=\"pf-c-form__label-text\">Comment</span>\n      </label>\n    </div>\n    <div class=\"pf-c-form__group-control\">\n      <input class=\"pf-c-form-control pf-m-success\" value=\"This is a valid comment\"type=\"text\" id=\"help-text-form-comment\" name=\"help-text-form-comment\" aria-describedby=\"help-text-form-comment-help\" />\n      <p class=\"pf-c-form__helper-text pf-m-success\" id=\"help-text-form-comment-help\" aria-live=\"polite\">This is helper text for success input</p>\n    </div>\n  </div>\n  <div class=\"pf-c-form__group\">\n    <label class=\"pf-c-form__label\" for=\"help-text-simple-form-info\">\n      <span class=\"pf-c-form__label-text\">Information</span>\n    </label>\n    <textarea class=\"pf-c-form-control\" id=\"help-text-simple-form-info\" name=\"help-text-simple-form-info\" aria-invalid=\"true\" aria-describedby=\"help-text-simple-form-info-helper\"></textarea>\n    <p class=\"pf-c-form__helper-text pf-m-error\" id=\"help-text-simple-form-info-helper\" aria-live=\"polite\">\n      <span class=\"pf-c-form__helper-text-icon\">\n        <i class=\"fas fa-exclamation-circle\" aria-hidden=\"true\"></i>\n      </span>This is helper text with an icon.</p>\n  </div>\n</form>","title":"Help text","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsFormCoreDocs} {...{"code":"<form novalidate class=\"pf-c-form\">\n  <div class=\"pf-c-form__group pf-m-action\">\n    <div class=\"pf-c-form__actions\">\n      <button class=\"pf-c-button pf-m-primary\" type=\"submit\">Submit form</button>\n      <button class=\"pf-c-button pf-m-secondary\" type=\"reset\">Reset form</button>\n    </div>\n  </div>\n</form>","title":"Action group","lang":"html"}}>
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
            {` attribute that matches its form field id. `}
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
              {`<input type="radio/checkbox/text">`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<select>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<textarea>`}
            </code>
          </td>
          <td>
            {`Each `}
            <code {...{"className":"ws-code"}}>
              {`<form>`}
            </code>
            {` field must have an `}
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
              {`required`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<input>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<select>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<textarea>`}
            </code>
          </td>
          <td>
            {`Required fields must include these attributes.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`id="{helper_text_id}"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__helper-text`}
            </code>
          </td>
          <td>
            {`Form fields with related `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__helper-text`}
            </code>
            {` require this attribute. Usage `}
            <code {...{"className":"ws-code"}}>
              {`<p class="pf-c-form__helper-text" id="{helper_text_id}">`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-describedby="{helper_text_id}"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<input>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<select>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<textarea>`}
            </code>
          </td>
          <td>
            {`Form fields with related `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__helper-text`}
            </code>
            {` require this attribute. Usage `}
            <code {...{"className":"ws-code"}}>
              {`<input aria-describedby="{helper_text_id}">`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-invalid="true" aria-describedby="{helper_text_id}"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<input>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<select>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<textarea>`}
            </code>
          </td>
          <td>
            {`When form validation fails `}
            <code {...{"className":"ws-code"}}>
              {`aria-describedby`}
            </code>
            {` is used to communicate the error to the user. These attributes need to be handled with Javascript so that `}
            <code {...{"className":"ws-code"}}>
              {`aria-describedby`}
            </code>
            {` only references help text that explains the error, and so that `}
            <code {...{"className":"ws-code"}}>
              {`aria-invalid="true"`}
            </code>
            {` is only present when validation fails. For proper styling of errors `}
            <code {...{"className":"ws-code"}}>
              {`aria-invalid="true"`}
            </code>
            {` is required.`}
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
              {`.pf-c-form__label-required`}
            </code>
          </td>
          <td>
            {`Hides the required indicator from assistive technologies.`}
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
              {`.pf-c-form`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<form>`}
            </code>
          </td>
          <td>
            {`Initiates a standard form. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a form group section.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__group-label`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a form group label section.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__label`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<label>`}
            </code>
          </td>
          <td>
            {`Initiates a form label. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__label-text`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates a form label text. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__label-required`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates a form label required indicator.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__group-label-help`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates a field level help button.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__group-control`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a form group control section.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__actions`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Iniates a row of actions.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__helper-text`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<p>`}
            </code>
          </td>
          <td>
            {`Initiates a form helper text block.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__helper-text-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates a form helper text icon.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-horizontal`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form`}
            </code>
          </td>
          <td>
            {`Modifies form for a horizontal layout.`}
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
              {`.pf-c-form__group`}
            </code>
          </td>
          <td>
            {`Modifies form group margin-top.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-success`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__helper-text`}
            </code>
          </td>
          <td>
            {`Modifies text color of helper text for success state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-warning`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__helper-text`}
            </code>
          </td>
          <td>
            {`Modifies text color of helper text for warning state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-error`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__helper-text`}
            </code>
          </td>
          <td>
            {`Modifies text color of helper text for error state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-inactive`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__helper-text`}
            </code>
          </td>
          <td>
            {`Modifies display of helper text to none.`}
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
              {`.pf-c-form__label`}
            </code>
          </td>
          <td>
            {`Modifies form label to show disabled state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-no-padding-top`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form__group-label`}
            </code>
          </td>
          <td>
            {`Removes top padding from the label element for labels adjacent to an element that isn't a form control.`}
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
              {`.pf-c-form__group-control`}
            </code>
          </td>
          <td>
            {`Modifies form group children to be inline (this is primarily for radio buttons and checkboxes).`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsFormCoreDocs.Component.displayName = 'DocumentationComponentsFormCoreDocs';
