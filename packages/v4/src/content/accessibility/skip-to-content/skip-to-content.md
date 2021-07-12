---
id: Skip to content
section: components
---

A **skip to content** is a component that allows screen reader and keyboard users to bypass navigation rather than tabbing through it.

**Keyboard users** should be able to find the skip to content using **Tab** at the start of a page with navigation. They should be able to select the skip to content using **Enter**.

**Screen reader users** should also be able to navigate to skip to content using **Tab** and select it to skip past the navigation of a page.

## To make skip to content accessible:
- Make sure the skip to content can be accessed with **Tab** 
- Give the skip to content a tabindex of -1 so that it can receive programmatic focus for keyboard and screen reader users. For more info on this tabindex, see [the WebAIM page for tabindex](https://webaim.org/techniques/keyboard/tabindex#zero-negative-one).