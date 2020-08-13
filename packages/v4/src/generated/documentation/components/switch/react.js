import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsSwitchReactDocs = {
  "slug": "/documentation/components/switch/react",
  "source": "react",
  "propComponents": [
    "Switch"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Switch/examples/Switch.md",
  "section": "components",
  "id": "Switch",
  "title": "Switch",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-switch"
};
DocumentationComponentsSwitchReactDocs.liveContext = {
  
};
DocumentationComponentsSwitchReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsSwitchReactDocs} {...{"code":"import React from 'react';\nimport { Switch } from '@patternfly/react-core';\n\nclass SimpleSwitch extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isChecked: true\n    };\n    this.handleChange = isChecked => {\n      this.setState({ isChecked });\n    };\n  }\n\n  render() {\n    const { isChecked } = this.state;\n    return (\n      <Switch\n        id=\"simple-switch\"\n        label=\"Message when on\"\n        labelOff=\"Message when off\"\n        isChecked={isChecked}\n        onChange={this.handleChange}\n      />\n    );\n  }\n}","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsSwitchReactDocs} {...{"code":"import React from 'react';\nimport { Switch } from '@patternfly/react-core';\n\nclass NoLabelSwitch extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isChecked: true\n    };\n    this.handleChange = isChecked => {\n      this.setState({ isChecked });\n    };\n  }\n\n  render() {\n    const { isChecked } = this.state;\n    return (\n      <Switch id=\"no-label-switch-on\" aria-label=\"Message when on\" isChecked={isChecked} onChange={this.handleChange} />\n    );\n  }\n}","title":"Without label","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsSwitchReactDocs} {...{"code":"import React from 'react';\nimport { Switch } from '@patternfly/react-core';\n\nDisabledSwitch = () => (\n  <React.Fragment>\n    <Switch id=\"disabled-switch-on\" aria-label=\"Message when on\" label=\"Message when on\" labelOff=\"Message when off\" isChecked isDisabled />\n    <br />\n    <Switch\n      id=\"disabled-switch-off\"\n      aria-label=\"Message when on\"\n      label=\"Message when on\"\n      labelOff=\"Message when off\"\n      isChecked={false}\n      isDisabled\n    />\n    <br />\n    <Switch id=\"disabled-no-label-switch-on\" aria-label=\"Message when on\" isChecked isDisabled />\n    <br />\n    <Switch id=\"disabled-no-label-switch-off\" aria-label=\"Message when on\" isChecked={false} isDisabled />\n  </React.Fragment>\n);","title":"Disabled","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsSwitchReactDocs} {...{"code":"import React from 'react';\nimport { Switch } from '@patternfly/react-core';\n\nUncontrolledSwitch = () => (\n  <React.Fragment>\n    <Switch id=\"uncontrolled-switch-on\" aria-label=\"Message when on\" label=\"Message when on\" labelOff=\"Message when off\" isChecked />\n    <br />\n    <Switch id=\"uncontrolled-switch-off\" aria-label=\"Message when on\" label=\"Message when on\" labelOff=\"Message when off\" isChecked={false} />\n    <br />\n    <Switch id=\"uncontrolled-no-label-switch-on\" aria-label=\"Message when on\" isChecked />\n    <br />\n    <Switch id=\"uncontrolled-no-label-switch-off\" aria-label=\"Message when on\" isChecked={false} />\n  </React.Fragment>\n);","title":"Uncontrolled","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsSwitchReactDocs.Component.displayName = 'DocumentationComponentsSwitchReactDocs';
