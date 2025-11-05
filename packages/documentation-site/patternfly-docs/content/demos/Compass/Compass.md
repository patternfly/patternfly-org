---
id: Compass
section: PatternFly-AI
subsection: Generative UIs
---

## Demo

import { useState, memo, useCallback, useRef } from 'react';

import { ActionsColumn } from "@patternfly/react-table";
import { DataViewTable } from "@patternfly/react-data-view/dist/dynamic/DataViewTable";
import { DataViewToolbar } from "@patternfly/react-data-view/dist/dynamic/DataViewToolbar";
import { DataViewTextFilter } from "@patternfly/react-data-view/dist/dynamic/DataViewTextFilter";

import { MessageBar } from '@patternfly/chatbot';

import ThIcon from '@patternfly/react-icons/dist/esm/icons/th-icon';
import ListIcon from '@patternfly/react-icons/dist/esm/icons/list-icon';
import EllipsisVIcon from "@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon";
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import OutlinedPlusSquare from '@patternfly/react-icons/dist/esm/icons/outlined-plus-square-icon';
import OutlinedCopy from '@patternfly/react-icons/dist/esm/icons/outlined-copy-icon';
import OutlinedQuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon';

import wallpaperLight from './assets/wallpaper-light.png'
import wallpaperDark from './assets/wallpaper-dark.png'
import pfLogo from './assets/PF-HorizontalLogo-Color.svg';
import imgAvatar from './assets/avatar.jpg';

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

### Card and dataview layout

```js file="./CompassIntegrationsDemo.tsx" isFullscreen
```

### React flow

The React flow package `@xyflow/react` is compatible with Patternfly through customization of its [theme](https://reactflow.dev/learn/customization/theming) and [rendered nodes](https://reactflow.dev/learn/customization/custom-nodes). A custom override stylesheet can assign Patternfly's global tokens to react flow's own tokens to ensure a consistent styling. The following is a basic list of overrides used by the example, which also renders custom nodes using Patternfly's `Card` components:

| React flow token | Patternfly token suggestion |
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