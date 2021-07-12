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
- Use roles to identify the main region and the banner region of a page.
- Use aria-expanded on to indicate the state of the visibility of expandable content.
- Use a tabindex of -1, as an entire page component should not be focusable by tabbing (though individual components within it may be).
- For every element that does not contain text, add an `aria-label` attribute that contains alternative text.
- If using notifications in the masthead, refer to notification badge accessibility guidelines.

The following props/attributes have been added for you or are props/attributes that can be customized:
| Reason used | React prop used to customize | HTML Attribute | React component that it should be applied to | Which HTML element it appears on in markup |
| -- | -- | -- | -- | -- |
| Labels the navigation toggle button | `aria-label` | aria-label="Global Navigation" | PageHeader |  |
| Identifies the element controlled by the toggle | `aria-controls` |  |  | .pf-c-page__header-brand-toggle > .pf-c-button |
| Allows the main region to receive programmatic focus |  | tabindex="-1" |  | .pf-c-page__main |
| Provides a hook for sending focus to new content. |  | id="[id]" |  | .pf-c-page__main |
| Indicates that the expandable content is visible and the current state of the contents. |  | aria-expanded="true/false" |  | .pf-c-page__header-brand-toggle > .pf-c-button |

