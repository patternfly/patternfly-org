---
id: Release highlights
title: Release highlights
section: get-started
---

import './get-started.css';
import { Divider } from '@patternfly/react-core';

## PatternFly 6 beta
We’re excited to share the next milestone in our journey to PatternFly 6–our beta release! This beta introduces more improvements and refinement, containing all major features planned for the final release. 

Your continued participation, support, and feedback will help ensure that PatternFly 6 is as well-tested and bug-free as possible before the full release. 

### Expanded PatternFly 6 support

We extended PatternFly 6 styles to Topology. Now, all PatternFly elements are covered for the release, and all related design resources can be found in [our PatternFly 6 Figma kit.]()

### Content updates 

We made more improvements to our website docs, to ensure that they're accurate and inline with our new token system. A variety of pages and sections were updated, including: 
- All [tokens](/tokens/about-tokens) pages
- Our design foundations 
    - [Colors](/design-foundations/colors) 
    - [Icons](/design-foundations/icons) 
    - [Spacers](/design-foundations/spacers)  
    - [Typography](/design-foundations/typography)  

### Component updates

We promoted some of our beta components to become standard components in PatternFly 6. These will be fully-supported features going forward:
- Buttons with count label 
- Editable labels
- Flyout and drilldown menus and navigation 
- Menu toggle with status indicator
- Modal title with status indicator
- Inline spinners
- Timestamp component 

We updated some of our components to make room for additional features:
- Updated the page component to allow multiple page body elements.
- Added the ability to include icons in navigation items.

We also made tweaks to some of our component structure and naming conventions:
- Renamed "text" components to "content." [It has its own page.](/components/content)
    - Added `<hr>` element support to the content component.
- Refactored pagination to use menu toggle rather than options menu.
### Bug fixes
We fixed the bugs that were reported throughout the alpha period.
- Fixed issue with displaying card hover/click states in the user feedback extension.
- Updated buttons to support wrappers, to fix padding issues.
- Updated docs to replace terms from deprecated components. For example, replacing "chip" with "label" across property naming.
- Various small accessibility bugs.
- Removed deprecated or unused properties across some of our components.

<Divider />

## PatternFly 6 alpha 1

We're excited to announce that our alpha release of PatternFly 6 is now live. Here are the highlights that you should know about!

### PatternFly 6 visual theme

As you've probably already noticed on the alpha website: PatternFly 6 has a new look. Our brand new visual theme is more modern and refined, so that you can create UIs that are more seamless and lightweight.

All of our components have a new look to match. As you use the alpha website, take a look at our component examples, demos, and patterns to explore our redesign.

### Design tokens 

In order to support PatternFly 6, and any future visual theming capabilities, we have implemented a design token system for PatternFly. For more details and instructions on how to use tokens, you can refer to our new [design token documentation.](/tokens/about-tokens)

Our tokens cover both dark and light themes, and make it easier to support both in your product. We also updated our [dark theme handbook](/developer-resources/dark-theme-handbook) to align with our tokens.

**Note:** The PatternFly 5 design library is not built with tokens. To take advantage of our token system, you must [upgrade your product to PatternFly 6.](/get-started/upgrade)
