---
id: Motion
section: foundations-and-styles
source: demo
---

import { Fragment, useRef, useState, useEffect, useCallback } from 'react';

import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import PowerOffIcon from '@patternfly/react-icons/dist/esm/icons/power-off-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import pfLogo from '@patternfly/react-core/src/demos/assets/PF-HorizontalLogo-Color.svg';
import MultiContentCard from "@patternfly/react-component-groups/dist/dynamic/MultiContentCard";
import { ArrowRightIcon, LockIcon, PortIcon, CubeIcon, AutomationIcon, ExclamationCircleIcon, CheckCircleIcon, ExclamationTriangleIcon, HamburgerIcon, TimesIcon} from '@patternfly/react-icons';
import UnpluggedIcon from '@patternfly/react-icons/dist/esm/icons/unplugged-icon';
import l_gallery_GridTemplateColumns_min from '@patternfly/react-tokens/dist/esm/l_gallery_GridTemplateColumns_min';
import {applicationsData} from './examples/ResourceTableData.jsx';
import SkeletonTable from "@patternfly/react-component-groups/dist/dynamic/SkeletonTable";
import t_global_text_color_subtle from '@patternfly/react-tokens/dist/esm/t_global_text_color_subtle';
import { AnimationsOverview } from './AnimationsOverview.js';
import { AnimationsNotificationsDrawer } from './AnimationsNotificationsDrawer.js';
import { AnimationsHeaderToolbar } from './AnimationsHeaderToolbar.js';
import { AnimationsStartTourModal } from './AnimationsStartTourModal.js';
import { AnimationsEndTourModal } from './AnimationsEndTourModal.js';
import { AnimationsCreateDatabaseForm } from './AnimationsCreateDatabaseForm.js';
import { GuidedTourProvider, useGuidedTour } from './GuidedTourContext.js';
import BoltIcon from '@patternfly/react-icons/dist/esm/icons/bolt-icon';
import { Table, Thead, Tbody, Tr, Th, Td, ExpandableRowContent } from '@patternfly/react-table';
import PendingIcon from '@patternfly/react-icons/dist/esm/icons/pending-icon';
import CheckIcon from '@patternfly/react-icons/dist/esm/icons/check-icon';
import InfoIcon from '@patternfly/react-icons/dist/esm/icons/info-icon';
import ResourcesFullIcon from '@patternfly/react-icons/dist/esm/icons/resources-full-icon';
import openshiftLogo from './Summit-collage-deploying-openshift-product-icon-RH.png'
import emptyStateLogo from './Summit-collage-hybrid-cloud-dark-RH.png'


## Demo
Our components can now use motion to provide clear visual feedback to users, improving engagement and usability. To see our new animations in motion, take this interactive tour, which guides you through a UI that includes animated alerts, icons, expansion, and more.

### Animated UI

```js file="./examples/Animations.tsx" isFullscreen
```
