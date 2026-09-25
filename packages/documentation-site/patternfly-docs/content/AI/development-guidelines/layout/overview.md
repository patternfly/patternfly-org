---
id: Layout
title: Layout components overview
section: AI
subsection: Development guidelines
sortValue: 1
---

# Layout Components

This section covers PatternFly layout components and page structure patterns for building consistent application layouts.

> **Note:** For up-to-date code examples, this documentation now links directly to the official PatternFly documentation and the PatternFly React GitHub repository. Inline code has been replaced with links to ensure you always see the latest patterns and best practices. **All layout examples should use PatternFly React layout components (e.g., Grid, GridItem, Flex, FlexItem) instead of divs with utility classes.**

## Introduction

PatternFly layout components provide the foundation for structuring application pages and organizing content. These components ensure consistent spacing, responsive behavior, and proper semantic structure across your application.

## Reference Documentation

- [PatternFly Layouts on PatternFly.org](https://www.patternfly.org/foundations-and-styles/layouts/overview)
- [PatternFly React GitHub Repository](https://github.com/patternfly/patternfly-react)

> For the most up-to-date documentation and code examples, consult both PatternFly.org and the official GitHub repository. When using AI tools, leverage context7 to fetch the latest docs from these sources.

## Related Files

- [**Component Architecture**](/ai/development-guidelines/component-architecture) - Component structure patterns
- [**Styling Standards**](/ai/development-guidelines/styling-standards) - Layout styling guidelines

## Core Layout Components

### PageSection Component

The [`PageSection`](https://www.patternfly.org/components/page) component is the primary building block for page content structure. It is highly versatile and supports multiple variants, padding options, and responsive configurations.

For detailed examples of all its features, refer to the official documentation.

- [**PageSection Official Docs**](https://www.patternfly.org/components/page)
- [**PageSection Code Examples on GitHub**](https://github.com/patternfly/patternfly-react/tree/main/packages/react-core/src/components/Page/examples)

## Common Layout Patterns

This section describes common page layout patterns and links to their official documentation and examples.

### Standard Page Layout
A standard page layout typically consists of a page title, an optional toolbar for actions, and a main content area.

- [**Page Layout Documentation**](https://www.patternfly.org/components/page/design-guidelines)
- [**Page Component Examples on GitHub**](https://github.com/patternfly/patternfly-react/tree/main/packages/react-core/src/components/Page/examples)

### Dashboard Layout
A dashboard is used to display a high-level overview of system status and key metrics using a grid of cards and charts.

- [**Dashboard Pattern Documentation**](https://www.patternfly.org/patterns/dashboard)
- [**Grid Layout Examples on GitHub**](https://github.com/patternfly/patternfly-react/tree/main/packages/react-core/src/layouts/Grid/examples)

### Form Layout
Forms should be presented clearly within a card or a dedicated page section, often in a two-column layout on larger screens to separate the form from supplementary help text.

- [**Form Component Documentation**](https://www.patternfly.org/components/forms/form)
- [**Form Code Examples on GitHub**](https://github.com/patternfly/patternfly-react/tree/main/packages/react-core/src/components/Form/examples)

## Grid System Integration

The PatternFly `Grid` and `GridItem` components are used to create flexible, responsive layouts. For detailed examples of basic and responsive grid patterns, refer to the official documentation.

- [**Grid Layout Documentation**](https://www.patternfly.org/foundations-and-styles/layouts/grid)
- [**Grid Code Examples on GitHub**](https://github.com/patternfly/patternfly-react/tree/main/packages/react-core/src/layouts/Grid/examples)

## Essential Do's and Don'ts

### ✅ Do's
- Use PatternFly layout components (PageSection, Grid, Flex) for structure
- Follow the established page structure patterns
- Ensure layouts are responsive and accessible

### ❌ Don'ts
- Use raw `div` elements with utility classes for primary layout
- Ignore responsive design considerations
- Create inconsistent spacing between components
