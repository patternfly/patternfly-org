---
id: Release highlights
title: Release highlights
section: get-started
---

import './get-started.css';

# What's new with PatternFly 5.0 

The following sections highlight the new features and updates included in this release. You can [view the full details for this release on GitHub](https://github.com/patternfly/patternfly-react/releases) and [refer to our upgrade guide](/get-started/upgrade) to update from PatternFly 4 to PatternFly 5.

## Dark theme support

While PatternFly has supported a dark theme in beta for some time, our dark theme has not been fully documented or tested. As part of the release of PatternFly 5, we were dedicated to thoroughly testing our beta implementation to ensure that it was ready for everyone. With this major release, we're excited to say that PatternFly's dark theme is fully vetted and supported. You can configure your applications' dark theme to update based on users’ system preferences.

We are also currently working on introducing more robust theming capabilities in a future PatternFly major release. Going forward, all future themes will include a light and dark theme.

To enable dark theme in your products, add the `.pf-theme-dark` class to the `<html>` element.

For information regarding the shipping and implementation processes for dark theme, as well as general advice for its use read our [dark theme handbook.](/developer-resources/dark-theme-handbook)

## React 18 support

We are committed to supporting the 2 most recent versions of React for PatternFly to keep up with the environments that our users work in. To this end, we are pleased to announce that PatternFly 5 is compatible with both React 17 and React 18.

## Versioned CSS variables and class names

We wanted to ensure that our variable naming conventions were clear and consistent going forward with our future release cycles. To keep things organized and clear, we updated our CSS variables and class names so that they are explicitly associated with the version of PatternFly that they align to. For PatternFly 5, we added a prefix of  `v5` to a number of our variable and class names.

For more details, refer to [our upgrade guide](/get-started/upgrade#review-and-update-variable-and-class-names) and our [updated CSS classes and variables](developer-resources/global-css-variables) documentation.

## Event handler parameter consistency updates

Previously, our event handler parameters weren’t consistently ordered. To meet industry standards, and get everything on the same page, we added event parameters to all of our callbacks and reordered handlers to consistently list the event as the first parameter. Additionally, we made sure that all of our event handlers now pass back an event. This change will make it easier to incorporate third party libraries, especially in the case of form building tools, like Formik.

Our [codemods](/get-started/upgrade#run-our-codemods) should take care of most of these changes, but if your callback function is defined at the class level you will need to manually update your code.

## Changes to React icons

To improve the consistency of icon usage across projects adopting PatternFly, we are no longer using inline styles, color, or size for icons. Instead, React icons come with a built-in class `pf-v5-svg`, which gives an icon a default height, width, and vertical alignment. An icon's color is now set on the SVG file itself, using the `fill` attribute.

If you want a custom color or size, wrap your icon in the [`<Icon>` React component](/components/icon), which comes with colors, size, etc.

If you are not importing `@patternfly/react-styles`, but are still using `@patternfly/react-icons` you will need to provide the generic styles that you have separated from the icons and moved into `@patternfly/react-styles`. For more information, [refer to the @patternfly/react-icons README file.](https://github.com/patternfly/patternfly-react/blob/main/packages/react-icons/README.md)

## Major component updates and enhancements

### Card

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

### Empty state

Our empty state component was long overdue for some clean up. It was not following PatternFly’s established practices for CSS rule specificity and CSS variable usage. We also saw a great opportunity to improve our empty state layouts by using CSS `gap`.

To freshen things up, we made a number of changes, which can be seen in action over in our [empty state documentation.](/components/empty-state) These changes include the following: 

- We replaced the `EmptyStatePrimary` and `EmptyStateSecondaryActions` components with `EmptyStateActions`.

- We added the `EmptyStateHeader` component. To `EmptyStateHeader` you should pass an `EmptyStateIcon` to the `icon` property, a main title to `titleText` property, and (optionally) a title's heading level to the `headingLevel` property.

- We added the `EmptyStateFooter` component that wraps any content following `EmptyStateBody`.

### Helper text

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

        To add helper text to a form group in place of these properties you should use the `FormHelperText`, `HelperText`, and `HelperTextItem` components directly as part of the `FormGroup`’s children. This implementation is shown in PatternFly's [invalid form example.](components/forms/form#invalid)

### Input group

Previously, the input group styles were too narrowly coupled with the types of children they contained. It did not match the approach we took to styling other groups of components. This update enabled more flexibility for the types of children allowed in an input group, and simplified the style rules for things like spacing, focus management, and item size manipulation.

As a result, input group items no longer automatically fill the available space of their container. To retain previous styling, new `InputGroupItem` components may need to have the `isFill`, `isBox`, and/or `isPlain` properties adjusted. This is likely necessary for `FormSelect`, `TextInput`, `Select`, and `TextArea`, which may particularly require the `isFill` property to be passed to `InputGroupItem`.

## Refactored and deprecated components 

As PatternFly has matured, a number of its popular components have been repeatedly enhanced. Their complexity and fragility has grown to become an ever-growing maintenance problem. Rather than continuing to enhance these delicate components, as part of PatternFly 5, we have adjusted our implementation and recommendations to support new components that are more flexible, composable, and easier to maintain. As a result, we are deprecating our previous implementations in favor of our newer, more composable components.

The following table outlines the components that are affected, as well as the component(s) that we recommend using as a replacement.

| Deprecated component  | Recommended replacement  |
| --- | --- |
| [Application launcher](/components/menus/application-launcher/react-deprecated)  | [Dropdown](/components/menus/dropdown), [select](/components/menus/select)|
| [Context selector](components/menus/context-selector/react-deprecated)  | [Menu](/components/menu)   |
|  [Dropdown (deprecated)](/components/menus/dropdown/react-deprecated) |  [Dropdown](/components/menus/dropdown)  |
| [Options menu](components/menus/options-menu/react-deprecated)  |  [Dropdown](/components/menus/dropdown), [select](/components/menus/select)
| `PageHeader`, `PageHeaderTools`, `PageHeaderToolsGroup`, `PageHeaderToolsItem`,  | [Masthead](/components/masthead)   |
| [Select (deprecated)](/components/menus/select/react-deprecated)  | [Select](/components/menus/select) |
|  [Table (deprecated)](/components/table/react-deprecated) | [Table](/components/table)
| [Wizard (deprecated)](/components/wizard/react-deprecated) | [Wizard](/components/wizard)|

**Note:** To understand how our new composable menus can be used to replace deprecated components, [view our custom menus examples](/components/menus/custom-menus).

Deprecated components are no longer being maintained or enhanced, but they will remain in our codebase at least until the next major release. 

You can still continue to use deprecated component implementations by importing them from `@patternfly/react-core/deprecated` or `@patternfly/react-table/deprecated`, but we recommend aligning with their replacements to benefit from our code enhancements and better  prepare for future iterations.

## Components promoted out of beta

Whenever a new component or major component enhancement is introduced to PatternFly, it’s released in beta until it’s been vetted by products and proven to be stable enough. While components are in beta, they may continue to evolve as we tweak their API and modify their HTML markup. Once a component is promoted out of beta, we are committed to withhold any additional breaking changes to the component until our next major release. With PatternFly 5, we’re excited to promote 16 components and variants out of beta:

- [Charts with patterns](/charts/patterns)
- [Date picker](/components/date-and-time/date-picker)
- [Dropdown-next (our new recommendation for dropdown)](/components/menus/dropdown)
- [Icon](/components/icon)
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