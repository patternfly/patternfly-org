---
id: Card
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **card**:

- Provide an accessible name for the card via the `aria-label` or `aria-labelledby` attribute.
- If a card contains other PatternFly components, ensure those components follow their own accessibility documentation.
- If there are multiple related cards in a group and there is no other surrounding context, place them inside of a container that has its own accessible name via the `aria-label` attribute.

## Testing

At a minimum, a card should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="card-a11y-checkbox-1" label={<span>The card has an accessible name via the <code class="ws-code">aria-label</code> or <code class="ws-code">aria-labelledby</code> attribute.</span>} description="This will differentiate each card when announced to users via assistive technologies when navigating through a page or a screen reader's rotor menu." />
  </ListItem>
  <ListItem>
    <Checkbox id="card-a11y-checkbox-2" label="Any PatternFly components within the card follow their own accessibility documentation." />
  </ListItem>
  <ListItem>
    <Checkbox id="card-a11y-checkbox-3" label={<span>If there's no surrounding context, a group of related cards are placed within a container that has its own accessible name via the <code class="ws-code">aria-label</code> attribute.</span>} description="An example of surrounding context would be a heading element that directly precedes the group of cards." />
  </ListItem>
</List>

## React customization

Various React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `component` | `Card` | Sets the base element for the sub-component (`article` element by default). |
| `hasSelectableInput` | `Card` | Adds a visually hidden input that notifies users navigating via assistive technologies that a card is selectable. This prop should only be passed in when only one card within a group should be selectable at a time, such as for a primary-detail view. <br/><br/> When this prop is passed in, either a `CardTitle` sub-component must exist in the card, or the `selectableInputAriaLabel` prop must be passed in. The hidden input will automatically be given an accessible name when a `CardTitle` exists within the card, otherwise the value given to the `selectableInputAriaLabel` prop should succinctly describe the card. |
| `isDisabledRaised` | `Card` | Adds styling to visually indicate that a card is disabled. When the `hasSelectableInput` prop is passed in, this prop will also set the selectable input's `disabled` attribute. |
| `isExpanded` | `Card` | Adds styling to determine whether the expandable contents is visually hidden or not. When this prop is passed in, `onExpand` and `toggleButtonsProps` must be passed into the `CardHeader` sub-component. |
| `isSelectable` or `isSelectableRaised` | `Card` | Adds styling on hover or focus to visually indicate that a card is selectable, and adds the `tabindex="0"` attribute so that the card can be navigated to with standard keyboard navigation. |
| `isSelected` | `Card` | Adds styling to visually indicate that a card is currently selected. When the `hasSelectableInput` prop is passed in, this prop will also set the selectable input's `checked` attribute. |
| `component` | `CardTitle` | Sets the base element for the sub-component (`div` element by default). When one of the six heading elements (`h1` to `h6`) is passed in, you must ensure no heading levels are skipped within the surrounding context of the page. |


A **card** is a square or rectangular container that can contain any kind of content. Cards symbolize units of information, and each one acts as an entry point for users to access more details. For example, in dashboards and catalog views, cards function as a preview of a detailed page. Cards may also be used in data displays like card views, or for positioning content on a page.

Basic cards will have native keyboard interaction with **Tab** navigating between interactive elements and **Shift + Tab** navigating backwards. Any elements inside a card will follow their usual accessibility expectations. 

<br/>
In general, the card component already has accessibility built in. However, variants that will need additional considerations are:
- **Expandable variant:** for expandable variants it’s important to add additional details for screen reader users to understand this interaction. 
Add:

  ```
    toggleButtonProps=({
      id: ‘toggleId’, 
      ‘aria-label’: ‘toggleLabel’, 
      ‘aria-labelledby’: ‘titleId toggleId’, 
      ‘aria-expanded’: this.state.isExpanded
    )}
  ```
  Note in this example that the `aria-labelledby` is a combination of the id on the `CardTitle` and the id on the toggle button. This will then combine the card title and the toggle button's label (this is the `aria-label` with text defining the toggle button, like "Details") and create something like "Header Details, collapsed, button" for the screen reader user. These are highly recommended for accessibility.
