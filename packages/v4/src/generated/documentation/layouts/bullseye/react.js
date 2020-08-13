import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/react-core/src/layouts/Bullseye/examples/./bullseye.css';

export const DocumentationLayoutsBullseyeReactDocs = {
  "slug": "/documentation/layouts/bullseye/react",
  "source": "react",
  "propComponents": [
    "Bullseye"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/layouts/Bullseye/examples/Bullseye.md",
  "section": "layouts",
  "id": "Bullseye",
  "title": "Bullseye",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-l-bullseye"
};
DocumentationLayoutsBullseyeReactDocs.liveContext = {
  
};
DocumentationLayoutsBullseyeReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsBullseyeReactDocs} {...{"code":"import React from 'react';\nimport { Bullseye } from '@patternfly/react-core';\n\nBasicBullseyeExample = () => (\n  <Bullseye>\n    <div>Bullseye ◎ layout</div>\n  </Bullseye>\n);","title":"Basic","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationLayoutsBullseyeReactDocs.Component.displayName = 'DocumentationLayoutsBullseyeReactDocs';
