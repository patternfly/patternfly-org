import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsSpinnerDesignSnippetsDocs = {
  "slug": "/documentation/components/spinner/design-snippets",
  "source": "design-snippets",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-snippets/components/spinner.md",
  "section": "components",
  "id": "Spinner",
  "title": "Spinner",
  "toc": []
};
DocumentationComponentsSpinnerDesignSnippetsDocs.liveContext = {
  
};
DocumentationComponentsSpinnerDesignSnippetsDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Spinners`}
      </strong>
      {` are used to indicate to users that an action is in progress. For actions that may take a long time use a `}
      <PatternflyThemeLink {...{"to":"/documentation/react/components/progress"}}>
        {`Progress Bar`}
      </PatternflyThemeLink>
      {` in place of a Spinner.`}
    </p>
  </React.Fragment>
);
DocumentationComponentsSpinnerDesignSnippetsDocs.Component.displayName = 'DocumentationComponentsSpinnerDesignSnippetsDocs';
