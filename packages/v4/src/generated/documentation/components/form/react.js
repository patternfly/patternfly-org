import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import {
Button,
Form,
FormGroup,
Popover,
TextInput,
TextArea,
FormSelect,
FormHelperText,
Checkbox,
ActionGroup,
Radio
} from '@patternfly/react-core';
import { ExclamationCircleIcon, HelpIcon } from '@patternfly/react-icons';

export const DocumentationComponentsFormReactDocs = {
  "slug": "/documentation/components/form/react",
  "source": "react",
  "propComponents": [
    "ActionGroup",
    "Form",
    "FormGroup",
    "FormHelperText",
    "Button",
    "Popover"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Form/examples/Form.md",
  "section": "components",
  "id": "Form",
  "title": "Form",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-form"
};
DocumentationComponentsFormReactDocs.liveContext = {
  Button,
  Form,
  FormGroup,
  Popover,
  TextInput,
  TextArea,
  FormSelect,
  FormHelperText,
  Checkbox,
  ActionGroup,
  Radio,
  ExclamationCircleIcon,
  HelpIcon
};
DocumentationComponentsFormReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsFormReactDocs} {...{"code":"import React from 'react';\nimport {\n  Form,\n  FormGroup,\n  TextInput,\n  TextArea,\n  FormSelect,\n  Checkbox,\n  Popover,\n  ActionGroup,\n  Button,\n  Radio\n} from '@patternfly/react-core';\nimport { HelpIcon } from '@patternfly/react-icons';\n\nclass SimpleForm extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value1: '',\n      value2: '',\n      value3: ''\n    };\n    this.handleTextInputChange1 = value1 => {\n      this.setState({ value1 });\n    };\n    this.handleTextInputChange2 = value2 => {\n      this.setState({ value2 });\n    };\n    this.handleTextInputChange3 = value3 => {\n      this.setState({ value3 });\n    };\n  }\n\n  render() {\n    const { value1, value2, value3 } = this.state;\n\n    return (\n      <Form>\n        <FormGroup\n          label=\"Name\"\n          labelIcon={\n            <Popover\n              headerContent={\n                <div>\n                  The <a href=\"https://schema.org/name\">name</a> of a <a href=\"https://schema.org/Person\">Person</a>\n                </div>\n              }\n              bodyContent={\n                <div>\n                  Often composed of{' '}\n                  <a href=\"https://schema.org/givenName\" target=\"_blank\">\n                    givenName\n                  </a>{' '}\n                  and{' '}\n                  <a href=\"https://schema.org/familyName\" target=\"_blank\">\n                    familyName\n                  </a>\n                  .\n                </div>\n              }\n            >\n              <button\n                aria-label=\"More info for name field\"\n                onClick={e => e.preventDefault()}\n                aria-describedby=\"simple-form-name\"\n                className=\"pf-c-form__group-label-help\"\n              >\n                <HelpIcon noVerticalAlign />\n              </button>\n            </Popover>\n          }\n          isRequired\n          fieldId=\"simple-form-name\"\n          helperText=\"Please provide your full name\"\n        >\n          <TextInput\n            isRequired\n            type=\"text\"\n            id=\"simple-form-name\"\n            name=\"simple-form-name\"\n            aria-describedby=\"simple-form-name-helper\"\n            value={value1}\n            onChange={this.handleTextInputChange1}\n          />\n        </FormGroup>\n        <FormGroup label=\"Email\" isRequired fieldId=\"simple-form-email\">\n          <TextInput\n            isRequired\n            type=\"email\"\n            id=\"simple-form-email\"\n            name=\"simple-form-email\"\n            value={value2}\n            onChange={this.handleTextInputChange2}\n          />\n        </FormGroup>\n        <FormGroup label=\"Phone number\" isRequired fieldId=\"simple-form-number\">\n          <TextInput\n            isRequired\n            type=\"tel\"\n            id=\"simple-form-number\"\n            placeholder=\"555-555-5555\"\n            name=\"simple-form-number\"\n            value={value3}\n            onChange={this.handleTextInputChange3}\n          />\n        </FormGroup>\n        <FormGroup isInline label=\"How can we contact you?\" isRequired>\n          <Checkbox label=\"Email\" aria-label=\"Email\" id=\"inlinecheck1\" />\n          <Checkbox label=\"Phone\" aria-label=\"Phone\" id=\"inlinecheck2\" />\n          <Checkbox label=\"Please don't contact me\" aria-label=\"Please don't contact me\" id=\"inlinecheck3\" />\n        </FormGroup>\n        <FormGroup label=\"Additional Note\" fieldId=\"simple-form-note\">\n          <TextInput isDisabled type=\"text\" id=\"simple-form-note\" name=\"simple-form-number\" value=\"disabled\" />\n        </FormGroup>\n        <FormGroup fieldId=\"checkbox1\">\n          <Checkbox label=\"I'd like updates via email\" id=\"checkbox1\" name=\"checkbox1\" aria-label=\"Update via email\" />\n        </FormGroup>\n        <ActionGroup>\n          <Button variant=\"primary\">Submit form</Button>\n          <Button variant=\"link\">Cancel</Button>\n        </ActionGroup>\n      </Form>\n    );\n  }\n}","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsFormReactDocs} {...{"code":"import React from 'react';\nimport {\n  Form,\n  FormGroup,\n  TextInput,\n  TextArea,\n  FormSelect,\n  FormSelectOption,\n  Checkbox,\n  ActionGroup,\n  Button,\n  Radio\n} from '@patternfly/react-core';\n\nclass HorizontalForm extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 'please choose',\n      value1: '',\n      value2: '',\n      value3: ''\n    };\n    this.onChange = (value, event) => {\n      this.setState({ value });\n    };\n    this.handleTextInputChange1 = value1 => {\n      this.setState({ value1 });\n    };\n    this.handleTextInputChange2 = value2 => {\n      this.setState({ value2 });\n    };\n    this.handleTextInputChange3 = value3 => {\n      this.setState({ value3 });\n    };\n    this.options = [\n      { value: 'please choose', label: 'Please Choose', disabled: false },\n      { value: 'mr', label: 'Mr', disabled: false },\n      { value: 'miss', label: 'Miss', disabled: false },\n      { value: 'mrs', label: 'Mrs', disabled: false },\n      { value: 'ms', label: 'Ms', disabled: false },\n      { value: 'dr', label: 'Dr', disabled: false },\n      { value: 'other', label: 'Other', disabled: false }\n    ];\n  }\n\n  render() {\n    const { value1, value2, value3 } = this.state;\n\n    return (\n      <Form isHorizontal>\n        <FormGroup label=\"Name\" isRequired fieldId=\"horizontal-form-name\" helperText=\"Please provide your full name\">\n          <TextInput\n            value={value1}\n            isRequired\n            type=\"text\"\n            id=\"horizontal-form-name\"\n            aria-describedby=\"horizontal-form-name-helper\"\n            name=\"horizontal-form-name\"\n            onChange={this.handleTextInputChange1}\n          />\n        </FormGroup>\n        <FormGroup label=\"Email\" isRequired fieldId=\"horizontal-form-email\">\n          <TextInput\n            value={value2}\n            onChange={this.handleTextInputChange2}\n            isRequired\n            type=\"email\"\n            id=\"horizontal-form-email\"\n            name=\"horizontal-form-email\"\n          />\n        </FormGroup>\n        <FormGroup label=\"Your title\" fieldId=\"horizontal-form-title\">\n          <FormSelect\n            value={this.state.value}\n            onChange={this.onChange}\n            id=\"horzontal-form-title\"\n            name=\"horizontal-form-title\"\n            aria-label=\"Your title\"\n          >\n            {this.options.map((option, index) => (\n              <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />\n            ))}\n          </FormSelect>\n        </FormGroup>\n        <FormGroup label=\"Your experience\" fieldId=\"horizontal-form-exp\">\n          <TextArea\n            value={value3}\n            onChange={this.handleTextInputChange3}\n            name=\"horizontal-form-exp\"\n            id=\"horizontal-form-exp\"\n          />\n        </FormGroup>\n        <FormGroup>\n          <Checkbox label=\"Follow up via email\" id=\"alt-form-checkbox-1\" name=\"alt-form-checkbox-1\" />\n        </FormGroup>\n        <FormGroup>\n          <Checkbox label=\"Remember my password for 30 days\" id=\"alt-form-checkbox-2\" name=\"alt-form-checkbox-2\" />\n        </FormGroup>\n        <ActionGroup>\n          <Button variant=\"primary\">Submit form</Button>\n          <Button variant=\"link\">Cancel</Button>\n        </ActionGroup>\n      </Form>\n    );\n  }\n}","title":"Horizontal","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsFormReactDocs} {...{"code":"import React from 'react';\nimport {\n  Form,\n  FormGroup,\n  TextInput,\n  TextArea,\n  FormSelect,\n  FormHelperText,\n  Checkbox,\n  ActionGroup,\n  Button,\n  Radio\n} from '@patternfly/react-core';\nimport { ExclamationCircleIcon } from '@patternfly/react-icons';\n\nclass InvalidForm extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: 'Five',\n      validated: 'error'\n    };\n    this.handleTextInputChange = value => {\n      this.setState({ value, validated: value === '' ? 'noval' : /^\\d+$/.test(value) ? 'success' : 'error' });\n    };\n  }\n\n  render() {\n    const { value, validated } = this.state;\n\n    return (\n      <Form>\n        <FormGroup\n          label=\"Age\"\n          type=\"number\"\n          helperText={\n            <FormHelperText icon={<ExclamationCircleIcon />} isHidden={validated !== 'noval'}>\n              Please enter your age\n            </FormHelperText>\n          }\n          helperTextInvalid=\"Age has to be a number\"\n          helperTextInvalidIcon={<ExclamationCircleIcon />}\n          fieldId=\"age-1\"\n          validated={validated}\n        >\n          <TextInput\n            validated={validated}\n            value={value}\n            id=\"age-1\"\n            aria-describedby=\"age-1-helper\"\n            onChange={this.handleTextInputChange}\n          />\n        </FormGroup>\n      </Form>\n    );\n  }\n}","title":"Invalid","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsFormReactDocs} {...{"code":"import React from 'react';\nimport {\n  Form,\n  FormGroup,\n  TextInput,\n  TextArea,\n  FormSelect,\n  Checkbox,\n  ActionGroup,\n  Button,\n  Radio\n} from '@patternfly/react-core';\nimport { ExclamationCircleIcon } from '@patternfly/react-icons';\n\nclass InvalidForm extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: '',\n      invalidText: 'Age has to be a number',\n      validated: 'default',\n      helperText: 'Enter your age to continue'\n    };\n\n    this.simulateNetworkCall = callback => {\n      setTimeout(callback, 2000);\n    };\n\n    this.handleTextInputChange = value => {\n      this.setState(\n        { value, validated: 'default', helperText: 'Validating...' },\n        this.simulateNetworkCall(() => {\n          if (/^\\d+$/.test(value)) {\n            if (parseInt(value, 10) >= 21) {\n              this.setState({ validated: 'success', helperText: 'Enjoy your stay' });\n            } else {\n              this.setState({ validated: 'warning', helperText: 'You must be at least 21 to continue' });\n            }\n          } else {\n            this.setState({ validated: 'error', invalidText: 'Age has to be a number' });\n          }\n        })\n      );\n    };\n  }\n\n  render() {\n    const { value, validated, helperText, invalidText } = this.state;\n\n    return (\n      <Form>\n        <FormGroup\n          label=\"Age\"\n          type=\"number\"\n          helperText={helperText}\n          helperTextInvalid={invalidText}\n          helperTextInvalidIcon={<ExclamationCircleIcon />}\n          fieldId=\"age-2\"\n          validated={validated}\n        >\n          <TextInput\n            validated={validated}\n            value={value}\n            id=\"age-2\"\n            aria-describedby=\"age-2-helper\"\n            onChange={this.handleTextInputChange}\n          />\n        </FormGroup>\n      </Form>\n    );\n  }\n}","title":"Validated","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsFormReactDocs} {...{"code":"import React from 'react';\nimport { Form, FormGroup, Checkbox, Radio } from '@patternfly/react-core';\n\nclass HorizontalForm extends React.Component {\n  render() {\n    return (\n      <Form isHorizontal>\n        <FormGroup label=\"Label\" hasNoPaddingTop fieldId=\"options\">\n          <Checkbox label=\"option 1\" id=\"option-1\" />\n          <Checkbox label=\"option 2\" id=\"option-2\" />\n        </FormGroup>\n      </Form>\n    );\n  }\n}","title":"Horizontal no padding top","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsFormReactDocs.Component.displayName = 'DocumentationComponentsFormReactDocs';
