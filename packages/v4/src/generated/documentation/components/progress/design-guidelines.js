import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport231 from '../../../../content/design-guidelines/usage-and-behavior/progress-bar/./img/progress-bar-callouts.png';
import srcImport232 from '../../../../content/design-guidelines/usage-and-behavior/progress-bar/./img/progress_bar_blue_animated.gif';
import srcImport233 from '../../../../content/design-guidelines/usage-and-behavior/progress-bar/./img/progress-bar-do-dont.png';
import srcImport234 from '../../../../content/design-guidelines/usage-and-behavior/progress-bar/./img/progress-bar-in-table.png';
import srcImport235 from '../../../../content/design-guidelines/usage-and-behavior/progress-bar/./img/progress-bar-in-dashboard.png';
import srcImport236 from '../../../../content/design-guidelines/usage-and-behavior/progress-bar/./img/progress-bar-file-downloading.png';
import srcImport237 from '../../../../content/design-guidelines/usage-and-behavior/progress-bar/./img/progress-bar-wizard.png';
import srcImport238 from '../../../../content/design-guidelines/usage-and-behavior/progress-bar/./img/progress-bar-blue.png';
import srcImport239 from '../../../../content/design-guidelines/usage-and-behavior/progress-bar/./img/progress-bar-error-message.png';
import srcImport240 from '../../../../content/design-guidelines/usage-and-behavior/progress-bar/./img/progress-bar-success.png';

export const DocumentationComponentsProgressDesignGuidelinesDocs = {
  "slug": "/documentation/components/progress/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/progress-bar/progress-bar.md",
  "section": "components",
  "id": "Progress",
  "title": "Progress",
  "toc": [
    "Primary elements",
    "Usage",
    "Using progress bars in your designs",
    "Styling",
    "Content",
    "Components and demos used"
  ]
};
DocumentationComponentsProgressDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsProgressDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Progress bars inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. Progress bars can also inform users about their progress through a tutorial or a series of steps to reach completion.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Primary elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport231} {...{"alt":"progress-bar","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Progress bars are composed of four elements:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Title:`}
        </strong>
        {` Concisely conveys the task the user or system is working to complete`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Track:`}
        </strong>
        {` A visual guide to describe to the user what it takes to meet full task completion`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Value of progress:`}
        </strong>
        {` A value that helps the user understand how much progress has been made`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Indicator:`}
        </strong>
        {` An animated indicator along the track that draws the user's eye to the progress bar and demonstrates the user’s progress towards completion`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a progress bar to visually indicate an extended operation that needs to be completed by a user or system.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Without a progress bar marking their progress towards completion a user could become lost about how much effort or time it will take to complete a given process. Progress bars solve the problem of helping users understand how much of a process has been completed.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport232} {...{"alt":"progress-bar","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Determinate progress bar`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`The determinate progress bar is marked with a percentage that indicates the amount of progress that has been completed in a process.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Determinate progress bar that displays percentage completed`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a percentage as a value of progress if the process will take less than a minute. If the percentage value of progress will be more accurate than the timing value, then use a percentage value such as 66%.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Determinate progress bar that displays time remaining`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Instead of percentage use a time interval value, such as “4 minutes remaining” to demonstrate the value of progress if a process is greater than 1 minute; however, choose a percentage to mark the progress value if the percentage measure will be more accurate than listing the time.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Indeterminate progress bar`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`The indeterminate progress bar represents progress that cannot be measured, and, therefore does not contain a percentage that indicates the amount of progress. Only use an indeterminate progress bar if progress cannot be measured.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use cases that can be supported by progress bars`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`When the user must complete a series of tasks and will want indication that they are making process`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`When the user needs indication that the system is progressing in loading, saving, and downloading`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`When a process needs to be reflected to a user that is happening in the background, especially when this may take a long time`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`When not to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Do not use an indeterminate progress bar to indicate measurable progress. Users need progress bars to represent measurable progress if at all possible. Use an indeterminate progress bar only if progress is not measurable.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Do not use a progress bar when a spinner should be used instead. A spinner should not be used for long processes. Only use a spinner if a process will take 1-4 seconds. A spinner will never replace a determinate progress bar as the spinner does not provide helpful information about loading time to a user.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Do not use a spinner and a progress bar together. Use one progress measure at a time.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Using progress bars in your designs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport233} {...{"alt":"progress-bar","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`The Do state demonstrates that the progress bar should be placed in alignment with relevant context. The Don’t state demonstrates that the progress bar should not be used without a descriptive title and a percentage of completion when possible. The progress bar should be placed within the user’s line of sight as a guide.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`How to use a progress bar in a table`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport234} {...{"alt":"progress-bar","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`If the progress bar records the progress of multiple line items, keep the progress bar in-line with line item it pertains to.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`How to use a progress bar in a dashboard`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport235} {...{"alt":"progress-bar","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`On the dashboard view use a progress bar to track the trends within the card components on the page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`How to use a progress bar when a file is downloading`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport236} {...{"alt":"progress-bar","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`When a file is downloading use the toast notification component and a progress bar to demonstrate the progress achieved.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`How to use a progress bar in a wizard`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport237} {...{"alt":"progress-bar","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a progress bar in a wizard to demonstrate to the user where they are in the flow.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Styling`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Styling for the progress bar should follow accessibility guidelines. The styling demonstrated below should guide design decisions.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`A blue progress bar represents a process in progress.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport238} {...{"alt":"progressbar","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`A red progress bar represents a process that has failed, and the accompanying the times-circle icon demonstrates the error that has occurred in the process.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport239} {...{"alt":"progressbar","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`A green progress bar represents the successful completion of a process, and the accompanying check-circle icon demonstrates the error that has occurred in the process.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport240} {...{"alt":"progressbar","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Content`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Titles should clearly describe the process that is being measured. Try to keep titles between 1 and 3 words.  An example of a title could be “Downloading Your Application.” Insert in “Your Application” the application name.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Do not provide any other supporting copy to the progress bar that would require the user to read about how to use the progress bar. A progress bar should be self-explanatory if you implement labels 1 through 4 that are detailed in the article above.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`See our `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/content/writing"}}>
        {`content guidelines`}
      </PatternflyThemeLink>
      {` for additional guidance.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Components and demos used`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The PatternFly components listed in the following sections can be used in a number of ways to suit specific needs or use-cases. We’ll explore several examples in this documentation.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`HTML/CSS components`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/progress"}}>
          {`Progress`}
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
        <PatternflyThemeLink {...{"to":"/documentation/react/components/progress"}}>
          {`Progress`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
DocumentationComponentsProgressDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsProgressDesignGuidelinesDocs';
