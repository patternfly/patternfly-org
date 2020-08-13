import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import {
  Title,
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  EmptyStatePrimary
} from '@patternfly/react-core';
import { CubesIcon, SearchIcon } from '@patternfly/react-icons';

export const DocumentationComponentsEmptyStateReactDocs = {
  "slug": "/documentation/components/empty-state/react",
  "source": "react",
  "propComponents": [
    "EmptyState",
    "EmptyStateBody",
    "EmptyStateIcon",
    "EmptyStateSecondaryActions"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/EmptyState/examples/EmptyState.md",
  "section": "components",
  "id": "Empty state",
  "title": "Empty state",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-empty-state"
};
DocumentationComponentsEmptyStateReactDocs.liveContext = {
  Title,
  Button,
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  EmptyStatePrimary,
  CubesIcon,
  SearchIcon
};
DocumentationComponentsEmptyStateReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsEmptyStateReactDocs} {...{"code":"import React from 'react';\nimport {\n  Title,\n  Button,\n  EmptyState,\n  EmptyStateVariant,\n  EmptyStateIcon,\n  EmptyStateBody,\n  EmptyStateSecondaryActions\n} from '@patternfly/react-core';\nimport { CubesIcon } from '@patternfly/react-icons';\n\nSimpleEmptyState = () => (\n  <EmptyState variant={EmptyStateVariant.small}>\n    <EmptyStateIcon icon={CubesIcon} />\n    <Title headingLevel=\"h4\" size=\"lg\">\n      Empty State\n    </Title>\n    <EmptyStateBody>\n      This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible\n      enough to meet a variety of needs.\n    </EmptyStateBody>\n    <Button variant=\"primary\">Primary Action</Button>\n    <EmptyStateSecondaryActions>\n      <Button variant=\"link\">Multiple</Button>\n      <Button variant=\"link\">Action Buttons</Button>\n      <Button variant=\"link\">Can</Button>\n      <Button variant=\"link\">Go here</Button>\n      <Button variant=\"link\">In the secondary</Button>\n      <Button variant=\"link\">Action area</Button>\n    </EmptyStateSecondaryActions>\n  </EmptyState>\n);","title":"Small","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsEmptyStateReactDocs} {...{"code":"import React from 'react';\nimport {\n  Title,\n  Button,\n  EmptyState,\n  EmptyStateVariant,\n  EmptyStateIcon,\n  EmptyStateBody,\n  EmptyStateSecondaryActions\n} from '@patternfly/react-core';\nimport { CubesIcon } from '@patternfly/react-icons';\n\nSimpleEmptyState = () => (\n  <EmptyState variant={EmptyStateVariant.large}>\n    <EmptyStateIcon icon={CubesIcon} />\n    <Title headingLevel=\"h4\" size=\"lg\">\n      Empty State\n    </Title>\n    <EmptyStateBody>\n      This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible\n      enough to meet a variety of needs.\n    </EmptyStateBody>\n    <Button variant=\"primary\">Primary Action</Button>\n    <EmptyStateSecondaryActions>\n      <Button variant=\"link\">Multiple</Button>\n      <Button variant=\"link\">Action Buttons</Button>\n      <Button variant=\"link\">Can</Button>\n      <Button variant=\"link\">Go here</Button>\n      <Button variant=\"link\">In the secondary</Button>\n      <Button variant=\"link\">Action area</Button>\n    </EmptyStateSecondaryActions>\n  </EmptyState>\n);","title":"Large","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsEmptyStateReactDocs} {...{"code":"import React from 'react';\nimport {\n  Title,\n  Button,\n  EmptyState,\n  EmptyStateIcon,\n  EmptyStateBody,\n  EmptyStateSecondaryActions\n} from '@patternfly/react-core';\nimport { CubesIcon } from '@patternfly/react-icons';\n\nSimpleEmptyState = () => (\n  <EmptyState>\n    <EmptyStateIcon icon={CubesIcon} />\n    <Title headingLevel=\"h4\" size=\"lg\">\n      Empty State\n    </Title>\n    <EmptyStateBody>\n      This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible\n      enough to meet a variety of needs.\n    </EmptyStateBody>\n    <Button variant=\"primary\">Primary Action</Button>\n    <EmptyStateSecondaryActions>\n      <Button variant=\"link\">Multiple</Button>\n      <Button variant=\"link\">Action Buttons</Button>\n      <Button variant=\"link\">Can</Button>\n      <Button variant=\"link\">Go here</Button>\n      <Button variant=\"link\">In the secondary</Button>\n      <Button variant=\"link\">Action area</Button>\n    </EmptyStateSecondaryActions>\n  </EmptyState>\n);","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsEmptyStateReactDocs} {...{"code":"import React from 'react';\nimport {\n  Title,\n  Button,\n  EmptyState,\n  EmptyStateVariant,\n  EmptyStateIcon,\n  EmptyStateBody,\n  EmptyStateSecondaryActions\n} from '@patternfly/react-core';\nimport { CubesIcon } from '@patternfly/react-icons';\n\nSimpleEmptyState = () => (\n  <EmptyState variant={EmptyStateVariant.xl}>\n    <EmptyStateIcon icon={CubesIcon} />\n    <Title headingLevel=\"h5\" size=\"4xl\">\n      Empty State\n    </Title>\n    <EmptyStateBody>\n      This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible\n      enough to meet a variety of needs.\n    </EmptyStateBody>\n    <Button variant=\"primary\">Primary Action</Button>\n    <EmptyStateSecondaryActions>\n      <Button variant=\"link\">Multiple</Button>\n      <Button variant=\"link\">Action Buttons</Button>\n      <Button variant=\"link\">Can</Button>\n      <Button variant=\"link\">Go here</Button>\n      <Button variant=\"link\">In the secondary</Button>\n      <Button variant=\"link\">Action area</Button>\n    </EmptyStateSecondaryActions>\n  </EmptyState>\n);","title":"Extra Large","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsEmptyStateReactDocs} {...{"code":"import React from 'react';\nimport {\n  Title,\n  Button,\n  EmptyState,\n  EmptyStateVariant,\n  EmptyStateIcon,\n  EmptyStateBody,\n  EmptyStateSecondaryActions\n} from '@patternfly/react-core';\nimport { CubesIcon } from '@patternfly/react-icons';\n\nSimpleEmptyState = () => (\n  <EmptyState variant={EmptyStateVariant.xl}>\n    <EmptyStateIcon icon={CubesIcon} />\n    <Title headingLevel=\"h5\" size=\"4xl\">\n      Empty State\n    </Title>\n    <EmptyStateBody>\n      This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible\n      enough to meet a variety of needs.\n    </EmptyStateBody>\n    <Button variant=\"primary\">Primary Action</Button>\n    <EmptyStateSecondaryActions>\n      <Button variant=\"link\">Multiple</Button>\n      <Button variant=\"link\">Action Buttons</Button>\n      <Button variant=\"link\">Can</Button>\n      <Button variant=\"link\">Go here</Button>\n      <Button variant=\"link\">In the secondary</Button>\n      <Button variant=\"link\">Action area</Button>\n    </EmptyStateSecondaryActions>\n  </EmptyState>\n);","title":"Extra Large","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsEmptyStateReactDocs} {...{"code":"import React from 'react';\nimport {\n  Title,\n  Button,\n  EmptyState,\n  EmptyStateIcon,\n  EmptyStateBody,\n  EmptyStateSecondaryActions\n} from '@patternfly/react-core';\n\n\nEmptyStateSpinner = () => {\n  const Spinner = () => (\n    <span className=\"pf-c-spinner\" role=\"progressbar\" aria-valuetext=\"Loading...\">\n      <span className=\"pf-c-spinner__clipper\" />\n      <span className=\"pf-c-spinner__lead-ball\" />\n      <span className=\"pf-c-spinner__tail-ball\" />\n    </span>\n  )\n  return (\n    <EmptyState>\n      <EmptyStateIcon variant=\"container\" component={Spinner} />\n      <Title size=\"lg\" headingLevel=\"h4\">\n        Loading\n      </Title>\n    </EmptyState>\n  );\n}","title":"Spinner","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsEmptyStateReactDocs} {...{"code":"import React from 'react';\nimport {\n  Title,\n  Button,\n  EmptyState,\n  EmptyStatePrimary,\n  EmptyStateIcon,\n  EmptyStateBody,\n  EmptyStateSecondaryActions\n} from '@patternfly/react-core';\nimport { SearchIcon } from '@patternfly/react-icons';\n\n\nNoMatchEmptyState = () => {\n  return (\n    <EmptyState>\n      <EmptyStateIcon icon={SearchIcon} />\n      <Title size=\"lg\" headingLevel=\"h4\">\n        No results found\n      </Title>\n      <EmptyStateBody>\n        No results match the filter criteria. Remove all filters or clear all filters to show results.\n      </EmptyStateBody>\n      <EmptyStatePrimary>\n        <Button variant=\"link\">Clear all filters</Button>\n      </EmptyStatePrimary>\n    </EmptyState>\n  );\n}","title":"No match found","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsEmptyStateReactDocs.Component.displayName = 'DocumentationComponentsEmptyStateReactDocs';
