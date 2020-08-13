import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsTextInputReactDocs = {
  "slug": "/documentation/components/text-input/react",
  "source": "react",
  "propComponents": [
    "TextInput"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/TextInput/examples/TextInput.md",
  "section": "components",
  "id": "Text input",
  "title": "Text input",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-form-control"
};
DocumentationComponentsTextInputReactDocs.liveContext = {
  
};
DocumentationComponentsTextInputReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsTextInputReactDocs} {...{"code":"import React from 'react';\nimport { TextInput } from '@patternfly/react-core';\n\nclass SimpleTextInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: ''\n    };\n    this.handleTextInputChange = value => {\n      this.setState({ value });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n\n    return (\n      <TextInput value={value} type=\"text\" onChange={this.handleTextInputChange} aria-label=\"text input example\" />\n    );\n  }\n}","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsTextInputReactDocs} {...{"code":"import React from 'react';\nimport { TextInput } from '@patternfly/react-core';\n\n<TextInput type=\"text\" value=\"disabled text input example\" aria-label=\"disabled text input example\" isDisabled />","title":"Disabled","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsTextInputReactDocs} {...{"code":"import React from 'react';\nimport { TextInput } from '@patternfly/react-core';\n\n<TextInput value=\"read only text input example\" type=\"text\" isReadOnly aria-label=\"readonly input example\" />","title":"Read only","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsTextInputReactDocs} {...{"code":"import React from 'react';\nimport { TextInput, ValidatedOptions } from '@patternfly/react-core';\n\nclass InvalidTextInput extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: ''\n    };\n    this.handleInvalidTextInputChange = value => {\n      this.setState({ value });\n    };\n  }\n\n  render() {\n    const { value } = this.state;\n\n    return (\n      <TextInput\n        value={value}\n        onChange={this.handleInvalidTextInputChange}\n        isRequired\n        validated={ValidatedOptions.error}\n        type=\"text\"\n        aria-label=\"invalid text input example\"\n      />\n    );\n  }\n}","title":"Invalid","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsTextInputReactDocs} {...{"code":"import React from 'react';\nimport { TextInput, Button } from '@patternfly/react-core';\n\nTextInputSelectAll = () => {\n  const [value, setValue] = React.useState('select all on click');\n  const ref = React.useRef(null);\n  return (\n    <React.Fragment>\n      <TextInput ref={ref} value={value} onFocus={() => ref && ref.current && ref.current.select()} onChange={value => setValue(value)} aria-label=\"select-all\" />\n    </React.Fragment>\n  )\n}","title":"Select text using ref","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsTextInputReactDocs.Component.displayName = 'DocumentationComponentsTextInputReactDocs';
