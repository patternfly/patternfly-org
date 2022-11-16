---
id: Chip
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **chip** component:

- Ensure any close button within a chip can be navigated to and interacted with via keyboard and other assistive technologies such as a screen reader
- Ensure the entire chip can receive focus, not just the chip's close button, when the chip content is truncated
- Ensure any truncated text within a chip is displayed as a tooltip when the chip is hovered via mouse or has focus
- Follow the [tooltip accessibility documentation](/components/tooltip/accessibility) for truncated chip content
- Render the chip as a button when using it as an overflow chip
- Follow the [chip group accessibility documentation](/components/chip-group/accessibility) when rendering multiple, related chips within a group

## Testing

At a minimum, a chip should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="chip-a11y-checkbox-1" label="Standard keyboard navigation can be used to navigate between chip close buttons or other focusable elements." description={<span><kbd>Tab</kbd> navigates to the next chip close button or focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous chip close button or focusable element.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="chip-a11y-checkbox-2" label="Standard keyboard interaction can be used to interact with the chip close button." description={<span><kbd>Enter</kbd> and <kbd>Space</kbd> should be able to activate the chip close button. This can usually be achieved by using "click" events.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="chip-a11y-checkbox-3" label="If the chip content is truncated, the entire chip can receive focus, not just the chip's close button." description={<span>This can be achieved by ensuring the chip component itself has the <code className="ws-code">tabindex="0"</code> attribute. A chip should then be included in the standard keyboard navigation.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="chip-a11y-checkbox-4" label="If the chip content is truncated, it has a tooltip that displays on hover or focus." description={<span>Follow the <a href="/components/tooltip/accessibility">tooltip accessibility documentation</a>.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="chip-a11y-checkbox-5" label="An overflow chip is rendered as a button element." />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `closeBtnAriaLabel="[text describing the close button]"` | `Chip` | Adds an accessible name to the chip's close button. **Required**. <br/><br/> When passing in a custom value, you do not need to repeat the chip's content and should only include a verb such as "close" or "remove". |
| `component="[element tag]"` | `Chip` | Sets the base element for the chip (`div` element by default). <br/><br/> When using a chip as an overflow chip, or in any manner where clicking the chip itself causes an action to trigger, the value passed in should be "button" to provide the built-in interaction necessary for improved accessibility. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `id` | `.pf-c-chip` | The value of this attribute is passed into the close button's `aria-labelledby` attribute. **Required** when a chip has a close button. |
| `aria-label="[text describing the close button]"` | `.pf-c-chip > button` | Adds an accessible name to the chip's close button. **Required** when the close button does not contain any visible text. |
| `aria-labelledby="[space separated list of the chip's and close button's ID]"` | `.pf-c-chip > button` | Combines the accessible name of the close button and the chip content, providing more context to users regarding which chip will be closed. **Required**. |
| `id` | `.pf-c-chip > button` | The value of this attribute is passed into the close button's `aria-labelledby` attribute. **Required**. |
| `aria-hidden="true"` | `.pf-c-chip > button > i` | Removes the close button icon from the accessibility tree, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required** if the close button contains an icon. |
