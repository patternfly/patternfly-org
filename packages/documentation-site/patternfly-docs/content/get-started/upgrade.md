---
id: Upgrade
source: upgrade-guide
title: PatternFly 6 upgrade
section: get-started
---

If you have not previously upgraded to PatternFly 5, you may need to [follow these steps to upgrade your product](https://www.patternfly.org/get-started/upgrade) before attempting to support this release.

PatternFly 6 introduces new support and functionality to PatternFly, including: 

-  A design token system,
- A new visual theme, called Penta,
- And more!

To learn about the most significant changes in this release, read our [release highlights](/get-started/release-highlights). A detailed list of all changes can be found in our [major release notes](/get-started/upgrade/release-notes). 

This guide outlines the major steps you should take to upgrade your product's codebase from PatternFly 5 to PatternFly 6. 

## Get help 

If you need support as you upgrade to PatternFly 6, the PatternFly team is here to help. Reach out to us on [Slack](https://join.slack.com/t/patternfly/shared_invite/zt-1npmqswgk-bF2R1E2rglV8jz5DNTezMQ) or ask a question on our [GitHub discussion board](https://github.com/orgs/patternfly/discussions). We'll always do our best to answer your questions and connect you with the right people quickly. 

## Upgrade your product's codebase

When you upgrade your product to PatternFly 6, several breaking changes will likely be introduced to your product’s codebase. We are using a suite of codemods to simplify and streamline the upgrade process. Instead of requiring you to manually identify all errors and issues in your codebase, you can run our codemods to quickly identify and fix major issues. Keep in mind that some changes will still require manual intervention, but our codemods can automatically fix a large amount of issues and flag any issues that do require manual work.

To utilize our codemods, refer to the following instructions. You can also [view the project on GitHub](https://github.com/patternfly/pf-codemods/) for additional details.

###  Run our codemods

**Note:** Running codemods after making manual changes will lead to even more manual intervention and cleanup. Because of this, we strongly recommend running codemods _before_ making any manual changes to your codebase.

To run our codemods, complete the following steps:

1. Run the following command, adding in the path to your product's source code: 

    ```{
    npx @patternfly/pf-codemods@latest <path to your source code>
    ```

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

