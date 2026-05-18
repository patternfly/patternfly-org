---
id: Theming
section: foundations-and-styles
source: about
---

import '../../../components/components.css'
import { Alert, AlertActionLink} from '@patternfly/react-core';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';

A **theme** applies specific visual styles to UI components to create a unique, cohesive, and purposeful look. Our theming architecture leverages [our design token system](/foundations-and-styles/design-tokens/overview) to flexibly support different brand identities, user preferences, and accessibility needs. 

## Theming architecture 

We utilize a tiered theming architecture to consistently manage the appearance of UIs:
- **Theme:** Defines the foundational brand appearance, including core colors, border radii, iconography, and assets.
- **Color scheme:** Controls the brightness and palette shifts between light and dark environments.
- **Contrast mode:** Adjusts the style of surfaces and elements for specific aesthetic or accessibility needs.

## Themes

We support 2 pre-built themes in PatternFly. While the visual identity of each theme differs, they share the same underlying interaction patterns and accessibility standards.

### Default theme

The Default theme creates the standard, open source PatternFly experience. It is characterized by blue branding and modern, square borders. 

### Project Felt theme

Named after the material of the iconic Red Hat fedora, Project Felt is designed for products within the Red Hat portfolio, providing closer alignment with the [Red Hat Design System](https://ux.redhat.com/). It is characterized by red accent colors and pill-shaped borders. 

### Custom themes 

To branch off of our themes and create your own, you can identify the design tokens you'd like to adjust on our [all tokens page](/foundations-and-styles/design-tokens/all-design-tokens) and provide new values to use within your application. 

#### When to customize a theme

There are a couple of instances when you might want to adjust an existing PatternFly theme: 
- One-off adjustments, like changing a single button color, spacer, or font size, when intentional deviation is needed across your product. 
- Application-wide adjustments, like changing all button colors and font sizes to adjust the overall brand identity of your product. 

## Color schemes 

### Light mode

Light mode is the standard appearance for most web environments. 
 
Light mode places dark text on light backgrounds, while maintaining a [text contrast ratio of at least 4.5:1](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#contrast-minimum) and a [non-text contrast ratio of at least 3:1](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#non-text-contrast). Some users might find light screens easier to read, while others might simply prefer the appearance.

<div class="ws-docs-content-img" style="width:90%">
![A collage of multiple light-themed PatternFly components, like a calendar, alert, and menu. The components have white backgrounds and black text.](./img/components-light.svg)
</div>

### Dark mode

Dark mode adapts color palettes for light-sensitive users or low-light environments. It presents light text on dark backgrounds backgrounds while maintaining the same accessibility ratios as light mode. Some users might prefer dark mode for aesthetics, while others find it to be easier on the eyes and less straining for those with light sensitivities. 

For implementation guidance, refer to the [dark theme handbook](/foundations-and-styles/theming/dark-theme-handbook).

<div class="ws-docs-content-img" style="width:90%">
![A collage of multiple dark-themed PatternFly components, like a calendar, alert, and menu. The components have dark gray backgrounds and white text.](./img/components-dark.svg)
</div>

## Contrast modes

Contrast modes adjust the surface treatment of UI elements across both color schemes. They are mutually exclusive and can't be applied simultaneously.

### Default contrast

Default contrast mode is used in the Default theme and doesn't include special enhancements to increase contrast in UI elements. This mode doesn't need to be enabled and simply refers to the standard color palette used to achieve level AA accessibility, with contrast ratios of 4.5:1 for normal text, 3:1 for large text, and 3:1 for graphics and other UI components. 

### High contrast

High contrast mode is focused on improving accessibility for users who require more clarity and higher contrast between UI elements. It is available across the Default and Project Felt themes in both light and dark color schemes. When enabled, high contrast mode adjusts the following:

- Raises text contrast to meet a [WCAG AAA ratio of 7:1](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html).
- Raises non-text element contrast (interactive elements and boundaries) to 4.5:1.
- Applies global border rules that define clear boundaries in place of shadows and subtle background fills, which can disappear in high contrast environments.

High contrast can be enabled manually by users or triggered automatically by OS- and browser-level accessibility settings such as forced colors mode. System-level preferences take precedence over PatternFly theme settings, so users who have already configured high contrast in their OS or browser will get a consistent experience without conflict.

**Note:** Activating high contrast mode will override and disable glass mode&mdash;whether triggered manually or via the OS-level `prefers-reduced-transparency` media query.

For implementation guidance, refer to the [high contrast handbook](/foundations-and-styles/theming/high-contrast-handbook).

<div class="ws-docs-content-img">
![A collage of multiple PatternFly components, like a calendar, alert, and menu. The top half of the image has components on a white background with black text and the bottom half of the image has dark components on a black background with light text. All components have high contrast, with borders and noticeable colors.](./img/components-hc.svg)
</div>

### Glass

Glass mode introduces transparency, blur, and depth to the UI, creating a layered visual effect. It is available in both light and dark color schemes across the Default and Project Felt themes, and can be manually enabled in either.

When glass is enabled, the following changes will apply:
- **Transparency, blur, and shadows:** Surface-level container backgrounds become semi-transparent and apply blur and shadow adjustments, letting content below subtly show through to create a sense of depth and content hierarchy.
- **Background image:** A brand-approved background image fills the page body, providing the visual layer that glass containers sit above. Product teams must use approved images and ensure text is never placed outside of a container and directly on top of a background image.
- **Component-level glass:** Glass automatically applies to the login page, masthead, navigation, and page. It can be manually extended to cards, drawers, and panels.
- **Layout variations:** A banded masthead (with a solid fill and shadowed border to anchor it above the page) and a floating side navigation (with a solid fill and shadow to visually separate it from glass content) are automatically used in place of their standard counterparts.

Products using glass mode must provide users a clear way to switch to default contrast or high contrast. When high contrast is enabled—manually or via the OS-level `prefers-reduced-transparency` media query&mdash;glass effects are automatically disabled.

For more details, including implementation guidance, refer to the [glass mode handbook](/foundations-and-styles/theming/glass-mode-handbook).

## Feature compatibility 

The following table outlines the availability and compatibility of PatternFly features across themes. 

| Feature | Default theme | Project Felt theme |
| --- | --- | --- | 
| Accent color | Blue | Red | 
| Interactive element colors | Blue | Blue | 
| Border radius shape | Square | Pill | 
| Default contrast mode | Standard | Standard | 
| Background image | Optional (Manual) | Required (with glass mode) |
| Branded icons | Optional (Manual) | Default
| High contrast support | Yes | Yes |

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

## Theming in Figma

Our Figma libraries fully support theming. Designers can create a single design and then swap between our themes using the "Apply Variable Mode" toggles in the "Appearance" section of the component properties panel. This makes it easy to visually test and validate designs across all supported themes.

The standard light PatternFly theme will be applied to components by default. If you want your mockups to use our dark or high contrast themes, you will need to adjust the following settings in Figma. 

**Note:** Our charts use a unique token collection, so you will need to adjust chart variable modes separately from components in order to swap themes. To change the variable mode for charts, follow the same steps outlined for component theme adjustments. 

### Swapping themes

To swap between the Default and Project Felt themes, adjust the theme variable mode. The Project Felt mode will automatically apply the red accents, pill shapes, and glass treatment.

### Swapping color schemes

To swap your components to our standard dark mode, change the Semantic Color Tokens variable mode to be "Dark":

<div class="ws-docs-content-img">
![Figma settings menu to select different token variables.](./img/figma-dark-mode.svg)
</div>

### Swapping contrast modes

To swap your components to our high contrast mode, change the Semantic Dimension Tokens variable mode to be "High Contrast" and choose either "Light - High Contrast" or "Dark - High Contrast" for the Semantic Color Tokens variable mode:

<div class="ws-docs-content-img">
![Figma settings menu to select different token variables.](./img/figma-hc-mode.svg)
</div>
