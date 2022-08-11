---
id: Modal
section: components
---

A **modal** displays important information to a user without requiring them to navigate to a new page.

**Keyboard and mouse users** shouldn’t be able to interact with the rest of the page outside of an open modal. Set initial focus on the first focusable element in the modal. The user should be able to Tab to any interactive elements within the modal and use Tab + Shift to move backward through interactive elements. Keyboard users should be able to leave the modal by pressing Esc and focus should return to the element that invoked the modal. 

**Screen reader users** shouldn’t be able to interact with the rest of the page outside an open modal. Add alternative text for any images or non-textual buttons (like icon buttons). Images should use the alt attribute: `aria-label` is most common to label icon buttons. Write a clear headline that describes the modal, and be sure to follow our modal content guidelines to clearly communicate information contained within it. 

Bear in mind that any components placed inside the modal should also follow that component’s accessibility requirements.
<br/>
<br/>

**To make modal accessible:**

- **If you don’t use a title in your modal**, add an `aria-label` to give the modal an accessible name. It will look like `aria-label=”[title of modal]” on the AboutModal and will appear directly on the class .pf-c-about-modal-box. 
- Use `aria-describedby` for any description you add to the modal.

<br/>
The following props can be added or are customizable in PatternFly:

| React component | React prop | Which HTML element it appears on in markup | Explanation | 
|---|---|---|---|
| Modal | aria-describedby | .pf-c-modal-box | Id to use for Modal Box descriptor |
| Modal | aria-label | .pf-c-modal-box | Accessible descriptor of modal (use if no title) |
| Modal | aria-labelledby | .pf-c-modal-box | Id to use for Modal Box label (use if no title) |
| Modal | title | .pf-c-modal-box | Simple text content of the Modal Header, also used for aria-label on the body |
| Modal | titleLabel | .pf-c-modal-box__title | Optional title label text for screen readers |