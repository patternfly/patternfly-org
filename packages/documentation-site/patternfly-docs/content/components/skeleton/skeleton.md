---
id: Skeleton
section: components
---

## Usage 
A skeleton is a type of loading state that allows you to expose content incrementally, once the structure of the page has been loaded in. A skeleton should match the exact structure of the element you’re loading in and can be used in components on top of the page, such as in a drop down menu, or a card. Skeleton loading should be progressive –– it should load static text first, followed by variable elements of the UI.

### When to use a skeleton vs. a loading spinner
Use a skeleton when:
- The structure of a page has loaded in but the content has not.
- Some content of a page has loaded, but not all. For example, in a dashboard, you may have some loaded cards, while others are still loading. 
- You want to show loading content inside of a card, table, data list or more.

**Show a skeleton when:**
- You know what the populated data is going to look like (even if it results in an empty state).

**Do not show a skeleton when:**
- You don’t know what the structure of the component is going to look like.

**Show a [spinner](/components/spinner) when:**
- You have multiple elements on the page that are loading at different speeds, use a spinner once the structure of at least one element is loaded on the page.
- You are attempting to load in a component that sits on top of a page with an expected structure.
- It is likely it will fail or show an empty state while waiting for actions to complete.

## Accessibility
For information regarding accessibility, visit the [skeleton accessibility](/components/skeleton/accessibility) tab. 
