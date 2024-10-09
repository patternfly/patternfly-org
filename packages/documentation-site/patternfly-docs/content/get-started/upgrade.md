---
id: Upgrade
source: upgrade-guide
title: PatternFly 6 upgrade
section: get-started
---
import { Alert } from '@patternfly/react-core';

<Alert variant="info" isInline title="Before you upgrade"> Make sure that you have already completed [the PatternFly 5 upgrade](https://www.patternfly.org/get-started/upgrade) before attempting to support PatternFly 6. This will ensure that your product has addressed any necessary changes from our previous release.
</Alert>

PatternFly 6 introduces exciting new features and functionality, including a visual theme refresh that's created with our new [design token system.](/tokens/about-tokens) To learn about the most significant changes in this release, read our [release highlights](/get-started/release-highlights). A detailed list of all changes can be found in our [major release notes](/get-started/upgrade/release-notes). 

This guide outlines the requirements for upgrading your codebase to PatternFly 6 and provides additional resources to support your migration efforts.  

## Get help 

If you need support as you upgrade, the PatternFly team is here to help! Reach out to us on [Slack](https://join.slack.com/t/patternfly/shared_invite/zt-1npmqswgk-bF2R1E2rglV8jz5DNTezMQ) or ask a question on our [GitHub discussion board](https://github.com/orgs/patternfly/discussions). We'll always do our best to answer your questions and connect you with the right people quickly. 

## How to upgrade

When you upgrade your product to PatternFly 6, several breaking changes will likely be introduced to your product’s codebase. 

Where we can, we offer a suite of codemods to simplify and streamline your upgrade process. Instead of requiring you to manually identify all errors and issues in your codebase, you can run our codemods to quickly identify and fix major issues. Keep in mind that some changes will still require manual intervention, but our codemods can automatically fix a large amount of issues and flag any issues that do require manual work.

**Note:** Running codemods after making manual changes will lead to even more manual intervention and cleanup. Because of this, we strongly recommend running codemods _before_ making any manual changes to your codebase.

###  1. Run our codemods suite

[Our suite of PatternFly codemods](https://github.com/patternfly/pf-codemods/) will help your upgrade process. To run these codemods, follow these steps: 

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

### 2. Review and update variable and class names

PatternFly 6 supports our new design token system, which changes variable names across PatternFly. These changes mean that **all** existing CSS overrides must be updated (or removed), because they will be targeting outdated styles and will no longer work. 

Wherever you have any custom CSS overrides that reference PatternFly class names or CSS variables, you should carefully review them and make updates to ensure that they align with our token variables, as described in our [tokens documentation](/tokens/all-patternfly-tokens). As much as possible, we recommend removing your CSS overrides so that your product upgrade experience will be smoother for future releases.

If your product uses a custom solution to replicate PatternFly styling (without using PatternFly components), then it will need to be re-skinned. We recognize that this may be a large undertaking, so we encourage you to reach out to the PatternFly team so that we can help support this work. 

#### Utilize our class-name-updater codemod
[The class-name-updater codemod](https://github.com/patternfly/pf-codemods/tree/main/packages/class-name-updater) automatically identifies class names that need to be updated as a result of changes in PatternFly 6. This helps highlight places in your codebase that may require you to make adjustments. 

This utility performs a simple ‘find and replace’, so it's possible that it will inadvertently identify code that is formatted similarly to a PatternFly class name, but is not one. You should check to ensure that this doesn't cause any unintentional changes.

When using this codemod, make sure to: 
- Add the `--v6` option if you are upgrading to v6. This codemod targets v5 of PatternFly by default.
- Add the `--fix` flag to allow the codemod to fix issues where possible.

#### Utilize our tokens-update codemod

[The tokens-update codemod](https://github.com/patternfly/pf-codemods?tab=readme-ov-file#tokens-update) can help you update global CSS variables in your React code. Note that this will *only* fix JavaScript or TypeScript files: not CSS. 

This codemod updates global color variables to a temporary hot pink color (`--pf-t--temp--dev--tbd`, or `t_temp_dev_tbd` when using [React tokens](/tokens/develop-with-tokens#react-tokens)) to visibly mark the places where you will have to manually replace tokens. For other global variables (like spacers, font size, or box shadows), this codemod will attempt to provide an auto-fix to match the same value (or the closest one).

This codemod works both for CSS variables and React tokens. For example:
- A CSS variable: `--pf-v5-global--FontSize--lg` becomes `--pf-t--global--font--size--lg`
- A react token: `global_FontSize_lg` becomes `t_global_font_size_lg`


