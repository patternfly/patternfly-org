---
id: Calendar month
section: components
---

A **calendar month** is a box area or text that communicates and triggers user actions when clicked or selected. Calendar months are interactive elements.

**Keyboard users** should be able to focus on parts of the calendar month using **Tab** to move forward and **Tab + Shift** to move backward through interactive elements. They should be able to select a focused component, such as a month on the date selection menu, using **Space** or **Enter**. They should also be able to use **Arrow Keys** to navigate through the calendar to select a date.

**Screen reader users** should be able to navigate to the calendar month and it should be able to be described by a screen reader. Since a calendar month is interactive, screen readers must announce the different interactive elements of the component. For example, in the dropdown menus to select a month, screen readers must announce the month that the user is on, and within the calendar screen readers must announce the date the user is on.

The following props/attributes have been added for you or are customizable in PatternFly:

| React prop | React component it should be applied to | Which HTML element it appears on in markup | Reason used |
| -- | -- | -- | -- |
| cellAriaLabel | CalendarMonth, CalendarFormat | `.pf-c-calendar-month__date` | Aria-label for the date cells. Unlike most of our AriaLabel props, cellAriaLabel expects a function which takes a Date object as a parameter and returns a string. |
| nextMonthAriaLabel | CalendarMonth, CalendarFormat | `.pf-c-calendar-month__header-nav-control` | Aria-label for the next month button |
| prevMonthAriaLabel | CalendarMonth, CalendarFormat | `.pf-c-calendar-month__header-nav-control` | Aria-label for the previous month button |
| yearInputAriaLabel | CalendarMonth, CalendarFormat | | Aria-label for the year input |




