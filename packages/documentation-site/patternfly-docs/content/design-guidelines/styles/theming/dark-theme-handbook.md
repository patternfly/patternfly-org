---
id: Theming
section: design-foundations
source: dark-theme-handbook
---

# Dark theme developer handbook 

## Enabling dark theme

Dark theme styles ship with PatternFly CSS by default. To enable dark theme, add the class `pf-[version]-theme-dark` (for example, `pf-v6-theme-dark`) to your application's `<html>` tag. This class can be added dynamically to toggle dark theme on and off in your application.

Dark theme can also be applied based on the browser’s `prefers-color-scheme` media query. When using this method, we recommend using JavaScript to detect the media query and apply the `pf-[version]-theme-dark` class. This allows you to manipulate a single class in order to toggle dark theme based on user preference. [Adam Argyle wrote a great article](https://web.dev/building-a-theme-switch-component/#javascript) on using JavaScript to manage dark theme preference, using the `prefers-color-scheme` media query alongside a manual button that toggles dark theme. 

[Our token resources](https://github.com/patternfly/patternfly/tree/v6/src/patternfly/base/tokens) include styles for both light and dark themes. When dark theme is enabled, your product will automatically pull dark theme tokens in order to adapt visual styles appropriately. 

The only features which will require additional work in order to support dark theme are charts and images. 

### Charts

To use charts with dark themes, refer to our guidance for [developing with charts](/charts/about-charts#develop-with-charts).

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

The most important step to ensure your application supports dark theme is to follow our [general theming best practices](/design-foundations/theming#best-practices). Adhering to these guidelines, especially by using design tokens instead of hard-coded values, will resolve most adoption challenges.

Additionally, keep these key points in mind:

- **Plan for static images:** If you can't use SVGs that are compatible with both light and dark backgrounds, you will need to create two versions of you image and swap them based on the active theme. 
- **Test custom components in both themes:** When building custom components, always check your work in both light and dark themes. This helps you catch issues early, like hard-coded colors or styles that don't adapt as expected.