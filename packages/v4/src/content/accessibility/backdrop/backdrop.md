---
id: Backdrop
section: components
---

A **backdrop** is used to screen the main content of a page when a modal overlay is opened. It prevents the user from doing other work on the page until the modal is dismissed.
 
**Keyboard users** should not be able to interact with or navigate to the backdrop, as they must address the modal overlay until the modal is dismissed.
 
**Screen reader users** should also not be able to interact with the backdrop for the same reasons.

## Accessibility application:
- If using just a Backdrop component rather than PatternFly's Modal, you must trap focus inside of the modal and disable any functionality outside of it. This can be done with a FocusTrap or any alternative means of disabling all of the content behind the Backdrop.