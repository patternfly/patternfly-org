---
id: Calendar month
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **calendar month** component:

- Ensure the contents of the calendar month can be navigated to and interacted with via keyboard and other assistive technologies such as a screen reader
- Ensure the currently selected date cell has the `aria-current="date"` attribute
- Ensure the contents of the calendar month is announced to assistive technologies correctly. For example, the month dropdown should indicate the currently selected month, and the date cells should indicate the currently selected and focused cell.

## Testing

At a minimum, a calendar month should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="calendarMonth-a11y-checkbox-1" label="Standard keyboard navigation can be used to navigate between the contents of a calendar month or other focusable elements." description={<span><kbd>Tab</kbd> navigates to the next calendar month content or focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous calendar month content or focusable element.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="calendarMonth-a11y-checkbox-2" label="Standard keyboard interaction can be used to interact with the calendar month header content." description={<span><kbd>Enter</kbd> and <kbd>Space</kbd> should be able to activate the "previous month" and "next month" buttons, open the month dropdown, and select a month dropdown item. <kbd>Escape</kbd> and <kbd>Tab</kbd> should close the month dropdown if it is open.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="calendarMonth-a11y-checkbox-3" label="Standard keyboard interaction can be used to interact with the calendar month date cells." description={<span>Arrow keys should navigate between each individual date cell. <kbd>Enter</kbd> and <kbd>Space</kbd> should select a date cell.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="calendarMonth-a11y-checkbox-4" label={<span>The currently selected date cell has the <code className="ws-code">aria-current="date"</code> attribute.</span>} />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `cellAriaLabel` | `CalendarMonth` | Adds an accessible name to the date cell. <br/><br/> Note: unlike most of PatternFly's other "AriaLabel"/`aria-label` props, this prop expects a function that has a Date object as an argument and returns a string. Typically the string that is returned should be the full date, such as "14 February 2023". |
| `nextMonthAriaLabel` | `CalendarMonth` | Adds an accessible name to the "next month" button. |
| `prevMonthAriaLabel` | `CalendarMonth` | Adds an accessible name to the "previous month" button. |
| `prevMonthAriaLabel` | `CalendarMonth` | Adds an accessible name to the year input. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-current="date"` | `.pf-c-calendar-month__date` | Notifies users of assistive technologies when a date cell is currently selected. **Required** if a date cell is selected. |
| `aria-label="[text describing the date]"` | `.pf-c-calendar-month__date` | Adds an accessible name to the date button. Typically the value passed in should be the full date. For example, `aria-label="14 February 2023"`. |
| `disabled` | `.pf-c-calendar-month__date` | Disables the date button, preventing interaction and navigation via keyboard and other assistive technologies. **Required** when this element's parent is `.pf-c-calendar-month__dates-cell.pf-m-disabled`. |
| `aria-hidden="true"` | `.pf-c-calendar-month__day > span` | Removes the span containing the visual day letter from the accessibility tree, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required**. <br/><br/> This attribute should not be applied to the same `span` that has the `aria-label` attribute. |
| `.pf-screen-reader` | `.pf-c-calendar-month__day > span` | Should be used to contain the full weekday name so that it is accessible only to assistive technologies and is not visually rendered. **Required**. <br/><br/> This attribute should not be applied to the same `span` that has the `aria-hidden` attribute. |
| `aria-label="[Prev/Next] month"` | `.pf-c-calendar-month__header-nav-control > button` | Adds an accessible name to the "previous month" and "next month" buttons. |
| `aria-hidden="true"` | `.pf-c-calendar-month__header-nav-control > button > [icon]` | Removes the button icon from the accessibility tree, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required**. |
