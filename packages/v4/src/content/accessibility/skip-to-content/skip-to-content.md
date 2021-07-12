---
id: Skip to content
section: components
---

A **skip to content** is a component that allows screen reader and keyboard users to bypass navigation rather than tabbing through it.

**Keyboard users** should be able to find the skip to content using **Tab** at the start of a page with navigation. They should be able to select the skip to content using **Enter**.

**Screen reader users** should also be able to navigate to skip to content using **Tab** and select it to skip past the navigation of a page.

A skip to content does not trap tab focus. It is the first tabbable element on a page, but can be tabbed past and into the navigation of a page if the user prefers.

## To make skip to content accessible:
- Make sure the skip to content can be accessed with **Tab** 
- Give the target of the skip to content link a tabindex of -1. Internet Explorer and Chrome require this attribute to make this component work consistently.