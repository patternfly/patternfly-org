---
id: Release highlights
title: Release highlights
section: get-started
---

import './get-started.css';
import { Divider } from '@patternfly/react-core';

## PatternFly 5.2 

PatternFly 5.2 is now live! Here are the highlights from this release. 

### Component groups extension 

We released a new extension, called [component groups](/extensions/component-groups/about-component-groups). This extension contains a range of React components that are more complex than standard PatternFly components. These component groups combine and adjust multiple base components to provide opinionated solutions for recurring use cases across products using PatternFly.

Note that the component groups extension is contained in its own [GitHub repository](https://github.com/patternfly/react-component-groups).

This extension was created in an effort to migrate components from the [Red Hat Insights shared components repository](https://github.com/RedHatInsights/frontend-components). The PatternFly component groups extension is now recommended to be used in place of the RedHat Insights implementation. To update your product to using the component groups extension, refer to [our migration guide.](https://github.com/patternfly/react-component-groups/blob/main/migration.md)

The latest version of component groups contains the following components, with full documentation on PatternFly.org:

- Ansible
- Battery
- DetailsPage (beta)
- Error boundary
- Error state
- Invalid object
- Not authorized
- Skeleton table
- Tag count
- Unavailable content
- Warning modal

To learn more about the story behind this project, read our [Medium article](https://medium.com/patternfly/introducing-component-groups-dbe054cac726).

We plan to continue to add additional components as they are requested, so please get involved if you have feedback or new ideas! 

### New React "next" components 

As a reminder, our next components will be promoted with our next major release. Once a next component is promoted, it becomes the default recommended implementation for that component. 

We introduced a next version of **[modal](/components/modal/react-next)**. With this change, the modal API will be composable, rather than React property based.

We also introduced a next version of **[drag and drop](/components/drag-and-drop/react-next)** with [related demos](/components/drag-and-drop/react-next-demos).

### Topology updates 

#### New additions 

We added a new `hulledOutline` property in `DefaultGroup`, which can be used to specify if a group's outline is `hulled` or `rect`.

We added logic to hide tags when the detail level is low, since they were difficult to read. Hidden tags will reappear if you hover on an edge, as you zoom in, or if you view the screen in a larger format.

#### Fixes

We removed the use of `window` and `global` to resolve bundling issues.  

We updated the method in which we get node details to better support lower scales. Now, we get the topology details level directly from the graph, instead of through the `useDetailsLevel` hook.

### Accessibility guideline updates 

We updated all of our top-level accessibility guidelines for better clarity and organization. As part of these updates, we also added a new page called "Design for accessibility", which documents accessibility considerations for visual designers.

The following pages now have updated content -- take a read!

- [About accessibility](/accessibility/about-accessibility) (formerly named "Accessibility fundamentals")
- [Accessibility scorecard](/accessibility/accessibility-scorecard)
- [Design for accessibility](/accessibility/accessibility-design) (**new!**)
- [Develop for accessibility](/accessibility/develop-for-accessibility) (formerly named "Product development guide")
- [PatternFly's accessibility](/accessibility/patternflys-accessibility)
- [Testing your accessibility](/accessibility/testing-your-accessibility)

### Coming soon

The next major version of PatternFly (v6) doesn't come out until later this year, but our team has started preparing for the release, which will include new theming capabilities and design token support.

Keep an eye out for more information about the ***v6 alpha release*** , which is slotted for Q1 2024.

<Divider></Divider>

## PatternFly 5.1 

As part of our [quarterly release cadence](/get-started/about#patternfly-release-cadence), we're excited to announce that PatternFly 5.1 is now live.

To help provide a high-level view of what's new, we've pulled together the major highlights from this release. Keep reading to learn more!

### Promoted package versions

- patternfly/patternfly ([changelog](https://github.com/patternfly/patternfly/releases/tag/v5.1.0))
  - [@patternfly/patternfly@5.1.0](https://www.npmjs.com/package/@patternfly/patternfly/v/5.1.0)


- patternfly/patternfly-react ([changelog](https://github.com/patternfly/patternfly-react/releases/tag/v5.1.1))
  - [@patternfly/react-charts@7.1.1](https://www.npmjs.com/package/@patternfly/react-charts/v/7.1.1)
  - [@patternfly/react-code-editor@5.1.1](https://www.npmjs.com/package/@patternfly/react-code-editor/v/5.1.1)
  - [@patternfly/react-core@5.1.1](https://www.npmjs.com/package/@patternfly/react-core/v/5.1.1)
  - [@patternfly/react-icons@5.1.1](https://www.npmjs.com/package/@patternfly/react-icons/v/5.1.1)
  - [@patternfly/react-styles@5.1.1](https://www.npmjs.com/package/@patternfly/react-styles/v/5.1.1)
  - [@patternfly/react-table@5.1.1](https://www.npmjs.com/package/@patternfly/react-table/v/5.1.1)
  - [@patternfly/react-tokens@5.1.1](https://www.npmjs.com/package/@patternfly/react-tokens/v/5.1.1)


- PatternFly extensions
  - [@patternfly/react-topology@5.1.0](https://www.npmjs.com/package/@patternfly/react-topology/v/5.1.0) ([changelog](https://github.com/patternfly/react-topology/releases/tag/v5.1.0))
  - [@patternfly/react-component-groups@5.0.0](https://www.npmjs.com/package/@patternfly/react-component-groups/v/5.0.0) ([changelog](https://github.com/patternfly/react-component-groups/releases/tag/v5.0.0))
  
### Right-to-left language support 

Last quarter, our developers were dedicated to implementing right-to-left (RTL) language support in PatternFly. To better enable product internationalization, we've updated our components to support both right-to-left (RTL) and left-to-right (LTR) languages. You can check out our [RTL handbook](/developer-resources/right-to-left-handbook) for more details and resources.

To achieve this support, our components now use [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values) (like `block-start`, `inline-end`, `block-end`, and `inline-start`), which will ensure that styles are laid out properly, no matter which languages you're using.

Note that, to avoid a sweeping breaking change, PatternFly variable names still use "top", "bottom", "left", and "right". 

### New topology documentation

We updated the [control bar documentation](/topology/control-bar) for topology to clarify the extent of the control bar functions. This addition highlights information that will better support the range of control bar use cases.  

### Clickable labels

We added a new "clickable" variant to the [label component](/components/label), so that you can use a label that acts as a button.

To enable this behavior, we've added a new `onClick` property to the `<Label>` component, which can contain an action fit for your use case. 

Note that you cannot use `onClick` if the `href` or `isEditable` properties are already passed into `<Label>`, since those align with link labels and editable labels, respectively.

<Divider></Divider>

## PatternFly 5.0 

Refer to our [upgrade guide](/get-started/upgrade) to update from PatternFly 4 to PatternFly 5.

### Promoted package versions

- patternfly/patternfly ([changelog](https://github.com/patternfly/patternfly/releases/tag/v5.0.2))
  - [@patternfly/patternfly@5.0.2](https://www.npmjs.com/package/@patternfly/patternfly/v/5.0.2)


- patternfly/patternfly-react ([changelog](https://github.com/patternfly/patternfly-react/releases/tag/v5.0.0))
  - [@patternfly/react-charts@7.0.0](https://www.npmjs.com/package/@patternfly/react-charts/v/7.0.0)
  - [@patternfly/react-code-editor@5.0.0](https://www.npmjs.com/package/@patternfly/react-code-editor/v/5.0.0)
  - [@patternfly/react-core@5.0.0](https://www.npmjs.com/package/@patternfly/react-core/v/5.0.0)
  - [@patternfly/react-icons@5.0.0](https://www.npmjs.com/package/@patternfly/react-icons/v/5.0.0)
  - [@patternfly/react-styles@5.0.0](https://www.npmjs.com/package/@patternfly/react-styles/v/5.0.0)
  - [@patternfly/react-table@5.0.0](https://www.npmjs.com/package/@patternfly/react-table/v/5.0.0)
  - [@patternfly/react-tokens@5.0.0](https://www.npmjs.com/package/@patternfly/react-tokens/v/5.0.0)


- PatternFly extensions
  - [@patternfly/react-catalog-view-extension@5.0.0](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/5.0.0) ([changelog](https://github.com/patternfly/react-catalog-view/releases/tag/v5.0.0))
  - [@patternfly/react-console@5.0.0](https://www.npmjs.com/package/@patternfly/react-console/v/5.0.0) ([changelog](https://github.com/patternfly/react-console/releases/tag/v5.0.0))
  - [@patternfly/react-log-viewer@5.0.0](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/5.0.0) ([changelog](https://github.com/patternfly/react-log-viewer/releases/tag/v5.0.0))
  - [@patternfly/react-topology@5.0.0](https://www.npmjs.com/package/@patternfly/react-topology/v/5.0.0) ([changelog](https://github.com/patternfly/react-topology/releases/tag/v5.0.0))
  - [@patternfly/react-user-feedback@5.0.0](https://www.npmjs.com/package/@patternfly/react-user-feedback/v/5.0.0) ([changelog](https://github.com/patternfly/react-user-feedback/releases/tag/v5.0.0))
  - [@patternfly/react-virtualized-extension@5.0.0](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/5.0.0) ([changelog](https://github.com/patternfly/react-virtualized-extension/releases/tag/v5.0.0))
  - [@patternfly/quickstarts@5.0.0](https://www.npmjs.com/package/@patternfly/quickstarts/v/5.0.0) ([changelog](https://github.com/patternfly/patternfly-quickstarts/releases/tag/v5.0.0))


### Dark theme support

While PatternFly has supported a dark theme in beta for some time, our dark theme has not been fully documented or tested. As part of the release of PatternFly 5, we were dedicated to thoroughly testing our beta implementation to ensure that it was ready for everyone. With this major release, we're excited to say that PatternFly's dark theme is fully vetted and supported. You can configure your applications' dark theme to update based on users’ system preferences.

We are also currently working on introducing more robust theming capabilities in a future PatternFly major release. Going forward, all future themes will include a light and dark theme.

To enable dark theme in your products, add the `.pf-theme-dark` class to the `<html>` element.

For information regarding the shipping and implementation processes for dark theme, as well as general advice for its use read our [dark theme handbook.](/developer-resources/dark-theme-handbook)

### React 18 support

We are committed to supporting the 2 most recent versions of React for PatternFly to keep up with the environments that our users work in. To this end, we are pleased to announce that PatternFly 5 is compatible with both React 17 and React 18.

### Versioned CSS variables and class names

We wanted to ensure that our variable naming conventions were clear and consistent going forward with our future release cycles. To keep things organized and clear, we updated our CSS variables and class names so that they are explicitly associated with the version of PatternFly that they align to. For PatternFly 5, we added a prefix of  `v5` to a number of our variable and class names.

For more details, refer to [our upgrade guide](/get-started/upgrade#review-and-update-variable-and-class-names) and our [updated CSS classes and variables](developer-resources/global-css-variables) documentation.

### Event handler parameter consistency updates

Previously, our event handler parameters weren’t consistently ordered. To meet industry standards, and get everything on the same page, we added event parameters to all of our callbacks and reordered handlers to consistently list the event as the first parameter. Additionally, we made sure that all of our event handlers now pass back an event. This change will make it easier to incorporate third party libraries, especially in the case of form building tools, like Formik.

Our [codemods](/get-started/upgrade#run-our-codemods) should take care of most of these changes, but if your callback function is defined at the class level you will need to manually update your code.

### Changes to React icons

To improve the consistency of icon usage across projects adopting PatternFly, we are no longer using inline styles, color, or size for icons. Instead, React icons come with a built-in class `pf-v5-svg`, which gives an icon a default height, width, and vertical alignment. An icon's color is now set on the SVG file itself, using the `fill` attribute.

If you want a custom color or size, wrap your icon in the [`<Icon>` React component](/components/icon), which comes with colors, size, etc. If you had used `noVerticalAlign` on your icon in PatternFly 4, you can achieve this same style by using wrapping your icon in the `<Icon>` React component and passing in the `isInline` prop.

If you are not importing `@patternfly/react-styles`, but are still using `@patternfly/react-icons` you will need to provide the generic styles that you have separated from the icons and moved into `@patternfly/react-styles`. For more information, [refer to the @patternfly/react-icons README file.](https://github.com/patternfly/patternfly-react/blob/main/packages/react-icons/README.md)

### Major component updates and enhancements

#### Card

The following updates were made to the card component to improve the experience for both developers and end-users.

**Card header**

Our previous card API was difficult to understand and utilize. We reconfigured its markup and React subcomponents so you can implement cards more easily.

As a result, `CardHeaderMain` and `CardActions` are no longer exported from PatternFly, and are instead rendered internally within the `CardHeader` sub-component. Any content and properties for `CardHeaderMain` or `CardActions` should be passed directly to [`CardHeader`](https://www.patternfly.org/v4/components/card#cardheader) instead.

**Clickable and selectable cards**

Clickable and selectable cards have been redesigned to improve usability and accessibility.

With our previous implementation of cards, screen readers were unable to determine when a card was clickable or selectable. Similarly, users navigating without a screen reader would still have to mouse over a card to determine when it was clickable or selectable. We weren’t satisfied with these hurdles.

To improve accessibility and usability for both keyboard and screen reader users, our new [selectable and clickable cards](/components/card#selectable) are redesigned to help users determine when a card can be selected.

Our **previous design** styled selected cards with a colored underline:

<img src="./img/pf4-selectable-card.png" alt="Shown is a UI with a grid of cards, one of which is selected and underlined in blue."/>

Our **new design** styles selected cards with a colored outline and darkened background color:

<img src="./img/pf5-selectable-card.png" alt="Shown is a UI with a grid of cards, one of which is selected and outlined in blue."/>

As a result, our previous design has been deprecated, along with the following properties:

- `isSelectableRaised`
- `isDisabledRaised`
- `hasSelectableInput`
- `selectableInputAriaLabel`
- `onSelectableInputChange`

We recommend that you upgrade to these new cards if your use case calls for them. You can read more about their intended usage [in our card documentation.](/components/card/design-guidelines#variations)

#### Empty state

Our empty state component was long overdue for some clean up. It was not following PatternFly’s established practices for CSS rule specificity and CSS variable usage. We also saw a great opportunity to improve our empty state layouts by using CSS `gap`.

To freshen things up, we made a number of changes, which can be seen in action over in our [empty state documentation.](/components/empty-state) These changes include the following: 

- We replaced the `EmptyStatePrimary` and `EmptyStateSecondaryActions` components with `EmptyStateActions`.

- We added the `EmptyStateHeader` component. To `EmptyStateHeader` you should pass an `EmptyStateIcon` to the `icon` property, a main title to `titleText` property, and (optionally) a title's heading level to the `headingLevel` property.

- We added the `EmptyStateFooter` component that wraps any content following `EmptyStateBody`.

#### Helper text

Our components often allow you to display descriptive or status text below a form field to help users make decisions, but the implementation of this text hasn’t been consistent across components. We wanted to clean things up so that this implementation is more consistent.

As a result, a few components were updated to use the same [`HelperText` component](/components/helper-text), rather than their own disparate helper-text-like implementation. This change affects the following components:

- [Date picker](/get-started/upgrade#date-picker)
- [Time picker](/get-started/upgrade#time-picker)
- [Form](/get-started/upgrade#form) 
    - The `FormGroup` component is especially affected, as we've removed the following helper text related properties in PatternFly 5: 
        - `helperText`
        - `helperTextInvalid`
        - `validated`
        - `helperTextIcon`
        - `helperTextInvalidIcon`
        - `isHelperTextBeforeField`

        To add helper text to a form group in place of these properties you should use the `FormHelperText`, `HelperText`, and `HelperTextItem` components directly as part of the `FormGroup`’s children. This implementation is shown in PatternFly's [invalid form example.](/components/forms/form#invalid)

#### Input group

Previously, the input group styles were too narrowly coupled with the types of children they contained. It did not match the approach we took to styling other groups of components. This update enabled more flexibility for the types of children allowed in an input group, and simplified the style rules for things like spacing, focus management, and item size manipulation.

As a result, input group items no longer automatically fill the available space of their container. To retain previous styling, new `InputGroupItem` components may need to have the `isFill`, `isBox`, and/or `isPlain` properties adjusted. This is likely necessary for `FormSelect`, `TextInput`, `Select`, and `TextArea`, which may particularly require the `isFill` property to be passed to `InputGroupItem`.

### Refactored and deprecated components 

As PatternFly has matured, a number of its popular components have been repeatedly enhanced. Their complexity and fragility has grown to become an ever-growing maintenance problem. Rather than continuing to enhance these delicate components, as part of PatternFly 5, we have adjusted our implementation and recommendations to support new components that are more flexible, composable, and easier to maintain. As a result, we are deprecating our previous implementations in favor of our newer, more composable components.

The following table outlines the components that are affected, as well as the component(s) that we recommend using as a replacement.

| Deprecated component                                                            | Recommended replacement                |
|---------------------------------------------------------------------------------|----------------------------------------|
| [Application launcher](/components/menus/application-launcher/react-deprecated) | [Dropdown](/components/menus/dropdown) |
| [Context selector](/components/menus/context-selector/react-deprecated)         | [Dropdown](/components/menus/dropdown) |
| [Dropdown (deprecated)](/components/menus/dropdown/react-deprecated)            | [Dropdown](/components/menus/dropdown) |
| [Options menu](/components/menus/options-menu/react-deprecated)                 | [Select](/components/menus/select)     |
| [Page header](/components/page/react-deprecated)                                | [Masthead](/components/masthead)       |
| [Select (deprecated)](/components/menus/select/react-deprecated)                | [Select](/components/menus/select)     |
| [Table (deprecated)](/components/table/react-deprecated)                        | [Table](/components/table)             |
| [Wizard (deprecated)](/components/wizard/react-deprecated)                      | [Wizard](/components/wizard)           |

**Note:** To understand how our new composable menus can be used to replace deprecated components, [view our custom menus examples](/components/menus/custom-menus).

Deprecated components are no longer being maintained or enhanced, but they will remain in our codebase at least until the next major release. 

You can still continue to use deprecated component implementations by importing them from `@patternfly/react-core/deprecated` or `@patternfly/react-table/deprecated`, but we recommend aligning with their replacements to benefit from our code enhancements and better  prepare for future iterations.

### Components promoted out of beta

Whenever a new component or major component enhancement is introduced to PatternFly, it’s released in beta until it’s been vetted by products and proven to be stable enough. While components are in beta, they may continue to evolve as we tweak their API and modify their HTML markup. Once a component is promoted out of beta, we are committed to withhold any additional breaking changes to the component until our next major release. With PatternFly 5, we’re excited to promote 16 components and variants out of beta:

- [Charts with patterns](/charts/patterns)
- [Date picker](/components/date-and-time/date-picker)
- [Dropdown-next (our new recommendation for dropdown)](/components/menus/dropdown)
- [Icon](/components/icon)
- [Log viewer extension](/extensions/log-viewer)
- [Progress stepper](/components/progress-stepper)
- [Progress with helper text](/components/progress#helper-text)
- [Search input](/components/search-input)
- [Select-next (our new recommendation for select)](/components/menus/select)
- Tabs variants: 
    - [Dynamic](/components/tabs#dynamic-tabs)
    - [Horizontal overflow](/components/tabs#horizontal-overflow-tabs)
    - [Actions](/components/tabs#horizontal-overflow-tabs)
    - [Close button props](/components/tabs#with-help-and-close-actions)
- [Text input group](/components/text-input-group)
- [Tile](/components/tile)
- [Truncate](/components/truncate)
- [Wizard-next (our new recommendation for wizard)](/components/wizard)

### Extensions updates

All PatternFly extensions have been updated to be compatible with PatternFly 5. For details on the nature of the changes made to each extension, please see [the PatternFly 5 release notes](/get-started/upgrade/release-notes).
Most notably, topology's D3 dependency has been updated to version 7, and some event handler callback signatures were updated.
