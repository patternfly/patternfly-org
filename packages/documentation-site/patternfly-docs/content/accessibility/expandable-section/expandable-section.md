---
id: Expandable section
section: components
---


import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **expandable section**:

- Ensure the expandable section's toggle text is updated based on its current expanded state.
- Provide unique toggle text for each expandable section if there are multiple on a page.

## Testing

At a minimum, an expandable section should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="expandableSection-a11y-checkbox-1" label="The expandable section's toggle text updates based on its current expanded state" description={`For example, if an expandable section is collapsed the toggle text should be along the lines of "Show more", while an expanded section should have toggle text along the lines of "Show less".`} />
  </ListItem>
  <ListItem>
    <Checkbox id="expandableSection-a11y-checkbox-2" label="Standard keyboard navigation can be used to navigate between an expandable section toggle and other focusable elements within or outside of the expandable section." description={<span><kbd>Tab</kbd> navigates to the next toggle or focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous toggle or focusable element.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="expandableSection-a11y-checkbox-3" label={<span>Expandable sections can be collapsed or expanded via keyboard by pressing <kbd>Space</kbd> or <kbd>Enter</kbd> on the toggle.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="expandableSection-a11y-checkbox-4" label="A user navigating via a screen reader will be notified of the current expanded state, as well as when that state gets updated." description={<span>This can be checked with a screen reader, or by checking that the <code className="ws-code">aria-expanded</code> attribute is accurate and updating in the DOM.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="expandableSection-a11y-checkbox-5" label="If there are multiple expandable sections on a page, each toggle is given unique text or accessible name" description={`If multiple expandable sections have the same toggle text, it will be confusing for users navigating via rotor menu when more than 1 toggle is announced as "Show more" with no other context.`} />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `contentId="[id of the expandable section content]"` | `ExpandableSection` and `ExpandableSectionToggle` | Adds an `id` to the `ExpandableSection`, and links it via the `aria-controls` attribute of the `ExpandableSectionToggle`. **Required** when the `isDetached` prop is passed in, and both components should have the same value passed in. |
| `toggleId="[id of the expandable section toggle]"` | `ExpandableSection` and `ExpandableSectionToggle` | Adds an id to the `ExpandableSectionToggle`, and adds an accessible name based on the toggle's content via the `aria-labelledby` attribute of the `ExpandableSection`. **Required** when the `isDetached` prop is passed, and both components should have the same value passed in. |
| `isExpanded` | `ExpandableSection` | Sets the `aria-expanded` attribute of the expandable section toggle, which notifies users of assistive technologies such as screen readers of the current state of the expandable section content. **Required** when the expandable section is not uncontrolled. |
| `toggleContent="[content for the toggle]"` or `toggleText="[text for the toggle]"` | `ExpandableSection` | The visible content of the expandable section toggle. The value passed into either prop should be based on the expandable section's current expanded state. |
| `toggleTextCollapsed="[text for a collapsed toggle]"` and `toggleTextExpanded="[text for an expanded toggle]"` | `ExpandableSection` | The visible content of the expandable section toggle when the expandable section is collapsed or expanded, respectively. These props can be passed in instead of `toggleContent` or `toggleText`. |
| `children` | `ExpandableSectionToggle` | The visible content of the expandable section toggle. The value passed in should be based on the expandable section's current expanded state. |
| `isExpanded` | `ExpandableSectionToggle` | Sets the `aria-expanded` attribute of the expandable section toggle, which notifies users of assistive technologies such as screen readers of the current state of the expandable section content. **Required** when the expandable section content is expanded, and should always have a boolean value. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-controls="[id of the expandable section content]"` | `.pf-v6-c-expandable-section__toggle` | Links the expandable section toggle and content for assistive technologies. **Required** when the expandable section content is rendered in the DOM. |
| `aria-expanded="[true or false]"` | `.pf-v6-c-expandable-section__toggle` | Indicates whether the expandable section is expanded (true) or collapsed (false) to assistive technologies. **Required**. |
| `hidden` | `.pf-v6-c-expandable-section__content` | Hides the expandable section content. **Required** when `aria-expanded="false"` is passed in, except for truncate expansion. |
| `aria-labelledby="[id of the expandable section toggle]"` | `.pf-v6-c-expandable-section__content` | Adds an accessible name to the expandable section content based on the toggle content. **Required**. |
| `role="region"` | `.pf-v6-c-expandable-section__content` | Adds the region role to the expandable section content. **Required**. |
| `aria-hidden="true"` | `.pf-v6-c-expandable-section__toggle-icon > i` | Removes the accordion toggle icon from the accessibility tree, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required**. |

## Further reading

To read more about accessibility with expandable sections, refer to the following resources:

- [ARIA Authoring Practices Guide - Disclosure (Show/Hide)](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)

