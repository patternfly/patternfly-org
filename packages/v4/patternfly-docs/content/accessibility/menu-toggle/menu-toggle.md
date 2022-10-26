---
id: Menu toggle
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';


## Accessibility

To implement an accessible PatternFly **menu toggle** component:
- Due to the composable nature of the menu and menu toggle components, keyboard interaction will need to be added manually between the menu toggle and the menu. See the [composable menu demos](https://www.patternfly.org/v4/demos/composable-menu) to see how this is done.
- When adding an action to the menu toggle, an `aria-label` will need to be added to the `MenuToggleAction` or the `MenuToggleCheckbox` to communicate to users what this action will do.
- When adding any additional elements to the menu toggle, remember to follow that element's specific considerations. For example, if you are adding an avatar to the menu toggle, you will need to provide an `alt` attribute with a description of the image.


## Testing

At a minimum, a menu component should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="menutoggle-a11y-checkbox-1" label={<span>Users should be able to use keyboard navigation to activate the menu toggle with <kbd>Enter</kbd> or <kbd>Space</kbd> to enter a menu, navigate between menu items, select an option, or escape the menu.</span>} description={<span><kbd>Tab</kbd> navigates to the menu, <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous focusable element, up and down arrow keys should be used to navigate between menu times, and <kbd>Escape</kbd> should close the menu."</span>}/>
  </ListItem>
  <ListItem>
    <Checkbox id="menutoggle-a11y-checkbox-2" label={<span>If there is not text within the menu toggle, such as a kebab menu toggle, an <code className="ws-code">aria-label</code> is used on the `MenuToggle`.</span>} description="This will communicate what the menu toggle is to users of assistive technologies when navigating through a page or a screen reader's rotor menu." />
  </ListItem>
  <ListItem>
    <Checkbox id="menutoggle-a11y-checkbox-3" label={<span>Any action used within a menu toggle has an <code className="ws-code">aria-label</code>.</span>} description="This will differentiate each action when announced to users of assistive technologies when navigating through a page or a screen reader's rotor menu." />
  </ListItem>
</List>


## React customization

Various React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-label` | `MenuToggle` | Adds an accessible name to the menu toggle. |
| `aria-label` | `MenuToggleAction` | Adds an accessible name to the menu toggle action. |
| `aria-label` | `MenuToggleCheckbox` | Adds an accessible name to the checkbox item on the menu toggle. |



## HTML/CSS customization
| Class | Applied to | Reason |
| -- | -- | -- |
| `aria-expanded="true"` | `.pf-c-menu-toggle`, `.pf-c-menu-toggle__button` | Indicates that the menu toggle component is in the expanded state. |
| `aria-expanded="false"` | `.pf-c-menu-toggle`, `.pf-c-menu-toggle__button` | Indicates that the menu toggle component is in the collapsed state. |
| `aria-label` | `.pf-c-menu-toggle.pf-m-plain` | Gives the plain menu toggle component an accessible label. |
| `disabled` | `.pf-c-menu-toggle`, `.pf-c-menu-toggle__button` | Indicates that the menu toggle component is disabled. |