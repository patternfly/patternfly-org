import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/utilities/Spacing/examples/./Spacing.css'

export const DocumentationUtilitiesSpacingCoreDocs = {
  "slug": "/documentation/utilities/spacing/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/utilities/Spacing/examples/Spacing.md",
  "section": "utilities",
  "id": "Spacing",
  "title": "Spacing",
  "toc": [
    "Examples",
    "Documentation"
  ]
};
DocumentationUtilitiesSpacingCoreDocs.liveContext = {
  
};
DocumentationUtilitiesSpacingCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationUtilitiesSpacingCoreDocs} {...{"code":"<h2 class=\"pf-c-title pf-m-lg\">Margin, marginX, marginY</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-start pf-u-flex-wrap\">\n  <div class=\"ws-example-flex-item pf-u-m-xl\">Margin - xl</div>\n  <div class=\"ws-example-flex-item pf-u-mx-xl\">Margin x axis - pf-u-mx-xl</div>\n  <div class=\"ws-example-flex-item pf-u-my-xl\">Margin y axis - pf-u-my-xl</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Margin top, margin right, margin bottom, margin left</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-start pf-u-flex-wrap\">\n  <div class=\"ws-example-flex-item pf-u-mt-xl\">Margin-top - xl</div>\n  <div class=\"ws-example-flex-item pf-u-mr-xl\">Margin-right - xl</div>\n  <div class=\"ws-example-flex-item pf-u-mb-xl\">Margin-bottom - xl</div>\n  <div class=\"ws-example-flex-item pf-u-ml-xl\">Margin-left - xl</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Responsive margin</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-start pf-u-flex-column pf-u-flex-wrap\">\n  <div class=\"ws-example-flex-item pf-u-mt-xl\">Margin-top - xl</div>\n  <div class=\"ws-example-flex-item pf-u-mt-xl-on-sm\">Margin-top - xl on-sm</div>\n  <div class=\"ws-example-flex-item pf-u-mt-xl-on-md\">Margin-top - xl on-md</div>\n  <div class=\"ws-example-flex-item pf-u-mt-xl-on-lg\">Margin-top - xl on-lg</div>\n  <div class=\"ws-example-flex-item pf-u-mt-xl-on-xl\">Margin-top - xl on-xl</div>\n</div>","title":"Margin","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesSpacingCoreDocs} {...{"code":"<h2 class=\"pf-c-title pf-m-lg\">Padding, paddingX, paddingY</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-start pf-u-flex-wrap\">\n  <div class=\"ws-example-flex-item pf-u-p-xl\">Padding - xl</div>\n  <div class=\"ws-example-flex-item pf-u-px-xl\">Padding x axis - pf-u-px-xl</div>\n  <div class=\"ws-example-flex-item pf-u-py-xl\">Padding y axis - pf-u-py-xl</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Padding top, padding right, padding bottom, padding left</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-start pf-u-flex-wrap\">\n  <div class=\"ws-example-flex-item pf-u-pt-xl\">Padding-top - xl</div>\n  <div class=\"ws-example-flex-item pf-u-pr-xl\">Padding-right - xl</div>\n  <div class=\"ws-example-flex-item pf-u-pb-xl\">Padding-bottom - xl</div>\n  <div class=\"ws-example-flex-item pf-u-pl-xl\">Padding-left - xl</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Responsive padding</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-start pf-u-flex-column pf-u-flex-wrap\">\n  <div class=\"ws-example-flex-item pf-u-pt-xl\">Padding-top</div>\n  <div class=\"ws-example-flex-item pf-u-pt-xl-on-sm\">Padding-top - xl on-sm</div>\n  <div class=\"ws-example-flex-item pf-u-pt-xl-on-md\">Padding-top - xl on-md</div>\n  <div class=\"ws-example-flex-item pf-u-pt-xl-on-lg\">Padding-top - xl on-lg</div>\n  <div class=\"ws-example-flex-item pf-u-pt-xl-on-xl\">Padding-top - xl on-xl</div>\n</div>","title":"Padding","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesSpacingCoreDocs} {...{"code":"<h2 class=\"pf-c-title pf-m-lg\">Combined spacers</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-start pf-u-flex-wrap\">\n  <div class=\"ws-example-flex-item pf-u-p-lg pf-u-m-lg\">Padding lg, margin lg</div>\n  <div class=\"ws-example-flex-item pf-u-p-lg-on-lg pf-u-m-lg\">Padding lg on-lg, margin lg</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Combined spacers (responsive)</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-start pf-u-flex-wrap\">\n  <div class=\"ws-example-flex-item pf-u-p-sm pf-u-p-lg-on-md pf-u-mr-lg\">Item 1</div>\n  <div class=\"ws-example-flex-item pf-u-p-sm pf-u-p-lg-on-md pf-u-mr-lg\">Item 2</div>\n  <div class=\"ws-example-flex-item pf-u-p-sm pf-u-p-lg-on-md pf-u-ml-auto-on-xl\">Item 3</div>\n</div>","title":"Combined","lang":"html"}}>
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
        {`Example .pf-u-m-sm-on-lg`}
      </strong>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Margin properties`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Abbreviation`}
          </th>
          <th>
            {`Property`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`m`}
            </code>
          </td>
          <td>
            {`margin`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`mt`}
            </code>
          </td>
          <td>
            {`margin-top`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`mr`}
            </code>
          </td>
          <td>
            {`margin-right`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`mb`}
            </code>
          </td>
          <td>
            {`margin-bottom`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`ml`}
            </code>
          </td>
          <td>
            {`margin-left`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`mx`}
            </code>
          </td>
          <td>
            {`margin-left & margin-right`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`my`}
            </code>
          </td>
          <td>
            {`margin-top & margin-bottom`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Padding properties`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Abbreviation`}
          </th>
          <th>
            {`Property`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`p`}
            </code>
          </td>
          <td>
            {`padding`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`pt`}
            </code>
          </td>
          <td>
            {`padding-top`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`pr`}
            </code>
          </td>
          <td>
            {`padding-right`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`pb`}
            </code>
          </td>
          <td>
            {`padding-bottom`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`pl`}
            </code>
          </td>
          <td>
            {`padding-left`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`px`}
            </code>
          </td>
          <td>
            {`padding-left & padding-right`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`py`}
            </code>
          </td>
          <td>
            {`padding-top & padding-bottom`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Size values`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table"}}>
      <thead>
        <tr>
          <th>
            {`Abbreviation`}
          </th>
          <th>
            {`Property`}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`auto`}
            </code>
          </td>
          <td>
            {`auto`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`0`}
            </code>
          </td>
          <td>
            {`0`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`xs`}
            </code>
          </td>
          <td>
            {`var(--pf-global--spacer--xs)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`sm`}
            </code>
          </td>
          <td>
            {`var(--pf-global--spacer--sm)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`md`}
            </code>
          </td>
          <td>
            {`var(--pf-global--spacer--md)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`lg`}
            </code>
          </td>
          <td>
            {`var(--pf-global--spacer--lg)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`xl`}
            </code>
          </td>
          <td>
            {`var(--pf-global--spacer--xl)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`2xl`}
            </code>
          </td>
          <td>
            {`var(--pf-global--spacer--2xl)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`3xl`}
            </code>
          </td>
          <td>
            {`var(--pf-global--spacer--3xl)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`4xl`}
            </code>
          </td>
          <td>
            {`var(--pf-global--spacer--4xl)`}
          </td>
        </tr>
      </tbody>
    </table>
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
              {`.pf-u-{m, mt, mr, mb, ml, mx, my}-{size}{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets margin top, right, bottom, left, margin-left & right, margin-top & bottom to spacer value`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-{p, pt, pr, pb, pl, px, py}-{size}{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets padding top, right, bottom, left, padding-left & right, padding-top & bottom to spacer value`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationUtilitiesSpacingCoreDocs.Component.displayName = 'DocumentationUtilitiesSpacingCoreDocs';
