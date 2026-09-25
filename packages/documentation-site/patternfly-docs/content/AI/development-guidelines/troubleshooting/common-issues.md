---
id: Common issues
title: Common issues
section: AI
subsection: Development guidelines
sortValue: 1
---

# Common Issues

This document covers frequently encountered problems and their solutions when working with PatternFly React applications.

## Introduction

PatternFly development can present various challenges ranging from setup issues to component-specific problems. This guide provides systematic approaches to diagnosing and resolving common issues that AI coders encounter when building PatternFly applications.

## Related Files

- [**Setup Rules**](/api/v6/AI/development-guidelines_setup/text/text) - Initial setup troubleshooting
- [**External References**](/api/v6/AI/development-guidelines_external-links/text/text) - Additional troubleshooting resources

## AI Coding Specific Issues

### Component Generation Issues

#### Issue: AI generates non-existent PatternFly components
```jsx
// ❌ AI might generate these (they don't exist)
<TextContent>Title</TextContent>
<EmptyStateHeader>No data</EmptyStateHeader>
<TableHeader />
```

**Solutions**:
1. **Use correct v6 components**:
   ```jsx
   // ✅ Correct v6 components
   import { Content, EmptyState, EmptyStateBody } from '@patternfly/react-core';

   <Content component="h1">Title</Content>

   <EmptyState titleText="No data">
     <EmptyStateBody>Description goes here</EmptyStateBody>
   </EmptyState>
   ```

2. **Always verify component existence** - Check [PatternFly.org](https://www.patternfly.org/) before using

#### Issue: AI uses CSS modules syntax
```jsx
// ❌ Wrong - This doesn't work in this project
<div className={styles.customClass}>
```

**Solutions**:
1. **Use PatternFly utility classes** (install `@patternfly/patternfly` and import its utility stylesheet once in the application entry point; `base.css` alone does not include utilities):
   ```jsx
   import '@patternfly/patternfly/patternfly-addons.css';

   // ✅ Correct - Use PatternFly utilities
   <div className="pf-v6-u-m-md pf-v6-u-text-align-center">Content</div>
   ```

2. **Use CSS-in-JS for custom styles**:
   ```jsx
   // ✅ Alternative - Inline styles when utilities don't exist
   <div style={{ margin: 'var(--pf-t--global--spacer--md)' }}>
   ```

#### Issue: AI uses inline styles instead of PatternFly utilities
```jsx
// ❌ Wrong - Avoid inline styles for layout/spacing
<div style={{ margin: 16, textAlign: 'center' }}>
```

**Solutions**:
1. **Use proper PatternFly component composition**:
   ```jsx
   // ✅ Correct - Use proper component hierarchy
   <PageSection>
     <Stack hasGutter>
       <Title headingLevel="h1" size="lg">Content</Title>
       <Content>Content description</Content>
     </Stack>
   </PageSection>
   ```

2. **For custom styles, use design tokens**:
   ```jsx
   // ✅ Only when component composition isn't sufficient
   <div style={{ margin: 'var(--pf-t--global--spacer--md)' }}>
   ```

## Setup and Build Issues

### Issue: Cannot resolve module '@patternfly/react-core'
**Solutions**:
1. Verify package is installed: `npm list @patternfly/react-core`
2. If not installed: `npm install @patternfly/react-core`
3. Clear cache: `rm -rf node_modules package-lock.json && npm install`

### Issue: CSS not loading
**Solutions**:
1. Verify CSS import in main file:
   ```jsx
   import '@patternfly/react-core/dist/styles/base.css';
   ```
2. Check webpack configuration for CSS loaders
3. Clear build cache and rebuild

### Issue: Build fails with TypeScript errors
**Solutions**:
1. Check for missing type definitions
2. Run `npm run type-check` to identify errors
3. Update @types packages if needed

## Component-Specific Issues

### Issue: Table not rendering correctly
**Solutions**:
1. Verify table structure (Table > Thead/Tbody > Tr > Th/Td)
2. Check that all required props are provided
3. Do not import CSS from `@patternfly/react-table`; ensure PatternFly base CSS is loaded by the application

### Issue: Dropdown not positioning correctly
**Solutions**:
1. Ensure dropdown is within a positioned container
2. Check for overflow issues on parent elements
3. Verify proper alignment props are set

### Issue: Modal not displaying
**Solutions**:
1. Check that `isOpen` prop is set to true
2. Verify modal is rendered at the correct DOM level
3. Check for z-index conflicts

## Performance Issues

### Issue: Slow initial page load
**Solutions**:
1. Use lazy loading for routes and heavy components
2. Check bundle size with webpack-bundle-analyzer
3. Optimize images and assets

### Issue: Excessive re-renders
**Solutions**:
1. Use React.memo for expensive components
2. Use useMemo for expensive calculations
3. Use useCallback for stable function references

## Debugging Tips

### Browser DevTools
- Use React DevTools extension to inspect component hierarchy
- Check Console tab for errors and warnings
- Use Network tab to verify asset loading

### PatternFly Specific Debugging
- Use browser inspector to verify `pf-v6-` classes are applied
- Check computed styles for design token values
- Verify component props are being passed correctly

## Essential Do's and Don'ts

### ✅ Do's
- Verify component existence before using
- Use proper PatternFly component composition
- Check browser console for errors
- Use browser DevTools for debugging

### ❌ Don'ts
- Assume AI-generated components exist
- Ignore browser console warnings
- Skip proper error handling
- Use outdated PatternFly versions or APIs
