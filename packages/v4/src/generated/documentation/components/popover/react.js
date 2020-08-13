import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsPopoverReactDocs = {
  "slug": "/documentation/components/popover/react",
  "source": "react",
  "propComponents": [
    "Popover"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Popover/examples/Popover.md",
  "section": "components",
  "id": "Popover",
  "title": "Popover",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-popover"
};
DocumentationComponentsPopoverReactDocs.liveContext = {
  
};
DocumentationComponentsPopoverReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsPopoverReactDocs} {...{"code":"import React from 'react';\nimport { Popover, PopoverPosition, Button } from '@patternfly/react-core';\n\nSimplePopover = () => (\n  <div style={{ margin: '100px' }}>\n    <Popover\n      headerContent={<div>Popover Header</div>}\n      bodyContent={\n        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.\n        <Button onClick={() => console.log('click')}>click</Button></div>\n      }\n      footerContent=\"Popover Footer\"\n    >\n      <Button>Toggle Popover</Button>\n    </Popover>\n  </div>\n);","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsPopoverReactDocs} {...{"code":"import React from 'react';\nimport { Popover } from '@patternfly/react-core';\n\nPopoverReactRef = () => {\n  const popoverRef = React.useRef();\n  return (\n  <div style={{ margin: '100px' }}>\n    <button ref={popoverRef}>Popover attached via react ref</button>\n    <Popover\n      headerContent={<div>Popover Header</div>}\n      bodyContent={\n        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n      }\n      footerContent=\"Popover Footer\"\n      reference={popoverRef}\n    />\n  </div>\n)}","title":"Popover react ref","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsPopoverReactDocs} {...{"code":"import React from 'react';\nimport { Popover } from '@patternfly/react-core';\n\nPopoverSelectorRef = () => (\n  <div style={{ margin: '100px' }}>\n    <button id=\"popover-selector\">Popover attached via selector ref</button>\n    <Popover\n      headerContent={<div>Popover Header</div>}\n      bodyContent={\n        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n      }\n      footerContent=\"Popover Footer\"\n      reference={() => document.getElementById('popover-selector')}\n    />\n  </div>\n)","title":"Popover selector ref","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsPopoverReactDocs} {...{"code":"import React from 'react';\nimport { Popover, PopoverPosition, Checkbox, Button } from '@patternfly/react-core';\n\nclass AdvancedPopover extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      position: 'auto',\n      show: false,\n      keepInViewChecked: true\n    };\n    this.handleKeepInViewChange = checked => {\n      this.setState({ keepInViewChecked: checked });\n    };\n    this.handleProgrammaticChange = checked => {\n      this.setState({\n        show: checked\n      });\n    };\n    this.shouldClose = () => {\n      console.log('shouldClose');\n      this.setState({ show: false });\n    };\n    this.shouldOpen = () => {\n      console.log('shouldOpen');\n      this.setState({ show: true });\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <div>\n          <span style={{ paddingRight: '10px' }}>Popover Position</span>\n          <select\n            aria-label=\"Popover position\"\n            onChange={event => {\n              this.setState({ position: event.target.value });\n            }}\n          >\n            {Object.keys(PopoverPosition).map(key => (\n              <option key={key} value={PopoverPosition[key]}>\n                {PopoverPosition[key]}\n              </option>\n            ))}\n          </select>\n          <Checkbox\n            label=\"Flip popover if the position falls outside the view\"\n            isChecked={this.state.keepInViewChecked}\n            onChange={this.handleKeepInViewChange}\n            aria-label=\"Keep in view\"\n            id=\"check-3\"\n          />\n          <Checkbox\n            label=\"Toggle popover from outside\"\n            isChecked={this.state.show}\n            onChange={this.handleProgrammaticChange}\n            aria-label=\"Toggle popover from outside\"\n            id=\"check-4\"\n          />\n        </div>\n\n        <div style={{ margin: '100px' }}>\n          <Popover\n            position={this.state.position}\n            hideOnOutsideClick={false}\n            isVisible={this.state.show}\n            shouldClose={this.shouldClose}\n            shouldOpen={this.shouldOpen}\n            enableFlip={this.state.keepInViewChecked}\n            appendTo={() => document.getElementById('___gatsby')}\n            headerContent={<div>Popover Header</div>}\n            bodyContent={\n              <div>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.\n              </div>\n            }\n            footerContent=\"Popover Footer\"\n          >\n            <Button onClick={this.handleClick}>Toggle Popover</Button>\n          </Popover>\n        </div>\n      </div>\n    );\n  }\n}","title":"Advanced","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsPopoverReactDocs} {...{"code":"import React from 'react';\nimport { Popover, PopoverPosition, Button } from '@patternfly/react-core';\n\nHeadlessPopover = () => (\n  <div style={{ margin: '100px' }}>\n    <Popover\n      bodyContent={\n        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.</div>\n      }\n      aria-label=\"Headless Popover\"\n      closeBtnAriaLabel=\"Close Headless Popover\"\n      footerContent=\"Popover Footer\"\n    >\n      <Button>Toggle Popover</Button>\n    </Popover>\n  </div>\n);","title":"Headless","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsPopoverReactDocs} {...{"code":"import React from 'react';\nimport { Popover, PopoverPosition, Button } from '@patternfly/react-core';\n\nHeadlessPopover = () => (\n  <div style={{ margin: '100px' }}>\n    <Popover\n      bodyContent={\n        <div><a href=\"https://www.patternfly.org/\" target=\"_blank\">PatternFly</a> is a community project that promotes design commonality and improved user experience. Its offerings include open source code, patterns, style guides, and an active community that helps support it all.</div>\n      }\n      aria-label=\"Popover with Link\"\n      closeBtnAriaLabel=\"Close Popover with Link\"\n      footerContent=\"Popover Footer\"\n    >\n      <Button>Toggle Popover</Button>\n    </Popover>\n  </div>\n);","title":"With Link","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsPopoverReactDocs.Component.displayName = 'DocumentationComponentsPopoverReactDocs';
