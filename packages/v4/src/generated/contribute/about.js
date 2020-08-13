import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport0 from '../../content/contribute/./about-flowchart.png';

export const ContributeAboutDocs = {
  "slug": "/contribute/about",
  "source": "pages-contribute",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/contribute/about.md",
  "section": "contribute",
  "id": "About",
  "title": "About",
  "toc": [
    "Process",
    "Get help"
  ]
};
ContributeAboutDocs.liveContext = {
  
};
ContributeAboutDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`The PatternFly open source community depends on contributions to help our design system grow and evolve. We encourage everyone, regardless of background, to make suggestions for enhancements, contribute new design patterns and ideas, help identify bugs in code, and more. With your help, we can stay on top of the latest and greatest implementation solutions. Continue reading to learn how you can start contributing today.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Process`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The following is an overview of the contribution process. As a contributor, you are not expected to complete all of these stages. We appreciate your contribution at whichever step you decide to begin with.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1. Discover`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Create an issue that includes:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Requirements`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Use cases`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Wireframes`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Documentation`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`The PF team will review and prioritize your issue, taking into account scope and technical constraints`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`If accepted, your feature request will be placed on the PatternFly roadmap and moved to design`}
          </li>
        </ul>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`2. Design`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Propose a design that includes`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Visual mockups`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Interaction documentation`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`The PF team will review and prioritize the design and move it to implementation`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`3. Implement`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Introduce any new styles to Core and follow up with PatternFly-React to define the behavior`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The PF team will review the implementation ensuring it satisfies the requirements`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`4. Document`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Add the description of the component to the PF site`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Add the design guidelines of the component to the PF site`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`The PF team will review the PR and make it available for consumption`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport0} {...{"alt":"Contribution guide","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Get help`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If you run into trouble and need support, the PatternFly team is here to help. Simply go to the `}
      <a {...{"href":"https://forum.patternfly.org/c/support"}}>
        {`PatternFly forum`}
      </a>
      {` and add a new topic to get in touch with us. We'll always do our best to answer your questions and connect you with the right people quickly.`}
    </p>
  </React.Fragment>
);
ContributeAboutDocs.Component.displayName = 'ContributeAboutDocs';
