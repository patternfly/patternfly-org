import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsSpinnerReactDocs = {
  "slug": "/documentation/components/spinner/react",
  "source": "react",
  "propComponents": [
    "Spinner"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Spinner/examples/Spinner.md",
  "section": "components",
  "id": "Spinner",
  "title": "Spinner",
  "toc": [
    "Spinner",
    "Examples"
  ],
  "cssPrefix": "pf-c-spinner"
};
DocumentationComponentsSpinnerReactDocs.liveContext = {
  
};
DocumentationComponentsSpinnerReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Spinner`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsSpinnerReactDocs} {...{"code":"import React from 'react';\nimport { Spinner } from '@patternfly/react-core';\n\nSpinnerBasic = () => (<Spinner/>);","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsSpinnerReactDocs} {...{"code":"import React from 'react';\nimport { Spinner } from '@patternfly/react-core';\n\nSpinnerSizeVariations = () => (\n<React.Fragment>\n    <Spinner size=\"sm\"/>\n    <Spinner size=\"md\"/>\n    <Spinner size=\"lg\"/>\n    <Spinner size=\"xl\"/>\n</React.Fragment>\n);","title":"Size variations","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsSpinnerReactDocs.Component.displayName = 'DocumentationComponentsSpinnerReactDocs';
