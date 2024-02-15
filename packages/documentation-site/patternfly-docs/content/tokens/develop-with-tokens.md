---
id: Develop with tokens
section: tokens
---

## Using tokens in code

PatternFly tokens are exported from Figma and transformed into CSS variables for use in code. You can find token files in [PatternFly's core HTML repo](https://github.com/patternfly/patternfly/tree/v6/src/patternfly/base/tokens) and refer to [our list of all tokens](/tokens/all-patternfly-tokens).

When using tokens in code: if there's a semantic token that matches your needs then you should always use that. In the event that there isn't a semantic token, then you can use a base token. You should not use palette tokens, as they are the foundation of our token system and there should always be a better base or semantic token to use.

### Dark theme support

Our token system is available for both light and dark themes. We have [separate tokens for dark theme](https://github.com/patternfly/patternfly/blob/v6/src/patternfly/base/tokens/_tokens-dark.scss) to ensure proper contrast ratios. For guidance on enabling and supporting dark theme in your product, refer to our [dark theme handbook.](/developer-resources/dark-theme-handbook) 

## Migrate to tokens

To support tokens, PatternFly's global CSS variable system has been updated and variable names have been updated across all PatternFly components and extensions. To migrate to our token system, all you need to do is [upgrade to PatternFly 6](/get-started/upgrade).

However, if you make customizations to PatternFly components in your product, or use CSS overrides, you will need to manually update your CSS variable names to match an appropriate [token variable](/tokens/all-patternfly-tokens). There is no one-to-one recommendation for any particular CSS variable, so you will need to choose the most appropriate token for your use case. 

Once you've completed your migration, you're ready to continue developing with tokens! 