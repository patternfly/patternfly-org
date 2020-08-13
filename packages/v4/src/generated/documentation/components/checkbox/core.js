import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsCheckboxCoreDocs = {
  "slug": "/documentation/components/checkbox/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Check/examples/Check.md",
  "section": "components",
  "id": "Checkbox",
  "title": "Checkbox",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-check"
};
DocumentationComponentsCheckboxCoreDocs.liveContext = {
  
};
DocumentationComponentsCheckboxCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsCheckboxCoreDocs} {...{"code":"<div class=\"pf-c-check\">\n  <input class=\"pf-c-check__input\" type=\"checkbox\" id=\"check-basic\" name=\"check-basic\" />\n  <label class=\"pf-c-check__label\" for=\"check-basic\">Check</label>\n</div>","title":"Basic","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCheckboxCoreDocs} {...{"code":"<div class=\"pf-c-check\">\n  <input class=\"pf-c-check__input\" type=\"checkbox\" id=\"check-checked\" name=\"check-checked\" checked />\n  <label class=\"pf-c-check__label\" for=\"check-checked\">Check checked</label>\n</div>","title":"Checked","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCheckboxCoreDocs} {...{"code":"<label class=\"pf-c-check\" for=\"check-label-wrapping-input\">\n  <input class=\"pf-c-check__input\" type=\"checkbox\" id=\"check-label-wrapping-input\" name=\"check-label-wrapping-input\" />\n  <span class=\"pf-c-check__label\">Check label wraps input</span>\n</label>","title":"Label wrapping input","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCheckboxCoreDocs} {...{"code":"<div class=\"pf-c-check\">\n  <label class=\"pf-c-check__label\" for=\"check-reversed\">Check reversed</label>\n  <input class=\"pf-c-check__input\" type=\"checkbox\" id=\"check-reversed\" name=\"check-reversed\" /></div>","title":"Reversed","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCheckboxCoreDocs} {...{"code":"<div class=\"pf-c-check\">\n  <input class=\"pf-c-check__input\" type=\"checkbox\" id=\"check-disabled\" name=\"check-disabled\" disabled />\n  <label class=\"pf-c-check__label pf-m-disabled\" for=\"check-disabled\">Check disabled</label>\n</div>\n<div class=\"pf-c-check\">\n  <input class=\"pf-c-check__input\" type=\"checkbox\" id=\"check-disabled-2\" name=\"check-disabled-2\" checked disabled />\n  <label class=\"pf-c-check__label pf-m-disabled\" for=\"check-disabled-2\">Check disabled checked</label>\n</div>","title":"Disabled","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCheckboxCoreDocs} {...{"code":"<div class=\"pf-c-check\">\n  <input class=\"pf-c-check__input\" type=\"checkbox\" id=\"check-with-description\" name=\"check-with-description\" />\n  <label class=\"pf-c-check__label\" for=\"check-with-description\">Check with description</label>\n  <div class=\"pf-c-check__description\">Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP.</div>\n</div>","title":"With description","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The Check component is provided for use cases outside of forms. If it is used without label text ensure some sort of label for assistive technologies. (for example: `}
      <code {...{"className":"ws-code"}}>
        {`aria-label`}
      </code>
      {`)`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If you extend this component or modify the styles of this component, then make sure any hover styles defined are applied to the clickable elements, like `}
      <code {...{"className":"ws-code"}}>
        {`<input>`}
      </code>
      {` or `}
      <code {...{"className":"ws-code"}}>
        {`<label>`}
      </code>
      {` since hover styles are used to convey the clickable target area of an element. To maximize the target area, use the example html where the `}
      <code {...{"className":"ws-code"}}>
        {`<label>`}
      </code>
      {` is the wrapping element.`}
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
              {`disabled`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<input type="checkbox">`}
            </code>
          </td>
          <td>
            {`Indicates that the element is unavailable and removes it from keyboard focus. `}
            <strong>
              {`Required when input is disabled`}
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
              {`.pf-c-check`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<label>`}
            </code>
          </td>
          <td>
            {`Initiates the check component. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-check__input`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<input type="checkbox">`}
            </code>
          </td>
          <td>
            {`Initiates a check input. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-check__label`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<label>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates a label. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-check__description`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a check description.`}
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
              {`.pf-c-check__label`}
            </code>
          </td>
          <td>
            {`Initiates a disabled style for labels. `}
            <strong>
              {`Required when input is disabled`}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsCheckboxCoreDocs.Component.displayName = 'DocumentationComponentsCheckboxCoreDocs';
