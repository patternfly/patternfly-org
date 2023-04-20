---
id: Calendar month
section: components
subsection: date-and-time
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **calendar month** component:

- Ensure the contents of the calendar month can be navigated to and interacted with via keyboard and other assistive technologies such as a screen reader
- Ensure the currently selected date cell has the `aria-current="date"` attribute
- Ensure the contents of the calendar month is announced to assistive technologies correctly. For example, the month dropdown should indicate the currently selected month, and the date cells should indicate the currently selected and focused cell.
- If the calendar month is displayed inline rather than within a popover, provide a visible title that labels the calendar month

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
  <ListItem>
    <Checkbox id="calendarMonth-a11y-checkbox-5" label="The calendar month has a visible title labeling it if it's displayed inline." />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `cellAriaLabel={[function that returns a string that labels the date]}` | `CalendarMonth` | Adds an accessible name to the date cell. <br/><br/> Note: unlike most of PatternFly's other "AriaLabel"/`aria-label` props, this prop expects a function that has a Date object as an argument and returns a string. Typically the string that is returned should be the full date, such as "14 February 2023". |
| `nextMonthAriaLabel="[text that labels the next month button]"` | `CalendarMonth` | Adds an accessible name to the "next month" button. |
| `prevMonthAriaLabel="[text that labels the previous month button]"` | `CalendarMonth` | Adds an accessible name to the "previous month" button. |
| `yearInputAriaLabel="[text that labels the year input]"` | `CalendarMonth` | Adds an accessible name to the year input. |

### Inline props

If the calendar month is intended to be displayed inline - rather than inside of a popover as seen in our [date picker](/components/date-picker) component - the `inlineProps` prop object should be passed in with the following:

- **component**: provides a wrapper for the calendar month. Typically this should be "article".
- **title**: renders a visible title above the calendar month. An `id` attribute should be passed into the title so that its value can be passed to the `ariaLabelledby` of the `inlineProps` object.
- **ariaLabelledby**: provides an accessible name for the calendar month. If a `title` is passed into the `inlineProps` object, the title's `id` should be passed into this prop.

For example:

```noLive
const inlineProps = {
  component: "article",
  title: (
    <Title id="example-title">Choose a date</Title>
  ),
  ariaLabelledby: "example-title
}
<CalendarMonth inlineProps={inlineProps} />
```

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-labelledby="[id of the element that labels the calendar month]"` | `article` | Adds an accessible name to a wrapper element when the calendar month is displayed inline. |
| `aria-current="date"` | `.pf-c-calendar-month__date` | Notifies users of assistive technologies when a date cell is currently selected. **Required** if a date cell is selected. |
| `aria-label="[text that labels the date]"` | `.pf-c-calendar-month__date` | Adds an accessible name to the date button. Typically the value passed in should be the full date. For example, `aria-label="14 February 2023"`. |
| `disabled` | `.pf-c-calendar-month__date` | Disables the date button, preventing interaction and navigation via keyboard and other assistive technologies. **Required** when this element's parent is `.pf-c-calendar-month__dates-cell.pf-m-disabled`. |
| `aria-hidden="true"` | `.pf-c-calendar-month__day > span` | Removes the span containing the visual day letter from the accessibility tree, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required**. <br/><br/> This attribute should not be applied to the same `span` that has the `aria-label` attribute. |
| `.pf-screen-reader` | `.pf-c-calendar-month__day > span` | Should be used to contain the full weekday name so that it is accessible only to assistive technologies and is not visually rendered. **Required**. <br/><br/> This attribute should not be applied to the same `span` that has the `aria-hidden` attribute. |
| `aria-label="[text that labels the previous and next month buttons]"` | `.pf-c-calendar-month__header-nav-control > button` | Adds an accessible name to the "previous month" and "next month" buttons. |
| `aria-hidden="true"` | `.pf-c-calendar-month__header-nav-control > button > [icon]` | Removes the button icon from the accessibility tree, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required**. |
