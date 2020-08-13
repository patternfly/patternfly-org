import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsFileUploadCoreDocs = {
  "slug": "/documentation/components/file-upload/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/FileUpload/examples/FileUpload.md",
  "section": "components",
  "id": "File upload",
  "title": "File upload",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-file-upload"
};
DocumentationComponentsFileUploadCoreDocs.liveContext = {
  
};
DocumentationComponentsFileUploadCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsFileUploadCoreDocs} {...{"code":"<div class=\"pf-c-file-upload\">\n  <div class=\"pf-c-file-upload__file-select\">\n    <div class=\"pf-c-input-group\">\n      <input class=\"pf-c-form-control\" id=\"basic-file-upload-text-input\" name=\"basic-file-upload-text-input\" aria-label=\"Drag a file here or browse to upload\" readonly placeholder=\"Drag a file here or browse to upload\" aria-describedby=\"basic-file-upload-browse\" />\n      <button class=\"pf-c-button pf-m-control\" type=\"button\" id=\"basic-file-upload-browse\">Browse...</button>\n      <button class=\"pf-c-button pf-m-control\" type=\"button\" disabled>Clear</button>\n    </div>\n  </div>\n  <div class=\"pf-c-file-upload__file-details\">\n    <textarea class=\"pf-c-form-control pf-m-resize-vertical\" id=\"basic-file-upload-file-details\" name=\"basic-file-upload-file-details\" aria-label=\"Empty text area\"></textarea>\n  </div>\n</div>","title":"Basic file upload","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsFileUploadCoreDocs} {...{"code":"<div class=\"pf-c-file-upload\">\n  <div class=\"pf-c-file-upload__file-select\">\n    <div class=\"pf-c-input-group\">\n      <input class=\"pf-c-form-control\" id=\"browsed-file-upload-complete-text-input\" name=\"browsed-file-upload-complete-text-input\" aria-label=\"Read only filename\" readonly value=\"Read only filename\" aria-describedby=\"browsed-file-upload-complete-browse\" />\n      <button class=\"pf-c-button pf-m-control\" type=\"button\" id=\"browsed-file-upload-complete-browse\">Browse...</button>\n      <button class=\"pf-c-button pf-m-control\" type=\"button\">Clear</button>\n    </div>\n  </div>\n  <div class=\"pf-c-file-upload__file-details\" readonly>\n    <textarea class=\"pf-c-form-control pf-m-resize-vertical\" id=\"browsed-file-upload-complete-file-details\" name=\"browsed-file-upload-complete-file-details\" aria-label=\"Text area\" readonly>Ssh-Rsa&nbsp;AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3&nbsp;+kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc</textarea>\n  </div>\n</div>","title":"Upload complete non editable","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsFileUploadCoreDocs} {...{"code":"<div class=\"pf-c-file-upload\">\n  <div class=\"pf-c-file-upload__file-select\">\n    <div class=\"pf-c-input-group\">\n      <input class=\"pf-c-form-control\" id=\"drop-file-text-input\" name=\"drop-file-text-input\" aria-label=\"Read only filename\" readonly value=\"Sample.txt\" aria-describedby=\"drop-file-browse\" />\n      <button class=\"pf-c-button pf-m-control\" type=\"button\" id=\"drop-file-browse\">Browse...</button>\n      <button class=\"pf-c-button pf-m-control\" type=\"button\">Clear</button>\n    </div>\n  </div>\n  <div class=\"pf-c-file-upload__file-details\">\n    <textarea class=\"pf-c-form-control pf-m-resize-vertical\" id=\"drop-file-file-details\" name=\"drop-file-file-details\" aria-label=\"Text area\">Ssh-Rsa&nbsp;AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3&nbsp;+kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc</textarea>\n  </div>\n</div>","title":"Upload complete editable","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsFileUploadCoreDocs} {...{"code":"<div class=\"pf-c-file-upload pf-m-drag-hover\">\n  <div class=\"pf-c-file-upload__file-select\">\n    <div class=\"pf-c-input-group\">\n      <input class=\"pf-c-form-control\" id=\"drag-file-hover-component-text-input\" name=\"drag-file-hover-component-text-input\" aria-label=\"Drag a file here or browse to upload\" readonly placeholder=\"Drag a file here or browse to upload\" aria-describedby=\"drag-file-hover-component-browse\" />\n      <button class=\"pf-c-button pf-m-control\" type=\"button\" id=\"drag-file-hover-component-browse\">Browse...</button>\n      <button class=\"pf-c-button pf-m-control\" type=\"button\" disabled>Clear</button>\n    </div>\n  </div>\n  <div class=\"pf-c-file-upload__file-details\">\n    <textarea class=\"pf-c-form-control pf-m-resize-vertical\" id=\"drag-file-hover-component-file-details\" name=\"drag-file-hover-component-file-details\" aria-label=\"Empty text area\"></textarea>\n  </div>\n</div>","title":"Drag file hover component","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsFileUploadCoreDocs} {...{"code":"<form novalidate class=\"pf-c-form\">\n  <div class=\"pf-c-form__group\">\n    <div class=\"pf-c-file-upload\">\n      <div class=\"pf-c-file-upload__file-select\">\n        <div class=\"pf-c-input-group\">\n          <input class=\"pf-c-form-control\" id=\"file-upload-error-text-input\" name=\"file-upload-error-text-input\" aria-label=\"File upload error\" required value=\"Sample.png\" aria-describedby=\"file-upload-error-browse\" />\n          <button class=\"pf-c-button pf-m-control\" type=\"button\" id=\"file-upload-error-browse\">Browse...</button>\n          <button class=\"pf-c-button pf-m-control\" type=\"button\">Clear</button>\n        </div>\n      </div>\n      <div class=\"pf-c-file-upload__file-details\" aria-describedby=\"textAreaHelperText1\" aria-invalid=\"true\">\n        <textarea class=\"pf-c-form-control pf-m-resize-vertical\" id=\"file-upload-error-file-details\" name=\"file-upload-error-file-details\" aria-label=\"Empty text area\" aria-describedby=\"textAreaHelperText1\" aria-invalid=\"true\"></textarea>\n      </div>\n    </div>\n    <p class=\"pf-c-form__helper-text pf-m-error\" id=\"textAreaHelperText1\" aria-live=\"polite\">We don't support this file type. Try again with a different file type.</p>\n  </div>\n</form>","title":"File upload in form with error","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsFileUploadCoreDocs} {...{"code":"<div class=\"pf-c-file-upload pf-m-loading\">\n  <div class=\"pf-c-file-upload__file-select\">\n    <div class=\"pf-c-input-group\">\n      <input class=\"pf-c-form-control\" id=\"file-upload-loading-text-input\" name=\"file-upload-loading-text-input\" aria-label=\"Read only filename\" readonly name=\"file-upload-loading\" value=\"Sample.png\" aria-describedby=\"file-upload-loading-browse\" />\n      <button class=\"pf-c-button pf-m-control\" type=\"button\" disabled id=\"file-upload-loading-browse\">Browse...</button>\n      <button class=\"pf-c-button pf-m-control\" type=\"button\">Clear</button>\n    </div>\n  </div>\n  <div class=\"pf-c-file-upload__file-details\">\n    <textarea class=\"pf-c-form-control pf-m-resize-vertical\" id=\"file-upload-loading-file-details\" name=\"file-upload-loading-file-details\" aria-label=\"Text area\">Ssh-Rsa&nbsp;AAh3zJFkzjjakCJialksjfB3zJFkzzAAhhMskjjakCJialksjfB3z89z3zJFkz3&nbsp;+kzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fczJFkzMAjsauoox88aaZXphBx4fc</textarea>\n    <div class=\"pf-c-file-upload__file-details-spinner\">\n      <span class=\"pf-c-spinner pf-m-lg\" role=\"progressbar\" aria-valuetext=\"Loading...\">\n        <span class=\"pf-c-spinner__clipper\"></span>\n        <span class=\"pf-c-spinner__lead-ball\"></span>\n        <span class=\"pf-c-spinner__tail-ball\"></span>\n      </span>\n    </div>\n  </div>\n</div>","title":"File upload loading","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
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
              {`.pf-c-file-upload`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<form>`}
            </code>
          </td>
          <td>
            {`Initiates the file upload component. `}
            <strong>
              {`Required`}
            </strong>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-file-upload__file-select`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the file select element. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-file-upload__file-details`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the file details element. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-file-upload__file-details-spinner`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the file details element. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-drag-hover`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-file-upload`}
            </code>
          </td>
          <td>
            {`Modifies file upload for when an element is dragged or dropped inside of its container.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-loading`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-file-upload`}
            </code>
          </td>
          <td>
            {`Modifies file upload for the loading state.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsFileUploadCoreDocs.Component.displayName = 'DocumentationComponentsFileUploadCoreDocs';
