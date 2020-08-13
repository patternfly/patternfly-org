import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/react-core/src/layouts/Split/examples/./split.css';

export const DocumentationLayoutsSplitReactDocs = {
  "slug": "/documentation/layouts/split/react",
  "source": "react",
  "propComponents": [
    "Split",
    "SplitItem"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/layouts/Split/examples/Split.md",
  "section": "layouts",
  "id": "Split",
  "title": "Split",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-l-split"
};
DocumentationLayoutsSplitReactDocs.liveContext = {
  
};
DocumentationLayoutsSplitReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsSplitReactDocs} {...{"code":"import React from 'react';\nimport { Split, SplitItem } from '@patternfly/react-core';\n\nSplitBasicExample = () => (\n  <Split>\n    <SplitItem>content</SplitItem>\n    <SplitItem isFilled>pf-m-fill</SplitItem>\n    <SplitItem>content</SplitItem>\n  </Split>\n);","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsSplitReactDocs} {...{"code":"import React from 'react';\nimport { Split, SplitItem } from '@patternfly/react-core';\n\nSplitWithGutterExample = () => (\n  <Split hasGutter>\n    <SplitItem>content</SplitItem>\n    <SplitItem isFilled>pf-m-fill</SplitItem>\n    <SplitItem>content</SplitItem>\n  </Split>\n);","title":"With gutter","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationLayoutsSplitReactDocs.Component.displayName = 'DocumentationLayoutsSplitReactDocs';
