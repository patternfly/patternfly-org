import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport196 from '../../../../content/design-guidelines/usage-and-behavior/modal/./img/modal.png';
import srcImport197 from '../../../../content/design-guidelines/usage-and-behavior/modal/./img/compact.png';
import srcImport198 from '../../../../content/design-guidelines/usage-and-behavior/modal/./img/large.png';
import srcImport199 from '../../../../content/design-guidelines/usage-and-behavior/modal/./img/confirm-non-destructive-action.png';
import srcImport200 from '../../../../content/design-guidelines/usage-and-behavior/modal/./img/confirm-destructive-action.png';
import srcImport201 from '../../../../content/design-guidelines/usage-and-behavior/modal/./img/2-step-confirm-destructive-action.png';
import srcImport202 from '../../../../content/design-guidelines/usage-and-behavior/modal/./img/error-dialog.png';
import srcImport203 from '../../../../content/design-guidelines/usage-and-behavior/modal/./img/passive-dialog.png';

export const DocumentationComponentsModalDesignGuidelinesDocs = {
  "slug": "/documentation/components/modal/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/modal/modal.md",
  "section": "components",
  "id": "Modal",
  "title": "Modal",
  "toc": [
    "Primary elements",
    "Usage",
    "Components and demos used"
  ]
};
DocumentationComponentsModalDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsModalDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Use modal dialogs to load and display important information without navigating away from the current page.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Primary elements`}
    </AutoLinkHeader>
    <img src={srcImport196} {...{"alt":"Modal","width":"756","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Backdrop`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modal box`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Title:`}
        </strong>
        {` Concisely convey the purpose of the modal.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Close`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Content area`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Buttons:`}
        </strong>
        {` Enable a user to confirm, submit, or exit. Modal dialogs can include multiple action buttons, but should be limited to one primary button`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Spacing`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Compact`}
    </AutoLinkHeader>
    <img src={srcImport197} {...{"alt":"Compact","width":"756","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`The compact modal dialog uses a spacing of 24px. Use this for smaller modals that don’t contain much content.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Large`}
    </AutoLinkHeader>
    <img src={srcImport198} {...{"alt":"Large","width":"756","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`The large modal dialog uses a spacing of 32px. Use this for larger modals that contain a lot of content (code previews, forms, tables...).`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a modal dialog when information is critical and requires user input or attention.
Use modals to:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#validate-user-decisions"}}>
          {`Validate user decisions`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#report-errors"}}>
          {`Report errors`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#provide-the-result-of-a-task-or-state-of-an-application"}}>
          {`Provide the result of a task or state of an application`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#get-required-user-input"}}>
          {`Get required user input`}
        </a>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`When not to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Modal dialogs interrupt user task flow and should be avoided for any information that is not critical to user success.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Types of modals`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Validate user decisions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a confirmation dialog to validate user decisions and communicate consequences. Confirmation dialogs need to clearly restate the action the user is trying to take and explicitly outline the consequences of that action. They should be clear, concise, and direct. Give the user the important information first—additional detail like “Are you sure?” clutters your message and can be distracting.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Depending on your design template, follow this format for confirmation dialogs:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Headline:`}
        </strong>
        {` A headline is usually phrased as a question. Include important keywords (like “permanent”) in the headline.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Body text:`}
        </strong>
        {` Body text gives information about the action’s consequence.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Buttons:`}
        </strong>
        {` Buttons allow a user to answer the headline question. These can simply be “yes” or “no,” but adding some context increases clarity—especially when skimming.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note:`}
      </strong>
      {` Since confirmation dialogs disrupt user task flow, do not provide confirmation dialogs for actions that are easily reversed or insignificant.`}
    </p>
    <AutoLinkHeader {...{"size":"h5","className":"ws-title ws-h5"}}>
      {`Confirm a non-destructive action`}
    </AutoLinkHeader>
    <img src={srcImport199} {...{"alt":"Confirm a non-destructive action","width":"1100","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Provide buttons on confirmation dialogs that make it simple for users to understand and confirm their choices. When choosing button labels, use descriptive verbs that clearly indicate the consequence of a selection, like Delete, Save, or Create. Avoid vague labels like OK or Done.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Ambiguous title and button labels make it more difficult for the user to understand their options and make a decision. Descriptive title and button labels make it easy for the user to scan the content and make a decision quickly.`}
    </p>
    <AutoLinkHeader {...{"size":"h5","className":"ws-title ws-h5"}}>
      {`Confirm a destructive action`}
    </AutoLinkHeader>
    <img src={srcImport200} {...{"alt":"Confirm a destructive action","width":"1100","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`If an action is difficult or impossible to undo, a warning icon can be incorporated into the modal to add emphasis. If an action will seriously impact the system and cannot be undone, use a destructive style button. Otherwise, use a primary button.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Sometimes it is necessary to require an additional confirmation with a destructive action. An example using a form field can be seen below. In order for the destructive action to become actionable, the user needs to type in a word or phrase to make the button active.
`}
      <img src={srcImport201} {...{"alt":"2 step confirm a destructive action","width":"1100","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Report errors`}
    </AutoLinkHeader>
    <img src={srcImport202} {...{"alt":"Error dialog","width":"1100","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use error dialogs to inform users of problems interrupting normal or expected behavior.
An error message should be actionable, human readable, and answer the following questions:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`What is the problem?`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Why did it happen?`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`How can I fix it?`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Never blame the user. Use passive voice where appropriate to avoid assigning blame.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`⛔ You put in the wrong password.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`✅ That password wasn’t recognized OR`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`✅ We didn’t recognize that password.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Provide the result of a task or state of an application`}
    </AutoLinkHeader>
    <img src={srcImport203} {...{"alt":"Passive dialog","width":"1100","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Use passive dialogs to communicate critical information like the status of an application or result of an action. The content of a passive dialog should be important, immediately relevant, and either lead to or require action on the user’s part.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Some usage examples include:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Notifying a user that an operation may take a long time to complete`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Notifying a user that a critical process is complete`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note:`}
      </strong>
      {` If information is not critical, don’t use a passive dialog. Instead, use inline notifications or toast notifications.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Get required user input`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Sometimes users may need to provide additional input in order to complete an action. In this situation a form or other type of element may be incorporated into the modal. An example of this use case is the `}
      <PatternflyThemeLink {...{"to":"/documentation/core/demos/wizard"}}>
        {`modal wizard`}
      </PatternflyThemeLink>
      {`.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Content`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Clearly restate the action the user is trying to take and explicitly outline the consequences of that action.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Provide button labels that make it simple for users to understand and confirm their choices. Use descriptive verbs that clearly indicate the consequence of a selection, like Delete, Save, or Create. Avoid vague labels like OK or Done.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Use descriptive title and button labels so the user can scan content and make a decision quickly. Ambiguous title and button labels make it more difficult for the user to understand their options and make a decision.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`If the modal needs to convey the importance of information visually, icons can be added.`}
        </p>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`See our `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/content/writing"}}>
        {`content guidelines`}
      </PatternflyThemeLink>
      {` for additional guidance.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Icon use in modal dialogs`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Icon`}
          </th>
          <th>
            {`Use case(s)`}
          </th>
          <th>
            {`Usage`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
                        <span style={{"color":"rgb(240, 171, 0)"}}>{` `}
                            <i className="fas fa-exclamation-triangle" aria-label="warning"/>
              {` `}</span>
          </td>
          <td>
            <strong>
              {`Warning:`}
            </strong>
            {` Caution/ Warning`}
          </td>
          <td>
            {`Use on confirmation dialogs or passive dialogs to indicate a higher level of urgency and importance.`}
          </td>
        </tr>
        <tr>
          <td>
                        <span style={{"color":"rgb(201, 25, 11)"}}>{` `}
                            <i className="fas fa-exclamation-circle" aria-label="critical warning"/>
              {` `}</span>
          </td>
          <td>
            <strong>
              {`Critical Warning:`}
            </strong>
            {` Information will be deleted/permanent action`}
          </td>
          <td>
            {`Use on confirmation dialogs or passive dialogs to indicate the highest level of urgency and importance.`}
          </td>
        </tr>
        <tr>
          <td>
                        <span style={{"color":"rgb(43, 154, 243)"}}>{` `}
                            <i className="fas fa-info-circle" aria-label="acknowledgement"/>
              {` `}</span>
          </td>
          <td>
            <strong>
              {`Acknowledgement:`}
            </strong>
            {` Inform the user of an action or result`}
          </td>
          <td>
            {`Use on confirmation or passive dialogs to indicate a lower level of urgency.`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Components and demos used`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The PatternFly components listed in the following sections can be used in a number of ways to suit specific needs or use cases. We’ll explore several examples in this documentation.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`HTML/CSS components`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/demos/modal"}}>
          {`Modal`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/modalbox"}}>
          {`Modal box`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/button"}}>
          {`Button`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`React components`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/modal"}}>
          {`Modal`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/button"}}>
          {`Button`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
DocumentationComponentsModalDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsModalDesignGuidelinesDocs';
