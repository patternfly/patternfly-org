import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsAvatarCoreDocs = {
  "slug": "/documentation/components/avatar/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Avatar/examples/Avatar.md",
  "section": "components",
  "id": "Avatar",
  "title": "Avatar",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-avatar"
};
DocumentationComponentsAvatarCoreDocs.liveContext = {
  
};
DocumentationComponentsAvatarCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsAvatarCoreDocs} {...{"code":"<img class=\"pf-c-avatar\" src=\"/assets/images/img_avatar.svg\" alt=\"Avatar image\" />","title":"Basic","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The avatar component provides a default SVG icon. If an image is used it should be 36px by 36px.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Accessibility`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Attribute`}
          </th>
          <th>
            {`Applied to`}
          </th>
          <th>
            {`Outcome`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`alt`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-avatar`}
            </code>
          </td>
          <td>
            {`The alt attribute specifies an alternate text for an image, if the image cannot be displayed. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Class`}
          </th>
          <th>
            {`Applied to`}
          </th>
          <th>
            {`Outcome`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-avatar`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<img>`}
            </code>
          </td>
          <td>
            {`Initiates an avatar image. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsAvatarCoreDocs.Component.displayName = 'DocumentationComponentsAvatarCoreDocs';
