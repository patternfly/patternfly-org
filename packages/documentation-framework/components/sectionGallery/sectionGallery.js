import React from "react";

import './sectionGallery.css';
import { SectionGalleryToolbar } from "./sectionGalleryToolbar";
import { SectionGalleryLayout } from "./sectionGalleryLayout";
import { SectionDataListLayout } from "./sectionDataListLayout";
import { SectionGalleryWrapper } from "./sectionGalleryWrapper";

/** 
 * Helper component returns gallery of items with search toolbar and switchable gallery/data list views.
 * @param {Object} illustrations - Object of preview images mapped to their snake_case item display name
 * @param {string} section - Name of the navigation section to create the gallery within
 * @param {Object} galleryItemsData - Object containing the image location & summary text mapped to the gallery item's hyphenated-name
 * @param {string} [placeholderText=Search by name] - Optional text to be displayed as placeholder for SearchInput
 * @param {string} [countText= items] - Optional text to be displayed after the number of search results
*/

export const SectionGallery = ({
  illustrations,
  section,
  subsection = null,
  includeSubsections = false,
  parseSubsections = false,
  galleryItemsData,
  placeholderText,
  countText
}) => (
  <SectionGalleryWrapper
    illustrations={illustrations}
    section={section}
    subsection={subsection}
    includeSubsections={includeSubsections}
    parseSubsections={parseSubsections}
    galleryItemsData={galleryItemsData}
  >
    {(sectionGalleryItems, searchTerm, setSearchTerm, layoutView, setLayoutView) => {
    return (
      <>
        <SectionGalleryToolbar
          galleryItems={sectionGalleryItems}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          layoutView={layoutView}
          setLayoutView={setLayoutView}
          placeholderText={placeholderText}
          countText={countText}
        />
        <SectionGalleryLayout galleryItems={sectionGalleryItems} layoutView={layoutView} />
        <SectionDataListLayout galleryItems={sectionGalleryItems} layoutView={layoutView} />
      </>
    )}}
  </SectionGalleryWrapper>
);
