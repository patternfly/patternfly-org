import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsRadioCoreDocs = {
  "slug": "/documentation/components/radio/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Radio/examples/Radio.md",
  "section": "components",
  "id": "Radio",
  "title": "Radio",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-radio"
};
DocumentationComponentsRadioCoreDocs.liveContext = {
  
};
DocumentationComponentsRadioCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsRadioCoreDocs} {...{"code":"<div class=\"pf-c-radio\">\n  <input class=\"pf-c-radio__input\" type=\"radio\" id=\"radio-simple\" name=\"exampleRadioSimple\" />\n  <label class=\"pf-c-radio__label\" for=\"radio-simple\">Radio</label>\n</div>","title":"Basic","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsRadioCoreDocs} {...{"code":"<div class=\"pf-c-radio\">\n  <input class=\"pf-c-radio__input\" type=\"radio\" id=\"radio-checked\" name=\"exampleRadioChecked\" checked />\n  <label class=\"pf-c-radio__label\" for=\"radio-checked\">Radio checked</label>\n</div>","title":"Checked","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsRadioCoreDocs} {...{"code":"<label class=\"pf-c-radio\" for=\"radio-wrap\">\n  <input class=\"pf-c-radio__input\" type=\"radio\" id=\"radio-wrap\" name=\"exampleRadioWrap\" />\n  <span class=\"pf-c-radio__label\">Radio label wraps input</span>\n</label>","title":"Label wrapping input","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsRadioCoreDocs} {...{"code":"<div class=\"pf-c-radio\">\n  <label class=\"pf-c-radio__label\" for=\"radio-rev\">Radio reversed</label>\n  <input class=\"pf-c-radio__input\" type=\"radio\" id=\"radio-rev\" name=\"exampleRadioReversed\" /></div>","title":"Reversed","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsRadioCoreDocs} {...{"code":"<div class=\"pf-c-radio\">\n  <input class=\"pf-c-radio__input\" type=\"radio\" id=\"radio-disabled\" name=\"exampleRadioDisabled\" disabled />\n  <label class=\"pf-c-radio__label pf-m-disabled\" for=\"radio-disabled\">Radio disabled</label>\n</div>\n<div class=\"pf-c-radio\">\n  <input class=\"pf-c-radio__input\" type=\"radio\" id=\"radio-disabled-checked\" name=\"exampleRadioDisabledChecked\" disabled checked />\n  <label class=\"pf-c-radio__label pf-m-disabled\" for=\"radio-disabled-checked\">Radio disabled checked</label>\n</div>","title":"Disabled","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsRadioCoreDocs} {...{"code":"<div class=\"pf-c-radio\">\n  <input class=\"pf-c-radio__input\" type=\"radio\" id=\"radio-description\" name=\"exampleRadioDescription\" />\n  <label class=\"pf-c-radio__label\" for=\"radio-description\">Radio with description</label>\n  <div class=\"pf-c-radio__description\">Single-tenant cloud service hosted and managed by Red Hat that offers high-availability enterprise-grade clusters in a virtual private cloud on AWS od GCP.</div>\n</div>","title":"With description","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The Radio component is provided for use cases outside of forms. If it is used without label text ensure some sort of label for assistive technologies. (for example: `}
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
              {`<input type="radio">`}
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
              {`.pf-c-radio`}
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
            {`Initiates the radio component. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-radio__input`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<input type="radio">`}
            </code>
          </td>
          <td>
            {`Initiates a radio input. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-radio__label`}
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
              {`.pf-c-radio__description`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a radio description.`}
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
              {`.pf-c-radio__label`}
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
DocumentationComponentsRadioCoreDocs.Component.displayName = 'DocumentationComponentsRadioCoreDocs';
