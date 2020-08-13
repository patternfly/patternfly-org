import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsPaginationReactDocs = {
  "slug": "/documentation/components/pagination/react",
  "source": "react",
  "propComponents": [
    "Pagination"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Pagination/examples/Pagination.md",
  "section": "components",
  "id": "Pagination",
  "title": "Pagination",
  "toc": [
    "Examples"
  ],
  "cssPrefix": null
};
DocumentationComponentsPaginationReactDocs.liveContext = {
  
};
DocumentationComponentsPaginationReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsPaginationReactDocs} {...{"code":"import React from 'react';\nimport { Pagination, PaginationVariant } from \"@patternfly/react-core\";\n\nclass PaginationTop extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      page: 1,\n      perPage: 20\n    };\n\n    this.onSetPage = (_event, pageNumber) => {\n      this.setState({\n        page: pageNumber\n      });\n    };\n\n    this.onPerPageSelect = (_event, perPage) => {\n      this.setState({\n        perPage\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Pagination\n        itemCount={523}\n        perPage={this.state.perPage}\n        page={this.state.page}\n        onSetPage={this.onSetPage}\n        widgetId=\"pagination-options-menu-top\"\n        onPerPageSelect={this.onPerPageSelect}\n      />\n    );\n  }\n}","title":"Top","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsPaginationReactDocs} {...{"code":"import React from 'react';\nimport { Pagination, PaginationVariant } from \"@patternfly/react-core\";\n\nclass PaginationBottom extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      page: 1\n    };\n    this.onSetPage = (_event, pageNumber) => {\n      this.setState({\n        page: pageNumber\n      });\n    };\n    this.onPerPageSelect = (_event, perPage) => {\n      this.setState({\n        perPage\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Pagination\n        itemCount={333}\n        widgetId=\"pagination-options-menu-bottom\"\n        perPage={this.state.perPage}\n        page={this.state.page}\n        variant={PaginationVariant.bottom}\n        onSetPage={this.onSetPage}\n        onPerPageSelect={this.onPerPageSelect}\n      />\n    );\n  }\n}","title":"Bottom","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsPaginationReactDocs} {...{"code":"import React from 'react';\nimport { Pagination, PaginationVariant } from \"@patternfly/react-core\";\n\nclass PaginationDisabled extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      page: 1,\n      perPage: 20\n    };\n\n    this.onSetPage = (_event, pageNumber) => {\n      this.setState({\n        page: pageNumber\n      });\n    };\n\n    this.onPerPageSelect = (_event, perPage) => {\n      this.setState({\n        perPage\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Pagination\n        itemCount={523}\n        perPage={this.state.perPage}\n        page={this.state.page}\n        onSetPage={this.onSetPage}\n        widgetId=\"pagination-options-menu-top\"\n        onPerPageSelect={this.onPerPageSelect}\n        isDisabled\n      />\n    );\n  }\n}","title":"Disabled","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsPaginationReactDocs} {...{"code":"import React from 'react';\nimport { Pagination, PaginationVariant } from \"@patternfly/react-core\";\n\nclass PaginationTop extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      page: 1,\n      perPage: 20\n    };\n\n    this.onSetPage = (_event, pageNumber) => {\n      this.setState({\n        page: pageNumber\n      });\n    };\n\n    this.onPerPageSelect = (_event, perPage) => {\n      this.setState({\n        perPage\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Pagination\n        itemCount={0}\n        perPage={this.state.perPage}\n        page={this.state.page}\n        onSetPage={this.onSetPage}\n        widgetId=\"pagination-options-menu-top\"\n        onPerPageSelect={this.onPerPageSelect}\n      />\n    );\n  }\n}","title":"No items","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsPaginationReactDocs} {...{"code":"import React from 'react';\nimport { Pagination, PaginationVariant } from \"@patternfly/react-core\";\n\nclass PaginationTop extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      page: 1,\n      perPage: 20\n    };\n\n    this.onSetPage = (_event, pageNumber) => {\n      this.setState({\n        page: pageNumber\n      });\n    };\n\n    this.onPerPageSelect = (_event, perPage) => {\n      this.setState({\n        perPage\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Pagination\n        itemCount={15}\n        perPage={this.state.perPage}\n        page={this.state.page}\n        onSetPage={this.onSetPage}\n        widgetId=\"pagination-options-menu-top\"\n        onPerPageSelect={this.onPerPageSelect}\n      />\n    );\n  }\n}","title":"One page","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsPaginationReactDocs} {...{"code":"import React from 'react';\nimport { Pagination, PaginationVariant } from \"@patternfly/react-core\";\n\nclass PaginationTop extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      page: 1,\n      perPage: 20\n    };\n\n    this.onSetPage = (_event, pageNumber) => {\n      this.setState({\n        page: pageNumber\n      });\n    };\n\n    this.onPerPageSelect = (_event, perPage) => {\n      this.setState({\n        perPage\n      });\n    };\n  }\n\n  render() {\n    return (\n      <Pagination\n        itemCount={523}\n        perPage={this.state.perPage}\n        page={this.state.page}\n        onSetPage={this.onSetPage}\n        widgetId=\"pagination-options-menu-top\"\n        onPerPageSelect={this.onPerPageSelect}\n        isCompact\n      />\n    );\n  }\n}","title":"Compact","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsPaginationReactDocs.Component.displayName = 'DocumentationComponentsPaginationReactDocs';
