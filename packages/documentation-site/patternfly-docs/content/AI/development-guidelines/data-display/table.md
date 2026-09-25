---
id: Table
title: Table component rules
section: AI
subsection: Development guidelines
sortValue: 1
---

# Table Component Rules

Essential rules for using the PatternFly React Table component.

## Related Files
- [**Component Architecture**](/ai/development-guidelines/component-architecture/) - Component structure patterns
- [**Data View Rules**](/ai/development-guidelines/data-display/overview/) - For data view alternatives

## Installation Rules

### Required Installation
```bash
npm install @patternfly/react-table
```

### Required CSS Import
```jsx
import '@patternfly/react-table/dist/css/main.css';
```

## Import Rules

### Required Import Pattern
- ✅ **Use standard imports** from the main package

```jsx
// ✅ Correct
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@patternfly/react-table';
```

## Implementation Rules

### Component Structure
- ✅ **Use the Table component hierarchy** - Table > Thead/Tbody > Tr > Th/Td
- ✅ **Use proper cell components** - Th for headers, Td for data cells
- ❌ **Don't use raw HTML table elements** - Use PatternFly Table components

```jsx
// ✅ Correct structure
<Table aria-label="Simple table">
  <Thead>
    <Tr>
      <Th>Name</Th>
      <Th>Age</Th>
      <Th>City</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>John</Td>
      <Td>30</Td>
      <Td>New York</Td>
    </Tr>
  </Tbody>
</Table>
```

### Row Selection
- ✅ **Use built-in selection props** - `isRowSelectable`, `onSelect`
- ✅ **Handle selection state** - Track selected rows in component state
- ❌ **Don't create custom selection logic** - Use PatternFly selection features

```jsx
// ✅ Correct row selection
<Table
  aria-label="Selectable table"
  variant="compact"
>
  <Thead>
    <Tr>
      <Th select={{ onSelect: handleSelect, isSelected: isRowSelected }} />
      <Th>Name</Th>
    </Tr>
  </Thead>
  <Tbody>
    {rows.map((row) => (
      <Tr key={row.id}>
        <Td select={{ rowIndex: row.id }} />
        <Td>{row.name}</Td>
      </Tr>
    ))}
  </Tbody>
</Table>
```

### Row Actions
- ✅ **Use row action cells** - Add action buttons in table rows
- ✅ **Use ActionGroup for multiple actions**
- ❌ **Don't use dropdowns for 2-3 actions** - Use inline buttons

### Sorting and Filtering
- ✅ **Use built-in sorting** - `sort` prop on Th
- ✅ **Implement filtering in parent component** - Filter data before rendering
- ❌ **Don't create custom sorting UI** - Use PatternFly sorting features

## Essential Do's and Don'ts

### ✅ Do's
- Import CSS from `@patternfly/react-table/dist/css/main.css`
- Use proper Table component hierarchy
- Handle row selection and actions using built-in props
- Implement proper accessibility with aria-labels

### ❌ Don'ts
- Skip CSS imports
- Use raw HTML table elements
- Create custom selection or sorting logic
- Ignore responsive design for mobile views