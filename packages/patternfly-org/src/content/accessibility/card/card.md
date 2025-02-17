---
id: Card
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';
import { Link } from '@patternfly/documentation-framework/components/link/link';

## Accessibility

To implement an accessible PatternFly **card**:

- Provide an accessible name for the card via the `aria-label` attribute, or by linking to a card title via the `aria-labelledby` attribute.
- Ensure any other PatternFly components within a card follow their own accessibility documentation.
- Place cards inside of a list element whenever displaying a set of multiple cards, with a list item wrapped around each card. This list element must also have its own accessible name via the `aria-label` attribute if there is no other surrounding context.

## Testing

At a minimum, a card should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="card-a11y-checkbox-1" label={<span>The card has an accessible name via the <code className="ws-code">aria-label</code> or <code className="ws-code">aria-labelledby</code> attribute.</span>} description="This will differentiate each card when announced to users of assistive technologies when navigating through a page or a screen reader's rotor menu." />
  </ListItem>
  <ListItem>
    <Checkbox id="card-a11y-checkbox-2" label="Standard keyboard navigation can be used to navigate between focusable elements within a card." description={<span><kbd>Tab</kbd> navigates to the next focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous focusable element.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="card-a11y-checkbox-3" label="Any PatternFly components within the card follow their own accessibility documentation." />
  </ListItem>
  <ListItem>
    <Checkbox id="card-a11y-checkbox-4" label="A set of multiple cards are placed within a list container, with a list item wrapped around each card." description="This can be either an ordered or unordered list. This will allow users to use shortcuts via their assistive technology and will let them know how many cards exist." />
  </ListItem>
  <ListItem>
    <Checkbox id="card-a11y-checkbox-5" label={<span>If there's no surrounding context, a card list container has its own accessible name via the <code className="ws-code">aria-label</code> attribute.</span>} description="An example of surrounding context would be a heading element that directly precedes the group of cards." />
  </ListItem>
  <ListItem>
    <Checkbox id="card-a11y-checkbox-6" label={<span>If building a single-selectable card for a <Link href="/patterns/primary-detail">primary detail view</Link>, the card has an associated hidden checkbox input.</span>} description={<span>This notifies users navigating via screen readers and similar assistive technologies that a checkbox can be selected and of its current selected status. See the <Link href="/components/card#selectable-card-accessibility-features">React selectable card accessibility features example</Link> or <Link href="/components/card/html#selectable-with-a-hidden-input-for-improved-screen-reader-accessibility">HTML selectable with hidden input example</Link> for implementation information.</span>} />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason |
|---|---|---|
| `aria-label="[text that labels the card]"` or `aria-labelledby="[id of the element that labels the card]"` | `Card` | Adds an accessible name to the card. If the card has a `CardTitle`, the `aria-labelledby` prop should be passed in with a value of the `CardTitle`'s `id` prop. Otherwise the `aria-label` prop should be passed in to act as a title for the card. |
| `component="[element tag]"` | `Card` | Sets the base element for the sub-component (`div` element by default). <br/><br/> When using `div` as the component, the `aria-label` and `aria-labelledby` props should be omitted as these props are not well supported on `div` elements without a `role`. |
| `hasSelectableInput` | `Card` | Adds a visually hidden input that notifies users navigating via assistive technologies that a card is selectable. This prop should only be passed in when only one card within a set of cards should be selectable at a time, such as for a [primary-detail view](/patterns/primary-detail). <br/><br/> When this prop is passed in, either a `CardTitle` sub-component must exist in the card, or the `selectableInputAriaLabel` prop must be passed in. The hidden input will automatically be given an accessible name when a `CardTitle` exists within the card, otherwise the value given to the `selectableInputAriaLabel` prop will add an accessible name to the input. |
| `isDisabledRaised` | `Card` | Adds styling to visually indicate that a selectable card is disabled. When the `hasSelectableInput` prop is passed in, this prop will also set the selectable input's `disabled` attribute. |
| `isExpanded` | `Card` | Adds styling to a card toggle to visually indicate whether the expandable content is expanded or collapsed. When this prop is passed in, `onExpand` and `toggleButtonsProps` must be passed into the `CardHeader` sub-component. |
| `isSelectable` or `isSelectableRaised` | `Card` | Adds styling on hover or focus to visually indicate that a card is selectable, and adds the `tabindex="0"` attribute so that the card can be navigated to with standard keyboard navigation. |
| `isSelected` | `Card` | Adds styling to visually indicate that a card is currently selected. When the `hasSelectableInput` prop is passed in, this prop will also set the selectable input's `checked` attribute. |
| `selectableInputAriaLabel="[text that labels the hidden selectable input]"` | `Card` | Adds an accessible name to the hidden input when `hasSelectableInput` is passed in and there is no `CardTitle` sub-component within the card. The value passed into this prop should act as a title for the card. |
| `onExpand={[a callback function]}` | `CardHeader` | Adds a toggle button with a caret icon to control whether a card is expanded or collapsed, and to visually indicate the card is expandable. <br/><br/> If an expandable card does not include a `CardTitle`, there should be some other visual context in the `CardHeader` to convey the content of the card to users that rely on sight, such as an image. |
| `toggleButtonProps={[an object containing button props]}` | `CardHeader` | Sets props on the card's toggle. **Required** when a card is expandable. For more information about this prop, see the [expandable toggle props](/components/card/accessibility#expandable-toggle-props) section. |
| `component="[element tag]"` | `CardTitle` | Sets the base element for the sub-component (`div` element by default). When one of the six heading elements (`h1` to `h6`) is passed in, you must ensure no heading levels are skipped within the surrounding context of the page. |

### Expandable toggle props

When a card has expandable content, `toggleButtonProps` must be passed into the `CardHeader` sub-component with an object as its value. This object should usually be passed in with a structure similar to the following:

```noLive
  toggleButtonProps=({
    id: ‘toggleId’, 
    ‘aria-label’: 'Toggle label', 
    ‘aria-labelledby’: 'titleId toggleId', 
    ‘aria-expanded’: this.state.isExpanded
  )}
```

The `aria-label` property gives the toggle an accessible name for assistive technologies to announce to users, e.g. "Toggle label, button".

The `aria-labelledby` should include the `id` of a `CardTitle` sub-component if one exists or the `id` of the card itself, as well as the `id` of the toggle. This will combine the accessible name of both the `CardTitle` or `Card` and toggle, e.g. "Card title Toggle label, button". The order in which the ID's are passed in will determine this combined accessible name.

The `aria-expanded` property must be set as the card's current expanded state. This will allow assistive technologies to announce to users whether the card is expanded or collapsed, e.g. "Toggle label Card title, collapsed, button".

The `aria-label` and `id` attributes can be omitted from the `toggleButtonProps`, with the `aria-labelledby` attribute being given a value of only "titleId".

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason |
|---|---|---|
| `aria-label="[text that labels the card]"` or `aria-labelledby="[id of the element that labels the card]"` | `.pf-v6-c-card` | Adds an accessible name to the card. If the card has a `.pf-v6-c-card__title`, the `aria-labelledby` attribute should be passed in with a value of the card title's `id` attribute. Otherwise the `aria-label` attribute should be passed in to act as a title for the card. |
| `tabindex="0"` | `.pf-v6-c-card.pf-m-selectable-raised` or `.pf-v6-c-card.pf-m-selectable` | Inserts the card into the tab order of the page so that it can be navigated to with standard keyboard navigation. **Required** when a card is selectable. |
| `aria-label="[text that labels the hidden selectable input]"` or `aria-labelledby="[id of the element that labels the hidden selectable input]"` | `.pf-v6-c-card__sr-input.pf-screen-reader` | Adds an accessible name to the hidden input that is used to improve accessibility for selectable cards. If the card has a `.pf-v6-c-card__title`, the `aria-labelledby` attribute should be passed in with a value of the card title's `id` attribute. Otherwise the `aria-label` attribute should be passed in to act as a title for the card. |
| `disabled` | `.pf-v6-c-card__sr-input.pf-screen-reader` | Indicates a selectable card is disabled when the hidden input is used to improve accessibility for selectable cards. **Required** when a selectable card has the hidden input rendered and has the `.pf-m-non-selectable-raised` class. |
| `aria-expanded="[true or false]"` | `.pf-v6-c-card__header-toggle .pf-v6-c-button.pf-m-plain` | Indicates whether the card toggle is expanded (true) or collapsed (false) to assistive technologies. **Required**. |
| `aria-hidden="true"` | `.pf-v6-c-card__header-toggle-icon` | Removes the card toggle icon from the accessibility tree, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required**. |
| `aria-label="[text that labels the toggle]"` or `aria-labelledby="[id of the element that labels the toggle]"` | `.pf-v6-c-card__header-toggle-icon` | Adds an accessible name to the card toggle. For information about setting these attributes on the toggle, see [expandable toggle props](/components/card/accessibility#expandable-toggle-props) in the React customization section. |

## Additional considerations

Consumers must ensure they take any additional considerations when customizing a card, using it in a way not described or recommended by PatternFly, or in various other specific use-cases not outlined elsewhere on this page.

### Excessive functionality or complexity

You should generally ensure a card does not have an excessive amount of functionality or complexity within it, as this can make it more difficult for users to operate or navigate items within the card.

### Altering elements of wrappers

For both the React and HTML/CSS library, several sub-components have a default element that is used as a wrapper. For example, the `Card`/`.pf-v6-c-card` sub-component uses the `article` element as its default wrapper.

While this wrapper element can be customized in both libraries, you must ensure doing so does not create invalid markup nor makes the card as a whole less accessible.