import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsTitleReactDocs = {
  "slug": "/documentation/components/title/react",
  "source": "react",
  "propComponents": [
    "Title"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Title/examples/Title.md",
  "section": "components",
  "id": "Title",
  "title": "Title",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-title"
};
DocumentationComponentsTitleReactDocs.liveContext = {
  
};
DocumentationComponentsTitleReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsTitleReactDocs} {...{"code":"import React from 'react';\nimport { Title, TitleSizes } from '@patternfly/react-core';\n\n<React.Fragment>\n  <Title headingLevel=\"h1\" size={TitleSizes['4xl']}>\n    4xl Title\n  </Title>\n  <Title headingLevel=\"h2\" size=\"3xl\">\n    3xl Title\n  </Title>\n  <Title headingLevel=\"h3\" size={TitleSizes['2xl']}>\n    2xl Title\n  </Title>\n  <Title headingLevel=\"h4\" size=\"xl\">\n    xl Title\n  </Title>\n  <Title headingLevel=\"h5\" size={TitleSizes.lg}>\n    lg Title\n  </Title>\n  <Title headingLevel=\"h6\" size=\"md\">\n    md Title\n  </Title>\n</React.Fragment>","title":"Sizes","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsTitleReactDocs} {...{"code":"import React from 'react';\nimport { Title } from '@patternfly/react-core';\n\n<React.Fragment>\n  <Title headingLevel=\"h1\">\n    h1 default to 2xl\n  </Title>\n  <Title headingLevel=\"h2\">\n    h2 defaults to xl\n  </Title>\n  <Title headingLevel=\"h3\">\n    h3 defaults to lg\n  </Title>\n  <Title headingLevel=\"h4\">\n    h4 defaults to md\n  </Title>\n  <Title headingLevel=\"h5\">\n    h5 defaults to md\n  </Title>\n  <Title headingLevel=\"h6\">\n    h6 defaults to md\n  </Title>\n</React.Fragment>","title":"Default size mappings","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsTitleReactDocs.Component.displayName = 'DocumentationComponentsTitleReactDocs';
