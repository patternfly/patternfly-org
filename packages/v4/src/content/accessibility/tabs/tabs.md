---
id: Tabs
section: components
---

**Tabs** allow users to navigate between views within the same page or context.

**Keyboard users** should be able to use standard keyboard user navigation (**Tab** and **Shift + Tab**) to move to and between tabs.
Keyboard users should also be able to select a tab using **Enter** and **Space**. Disabled tabs cannot receive
browser focus by default. Whenever a disabled tab needs to be able to receive browser focus, such as in the case of
disabled tabs with a tooltip, use the `isAriaDisabled` prop instead of `isDisabled`.

**Screen reader users** should be made aware that the tabs are interactable screen reader cursor focus, and which 
tab is currently active using `aria-selected="true"` on the active tab, and `aria-selected="false"` 
on the non-active tabs. Additionally, all buttons and controls used to maneuver the tabs (i.e. the left and right
scroll buttons and the expandable tab toggle) should be labelled.

The following props/attributes have been added for you or are customizable in PatternFly:

| React component | React prop           | Which HTML element it appears on in markup | Explanation                                                                                                                                                                                                                                        | 
|-----------------|----------------------|--------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tabs            | aria-label           | .pf-c-tabs                                 | Provides an accessible label for the tabs. Labels should be unique for each set of tabs that are present on a page. When component is set to nav, this prop should be defined to differentiate the tabs from other navigation regions on the page. |
| Tabs            | leftScrollAriaLabel  | .pf-c-tabs__scroll-button:nth-of-type(1)   | Aria-label for the left scroll button                                                                                                                                                                                                              |
| Tabs            | rightScrollAriaLabel | .pf-c-tabs__scroll-button:nth-of-type(2)   | Aria-label for the right scroll button                                                                                                                                                                                                             |
| Tabs            | toggleAriaLabel      | .pf-c-tabs__toggle-button > button         | Aria-label for the expandable toggle                                                                                                                                                                                                               |
| Tab             | isAriaDisabled       | .pf-c-tabs__link > button                  | Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute. Using this property to make a tab appear disable will allow the tab to receive browser focus to trigger a tooltip.                      |
| TabContent      | aria-label           | .pf-c-tabs                                 | Title of controlling Tab if used outside Tabs component                                                                                                                                                                                            |
