import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/react-core/src/components/Checkbox/examples/./checkbox.css';

export const DocumentationComponentsCheckboxReactDocs = {
  "slug": "/documentation/components/checkbox/react",
  "source": "react",
  "propComponents": [
    "Checkbox"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Checkbox/examples/Checkbox.md",
  "section": "components",
  "id": "Checkbox",
  "title": "Checkbox",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-check"
};
DocumentationComponentsCheckboxReactDocs.liveContext = {
  
};
DocumentationComponentsCheckboxReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsCheckboxReactDocs} {...{"code":"import React from 'react';\nimport { Checkbox } from '@patternfly/react-core';\n\nclass ControlledCheckbox extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      check1: false,\n      check2: false,\n      check3: false,\n      check4: false\n    };\n    this.handleChange = (checked, event) => {\n      const target = event.target;\n      const value = target.type === 'checkbox' ? target.checked : target.value;\n      const name = target.name;\n      this.setState({ [name]: value });\n    };\n  }\n\n  componentDidUpdate(_prevProps, prevState) {\n    if (prevState.check1 !== this.state.check1 && this.state.check1 !== null) {\n      this.setState({\n        check2: this.state.check1,\n        check3: this.state.check1,\n      })\n    }\n\n    if (prevState.check2 !== this.state.check2 || prevState.check3 !== this.state.check3) {\n      this.setState({\n        check1: (this.state.check2 && this.state.check3) || (this.state.check2 || this.state.check3 ? null : false)\n      })\n    }\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <Checkbox\n          label=\"Parent CheckBox\"\n          isChecked={this.state.check1}\n          onChange={this.handleChange}\n          aria-label=\"controlled checkbox example\"\n          id=\"check-1\"\n          name=\"check1\"\n        />\n        <Checkbox\n          className=\"nested\"\n          label=\"Child CheckBox 1\"\n          isChecked={this.state.check2}\n          onChange={this.handleChange}\n          aria-label=\"controlled checkbox example\"\n          id=\"check-2\"\n          name=\"check2\"\n        />\n        <Checkbox\n          className=\"nested\"\n          label=\"Child CheckBox 2\"\n          isChecked={this.state.check3}\n          onChange={this.handleChange}\n          aria-label=\"controlled checkbox example\"\n          id=\"check-3\"\n          name=\"check3\"\n        />\n        <Checkbox\n          label=\"Controlled CheckBox\"\n          isChecked={this.state.check4}\n          onChange={this.handleChange}\n          aria-label=\"controlled checkbox example\"\n          id=\"check-4\"\n          name=\"check4\"\n        />\n      </React.Fragment>\n    );\n  }\n}","title":"Controlled","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsCheckboxReactDocs} {...{"code":"import React from 'react';\nimport { Checkbox } from '@patternfly/react-core';\n\nUncontrolledCheckbox = () => (\n  <React.Fragment>\n    <Checkbox label=\"Uncontrolled CheckBox\" aria-label=\"uncontrolled checkbox example\" id=\"check-5\" />\n    <Checkbox label=\"Uncontrolled CheckBox\" aria-label=\"uncontrolled checkbox example\" id=\"check-6\" />\n  </React.Fragment>\n);","title":"Uncontrolled","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsCheckboxReactDocs} {...{"code":"import React from 'react';\nimport { Checkbox } from '@patternfly/react-core';\n\nDisabledCheckbox = () => (\n  <React.Fragment>\n    <Checkbox\n      id=\"check-7\"\n      label=\"Disabled CheckBox\"\n      aria-label=\"disabled checked checkbox example\"\n      defaultChecked\n      isDisabled\n    />{' '}\n    <Checkbox id=\"check-8\" label=\"Disabled CheckBox\" aria-label=\"disabled checkbox example\" isDisabled />\n  </React.Fragment>\n);","title":"Disabled","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsCheckboxReactDocs} {...{"code":"import React from 'react';\nimport { Checkbox } from '@patternfly/react-core';\n\nDisabledCheckbox = () => (\n  <Checkbox id=\"check-8\" label=\"CheckBox with description\" aria-label=\"Checkbox with description example\" description=\"Description\"/>\n);","title":"Checkbox with description","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsCheckboxReactDocs.Component.displayName = 'DocumentationComponentsCheckboxReactDocs';
