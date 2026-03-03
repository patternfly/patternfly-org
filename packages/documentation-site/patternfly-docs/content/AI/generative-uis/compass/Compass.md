---
id: Compass
section: AI
source: org-demos
subsection: Generative UIs
---

## Demos

import { useState, memo, useCallback, useRef, useEffect } from 'react';

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
import imgAvatar from './assets/avatar.jpg';
import { RHAutomationsLogo } from './assets/RHAutomationsLogo';
import { RHAiExperienceIcon } from './assets/RHAiExperienceIcon';
import AnimationsOverviewClusterInventory from "./cards/AnimationsOverviewClusterInventory";
import AnimationsOverviewNetworkActivity from "./cards/AnimationsOverviewNetworkActivity";
import AnimationsOverviewStorage from "./cards/AnimationsOverviewStorage";
import AnimationsOverviewMemoryUtilization from "./cards/AnimationsOverviewMemoryUtilization";
import { ClusterDetailsCard } from './cards/ClusterDetailsCard';
import { RecentActivityCard } from './cards/RecentActivityCard';

import heroBg from './assets/hero-bg.png';

To help you use the Compass layout, there are several variants and props exposed on other PatternFly components that may be useful:

- `isPlain` on [card](/components/card#modifiers), [data list](/components/data-list#plain), and [table](/components/table#plain). This flag will set a transparent background for these components, allowing the glass effect in a wrapping `<CompassPanel>` to appear as the background.
- `isVertical` on [action list](/components/action-list#vertical-action-list). This flag sets the orientation on `<ActionList>` to support vertical icon lists for the sidebars.
- `isNav` on [tabs](/components/tabs#tabs-used-for-site-navigation). This flag enables a new styling of `<Tabs>` to be used as a top-page navigation.
- `isCircle` on [button](/components/button#circle-buttons) and [menu toggle](/components/menus/menu-toggle#plain-circle-toggle). This flag sets a border radius on the `<Button>` and `<MenuToggle>`, allowing buttons and plain icon menu toggles to be circular and typical menu toggles to be a rounded pill shape.
- `isPill` on [drawer](/components/drawer#pill). This flag sets a border radius and inset on the `<Drawer>`, making it appear as if the drawer is floating above other content.
- `isThinking` or `pf-v6-m-thinking` on `<CompassPanel>` and [ChatBot's message bar](/extensions/chatbot/ui/#message-bar-with-ai-indicator-styles). This prop, or class name, may be set to turn on a pulsing color animation around the chat message bar.
- `hasAiIndicator` or `pf-v6-m-ai-indicator` on [ChatBot's message bar](/extensions/chatbot/ui/#message-bar-with-ai-indicator-styles). This prop, or class name, may be set to enable a gradient border around the chat message bar.

### Card and data view layout

This demo uses the [data view extension](/extensions/data-view/overview) to place interactive data within a card as the main page content.

```js file="./CompassIntegrationsDemo.tsx" isFullscreen
```

### Dashboard layout

This demo creates a [dashboard](/patterns/dashboard) of multiple cards as the main page content.

```js file="./dashboard.tsx" isFullscreen
```
