---
id: Release highlights
title: Release highlights
section: get-started
---

import './get-started.css';
import { Divider } from '@patternfly/react-core';

## PatternFly 5.4 patches
We've released a few patches for PatternFly 5.4, which primarily upgrade dependencies and fix bugs.

### Promoted package versions
- [@patternfly/patternfly: 5.4.2](https://www.npmjs.com/package/@patternfly/patternfly/v/5.4.2)
- [@patternfly/react-charts: 7.4.5](https://www.npmjs.com/package/@patternfly/react-charts/v/7.4.5)
- [@patternfly/react-code-editor: 5.4.10](https://www.npmjs.com/package/@patternfly/react-code-editor/v/5.4.10)
- [@patternfly/react-core: 5.4.8](https://www.npmjs.com/package/@patternfly/react-core/v/5.4.8)
- [@patternfly/react-drag-drop: 5.4.8](https://www.npmjs.com/package/@patternfly/react-drag-drop/v/5.4.8)
- [@patternfly/react-icons: 5.4.2](https://www.npmjs.com/package/@patternfly/react-icons/v/5.4.2)
- [@patternfly/react-styles: 5.4.1](https://www.npmjs.com/package/@patternfly/react-styles/v/5.4.1)
- [@patternfly/react-table: 5.4.8](https://www.npmjs.com/package/@patternfly/react-table/v/5.4.8)
- [@patternfly/react-templates: 1.1.8](https://www.npmjs.com/package/@patternfly/react-templates/v/1.1.8)
- [@patternfly/react-tokens: 5.4.1](https://www.npmjs.com/package/@patternfly/react-tokens/v/5.4.1)
- [@patternfly/react-component-groups: 5.5.3](https://www.npmjs.com/package/@patternfly/react-component-groups/v/5.5.3)

### HTML updates
- Menu toggle: Updated the secondary background color to be transparent, except for disabled states.

### React updates

#### Dependency upgrades
- Updated `eslint-plugin-import` to ^2.30.0 
- Updated `eslint-plugin-jsx-a11y` to ^6.10.0 
- Updated `eslint-plugin-promise` to ^6.6.0 
- Updated `tslib` to ^2.7.0 
- Updated `eslint-plugin-react` to ^7.37.1 
- Updated `focus-trap` to v7.6.0 
- Updated `eslint-plugin-prettier` to ^5.2.1 

#### Components
- Menu: Fixed a focus event that caused inconsistent scrolling behavior across a number of menu components. 
- Dropdown/select: Updated autofocus to be `false` by default. 
- Dropdown: Delayed focus setting on first item to prevent inadvertent scrolling. 
- Navigation: Reverted a previous PR that caused regression. 
- "Next" modal: Updated to prevent auto `aria-labelledby` if `aria-label` is passed. 
- Expandable section: Added checks for `contentRef` to avoid console errors.

#### Charts
- New and updated examples: 
    - Bar chart: Added [a new example](/charts/bar-chart/#alerts-timeline) that demonstrates an alert timeline using horizontal bar charts.
    - Pie chart: Updated [an existing example](/charts/pie-chart/#custom-color-scale) to demonstrate how to apply custom styles.
    - Fixed a general issue that caused undesirable space between tick labels and bottom-positioned legends.

- Bug fixes:
    - Fixed `defaultProps` deprecation warning.
    - Resolved issue with `victoryCreateContainer` that caused breakage when using the `createContainer` function.

### Component groups

- Multi content card: Fixed `ouiaId` issue in `<MenuToggle>`. 

<Divider />

## PatternFly 5.4
The final minor release within PatternFly 5 is now live! Next up is PatternFly 6. Don't forget to keep an eye on [our staging site](https://staging-v6.patternfly.org/) for updates. 

But first, we have *lots* to share for this update&mdash;check out the highlights.

### Promoted package versions

- patternfly/patternfly ([changelog](https://github.com/patternfly/patternfly/releases/tag/v5.4.0))
  - [@patternfly/patternfly@5.4.0](https://www.npmjs.com/package/@patternfly/patternfly/v/5.4.0)


- patternfly/patternfly-react ([changelog](https://github.com/patternfly/patternfly-react/releases/tag/v5.4.0))
  - [@patternfly/react-charts@7.4.0](https://www.npmjs.com/package/@patternfly/react-charts/v/7.4.0)
  - [@patternfly/react-code-editor@5.4.0](https://www.npmjs.com/package/@patternfly/react-code-editor/v/5.4.0)
  - [@patternfly/react-core@5.4.0](https://www.npmjs.com/package/@patternfly/react-core/v/5.4.0)
  - [@patternfly/react-drag-drop@5.4.0](https://www.npmjs.com/package/@patternfly/react-drag-drop/v/5.4.0)
  - [@patternfly/react-icons@5.4.0](https://www.npmjs.com/package/@patternfly/react-icons/v/5.4.0)
  - [@patternfly/react-styles@5.4.0](https://www.npmjs.com/package/@patternfly/react-styles/v/5.4.0)
  - [@patternfly/react-table@5.4.0](https://www.npmjs.com/package/@patternfly/react-table/v/5.4.0)
  - [@patternfly/react-templates@1.1.0](https://www.npmjs.com/package/@patternfly/react-templates/v/1.1.0)
  - [@patternfly/react-tokens@5.4.0](https://www.npmjs.com/package/@patternfly/react-tokens/v/5.4.0)


- PatternFly extensions
  - [@patternfly/react-console@5.1.0](https://www.npmjs.com/package/@patternfly/react-console/v/5.1.0) ([changelog](https://github.com/patternfly/react-console/releases/tag/v5.1.0))
  - [@patternfly/react-log-viewer@5.3.0](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/5.3.0) ([changelog](https://github.com/patternfly/react-log-viewer/releases/tag/v5.3.0))
  - [@patternfly/react-topology@5.4.0](https://www.npmjs.com/package/@patternfly/react-topology/v/5.4.0) ([changelog](https://github.com/patternfly/react-topology/releases/tag/v5.4.0))
  - [@patternfly/patternfly-quickstarts@5.4.0](https://www.npmjs.com/package/@patternfly/quickstarts/v/5.4.0) ([changelog](https://github.com/patternfly/patternfly-quickstarts/releases/tag/v5.4.0))

### Component updates
#### Fixed bugs

There were still a handful of bugs on our to-do list. To address a variety of reported issues, we did the following:

- Added support for additional label info on horizontal forms.
- Added a missing border on compound expansion table rows.
- Fixed `<ExpandableSection>` errors that were caused by `variant="truncate"`
- Fixed issues with icon variants in the "next" modal component.
- Updated `paginationAriaLabel` to stop adding "items" to the end of labels.
- Fixed unexpected wrapping in the pagination component. 
- Added `shouldFocusFirstMenuItemOnOpen` to the dropdown component, to fix autofocus issues.
- Fixed spacing issues with progress stepper's help text title.
- Fixed some charts-related errors.
- Added new `shouldFocusContent` property to the wizard component to help navigate accessibility challenges when navigating wizards with keyboard controls.
- Improved accessibility features for the tree view component via aria properties.
- Fixed an issue in the code block component that was removing code styling terms, like "\n" and "\t".
- Updated the truncate component to only show a tooltip when truncation is present.
- Drag and drop: 
  - Switched to the flex layout in the multi-list drag and drop example.
  - Fixed the positioning of `DragOverlay`

#### New features, examples, and demos

We added new features, examples, and demos to a few of our components:
- **Feature:** Expanded selectable area size for checkboxes.
- **Feature:** New page component properties to support drawer width customization.
- **Feature:** Multiple drop zones in the "next" drag and drop component.
- **Example:** [Editable table rows.](/components/table#editable-rows)
- **Example:** [Main section variations for the page component.](/components/page#main-section-variations)
- **Demo:** [Masthead with horizontal navigation.](/components/masthead/react-demos#horizontal-nav)
- **Demo:** [Basic description list.](/components/description-list/react-demos#basic)

#### New severity icons

We created new severity icons, which can be used to communicate the severity of an error or issue with a data source that is linked to a UI element. These icons have been added to both our [Core](https://www.npmjs.com/package/@patternfly/patternfly) and [React](https://www.npmjs.com/package/@patternfly/react-icons) packages. They are also available for design use in [our Figma design kits.](https://www.figma.com/@patternfly) 

![Severity icons within Figma menu](./img/severity-icons-figma.png)

There are 6 icons that cover the following severity levels:
- Undefined
- None
- Minor 
- Moderate 
- Important
- Critical

We are still working on writing design guidelines to document usage rules for these icons. Once these are completed and published, we will provide an update.

#### New and updated React templates 

We added 2 new react templates to help your migration efforts, including:
- [Simple dropdown](/components/menus/dropdown/react-templates) 
- [Multi-typeahead select](/components/menus/select/react-templates) 

We also updated some of our existing templates to address issues:
- We fixed a bug that prevented initial selections from showing in simple select and checkbox select templates.
- We fixed a bug that appeared after selections were cleared in a typeahead select.
- We added additional customization support to our select templates.

### Extensions updates
#### Topology 

We've expanded our Topology features to support a range of use cases, and fixed bugs that were found.

**Pipelines**

We added a few things to pipelines, including:

- Custom status icons. 
- `GroupLabelComponent`
- Updates for expanded/collapsed groups.
	- Support for focusing on the bounds of an expanded group.
	- Adjusted the appearance of expanded group labels to match collapsed label styles.
- Selectable task edges and selected task edge styling options.
- Support for displaying nested, collapsed groups.

**Group labels**

- Added ability to center group labels on edges.
- Added ability to display group labels on hover.

**Control bar**

- Added new expand/collapse all buttons.

**Layouts**

Updated the version of the dagre layout.

**Task groups**

- Added ability to display support status.

We also went through all of our [Topology docs](/topology/about-topology) to tidy things up, expand on details, and make sure everything is consistent with other PatternFly docs. We also added documentation to provide guidance for using the Topology demo app. 

#### Quickstarts 
We fixed an issue that prevented the quickstart panel from grabbing focus.

#### Logviewer
We exposed `LogViewerProps` to allow for reuse.
We fixed issues with the full-screen React demo.

#### React console
We fixed the link to https://virt-manager.org/download 

### Content updates

We made a few updates to our website documentation as part of our ongoing, full-site content audit: 
#### Onboarding guides 
We made updates across our onboarding docs (aka our "Get started" pages). These changes aligned with our findings from previous user research, and make our onboarding docs more accurate, up-to-date, and easier to navigate. Changes included: 
- Moving the Community page info into our About PatternFly page
- Combining the Contribute pages into 1 organized guide
- Updating the Design and Develop pages to align the content and designs with the user expectations we uncovered in our content study 

The same info (and more!) is available, it's just a little reorganized: 

![Get started navigation before and after](./img/get-started-nav.png)

#### Actions pattern 
We added a new [actions pattern page](/patterns/actions) to document common design patterns related to using actions in components and screens. This page includes clarity around deletion and removal actions, as well as action placement within components and UI screens. 

To align with this new information, action-related guidance was updated in the data list, table, and toolbar component design guidelines, and also within the card view pattern guidelines.

#### UX writing guide 
We collaborated with other Red Hatters to make sure the PatternFly UX writing guidelines are inline with IBM and Red Hat product documentation standards. A variety of smaller updates were made to our guidance recommendations.

We also now have a new [tooltips writing guide.](/ux-writing/tooltips) This doc was actually released ahead of 5.4, so you may have come across it already, but we want to share the news here to ensure that it's on everyone's radar. 

#### Link updates 

We took care of some housekeeping and updated a few broken and outdated links that we found. 

We also updated our mailing list link to align with our new sign-up form. Keep an eye out for more email communication going forward.

<Divider />

## PatternFly 5.3.2
PatternFly 5.3.2 is now live! This was a patch release to fix a couple of bugs.

### Promoted package versions

- patternfly/patternfly ([changelog](https://github.com/patternfly/patternfly/releases/tag/patch-v5.3.1))
  - [@patternfly/patternfly@5.3.1](https://www.npmjs.com/package/@patternfly/patternfly/v/5.3.1)

- patternfly/patternfly-react ([changelog](https://github.com/patternfly/patternfly-react/releases/tag/v5.3.2))
  - [@patternfly/react-charts@7.3.1](https://www.npmjs.com/package/@patternfly/react-charts/v/7.3.1)
  - [@patternfly/react-code-editor@5.3.3](https://www.npmjs.com/package/@patternfly/react-code-editor/v/5.3.3)
  - [@patternfly/react-core@5.3.3](https://www.npmjs.com/package/@patternfly/react-core/v/5.3.3)
  - [@patternfly/react-docs@6.3.3](https://www.npmjs.com/package/@patternfly/react-docs/v/6.3.3)
  - [@patternfly/react-drag-drop@5.3.3](https://www.npmjs.com/package/@patternfly/react-drag-drop/v/5.3.3)
  - [@patternfly/react-icons@5.3.2](https://www.npmjs.com/package/@patternfly/react-icons/v/5.3.2)
  - [@patternfly/react-styles@5.3.1](https://www.npmjs.com/package/@patternfly/react-styles/v/5.3.1)
  - [@patternfly/react-table@5.3.3](https://www.npmjs.com/package/@patternfly/react-table/v/5.3.2)
  - [@patternfly/react-templates@1.0.3](https://www.npmjs.com/package/@patternfly/react-templates/v/1.0.3)
  - [@patternfly/react-tokens@5.3.1](https://www.npmjs.com/package/@patternfly/react-tokens/v/5.3.1)

### Fixed bugs
In this patch release, we:
- Fixed a wrapping issue in [the bottom pagination component](/components/pagination#bottom).
- Fixed and added accessibility support to the tree view component, including `aria-multiselectable` and `aria-selected`.

## PatternFly 5.3.1
PatternFly 5.3.1 is now live! This was a patch release to fix a bug.

### Promoted package versions

- patternfly/patternfly-react ([changelog](https://github.com/patternfly/patternfly-react/releases/tag/5.3.1))
  - [@patternfly/react-code-editor@5.3.1](https://www.npmjs.com/package/@patternfly/react-code-editor/v/5.3.1)
  - [@patternfly/react-core@5.3.1](https://www.npmjs.com/package/@patternfly/react-core/v/5.3.1)
  - [@patternfly/react-docs@6.3.1](https://www.npmjs.com/package/@patternfly/react-docs/v/6.3.1)
  - [@patternfly/react-drag-drop@5.3.1](https://www.npmjs.com/package/@patternfly/react-drag-drop/v/5.3.1)
  - [@patternfly/react-table@5.3.1](https://www.npmjs.com/package/@patternfly/react-table/v/5.3.1)
  - [@patternfly/react-templates@1.0.1](https://www.npmjs.com/package/@patternfly/react-templates/v/1.0.1)
  - [@patternfly/react-icons@5.3.1](https://www.npmjs.com/package/@patternfly/react-icons/v/5.3.1) 
  
### Fixed bugs
In this patch release, we:
- Added `dist/dynamic-modules.json` and made it easier for products to share specific dynamic modules.

## PatternFly 5.3

PatternFly 5.3 is now live! Here are the highlights from this release. 

### Promoted package versions

- patternfly/patternfly ([changelog](https://github.com/patternfly/patternfly/releases/tag/v5.3.0))
  - [@patternfly/patternfly@5.3.0](https://www.npmjs.com/package/@patternfly/patternfly/v/5.3.0)

- patternfly/patternfly-react ([changelog](https://github.com/patternfly/patternfly-react/releases/tag/v5.3.0))
  - [@patternfly/react-charts@7.3.0](https://www.npmjs.com/package/@patternfly/react-charts/v/7.3.0)
  - [@patternfly/react-code-editor@5.3.0](https://www.npmjs.com/package/@patternfly/react-code-editor/v/5.3.0)
  - [@patternfly/react-core@5.3.0](https://www.npmjs.com/package/@patternfly/react-core/v/5.3.0)
  - [@patternfly/react-icons@5.3.0](https://www.npmjs.com/package/@patternfly/react-icons/v/5.3.0)
  - [@patternfly/react-styles@5.3.0](https://www.npmjs.com/package/@patternfly/react-styles/v/5.3.0)
  - [@patternfly/react-table@5.3.0](https://www.npmjs.com/package/@patternfly/react-table/v/5.3.0)
  - [@patternfly/react-tokens@5.3.0](https://www.npmjs.com/package/@patternfly/react-tokens/v/5.3.0)
  - [@patternfly/react-templates@1.0.0](https://www.npmjs.com/package/@patternfly/react-templates/v/1.0.0)


- PatternFly extensions
  - [@patternfly/react-topology@5.3.0](https://www.npmjs.com/package/@patternfly/react-topology/v/5.3.0) ([changelog](https://github.com/patternfly/react-topology/releases/tag/v5.3.0))
  - [@patternfly/patternfly-quickstarts@5.3.0](https://www.npmjs.com/package/@patternfly/quickstarts/v/5.3.0) ([changelog](https://github.com/patternfly/patternfly-quickstarts/releases/tag/v5.3.0))


### React templates 
We created a new feature for React components, called "templates", which combine a component with logic that supports a specific use case. Templates also come with a streamlined API that offers additional, limited customization. This will help reduce the amount of boilerplate code needed for common and recurring use cases.

Templates will also make it easier to upgrade your deprecated components going forward. For example, you can use a template to upgrade from the [current version of our select component](/components/menus/select) from [the deprecated version.](/components/menus/select/react-deprecated)

### Component updates 

#### Menu toggle with status indicator
We added support for a status indicator [within the menu toggle component.](/components/menus/menu-toggle#status) This allows you to associate a menu toggle item with different statuses, such as "success", "warning", and "danger", so that users have more context about the effect that a selection may have. 

Because [the select component](/components/menus/select) is built with a menu toggle, this status indication can also be utilized by select components, [as shown in this example.](/components/menus/select#with-validation) This update replicates functionality that was present in [the now deprecated select component](/components/menus/select/react-deprecated), which has not been supported in our current implementation until now. With this addition, you can now migrate any select components using validation to our updated select implementation.

<img src="./img/menu-toggle-status.png" alt="Menu toggles with success, warning, and danger status indicators." width="300px"/>

#### Dual list selector "next" version
We created the "next" version of [the dual list selector component](/components/dual-list-selector), which offers a simpler, more composable implementation. We also updated all examples to be solely comprised of composable components.

**Note:** As a reminder, our next components will be promoted with our next major release. Once a next component is promoted, it becomes the default recommended implementation for that component.

#### Form select component bug fix
We found a bug in [the form select component](/components/forms/form-select) that occasionally rendered the wrong color for menu items when a select menu placeholder was used in certain OS/browser combinations. We corrected this issue, so the appropriate color will now be used consistently.

### Topology pipeline updates
To enhance and improve the experience using [topology pipelines](/topology/pipelines), we added a few new features.

#### New layouts
We introduced a new vertical layout that can display pipelines from top to bottom, rather than the previous left-to-right default.

<img src="./img/topology-vertical-pipelines.png" alt="Topology pipeline in a top-to-bottom vertical presentation." width="500px"/>

We also added support for groups in pipeline views, which allows you to combine and nest graphs. Groups are supported in both vertical and horizontal layouts.

<img src="./img/topology-pipeline-groups.png" alt="Multiple topology pipelines grouped within a pipeline." width="650px"/>

#### Functional and visual enhancements
To add more flexibility to topology pipelines, we added support for a couple of new features. These features introduce: 
- Arrows as directional indicators between pipeline tasks. 

  <img src="./img/topology-pipeline-arrows.png" alt="Topology pipeline with arrows between tasks." width="450px"/>

- The ability to collapse and expand pipeline groups.

  <img src="./img/topology-pipeline-expansion.png" alt="Topology pipeline before and after being collapsed." width="650px"/>

### Quick starts extension updates
We made a few updates to [our quick starts extension](/extensions/quick-starts), which lives in [the patternfly/patternfly-quickstarts repository.](https://github.com/patternfly/patternfly-quickstarts)

#### Removed AsciiDoc code
To clean up our codebase and processes, we removed AsciiDoc examples, which were no longer being utilized by any products. We still have support for AsciiDoc, but we generally recommend using Markdown instead.

#### New bookmarks feature
We added new functionality to cards in quick starts, which allows users to bookmark cards as needed. 

<img src="./img/quickstarts-bookmark.png" alt="Card with bookmark action icon." width="300px"/>

#### Bug fixes
We fixed a few issues to enable: 
- Clickable cards.
- Active and hover card styles.
- Links that open in a new tab.

### Coming soon
The release of our v6 alpha will be here soon. Keep an eye on [our Medium publication](https://medium.com/patternfly) and the PatternFly website for updates. We'll be sure to share an announcement as soon as the alpha is live!

<Divider></Divider>

## PatternFly 5.2.2

PatternFly 5.2.2 is now live! This was a patch release to fix a significant bug that was found.

### Promoted package versions

- patternfly/patternfly-react ([changelog](https://github.com/patternfly/patternfly-react/releases/tag/5.2.2))
  - [@patternfly/react-code-editor@5.2.2](https://www.npmjs.com/package/@patternfly/react-code-editor/v/5.2.2)
  - [@patternfly/react-core@5.2.2](https://www.npmjs.com/package/@patternfly/react-core/v/5.2.2)
  - [@patternfly/react-drag-drop@5.2.2](https://www.npmjs.com/package/@patternfly/react-drag-drop/v/5.2.2)
  - [@patternfly/react-table@5.2.2](https://www.npmjs.com/package/@patternfly/react-table/v/5.2.2)

### Fixed bugs
In this patch release, we:
- Corrected an issue that caused our menu component to crash when dynamically resetting menu items.

<Divider />

## PatternFly 5.2.1

PatternFly 5.2.1 is now live! This was a patch release to fix a few bugs that were found.

### Promoted package versions

- patternfly/patternfly ([changelog](https://github.com/patternfly/patternfly/releases/tag/patch-v5.2.1))
  - [@patternfly/patternfly@5.2.1](https://www.npmjs.com/package/@patternfly/patternfly/v/5.2.1)

- patternfly/patternfly-react ([changelog](https://github.com/patternfly/patternfly-react/releases/tag/5.2.1))
  - [@patternfly/react-charts@7.2.2](https://www.npmjs.com/package/@patternfly/react-charts/v/7.2.2)
  - [@patternfly/react-code-editor@5.2.1](https://www.npmjs.com/package/@patternfly/react-code-editor/v/5.2.1)
  - [@patternfly/react-core@5.2.1](https://www.npmjs.com/package/@patternfly/react-core/v/5.2.1)
  - [@patternfly/react-drag-drop@5.2.1](https://www.npmjs.com/package/@patternfly/react-drag-drop/v/5.2.1)
  - [@patternfly/react-icons@5.2.1](https://www.npmjs.com/package/@patternfly/react-icons/v/5.2.1)
  - [@patternfly/react-styles@5.2.1](https://www.npmjs.com/package/@patternfly/react-styles/v/5.2.1)
  - [@patternfly/react-table@5.2.1](https://www.npmjs.com/package/@patternfly/react-table/v/5.2.1)
  - [@patternfly/react-tokens@5.2.1](https://www.npmjs.com/package/@patternfly/react-tokens/v/5.2.1)

### Fixed bugs
In this patch release, we:
- Corrected issues with styles and intractability of cards in Chromium-based browsers.
  - Additional details: https://github.com/orgs/patternfly/discussions/6381
- Added support for status modifiers on modal titles.
- Updated types used in react-charts to reflect changes in the Victory types.
- Reverted a previous type change within our clipboard copy component that was unintentionally breaking.
- Updated our code editor component to pass through more props to monaco-editor. 

<Divider />

## PatternFly 5.2 

PatternFly 5.2 is now live! Here are the highlights from this release. 

### Promoted package versions

- patternfly/patternfly ([changelog](https://github.com/patternfly/patternfly/releases/tag/v5.2.0))
  - [@patternfly/patternfly@5.2.0](https://www.npmjs.com/package/@patternfly/patternfly/v/5.2.0)


- patternfly/patternfly-react ([changelog](https://github.com/patternfly/patternfly-react/releases/tag/v5.2.0))
  - [@patternfly/react-charts@7.2.0](https://www.npmjs.com/package/@patternfly/react-charts/v/7.2.0)
  - [@patternfly/react-code-editor@5.2.0](https://www.npmjs.com/package/@patternfly/react-code-editor/v/5.2.0)
  - [@patternfly/react-core@5.2.0](https://www.npmjs.com/package/@patternfly/react-core/v/5.2.0)
  - [@patternfly/react-icons@5.2.0](https://www.npmjs.com/package/@patternfly/react-icons/v/5.2.0)
  - [@patternfly/react-styles@5.2.0](https://www.npmjs.com/package/@patternfly/react-styles/v/5.2.0)
  - [@patternfly/react-table@5.2.0](https://www.npmjs.com/package/@patternfly/react-table/v/5.2.0)
  - [@patternfly/react-tokens@5.2.0](https://www.npmjs.com/package/@patternfly/react-tokens/v/5.2.0)


- PatternFly extensions
  - [@patternfly/react-topology@5.2.1](https://www.npmjs.com/package/@patternfly/react-topology/v/5.2.1) ([changelog](https://github.com/patternfly/react-topology/releases/tag/v5.2.1))
  - [@patternfly/react-log-viewer@5.1.0](https://www.npmjs.com/package/@patternfly/react-component-groups/v/5.0.0) ([changelog](https://github.com/patternfly/react-log-viewer/releases/tag/v5.1.0))
  - [@patternfly/react-component-groups@5.0.0](https://www.npmjs.com/package/@patternfly/react-component-groups/v/5.0.0) ([changelog](https://github.com/patternfly/react-component-groups/releases/tag/v5.0.0))

### Note for ConsoleDot applications

PatternFly's 5.2 release is incompatible with [@redhat-cloud-services/tsc-transform-imports@1.0.6](https://www.npmjs.com/package/@redhat-cloud-services/tsc-transform-imports/v/1.0.6) or earlier.

If your application has a dependency on `@redhat-cloud-services/tsc-transform-imports`, be sure to update it to [@redhat-cloud-services/tsc-transform-imports@1.0.7](https://www.npmjs.com/package/@redhat-cloud-services/tsc-transform-imports/v/1.0.7) or greater.

### Component groups extension 

We released a new extension, called [component groups](/extensions/component-groups/about-component-groups). This extension contains a range of React components that are more complex than standard PatternFly components. These component groups combine and adjust multiple base components to provide opinionated solutions for recurring use cases across products using PatternFly.

Note that the component groups extension is contained in its own [GitHub repository](https://github.com/patternfly/react-component-groups).

This extension was created in an effort to migrate components from the [Red Hat Insights shared components repository](https://github.com/RedHatInsights/frontend-components). The PatternFly component groups extension is now recommended to be used in place of the RedHat Insights implementation. To update your product to using the component groups extension, refer to [our migration guide.](https://github.com/patternfly/react-component-groups/blob/main/migration.md)

The latest version of component groups contains the following components, with [full documentation on PatternFly.org](/extensions/component-groups/about-component-groups):

- Ansible
- Battery
- DetailsPage (beta)
- Error boundary
- Error state
- Invalid object
- Not authorized
- Skeleton table
- Tag count
- Unavailable content
- Warning modal

To learn more about the story behind this project, read our [Medium article](https://medium.com/patternfly/introducing-component-groups-dbe054cac726).

We plan to continue to add additional components as they are requested, so please get involved if you have feedback or new ideas! 

### New React "next" components 

As a reminder, our next components will be promoted with our next major release. Once a next component is promoted, it becomes the default recommended implementation for that component. 

We introduced a next version of **[modal](/components/modal/react-next)**. With this change, the modal API will be composable, rather than React property based.

We also introduced a next version of **[drag and drop](/components/drag-and-drop/react-next)** with [related demos](/components/drag-and-drop/react-next-demos).

### Topology updates 

#### New additions 

We added a new `hulledOutline` property in `DefaultGroup`, which can be used to specify if a group's outline is `hulled` or `rect`.

We added logic to hide tags when the detail level is low, since they were difficult to read. Hidden tags will reappear if you hover on an edge, as you zoom in, or if you view the screen in a larger format.

#### Fixes

We removed the use of `window` and `global` to resolve bundling issues.  

We updated the method in which we get node details to better support lower scales. Now, we get the topology details level directly from the graph, instead of through the `useDetailsLevel` hook.

### Accessibility guideline updates 

We updated all of our top-level accessibility guidelines for better clarity and organization. As part of these updates, we also added a new page called [Design for accessibility](/accessibility/design-for-accessibility), which documents accessibility considerations for visual designers.

The following pages now have updated content -- take a read!

- [About accessibility](/accessibility/about-accessibility) (formerly named "Accessibility fundamentals")
- [Accessibility scorecard](/accessibility/accessibility-scorecard)
- [Design for accessibility](/accessibility/design-for-accessibility) (**new!**)
- [Develop for accessibility](/accessibility/develop-for-accessibility) (formerly named "Product development guide")
- [PatternFly's accessibility](/accessibility/patternflys-accessibility)
- [Testing your accessibility](/accessibility/testing-your-accessibility)

### Coming soon

The next major version of PatternFly (v6) doesn't come out until later this year, but our team has started preparing for the release, which will include new theming capabilities and design token support.

Keep an eye out for more information about the ***v6 alpha release*** , which is slotted for Q1 2024.

<Divider></Divider>

## PatternFly 5.1 

As part of our [quarterly release cadence](/get-started/about-patternfly#patternfly-release-cadence), we're excited to announce that PatternFly 5.1 is now live.

To help provide a high-level view of what's new, we've pulled together the major highlights from this release. Keep reading to learn more!

### Promoted package versions

- patternfly/patternfly ([changelog](https://github.com/patternfly/patternfly/releases/tag/v5.1.0))
  - [@patternfly/patternfly@5.1.0](https://www.npmjs.com/package/@patternfly/patternfly/v/5.1.0)


- patternfly/patternfly-react ([changelog](https://github.com/patternfly/patternfly-react/releases/tag/v5.1.1))
  - [@patternfly/react-charts@7.1.1](https://www.npmjs.com/package/@patternfly/react-charts/v/7.1.1)
  - [@patternfly/react-code-editor@5.1.1](https://www.npmjs.com/package/@patternfly/react-code-editor/v/5.1.1)
  - [@patternfly/react-core@5.1.1](https://www.npmjs.com/package/@patternfly/react-core/v/5.1.1)
  - [@patternfly/react-icons@5.1.1](https://www.npmjs.com/package/@patternfly/react-icons/v/5.1.1)
  - [@patternfly/react-styles@5.1.1](https://www.npmjs.com/package/@patternfly/react-styles/v/5.1.1)
  - [@patternfly/react-table@5.1.1](https://www.npmjs.com/package/@patternfly/react-table/v/5.1.1)
  - [@patternfly/react-tokens@5.1.1](https://www.npmjs.com/package/@patternfly/react-tokens/v/5.1.1)


- PatternFly extensions
  - [@patternfly/react-topology@5.1.0](https://www.npmjs.com/package/@patternfly/react-topology/v/5.1.0) ([changelog](https://github.com/patternfly/react-topology/releases/tag/v5.1.0))
  
### Right-to-left language support 

Last quarter, our developers were dedicated to implementing right-to-left (RTL) language support in PatternFly. To better enable product internationalization, we've updated our components to support both right-to-left (RTL) and left-to-right (LTR) languages. You can check out our [RTL handbook](/developer-resources/right-to-left-handbook) for more details and resources.

To achieve this support, our components now use [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values) (like `block-start`, `inline-end`, `block-end`, and `inline-start`), which will ensure that styles are laid out properly, no matter which languages you're using.

Note that, to avoid a sweeping breaking change, PatternFly variable names still use "top", "bottom", "left", and "right". 

### New topology documentation

We updated the [control bar documentation](/topology/control-bar) for topology to clarify the extent of the control bar functions. This addition highlights information that will better support the range of control bar use cases.  

### Clickable labels

We added a new "clickable" variant to the [label component](/components/label), so that you can use a label that acts as a button.

To enable this behavior, we've added a new `onClick` property to the `<Label>` component, which can contain an action fit for your use case. 

Note that you cannot use `onClick` if the `href` or `isEditable` properties are already passed into `<Label>`, since those align with link labels and editable labels, respectively.

<Divider></Divider>

## PatternFly 5.0 

Refer to our [upgrade guide](/get-started/upgrade) to update from PatternFly 4 to PatternFly 5.

### Promoted package versions

- patternfly/patternfly ([changelog](https://github.com/patternfly/patternfly/releases/tag/v5.0.2))
  - [@patternfly/patternfly@5.0.2](https://www.npmjs.com/package/@patternfly/patternfly/v/5.0.2)


- patternfly/patternfly-react ([changelog](https://github.com/patternfly/patternfly-react/releases/tag/v5.0.0))
  - [@patternfly/react-charts@7.0.0](https://www.npmjs.com/package/@patternfly/react-charts/v/7.0.0)
  - [@patternfly/react-code-editor@5.0.0](https://www.npmjs.com/package/@patternfly/react-code-editor/v/5.0.0)
  - [@patternfly/react-core@5.0.0](https://www.npmjs.com/package/@patternfly/react-core/v/5.0.0)
  - [@patternfly/react-icons@5.0.0](https://www.npmjs.com/package/@patternfly/react-icons/v/5.0.0)
  - [@patternfly/react-styles@5.0.0](https://www.npmjs.com/package/@patternfly/react-styles/v/5.0.0)
  - [@patternfly/react-table@5.0.0](https://www.npmjs.com/package/@patternfly/react-table/v/5.0.0)
  - [@patternfly/react-tokens@5.0.0](https://www.npmjs.com/package/@patternfly/react-tokens/v/5.0.0)


- PatternFly extensions
  - [@patternfly/react-catalog-view-extension@5.0.0](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension/v/5.0.0) ([changelog](https://github.com/patternfly/react-catalog-view/releases/tag/v5.0.0))
  - [@patternfly/react-console@5.0.0](https://www.npmjs.com/package/@patternfly/react-console/v/5.0.0) ([changelog](https://github.com/patternfly/react-console/releases/tag/v5.0.0))
  - [@patternfly/react-log-viewer@5.0.0](https://www.npmjs.com/package/@patternfly/react-log-viewer/v/5.0.0) ([changelog](https://github.com/patternfly/react-log-viewer/releases/tag/v5.0.0))
  - [@patternfly/react-topology@5.0.0](https://www.npmjs.com/package/@patternfly/react-topology/v/5.0.0) ([changelog](https://github.com/patternfly/react-topology/releases/tag/v5.0.0))
  - [@patternfly/react-user-feedback@5.0.0](https://www.npmjs.com/package/@patternfly/react-user-feedback/v/5.0.0) ([changelog](https://github.com/patternfly/react-user-feedback/releases/tag/v5.0.0))
  - [@patternfly/react-virtualized-extension@5.0.0](https://www.npmjs.com/package/@patternfly/react-virtualized-extension/v/5.0.0) ([changelog](https://github.com/patternfly/react-virtualized-extension/releases/tag/v5.0.0))
  - [@patternfly/quickstarts@5.0.0](https://www.npmjs.com/package/@patternfly/quickstarts/v/5.0.0) ([changelog](https://github.com/patternfly/patternfly-quickstarts/releases/tag/v5.0.0))


### Dark theme support

While PatternFly has supported a dark theme in beta for some time, our dark theme has not been fully documented or tested. As part of the release of PatternFly 5, we were dedicated to thoroughly testing our beta implementation to ensure that it was ready for everyone. With this major release, we're excited to say that PatternFly's dark theme is fully vetted and supported. You can configure your applications' dark theme to update based on users’ system preferences.

We are also currently working on introducing more robust theming capabilities in a future PatternFly major release. Going forward, all future themes will include a light and dark theme.

To enable dark theme in your products, add the `.pf-theme-dark` class to the `<html>` element.

For information regarding the shipping and implementation processes for dark theme, as well as general advice for its use read our [dark theme handbook.](/developer-resources/dark-theme-handbook)

### React 18 support

We are committed to supporting the 2 most recent versions of React for PatternFly to keep up with the environments that our users work in. To this end, we are pleased to announce that PatternFly 5 is compatible with both React 17 and React 18.

### Versioned CSS variables and class names

We wanted to ensure that our variable naming conventions were clear and consistent going forward with our future release cycles. To keep things organized and clear, we updated our CSS variables and class names so that they are explicitly associated with the version of PatternFly that they align to. For PatternFly 5, we added a prefix of  `v5` to a number of our variable and class names.

For more details, refer to [our upgrade guide](/get-started/upgrade#review-and-update-variable-and-class-names) and our [updated CSS classes and variables](/developer-resources/global-css-variables) documentation.

### Event handler parameter consistency updates

Previously, our event handler parameters weren’t consistently ordered. To meet industry standards, and get everything on the same page, we added event parameters to all of our callbacks and reordered handlers to consistently list the event as the first parameter. Additionally, we made sure that all of our event handlers now pass back an event. This change will make it easier to incorporate third party libraries, especially in the case of form building tools, like Formik.

Our [codemods](/get-started/upgrade#run-our-codemods) should take care of most of these changes, but if your callback function is defined at the class level you will need to manually update your code.

### Changes to React icons

To improve the consistency of icon usage across projects adopting PatternFly, we are no longer using inline styles, color, or size for icons. Instead, React icons come with a built-in class `pf-v5-svg`, which gives an icon a default height, width, and vertical alignment. An icon's color is now set on the SVG file itself, using the `fill` attribute.

If you want a custom color or size, wrap your icon in the [`<Icon>` React component](/components/icon), which comes with colors, size, etc. If you had used `noVerticalAlign` on your icon in PatternFly 4, you can achieve this same style by using wrapping your icon in the `<Icon>` React component and passing in the `isInline` prop.

If you are not importing `@patternfly/react-styles`, but are still using `@patternfly/react-icons` you will need to provide the generic styles that you have separated from the icons and moved into `@patternfly/react-styles`. For more information, [refer to the @patternfly/react-icons README file.](https://github.com/patternfly/patternfly-react/blob/main/packages/react-icons/README.md)

### Major component updates and enhancements

#### Card

The following updates were made to the card component to improve the experience for both developers and end-users.

**Card header**

Our previous card API was difficult to understand and utilize. We reconfigured its markup and React subcomponents so you can implement cards more easily.

As a result, `CardHeaderMain` and `CardActions` are no longer exported from PatternFly, and are instead rendered internally within the `CardHeader` sub-component. Any content and properties for `CardHeaderMain` or `CardActions` should be passed directly to [`CardHeader`](https://v4-archive.patternfly.org/v4/components/card#cardheader) instead.

**Clickable and selectable cards**

Clickable and selectable cards have been redesigned to improve usability and accessibility.

With our previous implementation of cards, screen readers were unable to determine when a card was clickable or selectable. Similarly, users navigating without a screen reader would still have to mouse over a card to determine when it was clickable or selectable. We weren’t satisfied with these hurdles.

To improve accessibility and usability for both keyboard and screen reader users, our new [selectable and clickable cards](/components/card#selectable) are redesigned to help users determine when a card can be selected.

Our **previous design** styled selected cards with a colored underline:

<img src="./img/pf4-selectable-card.png" alt="Shown is a UI with a grid of cards, one of which is selected and underlined in blue."/>

Our **new design** styles selected cards with a colored outline and darkened background color:

<img src="./img/pf5-selectable-card.png" alt="Shown is a UI with a grid of cards, one of which is selected and outlined in blue."/>

As a result, our previous design has been deprecated, along with the following properties:

- `isSelectableRaised`
- `isDisabledRaised`
- `hasSelectableInput`
- `selectableInputAriaLabel`
- `onSelectableInputChange`

We recommend that you upgrade to these new cards if your use case calls for them. You can read more about their intended usage [in our card documentation.](/components/card/design-guidelines#variations)

#### Empty state

Our empty state component was long overdue for some clean up. It was not following PatternFly’s established practices for CSS rule specificity and CSS variable usage. We also saw a great opportunity to improve our empty state layouts by using CSS `gap`.

To freshen things up, we made a number of changes, which can be seen in action over in our [empty state documentation.](/components/empty-state) These changes include the following: 

- We replaced the `EmptyStatePrimary` and `EmptyStateSecondaryActions` components with `EmptyStateActions`.

- We added the `EmptyStateHeader` component. To `EmptyStateHeader` you should pass an `EmptyStateIcon` to the `icon` property, a main title to `titleText` property, and (optionally) a title's heading level to the `headingLevel` property.

- We added the `EmptyStateFooter` component that wraps any content following `EmptyStateBody`.

#### Helper text

Our components often allow you to display descriptive or status text below a form field to help users make decisions, but the implementation of this text hasn’t been consistent across components. We wanted to clean things up so that this implementation is more consistent.

As a result, a few components were updated to use the same [`HelperText` component](/components/helper-text), rather than their own disparate helper-text-like implementation. This change affects the following components:

- [Date picker](/get-started/upgrade#date-picker)
- [Time picker](/get-started/upgrade#time-picker)
- [Form](/get-started/upgrade#form) 
    - The `FormGroup` component is especially affected, as we've removed the following helper text related properties in PatternFly 5: 
        - `helperText`
        - `helperTextInvalid`
        - `validated`
        - `helperTextIcon`
        - `helperTextInvalidIcon`
        - `isHelperTextBeforeField`

        To add helper text to a form group in place of these properties you should use the `FormHelperText`, `HelperText`, and `HelperTextItem` components directly as part of the `FormGroup`’s children. This implementation is shown in PatternFly's [invalid form example.](/components/forms/form#invalid)

#### Input group

Previously, the input group styles were too narrowly coupled with the types of children they contained. It did not match the approach we took to styling other groups of components. This update enabled more flexibility for the types of children allowed in an input group, and simplified the style rules for things like spacing, focus management, and item size manipulation.

As a result, input group items no longer automatically fill the available space of their container. To retain previous styling, new `InputGroupItem` components may need to have the `isFill`, `isBox`, and/or `isPlain` properties adjusted. This is likely necessary for `FormSelect`, `TextInput`, `Select`, and `TextArea`, which may particularly require the `isFill` property to be passed to `InputGroupItem`.

### Refactored and deprecated components 

As PatternFly has matured, a number of its popular components have been repeatedly enhanced. Their complexity and fragility has grown to become an ever-growing maintenance problem. Rather than continuing to enhance these delicate components, as part of PatternFly 5, we have adjusted our implementation and recommendations to support new components that are more flexible, composable, and easier to maintain. As a result, we are deprecating our previous implementations in favor of our newer, more composable components.

The following table outlines the components that are affected, as well as the component(s) that we recommend using as a replacement.

| Deprecated component                                                            | Recommended replacement                |
|---------------------------------------------------------------------------------|----------------------------------------|
| [Application launcher](/components/menus/application-launcher/react-deprecated) | [Dropdown](/components/menus/dropdown) |
| [Context selector](/components/menus/context-selector/react-deprecated)         | [Dropdown](/components/menus/dropdown) |
| [Dropdown (deprecated)](/components/menus/dropdown/react-deprecated)            | [Dropdown](/components/menus/dropdown) |
| [Options menu](/components/menus/options-menu/react-deprecated)                 | [Select](/components/menus/select)     |
| [Page header](/components/page/react-deprecated)                                | [Masthead](/components/masthead)       |
| [Select (deprecated)](/components/menus/select/react-deprecated)                | [Select](/components/menus/select)     |
| [Table (deprecated)](/components/table/react-deprecated)                        | [Table](/components/table)             |
| [Wizard (deprecated)](/components/wizard/react-deprecated)                      | [Wizard](/components/wizard)           |

**Note:** To understand how our new composable menus can be used to replace deprecated components, [view our custom menus examples](/components/menus/custom-menus).

Deprecated components are no longer being maintained or enhanced, but they will remain in our codebase at least until the next major release. 

You can still continue to use deprecated component implementations by importing them from `@patternfly/react-core/deprecated` or `@patternfly/react-table/deprecated`, but we recommend aligning with their replacements to benefit from our code enhancements and better  prepare for future iterations.

### Components promoted out of beta

Whenever a new component or major component enhancement is introduced to PatternFly, it’s released in beta until it’s been vetted by products and proven to be stable enough. While components are in beta, they may continue to evolve as we tweak their API and modify their HTML markup. Once a component is promoted out of beta, we are committed to withhold any additional breaking changes to the component until our next major release. With PatternFly 5, we’re excited to promote 16 components and variants out of beta:

- [Charts with patterns](/charts/patterns)
- [Date picker](/components/date-and-time/date-picker)
- [Dropdown-next (our new recommendation for dropdown)](/components/menus/dropdown)
- [Icon](/components/icon)
- [Log viewer extension](/extensions/log-viewer)
- [Progress stepper](/components/progress-stepper)
- [Progress with helper text](/components/progress#helper-text)
- [Search input](/components/search-input)
- [Select-next (our new recommendation for select)](/components/menus/select)
- Tabs variants: 
    - [Dynamic](/components/tabs#dynamic-tabs)
    - [Horizontal overflow](/components/tabs#horizontal-overflow-tabs)
    - [Actions](/components/tabs#horizontal-overflow-tabs)
    - [Close button props](/components/tabs#with-help-and-close-actions)
- [Text input group](/components/text-input-group)
- [Tile](/components/tile)
- [Truncate](/components/truncate)
- [Wizard-next (our new recommendation for wizard)](/components/wizard)

### Extensions updates

All PatternFly extensions have been updated to be compatible with PatternFly 5. For details on the nature of the changes made to each extension, please see [the PatternFly 5 release notes](/get-started/upgrade/release-notes).
Most notably, topology's D3 dependency has been updated to version 7, and some event handler callback signatures were updated.
