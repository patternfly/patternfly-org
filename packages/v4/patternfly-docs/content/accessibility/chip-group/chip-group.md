---
id: Chip group
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **chip group** component:

- Ensure any interactive elements - such as close buttons or overflow chips - within a chip group can be navigated to and interacted with via keyboard and other assistive technologies such as a screen reader
- Provide an `aria-label` if the chip group does not have a visible text category name
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
| `role="list"` | `.pf-c-chip-group__list` | Indicates that the chip group list is a list element. **Required**.<br/><br/>This role is redundant since `.pf-c-chip-group__list` is a `<ul>` element, but it is required for assistive technologies to announce the list properly. |