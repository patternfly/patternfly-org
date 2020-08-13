import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsEmptyStateCoreDocs = {
  "slug": "/documentation/components/empty-state/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/EmptyState/examples/EmptyState.md",
  "section": "components",
  "id": "Empty state",
  "title": "Empty state",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-empty-state"
};
DocumentationComponentsEmptyStateCoreDocs.liveContext = {
  
};
DocumentationComponentsEmptyStateCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsEmptyStateCoreDocs} {...{"code":"<div class=\"pf-c-empty-state\">\n  <div class=\"pf-c-empty-state__content\">\n    <i class=\"fas fa-cubes pf-c-empty-state__icon\" aria-hidden=\"true\"></i>\n    <h1 class=\"pf-c-title pf-m-lg\">Empty state</h1>\n    <div class=\"pf-c-empty-state__body\">This represents an the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>\n    <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary action</button>\n    <div class=\"pf-c-empty-state__secondary\">\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Multiple</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Action buttons</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Can</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Go here</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">In the secondary</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Action area</button>\n    </div>\n  </div>\n</div>","title":"Basic","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsEmptyStateCoreDocs} {...{"code":"<div class=\"pf-c-empty-state pf-m-sm\">\n  <div class=\"pf-c-empty-state__content\">\n    <i class=\"fas fa-cubes pf-c-empty-state__icon\" aria-hidden=\"true\"></i>\n    <h1 class=\"pf-c-title pf-m-lg\">Empty state</h1>\n    <div class=\"pf-c-empty-state__body\">This represents an the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>\n    <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary action</button>\n    <div class=\"pf-c-empty-state__secondary\">\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Multiple</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Action buttons</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Can</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Go here</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">In the secondary</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Action area</button>\n    </div>\n  </div>\n</div>","title":"Small","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsEmptyStateCoreDocs} {...{"code":"<div class=\"pf-c-empty-state pf-m-lg\">\n  <div class=\"pf-c-empty-state__content\">\n    <i class=\"fas fa-cubes pf-c-empty-state__icon\" aria-hidden=\"true\"></i>\n    <h1 class=\"pf-c-title pf-m-lg\">Empty state</h1>\n    <div class=\"pf-c-empty-state__body\">This represents an the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>\n    <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary action</button>\n    <div class=\"pf-c-empty-state__secondary\">\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Multiple</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Action buttons</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Can</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Go here</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">In the secondary</button>\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Action area</button>\n    </div>\n  </div>\n</div>","title":"Large","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsEmptyStateCoreDocs} {...{"code":"<div class=\"pf-c-empty-state pf-m-xl\">\n  <div class=\"pf-c-empty-state__content\">\n    <i class=\"fas fa-cubes pf-c-empty-state__icon\" aria-hidden=\"true\"></i>\n    <h1 class=\"pf-c-title pf-m-4xl\">Empty state</h1>\n    <div class=\"pf-c-empty-state__body\">This represents an the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>\n    <button class=\"pf-c-button pf-m-primary\" type=\"button\">Primary action</button>\n  </div>\n</div>","title":"Extra large","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsEmptyStateCoreDocs} {...{"code":"<div class=\"pf-c-empty-state\">\n  <div class=\"pf-c-empty-state__content\">\n    <i class=\"fas fa-cubes pf-c-empty-state__icon\" aria-hidden=\"true\"></i>\n    <h1 class=\"pf-c-title pf-m-lg\">Empty State</h1>\n    <div class=\"pf-c-empty-state__body\">This represents an the empty state pattern in PatternFly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.</div>\n    <div class=\"pf-c-empty-state__primary\">\n      <button class=\"pf-c-button pf-m-link\" type=\"button\">Action buttons</button>\n    </div>\n  </div>\n</div>","title":"With primary element","lang":"html"}}>
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
              {`aria-hidden="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-empty-state__icon`}
            </code>
          </td>
          <td>
            {`Hides icon for assistive technologies. `}
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
              {`.pf-c-empty-state`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates an empty state component. The empty state centers its content (`}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-empty-state__content`}
            </code>
            {`) vertically and horizontally. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-empty-state__content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates the content container. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-empty-state__icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<i>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates the empty state icon or icon container when used as a `}
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<h1>, <h2>, <h3>, <h4>, <h5>, <h6>`}
            </code>
          </td>
          <td>
            {`Creates the empty state title. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-empty-state__body`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates the empty state body content. You can have more than one `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-empty-state__body`}
            </code>
            {` elements.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button.pf-m-primary`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Creates the primary action button.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-empty-state__primary`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Container for primary actions. Can be used in lieu of using `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-button.pf-m-primary`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-empty-state__secondary`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Container secondary actions.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-sm`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-empty-state`}
            </code>
          </td>
          <td>
            {`Modifies the empty state for a small max-width.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-lg`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-empty-state`}
            </code>
          </td>
          <td>
            {`Modifies the empty state for a large max-width.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-xl`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-empty-state`}
            </code>
          </td>
          <td>
            {`Modifies the empty state for a x-large max-width.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-full-height`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-empty-state`}
            </code>
          </td>
          <td>
            {`Modifies the empty state to be `}
            <code {...{"className":"ws-code"}}>
              {`height: 100%`}
            </code>
            {`. If you need the empty state content to be centered vertically, you can use this modifier to make the empty state fill the height of its container, and center `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-empty-state__content`}
            </code>
            {`. `}
            <strong>
              {`Note:`}
            </strong>
            {` this modifier requires the parent of `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-empty-state`}
            </code>
            {` have an implicit or explicit `}
            <code {...{"className":"ws-code"}}>
              {`height`}
            </code>
            {` defined.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsEmptyStateCoreDocs.Component.displayName = 'DocumentationComponentsEmptyStateCoreDocs';
