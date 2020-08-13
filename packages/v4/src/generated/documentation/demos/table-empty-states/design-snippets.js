import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationDemosTableEmptyStatesDesignSnippetsDocs = {
  "slug": "/documentation/demos/table-empty-states/design-snippets",
  "source": "design-snippets",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-snippets/demos/table-empty-states.md",
  "section": "demos",
  "id": "Table empty states",
  "title": "Table empty states",
  "toc": []
};
DocumentationDemosTableEmptyStatesDesignSnippetsDocs.liveContext = {
  
};
DocumentationDemosTableEmptyStatesDesignSnippetsDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`This demonstrates the use of an `}
      <PatternflyThemeLink {...{"to":"/documentation/react/components/emptystate"}}>
        {`Empty State component`}
      </PatternflyThemeLink>
      {` inside of a `}
      <a {...{"href":"documentation/react/components/table"}}>
        {`Table`}
      </a>
      {`. Empty states are useful in a table when a filter returns no results, while data is loading, or when any type of error or exception condition occurs.`}
    </p>
  </React.Fragment>
);
DocumentationDemosTableEmptyStatesDesignSnippetsDocs.Component.displayName = 'DocumentationDemosTableEmptyStatesDesignSnippetsDocs';
