---
id: Modal
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **modal** component:

- Add an `aria-label` to the modal if it doesn't have a visible text title
- Provide at least one clickable button that can close the modal, such as the default close icon or a "cancel" button
- Ensure any other PatternFly components follow their respective accessibility documentation

## Testing

At a minimum, a modal should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="modal-a11y-checkbox-1" label="Any content that is on the page, but outside of the modal, cannot be interacted with or navigated to while the modal is open." description={<span>Learn more about <a href="/accessibility/product-development-guide/#trapping-focus">trapping focus</a> in our product development guide for accessibility.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="modal-a11y-checkbox-2" label="Standard keyboard navigation can be used to navigate between the contents of a modal." description={<span><kbd>Tab</kbd> navigates to the next focusable element inside a modal, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous focusable element.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="modal-a11y-checkbox-3" label={<span>The <kbd>Escape</kbd> key should close the modal only if no other components within the modal are open.</span>} description={<span>If a dropdown is open within an open modal, pressing <kbd>Escape</kbd> once should close the dropdown only, and pressing <kbd>Escape</kbd> again should close the modal itself.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="modal-a11y-checkbox-4" label="There is at least one clickable button that will close the modal, such as the close icon in the modal header or a 'cancel' button in the footer." />
  </ListItem>
  <ListItem>
    <Checkbox id="modal-a11y-checkbox-5" label="When a modal closes, focus should return to the last focused item before the modal was opened." description="Exceptions to this include if the last focused item no longer exists, or if focusing another element makes more sense from a work flow perspective." />
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
| `aria-describedby="[id of the element that describes the modal"` | `.pf-c-modal-box` | Adds an accessible description to the modal. Typically this will be the id of the primary modal content. |
| `aria-label="[text describing the modal]"` | `.pf-c-modal-box` | Adds an accessible name to the modal. **Required** if there is no visible text that acts as the modal title. |
| `aria-labelledby="[id of the .pf-c-modal-box__title element or another title element]"` | `.pf-c-modal-box` | Adds an accessible name to the modal. **Required** if `.pf-c-modal-box__title` or another title element is present. |
| `aria-modal="true"` | `.pf-c-modal-box` | Notifies users of assistive technologies that the contents underneath the modal are not available for interaction. This does not prevent other content from being interacted with, nor does it make the element a modal itself. **Required**. |
| `role="dialog"` | `.pf-c-modal-box` | Identifies the element that serves as the modal container. **Required**. |
| `tab-index="0"` | `.pf-c-modal-box__body` | Makes the modal body focusable via keyboard and other assistive technologies. **Required** if the modal body content renders a scrollbar due to overflow and if there is no other focusable element within the scrollable region. |
| `aria-label="Close"` | `.pf-c-modal-box__close .pf-c-button` | Adds an accessible name to the close button of a modal. **Required**. |
| `form="[id of the form element in the modal body]"` | `.pf-c-modal-box__footer .pf-c-button` | Links a "submit" button in the modal footer with a form in the modal body. **Required** when the submit button is outside of a `<form>` element. |
| `aria-hidden="true"` | Parent element that contains the page contents | Removes the specified content from the accessibility tree, preventing assistive technologies from interacting with it. The `.pf-c-modal-box` element must not be a descendent of the element that has this attribute. **Required** when the modal is open. |

## Additional considerations

Consumers must ensure they take any additional considerations when customizing a modal, using it in a way not described or recommended by PatternFly, or in various other specific use cases not outlined elsewhere on this page.

### Focus

## Further reading

To read more about accessibility with a modal (also known as a dialog), refer to the following resources:

- [ARIA Authoring Practices Guide - Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/)
