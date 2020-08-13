import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport25 from '../../../../content/design-guidelines/usage-and-behavior/alerts-and-notifications/./img/alert-types.png';
import srcImport26 from '../../../../content/design-guidelines/usage-and-behavior/alerts-and-notifications/./img/alert-status.png';
import srcImport27 from '../../../../content/design-guidelines/usage-and-behavior/alerts-and-notifications/./img/inline-notification.png';
import srcImport28 from '../../../../content/design-guidelines/usage-and-behavior/alerts-and-notifications/./img/inline-interactive-alert.png';
import srcImport29 from '../../../../content/design-guidelines/usage-and-behavior/alerts-and-notifications/./img/toast-notification.png';
import srcImport30 from '../../../../content/design-guidelines/usage-and-behavior/alerts-and-notifications/./img/toast-notification-multiple.png';
import srcImport31 from '../../../../content/design-guidelines/usage-and-behavior/alerts-and-notifications/./img/Toast-alerts-desktop.png';
import srcImport32 from '../../../../content/design-guidelines/usage-and-behavior/alerts-and-notifications/./img/Inline-alert-page-level.png';
import srcImport33 from '../../../../content/design-guidelines/usage-and-behavior/alerts-and-notifications/./img/Inline-alert-specific-context.png';
import srcImport34 from '../../../../content/design-guidelines/usage-and-behavior/alerts-and-notifications/./img/Notification-content-not-accessible.png';
import srcImport35 from '../../../../content/design-guidelines/usage-and-behavior/alerts-and-notifications/./img/Notification-content-accessible.png';

export const DocumentationComponentsAlertDesignGuidelinesDocs = {
  "slug": "/documentation/components/alert/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/alerts-and-notifications/alerts-and-notifications.md",
  "section": "components",
  "id": "Alert",
  "title": "Alert",
  "toc": [
    "Elements",
    "Usage",
    "Accessibility considerations",
    "Related components and demos"
  ]
};
DocumentationComponentsAlertDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsAlertDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Alerts are used when the system wants to notify the user about some status or other event. These guidelines talk about how to properly use different types of alerts in your designs.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Alert`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Alerts are used to communicate status information to the user without blocking other actions through the user interface. There are two styles that can be applied to an alert depending on whether it is intended as an `}
      <a {...{"href":"#inline-alerts"}}>
        {`inline`}
      </a>
      {` or `}
      <a {...{"href":"#toast-alerts"}}>
        {`toast`}
      </a>
      {` alert. Toast alerts should always be dismissable, whereas inline alerts can be both dismissable and non-dismissable. Other elements are consistent between alert types.`}
    </p>
    <img src={srcImport25} {...{"alt":"Alert types","width":"868","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Status area:`}
        </strong>
        {` Icon and color indicate the status or severity of the alert.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Alert title:`}
        </strong>
        {` Include a short descriptive message. Long message text will wrap. Text color is coded to match alert type.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Close (optional):`}
        </strong>
        {` Dismiss the alert. Required for toast alerts and optional for inline alerts.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Actions (optional):`}
        </strong>
        {` One or more actions can be placed inside of an alert.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Description (optional):`}
        </strong>
        {` If a longer message is required, it can be included within the Description field. This can also include a navigation link as an alternative to an action.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Communicating status`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The status icon, background, and alert title are coded to communicate the severity of an alert.`}
    </p>
    <img src={srcImport26} {...{"alt":"alert styles","width":"700","className":"ws-img"}}>
    </img>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Type`}
          </th>
          <th>
            {`Icon`}
          </th>
          <th>
            {`Usage`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {`Default`}
          </td>
          <td>
            {`fa-bell`}
          </td>
          <td>
            {`Use for generic messages with no associated severity`}
          </td>
        </tr>
        <tr>
          <td>
            {`Info`}
          </td>
          <td>
            {`fa-info-circle`}
          </td>
          <td>
            {`Use for general informational messages (default)`}
          </td>
        </tr>
        <tr>
          <td>
            {`Warning`}
          </td>
          <td>
            {`fa-exclamation-triangle`}
          </td>
          <td>
            {`Use to indicate that a non-critical error has occurred`}
          </td>
        </tr>
        <tr>
          <td>
            {`Critical`}
          </td>
          <td>
            {`fa-exclamation-circle`}
          </td>
          <td>
            {`Use to indicate that a critical or blocking error has occurred`}
          </td>
        </tr>
        <tr>
          <td>
            {`Success`}
          </td>
          <td>
            {`fa-check-circle`}
          </td>
          <td>
            {`Use to indicate that a task or process has completed successfully`}
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      {`For more information about exact colors used to represent status and severity, visit the `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/styles/colors#status-and-state-colors"}}>
        {`Colors`}
      </PatternflyThemeLink>
      {` page.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Alerts can be used to communicate:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Synchronous notifications:`}
          </strong>
          {` Returned as a direct response to some user action like clicking the Submit button on a form.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Asynchronous notifications:`}
          </strong>
          {` Generated by the system in response to some internal event. They may reflect status of a process, an internal error, or similar system event.`}
        </p>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Message text should be succinct and clearly state what the issue or problem is. Embedded links should navigate the user to the location where they can take action.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`There are three ways that the system can communicate notifications to the users.`}
    </p>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
          </th>
          <th>
            {`Usage`}
          </th>
          <th>
            {`UI placement`}
          </th>
          <th>
            {`Persistence`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a {...{"href":"#inline-alerts"}}>
              {`Inline alerts`}
            </a>
          </td>
          <td>
            {`Use for notifications that are a direct response to a user action, like clicking the Submit button on a form, and can be informational or that identify actions required on that page before the user can continue.`}
          </td>
          <td>
            {`Appear at the top of the content area and push other content down.`}
          </td>
          <td>
            {`Persist until the user dismisses them or navigates away from the page.`}
          </td>
        </tr>
        <tr>
          <td>
            <a {...{"href":"#toast-alerts"}}>
              {`Toast alerts`}
            </a>
          </td>
          <td>
            {`Use to present a system notification that should not interrupt the user’s current workflow.`}
          </td>
          <td>
            {`Enter from the right edge of the screen and overlay content.`}
          </td>
          <td>
            {`Remain until they time out, or the user dismisses them.`}
          </td>
        </tr>
        <tr>
          <td>
            <a {...{"href":"#modal-alerts"}}>
              {`Modal alerts`}
            </a>
          </td>
          <td>
            {`Use when you must interrupt the task at hand until the user takes action.`}
          </td>
          <td>
            {`Overlay the UI and prevent further user actions until the user closes the modal.`}
          </td>
          <td>
            {`Remain until the user dismisses the modal.`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Inline alerts`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Inline alerts are synchronous and appear as the result of a user action or upon loading a page. They insert themselves into the content area, push down other content, and will persist until the user closes them or navigates away from the page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport27} {...{"alt":"inline notification placement","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`See a `}
      <a {...{"href":"#inline-alert-placement"}}>
        {`high-fidelity example of inline alert placement`}
      </a>
      {` below.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use an inline alert when you want to return feedback as the result of a user action within a page while allowing the user to continue working. Common uses for inline alerts include form validation or warning messages that should not interrupt the user’s flow.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`An inline alert should never block the user from interacting with other content on a page. For informational alerts, the user should be able to dismiss the alert by clicking the Close button on the alert. For error conditions, we recommend that the alert is dismissed only when the condition raising it has been cleared.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`In addition to static message content and links, interactive elements may optionally be included in the body of an inline alert to ask the user for further input or feedback.`}
    </p>
    <img src={srcImport28} {...{"alt":"interactive inline alert","width":"439","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When not to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Do not use inline alerts to reflect the status of an asynchronous operation. In this case, a Toast Alert should be used.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Alternative solutions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If the user must take action to address a situation before proceeding consider using a `}
      <a {...{"href":"design-guidelines/usage-and-behavior/modal"}}>
        {`modal`}
      </a>
      {`. Inline alerts are preferred to a modal when the problem can be corrected on the current page, however.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Toast alerts`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Toast alerts enter from the right edge of the screen and remain until they time out or until the user dismisses them. Toast alerts overlay other content on the page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport29} {...{"alt":"toast notification placement","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`See a `}
      <a {...{"href":"#toast-alert-placement"}}>
        {`high-fidelity example of toast alert placement`}
      </a>
      {` below.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use toast alerts when you want to report an asynchronous event without interrupting the user’s current workflow. Actions and links may be used in alerts, but only as a shortcut or redundant means to navigate or invoke the action. A toast alert should never be used as the only means for taking actions on an alert event.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Toast notifications must always have a close button so the user can dismiss them. You may also include an optional time-out to dismiss the alert automatically after a period of time. Eight (8) seconds is a recommended timeout. Alerts should not dismiss while the user is hovering over them.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When not to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Do not use a toast alert when an event requires immediate action or for synchronous events like form validation.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Stacking multiple alerts`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Multiple alerts will stack. The most recent alert should appear at the top and others will push down. When alerts are deleted, any space above will be filled by pushing remaining alerts up in the stack order.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`An `}
      <a {...{"href":"documentation/react/components/alertgroup"}}>
        {`Alert Group`}
      </a>
      {` component allows a set of alerts to be properly positioned and stacked as shown below.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport30} {...{"alt":"alert group","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Examples`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Toast alert placement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Toast alerts always stack in the upper right of a page.`}
    </p>
    <img src={srcImport31} {...{"alt":"toast alerts in a page","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Inline alert placement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If an alert message applies globally to the content on a page, place the alert in the page header area just below the title.`}
    </p>
    <img src={srcImport32} {...{"alt":"global inline alert in a page","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`But if the alert applies only to specific content, you might consider placing the alert inline with page content to call attention to the error.`}
    </p>
    <img src={srcImport33} {...{"alt":"inline alert inline with content","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Accessibility considerations`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Toast alerts present special challenges for accessibility. Screen readers will announce the arrival and message content of an incoming toast alert, but user focus will not be placed there. This will make it difficult for these users to directly act on the alerts itself. Therefore, we recommend that any message containing actions be descriptive of how the can navigate to perform the action in the application. Messages that contain links should specify the location in text as well as including a simple text link. For example, a simple notification message might take the form:`}
    </p>
    <img src={srcImport34} {...{"alt":"Non-accessible alert example","width":"615","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`A more accessible version of this message would look like this:`}
    </p>
    <img src={srcImport35} {...{"alt":"Non-accessible alert example","width":"615","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`While this is more verbose, it has the advantage of being usable for both sighted and non-sighted users by providing instructions to screen reader users about where they can go to complete the action.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Related components and demos`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`HTML/CSS`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/alert"}}>
          {`Alert`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/alertgroup"}}>
          {`Alert group`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`React`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/alert"}}>
          {`Alert`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/alertgroup"}}>
          {`Alert group`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
DocumentationComponentsAlertDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsAlertDesignGuidelinesDocs';
