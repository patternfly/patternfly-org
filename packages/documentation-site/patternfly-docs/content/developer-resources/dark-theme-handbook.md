---
id: Dark theme handbook
title: PatternFly dark theme handbook
section: developer-resources
---

## Enabling dark theme

Dark theme styles ship with PatternFly CSS by default. To enable dark theme, add the class `pf-[version]-theme-dark` (for example, `pf-v6-theme-dark`) to your application's `<html>` tag. This class can be added dynamically to toggle dark theme on and off in your application.

Dark theme can also be applied based on the browser’s `prefers-color-scheme` media query. When using this method, we recommend using JavaScript to detect the media query and apply the `pf-[version]-theme-dark` class. This allows you to manipulate a single class in order to toggle dark theme based on user preference. [Adam Argyle wrote a great article](https://web.dev/building-a-theme-switch-component/#javascript) on using JavaScript to manage dark theme preference, using the `prefers-color-scheme` media query alongside a manual button that toggles dark theme. 

[Our token resources](https://github.com/patternfly/patternfly/tree/v6/src/patternfly/base/tokens) include styles for both light and dark themes. When dark theme is enabled, your product will automatically pull dark theme tokens in order to adapt visual styles appropriately. 

The only features which will require additional work in order to support dark theme are charts and images. Instructions for enabling support in these areas are included in the following sections.

### Charts

The [PatternFly React charts package](https://www.npmjs.com/package/@patternfly/react-charts) uses default style values that align with our light theme. In order to support dark-themed charts, you must import the stylesheet that contains dark theme styles by adding the following import statement before your main application component is imported:

`import '@patternfly/patternfly/patternfly-charts.css';`

**Note:** You must also have the [@patternfly/patternfly package](https://www.npmjs.com/package/@patternfly/patternfly) installed.

### Images

To create images that adapt to light and dark themes, there are a few approaches you can take: 

- Use inline SVG's with fill colors set to [PatternFly color tokens](/tokens/all-patternfly-tokens), which inherently adapt to light and dark themes.
- Create images with colors that work well with both light and dark themes. These colors should meet [WCAG AA contrast requirements](https://webaim.org/resources/contrastchecker/).
- Utilize background color, border color, border-radius, and padding/spacing to create a container that can hold dynamic/user-supplied images.
- Write CSS and dynamically swap between 2 image variations:

        ``` 
        <img src="/light-theme.jpg" class="show-in-light">
        <img src="/dark-theme.jpg" class="show-in-dark">

        <style>
        .show-in-dark, 
        .pf-v6-theme-dark .show-in-light {
          display: none;
        }

        .pf-v6-theme-dark .show-in-dark {
          display: revert;
        }
        </style>
        ```

## Best practices

To make it easier to support light and dark theming in your application, we recommend following these best practices during design and development:

* **Use PatternFly components without customizations.** Most problems with dark theming are due to the use of custom styles, overrides to PatternFly styles, and non-PatternFly components. To ensure consistent styling and behavior when switching themes, try to use PatternFly components as they are.

* **Use tokens and component variables to define any overrides.** 
    * For example, to override a primary button’s background color, declare `.pf-[version]-c-button { --pf-[version]-c-button--m-primary--BackgroundColor: [color token]; }` instead of `.pf-[version]-c-button.pf-m-primary { background-color: [color token]; }`.

* **Use tokens in custom styles.** 
    * For example, use `background-color: var(--pf-t--[version]--global--background--color--primary--default)` for a primary background instead of `background-color: #fff` or `background-color: white`. Values like `#fff` and `white` will not change between light and dark theme, but tokens will.

* **Always use the most relevant semantic token for your use case.** If there isn't a semantic token for your scenario, then you can use a base token. Never use a palette token directly in your code. 
    * For example,  `--pf-t--[version]--global--text--color--link--default`, `--pf-t--[version]--color--blue--20`, and  `#b9dafc` are all the same in PatternFly's default light theme. When you create something custom, where the color should match the application’s link text color, any of these values will work. However, in a different theme, these token values may not always be the same color.

* **Use SVG files or icon fonts for icons, and use tokens for icon colors.** To easily manipulate icon colors between light and dark theme, SVG files and icon fonts can be changed via CSS by using the `fill` and `color` properties. When using semantic tokens, like `--pf-t--[version]--global--color--status--info--default`, colors will automatically adjust between light and dark theme. If images must be used, we advise you to use colors that work well in both light and dark themes and/or hide and show the appropriate images based on the presence of the dark theme body class.

