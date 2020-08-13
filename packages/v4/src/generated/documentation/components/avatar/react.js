import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import avatarImg from '../../../../../../../node_modules/@patternfly/react-core/src/components/Avatar/examples/./avatarImg.svg';

export const DocumentationComponentsAvatarReactDocs = {
  "slug": "/documentation/components/avatar/react",
  "source": "react",
  "propComponents": [
    "Avatar"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/components/Avatar/examples/Avatar.md",
  "section": "components",
  "id": "Avatar",
  "title": "Avatar",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-c-avatar"
};
DocumentationComponentsAvatarReactDocs.liveContext = {
  avatarImg
};
DocumentationComponentsAvatarReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsAvatarReactDocs} {...{"code":"import React from 'react';\nimport { Avatar } from '@patternfly/react-core';\nimport avatarImg from './examples/avatarImg.svg';\n\nclass AvatarExample extends React.Component {\n  render() {\n    return (\n      <Avatar src={avatarImg} alt=\"avatar\"></Avatar>\n    );\n  }\n}","title":"Basic","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationComponentsAvatarReactDocs.Component.displayName = 'DocumentationComponentsAvatarReactDocs';
