import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsInputGroupCoreDocs = {
  "slug": "/documentation/components/input-group/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/InputGroup/examples/InputGroup.md",
  "section": "components",
  "id": "Input group",
  "title": "Input group",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-input-group"
};
DocumentationComponentsInputGroupCoreDocs.liveContext = {
  
};
DocumentationComponentsInputGroupCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsInputGroupCoreDocs} {...{"code":"<div class=\"pf-c-input-group\">\n  <button class=\"pf-c-button pf-m-control\" type=\"button\" id=\"textAreaButton1\">Button</button>\n  <textarea class=\"pf-c-form-control\" name=\"textarea1\" id=\"textarea1\" aria-label=\"Textarea with buttons\" aria-describedby=\"textAreaButton1\"></textarea>\n  <button class=\"pf-c-button pf-m-control\" type=\"button\">Button</button>\n</div>\n<br />\n<div class=\"pf-c-input-group\">\n  <textarea class=\"pf-c-form-control\" name=\"textarea2\" id=\"textarea2\" aria-label=\"Textarea with button\" aria-describedby=\"textAreaButton2\"></textarea>\n  <button class=\"pf-c-button pf-m-control\" type=\"button\" id=\"textAreaButton2\">Button</button>\n</div>\n<br />\n<div class=\"pf-c-input-group\">\n  <button class=\"pf-c-button pf-m-control\" type=\"button\" id=\"textAreaButton3\">Button</button>\n  <button class=\"pf-c-button pf-m-control\" type=\"button\">Button</button>\n  <textarea class=\"pf-c-form-control\" name=\"textarea3\" id=\"textarea3\" aria-label=\"Textarea with buttons\" aria-describedby=\"textAreaButton3\"></textarea>\n  <button class=\"pf-c-button pf-m-control\" type=\"button\">Button</button>\n</div>\n<br />\n<div class=\"pf-c-input-group\">\n  <div class=\"pf-c-select\" style=\"width: 100px;\">\n    <span id=\"select-example-collapsed1-label\" hidden>Choose one</span>\n    <button class=\"pf-c-select__toggle\" type=\"button\" id=\"select-example-collapsed1-toggle\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"select-example-collapsed1-label select-example-collapsed1-toggle\">\n      <div class=\"pf-c-select__toggle-wrapper\">\n        <span class=\"pf-c-select__toggle-text\">Select</span>\n      </div>\n      <span class=\"pf-c-select__toggle-arrow\">\n        <i class=\"fas fa-caret-down\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n    <ul class=\"pf-c-select__menu\" aria-labelledby=\"select-example-collapsed1-label\" hidden style=\"width: 100px;\">\n      <li>\n        <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Running</button>\n      </li>\n      <li>\n        <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Stopped</button>\n      </li>\n      <li>\n        <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Down</button>\n      </li>\n      <li>\n        <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Degraded</button>\n      </li>\n      <li>\n        <button type=\"button\" class=\"pf-c-select__menu-item\" aria-selected=\"false\">Needs Maintenance</button>\n      </li>\n    </ul>\n  </div>\n  <input class=\"pf-c-form-control\" type=\"text\" id=\"textInput4\" name=\"textInput4\" aria-label=\"Input with select and button\" aria-describedby=\"inputSelectButton1\" />\n  <button class=\"pf-c-button pf-m-control\" type=\"button\" id=\"inputSelectButton1\">Button</button>\n</div>\n<br />\n<div class=\"pf-c-input-group\">\n  <span class=\"pf-c-input-group__text\">\n    <i class=\"fas fa-dollar-sign\" aria-hidden=\"true\"></i>\n  </span>\n  <input class=\"pf-c-form-control\" type=\"number\" id=\"textInput5\" name=\"textInput5\" aria-label=\" Dollar amount input example\" />\n  <span class=\"pf-c-input-group__text\">.00</span>\n</div>\n<br />\n<div class=\"pf-c-input-group\">\n  <input class=\"pf-c-form-control\" type=\"email\" id=\"textInput6\" name=\"textInput6\" aria-label=\"Email input field\" aria-describedby=\"email-example\" />\n  <span class=\"pf-c-input-group__text\" id=\"email-example\">@example.com</span>\n</div>\n<br />\n<div class=\"pf-c-input-group\">\n  <span class=\"pf-c-input-group__text\" aria-label=\"@\" id=\"username\">\n    <i class=\"fas fa-at\" aria-hidden=\"true\"></i>\n  </span>\n  <input class=\"pf-c-form-control\" required type=\"email\" id=\"textInput7\" name=\"textInput7\" aria-invalid=\"true\" aria-label=\"Error state username example\" aria-describedby=\"username\" /></div>\n<br />\n<div class=\"pf-c-input-group\">\n  <label class=\"pf-c-input-group__text\" for=\"textInput9\">\n    <i class=\"fas fa-calendar-alt\" aria-hidden=\"true\"></i>\n  </label>\n  <input class=\"pf-c-form-control\" type=\"date\" id=\"textInput9\" name=\"textInput9\" aria-label=\"Date input example\" /></div>\n<br />\n<div class=\"pf-c-input-group\">\n  <input class=\"pf-c-form-control\" type=\"search\" id=\"textInput11\" name=\"textInput11\" aria-label=\"Search input example\" />\n  <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Search button for search input\">\n    <i class=\"fas fa-search\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n<br />\n<div class=\"pf-c-input-group\">\n  <input class=\"pf-c-form-control\" type=\"text\" id=\"textInput13\" name=\"textInput13\" aria-label=\"Input example with popover\" />\n  <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Popover for input\">\n    <i class=\"fas fa-question-circle\" aria-hidden=\"true\"></i>\n  </button>\n</div>\n<br />\n<div class=\"pf-c-input-group\">\n  <input class=\"pf-c-form-control\" type=\"search\" id=\"textInput12\" name=\"textInput12\" aria-label=\"Input example with popover\" />\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Popover for input\">\n    <i class=\"fas fa-question-circle\" aria-hidden=\"true\"></i>\n  </button>\n</div>","title":"Variations","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use the input group to extend form controls by adding text, buttons, selects, etc.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When using the `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-input-group`}
      </code>
      {` always ensure labels are used outside the input group with the `}
      <code {...{"className":"ws-code"}}>
        {`.pf-screen-reader`}
      </code>
      {` class applied. You can also make use of the `}
      <code {...{"className":"ws-code"}}>
        {`aria-describedby`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`aria-label`}
      </code>
      {`, or `}
      <code {...{"className":"ws-code"}}>
        {`aria-labelledby`}
      </code>
      {` attributues. For more information on accessibility and forms see the `}
      <PatternflyThemeLink {...{"to":"/documentation/core/components/form"}}>
        {`form component`}
      </PatternflyThemeLink>
      {`.
| Attribute | Applied to | Outcome |
`}
      {`|`}
      {` -- `}
      {`|`}
      {` -- `}
      {`|`}
      {` -- `}
      {`|`}
      {`
`}
      {`|`}
      {` `}
      <code {...{"className":"ws-code"}}>
        {`aria-describedby`}
      </code>
      {` `}
      {`|`}
      {` `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-form-control`}
      </code>
      {` |  When using `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-input-group__text`}
      </code>
      {` or `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-input-group__action`}
      </code>
      {` make use of this on the input field. |`}
    </p>
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
              {`.pf-c-input-group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the input group. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-input-group__text`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the input group text. This can be used to show text, radio, icons, or check boxes.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsInputGroupCoreDocs.Component.displayName = 'DocumentationComponentsInputGroupCoreDocs';
