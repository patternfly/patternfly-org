import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsChipGroupReactDocs = {
  "slug": "/documentation/components/chip-group/react",
  "source": "react",
  "propComponents": [
    "Chip",
    "ChipGroup"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/ChipGroup/examples/ChipGroup.md",
  "section": "components",
  "id": "Chip group",
  "title": "Chip group",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-chip"
};
DocumentationComponentsChipGroupReactDocs.liveContext = {
  
};
DocumentationComponentsChipGroupReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsChipGroupReactDocs} {...{"code":"import React from 'react';\nimport { Badge, Chip } from '@patternfly/react-core';\n\nclass SingleChip extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      chip: {\n        name: 'Chip 1'\n      },\n      longchip: {\n        name: 'Really long Chip that goes on and on'\n      },\n      badgechip: {\n        name: 'Chip',\n        isRead: true,\n        count: 7\n      },\n      readonlychip: {\n        name: 'Read-only Chip'\n      },\n      overflowchip: {\n        name: 'Overflow Chip'\n      }\n    };\n    this.deleteItem = id => {\n      this.setState({ [id]: null });\n    };\n  }\n\n  render() {\n    const { chip, longchip, badgechip, readonlychip, overflowchip } = this.state;\n    return (\n      <React.Fragment>\n        {chip && (\n          <React.Fragment>\n            <Chip key=\"chip1\" onClick={() => this.deleteItem('chip')}>\n              {chip.name}\n            </Chip>\n            <br /> <br />\n          </React.Fragment>\n        )}\n        {longchip && (\n          <React.Fragment>\n            <Chip key=\"chip2\" onClick={() => this.deleteItem('longchip')}>\n              {longchip.name}\n            </Chip>\n            <br /> <br />\n          </React.Fragment>\n        )}\n        {badgechip && (\n          <React.Fragment>\n            <Chip key=\"chip3\" onClick={() => this.deleteItem('badgechip')}>\n              {badgechip.name}\n              <Badge isRead={badgechip.isRead}>{badgechip.count}</Badge>\n            </Chip>\n            <br /> <br />\n          </React.Fragment>\n        )}\n        <Chip key=\"chip4\" onClick={() => this.deleteItem('readonlychip')} isReadOnly>\n          {readonlychip.name}\n        </Chip>\n        <br /> <br />\n        {overflowchip && (\n          <Chip key=\"chip5\" component='button' onClick={() => this.deleteItem('overflowchip')} isOverflowChip>\n            {overflowchip.name}\n          </Chip>\n        )}\n      </React.Fragment>\n    );\n  }\n}","title":"Single","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsChipGroupReactDocs} {...{"code":"import React from 'react';\nimport { Chip, ChipGroup } from '@patternfly/react-core';\n\nclass SimpleInlineChipGroup extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      chips: ['Chip one', 'Really long chip that goes on and on', 'Chip three', 'Chip four', 'Chip five']\n    };\n\n    this.deleteItem = id => {\n      const copyOfChips = this.state.chips;\n      const index = copyOfChips.indexOf(id);\n      if (index !== -1) {\n        copyOfChips.splice(index, 1);\n        this.setState({ chips: copyOfChips });\n      }\n    };\n  }\n\n  render() {\n    const { chips } = this.state;\n\n    return (\n      <ChipGroup>\n        {chips.map(currentChip => (\n          <Chip key={currentChip} onClick={() => this.deleteItem(currentChip)}>\n            {currentChip}\n          </Chip>\n        ))}\n      </ChipGroup>\n    );\n  }\n}","title":"Simple inline chip group","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsChipGroupReactDocs} {...{"code":"import React from 'react';\nimport { Chip, ChipGroup } from '@patternfly/react-core';\n\nclass SimpleCategoryChipGroup extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      chips: ['Chip one', 'Chip two', 'Chip three', 'Chip four', 'Chip five']\n    };\n   this.deleteItem = id => {\n      const copyOfChips = this.state.chips;\n      const index = copyOfChips.indexOf(id);\n      if (index !== -1) {\n        copyOfChips.splice(index, 1);\n        this.setState({ chips: copyOfChips });\n      }\n    };\n  }\n\n  render() {\n    const { chips } = this.state;\n\n    return (\n      <ChipGroup categoryName=\"Category one\">\n        {chips.map(currentChip => (\n          <Chip key={currentChip} onClick={() => this.deleteItem(currentChip)}>\n            {currentChip}\n          </Chip>\n        ))}\n      </ChipGroup>\n    );\n  }\n}","title":"Chip groups with categories","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsChipGroupReactDocs} {...{"code":"import React from 'react';\nimport { Chip, ChipGroup } from '@patternfly/react-core';\n\nclass CategoryChipGroupRemovable extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      chips: ['Chip one', 'Chip two', 'Chip three'],\n      chips2: ['Chip one', 'Chip two', 'Chip three', 'Chip 4']\n    };\n   this.deleteItem = id => {\n      const copyOfChips = this.state.chips;\n      const index = copyOfChips.indexOf(id);\n      if (index !== -1) {\n        copyOfChips.splice(index, 1);\n        this.setState({ chips: copyOfChips });\n      }\n    };\n\n    this.deleteItem2 = id => {\n      const copyOfChips = this.state.chips2;\n      const index = copyOfChips.indexOf(id);\n      if (index !== -1) {\n        copyOfChips.splice(index, 1);\n        this.setState({ chips2: copyOfChips });\n      }\n    };\n\n    this.deleteCategory = () => {\n      this.setState({ chips: [] });\n    }\n\n    this.deleteCategory2= () => {\n      this.setState({ chips2: [] });\n    }\n  }\n\n  render() {\n    const { chips, chips2 } = this.state;\n\n    return (\n      <React.Fragment>\n      <ChipGroup categoryName=\"Category one\" isClosable onClick={this.deleteCategory}>\n        {chips.map(currentChip => (\n          <Chip key={currentChip} onClick={() => this.deleteItem(currentChip)}>\n            {currentChip}\n          </Chip>\n        ))}\n      </ChipGroup>\n      <br /> <br />\n      <ChipGroup categoryName=\"Category two has a very long name\" isClosable onClick={this.deleteCategory2}>\n        {chips2.map(currentChip => (\n          <Chip key={currentChip} onClick={() => this.deleteItem2(currentChip)}>\n            {currentChip}\n          </Chip>\n        ))}\n      </ChipGroup>\n      </React.Fragment>\n    );\n  }\n}","title":"Chip groups with categories removable","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsChipGroupReactDocs.Component.displayName = 'DocumentationComponentsChipGroupReactDocs';
