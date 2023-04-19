---
id: Chip
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';
import { Link } from '@patternfly/documentation-framework/components/link/link';

## Accessibility

To implement an accessible PatternFly **chip** and **chip group**:

- Render the chip as a button when using it as an overflow chip
- Ensure any interactive elements - such as close buttons or overflow chips - within a chip group can be navigated to and interacted with via keyboard and other assistive technologies such as a screen reader
- Provide an `aria-label` if the chip group does not have a visible text category name

## Testing

At a minimum, a chip and chip group should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="chipGroup-a11y-checkbox-1" label="Standard keyboard navigation can be used to navigate between chip group close buttons, chip close buttons, or other focusable elements." description={<span><kbd>Tab</kbd> navigates to the next chip group close button, chip close button, or focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous chip group close button, chip close button, or focusable element.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="chipGroup-a11y-checkbox-2" label="Standard keyboard interaction can be used to interact with the chip group close button, chip close button, or other interactive elements inside the chip group." description={<span><kbd>Enter</kbd> and <kbd>Space</kbd> should be able to activate the chip group close button, individual chip close buttons, or an overflow chip. This can usually be achieved by using "click" events.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="chipGroup-a11y-checkbox-3" label="If the chip group's category name or an individual chip's content is truncated, the entire category name or chip can receive focus, not just the close button." description={<span>This can be achieved by ensuring the category name or chip component itself has the <code className="ws-code">tabindex="0"</code> attribute. The category name/chip should then be included in the standard keyboard navigation.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="chipGroup-a11y-checkbox-4" label="If the chip group's category name or an individual chip's content is truncated, it has a tooltip that displays on hover or focus." description={<span>Follow the <Link href="/components/tooltip/accessibility">tooltip accessibility documentation</Link>.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="chipGroup-a11y-checkbox-5" label={<span>If a chip group does not have a visible category name, it has an <code className="ws-code">aria-label</code> instead.</span>} description="This will help users of assistive technologies differentiate multiple chip groups on a page, and provide context of what content the chip group contains." />
  </ListItem>
  <ListItem>
    <Checkbox id="chip-a11y-checkbox-5" label="An overflow chip is rendered as a button element." />
  </ListItem>

</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

### Chip React properties

| Prop | Applied to | Reason | 
|---|---|---|
| `closeBtnAriaLabel="[text that labels the chip close button]"` | `Chip` | Adds an accessible name to the chip's close button. **Required**. <br/><br/> When passing in a custom value, you do not need to repeat the chip's content and should only include a verb such as "close" or "remove". |
| `component="[element tag]"` | `Chip` | Sets the base element for the chip (`div` element by default). <br/><br/> When using a chip as an overflow chip, or in any manner where clicking the chip itself causes an action to trigger, the value passed in should be "button" to provide the built-in interaction necessary for improved accessibility. |

### Chip group React properties

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the chip group]"` | `ChipGroup` | Adds an accessible name to the chip group. **Required** when the chip group does not have a visible category name. |
| `closeBtnAriaLabel="[text that labels the chip group close button]"` | `ChipGroup` | Adds an accessible name to the chip group's close button. **Required**. <br/><br/> When passing in a custom value, you do not need to repeat the chip group's category name and should only include a verb such as "close" or "remove". |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

### Chip HTML attributes and classes

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `id` | `.pf-c-chip` | The value of this attribute is passed into the close button's `aria-labelledby` attribute. **Required** when a chip has a close button. |
| `aria-label="[text that labels the chip close button]"` | `.pf-c-chip > button` | Adds an accessible name to the chip's close button. **Required** when the close button does not contain any visible text. |
| `aria-labelledby="[space separated list of the chip's and close button's ID]"` | `.pf-c-chip > button` | Combines the accessible name of the close button and the chip content, providing more context to users regarding which chip will be closed. **Required**. |
| `id` | `.pf-c-chip > button` | The value of this attribute is passed into the close button's `aria-labelledby` attribute. **Required**. |
| `aria-hidden="true"` | `.pf-c-chip > button > i` | Removes the close button icon from the accessibility tree, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required** if the close button contains an icon. |

### Chip group HTML attributes and classes

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the chip group]"` or `aria-labelledby="[id of the element that labels the chip group]"` | `.pf-c-chip-group__list` | Adds an accessible name to the chip group. **Required** when the chip group does not have a visible category name.  |
| `aria-label="[text that labels the chip group close button]"` | `.pf-c-chip-group__close > button` | Adds an accessible name to the chip group's close button. **Required** when the close button does not contain any visible text. |
| `aria-labelledby="[space separated list of the chip group's and close button's ID]"` | `.pf-c-chip-group__close > button` | Combines the accessible name of the close button and the chip group's category name, providing more context to users regarding which chip group will be closed. **Required**. |
| `id` | `.pf-c-chip-group__close > button` | The value of this attribute is passed into the close button's `aria-labelledby` attribute. **Required**. |
| `aria-hidden="true"` | `.pf-c-chip-group__close > button > i` | Removes the close button icon from the accessibility tree, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required** if the close button contains an icon. |
| `id` | `.pf-c-chip-group__label` | The value of this attribute is passed into the close button's `aria-labelledby` attribute. **Required** when a chip group has a close button. |
| `role="list"` | `.pf-c-chip-group__list` | Indicates that the chip group list is a list element. **Required**.<br/><br/>This role is redundant since `.pf-c-chip-group__list` is a `<ul>` element, but it is required for assistive technologies to announce the list properly. |
