---
id: AI prompt guidance
title: AI prompt guidance
section: AI
subsection: Development guidelines
sortValue: 4
---

# AI Prompt Guidance

How to write effective AI prompts for PatternFly development.

## Prompt Structure

Good prompts for PatternFly development should include:

1. **Context**: What you're building and why
2. **Requirements**: Specific features and behaviors
3. **Constraints**: Design system rules, accessibility requirements
4. **Examples**: Reference components or patterns

## Prompt Templates

### Component Creation
```
Create a PatternFly React component that [describe functionality].
Use the following PatternFly components: [list components].
Follow these requirements:
- [requirement 1]
- [requirement 2]
Ensure accessibility with proper ARIA labels and keyboard navigation.
```

### Bug Fix
```
The PatternFly React component [component name] has an issue where [describe issue].
Current behavior: [describe current behavior]
Expected behavior: [describe expected behavior]
Relevant code: [paste relevant code]
```

### Layout Question
```
How should I structure a PatternFly React layout for [describe layout]?
I want to include [list components/sections].
What are the recommended PatternFly layout components for this?
```

## Best Practices

### Be Specific
- ❌ "Make a form"
- ✅ "Create a PatternFly React form with two text inputs (Name, Email), a select dropdown (Country), and a submit button"

### Reference Existing Patterns
- "Follow the same pattern as the PatternFly Table component with row selection"
- "Use the PageSection and Grid components as shown in the PatternFly dashboard example"

### Include Accessibility Requirements
- "Ensure the component is fully accessible with ARIA labels and keyboard navigation"
- "Use semantic HTML elements and proper heading hierarchy"

### Specify Design Tokens
- "Use PatternFly design tokens for colors and spacing"
- "Follow the pf-v6- class naming convention"