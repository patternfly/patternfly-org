import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsFormControlCoreDocs = {
  "slug": "/documentation/components/form-control/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/FormControl/examples/FormControl.md",
  "section": "components",
  "id": "Form control",
  "title": "Form control",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-form-control"
};
DocumentationComponentsFormControlCoreDocs.liveContext = {
  
};
DocumentationComponentsFormControlCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsFormControlCoreDocs} {...{"code":"<input class=\"pf-c-form-control\" type=\"text\" value=\"Standard\" id=\"input-standard\" aria-label=\"Standard input example\" />\n<br />\n<br />\n<input class=\"pf-c-form-control\" readonly type=\"text\" value=\"Readonly\" id=\"input-readonly\" aria-label=\"Readonly input example\" />\n<br />\n<br />\n<input class=\"pf-c-form-control pf-m-success\" type=\"text\" value=\"Success\" id=\"input-success\" aria-label=\"Success state input example\" />\n<br />\n<br />\n<input class=\"pf-c-form-control pf-m-warning\" type=\"text\" value=\"Warning\" id=\"input-warning\" aria-label=\"Warning state input example\" />\n<br />\n<br />\n<input class=\"pf-c-form-control\" required type=\"text\" value=\"Error\" id=\"input-error\" aria-invalid=\"true\" aria-label=\"Error state input example\" />\n<br />\n<br />\n<input class=\"pf-c-form-control\" disabled type=\"text\" value=\"Disabled\" id=\"input-disabled\" aria-label=\"Disabled input example\" />\n<br />\n<br />\n<input class=\"pf-c-form-control pf-m-search\" type=\"search\" id=\"input-search\" name=\"search-input\" aria-label=\"Search input example\" />","title":"Input","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsFormControlCoreDocs} {...{"code":"<select class=\"pf-c-form-control\" id=\"select-standard\" name=\"select-standard\" aria-label=\"Standard select example\">\n  <option selected>Please choose</option>\n  <option value=\"Mr\">Mr</option>\n  <option value=\"Miss\">Miss</option>\n  <option value=\"Mrs\">Mrs</option>\n  <option value=\"Ms\">Ms</option>\n  <option value=\"Dr\">Dr</option>\n  <option value=\"Other\">Other</option>\n</select>\n<br />\n<br />\n<select class=\"pf-c-form-control\" id=\"select-group\" name=\"select-group\" aria-label=\"Select group example\">\n  <optgroup label=\"Group 1\">\n    <option value=\"Option 1\">The first option</option>\n    <option value=\"Option 2\" selected>The second option is selected by default</option>\n  </optgroup>\n  <optgroup label=\"Group 2\">\n    <option value=\"Option 3\">The third option</option>\n    <option value=\"Option 4\">The fourth option</option>\n  </optgroup>\n</select>\n<br />\n<br />\n<select class=\"pf-c-form-control pf-m-success\" id=\"select-group-success\" name=\"select-group-success\" aria-label=\"Success state select group example\">\n  <option>Valid option</option>\n  <optgroup label=\"Group 1\">\n    <option value=\"Option 1\">The first option</option>\n    <option value=\"Option 2\">The second option</option>\n  </optgroup>\n  <optgroup label=\"Group 2\">\n    <option value=\"Option 3\">The third option</option>\n    <option value=\"Option 4\">The fourth option</option>\n  </optgroup>\n</select>\n<br />\n<br />\n<select class=\"pf-c-form-control pf-m-warning\" id=\"select-group-warning\" name=\"select-group-warning\" aria-label=\"Warning state select group example\">\n  <option>Warning option</option>\n  <optgroup label=\"Group 1\">\n    <option value=\"Option 1\">The first option</option>\n    <option value=\"Option 2\">The second option</option>\n  </optgroup>\n  <optgroup label=\"Group 2\">\n    <option value=\"Option 3\">The third option</option>\n    <option value=\"Option 4\">The fourth option</option>\n  </optgroup>\n</select>\n<br />\n<br />\n<select class=\"pf-c-form-control\" required aria-invalid=\"true\" id=\"select-group-error\" name=\"select-group-error\" aria-label=\"Error state select group example\">\n  <option>Invalid option</option>\n  <optgroup label=\"Group 1\">\n    <option value=\"Option 1\">The first option</option>\n    <option value=\"Option 2\">The second option</option>\n  </optgroup>\n  <optgroup label=\"Group 2\">\n    <option value=\"Option 3\">The third option</option>\n    <option value=\"Option 4\">The fourth option</option>\n  </optgroup>\n</select>\n<br />\n<br />","title":"Select","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsFormControlCoreDocs} {...{"code":"<textarea class=\"pf-c-form-control\" name=\"textarea-standard\" id=\"textarea-standard\" aria-label=\"Standard textarea example\">Standard</textarea>\n<br />\n<br />\n<textarea class=\"pf-c-form-control\" readonly name=\"textarea-readonly\" id=\"textarea-readonly\" aria-label=\"Readonly textarea example\">Readonly</textarea>\n<br />\n<br />\n<textarea class=\"pf-c-form-control pf-m-success\" name=\"textarea-success\" id=\"textarea-success\" aria-label=\"Success state textarea example\">Success</textarea>\n<br />\n<br />\n<textarea class=\"pf-c-form-control pf-m-warning\" name=\"textarea-warning\" id=\"textarea-warning\" aria-label=\"Warning state textarea example\">Warning</textarea>\n<br />\n<br />\n<textarea class=\"pf-c-form-control\" required name=\"textarea-error\" id=\"textarea-error\" aria-label=\"Error state textarea example\" aria-invalid=\"true\">Error</textarea>\n<br />\n<br />\n<textarea class=\"pf-c-form-control pf-m-resize-vertical\" name=\"textarea-resize-vertical\" id=\"textarea-resize-vertical\" aria-label=\"Resize vertical textarea example\">Resizes&nbsp;vertically</textarea>\n<br />\n<br />\n<textarea class=\"pf-c-form-control pf-m-resize-horizontal\" name=\"textarea-resize-horizontal\" id=\"textarea-resize-horizontal\" aria-label=\"Resize horizontal textarea example\">Resizes&nbsp;horizontally</textarea>","title":"Textarea","lang":"html"}}>
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
              {`id`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form-control`}
            </code>
          </td>
          <td>
            {`Provides an `}
            <code {...{"className":"ws-code"}}>
              {`id`}
            </code>
            {` value that can be used with the `}
            <code {...{"className":"ws-code"}}>
              {`for`}
            </code>
            {` attribute on an associated `}
            <code {...{"className":"ws-code"}}>
              {`<label>`}
            </code>
            {` element to provide an accessible label for the form control element.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-invalid="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form-control`}
            </code>
          </td>
          <td>
            {`Indicates that the form control is in the error state and applies error state styling.`}
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
              {`.pf-c-form-control`}
            </code>
          </td>
          <td>
            {`Provides an accessible label for assistive technology.`}
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
              {`.pf-c-form-control`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<input>`}
            </code>
            {`,`}
            <code {...{"className":"ws-code"}}>
              {`<textarea>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<select>`}
            </code>
          </td>
          <td>
            {`Initiates an input, textarea or select. For styling of checkboxes or radios see the `}
            <PatternflyThemeLink {...{"to":"/documentation/core/components/check"}}>
              {`check component`}
            </PatternflyThemeLink>
            {`. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-resize-vertical`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`textarea.pf-m-form-control`}
            </code>
          </td>
          <td>
            {`Modifies a `}
            <code {...{"className":"ws-code"}}>
              {`textarea.pf-c-form-control`}
            </code>
            {` element so it can only be resized vertically along the y-axis.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-resize-horizontal`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`textarea.pf-m-form-control`}
            </code>
          </td>
          <td>
            {`Modifies a `}
            <code {...{"className":"ws-code"}}>
              {`textarea.pf-c-form-control`}
            </code>
            {` element so it can only be resized horizontally along the x-axis.`}
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
              {`.pf-c-form-control`}
            </code>
          </td>
          <td>
            {`Modifies a form control for the success state.`}
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
              {`.pf-c-form-control`}
            </code>
          </td>
          <td>
            {`Modifies a form control for the warning state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-search`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form-control`}
            </code>
          </td>
          <td>
            {`Modifies a form control for the search input.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsFormControlCoreDocs.Component.displayName = 'DocumentationComponentsFormControlCoreDocs';
