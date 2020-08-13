import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsAlertGroupCoreDocs = {
  "slug": "/documentation/components/alert-group/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/AlertGroup/examples/AlertGroup.md",
  "section": "components",
  "id": "Alert group",
  "title": "Alert group",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-alert-group"
};
DocumentationComponentsAlertGroupCoreDocs.liveContext = {
  
};
DocumentationComponentsAlertGroupCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsAlertGroupCoreDocs} {...{"code":"<ul class=\"pf-c-alert-group\">\n  <li class=\"pf-c-alert-group__item\">\n    <div class=\"pf-c-alert pf-m-inline pf-m-success\" aria-label=\"Success alert\">\n      <div class=\"pf-c-alert__icon\">\n        <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n      </div>\n      <p class=\"pf-c-alert__title\">\n        <strong>\n          <span class=\"pf-screen-reader\">Success alert:</span>Success alert title</strong>\n      </p>\n    </div>\n  </li>\n  <li class=\"pf-c-alert-group__item\">\n    <div class=\"pf-c-alert pf-m-inline pf-m-danger\" aria-label=\"Danger alert\">\n      <div class=\"pf-c-alert__icon\">\n        <i class=\"fas fa-fw fa-exclamation-circle\" aria-hidden=\"true\"></i>\n      </div>\n      <p class=\"pf-c-alert__title\">\n        <strong>\n          <span class=\"pf-screen-reader\">Danger alert:</span>Danger alert title</strong>\n      </p>\n    </div>\n  </li>\n  <li class=\"pf-c-alert-group__item\">\n    <div class=\"pf-c-alert pf-m-inline pf-m-info\" aria-label=\"Information alert\">\n      <div class=\"pf-c-alert__icon\">\n        <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n      </div>\n      <p class=\"pf-c-alert__title\">\n        <strong>\n          <span class=\"pf-screen-reader\">Info alert:</span>Info alert title</strong>\n      </p>\n      <div class=\"pf-c-alert__description\">\n        <p>Info alert description.\n          <a href=\"#\">This is a link.</a>\n        </p>\n      </div>\n    </div>\n  </li>\n</ul>","title":"Static alert group","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <code {...{"className":"ws-code"}}>
        {`.pf-c-alert-group`}
      </code>
      {` is optional when only one alert is needed. It becomes required when more than one alert is used in a list.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
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
              {`.pf-c-alert-group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
          </td>
          <td>
            {`Creates an alert group component. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert-group__item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Creates an alert group item. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationComponentsAlertGroupCoreDocs} {...{"code":"<ul class=\"pf-c-alert-group pf-m-toast\">\n  <li class=\"pf-c-alert-group__item\">\n    <div class=\"pf-c-alert pf-m-success\" aria-label=\"Success toast alert\">\n      <div class=\"pf-c-alert__icon\">\n        <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n      </div>\n      <p class=\"pf-c-alert__title\" id=\"alert_one_title\">\n        <strong>\n          <span class=\"pf-screen-reader\">Success alert:</span>Success toast alert title</strong>\n      </p>\n      <div class=\"pf-c-alert__action\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close success alert: Success alert title\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </li>\n  <li class=\"pf-c-alert-group__item\">\n    <div class=\"pf-c-alert pf-m-danger\" aria-label=\"Danger toast alert\">\n      <div class=\"pf-c-alert__icon\">\n        <i class=\"fas fa-fw fa-exclamation-circle\" aria-hidden=\"true\"></i>\n      </div>\n      <p class=\"pf-c-alert__title\" id=\"alert_two_title\">\n        <strong>\n          <span class=\"pf-screen-reader\">Danger alert:</span>Danger toast alert title</strong>\n      </p>\n      <div class=\"pf-c-alert__action\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close success alert: Success alert title\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </li>\n  <li class=\"pf-c-alert-group__item\">\n    <div class=\"pf-c-alert pf-m-info\" aria-label=\"Information toast alert\">\n      <div class=\"pf-c-alert__icon\">\n        <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n      </div>\n      <p class=\"pf-c-alert__title\" id=\"alert_three_title\">\n        <strong>\n          <span class=\"pf-screen-reader\">Info alert:</span>Info toast alert title</strong>\n      </p>\n      <div class=\"pf-c-alert__description\">\n        <p>Info toast alert description.\n          <a href=\"#\">This is a link.</a>\n        </p>\n      </div>\n      <div class=\"pf-c-alert__action\">\n        <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close success alert: Success alert title\">\n          <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n    </div>\n  </li>\n</ul>","title":"Toast alert group","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`An alert group that includes the `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-toast`}
      </code>
      {` modifier becomes a toast alert group with unique positioning in the top-right corner of the window. `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-alert-group`}
      </code>
      {` is required to create a toast alert group.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Every toast alert must include a close button to dismiss the alert.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Modifiers`}
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
              {`.pf-m-toast`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert-group`}
            </code>
          </td>
          <td>
            {`Applies toast alert styling to an alert group.`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Alert groups are used to contain and align consecutive alerts. Groups can either be embedded alongside a page's content or in the top-right corner as a toast group using the `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-toast`}
      </code>
      {` modifier.`}
    </p>
  </React.Fragment>
);
DocumentationComponentsAlertGroupCoreDocs.Component.displayName = 'DocumentationComponentsAlertGroupCoreDocs';
