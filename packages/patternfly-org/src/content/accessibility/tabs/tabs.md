---
id: Tabs
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement accessible PatternFly **tabs**:

- Ensure each tab within a set of tabs contains unique text.

## Testing

At a minimum, tabs should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="tabs-a11y-checkbox-1" label="Each tab within a set of tabs contains unique text." />
  </ListItem>
  <ListItem>
    <Checkbox id="tabs-a11y-checkbox-2" label={<span>The active tab has the attribute <code className="ws-code">aria-selected</code> with a value of "true", while all other tabs within a set of tabs have a value of "false".</span>} description="This notifies users navigating via screen readers which tab is currently selected and when a new tab has been selected." />
  </ListItem>
  <ListItem>
    <Checkbox id="tabs-a11y-checkbox-3" label={<span>The tab content of any inactive tabs has the <code className="ws-code">hidden</code> attribute.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="tabs-a11y-checkbox-4" label="Standard keyboard navigation can be used to navigate between each tab within a set of tabs or other focusable elements." description={<span><kbd>Tab</kbd> navigates to the next tab or focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous tab or focusable element.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="tabs-a11y-checkbox-5" label={<span>Each tab can be selected via keyboard by pressing <kbd>Space</kbd> or <kbd>Enter</kbd>.</span>} description={<span>If a tab has the <code className="ws-code">href</code> attribute, then only <kbd>Enter</kbd> should activate the tab.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="tabs-a11y-checkbox-6" label={<span>When a set of tabs creates an overflow and one of the tabs has focus, pressing <kbd>Left Arrow</kbd> or <kbd>Right Arrow</kbd> scrolls the tablist.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="tabs-a11y-checkbox-7" label={<span>If there are multiple sets of tabs on a page, each set of tabs has a unique <code className="ws-code">aria-label</code>.</span>} description="This provides better context to users navigating via landmarks with a screen reader, as it will differentiate each set of tabs." />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `title="[label for the tab]"` | `Tab` | Sets the text label of the tab. Each tab within a set of tabs should have unique text passed into its `title` prop. |
| `isDisabled` | `Tab` | Disables the tab and prevents it from being perceivable and operable by users navigating via assistive technologies. Use this prop to disable a tab if you don't expect or intend for the tab to ever need to receive focus. For example, if the tab will never have a tooltip, you should pass this prop in to disable it. |
| `isAriaDisabled` | `Tab` | Disables the tab, but keeps the tab perceivable to users. Use this prop instead of `isDisabled` when you want users to still be aware of the tab and that it is disabled, or when you expect or intend for the tab to receive focus despite being disabled. For example, if the disabled tab has a tooltip, you should pass this prop in to disable it. |
| `inoperableEvents={[array of events to prevent]}` | `Tab` | Prevents events from firing when the `isAriaDisabled` prop is also passed in. Since the `aria-disabled` attribute doesn't change the behavior of an element, any events must be manually prevented. By default the value is `["onClick", "onKeyPress"]`. |
| `closeButtonAriaLabel="[text that labels an individual tab close button]"` | `Tab` | Adds an accessible name to the close button of a closeable tab when the `onClose` prop is passed into the Tabs sub-component. The value passed in should indicate that the button will close a tab and which tab will be closed. For example, "Close users tab". |
| `aria-label="[text that labels the tab content]"` | `TabContent` | Adds an accessible name to the tab content when this sub-component is used outside the Tabs sub-component. The value passed in should generally indicate the title of the tab that the content is related to. For example, if a `TabContent` is related to a tab with a title of "Users", you could pass in "Content for users tab" as a value to this prop. |
| `addButtonAriaLabel="[text that labels the tabs add button]"` | `Tabs` | Adds an accessible name to the add button when the `onAdd` prop is also passed in. The value passed in should generally indicate that the button will add a tab to the tablist, and optionally which tablist the tab will be added to. When this prop is not passed in and an add button is rendered, the default `aria-label` on the button will be set to "Add tab". |
| `aria-label="[text that labels the tabs component]"` | `Tabs` | Adds an accessible name to the entire set of tabs. Each set of tabs should have a unique accessible name on a page. The value passed in should generally indicate the primary purpose or content of the tablist. |
| `isExpanded` | `Tabs` | Adds styling to visually determine whether the toggle for a tablist is expanded or collapsed when the `isVertical` prop is also passed in. Also sets the accessibility attribute `aria-expanded` with a value of "true" or "false", which notifies screen readers whether the toggle is expanded ("true") or collapsed ("false"). |
| `leftScrollAriaLabel="[text that labels the left scroll button]"` | `Tabs` | Adds an accessible name to the left scroll button when an overflow of tabs occurs. The value passed in should indicate that the button will scroll the tablist left. The default value is "Scroll left". |
| `rightScrollAriaLabel="[text that labels the right scroll button]"` | `Tabs` | Adds an accessible name to the right scroll button when an overflow of tabs occurs. The value passed in should indicate that the button will scroll the tablist right. The default value is "Scroll right". |
| `toggleAriaLabel="[text that labels the toggle]"` | `Tabs` | Adds an accessible name to the expandable toggle when the `isVertical` prop is also passed in. If the `toggleText` prop is not passed in, this prop must be passed in. |
| `toggleText="[label for a vertical tabs toggle]"` | `Tabs` | Sets the visible text label for the expandable toggle when the `isVertical` prop is also passed in. |

### Tab icons

When adding an icon to a tab's `title` prop, you should ensure the icon has the `aria-hidden="true"` attribute if there is accompanying title text so that the icon will be removed from the accessibility tree. This will prevent assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it.

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the tabs component]"` | `.pf-v6-c-tabs` | Adds an accessible name to the entire set of tabs. Each set of tabs should have a unique accessible name on a page. The value passed in should generally indicate the primary purpose or content of the tablist. | 
| `aria-label="[text that labels the tabs add button]"` | `.pf-v6-c-tabs__add .pf-v6-c-button.pf-m-plain` | Adds an accessible name to the add button of the tabs component when a tab can by dynamically added. The value passed in should generally indicate that the button will add a tab to the tablist, and optionally which tablist the tab will be added to. |
| `aria-label="[text that labels an individual tab close button]"` | `.pf-v6-c-tabs__item-close .pf-v6-c-button.pf-m-plain` | Adds an accessible name to the close button of a closeable tab. The value passed in should indicate that the button will close a tab and which tab will be closed. For example, "Close users tab". |
| `aria-controls="[id of the tab content controlled by the tab]"` | `.pf-v6-c-tabs__link` | Indicates which tab content panel is controlled by the tab by passing in the ID of the tab content panel as a value. **Required**. |
| `aria-disabled="true"` | `.pf-v6-c-tabs__link.pf-m-aria-disabled` | Disables the tab, but keeps the tab perceivable to users. Use this attribute instead of `disabled` when you want users to still be aware of the tab and that it is disabled, or when you expect or intend for the tab to receive focus despite being disabled. For example, if the disabled tab has a tooltip, you should pass this prop in to disable it. <br/><br/> When using this attribute, additional steps must be taken via JavaScript to prevent events from firing on the element. |
| `aria-selected="false"` | `.pf-v6-c-tabs__link` | Indicates to assistive technologies that a tab is not selected. **Required** on all tab components that are not currently selected. |
| `aria-selected="true"` | `.pf-v6-c-tabs__link` | Indicates to assistive technologies that a tab is selected. **Required** when a tab is currently selected. |
| `disabled` | `.pf-v6-c-tabs__link` | Disables the tab and prevents it from being perceivable and operable by users navigating via assistive technologies. Use this attribute to disable a tab if you don't expect or intend for the tab to ever need to receive focus. For example, if the tab will never have a tooltip, you should pass this prop in to disable it. |
| `role="tab"` | `.pf-v6-c-tabs__link` | Adds a tab role to the component. **Required**. |
| `role="tabslist"` | `.pf-v6-c-tabs__list` | Adds a tablist role to the component. **Required**. |
| `aria-hidden="true"` | `.pf-v6-c-tabs__scroll-button` | Removes the scroll button from the accessibility tree to prevent assistive technologies from being able to place focus on it. This is only added because the tabs list will automatically scroll as focus is placed on each tab. |
| `disabled` | `.pf-v6-c-tabs__scroll-button` | Adds styling to indicate that a scroll button is disabled. **Required** on the applicable scroll button when the tabs list is scrolled all the way to the first or last tab. |
| `aria-expanded="[true or false]"` | `.pf-v6-c-tabs__toggle-button .pf-v6-c-button.pf-m-plain` | Indicates whether an expandable, vertical tabs toggle is expanded (true) or collapsed (false) to assistive technologies. **Required**. |
| `aria-label="[text that labels the toggle]"` | `.pf-v6-c-tabs__toggle-button .pf-v6-c-button.pf-m-plain` | Adds an accessible name to the expandable tabs toggle. |
| `aria-hidden="true"` | `.pf-v6-c-tabs__toggle-icon i` | Removes the toggle icon from the accessibility tree, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required**. |
| `aria-label="[text that labels the tab content]"` | `.pf-v6-c-tab-content` | Adds an accessible name to the tab content panel. The value passed in should generally indicate the title of the tab that the content is related to. For example, if a tab content panel is related to a tab with a title of "Users", you could pass in "Content for users tab" as a value to this attribute. Either this or the `aria-labelledby` attribute can be used, but do not use both. |
| `aria-labelledby="[id of the element that labels the tab content]"` | `.pf-v6-c-tab-content` | Adds an accessible name to the tab content panel. The value passed in should be the ID of the related tab component. Either this or the `aria-labelledby` attribute can be used, but do not use both. |
| `role="tabpanel"` | `.pf-v6-c-tab-content` | Adds a tabpanel role to the component. **Required**. |
| `tabindex="0"` | `.pf-v6-c-tab-content` | Allows users navigating via keyboard to place focus on the tab content panel. **Required**. |

## Additional considerations

Consumers must ensure they take any additional considerations when customizing tabs, using them in a way not described or recommended by PatternFly, or in various other specific use-cases not outlined elsewhere on this page.

- If a tab's title consists of only an icon without any accompanying title text, the tab sub-component should have the `tooltip` prop passed in to provide visual context and an accessible name. For information regarding accessibility with a tooltip, read the [tooltip accessibility](/components/tooltip/accessibility) documentation.

## Further reading

To read more about accessibility with tabs, refer to the following resources:

- [ARIA Authoring Practices Guide - Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/)
