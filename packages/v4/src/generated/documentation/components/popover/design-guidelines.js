import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport218 from '../../../../content/design-guidelines/usage-and-behavior/on-screen-help/./img/help-elements.png';
import srcImport219 from '../../../../content/design-guidelines/usage-and-behavior/on-screen-help/./img/persistent-text.png';
import srcImport220 from '../../../../content/design-guidelines/usage-and-behavior/on-screen-help/./img/hints.png';
import srcImport221 from '../../../../content/design-guidelines/usage-and-behavior/on-screen-help/./img/popovers-1.png';
import srcImport222 from '../../../../content/design-guidelines/usage-and-behavior/on-screen-help/./img/popovers-colors.png';
import srcImport223 from '../../../../content/design-guidelines/usage-and-behavior/on-screen-help/./img/popovers-2.png';
import srcImport224 from '../../../../content/design-guidelines/usage-and-behavior/on-screen-help/./img/tooltips.png';
import srcImport225 from '../../../../content/design-guidelines/usage-and-behavior/on-screen-help/./img/use-tooltips.png';
import srcImport226 from '../../../../content/design-guidelines/usage-and-behavior/on-screen-help/./img/use-popovers.png';

export const DocumentationComponentsPopoverDesignGuidelinesDocs = {
  "slug": "/documentation/components/popover/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/on-screen-help/on-screen-help.md",
  "section": "components",
  "id": "Popover",
  "title": "Popover",
  "toc": [
    "Principles",
    "Forms of on-screen help and how to use them",
    "Related components and demos"
  ]
};
DocumentationComponentsPopoverDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsPopoverDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Use on-screen help to provide additional assistance for users in context. On-screen help should be provided in a way that enables the user to find the information they need at the moment they need it, while completing a particular step or task.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Principles`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use thoughtfully and sparingly`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Never use on-screen help as a substitute for usable and intuitive design. On-screen help should work to support good user experience design.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Assume intermediate proficiency`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Assume the user has an intermediate level of proficiency in using your application.  As such, avoid making assistance too novice level or too reliant upon expert-level knowledge.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Keep your content hierarchy in mind`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Plan your content hierarchy to provide the right content in the right place at the right time. You can think about content hierarchy in three levels:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Level 1: critical information a user must have in order to complete a main task.`}
        </strong>
        {` This information should be available persistently through titles, headers, inline descriptions, and labels.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Level 2: information that supports users with additional context as they complete their tasks.`}
        </strong>
        {` This information is nice to have, but not critical to task completion and is likely needed by just a subset of users. Provide Level 2 content using progressive disclosure methods like popovers or tooltips.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Level 3: information that enables users to find and access external resources like support or documentation.`}
        </strong>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Forms of on-screen help and how to use them`}
    </AutoLinkHeader>
    <img src={srcImport218} {...{"alt":"Example of on-screen help","width":"990","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#persistent-text"}}>
          {`Persistent text`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#hints"}}>
          {`Hints`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#popovers"}}>
          {`Popovers`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#tooltips"}}>
          {`Tooltips`}
        </a>
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Persistent text`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Persistently available text like titles, headers, descriptions, and labels enables the user to understand where they are, what they are doing, and what they need to do to use the interface and complete their task.`}
    </p>
    <img src={srcImport219} {...{"alt":"Image of highlighted examples of persistent text on a page","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Usage`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`When crafting persistent text, target users with an intermediate level of proficiency and defer novice or expert content to other levels of the content hierarchy. For example, a description beneath a title that explains the purpose and goals of a page might make sense on a form or wizard that users are only going to access occasionally, but can be too much for a dashboard that users will see every time they log in.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Examples`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Navigation items and page titles`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Chart titles and labels`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Wizard or modal titles`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Form titles, descriptions, and labels`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Button labels`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Filter labels`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Hints`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Hints provide a one-step reminder, explanation, or call to action for a page or modal.`}
    </p>
    <img src={srcImport220} {...{"alt":"Example of a hint in a full-page","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Usage`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use hints to help the user get more out of the interface. Hints can provide information about an interaction or prerequisite step that might not be obvious otherwise.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Popovers`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Popovers provide helpful contextual information at the moment users need it.`}
    </p>
    <img src={srcImport221} {...{"alt":"Example of popover in a form","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Usage`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use popovers to anticipate and answer questions for the user, help explain unfamiliar terms, or provide context around a task. You may also link to further information inside a popover.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Always use a question-circle icon when using the popover pattern to define a term or explain a concept. When in the UI, the default icon color is grey. Once the user hovers or clicks over the icon to open the popover, the icon turns black.`}
    </p>
    <img src={srcImport222} {...{"alt":"Popover icon colors depending on state","width":"481","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`You may also use popovers with link text. For example, when there is no obvious UI element to add a popover to, you may pose a question, preceded with a question-circle icon to alert the user that they can find more information by clicking on it.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Popover text should adopt link button styling and always be preceded by a question-circle icon, which should be blue, following the link button styling. Clicking on the link text should trigger a popover that provides an answer to the question posed in the hint text.`}
    </p>
    <img src={srcImport223} {...{"alt":"Popover link text in UI","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Popovers are triggered by a click and dismissed in one of the following ways:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The user clicks the exit icon`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The user clicks an action button inside the popover`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The user clicks anywhere on the screen outside the popover`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Never hide critical information in a popover. Critical information is any information the user `}
      <em>
        {`must have and will always need`}
      </em>
      {` in order to complete a task.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Common use cases`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`On form field labels`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`On titles, headers, other kinds of labels`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`In a table column header`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Tooltips`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use tooltips to define new or unfamiliar UI elements that aren’t described directly in the user interface, or to get additional data from a data point or element in a chart or table.`}
    </p>
    <img src={srcImport224} {...{"alt":"Example of tooltip in a table","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Usage`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Tooltips should provide new and valuable information. Never use a tooltip to repeat information already available in the UI.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Don’t use tooltips with question-circle icons to present contextual information in forms and other areas. Instead, use a popover.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Common use cases`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`On icons`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`In charts`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Guidelines`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Keep your tooltips clear and concise. Use the fewest number of words you can without sacrificing meaning.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If the tooltip is a full sentence, end it with a period.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`If information is needed for a user to complete a task (like a password character requirement), don’t hide it in a tooltip. Display it on the page instead.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Accessibility`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Every time a user with a screen reader tabs into a field with a tooltip, the tooltip will be read out to them.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`When to use a tooltip versus a popover`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Both tooltips and popovers allow users to get more information in context. However, they differ in two ways:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        {`Tooltips are used for identification purposes, while popovers are used for added description or information in context.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Tooltips appear on hover, while popovers appear on click`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use tooltips for:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Short descriptions of an item or to identify an item, like an icon button`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Content that is no longer than 1 or 2 lines`}
      </li>
    </ul>
    <img src={srcImport225} {...{"alt":"Examples of tooltip use","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Use popovers for:`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Longer descriptions`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Formatted text`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`When you would like your in-context help to include pictures, actions, or links`}
      </li>
    </ul>
    <img src={srcImport226} {...{"alt":"Examples of popover use","width":"990","className":"ws-img"}}>
    </img>
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
        <PatternflyThemeLink {...{"to":"/documentation/core/components/button"}}>
          {`Button`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/content"}}>
          {`Content`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/popover"}}>
          {`Popover`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/tooltip"}}>
          {`Tooltip`}
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
        <PatternflyThemeLink {...{"to":"/documentation/react/components/popover"}}>
          {`Popover`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/tooltip"}}>
          {`Tooltip`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/button"}}>
          {`Button`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/text"}}>
          {`Text`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
DocumentationComponentsPopoverDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsPopoverDesignGuidelinesDocs';
