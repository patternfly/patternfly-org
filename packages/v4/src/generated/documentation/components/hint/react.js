import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsHintReactDocs = {
  "slug": "/documentation/components/hint/react",
  "source": "react",
  "propComponents": [
    "Hint",
    "HintTitle",
    "HintBody",
    "HintFooter"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Hint/examples/Hint.md",
  "section": "components",
  "id": "Hint",
  "title": "Hint",
  "toc": [
    "Examples"
  ],
  "cssPrefix": null
};
DocumentationComponentsHintReactDocs.liveContext = {
  
};
DocumentationComponentsHintReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsHintReactDocs} {...{"code":"import React from 'react';\nimport {\n  Hint,\n  HintTitle,\n  HintBody,\n  HintFooter,\n  Button,\n  Dropdown,\n  DropdownToggle,\n  DropdownItem,\n  DropdownSeparator,\n  DropdownPosition,\n  DropdownDirection,\n  KebabToggle\n} from '@patternfly/react-core';\n\nclass BasicHint extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false\n    };\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n    this.onSelect = event => {\n      this.setState({\n        isOpen: !this.state.isOpen\n      });\n    };\n  }\n\n  render() {\n    const { isOpen } = this.state;\n    const dropdownItems = [\n      <DropdownItem key=\"link\">Link</DropdownItem>,\n      <DropdownItem key=\"action\" component=\"button\">\n        Action\n      </DropdownItem>,\n      <DropdownItem key=\"disabled link\" isDisabled>\n        Disabled Link\n      </DropdownItem>,\n      <DropdownItem key=\"disabled action\" isDisabled component=\"button\">\n        Disabled Action\n      </DropdownItem>,\n      <DropdownSeparator key=\"separator\" />,\n      <DropdownItem key=\"separated link\">Separated Link</DropdownItem>,\n      <DropdownItem key=\"separated action\" component=\"button\">\n        Separated Action\n      </DropdownItem>\n    ];\n    const actions = (\n      <Dropdown\n        onSelect={this.onSelect}\n        toggle={<KebabToggle onToggle={this.onToggle} id=\"hint-kebab-toggle\" />}\n        isOpen={isOpen}\n        dropdownItems={dropdownItems}\n        position=\"right\"\n        isPlain\n      />\n    );\n    return (\n      <Hint actions={actions}>\n        <HintTitle>Do more with Find it Fix it capabilities</HintTitle>\n        <HintBody>\n          Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.\n        </HintBody>\n        <HintFooter>\n          <Button variant=\"link\" isInline>\n            Try it for 90 days\n          </Button>\n        </HintFooter>\n      </Hint>\n    );\n  }\n}","title":"Basic with title","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsHintReactDocs} {...{"code":"import React from 'react';\nimport {\n  Hint,\n  HintBody,\n  HintFooter,\n  Button,\n  Dropdown,\n  DropdownToggle,\n  DropdownItem,\n  DropdownSeparator,\n  DropdownPosition,\n  DropdownDirection,\n  KebabToggle\n} from '@patternfly/react-core';\n\nclass BasicHint extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false\n    };\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n    this.onSelect = event => {\n      this.setState({\n        isOpen: !this.state.isOpen\n      });\n    };\n  }\n\n  render() {\n    const { isOpen } = this.state;\n    const dropdownItems = [\n      <DropdownItem key=\"link\">Link</DropdownItem>,\n      <DropdownItem key=\"action\" component=\"button\">\n        Action\n      </DropdownItem>,\n      <DropdownItem key=\"disabled link\" isDisabled>\n        Disabled Link\n      </DropdownItem>,\n      <DropdownItem key=\"disabled action\" isDisabled component=\"button\">\n        Disabled Action\n      </DropdownItem>,\n      <DropdownSeparator key=\"separator\" />,\n      <DropdownItem key=\"separated link\">Separated Link</DropdownItem>,\n      <DropdownItem key=\"separated action\" component=\"button\">\n        Separated Action\n      </DropdownItem>\n    ];\n    const actions = (\n      <Dropdown\n        onSelect={this.onSelect}\n        toggle={<KebabToggle onToggle={this.onToggle} id=\"hint-notitle-kebab-toggle\" />}\n        isOpen={isOpen}\n        dropdownItems={dropdownItems}\n        position=\"right\"\n        isPlain\n      />\n    );\n    return (\n      <React.Fragment>\n        <Hint>\n          <HintBody>\n            Welcome to the new documentation experience.\n            <Button variant=\"link\" isInline>\n              Learn more about the improved features.\n            </Button>\n          </HintBody>\n        </Hint>\n        <br />\n        <Hint actions={actions}>\n          <HintBody>\n            Upgrade to Red Hat Smart Management to remediate all your systems across regions and geographies.\n          </HintBody>\n          <HintFooter>\n            <Button variant=\"link\" isInline>\n              Try it for 90 days\n            </Button>\n          </HintFooter>\n        </Hint>\n      </React.Fragment>\n    );\n  }\n}","title":"Basic without title","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsHintReactDocs.Component.displayName = 'DocumentationComponentsHintReactDocs';
