import React from "react";
// Core changes global to Check
export const releaseNotes = [
  {
    component: "Other/global",
    description: (
      <>
        Removed unnecessary <code className="ws-code">visibility</code>{" "}
        declaration that was paired with the use of the{" "}
        <code className="ws-code">display</code> property to hide and show
        elements.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5209",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Other/global",
    description:
      "Prefixed all of our public HTML classes (except for modifiers), CSS vars/custom properties, and sass vars/mixins/functions/placeholders with the PF version number to avoid namespace conflicts.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5434",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Other/global",
    description: "Fixed global background color, other cleanup.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5379",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Other/global",
    description: (
      <>
        Removed references to any fallback{" "}
        <code className="ws-code">.woff</code> font files for text and icons.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5435",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Other/global",
    description: (
      <>
        Split the global reset styles into “normalize” and “reset” styles, which
        can be uniquely disabled/enabled by setting{" "}
        <code className="ws-code">$pf-global--enable-reset</code> and{" "}
        <code className="ws-code">$pf-global--enable-normalize</code>.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5435",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Other/global",
    description: (
      <>
        Wrapped all global normalize and reset styles in{" "}
        <code className="ws-code">:where()</code> to remove CSS specificity.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5435",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Other/global",
    description: "Removed an old bootstrap variable mapping stylesheet.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5435",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Other/global",
    description:
      "Removed card and button specific styles for use in dark and light blocks within components.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5435",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Other/global",
    description: (
      <>
        Removed the SCSS vars{" "}
        <code className="ws-code">$pf-global--enable-shield</code> and{" "}
        <code className="ws-code">$pf-global--load-pf-3</code>.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5435",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Other/global",
    description: "Renamed the global “default” status color to “custom”.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5418",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Other/global",
    description:
      "Updated any use of a non-PF component checkbox/radio input to use the standalone variation of the PF check/radio component.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5355",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Other/global",
    description: "Fixed dark theme bugs.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5535",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Other/global",
    description: "Removed global “shield” CSS.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5339",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Other/global",
    description: (
      <>
        Removed declaration setting font-size on html element and associated
        SCSS var{" "}
        <code className="ws-code">.$pf-global--unset-root-font-size</code>.
      </>
    ),
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5339",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Other/global",
    description: "Updated all of our redhatfont files to the latest versions.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5503",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Other/global",
    description:
      "Renamed the global variables for font family variations, and global class to opt-in to the variable font to be more intuitive.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5503",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Other/global",
    description: "Removed support for the legacy overpass font.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5169",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "About modal",
    description: "Removed the default background image.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5530",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "About modal",
    description:
      "Refactored the about modal box to be placed inside of the modal component.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5216",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "About modal",
    description: "Updated to support new design of background image.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5328",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Background image",
    description: "Removed the default background image.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5530",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Background image",
    description: "Updated to support new design of background image.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5328",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Accordion",
    description:
      "Renamed the accordion expandable content component from “expanded-content” to “expandable-content”.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5180",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Banner",
    description:
      "Renamed status variations (eg, success, warning, danger) to be more generic color variations (eg, green, gold, red).",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5408",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Card",
    description: "Updated design for selectable and clickable cards.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5409",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Card",
    description:
      "Refactored the card header code to be more flexible and improve the visual appearance of card header items.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5280",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Card",
    description:
      "Refactored the card title to be more flexible, and changed the default card title font weight to normal.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5363",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
  {
    component: "Check",
    description:
      "Previously the description and body elements would only be as wide as their content, and now they occupy the available width.",
    pullRequestURL: "https://github.com/patternfly/patternfly/pull/5233",
    repo: "html/css",
    fixedWithCodeMod: false,
  },
];
