import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsContextSelectorReactDocs = {
  "slug": "/documentation/components/context-selector/react",
  "source": "react",
  "propComponents": [
    "ContextSelector",
    "ContextSelectorItem"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/ContextSelector/examples/ContextSelector.md",
  "section": "components",
  "id": "Context selector",
  "title": "Context selector",
  "toc": [
    "Examples"
  ]
};
DocumentationComponentsContextSelectorReactDocs.liveContext = {
  
};
DocumentationComponentsContextSelectorReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsContextSelectorReactDocs} {...{"code":"import React from 'react';\nimport { ContextSelector, ContextSelectorItem } from '@patternfly/react-core';\n\nclass SimpleContextSelector extends React.Component {\n  constructor(props) {\n    super(props);\n    this.items = [\n      'My Project',\n      'OpenShift Cluster',\n      'Production Ansible',\n      'AWS',\n      'Azure',\n      'My Project 2',\n      'OpenShift Cluster ',\n      'Production Ansible 2 ',\n      'AWS 2',\n      'Azure 2'\n    ];\n\n    this.state = {\n      isOpen: false,\n      selected: this.items[0],\n      searchValue: '',\n      filteredItems: this.items\n    };\n\n    this.onToggle = (event, isOpen) => {\n      this.setState({\n        isOpen\n      });\n    };\n\n    this.onSelect = (event, value) => {\n      this.setState({\n        selected: value,\n        isOpen: !this.state.isOpen\n      });\n    };\n\n    this.onSearchInputChange = value => {\n      this.setState({ searchValue: value });\n    };\n\n    this.onSearchButtonClick = event => {\n      const filtered =\n        this.state.searchValue === ''\n          ? this.items\n          : this.items.filter(str => str.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !== -1);\n\n      this.setState({ filteredItems: filtered || [] });\n    };\n  }\n\n  render() {\n    const { isOpen, selected, searchValue, filteredItems } = this.state;\n    return (\n      <ContextSelector\n        toggleText={selected}\n        onSearchInputChange={this.onSearchInputChange}\n        isOpen={isOpen}\n        searchInputValue={searchValue}\n        onToggle={this.onToggle}\n        onSelect={this.onSelect}\n        onSearchButtonClick={this.onSearchButtonClick}\n        screenReaderLabel=\"Selected Project:\"\n      >\n        {filteredItems.map((item, index) => (\n          <ContextSelectorItem key={index}>{item}</ContextSelectorItem>\n        ))}\n      </ContextSelector>\n    );\n  }\n}","title":"Basic","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsContextSelectorReactDocs.Component.displayName = 'DocumentationComponentsContextSelectorReactDocs';
