import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsNotificationBadgeCoreDocs = {
  "slug": "/documentation/components/notification-badge/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/NotificationBadge/examples/NotificationBadge.md",
  "section": "components",
  "id": "Notification badge",
  "title": "Notification badge",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-notification-badge"
};
DocumentationComponentsNotificationBadgeCoreDocs.liveContext = {
  
};
DocumentationComponentsNotificationBadgeCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsNotificationBadgeCoreDocs} {...{"code":"<button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Unread notifications\">\n  <span class=\"pf-c-notification-badge pf-m-unread\">\n    <i class=\"fas fa-bell\" aria-hidden=\"true\"></i>\n  </span>\n</button>\n<button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Notifications\">\n  <span class=\"pf-c-notification-badge pf-m-read\">\n    <i class=\"fas fa-bell\" aria-hidden=\"true\"></i>\n  </span>\n</button>","title":"Basic","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Always add a modifier class. Never use the class `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-notification-badge`}
      </code>
      {` on its own.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Be sure that the component associated with this indicator handles screenreader text indicating read or unread notifications.`}
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
              {`.pf-c-notification-badge`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a notification badge. `}
            <strong>
              {`Always use it with a modifier class.`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-read`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-badge`}
            </code>
          </td>
          <td>
            {`Applies read notification badge styling.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-unread`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-notification-badge`}
            </code>
          </td>
          <td>
            {`Applies unread notification badge styling.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsNotificationBadgeCoreDocs.Component.displayName = 'DocumentationComponentsNotificationBadgeCoreDocs';
