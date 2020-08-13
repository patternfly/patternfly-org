import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsDrawerCoreDocs = {
  "slug": "/documentation/components/drawer/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Drawer/examples/Drawer.md",
  "section": "components",
  "id": "Drawer",
  "title": "Drawer",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-drawer"
};
DocumentationComponentsDrawerCoreDocs.liveContext = {
  
};
DocumentationComponentsDrawerCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsDrawerCoreDocs} {...{"code":"<div class=\"pf-c-drawer\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div class=\"pf-c-drawer__body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\" hidden>\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close drawer panel\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Closed panel on right (default)","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDrawerCoreDocs} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div class=\"pf-c-drawer__body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close drawer panel\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Expanded panel on right","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDrawerCoreDocs} {...{"code":"<div class=\"pf-c-drawer pf-m-panel-left\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div class=\"pf-c-drawer__body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\" hidden>\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close drawer panel\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Closed panel on left","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDrawerCoreDocs} {...{"code":"<div class=\"pf-c-drawer pf-m-panel-left pf-m-expanded\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div class=\"pf-c-drawer__body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close drawer panel\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Expanded panel on left","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDrawerCoreDocs} {...{"code":"<div class=\"pf-c-drawer pf-m-inline pf-m-expanded\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div class=\"pf-c-drawer__body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close drawer panel\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Expanded inline panel","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDrawerCoreDocs} {...{"code":"<div class=\"pf-c-drawer pf-m-inline pf-m-panel-left pf-m-expanded\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div class=\"pf-c-drawer__body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close drawer panel\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Expanded inline panel on left","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDrawerCoreDocs} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div class=\"pf-c-drawer__body\">content-body</div>\n      <div class=\"pf-c-drawer__body pf-m-padding\">content-body with padding</div>\n      <div class=\"pf-c-drawer__body\">content-body</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close drawer panel\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>drawer-panel</div>\n      </div>\n      <div class=\"pf-c-drawer__body pf-m-no-padding\">drawer-panel with no padding</div>\n      <div class=\"pf-c-drawer__body\">drawer-panel</div>\n    </div>\n  </div>\n</div>","title":"Stacked content body elements","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDrawerCoreDocs} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div class=\"pf-c-drawer__body pf-m-padding\">\n        <b>Drawer content padding.</b>&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close drawer panel\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Modified content padding","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDrawerCoreDocs} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div class=\"pf-c-drawer__body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close drawer panel\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Modified panel padding","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDrawerCoreDocs} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div class=\"pf-c-drawer__body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel pf-m-width-75 pf-m-width-33-on-lg pf-m-width-25-on-2xl\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close drawer panel\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Modified panel width","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDrawerCoreDocs} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded\">\n  <div class=\"pf-c-drawer__section\">drawer-section</div>\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div class=\"pf-c-drawer__body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close drawer panel\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Additional section above main","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsDrawerCoreDocs} {...{"code":"<div class=\"pf-c-drawer pf-m-expanded pf-m-static\">\n  <div class=\"pf-c-drawer__main\">\n    <div class=\"pf-c-drawer__content\">\n      <div class=\"pf-c-drawer__body\">Static drawers don't have interactive elements. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehicula ex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodo eleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada sed posuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quam ullamcorper, in commodo massa vulputate.</div>\n    </div>\n    <div class=\"pf-c-drawer__panel\">\n      <div class=\"pf-c-drawer__body\">\n        <div class=\"pf-c-drawer__head\">\n          <span>drawer-panel</span>\n          <div class=\"pf-c-drawer__actions\">\n            <div class=\"pf-c-drawer__close\">\n              <button class=\"pf-c-button pf-m-plain\" type=\"button\" aria-label=\"Close drawer panel\">\n                <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>","title":"Static","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
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
              {`aria-expanded="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`action that opens drawer`}
            </code>
          </td>
          <td>
            {`Indicates that the expandable content is visible. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-expanded="false"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`action that opens drawer`}
            </code>
          </td>
          <td>
            {`Indicates that the expandable content is hidden. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`hidden`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__panel`}
            </code>
          </td>
          <td>
            {`Hides the drawer panel from assistive technologies. `}
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
              {`.pf-c-drawer`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the drawer container. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__section`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a drawer section area. This element can be used above or below `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__main`}
            </code>
            {` for titles, toolbars, footers, etc.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__main`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the drawer main area. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the drawer content container. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__panel`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<aside>`}
            </code>
          </td>
          <td>
            {`Initiates the drawer panel container. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__body`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a drawer body container and is the child of `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__content`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__panel`}
            </code>
            {`. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__head`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a drawer head container. This container positions `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__actions`}
            </code>
            {`, if present.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__actions`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Identifies the drawer close button.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__close`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Identifies the drawer close button.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-expanded`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer`}
            </code>
          </td>
          <td>
            {`Modifies the drawer panel for the expanded state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-static{-on-[lg, xl, 2xl]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer`}
            </code>
          </td>
          <td>
            {`Modifies the drawer panel state to always show both content and panel.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-inline{-on-[lg, xl, 2xl]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer`}
            </code>
          </td>
          <td>
            {`Modifies the drawer so the content element and panel element are displayed side by side. `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-inline`}
            </code>
            {` used without a breakpoint will default to the `}
            <code {...{"className":"ws-code"}}>
              {`md`}
            </code>
            {` breakpoint.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-no-border`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__panel`}
            </code>
          </td>
          <td>
            {`Modifies the drawer panel border treatment to disable all border treatment.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-padding`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__body`}
            </code>
          </td>
          <td>
            {`Modifies the element to add padding.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-no-padding`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__body`}
            </code>
          </td>
          <td>
            {`Modifies the element to remove padding.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-no-background`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__section`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__content`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__panel`}
            </code>
          </td>
          <td>
            {`Modifies the drawer body/panel background color to transparent.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-width-{25, 33, 50, 66, 75, 100}{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-drawer__panel`}
            </code>
          </td>
          <td>
            {`Modifies the drawer panel width.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsDrawerCoreDocs.Component.displayName = 'DocumentationComponentsDrawerCoreDocs';
