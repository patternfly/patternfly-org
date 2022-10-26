---
id: Backdrop
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **backdrop**:

- If using just a backdrop component rather than PatternFly's [modal](/components/modal), you must trap focus inside of the modal and disable any functionality outside of it. This can be done with a `FocusTrap` or any alternative means of disabling all of the content behind the backdrop.
## Testing

 At a minimum, a backdrop should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="backdrop-a11y-checkbox-1" label="Users cannot interact with or navigate to the backdrop or any content beneath it using keyboard navigation." />
  </ListItem>
  <ListItem>
    <Checkbox id="backdrop-a11y-checkbox-2" label="Users cannot interact with the backdrop using a screen reader." />
  </ListItem>
</List>

## React customization

A backdrop does not have any further React props for accessibility. 

## HTML/CSS customization

A backdrop does not have any further HTML/CSS attributes or classes for accessibility.
