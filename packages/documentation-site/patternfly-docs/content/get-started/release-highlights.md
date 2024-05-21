---
id: Release highlights
title: Release highlights
section: get-started
---

import './get-started.css';
import { Divider } from '@patternfly/react-core';

## PatternFly 6 alpha 2

As we continue to work towards the full release of PatternFly 6, we're excited to share an update to the alpha release. This release contains the final changes to the alpha. Our beta release is coming soon!

### Expanded PatternFly 6 support
We added PatternFly 6 styling and token support to additional areas of our design system: 
- Extensions
- Charts 

### Addressed issues throughout the system
We cleaned up and fixed bugs in a number of areas:
- We removed Sass global variables in favor of our tokens.
- We renamed variables that previously had top/right/bottom/left in the name (for example, `PaddingTop`) to instead match inline/block start/end properties (for example, `PaddingBlockStart`). This change is a result of our introduction of [RTL support.](/developer-resources/right-to-left-handbook)
- We removed the deprecated Sass `@import` rule in favor of new recommendations, `@use` and `@forward`.
- We fixed various bugs that were reported following the initial alpha release.

<Divider />

## PatternFly 6 alpha 1

We're excited to announce that our alpha release of PatternFly 6 is now live. Here are the highlights that you should know about!

### PatternFly 6 visual theme

As you've probably already noticed on the alpha website: PatternFly 6 has a new look. Our brand new visual theme is more modern and refined, so that you can create UIs that are more seamless and lightweight.

All of our components have a new look to match. As you use the alpha website, take a look at our component examples, demos, and patterns to explore our redesign.

### Design tokens 

In order to support PatternFly 6, and any future visual theming capabilities, we have implemented a design token system for PatternFly. For more details and instructions on how to use tokens, you can refer to our new [design token documentation.](/tokens/about-tokens)

Our tokens cover both dark and light themes, and make it easier to support both in your product. We also updated our [dark theme handbook](/developer-resources/dark-theme-handbook) to align with our tokens.

**Note:** The PatternFly 5 design library is not built with tokens. To take advantage of our token system, you must [upgrade your product to PatternFly 6.](/get-started/upgrade)