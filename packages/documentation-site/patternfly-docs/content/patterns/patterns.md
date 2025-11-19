---
id: Overview
title: Patterns overview
section: patterns
sortValue: 1
---

import { SectionGallery } from '@patternfly/documentation-framework/components/sectionGallery/sectionGallery';
import patternsData from './patterns-data.json';

**Patterns** are reusable, best practices solutions that solve common user problems. They offer complex guidance that often involves the relationship between multiple components. To outline a pattern's conventions, we provide design guidelines that describe a pattern's usage, appearance, features, variations, and more. We also often provide demos to help you visualize the implementation of a pattern.

---

## How do I use patterns?

Patterns provide design guidance on how you should combine different **[components](/components/all-components)** and foundational styles for recurring design challenges, such as displaying complex data or managing user workflows. While patterns offer abstract guidance, they are distinct from extensions, which provide the actual pre-built coded solutions.

Our more holistic design patterns, such as our dashboard and card view, are maintained in our separate [Patterns & Extensions Figma library.](https://www.figma.com/community/file/1357062621908564852/patternfly-6-patterns-extensions)

---

## Explore patterns

<SectionGallery
  section="patterns"
  galleryItemsData={patternsData}
  placeholderText="Search by name"
  includeSubsections={true}
  hasGridText={true}
  isFullWidth={false}
/>
