import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/components/Nav/examples/./Nav.css'

export const DocumentationComponentsNavigationCoreDocs = {
  "slug": "/documentation/components/navigation/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/Nav/examples/Nav.md",
  "section": "components",
  "id": "Navigation",
  "title": "Navigation",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-nav"
};
DocumentationComponentsNavigationCoreDocs.liveContext = {
  
};
DocumentationComponentsNavigationCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsNavigationCoreDocs} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 1</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Current link</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 3</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 4</a>\n    </li>\n  </ul>\n</nav>","title":"Default","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsNavigationCoreDocs} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <section class=\"pf-c-nav__section\" aria-labelledby=\"grouped-title1\">\n    <h2 class=\"pf-c-nav__section-title\" id=\"grouped-title1\">Section title 1</h2>\n    <ul class=\"pf-c-nav__list\">\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 1</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 2</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 3</a>\n      </li>\n    </ul>\n  </section>\n  <section class=\"pf-c-nav__section\" aria-labelledby=\"grouped-title2\">\n    <h2 class=\"pf-c-nav__section-title\" id=\"grouped-title2\">Section title 2</h2>\n    <ul class=\"pf-c-nav__list\">\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 1</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Current link</a>\n      </li>\n      <li class=\"pf-c-nav__item\">\n        <a href=\"#\" class=\"pf-c-nav__link\">Link 3</a>\n      </li>\n    </ul>\n  </section>\n</nav>","title":"Grouped nav","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsNavigationCoreDocs} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded pf-m-current\">\n      <button class=\"pf-c-nav__link\" id=\"expandable-example1\" aria-expanded=\"true\">Link 1 (current and expanded example)\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"expandable-example1\">\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Current link</a>\n          </li>\n          <li class=\"pf-c-divider\" role=\"separator\"></li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Subnav link 3</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded\">\n      <button class=\"pf-c-nav__link\" id=\"expandable-example2\" aria-expanded=\"true\">Link 2 (expanded, but not current example)\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"expandable-example2\">\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable\">\n      <button class=\"pf-c-nav__link\" id=\"expandable-example3\" aria-expanded=\"false\">Link 3\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"expandable-example3\" hidden>\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n  </ul>\n</nav>","title":"Expanded","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsNavigationCoreDocs} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded pf-m-current\">\n      <button class=\"pf-c-nav__link\" aria-expanded=\"true\">Link 1\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"subnav-title1\">\n        <h2 class=\"pf-c-nav__subnav-title pf-screen-reader\" id=\"subnav-title1\">Current and expanded example sub-navigation</h2>\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Current link</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Subnav link 2</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 3</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded\">\n      <button class=\"pf-c-nav__link\" aria-expanded=\"true\">Link 2\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"subnav-title2\">\n        <h2 class=\"pf-c-nav__subnav-title pf-screen-reader\" id=\"subnav-title2\">Expanded, but not current example sub-navigation</h2>\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n  </ul>\n</nav>","title":"Expanded with subnav titles","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsNavigationCoreDocs} {...{"code":"<nav class=\"pf-c-nav\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 1 (not expandable)</a>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded\">\n      <button class=\"pf-c-nav__link\" id=\"nav-mixed-link2\" aria-expanded=\"true\">Link 2 (expanded, but not current example)\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"nav-mixed-link2\">\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-current\">\n      <button class=\"pf-c-nav__link\" id=\"nav-mixed-link4\" aria-expanded=\"false\">Link 3 (current, but not expanded example)\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"nav-mixed-link4\" hidden>\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Subnav link 2</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 3</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n  </ul>\n</nav>","title":"Mixed","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsNavigationCoreDocs} {...{"code":"<nav class=\"pf-c-nav pf-m-horizontal\" aria-label=\"Global\">\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Item 1</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Item 2</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Item 3</a>\n    </li>\n  </ul>\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</nav>","title":"Horizontal","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsNavigationCoreDocs} {...{"code":"<nav class=\"pf-c-nav pf-m-horizontal pf-m-scrollable\" aria-label=\"Global\">\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Horizontal nav item 1</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Horizontal nav item 2</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Horizontal nav item 3</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Horizontal nav item 4</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Horizontal nav item 5</a>\n    </li>\n  </ul>\n  <button class=\"pf-c-nav__scroll-button\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</nav>","title":"Horizontal overflow","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsNavigationCoreDocs} {...{"code":"<nav class=\"pf-c-nav pf-m-tertiary\" aria-label=\"Local\">\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Item 1</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Item 2</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Item 3</a>\n    </li>\n  </ul>\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</nav>","title":"Tertiary","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsNavigationCoreDocs} {...{"code":"<nav class=\"pf-c-nav pf-m-tertiary pf-m-scrollable\" aria-label=\"Local\">\n  <button class=\"pf-c-nav__scroll-button\" disabled aria-label=\"Scroll left\">\n    <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n  </button>\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Tertiary nav item 1</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Tertiary nav item 2</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Tertiary nav item 3</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Tertiary nav item 4</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Tertiary nav item 5</a>\n    </li>\n  </ul>\n  <button class=\"pf-c-nav__scroll-button\" aria-label=\"Scroll right\">\n    <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n  </button>\n</nav>","title":"Tertiary overflow","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsNavigationCoreDocs} {...{"code":"<nav class=\"pf-c-nav pf-m-light\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Current link</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Link 2</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 3</a>\n    </li>\n    <li class=\"pf-c-nav__item\">\n      <a href=\"#\" class=\"pf-c-nav__link\">Link 4</a>\n    </li>\n  </ul>\n</nav>","title":"Default in light mode","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsNavigationCoreDocs} {...{"code":"<nav class=\"pf-c-nav pf-m-light\" aria-label=\"Global\">\n  <ul class=\"pf-c-nav__list\">\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded pf-m-current\">\n      <button class=\"pf-c-nav__link\" id=\"expandable-example1\" aria-expanded=\"true\">Link 1 (current and expanded example)\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"expandable-example1\">\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Current link</a>\n          </li>\n          <li class=\"pf-c-divider\" role=\"separator\"></li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link pf-m-current\" aria-current=\"page\">Subnav link 3</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable pf-m-expanded\">\n      <button class=\"pf-c-nav__link\" id=\"expandable-example2\" aria-expanded=\"true\">Link 2 (expanded, but not current example)\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"expandable-example2\">\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n    <li class=\"pf-c-nav__item pf-m-expandable\">\n      <button class=\"pf-c-nav__link\" id=\"expandable-example3\" aria-expanded=\"false\">Link 3\n        <span class=\"pf-c-nav__toggle\">\n          <span class=\"pf-c-nav__toggle-icon\">\n            <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n          </span>\n        </span>\n      </button>\n      <section class=\"pf-c-nav__subnav\" aria-labelledby=\"expandable-example3\" hidden>\n        <ul class=\"pf-c-nav__list\">\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 1</a>\n          </li>\n          <li class=\"pf-c-nav__item\">\n            <a href=\"#\" class=\"pf-c-nav__link\">Subnav link 2</a>\n          </li>\n        </ul>\n      </section>\n    </li>\n  </ul>\n</nav>","title":"Expanded in light mode","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The navigation system relies on several different sub-components:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-nav__list`}
        </code>
        {` - default navigation list. It is the basis for both default and expandable, vertical navigation.`}
      </li>
    </ul>
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
              {`.pf-c-nav`}
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
              {`aria-labelledby="[id value of link describing subnav]"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-nav__subnav`}
            </code>
          </td>
          <td>
            {`Gives the subnav `}
            <code {...{"className":"ws-code"}}>
              {`<section>`}
            </code>
            {` landmark an accessible name by referring to the element that provides the subnav `}
            <code {...{"className":"ws-code"}}>
              {`<section>`}
            </code>
            {` landmark title.`}
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
              {`.pf-c-nav__link`}
            </code>
          </td>
          <td>
            {`Indicates that subnav section is hidden.`}
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
              {`.pf-c-nav__link`}
            </code>
          </td>
          <td>
            {`Indicates that subnav section is visible.`}
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
              {`.pf-c-nav__subnav`}
            </code>
          </td>
          <td>
            {`Indicates that the subnav section is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`disabled`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-nav__scroll-button`}
            </code>
          </td>
          <td>
            {`Indicates that a scroll button is disabled, when at the first or last item of a list. `}
            <strong>
              {`Required when disabled`}
            </strong>
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
              {`.pf-c-nav__link`}
            </code>
          </td>
          <td>
            {`Indicates the current page link. Can only occur once on page.`}
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
              {`.pf-c-nav`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<nav>`}
            </code>
          </td>
          <td>
            {`Initiates a primary nav element.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-nav__subnav`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<section>`}
            </code>
          </td>
          <td>
            {`Initiates a subnav section.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-nav__list`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
          </td>
          <td>
            {`Initiates nav list.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-nav__item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Initiates nav list item.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-nav__link`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<a>`}
            </code>
          </td>
          <td>
            {`Initiates nav list link.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-nav__section`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<section>`}
            </code>
          </td>
          <td>
            {`Initiates a nav section element.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-nav__section-title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<h1>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<h2>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<h3>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<h4>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<h5>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<h6>`}
            </code>
          </td>
          <td>
            {`Initiates a nav section title.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-nav__toggle`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates the nav toggle wrapper.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-nav__toggle-icon`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<span>`}
            </code>
          </td>
          <td>
            {`Initiates a nav toggle icon wrapper.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-nav__scroll-button`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
          </td>
          <td>
            {`Initiates a nav scroll button. `}
            <strong>
              {`Required for horizontal navs`}
            </strong>
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-horizontal`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-nav`}
            </code>
          </td>
          <td>
            {`Modifies nav for the horizontal variation.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-tertiary`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-nav`}
            </code>
          </td>
          <td>
            {`Modifies nav for the tertiary variation.`}
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
              {`.pf-c-nav`}
            </code>
          </td>
          <td>
            {`Modifies nav for the light variation. `}
            <strong>
              {`Note: only for use with vertical navs, and requires `}
              <code {...{"className":"ws-code"}}>
                {`.pf-m-light`}
              </code>
              {` on the page component's sidebar element (`}
              <code {...{"className":"ws-code"}}>
                {`.pf-c-page__sidebar`}
              </code>
              {`)`}
            </strong>
            {`.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-scrollable`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-nav`}
            </code>
          </td>
          <td>
            {`Modifies nav for the scrollable state.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-expandable`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-nav__item`}
            </code>
          </td>
          <td>
            {`Modifies for the expandable state.`}
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
              {`.pf-c-nav__item`}
            </code>
          </td>
          <td>
            {`Modifies for the expanded state.`}
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
              {`.pf-c-nav__link`}
            </code>
          </td>
          <td>
            {`Modifies for the current state.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsNavigationCoreDocs.Component.displayName = 'DocumentationComponentsNavigationCoreDocs';
