import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { BellIcon } from '@patternfly/react-icons';

export const DocumentationComponentsNotificationBadgeReactDocs = {
  "slug": "/documentation/components/notification-badge/react",
  "source": "react",
  "propComponents": [
    "NotificationBadge"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/NotificationBadge/examples/NotificationBadge.md",
  "section": "components",
  "id": "Notification badge",
  "title": "Notification badge",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-notification-badge"
};
DocumentationComponentsNotificationBadgeReactDocs.liveContext = {
  BellIcon
};
DocumentationComponentsNotificationBadgeReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsNotificationBadgeReactDocs} {...{"code":"import React from 'react';\nimport { NotificationBadge } from '@patternfly/react-core';\nimport { BellIcon } from '@patternfly/react-icons';\n\nclass SimpleNotificationBadge extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isRead: false\n    };\n    this.onClick = () => {\n      this.setState({\n        isRead: true\n      });\n    };\n  }\n\n  render() {\n    const { isRead } = this.state;\n    return (\n      <NotificationBadge isRead={isRead} onClick={this.onClick} aria-label=\"Notifications\">\n        <BellIcon />\n      </NotificationBadge>\n    );\n  }\n}","title":"Basic","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsNotificationBadgeReactDocs.Component.displayName = 'DocumentationComponentsNotificationBadgeReactDocs';
