import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsTextAreaReactDocs = {
  "slug": "/documentation/components/text-area/react",
  "source": "react",
  "propComponents": [
    "TextArea"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/TextArea/examples/TextArea.md",
  "section": "components",
  "id": "Text area",
  "title": "Text area",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-form-control"
};
DocumentationComponentsTextAreaReactDocs.liveContext = {
  
};
DocumentationComponentsTextAreaReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsTextAreaReactDocs} {...{"code":"import React from 'react';\nimport { TextArea } from '@patternfly/react-core';\n\nclass SimpleTextArea extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: ''\n    };\n\n    this.handleTextAreaChange = value => {\n      this.setState({ value });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n\n    return <TextArea value={value} onChange={this.handleTextAreaChange} aria-label=\"text area example\" />;\n  }\n}","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsTextAreaReactDocs} {...{"code":"import React from 'react';\nimport { TextArea } from '@patternfly/react-core';\n\nclass InvalidTextArea extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: ''\n    };\n    \n    this.handleInvalidTextAreaChange = value => {\n      this.setState({ value });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n\n    return (\n      <TextArea\n        value={value}\n        onChange={this.handleInvalidTextAreaChange}\n        isRequired\n        validated={'error'}\n        aria-label=\"invalid text area example\"\n      />\n    );\n  }\n}","title":"Invalid","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsTextAreaReactDocs} {...{"code":"import React from 'react';\nimport { Form, FormGroup, TextArea } from '@patternfly/react-core';\n\nclass InvalidTextArea extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: '',\n      invalidText: 'You must have something to say',\n      validated: 'default',\n      helperText: 'Enter comments'\n    };\n    \n    this.simulateNetworkCall = callback => {\n      setTimeout(callback, 2000);\n    }\n    \n    this.handleTextAreaChange = value => {\n\n      this.setState({\n        value,\n        validated: 'default',\n        helperText: 'Validating...',\n      },\n        this.simulateNetworkCall(() => {\n          if (value && value.length > 0) {\n            if (value.length >= 10) {\n              this.setState({validated: 'success', helperText: 'Thanks for your comments!'});\n            } else {\n              this.setState({validated: 'error', invalidText: 'Your being too brief, please enter at least 10 characters.'});\n            }\n          }\n          else {\n            this.setState({validated: 'warning', helperText: 'You must have something to say'});\n          }\n        })\n      );\n    };\n  }\n\n  render() {\n    const { value, validated, helperText, invalidText } = this.state;\n\n    return (\n      <Form>\n        <FormGroup\n          label=\"Comments:\"\n          type=\"string\"\n          helperText={helperText}\n          helperTextInvalid={invalidText}\n          fieldId=\"selection\"\n          validated={validated}\n        >\n          <TextArea\n            value={value}\n            onChange={this.handleTextAreaChange}\n            isRequired\n            validated={validated}\n            aria-label=\"invalid text area example\"\n          />\n        </FormGroup>\n      </Form>\n    );\n  }\n}","title":"Validated","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsTextAreaReactDocs} {...{"code":"import React from 'react';\nimport { TextArea } from '@patternfly/react-core';\n\nclass VerticalResizeTextArea extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: ''\n    };\n\n    this.handleTextAreaChange = value => {\n      this.setState({ value });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n\n    return <TextArea value={value} onChange={this.handleTextAreaChange} resizeOrientation='vertical' aria-label=\"text vertical resize example\" />;\n  }\n}","title":"Vertically resizable text area","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsTextAreaReactDocs} {...{"code":"import React from 'react';\nimport { TextArea } from '@patternfly/react-core';\n\nclass horizontalResizeTextArea extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: ''\n    };\n\n    this.handleTextAreaChange = value => {\n      this.setState({ value });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n\n    return <TextArea value={value} onChange={this.handleTextAreaChange} resizeOrientation='horizontal' aria-label=\"text horizontal resize example\" />;\n  }\n}","title":"Horizontally resizable text area","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsTextAreaReactDocs} {...{"code":"import React from 'react';\nimport { TextArea } from '@patternfly/react-core';\n\nUncontrolledTextArea = () => (\n  <TextArea defaultValue=\"default value\" aria-label=\"uncontrolled text area example\" />\n)","title":"Uncontrolled","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsTextAreaReactDocs.Component.displayName = 'DocumentationComponentsTextAreaReactDocs';
