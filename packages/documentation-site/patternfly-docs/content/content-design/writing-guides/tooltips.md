---
id: Tooltips
section: content-design
subsection: writing-guides
---

import RhUiSettingsIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-settings-icon';
import RhUiCopyIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-copy-icon';
import RhUiSearchIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-search-icon';
import RhUiQuestionMarkCircleIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-question-mark-circle-icon';
import { Button, Tooltip, Split, SplitItem } from '@patternfly/react-core'
import { TooltipIconReferenceTable } from './TooltipIconReferenceTable.jsx';

A **tooltip** is a message box that is shown when a UI element, like a button or an icon, is in a hover state. They contain short descriptions that offer additional information to help users better understand elements within a UI.

<Split>
<SplitItem>
<Tooltip content={"This is a tooltip. It contains useful information that solves all your problems."} aria="describedby" >
      <Button>I'm a button with a tooltip!</Button>
</Tooltip>
</SplitItem>
</Split>

When writing tooltips, follow these general recommendations:

<div class="ws-content-table">

| **Don't** | **Do** |
|----------------------------------------|---------------------|
| Don't repeat information that is already available in the UI. | Do write content that is succinct, clear, and effective. |
| Don't use tooltips for critical information. | Do use tooltips for additional, non-essential information. |
| Don't end sentence fragments in a period. | Do end full sentences in a period. |
| Don’t place tooltips on question-mark icons (<RhUiQuestionMarkCircleIcon />). Instead, use a [popover](/components/popover).  | Do follow [our tooltip development accessibility guidelines](/components/tooltip/accessibility) to ensure that tooltip content is available to all users.|

</div>

You can find additional guidance in [the tooltip design guidelines.](/components/tooltip/design-guidelines)

## Icon tooltips 
Icons allow you to save space in a UI and provide users with another recognition method.

It's often important to place tooltips on icons, especially when they aren't accompanied by a text label. This helps ensure that your users can hover over an icon to understand the action that it is linked to. When you use a tooltip with an icon, limit the content to 1 or 2 words that identify the icon accurately and clearly. 

For example: 

<Split>
<SplitItem>
<Tooltip content={"Settings"} aria="labelledby"> <Button variant="plain" aria-label="More information about settings"> <RhUiSettingsIcon /></Button> </Tooltip>
</SplitItem>
<SplitItem>
<Tooltip content={"Copy"} aria="labelledby"> <Button variant="plain" aria-label="Copy"> <RhUiCopyIcon /></Button> </Tooltip>
</SplitItem>
<SplitItem>
<Tooltip content={"Search"} aria="labelledby"> <Button variant="plain" aria-label="Search"> <RhUiSearchIcon /></Button> </Tooltip>
</SplitItem>
</Split>

In PatternFly, there are commonly used icons that hold universal meanings. These should always use the same tooltip description, as shown in the following table: 

<TooltipIconReferenceTable />

You can learn more about the usage of these icons in our [design foundations.](/foundations-and-styles/iconography)
