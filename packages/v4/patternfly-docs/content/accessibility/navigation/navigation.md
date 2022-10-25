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
    <Checkbox id="navigation-a11y-checkbox-1" label={<span>The navigation has an accessible name via the <code class="ws-code">aria-label</code></span>} description="This will differentiate each navigation when announced to users of assistive technologies when navigating through a page or a screen reader's rotor menu." />
  </ListItem>
  <ListItem>
    <Checkbox id="navigation-a11y-checkbox-2" label="Standard keyboard navigation can be used to navigate between focusable elements within the navigation." description={<span><kbd>Tab</kbd> navigates to the next focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous focusable element. Expandable items can be opened with <kbd>Enter</kbd> or <kbd>Space</kbd>. Flyout menu items use arrow keys to navigate between flyout items, and press <kbd>Escape</kbd> or left arrow to close a flyout. When the navigation is collapsed, you should not be able to navigate to any of the elements.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="navigation-a11y-checkbox-3" label={<span>For expandable or grouped navigation, an accessible name via the <code class="ws-code">title</code> or <code class="ws-code">aria-label</code> is used.</span>} description="This will differentiate each navigation when announced to users of assistive technologies when navigating through a page or a screen reader's rotor menu." />
  </ListItem>
</List>



## React customization

Various React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-label` | `Nav` | 	Accessible label for the nav when there are multiple navs on the page |
| `ariaLeftScroll` | `NavList` | Aria-label for the left scroll button |
| `ariaRightScroll` | `NavList` | Aria-label for the right scroll button |
| `title` | `NavExpandable` | Title shown for the expandable list |
| `buttonProps` | `NavExpandable` | Additional props added to the NavExpandable `<button>`|
| `srText` | `NavExpandable` | If defined, screen readers will read this text instead of the list title |


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

| Attribute | Applied to | Outcome |
| -- | -- | -- |
| `aria-label="[landmark description]"` | `.pf-c-nav` |  Describes `<nav>` landmark. |
| `aria-label="[section title]"` | `.pf-c-nav__section` |  Describes a nav `<section>`, where a `.pf-c-nav__section-title` is not present. |
| `aria-labelledby="[id value of link describing subnav]"` | `.pf-c-nav__subnav` |  Gives the subnav `<section>` landmark an accessible name by referring to the element that provides the subnav `<section>` landmark title. |
| `aria-expanded="false"` | `.pf-c-nav__link` |  Indicates that subnav section is hidden. |
| `aria-expanded="true"` | `.pf-c-nav__link` |  Indicates that subnav section is visible. |
| `hidden` | `.pf-c-nav__subnav` |  Indicates that the subnav section is hidden so that it isn't visible in the UI and isn't accessed by assistive technologies. |
| `disabled` | `.pf-c-nav__scroll-button` | Indicates that a scroll button is disabled, when at the first or last item of a list. **Required when disabled** |
| `aria-current="page"` | `.pf-c-nav__link` |  Indicates the current page link. Can only occur once on page. |
| `aria-haspopup="true"` | `.pf-c-nav__link` | Declares that a nav item has a submenu. |


