import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationDemosModalDesignSnippetsDocs = {
  "slug": "/documentation/demos/modal/design-snippets",
  "source": "design-snippets",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-snippets/demos/modal.md",
  "section": "demos",
  "id": "Modal",
  "title": "Modal",
  "toc": []
};
DocumentationDemosModalDesignSnippetsDocs.liveContext = {
  
};
DocumentationDemosModalDesignSnippetsDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`This demo shows how the `}
      <PatternflyThemeLink {...{"to":"/documentation/core/components/modalbox"}}>
        {`Modal box`}
      </PatternflyThemeLink>
      {` and other components can be used to create a modal dialog.`}
    </p>
  </React.Fragment>
);
DocumentationDemosModalDesignSnippetsDocs.Component.displayName = 'DocumentationDemosModalDesignSnippetsDocs';
