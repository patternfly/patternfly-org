---
id: Release highlights
title: Release highlights
section: get-started
---

import './get-started.css';

# PatternFly 5.0 highlights

This guide highlights the most notable changes as part of our PatternFly 5.0 release. You can [view the full details for this release on GitHub](https://github.com/patternfly/patternfly-react/releases) and [refer to our upgrade guide](/get-started/upgrade) to update from PatternFly 4 to PatternFly 5.

## Dark theme support
While PatternFly has supported dark theme in beta for some time, it had not been fully documented or tested. As part of the release of PatternFly 5,  we were dedicated to thoroughly testing our beta implementation to ensure that it was ready for everyone. With this major release, PatternFly’s dark theme is fully vetted and supported. Dark theme can be configured in your applications to update based on users’ system preferences.

We are also currently working on introducing more robust theming capabilities in a future PatternFly major release. Going forward, all future themes will include a light and dark theme.

There are a couple of ways to enable dark theme in your products. You can: 

1. Add `patternfly-theme-dark.css` to a page and add the `.pf-theme-dark` class to the page's `<html>` element, or 
2. Apply the `.pf-theme-dark` class to the browser's `prefers-color-scheme` media query. 

For information regarding the shipping and implementation processes for dark theme, as well as general advice for its use read our [dark theme handbook.](https://docs.google.com/document/d/1mRYEfUoOjTsSt7hiqjbeplqhfo3_rVDO0QqMj2p67pw/edit?usp=sharing)

## React 18 support
We are committed to supporting the 2 most recent versions of React for PatternFly. PatternFly 5 is compatible with React 17 and React 18.

## Versioned CSS variables and class names
We've updated our CSS variables and class names so that they are explicitly associated with the version of PatternFly that they align to. 

For more details, refer to [our upgrade guide](/get-started/upgrade#review-and-update-variable-and-class-names) and our [updated CSS classes and variables](developer-resources/global-css-variables) documentation.

## Promoted components 
Whenever a new component or major component enhancement is introduced to PatternFly, it’s released in beta until it has been vetted by products and proven to be stable enough. While components are in beta, they may continue to evolve as the API is tweaked and the HTML markup modified. Once a component is promoted out of beta, we are committed to withhold any additional breaking changes to the component until our next major release.PatternFly 5 promotes the following components out of beta:

- [Charts with patterns](/charts/patterns)
- [Date picker](/components/date-and-time/date-picker)
- [Dropdown-next (our new recommendedation for Dropdown)](/components/menus/dropdown)
- [Icon](/components/icon)
- [Progress stepper](/components/progress-stepper)
- [Progress with helper text](/components/progress#helper-text)
- [Search input](/components/search-input)
- [Select-next (our new recommendedation for Select)](/components/menus/select)
- Tabs variants: 
    - [Dynamic](/components/tabs#dynamic-tabs)
    - [Horizontal overflow](/components/tabs#horizontal-overflow-tabs)
    - [Actions](/components/tabs#horizontal-overflow-tabs)
    - [Close button props](/components/tabs#with-help-and-close-actions)
- [Text input group](/components/text-input-group)
- [Tile](/components/tile)
- [Truncate](/components/truncate)
- [Wizard-next (our new recommendedation for Wizard)](/components/wizard)

## Deprecated components 
As PatternFly has matured, a number of its popular components have been repeatedly enhanced. Their complexity and fragility has grown to become an ever-growing maintenance problem. Rather than continuing to enhance these  components, as part of PatternFly 5 we have adjusted our implementation and recommendations to support components that are more flexible, composable, and easier to maintain. As a result, we are deprecating preexisting, unwieldy implementations in favor of our newer implementations.

Deprecated components are no longer being maintained or enhanced, but they  will remain in our codebase at least until the next major release. 

You can still continue to use deprecated component implementations by importing them  from @patternfly/react-core/deprecated or @patternfly/react-table/deprecated, but we recommend aligning with their replacements 

The following table outlines the components that we deprecated, as well as the component(s) that we recommend using as a replacement.  

| Component  | Recommended replacement  |
| --- | --- |
| [Application launcher](/components/menus/application-launcher/react-deprecated)  | [Dropdown-next](/components/menus/dropdown), [select-next](/components/menus/select)|
| [Context selector](components/menus/context-selector/react-deprecated)  | [Menu](/components/menu)   |
|  [Dropdown](/components/menus/dropdown/react-deprecated) |  [Dropdown-next](/components/menus/dropdown)  |
| [Options menu](components/menus/options-menu/react-deprecated)  |  [Dropdown-next](/components/menus/dropdown), [select-next](/components/menus/select)
| `PageHeader`, `PageHeaderTools`, `PageHeaderToolsGroup`, `PageHeaderToolsItem`,  | [Masthead](/components/masthead)   |
| [Select](/components/menus/select/react-deprecated)  | [Select-next](/components/menus/select) |
|  [Table](/components/table/react-deprecated) | [Table-next](/components/table)
| [Wizard](/omponents/wizard/react-deprecated) | [Wizard-next](/components/wizard)|

## Most significant component changes
This section highlights the most significant changes that were made to our React components. For a full, detailed list of changes, refer to [our upgrade release notes.](/get-started/upgrade/upgrade-release-notes)

### Card

**Card header**

The API for implementing a card was unclear and difficult to understand. We have reconfigured its markup and subcomponents to enable easier and more straightforward card implementation.

As a result, `CardHeaderMain` and `CardActions` are no longer exported from PatternFly, and are instead rendered internally within the `CardHeader` sub-component. Any content and properties for `CardHeaderMain` or `CardActions` should be passed directly to [`CardHeader`](https://www.patternfly.org/v4/components/card#cardheader) instead.

**Clickable/selectable cards**

PatternFly’s previous clickable/selectable cards had many design shortcomings, as shown in the following image:

![Shown is an image of two example cards. The first card is in focus.](/image/v4-selectable-card.png)

With our previous implementation of clickable/selectable cards, screen readers were unable to determine when a card was clickable or selectable.Similarly, users navigating without a screen reader would still have to mouse over a card to determine when it was clickable or selectable.

To improve accessibility and usability for both keyboard and screen reader users, our new [selectable and clickable cards](/components/card#selectable) are redesigned, a shown the following image:

![Shown is an image of two example cards. The first card is both in focus and underlined in blue.](/image/v5-selectable-card.png)

Our previous design has been deprecated, a long with the following properties:
    - `isSelectableRaised`
    - `isDisabledRaised`
    - `hasSelectableInput`
    - `selectableInputAriaLabel`
    - `onSelectableInputChange`

### Helper text
We’ve updated various components that display descriptive or status text so that they are all using the same `HelperText` component, rather than their own disparate helper-text-like implementation. This change affects the following components

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

### Empty state
WILL ADD: the "why"

WIP:

We replaced the `EmptyStatePrimary` and `EmptyStateSecondaryActions` components with `EmptyStateActions`.

We've added the `EmptyStateHeader` component, which should now be passed an `EmptyStateIcon` to the `icon` property and the main title should be passed to `titleText property`. You can also explicitly specify the title's heading level with the `headingLevel` property.

We've added the `EmptyStateFooter` component. It should wrap the content which follows after `EmptyStateBody` inside `EmptyState`.

All of these new subcomponents can be seen in action in the [EmptyState documentation](/components/empty-state)

### Event handler parameter 
To meet industry standards, we’ve updated all callback signatures for component event handling properties so that the event is the first parameter. This change will make it easier to incorporate third party libraries, especially in the case of form building tools such as Formik.

Our [Codemods](/get-started/upgrade#run-our-codemods) should take care of most of these changes, but if your callback function is defined at the class level you will neeed to manually update your code.

### Icons

WILL ADD: the "why"

We are no longer using inline styles, color, or size for icons. Now, React icons come with a built in class `pf-v5-svg`, which gives an icon a default height, width, and color.

If you want a custom color or size, wrap your icon in the [`<Icon>` React component](/components/icon), which comes with colors, size, etc.

If you are not importing `@patternfly/react-styles`, but are still using `@patternfly/react-icons` you will need to provide the generic styles that you have separated from the icons and moved into `@patternfly/react-styles`. For more information, [refer to the @patternfly/react-icons README file.](https://github.com/patternfly/patternfly-react/blob/main/packages/react-icons/README.md)

### Input group

WILL ADD: the "why"

Input group items no longer automatically fill the available space of their container. The new `InputGroupItem` component may need to have the `isFill`, `isBox`, and/or `isPlain` properties adjusted to retain previous styling. This is likely necessary for `FormSelect`, `TextInput`, `Select`, and `TextArea`, which may particularly require the `isFill` property to be passed to `InputGroupItem`.