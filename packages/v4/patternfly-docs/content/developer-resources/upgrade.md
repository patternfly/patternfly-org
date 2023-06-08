---
id: Upgrade
title: Major release upgrade guide
section: get-started
---

Our latest major release introduces new support and functionality to PatternFly, including: 

- React 18 support, 
- Official dark theme support, and
- An enhanced system of CSS classes and variables.

This guide details the major steps you should take to upgrade your product's codebase from PatternFly 4 to PatternFly 5.

# Get help

If you need support as you upgrade to PatternFly 5, the PatternFly team is here to help. Reach out to us on [Slack](https://join.slack.com/t/patternfly/shared_invite/zt-1npmqswgk-bF2R1E2rglV8jz5DNTezMQ) or ask a question on our [GitHub discussion board](https://github.com/orgs/patternfly/discussions). We'll always do our best to answer your questions and connect you with the right people quickly. 

# Run Codemods 

When you upgrade your product to PatternFly 5, several breaking changes will likely be introduced to your product’s codebase. We are using a suite of Codemods to simplify and streamline the upgrade process. Instead of requiring you to manually identify errors and issues in your codebase, you can run our Codemods to quickly identify and fix all issues. 

To utilize our Codemods, you can [view the project on GitHub](https://github.com/patternfly/pf-codemods/) and refer to the following instructions.

##  Running Codemods

To run our Codemods, complete the following steps:

1. Run the following command, adding in the path to your product's source code: 

```{
npx @patternfly/pf-codemods@latest <path to your source code> --exclude menu-search-rename,alert-remove-titleHeadingLevel,datetimepicker-warn-helperText,formgroup-remove-helpertextProps,formhelpertext-remove-props,alert-remove-titleHeadingLevel
}
```

2. Make note of any issues that get flagged.

3. Add the `–fix` flag to the end of your original command and run it again. 

4. Make note of the changes applied to your product's code base.

5. Note any errors that were not automatically fixed (some may simply be warnings) and manually repair issues that are critical.

6. Build your product.

7. Run Codemods multiple times to ensure that all issues are flagged and addressed.

# Review and update CSS variables

Because PatternFly 5 brings changes to class and  variable  names, your existing CSS overrides may be targeting outdated styles. Review your overrides and ensure that they align with our [updated CSS classes and variables.](developer-resources/global-css-variables)

# Upgrade deprecated components 

You will have until our next major release to update the code for your components to match our newest recommendations. If you have not adopted our recommended implementation at that time, your components will be outdated and may not function as needed.

PatternFly 5 brings a new implementation to the following components, which can be upgraded according to the linked documentation:

- [Table](/components/table) 
- [Select](/components/select)
- [Dropdown ](/components/dropdown) 
- [Wizard](/components/wizard)

# Major release notes 

These notes outline the breaking changes that result from our latest major release of PatternFly 5. Breaking changes affect your product’s existing implementation and require you to adjust your codebase.

The following notes detail the breaking changes made to PatternFly’s React library and link each change to its related pull request in GitHub. To view a list of all changes, including non-breaking changes, [refer to our 2023.06 release notes](/get-started/release-notes). 

## Global changes

- Updated outdated dependencies ([#5377](https://github.com/patternfly/patternfly/pull/5377))

## Website fixes

- Fixed unexpected background colors ([#5379](https://github.com/patternfly/patternfly/pull/5379))
- Fixed visibility issue for nested drilldown ([#5375](https://github.com/patternfly/patternfly/pull/5375))
- Updated tooltip's arrow size and shadow to match dark theme ([#5359](https://github.com/patternfly/patternfly/pull/5359))
- Fixed `<ul>` and `<ol>` elements with missing markers ([#5357](https://github.com/patternfly/patternfly/pull/5357))
- Removed outdated, breaking styles from _common.scss ([#5339](https://github.com/patternfly/patternfly/pull/5339))

## Icons

- Moved svg classes to _icons.scss ([#5220](https://github.com/patternfly/patternfly/pull/5220))

## Fonts

- Removed support for Overpass font ([#5169](https://github.com/patternfly/patternfly/pull/5169))

## Components

- Updated components using a plain checkbox or radio input to instead  use the `.pf-m-standalone` variation of the checkbox/radio instead ([#5355](https://github.com/patternfly/patternfly/pull/5355))
- Removed `visibility` CSS across components where it was unnecessary ([#5209](https://github.com/patternfly/patternfly/pull/5209))

### About modal 

**Core** 

- Updated to be a regular block element that is placed inside of the existing modal component ([#5216](https://github.com/patternfly/patternfly/pull/5216))

**React**

- The AboutModalBoxHero sub-component has been removed from AboutModal. Selectors in tests may need to be updated. This rule will raise a warning, but will not make any code changes.[(#8931)](https://github.com/patternfly/patternfly-react/pull/8931)


### Accordion 

**Core** 

- Updated variable names ([#5180](https://github.com/patternfly/patternfly/pull/5180))

**React**

- We've renamed the `AccordionExpandedContentBody` component to `AccordionExpandableContentBody`. [(#8525)](https://github.com/patternfly/patternfly-react/pull/8525)
 
    In:

    ```jsx
    <AccordionExpandedContentBody>Body</AccordionExpandedContentBody>
    ```

    Out:

    ```jsx
    <AccordionExpandableContentBody>Body</AccordionExpandableContentBody>
    ```
- We've renamed the `large` prop value of `displaySize` to `lg`. [(#8212)](https://github.com/patternfly/patternfly-react/pull/8212)

    In:

    ```jsx
    <Accordion displaySize="large" />
    ```

    Out:

    ```jsx
    <Accordion displaySize="lg" />
    ```

### Alert 

**React** 

- We've removed the `aria-label` prop from Alert. This prop should not be used on an Alert as it is not well supported by assistive technologies on `<div>` elements.[(#8649)](https://github.com/patternfly/patternfly-react/pull/8649)

    In:

    ```jsx
    <Alert aria-label="Error alert" />
    ```

    Out:

    ```jsx
    <Alert  />
    ```
- We've removed the `titleHeadlingLevel` prop and replaced it with the `component` prop. [(#8518)](https://github.com/patternfly/patternfly-react/pull/8518)

    In:

    ```jsx
    <Alert titleHeadingLevel="h4" />
    ```

    Out:

    ```jsx
    <Alert component="h4" />
    ```

### Application launcher 

- We've deprecated the `ApplicationLauncher` components. A fix will update code to point to the new deprecated import, but we recommend replacing with `Dropdown` or `Select`. [(8836)](https://github.com/patternfly/patternfly-react/pull/8836)

    In:

    ```jsx
    import { ApplicationLauncher } from '@patternfly/react-core';
    ```

    Out:

    ```jsx
    import { ApplicationLauncher } from '@patternfly/react-core/deprecated';
    ```
- We've updated the `onFavorite` and `onSearch` props for ApplicationLauncher to include the `event` as their first parameter. Handlers may require an update. [(#8756)](https://github.com/patternfly/patternfly-react/pull/8756)

    In:

    ```jsx
    <ApplicationLauncher onFavorite={(id) => handler(id)} onSearch={(text) => searchHandler(text)}/>
    const handler1 = (id) => {};
    const searchHandler1 = (text) => {};
    <ApplicationLauncher onFavorite={handler1} onSearch={searchHandler1}>
    function handler2(id) {};
    function searchHandler2(text) {};
    <ApplicationLauncher onFavorite={handler2} onSearch={searchHandler2}>
    ```

    Out:

    ```jsx
    <ApplicationLauncher onFavorite={(_event, id) => handler(id)} onSearch={(_event, text) => searchHandler(text)}/>
    const handler1 = (_event, id) => {};
    const searchHandler1 = (_event, text) => {};
    <ApplicationLauncher onFavorite={handler1} onSearch={searchHandler1}>
    function handler2(_event, id) {};
    function searchHandler2(_event, text) {};
    <ApplicationLauncher onFavorite={handler2} onSearch={searchHandler2}>
    ```

- We've updated the internal input in ApplicationLauncher to the PatternFly SearchInput. Any relative selectors, such as in unit tests, may need to be updated.[(#8293)](https://github.com/patternfly/patternfly-react/pull/8293)

### Background image 

**React**

- We've removed the `filter` prop from BackgroundImage. Additionally, we've updated the type of the `src` prop to just a string, and the prop will no longer accept a `BackgroundImageSrcMap` object. This rule won't update the `src` prop, but will raise an error if its value is not a string.[(#8931)](https://github.com/patternfly/patternfly-react/pull/8931)

    In:

    ```jsx
    <BackgroundImage filter={<SomeFilter />} src={{xs: 'file/path'}} />

    const srcPath = {xs: 'file/path'};
    <BackgroundImage src={srcPath} />
    ```

    Out:

    ```jsx
    // An error is raised for the src prop
    <BackgroundImage  src={{xs: 'file/path'}} />

    const srcPath = {xs: 'file/path'};
    // An error is raised for the src prop
    <BackgroundImage src={srcPath} />
    ```

- We've removed the `BackgroundImageSrcMap` interface.[(#8931)](https://github.com/patternfly/patternfly-react/pull/8931)

    In:

    ```jsx
    const backgroundImgSrcObj: BackgroundImageSrcMap = {};
    ```

    Out:

    ```jsx
    const backgroundImgSrcObj = {};
    ```

### Banner 

**React** 

- We've updated the `variant` prop type for Banner. `"default"` is still a valid value, but the following status values have been replaced with color values 
[(#8204)](https://github.com/patternfly/patternfly-react/issues/8204)
:

| Old status value | New color value |
| - | - |
| info | blue |
| danger | red |
| success | green |
| warning | gold |

    In:

    ```jsx
    <Banner variant="danger" />
    ```

    Out:

    ```jsx
    <Banner variant="red" />
    ```

### Button 

**React** 

- We've removed the `isSmall` and `isLarge` props for Button and replaced them with the `size` prop using the values `"sm"` and `"lg"`, respectively. [(#8144)](https://github.com/patternfly/patternfly-react/pull/8144)

    In:

    ```jsx
    <Button isSmall />
    <Button isLarge />
    ```

    Out:

    ```jsx
    <Button size="sm" />
    <Button size="lg" />
    ```

### Calendar 

**React** 
- We've updated the `onMonthChange` prop for CalendarMonth to include the `event` as its first parameter. Handlers may require an update. [(#8753)](https://github.com/patternfly/patternfly-react/pull/8753)

    In:

    ```jsx
    <CalendarMonth onChange={(date) => handler(date)} onMonthChange={(newDate) => handler(newDate)} />
    <CalendarMonth onMonthChange={(newDate, event) => handler(newDate, event)} />
    const changeHandler1 = (date) => {};
    const handler1 = (newDate, event) => {};
    <CalendarMonth onChange={changeHandler1} onMonthChange={handler1}>
    function changeHandler2(date) {};
    function handler2(newDate, event) {};
    <CalendarMonth onChange={changeHandler2} onMonthChange={handler2}>
    ```

    Out:

    ```jsx
    <CalendarMonth onChange={(_event, date) => handler(date)} onMonthChange={(_event, newDate) => handler(newDate)} />
    <CalendarMonth onMonthChange={(event, newDate) => handler(newDate, event)} />
    const changeHandler1 = (_event, date) => {};
    const handler1 = (_event, newDate) => {};
    <CalendarMonth onMonthChange={handler1}>
    function changeHandler2(_event, date) {};
    function handler2(_event, newDate) {};
    <CalendarMonth onChange={changeHandler2} onMonthChange={handler2}>
    ```

### Card

**Core** 

- Improved card header implementation and makes `.pf-c-card__header-main` required when there is a `.pf-c-card__header`. Added gap spacing. ([#5280](https://github.com/patternfly/patternfly/pull/5280))

**React**

- The following props have been deprecated on Card:

    - isSelectableRaised
    - isDisabledRaised
    - hasSelectableInput
    - selectableInputAriaLabel
    - onSelectableInputChange

    We recommend using our new implementation of clickable and selectable cards instead. This rule will raise a warning, but can provide fixes when using the `isSelectableRaised` or `isDisabledRaised` props. [(#9092)](https://github.com/patternfly/patternfly-react/pull/9092)

    In:

    ```jsx
    <Card isSelectableRaised isDisabledRaised />
    <Card isSelectableRaised hasSelectableInput />
    ```

    Out:

    ```jsx
    <Card isSelectable isDisabled />
    <Card isSelectable hasSelectableInput tabIndex={0} />
    ```

- We've removed the deprecated `isHoverable` prop from Card. [(#8196)](https://github.com/patternfly/patternfly-react/pull/8196)
  
    In:

    ```jsx
    <Card isHoverable />
    ```

    Out:

    ```jsx
    <Card  />
    ```

### Check 

**Core** 

- Updated description and body to fill available page section width ([#5233](https://github.com/patternfly/patternfly/pull/5233))

**React**

-

### Chip

**Core** 

- Removed legacy examples and add support for the `__main` element ([#5356](https://github.com/patternfly/patternfly/pull/5356))
- Replaced margins in examples with gap spacing ([#5293](https://github.com/patternfly/patternfly/pull/5293))

**React**

-

### Code block

**Core** 

- Fixed class references ([#5349](https://github.com/patternfly/patternfly/pull/5349))

**React**

-

### Empty state 

**Core** 

- Updated examples' code and CSS variables ([#5307](https://github.com/patternfly/patternfly/pull/5307))

**React**

-

### Label

**Core** 

- Removed close button from editable active example ([#5354](https://github.com/patternfly/patternfly/pull/5354))
- Replaced margins in examples with gap spacing ([#5296](https://github.com/patternfly/patternfly/pull/5296))

**React**

-

### Notification drawer

**Core** 

- Updated body element to fill vertical space ([#5214](https://github.com/patternfly/patternfly/pull/5214))

**React**

-

### Popover 

**Core** 

- Updated background color, border, and shadow styles to align with dark theme ([#5318](https://github.com/patternfly/patternfly/pull/5318))

**React**

-

### Radio 

**Core** 

- Updated description and body to fill available page section width ([#5233](https://github.com/patternfly/patternfly/pull/5233))

**React**

-

### Skip to content

**Core** 

- Moved the class `.pf-c-skip-to-content` from the primary button to a `<div>` that wraps the primary button ([#5153](https://github.com/patternfly/patternfly/pull/5153))

**React**

-

### Tabs

**Core** 

- Added a bottom border to secondary tabs and cleaned up CSS modifiers ([#5171](https://github.com/patternfly/patternfly/pull/5171))

**React**

-

### Toolbar 

**Core** 

- Changed `.pf-c-toolbar__group` default vertical alignment from center to baseline and added modifier classes to switch between baseline and center alignment for self groups, children groups, and self items
 ([#5201](https://github.com/patternfly/patternfly/pull/5201))

**React**

-

### Tooltip

**Core** 

- Updated background color, border, and shadow styles to align with dark theme ([#5318](https://github.com/patternfly/patternfly/pull/5318))

**React**

-

### Wizard 

**Core** 

- Removed style that was breaking drawer example ([#5322](https://github.com/patternfly/patternfly/pull/5322))
- Reordered footer buttons ([#5148](https://github.com/patternfly/patternfly/pull/5148))

**React**

-

