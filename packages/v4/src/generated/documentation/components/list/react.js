import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsListReactDocs = {
  "slug": "/documentation/components/list/react",
  "source": "react",
  "propComponents": [
    "List",
    "ListItem"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/List/examples/List.md",
  "section": "components",
  "id": "List",
  "title": "List",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-list"
};
DocumentationComponentsListReactDocs.liveContext = {
  
};
DocumentationComponentsListReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsListReactDocs} {...{"code":"import React from 'react';\nimport { List, ListItem } from '@patternfly/react-core';\n\nSimpleList = (\n  <List>\n    <ListItem>First</ListItem>\n    <ListItem>Second</ListItem>\n    <ListItem>Third</ListItem>\n  </List>\n);","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsListReactDocs} {...{"code":"import React from 'react';\nimport { List, ListItem, ListVariant } from '@patternfly/react-core';\n\nInlineList = (\n  <List variant={ListVariant.inline}>\n    <ListItem>First</ListItem>\n    <ListItem>Second</ListItem>\n    <ListItem>Third</ListItem>\n  </List>\n);","title":"Inline","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsListReactDocs} {...{"code":"import React from 'react';\nimport { List, ListItem, ListComponent, OrderType } from '@patternfly/react-core';\n\nOrderedList = (\n  <List component={ListComponent.ol} type={OrderType.number}>\n    <ListItem>First</ListItem>\n    <ListItem>Second</ListItem>\n    <ListItem>Third</ListItem>\n  </List>\n);","title":"Ordered","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsListReactDocs.Component.displayName = 'DocumentationComponentsListReactDocs';
