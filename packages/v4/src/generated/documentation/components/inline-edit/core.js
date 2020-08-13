import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/components/InlineEdit/examples/./InlineEdit.css'

export const DocumentationComponentsInlineEditCoreDocs = {
  "slug": "/documentation/components/inline-edit/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/InlineEdit/examples/InlineEdit.md",
  "section": "components",
  "id": "Inline edit",
  "title": "Inline edit",
  "toc": [
    "Introduction",
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-inline-edit"
};
DocumentationComponentsInlineEditCoreDocs.liveContext = {
  
};
DocumentationComponentsInlineEditCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Introduction`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Inline edit`}
      </strong>
      {` is a utilitarian component that has two core elements, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-inline-edit__value`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-inline-edit__input`}
      </code>
      {` and is based on a simple concept. When `}
      <strong>
        {`value`}
      </strong>
      {` is visible, `}
      <strong>
        {`input`}
      </strong>
      {` is hidden, and vice versa.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Generic groups`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <code {...{"className":"ws-code"}}>
        {`.pf-c-inline-edit__group`}
      </code>
      {`s provide basic layout support and have several available modifiers (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-action-group`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-icon-group`}
      </code>
      {`).`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Actions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Actions`}
      </strong>
      {` (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-inline-edit__action`}
      </code>
      {`) are hidden by default and exposed when a region of `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-inline-edit`}
      </code>
      {` becomes active. The default visibility of an `}
      <strong>
        {`action`}
      </strong>
      {` or `}
      <strong>
        {`action group`}
      </strong>
      {` can be inversed by adding `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-enable-editable`}
      </code>
      {`. `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-enable-editable`}
      </code>
      {` flags an element or group of elements as the controlling agents for enabling editable content and therefore is visible by default and hidden when inline editing is enabled.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Inline edit `}
      <strong>
        {`toggle`}
      </strong>
      {` can be placed anywhere within `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-inline-edit`}
      </code>
      {`. It initiates the editability of elements. When an element becomes editable, `}
      <strong>
        {`toggle`}
      </strong>
      {` is hidden.`}
    </p>
    <Example {...DocumentationComponentsInlineEditCoreDocs} {...{"code":"<div class=\"pf-c-inline-edit\" id=\"inline-edit-toggle-example\">\n  <div class=\"pf-c-inline-edit__action pf-m-enable-editable \">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"inline-edit-toggle-example-edit-button\" aria-label=\"Edit\" aria-labelledby=\"inline-edit-toggle-example-edit-button inline-edit-toggle-example-label\">\n      <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>","title":"Inline edit toggle","lang":"html"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`Inline edit `}
      <strong>
        {`value`}
      </strong>
      {` can be placed anywhere within `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-inline-edit`}
      </code>
      {`. It is visible by default and hidden when inline edit becomes `}
      <strong>
        {`editable`}
      </strong>
      {`.`}
    </p>
    <Example {...DocumentationComponentsInlineEditCoreDocs} {...{"code":"<div class=\"pf-c-inline-edit\" id=\"inline-edit-value-example\">\n  <div class=\"pf-c-inline-edit__value\">Static value</div>\n</div>","title":"Inline edit value","lang":"html"}}>
    </Example>
    <p {...{"className":"ws-p"}}>
      {`Inline edit `}
      <strong>
        {`action-group`}
      </strong>
      {` contains save and cancel actions and is only visible when inline edit is `}
      <strong>
        {`editable`}
      </strong>
      {`.`}
    </p>
    <Example {...DocumentationComponentsInlineEditCoreDocs} {...{"code":"<div class=\"pf-c-inline-edit pf-m-inline-editable\" id=\"inline-edit-action-group-example\">\n  <div class=\"pf-c-inline-edit__group pf-m-action-group\">\n    <div class=\"pf-c-inline-edit__action\">\n      <button class=\"pf-c-button pf-m-primary\" type=\"button\">Save</button>\n    </div>\n    <div class=\"pf-c-inline-edit__action\">\n      <button class=\"pf-c-button pf-m-secondary\" type=\"button\">Cancel</button>\n    </div>\n  </div>\n</div>","title":"Inline edit action group","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsInlineEditCoreDocs} {...{"code":"<div class=\"pf-c-inline-edit pf-m-inline-editable\" id=\"inline-edit-action-group-icon-buttons-example\">\n  <div class=\"pf-c-inline-edit__group pf-m-action-group pf-m-icon-group\">\n    <div class=\"pf-c-inline-edit__action pf-m-valid\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Save edits\">\n        <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"pf-c-inline-edit__action\">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Cancel edits\">\n        <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n</div>","title":"Inline edit action group icon buttons","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsInlineEditCoreDocs} {...{"code":"<form class=\"pf-c-inline-edit\" id=\"single-inline-edit-example\">\n  <div class=\"pf-c-inline-edit__group\">\n    <div class=\"pf-c-inline-edit__value\" id=\"single-inline-edit-example-label\">Static value</div>\n    <div class=\"pf-c-inline-edit__action pf-m-enable-editable \">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"single-inline-edit-example-edit-button\" aria-label=\"Edit\" aria-labelledby=\"single-inline-edit-example-edit-button single-inline-edit-example-label\">\n        <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-inline-edit__group\">\n    <div class=\"pf-c-inline-edit__input\">\n      <input class=\"pf-c-form-control\" type=\"text\" value=\"Static value\" aria-label=\"Editable text input\" />\n    </div>\n    <div class=\"pf-c-inline-edit__group pf-m-action-group pf-m-icon-group\">\n      <div class=\"pf-c-inline-edit__action pf-m-valid\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Save edits\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-inline-edit__action\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Cancel edits\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</form>","title":"Single inline edit (default)","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsInlineEditCoreDocs} {...{"code":"<form class=\"pf-c-inline-edit pf-m-inline-editable\" id=\"single-editable-example\">\n  <div class=\"pf-c-inline-edit__group\">\n    <div class=\"pf-c-inline-edit__value\" id=\"single-editable-example-label\">Static value</div>\n    <div class=\"pf-c-inline-edit__action pf-m-enable-editable \">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"single-editable-example-edit-button\" aria-label=\"Edit\" aria-labelledby=\"single-editable-example-edit-button single-editable-example-label\">\n        <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-inline-edit__group\">\n    <div class=\"pf-c-inline-edit__input\">\n      <input class=\"pf-c-form-control\" type=\"text\" value=\"Static value\" aria-label=\"Editable text input\" />\n    </div>\n    <div class=\"pf-c-inline-edit__group pf-m-action-group pf-m-icon-group\">\n      <div class=\"pf-c-inline-edit__action pf-m-valid\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Save edits\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-inline-edit__action\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Cancel edits\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</form>","title":"Single inline edit (active)","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsInlineEditCoreDocs} {...{"code":"<form class=\"pf-c-inline-edit\" id=\"single-inline-edit-with-label-example\">\n  <div class=\"pf-c-inline-edit__group\">\n    <label class=\"pf-c-inline-edit__label\" id=\"single-inline-edit-with-label-example-label\" for=\"single-inline-edit-with-label-example-input\">Single inline edit group</label>\n    <div class=\"pf-c-inline-edit__action pf-m-enable-editable \">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"single-inline-edit-with-label-example-edit-button\" aria-label=\"Edit\" aria-labelledby=\"single-inline-edit-with-label-example-label single-inline-edit-with-label-example-edit-button\">\n        <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-inline-edit__value\">Static value</div>\n  <div class=\"pf-c-inline-edit__group\">\n    <div class=\"pf-c-inline-edit__input\">\n      <input class=\"pf-c-form-control\" type=\"text\" id=\"single-inline-edit-with-label-example-input\" value=\"Static value\" aria-label=\"Editable text input\" />\n    </div>\n    <div class=\"pf-c-inline-edit__group pf-m-action-group pf-m-icon-group\">\n      <div class=\"pf-c-inline-edit__action pf-m-valid\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Save edits\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-inline-edit__action\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Cancel edits\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</form>","title":"Single inline edit with label (default)","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsInlineEditCoreDocs} {...{"code":"<div class=\"pf-c-inline-edit pf-m-inline-editable\" id=\"inline-edit-state-valid\">\n  <div class=\"pf-c-inline-edit__group\">\n    <label class=\"pf-c-inline-edit__label\" id=\"inline-edit-state-valid-label\" for=\"inline-edit-state-valid-input\">Valid example</label>\n    <div class=\"pf-c-inline-edit__action pf-m-enable-editable \">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"inline-edit-state-valid-edit-button\" aria-label=\"Edit\" aria-labelledby=\"inline-edit-state-valid-label inline-edit-state-valid-edit-button\">\n        <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-inline-edit__value\">Static value</div>\n  <div class=\"pf-c-inline-edit__group\">\n    <div class=\"pf-c-inline-edit__input\">\n      <input class=\"pf-c-form-control\" type=\"text\" value=\"Static value\" aria-label=\"Editable text input\" />\n    </div>\n    <div class=\"pf-c-inline-edit__group pf-m-action-group pf-m-icon-group\">\n      <div class=\"pf-c-inline-edit__action pf-m-valid\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Save edits\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-inline-edit__action\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Cancel edits\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>","title":"State valid","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsInlineEditCoreDocs} {...{"code":"<div class=\"pf-c-inline-edit pf-m-inline-editable\" id=\"inline-edit-state-invalid\">\n  <div class=\"pf-c-inline-edit__group\">\n    <label class=\"pf-c-inline-edit__label\" id=\"inline-edit-state-invalid-label\" for=\"inline-edit-state-invalid-input\">Invalid example</label>\n    <div class=\"pf-c-inline-edit__action pf-m-enable-editable \">\n      <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"inline-edit-state-invalid-edit-button\" aria-label=\"Edit\" aria-labelledby=\"inline-edit-state-invalid-label inline-edit-state-invalid-edit-button\">\n        <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"pf-c-inline-edit__value\">Static value</div>\n  <div class=\"pf-c-inline-edit__group\">\n    <div class=\"pf-c-inline-edit__input\">\n      <input class=\"pf-c-form-control\" required value=\"Invalid state\" aria-invalid=\"true\" aria-label=\"Error state input example\" />\n    </div>\n    <div class=\"pf-c-inline-edit__group pf-m-action-group pf-m-icon-group\">\n      <div class=\"pf-c-inline-edit__action\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" disabled aria-label=\"Save edits\">\n          <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <div class=\"pf-c-inline-edit__action\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Cancel edits\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>","title":"State invalid","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsInlineEditCoreDocs} {...{"code":"<form class=\"pf-c-inline-edit\" id=\"bulk-edit-table-example\">\n  <table class=\"pf-c-table pf-m-grid-lg\" role=\"grid\" aria-label=\"Inline edit table row example\">\n    <caption>This is the table caption</caption>\n    <thead>\n      <tr role=\"row\">\n        <th role=\"columnheader\">Text input</th>\n        <th role=\"columnheader\">Disabled text input</th>\n        <th role=\"columnheader\">Checkboxes</th>\n        <th role=\"columnheader\">Radios</th>\n        <th role=\"columnheader\">Number</th>\n        <td></td>\n        <td></td>\n      </tr>\n    </thead>\n    <tbody role=\"rowgroup\">\n      <tr class=\"pf-m-inline-editable\" role=\"row\">\n        <th role=\"columnheader\" data-label=\"Text input\">\n          <div class=\"pf-c-inline-edit__value\">Text input description content</div>\n          <div class=\"pf-c-inline-edit__input\">\n            <input class=\"pf-c-form-control\" type=\"text\" value=\"Text input description content\" id=\"bulk-edit-table-example-row-1-text-input\" aria-label=\"Text input\" />\n          </div>\n        </th>\n        <td role=\"cell\" data-label=\"Disabled text input\">\n          <div class=\"pf-c-inline-edit__value\">Text input disabled, description content</div>\n          <div class=\"pf-c-inline-edit__input\">\n            <input class=\"pf-c-form-control\" type=\"text\" value=\"Text input disabled, description content\" id=\"bulk-edit-table-example-row-1-text-input-disabled\" aria-label=\"Disabled text input\" disabled />\n          </div>\n        </td>\n        <td role=\"cell\" data-label=\"Checkboxes\">\n          <div class=\"pf-c-inline-edit__value\">Check 1, Check 2</div>\n          <div class=\"pf-c-inline-edit__group pf-m-column\">\n            <div class=\"pf-c-inline-edit__input\">\n              <div class=\"pf-c-check\">\n                <input class=\"pf-c-check__input\" type=\"checkbox\" id=\"bulk-edit-table-example-row-1-check-1\" name=\"bulk-edit-table-example-row-1-example-check\" />\n                <label class=\"pf-c-check__label\" for=\"bulk-edit-table-example-row-1-check-1\">Check 1</label>\n              </div>\n            </div>\n            <div class=\"pf-c-inline-edit__input\">\n              <div class=\"pf-c-check\">\n                <input class=\"pf-c-check__input\" type=\"checkbox\" id=\"bulk-edit-table-example-row-1-check-2\" name=\"bulk-edit-table-example-row-1-example-check-2\" />\n                <label class=\"pf-c-check__label\" for=\"bulk-edit-table-example-row-1-check-2\">Check 2</label>\n              </div>\n            </div>\n          </div>\n        </td>\n        <td role=\"cell\" data-label=\"Radios\">\n          <div class=\"pf-c-inline-edit__value\">Radio 1, Radio 2</div>\n          <div class=\"pf-c-inline-edit__group pf-m-column\" role=\"radiogroup\" aria-label=\"Radio group example\">\n            <div class=\"pf-c-inline-edit__input\">\n              <div class=\"pf-c-radio\">\n                <input class=\"pf-c-radio__input\" type=\"radio\" id=\"bulk-edit-table-example-row-1-radio-1\" name=\"bulk-edit-table-example-row-1-example-radio\" />\n                <label class=\"pf-c-radio__label\" for=\"bulk-edit-table-example-row-1-radio-1\">Radio 1</label>\n              </div>\n            </div>\n            <div class=\"pf-c-inline-edit__input\">\n              <div class=\"pf-c-radio\">\n                <input class=\"pf-c-radio__input\" type=\"radio\" id=\"bulk-edit-table-example-row-1-radio-2\" name=\"bulk-edit-table-example-row-1-example-radio\" />\n                <label class=\"pf-c-radio__label\" for=\"bulk-edit-table-example-row-1-radio-2\">Radio 2</label>\n              </div>\n            </div>\n          </div>\n        </td>\n        <td role=\"cell\" data-label=\"Number\">\n          <div class=\"pf-c-inline-edit__value\">2</div>\n          <div class=\"pf-c-inline-edit__input\">\n            <input class=\"pf-c-form-control\" type=\"number\" value=\"2\" id=\"bulk-edit-table-example-row-1-number-input\" aria-label=\"Number input\" />\n          </div>\n        </td>\n        <td class=\"pf-c-table__inline-edit-action\" role=\"cell\">\n          <div class=\"pf-c-inline-edit__group pf-m-action-group pf-m-icon-group\">\n            <div class=\"pf-c-inline-edit__action pf-m-valid\">\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Save edits\">\n                <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n            <div class=\"pf-c-inline-edit__action\">\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Cancel edits\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n          <div class=\"pf-c-inline-edit__action pf-m-enable-editable\">\n            <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"bulk-edit-table-example-row-1-edit-button\" aria-label=\"Edit\" aria-labelledby=\"bulk-edit-table-example-label bulk-edit-table-example-row-1-edit-button\">\n              <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n        </td>\n        <td class=\"pf-c-table__action\" role=\"cell\">\n          <div class=\"pf-c-dropdown\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"-row-1--dropdown-kebab-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"-row-1--dropdown-kebab-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </td>\n      </tr>\n      <tr role=\"row\">\n        <th role=\"columnheader\" data-label=\"Text input\">\n          <div class=\"pf-c-inline-edit__value\">Text input description content</div>\n          <div class=\"pf-c-inline-edit__input\">\n            <input class=\"pf-c-form-control\" type=\"text\" value=\"Text input description content\" id=\"bulk-edit-table-example-row-2-text-input\" aria-label=\"Text input\" />\n          </div>\n        </th>\n        <td role=\"cell\" data-label=\"Disabled text input\">\n          <div class=\"pf-c-inline-edit__value\">Text input disabled, description content</div>\n          <div class=\"pf-c-inline-edit__input\">\n            <input class=\"pf-c-form-control\" type=\"text\" value=\"Text input disabled, description content\" id=\"bulk-edit-table-example-row-2-text-input-disabled\" aria-label=\"Disabled text input\" disabled />\n          </div>\n        </td>\n        <td role=\"cell\" data-label=\"Checkboxes\">\n          <div class=\"pf-c-inline-edit__value\">Check 1, Check 2</div>\n          <div class=\"pf-c-inline-edit__group pf-m-column\">\n            <div class=\"pf-c-inline-edit__input\">\n              <div class=\"pf-c-check\">\n                <input class=\"pf-c-check__input\" type=\"checkbox\" id=\"bulk-edit-table-example-row-2-check-1\" name=\"bulk-edit-table-example-row-2-example-check\" />\n                <label class=\"pf-c-check__label\" for=\"bulk-edit-table-example-row-2-check-1\">Check 1</label>\n              </div>\n            </div>\n            <div class=\"pf-c-inline-edit__input\">\n              <div class=\"pf-c-check\">\n                <input class=\"pf-c-check__input\" type=\"checkbox\" id=\"bulk-edit-table-example-row-2-check-2\" name=\"bulk-edit-table-example-row-2-example-check-2\" />\n                <label class=\"pf-c-check__label\" for=\"bulk-edit-table-example-row-2-check-2\">Check 2</label>\n              </div>\n            </div>\n          </div>\n        </td>\n        <td role=\"cell\" data-label=\"Radios\">\n          <div class=\"pf-c-inline-edit__value\">Radio 1, Radio 2</div>\n          <div class=\"pf-c-inline-edit__group pf-m-column\" role=\"radiogroup\" aria-label=\"Radio group example\">\n            <div class=\"pf-c-inline-edit__input\">\n              <div class=\"pf-c-radio\">\n                <input class=\"pf-c-radio__input\" type=\"radio\" id=\"bulk-edit-table-example-row-2-radio-1\" name=\"bulk-edit-table-example-row-2-example-radio-1\" />\n                <label class=\"pf-c-radio__label\" for=\"bulk-edit-table-example-row-2-radio-1\">Radio 1</label>\n              </div>\n            </div>\n            <div class=\"pf-c-inline-edit__input\">\n              <div class=\"pf-c-radio\">\n                <input class=\"pf-c-radio__input\" type=\"radio\" id=\"bulk-edit-table-example-row-2-radio-2\" name=\"bulk-edit-table-example-row-2-example-radio-2\" />\n                <label class=\"pf-c-radio__label\" for=\"bulk-edit-table-example-row-2-radio-2\">Radio 2</label>\n              </div>\n            </div>\n          </div>\n        </td>\n        <td role=\"cell\" data-label=\"Number\">\n          <div class=\"pf-c-inline-edit__value\">2</div>\n          <div class=\"pf-c-inline-edit__input\">\n            <input class=\"pf-c-form-control\" type=\"number\" value=\"2\" id=\"bulk-edit-table-example-row-2-number-input\" aria-label=\"Number input\" />\n          </div>\n        </td>\n        <td class=\"pf-c-table__inline-edit-action\" role=\"cell\">\n          <div class=\"pf-c-inline-edit__group pf-m-action-group pf-m-icon-group\">\n            <div class=\"pf-c-inline-edit__action pf-m-valid\">\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Save edits\">\n                <i class=\"fas fa-check\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n            <div class=\"pf-c-inline-edit__action\">\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Cancel edits\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n          <div class=\"pf-c-inline-edit__action pf-m-enable-editable\">\n            <button class=\"pf-c-button pf-m-plain\" type=\"button\" id=\"bulk-edit-table-example-row-2-edit-button\" aria-label=\"Edit\" aria-labelledby=\"bulk-edit-table-example-label bulk-edit-table-example-row-2-edit-button\">\n              <i class=\"fas fa-pencil-alt\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n        </td>\n        <td class=\"pf-c-table__action\" role=\"cell\">\n          <div class=\"pf-c-dropdown\">\n            <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"-row-2--dropdown-kebab-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n              <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n            </button>\n            <ul class=\"pf-c-dropdown__menu pf-m-align-right\" aria-labelledby=\"-row-2--dropdown-kebab-button\" hidden>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n              </li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n              </li>\n              <li>\n                <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n              </li>\n              <li class=\"pf-c-divider\" role=\"separator\"></li>\n              <li>\n                <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n              </li>\n            </ul>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</form>","title":"Inline edit table row","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`All accessibility requirements for inputs apply to elements within inline edit.`}
    </p>
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
              {`id`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`[labelling element]`}
            </code>
          </td>
          <td>
            {`Provides a reference for toggle button and/or editable content.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="descriptive text"`}
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
              {`aria-labelledby="[labelling element] [toggle button id]"`}
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
              {`aria-label="descriptive text"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`[radio button group]`}
            </code>
          </td>
          <td>
            {`Provides an accessible description for radio groups. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`role="radiogroup"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`[radio button group]`}
            </code>
          </td>
          <td>
            {`Provides an accessible role for radio buttons groups. `}
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
              {`.pf-c-inline-edit`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<form>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the inline edit component. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-inline-edit__value`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Initiates an inline edit value. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-inline-edit__input`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Initiates an inline edit input. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-inline-edit__label`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Initiates an inline edit label.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-inline-edit__action`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Initiates an inline edit action (visible when inline edit region is active). `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-inline-editable`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-inline-edit`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-inline-edit [block level element]`}
            </code>
          </td>
          <td>
            {`Modifies an inline edit region for editable state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-action-group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-inline-edit__group`}
            </code>
          </td>
          <td>
            {`Modifies group for action group.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-icon-group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-inline-edit__group`}
            </code>
          </td>
          <td>
            {`Modifies an action group item spacing.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-column`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-inline-edit__group`}
            </code>
          </td>
          <td>
            {`Modifies an action group flex direction.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-footer`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-inline-edit__group`}
            </code>
          </td>
          <td>
            {`Modifies an inline edit group margin-top.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-bold`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-inline-edit__label`}
            </code>
          </td>
          <td>
            {`Modifies an inline edit label's `}
            <code {...{"className":"ws-code"}}>
              {`font-weight`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-valid`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-inline-edit__action`}
            </code>
          </td>
          <td>
            {`Modifies the action button state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-enable-editable`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-inline-edit__action`}
            </code>
          </td>
          <td>
            {`Exposes an inline edit action by default.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsInlineEditCoreDocs.Component.displayName = 'DocumentationComponentsInlineEditCoreDocs';
