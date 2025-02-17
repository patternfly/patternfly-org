---
id: Skip to content
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **skip to content**:

- Render the skip to content as the first focusable element on the page.
- Ensure that the skip to content href is properly linked to the main content of the page. You may have to add context to the href if there are any query parameters in the URL.

## Testing

At a minimum, a skip to content should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="skip-to-content-a11y-checkbox-1" label="The skip to content is the first focusable element on the page." description="When content is repeated on several pages - such as actions in a header or navigation links in a sidebar - users navigating via keyboard or other assistive technologies would need to navigate through that content every time. Placing a skip to content as the first focusable element helps users avoid this repeated content." />
  </ListItem>
  <ListItem>
    <Checkbox id="skip-to-content-a11y-checkbox-2" label={<span>The skip to content's <code className="ws-code">href</code> is linked to the main content of the page.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="skip-to-content-a11y-checkbox-3" label="Standard keyboard navigation can be used to navigate between the skip to content and other focusable elements." description={<span>Depending on where focus is on the page, <kbd>Tab</kbd> navigates to the skip to content or the next focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous focusable element or the skip to content. Since the skip to content should be the first focusable element on a page, the previous focusable element may typically be an item in the browser toolbar.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="skip-to-content-a11y-checkbox-4" label="Standard keyboard interaction can be used to activate the skip to content." description={<span><kbd>Enter</kbd> is typically the only key that activates links.</span>} />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `href="[id of the main content container]"` | `SkipToContent` | Links the skip to content to the main content. Typically this will be a jump link, e.g. `href="#main"`. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `href="[id of the main content container]"` | `.pf-v6-c-skip-to-content > a.pf-v6-c-button` | Links the skip to content to the main content. Typically this will be a jump link, e.g. `href="#main"`. |
