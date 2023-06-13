// Core changes Chip to Input Group
import React from "react";

export const releaseNotes = [
  {
    component: "Chip group",
    description: (
      <>
        Updated the component to require the use of the{" "}
        <code className="ws-code">.pf-c-chip-group__main</code> element.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5356",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Chip group",
    description:
      "Added wrapping elements for both the chip content and actions to make the layout more flexible and to style embedded components.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5360",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Chip group",
    description:
      'Updated the chip component to use CSS "gap" to space its children instead of using "margin".',
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5293",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Data list",
    description:
      'Renamed "selectable" data list rows to "clickable" for consistency across components, and improved and updated the visual appearance of clickable rows.',
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5397",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Drawer",
    description:
      'Removed a "min-height" declaration on the drawer body that caused layout issues.',
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5322",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Dropdown",
    description:
      "Fixed the alignment of items in the toggle when the toggle is wider than the width of its content.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5425",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Empty state",
    description:
      "Refactored the component structure to be more flexible and more inline with existing structural conventions.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5307",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Flex",
    description: "Added gap support.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5516",
    details:
      'This is more of an enhancement that is not breaking. However, there is a new "row" spacer (a gap between rows) that is set by default that didn\'t exist previously, and the default column spacer has been updated from medium to large to be consistent with other layouts.',
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Form control",
    description:
      "Wrapped form control elements in HTML divs to be more flexible, and updated status and custom icon form control elements to use regular icons instead of icons as background images.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5531",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Form control",
    description:
      "Refactored the form control borders to be placed on the wrapping HTML div instead of the form elements themselves.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5641",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Helper text",
    description:
      "Updated components that include helper text to use the helper text component.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5417",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Icons",
    description: (
      <>
        Updated the <code className="ws-code">pf-icon</code> class prefix for
        custom icons to <code className="ws-code">pficon</code>
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5538",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Icons",
    description: (
      <>
        Removed the <code className="ws-code">.pf-svg-size-[size]</code> classes
        used to modify SVG sizes with <code className="ws-code">.pf-svg</code>.
        The <code className="ws-code">Icon</code> component should now be used
        to resize an icon.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5388",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Icons",
    description:
      "Updated the global variables for small and medium icon font sizes.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5525",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Icons",
    description:
      "Updated components that have static icons to use the appropriate icon color.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5526",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Input group",
    description:
      "Refactored the component to be more flexible and require the use of input group items to wrap all children of the input group.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5382",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
];
