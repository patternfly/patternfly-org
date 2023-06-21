---
id: Dark theme handbook
title: PatternFly dark theme handbook
section: developer-resources
---

## Enabling dark theme

Dark theme styles ship with PatternFly CSS by default. To enable dark theme, add the class `pf-v5-theme-dark` to your application's `<html>` tag. This class can be added dynamically to toggle dark theme on and off in your application.

Dark theme can also be applied based on the browser’s `prefers-color-scheme` media query. The recommended way to apply dark theme based on this media query is to use JavaScript to detect the media query and apply the `pf-theme-dark` class. This allows a product to simply manipulate a single class to toggle dark theme based on user preference. [Adam Argyle wrote a great article](https://web.dev/building-a-theme-switch-component/#javascript) on using JavaScript to manage dark theme preference, using the `prefers-color-scheme` media query alongside a manual button to toggle dark theme on or off. 

## What’s changed?
There are some notable changes and differences between light and dark themes, outlined in this section. 

To view a list of all dark theme CSS overrides [view our override file on GitHub](https://github.com/patternfly/patternfly/blob/main/src/patternfly/sass-utilities/themes/dark/scss-variables.scss). 

**Black color palette**

Our black color palette was updated and a new, lighter gray was added.

| Variables affected | New or updated color values|
| -------------------- | -------------------- |
| --pf-v5-global--palette--black-50  | #e0e0e0 |
| --pf-v5-global--palette--black-100 | #c6c7c8 |
| --pf-v5-global--palette--black-200 | #aaabac |
| --pf-v5-global--palette--black-300 | #868789 |
| --pf-v5-global--palette--black-400 | #57585a |
| --pf-v5-global--palette--black-500 | #444548 |
| --pf-v5-global--palette--black-600 | #36373a |
| --pf-v5-global--palette--black-700 | #26292d |
| --pf-v5-global--palette--black-800 | #1b1d21 |
| --pf-v5-global--palette--black-850 | #212427 |
| --pf-v5-global--palette--black-900 | #0f1214 |
| --pf-v5-global--palette--black-1000| #030303 |

**Red color palette**

Two new colors were added to our red color palette.

| Variables affected | New or updated color values|
| -------------------- | -------------------- |
| --pf-v5-global--palette--red-9999  | #fe5142 |
| --pf-v5-global--palette--red-8888  | #ff7468 |

**Blue color palette**

`blue-300` was updated to support an additional variation of primary blue.

| Variable affected | New or updated color values|
| -------------------- | -------------------- |
| --pf-v5-global--palette--blue-300 | #1fa7f8 |



**Global variables**

`--pf-v5-global--BackgroundColor--300` was added as background color for elements that appear on top of other, such as popovers and dropdown menus.

`--pf-v5-global--BackgroundColor--400` was added as a background color for hover and interaction states of items that are placed on top of a dark background, such as dropdown menu items, text inputs, text areas, and menu toggles.

`--pf-v5-global--BorderColor--400` was added as a bottom border color for control elements.

**Status colors**

`--pf-v5-global--primary-color--300` was added as a new primary background color to meet contrast requirements for elements that have text on top, such as primary buttons and unread badges.

## Best practices

To make it easier to support light and dark theming in your application, we recommend considering these best practices during design and development:

* Using PatternFly components without customizations will make it easier to implement dark theme in your application. Most of the problems encountered have been around the use of custom styles, overrides to PatternFly styles, and non-PatternFly components. To ensure consistent styling and behavior when switching themes, try and use PatternFly components as they are.


* When making overrides, utilize the global and component CSS variable system to define the override. For example, to override a primary button’s background color, declare `.pf-v5-c-button { --pf-v5-c-button--m-primary--BackgroundColor: [color]; }` instead of `.pf-v5-c-button.pf-m-primary { background-color: [color]; }`.


* When creating overrides and custom styles, try to utilize the CSS variable system for the style values. For example, use `background-color: var(--pf-v5-global--BackgroundColor--100)` for a primary background instead of `background-color: #fff` or `background-color: white`. Colors like `#fff` and `white` will not change between light and dark theme, but the use of `--pf-v5-global--BackgroundColor--100` will. 

* Try to use the most “meaningful” variable whenever possible. For example, in PatternFly, `--pf-v5-global--Link--Color`, `--pf-v5-global--primary-color--100`, and  `--pf-v5-global--palette--blue-400` are all the same. When creating something custom where the color should match the application’s link text color, any of these values will work in the default light theme. However, in a different theme, `--pf-v5-global--Link--Color` and `--pf-v5-global--primary-color--100` may not always match. Or `--pf-v5-global--palette--blue-400` may not be the same color used to represent a link.

* As much as possible, use SVG files or icon fonts for icons, and use global variables for icon colors. To easily manipulate icon colors between light and dark theme, SVG files and icon fonts can be changed via CSS by using the fill and color properties. When using variables like `--pf-v5-global--info-color--100` or `--pf-v5-global--success-color--100`, colors will adapt automatically between light and dark theme. If images must be used, we advise you to use colors that work well in both light and dark themes, or hide and show the appropriate images based on the presence of the dark theme body class.

