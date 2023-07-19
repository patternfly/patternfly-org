---
id: Colors
section: design-foundations
---
import { Alert, Grid, GridItem, Divider } from '@patternfly/react-core';
import { ColorSwatch } from './ColorSwatch';
import { ColorFamily } from './ColorFamily';
import './colors.css';

# PatternFly colors

## Primary colors
<Grid hasGutter>
  <GridItem xl={6} lg={12} className="ws-colors-gridtext">
    ### PatternFly blue
    <p>
      Primary colors are those displayed most frequently across your application screens and components. Our primary colors (PatternFly blue) are used across components and are typically applied to default, active, focus, and hover states.
    </p>
    <ColorSwatch label="Default" color="--pf-v5-global--primary-color--100">
      This color usually indicates a default or active state for many components, including badges and spinners.
    </ColorSwatch>
    <ColorSwatch label="Hover" color="--pf-v5-global--primary-color--200">
      This color is most commonly used as the hover or focus state for components that use the default primary color, such as buttons and dropdowns.
    </ColorSwatch>
    <ColorSwatch label="High contrast" color="--pf-v5-global--primary-color--300">
      This color meets contrast requirements for dark-theme elements that have text on top, such as primary buttons and unread badges.
    </ColorSwatch>
  </GridItem>
  <GridItem xl={6} lg={12}>
    <img width="480px" src="./patternfly-blue.png" alt="PatternFly blue colors" />
  </GridItem>
</Grid>

## Global colors

### Text and icons
<Grid hasGutter>
  <GridItem xl={6} lg={12} className="ws-colors-gridtext">
    <p>
      Text and icon colors are extremely similar because they can be used in the same context, such as for a link button. We have multiple shades of text colors for both light and dark backgrounds so that you can emphasize hierarchy in any color scenario.
    </p>
    <ColorSwatch color="--pf-v5-global--Color--100">
      This color is used for standard text, icons, and as a hover state color for icon buttons. It is most commonly used as a text color for many components and application screens.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--Color--200">
      This color is used as a secondary text color and as a default color for icon buttons. It is most commonly used for many components, such as the app launcher and empty states.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--link--Color">
      This color is most commonly used for link text and icons for many components, such as navigation and accordions. Blue icons use the same primary color variable as the blue text.
    </ColorSwatch>
  </GridItem>
  <GridItem xl={6} lg={12}>
    <img width="480px" src="./patternfly-typography.png" alt="PatternFly typography colors" />
  </GridItem>
</Grid>

### Background colors
<Grid hasGutter>
  <GridItem xl={6} lg={12} className="ws-colors-gridtext">
    <p>
      Background colors are used throughout components and for certain screens, depending on the use case. Light colors can be used interchangeably with full-screen backgrounds, while dark background colors are strictly used within components.
    </p>
    <ColorSwatch color="--pf-v5-global--BackgroundColor--200">
      This color is most commonly used as a secondary background color for full application screens and hover backgrounds.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--BackgroundColor--100">
      This color is most commonly used as a primary background color for full application screens and many components, such as cards and tables/data lists.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--BackgroundColor--dark-100">
      This color is most commonly used as a background color for many components, such as tooltips and wizards.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--BackgroundColor--dark-200">
      This color is used as a background color for navigation.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--BackgroundColor--dark-300">
      This color is most commonly used as a background color for many components, such as navigation.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--BackgroundColor--dark-400">
      This color is used as a background color for navigation.
    </ColorSwatch>
  </GridItem>
  <GridItem xl={6} lg={12}>
    <img width="480px" src="./patternfly-background.png" alt="PatternFly background colors" />
  </GridItem>
</Grid>

### Status and state colors
<Grid hasGutter>
  <GridItem xl={6} lg={12} className="ws-colors-gridtext">
      Status and state colors are indicators that communicate data and actions to users through the UI. Our status colors cover default, danger, success, information, and warning statuses, as well as disabled states.
  </GridItem>
  <GridItem xl={6} lg={12} rowSpan={6}>
    <img width="443px" src="./patternfly-status.png" alt="PatternFly status colors" />
  </GridItem>
  <GridItem xl={6} lg={12}>
    <h3>Default</h3>
    <ColorSwatch color="--pf-v5-global--default-color--300" caption="alert title">
      This color is used as the title color for the default alert component.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--default-color--200" caption="alert icon">
      This color is used as the icon color for the default alert component.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--palette--cyan-50" caption="inline alert background">
      This color is used as the background color for the default inline alert component.
    </ColorSwatch>
  </GridItem>
  <GridItem xl={6} lg={12}>
  <h3>Danger</h3>
    <ColorSwatch color="--pf-v5-global--danger-color--200" caption="alert title">
      This color is used as the title color for the danger alert component.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--danger-color--100" caption="alert icon">
      This color is used as the icon color for the danger alert component.
    </ColorSwatch> 
    <ColorSwatch color="--pf-v5-global--palette--red-50" caption="inline alert background">
      This color is used as the background color for danger inline alert component.
    </ColorSwatch>
  </GridItem>
  <GridItem xl={6} lg={12}>
    <h3>Success</h3>
    <ColorSwatch color="--pf-v5-global--success-color--200" caption="alert title">
      This color is used as the title color for the success alert component.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--success-color--100" caption="alert icon">
      This color is used as the icon color for the success alert component.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--palette--green-50" caption="inline alert background">
      This color is used as the background color for the success inline alert component.
    </ColorSwatch>
  </GridItem>
  <GridItem xl={6} lg={12}>
    <h3>Info</h3>
    <ColorSwatch color="--pf-v5-global--info-color--200" caption="alert title">
      This color is used as the title color for the info alert component.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--info-color--100" caption="alert icon">
      This color is used as the icon color for the default alert component.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--palette--blue-50" caption="alert background">
      This color is used as the background color for the info inline alert component.
    </ColorSwatch>
  </GridItem>
  <GridItem xl={6} lg={12}>
    <h3>Warning</h3>
    <ColorSwatch color="--pf-v5-global--warning-color--200" caption="alert title">
      This color is used as the title color for the warning alert component.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--warning-color--100" caption="alert icon">
      This color is used as the icon color for the warning alert component.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--palette--gold-50" caption="inline alert background">
      This color is used as the background color for the warning inline alert component.
    </ColorSwatch>
  </GridItem>
   <GridItem xl={6} lg={12}>
    <h3>Disabled</h3>
    <ColorSwatch color="--pf-v5-global--disabled-color--100">
      This color is used as the text color when components are disabled.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--disabled-color--200">
      This color is used as the background color for many components when they are disabled, such as buttons and the application launcher.
    </ColorSwatch>
    <ColorSwatch color="--pf-v5-global--disabled-color--300">
      This color is used as an alternate background color for components when they are disabled, such as dropdowns and options menus.
    </ColorSwatch>
  </GridItem>
</Grid>

### Shadows
<Grid hasGutter>
  <GridItem xl={6} lg={12} className="ws-colors-gridtext">
    <p>
      Shadows provide specifics about depth, movement direction, and surface edges. Depending on the surface’s elevation and relationships to other surfaces, the type of shadow will change.
    </p>
    <ColorSwatch label="Large" color="--pf-v5-global--BoxShadow--lg">
      This variable displays a large shadow for many components, such as alerts and modals.
    </ColorSwatch>
    <ColorSwatch label="Medium" color="--pf-v5-global--BoxShadow--md">
      This variable displays a medium shadow for many components, such as accordions and dropdowns.
    </ColorSwatch>
    <ColorSwatch label="Small" color="--pf-v5-global--BoxShadow--sm">
      This variable displays a small shadow for the card component.
    </ColorSwatch>
  </GridItem>
  <GridItem xl={6} lg={12}>
    <img width="443px" src="./patternfly-shadows.png" alt="PatternFly shadows" />
  </GridItem>
</Grid>

## Contrast ratios
<p>
  <a href="https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/" target="_blank" className="pf-m-link">Level AA in the Web Content Accessibility Guidelines 2.1</a> requires a contrast ratio of at least 4.5:1 for normal text, 3:1 for large text, and 3:1 for graphics and UI components (such as form input borders).
</p>

Check the contrast between the background color and text color using a <a href="https://color.a11y.com/?wc3" target="_blank" className="pf-m-link">WCAG AA-compliance tool.</a>

Make sure that, on hover, the link text color has ample contrast from both the background color and the default state link color.

## Color palette
Our palettes are created as a system designed to reinforce application content and workflows. Bright colors are reserved for specific interactions, such as reinforcing status, and are used sparingly. Our palettes are simple, consolidated, and versatile to allow them to be easily deployed for any situation.

<Grid hasGutter>
  <GridItem xl2RowSpan={1} xl2={4} xl={6} xlRowSpan={2} sm={12}>
    <ColorFamily title="Gray family" family="black" />
  </GridItem>
  <GridItem xl2={4} xl={6} sm={12}>
    <ColorFamily title="Blue family" family="blue" />
  </GridItem>
  <GridItem xl2={4} xl={6} sm={12}>
    <ColorFamily title="Shadows" family="shadows" />
  </GridItem>
  <GridItem xl2={4} xl={6} sm={12}>
    <ColorFamily title="Green family" family="green" />
  </GridItem>
  <GridItem xl2={4} xl={6} sm={12}>
    <ColorFamily title="Cyan family" family="cyan" />
  </GridItem>
  <GridItem xl2={4} xl={6} sm={12}>
    <ColorFamily title="Purple family" family="purple" />
  </GridItem>
  <GridItem xl2={4} xl={6} sm={12}>
    <ColorFamily title="Light blue family" family="light-blue" />
  </GridItem>
  <GridItem xl2={4} xl={6} sm={12}>
    <ColorFamily title="Gold family" family="gold" />
  </GridItem>
  <GridItem xl2={4} xl={6} sm={12}>
    <ColorFamily title="Light green family" family="light-green" />
  </GridItem>
  <GridItem xl2={4} xl={6} sm={12}>
    <ColorFamily title="Orange family" family="orange" />
  </GridItem>
  <GridItem xl2={4} xl={6} sm={12}>
    <ColorFamily title="Red family" family="red" />
  </GridItem>
</Grid>