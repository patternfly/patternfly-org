---
id: Upgrade
source: upgrade-guide
title: Upgrade to PatternFly 6
section: get-started
---
import { Alert, Button, Divider } from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';

<Alert variant="info" isInline title="Are you ready for PatternFly 6?"> To ensure  your product is ready for PatternFly 6, [complete the PatternFly 5 upgrade process](https://v5-archive.patternfly.org/get-started/upgrade) first to address any necessary changes from our previous release.
</Alert>

PatternFly 6 introduces the exciting new features and functionality outlined [our release highlights](/get-started/release-highlights). For a detailed breakdown on the work that went into this release, you can view [the PatternFly 6 major release notes](/get-started/upgrade/release-notes). 

In the following sections, this upgrade guide outlines steps required to migrate your codebase to PatternFly 6 and additional resources to support your journey:

1. [Notable changes](#notable-changes): Significant changes you should be aware of before starting your upgrade.
1. [Upgrade steps](#how-to-upgrade): Step-by-step instructions for upgrading.
1. [Help resources](#get-help): Easy-access links to get help from the PatternFly team.

<Divider />

## Notable changes

Before you upgrade, familiarize yourself with these significant changes. While some are handled by codemods, some changes *could* require manual intervention and should be kept in mind as you upgrade.

### Components

1. [Chip](/components/chip): Replaced with [label](/components/label).
1. [Tile](/components/tile): Replaced with [card](components/card).
1. [Text](https://v5-archive.patternfly.org/components/text): Renamed to ["content"](/components/content).  
1. [Expandable section](/components/expandable-section): Removed `isActive`.
1. [Empty state](/components/empty-state): Refactored. 
    - This refactoring is not *entirely* handled by codemods. Depending on your implementation, your empty states could also require manual updates. For more details, search "empty state" in the [release notes table](/get-started/upgrade/release-notes). 

### Charts

To support multiple chart libraries, Victory-based charts have moved to a "victory" directory in [@patternfly/react-charts](https://www.npmjs.com/package/@patternfly/react-charts). Your import paths will need to align with this change. 

- **Old path:** `import { Area } from '@patternfly/react-charts';` 
- **New path:** `import { Area } from '@patternfly/react-charts/victory';` 

Victory is now an optional peer dependency, allowing future chart libraries to be installed without including Victory dependencies and vice versa.

To install Victory packages, you can either: 
- Install the single "victory" package to cover all features.
- Install specific packages, based on your product's features (such as "victory-core" or "victory-tooltip").

<Divider />

## How to upgrade

Your upgrade process will require you to complete these steps:

1. Update your dependencies to use PatternFly 6 instead of PatternFly 5.
1. [Run our codemods suite](#1-run-our-codemods-suite).
1. [Remove all CSS overrides](#2-remove-all-css-overrides). 
1. [Review and update variable and class names](#3-review-and-update-variable-and-class-names). 
1. [Update any pixel-based logic for your breakpoints](#4-update-any-pixel-based-logic-for-breakpoints).

### 1. Run our codemods suite

**Note:** Do this _before_ making any manual changes to your codebase. Waiting until after will lead to even more manual intervention and cleanup. 

We offer a suite of PatternFly codemods to simplify and streamline your upgrade process. Instead of having you manually locate errors across your codebase, our codemods can quickly identify and fix major issues. Some changes will still require manual intervention, but our codemods can automatically fix many issues and flag any that require manual work.

To run [our codemods](https://github.com/patternfly/pf-codemods/), follow these steps: 

1. First, make sure that you have updated your dependencies to use PatternFly 6 instead of PatternFly 5. This is not handled by codemods.

1. Run this command, adding in the path to your product's source code: 

  `npx @patternfly/pf-codemods@latest <path to your source code> --v6`

    * You should see an output similar to running `lint`, including a list of warnings and errors and a total count of each:
    
    ![Example codemod output.](./img/codemod-output.png)

    * If your results don’t look like this, [reach out to the PatternFly team](#get-help) before continuing. 

2. Make note of any flagged issues.

3. Add the `--fix` flag to the end of your original command and run it again. 

4. Make note of the changes applied to your codebase.

5. Note any errors that were not automatically fixed (some may simply be warnings) and manually repair critical issues.

6. Build your product.

7.  To ensure that all issues are flagged and addressed, complete steps 1-6 multiple times. Once everything looks correct, continue to [step 2](#2-remove-all-css-overrides).

8. You will likely need to make updates to [React tokens](https://www.patternfly.org/tokens/develop-with-tokens/#react-tokens) in your product, discussed in step 3.

### 2. Remove all CSS overrides

The new design token system in PatternFly 6 changes variable names across PatternFly. Any existing CSS overrides will be targeting outdated styles and will no longer work, so they must be updated or removed.

Once you've completed the standard codemods in step 1:
1. Temporarily remove your overrides and see how things look.
    - Since there isn't a PatternFly 6 equivalent for every PatternFly 5 style, some of your previous overrides will likely have no effect and can be removed. 
1. Completely remove CSS overrides as much as possible, so that your product upgrade experience will be smoother for future releases. 
1. If you need to keep any CSS customizations, continue to [step 3](#3.-review-and-update-variable-and-class-names).

### 3. Review and update variable and class names

A number of variables have been removed or added&mdash;primarily due to logical direction changes, refactoring, or deprecation. For more context, we've put together these lists: 
- [Removed variables](https://docs.google.com/spreadsheets/d/e/2PACX-1vQqeH7ThYi0jkhYEB8B2SXa7x8AaY5T9ajG6o-Ogz3p7YVp0OuTulb_L3DYLDrHlY4zUE3IBiup6tkN/pubhtml?gid=1160160856&single=true) 
- [Added variables](https://docs.google.com/spreadsheets/d/e/2PACX-1vQqeH7ThYi0jkhYEB8B2SXa7x8AaY5T9ajG6o-Ogz3p7YVp0OuTulb_L3DYLDrHlY4zUE3IBiup6tkN/pubhtml?gid=268831450&single=true).

Wherever you have custom CSS overrides that reference PatternFly class names or CSS variables, carefully review them and make updates to ensure that they align with [our new design tokens](/tokens/all-patternfly-tokens). 

To assist with naming updates, we offer 3 codemods: 
1. [class-name-updater](https://github.com/patternfly/pf-codemods/tree/main/packages/class-name-updater): Automatically identifies and renames classes to align with changes in PatternFly 6.
1. [tokens-update](https://github.com/patternfly/pf-codemods?tab=readme-ov-file#tokens-update): Updates global CSS variables in your React code, including React tokens.
1. [css-vars-updater](https://github.com/patternfly/pf-codemods/tree/main/packages/css-vars-updater): Updates CSS variables in non-React files, including .css, .scss, .md, or another file type that you specify. 

The following guidance outlines the steps to run these codemods.

#### Run class-name-updater
For more details, refer to [the class-name-updater README](https://github.com/patternfly/pf-codemods/tree/main/packages/class-name-updater).

This codemod highlights places in your codebase that may require you to make adjustments and specifically replaces `pf-v5` prefixes with `pf-v6`. It performs a simple "find and replace", so it could inadvertently identify code that resembles a PatternFly class name. Keep an eye out for this to avoid any unintentional changes.

When using this codemod, make sure to add: 
- The `--v6` option, since you are upgrading to PatternFly 6. This codemod targets v5 of PatternFly by default.
- The `--fix` flag to allow the codemod to fix issues where possible.

#### Run tokens-update
For more details, refer to [the tokens-update example in the pf-codemods README](https://github.com/patternfly/pf-codemods?tab=readme-ov-file#tokens-update).

This codemod updates global color variables in .js and .tsx files to a temporary hot pink color to visibly mark the places where you need to manually replace tokens (`--pf-t--temp--dev--tbd`, or `t_temp_dev_tbd` when using [React tokens](/tokens/develop-with-tokens#react-tokens)). For other global variables (like spacers, font size, or box shadows), it will attempt to provide an auto-fix to match the same or closest value.

This codemod works both for CSS variables and React tokens. For example:
- A CSS variable: `--pf-v5-global--FontSize--lg` becomes `--pf-t--global--font--size--lg`
- A React token: `global_FontSize_lg` becomes `t_global_font_size_lg`

##### Manual React token updates
Codemods will sometimes be unable to fix *all* tokens imported by `@patternfly/react-tokens` because there is often no 1:1 match for a PatternFly 5 and PatternFly 6 React token. 

If you continually receive errors that tokens in your code don’t exist, despite re-running codemods, it doesn't necessarily mean that codemods didn't work. It could mean your React tokens point to old global variables. If so, you must locate outdated tokens and replace them with the [PatternFly 6 React token](/tokens/develop-with-tokens#react-tokens) that best fits your use case.

Example:
- PatternFly 5 token: `global_link_Color_hover`
- PatternFly 6 token: `t_global_color_nonstatus_green_clicked`

While these tokens have different uses, this example is meant to show how the general syntax changed, which is what leads to errors with your code.

#### Run css-vars-updater

For more details, refer to[ the css-vars-updater README](https://github.com/patternfly/pf-codemods/tree/main/packages/css-vars-updater). 

This codemod automatically identifies PatternFly 5 CSS variables that need to be updated after the introduction of [design tokens in PatternFly 6](https://www.patternfly.org/tokens/about-tokens/). It will help you update these CSS variables in non-React files, including .css, .scss, .md, or another file type that you choose.

### 4. Update any pixel-based logic for breakpoints

PatternFly 6 uses rem units for global breakpoint [design tokens](/tokens/all-tokens), rather than pixels. 

If you have previously implemented any breakpoint logic based on a pixel value, you will need to account for the fact that PatternFly 6 breakpoint tokens use rems. To find the rem equivalent, divide your pixel value by 16 or refer to this table:

| Breakpoint | Design token | Pixel value (previous) | Rem value (new) |
| --- | --- | --- | --- |
| xs |`--pf-t--global--breakpoint--xs` | 0px | 0rem
| sm |`--pf-t--global--breakpoint--sm` | 576px | 36rem
| md |`--pf-t--global--breakpoint--md` | 768px | 48rem
| lg |`--pf-t--global--breakpoint--lg` | 992px | 62rem
| xl |`--pf-t--global--breakpoint--xl` | 1200px | 75rem
| 2xl |`--pf-t--global--breakpoint--2xl` | 1450px | 90.625rem

### Potential test failures

#### Button

1. *Cannot find aria-disabled*
    - **Cause:** We changed button's `isDisabled` prop to assign a value for `disabled`, but none for `aria-disabled`. The exception to this is when the `component` prop is passed anything other than "button" as a value. Additionally, `aria-disabled` will now only render when true.
    - **Fix:** Remove tests that look for `aria-disabled` in buttons when the expectation is either:
      - For `aria-disabled` to be false.
      - For `aria-disabled` to match `isDisabled` when `component="button"`.

1. *Cannot find button attributes when using byText*
    - **Cause:** We added a wrapping `div` around button text. The RTL `byText` query returns that wrapper instead of the button element itself, where button's attributes live. 
    - **Fix:** Instead of `byText`, use `byRole` and pass the button text to `name`. This returns the top-level button element. 

#### Select 

1.  *Cannot find role* (When using React Testing Library)  
    - **Cause:** The React Testing Library query can't find the menu options if the Popper menu is set to `aria-disabled` after a selection is made. This error only seems to occur in unit tests&mdash;not browsers.
    - **Fix:** Pass in the `{hidden: true}` option or change select's `appendTo` to `inline`. 

<Divider />

## Get help 

If you need support as you upgrade, the PatternFly team is here to help! Since this upgrade includes significant visual changes, please contact us with questions about styles or concerns with your UI. We'll always do our best to answer your questions, double-check your work, and connect you with the right people quickly. 

<Button variant="link" icon={<ArrowRightIcon />} iconPosition="end" isInline component="a" href="https://join.slack.com/t/patternfly/shared_invite/zt-1npmqswgk-bF2R1E2rglV8jz5DNTezMQ" target="_blank"> 
Reach out to us on Slack
</Button>

<Button variant="link" icon={<ArrowRightIcon />} iconPosition="end" isInline component="a" href="https://github.com/orgs/patternfly/discussions" target="_blank"> 
Ask a question in GitHub Discussions
</Button>

**Note:** If you use a custom solution to replicate PatternFly styling (without using PatternFly components), then your product will need to be re-skinned. This may be a large undertaking, so we encourage you to get help from the PatternFly team.
