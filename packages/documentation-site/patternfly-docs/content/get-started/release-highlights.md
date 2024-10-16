---
id: Release highlights
title: Release highlights
section: get-started
---

import './get-started.css';
import { Divider, Timestamp } from '@patternfly/react-core';

<Timestamp>October 2024</Timestamp>

## PatternFly 6.0
The official release of PatternFly 6 is here! It contains all of the previous features from our alpha and beta releases, but also adds everything described in these release highlights.

### PatternFly AI

We're excited to introduce PatternFly AI: our new effort to support and integrate AI into our design system. We've added guidance and resources, contained within a new section of our website:

- [About PatternFly AI](/patternfly-ai/about-patternfly-ai)
- [AI guidelines](/patternfly-ai/ai-guidelines)
- [Chatbot](/patternfly-ai/chatbot/about-chatbot)
- [Conversation design](/patternfly-ai/conversation-design)

As with all things AI currently, this area will continue to grow and mature with time.

### Component groups restructuring

We made many updates to our component groups extension, to improve accuracy, usability, and alignment with PatternFly 6. We've moved its website section to our top-level navigation for better visibility, and also to support necessary sub-navigation. We've conceptually grouped the components into functional categories. Additionally, we renamed some of the components to be more accurate. 

[Check out the updated documentation](/component-groups/about-component-groups), which includes:

| **Category** | **Components** | 
| --- | --- |
| Content containers | - Details page <br /> - Multi-content card<br /> - Page header (previously named "content header")<br /> - Service card (new!) |
| Controls | - Bulk select <br /> - Close button <br /> - Responsive actions (new!) |
| Error communication | - Error boundary <br /> - Error state <br /> - Missing page (previously named "invalid object") <br /> - Unauthorized access (previously named "not authorized") <br /> - Unavailable content <br /> - Warning modal |
| Helpers | - Column management modal <br /> - Log snippet <br /> - Shortcut grid |
| Status and state indicators | - Ansible <br /> - Severity (previously Battery) <br /> - Skeleton table <br /> - Status (new!) <br /> - Tag count |

### React component updates 

Here are the most significant updates we made to our React components: 

- Data list
    - Refactored `<DataListCheck>` to use `<Checkbox>` internally. As a result, `id` is now a required prop for ` <DataListCheck>`. This also fixes broken checkboxes in the examples. 
- Dropdown
    - Added delay before setting focus on the first dropdown item when `shouldFocusFirstItemOnOpen` is set. This gives enough time for the popover to be shown in the correct location, so the scrollable doesn't scroll to an invalid location.
- Jumplinks
    - Fixed improper offset in [demo](/components/jump-links/react-demos). 
- Menu toggle
    - Removed `pf-m-actions` and, consequently, `SplitButtonOptions`. Items should now be passed directly to `splitButtonItems`.
    - Added `isPlaceholder` to support customizable placeholder text, as well as [a corresponding example](/components/menu-toggle#placeholder-text-in-toggle).

### Token updates 

#### Design tokens 

We updated existing design tokens and added new tokens to support directional box-shadows. To see these tokens, search "box-tokens" in our [tokens documentation](/tokens/all-patternfly-tokens).

We also added a few new tokens to support the needs of our new chatbot, including:
- A tertiary background token that accommodates containers placed on a secondary background.
- Inverse hover and inverse clicked tokens.

#### React tokens

To address instances where chart tokens and chart variable names were unintentionally identical, we added a `t_` prefix to our React tokens. This makes it easier to differentiate between tokens and variables.

### Extensions maintenance 

We made a couple of updates to ensure that extensions are in line with PatternFly 6 styling:

- Updated card title style in [quick starts](/extensions/quick-starts/Basic-quick-starts) to maintain the proper blue link style.
- Updated [link catalog tiles](/extensions/catalog-view/catalog-tile#link-variant) in the catalog view extension to be actionable cards.

### Content updates 

In addition to the previously mentioned documentation updates, we've made changes to the following content areas:

#### Design guidelines 
- Added a new [status and severity pattern](/patterns/status-and-severity), which provides guidance for using our new severity icons.
- Updated our [quick starts extension](/extensions/quick-starts) with more content guidance.
- Documented our tabular number modifier `.pf-v6-m-tabular-nums` in [typography](/design-foundations/typography), [numerics](/ux-writing/numerics), and [table.](/components/table/design-guidelines)
- Added guidance for editorial styling to our [content component](/components/content) (formerly called text content).
- We've started updating images across our design guidelines to represent PatternFly 6 styling.

#### Miscellaneous cleanup and enhancements
- Shortened component descriptions shown in component page headers and [all components page](/components/all-components).
- Added more details about [React tokens](/tokens/develop-with-tokens#react-tokens) and [how to migrate them](/get-started/upgrade#utilize-our-tokens-update-codemod).
- Added React example documentation for [text input group](/components/text-input-group).

<Divider />

<Timestamp>August 2024</Timestamp>

## PatternFly 6 beta
We’re excited to share the next milestone in our journey to PatternFly 6–our beta release! This beta introduces more improvements and refinement, and contains all major PatternFly 6 features. 

Your continued participation, support, and feedback will help ensure that PatternFly 6 is as well-tested and bug-free as possible before the full release. 

### Design updates

#### Rem units

We updated our sizing system to be based on rems, instead of pixels. Rems are relative units that adjust font size based on a webpage's HTML document root element size. For example, if the root size is 10px, a rem size of 1.5 would be 15px. This allows you to scale your font sizes, based on a root size of your choice. PatternFly's default root element size is 16px.

#### Motion framework 

We created a framework for micro animation CSS tokens, which will be used to enable component animations in future minor releases.

### Content updates 

We made more improvements to our website docs, to ensure that they're accurate and inline with our new token system. A variety of pages and sections were updated, including: 
- All tokens pages: 
    - [About tokens](/tokens/about-tokens)
    - [All PatternFly tokens](/tokens/all-patternfly-tokens)
    - [Develop with tokens](/tokens/develop-with-tokens)
    - [Design with tokens](/tokens/design-with-tokens)
    - **Note:** Any @patternfly/react-tokens referencing global variables will need to be updated, since global variables have been replaced with tokens. Following our [token migration instructions](/tokens/develop-with-tokens#migrate-to-tokens) will help you determine the correct token to use. 
- Our design foundations 
    - [Colors](/design-foundations/colors) 
    - [Icons](/design-foundations/icons) 
    - [Spacers](/design-foundations/spacers)  
    - [Typography](/design-foundations/typography)  

### Component updates

We promoted some of our beta and "next" components to become standard components in PatternFly 6. These will be fully-supported features going forward:
- Buttons with count label 
- Editable labels
- Flyout and drilldown menus and navigation 
- Menu toggle with status indicator
- Modal title with status indicator
- Inline spinners
- Timestamp component 

We updated some of our components to make room for additional features, including:
- Multiple page body elements within the page component.
- Icons in navigation items.

We also made updates to some of our component structure and naming conventions. We:
- Renamed the "text" component to ["content."](/components/content)
    - Added `<hr>` element support to the content component.
- Refactored pagination to use menu toggle rather than options menu.
- Updated the `<ToolbarItem>` `variant` prop options: 
    - Replaced "chip-group" with "label-group", to align with the deprecation of chip. 
    - (Previously) Removed "bulk-select", "overflow-menu", and "search-filter" variants for `<ToolbarItem>`.
- Restructured the masthead component: 
    - Renamed `<MastheadBrand>` to `<MastheadLogo>`
    - Renamed `<MastheadMain>` to `<MastheadBrand>`
    - Wrapped `<MastheadToggle>` and `<MastheadBrand>` in `<MastheadMain>`
    - Updated our documentation to align with the new structure.
-  Restructured the empty state component:
    - Made it less composable, in order to address styling issues.
    - Updated `<EmptyStateHeader>` and `<EmptyStateIcon>` to be rendered internally within `<EmptyState>`. They should now only be customized using props. 
    - Updated the content passed to the icon prop on `<EmptyState>` to be wrapped by `<EmptyStateIcon>` automatically.
    - Made the `titleText` prop required.

### Extension updates

We applied PatternFly 6 styles to the rest of our extensions. All have now been upgraded to use the PatternFly 6 beta: 
- Topology 
- Component groups
- React console
- Log viewer
- User feedback
- Catalog view
- Quickstarts

Related design resources can also be found in [our PatternFly 6 Figma kit.](https://www.figma.com/@patternfly)

### Bug fixes
We fixed bugs that were reported throughout the alpha period including. We:
- Fixed an issue with displaying card hover/click states in the user feedback extension.
- Updated buttons to support wrappers, which fixes padding issues.
- Updated our documentation to replace terms from deprecated components. For example, replacing "chip" with "label" across React property names.
- Fixed various small accessibility bugs.
- Removed deprecated or unused properties across some of our components.

<Divider />

<Timestamp>June 2024</Timestamp>

## PatternFly 6 alpha 

We're excited to announce that our alpha release of PatternFly 6 is now live. Here are the highlights that you should know about!

### PatternFly 6 visual theme

As you've probably already noticed on the alpha website: PatternFly 6 has a new look. Our brand new visual theme is more modern and refined, so that you can create UIs that are more seamless and lightweight.

All of our components have a new look to match. As you use the alpha website, take a look at our component examples, demos, and patterns to explore our redesign.

### Design tokens 

In order to support PatternFly 6, and any future visual theming capabilities, we have implemented a design token system for PatternFly. For more details and instructions on how to use tokens, you can refer to our new [design token documentation.](/tokens/about-tokens)

Our tokens cover both dark and light themes, and make it easier to support both in your product. We also updated our [dark theme handbook](/developer-resources/dark-theme-handbook) to align with our tokens.

**Note:** The PatternFly 5 design library is not built with tokens. To take advantage of our token system, you must [upgrade your product to PatternFly 6.](/get-started/upgrade)
