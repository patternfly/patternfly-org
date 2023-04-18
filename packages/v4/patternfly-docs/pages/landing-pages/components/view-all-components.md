---
id: All components
title: All components
section: components
sortValue: 1
---

import { SectionGallery } from '@patternfly/documentation-framework/components/sectionGallery/sectionGallery';
import * as illustrations from '../../../images/component-illustrations';
import componentsData from '../../../components-data.json';

<SectionGallery
  section="components"
  illustrations={illustrations}
  galleryItemsData={componentsData}
  placeholderText="Search components by name"
  parseSubsections={true}
/>
