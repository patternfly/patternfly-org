import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationDemosAboutModalDesignSnippetsDocs = {
  "slug": "/documentation/demos/about-modal/design-snippets",
  "source": "design-snippets",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-snippets/demos/about-modal.md",
  "section": "demos",
  "id": "About modal",
  "title": "About modal",
  "toc": []
};
DocumentationDemosAboutModalDesignSnippetsDocs.liveContext = {
  
};
DocumentationDemosAboutModalDesignSnippetsDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`This demonstrates how the `}
      <PatternflyThemeLink {...{"to":"/documentation/core/components/aboutmodalbox"}}>
        {`About modal box component`}
      </PatternflyThemeLink>
      {` can be populated with information to create a typical About modal used in product.`}
    </p>
  </React.Fragment>
);
DocumentationDemosAboutModalDesignSnippetsDocs.Component.displayName = 'DocumentationDemosAboutModalDesignSnippetsDocs';
