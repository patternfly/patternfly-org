---
id: Data display
title: Data display overview
section: AI
subsection: Development guidelines
sortValue: 1
---

# Data Display Rules

Essential rules for PatternFly data display components including lists, data presentation, and data view patterns.

## Related Files
- [**Component Architecture**](/api/v6/AI/development-guidelines_component-architecture/text/text) - Component structure patterns
- [**Table Rules**](/api/v6/AI/development-guidelines_table/text/text) - For table-based data display

## Data View Component

The PatternFly Data View component is a flexible component for displaying large datasets with options for list, card, or compact grid views.

### When to Use Data View
- Displaying large datasets (50+ items)
- Providing multiple view options to users
- Complex data with varying detail levels

### When to Use Table
- Tabular data with consistent columns
- Sorting and filtering requirements
- Row selection and actions

## List Components

### List
For displaying lists of text content with optional icons.

- [**List Documentation**](https://www.patternfly.org/components/list)
- [**List Examples**](https://github.com/patternfly/patternfly-react/tree/main/packages/react-core/src/components/List/examples)

### Simple List
For basic unordered or ordered lists.

- [**Simple List Documentation**](https://www.patternfly.org/components/simple-list)

## Description List

For displaying labeled data or key-value pairs.

- [**Description List Documentation**](https://www.patternfly.org/components/description-list)

## Essential Do's and Don'ts

### ✅ Do's
- Choose the appropriate component for your data type
- Use PatternFly data components for consistent styling
- Handle loading, empty, and error states
- Implement proper accessibility

### ❌ Don'ts
- Use raw HTML lists when PatternFly components exist
- Create custom data display components unnecessarily
- Ignore loading and error states
- Display unformatted raw data to users
