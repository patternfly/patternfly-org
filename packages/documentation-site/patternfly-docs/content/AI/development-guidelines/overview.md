---
id: Overview
title: Development guidelines overview
section: AI
subsection: Development guidelines
sortValue: 1
---

# PatternFly React Development Rules

> **Starting a new project?**
> For a quick start with PatternFly React, use the [patternfly/patternfly-react-seed](https://github.com/patternfly/patternfly-react-seed) app. It provides a basic build, layout, and scaffolding for new PatternFly applications, including recommended tooling and project structure.

Essential rules and guidelines for AI coders working with PatternFly React applications.

## Quick Navigation

### Setup & Environment
- [**Setup Rules**](/api/v6/AI/development-guidelines_setup/text/text) - Project initialization requirements
- [**Quick Start**](/api/v6/AI/development-guidelines_quick-start/text/text) - Essential setup steps
- [**Environment Rules**](/api/v6/AI/development-guidelines_development-environment/text/text) - Development configuration

### Core Rules
- [**PatternFly Guidelines**](/api/v6/AI/development-guidelines_component-architecture/text/text) - Component structure requirements
- [**Styling Rules**](/api/v6/AI/development-guidelines_styling-standards/text/text) - CSS and styling requirements
- [**AI Prompt Guidance**](/api/v6/AI/development-guidelines_ai-prompt-guidance/text/text) - How to write effective AI prompts
- [**Deployment Guide**](/api/v6/AI/development-guidelines_deployment-guide/text/text) - How to deploy prototypes

### Component Rules
- [**Layout Rules**](/api/v6/AI/development-guidelines_layout/text/text) - Page structure requirements
- [**Table Component Rules**](/api/v6/AI/development-guidelines_table/text/text) - Table usage and best practices
- [**Data View Component Rules**](/api/v6/AI/development-guidelines_data-display/text/text) - Data view usage and best practices

### Specialized Rules
- [**Charts Rules**](/api/v6/AI/development-guidelines_charts/text/text) - PatternFly Charts requirements
- [**Chatbot Rules**](/api/v6/AI/development-guidelines_chatbot/text/text) - PatternFly Chatbot requirements
- [**Component Groups Rules**](/api/v6/AI/development-guidelines_component-groups/text/text) - PatternFly Component Groups requirements

### Troubleshooting
- [**Common Issues**](/api/v6/AI/development-guidelines_common-issues/text/text) - Problem resolution rules

### Resources
- [**External Links**](/api/v6/AI/development-guidelines_external-links/text/text) - Official documentation links

## Usage Rules for AI Coders

1. **Always use PatternFly v6** - Use `pf-v6-` prefixed classes only
2. **Component-first approach** - Use PatternFly components before custom solutions
3. **Consult documentation** - Reference [PatternFly.org](https://www.patternfly.org/) for examples
4. **Follow accessibility** - Implement proper ARIA labels and keyboard navigation
5. **Use utility classes** - Prefer PatternFly utilities over custom CSS
6. **Handle states** - Always implement loading, error, and empty states

## Common AI Coding Issues Addressed

Based on feedback, these rules prevent frequent AI-generated errors:

- **No CSS modules syntax** - `className={styles.x}` doesn't work in this project
- **No non-existent components** - Verify components exist before using
- **No inline styles for layout** - Use PatternFly utilities instead
- **Chart imports must include `/victory`** - Critical for chart components
- **Always include accessibility attributes** - Keyboard navigation and ARIA labels
- **Use specific, detailed prompts** - See [AI Prompt Guidance](/api/v6/AI/development-guidelines_ai-prompt-guidance/text/text)

## Documentation Structure

Each file contains:
- **Rules** - Specific requirements to follow
- **Do's and Don'ts** - Clear guidance on what to avoid
- **Links** - References to official PatternFly documentation
- **Quick examples** - Minimal code patterns when needed

## Reference Documentation

- [PatternFly.org](https://www.patternfly.org/)
- [PatternFly React GitHub Repository](https://github.com/patternfly/patternfly-react)

> For all rules and examples, consult both PatternFly.org and the official GitHub repository. When using AI tools, leverage context7 to fetch the latest docs from these sources.
