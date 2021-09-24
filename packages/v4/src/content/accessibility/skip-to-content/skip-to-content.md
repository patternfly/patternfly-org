---
id: Skip to content
section: components
---

A **skip to content** is a component that allows screen reader and keyboard users to bypass navigation rather than tabbing through it.

**Keyboard users** should be able to find the skip to content using **Tab** at the start of a page with navigation. They should be able to select the skip to content using **Enter**. A skip to content does not trap tab focus. It is the first tabbable element on a page, but can be tabbed past and into the navigation of a page if the user prefers.

**Screen reader users** should also be able to navigate to skip to content using **Tab** and select it to skip past the navigation of a page.

## To make skip to content accessible:
- Ensure that the skip to content href is properly linked to the main content of the page. You may have to add context to the href if there are any query parameters in the URL.
- If you're using the page component with the skip to content, we add a tabindex="-1" for you. If you are using the skip to content on its own, give the target of the skip to content link a tabindex of -1. Some browsers require this attribute to make this component work consistently.
