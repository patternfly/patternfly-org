---
id: Overview
title: Generative UIs overview
section: AI
subsection: Generative UIs
sortValue: 1
---

import { Alert } from "@patternfly/react-core";

## What is generative UI?

**Generative UI (GenUI)** refers to a user interface design approach where AI is leveraged to dynamically create and adapt UI elements based on context, user needs, and data. Unlike traditional, static UIs, GenUI can produce layouts, components, and visual styles in real-time, offering more flexible and personalized user experiences.

---

## Compass: PatternFly's GenUI exploration

Generative UI represents a significant opportunity for PatternFly to explore new patterns, layouts, and styles that support AI-driven interface generation. PatternFly has been calling this proof of concept Compass. It investigates how the design system can evolve to support generative UI use cases.

<Alert isInline variant="info" title="Beta feature">Compass is best suited for use as a POC in other proof-of-concept generative UI use cases. It is not yet production quality code and should be used for exploration and experimentation purposes only.</Alert>

### AI-enabled seed app

We are creating an [AI-enabled seed app](https://github.com/patternfly/patternfly-react-seed/tree/compass_theme) that you can use to create your own PatternFly Compass-based POC. The seed app includes the Compass layout fully wired out with all styles set up, providing a solid foundation that you can build on top of. It can be leveraged with AI tools like Cursor or Claude Code to build out your own POC, making it easier to experiment with generative UI patterns and explore new use cases.

### What does Compass include?

To explore Compass and its features, take a look at a number of our full page demos:
- [Full page demo with card view and table layouts](/ai/generative-uis/compass#card-and-data-view-layout)
- [Full page demo with dashboard layout](/ai/generative-uis/compass/org-demos#dashboard-layout)
- [Static, full page HTML demo with multiple content sections](/ai/generative-uis/compass/html-demos#multiple-sections)
- [Static, full page HTML demo with drawer](/ai/generative-uis/compass/html-demos#with-drawer)

To support the different ways you might use Compass, we've introduced several new capabilities to PatternFly:

- **Design tokens**: New design tokens that enable:
  - Glass-like visual effects
  - Background and border gradients
  - Additional smooth animations
  - Background image explorations
- [**Compass layout component**](/ai/generative-uis/compass): A new layout component designed specifically for generative UI patterns
- **Additional components and component variants**:
  - Transparency & Effects:
    - `isPlain` makes cards, data lists, and tables transparent to allow background effects (like a glass look) to show through.
  - Layout & Navigation:
    - `isVertical` changes action lists to a vertical layout, suitable for sidebars.
    - `isNav` applies a new style to tabs, optimized for top-site navigation bars.
  - Shape & Form:
    - `isCircle` creates circular buttons and icon menu toggles, and pill-shaped standard menu toggles.
    - `isPill` gives the drawer (slide-out panel) a rounded, floating look.
  - AI Indicators:
    - `isThinking` adds a pulsing animation to show a system is actively processing (like an AI "thinking").
    - `hasAiIndicator` adds a gradient border to visually highlight AI-related content.

### Accessibility focus

Accessibility has been a major focus throughout the Compass exploration. As generative UIs introduce new interaction patterns and visual styles, ensuring these experiences remain accessible to all users is paramount.

### Integration with react-flow

Some stakeholdres have been experimenting with Generative UI use cases using React Flow. The React Flow package `@xyflow/react` is compatible with PatternFly through customization of its [theme](https://reactflow.dev/learn/customization/theming) and [rendered nodes](https://reactflow.dev/learn/customization/custom-nodes). A custom override stylesheet can assign PatternFly's global tokens to React Flow's own tokens to ensure a consistent styling. We have created some [documentation and a demo](/ai/generative-uis/react-flow) for integrations with PatternFly as a POC for these use cases.

### Current status

Compass is still under development, with new components being built, evaluated, and refined based on feedback. As we hear from your experiments and learn more about GenUI patterns, the design of Compass will continuously evolve to support practical applications.

As of Nov 10, 2025, these are the prereleases available for building out Compass based UI POCs.

- "@patternfly/patternfly": "6.5.0-prerelease.23"
- "@patternfly/react-charts": "8.5.0-prerelease.4"
- "@patternfly/react-code-editor": "6.5.0-prerelease.11"
- "@patternfly/react-core": "6.5.0-prerelease.11"
- "@patternfly/react-drag-drop": "6.5.0-prerelease.11"
- "@patternfly/react-icons": "6.5.0-prerelease.4"
- "@patternfly/react-styles": "6.5.0-prerelease.4"
- "@patternfly/react-table": "6.5.0-prerelease.11"
- "@patternfly/react-tokens": "6.5.0-prerelease.4"
- "@patternfly/react-templates": "6.5.0-prerelease.11"
- "@patternfly/chatbot": "6.5.0-prerelease.15"