---
id: Tooltips
section: UX writing
---

import ArrowCircleUpIcon from '@patternfly/react-icons/dist/esm/icons/arrow-circle-up-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import CopyIcon from '@patternfly/react-icons/dist/esm/icons/copy-icon';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import PencilAltIcon from '@patternfly/react-icons/dist/esm/icons/pencil-alt-icon';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import SearchMinusIcon from '@patternfly/react-icons/dist/esm/icons/search-minus-icon';
import SearchPlusIcon from '@patternfly/react-icons/dist/esm/icons/search-plus-icon';
import SyncAltIcon from '@patternfly/react-icons/dist/esm/icons/sync-alt-icon';
import TrashIcon from '@patternfly/react-icons/dist/esm/icons/trash-icon';
import ExportIcon from '@patternfly/react-icons/dist/esm/icons/export-icon';
import TaskIcon from '@patternfly/react-icons/dist/esm/icons/task-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import { Tooltip } from '@patternfly/react-core'

A **tooltip** is a method of helping users better understand elements within a UI. They appear when you hover over an element and contain a short, descriptive message. 

When writing tooltips:
- Make sure that the content is succinct, clear, and effective.
- If the tooltip contains a full sentence, include a period at the end. If it is a fragment, do not include a period.
- Only use tooltips for additional information, not for critical information.
- Don't repeat information that is already available in the UI.
- Don’t use tooltips with question-circle icons (<QuestionCircleIcon />) to present contextual information. Instead, use a [popover](/components/popover).
- Developers should follow [our accessiblity guidelines](/components/tooltip/accessibility) to ensure that tooltip content is available to all users.  

Additional guidance can be found in [the tooltip design guidelines.](/components/tooltip/design-guidelines)

## Icon tooltips 
Icons allow you to save space in a UI and provide users with another recognition method.

It can be useful or necessary to place tooltips on icons, especially when they aren't accompanied by a text label. This helps ensure that your users can understand what action is linked to an icon. When you use a tooltip with an icon, limit the content to 1 or 2 words that identify the icon accurately and clearly. 

In PatternFly, there are commonly used icons that hold universal meanings. These should always use the same tooltip identifier, as shown in the following table: 

|**Icon**  | **Name** | **Tooltip** | **Notes** |
|------------|-----------|-----------|---- |
| <Tooltip aria="none" aria-live="polite" content="Upgrade"> <ArrowCircleUpIcon /> </Tooltip> | fa-arrow-circle-up | Upgrade |
| <BellIcon />  | fa-bell | Notifications |
| <CogIcon />  | fa-cog | Settings |
| <CopyIcon />  | fa-copy | Copy |
| <DownloadIcon />  | fa-download | Download |
| <EllipsisVIcon />  | fa-ellipsis-v | More options | 
| <PencilAltIcon />  | fa-pencil-alt | Edit |
| <SearchIcon />  | fa-search | Search |
| <SearchMinusIcon />  | fa-search-minus | Search minus | 
| <SearchPlusIcon />  | fa-search-plus | Search plus |
| <SyncAltIcon />  | fa-sync-alt | Sync, Refresh, or Running | Choose the best fit for your scenario.|
| <TrashIcon />  | fa-trash | Delete | 
| <ExportIcon />  | pficon-export | Export |
| <TaskIcon />  | pficon-task | Tasks | 

[Learn more about the usage of these icons.](/design-foundations/icons)