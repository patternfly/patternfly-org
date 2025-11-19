---
id: Overview
title: Extensions overview
section: extensions
sortValue: 1
---

import { SectionGallery } from '@patternfly/documentation-framework/components/sectionGallery/sectionGallery';
import extensionsData from './extensions-data.json';

PatternFly's **extensions** are holistic solutions that utilize multiple PatternFly components, typically addressing specific, cross-project use cases. Extensions accelerate development by providing pre-built, reusable code for common interactions, making it easier to drive consistency throughout a user’s journey across multiple products and platforms.

## How does an extension differ from a pattern?

Extensions differ from [patterns](/patterns/overview) because they provide concrete code solutions for specific, repeated use cases, not just general design guidance and direction. Extensions are built from [components](/components/overview), with customizations that adhere to our core [foundations and styles](/foundations-and-styles/overview) to offer a ready-to-use code solution.

While extensions are primarily developed for the needs of Red Hat products, anyone in our community can use an extension for their own needs.

## How do I use extensions?

Extensions live in their own packages and GitHub repositories, so you will need to import the relevant product for an extension that you'd like to use. From there, refer to the guidance on our website to implement and customize the extension for your use case.

## How do I contribute a new extension?

Extensions are a fantastic way to get involved in the PatternFly community. If you have an idea for a new extension, or want to contribute to an existing one, you can:

- [Start a discussion on GitHub.](https://github.com/orgs/patternfly/discussions/categories/extensions)
- [Reach out to us on Slack.](http://join.slack.com/t/patternfly/shared_invite/zt-1npmqswgk-bF2R1E2rglV8jz5DNTezMQ)

## Explore extensions

<SectionGallery
  section="extensions"
  galleryItemsData={extensionsData}
  placeholderText="Search by name"
  includeSubsections={true}
  hasGridText={true}
  isFullWidth={false}
/>