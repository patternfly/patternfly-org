---
id: Develop with tokens
section: tokens
---

### Using tokens 

Tokens are located in [PatternFly's core HTML repo](https://github.com/patternfly/patternfly/tree/v6/src/patternfly/base/tokens).

To develop with PatternFly tokens, you must first install the tokens package from `@patternfly/react-tokens`.

## Migrate 

To support tokens, PatternFly's [global CSS variable system](/developer-resources/global-css-variables) has been updated and variable names have been updated across all PatternFly components and extensions. To migrate to our token system, all you need to do is [upgrade to PatternFly 6](/get-started/upgrade).

However, if you make customizations to PatternFly components in your product, you will need to manually update your CSS variable names, so that they match the [token variable](). There is no one-to-one recommendation for any particular CSS variable, so you will need to choose a variable that is most appropriate for your use case

Once you've completed your migration, you're all set! Be sure to continue to use token variables going forward. 