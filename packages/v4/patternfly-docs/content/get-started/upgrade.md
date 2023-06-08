---
id: Upgrade
title: Major release upgrade guide
section: get-started
---

# PatternFly 5

Our latest major release introduces new support and functionality to PatternFly, including: 

- React 18 support, 
- Official dark theme support, and
- An enhanced system of CSS classes and variables.

To learn about the biggest changes in this release, read our [release highlights](/get-started/release-higlights.md). 

This guide outlines the major steps you should take to upgrade your product's codebase from PatternFly 4 to PatternFly 5, as well as a detailed list of our [major release notes](get-started/upgrade.md#major-release-notes). 

## Most impactful changes 

### Event handler callback changes

Consumer requested to have our callbacks meet industry standards in order to make it easier to integrate our components with third party libraries, so that they don’t have to build wrappers to use with third party libraries. 


## Get help

If you need support as you upgrade to PatternFly 5, the PatternFly team is here to help. Reach out to us on [Slack](https://join.slack.com/t/patternfly/shared_invite/zt-1npmqswgk-bF2R1E2rglV8jz5DNTezMQ) or ask a question on our [GitHub discussion board](https://github.com/orgs/patternfly/discussions). We'll always do our best to answer your questions and connect you with the right people quickly. 


# Use Codemods to upgrade your product's codebase

When you upgrade your product to PatternFly 5, several breaking changes will likely be introduced to your product’s codebase. We are using a suite of Codemods to simplify and streamline the upgrade process. Instead of requiring you to manually identify errors and issues in your codebase, you can run our Codemods to quickly identify and fix all issues. 

To utilize our Codemods, you can [view the project on GitHub](https://github.com/patternfly/pf-codemods/) and refer to the following instructions.

##  How to run our Codemods

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



# Upgrade deprecated components before our next major release

You will have until our next major release to update the code for your components to match our newest recommendations. If you have not adopted our recommended implementation at that time, your components will be outdated and may not function as needed.

PatternFly 5 brings a new implementation to the following components, which can be upgraded according to the linked documentation:

- [Table](/components/table) 
- [Select](/components/select)
- [Dropdown ](/components/dropdown) 
- [Wizard](/components/wizard)


# Major release notes 

The following notes outline the changes we made to our React and HTML (Core) libraries for this major release. Breaking changes affect your product’s existing implementation and require you to adjust your codebase.

## Global changes

**Core** 

- Updated outdated dependencies ([#5377](https://github.com/patternfly/patternfly/pull/5377))
- Fixed unexpected background colors ([#5379](https://github.com/patternfly/patternfly/pull/5379))
- Fixed visibility issue for nested drilldown ([#5375](https://github.com/patternfly/patternfly/pull/5375))
- Updated tooltip's arrow size and shadow to match dark theme ([#5359](https://github.com/patternfly/patternfly/pull/5359))
- Fixed `<ul>` and `<ol>` elements with missing markers ([#5357](https://github.com/patternfly/patternfly/pull/5357))
- Removed outdated, breaking styles from _common.scss ([#5339](https://github.com/patternfly/patternfly/pull/5339))

**React** 

- Removed the `KEY_CODES` constant from our constants file. If your code relies on it we suggest that you refactor to use `KeyTypes` as `KeyboardEvent.keyCode` is deprecated. This rule will raise an error when `KEY_CODES` is imported in a file, but it will not make any code changes.[(#8174)](https://github.com/patternfly/patternfly-react/pull/8174)

## Icons

**Core** 

- Moved svg classes to _icons.scss ([#5220](https://github.com/patternfly/patternfly/pull/5220))

**React** 

- Removed the `size`, `color`, and `noVerticalAlign` properties from icons which are imported from @patternfly/react-icons. Wrap your react-icon with the <Icon> component to customize its size and color. This rule will raise a warning when any of these three props are used, but will not make any code changes.[(#5275)](/ https://github.com/patternfly/patternfly-react/pull/5275)

## Fonts

- Removed support for Overpass font ([#5169](https://github.com/patternfly/patternfly/pull/5169))

## Charts 

**React**

- Removed the `getResizeObserver` function from`react-charts` in favor of `react-core`'s `getResizeObserver`. This helper function now has a third parameter, `useRequestAnimationFrame`, and allows a single function to be maintained going forward [(#8533)](https://github.com/patternfly/patternfly-react/pull/8533)

    Previous implementation:

    ```jsx
    import { getResizeObserver } from "@patternfly/react-charts";
    ```

    New implementation:

    ```jsx
    import { getResizeObserver } from "@patternfly/react-core";
    ```

- Renamed all light theme objects to remove `Light` from their name and marked all as `@private`. Instead of using these objects directly, you should use the `getTheme` function from `react-charts`. This rule will throw an error, but will not make any changes [(#8590)](https://github.com/patternfly/patternfly-react/pull/8590)

- Removed `ChartThemeVariant` from `react-charts` [(#8590)](https://github.com/patternfly/patternfly-react/pull/8590)

    Previous implementation:

    ```jsx
    import { Chart, ChartThemeVariant } from '@patternfly/react-charts';
    ```

    New implementation:

    ```jsx
    import { Chart } from '@patternfly/react-charts';
    ```

- Removed all dark theme objects from `react-charts` [(#8590)](https://github.com/patternfly/patternfly-react/pull/8590)

    Previous implementation:
    ```jsx
    import { DarkBlueColorTheme, DarkCyanColorTheme, DarkGoldColorTheme, DarkGrayColorTheme, DarkGreenColorTheme, DarkMultiColorOrderedTheme, DarkMultiColorUnorderedTheme,
    DarkOrangeColorTheme, DarkPurpleColorTheme, ChartLegend } from '@patternfly/react-charts'
    ```

    New implementation:
    ```jsx
    import { ChartLegend } from '@patternfly/react-charts'
    ```

- Removed the deprecated `themeVariant` properties from all `react-charts` components and the removed the `react-charts` `getCustomTheme` function. This functionality is replaced by Core's dark theme support [(#8590)](https://github.com/patternfly/patternfly-react/pull/8590)

    Previous implementation:

    ```jsx
    import { Chart, ChartThemeColor, getCustomTheme } from '@patternfly/react-charts';

    const customTheme = {...};
    const newTheme = getCustomTheme(ChartThemeColor.default, 'light', customTheme);

    return (
    <Chart themeVariant='light' theme={newTheme}/>
    );
    ```

    New implementation:

    ```jsx
    import { Chart, ChartThemeColor, getCustomTheme } from '@patternfly/react-charts';

    const customTheme = {...};
    const newTheme = getCustomTheme(ChartThemeColor.default, customTheme);

    return (
    <Chart theme={newTheme}/>
    );
    ```


## Components

**Core** 

- Updated components using a plain checkbox or radio input to instead use the `.pf-m-standalone` variation of the checkbox/radio ([#5355](https://github.com/patternfly/patternfly/pull/5355))
- Removed `visibility` CSS across components where it was unnecessary ([#5209](https://github.com/patternfly/patternfly/pull/5209))

**React** 

- Updated several ARIA related props so that they will now only be conditionally applied when passed in for the following components:

    | Component | Prop | Condition |
    | -- | -- | -- |
    | `Wizard` | `mainAriaLabel`, `mainAriaLabelledBy` | Only when the Wizard's body contents overflows and causes a scrollbar. A tabindex of "0" will also be applied when the contents oveflows. |
    | `WizardBody` (Next implementation) | `aria-label`, `aria-labelledby` | Only when the WizardBody contents overflows and causes a scrollbar. A tabindex of "0" will also be applied when the contents oveflows. |
    | `MenuItem` | `aria-label` | When `hasCheckbox` is also passed, the prop is applied to the internal `<li>` element. Otherwise it is applied to the element passed into the `component` prop. |
    | `PageGroup`, `PageNavigation` | `aria-label` | Only when `hasOverflowScroll` is true. |

    Additionally, the internal `aria-labelledby` for ProgressStep will only be applied when the `popoverRender` prop is also passed.

    This rule will raise a warning, but will not make any code changes [(#8649)](https://github.com/patternfly/patternfly-react/pull/8649)

- Renamed the `hasCheck` prop for TreeView, MenuItem, and the Next implementation of SelectOption to `hasCheckbox` (#8403)](https://github.com/patternfly/patternfly-react/pull/8403)

    Previous implementation:

    ```jsx
    <SelectOption hasCheck />
    <TreeView hasCheck />
    <MenuItem hasCheck />
    ```

    New implementation:

    ```jsx
    <SelectOption hasCheckbox />
    <TreeView hasCheckbox />
    <MenuItem hasCheckbox />
    ```

- We've promoted the "Next" implementations of our Dropdown, Select, and Wizard components and they are now our default implementation. This rule will update import and/or export paths.
[(#8821)](https://github.com/patternfly/patternfly-react/pull/8821) [(#8825)](https://github.com/patternfly/patternfly-react/pull/8825) [(#8835)](https://github.com/patternfly/patternfly-react/pull/8835)

    Previous implementation:

    ```tsx
    import { Dropdown } from '@patternfly/react-core/next';
    ```

    New implementation:

    ```tsx
    import { Dropdown /* data-codemods */ } from '@patternfly/react-core';
    ```

- Updated the `onToggle` function to include the `event` as its first parameter for the following components: `ApplicationLauncher`, `BadgeToggle`, `DropdownToggle`, `KebabToggle`, `Toggle`, `Select`, and `SelectToggle`. Handlers for these components may require an update [(#8667)](https://github.com/patternfly/patternfly-react/pull/8667)

    Previous implementation:

    ```jsx
    <Toggle onToggle={(isOpen) => onToggle(isOpen)} />

    const toggleBadge = (isOpen) => {};
    <BadgeToggle onToggle={toggleBadge}>

    function toggleDropdown(isOpen) {};
    <DropdownToggle onToggle={toggleDropdown}>
    ```

    New implementation:

    ```jsx
    <Toggle onToggle={(_event, isOpen) => onToggle(isOpen)} />

    const toggleBadge = (_event, isOpen) => {};
    <BadgeToggle onToggle={toggleBadge}>

    function toggleDropdown(_event, isOpen) {};
    <DropdownToggle onToggle={toggleDropdown}>
    ```

- The `react-dropzone` dependency used with FileUpload, MultipleFileUpload, and CodeEditor has been updated from version 9 to version 14. As part of this upgrade, FileUpload has had type changes to its `onFileInputChange` and `dropzoneProps` props, and MultipleFileUpload has had a type change to its `dropzoneProps` prop. This rule will raise a warning when any of these three components are imported, but will not make any code changes [(#7926)](https://github.com/patternfly/patternfly-react/pull/7926)

- Removed the `removeFindDomNode` property as it is now the default behavior. The affected components are as follows:`ApplicationLauncer`, ClipboardCopy, ContextSelector, Dropdown, NavItem, OptionsMenu, Popover, SearchInput, Select, OverflowTab, Timepicker, Tooltip, Truncate.
[(#8371)](https://github.com/patternfly/patternfly-react/pull/8371) [(#8316)](https://github.com/patternfly/patternfly-react/pull/8316)

    Previous implementation:

    ```jsx
    <ApplicationLauncher removeFindDomNode />
    <ClipboardCopy removeFindDomNode />
    <ContextSelector removeFindDomNode />
    <Dropdown removeFindDomNode />
    <NavItem removeFindDomNode />
    <OptionsMenu removeFindDomNode />
    <Popover removeFindDomNode />
    <SearchInput removeFindDomNode />
    <Select removeFindDomNode />
    <OverflowTab removeFindDomNode />
    <Timepicker removeFindDomNode />
    <Tooltip removeFindDomNode />
    <Truncate removeFindDomNode />
    ```

    New implementation:

    ```jsx
    <ApplicationLauncher  />
    <ClipboardCopy  />
    <ContextSelector  />
    <Dropdown  />
    <NavItem  />
    <OptionsMenu  />
    <Popover  />
    <SearchInput  />
    <Select  />
    <OverflowTab  />
    <Timepicker  />
    <Tooltip  />
    <Truncate  />
    ```

- Removed the deprecated `ToggleMenuBaseProps` interface.
[(#8235)](https://github.com/patternfly/patternfly-react/pull/8235)

- Updated the default value of the `getResizeObserver` helper function's third parameter, `useRequestAnimationFrame`. This rule will only provide two suggestions detailing when to pass which boolean into this parameter. [(#8324)](https://github.com/patternfly/patternfly-react/pull/8324)

- We've renamed `disable` prop to `isDisabled` inside `TdSelectType` and `TdActionsType` interfaces. These interfaces are used as types of `Td` component's props `select` (`TdSelectType`) and `actions` (`TdActionsType`) [(#8861,](https://github.com/patternfly/patternfly-react/pull/8861) [#8904)](https://github.com/patternfly/patternfly-react/pull/8904)

    Previous implementation:

    ```jsx
    let myObj = { disable: true };
    myObj["disable"] = false;
    myObj.disable = true;
    myObj = { disable: false };

    <Td select={myObj} actions={{ disable: false }}></Td>;

    const disable = true;
    const obj = { disable };
    <>
    <Td select={obj} actions={{ "disable": true }}></Td>
    <Td select={{disable}}></Td>
    </>;
    ```

    New implementation:

    ```jsx
    let myObj = { isDisabled: true };
    myObj["isDisabled"] = false;
    myObj.isDisabled = true;
    myObj = { isDisabled: false };

    <Td select={myObj} actions={{ isDisabled: false }}></Td>;

    const isDisabled = true;
    const obj = { isDisabled };
    <>
    <Td select={obj} actions={{ "isDisabled": true }}></Td>
    <Td select={{isDisabled}}></Td>
    </>;
    ```


- The following props have been removed from their respective components:

    | Component | Prop |
    |--|--|
    | `FormSelect` | `isIconSprite` |
    | `TextArea` | `isIconSprite` and `isReadOnly` |
    | `TextInput` | `isIconSprite`, `isReadOnly`, `iconVariant`, `customIconUrl`, and `customIconDimensions` |

    The `isReadOnly` prop should be replaced with the `readOnlyVariant` prop, and the `iconVariant` & `customIconUrl` props should be replaced with the `customIcon` prop [(#9132)](https://github.com/patternfly/patternfly-react/pull/9132)

    Previous implementation:

    ```jsx
    <FormSelect isIconSprite />
    <TextArea isIconSprite isReadOnly />
    <TextInput isIconSprite iconVariant customIconUrl customIconDimensions isReadOnly />

    // With an existing readOnlyVariant prop
    <TextArea isReadOnly readOnlyVariant="plain" >
    ```

    New implementation:

    ```jsx
    <FormSelect  />
    <TextArea  readOnlyVariant="default" />
    <TextInput     readOnlyVariant="default" />

    // With an existing readOnlyVariant prop
    <TextArea  readOnlyVariant="plain" >
    ```

- Renamed option `'default'` to `'custom'` for:
    - `AlertVariant` enum
    - `variant` prop of `Alert`, `AlertIcon` and `NotificationDrawerListItemHeader` components
    - `titleIconVariant` prop of `Modal` and `ModalContent` components
    - `alertSeverityVariant` prop of `Popover` component
    [(#8924)](https://github.com/patternfly/patternfly-react/pull/8924)

    Previous implementation:

    ```jsx
    const variantOption = "default";
    const alertVariantOption = AlertVariant.default;

    <>
    <Alert variant={AlertVariant["default"]}></Alert>
    <Alert variant="default"></Alert>
    <AlertIcon variant={"default"}></AlertIcon>
    <Modal titleIconVariant={variantOption}></Modal>
    <ModalContent titleIconVariant="default"></ModalContent>
    <NotificationDrawerListItemHeader variant="default"></NotificationDrawerListItemHeader>
    <Popover alertSeverityVariant="default"></Popover>
    </>;
    ```

    New implementation:

    ```jsx
    const variantOption = "custom";
    const alertVariantOption = AlertVariant.custom;

    <>
    <Alert variant={AlertVariant["custom"]}></Alert>
    <Alert variant="custom"></Alert>
    <AlertIcon variant={"custom"}></AlertIcon>
    <Modal titleIconVariant={variantOption}></Modal>
    <ModalContent titleIconVariant="custom"></ModalContent>
    <NotificationDrawerListItemHeader variant="custom"></NotificationDrawerListItemHeader>
    <Popover alertSeverityVariant="custom"></Popover>
    </>;
    ```

- Renamed the `reference` property to `triggerRef` for Popover and Tooltip 
[(#8733)](https://github.com/patternfly/patternfly-react/pull/8733)

    Previous implementation:

    ```jsx
    <Popover reference={componentRef} />
    <Tooltip reference={componentRef} />
    ```

    New implementation:

    ```jsx
    <Popover triggerRef={componentRef} />
    <Tooltip triggerRef={componentRef} />
    ```


- The markup for the following components has been changed. Selectors may need to be updated.

    - FormSelect
    - TextArea
    - TextInput
    - TimePicker
    - ClipboardCopy
    - DatePicker
    - FileUpload
    - LoginPage
    - NumberInput
    - SearchInput
    - Slider - only when the `isInputVisible` prop is passed in
    - TreeViewSearch
    - Select - only the deprecated implementation with the `hasInlineFilter` prop passed in

    This rule will raise a warning, but will not make any changes. [(#9132)](https://github.com/patternfly/patternfly-react/pull/9132)


### About modal 

**Core** 

- Updated to be a regular block element that is placed inside of the existing modal component ([#5216](https://github.com/patternfly/patternfly/pull/5216))

**React**

- The AboutModalBoxHero sub-component has been removed from AboutModal. Selectors in tests may need to be updated. This rule will raise a warning, but will not make any code changes.[(#8931)](https://github.com/patternfly/patternfly-react/pull/8931)


### Accordion 

**Core** 

- Updated variable names ([#5180](https://github.com/patternfly/patternfly/pull/5180))

**React**

- Renamed the `AccordionExpandedContentBody` component to `AccordionExpandableContentBody` [(#8525)](https://github.com/patternfly/patternfly-react/pull/8525)
 
    Previous implementation:

    ```jsx
    <AccordionExpandedContentBody>Body</AccordionExpandedContentBody>
    ```

    New implementation:

    ```jsx
    <AccordionExpandableContentBody>Body</AccordionExpandableContentBody>
    ```

- Renamed the `large` prop value of `displaySize` to `lg` [(#8212)](https://github.com/patternfly/patternfly-react/pull/8212)

    Previous implementation:

    ```jsx
    <Accordion displaySize="large" />
    ```

    New implementation:

    ```jsx
    <Accordion displaySize="lg" />
    ```

### Alert 

**React** 

- Removed the `aria-label` prop from Alert because it is not well supported by assistive technologies on `<div>` elements [(#8649)](https://github.com/patternfly/patternfly-react/pull/8649)

    Previous implementation:

    ```jsx
    <Alert aria-label="Error alert" />
    ```

    New implementation:

    ```jsx
    <Alert  />
    ```

- Replaced the `titleHeadlingLevel` with the `component` prop [(#8518)](https://github.com/patternfly/patternfly-react/pull/8518)

    Previous implementation:

    ```jsx
    <Alert titleHeadingLevel="h4" />
    ```

    New implementation:

    ```jsx
    <Alert component="h4" />
    ```

### Application launcher 

- Deprecated the `ApplicationLauncher` component. A fix will update code to point to the new deprecated import, but we recommend replacing with `Dropdown` or `Select` [(8836)](https://github.com/patternfly/patternfly-react/pull/8836)

    Previous implementation:

    ```jsx
    import {`ApplicationLauncer` } from '@patternfly/react-core';
    ```

    New implementation:

    ```jsx
    import {`ApplicationLauncer` } from '@patternfly/react-core/deprecated';
    ```

- Updated the `onFavorite` and `onSearch` props for`ApplicationLauncer` to include the `event` as their first parameter. Handlers may require an update [(#8756)](https://github.com/patternfly/patternfly-react/pull/8756)

    Previous implementation:

    ```jsx
    <ApplicationLauncher onFavorite={(id) => handler(id)} onSearch={(text) => searchHandler(text)}/>
    const handler1 = (id) => {};
    const searchHandler1 = (text) => {};
    <ApplicationLauncher onFavorite={handler1} onSearch={searchHandler1}>
    function handler2(id) {};
    function searchHandler2(text) {};
    <ApplicationLauncher onFavorite={handler2} onSearch={searchHandler2}>
    ```

    New implementation:

    ```jsx
    <ApplicationLauncher onFavorite={(_event, id) => handler(id)} onSearch={(_event, text) => searchHandler(text)}/>
    const handler1 = (_event, id) => {};
    const searchHandler1 = (_event, text) => {};
    <ApplicationLauncher onFavorite={handler1} onSearch={searchHandler1}>
    function handler2(_event, id) {};
    function searchHandler2(_event, text) {};
    <ApplicationLauncher onFavorite={handler2} onSearch={searchHandler2}>
    ```

- Updated the internal input in`ApplicationLauncer` to the PatternFly SearchInput. Any relative selectors, such as in unit tests, may need to be updated [(#8293)](https://github.com/patternfly/patternfly-react/pull/8293)

### Background image 

**React**

- Removed the `filter` prop from BackgroundImage. Updated the type of the `src` prop to be a string, and the prop will no longer accept a `BackgroundImageSrcMap` object. This rule won't update the `src` prop, but will raise an error if its value is not a string [(#8931)](https://github.com/patternfly/patternfly-react/pull/8931)

    Previous implementation:

    ```jsx
    <BackgroundImage filter={<SomeFilter />} src={{xs: 'file/path'}} />

    const srcPath = {xs: 'file/path'};
    <BackgroundImage src={srcPath} />
    ```

    New implementation:

    ```jsx
    // An error is raised for the src prop
    <BackgroundImage  src={{xs: 'file/path'}} />

    const srcPath = {xs: 'file/path'};
    // An error is raised for the src prop
    <BackgroundImage src={srcPath} />
    ```

- Removed the `BackgroundImageSrcMap` interface [(#8931)](https://github.com/patternfly/patternfly-react/pull/8931)

    Previous implementation:

    ```jsx
    const backgroundImgSrcObj: BackgroundImageSrcMap = {};
    ```

    New implementation:

    ```jsx
    const backgroundImgSrcObj = {};
    ```

### Banner 

**React** 

- Updated the `variant` prop to replace the following status values with a color value 
[(#8204)](https://github.com/patternfly/patternfly-react/issues/8204):
    | Old status value | New color value |
    | - | - |
    | info | blue |
    | danger | red |
    | success | green |
    | warning | gold |

    Previous implementation:

    ```jsx
    <Banner variant="danger" />
    ```

    New implementation:

    ```jsx
    <Banner variant="red" />
    ```

### Button 

**React** 

- Replaced the `isSmall` and `isLarge` props with the `size` prop using the values `"sm"` and `"lg"`, respectively [(#8144)](https://github.com/patternfly/patternfly-react/pull/8144)

    Previous implementation:

    ```jsx
    <Button isSmall />
    <Button isLarge />
    ```

    New implementation:

    ```jsx
    <Button size="sm" />
    <Button size="lg" />
    ```

### Calendar 

**React** 
- Updated the `onMonthChange` prop for CalendarMonth to include the `event` as its first parameter. Handlers may require an update [(#8753)](https://github.com/patternfly/patternfly-react/pull/8753)

    Previous implementation:

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

    New implementation:

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

- Improved card header implementation and made `.pf-c-card__header-main` required when there is a `.pf-c-card__header`. Added gap spacing ([#5280](https://github.com/patternfly/patternfly/pull/5280))

**React**

- The following props have been deprecated on Card:

    - isSelectableRaised
    - isDisabledRaised
    - hasSelectableInput
    - selectableInputAriaLabel
    - onSelectableInputChange

    We recommend using our new implementation of clickable and selectable cards instead. This rule will raise a warning, but can provide fixes when using the `isSelectableRaised` or `isDisabledRaised` props. [(#9092)](https://github.com/patternfly/patternfly-react/pull/9092)

    Previous implementation:

    ```jsx
    <Card isSelectableRaised isDisabledRaised />
    <Card isSelectableRaised hasSelectableInput />
    ```

    New implementation:

    ```jsx
    <Card isSelectable isDisabled />
    <Card isSelectable hasSelectableInput tabIndex={0} />
    ```

- Removed the deprecated `isHoverable` prop [(#8196)](https://github.com/patternfly/patternfly-react/pull/8196)
  
    Previous implementation:

    ```jsx
    <Card isHoverable />
    ```

    New implementation:

    ```jsx
    <Card  />
    ```

- Updated the `onSelectableInputChange` prop include the `event` as its first parameter. Handlers may require an update [(#8752)](https://github.com/patternfly/patternfly-react/pull/8752)

    Previous implementation:

    ```jsx
    <Card onSelectableInputChange={(id) => handler(id)} />
    const handler1 = (id) => {};
    <Card onSelectableInputChange={handler1}>
    function handler2(id) {};
    <Card onSelectableInputChange={handler2}>
    ```

    New implementation:

    ```jsx
    <Card onSelectableInputChange={(_event, id) => handler(id)} />
    const handler1 = (_event, id) => {};
    <Card onSelectableInputChange={handler1}>
    function handler2(_event, id) {};
    <Card onSelectableInputChange={handler2}>
    ```

- Changed the internal default value of the `component` prop from 'article' to 'div'. Related references, such as in unit tests, may need to be updated [(#8601)](https://github.com/patternfly/patternfly-react/pull/8601)

- Updated `CardHeaderMain` and `CardActions` to berendered internally within the `CardHeader` sub-component, rather than being imported from PatternFly. Any `CardHeaderMain` content and `CardActions` content or props should be passed directly to `CardHeader` instead [(#8759)](https://github.com/patternfly/patternfly-react/pull/8759)

    Previous implementation:

    ```jsx
    <CardHeader>
    <CardHeaderMain>Header content</CardHeaderMain>
    <CardActions className="test" hasNoOffset><Button>Card action</Button></CardActions>
    </CardHeader>
    ```

    New implementation:

    ```jsx
    <CardHeader actions={{ actions: <><Button>Card action</Button></>, hasNoOffset: true, className: "test"}} >
    Header content
    
    </CardHeader>
    ```


### Checkbox

**Core** 

- Updated description and body to fill available page section width ([#5233](https://github.com/patternfly/patternfly/pull/5233))

**React** 

- Updated the `onChange` to include `event` as its first parameter. Handlers may require an update [(#8750)](https://github.com/patternfly/patternfly-react/pull/8750)

    Previous implementation:

    ```jsx
    <Checkbox onChange={(id) => handler(id)} />
    <Checkbox onChange={(id, event) => handler(id, event)} />
    const handler1 = (id, event) => {};
    <Checkbox onChange={handler1}>
    function handler2(id, event) {};
    <Checkbox onChange={handler2}>
    ```

    New implementation:

    ```jsx
    <Checkbox onChange={(_event, id) => handler(id)} />
    <Checkbox onChange={(event, id) => handler(id, event)} />
    const handler1 = (_event, id) => {};
    <Checkbox onChange={handler1}>
    function handler2(_event, id) {};
    <Checkbox onChange={handler2}>
    ```


### Clipboard

**React** 

- Updated the `onChange` prop for `ClipboardCopy` to include  `event` as its first parameter. `onChange` handlers may require an update [(#8747)](https://github.com/patternfly/patternfly-react/pull/8747)

    Previous implementation:

    ```jsx
    <ClipboardCopy onChange={(text) => handleChange(text)} />
    const handleChange1 = (text) => {};
    <ClipboardCopy onChange={toggle1}>
    function handleChange2(text) {};
    <ClipboardCopy onChange={toggle2}>
    ```

    New implementation:

    ```jsx
    <ClipboardCopy onChange={(_event, text) => handleChange(text)} />
    const handleChange1 = (_event, text) => {};
    <ClipboardCopy onChange={toggle1}>
    function handleChange2(_event, text) {};
    <ClipboardCopy onChange={toggle2}>
    ```

- Removed the `PopoverPosition` type for the `position` prop on  `ClipboardCopy` and `ClipboardCopyButton` [(#8226)](https://github.com/patternfly/patternfly-react/pull/8226)

    Previous implementation:

    ```jsx
    <ClipboardCopy position={PopoverPosition.top} />
    <ClipboardCopyButton position={PopoverPosition.bottom} />
    ```

    New implementation:

    ```jsx
    <ClipboardCopy position="top" />
    <ClipboardCopyButton position="bottom" />
    ``` 

- Removed the `switchDelay` prop from the `ClipBoardCopy` component [(#8619)](https://github.com/patternfly/patternfly-react/pull/8619)

    Previous implementation:

    ```jsx
    <ClipboardCopy switchDelay="500" />
    ```

    New implementation:

    ```jsx
    <ClipboardCopy  />
    ```

### Chip

**Core** 

- Removed legacy examples and add support for the `__main` element ([#5356](https://github.com/patternfly/patternfly/pull/5356))
- Replaced margins in examples with gap spacing ([#5293](https://github.com/patternfly/patternfly/pull/5293))

### Code block

**Core** 

- Fixed class references ([#5349](https://github.com/patternfly/patternfly/pull/5349))

### Code editor 

**React**

- Removed the deprecated `entryDelay`, `exitDelay`, `maxWidth`, `position`, and `toolTipText` props. This rule will remove them from your code and suggest that you use the `tooltipProps` prop instead [(#8624)](https://github.com/patternfly/patternfly-react/pull/8624)

    Previous implementation:

    ```jsx
    <CodeEditor entryDelay="500" exitDelay="500" maxWidth="15rem" position="top" toolTipText="hi" />
    ```

    New implementation:

    ```jsx
    <CodeEditor      />
    ```

### Context selector 

**React** 

- Deprecated the v4 implementation of `ContextSelector`. To continue using the deprecated implementation, update the import path to our deprecated package and ensure that specifiers are aliased. We suggest updating to our composable `Menu` implementation instead [(#8840)](https://github.com/patternfly/patternfly-react/pull/8840)

    The following imports will be affected by this deprecation:

    - ContextSelector
    - ContextSelectorItem
    - ContextSelectorFooter

    Previous implementation:

    ```jsx
    import { ContextSelector, ContextSelectorItem } from '@patternfly/react-core';
    ```

    New implementation:

    ```jsx
    import { ContextSelector, ContextSelectorItem } from '@patternfly/react-core/deprecated';
    ```

### Data list 

**React**

- Removed the deprecated `onDragFinish`, `onDragStart`, `onDragMove`, `onDragCancel`, and `itemOrder` props. This rule will suggest using the `DragDrop` component instead of the `onDrag...` props [(#8388)](https://github.com/patternfly/patternfly-react/pull/8388)

    Previous implementation:

    ```jsx
    <DataList onDragFinish onDragStart onDragMove onDragCancel itemOrder />
    ```

    New implementation:

    ```jsx
    <DataList      />
    ```

- Replaced the `selectableRow` prop with `onSelectableRowChange`. The value of the `selectableRow`'s `onChange` field was a callback, which can now be directly passed to the `onSelectableRowChange` prop. The order of the params in the callback has been updated so that the event param is first [(#8827)](https://github.com/patternfly/patternfly-react/pull/8827)

    Previous implementation:

    ```jsx
    <DataList selectableRow={{ onChange: (id, event) => {} }} />

    const selectableRowObject = { onChange: (id, event) => {}};
    <DataList selectableRow={selectableRowObject} />

    const onChange = (id, event) => {};
    const selectableRowObject = { onChange: onChange};
    <DataList selectableRow={selectableRowObject} />
    ```

    New implementation:

    ```jsx
    <DataList onSelectableRowChange={ (event, id) => {} } />

    const onSelectableRowChange = (event, id) => {};
    <DataList onSelectableRowChange={onSelectableRowChange} />

    const onChange = (event, id) => {};
    <DataList onSelectableRowChange={onChange} />

    ```

- Updated the `onSelectDataListItem` prop to include the `event` as its first parameter. Handlers may require an update [(#8723)](https://github.com/patternfly/patternfly-react/pull/8723)

    Previous implementation:

    ```jsx
    <DataList onSelectDataListItem={(id) => onSelect(id)} />

    const toggle1 = (id) => {};
    <DataList onSelectDataListItem={toggle1}>

    function toggle2(id) {};
    <DataList onSelectDataListItem={toggle2}>
    ```

    New implementation:

    ```jsx
    <DataList onSelectDataListItem={(_event, id) => onSelect(id)} />

    const toggle1 = (_event, id) => {};
    <DataList onSelectDataListItem={toggle1}>

    function toggle2(_event, id) {};
    <DataList onSelectDataListItem={toggle2}>
    ```

- Updated the `onChange` prop for `DataListCheck` so that the `event` parameter is the first parameter. Handlers may require an update [(#8735)](https://github.com/patternfly/patternfly-react/pull/8735)

    Previous implementation:

    ```jsx
    <DataListCheck onChange={(checked) => onChange(checked)} />

    const onChange1 = (checked) => {};
    <DataListCheck onChange={onChange1}>

    function onChange2(checked) {};
    <DataListCheck onChange={onChange2}>
    ```

    New implementation:

    ```jsx
    <DataListCheck onChange={(_event, checked) => onChange(checked)} />

    const onChange1 = (_event, checked) => {};
    <DataListCheck onChange={onChange1}>

    function onChange2(_event, checked) {};
    <DataListCheck onChange={onChange2}>
    ```

### Date picker 

**React**

- Updated the default value of the `appendTo` prop, which may cause markup changes and require you to update selectors in tests. This rule will raise a warning, but will not make any changes [(#8636)](https://github.com/patternfly/patternfly-react/pull/8636)

- The `helperText` property of `DatePicker` now expects the <HelperText> component. This rule will raise a warning, but will not make any code changes [(#8833)](https://github.com/patternfly/patternfly-react/pull/8833)

### Divider 

**React** 

- Replaced the `isVertical` flag with the `orientation` property that can define verticality on different breakpoints [(#8199)](https://github.com/patternfly/patternfly-react/pull/8199)

    ```jsx
    <Divider isVertical />
    ```

    New implementation:

    ```jsx
    <Divider orientation={{ default: "vertical" }} />
    ```

### Drawer 

**React** 

- Updated the `onResize` prop for `DrawerPanelContent `to include the `event` as its first parameter. Handlers may require an update [(#8736)](https://github.com/patternfly/patternfly-react/pull/8736)

    Previous implementation:

    ```jsx
    <DrawerPanelContent onResize={(width, id) => onChange(checked)} />

    const onResize1 = (width, id) => {};
    <DrawerPanelContent onResize={onResize1}>

    function onResize2(width, id) {};
    <DrawerPanelContent onResize={onResize2}>
    ```

    New implementation:

    ```jsx
    <DrawerPanelContent onResize={(_event, width, id) => onChange(checked)} />

    const onResize1 = (_event, width, id) => {};
    <DrawerPanelContent onResize={onResize1}>

    function onResize2(_event, width, id) {};
    <DrawerPanelContent onResize={onResize2}>
    ```

### Dropdown 

**React**

- Deprecated the v4 implementation of dropdown. To continue using the deprecated implementation, update the import path to our deprecated package and ensure that specifiers are aliased. However, we suggest updating to our newer implementation of dropdown. The following imports will be affected by this deprecation:

    - BadgeToggle
    - Dropdown
    - DropdownPosition
    - DropdownDirection
    - DropdownContext
    - DropdownArrowContext
    - DropdownGroup
    - DropdownItem
    - DropdownMenu
    - DropdownSeparator
    - DropdownToggle
    - DropdownToggleAction
    - DropdownToggleCheckbox
    - DropdownWithContext
    - KebabToggle

    [(#8835)](https://github.com/patternfly/patternfly-react/pull/8835)

    Previous implementation:

    ```jsx
    import { Dropdown, DropdownPosition, Button } from '@patternfly/react-core';
    ```

    New implementation:

    ```jsx
    import { Button } from '@patternfly/react-core';
    import { Dropdown, DropdownPosition } from '@patternfly/react-core/deprecated';
    ```

- Removed the `isHovered` prop for `DropdownItem` [(#8179)](https://github.com/patternfly/patternfly-react/pull/8179)

    Previous implementation:

    ```jsx
    <DropdownItem isHovered={isHovered} />
    ```

    New implementation:
    ```jsx
    <DropdownItem  />
    ```

- Removed the `openedOnEnter` prop for  `DropdownMenu` [(#8179)](https://github.com/patternfly/patternfly-react/pull/8179)

    Previous implementation:

    ```jsx
    <DropdownMenu openedOnEnter={false} />
    ```

    New implementation:
    ```jsx
    <DropdownMenu  />
    ```

- Replaced the deprecated `isPrimary` prop with the "primary" value on the `toggleVariant` prop  [(#8179)](https://github.com/patternfly/patternfly-react/pull/8179)

    Previous implementation:

    ```jsx
    <DropdownToggle isPrimary />
    ```

    New implementation:

    ```jsx
    <DropdownToggle toggleVariant="primary" />
    ```

-  Updated the `onChange` prop for `DropdownToggleCheckbox` to include the `event` as its first parameter. Handlers may require an update [(#8784)](https://github.com/patternfly/patternfly-react/issues/8784)

    Previous implementation:

    ```jsx
    <DropdownToggleCheckbox onChange={(id) => handler(id)} />
    <DropdownToggleCheckbox onChange={(id, event) => handler(id, event)} />
    const handler1 = (id, event) => {};
    <DropdownToggleCheckbox onChange={handler1}>
    ```


    New implementation:

    ```jsx
    <DropdownToggleCheckbox onChange={(_event, id) => handler(id)} />
    <DropdownToggleCheckboxDeprecated onChange={(event, id) => handler(id, event)} />
    const handler1 = (event, id) => {};
    <DropdownToggleCheckbox onChange={handler1}>
    ```

### Dual list selector 

**React**

- Updated the `onAvailableOptionsSearchInputChanged`, `onChosenOptionsSearchInputChanged` and `onListChange` props so that the `event` parameter is the first parameter. Handlers may require an update [(#8793)](https://github.com/patternfly/patternfly-react/pull/8793)

    Previous implementation:

    ```jsx
    <DualListSelector onAvailableOptionsSearchInputChanged={(id) => handler(id)} />
    <DualListSelector onAvailableOptionsSearchInputChanged={(id, event) => handler(id, event)} />
    const handler1 = (id, event) => {};
    <DualListSelector onAvailableOptionsSearchInputChanged={handler1}>
    function handler2(id, event) {};
    <DualListSelector onAvailableOptionsSearchInputChanged={handler2}>

    <DualListSelector onChosenOptionsSearchInputChanged={(id) => handler(id)} />
    <DualListSelector onChosenOptionsSearchInputChanged={(id, event) => handler(id, event)} />
    const handler1 = (id, event) => {};
    <DualListSelector onChosenOptionsSearchInputChanged={handler1}>
    function handler2(id, event) {};
    <DualListSelector onChosenOptionsSearchInputChanged={handler2}>

    <DualListSelector onListChange={(id) => handler(id)} />
    const handler1 = (id) => {};
    <DualListSelector onListChange={handler1}>
    function handler2(id) {};
    <DualListSelector onListChange={handler2}>
    ```

    New implementation:

    ```jsx
    <DualListSelector onAvailableOptionsSearchInputChanged={(_event, id) => handler(id)} />
    <DualListSelector onAvailableOptionsSearchInputChanged={(event, id) => handler(id, event)} />
    const handler1 = (_event, id) => {};
    <DualListSelector onAvailableOptionsSearchInputChanged={handler1}>
    function handler2(_event, id) {};
    <DualListSelector onAvailableOptionsSearchInputChanged={handler2}>

    <DualListSelector onChosenOptionsSearchInputChanged={(_event, id) => handler(id)} />
    <DualListSelector onChosenOptionsSearchInputChanged={(event, id) => handler(id, event)} />
    const handler1 = (_event, id) => {};
    <DualListSelector onChosenOptionsSearchInputChanged={handler1}>
    function handler2(_event, id) {};
    <DualListSelector onChosenOptionsSearchInputChanged={handler2}>

    <DualListSelector onListChange={(_event, id) => handler(id)} />
    const handler1 = (_event, id) => {};
    <DualListSelector onListChange={handler1}>
    function handler2(_event, id) {};
    <DualListSelector onListChange={handler2}>
    ```



### Empty state 

**Core** 

- Updated code and CSS variables for examples ([#5307](https://github.com/patternfly/patternfly/pull/5307))

**React**

- Replaced the `EmptyStatePrimary` and `EmptyStateSecondaryActions` components with `EmptyStateActions` [(#8737)](https://github.com/patternfly/patternfly-react/pull/8737)


    Previous implementation:

    ```jsx
    import { EmptyStatePrimary as Primary, EmptyStateSecondaryActions } from '@patternfly/react-core';
    <>
    <Primary>Primary action</Primary>
    <EmptyStateSecondaryActions>Other actions</EmptyStateSecondaryActions>
    </>
    ```

    New implementation:

    ```jsx
    import { EmptyStateActions } from '@patternfly/react-core';
    <>
    <EmptyStateActions>Primary action</EmptyStateActions>
    <EmptyStateActions>Other actions</EmptyStateActions>
    </>
    ```

- Added the `EmptyStateHeader` component, which should be passed as an `EmptyStateIcon` to the `icon` prop. The main title should be passed to `titleText` prop. You can also explicitly specify a title's heading level with the `headingLevel` prop. Added the `EmptyStateFooter` component. It should wrap the content of an `EmptyStateBody` inside an `EmptyState`. This rule produces only warnings, but suggested changes are fixable via the `--fix` flag [(#8737)](https://github.com/patternfly/patternfly-react/pull/8737)

    Previous implementation:

    ```jsx
    import { EmptyState, EmptyStateActions, EmptyStateBody, EmptyStateIcon, Title } from '@patternfly/react-core';

    <EmptyState>
    <EmptyStateIcon icon={CubesIcon} />
    <Title headingLevel="h5" size="4xl">
        Empty state
    </Title>
    <EmptyStateBody>
        Some content
    </EmptyStateBody>
    <EmptyStateActions>
        Primary action
    </EmptyStateActions>
    <EmptyStateActions>
        Other actions
    </EmptyStateActions>
    </EmptyState>
    ```

    New implementation:

    ```jsx
    import { EmptyState, EmptyStateActions, EmptyStateBody, EmptyStateIcon, EmptyStateHeader, EmptyStateFooter,  } from '@patternfly/react-core';

    <EmptyState>
    <EmptyStateHeader titleText="Empty state" icon={<EmptyStateIcon icon={CubesIcon} />} headingLevel="h5" />
    <EmptyStateBody>
        Some content
    </EmptyStateBody><EmptyStateFooter>
    <EmptyStateActions>
        Primary action
    </EmptyStateActions>
    <EmptyStateActions>
        Other actions
    </EmptyStateActions>
    </EmptyStateFooter></EmptyState>
    ```

- We've made the `icon` prop required on `EmptyStateIcon`. This rule will throw an error, but will not make any changes [(#8737)](https://github.com/patternfly/patternfly-react/pull/8737)

- Removed the `variant` prop from `EmptyStateIcon`. Replaced the `component` prop of `EmptyStateIcon` with the `icon` prop [(#8737)](https://github.com/patternfly/patternfly-react/pull/8737)

    Previous implementation:

    ```jsx
    <EmptyStateIcon icon={CubesIcon} variant="icon"/>
    <EmptyStateIcon component={Spinner} variant="container"/>
    ```

    New implementation:

    ```jsx
    <EmptyStateIcon icon={CubesIcon} />
    <EmptyStateIcon icon={Spinner} />
    ```

- Renamed the `EmptyStateVariant` enum and prop values 'small' to 'sm' and 'large' to 'lg' [(#8737)](https://github.com/patternfly/patternfly-react/pull/8737)

    Previous implementation:

    ```jsx
    const myVariant = EmptyStateVariant.small;
    <EmptyState variant={EmptyStateVariant.large} />
    <EmptyState variant="small" />
    <EmptyState variant="large" />
    ```

    New implementation:

    ```jsx
    const myVariant = EmptyStateVariant.sm;
    <EmptyState variant={EmptyStateVariant.lg} />
    <EmptyState variant="sm" />
    <EmptyState variant="lg" />
    ```

### Expandable section

**React**

- Renamed the `large` prop value of `displaySize` to `lg` [(#8212)](https://github.com/patternfly/patternfly-react/pull/8212)
    Previous implementation:

    ```jsx
    <ExpandableSection displaySize="large" />
    ```

    New implementation:

    ```jsx
    <ExpandableSection displaySize="lg" />
    ```

- (Not yet included in `pf-react`) Updated the `onToggle` prop for ExpandableSection so that the `event` parameter is the first parameter. Handlers may require an update [(#8880)](https://github.com/patternfly/patternfly-react/pull/8880)

    Previous implementation:

    ```jsx
    <ExpandableSection onToggle={(id) => handler(id)} />
    const handler1 = (id) => {};
    <ExpandableSection onToggle={handler1} />
    function handler2(id) {};
    <ExpandableSection onToggle={handler2} />
    ```

    New implementation:

    ```jsx
    <ExpandableSection onToggle={(_event, id) => handler(id)} />
    const handler1 = (_event, id) => {};
    <ExpandableSection onToggle={handler1} />
    function handler2(_event, id) {};
    <ExpandableSection onToggle={handler2} />
    ```

### File upload 

**React** 

- Updated the `onTextChange` prop for `FileUploadField` and `FileUpload` so that the `event` parameter is the first parameter. Handlers may require an update [(#8955)](https://github.com/patternfly/patternfly-react/pull/8955)


    Previous implementation:

    ```jsx
    <FileUpload onTextChange={text => textHandler(text)} />
    <FileUploadField onTextChange={text => textHandler1(text)} />
    const textHandler2 = (text) => {};
    const textHandler3 = (text) => {};
    <FileUpload onTextChange={textHandler2} />
    <FileUploadField onTextChange={textHandler3} />
    function textHandler4(text) {};
    function textHandler5(text) {};
    <FileUpload onTextChange={textHandler4} />
    <FileUploadField onTextChange={textHandler5} />
    ```

    New implementation:

    ```jsx
    <FileUpload onTextChange={(_event, text) => textHandler(text)} />
    <FileUploadField onTextChange={(_event, text) => textHandler1(text)} />
    const textHandler2 = (_event, text) => {};
    const textHandler3 = (_event, text) => {};
    <FileUpload onTextChange={textHandler2} />
    <FileUploadField onTextChange={textHandler3} />
    function textHandler4(_event, text) {};
    function textHandler5(_event, text) {};
    <FileUpload onTextChange={textHandler4} />
    <FileUploadField onTextChange={textHandler5} />
    ```

- Updated the `onDataChange`, `onReadFailed`, `onReadFinished`, and `onReadStarted` props for `FileUpload` so that the `event` parameter is the first parameter. Handlers may require an update [(#8960)](https://github.com/patternfly/patternfly-react/pull/8960)

    Previous implementation:

    ```jsx
    <FileUpload
    onDataChange={(data) => changeHandler(data)}
    onReadFailed={(error, fileHandle) => readFailedHandler(error, fileHandle)}
    onReadFinished={(fileHandle) => readFinishedHandler(fileHandle)}
    onReadStarted={(fileHandle) => readStartedHandler(fileHandle)}
    />;

    const changeHandler1 = (data) => {};
    const readFailedHandler1 = (error, fileHandle) => {};
    const readFinishedHandler1 = (fileHandle) => {};
    const readStartedHandler1 = (fileHandle) => {};
    <FileUpload
    onDataChange={changeHandler1}
    onReadFailed={readFailedHandler1}
    onReadFinished={readFinishedHandler1}
    onReadStarted={readStartedHandler1}
    />

    function changeHandler2(data) {};
    function readFailedHandler2(error, fileHandle) {};
    function readFinishedHandler2(fileHandle) {};
    function readStartedHandler2(fileHandle) {};
    <FileUpload
    onDataChange={changeHandler2}
    onReadFailed={readFailedHandler2}
    onReadFinished={readFinishedHandler2}
    onReadStarted={readStartedHandler2}
    />;
    ```

    New implementation:

    ```jsx
    <FileUpload
    onDataChange={(_event, data) => changeHandler(data)}
    onReadFailed={(_event, error, fileHandle) => readFailedHandler(error, fileHandle)}
    onReadFinished={(_event, fileHandle) => readFinishedHandler(fileHandle)}
    onReadStarted={(_event, fileHandle) => readStartedHandler(fileHandle)}
    />;

    const changeHandler1 = (_event, data) => {};
    const readFailedHandler1 = (_event, error, fileHandle) => {};
    const readFinishedHandler1 = (_event, fileHandle) => {};
    const readStartedHandler1 = (_event, fileHandle) => {};
    <FileUpload
    onDataChange={changeHandler1}
    onReadFailed={readFailedHandler1}
    onReadFinished={readFinishedHandler1}
    onReadStarted={readStartedHandler1}
    />;

    function changeHandler2(_event, data) {};
    function readFailedHandler2(_event, error, fileHandle) {};
    function readFinishedHandler2(_event, fileHandled) {};
    function readStartedHandler2(_event, fileHandle) {};
    <FileUpload
    onDataChange={changeHandler2}
    onReadFailed={readFailedHandler2}
    onReadFinished={readFinishedHandler2}
    onReadStarted={readStartedHandler2}
    />;
    ```

- Removed the deprecated `onChange` prop. This rule will remove the prop from the `FileUpload` component and suggest replacing it with the `onFileInputChange`, `onTextChange`, `onDataChange`, and `onClearClick` props as needed (#8155)](https://github.com/patternfly/patternfly-react/pull/8155)

    Previous implementation:

    ```jsx
    <FileUpload onChange={onChange} />
    ```

    New implementation:

    ```jsx
    <FileUpload  />
    ```

### Form  

**React** 

- Removed the helper text related props from `FormGroup`: `helperText`, `helperTextInvalid`, `validated`, `helperTextIcon`, `helperTextInvalidIcon`, and `isHelperTextBeforeField`. The `FormHelperText`, `HelperText`, and `HelperTextItem` components should now be used directly as part of `children` instead of these props. This rule will throw an error but not make any changes [(#8810)](https://github.com/patternfly/patternfly-react/pull/8810)

#### Example manual fix

    Previous implementation:
    ```jsx
    <FormGroup
    helperTextInvalid={helpText !== null && typeof helpText === 'object' ? intl.formatMessage(helpText) : helpText}
    validated={validated}
    >
    <TextInput
        validated={validated}
        value={value}
        onChange={onChange}
        isRequired={isRequired}
        placeholder={placeholder}
    />
    </FormGroup>
    ```

    New implementation:
    ```jsx
    <FormGroup>
    <TextInput
        validated={validated}
        value={value}
        onChange={onChange}
        isRequired={isRequired}
        placeholder={placeholder}
    />
    {validated === 'error' && helpText && (
        <FormHelperText>
        <HelperText>
            <HelperTextItem variant="error">
            {helpText}
            </HelperTextItem>
        </HelperText>
        </FormHelperText>
    )}
    </FormGroup>
    ```

- Removed functionality from `FormHelperText` as now the logic will be covered by `HelperText` and `HelperTextItem`. This rule will remove the `isError`, `isHidden`, `icon`, and `component` props if present. The `HelperText` and `HelperTextItem` components should now be used directly as part of `children` instead of these props [(#8810)](https://github.com/patternfly/patternfly-react/pull/8810)

    Previous implementation:

    ```jsx
    <FormHelperText isError={true} isHidden={false} icon={<Icon />} component="div" />
    ```

    New implementation:

    ```jsx
    <FormHelperText     />
    ```

### Form Select 

**React** 

- Updated the `onChange` prop for FormSelect so that the `event` parameter is the first parameter. Handlers may require an update [(#8998)](https://github.com/patternfly/patternfly-react/pull/8998)

    Previous implementation:

    ```jsx
    <FormSelect onChange={(id) => handler(id)} />
    <FormSelect onChange={(id, event) => handler(id, event)} />
    const handler1 = (id, event) => {};
    <FormSelect onChange={handler1} />
    function handler2(id, event) {};
    <FormSelect onChange={handler2} />
    ```

    New implementation:

    ```jsx
    <FormSelect onChange={(_event, id) => handler(id)} />
    <FormSelect onChange={(event, id) => handler(id, event)} />
    const handler1 = (_event, id) => {};
    <FormSelect onChange={handler1} />
    function handler2(_event, id) {};
    <FormSelect onChange={handler2} />
    ```

### Input group 

**React** 

- We've added the InputGroupItem component, which must wrap all non-InputGroupText children passed to an InputGroup. The InputGroupItem component may need to have the `isFill`, `isBox`, and/or `isPlain` props adjusted to retain styling [(#9074)](https://github.com/patternfly/patternfly-react/pull/9074) and [(#9176)](https://github.com/patternfly/patternfly-react/pull/9176)

    Previous implementation:

    ```jsx
    <InputGroup>
    <input />
    <textarea />
    <TextArea />
    <TextInput />
    <InputGroupText>Some text</InputGroupText>
    <button />
    </InputGroup>
    ```

    New implementation:

    ```jsx
    <InputGroup>
    <InputGroupItem isFill><input /></InputGroupItem>
    <InputGroupItem isFill><textarea /></InputGroupItem>
    <InputGroupItem isFill><TextArea /></InputGroupItem>
    <InputGroupItem isFill><TextInput /></InputGroupItem>
    <InputGroupText>Some text</InputGroupText>
    <InputGroupItem><button /></InputGroupItem>
    </InputGroup>
    ```

- Removed the `variant` prop for InputGroupText [(#9147)](https://github.com/patternfly/patternfly-react/pull/9147)

    Previous implementation:

    ```jsx
    <InputGroupText variant={InputGroupTextVariant.plain} />
    ```

    New implementation:

    ```jsx
    <InputGroupText  />
    ```



### Label

**Core** 

- Removed close button from editable active example ([#5354](https://github.com/patternfly/patternfly/pull/5354))
- Replaced margins in examples with gap spacing ([#5296](https://github.com/patternfly/patternfly/pull/5296))

**React**

- Removed the `isTruncated` property from Label. This is now the default behavior. In addition, you can limit the text width using the new `textMaxWidth` property [(#8771)](https://github.com/patternfly/patternfly-react/pull/8771)

    Previous implementation:

    ```jsx
    <Label isTruncated />
    ```

    New implementation:

    ```jsx
    <Label  />
    ```

### Login form 

**React** 

-  Updated the `onChangeUsername`, `onChangePassword`, and `onChangeRememberMe` props for LoginForm so that the `event` parameter is the first parameter. Handlers may require an update [(#8996)](https://github.com/patternfly/patternfly-react/pull/8996)

    Previous implementation:

    ```jsx
    <LoginForm onChangeUsername={(id) => handler(id)} />
    <LoginForm onChangeUsername={(id, event) => handler(id, event)} />
    const usernameHandler1 = (id, event) => {};
    <LoginForm onChangeUsername={usernameHandler1} />
    function usernameHandler2(id, event) {};
    <LoginForm onChangeUsername={usernameHandler2} />

    <LoginForm onChangePassword={(id) => handler(id)} />
    <LoginForm onChangePassword={(id, event) => handler(id, event)} />
    const passwordHandler1 = (id, event) => {};
    <LoginForm onChangePassword={passwordHandler1} />
    function passwordHandler2(id, event) {};
    <LoginForm onChangePassword={passwordHandler2} />

    <LoginForm onChangeRememberMe={(id) => handler(id)} />
    <LoginForm onChangeRememberMe={(id, event) => handler(id, event)} />
    const rememberMeHandler1 = (id, event) => {};
    <LoginForm onChangeRememberMe={rememberMeHandler1} />
    function rememberMeHandler2(id, event) {};
    <LoginForm onChangeRememberMe={rememberMeHandler2} />
    ```

    New implementation:

    ```jsx
    <LoginForm onChangeUsername={(_event, id) => handler(id)} />
    <LoginForm onChangeUsername={(event, id) => handler(id, event)} />
    const usernameHandler1 = (_event, id) => {};
    <LoginForm onChangeUsername={usernameHandler1} />
    function usernameHandler2(_event, id) {};
    <LoginForm onChangeUsername={usernameHandler2} />

    <LoginForm onChangePassword={(_event, id) => handler(id)} />
    <LoginForm onChangePassword={(event, id) => handler(id, event)} />
    const passwordHandler1 = (_event, id) => {};
    <LoginForm onChangePassword={passwordHandler1} />
    function passwordHandler2(_event, id) {};
    <LoginForm onChangePassword={passwordHandler2} />

    <LoginForm onChangeRememberMe={(_event, id) => handler(id)} />
    <LoginForm onChangeRememberMe={(event, id) => handler(id, event)} />
    const rememberMeHandler1 = (_event, id) => {};
    <LoginForm onChangeRememberMe={rememberMeHandler1} />
    function rememberMeHandler2(_event, id) {};
    <LoginForm onChangeRememberMe={rememberMeHandler2} />
    ```

### Login page 

**React**

- Removed the `backgroundImgAlt` prop from LoginPage. Additionally, Updated the type of the `backgroundImgSrc` prop to just a string, and the prop will no longer accept a `BackgroundImageSrcMap` object. This rule won't update the `backgroundImgSrc` prop, but will raise an error if its value is not a string  [(#8931)](https://github.com/patternfly/patternfly-react/pull/8931)

    Previous implementation:

    ```jsx
    <LoginPage backgroundImgAlt="Alt text" backgroundImgSrc={{xs: 'file/path'}} />

    const srcPath = {xs: 'file/path'};
    <LoginPage backgroundImgSrc={srcPath} />
    ```

    New implementation:

    ```jsx
    // An error is raised for the backgroundImgSrc prop
    <LoginPage  backgroundImgSrc={{xs: 'file/path'}} />

    const srcPath = {xs: 'file/path'};
    // An error is raised for the backgroundImgSrc prop
    <LoginPage backgroundImgSrc={srcPath} />
    ```

### Masthead 

**React** 

- Updated `MastheadBrand` to only be an anchor if an `href` is specified, otherwise it will be a `span`. Explicitly declared `component` properties will remain unchanged, but if it is not specified a default will be added [(#8655)](https://github.com/patternfly/patternfly-react/pull/8655)

    Previous implementation:

    ```jsx
    <MastheadBrand />
    <MastheadBrand component="div" />
    ```

    New implementation:

    ```jsx
    <MastheadBrand component="a" />
    <MastheadBrand component="div" />
    ```

### Menu 

**React** 

- Removed the `aria-label` prop on Menu as it should be passed to MenuList instead. If you are also using MenuGroup with a `label` prop passed to it, an `aria-label` on MenuList is not necessary [(#8649)](https://github.com/patternfly/patternfly-react/pull/8649)


    Previous implementation:

    ```jsx
    <Menu aria-label="tester">
    <MenuList>
        ...menu items placed here
    </MenuList>
    </Menu>

    <Menu aria-label="tester">
    <MenuList>
        ...menu items placed here
    </MenuList>
    <MenuList>
        ...menu items placed here
    </MenuList>
    </Menu>

    <Menu aria-label="tester">
    <MenuGroup>
        <MenuList>
        ...menu items placed here
        </MenuList>
    </MenuGroup>
    </Menu>
    ```

    New implementation:

    ```jsx
    <Menu >
    <MenuList aria-label="tester">
        ...menu items placed here
    </MenuList>
    </Menu>

    <Menu >
    <MenuList>
        ...menu items placed here
    </MenuList>
    <MenuList>
        ...menu items placed here
    </MenuList>
    </Menu>

    <Menu >
    <MenuGroup>
        <MenuList>
        ...menu items placed here
        </MenuList>
    </MenuGroup>
    </Menu>
    ```

- `MenuInput` has been renamed to `MenuSearchInput` and `MenuSearch` has been added as a wrapper [(#8820)](https://github.com/patternfly/patternfly-react/pull/8820)

    Previous implementation:

    ```jsx
    <MenuInput><SearchInput /></MenuInput>
    ```

    New implementation:

    ```jsx
        <MenuSearch><MenuSearchInput><SearchInput /></MenuSearchInput></MenuSearch>
    ```

- We've update the `aria-label` prop on MenuItemAction, making it required instead of optional [(#8617)](https://github.com/patternfly/patternfly-react/pull/8617)

- Updated the `onFileDrop` prop for MultipleFileUpload so that the `event` parameter is the first parameter. Handlers may require an update [(#8995)](https://github.com/patternfly/patternfly-react/pull/8995)

    Previous implementation:

    ```jsx
    <MultipleFileUpload onFileDrop={(id) => handler(id)} />
    const handler1 = (id) => {};
    <MultipleFileUpload onFileDrop={handler1} />
    function handler2(id) {};
    <MultipleFileUpload onFileDrop={handler2} />
    ```

    New implementation:

    ```jsx
    <MultipleFileUpload onFileDrop={(_event, id) => handler(id)} />
    const handler1 = (_event, id) => {};
    <MultipleFileUpload onFileDrop={handler1} />
    function handler2(_event, id) {};
    <MultipleFileUpload onFileDrop={handler2} />
    ```

### Nav

**React**

- Updated the default value of the `aria-label` attribute for Nav with a `horizontal-subnav` variant to "local" (previously the default value was "Global") [(#8213)](https://github.com/patternfly/patternfly-react/pull/8213)

- Updated the `onSelect` and `onToggle` props for Nav so that the `event` parameter is the first parameter, and have removed the event property from the `selectedItem` and `toggledItem` object parameters respectively. Handlers may require an update [(#8997)](https://github.com/patternfly/patternfly-react/pull/8997)

    Previous implementation:

    ```jsx
    <Navigation onSelect={(id) => handler(id)} />
    const handler1 = (id) => {};
    <Navigation onSelect={handler1} />
    function handler2(id) {};
    <Navigation onSelect={handler2} />

    <Navigation onToggle={(id) => handler(id)} />
    const toggleHandler1 = (id) => {};
    <Navigation onToggle={toggleHandler1} />
    function toggleHandler2(id) {};
    <Navigation onToggle={toggleHandler2} />
    ```

    New implementation:

    ```jsx
    <Navigation onSelect={(_event, id) => handler(id)} />
    const handler1 = (_event, id) => {};
    <Navigation onSelect={handler1} />
    function handler2(_event, id) {};
    <Navigation onSelect={handler2} />

    <Navigation onToggle={(_event, id) => handler(id)} />
    const toggleHandler1 = (_event, id) => {};
    <Navigation onToggle={toggleHandler1} />
    function toggleHandler2(_event, id) {};
    <Navigation onToggle={toggleHandler2} />
    ```

- The placement Nav flyouts in the DOM has been changed, if you have Nav elements with flyouts you may need to update some selectors or snapshots in your test suites. This rule will raise a warning, but will not make any changes [(#8628)](https://github.com/patternfly/patternfly-react/pull/8628)

### Notification badge 

**React** 

- Removed the `isRead` prop from NotificationBadge, use "read" or "unread" on the `variant` prop instead [(#8626)](https://github.com/patternfly/patternfly-react/pull/8626)

    Previous implementation:

    ```jsx
    <NotificationBadge isRead />
    <NotificationBadge isRead={false} />
    <NotificationBadge isRead={isRead} />
    <NotificationBadge isRead={isRead || markedRead} />
    ```

    New implementation:

    ```jsx
    <NotificationBadge variant="read" />
    <NotificationBadge variant="unread" />
    <NotificationBadge variant={isRead ? "read" : "unread"} />
    <NotificationBadge variant={(isRead || markedRead) ? "read" : "unread"} />
    ```

### Notification drawer

**Core** 

- Updated body element to fill vertical space ([#5214](https://github.com/patternfly/patternfly/pull/5214))

### Popover 

**Core** 

- Updated background color, border, and shadow styles to align with dark theme ([#5318](https://github.com/patternfly/patternfly/pull/5318))

### Number input

**React** 

- Removed the `allowEmptyInput` prop from NumberInput [(#8715)](https://github.com/patternfly/patternfly-react/pull/8715)

    Previous implementation:

    ```jsx
    <NumberInput allowEmptyInput />
    ```

    New implementation:

    ```jsx
    <NumberInput  />
    ```

### Options menu 

**React** 

- We've deprecated the `OptionsMenu` components. A fix will update code to point to the new deprecated import, but we recommend replacing with `Dropdown` or `Select` [(8798)](https://github.com/patternfly/patternfly-react/pull/8798)

    Previous implementation:

    ```jsx
    import { OptionsMenu, OptionsMenuToggle } from '@patternfly/react-core';
    ```

    New implementation:

    ```jsx
    import { OptionsMenu, OptionsMenuToggle } from '@patternfly/react-core/deprecated';
    ```

### Overflow menu 

**React** 

- OverflowMenuDropdownItem now uses the Next implementation of DropdownItem and DropdownItemProps internally, and may require updating selectors for tests. Any other Dropdown componments used to build an OverflowMenu should also use the Next Dropdown components. This rule will raise a warning when OverflowMenuDropdownItem is imported, but will not update any code [(#8359)](https://github.com/patternfly/patternfly-react/pull/8359)

- We've renamed the `index` prop for OverflowMenuDropdownItem to `itemId`, and updated its type to `string | number` [(#8359)](https://github.com/patternfly/patternfly-react/pull/8359)

    Previous implementation:

    ```jsx
    <OverflowMenuDropdownItem index={0}>
    ```

    New implementation:

    ```jsx
    <OverflowMenuDropdownItem itemId={0}>
    ```

### Page 

**React** 

- The following props have been updated for the specified Page sub-components:

    | Sub-component | Old prop name | New prop name |
    |--|--|--|
    | `PageSidebar` | `isNavOpen` | `isSidebarOpen` |
    | `PageToggleButton` | `isNavOpen` | `isSidebarOpen` |
    | `PageToggleButton` | `onNavToggle` | `onSidebarToggle` |

    [(#8942)](https://github.com/patternfly/patternfly-react/pull/8942)

    Previous implementation:

    ```jsx
    <PageSidebar isNavOpen={true} />
    <PageToggleButton isNavOpen={true} onNavToggle={() => {}} />
    ```

    New implementation:

    ```jsx
    <PageSidebar isSidebarOpen={true} />
    <PageToggleButton isSidebarOpen={true} onSidebarToggle={() => {}} />
    ```

- Updated the `onPageResize` prop for Page to include the `event` as its first parameter. Handlers may require an update [(#9011)](https://github.com/patternfly/patternfly-react/pull/9011)

    Previous implementation:

    ```jsx
    <Page onPageResize={({obj}) => onChange({obj})} />

    const resize1 = ({obj}) => {};
    <Page onPageResize={resize1}>

    function resize2({obj}) {};
    <Page onPageResize={resize2}>
    ```

    New implementation:

    ```jsx
    <Page onPageResize={(_event, {obj}) => onChange({obj})} />

    const resize1 = (_event, {obj}) => {};
    <Page onPageResize={resize1}>

    function resize2(_event, {obj}) {};
    <Page onPageResize={resize2}>
    ```

- We've deprecated the `PageHeader`, `PageHeaderTools`, `PageHeaderToolsGroup`, and `PageHeaderToolsItem` components. A fix will update code to point to the new deprecated import, but we recommend replacing with `Masthead` and its related components [(#8854)](https://github.com/patternfly/patternfly-react/pull/8854)

    Previous implementation:

    ```jsx
    import {
        Button,
    PageHeader,
    PageHeaderTools,
    PageHeaderToolsGroup,
    PageHeaderToolsItem,
    } from "@patternfly/react-core";
    ```

    New implementation:

    ```jsx
    import {
        Button
    } from '@patternfly/react-core';
    import {
        PageHeader,
        PageHeaderTools,
        PageHeaderToolsGroup,
        PageHeaderToolsItem
    } from '@patternfly/react-core/deprecated';
    ```

-  Updated `PageHeader`'s logo to only be an anchor if an `href` is specified, otherwise it will be a `span`. Explicitly declared `logoComponent` properties will remain unchanged, but if it is not specified a default will be added [(#8655)](https://github.com/patternfly/patternfly-react/pull/8655)

    Previous implementation:

    ```jsx
    <PageHeader />
    <PageHeader logoComponent="div" />
    ```

    New implementation:

    ```jsx
    <PageHeader logoComponent="a" />
    <PageHeader logoComponent="div" />
    ```

- The PageSidebar API has been updated. The `nav` prop has been renamed to `children`, and any content passed to the prop should be wrapped in our new PageSidebarBody sub-component [(#8942)](https://github.com/patternfly/patternfly-react/pull/8942)

    Previous implementation:

    ```jsx
    <PageSidebar theme="light" nav="Content">
    ```

    New implementation:

    ```jsx
    <PageSidebar theme="light">
    <PageSidebarBody>
    Content
    </PageSidebarBody>
    </PageSidebar>
    ```

- Removed the deprecated `sticky` prop from `PageSection`, `PageGroup`, `PageNavigation`, and `PageBreadcrumb` [(#8220)](https://github.com/patternfly/patternfly-react/pull/8220)

    Previous implementation:

    ```jsx
    <PageSection sticky="top" />
    <PageGroup sticky="top" />
    <PageNavigation sticky="top" />
    <PageBreadcrumb sticky="top" />
    ```

    New implementation:

    ```jsx
    <PageSection  />
    <PageGroup  />
    <PageNavigation  />
    <PageBreadcrumb  />
    ```


### Pagination 

**React** 

- Removed the `OptionsToggle` used by `Pagination` and replaced it with `Menu` and `MenuToggle`  [(#8319)](https://github.com/patternfly/patternfly-react/pull/8319)

- We've renamed and/or removed several props for Pagination:
    - `defaultToFullPage`: `isLastFullPageShown`,
    - `perPageComponenet`: removed

    We've also renamed several sub-props of Pagination's "title" prop:
    - `currPage`: `currPageAriaLabel`,
    - `paginationTitle`: `paginationAriaLabel`,
    - `toFirstPage`: `toFirstPageAriaLabel`,
    - `toLastPage`: `toLastPageAriaLabel`,
    - `toNextPage`: `toNextPageAriaLabel`,
    - `toPreviousPage`: `toPreviousPageAriaLabel`,
    - `optionsToggle`: `optionsToggleAriaLabel`,

    [(#8319)](https://github.com/patternfly/patternfly-react/pull/8319)

    Previous implementation:

    ```jsx
    <Pagination
    perPageComponenet="div"
    defaultToFullPage
    titles={{
        currPage: "text"
        paginationTitle: "text"
        toFirstPage: "text"
        toLastPage: "text"
        toNextPage: "text"
        toPreviousPage: "text"
        optionsToggle: "text"
    }}
    />
    ```

    New implementation:

    ```jsx
    <Pagination
    isLastFullPageShown
    titles={{
        currPageAriaLabel: "text"
        paginationAriaLabel: "text"
        toFirstPageAriaLabel: "text"
        toLastPageAriaLabel: "text"
        toNextPageAriaLabel: "text"
        toPreviousPageAriaLabel: "text"
        optionsToggleAriaLabel: "text"
    }}
    />
    ```

- We've renamed `ToggleTemplateProps` to `PaginationToggleTemplateProps` [(#8134)](https://github.com/patternfly/patternfly-react/pull/8134)

    Previous implementation:

    ```jsx
    import { Pagination, ToggleTemplateProps } from '@patternfly/react-core';
    <Pagination toggleTemplate={({firstIndex, lastIndex} : ToggleTemplateProps) => <div />} />
    ```

    New implementation:

    ```jsx
    import { Pagination, PaginationToggleTemplateProps } from '@patternfly/react-core';
    <Pagination toggleTemplate={({firstIndex, lastIndex} : PaginationToggleTemplateProps) => <div />} />
    ```

### Popover 

**React**

- [(#8621)](https://github.com/patternfly/patternfly-react/pull/8621)

The default value of the `appendTo` prop on Popover has been updated, which may cause markup changes that require updating selectors in tests. This rule will raise a warning, but will not make any changes.

- [(#8201)](https://github.com/patternfly/patternfly-react/pull/8201)

Removed the `boundary` and `tippyProps` from Popover, as well as removed the first parameter of `shouldClose` and all parameters of `onHidden`, `onHide`, `onMount`, `onShow`, and `onShown`.



    Previous implementation:

    ```jsx
    <Popover boundary={} tippyProps={} shouldClose={(tip, hideFunction) => {/* ... */}} onHidden={(tip) => {/* ... */}} onHide={(tip) => {/* ... */}} onMount={(tip) => {/* ... */}} onShow={(tip) => {/* ... */}} onShown={(tip) => {/* ... */}} />
    ```

    New implementation:

    ```jsx
    <Popover
    shouldClose={(hideFunction) => {
        /* ... */
    }}
    onHidden={() => {
        /* ... */
    }}
    onHide={() => {
        /* ... */
    }}
    onMount={() => {
        /* ... */
    }}
    onShow={() => {
        /* ... */
    }}
    onShown={() => {
        /* ... */
    }}
    />
    ```

- popover-swap-shouldClose-shouldOpen-params [(#9054)](https://github.com/patternfly/patternfly-react/pull/9054)

Updated the `shouldClose` and `shouldOpen` props for Popover so that the `event` parameter is the first parameter. Handlers may require an update.



    Previous implementation:

    ```jsx
    <Popover shouldOpen={(fn) => openHandler(fn)} shouldClose={(fn2) => closeHandler(fn2)} />
    <Popover shouldOpen={(fn, event) => openHandler(fn, event)} shouldClose={(fn, event) => closeHandler(fn, event)}/>
    const openHandler1 = (fn, event) => {};
    const closeHandler1 = (fn, event) => {};
    <Popover shouldOpen={openHandler1} shouldClose={closeHandler1} />
    function openHandler2(fn, event) {};
    function closeHandler2(fn, event) {};
    <Popover shouldOpen={openHandler2} shouldClose={closeHandler2} />
    ```

    New implementation:

    ```jsx
    <Popover shouldOpen={(_event, fn) => openHandler(fn)} shouldClose={(_event, fn2) => closeHandler(fn2)} />
    <Popover shouldOpen={(event, fn) => openHandler(fn, event)} shouldClose={(event, fn) => closeHandler(fn, event)}/>
    const openHandler1 = (event, id) => {};
    const closeHandler1 = (event, id) => {};
    <Popover shouldOpen={openHandler1} shouldClose={closeHandler1} />
    function openHandler2(event, id) {};
    function closeHandler2(event, id) {};
    <Popover shouldOpen={openHandler2} shouldClose={closeHandler2} />
    ```

- [(#8621)](https://github.com/patternfly/patternfly-react/pull/8621)

The default value of the `appendTo` prop on Popover has been updated, which may cause markup changes that require updating selectors in tests. This rule will raise a warning, but will not make any changes.

- [(#8724)](https://github.com/patternfly/patternfly-react/pull/8724)

Removed the `popperMatchesTriggerWidth` prop from Popper. `minWidth`, `maxWidth`, and `width` props can instead be used to modify the Popper width.



    Previous implementation:

    ```jsx
    <Popper popperMatchesTriggerWidth />
    ```

    New implementation:

    ```jsx
    <Popper  />
    ```

### Radio 

**Core** 

- Updated description and body to fill available page section width ([#5233](https://github.com/patternfly/patternfly/pull/5233))

**React**

- [(#8965)](https://github.com/patternfly/patternfly-react/pull/8965)

**Not yet included in pf-react**

Updated the `onChange` prop for Radio so that the `event` parameter is the first parameter. Handlers may require an update.



    Previous implementation:

    ```jsx
    <Radio onChange={(checked) => handler(checked)} />
    <Radio onChange={(checked, event) => handler(checked, event)} />
    const handler1 = (checked, event) => {};
    <Radio onChange={handler1} />
    function handler2(checked, event) {};
    <Radio onChange={handler2} />
    ```

    New implementation:

    ```jsx
    <Radio onChange={(_event, checked) => handler(checked)} />
    <Radio onChange={(event, checked) => handler(checked, event)} />
    const handler1 = (_event, checked) => {};
    <Radio onChange={handler1} />
    function handler2(_event, checked) {};
    <Radio onChange={handler2} />
    ```



### Select 

**React** 
- Our deprecated implementation of Select has had its markup changed. Selectors may require updating. This rule will raise a warning, but will not make any changes [(#9172)](https://github.com/patternfly/patternfly-react/pull/9172)

-  We've deprecated the `Select` components. A fix will update code to point to the new deprecated import, but we suggest using our new `Select` implementation.
[(#8825)](https://github.com/patternfly/patternfly-react/pull/8825)

    Previous implementation:

    ```jsx
    import { Button, Select, SelectOption, SelectVariant, SelectDirection, SelectGroup } from "@patternfly/react-core";
    ```

    New implementation:

    ```jsx
    import {
        Button
    } from '@patternfly/react-core';
    import {
        Select,
        SelectOption,
        SelectVariant,
        SelectDirection,
        SelectGroup
    } from '@patternfly/react-core/deprecated';
    ```

- The `itemId` prop for our new implementation of SelectOption and DropdownItem has been renamed to `value` [(#9175)](https://github.com/patternfly/patternfly-react/pull/9175)

    Previous implementation:

    ```jsx
    <SelectOption itemId="Option 1" />
    <DropdownItem itemId="Item 1" />
    ```

    New implementation:

    ```jsx
    <SelectOption value="Option 1" />
    <DropdownItem value="Item 1" />
    ```

### Simple list 

**React** 

- Removed the deprecated the `isCurrent` prop. This rule wil replace it with `isActive` [(#8132)](https://github.com/patternfly/patternfly-react/pull/8132)

    Previous implementation:

    ```jsx
    <SimpleList isCurrent />
    ```

    New implementation:

    ```jsx
    <SimpleList isActive />
    ```

### Slider 

**React** 

- {Not yet included in pf-react) Updated the `onChange` prop for Slider so that the `event` parameter is the first parameter. Handlers may require an update [(#8970)](https://github.com/patternfly/patternfly-react/pull/8970)

    Previous implementation:

    ```jsx
    <Slider onChange={(value) => handler(value)} />
    const handler1 = (value) => {};
    <Slider onChange={handler1} />
    function handler2(value) {};
    <Slider onChange={handler2} />
    ```

    New implementation:

    ```jsx
    <Slider onChange={(_event, value) => handler(value)} />
    const handler1 = (_event, value) => {};
    <Slider onChange={handler1} />
    function handler2(_event, value) {};
    <Slider onChange={handler2} />
    ```


### Skip to content

**Core** 

- Moved the class `.pf-c-skip-to-content` from the primary button to a `<div>` that wraps the primary button ([#5153](https://github.com/patternfly/patternfly/pull/5153))

### Spinner 

**React** 

- Updated the Spinner to exclusively use an SVG, and have removed the isSVG prop [(#8616)](https://github.com/patternfly/patternfly-react/pull/8616)

    Previous implementation:

    ```jsx
    <Spinner isSVG />
    ```

    New implementation:

    ```jsx
    <Spinner  />
    ```

### Switch 

**React**

- Updated the `onChange` prop for Switch so that the `event` parameter is the first parameter. Handlers may require an update [(#9037)](https://github.com/patternfly/patternfly-react/pull/9037)

    Previous implementation:

    ```jsx
    <Switch onChange={(id) => handler(id)} />
    <Switch onChange={(id, event) => handler(id, event)} />
    const handler1 = (id, event) => {};
    <Switch onChange={handler1} />
    function handler2(id, event) {};
    <Switch onChange={handler2} />
    ```

    New implementation:

    ```jsx
    <Switch onChange={(_event, id) => handler(id)} />
    <Switch onChange={(event, id) => handler(id, event)} />
    const handler1 = (_event, id) => {};
    <Switch onChange={handler1} />
    function handler2(_event, id) {};
    <Switch onChange={handler2} />
    ```

### Table 

**React** 

- Renamed the `isHoverable` prop for Table components to `isClickable`. This rule provides a fix for the `Tr` component when using our new default, composable implementation of Table. If using our now deprecated implementation of Table with the `rows` prop passed in, only an error message will be thrown and any usage of `isHoverable` will need to be updated manually [((#9083))](https://github.com/patternfly/patternfly-react/pull/9083)

    Previous implementation:

    ```jsx
    <Tr isHoverable />
    ```

    New implementation:

    ```jsx
    <Tr isClickable />
    ```

- Renamed `TableComposable` to `Table` [(#8892)](https://github.com/patternfly/patternfly-react/pull/8892)

    Previous implementation:

    ```jsx
    import { TableComposable } from '@patternfly/react-table';

    <TableComposable />
    ```

    New implementation:

    ```jsx
    import { Table /* data-codemods */ } from '@patternfly/react-table';

    <Table />
    ```


- Deprecated the current implementation of Table. In order to continue using this deprecated implementation, the import path must be updated to our deprecated package and specifiers must be aliased. However, we suggest updating to our composable Table implementation. The following imports will be affected by this deprecation:

    - Table
    - TableBody
    - TableHeader
    - TableProps
[(#8892)](https://github.com/patternfly/patternfly-react/pull/8892)

    Previous implementation:

    ```jsx
    import { Table, TableBody, TableHeader, TableProps } from "@patternfly/react-table";
    ```

    New implementation:

    ```jsx
    import {
    Table,
    TableBody,
    TableHeader,
    TableProps
    } from '@patternfly/react-table/deprecated';
    ```
  
- Table and TableComposable's `ActionsColumn` has been updated to use our new implementation of Dropdown. The toggle passed to the actions column should now be a `MenuToggle` instead of the deprecated `DropdownToggle`. The `dropdownPosition`, `dropdownDirection` and `menuAppendTo` properties are removed and `Popper` properties can be passed in using `popperProps` instead (via `direction`, `position`, `appendTo`, etc.) [(#8629)](https://github.com/patternfly/patternfly-react/pull/8629)

- `collapseAllAriaLabel` on `ThExpandType` has been updated to a `string` from `''`. Workarounds casting this property to an empty string are no longer required [(#8634)](https://github.com/patternfly/patternfly-react/pull/8634)

- Removed the deprecated `hasSelectableRowCaption` prop [(#8352)](https://github.com/patternfly/patternfly-react/pull/8352)

    Previous implementation:

    ```jsx
    <TableComposable hasSelectableRowCaption />
    ```

    New implementation:

    ```jsx
    <TableComposable  />
    ```

- Updated the `onSelect` and `onSelect` props for EditableSelectInputCell so that the `event` parameter is their first parameter. Handlers may require an update [(#9057)](https://github.com/patternfly/patternfly-react/pull/9057)

    Previous implementation:

    ```jsx
    <EditableSelectInputCell onSelect={(value) => onSelectHandler(value)} clearSelection={(row, cell) => clearSelectionHandler(row, cell)} />
    <EditableSelectInputCell onSelect={(value, event) => onSelectHandler(value, event)} />
    const onSelectHandler1 = (value, event) => {};
    const clearSelectionHandler1 = (row, cell) => {};
    <EditableSelectInputCell onSelect={onSelectHandler1} clearSelection={clearSelectionHandler1} />
    function onSelectHandler2(value) {};
    function clearSelectionHandler2(row, cell) {};
    <EditableSelectInputCell onSelect={onSelectHandler2} clearSelection={clearSelectionHandler2} />
    ```

    New implementation:

    ```jsx
    <EditableSelectInputCell onSelect={(_event, value) => onSelectHandler(value)} clearSelection={(_event, row, cell) => clearSelectionHandler(row, cell)} />
    <EditableSelectInputCell onSelect={(event, value) => onSelectHandler(value, event)} />
    const onSelectHandler1 = (event, value) => {};
    const clearSelectionHandler1 = (event, row, cell) => {};
    <EditableSelectInputCell onSelect={onSelectHandler1} clearSelection={clearSelectionHandler1} />
    function onSelectHandler2(_event, value) {};
    function clearSelectionHandler2(_event, row, cell) {};
    <EditableSelectInputCell onSelect={onSelectHandler2} clearSelection={clearSelectionHandler2} />
    ```

### Tabs

**Core** 

- Added a bottom border to secondary tabs and cleaned up CSS modifiers ([#5171](https://github.com/patternfly/patternfly/pull/5171))

**React**

- Updated the `onToggle` prop for Tabs so that the `event` parameter is the first parameter. Handlers may require an update [(#9059)](https://github.com/patternfly/patternfly-react/pull/9059)

    Previous implementation:

    ```jsx
    <Tabs onToggle={(id) => handler(id)} />
    const handler1 = (id) => {};
    <Tabs onToggle={handler1} />
    function handler2(id) {};
    <Tabs onToggle={handler2} />
    ```

    New implementation:

    ```jsx
    <Tabs onToggle={(_event, id) => handler(id)} />
    const handler1 = (_event, id) => {};
    <Tabs onToggle={handler1} />
    function handler2(_event, id) {};
    <Tabs onToggle={handler2} />
    ```

- [(#8517)](https://github.com/patternfly/patternfly-react/pull/8517)

We've renamed the `hasBorderBottom` prop to `hasNoBorderBottom`.



    Previous implementation:

    ```jsx
    <Tabs hasBorderBottom />
    <Tabs hasBorderBottom={true} />
    <Tabs hasBorderBottom={false} />
    <Tabs hasBorderBottom={someVar} />
    ```

    New implementation:

    ```jsx
    <Tabs  />
    <Tabs  />
    <Tabs hasNoBorderBottom />
    <Tabs hasNoBorderBottom={!someVar} />
    ```

- [(#8517)](https://github.com/patternfly/patternfly-react/pull/8517)

Removed the deprecated `hasSecondaryBorderBottom` prop.



    Previous implementation:

    ```jsx
    <Tabs hasSecondaryBorderBottom />
    ```

    New implementation:

    ```jsx
    <Tabs  />
    ```

- [(#8217)](https://github.com/patternfly/patternfly-react/pull/8217)

We've restricted the type of elements that can be passed to the `Tabs` component.

This rule will raise a warning when `Tabs` is imported in a file, even if the children passed to it are already of the appropriate type. It will not make any code changes.

### Text 

**React** 

- Updated the `onChange` prop for TextArea so that the `event` parameter is the first parameter. Handlers may require an update [(#9061)](https://github.com/patternfly/patternfly-react/pull/9061)

    Previous implementation:

    ```jsx
    <TextArea onChange={(id) => handler(id)} />
    <TextArea onChange={(id, event) => handler(id, event)} />
    const handler1 = (id, event) => {};
    <TextArea onChange={handler1} />
    function handler2(id, event) {};
    <TextArea onChange={handler2} />
    ```

    New implementation:

    ```jsx
    <TextArea onChange={(_event, id) => handler(id)} />
    <TextArea onChange={(event, id) => handler(id, event)} />
    const handler1 = (_event, id) => {};
    <TextArea onChange={handler1} />
    function handler2(_event, id) {};
    <TextArea onChange={handler2} />
    ```

### Text input 

**React** 

- Updated the `onChange` prop for TextInput so that the `event` parameter is the first parameter. Handlers may require an update [(#9064)](https://github.com/patternfly/patternfly-react/pull/9064)

    Previous implementation:

    ```jsx
    <TextInput onChange={(id) => handler(id)} />
    <TextInput onChange={(id, event) => handler(id, event)} />
    const handler1 = (id, event) => {};
    <TextInput onChange={handler1} />
    function handler2(id, event) {};
    <TextInput onChange={handler2} />
    ```

    New implementation:

    ```jsx
    <TextInput onChange={(_event, id) => handler(id)} />
    <TextInput onChange={(event, id) => handler(id, event)} />
    const handler1 = (_event, id) => {};
    <TextInput onChange={handler1} />
    function handler2(_event, id) {};
    <TextInput onChange={handler2} />
    ```

### Time picker

**React**

- The helperText property of `DatePicker` now expects the <HelperText> component, and `TimePicker` now uses a <HelperText> component internally. This rule will raise a warning, but will not make any code changes [(#8833)](https://github.com/patternfly/patternfly-react/pull/8833)

### Toggle group

**React**

- Removed the deprecated `isPrimary` prop. This rule wil replace it with the "primary" value on the `toggleVariant` prop [(#8179)](https://github.com/patternfly/patternfly-react/pull/8179)

    Previous implementation:

    ```jsx
    <Toggle isPrimary />
    ```

    New implementation:

    ```jsx
    <Toggle toggleVariant="primary" />
    ```

- Updated the `onChange` prop for ToggleGroupItem so that the `event` parameter is the first parameter. Handlers may require an update [(#9067)](https://github.com/patternfly/patternfly-react/pull/9067)

    Previous implementation:

    ```jsx
    <ToggleGroupItem onChange={(id) => handler(id)} />
    <ToggleGroupItem onChange={(id, event) => handler(id, event)} />
    const handler1 = (id, event) => {};
    <ToggleGroupItem onChange={handler1} />
    function handler2(id, event) {};
    <ToggleGroupItem onChange={handler2} />
    ```

    New implementation:

    ```jsx
    <ToggleGroupItem onChange={(_event, id) => handler(id)} />
    <ToggleGroupItem onChange={(event, id) => handler(id, event)} />
    const handler1 = (_event, id) => {};
    <ToggleGroupItem onChange={handler1} />
    function handler2(_event, id) {};
    <ToggleGroupItem onChange={handler2} />
    ```

### Toolbar 

**Core** 

- Changed `.pf-c-toolbar__group` default vertical alignment from center to baseline and added modifier classes to switch between baseline and center alignment for self groups, children groups, and self items ([#5201](https://github.com/patternfly/patternfly/pull/5201))

**React**

- Removed the deprecated `visiblity` prop. This rule will replace it with the correctly spelled `visibility` prop [(#8212)](https://github.com/patternfly/patternfly-react/pull/8212)

    Previous implementation:

    ```jsx
    <ToolbarContent visiblity={{ default: "hidden" }} />
    ```

    New implementation:

    ```jsx
    <ToolbarContent visibility={{ default: "hidden" }} />
    ```

-  Removed the `alignment` prop from `ToolbarContent`, `ToolbarGroup`, and `ToolbarItem`. For `ToolbarGroup` and `ToolbarItem` it has been replaced with `align` [(#8563)](https://github.com/patternfly/patternfly-react/pull/8563)

    Previous implementation:

    ```jsx
    <ToolbarContent alignment={{ default: 'alignLeft' }} />
    <ToolbarGroup alignment={{ default: 'alignLeft' }} />
    <ToolbarItem alignment={{ default: 'alignLeft' }} />
    ```

    New implementation:

    ```jsx
    <ToolbarContent  />
    <ToolbarGroup align={{ default: 'alignLeft' }} />
    <ToolbarItem align={{ default: 'alignLeft' }} />
    ```


### Tooltip

**Core** 

- Updated background color, border, and shadow styles to align with dark theme ([#5318](https://github.com/patternfly/patternfly/pull/5318))

**React**

- Removed the `boundary`, `tippyProps`, and `isAppLauncher` properties [(#8231)](https://github.com/patternfly/patternfly-react/pull/8231)

- Tooltips without a `triggerRef` will now have a wrapping div which may cause issues. Snapshots may need to be updated, or to avoid the wrapping div add a `triggerRef` with a ref which is attached to the trigger element. This rule will raise a warning when a `Tooltip` is imported without a `triggerRef` or `reference` prop, but will not make any code changes [(#8733)](https://github.com/patternfly/patternfly-react/pull/8733)

    Previous implementation:

    ```jsx
    <Tooltip boundary={} tippyProps={} isAppLauncher />
    ```

    New implementation:

    ```jsx
    <Tooltip     />
    ```

-  When using the `Tooltip` component inside of a `react-charts` component, the Tooltip should be wrapped inside a `foreignObject`. The Tooltip may not render properly otherwise due to it outputting a `<div>` element inside an `<svg>` element. This rule will raise a warning when Tooltip is imported from `@patternfly/react-core` and at least one other import is from `@patternfly/react-charts`, but will not update any code [(#8592)](https://github.com/patternfly/patternfly-react/pull/8592)

### Wizard 

**Core** 

- Removed style that was breaking drawer example ([#5322](https://github.com/patternfly/patternfly/pull/5322))
- Reordered footer buttons ([#5148](https://github.com/patternfly/patternfly/pull/5148))

**React**

- Deprecated the v4 implementation of wizaed. In order to continue using the deprecated implementation, update the import path to our deprecated package and ensure that  specifiers are aliased. We suggest updating to our newer implementation of Wizard. The following imports will be affected by this deprecation:

    - Wizard
    - WizardContext
    - WizardNav
    - WizardNavItem
    - WizardHeader
    - WizardBody
    - WizardFooter
    - WizardToggle
[(#8821)](https://github.com/patternfly/patternfly-react/pull/8821)

    Previous implementation:

    ```jsx
    import { Wizard, Button } from '@patternfly/react-core';
    ```

    New implementation:

    ```jsx
    import { Button } from '@patternfly/react-core';
    import { Wizard } from '@patternfly/react-core/deprecated';
    ```

- Updated  the order of the "next" and "back" buttons so that with the "next" button comes after the "back" button. This update has also been made in the Next implementation of the `WizardFooter`. We recommend updating any tests that may rely on relative selectors and updating any composable implementations to match this new button order. This rule will raise a warning when `Wizard` is imported from `@patternfly/react-core` or `WizardFooter` is imported from `@patternfly/react-core/next`, but it will not make any code changes[(#8409)](https://github.com/patternfly/patternfly-react/pull/8409)

