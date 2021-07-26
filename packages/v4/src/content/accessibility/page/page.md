---
id: Page
section: components
---

The **page** component is used to define the basic layout of a page with either vertical or horizontal navigation. Page layouts are defined using page sections, such as the header, body, and footer of a page. The basic layout of a page depends on whether your page uses vertical or horizontal navigation.

A page can be combined with many other components, so to create an accessible page, refer to the accessibility recommendations for each component.

**Keyboard users** should be able to navigate through the masthead of the page and into other interactive elements of the page using **Tab** and **Shift + Tab** to move forward and backward through interactive elements. 

**Screen reader users** should be able to navigate through and interact with the masthead of the page using the same interactions as keyboard users. Elements of a page that do not have visible descriptive text, such as toggle icons, should have alternative text for screen readers.

Consider using a **skip to content** component on your page so that assistive technology users don’t need to make their way through the entire navigation menu each time they go to another page.

## To make a page accessible:
- Use semantic elements when possible, as these will have default roles. If this is not possible, manually add roles to identify different regions of the page as needed.
- If there are multiple instances of one type of semantic element (for instance, two `<nav>` items), label the elements.
- For every element that does not contain text, add an `aria-label` attribute that contains alternative text.
- If using notifications in the masthead, refer to notification badge accessibility guidelines.

The following props/attributes have been added for you or are props/attributes that can be customized:

| React prop | React component that it should be applied to | Which HTML element it appears on in markup | Reason used |
| -- | -- | -- | -- |
| `aria-label` | PageHeader | .pf-c-button.pf-m-plain | Labels the navigation toggle button |
| `aria-controls` | PageHeader | .pf-c-button.pf-m-plain | Identifies the element controlled by the toggle |
| `mainAriaLabel` | Page | .pf-c-page__main | Labels the main section |
| `mainContainerId` | Page | .pf-c-page__main | An id to use for the [role="main"] element |
| `mainTabIndex` | Page | .pf-c-page__main | A tabIndex to use for the [role="main"] element. Defaults to -1; make this value null to unset it |
| `skipToContent` | Page | .pf-c-button.pf-m-primary.pf-c-skip-to-content | Skip to content component for the page |
| `role` | Page | .pf-c-page__main | Value for the role on the `<main>` element |
