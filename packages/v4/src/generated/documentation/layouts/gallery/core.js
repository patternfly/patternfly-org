import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/layouts/Gallery/examples/./Gallery.css'

export const DocumentationLayoutsGalleryCoreDocs = {
  "slug": "/documentation/layouts/gallery/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/layouts/Gallery/examples/Gallery.md",
  "section": "layouts",
  "id": "Gallery",
  "title": "Gallery",
  "toc": [
    "Examples",
    "Documentation"
  ],
  "cssPrefix": "pf-l-gallery"
};
DocumentationLayoutsGalleryCoreDocs.liveContext = {
  
};
DocumentationLayoutsGalleryCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsGalleryCoreDocs} {...{"code":"<div class=\"pf-l-gallery\">\n  <div class=\"pf-l-gallery__item\">content</div>\n  <div class=\"pf-l-gallery__item\">content</div>\n  <div class=\"pf-l-gallery__item\">content</div>\n  <div class=\"pf-l-gallery__item\">content</div>\n  <div class=\"pf-l-gallery__item\">content</div>\n</div>","title":"Basic","lang":"html"}}>
    </Example>
    <Example {...DocumentationLayoutsGalleryCoreDocs} {...{"code":"<div class=\"pf-l-gallery pf-m-gutter\">\n  <div class=\"pf-l-gallery__item\">content</div>\n  <div class=\"pf-l-gallery__item\">content</div>\n  <div class=\"pf-l-gallery__item\">content</div>\n  <div class=\"pf-l-gallery__item\">content</div>\n  <div class=\"pf-l-gallery__item\">content</div>\n</div>","title":"With gutter","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The gallery layout is designed so that all of its children are of uniform size, display horizontally, and wrap responsively.`}
    </p>
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
              {`.pf-l-gallery`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Initializes a Gallery layout`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-l-gallery__item`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`<div>`}
            </code>
          </td>
          <td>
            {`Explicitly sets the child for the gallery. This class isn't necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers.`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-m-gutter`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-l-gallery`}
            </code>
          </td>
          <td>
            {`Adds space between children by using the globally defined gutter value.`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationLayoutsGalleryCoreDocs.Component.displayName = 'DocumentationLayoutsGalleryCoreDocs';
