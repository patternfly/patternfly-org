---
id: AboutModal
section: components
---

An **about modal** displays information about an application like product version number(s), as well as any appropriate legal text. Like modal, this component is a secondary window that displays over the primary window to allow the user to maintain the context of a particular task. When the modal is displayed and active, the primary window is inert, so users cannot interact with content outside it.

**Keyboard and mouse users** shouldn’t be able to interact with the rest of the page outside of an open modal. Set the initial focus on the first focusable element in the modal. The user should be able to **Tab** to any interactive elements within the modal and use **Tab + Shift** to move backwards through interactive elements. Keyboard users should be able to leave the modal by pressing **Esc** and focus should return to the element that invoked the modal. 

**Screen reader users** shouldn’t be able to interact with the rest of the page outside an open modal.Add alternative text for any images or non-textual buttons (like icon buttons) . Images should use the alt attribute: `aria-label` is most common to label icon buttons. Write a clear headline that describes the modal, and be sure to follow [our modal content guidelines(https://www.patternfly.org/v4/components/modal/design-guidelines/)] to clearly communicate information contained within it..
[can pull in WCAG references and any additional information]

**Accessibility application:**
- **If you use a brand image**, use the React prop `brandImageAlt` on the AboutModal component to give the brand image alternative text for assistive technology and low bandwidth users. This will look like `alt=”[title of image]”` in the HTML markup on the image with class .pf-c-brand. 
- **If you don’t use a title in your modal**, add an `aria-label` to give the modal an accessible name. It will look like `aria-label=”[title of modal]” on the AboutModal and will appear directly on the class .pf-c-about-modal-box. 
