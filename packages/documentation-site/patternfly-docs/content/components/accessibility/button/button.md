---
id: Button
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **button** component:

- Ensure the button can be navigated to and interacted with via keyboard and other assistive technologies such as a screen reader
- Provide unique, descriptive text content to the button, or an `aria-label` if the button does not contain any visible text
- Provide context that a link will open in a new tab/window when using a button as a link
- Do not place other interactive content inside of a button

For the PatternFly React library:

- Include the `isAriaDisabled` prop if the button is disabled, but should still be focusable

For the HTML/CSS library:

- Include the `aria-disabled="true"` attribute if the button is disabled, but should still be focusable


## Testing

At a minimum, a button should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="button-a11y-checkbox-1" label="Standard keyboard navigation can be used to navigate between buttons or other focusable elements." description={<span><kbd>Tab</kbd> navigates to the next button or focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous button or focusable element.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="button-a11y-checkbox-2" label="Standard keyboard interaction can be used to interact with the button." description={<span><kbd>Enter</kbd> and <kbd>Space</kbd> should be able to activate the button. This can usually be achieved by using "click" events.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="button-a11y-checkbox-3" label={<span>Each button on a page includes unique and descriptive text, or an <code className="ws-code">aria-label</code> if the button contains no visible text.</span>} description="This ensures that users can more quickly scan through and differentiate buttons on a page, such as when using VoiceOver's rotor menu." />
  </ListItem>
  <ListItem>
    <Checkbox id="button-a11y-checkbox-4" label="Users are able to tell whether a button as a link will open in a new tab or window." description={<span>This can be best achieved by rendering an icon for visual context, and passing in visually-hidden text via the <code className="ws-code">pf-screen-reader</code> class.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="button-a11y-checkbox-5" label={<span>If a button should be disabled, but remain focusable, it has the <code className="ws-code">aria-disabled="true"</code> attribute instead of the standard <code className="ws-code">disabled</code> attribute.</span>} description="One example for when you should do this is if the button has a tooltip that should be triggered when the button receives focus." />
  </ListItem>
  <ListItem>
    <Checkbox id="button-a11y-checkbox-6" label="There is no interactive content inside of the button." />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the button]` | `Button` | Adds an accessible name to the button. **Required** if the button does not contain visible text, such as the `plain` button variant. |
| `isAriaDisabled` | `Button` | Disables the button, but keeps it perceivable to users. Use this prop instead of `isDisabled` when you want users to still be aware of the button and that it is disabled, or when you expect or intend for the button to receive focus despite being disabled. For example, if the disabled button has a tooltip, you should pass this prop in to disable it. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the button]"` | `.pf-v6-c-button` | Adds an accessible name to the button. **Required** if the button does not contain visible text, such as the `plain` button variant. |
| `aria-disabled="true"` | `.pf-v6-c-button` | Disables the button, but keeps it perceivable to users. Use this prop instead of `isDisabled` when you want users to still be aware of the button and that it is disabled, or when you expect or intend for the button to receive focus despite being disabled. For example, if the disabled button has a tooltip, you should pass this prop in to disable it. |
| `tabindex="-1"` | `a.pf-v6-c-button.pf-m-disabled`, `span.pf-v6-c-button.pf-m-link.pf-m-inline.pf-m-disabled` | When a non-button element is used, prevents it from being focusable via keyboard. **Required** when the element is disabled. |
| `tabindex="0"` | `span.pf-v6-c-button.pf-m-link.pf-m-inline` | Inserts the `span` into the tab order so that is is focusable via keyboard. **Required** when the element is a `span`. |

## Further reading

To read more about accessibility with a button, refer to the following resources:

- [ARIA Authoring Practices Guide - Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
