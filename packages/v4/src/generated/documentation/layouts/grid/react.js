import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/react-core/src/layouts/Grid/examples/./grid.css';

export const DocumentationLayoutsGridReactDocs = {
  "slug": "/documentation/layouts/grid/react",
  "source": "react",
  "propComponents": [
    "Grid",
    "GridItem"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/layouts/Grid/examples/Grid.md",
  "section": "layouts",
  "id": "Grid",
  "title": "Grid",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-l-grid"
};
DocumentationLayoutsGridReactDocs.liveContext = {
  
};
DocumentationLayoutsGridReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsGridReactDocs} {...{"code":"import React from 'react';\nimport { Grid, GridItem } from '@patternfly/react-core';\n\nGridBasicExample = () => (\n  <Grid>\n    <GridItem span={8}>span = 8</GridItem>\n    <GridItem span={4} rowSpan={2}>\n      span = 4, rowSpan = 2\n    </GridItem>\n    <GridItem span={2} rowSpan={3}>\n      span = 2, rowSpan = 3\n    </GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={4}>span = 4</GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={4}>span = 4</GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={4}>span = 4</GridItem>\n    <GridItem span={4}>span = 4</GridItem>\n  </Grid>\n);","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsGridReactDocs} {...{"code":"import React from 'react';\nimport { Grid, GridItem } from '@patternfly/react-core';\n\nGridWithGuttersExample = () => (\n  <Grid hasGutter>\n    <GridItem span={8}>span = 8</GridItem>\n    <GridItem span={4} rowSpan={2}>\n      span = 4, rowSpan = 2\n    </GridItem>\n    <GridItem span={2} rowSpan={3}>\n      span = 2, rowSpan = 3\n    </GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={4}>span = 4</GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={4}>span = 4</GridItem>\n    <GridItem span={2}>span = 2</GridItem>\n    <GridItem span={4}>span = 4</GridItem>\n    <GridItem span={4}>span = 4</GridItem>\n  </Grid>\n);","title":"With gutters","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsGridReactDocs} {...{"code":"import React from 'react';\nimport { Grid, GridItem } from '@patternfly/react-core';\n\nGridWithOverridesExample = () => (\n  <Grid sm={6} md={4} lg={3} xl2={1}>\n    <GridItem span={3} rowSpan={2}>\n      span = 3 rowSpan= 2\n    </GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n    <GridItem>Grid Item</GridItem>\n  </Grid>\n);","title":"With overrides","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationLayoutsGridReactDocs.Component.displayName = 'DocumentationLayoutsGridReactDocs';
