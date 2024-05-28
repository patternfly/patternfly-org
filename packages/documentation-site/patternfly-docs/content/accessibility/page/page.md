---
id: Page
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **page**:

- Provide a [skip to content](/components/skip-to-content) if more than one page shares the same heading or sidebar content.
- Give each `nav` element a unique `aria-label` if there is more than one `nav` element on the page.
- Ensure there is only 1 `main` element on the page.
- Follow any accessibility documentation for other components used within a page, such as a [breadcrumb](/components/breadcrumb), [notification drawer](/components/notification-drawer), or [navigation](/components/navigation).

## Testing

At a minimum, a page should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="page-a11y-checkbox-1" label="If more than one page has the same header and/or sidebar content, a skip to content is passed to the page." description="This allows users to skip repetitive content, as otherwise they would have to navigate through each heading and sidebar item on every page." />
  </ListItem>
  <ListItem>
    <Checkbox id="page-a11y-checkbox-2" label={<span>If there are multiple nav elements on a page - such as a side navigation, header navigation, and/or breadcrumb navigation - each is given a unique <code className="ws-code">aria-label</code>.</span>} description='This will differentiate the various navigations on a page to a user who is navigating via a rotor menu. You should also consider providing an <code className="ws-code">aria-label</code> if the sole navigation is not the primary navigation.' />
  </ListItem>
  <ListItem>
    <Checkbox id="page-a11y-checkbox-3" label={<span>Only 1 <code className="ws-code">main</code> element exists on the page.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="page-a11y-checkbox-4" label="If any other components are used within any page sub-component, those components follow their own accessibility documentation." />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `mainAriaLabel="[text that labels the main content container]"` | `Page` | Adds an accessible name to the main content container. This should only be passed in when the `mainComponent` defaults to "main" or when the `role` property is also passed in. |
| `mainComponent="[main or div]"` | `Page` | Sets the wrapper element of the main content. By default this will render the `main` element. You should only pass a value of "div" if the page already has a `main` element. |
| `mainContainerId="[id for the main content container]"` | `Page` | Sets the `id` of the main content container. This must be passed in when a skip to content is passed to the page, with the value being linked to the skip to content's `href` property, e.g. `href="#container-id`. |
| `mainTabIndex={-1 or null}` | `Page` | Set the tabindex for the main content container. This must be passed a value of `-1` when a skip to content is also passed to the page, as some browsers require it in order for skip links to work correctly. |
| `role="[role of the main content element]"` | `Page` | Sets the `role` attribute of the main content element. This should only be passed in if the `mainComponent` property has a value of "div". You should also avoid passing `role="main"` and instead use the default `mainComponent` value of "main". |
| `hasOverflowScroll` | `PageBreadcrumb`, `PageGroup`, `PageNavigation`, `PageSection` | Indicates that the component's content causes an overflow scrollbar to render. Passing this property will also set the tabindex of the component to `0` so that it can be focused and scrolled via keyboard. **Required** and should only be passed in when the content's height exceeds the component height, and when there is no other focusable content before the primary content of the component. |
| `aria-label="[text that labels the component]"` | `PageBreadcrumb`, `PageGroup`, `PageNavigation`, `PageSection` | Adds an accessible name to the component. **Required** when the component has the `hasOverflowScroll` property passed in. See our content on [scrollable elements](/accessibility/develop-for-accessibility#scrollable-elements) for further information. |
| `component="[an HTML tag]"` | `PageSection` | Sets the wrapper element of the page section. By default this is the HTML `section` element. Customizing this property may require you to take additional considerations that are dependent on your particular use case. |
| `aria-label="[text that labels the page toggle button]"` | `PageToggleButton` | Adds an accessible name to the page toggle button that controls the sidebar expansion. This should only be passed if the page toggle button contains no text content, such as an icon. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `.pf-v6-c-page__main` | `div` or `main` | Sets the wrapper element of the main content. You should only place this class on a `div` element if the page already has a `main` element. |
| `.pf-m-overflow-scroll` | `.pf-v6-c-page__main-breadcrumb`, `.pf-v6-c-page__main-group`, `.pf-v6-c-page__main-nav`, `.pf-v6-c-page__main-section`, `.pf-v6-c-page__main-subnav`, `.pf-v6-c-page__main-tabs`, `.pf-v6-c-page__main-wizard` | Renders an overflow scrollbar to render when the component content's height is larger the the component's height. |
| `aria-label="[text that labels the main content container]"` | `.pf-v6-c-page__main` | Adds an accessible name to the main content container. This should only be passed in when the `.pf-v6-c-page__main` class is on a `main` element or when the `role` attribute is also passed in. |
| `id="[id for the main content container]"` | `.pf-v6-c-page__main` | Sets the `id` of the main content container. This must be passed in when a skip to content is present within the page, with the value being linked to the skip to content's `href` attribute, e.g. `href="#container-id`. |
| `role="[role of the main content element]"` | `.pf-v6-c-page__main` | Sets the `role` attribute of the main content element. This should only be passed in if the `.pf-v6-c-page__main` class is applied to a `div` element. You should also avoid passing `role="main"` and instead use a `main` element. |
| `tabindex="-1"` | `.pf-v6-c-page__main` | Set the tabindex for the main content container. This should only be passed in when a skip to content is also present within the page, as some browsers require it in order for skip links to work correctly. |
| `aria-label="[text that labels the component]"` | `.pf-v6-c-page__main-breadcrumb`, `.pf-v6-c-page__main-group`, `.pf-v6-c-page__main-nav`, `.pf-v6-c-page__main-section`, `.pf-v6-c-page__main-subnav`, `.pf-v6-c-page__main-tabs`, `.pf-v6-c-page__main-wizard` | Adds an accessible name to the component. **Required** and should only be passed in when the component has the `.pf-m-overflow-scroll` class has caused an overflow scrollbar to render, and when there is no other focusable content before the primary content of the component.<br/>See our content on [scrollable elements](/accessibility/develop-for-accessibility#scrollable-elements) for further information. |
| `tabindex="0"` | `.pf-v6-c-page__main-breadcrumb`, `.pf-v6-c-page__main-group`, `.pf-v6-c-page__main-nav`, `.pf-v6-c-page__main-section`, `.pf-v6-c-page__main-subnav`, `.pf-v6-c-page__main-tabs`, `.pf-v6-c-page__main-wizard` | Allows keyboard focus to be placed on the component. **Required** and should only be passed in when the component has the `.pf-m-overflow-scroll` class has caused an overflow scrollbar to render, and when there is no other focusable content before the primary content of the component. |
| `aria-label="[text that labels the page toggle button]"` | `.pf-v6-c-button.pf-m-plain` | Adds an accessible name to the page toggle button that controls the sidebar expansion. This should only be passed if the page toggle button contains no text content, such as an icon. |

## Additional considerations

Consumers must ensure they take any additional considerations when customizing page, using it in a way not described or recommended by PatternFly, or in various other specific use-cases not outlined elsewhere on this page.

### Semantic elements

It is important to use semantic elements whenever possible, as these will have default roles that can be conveyed to users via assistive technologies in various ways.

The page section component, for example, should render a native `section` element in most instances as this will be conveyed as sectioned content when a user navigates the page via screen reader as well as via rotor menu. The page component itself is similar in that in most instances it should render a native `main` element.

In cases where the only option is to customize the underlying element of a page component, keep in mind that you may need to take additional steps to retain as high a level of accessibility as possible. For example, you may need to add a `role="region"` to a page section that renders a `div` element instead of a `section`, unless you are simply using a page section for styling purposes.
