---
title: Global CSS variables
section: overview
---

import { CSSVariables } from '../components/cssVariables/cssVariables';


## About CSS variables

The CSS variable system is a two-layer theming system where global variables inform component variables.

### Global variables

Global variables define and enforce global style elements (like values for color, spacing, and font size) across the entire system.

Global variables follow this formula:

`--pf-global--concept--PropertyCamelCase--modifier--state`

Where...

- A `concept` is something like a `spacer` or `main-title`.
- A `PropertyCamelCase` is something like `BackgroundColor` or `FontSize`.
- A `modifier` is something like `sm` or `lg`.
- A `state` is something like `hover` or `expanded`.

### Component variables

Component variables are used to define custom properties at the component-level. Component variables are always defined by global variables.

Component variables follow this formula:

`--pf-c-block__element--modifier--state--breakpoint--pseudo-element--PropertyCamelCase`

Where...

- `pf-c-block` refers to the block, usually the component or layout name, like `pf-c-alert`.
- `__element` refers to the element inside of the block, like `__title`.
- `modifier` is prefixed with`-m` and refers to a modifier class such as `.pf-m-danger`.
- `state` is something like `hover` or `active`.
- `breakpoint` is a media query breakpoint such as `sm` for `$pf-global--breakpoint--xs`.
- `pseudo-element` is either `before` or `after`.

### Using the variable system

PatternFly 4 styles provide a default starting point. You can use the variable system to make adjustments to that default styling. When you change one or more elements, you should package those values into a new SCSS stylesheet to replace the default styling.

## Global CSS variables

<CSSVariables prefix="patternfly_variables" selector=":root" hideSelectorColumn />

## Chart CSS variables

<CSSVariables prefix="patternfly_charts" hideSelectorColumn />
