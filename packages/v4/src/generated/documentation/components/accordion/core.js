import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsAccordionCoreDocs = {
  "slug": "/documentation/components/accordion/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Accordion/examples/Accordion.md",
  "section": "components",
  "id": "Accordion",
  "title": "Accordion",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-accordion"
};
DocumentationComponentsAccordionCoreDocs.liveContext = {
  
};
DocumentationComponentsAccordionCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsAccordionCoreDocs} {...{"code":"<div class=\"pf-c-accordion\">\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item one</span>\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item two</span>\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item three</span>\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n  <h3>\n    <button class=\"pf-c-accordion__toggle pf-m-expanded\" aria-expanded=\"true\">\n      <span class=\"pf-c-accordion__toggle-text\">Item four</span>\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content pf-m-expanded\">\n    <div class=\"pf-c-accordion__expanded-content-body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n  </div>\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item five</span>\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n</div>","title":"Fluid","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsAccordionCoreDocs} {...{"code":"<div class=\"pf-c-accordion\">\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item one</span>\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content pf-m-fixed\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n  <h3>\n    <button class=\"pf-c-accordion__toggle pf-m-expanded\" aria-expanded=\"true\">\n      <span class=\"pf-c-accordion__toggle-text\">Item two</span>\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content pf-m-expanded pf-m-fixed\">\n    <div class=\"pf-c-accordion__expanded-content-body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n  </div>\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item three</span>\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content pf-m-fixed\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item four</span>\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content pf-m-fixed\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n  <h3>\n    <button class=\"pf-c-accordion__toggle\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item five</span>\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </h3>\n  <div class=\"pf-c-accordion__expanded-content pf-m-fixed\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </div>\n</div>","title":"Fixed","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsAccordionCoreDocs} {...{"code":"<dl class=\"pf-c-accordion\">\n  <dt>\n    <button class=\"pf-c-accordion__toggle\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item one</span>\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </dt>\n  <dd class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </dd>\n  <dt>\n    <button class=\"pf-c-accordion__toggle\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item two</span>\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </dt>\n  <dd class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </dd>\n  <dt>\n    <button class=\"pf-c-accordion__toggle\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item three</span>\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </dt>\n  <dd class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </dd>\n  <dt>\n    <button class=\"pf-c-accordion__toggle pf-m-expanded\" aria-expanded=\"true\">\n      <span class=\"pf-c-accordion__toggle-text\">Item four</span>\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </dt>\n  <dd class=\"pf-c-accordion__expanded-content pf-m-expanded\">\n    <div class=\"pf-c-accordion__expanded-content-body\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis molestie lorem lacinia dolor aliquet faucibus. Suspendisse gravida imperdiet accumsan. Aenean auctor lorem justo, vitae tincidunt enim blandit vel. Aenean quis tempus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>\n  </dd>\n  <dt>\n    <button class=\"pf-c-accordion__toggle\" aria-expanded=\"false\">\n      <span class=\"pf-c-accordion__toggle-text\">Item five</span>\n      <span class=\"pf-c-accordion__toggle-icon\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n    </button>\n  </dt>\n  <dd class=\"pf-c-accordion__expanded-content\" hidden>\n    <div class=\"pf-c-accordion__expanded-content-body\">This text is hidden</div>\n  </dd>\n</dl>","title":"Definition list","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There are two variations to build the accordion component:
One way uses `}
      <code {...{"className":"ws-code"}}>
        {`<div>`}
      </code>
      {` and `}
      <code {...{"className":"ws-code"}}>
        {`<h1 - h6>`}
      </code>
      {` tags to build the component.
In these examples `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-accordion`}
      </code>
      {` uses `}
      <code {...{"className":"ws-code"}}>
        {`<div>`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-accordion__toggle`}
      </code>
      {` uses `}
      <code {...{"className":"ws-code"}}>
        {`<h3><button>`}
      </code>
      {`, and `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-accordion__expanded-content`}
      </code>
      {` uses `}
      <code {...{"className":"ws-code"}}>
        {`<div>`}
      </code>
      {`. The heading level that you use should fit within the rest of the headings outlined on your page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Another variation is using the definition list:
In these examples `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-accordion`}
      </code>
      {` uses `}
      <code {...{"className":"ws-code"}}>
        {`<dl>`}
      </code>
      {`, `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-accordion__toggle`}
      </code>
      {` uses `}
      <code {...{"className":"ws-code"}}>
        {`<dt><button>`}
      </code>
      {`, and `}
      <code {...{"className":"ws-code"}}>
        {`.pf-c-accordion__expanded-content`}
      </code>
      {` uses `}
      <code {...{"className":"ws-code"}}>
        {`<dd>`}
      </code>
      {`.`}
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
              {`aria-expanded="false"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-accordion__toggle`}
            </code>
          </td>
          <td>
            {`Indicates that the expanded content element is hidden. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-expanded="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-accordion__toggle`}
            </code>
          </td>
          <td>
            {`Indicates that the expanded content element is visible. `}
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
              {`.pf-c-accordion__expanded-content`}
            </code>
          </td>
          <td>
            {`Indicates that the expanded content element is hidden. Use with `}
            <code {...{"className":"ws-code"}}>
              {`aria-expanded="false"`}
            </code>
            {` `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-hidden="true"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-accordion__toggle-icon`}
            </code>
          </td>
          <td>
            {`Hides the icon from assistive technologies.`}
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
              {`.pf-c-accordion`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<dl>`}
            </code>
          </td>
          <td>
            {`Initiates an accordion component. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-accordion__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<h1-h6><button>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<dt><button>`}
            </code>
          </td>
          <td>
            {`Initiates a toggle in the accordion. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-accordion__toggle-text`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the text inside the toggle. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-accordion__toggle-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the toggle icon wrapper. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-accordion__expanded-content`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<dd>`}
            </code>
          </td>
          <td>
            {`Initiates expanded content. `}
            <strong>
              {`Must be paired with a button`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-accordion__expanded-content-body`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates expanded content body. `}
            <strong>
              {`Required`}
            </strong>
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
              {`.pf-c-accordion__toggle`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-accordion__expanded-content`}
            </code>
          </td>
          <td>
            {`Modifies the accordion button and expanded content for the expanded state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-fixed`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-accordion__expanded-content`}
            </code>
          </td>
          <td>
            {`Modifies the expanded content for the fixed state.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsAccordionCoreDocs.Component.displayName = 'DocumentationComponentsAccordionCoreDocs';
