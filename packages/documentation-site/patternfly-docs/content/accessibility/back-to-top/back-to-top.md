---
id: Back to top
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **back to top** component:

- Ensure the button can be navigated to and interacted with via keyboard and other assistive technologies such as a screen reader
- Provide descriptive text that clearly indicates the button's purpose (e.g., "Back to top")
- Ensure the button has sufficient color contrast with its background
- Do not rely solely on the icon to convey meaning - include visible text or an accessible label via `aria-label`
- Ensure the back to top button does not permanently prevent other content on the page from being viewed or interacted with.
  - If content would be overlapped by the back to top, the page should be scrollable in a way that the content can be made fully visible.

## Testing

At a minimum, a back to top component should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="back-to-top-a11y-checkbox-1" label="Standard keyboard navigation can be used to navigate to the back to top button." description={<span><kbd>Tab</kbd> navigates to the button, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates away from it.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="back-to-top-a11y-checkbox-2" label="Standard keyboard interaction can be used to activate the button." description={<span><kbd>Enter</kbd> and <kbd>Space</kbd> should activate the button and scroll the page to the top.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="back-to-top-a11y-checkbox-3" label="The button includes descriptive text or an accessible label that clearly indicates its purpose." description={<span>For icon-only variants, ensure an <code className="ws-code">aria-label</code> such as "Back to top" or "Scroll to top" is provided.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="back-to-top-a11y-checkbox-4" label="The button has sufficient color contrast with its background." description="The button should meet WCAG 2.2 Level AA contrast requirements (minimum 4.5:1 for normal text, 3:1 for large text and graphical objects)." />
  </ListItem>
  <ListItem>
    <Checkbox id="back-to-top-a11y-checkbox-5" label="When the button is activated, focus management is handled appropriately in addition to the visual scroll." description="After scrolling to the top, consider whether focus should move to a skip link, the main heading, or another region within the container that was scrolled. Ensure the chosen behavior provides a logical user experience." />
  </ListItem>
  <ListItem>
    <Checkbox id="back-to-top-a11y-checkbox-6" label="The button's visibility changes (appearing/disappearing) do not cause unexpected focus changes." description="Users should not lose their focus position when the button appears or disappears as they scroll." />
  </ListItem>
  <ListItem>
    <Checkbox id="back-to-top-a11y-checkbox-7" label="Screen reader users can understand the button's purpose and interact with it effectively." description="Test with a screen reader to ensure the button is announced correctly and its action is clear." />
  </ListItem>
  <ListItem>
    <Checkbox id="back-to-top-a11y-checkbox-8" label="The button's position is consistent and does not obscure important content." description="Ensure the sticky positioning in the lower right corner does not cover essential page content or interactive elements." />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason |
|---|---|---|
| `aria-label="[text that labels the action]"` | `BackToTop` | Adds an accessible name to the button. **Required** when the button does not contain visible text, such as the icon-only variant used on mobile devices. Common values include "Back to top" or "Scroll to top". |
| `scrollableSelector="[CSS selector]"` | `BackToTop` | Specifies the scrollable element or container. This will determine when the back to top button appears or disappears if the `isAlwaysVisible` prop is false, as well as which element or container to scroll to the top of. |
| `onClick={[action to take upon clicking]}` | `BackToTop` | Allows for custom behavior after the scroll action occurs, such as focus management or analytics tracking. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason |
|---|---|---|
| `aria-label="[text that labels the action]"` | `.pf-v6-c-back-to-top` | Adds an accessible name to the button. **Required** when the button contains only an icon with no visible text. |
| `role="button"` | `.pf-v6-c-back-to-top` | Identifies the element as a button to assistive technologies. **Required** only if using an element other than `button`. |
| `tabindex="0"` | `.pf-v6-c-back-to-top` | Makes the element focusable via keyboard. **Required** only if using an element other than `button` that itself is not interactive. |

## Additional considerations

Consumers must ensure they take any additional considerations when customizing a back to top component, using it in a way not described or recommended by PatternFly, or in various other specific use-cases not outlined elsewhere on this page.

- **Focus management**: After activating the button and scrolling to the top, focus should move to an appropriate element at the top of the container that was scrolled to match the visual scroll position. Recommended options include:
  - Moving focus to the skip link (if present)
  - Moving focus to the main heading (h1) of the page
  - Moving focus to the main landmark region or content area

- **Single page applications**: If used in a single page application or dynamic content scenario, ensure the button's visibility logic accounts for programmatic content changes, not just scroll position.

- **Mobile considerations**: On mobile devices where the icon-only variant is used, ensure the touch target is at least 24x24 CSS pixels to meet WCAG 2.2 Level AA success criterion 2.5.8 (Target Size - Minimum).

## Further reading

To read more about accessibility with buttons and scroll functionality, refer to the following resources:

- [ARIA Authoring Practices Guide - Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
- [WCAG 2.2 - Understanding Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- [WCAG 2.2 - Understanding Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html)
