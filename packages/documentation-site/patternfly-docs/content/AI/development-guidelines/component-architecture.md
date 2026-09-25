---
id: Component architecture
title: Component architecture
section: AI
subsection: Development guidelines
sortValue: 2
---

# Component Architecture

This document outlines the essential rules for structuring PatternFly components, managing state, and ensuring performance. It is a high-level guide that links to more detailed documentation for specific patterns.

## Related Files
- [**Layout Rules**](/api/v6/AI/development-guidelines_layout/text/text) - For page structure and layout patterns.
- [**Table Component Rules**](/api/v6/AI/development-guidelines_table/text/text) - For table usage, selection, and actions.
- [**Data View Component Rules**](/api/v6/AI/development-guidelines_data-display/text/text) - For data view usage.
- [**Styling Rules**](/api/v6/AI/development-guidelines_styling-standards/text/text) - For CSS and styling approaches.

## 1. Component Composition

### PatternFly-First Approach
Always start with standard PatternFly components and compose them to build complex UIs. Avoid creating custom components when a PatternFly solution already exists.

```jsx
// ✅ Correct: Compose existing PatternFly components
import { Card, CardTitle, CardBody, Button, Content } from '@patternfly/react-core';

const UserCard = ({ user, onEdit }) => (
  <Card>
    <CardTitle>{user.name}</CardTitle>
    <CardBody>
      <Content component="p">{user.email}</Content>
      <Button variant="secondary" onClick={onEdit}>Edit</Button>
    </CardBody>
  </Card>
);
```

### Component Hierarchy
Structure your application in a clear hierarchy:
1.  **Page Components**: Top-level page structure.
2.  **Section Components**: Major page sections, often corresponding to a `PageSection`.
3.  **Feature Components**: Components that encapsulate a specific piece of functionality.
4.  **PatternFly Components**: The base building blocks from `@patternfly/react-core`.

### Data Display
For displaying labeled data or key-value pairs, always use PatternFly's `DescriptionList` components for clarity and accessibility.
- **See**: [DescriptionList Documentation](https://www.patternfly.org/components/description-list)

## 2. State Management

### Local vs. Shared State
-   **Local State (`useState`)**: Use for component-specific UI state like form inputs or toggles.
-   **Shared State (`useContext`)**: Use for state that needs to be accessed by multiple components in a tree.
-   **Complex State (`useReducer`)**: Use for state with complex update logic.

Keep state as local as possible and only lift it when necessary.

## 3. Performance

### Optimization Strategies
-   **Memoization**: Use `React.memo` and `useMemo` for expensive calculations.
-   **Virtualization**: Use virtualization for long lists.
-   **Lazy Loading**: Use `React.lazy` for route-based code splitting.

## 4. Error Handling

### Error Boundaries
Use error boundaries to gracefully handle errors in React component trees.

```jsx
import { Component } from 'react';
import { Alert } from '@patternfly/react-core';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Alert variant="danger" title="An error occurred" />;
    }
    return this.props.children;
  }
}
```
