---
id: About modal
section: components
---


import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **about modal**:

- Provide an `aria-label` to the about modal if there is no product name heading.
- Ensure any brand image has a valid `alt` attribute, either a string or an empty string `''`.
- Ensure the first focusable element or the about modal itself receives focus when it is opened.
- Ensure content behind the about modal cannot be interacted with or navigated to via mouse, keybaord, or other assistive technologies such as screen readers.
- Ensure the element that previously had focus before the about modal was opened receives focus upon closing the about modal.

## Testing

At a minimum, an about modal should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="aboutModal-a11y-checkbox-1" label={<span>An <code className="ws-code">aria-label</code> is passed if the about modal does not have a product name heading.</span>} description="This gives the about modal an accessible name, providing context of its purpose or content to users." />
  </ListItem>
  <ListItem>
    <Checkbox id="aboutModal-a11y-checkbox-2" label={<span>If there is a brand image, it has a valid <code className="ws-code">alt</code> attribute.</span>} description="If the image is purely decorative then an empty string should be passed as a value so that the image is not exposed to assistive technologies." />
  </ListItem>
  <ListItem>
    <Checkbox id="aboutModal-a11y-checkbox-3" label="The first focusable element, or the about modal itself, receives focus when the about modal is opened." />
  </ListItem>
  <ListItem>
    <Checkbox id="aboutModal-a11y-checkbox-4" label="Any content behind the about modal cannot be interacted with or navigated to." descriptjon="Upon reaching the end of the about modal, focus should either wrap back to the beginning of the about modal (for keyboard) or navigation should simply be prevented (for assistive technologies such as screen readers)." />
  </ListItem>
  <ListItem>
    <Checkbox id="aboutModal-a11y-checkbox-5" label="The last element to have focus before the about modal was opened should receive focus after it is closed." descriptjon="Typically this will be whatever triggered the about modal to open. If that element no longer exists, then the element closest to it should receive focus." />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `brandImageAlt="[alt text of the brand image]"` | `AboutModal` | Adds alternative text for the brand image passed to `brandImageSrc`. Typically this should either be an empty string `''` if the brand image is purely decorative, or the product name. |
| `aria-label="[text that labels the about modal]"` | `AboutModal` | Adds an accessible name to the about modal. **Required** when the `productName` prop is not passed in, and typically will be the same as the product name. |
| `closeButtonAriaLabel="[text that labels the close button]"` | `AboutModal` | Adds an accessible name to the close button of the about modal. By default the value is "Close Dialog". |
| `disableFocusTrap` | `AboutModal` | Disables the focus trap of the about modal. **Read our [additional considerations](#additional-considerations) before passing this prop in.** |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the about modal]"` | `.pf-v6-c-modal-box` | Adds an accessible name to the about modal. **Required** when there is not visible product name heading. Typically the value passed in will be the product name itself. |
| `aria-labelledby="[id of the element that labels the about modal]"` | `.pf-v6-c-modal-box` | Adds an accessible name to the about modal. **Required** when there is a visible product name heading. |
| `role="dialog"` | `.pf-v6-c-modal-box` | Adds an accessibile role to the about modal. **Required**. |
| `aria-modal="true"` | `.pf-v6-c-modal-box` | Marks the dialog as a modal. **Required**. |
| `alt="[alt text of the brand image]"` | `.pf-v6-c-about-modal-box__brand-image` | Adds alternative text for the brand image. Typically this should either be an empty string `''` if the brand image is purely decorative, or the product name. |
| `aria-label="[text that labels the close button]"` | `.pf-v6-c-about-modal-box__close > .pf-v6-c-button` | Adds an accessible name to the close button of the about modal. |

## Additional considerations

Consumers must ensure they take any additional considerations when customizing an about modal, using it in a way not described or recommended by PatternFly, or in various other specific use-cases not outlined elsewhere on this page.

### Focus trap and focus management

When using the HTML implementation of the about modal, or when passing the `disableFocusTrap` prop in the React implementation, it is up to the consumer to ensure proper focus trapping and focus management is implemented, as outlined in the [accessibility](#accessibility) section.

Without taking these considerations, it may make it more difficult for users to navigate or interact with the about modal, especially if it is appended towards the end of the document body. Issues can include, but aren't limited to:

- Needing to navigate through large sections of the rest of the page before focus is finally placed within the about modal
- Being able to navigate outside of the about modal once reaching the end of its contents, which may be confusing for users
- Not having any visual indication what element is focused when the about modal is closed
- Needing to repeatedly navigate through the same content after closing the about modal just to get back to where focus was before it was opened

## Further reading

To read more about accessibility with about modals, refer to the following resources:

- [ARIA Authoring Practices Guide - Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
