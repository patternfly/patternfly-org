---
id: Release highlights
title: Release highlights
section: get-started
---

import './get-started.css';
import { Divider, Timestamp } from '@patternfly/react-core';

<Timestamp>January 2024</Timestamp>

## PatternFly 6.1.1

### Extension updates 

As a quick follow up to our last release, this update publishes the new data view extension.

<Timestamp>December 2024</Timestamp>

## PatternFly 6.1

### Promoted package versions

### Component updates 

We fixed bugs that were reported in our components, the details of which can be found in [the patternfly-react release notes](https://github.com/patternfly/patternfly-react/releases) and the [patternfly (Core) release notes](https://github.com/patternfly/patternfly/releases). 

These changes mostly resolved functionality issues and made improvements to visual styles. 

The following fix could require manual updates depending on how you handle breakpoints in your code:

- We fixed a breakpoint issue in our table component, which caused table breakpoints for the desktop/mobile responsive layout to be 1px off from our other component breakpoints. Now, the table will responsively update between desktop and mobile at the same width as our other components. If you've manually configured your own breakpoints to match table's previous breakpoints, this fix will require you to make CSS updates to bring your code in line with the updated breakpoint value.

### Website updates 

- We fixed an issue on PatternFly.org that prevented proper page loading when navigating to new pages via in-content links.

- We updated [the PatternFly.org accessibility scorecard](/accessibility/accessibility-scorecard#patternfly.org-accessibility-scorecard) and will begin to resolve accessibility violations that were identified.

### Content updates

- We updated design guideline images for [context selector](/components/menus/context-selector/design-guidelines) to align with PatternFly 6 styles. There is an ongoing effort to update images across PatternFly.org to reflect our new visuals, tracked in this [PatternFly 6 design guidelines issue](https://github.com/patternfly/patternfly-org/issues/4235).
- We updated the illustrations on [the component overview page](/components/all-components). 
- We updated and added "draggable" examples to [dual list selector](/components/dual-list-selector#draggable) and [data list](/components/data-list#draggable).
- We updated our ChatBot documentation: 
    - We renamed the extension to "ChatBot", to better brand our offering and help distinguish it from other general "chatbot" features.
    - We combined and organized our documentation into a few cohesive pages: ["Overview"](/patternfly-ai/chatbot/overview), ["UI"](/patternfly-ai/chatbot/ui), and ["Messages"](/patternfly-ai/chatbot/message). Note that our documentation structure could continue to change as our extension grows. We will continue to share updates when changes occur. 
    - We moved our [basic and embedded ChatBot demos](/patternfly-ai/chatbot/overview/demo) to the "Overview" page for better visibility. 
    - We added initial [ChatBot design guidelines](/patternfly-ai/chatbot/overview/design-guidelines), which can also be found on the "Overview" page.
    - We added documentation for new features, as described in the following section. 

### Extension updates 

#### ChatBot

We've continued to evolve our new ChatBot:
- We renamed the repo from "patternfly/visual-assistant" to "patternfly/chatbot" to align with our website docs.
- We removed the third-party `AutoTextArea` in the message bar and replaced it with our own custom solution.
- We renamed the `toolTipLabel` prop to `tooltipLabel`.
- We added support for new features, including: 
    - A ["skip to chatbot" button](patternfly-ai/chatbot/ui/#skip-to-content).
    - New features in [ChatBot messages](/patternfly-ai/chatbot/messages#messages) and the message bar: 
        - Truncation of long bot and user names. 
        - More complex list formats.
        - [Quick response buttons](/patternfly-ai/chatbot/messages#messages-with-quick-responses). 
        - [Multiple file attachments](/patternfly-ai/chatbot/messages#messages-with-attachments). 
         - A [stop streaming button](/patternfly-ai/chatbot/ui#message-bar-with-stop-button) that will pause the streaming of a ChatBot message.
        - Additional customization options for [welcome messages](/patternfly-ai/chatbot/ui#welcome-message), [message avatars](/patternfly-ai/chatbot/messages#messages), [message actions](/patternfly-ai/chatbot/messages#custom-messages-actions), [modal](/patternfly-ai/chatbot/ui#modal), [toggle shape](/patternfly-ai/chatbot/ui#custom-toggle-shape).
        - A variety of styling updates to shadows, sizing, and positioning. 
    
#### Component groups

- We added customization support to [error state](/component-groups/error-communication/error-state) via PatternFly empty state props, including a custom icon and title heading level.

<Divider />

<Timestamp>October 2024</Timestamp>

## PatternFly 6.0
The official release of PatternFly 6 is here! It contains all of the previous features from our alpha and beta releases, but also adds everything described in these release highlights.

### Promoted package versions

- patternfly/patternfly ([changelog](https://github.com/patternfly/patternfly/releases/tag/v6.0.0))
    - [@patternfly/patternfly@6.0.0](https://www.npmjs.com/package/@patternfly/patternfly/v/6.0.0)
- patternfly/patternfly-react ([changelog](https://github.com/patternfly/patternfly-react/releases/tag/v6.0.0))
    - [@patternfly/react-charts@8.0.0](https://www.npmjs.com/package/@patternfly/react-charts/v/8.0.0)
    - [@patternfly/react-code-editor@6.0.0](https://www.npmjs.com/package/@patternfly/react-code-editor/v/6.0.0)
    - [@patternfly/react-core@6.0.0](https://www.npmjs.com/package/@patternfly/react-core/v/6.0.0)
    - [@patternfly/react-icons@6.0.0](https://www.npmjs.com/package/@patternfly/react-icons/v/6.0.0)
    - [@patternfly/react-styles@6.0.0](https://www.npmjs.com/package/@patternfly/react-styles/v/6.0.0)
    - [@patternfly/react-table@6.0.0](https://www.npmjs.com/package/@patternfly/react-table/v/6.0.0)
    - [@patternfly/react-tokens@6.0.0](https://www.npmjs.com/package/@patternfly/react-tokens/v/6.0.0)
- PatternFly extensions
    - [@patternfly/react-catalog-view-extension@6.0.0](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/6.0.0) ([changelog](https://github.com/patternfly/react-catalog-view/releases/tag/v6.0.0))
    - [@patternfly/react-console@6.0.0](https://www.npmjs.com/package/@patternfly/react-console/v/6.0.0) ([changelog](https://github.com/patternfly/react-console/releases/tag/v6.0.0))
    - [@patternfly/react-log-viewer@6.0.0](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/6.0.0) ([changelog](https://github.com/patternfly/react-log-viewer/releases/tag/v6.0.0))
    - [@patternfly/react-topology@6.0.1](https://www.npmjs.com/package/@patternfly/react-topology/v/6.0.1) ([changelog](https://github.com/patternfly/react-topology/releases/tag/v6.0.1))

    - [@patternfly/react-user-feedback@6.0.0](https://www.npmjs.com/package/@patternfly/react-user-feedback/v/6.0.0) ([changelog](https://github.com/patternfly/react-user-feedback/releases/tag/v6.0.0))
    - [@patternfly/react-virtualized-extension@6.0.0](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/6.0.0) ([changelog](https://github.com/patternfly/react-virtualized-extension/releases/tag/v6.0.0))
    - [@patternfly/quickstarts@6.0.0](https://www.npmjs.com/package/@patternfly/quickstarts/v/6.0.0) ([changelog](https://github.com/patternfly/patternfly-quickstarts/releases/tag/v6.0.0))
    - [@patternfly/virtual-assistant@2.0.2](https://www.npmjs.com/package/@patternfly/virtual-assistant/v/2.0.2) ([changelog](https://github.com/patternfly/patternfly-quickstarts/releases/tag/v2.0.0))
    - [@patternfly/react-component-groups@6.0.0](https://www.npmjs.com/package/@patternfly/react-component-groups/v/6.0.0) ([changelog](https://github.com/patternfly/react-component-groups/releases/tag/v6.0.0))

### PatternFly AI

We're excited to introduce PatternFly AI: our new effort to support and integrate AI into our design system. We've added guidance and resources, contained within a new section of our website:

- [About PatternFly AI](/patternfly-ai/about-ai)
- [AI guidelines](/patternfly-ai/ai-guidelines)
- [Chatbot](/patternfly-ai/chatbot/about-chatbot)
- [Conversation design](/patternfly-ai/conversation-design)

As with all things AI currently, this area will continue to grow and mature with time.

### Component groups restructuring

We made many updates to our [component groups extension](/component-groups/about-component-groups) to improve accuracy, usability, and alignment with PatternFly 6. We've moved its website section to our top-level navigation for better visibility, and also to support necessary sub-navigation. We've conceptually grouped the components into functional categories. Additionally, we renamed some of the components to be more accurate. 

Our updated documentation includes:

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
    - Refactored `<DataListCheck>` to use `<Checkbox>` internally, which fixes broken checkboxes in the examples. 
- Dropdown
    - Added `focusTimeoutDelay`, which specifies the time to wait before setting focus on the first dropdown item when `shouldFocusFirstItemOnOpen` is set. 
    - Fixed issues with invalid and jumpy scrolling when focusing on the first menu item.
- Jump links
    - Fixed improper offset in [demo](/components/jump-links/react-demos). 
- Menu toggle
    - Removed `pf-m-actions` and, consequently, `SplitButtonOptions`. Items should now be passed directly to `splitButtonItems`.
    - Added `isPlaceholder` to support customizable placeholder text, as well as [a corresponding example](/components/menus/menu-toggle/#placeholder-text-in-toggle).
- Text input group 
    - Added validation support and a new `validated` prop. We also added a [text input group with validation example](/components/text-input-group#with-validation).
- Tile 
    - Deprecated the tile component in favor of card. For usage information, refer to the [cards as tiles example](/components/card#cards-as-tiles).

### Token updates 

#### Design tokens 

We updated existing design tokens and added new tokens to support directional box-shadows. To see these tokens, search "box-shadow" in our [tokens documentation](/tokens/all-patternfly-tokens).

We also added a few new tokens to support the needs of our new chatbot, including:
- A tertiary background token that accommodates containers placed on a secondary background.
- Inverse hover and inverse clicked tokens.

#### React tokens

To address instances where design tokens and CSS variables for charts unintentionally created identical React tokens, we added a `t_` prefix to all design token references in our React tokens. This makes it easier to differentiate between design tokens and CSS variables.

### Extensions maintenance 

We made a couple of updates to ensure that extensions are in line with PatternFly 6 styling:

- Updated card title style in [quick starts](/extensions/quick-starts/Basic-quick-starts) to maintain the proper blue link style.
- Updated [link catalog tiles](/extensions/catalog-view/catalog-tile#link-variant) in the catalog view extension to be actionable cards.

### Content updates 

In addition to the previously mentioned documentation updates, we've made changes to the following content areas:

#### Design guidelines 
- Added a new [status and severity pattern](/patterns/status-and-severity), which provides guidance for using our new severity icons.
- Updated our [quick starts extension](/extensions/quick-starts) with more content guidance.
- Documented our tabular number modifier `.pf-v6-m-tabular-nums` in [typography](/design-foundations/typography), [numerics](/ux-writing/numerics), and [table](/components/table/design-guidelines).
- Added guidance for editorial styling to our [content component](/components/content) (formerly called text content).
- We've started updating images across our design guidelines to represent PatternFly 6 styling.

#### Miscellaneous cleanup and enhancements
- Shortened component descriptions shown in component page headers and on the [all components page](/components/all-components).
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

We made some updates to react-charts.
- In order to support multiple chart libraries, Victory based charts have moved to a "victory" directory.
- Victory is now an optional peer dependency, allowing future chart libraries to be installed without including Victory dependencies and vice versa
    - You may choose to install the single "victory" package to cover all features
    - Or, install packages based on the features used in your app (e.g., "victory-core", "victory-tooltip", etc.).

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
