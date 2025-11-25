---
id: Theming
section: foundations-and-styles
source: about
---

import '../../../components/components.css'
import { Alert, AlertActionLink} from '@patternfly/react-core';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';

A **theme** applies a specific visual style to all UI components in order to create a unique, cohesive, and purposeful look. The use of theming can provide more flexibility for user preferences, as well as different options for accessibility needs. 

Theming is supported in PatternFly through [our design token system](/foundations-and-styles/design-tokens/overview), which was intentionally structured so that sets of tokens can be adjusted together to create alternate UI styles. By reassigning token values, the fonts, spacing, shadows, and borders in a UI can be changed together to create a theme. This system has enabled us to create multiple PatternFly themes, while also supporting the ability for you to create custom themes. 

## PatternFly themes

The following themes are currently supported across PatternFly components and are designed to meet specific [WCAG accessibility standards](https://www.w3.org/WAI/standards-guidelines/wcag/). You can explore our different themes on our website by toggling your display preferences in our site's masthead dropdown. 

### Light mode

Generally, light mode is the default appearance of PatternFly. In this mode, dark text is presented on light backgrounds to meet a [text contrast ratio of at least 4.5:1](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#contrast-minimum), while colors for other UI elements meet a [non-text contrast ratio of at least 3:1](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#non-text-contrast). Some users might find it easier to read text on light screens, while others might simply prefer the appearance.

<div class="ws-docs-content-img" style="width:90%">
![A collage of multiple light-themed PatternFly components, like a calendar, alert, and menu. The components have white backgrounds and black text.](./img/components-light.svg)
</div>

### Dark mode

In dark mode, light text is presented on dark backgrounds backgrounds, and our color palette adapts to maintain a [text contrast ratio of at least 4.5:1](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#contrast-minimum) and [non-text contrast ratio of at least 3:1](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#non-text-contrast). Some users might prefer dark mode for aesthetics, while others find it to be easier on the eyes and less straining for those with light sensitivities. 

For development guidance, refer to the [dark theme handbook](/foundations-and-styles/theming/dark-theme-handbook).

<div class="ws-docs-content-img" style="width:90%">
![A collage of multiple dark-themed PatternFly components, like a calendar, alert, and menu. The components have dark gray backgrounds and white text.](./img/components-dark.svg)
</div>

### High contrast mode

<Alert 
variant="info" 
title="Beta feature"
>
<p> High contrast mode is still under development and will continue to evolve and be enabled for charts and extensions. This beta allows you to preview our progress. </p>
</Alert>

High contrast mode adjusts our default colors to meet an [enhanced contrast ratio of at least 7:1](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html), making it more suitable for users who require higher contrast between UI elements. By using wider border strokes and adjusted fill colors, high contrast mode creates more visual distinction and clarity between interactive elements.

In high contrast mode, distinct borders are also added to components to ensure that their boundaries are clearly defined without requiring users to rely on subtle background colors as a visual cue. 

For development guidance, refer to the [high contrast handbook](/foundations-and-styles/theming/high-contrast-handbook).

## Custom themes 

To branch off of our themes and create your own, you can identify the design tokens you'd like to adjust on our [all tokens page](/foundations-and-styles/design-tokens/all-design-tokens) and provide new values to use within your application. 

### When to customize a theme

There are a couple of instances when you might want to adjust an existing PatternFly theme: 
- One-off adjustments, like changing a single button color, spacer, or font size, when intentional deviation is needed across your product. 
- Application-wide adjustments, like changing all button colors and font sizes to adjust the overall brand identity of your product. 

## Using themes in Figma

Our Figma libraries fully support theming. Designers can create a single layout and then use various Figma "Appearance" settings to swap a wireframe to light, dark, or high contrast mode. This makes it easy to visually test and validate designs across all supported themes.

## Best practices

To ensure your application is robust, maintainable, and adaptable across different themes, we recommend following these best practices.

- **Use default PatternFly components:** Whenever possible, use PatternFly components as they are. This ensures you stay up-to-date with our intended design, functionality, and accessibility standards. It also makes upgrades more seamless, decreases development time, and guarantees consistency across applications.
- **Use design tokens and variables for customizations:** If you must customize a component, use the appropriate method:
    - **Design tokens:** For global changes
    - **Component variables:** For component-specific changes
    - Example: To override a primary button’s background color, declare `.pf-v6-c-button { --pf-v6-c-button--m-primary--BackgroundColor: [color token]; }` instead of `.pf-v6-c-button.pf-m-primary { background-color: [color token]; }`.
- **Always use tokens to create custom styles:** When creating custom components or styles, never use hard-coded values like hex codes or color names (`#fff` or `white`). Instead, use the appropriate design token, such as `var(--pf-t--global--background--color--primary--default)`. Tokens automatically adapt to different themes, while hard-coded values do not.
- **Prioritize semantic tokens:** Always use the most relevant semantic token for your use case to ensure the element's purpose is clear and that it receives the correct styling in any theme. If no semantic token exists, you can fall back to a base token. 
- **Never use a palette token**: Do not use palette tokens (like `--pf-t--color--blue--20`) directly in your code, as the value is not guaranteed to be consistent across themes.
- **Use scalable icons:** For icons, use vector images (SVG) or icon fonts instead of raster or bitmap images (PNG, JPEG, GIF, BMP, and so on). This allows you to control their color with CSS `fill` and `color` properties. By assigning a design token to these properties, your icons will automatically change color to match the active theme.
    - If you must use static images, you might need to hide and show different image files based presence of a theme-specific class (like `pf-v6-theme-dark`).