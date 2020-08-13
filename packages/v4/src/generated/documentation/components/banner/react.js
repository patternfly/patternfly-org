import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsBannerReactDocs = {
  "slug": "/documentation/components/banner/react",
  "source": "react",
  "propComponents": [
    "Banner"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Banner/examples/Banner.md",
  "section": "components",
  "id": "Banner",
  "title": "Banner",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-banner"
};
DocumentationComponentsBannerReactDocs.liveContext = {
  
};
DocumentationComponentsBannerReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsBannerReactDocs} {...{"code":"import React from 'react';\nimport { Banner } from '@patternfly/react-core';\n\nBannerVariants = () => (\n  <React.Fragment>\n    <Banner>Default banner</Banner>\n    <br />\n    <Banner variant=\"info\">Info banner</Banner>\n    <br />\n    <Banner variant=\"danger\">Danger banner</Banner>\n    <br />\n    <Banner variant=\"success\">Success banner</Banner>\n    <br />\n    <Banner variant=\"warning\">Warning banner</Banner>\n  </React.Fragment>\n);","title":"Basic","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsBannerReactDocs.Component.displayName = 'DocumentationComponentsBannerReactDocs';
