import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsDividerReactDocs = {
  "slug": "/documentation/components/divider/react",
  "source": "react",
  "propComponents": [
    "Divider"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Divider/examples/Divider.md",
  "section": "components",
  "id": "Divider",
  "title": "Divider",
  "toc": [],
  "cssPrefix": "pf-c-divider"
};
DocumentationComponentsDividerReactDocs.liveContext = {
  
};
DocumentationComponentsDividerReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Using hr (default)`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsDividerReactDocs} {...{"code":"import React from 'react';\nimport { Divider } from '@patternfly/react-core';\n\nDividerHr = () => (\n  <Divider/>\n);","title":"Untitled example","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsDividerReactDocs} {...{"code":"import React from 'react';\nimport { Divider } from '@patternfly/react-core/dist';\n\nDividerLi = () => (\n  <ul>\n    <li>List item one</li>\n    <Divider component=\"li\"/>\n    <li>List item two</li>\n  </ul>\n);","title":"Using li","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsDividerReactDocs} {...{"code":"import React from 'react';\nimport { Divider } from '@patternfly/react-core';\n\nDividerDiv = () => (\n  <Divider component=\"div\"/>\n);","title":"Using div","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsDividerReactDocs} {...{"code":"import React from 'react';\nimport { Divider } from '@patternfly/react-core';\n\nDividerInsetMedium = () => (\n  <Divider inset={{default: 'insetMd'}}/>\n);","title":"Inset medium","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsDividerReactDocs} {...{"code":"import React from 'react';\nimport { Divider } from '@patternfly/react-core';\n\nDividerInsetVarious = () => (\n  <Divider inset={{\n          default: 'insetMd',\n          md: 'insetNone',\n          lg: 'inset3xl',\n          xl: 'insetLg'\n        }}\n      />\n);","title":"Inset at various breakpoints","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsDividerReactDocs} {...{"code":"import React from 'react';\nimport { Divider, Flex, FlexItem } from '@patternfly/react-core';\n\nDividerVertical = () => (\n  <Flex>\n    <FlexItem>first item</FlexItem>\n    <Divider isVertical/>\n    <FlexItem>second item</FlexItem>\n  </Flex>\n);","title":"Vertical in flex layout","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsDividerReactDocs} {...{"code":"import React from 'react';\nimport { Divider, Flex, FlexItem } from '@patternfly/react-core';\n\nDividerVerticalInsetMd = () => (\n  <Flex>\n    <FlexItem>first item</FlexItem>\n    <Divider isVertical inset={{default: 'insetMd'}}/>\n    <FlexItem>second item</FlexItem>\n  </Flex>\n);","title":"Vertical, inset medium in flex layout","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsDividerReactDocs} {...{"code":"import React from 'react';\nimport { Divider, Flex, FlexItem } from '@patternfly/react-core';\n\nDividerVerticalInsetVarious = () => (\n  <Flex>\n    <FlexItem>first item</FlexItem>\n    <Divider isVertical \n      inset={{\n        default: 'insetMd',\n        md: 'insetNone',\n        lg: 'insetSm',\n        xl: 'insetXs'\n      }}\n    />\n    <FlexItem>first item</FlexItem>\n  </Flex>\n);","title":"Vertical, inset at various breakpoints","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsDividerReactDocs.Component.displayName = 'DocumentationComponentsDividerReactDocs';
