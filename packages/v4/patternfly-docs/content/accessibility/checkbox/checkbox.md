---
id: Checkbox
section: components
subsection: forms
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';
import { Link } from '@patternfly/documentation-framework/components/link/link';

## Accessibility

To implement an accessible PatternFly **checkbox** component:

- Ensure the checkbox can be navigated to and interacted with via keyboard and other assistive technologies such as a screen reader
- Ensure the checkbox can be toggled by clicking its visible text label, if it has one
- Ensure the checkbox label has hover styles to indicate that it can be clicked
- Provide an `aria-label` if the checkbox does not have a visible text label
- Place related checkboxes inside of a list element, and that list inside of an element that has the `role="group"` attribute

## Testing

At a minimum, a checkbox should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="checkbox-a11y-checkbox-1" label="Standard keyboard navigation can be used to navigate between checkboxes or other focusable elements." description={<span><kbd>Tab</kbd> navigates to the next checkbox or focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous checkbox or focusable element. If a checkbox is inside of a menu, follow the <Link href="/components/menu/accessibility">menu accessibility documentation</Link> instead.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="checkbox-a11y-checkbox-2" label="Standard keyboard interaction can be used to interact with the checkbox." description={<span>Only <kbd>Space</kbd> should be able to toggle the checkbox.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="checkbox-a11y-checkbox-3" label="If the checkbox has a visible text label, clicking the label toggles the checkbox." description="This provides extra clickable space for users who may have trouble clicking the checkbox input itself, such as on mobile or due to a motor or physical impairment." />
  </ListItem>
  <ListItem>
    <Checkbox id="checkbox-a11y-checkbox-4" label="If the checkbox has a visible text label, that label has hover styles to indicate to users that it can be interacted with." />
  </ListItem>
  <ListItem>
    <Checkbox id="checkbox-a11y-checkbox-6" label={<span>If the checkbox does not have a visible text label, it has an <code className="ws-code">aria-label</code>.</span>} description="This provides context to users who may not be able to see or understand the visual context, such as a checkbox that selects a table row." />
  </ListItem>
  <ListItem>
    <Checkbox id="checkbox-a11y-checkbox-7" label={<span>Multiple related checkboxes are inside of a list element, and that list element is inside of another element that has the <code className="ws-code">role="group"</code> attribute.</span>} description={<span>The <code className="ws-code">role</code> attribute notifies users of assistive technologies that they are in a group of checkboxes, while the list element notifies them of how many checkboxes there are in the group.</span>} />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the checkbox]"` | `Checkbox` | Adds an accessible name to the checkbox when there is no visible text label. **Required** when there is no visible text label. If there is already a visible text label via the `label` prop, this prop should not be passed in. |
| `id` | `Checkbox` | Links the checkbox input with its text label, which allows clicking the label to toggle the checkbox. The linked label text is also used as the accessible name of the checkbox. **Required**. |
| `isRequired` | `Checkbox` | Adds the `required` attribute to the checkbox and adds visual styling to notify users the checkbox must be checked. **Required** when users must check the checkbox. |
| `isValid={[true or false]}` | `Checkbox` | Sets the `aria-invalid` attribute, notifying users of assistive technologies whether the checkbox value is invalid. |
| `label="[text that labels the checkbox]"` | `Checkbox` | Adds a visible text label for the checkbox, which also acts as its accessible name. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-invalid={[true or false]}` | `.pf-c-check__input` | Notifies users of assistive technologies whether the checkbox value is invalid. |
| `aria-label="[text that labels the checkbox]"` | `.pf-c-check__input` | Adds an accessible name to the checkbox when there is no visible text label. **Required** when there is no visible text label. If there is already a visible text label via the `label` element, this attribute should not be passed in.|
| `id` | `.pf-c-check__input` | Links the checkbox input with its text label, which allows clicking the label to toggle the checkbox. The linked label text is also used as the accessible name of the checkbox. **Required**. |
| `required` | `.pf-c-check__input` | Notifies users that the checkbox must be checked. **Required** when users must check the checkbox. |
| `for="[id of the associated checkbox]"` | `label` | Links the `label` element to the checkbox, providing a larger clickable area to toggle the checkbox. **Required** if the checkbox is not already wrapped inside the `label` element. |
|`.pf-c-check__label-required` | `label > span` | Adds styling to visually notify users that the checkbox is required and to differentiate the content from the checkbox label. Usually an asterisk `*` is used to visually convey that an input is required. **Required** when users must check the checkbox. |
