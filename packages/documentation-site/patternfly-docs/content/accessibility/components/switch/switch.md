---
id: Switch
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **switch**:

- Ensure the switch has a visible text label or a label provided via `aria-label` or `aria-labelledby`.
- Ensure the label for the switch describe its "on" state.
- Do not dynamically update the switch label.

## Testing

At a minimum, a switch should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="switch-a11y-checkbox-1" label={<span>The switch has a visible text label or one provided via <code className="ws-code">aria-label</code> or <code className="ws-code">aria-labelledby</code>.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="switch-a11y-checkbox-2" label={`The switch's label describes its "on" state.`} description={`For example, if a switch is intended to show or hide certain details, a proper label could be "Show details".`}/>
  </ListItem>
  <ListItem>
    <Checkbox id="switch-a11y-checkbox-3" label="The switch's label is never dynamically updated." description={<span>Dynamically updating the switch label, especially based on its state, can lead to confusion and convey the wrong context. For example, if a switch's "off" label were "Hide details", the context would convey that turning the switch on would hide the details (with assistive technologies announcing "Hide details off"), but this may not be accurate if the "on" label is "Show details" (with assistive technologies announcing "Show details on").</span>} />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the switch]"` | `Switch` | Provides an accessible name for the switch when a visible label is not intended. This must be a static label and never be dynamically updated. **Required** if the `aria-labelledby` or `label` props are not passed. |
| `aria-labelledby="[id or list of space-separated id's that labels the switch]"` | `Switch` | Provides an accessible name for the switch when other text on the page can be referenced. This must be a static label and never be dynamically updated. **Required** if the `aria-label` or `label` props are not passed. |
| `isDisabled={[true or false]}` | `Switch` | Disables the switch, removing it from the tab order on the page and preventing interaction with it. |
| `label="[text that labels the switch and is visibly displayed]"` | `Switch` | Provides an accessible name for the switch and displays it as visible text. This must be a static label and never be dynamically updated. **Required** if the `aria-labelledby` or `aria-label` props are not passed. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the switch]"` | `.pf-v6-c-switch__input` | Provides an accessible name for the switch when a visible label is not intended. This must be a static label and never be dynamically updated. **Required** if there is no `aria-labelledby` attribute and no visible text label via the `.pf-v6-c-switch__label` element. |
| `aria-labelledby="[id or list of space-separated id's that labels the switch]"` | `.pf-v6-c-switch__input` | Provides an accessible name for the switch when other text on the page can be referenced. This must be a static label and never be dynamically updated. **Required** if there is no `aria-label` attribute. If the `.pf-v6-c-switch__label` element exists, its `id` must be passed as one of the values passed to this `aria-labelledby` attribute. |
| `disabled` | `.pf-v6-c-switch__input` | Disables the switch, removing it from the tab order on the page and preventing interaction with it. |
| `id="[id of the switch input]"` | `.pf-v6-c-switch__input` | Used to link the switch input and its visible text label. **Required** when there is a visible text label via the `.pf-v6-c-switch__label` element. |
| `role="switch"` | `.pf-v6-c-switch__input` | Adds an accessible role to the switch. **Required** |
| `aria-hidden="true"` | `.pf-v6-c-switch__label` | Hides the text from assistive technologies. This will prevent assistive technologies from navigating to the text without preventing the text from properly labeling the switch input. **Required**. |
| `for="[id of the switch input]"` | `.pf-v6-c-switch__label` | Used to link the switch input and its visible text label. **Required** when there is a visible text label via the `.pf-v6-c-switch__label` element, and the value must match exactly the `id` passed to the `.pf-v6-c-switch__input` element. |
| `id="[id of the switch label]"` | `.pf-v6-c-switch__label` | Used to provide an accessible name to the switch input via its `aria-labelledby` attribute. **Required** when there is a visible text label and must be passed as one of the values to the `.pf-v6-c-switch__input` element's `aria-labelledby`. |
