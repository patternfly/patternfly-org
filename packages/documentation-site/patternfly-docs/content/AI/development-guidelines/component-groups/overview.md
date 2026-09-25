---
id: Component groups
title: Component groups rules
section: AI
subsection: Development guidelines
sortValue: 1
---

# PatternFly Component Groups Rules

Essential rules for using and contributing to PatternFly React Component Groups.

## Overview
PatternFly Component Groups are opinionated React components that combine and extend PatternFly base components to provide standardized, reusable solutions for common product needs. They are maintained collaboratively by the PatternFly and Red Hat Hybrid Cloud Console teams, with a focus on accessibility, design consistency, and extensibility.

- [Component Groups NPM](https://www.npmjs.com/package/@patternfly/react-component-groups)
- [Component Groups GitHub](https://github.com/patternfly/react-component-groups)
- [Migration Guide](https://github.com/patternfly/react-component-groups/blob/main/migration.md)

## Installation Rules

### Required Installation
```bash
npm install @patternfly/react-component-groups
```

### Base CSS Import
```jsx
// Import PatternFly base styles once in your application entry point.
import '@patternfly/react-core/dist/styles/base.css';
```

Component groups do not provide a separate CSS bundle.

## Import Rules

### Import Pattern
- ✅ **Use standard imports** from the package entry point
- ✅ **Use `/dist/dynamic/` imports when needed** to load individual components

```jsx
// ✅ Correct
import { BulkSelect } from '@patternfly/react-component-groups';
```

## Implementation Rules

### Component Usage
- ✅ **Use component groups for complex, opinionated UI patterns**
- ✅ **Reference official PatternFly and component group demos**
- ❌ **Don't reimplement existing group functionality with custom code**

### Example Usage
```tsx
import { useState } from 'react';
import { BulkSelect, BulkSelectValue } from '@patternfly/react-component-groups';

const BulkSelection = () => {
  const allItems = ['Item 1', 'Item 2', 'Item 3'];
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSelect = (value: BulkSelectValue) => {
    if (value === BulkSelectValue.all) setSelectedItems(allItems);
    if (value === BulkSelectValue.none) setSelectedItems([]);
  };

  return (
    <BulkSelect
      isDataPaginated={false}
      canSelectAll
      selectedCount={selectedItems.length}
      totalCount={allItems.length}
      onSelect={handleSelect}
    />
  );
};
```

### Component API Rules
- Use PatternFly naming conventions for props (e.g., `variant`, `onClick`)
- Extend PatternFly types when possible
- Document all props and usage examples
- Avoid unnecessary external dependencies

## Contribution Guidelines
- Ensure new components are sufficiently complex and valuable
- Follow the [component structure and API rules](https://github.com/patternfly/react-component-groups#readme)
- Add unit and Cypress tests for all new components
- Document new components with markdown and usage examples

## Accessibility Rules
- Provide proper ARIA labels and roles
- Ensure keyboard navigation and screen reader support
- Follow PatternFly accessibility best practices

## Essential Do's and Don'ts

### ✅ Do's
- Use the package entry point and import PatternFly base CSS
- Reference official demos and documentation
- Write accessible, well-documented components
- Use JSS for styling and follow naming conventions
- Add tests for all new functionality

### ❌ Don'ts
- Import a nonexistent component-groups CSS bundle
- Reimplement existing group components from scratch
- Ignore accessibility or documentation requirements
- Use `pf-v6-u-XXX` utility classes (use CSS variables instead)

## Common Issues
- **Missing styles:** Ensure PatternFly base CSS is imported
- **Import errors:** Use the package entry point or a supported `/dist/dynamic/` path
- **Component not found:** Check package installation and import paths
- **Accessibility:** Run a11y tests and review ARIA usage

## Quick Reference
- [Component Groups Gallery](https://www.patternfly.org/patternfly-ai/component-groups/overview)
- [Component Groups GitHub](https://github.com/patternfly/react-component-groups)
- [Migration Guide](https://github.com/patternfly/react-component-groups/blob/main/migration.md)

**Note:** Component group guidance takes precedence over general PatternFly patterns for these components. Always consult the latest documentation and demo source code.
