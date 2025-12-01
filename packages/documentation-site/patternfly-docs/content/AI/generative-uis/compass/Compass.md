---
id: Compass
section: AI
source: org-demos
subsection: Generative UIs
---

## Demo

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

## Demo notes

To facilitate building a compass layout, there are several useful variants and props exposed on other PatternFly components that may be useful:

- `isPlain` on [Card](/components/card#modifiers), [DataList](/components/data-list#plain), and [Table](/components/table#plain). This flag will set a transparent background for these components, allowing the glass effect in a wrapping `CompassPanel` to appear as the background.
- `isVertical` on [ActionList](/components/action-list#vertical-action-list). This flag sets the orientation on `ActionList` to support vertical icon lists for the sidebars.
- `isNav` on [Tabs](/components/tabs#tabs-used-for-site-navigation). This flag enables a new styling of `Tabs` to be used as a top site navigation.
- `isCircle` on [Button](/components/button#circle-buttons) and [MenuToggle](/components/menus/menu-toggle#plain-circle-toggle). This flag sets a border radius on the `Button` and `MenuToggle`, allowing buttons and plain icon menu toggles to be circular and typical menu toggles to be a pill shape.
- `isPill` on [Drawer](/components/drawer#pill). This flag sets a border radius and inset on the `Drawer`, giving it a more floating look.
- `isThinking` or `pf-v6-m-thinking` on `CompassPanel` and [MessageBar](/extensions/chatbot/ui/#message-bar-with-ai-indicator-styles). This prop, or class name, may be set to turn on a pulsing color animation around the component.
- `hasAiIndicator` or `pf-v6-m-ai-indicator` on [MessageBar](/extensions/chatbot/ui/#message-bar-with-ai-indicator-styles). This prop, or class name, may be set to enable a gradient border around the component.

### Card and data view layout

```js file="./CompassIntegrationsDemo.tsx" isFullscreen
```

### Dashboard layout

```js file="./dashboard.tsx" isFullscreen
```
