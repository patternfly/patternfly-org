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
 * @param {string} [initialLayout=grid] - Optional text to indicate whether to default to grid or list layout
 * @param {Boolean} [hasGridText=false] - Optional boolean to toggle text on grid layout cards
 * @param {Boolean} [hasGridImages=false] - Optional boolean to toggle images on grid layout cards
 * @param {Boolean} [hasListText=false] - Optional boolean to toggle text on list layout rows
 * @param {Boolean} [hasListImages=false] - Optional boolean to toggle images on list layout rows
*/

export const SectionGallery = ({
  illustrations,
  section,
  subsection = null,
  includeSubsections = false,
  parseSubsections = false,
  galleryItemsData,
  placeholderText,
  countText,
  initialLayout = "grid",
  hasGridText = false,
  hasGridImages = true,
  hasListText = true,
  hasListImages = true
}) => (
  <SectionGalleryWrapper
    illustrations={illustrations}
    section={section}
    subsection={subsection}
    includeSubsections={includeSubsections}
    parseSubsections={parseSubsections}
    galleryItemsData={galleryItemsData}
    initialLayout={initialLayout}
  >
    {(sectionGalleryItems, searchTerm, setSearchTerm, layoutView, setLayoutView) => (
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
        <SectionGalleryLayout
          galleryItems={sectionGalleryItems}
          layoutView={layoutView}
          hasGridText={hasGridText}
          hasGridImages={hasGridImages}
        />
        <SectionDataListLayout
          galleryItems={sectionGalleryItems}
          layoutView={layoutView}
          hasListText={hasListText}
          hasListImages={hasListImages}
        />
      </>
    )}
  </SectionGalleryWrapper>
);
