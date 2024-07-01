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

### Choosing tokens 
We tried to name our semantic tokens so that their meaning is clear, but, until you're familiar with our token system, it may not be obvious which token you should choose for your use case. When choosing tokens, consider the following tips and reminders:  

1. **Fuzzy matching/autocomplete on CSS variables** is immensely helpful in finding the right token name. For VSCode, we like the [CSS variable autocomplete plugin.](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables)

1. **Remember that you should only use semantic tokens.** Palette and base tokens provide values for semantic tokens, but generally should never be used otherwise. Palette and base tokens end in a number, but semantic tokens do not&mdash;so never use a token that ends in a number.

1. **Understand the naming layers for semantic tokens.** Remember [the structure of our token names:](/tokens/about-tokens#token-names) 
`--pf-t--[scope]--[component]--[property]--[concept]--[variant]--[state]`

    For each segment, consider the following:
        - **Prefix:** `--pf-t-` indicates the CSS variable is a token.
        - **Scope:** This will be `global` or `chart`.
        - **Component:** What are you applying it to? For example, the background, text, icon, border, box-shadow, motion, or spacer.
        - **Property:** What’s the attribute you are applying? For example, color, size, radius, or width.
        - **Concept:** Is it associated with a concept, like primary, status, nonstatus, or action?
        - **Variant:** What variation do you need? This typically includes:
            - Sizes (xs, sm, md, lg, xl, 2xl)
            - Statuses (danger, warning, success, info)
            - In the case of some text and icon colors&mdash;`on-`, which refers to accessible colors to use on a particular background.
        - **State:** What is the state? For example, default, hover, or clicked.

1. **If you use semantic tokens, you will get dark theme styling for free.** You may notice tokens with `dark` in their name. Don’t be tempted to use them! These exist within a selector that applies dark theme values to the main set of semantic tokens. 

#### Examples 

Look at what you need a token for, and use fuzzy matching to help you find the appropriate token options. Consider the following scenarios (based on [the VS code plugin](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables) we recommend):

- **Scenario 1:** You need to make a disabled state on a custom element. 
    1. You’ll probably want to set the background color: start typing `pft` to get tokens, then `back` for background, followed by `dis` for disabled. 
    1. You'll end up selecting `var(--pf-t--global--background--color--disabled--default)`. 
    1. Next you’ll want to set the text color of that element: type `pft`, then `text` for text color, then `ondis` 
    1. You'll end up with `var(--pf-t--global--text--color--on-disabled)`.
- **Scenario 2:** You need to adjust spacing. 
    1. You probably want a spacer: start typing `pft`, then `sp` to get spacers, followed by the spacer size you want (`sm`, `md`, and so on). 
    1. You'll end up with something like `var(--pf-t--global--spacer--sm)`.