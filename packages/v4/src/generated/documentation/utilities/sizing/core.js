import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/utilities/Sizing/examples/./Sizing.css'

export const DocumentationUtilitiesSizingCoreDocs = {
  "slug": "/documentation/utilities/sizing/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/utilities/Sizing/examples/Sizing.md",
  "section": "utilities",
  "id": "Sizing",
  "title": "Sizing",
  "toc": [
    "Examples",
    "Documentation"
  ]
};
DocumentationUtilitiesSizingCoreDocs.liveContext = {
  
};
DocumentationUtilitiesSizingCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationUtilitiesSizingCoreDocs} {...{"code":"<div class=\"ws-example-u-sizing-item pf-u-w-0\">.pf-u-w-0</div>\n<div class=\"ws-example-u-sizing-item pf-u-w-25\">.pf-u-w-25</div>\n<div class=\"ws-example-u-sizing-item pf-u-w-50\">.pf-u-w-50</div>\n<div class=\"ws-example-u-sizing-item pf-u-w-75\">.pf-u-w-75</div>\n<div class=\"ws-example-u-sizing-item pf-u-w-100\">.pf-u-w-100</div>\n<div class=\"ws-example-u-sizing-item pf-u-w-initial\">.pf-u-w-initial (auto)</div>\n<div class=\"ws-example-u-sizing-item pf-u-w-inherit\">.pf-u-w-inherit</div>","title":"Width base and percentage units","lang":"html"}}>
    </Example>
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
              {`.pf-u-w-initial{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets width: initial (auto)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-w-inherit{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets width: inherit`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-w-0{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets width: 0%`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-w-25{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets width: 25%`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-w-33{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets width: calc(100% / 3)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-w-50{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets width: 50%`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-w-66{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets width: calc(100% / 3 `}
            {`*`}
            {` 2)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-w-75{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets width: 75%`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-w-100{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets width: 100%`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationUtilitiesSizingCoreDocs} {...{"code":"<div class=\"ws-example-u-sizing-item pf-u-w-25vw\">.pf-u-w-25vw</div>\n<div class=\"ws-example-u-sizing-item pf-u-w-33vw\">.pf-u-w-33vw</div>\n<div class=\"ws-example-u-sizing-item pf-u-w-50vw\">.pf-u-w-50vw</div>\n<div class=\"ws-example-u-sizing-item pf-u-w-66vw\">.pf-u-w-66vw</div>\n<div class=\"ws-example-u-sizing-item pf-u-w-75vw\">.pf-u-w-75vw</div>\n<div class=\"ws-example-u-sizing-item pf-u-w-100vw\">.pf-u-w-100vw</div>","title":"Width viewport units","lang":"html","isFullscreen":true}}>
    </Example>
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
              {`.pf-u-w-25vw{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets width: 25vw`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-w-33vw{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets width: calc(100vw / 3)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-w-50vw{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets width: 50vw`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-w-66vw{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets width: calc(100vw / 3 `}
            {`*`}
            {` 2)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-w-75vw{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets width: 75vw`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-w-100vw{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets width: 100vw`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationUtilitiesSizingCoreDocs} {...{"code":"<div class=\"ws-example-u-sizing-item pf-u-h-0 pf-u-display-inline-block\">.pf-u-h-0</div>\n<div class=\"ws-example-u-sizing-item pf-u-h-25 pf-u-display-inline-block\">.pf-u-h-25</div>\n<div class=\"ws-example-u-sizing-item pf-u-h-50 pf-u-display-inline-block\">.pf-u-h-50</div>\n<div class=\"ws-example-u-sizing-item pf-u-h-75 pf-u-display-inline-block\">.pf-u-h-75</div>\n<div class=\"ws-example-u-sizing-item pf-u-h-100 pf-u-display-inline-block\">.pf-u-h-100</div>\n<div class=\"ws-example-u-sizing-item pf-u-h-initial pf-u-display-inline-block\">.pf-u-h-initial (auto)</div>\n<div class=\"ws-example-u-sizing-item pf-u-h-inherit pf-u-display-inline-block\">.pf-u-h-inherit</div>","title":"Height base and percentage units","lang":"html"}}>
    </Example>
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
              {`.pf-u-h-initial{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets height: initial (auto)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-h-inherit{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets height: inherit`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-h-0{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets height: 0%`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-h-25{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets height: 25%`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-h-33{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets height: calc(100% / 3)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-h-50{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets height: 50%`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-h-66{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets height: calc(100% / 3 `}
            {`*`}
            {` 2)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-h-75{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets height: 75%`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-h-100{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets height: 100%`}
          </td>
        </tr>
      </tbody>
    </table>
    <Example {...DocumentationUtilitiesSizingCoreDocs} {...{"code":"<div class=\"ws-example-u-sizing-item pf-u-h-25vh pf-u-display-inline-block\">.pf-u-h-25vh</div>\n<div class=\"ws-example-u-sizing-item pf-u-h-33vh pf-u-display-inline-block\">.pf-u-h-33vh</div>\n<div class=\"ws-example-u-sizing-item pf-u-h-50vh pf-u-display-inline-block\">.pf-u-h-50vh</div>\n<div class=\"ws-example-u-sizing-item pf-u-h-66vh pf-u-display-inline-block\">.pf-u-h-66vh</div>\n<div class=\"ws-example-u-sizing-item pf-u-h-75vh pf-u-display-inline-block\">.pf-u-h-75vh</div>\n<div class=\"ws-example-u-sizing-item pf-u-h-100vh pf-u-display-inline-block\">.pf-u-h-100vh</div>","title":"Height viewport units","lang":"html","isFullscreen":true}}>
    </Example>
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
              {`.pf-u-h-25vh{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets height: 25vh`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-h-33vh{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets height: calc(100vh / 3)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-h-50vh{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets height: 50vh`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-h-66vh{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets height: calc(100vh / 3 `}
            {`*`}
            {` 2)`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-h-75vh{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets height: 75vh`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-h-100vh{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets height: 100vh`}
          </td>
        </tr>
      </tbody>
    </table>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`These utilities are not recommended for general layout purposes. They should primarily be used to enable responsive behaviors of certain components through breakpoints.`}
    </p>
  </React.Fragment>
);
DocumentationUtilitiesSizingCoreDocs.Component.displayName = 'DocumentationUtilitiesSizingCoreDocs';
