import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';


export const DocumentationUtilitiesAccessibilityCoreDocs = {
  "slug": "/documentation/utilities/accessibility/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/utilities/Accessibility/examples/Accessibility.md",
  "section": "utilities",
  "id": "Accessibility",
  "title": "Accessibility",
  "toc": [
    "Examples",
    "Documentation"
  ]
};
DocumentationUtilitiesAccessibilityCoreDocs.liveContext = {
  
};
DocumentationUtilitiesAccessibilityCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationUtilitiesAccessibilityCoreDocs} {...{"code":"Content available only to screen reader, open inspector to investigate\n<span class=\"pf-u-screen-reader\">This content is intended to be announced by assistive technologies, but not visually presented.</span>","title":"Screen reader only","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesAccessibilityCoreDocs} {...{"code":"<span class=\"pf-u-visible\">This class unsets .pf-u-screen-reader and .pf-screen-reader. It will be visible.</span>","title":"Visible","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesAccessibilityCoreDocs} {...{"code":"The text underneath is hidden.\n<span class=\"pf-u-hidden\">This text is hidden.</span>","title":"Hidden","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. `}
      <strong>
        {`Example .pf-u-screen-reader-on-lg`}
      </strong>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Class`}
          </th>
          <th>
            {`Applied to`}
          </th>
          <th>
            {`Outcome`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-screen-reader{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Visually hides element, but leaves accessible to assistive technologies`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-visible{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Unsets `}
            <code {...{"className":"ws-code"}}>
              {`.pf-u-screen-reader`}
            </code>
            {` and `}
            <code {...{"className":"ws-code"}}>
              {`.pf-screen-reader`}
            </code>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationUtilitiesAccessibilityCoreDocs.Component.displayName = 'DocumentationUtilitiesAccessibilityCoreDocs';
