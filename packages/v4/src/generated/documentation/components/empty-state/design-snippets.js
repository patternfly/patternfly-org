import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsEmptyStateDesignSnippetsDocs = {
  "slug": "/documentation/components/empty-state/design-snippets",
  "source": "design-snippets",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-snippets/components/empty-state.md",
  "section": "components",
  "id": "Empty state",
  "title": "Empty state",
  "toc": []
};
DocumentationComponentsEmptyStateDesignSnippetsDocs.liveContext = {
  
};
DocumentationComponentsEmptyStateDesignSnippetsDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Use an `}
      <strong>
        {`empty state`}
      </strong>
      {` component when there is no data or other information to show. It can also be used to communicate completion or other status at the end of a sequential task. An empty state may include a call to action to guide the user on what to do next.`}
    </p>
  </React.Fragment>
);
DocumentationComponentsEmptyStateDesignSnippetsDocs.Component.displayName = 'DocumentationComponentsEmptyStateDesignSnippetsDocs';
