---
id: About
title: Extensions
section: extensions
sortValue: 1
---

import { SectionGallery } from '@patternfly/documentation-framework/components/sectionGallery/sectionGallery';
import * as illustrations from '../../../images/component-illustrations';
import extensionsData from './extensions-data.json';

# About

Extensions are complex solutions that utilize multiple PatternFly components. They span products and platforms to drive consistent experiences across a user’s journey.

There are two types of extensions: PatternFly extensions and community extensions.

## PatternFly extensions

PatternFly extensions are those that are released, tested, and fully supported by PatternFly. These extensions are typically designed for cross-project applications.

PatternFly currently supports the following extensions:

<SectionGallery
  section="extensions"
  galleryItemsData={extensionsData}
  placeholderText="Search extensions by name"
  parseSubsections={false}
  defaultLayout="list"
  includeSubsections={true}
/>
