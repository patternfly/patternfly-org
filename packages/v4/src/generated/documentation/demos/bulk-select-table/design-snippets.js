import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationDemosBulkSelectTableDesignSnippetsDocs = {
  "slug": "/documentation/demos/bulk-select-table/design-snippets",
  "source": "design-snippets",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-snippets/demos/bulk-select-table.md",
  "section": "demos",
  "id": "Bulk select table",
  "title": "Bulk select table",
  "toc": []
};
DocumentationDemosBulkSelectTableDesignSnippetsDocs.liveContext = {
  
};
DocumentationDemosBulkSelectTableDesignSnippetsDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`This demonstrates how a `}
      <PatternflyThemeLink {...{"to":"/documentation/react/components/dropdown#split-button"}}>
        {`Split button component`}
      </PatternflyThemeLink>
      {` can be placed in a `}
      <PatternflyThemeLink {...{"to":"/documentation/react/components/datatoolbar"}}>
        {`toolbar`}
      </PatternflyThemeLink>
      {` to control bulk selection within a paginated data table.`}
    </p>
  </React.Fragment>
);
DocumentationDemosBulkSelectTableDesignSnippetsDocs.Component.displayName = 'DocumentationDemosBulkSelectTableDesignSnippetsDocs';
