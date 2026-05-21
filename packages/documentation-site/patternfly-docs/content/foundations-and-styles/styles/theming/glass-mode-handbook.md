---
id: Theming
section: foundations-and-styles
source: glass-mode-handbook
---

# Glass mode developer handbook 

Glass mode is a contrast mode option that can be manually enabled in both our Default and Project Felt themes. Glass adds transparency, blurring, and depth to the UI to create a more dynamic visual effect where brand-approved background images and layered UI elements subtly show through. 

When turned on, glass applies to the following components, including their uses within our extensions:
- Login page
- Masthead
- Navigation
- Page

Additionally, glass can be manually enabled on the following components, via the `isGlass` prop: 
- Card
- Drawer
- Hero
- Panel

Many components also support the `isPlain` prop, which removes their default solid background color so they can sit directly on a glass-enabled surface without obscuring the intended depth effect.

## Glass-specific component variants

When glass is enabled, two component variants are automatically applied in place of their standard counterparts to help anchor the experience:

- **Banded masthead:** Adds a solid fill color and shadowed border to the masthead, setting it apart as a persistent dock above the rest of the page.
- **Floating side navigation:** Adds a solid fill color and shadowed border to the side navigation, insetting it to make it visually elevated and clearly readable as a navigation resource within the glass context.

## Background images

The glass effect is most visible when placed over a background image. To retain readability and ensure proper contrast ratios are met, images shouldn't contain high levels of detail or extreme contrast. 

Background images, including non-branded and product-specific options are available to download from the [Red Hat brand portal](https://redhat.brand-portal.adobe.com/mediaportal.html/content/dam/mac/redhat/brand/brand-engagement-kit/wallpapers/product-interface-backgrounds?disableExpiredRedirect=true). If a Red Hat product team does not want to use one of the premade background options, then customized background images must be created in collaboration with the brand team.

Text must never be placed directly on a background image&mdash;it should be placed within a container that has a background color or glass effect. Titles or headings with stronger font weights can be placed directly on background images only if they pass specific brand and contrast requirements.

### Default background images

PatternFly includes background images for the glass theme and automatically applies them when you pull in PatternFly styles. Two sets of images are provided:

- **Default PatternFly theme:** `PF-Bkg-Generic-Light.svg` and `PF-Bkg-Generic-Dark.svg`
- **Project Felt theme:** `Felt-Bkg-Generic-Light.svg` and `Felt-Bkg-Generic-Dark.svg`

The path to these images depends on how you pull in PatternFly styles.

**From `@patternfly/patternfly`** (typically via `@patternfly/patternfly/patternfly.css`):
```
@patternfly/patternfly/assets/images/
```

**From `@patternfly/react-core`** (via `@patternfly/react-core/dist/styles/base.css`):
```
@patternfly/react-core/dist/styles/assets/images/
```

As long as you include PatternFly CSS through one of those two methods, the background images will be applied automatically.

### Customizing background images

If you are not using one of the standard import paths, or you want to supply your own images, you can override the following CSS variables. Overrides should be scoped to the `:root` selector.

| Variable | Default value | Usage |
| --- | --- | --- |
| `--pf-t--global--background--image--glass` | `url("./assets/images/PF-Bkg-Generic-Light.svg")` | Default/glass light theme background image |
| `--pf-t--global--background--image--glass--dark` | `url("./assets/images/PF-Bkg-Generic-Dark.svg")` | Default/glass dark theme background image |
| `--pf-t--global--background--image--felt--glass` | `url("./assets/images/Felt-Bkg-Generic-Light.svg")` | Felt/glass light theme background image |
| `--pf-t--global--background--image--felt--glass--dark` | `url("./assets/images/Felt-Bkg-Generic-Dark.svg")` | Felt/glass dark theme background image |

For example, to override both dark theme background images, add this to your application's CSS:

```css
:root {
  --pf-t--global--background--image--glass--dark: url(../backgrounds/custom/my-glass-dark-image.jpg);
  --pf-t--global--background--image--felt--glass--dark: url(../backgrounds/custom/my-felt-glass-dark-image.jpg);
}
```

## Opacity

The default opacity values used in our components have been tested for accessibility, legibility, and visual appeal. Glass surfaces (page, masthead, navigation, and similar components) use 50% opacity in both light and dark mode, with a background blur effect applied.

If a product team chooses to override these token values, they are responsible for conducting their own accessibility evaluation to ensure WCAG compliance.

## Enabling glass mode

Glass mode is designed to work across light and dark color schemes in both our Default and Project Felt themes. To enable glass, add the class `.pf-v6-theme-glass` to your application’s `<html>` tag. When implementing glass, it’s important to ensure that it does not harm the overall accessibility or usability of your product.

### Technical constraints

There are a few technical constraints to abide by when using glass in your product.

- **No glass-on-glass layering:** Never layer glass-enabled containers. Doing so can cause significant performance and accessibility problems. For example, child objects inside a blurred parent container can become illegibly blurred themselves. To mitigate this, we have intentionally adjusted the opacity of our background color design tokens to simulate depth without introducing extra blur.
- **High contrast precedence:** If high-contrast mode is enabled, all glass effects must be automatically disabled to prioritize functional accessibility.
- **User controls and preferences:** Because some users might experience legibility issues in glass mode, any product utilizing glass must also let users swap to default contrast or high contrast via a theme switcher or preferences menu. Products should also respect the OS-level `prefers-reduced-transparency` media query, disabling glass or replacing it with a solid high-opacity background to accommodate users appropriately. 

## Glass design tokens 

The following tokens are used together to create the glass effect.

| Token | Value | Usage |
| --- | --- | --- |
| `--pf-t--global--background--color--glass--primary--default` | Light mode value: #FFFFFF (50% opacity) <br />  Dark mode value: #292929 (50% opacity) | Base fill for glass containers. |
| `--pf-t--global--background--filter--glass--default` | Light mode value: 16% blur <br />  Dark mode value: 16% blur | Amount of blur applied to an element. |
| `--pf-t--global--border--color--glass--default` | `--pf-t--global--border--color--alt` | Boundary highlight for glass surfaces. |
| `--pf-t--global--border--radius--glass--default` | `--pf-t--global--border--radius--medium` | Rounded border for glass elements. |
| `--pf-t--global--box-shadow--glass--default` | `--pf-t--global--box-shadow--md` | Shadow that signifies elevation. |

**Note:** `--pf-t--global--background--color--sticky--default` is not a glass-specific token, but it is relevant in glass contexts by providing a solid background for non-glass elements (like sticky headers) that sit directly on top of glass content.

## Best practices

To ensure a successful implementation, follow these best practices:
- Ensure all text meets a 4.5:1 (AA) contrast ratio.
- Ensure that high contrast mode overrides any use of glass to maintain accessibility requirements. 
- Always verify glass components against both light and dark background variations to catch contrast failures early.