---
id: Action list
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **action list**:

- Ensure each action in the action list can be navigated to via keyboard.
- Provide an `aria-label` for an action if it does not have its own visible text content.
- If passing in another PatternFly component as an action, ensure that component follows its own accessibility documentation.

## Testing

At a minimum, an action list should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="action-list-a11y-checkbox-1" label="Standard keyboard navigation can be used to navigate between each action or other focusable elements." description={<span><kbd>Tab</kbd> navigates to the next action or focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous action or focusable element.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="action-list-a11y-checkbox-2" label={<span>If an action does not have its own visible text content, an <code className="ws-code">aria-label</code> is applied to it.</span>} description="An example for when you must do this is if an action list item contains only an icon." />
  </ListItem>
</List>

## React customization

An action list does not have any further React props for accessibility. 

## HTML/CSS customization

An action list does not have any further HTML/CSS attributes or classes for accessibility. 