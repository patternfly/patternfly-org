---
id: React flow
section: PatternFly-AI
subsection: Generative UIs
---

## Demo

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

### React Flow

The React Flow package `@xyflow/react` is compatible with PatternFly through customization of its [theme](https://reactflow.dev/learn/customization/theming) and [rendered nodes](https://reactflow.dev/learn/customization/custom-nodes). A custom override stylesheet can assign PatternFly's global tokens to React Flow's own tokens to ensure a consistent styling. The following is a basic list of overrides used by the example, which also renders custom nodes using PatternFly's `Card` components:

| React Flow token | PatternFly token suggestion |
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