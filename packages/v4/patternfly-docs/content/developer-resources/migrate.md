---
id: Migrate
title: PatternFly 5 migration guide
section: developer-resources
---

PatternFly's latest major release introduces new support and functionality to PatternFly, including: 

- React 18 support, 
- Official dark theme support, and
- An enhanced system of versioned CSS classes and variables.

Note: Several components have been deprecated and will be removed at the next major release. Consumers will have a year to adopt our new recommendations before a deprecated component is removed.

## Plan your migration strategy

To move from PatternFly 4 to PatternFly 5, you should first develop a migration strategy that helps prioritize your work and identify areas where critical design elements will be impacted by the migration.

To help you begin developing your migration strategy, we’ve identified the following milestones that you should plan for.

### Milestone 1: Upgrade deprecated components 

PatternFly 5 brings a new React implementation to some of our components. For each compnent impacted by this change, as described in the following secttions, complete the outlined steps to upgrade your components.

- Table 
    1. Add instructions 

- Select 
    1. Add instructions 

- Dropdown  
    1. Add instructions 

- Wizard
    1. Add instructions 

### Milestone 2: Run Codemods 

To help products migrate from PatternFly 4 to PatternFly 5, we are using a suite of Codemods to simplify and streamline the upgrade process.

When a product updates to PatternFly 5 dependencies, several breaking changes will likely be introduced to its codebase. Instead of requiring the manual identification of errors and code issues, products can run our Codemods (which should identify all of code issues) and fix as many errors as possible using the `--fix` flag. Any issues not automatically fixed may simply be warnings, but developers will be able to view and take action on a list of all remaining issues identified.

You can [view the Codemods project on GitHub](https://github.com/patternfly/pf-codemods/) and continue reading for instructions on how to run Codemods.

##  Running Codemods

If you update your product to use PatternFly packages and discover compile errors when attempting to complete the build, run Codemods to locate specific issues. To run our Codemods, complete the following steps.

1. Run the following command, adding in the path to your product's source code: 

```{
npx @patternfly/pf-codemods <path to your source code> --exclude menu-search-rename,alert-remove-titleHeadingLevel,datetimepicker-warn-helperText,formgroup-remove-helpertextProps,formhelpertext-remove-props,alert-remove-titleHeadingLevel
}
```

2. Make note of any issues that get flagged.

3. Add the `–fix` flag to your original command and run it again. 

4. Make note of the changes made in your product's the code base.

5. Note any errors flagged that were not automatically fixed and manually repair issues that are critical.

6. Try building again.

7. Try running Codemods multiple times.

If you experience any issues, refer to the following resources to reach out to the PatternFly team.

## Get help

If you need support as you migrate to PatternFly 5, the PatternFly team is here to help. Reach out to us on [Slack](https://join.slack.com/t/patternfly/shared_invite/zt-1npmqswgk-bF2R1E2rglV8jz5DNTezMQ) or ask a question on our [GitHub discussion board](https://github.com/orgs/patternfly/discussions). We'll always do our best to answer your questions and connect you with the right people quickly. 

## Start building with PatternFly 5 libraries
[Get started with React](/get-started/develop#react)

[Get started with HTML/CSS](/get-started/develop#htmlcss)