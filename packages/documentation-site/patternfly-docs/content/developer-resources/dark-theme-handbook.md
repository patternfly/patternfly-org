---
id: Dark theme handbook
title: PatternFly dark theme handbook
section: developer-resources
---

## Enabling dark theme

Dark theme styles ship with PatternFly CSS by default. To enable dark theme, add the class `pf-v6-theme-dark` to your application's `<html>` tag. This class can be added dynamically to toggle dark theme on and off in your application.

Dark theme can also be applied based on the browser’s `prefers-color-scheme` media query. When using this method, we recommend using JavaScript to detect the media query and apply the `pf-v6-theme-dark` class. This allows a product to simply manipulate a single class to toggle dark theme based on user preference. [Adam Argyle wrote a great article](https://web.dev/building-a-theme-switch-component/#javascript) on using JavaScript to manage dark theme preference, using the `prefers-color-scheme` media query alongside a manual button that toggles dark theme. 

[Our token package](https://github.com/patternfly/patternfly/tree/v6/src/patternfly/base/tokens) includes files for both light and dark themes. When dark theme is enabled, your product will automatically pull dark theme tokens to adapt visual styles appropriately.

## Best practices

To make it easier to support light and dark theming in your application, we recommend these best practices for design and development:

* **Use PatternFly components without customizations.** Most problems with dark theming are due to the use of custom styles, overrides to PatternFly styles, and non-PatternFly components. To ensure consistent styling and behavior when switching themes, try to use PatternFly components as they are.

* **Use global and component CSS variables to define any overrides.** 
    * For example, to override a primary button’s background color, declare `.pf-v5-c-button { --pf-v5-c-button--m-primary--BackgroundColor: [color]; }` instead of `.pf-v5-c-button.pf-m-primary { background-color: [color]; }`.

* **Use tokens in overrides and custom styles.** 
    * For example, use `background-color: var(--pf-t--v6--global--background--color--primary--default)` for a primary background instead of `background-color: #fff` or `background-color: white`. Values like `#fff` and `white` will not change between light and dark theme, but tokens will.

* **Always use the most relevant semantic token for your use case.** If there isn't a semantic token for your scenario, then you can use a base token. Never use a palette token directly in your code. 
    * For example,  `--pf-v5-global--Link--Color`, `--pf-v5-global--primary-color--100`, and  `--pf-v5-global--palette--blue-400` are all the same. When creating something custom where the color should match the application’s link text color, any of these values will work in the default light theme. However, in a different theme, `--pf-v5-global--Link--Color` and `--pf-v5-global--primary-color--100` may not always match. Or `--pf-v5-global--palette--blue-400` may not be the same color used to represent a link. 

* **Use SVG files or icon fonts for icons, and use tokens for icon colors.** To easily manipulate icon colors between light and dark theme, SVG files and icon fonts can be changed via CSS by using the fill and color properties. When using variables like `--pf-t--v6--global--color--status--info--100	` or `--pf-v5-global--success-color--100`, colors will adapt automatically between light and dark theme. If images must be used, we advise you to use colors that work well in both light and dark themes, or hide and show the appropriate images based on the presence of the dark theme body class.

