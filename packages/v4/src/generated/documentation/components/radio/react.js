import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsRadioReactDocs = {
  "slug": "/documentation/components/radio/react",
  "source": "react",
  "propComponents": [
    "Radio"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Radio/examples/Radio.md",
  "section": "components",
  "id": "Radio",
  "title": "Radio",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-radio"
};
DocumentationComponentsRadioReactDocs.liveContext = {
  
};
DocumentationComponentsRadioReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsRadioReactDocs} {...{"code":"import React from 'react';\nimport { Radio } from '@patternfly/react-core';\n\nclass ControlledRadio extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      check1: false,\n    };\n\n    this.handleChange = (_, event) => {\n      const { value } = event.currentTarget;\n      this.setState({ [value]: true });\n    };\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <Radio\n          isChecked={this.state.check1}\n          name=\"radio-1\"\n          onChange={this.handleChange}\n          label=\"Controlled radio\"\n          id=\"radio-controlled\"\n          value=\"check1\"\n        />\n      </React.Fragment>\n    );\n  }\n}","title":"Controlled","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsRadioReactDocs} {...{"code":"import React from 'react';\nimport { Radio } from '@patternfly/react-core';\n\nUncontrolledRadio = () => (\n  <React.Fragment>\n    <Radio label=\"Uncontrolled radio example\" id=\"radio-uncontrolled\" name=\"radio-2\" />\n  </React.Fragment>\n);","title":"Uncontrolled","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsRadioReactDocs} {...{"code":"import React from 'react';\nimport { Radio } from '@patternfly/react-core';\n\nReversedRadio = () => (\n  <React.Fragment>\n    <Radio isLabelBeforeButton label=\"Reversed radio example\" id=\"radio-reversed\" name=\"radio-3\" />\n  </React.Fragment>\n);","title":"Reversed","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsRadioReactDocs} {...{"code":"import React from 'react';\nimport { Radio } from '@patternfly/react-core';\n\nLabelWrapsInputRadio = () => (\n  <React.Fragment>\n    <Radio isLabelWrapped label=\"Label wraps input example\" id=\"radio-label-wraps-input\" name=\"radio-4\" />\n  </React.Fragment>\n);","title":"Label wraps","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsRadioReactDocs} {...{"code":"import React from 'react';\nimport { Radio } from '@patternfly/react-core';\n\nDisabledRadio = () => (\n  <React.Fragment>\n    <Radio id=\"radio-disabled\" label=\"Disabled radio example\" isDisabled name=\"radio-5\" />\n    <Radio id=\"radio-disabled-checked\" defaultChecked label=\"Disabled and checked radio example\" isDisabled name=\"radio-6\" />\n  </React.Fragment>\n);","title":"Disabled","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsRadioReactDocs} {...{"code":"import React from 'react';\nimport { Radio } from '@patternfly/react-core';\n\nDisabledRadio = () => (\n  <Radio id=\"radio-with-description\" label=\"Radio with description example\" description=\"Description\" />\n);","title":"With description","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsRadioReactDocs.Component.displayName = 'DocumentationComponentsRadioReactDocs';
