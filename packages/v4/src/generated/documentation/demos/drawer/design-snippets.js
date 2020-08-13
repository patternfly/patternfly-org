import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationDemosDrawerDesignSnippetsDocs = {
  "slug": "/documentation/demos/drawer/design-snippets",
  "source": "design-snippets",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-snippets/demos/drawer.md",
  "section": "demos",
  "id": "Drawer",
  "title": "Drawer",
  "toc": []
};
DocumentationDemosDrawerDesignSnippetsDocs.liveContext = {
  
};
DocumentationDemosDrawerDesignSnippetsDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`This demo shows the use and positioning of the `}
      <PatternflyThemeLink {...{"to":"/documentation/core/components/drawer"}}>
        {`Drawer component`}
      </PatternflyThemeLink>
      {` in a page.`}
    </p>
  </React.Fragment>
);
DocumentationDemosDrawerDesignSnippetsDocs.Component.displayName = 'DocumentationDemosDrawerDesignSnippetsDocs';
