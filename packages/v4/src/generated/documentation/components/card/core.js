import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsCardCoreDocs = {
  "slug": "/documentation/components/card/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Card/examples/Card.md",
  "section": "components",
  "id": "Card",
  "title": "Card",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-card"
};
DocumentationComponentsCardCoreDocs.liveContext = {
  
};
DocumentationComponentsCardCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsCardCoreDocs} {...{"code":"<div class=\"pf-c-card\">\n  <div class=\"pf-c-card__title\">Title</div>\n  <div class=\"pf-c-card__body\">Body</div>\n  <div class=\"pf-c-card__footer\">Footer</div>\n</div>","title":"Basic","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCardCoreDocs} {...{"code":"<div class=\"pf-c-card\" id=\"card-action-example-1\">\n  <div class=\"pf-c-card__header\">\n    <div class=\"pf-c-card__header-main\">\n      <img src=\"/assets/images/pf_logo.svg\" width=\"300px\" alt=\"Logo\" />\n    </div>\n    <div class=\"pf-c-card__actions\">\n      <div class=\"pf-c-dropdown\">\n        <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"card-action-example-1-dropdown-kebab-right-aligned-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n          <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n        </button>\n        <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"card-action-example-1-dropdown-kebab-right-aligned-button\" hidden>\n          <li>\n            <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n          </li>\n          <li>\n            <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n          </li>\n          <li>\n            <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n          </li>\n          <li>\n            <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n          </li>\n          <li class=\"pf-c-divider\" role=\"separator\"></li>\n          <li>\n            <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n          </li>\n        </ul>\n      </div>\n      <input type=\"checkbox\" id=\"card-action-example-1-check\" name=\"card-action-example-1-check\" aria-labelledby=\"card-action-example-1-check-label\" />\n    </div>\n  </div>\n  <div class=\"pf-c-card__title\" id=\"card-action-example-1-check-label\">Title</div>\n  <div class=\"pf-c-card__body\">Body</div>\n  <div class=\"pf-c-card__footer\">Footer</div>\n</div>","title":"With image and action","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCardCoreDocs} {...{"code":"<div class=\"pf-c-card\" id=\"card-action-example-2\">\n  <div class=\"pf-c-card__header\">\n    <div class=\"pf-c-card__actions\">\n      <div class=\"pf-c-dropdown\">\n        <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"card-action-example-2-dropdown-kebab-right-aligned-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n          <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n        </button>\n        <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"card-action-example-2-dropdown-kebab-right-aligned-button\" hidden>\n          <li>\n            <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n          </li>\n          <li>\n            <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n          </li>\n          <li>\n            <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n          </li>\n          <li>\n            <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n          </li>\n          <li class=\"pf-c-divider\" role=\"separator\"></li>\n          <li>\n            <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n          </li>\n        </ul>\n      </div>\n      <input type=\"checkbox\" id=\"card-action-example-2-check\" name=\"card-action-example-2-check\" aria-labelledby=\"card-action-example-2-check-label\" />\n    </div>\n    <div class=\"pf-c-card__title\" id=\"card-action-example-2-check-label\">This is a really really really really really really really really really really long title</div>\n  </div>\n  <div class=\"pf-c-card__body\">Body</div>\n  <div class=\"pf-c-card__footer\">Footer</div>\n</div>","title":"With title in head","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCardCoreDocs} {...{"code":"<div class=\"pf-c-card\" id=\"card-action-example-3\">\n  <div class=\"pf-c-card__header\">\n    <div class=\"pf-c-card__actions\">\n      <div class=\"pf-c-dropdown\">\n        <button class=\"pf-c-dropdown__toggle pf-m-plain\" type=\"button\" id=\"card-action-example-3-dropdown-kebab-right-aligned-button\" aria-expanded=\"false\" aria-label=\"Actions\">\n          <i class=\"fas fa-ellipsis-v\" aria-hidden=\"true\"></i>\n        </button>\n        <ul class=\"pf-c-dropdown__menu\" aria-labelledby=\"card-action-example-3-dropdown-kebab-right-aligned-button\" hidden>\n          <li>\n            <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Link</a>\n          </li>\n          <li>\n            <button class=\"pf-c-dropdown__menu-item\" type=\"button\">Action</button>\n          </li>\n          <li>\n            <a class=\"pf-c-dropdown__menu-item pf-m-disabled\" href=\"#\" aria-disabled=\"true\" tabindex=\"-1\">Disabled link</a>\n          </li>\n          <li>\n            <button class=\"pf-c-dropdown__menu-item\" type=\"button\" disabled>Disabled action</button>\n          </li>\n          <li class=\"pf-c-divider\" role=\"separator\"></li>\n          <li>\n            <a class=\"pf-c-dropdown__menu-item\" href=\"#\">Separated link</a>\n          </li>\n        </ul>\n      </div>\n      <input type=\"checkbox\" id=\"card-action-example-3-check\" name=\"card-action-example-3-check\" aria-labelledby=\"card-action-example-3-check-label\" />\n    </div>\n  </div>\n  <div class=\"pf-c-card__body\" id=\"card-action-example-3-check-label\">This is the card body, there are only actions in the card head.</div>\n</div>","title":"With only actions in head (no title/footer)","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCardCoreDocs} {...{"code":"<div class=\"pf-c-card\">\n  <div class=\"pf-c-card__header\">\n    <div class=\"pf-c-card__header-main\">\n      <img src=\"/assets/images/pf_logo.svg\" width=\"300px\" alt=\"Logo\" />\n    </div>\n  </div>\n  <div class=\"pf-c-card__title\">Title</div>\n  <div class=\"pf-c-card__body\">Body</div>\n  <div class=\"pf-c-card__footer\">Footer</div>\n</div>","title":"With only image in head","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCardCoreDocs} {...{"code":"<div class=\"pf-c-card\">\n  <div class=\"pf-c-card__title\">Title</div>\n  <div class=\"pf-c-card__body\">This card has no footer</div>\n</div>","title":"With no footer","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCardCoreDocs} {...{"code":"<div class=\"pf-c-card\">\n  <div class=\"pf-c-card__body\">This card has no title</div>\n  <div class=\"pf-c-card__footer\">Footer</div>\n</div>","title":"With no title","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCardCoreDocs} {...{"code":"<div class=\"pf-c-card\">\n  <div class=\"pf-c-card__body\">Body</div>\n</div>","title":"With only a content section","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCardCoreDocs} {...{"code":"<div class=\"pf-c-card\">\n  <div class=\"pf-c-card__title\">Title</div>\n  <div class=\"pf-c-card__body\">Body</div>\n  <div class=\"pf-c-card__body\">Body</div>\n  <div class=\"pf-c-card__body\">Body</div>\n  <div class=\"pf-c-card__footer\">Footer</div>\n</div>","title":"With multiple body sections","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCardCoreDocs} {...{"code":"<div class=\"pf-c-card\">\n  <div class=\"pf-c-card__title\">Title</div>\n  <div class=\"pf-c-card__body pf-m-no-fill\">Body pf-m-no-fill</div>\n  <div class=\"pf-c-card__body pf-m-no-fill\">Body pf-m-no-fill</div>\n  <div class=\"pf-c-card__body\">Body</div>\n  <div class=\"pf-c-card__footer\">Footer</div>\n</div>","title":"With only one body that fills","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCardCoreDocs} {...{"code":"<div class=\"pf-c-card pf-m-compact\">\n  <div class=\"pf-c-card__title\">Title</div>\n  <div class=\"pf-c-card__body\">Body</div>\n  <div class=\"pf-c-card__footer\">Footer</div>\n</div>","title":"Compact","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCardCoreDocs} {...{"code":"<div class=\"pf-c-card pf-m-hoverable\">\n  <div class=\"pf-c-card__title\">Title</div>\n  <div class=\"pf-c-card__body\">Body</div>\n  <div class=\"pf-c-card__footer\">Footer</div>\n</div>","title":"Hover","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCardCoreDocs} {...{"code":"<div class=\"pf-c-card pf-m-selectable\" tabindex=\"0\">\n  <div class=\"pf-c-card__title\">Title</div>\n  <div class=\"pf-c-card__body\">Body</div>\n  <div class=\"pf-c-card__footer\">Footer</div>\n</div>","title":"Selectable","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCardCoreDocs} {...{"code":"<div class=\"pf-c-card pf-m-selectable pf-m-selected\" tabindex=\"0\">\n  <div class=\"pf-c-card__title\">Title</div>\n  <div class=\"pf-c-card__body\">Body</div>\n  <div class=\"pf-c-card__footer\">Footer</div>\n</div>","title":"Selected","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsCardCoreDocs} {...{"code":"<div class=\"pf-c-card pf-m-flat\">\n  <div class=\"pf-c-card__title\">Title</div>\n  <div class=\"pf-c-card__body\">Body</div>\n  <div class=\"pf-c-card__footer\">Footer</div>\n</div>","title":"Flat","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A card is a generic rectangular container that can be used to build other components. Use a default card for regular page content and the compact variation for dashboard or small cards.`}
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
              {`tabindex="0"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-card.pf-m-selectable`}
            </code>
          </td>
          <td>
            {`Inserts the selectable card into the tab order of the page so that it is focusable. `}
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
              {`.pf-c-card`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates a card component.  `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-card__title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates the title of a card.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-card__body`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates the body of a card. By default, the body element fills the available space in the card. You can use multiple `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-card__body`}
            </code>
            {` elements.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-card__footer`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates the footer of a card.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-card__header`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates the header of the card where images, actions, and/or the card title can go.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-card__actions`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates an actions element to be used in the card header.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-card__header-main`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates a wrapper element to be used in the card header when using an image, logo, or text.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-compact`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-card`}
            </code>
          </td>
          <td>
            {`Creates a compact variation of the card component that involves smaller font sizes and spacing. This variation is for use on dashboards and where a smaller card is preferred.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-no-fill`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-card__body`}
            </code>
          </td>
          <td>
            {`Sets a `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-card__body`}
            </code>
            {` to not fill the available space in `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-card`}
            </code>
            {`. `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-no-fill`}
            </code>
            {` can be added to multiple card bodies.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-hoverable`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-card`}
            </code>
          </td>
          <td>
            {`Modifies the card to include hover styles on `}
            <code {...{"className":"ws-code"}}>
              {`:hover`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-selectable`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-card`}
            </code>
          </td>
          <td>
            {`Modifies a selectable card so that it is selectable.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-selected`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-card.pf-m-selectable`}
            </code>
          </td>
          <td>
            {`Modifies a selectable card for the selected state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-flat`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-card`}
            </code>
          </td>
          <td>
            {`Modifies the card to have a border instead of a shadow. `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-flat`}
            </code>
            {` is for use in layouts where cards are against a white background.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsCardCoreDocs.Component.displayName = 'DocumentationComponentsCardCoreDocs';
