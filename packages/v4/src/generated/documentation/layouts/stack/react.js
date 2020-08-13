import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/react-core/src/layouts/Stack/examples/./stack.css';

export const DocumentationLayoutsStackReactDocs = {
  "slug": "/documentation/layouts/stack/react",
  "source": "react",
  "propComponents": [
    "Stack",
    "StackItem"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/layouts/Stack/examples/Stack.md",
  "section": "layouts",
  "id": "Stack",
  "title": "Stack",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-l-stack"
};
DocumentationLayoutsStackReactDocs.liveContext = {
  
};
DocumentationLayoutsStackReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsStackReactDocs} {...{"code":"import React from 'react';\nimport { Stack, StackItem } from '@patternfly/react-core';\n\nStackBasicExample = () => (\n  <Stack>\n    <StackItem>content</StackItem>\n    <StackItem isFilled>pf-m-fill</StackItem>\n    <StackItem>content</StackItem>\n  </Stack>\n);","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsStackReactDocs} {...{"code":"import React from 'react';\nimport { Stack, StackItem } from '@patternfly/react-core';\n\nStackWithGutterExample = () => (\n  <Stack hasGutter>\n    <StackItem>content</StackItem>\n    <StackItem isFilled>pf-m-fill</StackItem>\n    <StackItem>content</StackItem>\n  </Stack>\n);","title":"With gutter","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationLayoutsStackReactDocs.Component.displayName = 'DocumentationLayoutsStackReactDocs';
