---
id: Clipboard copy
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **clipboard copy** component:

- Ensure the clipboard copy's tooltip updates to convey when content has been copied
- Pass an `aria-label` to the expandable toggle if the clipboard copy can be expanded

## Testing

At a minimum, a clipboard copy should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="clipboardCopy-a11y-checkbox-1" label="Standard keyboard navigation can be used to navigate between the clipboard copy contents or other focusable elements." description={<span><kbd>Tab</kbd> navigates to the next focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous focusable element.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="clipboardCopy-a11y-checkbox-2" label="Standard keyboard interaction can be used to interact with the expandable toggle, copy button, and any other actions within the clipboard copy." description={<span>Both <kbd>Space</kbd> and <kbd>Enter</kbd> should activate any toggles or buttons within the clipboard copy.</span>}/>
  </ListItem>
  <ListItem>
    <Checkbox id="clipboardCopy-a11y-checkbox-3" label="The tooltip on the copy button updates after activating it." description="This helps notify users that something has been successfully copied." />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `additionalActions={[ClipboardCopyAction components]}` | `ClipboardCopy` | Adds additional actions to an inline clipboard copy. When passing this prop in, you must ensure any actions passed in follow accessibility documentation, such as providing accessible names for buttons that contain only an icon. |
| `clickTip="[text to display in the copy button tooltip]"` | `ClipboardCopy` | Determines the text displayed in the tooltip after activating the copy button. |
| `entryDelay={[number in milliseconds]}` | `ClipboardCopy` | Creates a delay in the specified number of milliseconds for when the copy button's tooltip appears on hover or focus.<br/><br/>Avoid making the entry delay too long as it can cause users to navigate away before the tooltip appears. |
| `exitDelay={[number in milliseconds]}` | `ClipboardCopy` | Creates a delay in the specified number of milliseconds for when the copy button's tooltip disappears after activating the button, or moving focus or the mouse pointer away from it.<br/><br/>Avoid making the exit delay `0` or too short, as users must be given enough time to move their mouse pointer into the tooltip or enough time to read it if they are unable to keep their mouse steady. |
| `hoverTip="[text to display in the copy button tooltip]"` | `ClipboardCopy` | Determines the text displayed in the tooltip that triggers when hovering or focusing the copy button. Also adds an accessible name to the copy button. |
| `isExpanded` | `ClipboardCopy` | Indicates whether the expandable toggle is expanded or collapsed to assistive technologies. |
| `isReadOnly` | `ClipboardCopy` | Adds visual styling and notifies users that a text input is not editable. **Required** if the text input is not editable. |
| `textAriaLabe="[text labeling the text input]"l` | `ClipboardCopy` | Adds an accessible name to the text input. Generally this should convey that the input is copyable and what the purpose of the input is. |
| `toggleAriaLabel="[text labeling the expandable toggle]"` | `ClipboardCopy` | Adds an accessible name to the expandable toggle. This should generally convey what will be expanded or collapsed when activating the toggle. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-hidden="true"` | `.pf-v6-c-button i` | Removes the button icon from the accessibility tree, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required**. |
| `aria-label="[text labeling the copy button]"` | `.pf-v6-c-clipboard-copy__actions-item .pf-v6-c-button.pf-m-plain`, `.pf-v6-c-clipboard-copy__group .pf-v6-c-button.pf-m-control` | Adds an accessible name to the copy button. **Required** if the button does not contain any visible text.<br/><br/>The value of this attribute should generally be the same as any tooltip contents. |
| `aria-labelledby="[id of the copy button] [id of the text input or .pf-v6-c-clipboard-copy__text]"` | `.pf-v6-c-clipboard-copy__actions-item .pf-v6-c-button.pf-m-plain`, `.pf-v6-c-clipboard-copy__group .pf-v6-c-button.pf-m-control` | Creates a unique accessible name from the copy button and the text input or copyable text. This helps provide context of what content will be copied by the copy button, and makes each clipboard copy unique on a page. |
| `hidden` | `.pf-v6-c-clipboard-copy__expandable-content` | Hides the expandable content. **Required** when `aria-expanded="false"` is passed in. |
| `id` | `.pf-v6-c-clipboard-copy__expandable-content` | Used to link the expandable content to an expandable toggle. **Required**. |
| `aria-controls="[id of the expandable content controlled by the expandable toggle]"` | `.pf-v6-c-clipboard-copy__group .pf-v6-c-button.pf-m-control` | Indicates which expandable content is controlled by the toggle. **Required**. |
| `aria-expanded="[true or false]"` | `.pf-v6-c-clipboard-copy__group .pf-v6-c-button.pf-m-control` | Indicates whether the expandable toggle is expanded (true) or collapsed (false) to assistive technologies. **Required**. |
| `aria-label="[text labeling the expandable toggle]"` | `.pf-v6-c-clipboard-copy__group .pf-v6-c-button.pf-m-control` | Adds an accessible name to the expandable toggle. **Required** if the clipboard copy can be expanded. |
| `aria-label="[text labeling the text input]"` | `.pf-v6-c-clipboard-copy__group .pf-v6-c-form-control` | Adds an accessible name to the text input. **Required** if the clipboard copy has a text input. |
| `readonly` | `.pf-v6-c-clipboard-copy__group .pf-v6-c-form-control` | Adds visual styling and notifies users that a text input is not editable. **Required** if the text input is not editable. |
