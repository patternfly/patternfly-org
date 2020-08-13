import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/react-core/src/layouts/Gallery/examples/./gallery.css';

export const DocumentationLayoutsGalleryReactDocs = {
  "slug": "/documentation/layouts/gallery/react",
  "source": "react",
  "propComponents": [
    "Gallery",
    "GalleryItem"
  ],
  "sourceLink": "https://github.com/patternfly/patternfly-react/blob/master/packages/react-core/src/layouts/Gallery/examples/Gallery.md",
  "section": "layouts",
  "id": "Gallery",
  "title": "Gallery",
  "toc": [
    "Examples"
  ],
  "cssPrefix": "pf-l-gallery"
};
DocumentationLayoutsGalleryReactDocs.liveContext = {
  
};
DocumentationLayoutsGalleryReactDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationLayoutsGalleryReactDocs} {...{"code":"import React from 'react';\nimport { Gallery, GalleryItem } from '@patternfly/react-core';\n\nGalleryBasicExample = () => (\n  <Gallery>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n  </Gallery>\n);","title":"Basic","lang":"js"}}>
    </Example>
    <Example {...DocumentationLayoutsGalleryReactDocs} {...{"code":"import React from 'react';\nimport { Gallery, GalleryItem } from '@patternfly/react-core';\n\nGalleryWithGuttersExample = () => (\n  <Gallery hasGutter>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n    <GalleryItem>Gallery Item</GalleryItem>\n  </Gallery>\n);","title":"With gutters","lang":"js"}}>
    </Example>
  </React.Fragment>
);
DocumentationLayoutsGalleryReactDocs.Component.displayName = 'DocumentationLayoutsGalleryReactDocs';
