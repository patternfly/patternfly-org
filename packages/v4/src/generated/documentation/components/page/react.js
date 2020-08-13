import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsPageReactDocs = {
  "slug": "/documentation/components/page/react",
  "source": "react",
  "propComponents": [
    "Page",
    "PageHeader",
    "PageHeaderTools",
    "PageHeaderToolsGroup",
    "PageHeaderToolsItem",
    "PageSidebar",
    "PageSection"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Page/examples/Page.md",
  "section": "components",
  "id": "Page",
  "title": "Page",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-page"
};
DocumentationComponentsPageReactDocs.liveContext = {
  
};
DocumentationComponentsPageReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsPageReactDocs} {...{"code":"import React from 'react';\nimport {\n  Page,\n  PageHeader,\n  PageHeaderTools,\n  PageSidebar,\n  PageSection,\n  PageSectionVariants\n} from '@patternfly/react-core';\n\nclass VerticalPage extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isNavOpen: true\n    };\n    this.onNavToggle = () => {\n      this.setState({\n        isNavOpen: !this.state.isNavOpen\n      });\n    };\n  }\n\n  render() {\n    const { isNavOpen } = this.state;\n\n    const logoProps = {\n      href: 'https://patternfly.org',\n      onClick: () => console.log('clicked logo'),\n      target: '_blank'\n    };\n    const Header = (\n      <PageHeader\n        logo=\"Logo\"\n        logoProps={logoProps}\n        headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}\n        showNavToggle\n        isNavOpen={isNavOpen}\n        onNavToggle={this.onNavToggle}\n      />\n    );\n    const Sidebar = <PageSidebar nav=\"Navigation\" isNavOpen={isNavOpen} />;\n\n    return (\n      <Page header={Header} sidebar={Sidebar}>\n        <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>\n        <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>\n        <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>\n      </Page>\n    );\n  }\n}","title":"Vertical nav","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsPageReactDocs} {...{"code":"import React from 'react';\nimport {\n  Page,\n  PageHeader,\n  PageHeaderTools,\n  PageSidebar,\n  PageSection,\n  PageSectionVariants\n} from '@patternfly/react-core';\n\nHorizontalPage = () => {\n  const logoProps = {\n    href: 'https://patternfly.org',\n    onClick: () => console.log('clicked logo'),\n    target: '_blank'\n  };\n  const Header = (\n    <PageHeader\n      logo=\"Logo\"\n      logoProps={logoProps}\n      headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}\n      topNav=\"Navigation\"\n    />\n  );\n\n  return (\n    <Page header={Header}>\n      <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>\n      <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>\n      <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>\n    </Page>\n  );\n};","title":"Horizontal nav","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsPageReactDocs} {...{"code":"import React from 'react';\nimport {\n  Page,\n  PageHeader,\n  PageHeaderTools,\n  PageSidebar,\n  PageSection,\n  PageSectionVariants\n} from '@patternfly/react-core';\n\nclass VerticalPage extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isNavOpen: true\n    };\n    this.onNavToggle = () => {\n      this.setState({\n        isNavOpen: !this.state.isNavOpen\n      });\n    };\n  }\n\n  render() {\n    const { isNavOpen } = this.state;\n\n    const logoProps = {\n      href: 'https://patternfly.org',\n      onClick: () => console.log('clicked logo'),\n      target: '_blank'\n    };\n    const Header = (\n      <PageHeader\n        logo=\"Logo\"\n        logoProps={logoProps}\n        headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}\n        showNavToggle\n        isNavOpen={isNavOpen}\n        onNavToggle={this.onNavToggle}\n      />\n    );\n    const Sidebar = <PageSidebar nav=\"Navigation\" isNavOpen={isNavOpen} />;\n\n    return (\n      <Page header={Header} sidebar={Sidebar}>\n        <PageSection>Section with default padding</PageSection>\n        <PageSection variant={PageSectionVariants.light} hasNoPadding>\n          Section with no padding\n        </PageSection>\n        <PageSection padding={{ default: 'noPadding', md: 'padding', lg: 'padding' }}>\n          Section with padding only on medium/large\n        </PageSection>\n        <PageSection variant={PageSectionVariants.light} padding={{ md: 'noPadding' }}>\n          Section with no padding on medium\n        </PageSection>\n      </Page>\n    );\n  }\n}","title":"Main Section Padding","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsPageReactDocs} {...{"code":"import React from 'react';\nimport {\n  Page,\n  PageHeader,\n  PageHeaderTools,\n  PageSidebar,\n  PageSection,\n  PageSectionVariants\n} from '@patternfly/react-core';\n\nclass FillPage extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isNavOpen: true\n    };\n    this.onNavToggle = () => {\n      this.setState({\n        isNavOpen: !this.state.isNavOpen\n      });\n    };\n  }\n\n  render() {\n    const { isNavOpen } = this.state;\n\n    const logoProps = {\n      href: 'https://patternfly.org',\n      onClick: () => console.log('clicked logo'),\n      target: '_blank'\n    };\n    const Header = (\n      <PageHeader\n        logo=\"Logo\"\n        logoProps={logoProps}\n        headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}\n        showNavToggle\n        isNavOpen={isNavOpen}\n        onNavToggle={this.onNavToggle}\n      />\n    );\n    const Sidebar = <PageSidebar nav=\"Navigation\" isNavOpen={isNavOpen} />;\n\n    return (\n      <Page header={Header} sidebar={Sidebar}>\n        <PageSection style={{ height: '10em' }}>This section is set to the default fill variant</PageSection>\n        <PageSection style={{ height: '10em' }} isFilled={true}>\n          This section fills the available space.\n        </PageSection>\n        <PageSection style={{ height: '10em' }} isFilled={false}>\n          {' '}\n          This section does not fill the available space.\n        </PageSection>\n      </Page>\n    );\n  }\n}","title":"With or without fill","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsPageReactDocs} {...{"code":"import React from 'react';\nimport {\n  Page,\n  PageHeader,\n  PageHeaderTools,\n  PageSidebar,\n  PageSection,\n  PageSectionVariants\n} from '@patternfly/react-core';\n\nclass UncontrolledNavPage extends React.Component {\n  render() {\n    const logoProps = {\n      href: 'https://patternfly.org',\n      onClick: () => console.log('clicked logo'),\n      target: '_blank'\n    };\n    const Header = (\n      <PageHeader\n        logo=\"Logo\"\n        logoProps={logoProps}\n        headerTools={<PageHeaderTools>header-tools</PageHeaderTools>}\n        showNavToggle\n      />\n    );\n    const Sidebar = <PageSidebar nav=\"Navigation\" />;\n\n    return (\n      <Page isManagedSidebar header={Header} sidebar={Sidebar}>\n        <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>\n        <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>\n        <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>\n      </Page>\n    );\n  }\n}","title":"Uncontrolled nav","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsPageReactDocs.Component.displayName = 'DocumentationComponentsPageReactDocs';
