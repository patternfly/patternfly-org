---
source: demo
id: Compass
section: layouts
---

import { useState } from 'react';
import PlayIcon from '@patternfly/react-icons/dist/esm/icons/play-icon';
import OutlinedPlusSquare from '@patternfly/react-icons/dist/esm/icons/outlined-plus-square-icon';
import OutlinedCopy from '@patternfly/react-icons/dist/esm/icons/outlined-copy-icon';
import OutlinedQuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/outlined-question-circle-icon';
import { MessageBar } from '@patternfly/chatbot';

import { RHAutomationsLogo } from './assets/RHAutomationsLogo';
import { RHAiExperienceIcon } from './assets/RHAiExperienceIcon';
import AnimationsOverviewClusterInventory from "./cards/AnimationsOverviewClusterInventory";
import AnimationsOverviewNetworkActivity from "./cards/AnimationsOverviewNetworkActivity";
import AnimationsOverviewStorage from "./cards/AnimationsOverviewStorage";
import AnimationsOverviewMemoryUtilization from "./cards/AnimationsOverviewMemoryUtilization";
import { ClusterDetailsCard } from './cards/ClusterDetailsCard';
import { RecentActivityCard } from './cards/RecentActivityCard';

import heroBg from './assets/hero-bg.png';
import wallpaperDark from './assets/wallpaper-dark.png';
import wallpaperLight from './assets/wallpaper-light.png';
import imgAvatar from './assets/avatar.jpg';

## Demo

### Dashboard

```ts file="./dashboard.tsx" isFullscreen
```