---
id: Release highlights
title: Q3 release highlights
section: get-started
---

import './get-started.css';

## PatternFly 5.1 

As part of our [quarterly release cadence](/get-started/about#patternfly-release-cadence), we're excited to announce that PatternFly 5.1 is now live.

To help provide a high-level view of what's new, we've pulled together the major highlights from this release. Keep reading to learn more!

### Right-to-left support 

Last quarter, our developers were dedicated to implementing right-to-left (RTL) language support in PatternFly. To better enable product internationalization, we've updated our components to support both right-to-left (RTL) and left-to-right (LTR) languages. You can check out our [RTL handbook](/developer-resources/right-to-left-handbook) for more details and resources.

To achieve this support, we've updated our components to use logical properties (like `block-start`, `inline-end`, `block-end`, and `inline-start`), which will ensure that styles are laid out properly, no matter which languages you're using.

Note that, to avoid a sweeping breaking change, PatternFly variable names still use "top", "bottom", "left", and "right". 

<!--- Maybe: These variable names will be updated as part of our major release next year. --->

### Extensions staging site

We've created a separate [staging site](extensions-staging.patternfly.org) for our extensions to support pre-releases and host documentation while it is in development. 

<!--- Is this something to publicize? --->

<!--- What are the major component changes to highlight? --->

Keep an eye out for our Q4 release at the beginning of 2024!