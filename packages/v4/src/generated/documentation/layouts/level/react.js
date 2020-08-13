import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/react-core/src/layouts/Level/examples/./level.css';

export const DocumentationLayoutsLevelReactDocs = {
  "slug": "/documentation/layouts/level/react",
  "source": "react",
  "propComponents": [
    "Level",
    "LevelItem"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/layouts/Level/examples/Level.md",
  "section": "layouts",
  "id": "Level",
  "title": "Level",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-l-level"
};
DocumentationLayoutsLevelReactDocs.liveContext = {
  
};
DocumentationLayoutsLevelReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsLevelReactDocs} {...{"code":"import React from 'react';\nimport { Level, LevelItem } from '@patternfly/react-core';\n\nLevelBasicExample = () => (\n  <Level>\n    <LevelItem>Level Item</LevelItem>\n    <LevelItem>Level Item</LevelItem>\n    <LevelItem>Level Item</LevelItem>\n  </Level>\n);","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsLevelReactDocs} {...{"code":"import React from 'react';\nimport { Level, LevelItem } from '@patternfly/react-core';\n\nLevelWithGuttersExample = () => (\n  <Level hasGutter>\n    <LevelItem>Level Item</LevelItem>\n    <LevelItem>Level Item</LevelItem>\n    <LevelItem>Level Item</LevelItem>\n  </Level>\n);","title":"With gutters","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationLayoutsLevelReactDocs.Component.displayName = 'DocumentationLayoutsLevelReactDocs';
