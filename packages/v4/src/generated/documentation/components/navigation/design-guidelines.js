import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport204 from '../../../../content/design-guidelines/usage-and-behavior/navigation-system/./img/nav-elements.png';
import srcImport205 from '../../../../content/design-guidelines/usage-and-behavior/navigation-system/./img/nav-elements2.png';
import srcImport206 from '../../../../content/design-guidelines/usage-and-behavior/navigation-system/./img/nav-elements3.png';
import srcImport207 from '../../../../content/design-guidelines/usage-and-behavior/navigation-system/./img/single-level.png';
import srcImport208 from '../../../../content/design-guidelines/usage-and-behavior/navigation-system/./img/single-level.png';
import srcImport209 from '../../../../content/design-guidelines/usage-and-behavior/navigation-system/./img/two-level.png';
import srcImport210 from '../../../../content/design-guidelines/usage-and-behavior/navigation-system/./img/expandable.png';
import srcImport211 from '../../../../content/design-guidelines/usage-and-behavior/navigation-system/./img/horizontal-nav.png';
import srcImport212 from '../../../../content/design-guidelines/usage-and-behavior/navigation-system/./img/local.png';
import srcImport213 from '../../../../content/design-guidelines/usage-and-behavior/navigation-system/./img/context-selector.png';
import srcImport214 from '../../../../content/design-guidelines/usage-and-behavior/navigation-system/./img/breadcrumb.png';

export const DocumentationComponentsNavigationDesignGuidelinesDocs = {
  "slug": "/documentation/components/navigation/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/navigation-system/navigation-system.md",
  "section": "components",
  "id": "Navigation",
  "title": "Navigation",
  "toc": [
    "Elements",
    "Usage",
    "Components and demos used"
  ]
};
DocumentationComponentsNavigationDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsNavigationDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Navigation is used to organize an application’s structure and content, making it easy to find information and accomplish tasks. Navigation communicates relationships, context, and actions a user can take within an application.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport204} {...{"alt":"Navigation system elements","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport205} {...{"alt":"Navigation system elements","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport206} {...{"alt":"Navigation system elements","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Masthead`}
        </strong>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#context-selector"}}>
          <strong>
            {`Context selector`}
          </strong>
          {` (optional)`}
        </a>
        {`: Enables a user to switch between different application contexts, like administration and monitoring`}
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#horizontal-navigation"}}>
          <strong>
            {`Horizontal navigation`}
          </strong>
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Menu icon button:`}
        </strong>
        {` Provides a way for users to toggle vertical navigation`}
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#vertical-navigation"}}>
          <strong>
            {`Vertical navigation`}
          </strong>
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#local-navigation---tabs"}}>
          <strong>
            {`Local navigation`}
          </strong>
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#breadcrumbs"}}>
          <strong>
            {`Breadcrumbs`}
          </strong>
        </a>
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Vertical navigation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport207} {...{"alt":"Vertical nav","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Vertical navigation is hierarchical global navigation that displays navigation options from top to bottom on the left side of a screen. PatternFly vertical navigation can be collapsed to provide additional screen real estate by using a menu icon button at the top left.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You have five or more primary navigation items`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You have secondary navigation items (even if you have less than five primary navigation items)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You expect your application to be used on mobile devices`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Variations`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Simple vertical navigation`}
          </strong>
          {`
`}
          <img src={srcImport208} {...{"alt":"Single level","className":"ws-img"}}>
          </img>
          {`
Use a simple, single-level vertical navigation when you only have one level of navigation to display.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Grouped navigation`}
          </strong>
          {`
`}
          <img src={srcImport209} {...{"alt":"Two level nav","className":"ws-img"}}>
          </img>
        </p>
        <p {...{"className":"ws-p"}}>
          {`When you have a small amount of secondary navigation items, you can group your items and display them persistently beneath the primary navigation items.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Expandable vertical navigation`}
          </strong>
        </p>
        <p {...{"className":"ws-p"}}>
          <img src={srcImport210} {...{"alt":"Expandable nav","className":"ws-img"}}>
          </img>
        </p>
        <p {...{"className":"ws-p"}}>
          {`When you have a large number of secondary navigation items, you can use an expandable navigation to collapse and expand options as needed.`}
        </p>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Horizontal navigation`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport211} {...{"alt":"Horizontal nav","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Horizontal navigation is global navigation that displays navigation items from left to right in the application's masthead.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`You have less than five primary navigation items`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You have only one level of navigation and no secondary navigation items`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Local navigation - Tabs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport212} {...{"alt":"Local navigation","className":"ws-img"}}>
      </img>
      {`
While global navigation controls what users are seeing at the application-level, local navigation provides more granular navigation specific to a particular page or window in the application. For example, a user might use global navigation to get to a settings page, and then use local navigation to access privacy and general user settings.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Context selector`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport213} {...{"alt":"Context selector","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a context selector in addition to your global navigation when the data or resources you need to show in the interface need to change depending on the users’ context.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Breadcrumbs`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport214} {...{"alt":"Breadcrumbs","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Breadcrumbs act as a resource to help users navigate more efficiently and provide context to help users understand where they are in the application hierarchy. Use breadcrumbs in addition to your global navigation to display a user's location in the application.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Use breadcrumbs when the primary global navigation items are not always exposed.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Never use breadcrumbs as a replacement for global navigation.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Components and demos used`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`HTML/CSS`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/demos/page"}}>
          {`Page`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/breadcrumb"}}>
          {`Breadcrumb`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/nav"}}>
          {`Nav`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/tabs"}}>
          {`Tabs`}
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
        <PatternflyThemeLink {...{"to":"/documentation/react/demos/pagelayout"}}>
          {`PageLayout`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/nav"}}>
          {`Nav`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/breadcrumb"}}>
          {`Breadcrumb`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
DocumentationComponentsNavigationDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsNavigationDesignGuidelinesDocs';
