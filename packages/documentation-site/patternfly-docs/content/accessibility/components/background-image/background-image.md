---
id: Background image
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **background image**:

- Check that there is sufficient color contrast between different parts of the background image and any text that will be on the image. 
-  A background image should not be used as the sole method of conveying important information.

## Testing

 At a minimum, a background image should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="backgroundImage-a11y-checkbox-1" label="Users should not be able to interact with or navigate to the background image with the keyboard, as it is not an interactive element." />
  </ListItem>
  <ListItem>
    <Checkbox id="backgroundImage-a11y-checkbox-2" label="Users should not be able to interact with the background image via a screen reader." />
  </ListItem>
  <ListItem>
    <Checkbox id="backgroundImage-a11y-checkbox-3" label="There is sufficient color contrast between the background image and any text that will be on the image." description="Automated testing tools don't often pick up background image colors, so they may not be able to tell you if contrast is sufficient for users with visual disabilities."/>
  </ListItem></List>

## React customization

A background image does not have any further React props for accessibility.

## HTML/CSS customization

A background image does not have any further HTML/CSS attributes or classes for accessibility.
