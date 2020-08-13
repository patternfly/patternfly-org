import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/components/Tile/examples/./Tile.css'

export const DocumentationComponentsTileCoreDocs = {
  "slug": "/documentation/components/tile/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Tile/examples/Tile.md",
  "section": "components",
  "id": "Tile",
  "title": "Tile",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-tile"
};
DocumentationComponentsTileCoreDocs.liveContext = {
  
};
DocumentationComponentsTileCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsTileCoreDocs} {...{"code":"<div class=\"pf-c-tile\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header\">\n    <div class=\"pf-c-tile__title\">Default</div>\n  </div>\n</div>\n<div class=\"pf-c-tile pf-m-selected\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header\">\n    <div class=\"pf-c-tile__title\">Selected</div>\n  </div>\n</div>\n<div class=\"pf-c-tile pf-m-disabled\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header\">\n    <div class=\"pf-c-tile__title\">Disabled</div>\n  </div>\n</div>\n<br/>\n<br/>\n<div class=\"pf-c-tile\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header\">\n    <div class=\"pf-c-tile__title\">Default</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>\n<div class=\"pf-c-tile pf-m-selected\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header\">\n    <div class=\"pf-c-tile__title\">Selected</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>\n<div class=\"pf-c-tile pf-m-disabled\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header\">\n    <div class=\"pf-c-tile__title\">Disabled</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>\n<br/>\n<br/>\n<div class=\"pf-c-tile\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header\">\n    <div class=\"pf-c-tile__icon\">\n      <i class=\"fas fa-plus\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"pf-c-tile__title\">Default</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>\n<div class=\"pf-c-tile pf-m-selected\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header\">\n    <div class=\"pf-c-tile__icon\">\n      <i class=\"fas fa-plus\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"pf-c-tile__title\">Selected</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>\n<div class=\"pf-c-tile pf-m-disabled\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header\">\n    <div class=\"pf-c-tile__icon\">\n      <i class=\"fas fa-plus\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"pf-c-tile__title\">Disabled</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>","title":"Basic tiles","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTileCoreDocs} {...{"code":"<div class=\"pf-c-tile\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header pf-m-stacked\">\n    <div class=\"pf-c-tile__icon\">\n      <i class=\"fas fa-bell\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"pf-c-tile__title\">Default</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>\n<div class=\"pf-c-tile pf-m-selected\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header pf-m-stacked\">\n    <div class=\"pf-c-tile__icon\">\n      <i class=\"fas fa-bell\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"pf-c-tile__title\">Selected</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>\n<div class=\"pf-c-tile pf-m-disabled\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header pf-m-stacked\">\n    <div class=\"pf-c-tile__icon\">\n      <i class=\"fas fa-bell\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"pf-c-tile__title\">Disabled</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>\n<br/>\n<br/>\n<div class=\"pf-c-tile\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header pf-m-stacked\">\n    <div class=\"pf-c-tile__icon\">\n      <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n    </div>\n    <div class=\"pf-c-tile__title\">Default</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>\n<div class=\"pf-c-tile pf-m-selected\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header pf-m-stacked\">\n    <div class=\"pf-c-tile__icon\">\n      <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n    </div>\n    <div class=\"pf-c-tile__title\">Selected</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>\n<div class=\"pf-c-tile pf-m-disabled\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header pf-m-stacked\">\n    <div class=\"pf-c-tile__icon\">\n      <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" />\n    </div>\n    <div class=\"pf-c-tile__title\">Disabled</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>","title":"Stacked tiles","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTileCoreDocs} {...{"code":"<div class=\"pf-c-tile pf-m-display-lg\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header pf-m-stacked\">\n    <div class=\"pf-c-tile__icon\">\n      <i class=\"fas fa-bell\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"pf-c-tile__title\">Default</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>\n<div class=\"pf-c-tile pf-m-selected pf-m-display-lg\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header pf-m-stacked\">\n    <div class=\"pf-c-tile__icon\">\n      <i class=\"fas fa-bell\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"pf-c-tile__title\">Selected</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>\n<div class=\"pf-c-tile pf-m-display-lg pf-m-disabled\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header pf-m-stacked\">\n    <div class=\"pf-c-tile__icon\">\n      <i class=\"fas fa-bell\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"pf-c-tile__title\">Disabled</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>\n<br/>\n<br/>\n<div class=\"pf-c-tile pf-m-display-lg\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header pf-m-stacked\">\n    <div class=\"pf-c-tile__icon\">\n      <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" height=\"54px\" width=\"54px\" />\n    </div>\n    <div class=\"pf-c-tile__title\">Default</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>\n<div class=\"pf-c-tile pf-m-display-lg pf-m-selected\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header pf-m-stacked\">\n    <div class=\"pf-c-tile__icon\">\n      <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" height=\"54px\" width=\"54px\" />\n    </div>\n    <div class=\"pf-c-tile__title\">Selected</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>\n<div class=\"pf-c-tile pf-m-display-lg pf-m-disabled\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header pf-m-stacked\">\n    <div class=\"pf-c-tile__icon\">\n      <img src=\"/assets/images/pf-logo-small.svg\" alt=\"PatternFly logo\" height=\"54px\" width=\"54px\" />\n    </div>\n    <div class=\"pf-c-tile__title\">Disabled</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>","title":"Stacked tiles large","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsTileCoreDocs} {...{"code":"<div class=\"pf-c-tile\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header pf-m-stacked\">\n    <div class=\"pf-c-tile__icon\">\n      <i class=\"fas fa-bell\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"pf-c-tile__title\">Default</div>\n  </div>\n  <div class=\"pf-c-tile__body\">This is really really long subtext that goes on for so long that it has to wrap to the next line. This is really really long subtext that goes on for so long that it has to wrap to the next line.</div>\n</div>\n<div class=\"pf-c-tile\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header pf-m-stacked\">\n    <div class=\"pf-c-tile__icon\">\n      <i class=\"fas fa-bell\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"pf-c-tile__title\">Default</div>\n  </div>\n  <div class=\"pf-c-tile__body\">This is really really long subtext that goes on for so long that it has to wrap to the next line.</div>\n</div>\n<div class=\"pf-c-tile\" tabindex=\"0\">\n  <div class=\"pf-c-tile__header pf-m-stacked\">\n    <div class=\"pf-c-tile__icon\">\n      <i class=\"fas fa-bell\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"pf-c-tile__title\">Default</div>\n  </div>\n  <div class=\"pf-c-tile__body\">Subtext goes here</div>\n</div>","title":"Extra content","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
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
              {`tabindex="0"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tile`}
            </code>
          </td>
          <td>
            {`Inserts the tile into the tab order of the page so that it is focusable. `}
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
              {`.pf-c-tile`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a tile. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tile__header`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the tile header.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tile__title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the tile title.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tile__icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the tile icon or image.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tile__body`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates the tile body.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-selected`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tile`}
            </code>
          </td>
          <td>
            {`Modifies the tile for the selected state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-disabled`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tile`}
            </code>
          </td>
          <td>
            {`Modifies the tile for the disabled state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-stacked`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tile__header`}
            </code>
          </td>
          <td>
            {`Modifies the tile header to be stacked vertically.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-display-lg`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-tile`}
            </code>
          </td>
          <td>
            {`Modifies the tile to have large display styling.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsTileCoreDocs.Component.displayName = 'DocumentationComponentsTileCoreDocs';
