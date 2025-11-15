---
id: Radio
section: components
subsection: forms
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';
import { Link } from '@patternfly/documentation-framework/components/link/link';

## Accessibility

To implement an accessible PatternFly **radio** component:

- Ensure the radio can be navigated to and interacted with via keyboard and other assistive technologies such as a screen reader
- Ensure the radio can be toggled by clicking its visible text label, if it has one
- Ensure the radio label has hover styles to indicate that it can be clicked
- Provide an `aria-label` or `aria-labelledby` if the radio does not have a visible text label
- Place related radios inside of an element that has the `role="radiogroup"` attribute with its own `aria-label` or `aria-labelledby`

## Testing

At a minimum, a radio should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="radio-a11y-checkbox-1" label="Standard keyboard navigation can be used to navigate into and out of a radio group." description={<span><kbd>Tab</kbd> navigates to the first radio in a group or the checked radio in a group, or to the next focusable element outside of the radio group if focus is already in the radio group. <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the last radio in a group or the checked radio in a group, or the previous focusable element outside of the radio group if focus is already in the radio group.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="radio-a11y-checkbox-2" label="Standard keyboard navigation can be used to navigate between radios within a group." description={<span><kbd>Right Arrow</kbd> and <kbd>Down Arrow</kbd> moves focus to the next radio within the radio group, or to the first radio if focus is currently on the last one in the group, and checks the newly focused radio. <kbd>Left Arrow</kbd> and <kbd>Up Arrow</kbd> moves focus to the previous radio within the radio group, or to the last radio if focus is currently on the first one in the group, and checks the newly focused radio.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="radio-a11y-checkbox-3" label="Standard keyboard interaction can be used to interact with a radio group." description={<span>Only <kbd>Space</kbd> should be able to check a radio if there is no currently checked radio within a group.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="radio-a11y-checkbox-4" label="If the radio has a visible text label, clicking the label checks the radio." description="This provides extra clickable space for users who may have trouble clicking the radio input itself, such as on mobile or due to a motor or physical impairment." />
  </ListItem>
  <ListItem>
    <Checkbox id="radio-a11y-checkbox-5" label="If the radio has a visible text label, that label has hover styles to indicate to users that it can be interacted with." />
  </ListItem>
  <ListItem>
    <Checkbox id="radio-a11y-checkbox-6" label={<span>If the radio does not have a visible text label, it has an <code className="ws-code">aria-label</code> or <code className="ws-code">aria-labelledby</code> attribute.</span>} description="This provides context to users who may not be able to see or understand the visual context, such as a radio that selects a table row." />
  </ListItem>
  <ListItem>
    <Checkbox id="radio-a11y-checkbox-7" label={<span>Multiple related radios are rendered inside of another element that has the <code className="ws-code">role="radiogroup"</code> attribute.</span>} description={<span>The <code className="ws-code">role</code> attribute notifies users of assistive technologies that they are in a radio group, and will announce the total number of radios in the group. Note that this is similar to our [checkbox accessibility guidelines](/components/forms/checkbox/accessibility), except a radio group does not need an explicit list element.</span>} />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the radio]"` | `Radio` | Adds an accessible name to the radio when there is no visible text label. **Required** for standalone radios without a `label` prop, and when there is no other element that can label the radio via its `aria-labelledby` prop. |
| `aria-labelledby="[id or space-separated list of id's of the element(s) that labels the radio]"` | `Radio` | Adds an accessible name to the radio. **Required** for standalone radios without a `label` prop, and when there is another element that can label the radio. |
| `id` | `Radio` | Links the radio input with its text label, which allows clicking the label to check the radio. The linked label text is also used as the accessible name of the radio. **Required**. |
| `isDisabled={[true or false]}` | `Radio` | Disables the radio, removing it from the tab order on the page and preventing interaction, and applies disabled styling. |
| `isValid={[true or false]}` | `Radio` | Sets the `aria-invalid` attribute, notifying users of assistive technologies whether the radio value is invalid. |
| `label="[text that labels the radio]"` | `Radio` | Adds a visible text label for the radio, which also acts as its accessible name. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-describedby="[id of the element that desribes the radio]"` | `.pf-v6-c-radio__input` | Adds an accessible description for the radio, typically the `.pf-v5-c-radio__description` element. **Required** when there is a `.pf-v5-c-radio__description` element. |
| `aria-invalid={[true or false]}` | `.pf-v6-c-radio__input` | Notifies users of assistive technologies whether the radio value is invalid. |
| `aria-label="[text that labels the radio]"` | `.pf-v6-c-radio__input` | Adds an accessible name to the radio when there is no visible text label. **Required** for standalone radios without a linked `label` element, and when there is no other element that can label the radio via its `aria-labelledby` attribute. |
| `aria-labelledby="[id or space-separated list of id's of the element(s) that labels the radio]"` | `.pf-v6-c-radio__input` | Adds an accessible name to the radio. **Required** for standalone radios without a linked `label` element, and when there is another element that can label the radio. |
| `disabled` | `.pf-v6-c-radio__input` | Disables the radio, removing it from the tab order on the page and preventing interaction, and applies disabled styling. |
| `id` | `.pf-v6-c-radio__input` | Links the radio input with its text label, which allows clicking the label to check the radio. The linked label text is also used as the accessible name of the radio. **Required**. |
| `for="[id of the associated radio]"` | `label` | Links the `label` element to the radio, providing a larger clickable area to check the radio. **Required**. |

### Explicit vs implicit labeling

Wrapping an input element within a `label` element will link the two implicitly, without the `for` attribute on the `label` element being necessary. For example, the following code snippet shows an input and label being linked implicitly:

```noLive
<label>
  <span>Radio label</span>
  <input type="radio">
</label>
```

Implicitly linking the two elements behaves similarly as passing the `for` attribute on the `label`, i.e. clicking the visible label text will check the radio. However, this may not be supported by all assistive technologies, so when possible it is best to explicitly link an input with its `label` like the following code snippet shows, even if the input is wrapped by the `label` element:

```noLive
<label for="radio1-id">
  <span>Radio label</span>
  <input id="radio1-id" type="radio">
</label>
```
