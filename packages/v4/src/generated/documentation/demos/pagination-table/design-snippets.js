import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationDemosPaginationTableDesignSnippetsDocs = {
  "slug": "/documentation/demos/pagination-table/design-snippets",
  "source": "design-snippets",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-snippets/demos/pagination-table.md",
  "section": "demos",
  "id": "Pagination table",
  "title": "Pagination table",
  "toc": []
};
DocumentationDemosPaginationTableDesignSnippetsDocs.liveContext = {
  
};
DocumentationDemosPaginationTableDesignSnippetsDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`This demo shows how the `}
      <PatternflyThemeLink {...{"to":"/documentation/react/components/pagination"}}>
        {`Pagination component`}
      </PatternflyThemeLink>
      {` can be used to navigate through a paginated table.`}
    </p>
  </React.Fragment>
);
DocumentationDemosPaginationTableDesignSnippetsDocs.Component.displayName = 'DocumentationDemosPaginationTableDesignSnippetsDocs';
