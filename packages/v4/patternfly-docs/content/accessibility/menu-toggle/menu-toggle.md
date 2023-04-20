---
id: Menu toggle
section: components
subsection: menus
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';
import { Link } from '@patternfly/documentation-framework/components/link/link';

## Accessibility

To implement an accessible PatternFly **menu toggle** component:
- Due to the composable nature of the menu and menu toggle components, keyboard interaction will need to be added manually between the menu toggle and the menu. See the [composable menu demos](/demos/composable-menu) to see how this is done.
- When adding an action to the menu toggle, an `aria-label` will need to be added to the `MenuToggleAction` or the `MenuToggleCheckbox` to communicate to users what this action will do.
- When adding any additional elements to the menu toggle, remember to follow that element's specific considerations. For example, if you are adding an avatar to the menu toggle, you will need to provide an `alt` attribute with a description of the image.


## Testing

At a minimum, a menu toggle component should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="menutoggle-a11y-checkbox-1" label={<span>Users should be able to use keyboard navigation to activate the menu toggle with <kbd>Enter</kbd> or <kbd>Space</kbd> to enter a menu.</span>} description={<span><kbd>Tab</kbd> navigates to the menu and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous focusable element. Refer to our <Link href="/components/menu/accessibility">menu accessibility documentation</Link> for more implementation details when using these components together. </span>}/>
  </ListItem>
  <ListItem>
    <Checkbox id="menutoggle-a11y-checkbox-2" label={<span>If there is not text within the menu toggle, such as a kebab menu toggle, an <code className="ws-code">aria-label</code> is used on the <code className="ws-code">MenuToggle</code>.</span>} description="This will communicate what the menu toggle is to users of assistive technologies when navigating through a page or a screen reader's rotor menu." />
  </ListItem>
  <ListItem>
    <Checkbox id="menutoggle-a11y-checkbox-3" label={<span>Any action used within a menu toggle has an <code className="ws-code">aria-label</code>.</span>} description="This will differentiate each action when announced to users of assistive technologies when navigating through a page or a screen reader's rotor menu." />
  </ListItem>
</List>


## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the menu toggle]"` | `MenuToggle` | Adds an accessible name to the menu toggle. Required when there is no text displayed in the menu toggle. |
| `icon={[custom icon]}` | `MenuToggle` | Adds an optional icon rendered inside the toggle, before the children content. Add `aria-hidden` to the icon to hide the decorative item from screen reader elements. |
| `aria-label="[text that labels the action]"` | `MenuToggleAction` | Adds an accessible name to the menu toggle action when the action is represented by an icon and no text. |
| `aria-label="[text that labels the checkbox]"` | `MenuToggleCheckbox` | Adds an accessible name to the checkbox item on the menu toggle when there is no associated visible label text. |



## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or Class | Applied to | Reason |
| -- | -- | -- |
| `aria-expanded="true or false"` | `.pf-c-menu-toggle`, `.pf-c-menu-toggle__button` | Indicates that the menu toggle component is in the expanded or collapsed state. |
| `aria-label="[text that labels the menu toggle]"` | `.pf-c-menu-toggle` | An accessible label for the menu toggle when there is no visible text within the toggle. Required when using a `pf-m-plain` with no text. |
| `aria-hidden="true"` | `.pf-c-menu-toggle__toggle-icon` | Makes the decorative icon on the toggle hidden from screen reader users. **Required when the toggle contains only an icon**| 