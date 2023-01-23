---
id: Modal
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **modal** component:

- Add an `aria-label` to the modal if it doesn't have a visible text title
- Ensure any other PatternFly components follow their respective accessibility documentation

## Testing

At a minimum, a modal should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="modal-a11y-checkbox-1" label="Any content that is on the page but outside of the modal cannot be interacted with or navigated to while the modal is open." />
  </ListItem>
  <ListItem>
    <Checkbox id="modal-a11y-checkbox-2" label="Standard keyboard navigation can be used to navigate between the contents of a modal." description={<span><kbd>Tab</kbd> navigates to the next focusable element inside a modal, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous focusable element.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="modal-a11y-checkbox-3" label={<span>The <kbd>Escape</kbd> key should close the modal, if no components within the modal are open.</span>} description={<span>If a dropdown is open within an open modal, pressing <kbd>Escape</kbd> once should close the dropdown only, and pressing <kbd>Escape</kbd> again should close the modal.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="modal-a11y-checkbox-4" label="When a modal closes, focus should return to the last focused item before the modal was opened." description="Exceptions to this include if the last focused item no longer exists, or if focusing another element makes more sense from a work flow perspective." />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|


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

To read more about accessibility with a modal, refer to the following resources:

- [ARIA Authoring Practices Guide - Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/)
