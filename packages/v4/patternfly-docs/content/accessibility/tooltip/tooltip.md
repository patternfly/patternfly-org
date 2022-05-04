---
id: Tooltip
section: components
---

A **tooltip** is in-app messaging used to identify elements on a page with short, clarifying text. The contents of a tooltip should be accessible to all users, regardless of the device or method used to navigate to the element that triggers the tooltip.

**Mouse users** should be able to trigger a tooltip by hovering over the triggering element. The tooltip should also be hoverable and persist until the mouse pointer is no longer hovering over the triggering element or the tooltip itself.

**Keyboard users** should be able to place focus on the triggering element in order to trigger the tooltip. The tooltip should persist as long as the triggering element has focus.

**Screen reader users** should have the contents of the tooltip announced to them when it is triggered. This can be best achieved by using the `children` prop and wrapping the tooltip around the intended trigger. Additionally, if a tooltip's contents is expected or intended to dynamically update (such as in response to a user action), the updated content should be announced to users.

## Accessibility application

The preferred method of using the tooltip is by wrapping it around its trigger via the `children` prop. However, there are situations where additional props must be passed in or where using the `reference` prop is needed or desired.

To ensure the tooltip is used accessibly, follow these steps when applicable:

- When adding a tooltip to a static element, such as a `span` or `div`, you must ensure:
    - The static element has `tabindex="0"` passed in, so that keyboard users can place focus on it to trigger the tooltip, and there is some form of styling to visually let users know the element can be focused/hovered (usually an underline on the text).
    - When using the `children` prop, `aria-live="polite"` and `aria="none"` are passed into the tooltip. Tooltips on static elements do not always get announced by assistive technologies by default, so passing in `aria-live` allows the tooltip contents to be announced while `aria="none"` ensures the tooltip does not get announced more than once.
- When the tooltip content is expected or intended to dynamically update and the `children` prop is being used, you must also pass in `aria-live="polite"` and `aria="none"` to ensure the updated content gets announced to users and that the the tooltip does not get announced more than once.
- When passing in the `id` prop and using the `children` prop you should also pass in `aria="none"`, and then either `aria-describedby` or `aria-labelledby` to the tooltips' trigger. The aria attribute passed into the trigger should have the tooltips' `id` prop passed in as a value.
- A tooltip must be dismissable without needing to move the mouse pointer or remove focus from the trigger, such as by pressing the **Escape** key.
- A tooltip must be automatically dismissed if its content is no longer valid.

<br/>

The following props/attributes have been added for you or are customizable in PatternFly:

| React prop/attribute | React component that it should be applied to | Which HTML element it appears on in markup | Reason used |
| -- | -- | -- | -- |
| `aria-live` | Tooltip | .pf-c-tooltip | Used when a tooltips' content is expected or intended to dynamically update, or when a tooltip is placed on a static element. Only use a value of "polite" and only when also using the `children` prop (`aria-live="polite"` is set by default when using the `reference` prop). |
| `aria` | Tooltip | .pf-c-tooltip | Used to decide whether the trigger is described by the tooltip (default behavior) or is labelled by it (`aria="labelledby"`). A value of "none" can also be passed in to prevent the tooltip from being announced or to set `aria-describedby` or `aria-labelledby`manually on the trigger. |
| `id` | Tooltip | .pf-c-tooltip | Used to manually pass in the `id` attribute, which can be then be passed in as a value to a triggers' `aria-describedby` or `aria-labelledby` attribute. |