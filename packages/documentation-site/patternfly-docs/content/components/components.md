---
id: Overview
title: Components overview
section: components
sortValue: 1
---
import { SectionGallery } from '@patternfly/documentation-framework/components/sectionGallery/sectionGallery';
import * as illustrations from './img/component-illustrations';
import componentsData from './components-data.json';

**Components** are the foundational building blocks of the PatternFly design system. They are reusable, well-tested UI elements designed to ensure visual and functional consistency across all your products and applications.

Components integrate with the design system through:
- [Foundations and styles](/foundations-and-styles/overview): Components strictly adhere to our core design tokens and guidelines.
- [Patterns](/patterns/overview): Components are the building blocks that are combined to implement design patterns.
- [Extensions](/extensions/overview): Components are the basis for the complex, pre-built, reusable code solutions offered by extensions.

---

## How do I use components?

Usage information for specific features, variations, and accessibility details is outlined in each component's design guidelines page.

### Component lifecycle 

Outside of our standard components, some components are at a different place in their lifecycle:

- **Beta components:** Under review and open for further evolution.
- **Deprecated components:** Available for use, but no longer recommended or actively maintained.

For full details on versioning, maintenance, and deprecation timelines, refer to our [Releases overview](/releases/overview).

---

## Explore components

<SectionGallery
  section="components"
  illustrations={illustrations}
  galleryItemsData={componentsData}
  placeholderText="Search by name"
  includeSubsections={true}
  hasGridText={true}
  isFullWidth={true}
  onlyShowInGalleryData={true}
/>