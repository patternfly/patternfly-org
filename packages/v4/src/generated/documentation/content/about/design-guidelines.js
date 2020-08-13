import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../content/design-guidelines/content/./content.css';

export const DocumentationContentAboutDesignGuidelinesDocs = {
  "slug": "/documentation/content/about/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/content/about.md",
  "section": "content",
  "id": "About",
  "title": "About",
  "toc": [
    "Style guide goal",
    "Additional resources",
    "Contribute"
  ]
};
DocumentationContentAboutDesignGuidelinesDocs.liveContext = {
  
};
DocumentationContentAboutDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Welcome to the PatternFly content style guide: a place for UX professionals like you to learn about designing with words.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`The words in a user interface, commonly referred to as "UX copy" or "microcopy," are just as important as the components or layouts. UX copy is another element of design, and it can drive better UX decisions and guide users to succeed.`}
    </p>
    <blockquote {...{"className":"ws-blockquote"}}>
      <p {...{"className":"ws-p"}}>
        {`I’ve come to believe that language is one of the most powerful design tools we have.`}
      </p>
    </blockquote>
    <p {...{"className":"ws-p"}}>
      <em>
        {`— `}
        <a {...{"href":"https://open.nytimes.com/to-design-better-products-consider-the-language-f17b923f8bae"}}>
          {`n.k. feinberg, New York Times`}
        </a>
      </em>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Anyone involved in UX—researchers, designers, developers, content strategists, and more—can use this guide for building better product experiences with content design and strategy.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Style guide goal`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`As a PatternFly community, our goal with this style guide is to help UX professionals:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Create clarity and consistency across products and applications.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Make products sound more conversational and human.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Use written content to create unified, on-brand experiences for all users.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`With that said, we recognize that the `}
      <em>
        {`PatternFly`}
      </em>
      {` way is not the `}
      <em>
        {`only`}
      </em>
      {` way. This guide isn’t meant to:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Overrule another style guide.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Provide a complete list of all writing rules across all channels.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Serve as hard requirements that everyone must follow.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Additional resources`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`PatternFly’s `}
          <a {...{"href":"https://www.patternfly.org/v4/design-guidelines/styles/colors"}}>
            {`usage and behavior documentation`}
          </a>
          {` contains UX writing guidelines for specific components.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`For content and terminology guidance that’s not included in this guide, check out `}
          <a {...{"href":"https://www.ibm.com/developerworks/library/styleguidelines/index.html"}}>
            {`IBM's online developer style guide`}
          </a>
          {` and `}
          <a {...{"href":"https://www.merriam-webster.com/"}}>
            {`Merriam-Webster's online dictionary.`}
          </a>
        </p>
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Contribute`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In true Flyer fashion, we keep this style guide open. Contribute your ideas through `}
      <a {...{"href":"https://github.com/patternfly/patternfly-org/pulls"}}>
        {`GitHub.`}
      </a>
    </p>
  </React.Fragment>
);
DocumentationContentAboutDesignGuidelinesDocs.Component.displayName = 'DocumentationContentAboutDesignGuidelinesDocs';
