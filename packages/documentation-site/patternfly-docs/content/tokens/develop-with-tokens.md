---
id: Develop with tokens
section: tokens
---

## Using tokens in code

PatternFly tokens are exported from Figma and transformed into CSS variables for use in code. You can find all token files in [the core HTML repo](https://github.com/patternfly/patternfly/tree/v6/src/patternfly/base/tokens).

Our tokens are named semantically, so that they're meaningful and better communicate their function. When using tokens in code you should always use the semantic token that best matches your needs. For example, choose a color token based on its function, not just its hex value. 

In the event that there isn't a semantic token that fits your use case, then you can use a base token instead. Do not use palette tokens. They are the foundation of our token system and there will always be a better base or semantic token to use.

[View all PatternFly design tokens.](/tokens/all-patternfly-tokens)

### Dark theme support

Our token system supports both light and dark themes by default. To enable dark theme, you just need to add the class `pf-[version]-theme-dark` (for example, `pf-v6-theme-dark`) to your application's `<html>` tag. Then, when dark theme is enabled, your product will automatically pull in dark theme tokens, in order to adapt visual styles appropriately.

For more information, refer to our [dark theme handbook.](/developer-resources/dark-theme-handbook) 

## Migrate to tokens

To support tokens, PatternFly's global CSS variable system has been updated. Variable names have been updated across all PatternFly components and extensions. To migrate to our token system, you must [upgrade to PatternFly 6.](/get-started/upgrade)

If you make customizations to PatternFly components in your product, or use CSS overrides, you will need to manually update your CSS variable names to match an appropriate [semantic token](/tokens/all-patternfly-tokens). There is no one-to-one recommendation for any particular CSS variable, so you will need to choose the most appropriate token for your use case. 

### Choosing tokens
We tried to clearly and name our semantic tokens. However, until you're unfamiliar with our token system, it may not be immediately clear which token you should use for your scenario. These are some of the high-level properties and their associated meanings: 

1. Colors 

    | **Concept** | **Use case** | **Examples** |  **Variants** |
    | --- | --- | --- | --- |
    | Status | Used to communicate the status of an object. | Alerts, | custom, info, danger, warning, success |
    | Nonstatus | Used to color objects that don't communicate status. |  | red, orangered, orange, yellow, green, teal, blue, purple, gray 
    | --- | --- | --- | --- |

2. Dimensions 

    | **Concept** | **Use case** | **Examples** |  **Variants** |
    | --- | --- | --- | --- |
    | --- | --- | --- | --- |
    | --- | --- | --- | --- |
    

3. Motion 

    | **Concept** | **Use case** | **Examples** |  **Variants** |
    | --- | --- | --- | --- |
    | --- | --- | --- | --- |
    | --- | --- | --- | --- |