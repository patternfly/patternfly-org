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
- [**Component Architecture**](/ai/development-guidelines/component-architecture) - Component structure patterns
- [**Data View Rules**](/ai/development-guidelines/data-display) - For data view alternatives

## Installation Rules

### Required Installation
```bash
npm install @patternfly/react-table @patternfly/patternfly
```

### Base CSS Import
```jsx
// Import PatternFly base styles once in your application entry point.
import '@patternfly/patternfly/patternfly.css';
```

Do not import CSS from `@patternfly/react-table`; the package does not provide a CSS entry point.

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
- ✅ **Use `select` on `Th` and `Td`** - Pass `onSelect`, `isSelected`, and `rowIndex` to the selection cells
- ✅ **Handle selection state** - Track selected rows in component state
- ❌ **Don't pass selection props to `Table`** - Selection behavior belongs on the header and data cells

```jsx
// ✅ Correct row selection
const [selectedRowIds, setSelectedRowIds] = useState([]);
const isRowSelected = (id) => selectedRowIds.includes(id);
const setRowSelected = (id, isSelected) => {
  setSelectedRowIds((currentIds) =>
    isSelected ? [...currentIds, id] : currentIds.filter((currentId) => currentId !== id)
  );
};

<Table
  aria-label="Selectable table"
  variant="compact"
>
  <Thead>
    <Tr>
      <Th
        select={{
          onSelect: (_event, isSelected) => setSelectedRowIds(isSelected ? rows.map((row) => row.id) : []),
          isSelected: selectedRowIds.length === rows.length
        }}
      />
      <Th>Name</Th>
    </Tr>
  </Thead>
  <Tbody>
    {rows.map((row, rowIndex) => (
      <Tr key={row.id}>
        <Td
          select={{
            rowIndex,
            onSelect: (_event, isSelected) => setRowSelected(row.id, isSelected),
            isSelected: isRowSelected(row.id)
          }}
        />
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
- Import PatternFly base CSS once in the application entry point
- Use proper Table component hierarchy
- Handle row selection with the `select` props on `Th` and `Td`
- Implement proper accessibility with aria-labels

### ❌ Don'ts
- Import CSS from `@patternfly/react-table`
- Use raw HTML table elements
- Pass selection props directly to `Table`
- Ignore responsive design for mobile views
