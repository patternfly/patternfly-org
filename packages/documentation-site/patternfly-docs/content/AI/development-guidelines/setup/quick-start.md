---
id: Quick start
title: Quick start
section: AI
subsection: Development guidelines
sortValue: 2
---

# Quick Start Guide

This guide provides step-by-step instructions to get a PatternFly React application running quickly using the PatternFly React Seed.

## Introduction

The Quick Start process uses the official PatternFly React Seed repository to scaffold a complete application with pre-configured components, routing, and build tools. This is the fastest way to begin PatternFly development.

## Related Files

- [**Setup Rules**](/api/v6/AI/development-guidelines_setup/text/text) - Prerequisites and setup overview
- [**Development Environment**](/api/v6/AI/development-guidelines_development-environment/text/text) - Environment configuration
- [**Component Architecture**](/api/v6/AI/development-guidelines_component-architecture/text/text) - Development best practices
- [**Common Issues**](/api/v6/AI/development-guidelines_common-issues/text/text) - Troubleshooting setup problems

## Step-by-Step Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/patternfly/patternfly-react-seed
```

**AI Note**: This command can be executed by AI assistants to initialize the project.

### Step 2: Navigate to Project Directory

```bash
cd patternfly-react-seed
```

**Important**: All subsequent npm commands must be run from this directory.

### Step 3: Install Dependencies

```bash
npm install
```

**AI Note**: 
- AI can run this command after verifying Node.js and npm are properly installed
- This step downloads all required PatternFly and React dependencies
- May take several minutes depending on network speed

### Step 4: Start Development Server

```bash
npm run start:dev
```

**Important Considerations**:
- **User Recommendation**: Run this command in a separate terminal to keep it active
- **Default URL**: Development server typically runs at `http://localhost:9000`
- **Additional Information**: Check the project's [README.md](https://github.com/patternfly/patternfly-react-seed#readme) for server configuration details

## Verification Steps

After completing the setup:

1. **Check Server Status**: Ensure the development server starts without errors
2. **Access Application**: Open `http://localhost:9000` in a web browser
3. **Verify Components**: Confirm PatternFly components are rendering correctly
4. **Test Hot Reload**: Make a small change to verify live reloading works

## What You Get

The PatternFly React Seed includes:

### Pre-configured Components
- Page layout structure
- Navigation components
- Basic routing setup
- Example PatternFly components

### Development Tools
- Webpack configuration
- Hot module replacement
- Development server
- Build scripts

## Next Steps

Once your development environment is running:

1. **Explore the Codebase**: Familiarize yourself with the project structure
2. **Review Examples**: Study the included PatternFly component examples
3. **Start Building**: Begin implementing your application features
4. **Reference Documentation**: Keep PatternFly.org open for component documentation

## Common Issues

If you encounter problems during setup, refer to the [Common Issues](/api/v6/AI/development-guidelines_common-issues/text/text) documentation for troubleshooting steps.
