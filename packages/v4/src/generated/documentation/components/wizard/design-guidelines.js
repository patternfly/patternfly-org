import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport280 from '../../../../content/design-guidelines/usage-and-behavior/wizard/./img/wizard-progressive-step3-new.png';
import srcImport281 from '../../../../content/design-guidelines/usage-and-behavior/wizard/./img/wizard-in-page.png';
import srcImport282 from '../../../../content/design-guidelines/usage-and-behavior/wizard/./img/standard-wizard.png';
import srcImport283 from '../../../../content/design-guidelines/usage-and-behavior/wizard/./img/wizard-with-substeps.png';
import srcImport284 from '../../../../content/design-guidelines/usage-and-behavior/wizard/./img/review-screen.png';
import srcImport285 from '../../../../content/design-guidelines/usage-and-behavior/wizard/./img/progress-screen.png';
import srcImport286 from '../../../../content/design-guidelines/usage-and-behavior/wizard/./img/completion-screen.png';
import srcImport287 from '../../../../content/design-guidelines/usage-and-behavior/wizard/./img/mobile-wizard.png';
import srcImport288 from '../../../../content/design-guidelines/usage-and-behavior/wizard/./img/wizard-in-page.png';
import srcImport289 from '../../../../content/design-guidelines/usage-and-behavior/wizard/./img/wizard-progressive-step1.png';
import srcImport290 from '../../../../content/design-guidelines/usage-and-behavior/wizard/./img/wizard-progressive-step2-new.png';
import srcImport291 from '../../../../content/design-guidelines/usage-and-behavior/wizard/./img/wizard-progressive-step3-new.png';

export const DocumentationComponentsWizardDesignGuidelinesDocs = {
  "slug": "/documentation/components/wizard/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/wizard/wizard.md",
  "section": "components",
  "id": "Wizard",
  "title": "Wizard",
  "toc": [
    "Types of wizards",
    "Elements of a wizard",
    "Usage",
    "Content",
    "Related components and demos"
  ]
};
DocumentationComponentsWizardDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsWizardDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Wizards provide a guided workflow that offers a path to complete a task, create an object or objects, or finish a series of steps for some other outcome. Wizards should incite trust in the user and guide them through an otherwise overwhelming experience.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a wizard when`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The task is long/complex and benefits from being broken into smaller more manageable steps. This allows the user to focus on smaller tasks and not feel overwhelmed.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`There is a known step by step order of tasks, and these steps can be broken up into clearly defined categories/sections which can be indicated via labels on the steps.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`This process is prescriptive. The actions a user takes in one step influence downstream steps.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`A simple form is not sufficient to aid a user in completing a task`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Avoid using a wizard for simple data entry tasks in which a basic form would suffice.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Types of wizards`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Wizards can be modal or placed within the content area of a page.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Modal wizards`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport280} {...{"alt":"modal wizard","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`The modal wizard lives in a modal dialog. If necessary, the default width and height of the modal can be overridden to increase that available content area. In most cases, the modal wizard is recommended as it will keep users focused on the task at hand. Users must either complete all of the steps of the wizard or cancel before navigating elsewhere within an application.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`In-page wizards`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport281} {...{"alt":"in page wizard","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Wizards can also be added to the content area of a page. This will allow greater flexibility in navigating to other locations in your application while within a wizard flow, but it also places greater responsibility on the system to manage state.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Elements of a wizard`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Except where noted, modal and in-page wizards have the same elements and behaviors. For the sake of simplicity, all screens here show the modal wizard.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Simple wizard`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport282} {...{"alt":"simple-wizard","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Header (modal wizard only):`}
        </strong>
        {` Modal wizards always have a header area that minimally contains the wizard title and a close button. The title should be action oriented and reflect the intended outcome of the wizard, e.g. "Create resource." You may optionally also include a description below the wizard title.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Steps sidebar:`}
        </strong>
        {` Enumerated steps are displayed in the sidebar. Steps can be fixed or updated as the user proceeds through the process (see Progressive Wizard).`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Visited step:`}
        </strong>
        {` A step that has been already visited. In most cases users can click this step to return to a prior point in the flow.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Current step:`}
        </strong>
        {` The current step is always highlighted.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Disabled step:`}
        </strong>
        {` Steps that follow the current step are usually disabled to enforce the sequential flow.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Step title:`}
        </strong>
        {` The Step title is unique to each step, and should reinforce the outcome of the individual step. It may match the Current step indicated in the steps sidebar, or as in the example image, it may be more verbose.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Body:`}
        </strong>
        {` The contents of a step itself. Any valid form elements can be incorporated within the body. The size of the modal that contains the wizard can be adjusted based on the contents of the body section. If the height of the body section causes the bottom of the modal to push beyond the height of the viewport, a vertical scrollbar will appear. However it is recommended to break your workflow into small enough steps so that scrolling is not necessary on typical monitor sizes.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Button footer:`}
        </strong>
        {` Buttons control the wizard flow. Default buttons are Next, Back, and Cancel. You may optionally add other actions, e.g. Skip to Finish or Start Over. There should only be one primary action in the footer and it should be the farthest left action.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In a standard wizard the user moves through the wizard sequentially, a step at a time. The Next button is always used to advance the wizard. In addition:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The Back button is disabled on the first page of the wizard.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`To abandon the wizard, the user selects Cancel in the button footer or the Close button in the header. Closing the wizard will discard current changes, so it may be appropriate to insert a confirmation message before executing this operation.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Wizard steps are skippable if the user configures them to be`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The user can jump to steps directly if the user clicks on a step in the nav (if the step is not disabled)`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Wizard with sub-steps`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Sub-steps can be added to the sidebar. Use sub-steps when there is a hierarchical relationship between a group of steps, if a primary step contains too much content to be displayed on one page, or when there is a set of optional settings that make sense to group together where the user need not visit each page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport283} {...{"alt":"wizard with substeps","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Sub-steps:`}
        </strong>
        {` Sub-steps are always nested inside of a major step.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Behavior`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`You may force the user to execute sub-steps in order by disabling future steps. Or enable all steps if the user should be able to click freely between sub-steps.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Clicking Next or Back should navigate through the substeps as it would for the major steps.`}
        </p>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Review and completion`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The last step in a wizard should always be a Review step. This should include a summary of what the user has input so the user may confirm them before committing their changes.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport284} {...{"alt":"wizard review step","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Review step`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Finish button:`}
        </strong>
        {` On the last step of the wizard, the Next button is labeled Finish by default. This is a configurable choice and should be replaced by a more specific verb or verb-object word pair like “Create” or “Configure networks,” when possible.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`If it will take a long time (more than a few seconds) for changes to be applied, a progress screen is recommended. This can be constructed from a variation of the `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/empty-state"}}>
        {`empty state`}
      </PatternflyThemeLink>
      {` pattern by embedding a progress bar and appropriate messaging within the body of the wizard.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport285} {...{"alt":"progress screen","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Progress message:`}
        </strong>
        {` Include a progress bar with appropriate messaging using an empty state pattern.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Cancel button (optional):`}
        </strong>
        {` Include a cancel button only if the operation can be terminated once it is started. Cancel should back out all changes and leave the system in the state that existed before the user launched the wizard.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`Note that once changes have been committed, the steps sidebar is hidden and the user can no longer make changes.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Once the changes initiated by the wizard are completed, a final confirmation screen should be displayed. Again, this can leverage an empty state pattern to present a success (or failure) message to users.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport286} {...{"alt":"completion screen","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Completion message:`}
          </strong>
          {` Provide appropriate messaging to inform the user about the outcome of the wizard.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Primary action:`}
          </strong>
          {` In most cases this will be a navigational button to close the wizard and take the user to a page where they can see the results of their changes, e.g. a new project that was created. If there is no appropriate destination or if results will be seen on the current page, make the primary action Close.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Secondary action(s) (optional):`}
          </strong>
          {` If the primary action is other than Close, include a Close button here to close the wizard and return to the prior page. Other secondary actions can also be included. See `}
          <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/empty-state"}}>
            {`Empty state`}
          </PatternflyThemeLink>
          {` for button placement.`}
        </p>
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`In some cases the result of a wizard is to dispatch a task to the background to execute changes in the back end. In these circumstances, we recommend that you provide a navigation link to monitor task progress and/or simply a Close button.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Mobile considerations`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When viewing a wizard on a mobile device, the steps sidebar will be hidden and collapse into a drop down menu panel as shown below.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport287} {...{"alt":"wizard on mobile","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`In-page wizard`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A wizard may be embedded in a page as shown below.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport288} {...{"alt":"wizard in a page","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Note that when a wizard is embedded into a page, the wizard title and description are placed within the page header. The same standards that were defined for usage of the title and description for modal wizards should be applied here.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When a wizard is placed in the context of a page, it allows some freedom that is not available using the standard modal approach.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Modals may be opened from the wizard to examine required information or perform subtask that are related to, but not part of, the wizard workflow.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`User can navigate away from the wizard to look up information or perform some prerequisite task.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Be aware that anytime the user navigates aways from the wizard, there is a risk that any information entered up until that point will be lost. At a minimum, we recommend opening a modal alert when the user tries to do this warning of potential data loss and confirming that they want to leave the wizard. Optionally you should consider including a "Save as draft" feature that will allow work in progress to be saved and recalled upon returning to the wizard.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Progressive wizard`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A progressive wizard takes the same form as the standard wizard or wizard with substeps above but accommodates a situation where the exact number of steps is not known when the wizard is first loaded. Steps in the sidebar can be changed or added as the user progresses through the wizard.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Here is an example...`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport289} {...{"alt":"progressive wizard step 1","className":"ws-img"}}>
      </img>
      {`
Step 1: The user is presented with a Get started screen where they can specify what they want to do.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport290} {...{"alt":"progressive wizard step 2","className":"ws-img"}}>
      </img>
      {`
Step 2: Based on their choice to create a new object, they are presented with a second set of options. But the remaining steps are still unknown.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport291} {...{"alt":"progressive wizard step 3","className":"ws-img"}}>
      </img>
      {`
Step 3: After the choose “Quick create” and click Next, they can now be presented with a full set of steps. It should be possible to revisit either of the first two steps making different choices and steps shown should update accordingly.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Content`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`You should keep the following in mind while designing your wizard screens:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Keep step labels short. The title at the top of each screen may be used to elaborate on the step label, but in all cases there should be a direct relationship between the step label and the screen title.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The last step should always be labeled review.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Default button labels for wizard navigation are: Next, Back, and Finish. If you are replacing the default button labels, keep them short and action oriented, e.g. “Create network.”`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Related components and demos`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Core HTML/CSS`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/wizard"}}>
          {`Wizard`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/demos/wizard"}}>
          {`Wizard (demo)`}
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
        <PatternflyThemeLink {...{"to":"/documentation/react/components/wizard"}}>
          {`Wizard`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
DocumentationComponentsWizardDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsWizardDesignGuidelinesDocs';
