import React from "react";

import './sectionGallery.css';
import { SectionGalleryToolbar } from "./sectionGalleryToolbar";
import { SectionGalleryLayout } from "./sectionGalleryLayout";
import { SectionDataListLayout } from "./sectionDataListLayout";
import { SectionGalleryWrapper } from "./sectionGalleryWrapper";

export const SectionGallery = ({ illustrations, section, galleryItemsData}) => (
  <SectionGalleryWrapper illustrations={illustrations} section={section} galleryItemsData={galleryItemsData}>
    {(sectionGalleryItems, searchTerm, setSearchTerm, layoutView, setLayoutView) => (
      <>
        <SectionGalleryToolbar galleryItems={sectionGalleryItems} searchTerm={searchTerm} setSearchTerm={setSearchTerm} layoutView={layoutView} setLayoutView={setLayoutView} />
        <SectionGalleryLayout galleryItems={sectionGalleryItems} layoutView={layoutView} />
        <SectionDataListLayout galleryItems={sectionGalleryItems} layoutView={layoutView} />
      </>
    )}
  </SectionGalleryWrapper>
);
