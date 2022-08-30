---
id: Skeleton
section: components
---

## Usage 
Skeleton loading should be progressive –– it should load static text first, followed by variable elements of the UI.

### When to use a skeleton vs. a loading spinner

**Show a skeleton when:**
- You know what the populated data is going to look like (even if it results in an empty state).

**Show a [spinner](/components/spinner/react) when:**
- You do not know what the populated data may look like. For example, if you are loading a form (as they are not all structured the same).
- When it is likely it will fail or show an empty state while waiting for actions to complete.

## Accessibility
For information regarding accessibility, visit the [skeleton accessibility](/components/skeleton/accessibility) tab. 
