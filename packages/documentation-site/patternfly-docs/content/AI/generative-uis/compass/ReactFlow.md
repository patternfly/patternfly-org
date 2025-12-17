---
id: React Flow
section: AI
subsection: Generative UIs
---

import { useState, memo, useCallback, useRef } from 'react';

import {
  Background,
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  Handle,
  Position,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import "./reactFlowOverrides.css";

When creating GenUI concepts with PatternFly's compass component, you might want to utilize [React Flow](https://reactflow.dev/). The React Flow package `@xyflow/react` is compatible with PatternFly through customization of its [theme](https://reactflow.dev/learn/customization/theming) and [rendered nodes](https://reactflow.dev/learn/customization/custom-nodes). 

### Example 

A custom override stylesheet can assign PatternFly's global design tokens to React Flow's own tokens to ensure consistent styling. 

This list outlines the overrides used in the following example, which also renders custom nodes using PatternFly `<Card>` components:

| React Flow token | Suggested PatternFly design token |
| --- | --- |
| --xy-node-border-radius-default | var(--pf-t--global--border--radius--medium) |
| --xy-edge-stroke-default | var(--pf-t--global--border--color--default) |
| --xy-edge-stroke-width-default | var(--pf-t--global--border--width--regular) |
| --xy-edge-stroke-selected-default | var(--pf-t--global--border--color--clicked) |
| --xy-connectionline-stroke-default | var(--pf-t--global--border--color--default) |
| --xy-connectionline-stroke-width-default | var(--pf-t--global--border--width--regular) |
| --xy-attribution-background-color-default | transparent |
| --xy-minimap-background-color-default | var(--pf-t--global--background--color--primary--default) |
| --xy-background-pattern-dots-color-default | var(--pf-t--global--border--color--disabled) |
| --xy-node-color-default | var(--pf-t--global--text--color--regular) |
| --xy-node-border-default | var(--pf-t--global--border--width--regular) solid var(--pf-t--global--border--color--default) |
| --xy-node-background-color-default | var(--pf-t--global--background--color--primary--default) |
| --xy-node-group-background-color-default | rgba(240, 240, 240, 0.25) |
| --xy-node-boxshadow-hover-default | var(--pf-t--global--box-shadow--sm) |
| --xy-node-boxshadow-selected-default | var(--pf-t--global--box-shadow--md) |
| --xy-handle-background-color-default | var(--pf-t--global--color--brand--default) |
| --xy-handle-border-color-default | var(--pf-t--global--border--color--alt) |

```js file="./CompassReactFlowDemo.tsx"
```

### Accessibility considerations

While React Flow is built with accessibility in mind, you should always check that your implementation when paired with PatternFly is accessible via mouse, keyboard, and other assistive technologies like screen readers. Some things to keep in mind include:

- Providing an accessible name to the `<ReactFlow>` component, if its default role of "application" is kept or if it is given another semantic role that requires an accessible name.
- Due to the nature of React Flow and howw you are able to click and drag nodes, if your draggable nodes contain other actions inside of them (kebab toggles, links, other action buttons), you should ensure those actions are large enough to prevent misclicks.
  -  [WCAG 2.5.8 - Target size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) requires at least 24z24 CSS pixels. While they also state exceptions, because a React Flow node itself can be clicked for some action, you should aim for sticking to this minimum, especially if implementing an action where clicking a node quickly can open a details drawer.
- In general ensure that any actions that can be taken via mouse only can be taken via keyboard as well, whether that be actions inside a node or being able to drag a node around to reposition it.
  - Dragging nodes via keyboard should be built into React Flow itself out of the box, but always double check in case.