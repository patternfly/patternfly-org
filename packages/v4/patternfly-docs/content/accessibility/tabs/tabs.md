---
id: Tabs
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement accessible PatternFly **tabs**:

- Give each tab within a set of tabs a unique title.

## Testing

At a minimumm, tabs should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="tabs-a11y-checkbox-1" label="Each tab within a set of tabs has a unique title." />
  </ListItem>
  <ListItem>
    <Checkbox id="tabs-a11y-checkbox-2" label={<span>The active tab has the attribute <code class="ws-code">aria-selected</code> with a value of "true", while all other tabs within a set of tabs have a value of "false".</span>} description="This notifies users navigating via screen readers which tab is currently selected." />
  </ListItem>
  <ListItem>
    <Checkbox id="tabs-a11y-checkbox-3" label={<span>The tab content of any inactive tabs has the <code class="ws-code">hidden</code> attribute.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="tabs-a11y-checkbox-4" label="Standard keyboard navigation can be used to navigate between each tab within a set of tabs or other focusable elements." description={<span><kbd>Tab</kbd> navigates to the next tab or focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous tab or focusable element.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="tabs-a11y-checkbox-5" label={<span>Each tab can be selected via keyboard by pressing <kbd>Space</kbd> or <kbd>Enter</kbd>.</span>} description={<span>If a tab has the <code class="ws-code">href</code> attribute, then only <kbd>Enter</kbd> should activate the tab.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="tabs-a11y-checkbox-6" label={<span>When a set of tabs creates an overflow and one of the tabs has focus, pressing <kbd>Left Arrow</kbd> or <kbd>Right Arrow</kbd> scrolls the tablist container.</span>} />
  </ListItem>
</List>

## React customization

Various React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `title` | `Tab` | Sets the title of the tab. Each tab within a set of tabs should have a unique title. |
| `isDisabled` | `Tab` | Disables the tab and prevents it from being perceivable and operable by users navigating via assistive technologies. Use this prop to disable a tab if you don't expect or intend for the tab to ever receive need to receive focus. For example, if the tab will never have a tooltip, you should pass this prop in to disable it. |
| `isAriaDisabled` | `Tab` | Disables the tab, but keeps the tab perceivable to users. Use this prop instead of `isDisabled` when you want users to still be aware of the tab and that it is disabled, or when you expect or intend for the tab to receive focus despite being disabled. For example, if the disabled tab has a tooltip, you should pass this prop in to disable it. |
| `inoperableEvents` | `Tab` | Prevents events from firing when the `isAriaDisabled` prop is also passed in. Since the `aria-disabled` attribute doesn't change the behavior of an element, any events must be manually prevented. By default the value is `["onClick", "onKeyPress"]`. |
| `closeButtonAriaLabel` | `Tab` | Adds an accessible name to the close button of a closeable tab when the `onClose` prop is passed into the Tabs sub-component. The value passed in should indicate that the button will close a tab and which tab will be closed. For example, "Close users tab". |
| `aria-label` | `TabContent` | Adds an accessible name to the tab content when this sub-component is used outside the Tabs sub-component. The value passed in should generally indicate the title of the tab that the content is related to. For example, if a `TabContent` is related to a tab with a title of "Users", you could pass in "Content for users tab" as a value to this prop. |
| `addButtonAriaLabel` | `Tabs` | Adds an accessible name to the add button when the `onAdd` prop is also passed in. The value passed in should generally indicate that the button will add a tab to the tablist, and optionally which tablist the tab will be added to. When this prop is not passed in and an add button is rendered, the default `aria-label` on the button will be set to "Add tab". |
| `aria-label` | `Tabs` | Adds an accessible name to the entire set of tabs. Each set of tabs should have a unique accessible name on a page. The value passed in should generally indicate the primary purpose or content of the tablist. |
| `isExpanded` | `Tabs` | Adds styling to visually determine whether the toggle for a tablist is expanded or collapsed when the `isVertical` prop is also passed in. Also sets the accessibility attribute `aria-expanded` with a value of "true" or "false", which notifies screen readers whether the toggle is expanded ("true") or collapsed ("false"). |
| `leftScrollAriaLabel` | `Tabs` | Adds an accessible name to the left scroll button when an overflow of tabs occurs. The value passed in should indicate that the button will scroll the tablist left. The default value is "Scroll left". |
| `rightScrollAriaLabel` | `Tabs` | Adds an accessible name to the right scroll button when an overflow of tabs occurs. The value passed in should indicate that the button will scroll the tablist right. The default value is "Scroll right". |
| `toggleAriaLabel` | `Tabs` | Adds an accessible name to the expandable toggle when the `isVertical` prop is also passed in. If the `toggleText` prop is not passed in, this prop must be passed in. |
| `toggleText` | `Tabs` | Sets the visible text label for the expandable toggle when the `isVertical` prop is also passed in. |

### Tab icons

When adding an icon to a tab's `title` prop, you should ensure the icon has the `aria-hidden="true"` attribute if there is accompanying title text so that the icon will be removed from the accessibility tree. This will prevent assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it.

## HTML/CSS customization

Various HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|


## Additional considerations

Consumers must ensure they take any additional considerations when customizing tabs, using them in a way not described or recommended by PatternFly, or in various other specific use-cases not outlined elsewhere on this page.

- If a tab's title consists of only an icon without any accompanying title text, the tab sub-component should have an `aria-label` to provide an accessible name and the `tooltip` prop passed in to provide visual context. Without both of these props, users will have no context as to which tab they are currently focused on or what the tab name is. 

## Further reading

To read more about accessibility with tabs, refer to the following resources:

- [ARIA Authoring Practices Guide - Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/)

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
