import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsNotificationDrawerDesignSnippetsDocs = {
  "slug": "/documentation/components/notification-drawer/design-snippets",
  "source": "design-snippets",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-snippets/components/notification-drawer.md",
  "section": "components",
  "id": "Notification drawer",
  "title": "Notification drawer",
  "toc": []
};
DocumentationComponentsNotificationDrawerDesignSnippetsDocs.liveContext = {
  
};
DocumentationComponentsNotificationDrawerDesignSnippetsDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`The `}
      <strong>
        {`Notification Drawer`}
      </strong>
      {` uses the `}
      <PatternflyThemeLink {...{"to":"/documentation/core/components/drawer"}}>
        {`Drawer component`}
      </PatternflyThemeLink>
      {` to provide a place for viewing and managing incoming notifications.`}
    </p>
  </React.Fragment>
);
DocumentationComponentsNotificationDrawerDesignSnippetsDocs.Component.displayName = 'DocumentationComponentsNotificationDrawerDesignSnippetsDocs';
