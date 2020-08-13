import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import pfLogo from '../../../../../../../node_modules/@patternfly/react-core/src/components/Brand/examples/./pfLogo.svg';

export const DocumentationComponentsBrandReactDocs = {
  "slug": "/documentation/components/brand/react",
  "source": "react",
  "propComponents": [
    "Brand"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Brand/examples/Brand.md",
  "section": "components",
  "id": "Brand",
  "title": "Brand",
  "toc": [
    "Examples"
  ],
  "cssPrefix": null
};
DocumentationComponentsBrandReactDocs.liveContext = {
  pfLogo
};
DocumentationComponentsBrandReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsBrandReactDocs} {...{"code":"import React from 'react';\nimport { Brand } from '@patternfly/react-core';\nimport pfLogo from './examples/pfLogo.svg';\n\n<Brand src={pfLogo} alt=\"Patternfly Logo\" />","title":"Basic","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsBrandReactDocs.Component.displayName = 'DocumentationComponentsBrandReactDocs';
