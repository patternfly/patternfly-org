---
id: Chip group
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **chip group** component:

- Ensure any interactive elements - such as close buttons or overflow chips - within a chip group can be navigated to and interacted with via keyboard and other assistive technologies such as a screen reader
- Ensure the entire chip group category name can receive focus, not just the chip group's close button, when the category name is truncated
- Ensure any truncated text within a chip group category name is displayed as a tooltip when the category name is hovered via mouse or has focus
- Provide an `aria-label` if the chip group does not have a visible text category name
- Follow the [tooltip accessibility documentation](/components/tooltip/accessibility) for truncated content
- Follow the [chip accessibility documentation](/components/chip/accessibility) when rendering chips
## Testing

At a minimum, a chip group should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="chipGroup-a11y-checkbox-1" label="Standard keyboard navigation can be used to navigate between chip group close buttons or other focusable elements." description={<span><kbd>Tab</kbd> navigates to the next chip group close button or focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous chip group close button or focusable element.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="chipGroup-a11y-checkbox-2" label="Standard keyboard interaction can be used to interact with the chip group close button or other interactive elements inside the chip group." description={<span><kbd>Enter</kbd> and <kbd>Space</kbd> should be able to activate the chip group close button, individual chip close buttons, or an overflow chip. This can usually be achieved by using "click" events.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="chipGroup-a11y-checkbox-3" label="If the chip group's category name is truncated, the entire category name can receive focus, not just the chip group's close button." description={<span>This can be achieved by ensuring the category name itself has the <code className="ws-code">tabindex="0"</code> attribute. A category name should then be included in the standard keyboard navigation.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="chipGroup-a11y-checkbox-4" label="If the chip group's category name is truncated, it has a tooltip that displays on hover or focus." description={<span>Follow the <a href="/components/tooltip/accessibility">tooltip accessibility documentation</a>.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="chipGroup-a11y-checkbox-5" label={<span>If a chip group does not have a visible category name, it has an <code className="ws-code">aria-label</code> instead.</span>} description="This will help users of assistive technologies differentiate multiple chip groups on a page, and provide context of what content the chip group contains." />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-label="[text describing the chip group]"` | `ChipGroup` | Adds an accessible name to the chip group. **Required** when the chip group does not have a visible category name. |
| `closeBtnAriaLabel="[text describing the close button]"` | `ChipGroup` | Adds an accessible name to the chip group's close button. **Required**. <br/><br/> When passing in a custom value, you do not need to repeat the chip group's category name and should only include a verb such as "close" or "remove". |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-label="[text describing the close button]"` | `.pf-c-chip-group__close > button` | Adds an accessible name to the chip group's close button. **Required** when the close button does not contain any visible text. |
| `aria-labelledby="[space separated list of the chip group's and close button's ID]"` | `.pf-c-chip-group__close > button` | Combines the accessible name of the close button and the chip group's category name, providing more context to users regarding which chip group will be closed. **Required**. |
| `id` | `.pf-c-chip-group__close > button` | The value of this attribute is passed into the close button's `aria-labelledby` attribute. **Required**. |
| `aria-hidden="true"` | `.pf-c-chip-group__close > button > i` | Removes the close button icon from the accessibility tree, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required** if the close button contains an icon. |
| `id` | `.pf-c-chip-group__label` | The value of this attribute is passed into the close button's `aria-labelledby` attribute. **Required** when a chip group has a close button. |

A **chip group** represents an attribute that has been assigned one or more values. An OR relationship is implied between values in the group. Chip groups are useful to express complex filters to a data set, for example.

Keyboard users will be able to press **Tab** to navigate through all interactive elements of the chip group (this will include close buttons, any overflow chips with tooltips,  view more buttons, etc). The screen reader experience, likewise, will mostly be based on native interaction expectations.

Bear in mind that the `aria-labelledby` attribute on the close button is based on the ID of the chip itself. So, if you are **changing the id of the chip**, you will need to update the `aria-labelledby` on the chip.

<br/>
In general, the chip group component already has accessibility built in. However, if you’d like to customize it, edit the following:

| React component| React prop | Which HTML element it appears on in markup | Explanation | 
|---|---|---|---|
| Chip | closeBtnAriaLabel | .pf-c-button | 'close'	Aria Label for close button on the chip |
| ChipGroup | aria-label | .pf-c-chip-group__list | Aria label for chip group that does not have a category name (will not work when `categoryName` included) |
| ChipGroup | closeBtnAriaLabel | .pf-c-button | 'Close chip group' Aria label for close button |