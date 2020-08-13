import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport1 from '../../content/contribute/./design-flowchart.png';

export const ContributeDesignDocs = {
  "slug": "/contribute/design",
  "source": "pages-contribute",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/contribute/design.md",
  "section": "contribute",
  "id": "Design",
  "title": "Design",
  "toc": [
    "Ways to contribute",
    "Lifecycle"
  ]
};
ContributeDesignDocs.liveContext = {
  
};
ContributeDesignDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Ways to contribute`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Whether you have an existing design or requirements for a new feature, the first step is to open a New Feature Request issue. Your request will be reviewed and placed on the PatternFly roadmap. After this, the PatternFly design team will work with you to complete your design proposal and facilitate reviews.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`As a designer, here are some of the contributions you can make:`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`New feature`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Work with PatternFly to design a new feature for your product and contribute it back to the system simultaneously.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Example`}
      </strong>
      {`
`}
      <em>
        {`I want to design and contribute a new design pattern that allows a user to favorite or like an item in a data list.`}
      </em>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Enhancement`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Improve or update an existing PatternFly component or design pattern.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Example`}
      </strong>
      {`
`}
      <em>
        {`I want to add a compact/expand toggle to the list view.`}
      </em>
    </p>
    <p {...{"className":"ws-p"}}>
      {`You may also open an issue to propose a new design guideline page or update an existing guideline, and work with the PatternFly team and stakeholders to author and publish your new content.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Design guideline`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Design guidelines appear on the website and help designers to apply PatternFly components in their designs.  They are use case and solutions driven.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Example`}
      </strong>
      {`
`}
      <em>
        {`I want to add guidelines for how to apply labels and tags to organize objects.`}
      </em>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Lifecycle`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Before you begin the contribution process, follow `}
      <PatternflyThemeLink {...{"to":"/get-started/designers"}}>
        {`these guidelines`}
      </PatternflyThemeLink>
      {` to get your environment setup.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Follow these steps and this `}
      <a {...{"href":"https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A28fd970d-8b77-4008-b598-b2f629bda589"}}>
        {`template format`}
      </a>
      {` to submit your designs:`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1. Create an issue`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Navigate to the `}
        <a {...{"href":"https://github.com/patternfly"}}>
          {`PatternFly page`}
        </a>
        {` on Github and go to the `}
        <a {...{"href":"https://github.com/orgs/patternfly/projects/3"}}>
          {`feature board`}
        </a>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Open an issue for a new feature or comment on an existing issue for an enhancement`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`2. Propose a design`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Create a proposal for the new pattern or enhancements (be sure to re-use existing components in the design when applicable)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Attach any design assets such as wireframes or mockups to help clarify the design intent and behavior`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Document all interactions within the desing clearly (you can leverage the Sketch library in addition to prototyping tools like InVision, Marvel, etc.)`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`3. Submit your designs`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`The PatternFly team will help you throughout this process. If accepted, you will be assigned a buddy to assist you throughout the rest of the process`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport1} {...{"alt":"Design contribution lifecycle flowchart","className":"ws-img"}}>
      </img>
    </p>
  </React.Fragment>
);
ContributeDesignDocs.Component.displayName = 'ContributeDesignDocs';
