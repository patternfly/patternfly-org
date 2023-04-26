---
id: Application launcher
section: components
subsection: menus
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **application launcher**:

- Give each application launcher a unique, descriptive label via `aria-label`, especially if there are multiple application launchers on the same page.

## Testing

At a minimum, an application launcher should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="applicationLauncher-a11y-checkbox-1" label={<span>An application launcher includes a unique and descriptive label via <code className="ws-code">aria-label</code>.</span>} description="If there are multiple application launchers on a page, this can help users differentiate each one from the rest." />
  </ListItem>
  <ListItem>
    <Checkbox id="applicationLauncher-a11y-checkbox-2" label="Standard keyboard navigation can be used to navigate between an application launcher or other focusable elements." description={<span><kbd>Tab</kbd> navigates to the next focusable element, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous focusable element.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="applicationLauncher-a11y-checkbox-3" label="Standard keyboard interaction can be used to interact with an application launcher." description={<span><kbd>Enter</kbd> and <kbd>Space</kbd> should both be able to toggle the application launcher open when focus is on the toggle, or select an item within the application launcher menu. Arrow keys should navigate between the items in the application launcher menu when opened. <kbd>Escape</kbd> should close the application launcher menu.</span>} />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-label="[unique text that labels the application launcher]"` | `ApplicationLauncher` | Adds an accessible name to the application launcher `<nav>` element and toggle. The value passed in is also used to provide an accessible name to the application launcher menu when open. |
| `toggleIcon={[custom icon]}` | `ApplicationLauncher` | Allows using a custom icon for the application launcher toggle. The icon provided must have the `aria-hidden="true"` attribute to hide it from assistive technologies, preventing possibly duplicate or unnecessary information from being announced without visually hiding the icon. |
| `ariaIsFavoriteLabel="[text that labels the item's current favorited status]"` | `ApplicationLauncherItem` | Adds an accessible name to the favorite button when the item is currently favorited. |
| `ariaIsNotFavoriteLabel="[text that labels the item's current favorited status]"` | `ApplicationLauncherItem` | Adds an accessible name to the favorite button when the item is not currently favorited. |
| `icon={[custom icon]}` | `ApplicationLauncherItem` | Renders an icon before the item text. The icon provided must have the `aria-hidden="true"` attribute to hide it from assistive technologies, preventing possibly duplicate or unnecessary information from being announced without visually hiding the icon. |
| `isExternal` | `ApplicationLauncherItem` | Renders an icon on the item when it receives focus or is hovered, as well as visually hidden text, to let users of certain assistive technologies know that the item will open in a new tab/window. **Required if the item opens a new tab/window**. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-label="[unique text that labels the application launcher]"` | `.pf-c-app-launcher` | Adds an accessible name to the application launcher `<nav>` element. |
| `aria-labelledby="[id of the element that labels the menu]"` | `.pf-c-app-launcher__menu` | Adds an accessible name to the application launcher menu. |
| `hidden` | `.pf-c-app-launcher__menu` | Visually hides the application launcher menu and prevents assistive technologies from navigating/interacting with it. **Required** when `aria-expanded="false"` is passed in. |
| `aria-disabled="true"` | `.pf-c-app-launcher__menu-item` | Disables the application launcher item, but keeps the item perceivable to users. Use this attribute instead of `disabled` when the item uses an `<a>` element, when you want users to still be aware of the item and that it is disabled, or when you expect or intend for the item to receive focus despite being disabled. For example, if the disabled item has a tooltip, you should pass this prop in to disable it. <br/><br/> When using this attribute, additional steps must be taken via JavaScript to prevent events from firing on the element. |
| `disabled` | `.pf-c-app-launcher__menu-item` | Disables the application launcher item when the item uses a `<button>` element, preventing it from being perceivable and operable by users navigating via assistive technologies. Use this attribute to disable an item if you don't expect or intend for the item to ever need to receive focus. For example, if the item will never have a tooltip, you should pass this prop in to disable it. |
| `tab-index="-1"` | `.pf-c-app-launcher__menu-item` | Prevents the application launcher item from receiving focus via keyboard. If the item uses an `<a>` element and you wish to completely disable the item, the `aria-disabled="true"` attribute must also be passed in. |
| `.pf-screen-reader` | `.pf-c-app-launcher__menu-item span` | Adds text that is accessible only to assistive technologies and is not visually rendered. This element should be added when an application launcher item is expected to open in a new tab/window, and the text content should convey that information. |
| `alt=""` | `.pf-c-app-launcher__menu-item-external-icon > *`, `.pf-c-app-launcher__menu-item.pf-m-action`, `.pf-c-app-launcher__menu-item-icon` | Removes the icon from the accessibility tree when the icon is an `<img>` element, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required**. |
| `aria-hidden="true"` | `.pf-c-app-launcher__menu-item-external-icon > *`, `.pf-c-app-launcher__menu-item.pf-m-action`, `.pf-c-app-launcher__menu-item-icon` | Removes the icon from the accessibility tree when the icon is not an `<img>` element, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required**. |
| `aria-expanded="[true or false]"` | `.pf-c-app-launcher__toggle` | Indicates whether the application toggle is expanded (true) or collapsed (false) to assistive technologies. **Required**. |
| `aria-label="[text that labels the application launcher toggle]"` | `.pf-c-app-launcher__toggle` | Adds an accessible name to the application launcher toggle. |
