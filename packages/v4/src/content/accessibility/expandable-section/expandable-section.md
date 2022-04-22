---
id: Expandable section
section: components
---

An **expandable section** is used to support progressive disclosure in a form or page by hiding additional content when you don't want it to be shown by default.

**Keyboard users** should be able to navigate to the expandable section toggle and use **Enter** or **Space** to show or hide the expandable content. 
Tab order should also be preserved within the expandable content, so all interactable elements in the expandable content should follow
the expandable section toggle in the tab order.

**Screen reader users** should be informed that the expandable section toggle is interactable, and whether the state of its
associated expandable content is expanded or collapsed using the `aria-expanded` attribute. The screen reader user should also be able to access the expanded expandable
content. When the expandable content is detached from the expandable section toggle, the expandable content's `id` should be set as the value of the
expandable section toggle's `aria-controls` attribute.

The following props/attributes have been added for you and are customizable in PatternFly:

| React component         | React prop            | Which HTML element it appears on in markup     | Explanation                                                                   | 
|-------------------------|-----------------------|------------------------------------------------|-------------------------------------------------------------------------------|
| ExpandableSection       | contentId             | .pf-c-expandable-section__content              | Id of the expandable section, associates this content with its toggle button. |
| ExpandableSection       | toggleContent         | .pf-c-expandable-section__toggle-text          | Aria-label for the Context Selector Search button                             |
| ExpandableSectionToggle | contentId             | .pf-c-expandable-section__toggle aria-controls | Associates this toggle button with the content that it reveals and hides.     |
