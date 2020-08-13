import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsLoginPageDesignSnippetsDocs = {
  "slug": "/documentation/components/login-page/design-snippets",
  "source": "design-snippets",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-snippets/components/login-page.md",
  "section": "components",
  "id": "Login page",
  "title": "Login page",
  "toc": []
};
DocumentationComponentsLoginPageDesignSnippetsDocs.liveContext = {
  
};
DocumentationComponentsLoginPageDesignSnippetsDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <strong>
        {`login page`}
      </strong>
      {` allows a user to gain access to an application by entering their username and password or by authenticating using a social media login. Related design guideline: `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/login"}}>
        {`Login`}
      </PatternflyThemeLink>
    </p>
  </React.Fragment>
);
DocumentationComponentsLoginPageDesignSnippetsDocs.Component.displayName = 'DocumentationComponentsLoginPageDesignSnippetsDocs';
