import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsExpandableSectionReactDocs = {
  "slug": "/documentation/components/expandable-section/react",
  "source": "react",
  "propComponents": [
    "ExpandableSection"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/ExpandableSection/examples/ExpandableSection.md",
  "section": "components",
  "id": "Expandable section",
  "title": "Expandable section",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-expandable-section"
};
DocumentationComponentsExpandableSectionReactDocs.liveContext = {
  
};
DocumentationComponentsExpandableSectionReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsExpandableSectionReactDocs} {...{"code":"import React from 'react';\nimport { ExpandableSection } from '@patternfly/react-core';\n\nclass SimpleExpandableSection extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isExpanded: false\n    };\n    this.onToggle = (isExpanded) => {\n      this.setState({\n        isExpanded\n      });\n    };\n  }\n\n  render() {\n    const { isExpanded } = this.state;\n    return (\n      <ExpandableSection toggleText={isExpanded ? 'Show Less' : 'Show More'} onToggle={this.onToggle} isExpanded={isExpanded}>\n        This content is visible only when the component is expanded.\n      </ExpandableSection>\n    );\n  }\n}","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsExpandableSectionReactDocs} {...{"code":"import React from 'react';\nimport { ExpandableSection } from '@patternfly/react-core';\n\n\nUncontrolledExpandable = () => (\n  <ExpandableSection toggleText=\"Show More\">\n    This content is visible only when the component is expanded.\n</ExpandableSection>\n)","title":"Uncontrolled","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsExpandableSectionReactDocs} {...{"code":"import React from 'react';\nimport { ExpandableSection } from '@patternfly/react-core';\n\n\nUncontrolledWithToggleExpandable = () => (\n  <ExpandableSection toggleTextExpanded=\"Show Less\" toggleTextCollapsed=\"Show More\">\n    This content is visible only when the component is expanded.\n  </ExpandableSection>\n)","title":"Uncontrolled with dynamic toggle text","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsExpandableSectionReactDocs.Component.displayName = 'DocumentationComponentsExpandableSectionReactDocs';
