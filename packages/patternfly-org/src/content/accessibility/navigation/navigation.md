---
id: Navigation
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';


## Accessibility

To implement an accessible PatternFly **navigation** component:
- Provide an accessible name for the navigation via the `aria-label` attribute
- For grouped or expandable nav, add a `title` to each section to distinguish them for users. If `title` is not used, an `aria-label` must be used on the `NavGroup` or `NavExpandable` component.



## Testing

At a minimum, a navigation component should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="navigation-a11y-checkbox-1" label={<span>The navigation has an accessible name via the <code className="ws-code">aria-label</code></span>} description="This will differentiate each navigation when announced to users of assistive technologies when navigating through a page or a screen reader's rotor menu." />
  </ListItem>
  <ListItem>
    <Checkbox id="navigation-a11y-checkbox-2" label="Standard keyboard navigation can be used to navigate between focusable elements within the navigation." description={<span><kbd>Tab</kbd> navigates to the next focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous focusable element. Expandable items can be opened with <kbd>Enter</kbd> or <kbd>Space</kbd>.  When the navigation is collapsed, you should not be able to navigate to any of the elements.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="navigation-a11y-checkbox-3" label={<span>For expandable or grouped navigation, an accessible name via the <code className="ws-code">title</code> or <code className="ws-code">aria-label</code> is used.</span>} description="This will differentiate each navigation when announced to users of assistive technologies when navigating through a page or a screen reader's rotor menu." />
  </ListItem>
</List>



## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the nav component]"` | `Nav` | 	Adds an accessible label for the nav when there are multiple navs on the page |
| `ariaLeftScroll="[text that labels the left scroll button]"` | `NavList` | Adds an aria-label for the left scroll button |
| `ariaRightScroll="[text that labels the right scroll button]"` | `NavList` | Adds an aria-label for the right scroll button |
| `id` | `NavGroup` | Used as an identifier to use when there is an `aria-labelledby` on a section element |
| `title="[text label for an expandable nav]"` | `NavGroup` | Adds a title shown for the group |
| `isActive` | `NavItem` |  Will add the `aria-current` attribute on a nav item when active |
| `isExpanded` | `NavExpandable` | Adds the `aria-expanded` attribute when is expanded and `hidden` attribute when collapsed |
| `title` | `NavExpandable` | Adds a title shown for the expandable list |
| `buttonProps={[an object containing button props]}` | `NavExpandable` | Adds any additional props added to the NavExpandable `<button>`|
| `srText="[text describing an expandable nav]"` | `NavExpandable` | If defined, screen readers will read this text instead of the list title |


### Expandable toggle props

When a navigation has expandable content, `buttonProps` must be passed into the `NavExpandable` sub-component with an object as its value. This object should usually be passed in with a structure similar to the following:

```noLive
  buttonProps=({
    id: ‘buttonId’, 
    ‘aria-label’: 'Toggle label', 
    ‘aria-labelledby’: 'titleId buttonId', 
    ‘aria-expanded’: this.state.isExpanded
  )}
  ```


## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason |
| -- | -- | -- |
| `aria-label="[text that labels the nav component]"` | `.pf-v6-c-nav` |  Describes `<nav>` landmark. |
| `aria-label="[text that labels a nav section]"` | `.pf-v6-c-nav__section` |  Describes a nav `<section>`, where a `.pf-v6-c-nav__section-title` is not present. |
| `aria-labelledby="[id of the element that labels the subnav]"` | `.pf-v6-c-nav__subnav` |  Gives the subnav `<section>` landmark an accessible name by referring to the element that provides the subnav `<section>` landmark title. The `aria-labelledby` attribute should be passed in with a value of the label's id attribute.|
| `aria-expanded="false"` | `.pf-v6-c-nav__link` |  Indicates that subnav section is hidden. |
| `aria-expanded="true"` | `.pf-v6-c-nav__link` |  Indicates that subnav section is visible. |
| `hidden` | `.pf-v6-c-nav__subnav` |  Indicates that the subnav section is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `disabled` | `.pf-v6-c-nav__scroll-button` | Indicates that a scroll button is disabled, when at the first or last item of a list. **Required when disabled** |
| `aria-current="page"` | `.pf-v6-c-nav__link` |  Indicates the current page link. Can only occur once on page. |
| `aria-haspopup="true"` | `.pf-v6-c-nav__link` | Declares that a nav item has a submenu. |


## Additional considerations

Consumers must ensure they take any additional considerations when customizing a navigation component, using it in a way not described or recommended by PatternFly, or in various other specific use-cases not outlined elsewhere on this page.


### Flyout Variation

The Flyout navigation will use slightly different keyboard interactions compared to other navigation variations. Users will need to open a flyout using `Space` or `right arrow`, and Flyout menu items use arrow keys to navigate between flyout menu items. Pressing `Escape` or `left arrow` should close a flyout. It's important to remember that while keyboard users will prefer to use arrow keys to open a flyout since it will match the visual representation, screen reader users will likely still rely on `Space` or `Enter` since they tend to rely on click events. Remember that every interactive element should only be associated with one action. For example, you should not have a link on a button that is also a flyout. The action of selecting should only be associated with either opening the menu or taking an action but not both.