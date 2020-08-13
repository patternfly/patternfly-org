import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsSpinnerCoreDocs = {
  "slug": "/documentation/components/spinner/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Spinner/examples/Spinner.md",
  "section": "components",
  "id": "Spinner",
  "title": "Spinner",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-spinner"
};
DocumentationComponentsSpinnerCoreDocs.liveContext = {
  
};
DocumentationComponentsSpinnerCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsSpinnerCoreDocs} {...{"code":"<span class=\"pf-c-spinner\" role=\"progressbar\" aria-valuetext=\"Loading...\">\n  <span class=\"pf-c-spinner__clipper\"></span>\n  <span class=\"pf-c-spinner__lead-ball\"></span>\n  <span class=\"pf-c-spinner__tail-ball\"></span>\n</span>","title":"Basic","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSpinnerCoreDocs} {...{"code":"<span class=\"pf-c-spinner pf-m-sm\" role=\"progressbar\" aria-valuetext=\"Loading...\">\n  <span class=\"pf-c-spinner__clipper\"></span>\n  <span class=\"pf-c-spinner__lead-ball\"></span>\n  <span class=\"pf-c-spinner__tail-ball\"></span>\n</span>\n<span class=\"pf-c-spinner pf-m-md\" role=\"progressbar\" aria-valuetext=\"Loading...\">\n  <span class=\"pf-c-spinner__clipper\"></span>\n  <span class=\"pf-c-spinner__lead-ball\"></span>\n  <span class=\"pf-c-spinner__tail-ball\"></span>\n</span>\n<span class=\"pf-c-spinner pf-m-lg\" role=\"progressbar\" aria-valuetext=\"Loading...\">\n  <span class=\"pf-c-spinner__clipper\"></span>\n  <span class=\"pf-c-spinner__lead-ball\"></span>\n  <span class=\"pf-c-spinner__tail-ball\"></span>\n</span>\n<span class=\"pf-c-spinner pf-m-xl\" role=\"progressbar\" aria-valuetext=\"Loading...\">\n  <span class=\"pf-c-spinner__clipper\"></span>\n  <span class=\"pf-c-spinner__lead-ball\"></span>\n  <span class=\"pf-c-spinner__tail-ball\"></span>\n</span>","title":"Multiple sizes","lang":"html"}}>
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
              {`role="progressbar"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-spinner`}
            </code>
          </td>
          <td>
            {`Indicates to assistive technologies that this is an indeterminate progress indicator.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-valuetext="Loading..."`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-spinner`}
            </code>
          </td>
          <td>
            {`Describes content that is being loaded, while it is loading.`}
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      {`Note: If the spinner is showing that loading of a particular region of a page is in process, the author should use `}
      <code {...{"className":"ws-code"}}>
        {`aria-describedby`}
      </code>
      {` to point to the status, and set the `}
      <code {...{"className":"ws-code"}}>
        {`aria-busy`}
      </code>
      {` attribute to `}
      <code {...{"className":"ws-code"}}>
        {`true`}
      </code>
      {` on the region until it is finished loading.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Note: A live region must be present before changing its status in order for the change to be read. `}
      <a {...{"href":"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions%3E"}}>
      </a>
      {`>`}
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
              {`.pf-c-spinner`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Creates a spinner component. The default is an extra large spinner. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-spinner__clipper`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Creates the spinning line. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-spinner__lead-ball`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Rounds out the beginning of the spinning line. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-spinner__tail-ball`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Rounds out the end of the spinning line. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-sm`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-spinner`}
            </code>
          </td>
          <td>
            {`Creates a small spinner.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-md`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-spinner`}
            </code>
          </td>
          <td>
            {`Creates a medium spinner.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-lg`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-spinner`}
            </code>
          </td>
          <td>
            {`Creates a large spinner.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-xl`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-spinner`}
            </code>
          </td>
          <td>
            {`Creates an extra-large spinner.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsSpinnerCoreDocs.Component.displayName = 'DocumentationComponentsSpinnerCoreDocs';
