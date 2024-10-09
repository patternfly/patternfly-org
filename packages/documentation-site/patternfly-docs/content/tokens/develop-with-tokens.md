---
id: Develop with tokens
section: tokens
---

## Using tokens in code

PatternFly tokens are exported from Figma and transformed into CSS variables for use in code. You can find all token files in [the core HTML repo](https://github.com/patternfly/patternfly/tree/v6/src/patternfly/base/tokens).

Our tokens are named semantically, so that they're meaningful and better communicate their function. When using tokens in code you should always use the semantic token that best matches your needs. For example, choose a color token based on its function, not just its hex value. 

In the event that there isn't a semantic token that fits your use case, then you can use a base token instead, but do so sparingly. Do not use palette tokens. They are the foundation of our token system and there will always be a better base or semantic token to use.

[View all PatternFly design tokens.](/tokens/all-patternfly-tokens)

### Dark theme support

Our token system supports both light and dark themes by default. To enable dark theme, you just need to add the class `pf-[version]-theme-dark` (for example, `pf-v6-theme-dark`) to your application's `<html>` tag. Then, when dark theme is enabled, your product will automatically pull in dark theme tokens, in order to adapt visual styles appropriately.

For more information, refer to our [dark theme handbook.](/developer-resources/dark-theme-handbook) 

## Migrate to tokens

To support tokens, PatternFly's global CSS variable system has been updated. Variable names have been updated across all PatternFly components and extensions. To migrate to our token system, you must [upgrade to PatternFly 6.](/get-started/upgrade)

If you make customizations to PatternFly components in your product, or use CSS overrides, you will need to manually update your CSS variable names to match an appropriate [semantic token](/tokens/all-patternfly-tokens). There is no one-to-one recommendation for any particular CSS variable, so you will need to choose the most appropriate token for your use case. 

As you migrate and [select tokens](#selecting-tokens), refer to these recommendations and reminders:

1. **Remember that you should only use semantic tokens.** Palette and base tokens provide values for semantic tokens, but generally should never be used otherwise. Palette and base tokens end in a number, but semantic tokens do not&mdash;so never use a token that ends in a number. 

1. **Don’t start with the old value and work backwards.** For example, there are many things that are “blue” but it’s important to choose the right token for your purpose. In addition, PatternFly 6 has a completely new look&mdash;so what used to be “blue” might not be anymore!

1. **Understand the naming layers for semantic tokens.** Remember [the structure of our token names:](/tokens/about-tokens#token-names) 
`--pf-t--[scope]--[component]--[property]--[concept]--[variant]--[state]`

    For each segment, consider the following:
        - **Prefix:** `--pf-t-` indicates the CSS variable is a token.
        - **Scope:** This will be `global` or `chart`.
        - **Component:** What are you applying it to? For example, the background, text, icon, border, box-shadow, motion, or spacer.
        - **Property:** What’s the attribute you are applying? For example, color, size, radius, or width.
        - **Concept:** Is it associated with a concept, like primary, status, nonstatus, or action?
        - **Variant:** Which variation do you need? This typically includes:
            - Sizes (xs, sm, md, lg, xl, 2xl)
            - Statuses (danger, warning, success, info)
            - In the case of some text and icon colors&mdash;`on-`, which refers to accessible colors to use on a particular background.
        - **State:** What is the state? For example, default, hover, or clicked.

1. **Use fuzzy matching/autocomplete on CSS variables.** This is immensely helpful in finding the right token name. For VSCode, we like the [CSS variable autocomplete plugin.](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables)

1. **If you use semantic tokens, you will get dark theme styling for free.** You may notice tokens with `dark` in their name. Don’t be tempted to use them! These exist within a selector that applies dark theme values to the main set of semantic tokens. 

1. **Be sure to spend time testing how things look.** 
    - Switch to dark theme and make sure things look correct. This will often expose improper tokens. 
    - If your custom style should match and behave like an existing PatternFly component, compare that component's style to yours (in light and dark themes), to confirm that it matches.
    - Try changing a token and see if it changes what you'd expect.

### Selecting tokens 

It’s difficult to consistently map the old global variables to the new design tokens because, for the most part, the old global variables did not convey a lot of meaning. In contrast, design tokens carry intentional meaning. We tried to name our semantic tokens so that their meaning is clear, but, until you're familiar with our token system, it may not be obvious which token you should choose for your use case. 

When choosing tokens, look at what you need a token for, and use fuzzy matching to help you find the appropriate token options. 

The following scenarios provide examples (based on [the VS code plugin](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables) we recommend):

- **Scenario 1:** You need to make a disabled state on a custom element. 
    1. You’ll probably want to set the background color: start typing `pft` to get tokens, then `back` for background, followed by `dis` for disabled. 
    1. You'll end up selecting `var(--pf-t--global--background--color--disabled--default)`. 
    1. Next you’ll want to set the text color of that element: type `pft`, then `text` for text color, then `ondis` 
    1. You'll end up with `var(--pf-t--global--text--color--on-disabled)`.
- **Scenario 2:** You need to adjust spacing. 
    1. You probably want a spacer: start typing `pft`, then `sp` to get spacers, followed by the spacer size you want (`sm`, `md`, and so on). 
    1. You'll end up with something like `var(--pf-t--global--spacer--sm)`.

### React tokens

React tokens are the React version of our CSS variables. They include more than just token variables and will require additional attention to upgrade properly. [You can find the latest tokens here.](https://www.npmjs.com/package/@patternfly/react-tokens)

A React token can be imported from its file directly: 

`import t_token_name from '@patternfly/react-tokens/dist/esm/t_token_name'` 

or from the whole package: 

`import { t_token_name } from '@patternfly/react-tokens'`

React token names are similar to the CSS token names, but use different formatting. Instead of a double-hyphen ( -- ), token segments are separated by an underscore ( _ ). Additionally the `--pf-t` prefix is replaced with `t`. For example, a CSS variable of `--pf-t--global--spacer--sm` becomes `t_global_spacer_sm` as a React token.

Each React token is an object that stores name, value, and var properties:

```
const t_global_spacer_sm = {
  "name": "--pf-t--global--spacer--sm",
  "value": "0.5rem",
  "var": "var(--pf-t--global--spacer--sm)"
}
```