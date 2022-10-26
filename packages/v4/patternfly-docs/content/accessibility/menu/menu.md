---
id: Menu
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';


## Accessibility

To implement an accessible PatternFly **menu** component:
- Due to the composable nature of the menu component, keyboard interaction will need to be added manually between the menu toggle and the menu. See the [composable menu demos](https://www.patternfly.org/v4/demos/composable-menu) to see how this is done.
- Any actions placed within a menu item will need an `aria-label` on the `MenuItemAction` to communicate to users what the action is.


## Testing

At a minimum, a menu component should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="menu-a11y-checkbox-1" label={<span>Users should be able to use keyboard navigation to enter the menu, navigate between menu items, select an option, or escape the menu.</span>} description="<span><kbd>Tab</kbd> navigates to the menu, <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous focusable element, up and down arrow keys should be used to navigate between menu times, and <kbd>Escape</kbd> should close the menu."</span>/>
  </ListItem>
  <ListItem>
    <Checkbox id="menu-a11y-checkbox-2" label={<span>If using menu item actions, the actions have an accessible name via the <code className="ws-code">aria-label</code></span>} description="This will differentiate each action when announced to users of assistive technologies when navigating through a page or a screen reader's rotor menu." />
  </ListItem>
</List>


## React customization

Various React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-label` | `Menu` | Adds an accessible name to the menu. |
| `aria-label` | `MenuItem` | Adds an accessible name to the menu item. |
| `aria-label` | `MenuItemAction` | Adds an accessible name to the action item on the menu. |



## HTML/CSS customization
| Attribute | Applied | Reason |
| -- | -- | -- |
| `role="menu"` | `.pf-c-menu__list` | Declares `.pf-c-menu__list` as a menu. |
| `disabled` | `button.pf-c-menu__item` | When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus. |
| `role="menuitem"` | `.pf-c-menu__item`, `.pf-c-menu__list-item` (checkbox) | Assigns `.pf-c-menu__item` as an option in a set of choices contained by a menu. |
| `role="none"` | `.pf-c-menu__list-item` | Removes semantic meaning from `.pf-c-menu__list-item`. |
| `aria-disabled="true"` | `a.pf-c-menu__item` | When the menu item uses a link element, removes it from keyboard focus. |
| `tabindex="-1"` | `a.pf-c-menu__item` | When the menu item uses a link element, removes it from keyboard focus. |
| `aria-hidden="true"` | `.pf-c-menu__item-icon`, `.pf-c-menu__item-action-icon`, `.pf-c-menu__item-external-icon`, `.pf-c-menu__item-toggle-icon`, `.pf-c-menu__item-select-icon` | Hides the icon from assistive technologies. |
| `aria-label="Not starred"` | `.pf-c-menu__item-action-icon.pf-m-favorite` | Provides an accessible label indicating that the favorite action is not selected. |
| `aria-label="Starred"` | `.pf-c-menu__item-action-icon.pf-m-favorite.pf-m-favorited` | Provides an accessible label indicating that the favorite action is selected. |
