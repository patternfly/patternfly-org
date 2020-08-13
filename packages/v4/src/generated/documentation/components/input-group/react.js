import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { DollarSignIcon, AtIcon, CalendarAltIcon, SearchIcon, QuestionCircleIcon } from '@patternfly/react-icons';
import {
  Button,
  ButtonVariant,
  TextArea,
  InputGroup,
  InputGroupText,
  TextInput,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  Popover,
  PopoverPosition
} from '@patternfly/react-core';

export const DocumentationComponentsInputGroupReactDocs = {
  "slug": "/documentation/components/input-group/react",
  "source": "react",
  "propComponents": [
    "InputGroup",
    "InputGroupText"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/InputGroup/examples/InputGroup.md",
  "section": "components",
  "id": "Input group",
  "title": "Input group",
  "toc": [
    "Examples"
  ],
  "cssPrefix": null
};
DocumentationComponentsInputGroupReactDocs.liveContext = {
  DollarSignIcon,
  AtIcon,
  CalendarAltIcon,
  SearchIcon,
  QuestionCircleIcon,
  Button,
  ButtonVariant,
  TextArea,
  InputGroup,
  InputGroupText,
  TextInput,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  Popover,
  PopoverPosition
};
DocumentationComponentsInputGroupReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsInputGroupReactDocs} {...{"code":"import React from 'react';\nimport { AtIcon, SearchIcon } from '@patternfly/react-icons';\nimport {\n  Button,\n  InputGroup,\n  InputGroupText,\n  TextInput,\n  ValidatedOptions\n} from '@patternfly/react-core';\n\nclass SimpleInputGroups extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <InputGroup>\n          <TextInput id=\"textInput6\" type=\"email\" aria-label=\"email input field\" />\n          <InputGroupText id=\"email-example\">@example.com</InputGroupText>\n        </InputGroup>\n        <br />\n        <InputGroup>\n          <InputGroupText id=\"username\" aria-label=\"@\">\n            <AtIcon />\n          </InputGroupText>\n          <TextInput validated={ValidatedOptions.error} id=\"textInput7\" type=\"email\" aria-label=\"Error state username example\" />\n        </InputGroup>\n        <br />\n        <InputGroup>\n          <TextInput name=\"textInput11\" id=\"textInput11\" type=\"search\" aria-label=\"search input example\" />\n          <Button variant=\"control\" aria-label=\"search button for search input\">\n            <SearchIcon />\n          </Button>\n        </InputGroup>\n      </React.Fragment>\n    );\n  }\n}","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsInputGroupReactDocs} {...{"code":"import React from 'react';\nimport {\n  Button,\n  TextArea,\n  InputGroup\n} from '@patternfly/react-core';\n\nclass SimpleInputGroups extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <InputGroup>\n          <TextArea name=\"textarea2\" id=\"textarea2\" aria-label=\"textarea with button\" />\n          <Button id=\"textAreaButton2\" variant=\"control\">\n            Button\n          </Button>\n        </InputGroup>\n      </React.Fragment>\n    );\n  }\n}","title":"With textarea","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsInputGroupReactDocs} {...{"code":"import React from 'react';\nimport {\n  Button,\n  InputGroup,\n  TextInput,\n  Dropdown,\n  DropdownToggle,\n  DropdownItem\n} from '@patternfly/react-core';\n\nclass SimpleInputGroups extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isOpen: false,\n      selected: ''\n    };\n    this.onToggle = isOpen => {\n      this.setState({\n        isOpen\n      });\n    };\n    this.onSelect = event => {\n      this.setState({\n        isOpen: false,\n        selected: event.currentTarget.value\n      });\n    };\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <InputGroup>\n          <Dropdown\n            onSelect={this.onSelect}\n            toggle={\n              <DropdownToggle onToggle={this.onToggle}>\n                {this.state.selected ? this.state.selected : 'Dropdown'}\n              </DropdownToggle>\n            }\n            isOpen={this.state.isOpen}\n            dropdownItems={[\n              <DropdownItem key=\"opt-1\" value=\"Option 1\" component=\"button\">\n                Option 1\n              </DropdownItem>,\n              <DropdownItem key=\"opt-2\" value=\"Option 2\" component=\"button\">\n                Option 2\n              </DropdownItem>,\n              <DropdownItem key=\"opt-3\" value=\"Option 3\" component=\"button\">\n                Option 3\n              </DropdownItem>\n            ]}\n          />\n          <TextInput id=\"textInput3\" aria-label=\"input with dropdown and button\" />\n          <Button id=\"inputDropdownButton1\" variant=\"control\">Button</Button>\n        </InputGroup>\n      </React.Fragment>\n    );\n  }\n}","title":"With dropdown","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsInputGroupReactDocs} {...{"code":"import React from 'react';\nimport { CalendarAltIcon } from '@patternfly/react-icons';\nimport {\n  InputGroup,\n  InputGroupText,\n  TextInput\n} from '@patternfly/react-core';\n\nclass SimpleInputGroups extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <InputGroup>\n          <InputGroupText component=\"label\" htmlFor=\"textInput9\">\n            <CalendarAltIcon />\n          </InputGroupText>\n          <TextInput name=\"textInput9\" id=\"textInput9\" type=\"date\" aria-label=\"Date input example\" />\n        </InputGroup>\n      </React.Fragment>\n    );\n  }\n}","title":"With datepicker","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsInputGroupReactDocs} {...{"code":"import React from 'react';\nimport { QuestionCircleIcon } from '@patternfly/react-icons';\nimport {\n  Button,\n  InputGroup,\n  TextInput,\n  Popover,\n  PopoverPosition\n} from '@patternfly/react-core';\n\nclass SimpleInputGroups extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <InputGroup>\n          <TextInput name=\"textInput10\" id=\"textInput10\" type=\"text\" aria-label=\"input example with popover\" />\n          <Popover\n            aria-label=\"popover example\"\n            position={PopoverPosition.top}\n            bodyContent=\"This field is an example of input group with popover\"\n          >\n            <Button variant=\"control\" aria-label=\"popover for input\">\n              <QuestionCircleIcon />\n            </Button>\n          </Popover>\n        </InputGroup>\n        <br />\n        <InputGroup>\n          <TextInput name=\"textInput12\" id=\"textInput12\" type=\"text\" aria-label=\"input example with popover\" />\n          <Popover\n            aria-label=\"popover example\"\n            position={PopoverPosition.top}\n            bodyContent=\"This field is an example of input group with popover\"\n          >\n            <Button variant=\"plain\" aria-label=\"Popover for input\">\n              <QuestionCircleIcon />\n            </Button>\n          </Popover>\n        </InputGroup>\n      </React.Fragment>\n    );\n  }\n}","title":"With popover","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsInputGroupReactDocs} {...{"code":"import React from 'react';\nimport { DollarSignIcon } from '@patternfly/react-icons';\nimport {\n  Button,\n  TextArea,\n  InputGroup,\n  InputGroupText,\n  TextInput\n} from '@patternfly/react-core';\n\nclass SimpleInputGroups extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n\n  render() {\n    return (\n      <React.Fragment>\n        <InputGroup>\n          <Button id=\"textAreaButton1\" variant=\"control\">\n            Button\n          </Button>\n          <TextArea name=\"textarea1\" id=\"textarea1\" aria-label=\"textarea with buttons\" />\n          <Button variant=\"control\">Button</Button>\n        </InputGroup>\n        <br />\n        <InputGroup>\n          <Button id=\"textAreaButton3\" variant=\"control\">\n            Button\n          </Button>\n          <Button variant=\"control\">Button</Button>\n          <TextArea name=\"textarea3\" id=\"textarea3\" aria-label=\"textarea with 3 buttons\" />\n          <Button variant=\"control\">Button</Button>\n        </InputGroup>\n        <br />\n        <InputGroup>\n          <InputGroupText>\n            <DollarSignIcon />\n          </InputGroupText>\n          <TextInput id=\"textInput5\" type=\"number\" aria-label=\"Dollar amount input example\" />\n          <InputGroupText>.00</InputGroupText>\n        </InputGroup>\n      </React.Fragment>\n    );\n  }\n}","title":"With multiple group siblings","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsInputGroupReactDocs.Component.displayName = 'DocumentationComponentsInputGroupReactDocs';
