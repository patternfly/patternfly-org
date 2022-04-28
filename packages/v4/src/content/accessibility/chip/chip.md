---
id: Chip
section: components
---

A **chip** is used to communicate a value or a set of attribute-value pairs within workflows that involve filtering a set of objects. A chip contains a text element, and usually also a button that allows the user to remove the chip from a selection. Read-only or draggable chips may not have a button.

**Keyboard users** should be able to navigate to the button on a chip, as long as the chip has a button, and remove it from a selection.

**Screen reader users** should be able to navigate to the chip and have a screen reader read the chip’s text, as well as remove the chip from a selection if it has a button.

The following attributes have been added for you or are customizable in PatternFly:


| Attribute | Which HTML element it appears on in markup | Reason used |
| -- | -- | -- |
| aria-label="[button label text]" | `.pf-c-button` | Provides an accessible name for the button when an icon is used instead of text. Required when an icon is used with no supporting text. |
| aria-labelledby="[id value of .pf-c-button]" | `.pf-c-button` | Gives the button an accessible name by referring to the element that provides the position of the button within a list. Required when the button is being removed. |
| aria-hidden="true" | `<i>` | Hides the icon from assistive technologies. |