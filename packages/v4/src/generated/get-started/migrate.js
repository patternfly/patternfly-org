import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const GetStartedMigrateDocs = {
  "slug": "/get-started/migrate",
  "source": "pages-get-started",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/get-started/migrate.md",
  "section": "get-started",
  "id": "Migrate",
  "title": "Migration guide",
  "toc": [
    "Design your migration strategy",
    "Start building with PatternFly 4 libraries"
  ]
};
GetStartedMigrateDocs.liveContext = {
  
};
GetStartedMigrateDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Design your migration strategy`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The first step in moving from PatternFly 3 to PatternFly 4 should be a migration strategy. Putting a solid plan in place before you start trying to migrate your codebase will help you prioritize and chunk your work and identify areas where migrating may impact design elements like interaction patterns or spacing.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Milestone 1: Start with high-impact visuals`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Make a big impact in a small amount of time by updating high-impact visual elements first. This approach enables you to move your application into the same visual language as PatternFly 4 and also gets PatternFly 4 in your development stack.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`High-impact visuals include:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Color`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Typography`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Iconography`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Navigation and masthead`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note:`}
      </strong>
      {` PatternFly 4 provides an updated navigation system. If you choose to rework your application’s existing navigation, it’s best to break this work into two steps: one that tackles styles like typography and color, and another for the navigation work.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use Sketch to create high-fidelity mockups to visualize the changes required and communicate them to development.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Milestone 2: Upgrade key functionality`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Next, you’ll want to address high-traffic areas in your application that are touched by the user frequently, or high-impact areas that are important to conversion or retention, like user onboarding. Identify those key paths and prioritize your upgrades based on those areas. You may also choose to tackle page “types” depending on your project.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Create mid to high-fidelity prototypes to visualize the changes required and communicate them to development.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Milestone 3: Upgrade everything you touch`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In parallel to upgrading key functionality, use ongoing product work as an opportunity to upgrade features already being addressed by design and development. For example, if you’re working on adding a new action button to a data table, it might also be a good time to upgrade that data table to PatternFly 4.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Get help`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If you run into trouble and need support, the PatternFly team is here to help. Simply go to the `}
      <a {...{"href":"https://forum.patternfly.org/c/support"}}>
        {`PatternFly forum`}
      </a>
      {` and add a new topic to get in touch with us. We'll always do our best to answer your questions and connect you with the right people quickly.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Start building with PatternFly 4 libraries`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/get-started/developers#react"}}>
        {`Get started with React`}
      </PatternflyThemeLink>
    </p>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/get-started/developers#htmlcss"}}>
        {`Get started with HTML/CSS`}
      </PatternflyThemeLink>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Do you need to run PatternFly 3 and PatternFly 4 together?`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use the following command to update your configuration in the `}
      <code {...{"className":"ws-code"}}>
        {`src/patternfly/sass-utilities/scss-variables.scss`}
      </code>
      {` file to state false:`}
    </p>
    <p {...{"className":"ws-p"}}>
      <code {...{"className":"ws-code"}}>
        {`$pf-global--enable-reset: false !default;`}
      </code>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note:`}
      </strong>
      {` You will need to compile your CSS manually if you want to run PatternFly 3 and PatternFly 4 together.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Does your application need support for Internet Explorer 11?`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`You will need to `}
      <a {...{"href":"https://github.com/patternfly/patternfly-next/wiki/IE11-Support"}}>
        {`follow additional steps`}
      </a>
      {` to enable support for this browser.`}
    </p>
  </React.Fragment>
);
GetStartedMigrateDocs.Component.displayName = 'GetStartedMigrateDocs';
