---
id: Development environment
title: Development environment
section: AI
subsection: Development guidelines
sortValue: 3
---

# Development Environment Rules

Configuration rules for development tools and environment settings for PatternFly React development.

## Related Files
- [**Setup Rules**](/api/v6/AI/development-guidelines_setup/text/text) - Project initialization requirements
- [**Quick Start**](/api/v6/AI/development-guidelines_quick-start/text/text) - Essential setup steps
- [**Component Architecture**](/api/v6/AI/development-guidelines_component-architecture/text/text) - Component structure patterns

## Node.js Configuration

### Version Requirements
- Use Node.js 20 or later
- Verify with: `node --version`

### Environment Variables
PatternFly React projects may use environment variables for configuration.

```bash
# Example environment variables
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_ENV=development
```

## Package Manager Configuration

### npm
```bash
# Configure npm registry if needed
npm config set registry https://registry.npmjs.org/
```

### yarn
```bash
# Configure yarn if using yarn
yarn config set registry https://registry.yarnpkg.com
```

## IDE Configuration

### VS Code
Recommended extensions for PatternFly React development:
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Material Icon Theme

### EditorConfig
Ensure your editor respects the project's `.editorconfig` file for consistent formatting.

## Development Server Configuration

### Webpack Dev Server
The PatternFly React seed uses webpack dev server. Configuration is in `webpack.config.js`.

### Hot Module Replacement (HMR)
HMR is enabled by default. Changes to components will hot-reload without full page refresh.

## Build Configuration

### Production Build
```bash
npm run build
```

### Build Output
Production builds are output to the `dist` directory.

## Essential Do's and Don'ts

### ✅ Do's
- Use Node.js 20 or later
- Configure IDE with recommended extensions
- Use the project's environment configuration
- Test with both development and production builds

### ❌ Don'ts
- Use outdated Node.js versions
- Ignore environment configuration files
- Hardcode environment-specific values in code
- Skip testing production builds
