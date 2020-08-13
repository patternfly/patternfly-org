import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsSimpleListReactDocs = {
  "slug": "/documentation/components/simple-list/react",
  "source": "react",
  "propComponents": [
    "SimpleList",
    "SimpleListGroup",
    "SimpleListItem"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/SimpleList/examples/SimpleList.md",
  "section": "components",
  "id": "Simple list",
  "title": "Simple list",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-simple-list"
};
DocumentationComponentsSimpleListReactDocs.liveContext = {
  
};
DocumentationComponentsSimpleListReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsSimpleListReactDocs} {...{"code":"import React from 'react';\nimport { SimpleList, SimpleListItem } from '@patternfly/react-core';\n\nclass SimpleListDemo extends React.Component {\n  onSelect(currentItem, currentItemProps) {\n    console.log('new selection', currentItem, currentItemProps);\n  }\n\n  render() {\n    const items = [\n      <SimpleListItem key=\"item1\" isCurrent>\n        List item 1\n      </SimpleListItem>,\n      <SimpleListItem key=\"item2\" component=\"a\" href=\"#\">\n        List item 2\n      </SimpleListItem>,\n      <SimpleListItem key=\"item3\">List item 3</SimpleListItem>\n    ];\n\n    return (\n      <SimpleList onSelect={this.onSelect} aria-label=\"Simple List Example\">\n        {items}\n      </SimpleList>\n    );\n  }\n}","title":"Simple list","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsSimpleListReactDocs} {...{"code":"import React from 'react';\nimport { SimpleList, SimpleListItem, SimpleListGroup } from '@patternfly/react-core';\n\nclass SimpleListGroupDemo extends React.Component {\n  onSelect(currentItem, currentItemProps) {\n    console.log('new selection', currentItem, currentItemProps);\n  }\n\n  render() {\n    const group1Items = [\n      <SimpleListItem key=\"item1\" isCurrent>\n        List item 1\n      </SimpleListItem>,\n      <SimpleListItem key=\"item2\" id=\"test 2\">\n        List item 2\n      </SimpleListItem>,\n      <SimpleListItem key=\"item3\">List item 3</SimpleListItem>,\n      <SimpleListItem key=\"item4\">List item 4</SimpleListItem>\n    ];\n\n    const group2Items = [\n      <SimpleListItem key=\"item5\">List item 1</SimpleListItem>,\n      <SimpleListItem key=\"item6\" component=\"a\" href=\"#\">\n        List item 2\n      </SimpleListItem>,\n      <SimpleListItem key=\"item7\" component=\"a\" href=\"#\">\n        List item 3\n      </SimpleListItem>,\n      <SimpleListItem key=\"item8\">List item 4</SimpleListItem>\n    ];\n\n    return (\n      <SimpleList onSelect={this.onSelect} aria-label=\"Grouped List Example\">\n        <SimpleListGroup title=\"Group 1\" id=\"group-1\">\n          {group1Items}\n        </SimpleListGroup>\n        <SimpleListGroup title=\"Group 2\" id=\"group-2\">\n          {group2Items}\n        </SimpleListGroup>\n      </SimpleList>\n    );\n  }\n}","title":"Grouped list","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsSimpleListReactDocs.Component.displayName = 'DocumentationComponentsSimpleListReactDocs';
