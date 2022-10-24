---
id: Avatar
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

An **avatar** is a visual used to represent a user. It may contain an image or a placeholder graphic. Typical usage is to represent the current user in the masthead.

## Accessibility

To implement an accessible PatternFly **avatar**:

- Use the `alt` React prop to provide alternative text for the avatar image.
- If you are using an SVG element for the avatar, [learn how to create accessible SVGs](https://www.deque.com/blog/creating-accessible-svgs/) and reference the different SVG patterns. Screen reader accessibility for SVGs varies based on the pattern being used.
- If you’re combining an avatar with another component, make sure to check accessibility guidelines for that component as well.

## Testing

At a minimum, tabs should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="avatar-a11y-checkbox-4" label="Screen reader users can navigate to the avatar." />
  </ListItem>
  <ListItem>
    <Checkbox id="avatar-a11y-checkbox-1" label="The avatar image has alternative text." description={<span>Use the <code class="ws-code">alt</code> prop to provide alternative text.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="avatar-a11y-checkbox-2" label="Any SVGs used are accessible." description={<span><a href="https://www.deque.com/blog/creating-accessible-svgs/">How to create accessible SVGs</a></span>}/>
  </ListItem>
  <ListItem>
    <Checkbox id="avatar-a11y-checkbox-3" label={<span>Keyboard users should not be able to interact with the avatar on its own (via <kbd>Tab</kbd> and <kbd>Tab + Shift</kbd>).</span>} />
  </ListItem>
</List>

## React customization

The following props/attributes have been added for you or are customizable in PatternFly:

| Prop | Applied to | Which HTML element it appears on in markup | Reason  |
| -- | -- | -- |
| `alt` | `Avatar` |  Provides an accessible description of the avatar. |

## HTML/CSS customization

Various HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `alt` | `.pf-c-avatar` | The alt attribute describes the appearance and function of the avatar image. **Required** |

## Further reading

To read more about how to create accessible SVGs, refer to the following resource:
- [Creating Accessible SVGs](https://www.deque.com/blog/creating-accessible-svgs/)