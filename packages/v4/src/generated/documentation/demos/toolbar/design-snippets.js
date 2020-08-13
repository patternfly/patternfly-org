import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationDemosToolbarDesignSnippetsDocs = {
  "slug": "/documentation/demos/toolbar/design-snippets",
  "source": "design-snippets",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-snippets/demos/toolbar.md",
  "section": "demos",
  "id": "Toolbar",
  "title": "Toolbar",
  "toc": []
};
DocumentationDemosToolbarDesignSnippetsDocs.liveContext = {
  
};
DocumentationDemosToolbarDesignSnippetsDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`This demonstrates the construction of an attribute-value filter using the `}
      <PatternflyThemeLink {...{"to":"/documentation/core/components/datatoolbar"}}>
        {`Data toolbar`}
      </PatternflyThemeLink>
      {` component.`}
    </p>
  </React.Fragment>
);
DocumentationDemosToolbarDesignSnippetsDocs.Component.displayName = 'DocumentationDemosToolbarDesignSnippetsDocs';
