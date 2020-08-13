import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/react-core/src/layouts/Flex/examples/./flex.css';

export const DocumentationLayoutsFlexReactDocs = {
  "slug": "/documentation/layouts/flex/react",
  "source": "react",
  "propComponents": [
    "Flex",
    "FlexItem"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/layouts/Flex/examples/Flex.md",
  "section": "layouts",
  "id": "Flex",
  "title": "Flex",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-l-flex"
};
DocumentationLayoutsFlexReactDocs.liveContext = {
  
};
DocumentationLayoutsFlexReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Flex Basics`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nBasicFlexExample = () => (\n  <Flex>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n);","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nNestingFlexExample = () => (\n  <Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n);","title":"Nesting","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nNestedItemsFlexExample = () => (\n  <Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n);","title":"Nested with items","lang":"js"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Flex Spacing`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexSpacingExample = () => (\n  <Flex>\n    <FlexItem spacer={{ default: 'spacerNone' }}>Item - none</FlexItem>\n    <FlexItem spacer={{ default: 'spacerXs' }}>Item - xs</FlexItem>\n    <FlexItem spacer={{ default: 'spacerSm' }}>Item -sm</FlexItem>\n    <FlexItem spacer={{ default: 'spacerMd' }}>Item - md</FlexItem>\n    <FlexItem spacer={{ default: 'spacerLg' }}>Item - lg</FlexItem>\n    <FlexItem spacer={{ default: 'spacerXl' }}>Item - xl</FlexItem>\n    <FlexItem spacer={{ default: 'spacer2xl' }}>Item - 2xl</FlexItem>\n    <FlexItem spacer={{ default: 'spacer3xl' }}>Item - 3xl</FlexItem>\n  </Flex>\n);","title":"Individually spaced","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexSpacingXlExample = () => (\n  <Flex spaceItems={{ modifier: 'spaceItemsXl' }}>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n);","title":"Spacing xl","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexSpacingNoneExample = () => (\n  <Flex spaceItems={{ default: 'spaceItemsNone' }}>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n);","title":"Spacing none","lang":"js"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Flex layout modifiers`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexLayoutModifiersExample = () => (\n  <Flex className=\"example-border\">\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n);","title":"Default layout","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexInlineExample = () => (\n  <Flex className=\"example-border\" flex={{ default: 'inlineFlex' }}>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n);","title":"Inline","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexUsingCanGrowExample = () => (\n  <Flex>\n    <Flex grow={{ default: 'grow' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n);","title":"Using canGrow","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexAdjustingWidthExample = () => (\n  <Flex>\n    <Flex flex={{ default: 'flex_1' }}>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex flex={{ default: 'flex_1' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex flex={{ default: 'flex_1' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n);","title":"Adjusting width","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexSpecifyingColumnWidthsExample = () => (\n  <Flex>\n    <Flex flex={{ default: 'flex_1' }}>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex flex={{ default: 'flex_2' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex flex={{ default: 'flex_3' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n);","title":"Specifying column widths","lang":"js"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Column layout modifiers`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexColumnLayoutExample = () => (\n  <Flex direction={{ default: 'column' }}>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n);","title":"Column layout","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexStackingElementsExample = () => (\n  <Flex direction={{ default: 'column' }}>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n);","title":"Stacking elements","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexNestingElementsInColumnsExample = () => (\n  <Flex>\n    <Flex direction={{ default: 'column' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex direction={{ default: 'column' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n);","title":"Nesting elements in columns","lang":"js"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Responsive layout modifiers`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexSwitchingBetweenDirectionColumnAndRowExample = () => (\n  <Flex direction={{ default: 'column', lg: 'row' }}>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex direction={{ default: 'column' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n);","title":"Switching between direction column and row","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexControllingWidthOfTextExample = () => (\n  <Flex direction={{ default: 'column', lg: 'row' }}>\n    <Flex flex={{ default: 'flex_1' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi modi temporibus, alias qui obcaecati ullam dolor nam, nulla magni iste rem praesentium numquam provident amet ut nesciunt harum accusamus.</FlexItem>\n    </Flex>\n    <Flex direction={{ default: 'column' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n);","title":"Controlling width of text","lang":"js"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Flex alignment`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexAligningRightExample = () => (\n  <Flex className=\"example-border\">\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem align={{ default: 'alignRight' }}>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n);","title":"Aligning right","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexAligningRightOnSingleItemExample = () => (\n  <Flex className=\"example-border\">\n    <FlexItem align={{ default: 'alignRight' }}>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n);","title":"Align right on single item","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexAlignRightOnMultipleGroupsExample = () => (\n  <Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex align={{ default: 'alignRight' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex align={{ default: 'alignRight' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n);","title":"Align right on multiple groups","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexAlignAdjacentContentExample = () => (\n  <Flex>\n    <Flex flex={{ default: 'flex_1' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n);","title":"Align adjacent content","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexAlignSelfFlexEndExample = () => (\n  <Flex>\n    <Flex direction={{ default: 'column' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex direction={{ default: 'column' }} alignSelf={{ default: 'alignSelfFlexEnd' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n);","title":"Align self flex end","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexAlignSelfCenterExample = () => (\n  <Flex>\n    <Flex direction={{ default: 'column' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex direction={{ default: 'column' }} alignSelf={{ default: 'alignSelfCenter' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n);","title":"Align self center","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexAlignSelfBaselineExample = () => (\n  <Flex>\n    <Flex direction={{ default: 'column' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex direction={{ default: 'column' }} alignSelf={{ default: 'alignSelfBaseline' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n);","title":"Align self baseline","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexAlignSelfStretchExample = () => (\n  <Flex>\n    <Flex direction={{ default: 'column' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n    <Flex direction={{ default: 'column' }} alignSelf={{ default: 'alignSelfStretch' }}>\n      <FlexItem>Flex item</FlexItem>\n      <FlexItem>Flex item</FlexItem>\n    </Flex>\n  </Flex>\n);","title":"Align self stretch","lang":"js"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Flex justification`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexJustifyContentFlexEndExample = () => (\n  <Flex className=\"example-border\" justifyContent={{ default: 'justifyContentFlexEnd' }}>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n);","title":"Justify content flex end","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem  } from '@patternfly/react-core';\n\nFlexJustifyContentSpaceBetweenExample = () => (\n  <Flex className=\"example-border\" justifyContent={{ default: 'justifyContentSpaceBetween' }}>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n);","title":"Justify content space between","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsFlexReactDocs} {...{"code":"import React from 'react';\nimport { Flex, FlexItem } from '@patternfly/react-core';\n\nFlexJustifyContentFlexStartExample = () => (\n  <Flex className=\"example-border\" justifyContent={{ default: 'justifyContentFlexStart' }}>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n    <FlexItem>Flex item</FlexItem>\n  </Flex>\n);","title":"Justify content flex start","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationLayoutsFlexReactDocs.Component.displayName = 'DocumentationLayoutsFlexReactDocs';
