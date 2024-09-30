---
id: Upgrade
source: upgrade-guide
title: PatternFly 6 upgrade
section: get-started
---

If you have not previously upgraded to PatternFly 5, make sure to review its [upgrade guide](https://www.patternfly.org/get-started/upgrade) before attempting to support PatternFly 6, to ensure that your product has addressed any necessary changes from our previous release.

PatternFly 6 introduces new support and functionality to PatternFly, including: 

- A design token system,
- A new PatternFly 6 visual theme,
- And more!

To learn about the most significant changes in this release, read our [release highlights](/get-started/release-highlights). A detailed list of all changes can be found in our [major release notes](/get-started/upgrade/release-notes). 

This guide outlines the major steps you should take to upgrade your product's codebase from PatternFly 5 to PatternFly 6. 

## Get help 

If you need support as you upgrade to PatternFly 6, the PatternFly team is here to help. Reach out to us on [Slack](https://join.slack.com/t/patternfly/shared_invite/zt-1npmqswgk-bF2R1E2rglV8jz5DNTezMQ) or ask a question on our [GitHub discussion board](https://github.com/orgs/patternfly/discussions). We'll always do our best to answer your questions and connect you with the right people quickly. 

## Upgrade your product's codebase

When you upgrade your product to PatternFly 6, several breaking changes will likely be introduced to your product’s codebase. 

Where we can, we offer a suite of codemods to simplify and streamline your upgrade process. Instead of requiring you to manually identify all errors and issues in your codebase, you can run our codemods to quickly identify and fix major issues. Keep in mind that some changes will still require manual intervention, but our codemods can automatically fix a large amount of issues and flag any issues that do require manual work.

###  Run our codemods

**Note:** Running codemods after making manual changes will lead to even more manual intervention and cleanup. Because of this, we strongly recommend running codemods _before_ making any manual changes to your codebase.

To run [codemods](https://github.com/patternfly/pf-codemods/), complete the following steps:

1. Run the following command, adding in the path to your product's source code: 

  `npx @patternfly/pf-codemods@latest <path to your source code> --v6`

    * You should see an output similar to running `lint`, with both a list of warnings and errors, as well as a total count of each, as shown in the following example:
    
    ![Example codemod output.](./img/codemod-output.png)

    * If you see something different, please reach out before going further as there may be an issue.

2. Make note of any issues that get flagged.

3. Add the `--fix` flag to the end of your original command and run it again. 

4. Make note of the changes applied to your product's code base.

5. Note any errors that were not automatically fixed (some may simply be warnings) and manually repair issues that are critical.

6. Build your product.

7. Run codemods multiple times to ensure that all issues are flagged and addressed.

## Review and update variable and class names

PatternFly 6 supports our new design token system, which changes variable names across PatternFly. These changes mean that **all** existing CSS overrides must be updated (or removed), because they will be targeting outdated styles and will no longer work. 

Wherever you have any custom CSS overrides that reference PatternFly class names or CSS variables, you should carefully review them and make updates to ensure that they align with our token variables, which are outlined in our [tokens documentation](/tokens/all-patternfly-tokens). As much as possible, we recommend removing your CSS overrides so that your product upgrade experience will be smoother for future releases.

If your product uses a custom solution to replicate PatternFly styling (without using PatternFly components), then it will need to be re-skinned. We recognize that this may be a large undertaking, so we encourage you to reach out to the PatternFly team so that we can help support this work.

### Utilize our class-name-updater codemod
We offer a [`class-name-updater` codemod](https://github.com/patternfly/pf-codemods/tree/main/packages/class-name-updater) to help support your updates. This utility automatically identifies class names that need to be updated as a result of class name changes in Patternfly 6, which helps highlight places in your codebase that may require you to adjust class names. 

When using this codemod, keep the following guidance in mind: 
- This codemod targets v5 of PatternFly by default, so you will need to add the `--v6` option if you are upgrading to v6.
- Add the `--fix` flag to allow the codemod to fix issues where possible.
- This utility performs a simple ‘find and replace’, so it's possible that it will inadvertently identify code that is formatted similarly to a PatternFly class name, but is not one. You should check to ensure that this doesn't cause any unintentional changes.

For more details, you can refer to [the README file for this codemod](https://github.com/patternfly/pf-codemods/tree/main/packages/class-name-updater).

### Update React tokens

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
