---
id: Overview
title: Foundations and styles overview
section: foundations-and-styles
sortValue: 1
---

import { SectionGallery } from '@patternfly/documentation-framework/components/sectionGallery/sectionGallery';
import designFoundationsData from './design-foundations-data.json';

PatternFly’s **foundations and styles** lay the groundwork for all components and extensions that we offer. These visual and structural frameworks describe how all of our components should be built and designed, with additional standards and guidance to help designers and developers work together more efficiently and create clear and consistent product experiences.

## How do I use foundations and styles? 
Our foundations and styles are the “atoms” of our design system, so their usage is typically built into PatternFly features. There are a variety of ways that this plays out in PatternFly, some of the most common being: 

- [Design tokens:](/foundations-and-styles/design-tokens/overview) Foundational design choices like color, spacing, and typography are implemented as reusable semantic variables for consistency.
- [Components:](/components/overview) Multiple foundations and styles are built into components to ensure visual and interactive consistency across UI screens.
- [Patterns:](/patterns/overview) Components are combined within foundational layouts to solve common design problems.
- [Accessibility:](/accessibility/overview) Foundations of color contrast, typography, and focus states influence the rules and guidance for building accessible products.

Although many of these design decisions are already made in PatternFly, there might be instances where you need to adjust some of these smaller, foundational design decisions to better fit your use case. You can find specific guidance for usage and customization in the documentation for each foundation or style.

## Explore foundations and styles
<SectionGallery
  section="foundations-and-styles"
  galleryItemsData={designFoundationsData}
  placeholderText="Search by name"
  includeSubsections={true}
  hasGridText={true}
  isFullWidth={false}
/>