---
id: Accordion
section: components
---

## Accessibile application

The following guidelines outline some of the ways that a PatternFly **accordion** should generally be operable, understandable, and perceivable in order to improve accessibility for users.

- Each accordion toggle should be a button that includes unique and descriptive labels so that users can more quickly scan through the accordion contents without having to expand individual panels. An accordion toggle should also include an icon to visually notify users if an accordion item is in an expanded or collapsed state.
- Users interacting via keyboard should be able to use standard keyboard navigation to navigate between accordion toggles or other focusable elements: <kbd>Tab</kbd> to navigate to the next accordion toggle or focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> to navigate to the previous accordion toggle or focusable element. 
- An accordion toggle should be able to be collapsed or expanded by pressing either <kbd>Space</kbd> or <kbd>Enter</kbd>.
- Users interacting via screen reader or similar assistive technologies with an announced output should be notified whether the accordion toggle is in an expanded or collapsed state when focus is first placed on it, and they should be informed when the state of the currently focused accordion toggle changes.
- When using headings for an accordion, never skip heading levels within the context of the rest of the page.

## React library considerations

PatternFly's React library has taken into account various considerations for the standard use of an accordion by ensuring certain accessibility functionality is built-in by default.

- The accordion toggle is a `button`, allowing for standard keyboard, mouse, or touch interaction and allowing it to be tabbed to.
- The icon for an accordion toggle has `aria-hidden="true"` to remove it from the accessibility tree since it is decorative content. This prevents assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. 

### Customizable props

The table below outlines the various React props that can be passed in or customized by the consumer, and which can affect accessibility. Each prop includes what component it should be applied to, the reason for using it or what it does, and whether it is ever required.

| Prop | Applied to | Reason | 
|---|---|---|
| aria-label | Accordion | Adds an accessible name to the accordion for screen readers. If there is no other surrounding context provided for an accordion, especially if there are multiple accordions on a page, this should be passed in with a descriptive label. |
| headingLevel | Accordion | When `asDefinitionList={false}` is passed in, sets the container for the accordion toggle to one of the six heading elements (`h3` by default). Be sure to not skip heading levels when passing this prop in. For example, if an accordion is within a section that has an `h2` heading, you should not pass `headingLevel="h4"`. |
| aria-label | AccordionContent | Adds an accessible name to the content of an accordion item. |
| isHidden | AccordionContent | Determines whether the content of the accordion item is hidden or not. Should be used along with the `isExpanded` prop on the accordion toggle. |
| isExpanded | AccordionToggle | Adds styling to visually determine whether the toggle is expanded or collapsed. Also sets the accessibility attribute `aria-expanded="true/false"`, which notifies screen readers whether the accordion toggle is expanded or collapsed. Should be used along with the `isHidden` prop on the accordion content. |

The `isHidden` and `isExpanded` props should always have opposite values of one another; if an accordion toggle is collpased (`isExpanded={false}`), then the accordion content should be hidden (`isHidden={true}`).

## HTML/CSS library considerations

When using PatternFly's HTML/CSS library consumers must take several considerations into account by following the table below, which outlines the various HTML attributes that can affect accessibility. Each attribute includes what element it should be applied to, the reason for using it or what it does, and whether it is ever required.

| Attribute | Applied to | Reason | 
|---|---|---|
| aria-expanded="false" | .pf-c-accordion__toggle | Indicates that the accordion toggle is collapsed to assistive technologies. **Required** |
| aria-expanded="true" | .pf-c-accordion__toggle | Indicates that the accordion toggle is expanded to assistive technologies. **Required** |
| hidden | .pf-c-accordion__expanded-content | Hides the accordion content. **Required** when `aria-expanded="false"` is passed in.
| aria-hidden="true" | .pf-c-accordion__toggle-icon | Removes the accordion toggle icon from the accessibility tree, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required** |

## Additional considerations

Consumers must ensure they take any additional considerations when customizing an accordion, using it in a way not described or recommended by PatternFly, or in various other specific use-cases not outlined elsewhere in this accessibility documentation.

- Avoid adding complex interaction to the accordion. This can often cause loops or traps that prevent users from efficiently navigating the content when using a keyboard.

## Further reading

To read more about accessibility with accordions, refer to the resources listed below.

- [ARIA Authoring Practices Guide - Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)