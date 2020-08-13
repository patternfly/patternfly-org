import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationComponentsSimpleListCoreDocs = {
  "slug": "/documentation/components/simple-list/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/components/SimpleList/examples/SimpleList.md",
  "section": "components",
  "id": "Simple list",
  "title": "Simple list",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-c-simple-list"
};
DocumentationComponentsSimpleListCoreDocs.liveContext = {
  
};
DocumentationComponentsSimpleListCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationComponentsSimpleListCoreDocs} {...{"code":"<div class=\"pf-c-simple-list\">\n  <ul class=\"pf-c-simple-list__list\">\n    <li class=\"pf-c-simple-list__item\">\n      <button class=\"pf-c-simple-list__item-link pf-m-current\" type=\"button\">List item 1</button>\n    </li>\n    <li class=\"pf-c-simple-list__item\">\n      <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 2</button>\n    </li>\n    <li class=\"pf-c-simple-list__item\">\n      <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 3</button>\n    </li>\n  </ul>\n</div>","title":"Simple list","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSimpleListCoreDocs} {...{"code":"<div class=\"pf-c-simple-list\">\n  <ul class=\"pf-c-simple-list__list\">\n    <li class=\"pf-c-simple-list__item\">\n      <a class=\"pf-c-simple-list__item-link pf-m-current\" href=\"#\" tabindex=\"0\">List item 1</a>\n    </li>\n    <li class=\"pf-c-simple-list__item\">\n      <a class=\"pf-c-simple-list__item-link\" href=\"#\" tabindex=\"0\">List item 2</a>\n    </li>\n    <li class=\"pf-c-simple-list__item\">\n      <a class=\"pf-c-simple-list__item-link\" href=\"#\" tabindex=\"0\">List item 3</a>\n    </li>\n  </ul>\n</div>","title":"Simple list with links","lang":"html"}}>
    </Example>
    <Example {...DocumentationComponentsSimpleListCoreDocs} {...{"code":"<div class=\"pf-c-simple-list\">\n  <section class=\"pf-c-simple-list__section\">\n    <h2 class=\"pf-c-simple-list__title\">Title</h2>\n    <ul class=\"pf-c-simple-list__list\">\n      <li class=\"pf-c-simple-list__item\">\n        <button class=\"pf-c-simple-list__item-link pf-m-current\" type=\"button\">List item 1</button>\n      </li>\n      <li class=\"pf-c-simple-list__item\">\n        <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 2</button>\n      </li>\n      <li class=\"pf-c-simple-list__item\">\n        <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 3</button>\n      </li>\n      <li class=\"pf-c-simple-list__item\">\n        <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 4</button>\n      </li>\n    </ul>\n  </section>\n  <section class=\"pf-c-simple-list__section\">\n    <h2 class=\"pf-c-simple-list__title\">Title</h2>\n    <ul class=\"pf-c-simple-list__list\">\n      <li class=\"pf-c-simple-list__item\">\n        <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 1</button>\n      </li>\n      <li class=\"pf-c-simple-list__item\">\n        <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 2</button>\n      </li>\n      <li class=\"pf-c-simple-list__item\">\n        <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 3</button>\n      </li>\n      <li class=\"pf-c-simple-list__item\">\n        <button class=\"pf-c-simple-list__item-link\" type=\"button\">List item 4</button>\n      </li>\n    </ul>\n  </section>\n</div>","title":"Grouped list","lang":"html"}}>
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
              {`tabindex="0"`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`a.pf-c-simple-list__item-link`}
            </code>
          </td>
          <td>
            {`Inserts the link into the tab order of the page so that it is focusable. `}
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
              {`.pf-c-simple-list`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initiates a simple list.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-simple-list__section`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<section>`}
            </code>
          </td>
          <td>
            {`Initiates a simple list section.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-simple-list__title`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<h2>`}
            </code>
          </td>
          <td>
            {`Initiates a simple list title.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-simple-list__list`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<ul>`}
            </code>
          </td>
          <td>
            {`Initiates a simple list unordered list.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-simple-list__item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<li>`}
            </code>
          </td>
          <td>
            {`Initiates a simple list item.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-c-simple-list__item-link`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<button>`}
            </code>
            {`, `}
            <code {...{"className":"ws-code"}}>
              {`<a>`}
            </code>
          </td>
          <td>
            {`Initiates a simple list item link. It can be a button or a link depending on the context.`}
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
              {`.pf-c-simple-list__item-link`}
            </code>
          </td>
          <td>
            {`Modifies the simple list item link for the current state.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationComponentsSimpleListCoreDocs.Component.displayName = 'DocumentationComponentsSimpleListCoreDocs';
