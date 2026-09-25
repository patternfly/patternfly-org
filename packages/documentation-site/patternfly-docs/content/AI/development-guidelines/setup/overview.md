---
id: Setup
title: Setup rules
section: AI
subsection: Development guidelines
sortValue: 1
---

# Setup Rules

Project initialization requirements for PatternFly React applications.

## Related Files
- [**Quick Start**](/ai/development-guidelines/quick-start) - Essential setup steps
- [**Development Environment**](/ai/development-guidelines/development-environment) - Development configuration

## Project Initialization

### Use the PatternFly React Seed
Always start new PatternFly React projects using the official seed repository:

```bash
git clone https://github.com/patternfly/patternfly-react-seed
cd patternfly-react-seed
npm install
```

### Required Dependencies
The PatternFly React seed includes all required dependencies. For existing projects, ensure these are installed:

```bash
npm install @patternfly/react-core @patternfly/react-icons
```

## Environment Setup

### Node.js Version
- Use Node.js 20 or later
- Verify with: `node --version`

### Package Manager
- Use npm (recommended) or yarn
- Verify with: `npm --version` or `yarn --version`

## Essential Do's and Don'ts

### ✅ Do's
- Use the official PatternFly React seed for new projects
- Verify Node.js and npm versions before starting
- Install all required dependencies before coding

### ❌ Don'ts
- Start PatternFly projects from scratch without the seed
- Use outdated Node.js versions (below 20)
- Skip dependency installation
