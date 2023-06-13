export const releaseNotes =[
  {
    component: "Sidebar",
    description: "Adds the ability for a border to separate the sidebar panel and sidebar content.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5221",
    details: "Allows the sidebar component to support more flexible layouts by adding support for padding to be added to the sidebar panel and sidebar content elements",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Skip to Content",
    description: "Previously the skip to content component classes were applied directly to the button classes to create the skip to content component. This PR adds a structural HTML element that wraps the component and serves as the parent element for the skip to content component.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5153",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Spinner",
    description: "Removes the legacy spinner variation in favor of the SVG spinner variation.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5468",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Table",
    description: "Renames the table component's “sticky-column” element to “sticky-cell” to be more flexible in sticky positioning, and adds support for a table column to be sticky to the right edge of the table instead of just the left.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5393",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Table",
    description: "Improves the alignment of the table action column by right-aligning the contents of the table action cell.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5400",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Table",
    description: "Adds unique table component CSS class selectors to all elements of the table that previously did not have a class.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5558",
    details: "Eg, '<tr>' is now '<tr class=\".pf-v5-c-table__tr\">', 'thead' is now '<thead class=\".pf-v5-c-table__thead\">'",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Table",
    description: "Improves and updates the visual appearance of clickable rows.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5397",
    details: "Renames “hoverable” table rows to “clickable” to be more consistent with similar features in other components.",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Tabs",
    description: "Updates secondary tabs to have a border by default. This is more consistent with the presentation of primary tabs.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5171",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Toolbar",
    description: "Updates the default alignment of toolbar children to use baseline vertical alignment instead of center alignment, which improves the visual appearance of toolbar children of differing heights.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5201",
    details: "Adds modifiers to toolbar children to use center and baseline alignment. This is not breaking - it just allows going back to the old default alignment of center, and specifying baseline on specific children.\nThe default behavior in this PR changes in the PR below",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Toolbar",
    description: "Updates the default alignment to use top alignment",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5565",
    details: "Adds a modifier for children to use top alignment. Not breaking - just allows for the previously defined center and baseline alignments to be used, and for top alignment to be used on specific children",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Toolbar",
    description: "Adds a CSS row gap to wrapping toolbar items. Previously items would wrap directly underneath items on the previous row, and this update adds a visual spacer between wrapping rows.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5398",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Toolbar",
    description: "Improves the visual appearance of the expanded content element. This isn’t an enhancement or anything, it was to fix a bug introduced in the previous PR. But it should be noted, as it makes breaking changes to CSS vars",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5611",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Wizard",
    description: "Updates the stacking context of structural elements within the wizard component so that elements from the wizard main content area are able to overflow and display on top of the wizard footer.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5533",
    repo: "html/css",
    fixedWithCodeMod: false
  }, {
    component: "Wizard",
    description: "Refactors the popover component HTML to be more flexible and consistent with similarly structured components.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5389",
    details: "Adds a structural HTML element to the that is used to wrap the close button.\nUpdates the wizard title to be more flexible",
    repo: "html/css",
    fixedWithCodeMod: false
  }
]
