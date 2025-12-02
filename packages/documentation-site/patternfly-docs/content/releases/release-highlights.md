---
id: Release highlights
title: Release highlights
section: releases
---
import '../get-started/get-started.css';
import { Divider, Timestamp } from '@patternfly/react-core'; 

<Timestamp date={new Date(2025, 9)}>October 2025</Timestamp>

## PatternFly 6.4

For the Q3 2025 PatternFly release, we're excited to introduce a beta version of our new high contrast mode, deliver significant accessibility enhancements from our latest audit, and launch a highly requested resizable columns feature for tables. We've also continued to evolve PatternFly AI with community-driven extension updates and new guidelines for AI-assisted code contributions. Updates for these key areas can be found here, in this quarter's release highlights.

*We’ve also kicked off a user feedback survey! Your perspective is crucial for guiding our roadmap, so please take a few minutes to [share your thoughts with us](https://www.feedback.redhat.com/jfe/form/SV_9MKBjq8H7muINMy). You can also access the survey anytime via the  "Give feedback" button on our website.*

### Promoted package versions
- patternfly/patternfly ([changelog](https://github.com/patternfly/patternfly/releases/tag/v6.4.0))
    - [@patternfly/patternfly@6.4.0](https://www.npmjs.com/package/@patternfly/patternfly/v/6.4.0)
- patternfly/react ([changelog](https://github.com/patternfly/patternfly-react/releases/tag/v6.4.0))
    - [@patternfly/react-charts@8.4.0](https://www.npmjs.com/package/@patternfly/react-charts/v/8.4.0)
    - [@patternfly/react-code-editor@6.4.0](https://www.npmjs.com/package/@patternfly/react-code-editor/v/6.4.0)
    - [@patternfly/react-core@6.4.0](https://www.npmjs.com/package/@patternfly/react-core/v/6.4.0)
    - [@patternfly/react-drag-drop@6.4.0](https://www.npmjs.com/package/@patternfly/react-drag-drop/v/6.4.0)
    - [@patternfly/react-icons@6.4.0](https://www.npmjs.com/package/@patternfly/react-icons/v/6.4.0)
    - [@patternfly/react-styles@6.4.0](https://www.npmjs.com/package/@patternfly/react-styles/v/6.4.0)
    - [@patternfly/react-table@6.4.0](https://www.npmjs.com/package/@patternfly/react-table/v/6.4.0)
    - [@patternfly/react-templates@6.4.0](https://www.npmjs.com/package/@patternfly/react-templates/v/6.4.0)
    - [@patternfly/react-tokens@6.4.0](https://www.npmjs.com/package/@patternfly/react-tokens/v/6.4.0)
- PatternFly extensions
    - [@patternfly/chatbot@6.4.0](https://www.npmjs.com/package/@patternfly/chatbot/v/6.4.0) ([changelog](https://github.com/patternfly/chatbot/releases/tag/v6.4.0))
    - [@patternfly/react-catalog-view-extension@6.3.0](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/6.3.0) ([changelog](https://github.com/patternfly/react-catalog-view/releases/tag/v6.3.0))
    - [@patternfly/react-component-groups@6.4.0](https://www.npmjs.com/package/@patternfly/react-component-groups/v/6.4.0) ([changelog](https://github.com/patternfly/react-component-groups/releases/tag/v6.4.0))
    - [@patternfly/react-data-view@6.4.0](https://www.npmjs.com/package/@patternfly/react-data-view/v/6.4.0) ([changelog](https://github.com/patternfly/react-data-view/releases/tag/v6.4.0))
    - [@patternfly/react-log-viewer@6.4.0](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/6.4.0) ([changelog](https://github.com/patternfly/react-log-viewer/releases/tag/v6.4.0))
    - [@patternfly/react-topology@6.4.0](https://www.npmjs.com/package/@patternfly/react-topology/v/6.4.0) ([changelog](https://github.com/patternfly/react-topology/releases/tag/v6.4.0))

### Simplified animation control

We've introduced a new application-level context provider for enabling animations. You can now set the animation context at the root of your application to enable all opt-in animations by default. This ensures motion behaves predictably across your entire UI while still allowing for individual overrides. [Find more details in our motion development guide.](/foundations-and-styles/motion/development-guide/#global-animation-control)

### High contrast mode (Beta)

To better support users with vision sensitivities and accessibility needs, we've shared a beta version of our new high contrast mode. This theme updates tokens to adjust component styling, primarily with higher-contrast colors and more prominent borders. 

You can preview high contrast mode via the theme switcher on our website. This initial beta includes support for most of our core components, with the full release&mdash;including support for charts and extensions&mdash;planned for Q4.

To provide more guidance around theming, we've also published [new theming documentation](/foundations-and-styles/theming) and a [high contrast handbook](/foundations-and-styles/theming/high-contrast-handbook). 

### System-wide accessibility enhancements

In our commitment to inclusive design, we've implemented numerous accessibility improvements, including automatic component enhancements and new accessibility guidelines.

#### Component updates
You get these improvements "for free" just by updating to the latest version of PatternFly:

- **Buttons:** Responding to a community request, the keyboard focus indicator is now thicker and more prominent, making it easier for users to locate the active element.
- **Data lists:** Clicking an action menu toggle with a keyboard no longer automatically selects the first data list item and instead opens the action menu as expected, creating a more consistent and predictable experience. This was a bug fix for clickable implementations of our data list.
- **Menus:** We fixed a bug where an empty heading could be rendered in React `<MenuGroups>`, causing confusion when navigating via screen readers. A heading will now only render when the `label` prop is passed in. This also helps avoid a potentially incorrect heading level hierarchy.
    - **Note:** While this is an automatic update, the change in markup could affect your tests. Please review them accordingly.
- **Tooltips:** We fixed an issue that prevented tooltips from being announced by screen readers in certain scenarios, such as when using React refs to link a tooltip to its trigger. This ensures assistive technologies can find and read tooltip content regardless of how the tooltip is linked to is trigger. This fix also benefits other components using tooltips, like menus and dropdowns.

#### New guidelines

We’ve updated our documentation and examples with the following recommendations to help you build more accessible products:
- [**Jump links:**](/components/jump-links/accessibility) We updated our guidance to help you create a more predictable and less ambiguous experience for screen reader users. We also made updates to our examples and demos to align with this guidance. New guidance clarifies how to:
    - Correctly announce whether expandable sections are open or closed using `aria-expanded`, which must always be present on content that can trigger expansion.
    - Avoid using a redundant `aria-label` when an expandable jump links toggle contained visible text.
    - Provide unique, descriptive names to help users differentiate between multiple jump link components on the same page and make it easier to understand the context of each jump link when using keyboard/rotor menu shortcuts with assistive tech.
- [**Skeleton:**](/components/skeleton/accessibility) Our guidelines now recommend including visually hidden text. This provides crucial context for screen reader users while content is loading and assures them that they haven't landed on a blank or broken page.

### Community-driven ChatBot enhancements
Based on feedback from usability workshops and our community, we've made significant enhancements to the ChatBot extension to improve usability and address user needs:
- **Clearer navigation:** To provide users with more context, the [chat history drawer](/extensions/chatbot/ui#drawer-with-search-and-new-chat-button) now includes a clearer title, an icon, and a prominent "new chat" button.
- **Flexible layouts:** To support different presentation preferences, we've introduced [compact component styles](/extensions/chatbot/overview/demo#compact-chatbot) and a new [demo for swapping between display modes](/extensions/chatbot/overview/demo#display-mode-switcher).
- **Modern features:** To give users more control and flexibility, we added support for [message dividers](/extensions/chatbot/messages#message-dividers), [editing messages](/extensions/chatbot/messages#user-messages), [pinning chat history items](/extensions/chatbot/ui#pinning-conversations), [previewing images](/extensions/chatbot/messages#image-preview) and [downloading chat transcripts](/extensions/chatbot/overview/design-guidelines#downloading-chat-transcripts).
- **Advanced interactions:** To support more complex agentic interactions, we've added new components to [display an AI's reasoning process (deep thinking)](/extensions/chatbot/messages#messages-with-deep-thinking), as well as [managing tool calls](/extensions/chatbot/messages#messages-with-tool-calls) and sharing [tool responses](/extensions/chatbot/messages#messages-with-tool-responses).

### Resizable table columns
Based on user feedback, we've added resizable table columns within the [@patternfly/react-data-view extension](https://www.npmjs.com/package/@patternfly/react-data-view). This update allows users to click and drag column dividers to adjust widths, making it easier to view and work with data in dense tables.

To see this feature in action, [refer to our resizable columns table demo](/extensions/data-view/table#resizable-columns).

### New guidelines for streamlined AI workflows

To help you safely and effectively integrate AI into your development process, we’ve released two new sets of guidelines:
- **AI-generated code contribution:** To ensure legal compliance and quality, we've established new guidelines for contributing AI-generated code. You can find them [within GitHub](https://github.com/patternfly/.github/blob/main/CONTRIBUTING.md). 
- **AI-assisted code migrations:** We've also published [new documentation on using AI to streamline code migrations](/ai/ai-assisted-code-migration/). This guide offers strategies for using AI to make it easier and faster to migrate your project to PatternFly React from other frameworks.

### What's next?
For the Q4 2025 release, we’ll be focused on:
- The full release of high contrast mode.
- Launch an updated website navigation.
- Updating icons to better align with Red Hat’s brand standards.
- Adding a new guided tour extension.
- Continuing our work toward WCAG 2.2 AA compliance.
- Adding new PatternFly starter applications in additional frameworks. 
- Creating a new API that provides text-based versions of website content in a machine-readable format that’s easily consumed by AI.

Stay tuned!

<Divider />

<Timestamp date={new Date(2025, 7)}>August 2025</Timestamp>

## PatternFly 6.3.1

As a follow-up to our main Q2 2025 PatternFly release, this patch resolves several bugs found in product implementations and our ChatBot extension. No code changes are required on your part to address these issues. Simply update to the following package versions:

### Promoted package versions
- patternfly/patternfly ([changelog](https://github.com/patternfly/patternfly/releases/tag/v6.3.1))
    - [@patternfly/patternfly@6.3.1](https://www.npmjs.com/package/@patternfly/patternfly/v/6.3.1)
- patternfly/react ([changelog](https://github.com/patternfly/patternfly-react/releases/tag/v6.3.1))
    - [@patternfly/react-charts@8.3.1](https://www.npmjs.com/package/@patternfly/react-charts/v/8.3.1)
    - [@patternfly/react-code-editor@6.3.1](https://www.npmjs.com/package/@patternfly/react-code-editor/v/6.3.1)
    - [@patternfly/react-core@6.3.1](https://www.npmjs.com/package/@patternfly/react-core/v/6.3.1)
    - [@patternfly/react-drag-drop@6.3.1](https://www.npmjs.com/package/@patternfly/react-drag-drop/v/6.3.1)
    - [@patternfly/react-icons@6.3.1](https://www.npmjs.com/package/@patternfly/react-icons/v/6.3.1)
    - [@patternfly/react-styles@6.3.1](https://www.npmjs.com/package/@patternfly/react-styles/v/6.3.1)
    - [@patternfly/react-table@6.3.1](https://www.npmjs.com/package/@patternfly/react-table/v/6.3.1)
    - [@patternfly/react-templates@6.3.1](https://www.npmjs.com/package/@patternfly/react-templates/v/6.3.1)
    - [@patternfly/react-tokens@6.3.1](https://www.npmjs.com/package/@patternfly/react-tokens/v/6.3.1)
- PatternFly extensions 
    - [@patternfly/chatbot@6.3.2](https://www.npmjs.com/package/@patternfly/chatbot/v/6.3.2) ([changelog](https://github.com/patternfly/chatbot/releases/tag/v6.3.2))
    - [@patternfly/quickstarts@6.3.1](https://www.npmjs.com/package/@patternfly/quickstarts/v/6.3.1) ([changelog](https://github.com/patternfly/patternfly-quickstarts/releases/tag/v6.3.1))

<Divider />

<Timestamp date={new Date(2025, 6)}>July 2025</Timestamp>

## PatternFly 6.3

For the Q2 2025 PatternFly release, we completed our initiative to support React 19 across PatternFly and made significant progress towards finalizing our component animations. We also added new ChatBot features, new CLI guidelines, and updated docs for our AI principles and motion guidelines. Updates for these key areas can be found here, in this quarter's release highlights.

### Promoted package versions
The following packages were promoted with this release. Outside of our primary initiatives for this release, we addressed reported bugs and continued to enhance PatternFly with new features, as detailed in the linked changelogs. 

- patternfly/patternfly ([changelog](https://github.com/patternfly/patternfly/releases/tag/v6.3.0))
    - [@patternfly/patternfly@6.3.0](https://www.npmjs.com/package/@patternfly/patternfly/v/6.3.0)
- patternfly/react ([changelog](https://github.com/patternfly/patternfly-react/releases/tag/v6.3.0))
    - [@patternfly/react-charts@8.3.0](https://www.npmjs.com/package/@patternfly/react-charts/v/8.3.0)
    - [@patternfly/react-code-editor@6.3.0](https://www.npmjs.com/package/@patternfly/react-code-editor/v/6.3.0)
    - [@patternfly/react-core@6.3.0](https://www.npmjs.com/package/@patternfly/react-core/v/6.3.0)
    - [@patternfly/react-docs@7.3.0](https://www.npmjs.com/package/@patternfly/react-docs/v/7.3.0)
    - [@patternfly/react-drag-drop@6.3.0](https://www.npmjs.com/package/@patternfly/react-drag-drop/v/6.3.0)
    - [@patternfly/react-icons@6.3.0](https://www.npmjs.com/package/@patternfly/react-icons/v/6.3.0)
    - [@patternfly/react-styles@6.3.0](https://www.npmjs.com/package/@patternfly/react-styles/v/6.3.0)
    - [@patternfly/react-table@6.3.0](https://www.npmjs.com/package/@patternfly/react-table/v/6.3.0)
    - [@patternfly/react-templates@6.3.0](https://www.npmjs.com/package/@patternfly/react-templates/v/6.3.0)
    - [@patternfly/react-tokens@6.3.0](https://www.npmjs.com/package/@patternfly/react-tokens/v/6.3.0)
- PatternFly extensions 
    - [@patternfly/chatbot@6.3.0](https://www.npmjs.com/package/@patternfly/chatbot/v/6.3.0) ([changelog](https://github.com/patternfly/chatbot/releases/tag/v6.3.0))
    - [@patternfly/quickstarts@6.3.0](https://www.npmjs.com/package/@patternfly/quickstarts/v/6.3.0) ([changelog](https://github.com/patternfly/patternfly-quickstarts/releases/tag/v6.3.0))
    - [@patternfly/react-catalog-view-extension@6.1.0](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/6.1.0) ([changelog](https://github.com/patternfly/react-catalog-view/releases/tag/v6.1.0))
    - [@patternfly/react-component-groups@6.3.0](https://www.npmjs.com/package/@patternfly/react-component-groups/v/6.3.0) ([changelog](https://github.com/patternfly/react-component-groups/releases/tag/v6.3.0))
    - [@patternfly/react-console@6.1.0](https://www.npmjs.com/package/@patternfly/react-console/v/6.31.0) ([changelog](https://github.com/patternfly/react-console/releases/tag/v6.1.0))
    - [@patternfly/react-data-view@6.3.0](https://www.npmjs.com/package/@patternfly/react-data-view/v/6.3.0) ([changelog](https://github.com/patternfly/react-data-view/releases/tag/v6.3.0))
    - [@patternfly/react-log-viewer@6.3.0](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/6.3.0) ([changelog](https://github.com/patternfly/react-log-viewer/releases/tag/v6.3.0))
    - [@patternfly/react-topology@6.3.0](https://www.npmjs.com/package/@patternfly/react-topology/v/6.3.0) ([changelog](https://github.com/patternfly/react-topology/releases/tag/v6.3.0))
    - [@patternfly/react-user-feedback@6.2.0](https://www.npmjs.com/package/@patternfly/react-user-feedback/v/6.2.0) ([changelog](https://github.com/patternfly/react-user-feedback/releases/tag/v6.2.0))
    - [@patternfly/react-virtualized-extension@6.1.0](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/6.1.0) ([changelog](https://github.com/patternfly/react-virtualized-extension/releases/tag/v6.1.0))

### React 19 support

PatternFly now includes support for React 19 across all components and extensions, enabling you to benefit from  new React features and performance enhancements.

This update is non-breaking, and PatternFly 6 will continue to support React 17 and 18 in line with our support policy. In future releases, we plan to more fully leverage React 19's capabilities to enhance existing PatternFly features and introduce new ones.

### Component animations

As we progress in our effort to integrate motion design across PatternFly components, we added the following new animations in this release. To provide a holistic view of our animated components, we also put together [an interactive animations demo](/foundations-and-styles/motion/demo), which we will continue to update as we add additional animation support.   

**Note:** Browsers may slow down or deactivate animations on resource-intensive pages. This can occur when continuous animations (like multiple spinners) are active at the same time as other demanding tasks (like frequent data polling), which can overload the browser's processing capacity.

#### enable-animations codemods

We have also created an [enable-animations codemod](https://github.com/patternfly/pf-codemods/tree/main/packages/eslint-plugin-pf-codemods/src/rules/v6/enableAnimations), which adds the `hasAnimations` prop to components that require opt-in animations. 

Keep in mind that, depending on your codebase, this codemod could introduce breaking changes that require further attention. In particular, when you run the codemod you will be asked whether you want to opt into animations for table components, or just for the react-core package.

To enable the optional animations run the following command:

`npx @patternfly/pf-codemods --only enable-animations /path-to-src`

#### Expansion 

We added expansion animations that apply a fade-in and slide-in transition as hidden content sections are expanded in a variety of components. A similar, reversed animation applies when expanded sections are collapsed.

The following list highlights opt-in requirements and links to examples. Unless an animation is marked with "Requires opt-in," it will be enabled by default. 

- Accordion 
    - **Example:** All [accordions](/components/accordion) in our examples and demos.

- Dual list selector with tree
    - **Requires opt-in.**
    - **Example:** [Dual list selector with tree](/components/dual-list-selector#with-tree), which has opted in.

- Expandable section 
    - **Example:** All [expandable sections](/components/expandable-section) in our examples and demos.
    - **Note:** When using [detached expandable sections](/components/expandable-section#detached), you will need to use the new `direction` prop to set the direction of the expansion animation.

- Form
    - **Requires opt-in.**
    - **Example:** [Form field groups](/components/forms/form#field-groups), which have opted in.  

- Navigation
    - **Example:** [Expandable navigation examples](/components/navigation#expandable).
    - **Note:** This animation was introduced in our 6.2 release, but performance issues were reported. For this release, we reworked the animation to resolve these issues.

- Search input   
    - **Requires opt-in.**
    - **Example:** [Expandable search input](/components/search-input#with-expandable-button), which has opted in.

- Tree view
    - **Requires opt-in.**
    - **Example:** All [tree view](/components/tree-view) examples and demos, which have opted in. 

- Table (in beta)
    - **Requires opt-in.**
    - **Example:** [Expandable table](/components/table#expandable) and [compound expandable table](/components/table/#compound-expandable), which have both opted in.
    - **Notes:** 
        - This release does not include expansion animations for tree tables.
        - To prevent possible visual issues with [expandable](/components/table#expandable) and [compound expandable tables](/components/table#compound-expandable), ensure that your implementation aligns with our currently recommended structure. In your table's code: 
            - `<Table>` must have `isExpandable` passed to it.
            - Any `<Tbody>` containing expandable rows must have `isExpanded` logic.
            - Any `<Tr>` that acts as a "control row" (for normal expandable tables) or has the `isControlRow` prop (for compound expansion tables) must have `isContentExpanded` logic. This logic should match the `isExpanded` logic being passed to other sub-components.
            - Any `<Tr>` that expands/collapses and contains the expandable content must have `isExpanded` logic (this should always have been the case in order for expansion to work).
            - Any `<Td>` within an expandable `<Tr>` must wrap any content in an `ExpandableRowContent`.
            - The basic structure, which is used in our expandable and compound expandable examples should resemble this: 

                ``` 
                <Table isExpandable> // if opting into animations, pass the hasAnimations prop or run the enable-animations codemods to auto-apply the prop
                  ...Thead content...
                  <Tbody isExpanded={...logic for checking for expansion...}>
                    <Tr isContentExpanded={...logic for checking for expansion...}> // for compound expandable, pass isControlRow as well
                      ..."control row" content...
                    </Tr>
                    <Tr isExpanded={...logic for checking for expansion...}>
                      <Td>
                        <ExpandableRowContent>
                          ...the content to display for the cell...
                        </ExpandableRowContent>
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
                ```

#### Feedback 

The following components contain animations that give users dynamic feedback, helping to communicate that an action has taken or will take place.  

1.  Buttons
    - **Animation:** When a button is clicked, the active state color ripples outward from the center of the button.
    - **Example:** All buttons in our components, including in our [button examples and demos](/components/button).

1. Helper text validation
    - **Animation:** When an error occurs in an input that supports helper text (such as in the form and progress components), the helper text fades in as danger styles are applied. 
    - **Example:** The [static text and dynamic status example](/components/helper-text/react-demos#static-text-and-dynamic-status) for helper text.

1.  Form validation
    - **Animation:** When an error occurs in a form field with validation, the component "jiggles" from side to side as danger styles are applied. 
    - **Example:** The [validated form select](/components/forms/form-select#validated), [invalid text area](/components/forms/text-area#invalid), and [invalid text input](/components/forms/text-input#invalid) examples.

1.  Menu toggle validation
    - **Animation:** When an error occurs in a menu toggle with validation, the component "jiggles" from side to side as danger styles are applied. 
    - **Example:** The [danger option in the select with validation](/components/menus/select#with-validation) example.

1.  Progress
    - **Animation:** When an error occurs in a progress bar, the component "jiggles" from side to side as danger styles are applied. 
    - **Example:** The "Danger variant" option in our [progress helper text example](/components/progress#helper-text).

1.  Tabs 
    - **Requires opt-in for HTML-only implementations.**
    - **Animation:** The bottom "active tab" line slides between tabs as they are selected.
    - **Example:** All [default tabs](/components/tabs) in our examples and demos. This animation does not apply to boxed tabs.
    - **Note:** To avoid a breaking change, this animation is opt-in for HTML-only implementations. To support this, view our [HTML guidance for animating the tab accent mark](/components/tabs#animate-current-tab-accent).

##### Icons

The following animations are unique to each icon and don't support any custom icons. For example, you cannot apply the favorite animation to any icon besides the favorite star. 

1.  Favorite
    - **Animation:** When a favorite button is clicked, the star "pulses" and fills with color.
    - **Example:** All favorite buttons in our examples and demos, including our [animated favorite button example](/components/button#favorite).

1.  Hamburger menu 
    - **Animation:** The middle bar of the hamburger icon transforms into an arrow to indicate whether the menu will expand or collapse when clicked. The behavior differs slightly for desktop and mobile views:
        - **Desktop:** Both arrows appears on hover or keyboard focus as appropriate.
        - **Mobile:** When the menu is expanded, a "collapse" arrow is displayed. When collapsed, an "expand" arrow appears on hover or focus.
    - **Example:** All hamburger menu buttons in our examples and demos, including [our page examples](/components/page#vertical-navigation). 
    - **Note:** This animation automatically occurs for hamburger menu buttons in mastheads, but not elsewhere. You can view implementation details in the [hamburger button example](/components/button#hamburger), which demonstrate how to set up the animation logic outside of mastheads.

1.  Settings
    - **Animation:** When a settings button or menu toggle receives hover or keyboard focus, the cog rotates. When focus is lost, it rotates back to its original position.
    - **Example:** All settings buttons and menu toggles in our examples and demos, including our [animated settings button example](/components/button#settings).

### PatternFly AI

We updated our high-level [AI principles and guidelines](/ai/overview) to expand guidance and improve the usability of this resource. We integrated community feedback and research to include new patterns and recommendations that have emerged from the increased use of AI features in products. As the design and implementation of AI features continue to evolve, so will this guiding resource.

#### ChatBot

We expanded our ChatBot extension with improvements identified in a recent usability study, including [editable messages](/extensions/chatbot/messages#user-messages) and [compact styles](/extensions/chatbot/overview/demo#compact-chatbot). We also added other requested features, such as [auto-scrolling for messages](/extensions/chatbot/messages/demo#message-auto-scrolling) (a community contribution!), [empty and error states for the chat history drawer](/extensions/chatbot/ui#drawer-with-search-and-new-chat-button), and [expandable code blocks](/extensions/chatbot/messages#user-messages)&mdash;to name a few.

On the documentation side, there's a new ["Customizing messages" guide](/extensions/chatbot/customizing-messages) that provides guidance for using rehype plugins for advanced HTML customization. 

We also fixed reported bugs, which require no updates on your end.

### CLI experience guidelines

With the help of a community contribution, we now have [a CLI handbook](/content-design/writing-guides/cli-handbook) that offers guidance for designing command-line interface experiences. This resource outlines unique accessibility considerations for CLIs, as well as writing guidelines for crafting well-designed messages, documentation, and interactive CLI experiences.

### Motion guidelines

We updated our [motion guidelines](/foundations-and-styles/motion) to bring our docs up to date with our new component animations, document [motion patterns](/foundations-and-styles/motion#motion-patterns) we're using, and expand the [motion development guide](/foundations-and-styles/motion/development-guide) with additional details and instruction.

### What's next?

For the Q4 release of PatternFly, we look forward to sharing updates on our design guidelines audit, system-wide accessibility improvements, new extensions, and more. We'll share the next round of exciting news in a few months!

<Divider /> 
<Timestamp date={new Date(2025, 3)}>April 2025</Timestamp>

## PatternFly 6.2

For the Q2 2025 PatternFly release we made progress in a few of our key initiatives, including PatternFly 6 migration enablement, component animations, React 19 support, and the continued evolution of PatternFly AI. Updates for these key areas can be found here, in this quarter's release highlights.

### Promoted package versions

The following packages were promoted with this release. Outside of our primary initiatives for this release, we addressed reported bugs and continued to enhance PatternFly with new features, as detailed in the linked changelogs. 

- patternfly/patternfly ([changelog](https://github.com/patternfly/patternfly/releases/tag/v6.2.0))
    - [@patternfly/patternfly@6.2.0](https://www.npmjs.com/package/@patternfly/patternfly/v/6.2.0)
- patternfly/react ([changelog](https://github.com/patternfly/patternfly-react/releases/tag/v6.2.0))
    - [@patternfly/react-charts@8.2.0](https://www.npmjs.com/package/@patternfly/react-charts/v/8.2.0)
    - [@patternfly/react-code-editor@6.2.0](https://www.npmjs.com/package/@patternfly/react-code-editor/v/6.2.0)
    - [@patternfly/react-core@6.2.0](https://www.npmjs.com/package/@patternfly/react-core/v/6.2.0)
    - [@patternfly/react-drag-drop@6.2.0](https://www.npmjs.com/package/@patternfly/react-drag-drop/v/6.2.0)
    - [@patternfly/icons@1.0.4](https://www.npmjs.com/package/@patternfly/icons/v/1.0.4)
    - [@patternfly/react-styles@6.2.0](https://www.npmjs.com/package/@patternfly/react-styles/v/6.2.0)
    - [@patternfly/react-table@6.2.0](https://www.npmjs.com/package/@patternfly/react-table/v/6.2.0)
    - [patternfly/react-templates@6.2.0](https://www.npmjs.com/package/@patternfly/react-templates/v/6.2.0)
    - [@patternfly/react-tokens@6.2.0](https://www.npmjs.com/package/@patternfly/react-tokens/v/6.2.0)
- PatternFly extensions 
    - [@patternfly/chatbot@2.2.0](https://www.npmjs.com/package/@patternfly/chatbot/v/2.2.0) ([changelog](https://github.com/patternfly/chatbot/releases/tag/v2.2.0))
    - [@patternfly/quickstarts@6.2.0](https://www.npmjs.com/package/@patternfly/quickstarts/v/6.2.0) ([changelog](https://github.com/patternfly/patternfly-quickstarts/releases/tag/v6.2.0))
    - [@patternfly/react-catalog-view-extension@6.1.0](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/6.1.0) ([changelog](https://github.com/patternfly/react-catalog-view/releases/tag/v6.1.0))
    - [@patternfly/react-component-groups@6.2.0](https://www.npmjs.com/package/@patternfly/react-component-groups/v/6.2.0) ([changelog](https://github.com/patternfly/react-component-groups/releases/tag/v6.2.0))
    - [@patternfly/react-log-viewer@6.1.0](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/6.1.0) ([changelog](https://github.com/patternfly/react-log-viewer/releases/tag/v6.1.0))
- [@patternfly/react-topology@6.2.0](https://www.npmjs.com/package/@patternfly/react-topology) ([changelog](https://github.com/patternfly/react-topology/releases/tag/v6.2.0))
    - [@patternfly/react-user-feedback@6.1.0](https://www.npmjs.com/package/@patternfly/react-user-feedback/v/6.1.0) ([changelog](https://github.com/patternfly/react-user-feedback/releases/tag/v6.1.0))

### PatternFly 6 enablement

As products have continued their PatternFly 6 migration journeys, we've received helpful feedback on the upgrade process, including common roadblocks and situations that could use more guidance. So, we expanded and reorganized the [PatternFly 6 upgrade guide](/releases/upgrade-guide) to more clearly and comprehensively support the upgrade process. 

### Component animations

Our highly-anticipated animations project focuses on integrating motion design into PatternFly components, to enhance user experiences and provide additional cues for interaction. You can keep track of this project via [our micro-animations roadmap](https://github.com/orgs/patternfly/projects/16/views/23?pane=issue&itemId=86507128&issue=patternfly%7Cpf-roadmap%7C215). 

Note that animations will either be specified as opt-in or opt-out:
- **Opt-in:** Requires additional updates to your codebase in order to function properly. These could cause test failures, depending on how your testing is set up, so you must manually opt into these animations and configure them appropriately. 
- **Opt-out:** Turned on by default. To disable these animations, work with the PatternFly team to find a solution.

With this release, 3 components now support animations: 

1. [Alert](/components/alert)   
    - **Animation type:** Opt-in.
    - **Animation:** For alerts within a group, there's a slide-in animation as new alerts are received and a slide-out animation as alerts are dismissed.
    - **Example:** To visualize the motion, you can interact with our website examples, which have opted in to animations.  
    - **Note:** By default, alert animations are opt-in and will only apply to alerts within an alert group. Opting into animations could require test updates. To ensure your test pass, the quickest solution is to set `hasAnimations` to `false`. Additionally, when alerts are dynamically added to a group, you must ensure that new alerts are prepended to the alert group list, rather than appended to the end of it.  
1. [Navigation](/components/navigation) 
    - **Animation type:** Opt-out.
    - **Animation:** For expandable navigation items, the sub-menu fades in and out as navigation items are expanded and collapsed.
    - **Example:** As an opt-out animation, you can see this motion by default across expandable navigation items.
1. [Notification badge](/components/notification-badge)
    - **Animation type:** Opt-in.
    - **Animation:** When the animation is triggered (for example, when a new notification arrives), the bell icon has a "ring" animation.
    - **Example:** To illustrate the motion of this animation, we added a [notification badge "With animations" example](/components/notification-badge#with-animation). 

### React 19 support

We’ve made significant progress towards React 19 support in PatternFly, which is being tracked in [the React 19 roadmap](https://github.com/patternfly/pf-roadmap/issues/201). Our remaining work involves updating our React dependencies, testing version support, and creating any necessary support resources or documentation. 

### PatternFly AI 

In the world of PatternFly AI, we've continued our focus on expanding our ChatBot extension. As more Flyers have used ChatBot, we've gained insight into the types of new features that would have the most impact. To make progress on growing ChatBot needs, this release adds *many* new features, including [an inline drawer display mode](https://patternfly-org-pr-4493-site.surge.sh/extensions/chatbot/overview/demo/#inline-drawer-chatbot), the ability for users to give [message feedback](https://patternfly-org-pr-4493-site.surge.sh/extensions/chatbot/messages#message-feedback), [support for quick starts](https://patternfly-org-pr-4493-site.surge.sh/extensions/chatbot/messages#messages-with-quick-start-tiles), additional content types for [messages](/extensions/chatbot/messages#bot-messages), and much more. 

To see a complete list of new ChatBot features, [view the changelog](https://github.com/patternfly/chatbot/releases/tag/v2.2.0). 

Along with these new features, we've updated our documentation:
- [The ChatBot design guidelines](/extensions/chatbot/overview/design-guidelines) have been updated to reflect new features, expand on previous guidance, and add higher-level patterns for ChatBots usage in products. 
- New [ChatBot analytics documentation](/extensions/chatbot/analytics) is also now available, which provides general guidance on the implementation of analytics tracking.

### Expanded chart library
PatternFly has historically provided a charting solution using the [Victory](https://formidable.com/open-source/victory/docs/victory-chart/) chart library. With this release, PatternFly is also now delivering 2 charts based on the [Apache ECharts](https://echarts.apache.org/) library, including [a line chart](/components/charts/line-chart) and [a Sankey chart](/components/charts/sankey-chart).

Additionally, EChart is now listed as a peer dependency for PatternFly. To use these new chart solutions, add 'echart' to your project dependencies and follow PatternFly's documentation to build out your charts.

### Notable changes

Outside of our key initiatives, there are a few notable changes that may require changes to your codebase and tests. 

#### Components
- Button
    - **Change:** The `aria-disabled` will now only render when `true`, not on elements where it is `false` or `undefined`. 
    - **Required update:** Update tests that either:
            - Check for `aria-disabled` to be `false`
            - Match the disabled property 
- Charts
    - **Change:** Errors related to Victory 37.3.4 have been addressed.
    - **Required update:** If you're using PatternFly 5, use [react-charts](https://www.npmjs.com/package/@patternfly/react-charts) v7.4.8 with Victory v37.3.4 or later. 

- Table
    - **Change:** The [column management](/components/table/react-demos#column-management) and [column management with draggable](/components/table/react-demos#column-management-with-draggable) features have been rewritten to replace the use of the deprecated `<DragDrop>` component. 
    - **Required update:** Remove the deprecated `<DragDrop>` component by referring to the updated table demos. 

#### Extensions
- ChatBot 
    - **Change:** DOMpurify is no longer a dependency. 
    - **Required update:** Uninstall/remove DOMpurify from your codebases.
- ChatBot
    - **Change:** `<MessageBar>` is now a [PatternFly `<TextArea>`](/components/forms/text-area), which leads to the following type changes for `<MessageBarProps>`: 
        - `onChange`:
            - Before: `(event: React.ChangeEvent<HTMLDivElement>, value: string) => void;`
            - After: `(event: React.ChangeEvent<HTMLTextAreaElement>, value: string | number) => void;`
        - `onSendMessage`:
            - Before: `(message: string) => void;`
            - After: `(message: string | number) => void;`
    - **Required update:** Where relevant, update the Typescript types for `<MessageBarProps>`.
- Quick starts
    - **Change:** The markdown parser has been changed to one that's more actively being maintained. 
    - **Required update:** Verify that any custom markdown extensions you use still work properly. This is where bugs are most likely from this change.  
        - If you see issues with custom markdown extensions, or any other issues with markdown parsing after this change, please [raise an issue](https://github.com/patternfly/patternfly-quickstarts/issues). 

### What's next?

For the Q3 release of PatternFly, we will continue to focus on the initiatives mentioned in this release, fix bugs, and address any new, critical priorities that come up. To stay up to date with our primary focus areas, you can keep track of [the PatternFly Roadmap initiatives board](https://github.com/orgs/patternfly/projects/16/views/23).

<Divider />

<Timestamp date={new Date(2025, 0)}>January 2025</Timestamp>

## PatternFly 6.1.1

### Promoted package versions
- [@patternfly/data-view@6.1.0](https://www.npmjs.com/package/@patternfly/react-data-view)

### Extension updates 

As a quick follow up to our last release, this update publishes the new data view extension.

<Divider />

<Timestamp date={new Date(2024, 11)}>December 2024</Timestamp>

## PatternFly 6.1

### Promoted package versions
- patternfly/patternfly ([changelog](https://github.com/patternfly/patternfly/releases/tag/v6.1.0))
    - [@patternfly/patternfly@6.1.0](https://www.npmjs.com/package/@patternfly/patternfly/v/6.1.0)
- patternfly/react ([changelog](https://github.com/patternfly/patternfly-react/releases/tag/v6.1.0))
    - [@patternfly/react-charts@8.1.0](https://www.npmjs.com/package/@patternfly/react-charts/v/8.1.0)
    - [@patternfly/react-code-editor@6.1.0](https://www.npmjs.com/package/@patternfly/react-code-editor/v/6.1.0)
    - [@patternfly/react-core@6.1.0](https://www.npmjs.com/package/@patternfly/react-core/v/6.1.0)
    - [@patternfly/react-drag-drop@6.1.0](https://www.npmjs.com/package/@patternfly/react-drag-drop/v/6.1.0)
    - [@patternfly/react-styles@6.1.0](https://www.npmjs.com/package/@patternfly/react-styles/v/6.1.0)
    - [@patternfly/react-table@6.1.0](https://www.npmjs.com/package/@patternfly/react-table/v/6.1.0)
    - [patternfly/react-templates@6.1.0](https://www.npmjs.com/package/@patternfly/react-templates/v/6.1.0)
    - [@patternfly/react-tokens@6.1.0](https://www.npmjs.com/package/@patternfly/react-tokens/v/6.1.0)
- PatternFly extensions 
    - [@patternfly/react-component-groups@6.1.0](https://www.npmjs.com/package/@patternfly/react-component-groups/v/6.1.0) ([changelog](https://github.com/patternfly/react-component-groups/releases/tag/v6.1.0))
    - [@patternfly/react-log-viewer@6.1.0](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/6.1.0) ([changelog](https://github.com/patternfly/react-log-viewer/releases/tag/v6.1.0))
    - [@patternfly/react-topology@6.1.0](https://www.npmjs.com/package/@patternfly/react-topology/v/6.1.0) ([changelog](https://github.com/patternfly/react-topology/releases/tag/v6.1.0))
    - [@patternfly/quickstarts@6.1.0](https://www.npmjs.com/package/@patternfly/quickstarts/v/6.1.0) ([changelog](https://github.com/patternfly/patternfly-quickstarts/releases/tag/v6.1.0))
    - [@patternfly/chatbot@2.1.0](https://www.npmjs.com/package/@patternfly/chatbot/v/2.1.0) ([changelog](https://github.com/patternfly/chatbot/releases/tag/v2.1.0))

### Component updates 

We fixed bugs that were reported in our components, the details of which can be found in [the patternfly-react release notes](https://github.com/patternfly/patternfly-react/releases) and the [patternfly (Core) release notes](https://github.com/patternfly/patternfly/releases). 

These changes mostly resolved functionality issues and made improvements to visual styles. 

The following fix could require manual updates depending on how you handle breakpoints in your code:

- We fixed a breakpoint issue in our table component, which caused table breakpoints for the desktop/mobile responsive layout to be 1px off from our other component breakpoints. Now, the table will responsively update between desktop and mobile at the same width as our other components. If you've manually configured your own breakpoints to match table's previous breakpoints, this fix will require you to make CSS updates to bring your code in line with the updated breakpoint value.

### Website updates 

- We fixed an issue on PatternFly.org that prevented proper page loading when navigating to new pages via in-content links.

- We updated [the PatternFly.org accessibility scorecard](/accessibility/product-scorecard#patternfly.org-accessibility-scorecard) and will begin to resolve accessibility violations that were identified.

### Content updates

- We updated design guideline images for [context selector](/components/menus/context-selector/design-guidelines) to align with PatternFly 6 styles. There is an ongoing effort to update images across PatternFly.org to reflect our new visuals, tracked in this [PatternFly 6 design guidelines issue](https://github.com/patternfly/patternfly-org/issues/4235).
- We updated the illustrations on [the component overview page](/components/all-components). 
- We updated and added "draggable" examples to [dual list selector](/components/dual-list-selector#draggable) and [data list](/components/data-list#draggable).
- We updated our ChatBot documentation: 
    - We renamed the extension to "ChatBot", to better brand our offering and help distinguish it from other general "chatbot" features.
    - We combined and organized our documentation into a few cohesive pages: ["Overview"](/extensions/chatbot/overview), ["UI"](/extensions/chatbot/ui), and ["Messages"](/extensions/chatbot/messages). Note that our documentation structure could continue to change as our extension grows. We will continue to share updates when changes occur. 
    - We moved our [basic and embedded ChatBot demos](/extensions/chatbot/overview/demo) to the "Overview" page for better visibility. 
    - We added initial [ChatBot design guidelines](/extensions/chatbot/overview/design-guidelines), which can also be found on the "Overview" page.
    - We added documentation for new features, as described in the following section. 

### Extension updates 

#### ChatBot

We've continued to evolve our new ChatBot:
- We renamed the repo from "patternfly/visual-assistant" to "patternfly/chatbot" to align with our website docs.
- We removed the third-party `AutoTextArea` in the message bar and replaced it with our own custom solution.
- We renamed the `toolTipLabel` prop to `tooltipLabel`.
- We added support for new features, including: 
    - A ["skip to chatbot" button](/extensions/chatbot/ui#skip-to-content).
    - New features in [ChatBot messages](/extensions/chatbot/messages#messages) and the message bar: 
        - Truncation of long bot and user names. 
        - More complex list formats.
        - [Quick response buttons](/extensions/chatbot/messages#messages-with-quick-responses). 
        - [Multiple file attachments](/extensions/chatbot/messages#messages-with-attachments). 
         - A [stop streaming button](/extensions/chatbot/ui#message-bar-with-stop-button) that will pause the streaming of a ChatBot message.
        - Additional customization options for [welcome messages](/extensions/chatbot/ui#welcome-message), [message avatars](/extensions/chatbot/messages#messages), [message actions](/extensions/chatbot/messages#custom-messages-actions), [modal](/extensions/chatbot/ui#modal), [toggle shape](/extensions/chatbot/ui#custom-toggle-shape).
        - A variety of styling updates to shadows, sizing, and positioning. 
    
#### Component groups

- We added customization support to [error state](/extensions/component-groups/error-state) via PatternFly empty state props, including a custom icon and title heading level.

<Divider />

<Timestamp date={new Date(2024, 9)}>October 2024</Timestamp>

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

- [About PatternFly AI](/ai/overview)
- [AI guidelines](/ai/overview)
- [Chatbot](/extensions/chatbot/overview)
- [Conversation design](/ai/conversation-design)

As with all things AI currently, this area will continue to grow and mature with time.

### Component groups restructuring

We made many updates to our [component groups extension](/extensions/component-groups/overview) to improve accuracy, usability, and alignment with PatternFly 6. We've moved its website section to our top-level navigation for better visibility, and also to support necessary sub-navigation. We've conceptually grouped the components into functional categories. Additionally, we renamed some of the components to be more accurate. 

Our updated documentation includes:

| **Category*- | **Components*- | 
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

We updated existing design tokens and added new tokens to support directional box-shadows. To see these tokens, search "box-shadow" in our [tokens documentation](/foundations-and-styles/design-tokens/all-patternfly-tokens).

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
- Documented our tabular number modifier `.pf-v6-m-tabular-nums` in [typography](/foundations-and-styles/typography), [numerics](/content-design/grammar/numerics), and [table](/components/table/design-guidelines).
- Added guidance for editorial styling to our [content component](/components/content) (formerly called text content).
- We've started updating images across our design guidelines to represent PatternFly 6 styling.

#### Miscellaneous cleanup and enhancements
- Shortened component descriptions shown in component page headers and on the [all components page](/components/all-components).
- Added more details about [React tokens](/foundations-and-styles/design-tokens/develop#react-tokens) and [how to migrate them](/releases/upgrade-guide#utilize-our-tokens-update-codemod).
- Added React example documentation for [text input group](/components/text-input-group).

<Divider />

<Timestamp date={new Date(2024, 7)}>August 2024</Timestamp>

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
    - [About tokens](/foundations-and-styles/design-tokens/overview)
    - [All design tokens](/foundations-and-styles/design-tokens/all-design-tokens)
    - [Develop with tokens](/foundations-and-styles/design-tokens/develop)
    - [Design with tokens](/foundations-and-styles/design-tokens/design)
    - **Note:*- Any @patternfly/react-tokens referencing global variables will need to be updated, since global variables have been replaced with tokens. Following our [token migration instructions](/foundations-and-styles/design-tokens/develop#migrate-to-tokens) will help you determine the correct token to use. 
- Our design foundations 
    - [Colors](/foundations-and-styles/colors) 
    - [Icons](/foundations-and-styles/iconography) 
    - [Spacers](/foundations-and-styles/spacers)  
    - [Typography](/foundations-and-styles/typography)  

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

Related design resources can also be found in [our PatternFly 6 Figma kit](https://www.figma.com/@patternfly).

### Bug fixes
We fixed bugs that were reported throughout the alpha period including. We:
- Fixed an issue with displaying card hover/click states in the user feedback extension.
- Updated buttons to support wrappers, which fixes padding issues.
- Updated our documentation to replace terms from deprecated components. For example, replacing "chip" with "label" across React property names.
- Fixed various small accessibility bugs.
- Removed deprecated or unused properties across some of our components.

<Divider />

<Timestamp date={new Date(2024, 5)}>June 2024</Timestamp>

## PatternFly 6 alpha 

We're excited to announce that our alpha release of PatternFly 6 is now live. Here are the highlights that you should know about!

### PatternFly 6 visual theme

As you've probably already noticed on the alpha website: PatternFly 6 has a new look. Our brand new visual theme is more modern and refined, so that you can create UIs that are more seamless and lightweight.

All of our components have a new look to match. As you use the alpha website, take a look at our component examples, demos, and patterns to explore our redesign.

### Design tokens 

In order to support PatternFly 6, and any future visual theming capabilities, we have implemented a design token system for PatternFly. For more details and instructions on how to use tokens, you can refer to our new [design token documentation](/foundations-and-styles/design-tokens/overview).

Our tokens cover both dark and light themes, and make it easier to support both in your product. We also updated our [dark theme handbook](/foundations-and-styles/theming/dark-theme-handbook) to align with our tokens.

**Note:*- The PatternFly 5 design library is not built with tokens. To take advantage of our token system, you must [upgrade your product to PatternFly 6](/releases/upgrade-guide).