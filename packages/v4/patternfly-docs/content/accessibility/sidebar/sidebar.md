---
id: Sidebar
section: components
---

A **sidebar** is a component which orients a panel relative to content. It was originally built to house jump links so that page 
content could be oriented relative to the jump links.

**Keyboard users** should be able to focus on interactive children of sidebar using **Tab** to move forward and 
**Tab + Shift** to move backward through interactive elements. Additionally, a `tabindex`
should be added to the sidebar when there is scrollable content in order for the overflow content to be scrolled and
accessible via keyboard.

**Screen reader users** should be able to navigate to the sidebar and all the contents of the sidebar should be read by
the screen reader.


The following props/attributes have been added for you or are customizable in PatternFly:

| React prop | React component it should be applied to | Which HTML element it appears on in markup | Reason used |
| -- | -- | -- | -- |
| tabindex | Sidebar | `.pf-c-sidebar` | Tab index should be set to 0 if the content of the sidebar is scrollable |