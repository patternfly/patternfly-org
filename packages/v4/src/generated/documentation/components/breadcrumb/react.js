import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsBreadcrumbReactDocs = {
  "slug": "/documentation/components/breadcrumb/react",
  "source": "react",
  "propComponents": [
    "Breadcrumb",
    "BreadcrumbItem",
    "BreadcrumbHeading"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Breadcrumb/examples/Breadcrumb.md",
  "section": "components",
  "id": "Breadcrumb",
  "title": "Breadcrumb",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-breadcrumb"
};
DocumentationComponentsBreadcrumbReactDocs.liveContext = {
  
};
DocumentationComponentsBreadcrumbReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsBreadcrumbReactDocs} {...{"code":"import React from 'react';\nimport { Breadcrumb, BreadcrumbItem, BreadcrumbHeading } from '@patternfly/react-core';\n\nSimpleBreadcrumbs = () => (\n  <Breadcrumb>\n    <BreadcrumbItem to=\"#\">Section home</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\" isActive>\n      Section Landing\n    </BreadcrumbItem>\n  </Breadcrumb>\n);","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsBreadcrumbReactDocs} {...{"code":"import React from 'react';\nimport { Breadcrumb, BreadcrumbItem, BreadcrumbHeading } from '@patternfly/react-core';\n\nWithoutLinkBreadcrumbs = () => (\n  <Breadcrumb>\n    <BreadcrumbItem>Section Home</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\" isActive>\n      Section Landing\n    </BreadcrumbItem>\n  </Breadcrumb>\n);","title":"Without home link","lang":"js"}}>
    </Example>
    <Example {...DocumentationComponentsBreadcrumbReactDocs} {...{"code":"import React from 'react';\nimport { Breadcrumb, BreadcrumbItem, BreadcrumbHeading } from '@patternfly/react-core';\n\nHeadingBreadcrumbs = () => (\n  <Breadcrumb>\n    <BreadcrumbItem to=\"#\">Section home</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbItem to=\"#\">Section title</BreadcrumbItem>\n    <BreadcrumbHeading to=\"#\">Section title</BreadcrumbHeading>\n  </Breadcrumb>\n);","title":"With heading","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsBreadcrumbReactDocs.Component.displayName = 'DocumentationComponentsBreadcrumbReactDocs';
