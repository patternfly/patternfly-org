import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsAboutModalCoreDocs = {
  "slug": "/documentation/components/about-modal/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/AboutModalBox/examples/AboutModalBox.md",
  "section": "components",
  "id": "About modal",
  "title": "About modal",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-about-modal-box"
};
DocumentationComponentsAboutModalCoreDocs.liveContext = {
  
};
DocumentationComponentsAboutModalCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsAboutModalCoreDocs} {...{"code":"<div class=\"pf-c-about-modal-box\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"about-modal-title\">\n  <div class=\"pf-c-about-modal-box__brand\">\n    <img class=\"pf-c-about-modal-box__brand-image\" src=\"/assets/images/pf_mini_logo_white.svg\" alt=\"PatternFly brand logo\" />\n  </div>\n  <div class=\"pf-c-about-modal-box__close\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close dialog\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-about-modal-box__header\">\n    <h1 class=\"pf-c-title pf-m-4xl\" id=\"about-modal-title\">Product name</h1>\n  </div>\n  <div class=\"pf-c-about-modal-box__hero\"></div>\n  <div class=\"pf-c-about-modal-box__content\">\n    <div class=\"pf-c-about-modal-box__body\">content</div>\n    <p class=\"pf-c-about-modal-box__strapline\">Trademark and copyright information here</p>\n  </div>\n</div>","title":"Basic","lang":"html","isFullscreen":true}}>
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
            {`Applies to`}
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
              {`role="dialog"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-about-modal-box`}
            </code>
          </td>
          <td>
            {`Identifies the element that serves as the modal container. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby="[id value of element describing modal]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-about-modal-box`}
            </code>
          </td>
          <td>
            {`Gives the modal an accessible name by referring to the element that provides the dialog title. `}
            <strong>
              {`Required when adequate titling element is present`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="[title of modal]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-about-modal-box`}
            </code>
          </td>
          <td>
            {`Gives the modal an accessible name. `}
            <strong>
              {`Required when adequate titling element is `}
              <em>
                {`not`}
              </em>
              {` present`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-describedby="[id value of applicable content]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-about-modal-box`}
            </code>
          </td>
          <td>
            {`Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-modal="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-modal-box`}
            </code>
          </td>
          <td>
            {`Tells assistive technologies that the windows underneath the current modal are not available for interaction. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="Close Dialog"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-modal-box__close .pf-c-button`}
            </code>
          </td>
          <td>
            {`Provides an accessible name for the close button as it uses an icon instead of text. `}
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
            {`Parent element containing the page contents when the modal is open.`}
          </td>
          <td>
            {`Hides main contents of the page from screen readers. The element with `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-modal-box`}
            </code>
            {` must not be a descendent of the element with `}
            <code {...{"className":"ws-code"}}>
              {`aria-hidden="true"`}
            </code>
            {`. For more info see `}
            <PatternflyThemeLink {...{"to":"/accessibility-guide#trapping-focus"}}>
              {`trapping focus`}
            </PatternflyThemeLink>
            {` `}
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
              {`.pf-c-about-modal-box`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<article>`}
            </code>
          </td>
          <td>
            {`Initiates a modal box.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-about-modal-box__brand`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a modal box brand cell.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-about-modal-box__brand-image`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<img>`}
            </code>
          </td>
          <td>
            {`Initiates a modal box brand image.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-about-modal-box__close`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a modal box close cell.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-about-modal-box__header`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<header>`}
            </code>
          </td>
          <td>
            {`Initiates a modal box header cell.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-about-modal-box__hero`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a modal box hero cell.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-about-modal-box__content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a modal box content cell.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-about-modal-box__body`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a modal box body cell.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-about-modal-box__strapline`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<p>`}
            </code>
          </td>
          <td>
            {`Initiates a modal box strapline cell.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsAboutModalCoreDocs.Component.displayName = 'DocumentationComponentsAboutModalCoreDocs';
