---
id: Theming
section: design-foundations
source: high-contrast-handbook
---

# High contrast mode developer handbook

## High contrast mode vs. forced colors mode

Our high contrast mode increases the contrast of PatternFly components, often introducing additional borders to distinguish between elements, states, and interactions that otherwise rely on subtle background colors. High contrast mode is enabled by applying styles that are meant to target the [`prefers-contrast: more`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast) media query, which is the mode triggered on MacOS via **System Settings** > **Accessibility** > **Display** > **Increase contrast**. 

This is different from [`forced-colors: active`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors), which is a more aggressive contrast mode where the browser enforces a limited, user-chosen color palette on a webpage, often by replacing author-defined colors with CSS system colors and removing styles like background colors and box shadows. Common triggers for forced colors mode are enabling Windows High Contrast Mode and Firefox High Contrast Mode. As outlined in “Automatically by the user’s OS/browser preferences”, we recommend applying high contrast mode when `forced-colors: active` is `true`.

## Enabling high contrast mode

High contrast mode is designed to work with both our standard light and dark themes, with styles shipping by default with PatternFly CSS. To enable high contrast mode, add the class `.pf-v6-theme-high-contrast` to your application’s `<html>` tag. This class can be added dynamically to toggle high contrast mode on and off in your application.

[Adam Argyle's "Building a theme switch" article](https://web.dev/articles/building/a-theme-switch-component) outlines principles that should be applied to a high contrast mode theme switcher.

### Automatic high contrast

To apply high contrast mode automatically, based off of a user’s OS and browser contrast preferences, you can use `window.matchMedia()` to detect the browser’s `prefers-contrast` and `forced-colors` media queries. Because our high contrast mode often introduces additional borders, we recommend detecting `forced-colors` and applying high contrast styles when the value is `active`.

Even when high contrast mode is enabled automatically, it’s important to also add a manual toggle that allows users to toggle the theme on and off. A user's manual toggle of high contrast should always override the OS and browser preference.

### Dynamic high contrast

To allow your users to apply high contrast mode dynamically, independent of their OS and browser preferences, you can place an interactive toggle in a prominent location of your application. It is best practice store a user’s most recent toggle selection by storing their preference in `localStorage`, and using it enable or disable high contrast mode automatically when they return.

## High contrast design tokens

The following tokens have been introduced specifically for use in high contrast mode.

| **Token** | **Default theme value** | **High contrast mode value** |
| :---: | :---: | :---: |
| `--pf-t--global--border--color--high-contrast` | `transparent` | `--pf-t--global--border--color--default` |
| `--pf-t--global--border--width--high-contrast--regular` | 0rem | `--pf-t--global--border--width--regular` |
| `--pf-t--global--border--width--high-contrast--strong` | 0rem | `--pf-t--global--border--width--strong` |
| `--pf-t--global--border--width--high-contrast--extra-strong`| 0rem | `--pf-t--global--border--width--extra-strong`|

**Note:** The `--pf-t--global--border--color--high-contrast` token can be used strategically to support styles in `forced-colors` mode, as a previously transparent border will become visible when this mode is active.

### Plain action tokens

We also added the following tokens for plain actions (actions with a transparent background). These are now used in PatternFly anywhere where an action has a transparent background, such as plain buttons or navigation items.

| **Token** | **Default theme value** | **High contrast mode value** |
| :---: | :---: | :---: |
| `--pf-t--global--border--width--action--plain--default` | 0rem | 0rem|
| `--pf-t--global--border--width--action--plain--hover` | 0rem | `--pf-t--global--border--width--100` |
| `--pf-t--global--border--width--action--plain--clicked` | 0rem | `--pf-t--global--border--width--200`  |

## Best practices

In addition to the [general theming best practices](/design-foundations/theming#best-practices), ensure that you adhere to the following guidelines when working in high contrast mode.

### Color and contrast

- **Meet text contrast ratios:** All normal text must meet a minimum contrast ratio of 7:1 against its background. While WCAG allows a 4.5:1 ratio for large text (18px or larger), it is best to aim for a 7:1 ratio for all text sizes to ensure maximum readability.
- **Meet non-text contrast ratios:** All other UI elements, like icons and borders must meet a minimum contrast ratio of 4.5:1 against their background.

### Boundaries 

- **Add borders for clarity:** If an element's background color doesn't have a 4.5:1 contrast ratio, add a visible border. For example, add borders to elements with a secondary background color that are placed on top of a primary background.
- **Replace shadows with borders:** To properly separate elements from the background, add a border to any elements that rely on a shadow in default themes.
- **Thicken borders on interaction:** Use border width to provide clear feedback for interactive states. An element's border should become progressively thicker on hover, focus, and click.
    - Example: An element with no default border should have a `1px` border on hover and a `2px` border when clicked.