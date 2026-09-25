---
id: Styling standards
title: Styling standards
section: AI
subsection: Development guidelines
sortValue: 3
---

# Styling Standards

Essential CSS and styling rules for PatternFly React applications.

## Related Files
- [**PatternFly Guidelines**](/api/v6/AI/development-guidelines_overview/text/text) - Core development principles
- [**Component Rules**](/api/v6/AI/development-guidelines_component-architecture/text/text) - Component structure patterns
- [**Layout Rules**](/api/v6/AI/development-guidelines_layout/text/text) - Page layout styling

## Class Naming Rules

### PatternFly v6 Requirements
- ✅ **ALWAYS use `pf-v6-` prefix** - All PatternFly v6 classes
- ❌ **NEVER use legacy prefixes** - No `pf-v5-`, `pf-v4-`, `pf-u` or `pf-c-`

```css
/* ✅ Correct v6 classes */
.pf-v6-c-button          /* Components */
.pf-v6-u-m-md            /* Utilities */
.pf-v6-l-grid            /* Layouts */

/* ❌ Wrong - Don't use these */
.pf-v5-c-button
.pf-u-m-md
.pf-c-button
```

## Component Composition Rules

> **Component-first approach:** Use proper PatternFly component composition for layout and spacing. Components should be children of appropriate containers like PageSection, ActionGroup, Stack, etc.

### Use Component Composition First
```jsx
// ✅ Correct - Use proper component composition
<PageSection>
  <Stack hasGutter>
    <Title headingLevel="h1">Dashboard</Title>
    <Content>Dashboard content</Content>
  </Stack>
</PageSection>

// ❌ Wrong - Utility classes for basic layout
<div className="pf-v6-u-m-md">
  <div className="pf-v6-u-mb-sm">Dashboard</div>
  <div>Dashboard content</div>
</div>
```

### Use Component Props Second
```jsx
// ✅ Correct - Use component props for spacing and layout
<Table borders={false} gridBreakPoint="grid-lg">
  <Thead>
    <Tr>
      <Th modifier="nowrap">Name</Th>
    </Tr>
  </Thead>
</Table>

<ActionGroup>
  <Button variant="primary">Save</Button>
  <Button variant="secondary">Cancel</Button>
</ActionGroup>

// ❌ Wrong - Utility classes when component props exist
<Table className="pf-v6-u-m-md">
  <Button className="pf-v6-u-mr-sm">Save</Button>
  <Button>Cancel</Button>
</Table>
```

### Common Component Patterns for Layout
```jsx
// Page structure
<PageSection>
  <Stack hasGutter>
    <Title headingLevel="h1">Page Title</Title>
    <Grid hasGutter>
      <GridItem span={8}>
        <Card>
          <CardHeader><CardTitle>Main Content</CardTitle></CardHeader>
          <CardBody>Content</CardBody>
        </Card>
      </GridItem>
      <GridItem span={4}>
        <Card>
          <CardHeader><CardTitle>Sidebar</CardTitle></CardHeader>
          <CardBody>Sidebar content</CardBody>
        </Card>
      </GridItem>
    </Grid>
  </Stack>
</PageSection>
```

## Utility Class Rules

### When to Use Utility Classes
Utility classes are for **fine-tuning** spacing and alignment when component composition is insufficient.

- ✅ Use for small spacing adjustments
- ✅ Use for text alignment and typography
- ❌ Don't use for primary layout structure
- ❌ Don't use when component props exist

## Custom CSS Rules

### Design Tokens
Always use PatternFly design tokens for custom CSS instead of hardcoded values.

```css
/* ✅ Correct - Use design tokens */
.custom-component {
  margin: var(--pf-t--global--spacer--md);
  color: var(--pf-t--global--text--color--regular);
  font-size: var(--pf-t--global--font--size--body--default);
}

/* ❌ Wrong - Hardcoded values */
.custom-component {
  margin: 16px;
  color: #151515;
  font-size: 14px;
}
```

## Essential Do's and Don'ts

### ✅ Do's
- Use `pf-v6-` prefixed classes for all PatternFly v6 components
- Prioritize component composition over utility classes
- Use PatternFly design tokens for custom CSS
- Follow the component hierarchy for layout

### ❌ Don'ts
- Mix legacy `pf-v5-` or `pf-` classes with `pf-v6-` classes
- Use utility classes for primary layout structure
- Hardcode colors, spacing, or font sizes
- Override PatternFly component styles without good reason
