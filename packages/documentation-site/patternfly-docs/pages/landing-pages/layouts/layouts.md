---
id: About
title: Layouts
section: layouts
sortValue: 1
---

import { SectionGallery } from '@patternfly/documentation-framework/components/sectionGallery/sectionGallery';
import layoutsData from './layouts-data.json';

# About

PatternFly’s layouts are used to place components on a page. They create a fully responsive structure to keep components organized and aligned across screen sizes. 

Think of layouts as the scaffolding within which your components will live. When laying out your page, consider the layout pattern that suits your content. Multiple layouts can be used within the same page to create versatile and effective UIs. 


<SectionGallery
  section="layouts"
  galleryItemsData={layoutsData}
  placeholderText="Search layouts by name"
  includeSubsections={true}
  hasGridText={true}
  isFullWidth={false}
/>
