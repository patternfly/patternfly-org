import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsBadgeReactDocs = {
  "slug": "/documentation/components/badge/react",
  "source": "react",
  "propComponents": [
    "Badge"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Badge/examples/Badge.md",
  "section": "components",
  "id": "Badge",
  "title": "Badge",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-badge"
};
DocumentationComponentsBadgeReactDocs.liveContext = {
  
};
DocumentationComponentsBadgeReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsBadgeReactDocs} {...{"code":"import React from 'react';\nimport { Badge } from '@patternfly/react-core';\n\nReadBadge = () => (\n  <React.Fragment>\n    <Badge key={1} isRead>7</Badge>\n    {' '}\n    <Badge key={2} isRead>24</Badge>\n    {' '}\n    <Badge key={3} isRead>240</Badge>\n    {' '}\n    <Badge key={4} isRead>999+</Badge>\n  </React.Fragment>\n);","title":"Read","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsBadgeReactDocs} {...{"code":"import React from 'react';\nimport { Badge } from '@patternfly/react-core';\n\nUnreadBadge = () => (\n  <React.Fragment>\n    <Badge key={1}>7</Badge>\n    {' '}\n    <Badge key={2}>24</Badge>\n    {' '}\n    <Badge key={3}>240</Badge>\n    {' '}\n    <Badge key={4}>999+</Badge>\n  </React.Fragment>\n);","title":"Unread","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsBadgeReactDocs.Component.displayName = 'DocumentationComponentsBadgeReactDocs';
