---
id: Background image
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **background image**:

- Check that there is sufficient color contrast between different parts of the background image and any text that will be on the image. Automated testing tools don't often pick up background image colors, so they may not be able to tell you if contrast is sufficient for users with visual disabilities.
-  Using alternative text so that a screen reader is able to describe the background image when the user navigates to a page is beneficial.

## Testing

 At a minimum, a background image should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="alertGroup-a11y-checkbox-1" label="Users should not be able to interact with or navigate to the background image with the keyboard, as it is not an interactive element." />
  </ListItem>
  <ListItem>
    <Checkbox id="alertGroup-a11y-checkbox-2" label="Users do not need to be able to interact with the background image via a screen reader." />
  </ListItem>
</List>

## React customization

A background image does not have any further React props for accessibility.

## HTML/CSS customization

Various HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `alt` | `.pf-c-background-image` | Provides an accessible description of the background image. |
