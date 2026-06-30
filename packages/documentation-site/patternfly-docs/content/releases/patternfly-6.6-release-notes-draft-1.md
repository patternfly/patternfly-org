---
id: Release highlights
section: get-started
---

<Timestamp date={new Date(2026, 5)}>June 2026</Timestamp>

## PatternFly 6.6

This release refines core components and improves visual consistency to help you build better experiences. You'll find focused updates to typography, icons, and foundational components, plus important cross-browser compatibility fixes.

Key highlights include updated Red Hat font integration with refined font-weight tokens, new avatar component capabilities with icon and color variant support, table footer element support, and Safari compatibility improvements. This release focuses on polish — refining interaction states, fixing visual inconsistencies, and enhancing component flexibility across the design system.

### Promoted package versions

- patternfly/patternfly ([changelog](https://github.com/patternfly/patternfly/releases))
  - [@patternfly/patternfly@6.6.0-prerelease.16](https://www.npmjs.com/package/@patternfly/patternfly/v/6.6.0-prerelease.16)

- patternfly/react ([changelog](https://github.com/patternfly/patternfly-react/releases))
  - [@patternfly/react-charts@8.6.0-prerelease.4](https://www.npmjs.com/package/@patternfly/react-charts/v/8.6.0-prerelease.4)
  - [@patternfly/react-code-editor@6.6.0-prerelease.10](https://www.npmjs.com/package/@patternfly/react-code-editor/v/6.6.0-prerelease.10)
  - [@patternfly/react-core@6.6.0-prerelease.9](https://www.npmjs.com/package/@patternfly/react-core/v/6.6.0-prerelease.9)
  - [@patternfly/react-drag-drop@6.6.0-prerelease.9](https://www.npmjs.com/package/@patternfly/react-drag-drop/v/6.6.0-prerelease.9)
  - [@patternfly/react-icons@6.6.0-prerelease.4](https://www.npmjs.com/package/@patternfly/react-icons/v/6.6.0-prerelease.4)
  - [@patternfly/react-styles@6.6.0-prerelease.4](https://www.npmjs.com/package/@patternfly/react-styles/v/6.6.0-prerelease.4)
  - [@patternfly/react-table@6.6.0-prerelease.9](https://www.npmjs.com/package/@patternfly/react-table/v/6.6.0-prerelease.9)
  - [@patternfly/react-templates@6.6.0-prerelease.9](https://www.npmjs.com/package/@patternfly/react-templates/v/6.6.0-prerelease.9)
  - [@patternfly/react-tokens@6.6.0-prerelease.4](https://www.npmjs.com/package/@patternfly/react-tokens/v/6.6.0-prerelease.4)
  - [@patternfly/react-topology@6.6.0-prerelease.1](https://www.npmjs.com/package/@patternfly/react-topology/v/6.6.0-prerelease.1)
  - [@patternfly/react-virtualized-extension@6.2.0](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/6.2.0)

- PatternFly extensions
  - [@patternfly/quickstarts@6.6.0-prerelease.1](https://www.npmjs.com/package/@patternfly/quickstarts/v/6.6.0-prerelease.1) ([changelog](https://github.com/patternfly/quickstarts/releases))
  - [@patternfly/react-user-feedback@6.4.0-prerelease.2](https://www.npmjs.com/package/@patternfly/react-user-feedback/v/6.4.0-prerelease.2)
  - [@patternfly/react-console@6.2.0-prerelease.1](https://www.npmjs.com/package/@patternfly/react-console/v/6.2.0-prerelease.1) ([changelog](https://github.com/patternfly/react-console/releases))
  - [@patternfly/react-log-viewer@6.4.0-prerelease.2](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/6.4.0-prerelease.2) ([changelog](https://github.com/patternfly/react-log-viewer/releases))
  - [@patternfly/react-catalog-view-extension@6.4.0-prerelease.1](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/6.4.0-prerelease.1) ([changelog](https://github.com/patternfly/react-catalog-view/releases))
  - [@patternfly/react-component-groups@6.5.0-prerelease.1](https://www.npmjs.com/package/@patternfly/react-component-groups/v/6.5.0-prerelease.1) ([changelog](https://github.com/patternfly/react-component-groups/releases))
  - [@patternfly/react-data-view@6.5.0-prerelease.2](https://www.npmjs.com/package/@patternfly/react-data-view/v/6.5.0-prerelease.2) ([changelog](https://github.com/patternfly/react-data-view/releases))
  - [@patternfly/chatbot@6.7.0-prerelease.4](https://www.npmjs.com/package/@patternfly/chatbot/v/6.7.0-prerelease.4) ([changelog](https://github.com/patternfly/chatbot/releases))

### Package descriptions

#### Core PatternFly packages

[`@patternfly/patternfly`](https://www.npmjs.com/package/@patternfly/patternfly): Use this CSS framework to access design tokens, component styles, and layout utilities for the PatternFly design system. This release updates Red Hat font integration with refined font-weight token values, adds icon and color variant support to avatars, and introduces table footer element support with `<tfoot>`. We've fixed table header background rendering in Safari, refined button clicked states for inline links, updated caret icons across dual list, pagination, and toolbar components, and polished visual details for alerts, banners, panels, and drag-and-drop interactions.

[`@patternfly/react-core`](https://www.npmjs.com/package/@patternfly/react-core): Build interfaces with React components that implement PatternFly's design patterns, including buttons, forms, navigation, layouts, and data display elements. Avatars, tables, alerts, and buttons all get improvements in this release, with continued focus on modern aesthetics and accessibility.

[`@patternfly/react-styles`](https://www.npmjs.com/package/@patternfly/react-styles): Access PatternFly CSS stylesheets as JavaScript modules in your React applications, giving you type-safe access to component class names. This release includes updated mappings for avatar icon and color variants, table footer elements, and refined typography tokens — so you can programmatically access all the latest component styles.

[`@patternfly/react-tokens`](https://www.npmjs.com/package/@patternfly/react-tokens): Access PatternFly CSS custom properties (design tokens) as JavaScript constants. You can programmatically work with colors, spacing, typography, and other design values. The updated font-weight tokens now align with the latest Red Hat font standards.

[`@patternfly/react-icons`](https://www.npmjs.com/package/@patternfly/react-icons): Add SVG icon components from Font Awesome and PatternFly's custom icon set to your React applications. Updated caret icon variants improve visual consistency across dual list selectors, pagination controls, and toolbar dropdowns.

#### Data visualization and editing

[`@patternfly/react-charts`](https://www.npmjs.com/package/@patternfly/react-charts): Build data visualizations with components based on Victory.js. You can create line charts, bar charts, pie charts, and area charts with PatternFly theming. Your charts work seamlessly with all theming options from PatternFly 6.5 — Project Felt, glass mode, and high-contrast mode.

[`@patternfly/react-table`](https://www.npmjs.com/package/@patternfly/react-table): Create accessible, feature-rich data tables with sorting, filtering, pagination, and selection capabilities. New table footer element support with `<tfoot>` plus Safari rendering fixes mean better cross-browser consistency.

[`@patternfly/react-code-editor`](https://www.npmjs.com/package/@patternfly/react-code-editor): Add code editing to your app with this PatternFly-themed wrapper around the Monaco code editor — the same editor that powers VS Code. You get syntax highlighting and code editing capabilities that work across all PatternFly themes.

[`@patternfly/react-drag-drop`](https://www.npmjs.com/package/@patternfly/react-drag-drop): Implement drag-and-drop interactions in your PatternFly applications. We've refined ghost row border-radius values to improve visual consistency during drag operations.

#### Layout and composition

[`@patternfly/react-templates`](https://www.npmjs.com/package/@patternfly/react-templates): Speed up development with pre-composed page templates and patterns that combine multiple PatternFly components into common application layouts. Component improvements from react-core flow through to your templates automatically.

[`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology): Create node-graph visualizations and topology diagrams to represent application architectures and system relationships. Complex network visualizations stay aligned with PatternFly's design language.

#### Developer experience and onboarding

[`@patternfly/quickstarts`](https://www.npmjs.com/package/@patternfly/quickstarts): Create interactive guided tours and quick-start tutorials to onboard users to complex applications. Your quick-start experiences stay visually consistent with the latest component updates.

#### Specialized extensions

[`@patternfly/react-virtualized-extension`](https://www.npmjs.com/package/@patternfly/react-virtualized-extension): Render large lists and tables efficiently by loading only the visible rows. You can maintain performance even with thousands of items. This stable release continues to provide critical performance optimizations for data-heavy interfaces.

[`@patternfly/react-console`](https://www.npmjs.com/package/@patternfly/react-console): Add VncConsole, SerialConsole, and DesktopViewer components to access virtual machine and server consoles in your web applications. Specialized console functionality integrates seamlessly with PatternFly styling.

[`@patternfly/react-log-viewer`](https://www.npmjs.com/package/@patternfly/react-log-viewer): Display and filter terminal output and application logs with features like search, line wrapping, and ANSI color support. You can integrate log viewing capabilities into your applications with PatternFly's consistent visual language.

[`@patternfly/react-catalog-view-extension`](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension): Build catalog and marketplace experiences for cloud platforms and service catalogs. Specialized catalog components stay aligned with PatternFly's component styles and interaction patterns.

[`@patternfly/react-user-feedback`](https://www.npmjs.com/package/@patternfly/react-user-feedback): Collect user feedback, bug reports, and feature requests directly in your applications. Feedback collection integrates seamlessly across the PatternFly ecosystem.

[`@patternfly/react-component-groups`](https://www.npmjs.com/package/@patternfly/react-component-groups): Use opinionated, higher-level component compositions that standardize common UI patterns across products. Foundational improvements from react-core are built in, giving you consistent, product-ready patterns.

[`@patternfly/react-data-view`](https://www.npmjs.com/package/@patternfly/react-data-view): Display and manipulate data collections with features like filtering, sorting, and multiple view modes. Resizable table columns and other recent additions combine to give you flexible data management.

[`@patternfly/chatbot`](https://www.npmjs.com/package/@patternfly/chatbot): Build conversational AI interfaces with support for message threading, typing indicators, and rich content. This release advances agentic interaction patterns with AI reasoning process visualization, tool call management, and a new chat history drawer — enabling more sophisticated and transparent AI-powered experiences.

<Divider />
