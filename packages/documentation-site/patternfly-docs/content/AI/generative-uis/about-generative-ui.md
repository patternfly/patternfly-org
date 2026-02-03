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

<Alert isInline variant="info" title="Beta feature">Compass is best suited for use in proof of concept generative UI use cases. It is not yet production quality code and should be used for exploration and experimentation purposes only.</Alert>

GenUI represents a significant opportunity for PatternFly to explore new patterns, layouts, and styles that support consistent AI-driven interface generation. To explore how we can enable GenUI in PatternFly, we've created a proof of concept called "Compass".

**Compass** is a new layout, built with PatternFly styles and design tokens, but optimized to support dynamic, personalized information.

### What does Compass look like?

Compass places a main section in the center of the screen and surrounds it with a header, a footer, and sidebars on either side. Compass screens are conversation-focused, utilizing an interactive message bar in the footer to drive interactions with the AI model. The main section displays components dynamically generated based on the user's request.

To explore Compass and its features, take a look at the [Compass component documentation](/ai/generative-uis/compass), which includes the following full-page demos:
- [Conversation-focused, full-page demo with card view and table layouts](/ai/generative-uis/compass#card-and-data-view-layout)
- [Conversation-focused, full-page demo with dashboard layout](/ai/generative-uis/compass/org-demos#dashboard-layout)
- [Static, full-page HTML demo with multiple content sections](/ai/generative-uis/compass/html-demos#multiple-sections)
- [Static, full-page HTML demo with drawer](/ai/generative-uis/compass/html-demos#with-drawer)

### What does Compass include?

To support the different ways you might use Compass, we've introduced several new capabilities to PatternFly:

- **Design tokens**: New design tokens that enable the following styles:
  - Glass-like visual effects
  - Background and border gradients
  - Additional micro animations
  - New background image options
- [**Compass layout component**](/ai/generative-uis/compass): A new layout, designed specifically for GenUI patterns, with a main content section, header, footer, and sidebars.
- **New modifiers for existing components**: These new props enable different Compass effects and are documented across component documentation where they can be used:
  - Transparency:
    - `isPlain` makes cards, data lists, and tables transparent. This allows backgrounds to be visible through components, creating the modern, glass-like visual effect.
  - Layout and navigation:
    - `isVertical` changes action lists to a vertical layout. This enables Compass's sidebars.
    - `isNav` places tabs within a pill-shaped container, so they can better function as top navigation.
  - Shape and form:
    - `isCircle` creates circular buttons and icon menu toggles, and pill-shaped standard menu toggles.
    - `isPill` gives a drawer a rounded, floating look.
  - AI indicators:
    - `isThinking` adds a pulsing animation to a component (like a text input) to show a system is actively processing (like an AI "thinking").
    - `hasAiIndicator` adds a gradient border to a component (like a text input) to visually highlight AI-related content.

### Accessibility consideration

Because GenUIs introduce new interaction patterns and visual styles, it is essential to ensure that GenUI experiences remain accessible to all users. To keep Compass designs in line with the accessibility standards maintained by the rest of PatternFly, we've kept accessibility a major focus throughout the design and development of Compass.

### How do I use Compass?

For technical details and full-page demos, refer to the [Compass documentation](/ai/generative-uis/compass).

#### AI-enabled seed app

We are creating an AI-enabled seed app in [the compass_theme branch of the patternfly-react-seed repo](https://github.com/patternfly/patternfly-react-seed/tree/compass_theme) that will make it easier for you to create your own Compass-based prototypes. The seed app includes the Compass layout with all styles set up, providing you with a foundation on which you can build. To build out your own proof of concept, you can leverage AI tools like Cursor or Claude Code alongside the seed app, making it easier to experiment with generative UI patterns and explore new use cases.

#### React Flow integration

When creating GenUI concepts with PatternFly's Compass component, you might want to utilize [React Flow](https://reactflow.dev/). The React Flow package `@xyflow/react` is compatible with PatternFly through customization of its [theme](https://reactflow.dev/learn/customization/theming) and [rendered nodes](https://reactflow.dev/learn/customization/custom-nodes). A custom override stylesheet can assign PatternFly's global design tokens to React Flow's own tokens to ensure consistent styling. For more information on using React Flow with Compass, refer to our [React Flow documentation](/ai/generative-uis/react-flow).

### Development status

Compass is still under development, with new components being built, evaluated, and refined based on feedback. As we learn more about GenUI patterns and as more projects experiment with Compass, the design will continuously evolve to support practical applications.

As of Dec 10, 2025, the following prereleases are available for building out Compass-based POCs.

- `"@patternfly/patternfly": "6.5.0-prerelease.33"`
- `"@patternfly/react-charts": "8.5.0-prerelease.9"`
- `"@patternfly/react-code-editor": "6.5.0-prerelease.26"`
- `"@patternfly/react-core": "6.5.0-prerelease.24"`
- `"@patternfly/react-drag-drop": "6.5.0-prerelease.24"`
- `"@patternfly/react-icons": "6.5.0-prerelease.11"`
- `"@patternfly/react-styles": "6.5.0-prerelease.9"`
- `"@patternfly/react-table": "6.5.0-prerelease.24"`
- `"@patternfly/react-templates": "6.5.0-prerelease.24"`
- `"@patternfly/react-tokens": "6.5.0-prerelease.9"`
- `"@patternfly/chatbot": "6.5.0"`