import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsAlertCoreDocs = {
  "slug": "/documentation/components/alert/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Alert/examples/Alert.md",
  "section": "components",
  "id": "Alert",
  "title": "Alert",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-alert"
};
DocumentationComponentsAlertCoreDocs.liveContext = {
  
};
DocumentationComponentsAlertCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsAlertCoreDocs} {...{"code":"<div class=\"pf-c-alert\" aria-label=\"Default alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-bell\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Default alert:</span>Default alert title</strong>\n  </p>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-info\" aria-label=\"Information alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Info alert:</span>Info alert title</strong>\n  </p>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Success alert:</span>Success alert title</strong>\n  </p>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-warning\" aria-label=\"Warning alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Warning alert:</span>Warning alert title</strong>\n  </p>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-danger\" aria-label=\"Danger alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-exclamation-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Danger alert:</span>Danger alert title</strong>\n  </p>\n</div>","title":"Types","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsAlertCoreDocs} {...{"code":"<div class=\"pf-c-alert pf-m-success\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Success alert:</span>Success alert title</strong>\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close success alert: Success alert title\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__description\">\n    <p>Success alert description. This should tell the user more information about the alert.</p>\n  </div>\n  <div class=\"pf-c-alert__action-group\">\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">View details</button>\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Ignore</button>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Success alert:</span>Success alert title</strong>\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close success alert: Success alert title\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__description\">\n    <p>Success alert description. This should tell the user more information about the alert.\n      <a href=\"#\">This is a link.</a>\n    </p>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Success alert:</span>Success alert title</strong>\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close success alert: Success alert title\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__action-group\">\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">View details</button>\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Ignore</button>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Success alert:</span>Success alert title</strong>\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close success alert: Success alert title\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Success alert:</span>Success alert title</strong>\n  </p>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success\" aria-label=\"Success alert with title truncation\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title pf-m-truncate\">\n    <strong>\n      <span class=\"pf-screen-reader\">Success alert:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo.</strong>\n  </p>\n  <div class=\"pf-c-alert__description\">\n    <p>This example uses \".pf-m-truncate\" to limit the title to a single line and truncate any overflow text with ellipses.</p>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success\" aria-label=\"Success alert with title truncation at 2 lines\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title pf-m-truncate\" style=\"--pf-c-alert__title--max-lines: 2\">\n    <strong>\n      <span class=\"pf-screen-reader\">Success alert:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque cursus enim fringilla tincidunt. Proin lobortis aliquam dictum. Nam vel ullamcorper nulla, nec blandit dolor. Vivamus pellentesque neque justo, nec accumsan nulla rhoncus id. Suspendisse mollis, tortor quis faucibus volutpat, sem leo fringilla turpis, ac lacinia augue metus in nulla. Cras vestibulum lacinia orci. Pellentesque sodales consequat interdum. Sed porttitor tincidunt metus nec iaculis. Pellentesque non commodo justo. Morbi feugiat rhoncus neque, vitae facilisis diam aliquam nec. Sed dapibus vitae quam at tristique. Nunc vel commodo mi. Mauris et rhoncus leo.</strong>\n  </p>\n  <div class=\"pf-c-alert__description\">\n    <p>This example uses \".pf-m-truncate\" and sets \"--pf-c-alert__title--max-lines: 2\" to limit title to two lines and truncate any overflow text with ellipses.</p>\n  </div>\n</div>","title":"Variations","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsAlertCoreDocs} {...{"code":"<div class=\"pf-c-alert pf-m-inline\" aria-label=\"Inline default alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-bell\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Default inline alert:</span>Default inline alert title</strong>\n  </p>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-info pf-m-inline\" aria-label=\"Inline information alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Info alert:</span>Info inline alert title</strong>\n  </p>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success pf-m-inline\" aria-label=\"Inline success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Success alert:</span>Success inline alert title</strong>\n  </p>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-warning pf-m-inline\" aria-label=\"Inline warning alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Warning alert:</span>Warning inline alert title</strong>\n  </p>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-danger pf-m-inline\" aria-label=\"Inline danger alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-exclamation-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Danger alert:</span>Danger inline alert title</strong>\n  </p>\n</div>","title":"Inline types","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsAlertCoreDocs} {...{"code":"<div class=\"pf-c-alert pf-m-success pf-m-inline\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Success alert:</span>Success alert title</strong>\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close success alert: Success alert title\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__description\">\n    <p>Success alert description. This should tell the user more information about the alert.</p>\n  </div>\n  <div class=\"pf-c-alert__action-group\">\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">View details</button>\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Ignore</button>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success pf-m-inline\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Success alert:</span>Success alert title</strong>\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close success alert: Success alert title\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__description\">\n    <p>Success alert description. This should tell the user more information about the alert.\n      <a href=\"#\">This is a link.</a>\n    </p>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success pf-m-inline\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Success alert:</span>Success alert title</strong>\n  </p>\n  <div class=\"pf-c-alert__action\">\n    <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close success alert: Success alert title\">\n      <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"pf-c-alert__action-group\">\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">View details</button>\n    <button class=\"pf-c-button pf-m-link pf-m-inline\" type=\"button\">Ignore</button>\n  </div>\n</div>\n<br />\n<div class=\"pf-c-alert pf-m-success pf-m-inline\" aria-label=\"Success alert\">\n  <div class=\"pf-c-alert__icon\">\n    <i class=\"fas fa-fw fa-check-circle\" aria-hidden=\"true\"></i>\n  </div>\n  <p class=\"pf-c-alert__title\">\n    <strong>\n      <span class=\"pf-screen-reader\">Success alert:</span>Success alert title</strong>\n  </p>\n</div>","title":"Inline variations","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Add a modifier class to the default alert to change the color: `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-success`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-danger`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-warning`}
      </code>
      {`, or `}
      <code {...{"className":"ws-code"}}>
        {`.pf-m-info`}
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
              {`aria-label="Default alert"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert`}
            </code>
          </td>
          <td>
            {`Indicates the default alert.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="Success alert"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert`}
            </code>
          </td>
          <td>
            {`Indicates the success alert.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="Danger alert"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert`}
            </code>
          </td>
          <td>
            {`Indicates the danger alert.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="Warning alert"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert`}
            </code>
          </td>
          <td>
            {`Indicates the warning alert.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="Information alert"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert`}
            </code>
          </td>
          <td>
            {`Indicates the information alert.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="Close success alert: Success alert title"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button.pf-m-plain`}
            </code>
          </td>
          <td>
            {`Indicates the close button. Please provide descriptive text to ensure assistive technologies clearly state which alert is being closed.`}
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
              {`.pf-c-alert__icon <i>`}
            </code>
          </td>
          <td>
            {`Hides icon for assistive technologies. `}
            <strong>
              {` Required `}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
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
              {`.pf-screen-reader`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert__title <span>`}
            </code>
          </td>
          <td>
            {`Content that is visually hidden but accessible to assistive technologies. This should state the type of alert.  `}
            <strong>
              {` Required`}
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
              {`.pf-c-alert`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Applies default alert styling. Always use with a modifier class. `}
            <strong>
              {` Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert__icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Defines the alert icon. `}
            <strong>
              {` Required `}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert__title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<p>, <h1-h6>`}
            </code>
          </td>
          <td>
            {`Defines the alert title. `}
            <strong>
              {` Required `}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert__description`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Defines the alert description area.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert__action`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Defines the action button wrapper. Should contain `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button.pf-m-plain`}
            </code>
            {` for close action or `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button.pf-m-link`}
            </code>
            {` for link text. It should only include one action.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert__action-group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Defines the action button group. Should contain `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button.pf-m-link.pf-m-inline`}
            </code>
            {` for inline link text. `}
            <strong>
              {`Note: `}
            </strong>
            {` only inline link buttons are supported in the alert action group.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-success`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert`}
            </code>
          </td>
          <td>
            {`Applies success styling.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-danger`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert`}
            </code>
          </td>
          <td>
            {`Applies danger styling.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-warning`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert`}
            </code>
          </td>
          <td>
            {`Applies warning styling.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-info`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert`}
            </code>
          </td>
          <td>
            {`Applies info styling.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-inline`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert`}
            </code>
          </td>
          <td>
            {`Applies inline styling.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-truncate`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-alert__title`}
            </code>
          </td>
          <td>
            {`Modifies the title to display a single line and truncate any overflow text with ellipses. `}
            <strong>
              {`Note:`}
            </strong>
            {` you can specify the max number of lines to show by setting the `}
            <code {...{"className":"ws-code"}}>
              {`--pf-c-alert__title--max-lines`}
            </code>
            {` (the default value is `}
            <code {...{"className":"ws-code"}}>
              {`1`}
            </code>
            {`).`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsAlertCoreDocs.Component.displayName = 'DocumentationComponentsAlertCoreDocs';
