---
id: Develop with tokens
section: tokens
---

### Using tokens 

PatternFly tokens are exported from Figma in a JSON file and are then transformed into CSS variables by [Style Dictionary](https://amzn.github.io/style-dictionary/#/). The final SCSS files are located in [PatternFly's core HTML repo](https://github.com/patternfly/patternfly/tree/v6/src/patternfly/base/tokens).

To develop with PatternFly tokens, you must first install the tokens package from 

### Light and dark themes

Our token system covers both light and dark themes. 

### Staying up to date

As our tokens are updated, 

## Migrate to tokens

To support tokens, PatternFly's [global CSS variable system](/developer-resources/global-css-variables) has been updated and variable names have been updated across all PatternFly components and extensions. To migrate to our token system, all you need to do is [upgrade to PatternFly 6](/get-started/upgrade).

However, if you make customizations to PatternFly components in your product, or use CSS overrides, you will need to manually update your CSS variable names to match an appropriate [token variable](). There is no one-to-one recommendation for any particular CSS variable, so you will need to choose a variable that is the most relevant in your use case.

Once you've completed your migration, you're all set! Be sure to continue to use token variables going forward. 