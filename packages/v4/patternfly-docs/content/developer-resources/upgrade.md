---
id: Upgrade
title: Major release upgrade guide
section: get-started
---

Our latest major release introduces new support and functionality to PatternFly, including: 

- React 18 support, 
- Official dark theme support, and
- An enhanced system of CSS classes and variables.

This guide details the major steps you should take to upgrade your product's codebase from PatternFly 4 to PatternFly 5.

# Get help

If you need support as you upgrade to PatternFly 5, the PatternFly team is here to help. Reach out to us on [Slack](https://join.slack.com/t/patternfly/shared_invite/zt-1npmqswgk-bF2R1E2rglV8jz5DNTezMQ) or ask a question on our [GitHub discussion board](https://github.com/orgs/patternfly/discussions). We'll always do our best to answer your questions and connect you with the right people quickly. 

# Run Codemods 

When you upgrade your product to PatternFly 5, several breaking changes will likely be introduced to your product’s codebase. We are using a suite of Codemods to simplify and streamline the upgrade process. Instead of requiring you to manually identify errors and issues in your codebase, you can run our Codemods to quickly identify and fix all issues. 

To utilize our Codemods, you can [view the project on GitHub](https://github.com/patternfly/pf-codemods/) and refer to the following instructions.

##  Running Codemods

To run our Codemods, complete the following steps:

1. Run the following command, adding in the path to your product's source code: 

```{
npx @patternfly/pf-codemods@latest <path to your source code> --exclude menu-search-rename,alert-remove-titleHeadingLevel,datetimepicker-warn-helperText,formgroup-remove-helpertextProps,formhelpertext-remove-props,alert-remove-titleHeadingLevel
}
```

2. Make note of any issues that get flagged.

3. Add the `–fix` flag to the end of your original command and run it again. 

4. Make note of the changes applied to your product's code base.

5. Note any errors that were not automatically fixed (some may simply be warnings) and manually repair issues that are critical.

6. Build your product.

7. Run Codemods multiple times to ensure that all issues are flagged and addressed.

# Review and update CSS variables

Because PatternFly 5 brings changes to class and  variable  names, your existing CSS overrides may be targeting outdated styles. Review your overrides and ensure that they align with our [updated CSS classes and variables.](developer-resources/global-css-variables)

# Upgrade deprecated components 

You will have until our next major release to update the code for your components to match our newest recommendations. If you have not adopted our recommended implementation at that time, your components will be outdated and may not function as needed.

PatternFly 5 brings a new implementation to the following components, which can be upgraded according to the linked documentation:

- [Table](/components/table) 
- [Select](/components/select)
- [Dropdown ](/components/dropdown) 
- [Wizard](/components/wizard)



