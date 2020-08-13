import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsBreadcrumbCoreDocs = {
  "slug": "/documentation/components/breadcrumb/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Breadcrumb/examples/Breadcrumb.md",
  "section": "components",
  "id": "Breadcrumb",
  "title": "Breadcrumb",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-breadcrumb"
};
DocumentationComponentsBreadcrumbCoreDocs.liveContext = {
  
};
DocumentationComponentsBreadcrumbCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsBreadcrumbCoreDocs} {...{"code":"<nav class=\"pf-c-breadcrumb\" aria-label=\"breadcrumb\">\n  <ol class=\"pf-c-breadcrumb__list\">\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section home</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link pf-m-current\" aria-current=\"page\">Section landing</a>\n    </li>\n  </ol>\n</nav>","title":"Basic","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsBreadcrumbCoreDocs} {...{"code":"<nav class=\"pf-c-breadcrumb\" aria-label=\"breadcrumb\">\n  <ol class=\"pf-c-breadcrumb__list\">\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>Section home</li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link pf-m-current\" aria-current=\"page\">Section landing</a>\n    </li>\n  </ol>\n</nav>","title":"Without home link","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsBreadcrumbCoreDocs} {...{"code":"<nav class=\"pf-c-breadcrumb\" aria-label=\"breadcrumb\">\n  <ol class=\"pf-c-breadcrumb__list\">\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section home</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <a href=\"#\" class=\"pf-c-breadcrumb__link\">Section title</a>\n    </li>\n    <li class=\"pf-c-breadcrumb__item\">\n      <span class=\"pf-c-breadcrumb__item-divider\">\n        <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n      </span>\n      <h1 class=\"pf-c-breadcrumb__heading\">\n        <a href=\"#\" class=\"pf-c-breadcrumb__link pf-m-current\" aria-current=\"page\">Section title</a>\n      </h1>\n    </li>\n  </ol>\n</nav>","title":"With heading","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A breadcrumb is a list of links to display a user's navigational hierarchy. The last item of the breadcrumb list indicates the current page's location.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-breadcrumb__list`}
        </code>
        {` is the default breadcrumb navigation. It provides links to previous navigation pages and also shows the current page's location.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`In the event that a page does not have a traditional `}
      <code {...{"className":"ws-code"}}>
        {`<h1>`}
      </code>
      {` page title, a heading can be included in the breadcrumbs and an optional link within.`}
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
              {`aria-label="[landmark description]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-breadcrumb`}
            </code>
          </td>
          <td>
            {`Describes `}
            <code {...{"className":"ws-code"}}>
              {`<nav>`}
            </code>
            {` landmark.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-label="[link name]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-breadcrumb__link`}
            </code>
          </td>
          <td>
            {`If link has no text (icon), add an aria-label.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`aria-current="page"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-breadcrumb__item`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-breadcrumb__link`}
            </code>
          </td>
          <td>
            {`Indicates the current page within a set of pages.`}
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
              {`.pf-c-breadcrumb`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<nav>`}
            </code>
          </td>
          <td>
            {`Initiates a primary breadcrumb element. `}
            <strong>
              {`Required`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-breadcrumb__list`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ol>`}
            </code>
          </td>
          <td>
            {`Initiates default breadcrumb ordered list.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-breadcrumb__item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Initiates default breadcrumb list item.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-breadcrumb__item-divider`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates default breadcrumb list item divider.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-breadcrumb__link`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<a>`}
            </code>
          </td>
          <td>
            {`Initiates default breadcrumb list link.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-breadcrumb__title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<h1>`}
            </code>
          </td>
          <td>
            {`Initiates breadcrumb header.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-current`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-breadcrumb__link`}
            </code>
          </td>
          <td>
            {`Modifies to display the list item as the current item.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsBreadcrumbCoreDocs.Component.displayName = 'DocumentationComponentsBreadcrumbCoreDocs';
