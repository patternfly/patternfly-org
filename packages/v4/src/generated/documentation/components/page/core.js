import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsPageCoreDocs = {
  "slug": "/documentation/components/page/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Page/examples/Page.md",
  "section": "components",
  "id": "Page",
  "title": "Page",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-page"
};
DocumentationComponentsPageCoreDocs.liveContext = {
  
};
DocumentationComponentsPageCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsPageCoreDocs} {...{"code":"<div class=\"pf-c-page\">\n  <header class=\"pf-c-page__header\">\n    <div class=\"pf-c-page__header-brand\">\n      <div class=\"pf-c-page__header-brand-toggle\">toggle</div>\n      <a class=\"pf-c-page__header-brand-link\">Logo</a>\n    </div>\n    <div class=\"pf-c-page__header-tools\">header-tools</div>\n  </header>\n  <div class=\"pf-c-page__sidebar\">\n    <div class=\"pf-c-page__sidebar-body\">pf-c-nav</div>\n  </div>\n  <main class=\"pf-c-page__main\" tabindex=\"-1\">\n    <section class=\"pf-c-page__main-section pf-m-dark-100\"></section>\n    <section class=\"pf-c-page__main-section pf-m-dark-200\"></section>\n    <section class=\"pf-c-page__main-section pf-m-light\"></section>\n    <section class=\"pf-c-page__main-section\"></section>\n  </main>\n</div>","title":"Vertical nav","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsPageCoreDocs} {...{"code":"<div class=\"pf-c-page\">\n  <header class=\"pf-c-page__header\">\n    <div class=\"pf-c-page__header-brand\">\n      <a class=\"pf-c-page__header-brand-link\">Logo</a>\n    </div>\n    <div class=\"pf-c-page__header-nav\">pf-c-nav</div>\n    <div class=\"pf-c-page__header-tools\">header-tools</div>\n  </header>\n  <main class=\"pf-c-page__main\" tabindex=\"-1\">\n    <section class=\"pf-c-page__main-section pf-m-dark-100\"></section>\n    <section class=\"pf-c-page__main-section pf-m-dark-200\"></section>\n    <section class=\"pf-c-page__main-section pf-m-light\"></section>\n    <section class=\"pf-c-page__main-section\"></section>\n  </main>\n</div>","title":"Horizontal nav","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsPageCoreDocs} {...{"code":"<div class=\"pf-c-page\">\n  <header class=\"pf-c-page__header\">\n    <div class=\"pf-c-page__header-brand\">\n      <a class=\"pf-c-page__header-brand-link\">Logo</a>\n    </div>\n    <div class=\"pf-c-page__header-nav\">pf-c-nav</div>\n    <div class=\"pf-c-page__header-tools\">header-tools</div>\n  </header>\n  <main class=\"pf-c-page__main\" tabindex=\"-1\">\n    <section class=\"pf-c-page__main-section pf-m-light\"></section>\n    <section class=\"pf-c-page__main-section pf-m-fill\">This section uses pf-m-fill to fill the available space.</section>\n    <section class=\"pf-c-page__main-section pf-m-light pf-m-no-fill\">This section uses pf-m-no-fill to not fill the available space.</section>\n  </main>\n</div>","title":"With or without fill","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsPageCoreDocs} {...{"code":"<div class=\"pf-c-page\">\n  <header class=\"pf-c-page__header\">\n    <div class=\"pf-c-page__header-brand\">\n      <div class=\"pf-c-page__header-brand-toggle\">toggle</div>\n      <a class=\"pf-c-page__header-brand-link\">Logo</a>\n    </div>\n    <div class=\"pf-c-page__header-tools\">header-tools</div>\n  </header>\n  <div class=\"pf-c-page__sidebar\">\n    <div class=\"pf-c-page__sidebar-body\">pf-c-nav</div>\n  </div>\n  <main class=\"pf-c-page__main\" tabindex=\"-1\">\n    <section class=\"pf-c-page__main-section\">This `.pf-c-page__main-section` has default padding.</section>\n    <section class=\"pf-c-page__main-section pf-m-no-padding pf-m-light\">This `.pf-c-page__main-section` uses `.pf-m-no-padding` to remove all padding.</section>\n    <section class=\"pf-c-page__main-section pf-m-no-padding pf-m-padding-on-md\">This `.pf-c-page__main-section` uses `.pf-m-no-padding .pf-m-padding-on-md` to remove padding up to the `md` breakpoint.</section>\n  </main>\n</div>","title":"Main section padding","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`This component provides the basic chrome for a page, including sidebar, header, and main areas.`}
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
              {`role="banner"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header`}
            </code>
          </td>
          <td>
            {`Identifies the element that serves as the banner region.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`role="main"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__main`}
            </code>
          </td>
          <td>
            {`Identifies the element that serves as the main region.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`tabindex="-1"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__main`}
            </code>
          </td>
          <td>
            {`Allows the main region to receive programmatic focus. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`id="[id]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__main`}
            </code>
          </td>
          <td>
            {`Provides a hook for sending focus to new content. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-expanded="true/false"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header-brand-toggle > .pf-c-button`}
            </code>
          </td>
          <td>
            {`Indicates that the expandable content is visible and the current state of the contents. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-controls="[id of nav]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header-brand-toggle > .pf-c-button`}
            </code>
          </td>
          <td>
            {`Identifies the element controlled by the toggle. `}
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
              {`.pf-c-page`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Declares the page component.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<header>`}
            </code>
          </td>
          <td>
            {`Declares the page header.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header-brand`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates a header container to nest the brand component.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header-brand-toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates a container to nest the sidebar toggle.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header-brand-link`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<a>`}
            </code>
          </td>
          <td>
            {`Creates a link for the brand logo.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header-selector`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates a header container to nest the context selector component.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header-nav`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates a container to nest the navigation component in the header.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header-tools`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates a container to nest the icons and menus in header.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header-tools-group`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates a container for grouping sets of icons and menus in header.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header-tools-item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates a container for an item in a header tools group.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__sidebar`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<aside>`}
            </code>
          </td>
          <td>
            {`Declares the page sidebar.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__sidebar-body`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates a wrapper within the sidebar to hold content.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__main`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<main>`}
            </code>
          </td>
          <td>
            {`Declares the main page area.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__main-nav`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<section>`}
            </code>
          </td>
          <td>
            {`Creates a container to nest the navigation component in the main page area.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__main-breadcrumb`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<section>`}
            </code>
          </td>
          <td>
            {`Creates a container to nest the breadcrumb component in the main page area.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__main-section`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<section>`}
            </code>
          </td>
          <td>
            {`Creates a section container in the main page area. `}
            <strong>
              {`Note: The last/only `}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-page__main-section`}
              </code>
              {` element will grow to fill the availble vertical space. You can change this behavior using `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-fill`}
              </code>
              {` and `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-no-fill`}
              </code>
              {`, which are documented below.`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__drawer`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Creates a container for the drawer component when placing the main page element in the drawer body.`}
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
              {`.pf-c-page__header-tools-item`}
            </code>
          </td>
          <td>
            {`Modifies a header tools item to indicate that the button inside is in the selected state.`}
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
              {`.pf-c-page__sidebar`}
            </code>
          </td>
          <td>
            {`Modifies the sidebar for the expanded state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-collapsed`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__sidebar`}
            </code>
          </td>
          <td>
            {`Modifies the sidebar for the collapsed state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-light`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__sidebar`}
            </code>
          </td>
          <td>
            {`Modifies the sidebar the light variation. `}
            <strong>
              {`Note: for use with a light themed nav component`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-light`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__main-section`}
            </code>
          </td>
          <td>
            {`Modifies a main page section to have a light theme.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-dark-200`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__main-section`}
            </code>
          </td>
          <td>
            {`Modifies a main page section to have a dark theme and a dark transparent background.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-dark-100`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__main-section`}
            </code>
          </td>
          <td>
            {`Modifies a main page section to have a dark theme and a darker transparent background.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-no-padding`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-no-padding{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__main-section`}
            </code>
          </td>
          <td>
            {`Removes padding from the main page section at an optional breakpoint`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-padding{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__main-section`}
            </code>
          </td>
          <td>
            {`Modifies the main page section to add padding back in at a specified breakpoint. Should be used with pf-m-no-padding.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-fill`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__main-section`}
            </code>
          </td>
          <td>
            {`Modifies a main page section to grow to fill the available vertical space.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-no-fill`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__main-section`}
            </code>
          </td>
          <td>
            {`Modifies a main page section to not grow to fill the available vertical space.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-hidden{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header-tools-group`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header-tools-item`}
            </code>
          </td>
          <td>
            {`Hides a header tools group or item at a specified breakpoint, or hides it at all breakpoints with `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-hidden`}
            </code>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-visible{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header-tools-group`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-page__header-tools-item`}
            </code>
          </td>
          <td>
            {`Shows a header tools group or item at a specified breakpoint.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsPageCoreDocs.Component.displayName = 'DocumentationComponentsPageCoreDocs';
