---
id: Migrate
title: Migration guide
section: get-started
---

## Design your migration strategy
The first step in moving from PatternFly 3 to PatternFly 4 should be a migration strategy. Putting a solid plan in place before you start trying to migrate your codebase will help you prioritize and chunk your work and identify areas where migrating may impact design elements like interaction patterns or spacing.

### Milestone 1: Start with high-impact visuals
Make a big impact in a small amount of time by updating high-impact visual elements first. This approach enables you to move your application into the same visual language as PatternFly 4 and also gets PatternFly 4 in your development stack.

High-impact visuals include:
* Color
* Typography
* Iconography
* Navigation and masthead

**Note:** PatternFly 4 provides an updated navigation system. If you choose to rework your application’s existing navigation, it’s best to break this work into two steps: one that tackles styles like typography and color, and another for the navigation work.

Use Sketch to create high-fidelity mockups to visualize the changes required and communicate them to development.

### Milestone 2: Upgrade key functionality
Next, you’ll want to address high-traffic areas in your application that are touched by the user frequently, or high-impact areas that are important to conversion or retention, like user onboarding. Identify those key paths and prioritize your upgrades based on those areas. You may also choose to tackle page “types” depending on your project.

Create mid to high-fidelity prototypes to visualize the changes required and communicate them to development.

### Milestone 3: Upgrade everything you touch
In parallel to upgrading key functionality, use ongoing product work as an opportunity to upgrade features already being addressed by design and development. For example, if you’re working on adding a new action button to a data table, it might also be a good time to upgrade that data table to PatternFly 4.

### Get help
If you run into trouble and need support, the PatternFly team is here to help. Simply go to the [PatternFly forum](https://forum.patternfly.org/c/support) and add a new topic to get in touch with us. We'll always do our best to answer your questions and connect you with the right people quickly.

## Start building with PatternFly 4 libraries
[Get started with React](/get-started/developers#react)

[Get started with HTML/CSS](/get-started/developers#htmlcss)

**Do you need to run PatternFly 3 and PatternFly 4 together?**

Use the following command to update your configuration in the `src/patternfly/sass-utilities/scss-variables.scss` file to state false:

`$pf-global--enable-reset: false !default;`

**Note:** You will need to compile your CSS manually if you want to run PatternFly 3 and PatternFly 4 together.

**Does your application need support for Internet Explorer 11?**

You will need to [follow additional steps](https://github.com/patternfly/patternfly-next/wiki/IE11-Support) to enable support for this browser.
