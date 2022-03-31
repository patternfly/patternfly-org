---
id: Tooltip
section: components
---

A **tooltip** is in-app messaging used to identify elements on a page with short, clarifying text. The contents of a tooltip should be accessible to all users, regardless of the device or method used to navigate to the element that triggers the tooltip.

**Mouse users** should be able to trigger a tooltip by hovering over the triggering element. The tooltip should also be hoverable and persist until the mouse pointer is no longer hovering over the triggering element or the tooltip itself.

**Keyboard users** should be able to place focus on the triggering element in order to trigger the tooltip. The tooltip should persist as long as the triggering element has focus.

**Screen reader users** should have the contents of the tooltip announced to them when it is triggered. This can be best achieved by using the `children` prop and wrapping the tooltip around the intended trigger.

<br/>

The Tooltip must also meet the following criteria in order to be accessible:

- It must be dismissable without needing to move the mouse pointer or remove focus from the trigger, such as by pressing the **Escape** key.
- It must be dismissed if the content of the tooltip is no longer valid.

<br/>

