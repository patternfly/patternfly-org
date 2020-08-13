import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsModalCoreDocs = {
  "slug": "/documentation/components/modal/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/ModalBox/examples/ModalBox.md",
  "section": "components",
  "id": "Modal",
  "title": "Modal",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-modal-box"
};
DocumentationComponentsModalCoreDocs.liveContext = {
  
};
DocumentationComponentsModalCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsModalCoreDocs} {...{"code":"<div class=\"pf-c-modal-box\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-title\" aria-describedby=\"modal-description\">\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1 class=\"pf-c-modal-box__title\" id=\"modal-title\">Modal title</h1>\n  </header>\n  <div class=\"pf-c-modal-box__body\" id=\"modal-description\">To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.</div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Basic","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsModalCoreDocs} {...{"code":"<div class=\"pf-c-modal-box pf-m-sm\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-sm-title\" aria-describedby=\"modal-sm-description\">\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close dialog\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1 class=\"pf-c-modal-box__title\" id=\"modal-sm-title\">Modal title</h1>\n  </header>\n  <div class=\"pf-c-modal-box__body\" id=\"modal-sm-description\">Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Small","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsModalCoreDocs} {...{"code":"<div class=\"pf-c-modal-box pf-m-md\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-md-title\" aria-describedby=\"modal-md-description\">\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close dialog\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1 class=\"pf-c-modal-box__title\" id=\"modal-md-title\">Modal title</h1>\n  </header>\n  <div class=\"pf-c-modal-box__body\" id=\"modal-md-description\">Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Medium","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsModalCoreDocs} {...{"code":"<div class=\"pf-c-modal-box pf-m-lg\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-lg-title\" aria-describedby=\"modal-lg-description\">\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1 class=\"pf-c-modal-box__title\" id=\"modal-lg-title\">Modal title</h1>\n  </header>\n  <div class=\"pf-c-modal-box__body\" id=\"modal-lg-description\">Static text describing modal purpose. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Large","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsModalCoreDocs} {...{"code":"<div class=\"pf-c-modal-box\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Example of a modal without a title\" aria-describedby=\"modal-no-title-description\">\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <div class=\"pf-c-modal-box__body\">\n    <span id=\"modal-no-title-description\">When static text describing the modal is available, it can be wrapped with an ID referring to the modal's aria-describedby value. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Without title","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsModalCoreDocs} {...{"code":"<div class=\"pf-c-modal-box\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-with-description-title\" aria-describedby=\"modal-with-description-description\">\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1 class=\"pf-c-modal-box__title\" id=\"modal-with-description-title\">Modal title</h1>\n    <div class=\"pf-c-modal-box__description\" id=\"modal-with-description-description\">A description is used when you want to provide more info about the modal than the title is able to describe. The content in the description is static and will not scroll with the rest of the modal body.</div>\n  </header>\n  <div class=\"pf-c-modal-box__body\">To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.</div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"With description","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsModalCoreDocs} {...{"code":"<div class=\"pf-c-modal-box\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-custom-title\" aria-describedby=\"modal-custom-description\">\n  <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n  <header class=\"pf-c-modal-box__header\">\n    <h1 class=\"pf-c-title pf-m-4xl\" id=\"modal-custom-title\">Custom title</h1>\n  </header>\n  <div class=\"pf-c-modal-box__body\" id=\"modal-custom-description\">To support screen reader user awareness of the dialog text, the dialog text is wrapped in a div that is referenced by aria-describedby.</div>\n  <footer class=\"pf-c-modal-box__footer\">Modal footer</footer>\n</div>","title":"Custom title","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsModalCoreDocs} {...{"code":"<div class=\"pf-c-modal-box\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-generic-container-description\">\n  <p id=\"modal-generic-container-description\">The modal box children elements can be removed, and the modal serves as a generic modal container. One use case of this is when creating a wizard in a modal.</p>\n</div>","title":"Modal box as generic container","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A modal box is a generic rectangular container that can be used to build modals. A modal box can have the following sections: header, title, description, body, and footer. With normal use of the modal, a title or body is required. Alternatively, no child elements can be used, and the `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-modal-box`}
      </code>
      {` container will  serve as a generic container with no padding for custom modal content. If no `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-modal-box__title`}
      </code>
      {` is used, `}
      <code {...{"className":"ws-code"}}>
        {`aria-label="[title of modal]"`}
      </code>
      {` must be provided for `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-modal-box`}
      </code>
      {`.`}
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
              {`.pf-c-modal-box`}
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
              {`aria-labelledby="[id value of .pf-c-modal-box__title or custom modal title]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-modal-box`}
            </code>
          </td>
          <td>
            {`Gives the modal an accessible name by referring to the element that provides the dialog title. `}
            <strong>
              {`Required when .pf-c-title is present`}
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
              {`.pf-c-modal-box`}
            </code>
          </td>
          <td>
            {`Gives the modal an accessible name. `}
            <strong>
              {`Required when `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-modal-box__title`}
              </code>
              {` is `}
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
              {`.pf-c-modal-box`}
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
              {`aria-label="Close"`}
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
            {`Parent element containing the page contents when modal is open`}
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
            {`. `}
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
            {`Applied`}
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
              {`.pf-c-modal-box`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a modal box. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button.pf-m-plain`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates a modal box close button.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-modal-box__header`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<header>`}
            </code>
          </td>
          <td>
            {`Initiates a modal box header. `}
            <strong>
              {`Required`}
            </strong>
            {` if using a `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-modal-box__title`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-modal-box__title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<h1>`}
            </code>
            {`,`}
            <code {...{"className":"ws-code"}}>
              {`<h2>`}
            </code>
            {`,`}
            <code {...{"className":"ws-code"}}>
              {`<h3>`}
            </code>
            {`,`}
            <code {...{"className":"ws-code"}}>
              {`<h4>`}
            </code>
            {`,`}
            <code {...{"className":"ws-code"}}>
              {`<h5>`}
            </code>
            {`,`}
            <code {...{"className":"ws-code"}}>
              {`<h6>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a modal box title.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-modal-box__description`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a modal box description. A modal title is `}
            <strong>
              {`required`}
            </strong>
            {` if using a modal description.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-modal-box__body`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a modal box body.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-modal-box__footer`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<footer>`}
            </code>
          </td>
          <td>
            {`Initiates a modal box footer.`}
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
              {`.pf-c-modal-box`}
            </code>
          </td>
          <td>
            {`Modifies for a small modal box width.`}
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
              {`.pf-c-modal-box`}
            </code>
          </td>
          <td>
            {`Modifies for a medium modal box width.`}
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
              {`.pf-c-modal-box`}
            </code>
          </td>
          <td>
            {`Modifies for a large modal box width.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsModalCoreDocs.Component.displayName = 'DocumentationComponentsModalCoreDocs';
