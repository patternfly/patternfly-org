import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsPopoverCoreDocs = {
  "slug": "/documentation/components/popover/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Popover/examples/Popover.md",
  "section": "components",
  "id": "Popover",
  "title": "Popover",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-popover"
};
DocumentationComponentsPopoverCoreDocs.liveContext = {
  
};
DocumentationComponentsPopoverCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsPopoverCoreDocs} {...{"code":"<div class=\"pf-c-popover pf-m-top\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"popover-top-header\" aria-describedby=\"popover-top-body\">\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-md\" id=\"popover-top-header\">Popover header</h1>\n    <div class=\"pf-c-popover__body\" id=\"popover-top-body\">Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Top","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsPopoverCoreDocs} {...{"code":"<div class=\"pf-c-popover pf-m-right\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"popover-right-header\" aria-describedby=\"popover-right-body\">\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-md\" id=\"popover-right-header\">Popover header</h1>\n    <div class=\"pf-c-popover__body\" id=\"popover-right-body\">Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Right","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsPopoverCoreDocs} {...{"code":"<div class=\"pf-c-popover pf-m-bottom\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"popover-bottom-header\" aria-describedby=\"popover-bottom-body\">\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-md\" id=\"popover-bottom-header\">Popover header</h1>\n    <div class=\"pf-c-popover__body\" id=\"popover-bottom-body\">Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Bottom","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsPopoverCoreDocs} {...{"code":"<div class=\"pf-c-popover pf-m-left\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"popover-left-header\" aria-describedby=\"popover-left-body\">\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <h1 class=\"pf-c-title pf-m-md\" id=\"popover-left-header\">Popover header</h1>\n    <div class=\"pf-c-popover__body\" id=\"popover-left-body\">Popovers are triggered by click rather than hover. Click again to close.</div>\n    <footer class=\"pf-c-popover__footer\">Popover footer</footer>\n  </div>\n</div>","title":"Left","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsPopoverCoreDocs} {...{"code":"<div class=\"pf-c-popover pf-m-right\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Popover with no header example\" aria-describedby=\"popover-no-header-body\">\n  <div class=\"pf-c-popover__arrow\"></div>\n  <div class=\"pf-c-popover__content\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n    <div class=\"pf-c-popover__body\" id=\"popover-no-header-body\">Popovers are triggered by click rather than hover. Click again to close.</div>\n  </div>\n</div>","title":"Without header/footer","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A popover is used to provide contextual information for another component on click.  The popover itself is made up of two main elements: arrow and content. The content element follows the pattern of the popover box component, with a close icon in the top right corner, as well as a header and body.  One of the directional modifiers (`}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-left`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-top`}
      </code>
      {`, etc.) is required on the popover component`}
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
              {`.pf-c-popover`}
            </code>
          </td>
          <td>
            {`Identifies the element that serves as the popover container. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-labelledby="[id value of .pf-c-title]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-popover`}
            </code>
          </td>
          <td>
            {`Gives the popover an accessible name by referring to the element that provides the dialog title. `}
            <strong>
              {`Required when .pf-c-title is present`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="[title of popover]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-popover`}
            </code>
          </td>
          <td>
            {`Gives the popover an accessible name. `}
            <strong>
              {`Required when .pf-c-title is `}
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
              {`.pf-c-popover`}
            </code>
          </td>
          <td>
            {`Gives the popover an accessible description by referring to the popover content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the popover.`}
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
              {`.pf-c-popover`}
            </code>
          </td>
          <td>
            {`Tells assistive technologies that the windows underneath the current popover are not available for interaction. `}
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
              {`.pf-c-button`}
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
            {`Parent element containing the page contents when the popover is open.`}
          </td>
          <td>
            {`Hides main contents of the page from screen readers. The element with `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-popover`}
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
              {`.pf-c-popover`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates a popover. Always use it with a modifier class that positions the popover relative to the element that triggered it. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-popover__arrow`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates an arrow pointing towards the element the popover describes. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-popover__content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates the content area of the popover. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Positions the close icon in the top-right corner of the popover. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-title`}
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
          </td>
          <td>
            {`Initiates a title. Always use it with a modifier class. See `}
            <PatternflyThemeLink {...{"to":"/documentation/core/components/title"}}>
              {`title component`}
            </PatternflyThemeLink>
            {` for more info.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-popover__body`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`The popover's body text. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-popover__footer`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<footer>`}
            </code>
          </td>
          <td>
            {`Initiates a popover footer.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-left`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-popover`}
            </code>
          </td>
          <td>
            {`Positions the popover to the left of the element.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-right`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-popover`}
            </code>
          </td>
          <td>
            {`Positions the popover to the right of the element.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-top`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-popover`}
            </code>
          </td>
          <td>
            {`Positions the popover to the top of the element.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-bottom`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-popover`}
            </code>
          </td>
          <td>
            {`Positions the popover to the bottom of the element.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsPopoverCoreDocs.Component.displayName = 'DocumentationComponentsPopoverCoreDocs';
