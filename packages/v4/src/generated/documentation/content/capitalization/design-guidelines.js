import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationContentCapitalizationDesignGuidelinesDocs = {
  "slug": "/documentation/content/capitalization/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/content/capitalization.md",
  "section": "content",
  "id": "Capitalization",
  "title": "Capitalization",
  "toc": [
    "Capitalization for tools outside your product portfolio",
    "Capitalization for breadcrumb trails",
    "Capitalization for PatternFly components"
  ]
};
DocumentationContentCapitalizationDesignGuidelinesDocs.liveContext = {
  
};
DocumentationContentCapitalizationDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Keep your capitalization consistent, and follow the capitalization rules your company enforces for your products.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Sentence case capitalizes only the first word of each sentence and proper nouns. On PatternFly, we use sentence case capitalization for all text elements, except the following:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Product names (Red Hat Virtualization, PatternFly, Red Hat CloudForms)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Proper nouns for individuals, organizations, and locations.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Acronyms and initialisms (URL, HTML, CSS, JS)`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note`}
      </strong>
      {`: Hyperlinked articles in a UI are usually not displayed as titles. Instead, the copy typically reads something along the lines of, “Learn more about `}
      {`[tool name]`}
      {`.”`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Capitalization for tools outside your product portfolio`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If you’re referencing tools outside your company’s product portfolio, write the product names as they appear in the respective company’s documentation. For example, if you’re referencing a product in AWS and Amazon capitalizes it, then capitalize it in your writing.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Capitalization for breadcrumb trails`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Usually, page titles appear in a breadcrumb trail. If all page titles are in sentence case, they should also appear in sentence case in the breadcrumb trail.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`However, breadcrumb trails aren’t limited to page titles alone. If a name entered by a user (such as “vagrant-host”) is included in the breadcrumb trail, then use the same case that the name appears in.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example:
`}
            <br/>
      {`Rules > Systems > vagrant-host`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`You always want the names in the breadcrumb trail to exactly match the names of the elements they’re referencing.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Capitalization for PatternFly components`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly components should be written in lowercase. Components are not technically proper nouns or products, so they aren’t capitalized. If they start a sentence or a page title, then capitalize the first letter only.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note`}
      </strong>
      {`: “React” is always written in title case, even when referring to a component (“React component”). It’s the official name of a JavaScript library, and it’s written as a proper noun across the `}
      <a {...{"href":"https://reactjs.org/"}}>
        {`react.js org site`}
      </a>
      {`.`}
    </p>
  </React.Fragment>
);
DocumentationContentCapitalizationDesignGuidelinesDocs.Component.displayName = 'DocumentationContentCapitalizationDesignGuidelinesDocs';
