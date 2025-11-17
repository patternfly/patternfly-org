---
id: Avatar
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';
import { Link } from '@patternfly/documentation-framework/components/link/link';

## Accessibility

To implement an accessible PatternFly **avatar**:

- Pass in `alt` as a React prop or HTML attribute to provide alternative text for the avatar image.
- If you are using an SVG element for the avatar, make sure the SVG is accessible (see [How to create accessible SVGs](https://www.deque.com/blog/creating-accessible-svgs/)) and reference the different SVG patterns. Screen reader accessibility for SVGs varies based on the pattern being used.
- If you’re combining an avatar with another component, make sure to check accessibility guidelines for that component as well.

## Testing

At a minimum, an avatar should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="avatar-a11y-checkbox-4" label="Users can navigate to the avatar via the screen reader." />
  </ListItem>
  <ListItem>
    <Checkbox id="avatar-a11y-checkbox-1" label="The avatar image has alternative text." />
  </ListItem>
  <ListItem>
    <Checkbox id="avatar-a11y-checkbox-2" label="Any SVGs used are accessible." description={<span><Link href="https://www.deque.com/blog/creating-accessible-svgs/">How to create accessible SVGs</Link></span>}/>
  </ListItem>
  <ListItem>
    <Checkbox id="avatar-a11y-checkbox-3" label={<span>Keyboard users should not be able to interact with the avatar on its own (via <kbd>Tab</kbd> and <kbd>Tab + Shift</kbd>).</span>} />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason  |
| -- | -- | -- |
| `alt="[text describing the avatar]"` | `Avatar` |  Provides an accessible description of the avatar. **Required**|

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `alt="[text describing the avatar]"` | `.pf-v6-c-avatar` | Provides an accessible description of the avatar. **Required** |
