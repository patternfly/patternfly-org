import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsClipboardCopyCoreDocs = {
  "slug": "/documentation/components/clipboard-copy/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/ClipboardCopy/examples/ClipboardCopy.md",
  "section": "components",
  "id": "Clipboard copy",
  "title": "Clipboard copy",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-clipboard-copy"
};
DocumentationComponentsClipboardCopyCoreDocs.liveContext = {
  
};
DocumentationComponentsClipboardCopyCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsClipboardCopyCoreDocs} {...{"code":"<div class=\"pf-c-clipboard-copy\">\n  <div class=\"pf-c-clipboard-copy__group\">\n    <input class=\"pf-c-form-control\" type=\"text\" value=\"This is editable\" id=\"basic-editable-text-input\" aria-label=\"Copyable input\" />\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Copy to clipboard\" id=\"basic-editable-copy-button\" aria-labelledby=\"basic-editable-copy-button basic-editable-text-input\">\n      <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-clipboard-copy\">\n  <div class=\"pf-c-clipboard-copy__group\">\n    <input class=\"pf-c-form-control\" readonly type=\"text\" value=\"This is read-only\" id=\"basic-readonly-text-input\" aria-label=\"Copyable input\" />\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Copy to clipboard\" id=\"basic-readonly-copy-button\" aria-labelledby=\"basic-readonly-copy-button basic-readonly-text-input\">\n      <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>","title":"Basic","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsClipboardCopyCoreDocs} {...{"code":"<h4>Editable</h4>\n<div class=\"pf-c-clipboard-copy\">\n  <div class=\"pf-c-clipboard-copy__group\">\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" id=\"expandable-not-expanded-editable-toggle\" aria-labelledby=\"expandable-not-expanded-editable-toggle expandable-not-expanded-editable-text-input\" aria-controls=\"expandable-not-expanded-editable-content\">\n      <div class=\"pf-c-clipboard-copy__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <input class=\"pf-c-form-control\" type=\"text\" value=\"This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.\" id=\"expandable-not-expanded-editable-text-input\" aria-label=\"Copyable input\" />\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Copy to clipboard\" id=\"expandable-not-expanded-editable-copy-button\" aria-labelledby=\"expandable-not-expanded-editable-copy-button expandable-not-expanded-editable-text-input\">\n      <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-clipboard-copy__expandable-content\" hidden id=\"expandable-not-expanded-editable-content\">This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.</div>\n</div>\n<br />\n<div class=\"pf-c-clipboard-copy pf-m-expanded\">\n  <div class=\"pf-c-clipboard-copy__group\">\n    <button class=\"pf-c-button pf-m-control pf-m-expanded\" type=\"button\" id=\"expandable-expanded-editable-toggle\" aria-labelledby=\"expandable-expanded-editable-toggle expandable-expanded-editable-text-input\" aria-controls=\"expandable-expanded-editable-content\">\n      <div class=\"pf-c-clipboard-copy__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <input class=\"pf-c-form-control\" readonly type=\"text\" value=\"This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.\" id=\"expandable-expanded-editable-text-input\" aria-label=\"Copyable input\" />\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Copy to clipboard\" id=\"expandable-expanded-editable-copy-button\" aria-labelledby=\"expandable-expanded-editable-copy-button expandable-expanded-editable-text-input\">\n      <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-clipboard-copy__expandable-content\" contenteditable=\"true\" id=\"expandable-expanded-editable-content\">This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.</div>\n</div>\n<br />\n<h4>Read-only</h4>\n<div class=\"pf-c-clipboard-copy\">\n  <div class=\"pf-c-clipboard-copy__group\">\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" id=\"expandable-not-expanded-readonly-toggle\" aria-labelledby=\"expandable-not-expanded-readonly-toggle expandable-not-expanded-readonly-text-input\" aria-controls=\"expandable-not-expanded-readonly-content\">\n      <div class=\"pf-c-clipboard-copy__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <input class=\"pf-c-form-control\" readonly type=\"text\" value=\"This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.\" id=\"expandable-not-expanded-readonly-text-input\" aria-label=\"Copyable input\" />\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Copy to clipboard\" id=\"expandable-not-expanded-readonly-copy-button\" aria-labelledby=\"expandable-not-expanded-readonly-copy-button expandable-not-expanded-readonly-text-input\">\n      <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-clipboard-copy__expandable-content\" hidden id=\"expandable-not-expanded-readonly-content\">This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.</div>\n</div>\n<br />\n<div class=\"pf-c-clipboard-copy pf-m-expanded\">\n  <div class=\"pf-c-clipboard-copy__group\">\n    <button class=\"pf-c-button pf-m-control pf-m-expanded\" type=\"button\" id=\"expandable-expanded-readonly-toggle\" aria-labelledby=\"expandable-expanded-readonly-toggle expandable-expanded-readonly-text-input\" aria-controls=\"expandable-expanded-readonly-content\">\n      <div class=\"pf-c-clipboard-copy__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </div>\n    </button>\n    <input class=\"pf-c-form-control\" readonly type=\"text\" value=\"This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.\" id=\"expandable-expanded-readonly-text-input\" aria-label=\"Copyable input\" />\n    <button class=\"pf-c-button pf-m-control\" type=\"button\" aria-label=\"Copy to clipboard\" id=\"expandable-expanded-readonly-copy-button\" aria-labelledby=\"expandable-expanded-readonly-copy-button expandable-expanded-readonly-text-input\">\n      <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-clipboard-copy__expandable-content\" id=\"expandable-expanded-readonly-content\">This is an editable version of the Copy to Clipboard Component that has an expandable section. Got a lot of text here, need to see all of it? Click that arrow on the left side and check out the resulting expansion.</div>\n</div>","title":"Expandable","lang":"html"}}>
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
              {`aria-label="Copy to clipboard"`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`aria-label="Show content"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button.pf-m-control`}
            </code>
          </td>
          <td>
            {`Provides an accessible name for the button when an icon is used instead of text. `}
            <strong>
              {`Required when an icon is used with no supporting text.`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="[input label text]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-form-control`}
            </code>
          </td>
          <td>
            {`Provides an accessible label for the input. Provide a label that describes the contents in the input. `}
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
              {`<i>`}
            </code>
          </td>
          <td>
            {`Hides the icon from assistive technologies.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-controls="[id of expandable element]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button.pf-m-control`}
            </code>
          </td>
          <td>
            {`Identifies the element controlled by the toggle button. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`hidden`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-clipboard-copy__expandable-content`}
            </code>
          </td>
          <td>
            {`Indicates that the expandable content is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby="[id of button] [id of input label]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button.pf-m-control`}
            </code>
          </td>
          <td>
            {`Provides an accessible name that is unique and communicates context of the button. Required when more than one ClipboardCopy component exists on the page. `}
            <strong>
              {`Important:`}
            </strong>
            {` If the label is defined on the `}
            <code {...{"className":"ws-code"}}>
              {`<input>`}
            </code>
            {` using `}
            <code {...{"className":"ws-code"}}>
              {`aria-label`}
            </code>
            {`, then use the `}
            <code {...{"className":"ws-code"}}>
              {`id`}
            </code>
            {` of the `}
            <code {...{"className":"ws-code"}}>
              {`<input>`}
            </code>
            {`. If the label is defined in a `}
            <code {...{"className":"ws-code"}}>
              {`<label>`}
            </code>
            {`, then use the `}
            <code {...{"className":"ws-code"}}>
              {`id`}
            </code>
            {` of the `}
            <code {...{"className":"ws-code"}}>
              {`<label>`}
            </code>
            {`. `}
            <strong>
              {`Alternatively`}
            </strong>
            {` this attribute can be ignored if the text input label is defined as part of the value in `}
            <code {...{"className":"ws-code"}}>
              {`aria-label`}
            </code>
            {`.`}
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
              {`.pf-c-clipboard-copy`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a clipboard copy component. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-clipboard-copy__group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a wrapper for the clipboard copy group. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-clipboard-copy__toggle-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a toggle button icon.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-clipboard-copy__expandable-content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates an expandable element.`}
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
              {`.pf-c-clipboard-copy`}
            </code>
          </td>
          <td>
            {`Modifies the clipboard copy component for the expanded state.`}
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
            {`Modifies the control toggle button for the expanded state.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsClipboardCopyCoreDocs.Component.displayName = 'DocumentationComponentsClipboardCopyCoreDocs';
