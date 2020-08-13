import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport102 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/empty-state.jpg';
import srcImport103 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/add.png';
import srcImport104 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/success.png';
import srcImport105 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/error.png';
import srcImport106 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/lock.png';
import srcImport107 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/config.png';
import srcImport108 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/search.png';
import srcImport109 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/rocket.png';
import srcImport110 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/accusatory.jpg';
import srcImport111 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/please.jpg';
import srcImport112 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/level-of-detail.jpg';
import srcImport113 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/sentence-case.jpg';
import srcImport114 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/one-ctas-primary.jpg';
import srcImport115 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/one-cta-body.jpg';
import srcImport116 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/two-ctas-primary.jpg';
import srcImport117 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/two-ctas-body.jpg';
import srcImport118 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/solo-link.jpg';
import srcImport119 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/desktop-page-es.jpg';
import srcImport120 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/mobile-page-es.jpg';
import srcImport121 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/table-es.jpg';
import srcImport122 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/toolbar.jpg';
import srcImport123 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/xl-getstarted.jpg';
import srcImport124 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/no-data.jpg';
import srcImport125 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/configuration.jpg';
import srcImport126 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/access-denied.jpg';
import srcImport127 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/backend-failure.jpg';
import srcImport128 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/success-table.jpg';
import srcImport129 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/success-wizard.jpg';
import srcImport130 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/xl-success.jpg';
import srcImport131 from '../../../../content/design-guidelines/usage-and-behavior/empty-state/./img/add-or-create.jpg';

export const DocumentationComponentsEmptyStateDesignGuidelinesDocs = {
  "slug": "/documentation/components/empty-state/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/empty-state/empty-state.md",
  "section": "components",
  "id": "Empty state",
  "title": "Empty state",
  "toc": [
    "Design guidelines",
    "Usage",
    "Addition or creation",
    "Related components and demos"
  ]
};
DocumentationComponentsEmptyStateDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsEmptyStateDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Empty states are UI screens that don't have any content on them, but content will populate once a user takes a certain action. Use an empty state to educate users and guide them with positive and proactive next steps in any situation where there is no data or information to display.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`PatternFly offers three empty state variations; a small empty state, a large empty state, and an extra large empty state.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The small empty state should be used inside tables, wizards, modals, or cards, where the empty state is "inside a container," as seen in the `}
        <a {...{"href":"#no-data-to-show"}}>
          {`no data to show`}
        </a>
        {` use case example.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The large empty state should be used in a full-page empty state, as seen in the `}
        <a {...{"href":"#addition-or-creation"}}>
          {`addition or creation`}
        </a>
        {` use case example.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The extra large empty state variation should only be used in special instances, specifically for `}
        <a {...{"href":"#first-use-or-get-started"}}>
          {`first-use or get started`}
        </a>
        {` states, as well as for full-page `}
        <a {...{"href":"#success"}}>
          {`congratulatory`}
        </a>
        {` states, seen in those use case examples.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Below is an example of a large empty state inside a full-page, outlining all the elements inside an empty state.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport102} {...{"alt":"Empty state elements","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <a {...{"href":"#icons"}}>
            {`Icon/image`}
          </a>
          {`:`}
        </strong>
        {` Display associated object icons here.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <a {...{"href":"#title-and-body"}}>
            {`Title`}
          </a>
          {`:`}
        </strong>
        {` Provide a concise explanation.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <a {...{"href":"#title-and-body"}}>
            {`Body`}
          </a>
          {`:`}
        </strong>
        {` Provide additional information that helps a user understand why the space is empty, what they can do to move forward, and the value or benefit that is gained by taking the next step.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <a {...{"href":"#primary-and-secondary-buttons"}}>
            {`Primary button`}
          </a>
          {`:`}
        </strong>
        {` Primary call-to-action.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <a {...{"href":"#primary-and-secondary-buttons"}}>
            {`Secondary buttons (optional)`}
          </a>
          {`:`}
        </strong>
        {`  Alternative options for the user. There can be more than one secondary action.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Design guidelines`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Icons`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`To maintain consistency, icons have been mapped to specific empty state scenarios.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Here is when you should use each icon:`}
    </p>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
          </th>
          <th>
            {`Type`}
          </th>
          <th>
            {`Color`}
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
            <img src={srcImport109} {...{"alt":"Get started","className":"ws-img"}}>
            </img>
          </td>
          <td>
            {`First use or get started`}
          </td>
          <td>
            {`Grey (#8A8D90)`}
          </td>
          <td>
            {`fa-rocket`}
          </td>
          <td>
            {`Use in a get started  page or in situations where it is the user’s initial interaction with your platform/application. You may decide to replace this icon with something else if you already have an application specific graphic or illustration to use here`}
          </td>
        </tr>
        <tr>
          <td>
            <img src={srcImport108} {...{"alt":"Search","className":"ws-img"}}>
            </img>
          </td>
          <td>
            {`Search`}
          </td>
          <td>
            {`Grey (#8A8D90)`}
          </td>
          <td>
            {`fa-search`}
          </td>
          <td>
            {`Use when there is no data to show`}
          </td>
        </tr>
        <tr>
          <td>
            <img src={srcImport107} {...{"alt":"Configuration","className":"ws-img"}}>
            </img>
          </td>
          <td>
            {`Configuration`}
          </td>
          <td>
            {`Grey (#8A8D90)`}
          </td>
          <td>
            {`fa-wrench`}
          </td>
          <td>
            {`Use when configuration is required or there is a configuration issue`}
          </td>
        </tr>
        <tr>
          <td>
            <img src={srcImport106} {...{"alt":"No access","className":"ws-img"}}>
            </img>
          </td>
          <td>
            {`No access`}
          </td>
          <td>
            {`Grey (#8A8D90)`}
          </td>
          <td>
            {`fa-lock`}
          </td>
          <td>
            {`Use when the user is not entitled or the user role does not have access`}
          </td>
        </tr>
        <tr>
          <td>
            <img src={srcImport105} {...{"alt":"Error","className":"ws-img"}}>
            </img>
          </td>
          <td>
            {`Error`}
          </td>
          <td>
            {`Red (#C9190B)`}
          </td>
          <td>
            {`fa-exclamation-circle`}
          </td>
          <td>
            {`Use when there is an inability to get data, there is backend failure, or an error has occurred`}
          </td>
        </tr>
        <tr>
          <td>
            <img src={srcImport104} {...{"alt":"Success","className":"ws-img"}}>
            </img>
          </td>
          <td>
            {`Success`}
          </td>
          <td>
            {`Green (#486b00)`}
          </td>
          <td>
            {`fa-check-circle`}
          </td>
          <td>
            {`Use to indicate that a task or process has been completed successfully`}
          </td>
        </tr>
        <tr>
          <td>
            <img src={srcImport103} {...{"alt":"Add","className":"ws-img"}}>
            </img>
          </td>
          <td>
            {`Addition or creation`}
          </td>
          <td>
            {`Grey (#8A8D90)`}
          </td>
          <td>
            {`fa-plus-circle`}
          </td>
          <td>
            {`Use when something needs to be added or created`}
          </td>
        </tr>
      </tbody>
    </table>
    <p {...{"className":"ws-p"}}>
      {`You should always try to use an icon in your empty state, unless there is an empty state where an icon does not match any of the situations mentioned above, or if an icon does not fit into the layout.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Color`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`By default, icons should be grey, except when it is a status icon or you have a special use case icon. In other words, don’t use color arbitrarily.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Title and body`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Tone and voice`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Pay close attention to voice and tone in your empty state. Your voice is the personality that’s reflected in your writing, while your tone is the approach you take that’s appropriate for the context of your content. Tone encompasses the audience emotions that need to be accounted for and the resulting approach you must take. To help you stay consistent, refer to the `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/content/voice-and-tone"}}>
        {`PatternFly voice guidelines `}
      </PatternflyThemeLink>
      {` as needed. In this case, you should use concise and straightforward voice. It should be conversational, while still professional.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`It is OK to use “you” and “your” but never assign blame to the user.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport110} {...{"alt":"Accusatory","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`There is also no need to be overly mannerly, so avoid using please, unless the user is being inconvenienced.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport111} {...{"alt":"Please","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Level of detail`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`In your empty state, state what isn't there, and then give the user a next step.  Empty states should not be used to describe in detail how to use the page—the design should be intuitive enough without extensive written explanation. Include at least one sentence, even if it seems like a straightforward explanation, and at least two when there may be more explanation needed.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport112} {...{"alt":"Detail","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Sentence case`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Empty states should follow sentence case rules. Only the first word in any phrase or sentence should be capitalized (whether it is in the body or in a button or link), unless a proper noun is included in the phrase/sentence.
Every sentence in a body should end with a period. Headers should not end in a period though.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport113} {...{"alt":"Sentence case","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Primary and secondary buttons`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Buttons in empty states are used to highlight next steps a user can take when they reach your page. There are multiple ways to set up calls-to-action. You can have a call-to-action presented as a primary button, or within the body. If you have a singular call-to-action on your page, it is preferable for it to be presented in primary button format as it places bigger emphasis on the call-to-action. However, there may be a specific reason why you may need it embedded in the body.`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Call-to-action as a primary button`}
          </strong>
          {`
`}
          <img src={srcImport114} {...{"alt":"Primary button one cta","className":"ws-img"}}>
          </img>
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Call-to-action in body`}
          </strong>
          {`
`}
          <img src={srcImport115} {...{"alt":"In body cta","className":"ws-img"}}>
          </img>
        </p>
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`If you have more than one actionable link, there are two options depending on how your primary call-to-action is presented:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Link button underneath the primary button:`}
        </strong>
        {` if your primary call-to-action was in a primary button format`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport116} {...{"alt":"Primary button two ctas","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"start":2,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Link button underneath the body:`}
        </strong>
        {` if your first call-to-action was in the body`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport117} {...{"alt":"In body two ctas","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`There are only two situations where a stand-alone link button (with nothing linked in the body) can be used:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Filtering or search situation:`}
        </strong>
        {` when a user has filtered for something in a table, and is prompted to "clear all filters" or "include" other items in their search`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport118} {...{"alt":"Solo link cta","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"start":2,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Multiple primary calls-to-action:`}
        </strong>
        {` when there are multiple primary actions the user can take and they are all equally important`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Alignment`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Full-page empty state`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`When an empty state appears on a full-page,  it  should be 64px away from the top, and horizontally centered with a minimum padding of 24px on all remaining sides.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport119} {...{"alt":"Full-page empty state","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Mobile in-page empty states should be 48px away from the top and have a minimum of 16px padding on the remaining sides.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport120} {...{"alt":"Mobile page empty state","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`In-table, card, or wizard empty states`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Empty states within a table, card, or wizard should always be horizontally and vertically centered on their background, with an outside padding of 24px on all sides.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport121} {...{"alt":"In table empty state","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Toolbars or filters in empty states`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`No toolbars or filters should be shown when a user is in a full-page empty state as the user will have no items to perform any actions on.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport122} {...{"alt":"Toolbar usage","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are several common use cases for empty states:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#first-use-or-get-started"}}>
          {`First-use or get started`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#no-data-to-show"}}>
          {`No data to show`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#required-configuration"}}>
          {`Required configuration`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#user-not-entitled-or-does-not-have-access"}}>
          {`User not entitled or does not have access`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#back-end-failure"}}>
          {`Back-end failure`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#success"}}>
          {`Success`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#addition-or-creation"}}>
          {`Addition or creation`}
        </a>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`First-use or get started`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In a first-use situation, there is nothing to display because the user has not created or added anything yet. Use this opportunity to educate users about how to get started and introduce any associated value or benefit to taking action. This empty state should be displayed in the extra large empty state variation.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport123} {...{"alt":"First use","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`No data to show`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Help users understand why there is no data to display and explain what they can do to move forward. For example, there may be no data to show because the user has a series of filters applied and the system cannot locate a match. It’s also possible that there is no data because all issues are resolved or all tasks are complete.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport124} {...{"alt":"No data to show","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Required configuration`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In this situation, a user may need to take steps to configure, connect, or enable something in order to view associated information or take advantage of features.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport125} {...{"alt":"Required configuration","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`User not entitled or does not have access`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Help users understand why they are not able to view content and provide next steps.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport126} {...{"alt":"No access","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Back-end failure`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Provide the user with information about the error that is easy to understand, and provide clear next steps they can take to resolve the issue.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport127} {...{"alt":"Backend failure","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Success`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Let the user know they've successfully completed a process. For example, you might provide a success state at the end of a tutorial or the completion of a wizard.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When the success state appears in a table or wizard, it should use the standard empty state variation.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport128} {...{"alt":"Success table","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport129} {...{"alt":"Success wizard","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`If the success state appears in a full-page, you can choose to use the extra large empty state variation to fill up the page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport130} {...{"alt":"Success full-page","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Addition or creation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In some situations, users may need to add or create something to view associated information. Let them know what they need to add and guide them with calls-to-action to lead them the right way.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport131} {...{"alt":"Addition or creation","className":"ws-img"}}>
      </img>
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
        <PatternflyThemeLink {...{"to":"/documentation/core/components/emptystate"}}>
          {`Empty state`}
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
        <PatternflyThemeLink {...{"to":"/documentation/react/components/emptystate"}}>
          {`Empty state`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
DocumentationComponentsEmptyStateDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsEmptyStateDesignGuidelinesDocs';
