---
id: Modal
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';
import { Link } from '@patternfly/documentation-framework/components/link/link';

## Accessibility

To implement an accessible PatternFly **modal** component:

- Add an `aria-label` to the modal if it doesn't have a visible text title
- Provide at least one clickable button that can close the modal, such as the default close icon or a "cancel" button
- Ensure any other PatternFly components follow their respective accessibility documentation

## Testing

At a minimum, a modal should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="modal-a11y-checkbox-1" label="Any content that is on the page, but outside of the modal, cannot be interacted with or navigated to while the modal is open." description={<span>Learn more about trapping focus in our <Link href="/accessibility/develop-for-accessibility/#trapping-focus">accessibility development guide</Link> for accessibility.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="modal-a11y-checkbox-2" label="Standard keyboard navigation can be used to navigate between the contents of a modal." description={<span><kbd>Tab</kbd> navigates to the next focusable element inside a modal, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous focusable element.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="modal-a11y-checkbox-3" label={<span>The <kbd>Escape</kbd> key should close the modal only if no other components within the modal are open.</span>} description={<span>If a dropdown is open within an open modal, pressing <kbd>Escape</kbd> once should close the dropdown only, and pressing <kbd>Escape</kbd> again should close the modal itself.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="modal-a11y-checkbox-4" label="There is at least one clickable button that will close the modal." description="For example, the close icon in the modal header or a 'cancel' button in the footer." />
  </ListItem>
  <ListItem>
    <Checkbox id="modal-a11y-checkbox-5" label="The modal content can receive focus via keyboard if it overflows and renders a scrollbar." />
  </ListItem>
  <ListItem>
    <Checkbox id="modal-a11y-checkbox-6" label="When a modal closes, focus should return to the last focused item before the modal was opened." description="Exceptions to this include if the last focused item no longer exists, or if focusing another element makes more sense from a work flow perspective." />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-describedby="[id of the element that describes the modal"` | `Modal` | Adds an accessible description to the modal. Typically this will be the id of the primary modal content. |
| `aria-label="[text that labels the modal]"` | `Modal` | Adds an accessible name to the modal. **Required** if there is no visible text that acts as the modal title, such as from the `title` or `header` props. |
| `aria-labelledby="[id of the element that labels the modal]"` | `Modal` | Adds an accessible name to the modal. **Required** if using the `header` prop rather than the `title` prop. |
| `bodyAriaLabel` | `Modal` | Adds an accessible name to the modal body. **Required** when the content of the modal body overflows and triggers a scrollbar.<br/><br/>When passed in, the accessible `role` of the modal body will be set to `region` by default. |
| `bodyAriaRole` | `Modal` | Adds an accessible role to the modal body. Passing this prop in will override the default `region` role when `bodyAriaLabel` is passed in. |
| `disableFocusTrap` | `Modal` | Disables the built-in focus trap functionality and allowing custom focus management when the modal is opened. When passing this prop in, you must manually trap focus yourself so that content outside of the open modal cannot be interacted with or navigated to. |
| `title` | `Modal` | Adds a visible text title to the modal and automatically sets the `aria-labelledby` of the modal. It is recommended to pass this prop in when also passing in the `titleIconVariant` prop to provide more context to users. |
| `titleIconVariant` | `Modal` | Adds an icon to the modal title. When passing in a custom icon that conveys status or severity, you must also pass in the `titleLabel` prop. |
| `titleLabel` | `Modal` | Adds visually hidden text before the modal title in order to describe the status or severity of the modal. If a predefined value is passed to `titleIconVariant`, the visually hidden text is automatically set to `[variant] alert:`, but can be overridden with this prop. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-describedby="[id of the element that describes the modal"` | `.pf-v6-c-modal-box` | Adds an accessible description to the modal. Typically this will be the id of the primary modal content. |
| `aria-label="[text that labels the modal]"` | `.pf-v6-c-modal-box` | Adds an accessible name to the modal. **Required** if there is no visible text that acts as the modal title. |
| `aria-labelledby="[id of the element that labels the modal]"` | `.pf-v6-c-modal-box` | Adds an accessible name to the modal. **Required** if `.pf-v6-c-modal-box__title` or another title element is present. |
| `aria-modal="true"` | `.pf-v6-c-modal-box` | Notifies users of assistive technologies that the contents underneath the modal are not available for interaction. This does not prevent other content from being interacted with, nor does it make the element a modal itself. **Required**. |
| `role="dialog"` | `.pf-v6-c-modal-box` | Identifies the element that serves as the modal container. **Required**. |
| `aria-label="[text labeling the modal body]"` | `.pf-v6-c-modal-box__body` | Adds an accessible name to the modal body. This attribute should only be passed in if the `role` attribute is also passed in. **Required** if the modal body content renders a scrollbar due to overflow. |
| `role="[role of the modal body]"` | `.pf-v6-c-modal-box__body` | Adds an accessible role to the modal body. Typically "region" is passed in as the role. **Required** if the modal body content renders a scrollbar due to overflow. |
| `tab-index="0"` | `.pf-v6-c-modal-box__body` | Makes the modal body focusable via keyboard and other assistive technologies. **Required** if the modal body content renders a scrollbar due to overflow. |
| `aria-label="Close"` | `.pf-v6-c-modal-box__close .pf-v6-c-button` | Adds an accessible name to the close button of a modal. **Required**. |
| `form="[id of the form element in the modal body]"` | `.pf-v6-c-modal-box__footer .pf-v6-c-button` | Links a "submit" button in the modal footer with a form in the modal body. **Required** when the submit button is outside of a `<form>` element. |
| `aria-hidden="true"` | `.pf-v6-c-modal-box .pf-v6-c-button i`, `.pf-v6-c-modal-box__header-help .pf-v6-c-button i` | Removes the close button and help button icons from the accessibility tree, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required**. |
| `.pf-screen-reader` | `.pf-v6-c-modal-box__title span` | Should be used to add text to the modal title that is accessible only to assistive technologies and is not visually rendered. The text content of this element should state the status or severity of the modal and should preface the modal title. |
| `aria-hidden="true"` | Parent element that contains the page contents | Removes the specified content from the accessibility tree, preventing assistive technologies from interacting with it. The `.pf-v6-c-modal-box` element must not be a descendent of the element that has this attribute. **Required** when the modal is open. |

## Additional considerations

Consumers must ensure they take any additional considerations when customizing a modal, using it in a way not described or recommended by PatternFly, or in various other specific use cases not outlined elsewhere on this page.

### Focus

When a modal opens, the element that should receive focus will depend on the content and size of the modal. The following guidelines can help decide where to place focus for your use case.

- If the modal contains semantic elements, such as lists or tables, that are necessary to perceive in order to better understand the modal content, place focus on a static element at the start of the content. The element that receives focus must have `tabindex="-1"`.
- If the modal includes an irreversible action, such as deleting data, place focus on the least destructive action in the modal.
- If the modal includes actions that simply provide additional information or continue processing, such as an "OK" or "Continue" button, place focus on the action that is likely to be most frequently used.
- If none of the above apply, place focus on the first focusable element in the modal.
- If placing focus on an element would cause the beginning of the modal content to scroll out of view, focus should instead be placed on a static element at the top of the modal. Typically this would be the modal title, but can also be the first paragraph element. The element that receives focus in this way must have `tabindex="-1"`.

## Further reading

To read more about accessibility with a modal (also known as a dialog), refer to the following resources:

- [ARIA Authoring Practices Guide - Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/)
