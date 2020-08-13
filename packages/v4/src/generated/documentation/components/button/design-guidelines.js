import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport40 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/buttons.png';
import srcImport41 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/danger.png';
import srcImport42 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/prim_ex_1.png';
import srcImport43 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/prim_ex_2.png';
import srcImport44 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/sec_ex.png';
import srcImport45 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/tert_edit.png';
import srcImport46 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/link-left.png';
import srcImport47 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/link-right.png';
import srcImport48 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/link_modal.png';
import srcImport49 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/empty_state_links.png';
import srcImport50 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/icon_button.png';
import srcImport51 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/wizard.png';
import srcImport52 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/link_modal.png';
import srcImport53 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/link_empty.png';
import srcImport54 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/link_table.png';
import srcImport55 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/link_alert.png';
import srcImport56 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/button_16px.png';
import srcImport57 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/button_stacked.png';
import srcImport58 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/button_wizard.png';
import srcImport59 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/button_wizard_stacked.png';
import srcImport60 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/button_action_group.png';
import srcImport61 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/overflow_1.png';
import srcImport62 from '../../../../content/design-guidelines/usage-and-behavior/buttons-and-links/./img/overflow_2.png';

export const DocumentationComponentsButtonDesignGuidelinesDocs = {
  "slug": "/documentation/components/button/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/buttons-and-links/buttons-and-links.md",
  "section": "components",
  "id": "Button",
  "title": "Button",
  "toc": [
    "Usage",
    "Usage guidelines",
    "Button placement",
    "Button spacing and action lists",
    "Buttons and overflow menus",
    "Content",
    "Related components and demos"
  ]
};
DocumentationComponentsButtonDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsButtonDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A button refers to a box area or text that can be clicked or tapped.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Buttons can be used to communicate and immediately trigger actions a user can take in an application, like submitting a form, cancelling a process, or creating a new object. Buttons can also be used to take a user to a new location, like another page inside of a web application, or an external site such as help or documentation.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Button types`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The following button styles, shown in order of visual hierarchy, can be used in your designs according to your needs.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#danger-button"}}>
          {`Danger button`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#primary-button"}}>
          {`Primary button`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#secondary-button"}}>
          {`Secondary button`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#tertiary-button"}}>
          {`Tertiary button`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#link-button"}}>
          {`Link button`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#icon-button"}}>
          {`Icon button`}
        </a>
      </li>
    </ul>
    <img src={srcImport40} {...{"alt":"Images of all button types","width":"607","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`You don't need to use these buttons in the order that their labels imply. For example, you don't always need to use the secondary button as the second button in your designs. The most important thing is to establish a visual hierarchy between any buttons in your designs. There are, however, some best practices to keep in mind.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Danger button`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Danger buttons are the most prominent of all the button options. Use danger buttons for actions a user can take that are potentially destructive or difficult/impossible to undo, like deleting or removing user data. These are mostly found in modals to emphasize a destructive action the user is about to take.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Example of a danger button in a modal`}
      </em>
    </p>
    <img src={srcImport41} {...{"alt":"Example of danger button used in a modal","width":"521","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Primary button`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A primary button is the most prominent button on a page, used for the most important call to action on a page. Try to limit primary buttons to one per page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Example of a primary button inside a toolbar`}
      </em>
    </p>
    <img src={srcImport42} {...{"alt":"Example of a primary button inside a toolbar","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Example of a primary button inside an empty state`}
      </em>
    </p>
    <img src={srcImport43} {...{"alt":"Example of a primary button inside an empty state","width":"656","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Secondary button`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Secondary buttons are buttons with less visual prominence than primary buttons. Use secondary buttons for general actions on a page, that don’t require as much emphasis as primary button actions. For example, you can use secondary buttons where there are multiple actions, like in toolbars or data lists.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Example of secondary buttons in data lists`}
      </em>
    </p>
    <img src={srcImport44} {...{"alt":"Example of secondary buttons in data lists","width":"986","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Tertiary button`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Tertiary buttons are one the least visually prominent buttons and are designed to be less striking than a primary or secondary button, while still retaining a classic button format. Tertiary buttons are flexible and can be used as needed.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`In this example, you can see a tertiary button used to show a possible “Edit” action. This button format highlights the action, while making it clear that it is not the main call to action on the page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Example of tertiary button on a page`}
      </em>
    </p>
    <img src={srcImport45} {...{"alt":"Example of tertiary button on a page","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Link button`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Links buttons are labeled buttons with no background or border. Link buttons can be used for actions that:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`May not need as much emphasis.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Navigate users to another page within the same window.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Navigate users to an external page.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`While all link buttons lack borders, they can still vary in appearance. Link buttons that navigate users to another page within the same window should be presented as stand-alone text. Link buttons that navigate users to an external page may include an icon on the left or right of the text to further emphasize the action. For example, you could add an external link icon to show that clicking on it will navigate users externally to another website or application.`}
    </p>
    <img src={srcImport46} {...{"alt":"Example of link button with icon on the left","width":"143","className":"ws-img"}}>
    </img>
    <img src={srcImport47} {...{"alt":"Example of link button with icon on the right","width":"143","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`You might use a link button instead of a secondary button format to create greater visual hierarchy between two buttons. Examples include using text buttons as cancel buttons in modals or wizards, as well as for secondary actions in empty states.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Example of a link button in a modal`}
      </em>
    </p>
    <img src={srcImport48} {...{"alt":"Example of a link button in a modal","width":"446","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Example of link buttons in an empty state`}
      </em>
    </p>
    <img src={srcImport49} {...{"alt":"Example of link buttons in an empty state","width":"640","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Icon button`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Icon buttons are useful in places where space is limited. For example, if you have too many actions within a menu, you could use a kebab icon to indicate more actions, or an export icon for exporting data. You can also use this button type for actions that are commonly associated with icons, like an exit icon to close a window or a hamburger icon to open a menu.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For example, this toolbar uses an export icon as an action button due to limited space.`}
    </p>
    <img src={srcImport50} {...{"alt":"Example of kebab used as an icon button inside a toolbar","width":"990","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Usage guidelines`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are certain cases where specific buttons must be used within your UI.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Follow these guidelines for buttons in wizards:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The `}
        <strong>
          {`Next`}
        </strong>
        {` button should always be a primary button.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The `}
        <strong>
          {`Back`}
        </strong>
        {` button should always be a secondary button.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The `}
        <strong>
          {`Cancel`}
        </strong>
        {` button should always be a text button.`}
      </li>
    </ul>
    <img src={srcImport51} {...{"alt":"Example of buttons in a wizard","width":"898","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Always use link buttons in the following cases:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`For cancel buttons in wizards or modals`}
        </p>
        <img src={srcImport52} {...{"alt":"Example of link button used in modal","width":"446","className":"ws-img"}}>
        </img>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`For more actions in empty states`}
        </p>
        <img src={srcImport53} {...{"alt":"Example of a link button in an empty state","width":"600","className":"ws-img"}}>
        </img>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`For action buttons in tables`}
        </p>
        <img src={srcImport54} {...{"alt":"Example of link buttons in a table","width":"990","className":"ws-img"}}>
        </img>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`For action buttons in alerts`}
        </p>
        <img src={srcImport55} {...{"alt":"Example of link button in an alert","width":"309","className":"ws-img"}}>
        </img>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Button placement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Buttons in forms, modals, or wizards should always be left aligned in the box. This solves for:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Modularity and flexibility:`}
        </strong>
        {` A standard alignment creates consistency in how objects appear across all areas of an app.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Accessibility:`}
        </strong>
        {` The form submit buttons are on the same scan line as the form fields, which benefits users who are sight-limited. Also, users who are blind can more easily navigate left-aligned form submit buttons because the button order is consistent across all contexts.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Responsiveness:`}
        </strong>
        {` The most important actions (i.e., primary buttons) are encountered first when elements are stacked vertically.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Button spacing and action lists`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The standard spacing between each button is 16px, even for danger buttons. If buttons are stacked vertically, the spacing between each button should be 8px.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Standard spacing`}
      </em>
    </p>
    <img src={srcImport56} {...{"alt":"Standard button spacing with spacers","width":"214","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Stacked spacing`}
      </em>
    </p>
    <img src={srcImport57} {...{"alt":"Stacked button spacing with spacers","width":"222","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`Currently, the only exception to this is in wizards, where the `}
      <strong>
        {`Cancel`}
      </strong>
      {` button is spaced 48px away from the primary and secondary `}
      <strong>
        {`Next`}
      </strong>
      {` and `}
      <strong>
        {`Back`}
      </strong>
      {` buttons, and 24px away if stacked.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Wizard spacing`}
      </em>
    </p>
    <img src={srcImport58} {...{"alt":"Wizard button spacing with spacers","width":"304","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Wizard stacked spacing`}
      </em>
    </p>
    <img src={srcImport59} {...{"alt":"Stacked wizard button spacing with spacers","width":"121","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      {`If you have a specific use case where buttons need to be spaced further away from the rest, the button groups action list allows for customization as needed.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Action group spacing`}
      </em>
    </p>
    <img src={srcImport60} {...{"alt":"Action group spacing with spacers","width":"416","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Buttons and overflow menus`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are cases where you will have multiple buttons next to each other, like in a toolbar. When the space shrinks (e.g., switching from desktop to mobile view), you can have the buttons collapse into a kebab overflow menu. Additionally, you can choose to make the primary action persist or have all options collapse into the kebab.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Buttons appear in the toolbar`}
      </em>
    </p>
    <img src={srcImport61} {...{"alt":"Pre-over flow menu in toolbar, where all actions appear in the toolbar itself","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Buttons placed in overflow menu due to limited space, with primary button persisting`}
      </em>
    </p>
    <img src={srcImport62} {...{"alt":"Post-overflow menu in toolbar, where toolbar has become smaller in width, prompting an overflow menu for secondary actions, while primary button persists in the toolbar itself","width":"972","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Content`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Writing button labels`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Button labels should be specific and clearly communicate their associated action.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Always use verbs or verb phrases.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`To avoid wrapping, aim for short labels when possible (1–3 words)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Avoid the use of articles (e.g., write “Add source” instead of “Add a source”)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Avoid long button labels that might risk wrapping.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Writing link labels`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use specific, action-focused labels that match what the user will see when they arrive at their location. For example, if you are sending a user to a dashboard, your link label might read `}
      <em>
        {`View dashboard`}
      </em>
      {`. For a link directing a user to a support forum, the label might read `}
      <em>
        {`Get help in the support forum`}
      </em>
      {`. See `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/content/writing"}}>
        {`PatternFly's content guidelines`}
      </PatternflyThemeLink>
      {` for additional guidance.`}
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
        <PatternflyThemeLink {...{"to":"/documentation/core/components/button"}}>
          {`Button`}
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
        <PatternflyThemeLink {...{"to":"/documentation/react/components/button"}}>
          {`Button`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
DocumentationComponentsButtonDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsButtonDesignGuidelinesDocs';
