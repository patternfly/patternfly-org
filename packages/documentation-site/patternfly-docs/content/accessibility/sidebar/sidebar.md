---
id: Sidebar
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';
import { Link } from '@patternfly/documentation-framework/components/link/link';

## Accessibility

To implement an accessible PatternFly **sidebar**:

- Ensure the sidebar panel follows our documentation on [accessible scrollable elements](/accessibility/develop-for-accessibility#scrollable-elements) if its content creates a scrollable container

## Testing

At a minimum, a sidebar should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="sidebar-a11y-checkbox-1" label="Standard keyboard navigation can be used to navigate between focusable elements within the sidebar panel." description={<span><kbd>Tab</kbd> navigates to the next focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous focusable element.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="sidebar-a11y-checkbox-2" label={<span>If the sidebar panel content creates a scrollbale container, it follows our documentation on <Link href="/accessibility/develop-for-accessibility#scrollable-elements">accessible scrollable elements</Link>.</span>} />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the sidebar]"` or `aria-labelledby="[id of the element that labels the sidebar]"` | `SidebarPanel` | Adds an accessible name to the sidebar for assistive technologies. **Required** when `role="region"` is also passed in. |
| `role="region"` | `SidebarPanel` | Sets the sidebar role to a region, exposing it to assistive technologies. This should be passed in if the sidebar content causes a scrollable container and `tabIndex="0"` is also passed in. |
| `tabIndex="0"` | `SidebarPanel` | Makes the sidebar container focusable via keyboard and other assistive technologies. **Required** when the sidebar content causes a scrollable container. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the sidebar]"` or `aria-labelledby="[id of the element that labels the sidebar]"` | `.pf-v6-c-sidebar__panel` | Adds an accessible name to the sidebar for assistive technologies. **Required** when `role="region"` is also passed in. |
| `role="region"` | `.pf-v6-c-sidebar__panel` | Sets the sidebar role to a region, exposing it to assistive technologies. This should be passed in if the sidebar content causes a scrollable container and `tabIndex="0"` is also passed in. |
| `tabindex="0"` | `.pf-v6-c-sidebar__panel` | Makes the sidebar container focusable via keyboard and other assistive technologies. **Required** when the sidebar content causes a scrollable container. |
