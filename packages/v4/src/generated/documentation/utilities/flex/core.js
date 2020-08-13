import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../../../../node_modules/@patternfly/patternfly/docs/utilities/Flex/examples/./Flex.css'

export const DocumentationUtilitiesFlexCoreDocs = {
  "slug": "/documentation/utilities/flex/core",
  "source": "core",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/master/src/patternfly/utilities/Flex/examples/Flex.md",
  "section": "utilities",
  "id": "Flex",
  "title": "Flex",
  "toc": [
    "Examples",
    "Documentation"
  ]
};
DocumentationUtilitiesFlexCoreDocs.liveContext = {
  
};
DocumentationUtilitiesFlexCoreDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <Example {...DocumentationUtilitiesFlexCoreDocs} {...{"code":"<div class=\"pf-u-display-flex\">Display flex</div>\n<div class=\"pf-u-display-inline-flex\">Display inline flex</div>","title":"Basic","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesFlexCoreDocs} {...{"code":"<h2 class=\"pf-c-title pf-m-lg\">Flex row</h2>\n<div class=\"pf-u-display-flex pf-u-flex-direction-row\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Flex row-reverse</h2>\n<div class=\"pf-u-display-flex pf-u-flex-direction-row-reverse\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Flex column</h2>\n<div class=\"pf-u-display-flex pf-u-flex-direction-column\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Flex column-reverse</h2>\n<div class=\"pf-u-display-flex pf-u-flex-direction-column-reverse\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>","title":"Direction","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesFlexCoreDocs} {...{"code":"<h2 class=\"pf-c-title pf-m-lg\">Justify content flex-start</h2>\n<div class=\"pf-u-display-flex pf-u-justify-content-flex-start\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Justify content flex-end</h2>\n<div class=\"pf-u-display-flex pf-u-justify-content-flex-end\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Justify content center</h2>\n<div class=\"pf-u-display-flex pf-u-justify-content-center\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Justify content space-around</h2>\n<div class=\"pf-u-display-flex pf-u-justify-content-space-around\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Justify content space-between</h2>\n<div class=\"pf-u-display-flex pf-u-justify-content-space-between\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>","title":"Justified content","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesFlexCoreDocs} {...{"code":"<h2 class=\"pf-c-title pf-m-lg\">Align items flex-start</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-start\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item ws-example-u-flex-md\">Flex item 2</div>\n  <div class=\"ws-example-flex-item ws-example-u-flex-lg\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align items flex-end</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-flex-end\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item ws-example-u-flex-md\">Flex item 2</div>\n  <div class=\"ws-example-flex-item ws-example-u-flex-lg\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align items center</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-center\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item ws-example-u-flex-md\">Flex item 2</div>\n  <div class=\"ws-example-flex-item ws-example-u-flex-lg\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align items baseline</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-baseline\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item ws-example-u-flex-md\">Flex item 2</div>\n  <div class=\"ws-example-flex-item ws-example-u-flex-lg\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align items stretch</h2>\n<div class=\"pf-u-display-flex pf-u-align-items-stretch\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>","title":"Aligned items","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesFlexCoreDocs} {...{"code":"<div class=\"pf-u-display-flex\">\n  <div class=\"ws-example-flex-item pf-u-align-self-flex-start\">flex-start</div>\n  <div class=\"ws-example-flex-item pf-u-align-self-center\">center</div>\n  <div class=\"ws-example-flex-item pf-u-align-self-flex-end\">flex end</div>\n  <div class=\"ws-example-flex-item pf-u-align-self-baseline\">baseline</div>\n  <div class=\"ws-example-flex-item pf-u-align-self-stretch\">stretch</div>\n</div>","title":"Aligned self","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesFlexCoreDocs} {...{"code":"<h2 class=\"pf-c-title pf-m-lg\">Align content flex-start</h2>\n<div class=\"pf-u-display-flex pf-u-align-content-flex-start\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n  <div class=\"ws-example-flex-item\">Flex item 4</div>\n  <div class=\"ws-example-flex-item\">Flex item 5</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align content flex-end</h2>\n<div class=\"pf-u-display-flex pf-u-align-content-flex-end\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n  <div class=\"ws-example-flex-item\">Flex item 4</div>\n  <div class=\"ws-example-flex-item\">Flex item 5</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align content center</h2>\n<div class=\"pf-u-display-flex pf-u-align-content-center\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n  <div class=\"ws-example-flex-item\">Flex item 4</div>\n  <div class=\"ws-example-flex-item\">Flex item 5</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align content space-around</h2>\n<div class=\"pf-u-display-flex pf-u-align-content-space-around\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n  <div class=\"ws-example-flex-item\">Flex item 4</div>\n  <div class=\"ws-example-flex-item\">Flex item 5</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align content space-between</h2>\n<div class=\"pf-u-display-flex pf-u-align-content-space-between\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n  <div class=\"ws-example-flex-item\">Flex item 4</div>\n  <div class=\"ws-example-flex-item\">Flex item 5</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Align content stretch</h2>\n<div class=\"pf-u-display-flex pf-u-align-content-stretch\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n  <div class=\"ws-example-flex-item\">Flex item 4</div>\n  <div class=\"ws-example-flex-item\">Flex item 5</div>\n</div>","title":"Aligned content","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesFlexCoreDocs} {...{"code":"<div class=\"pf-u-display-flex\">\n  <div class=\"ws-example-flex-item pf-u-flex-shrink-0\">Flex shrink 0</div>\n  <div class=\"ws-example-flex-item pf-u-flex-shrink-1\">Flex shrink 1</div>\n</div>","title":"Shrink","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesFlexCoreDocs} {...{"code":"<div class=\"pf-u-display-flex\">\n  <div class=\"ws-example-flex-item pf-u-flex-grow-0\">Flex grow 0</div>\n  <div class=\"ws-example-flex-item pf-u-flex-grow-1\">Flex grow 1</div>\n</div>","title":"Grow","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesFlexCoreDocs} {...{"code":"<div class=\"pf-u-display-flex\">\n  <div class=\"ws-example-flex-item pf-u-flex-basis-0\">Flex basis 0</div>\n  <div class=\"ws-example-flex-item pf-u-flex-basis-auto\">Flex basis auto</div>\n  <div class=\"ws-example-flex-item pf-u-flex-basis-none\">Flex basis none</div>\n  <div class=\"ws-example-flex-item pf-u-flex-1\">Flex 1</div>\n</div>","title":"Basis and none","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesFlexCoreDocs} {...{"code":"<div class=\"pf-u-display-flex\">\n  <div class=\"ws-example-flex-item pf-u-flex-none\">Flex none</div>\n  <div class=\"ws-example-flex-item pf-u-flex-fill\">Flex fill</div>\n</div>","title":"Fill","lang":"html"}}>
    </Example>
    <Example {...DocumentationUtilitiesFlexCoreDocs} {...{"code":"<h2 class=\"pf-c-title pf-m-lg\">Flex wrap</h2>\n<div class=\"pf-u-display-flex pf-u-flex-wrap\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Flex no wrap</h2>\n<div class=\"pf-u-display-flex pf-u-flex-nowrap\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>\n<br />\n<h2 class=\"pf-c-title pf-m-lg\">Flex wrap reverse</h2>\n<div class=\"pf-u-display-flex pf-u-flex-wrap-reverse\">\n  <div class=\"ws-example-flex-item\">Flex item 1</div>\n  <div class=\"ws-example-flex-item\">Flex item 2</div>\n  <div class=\"ws-example-flex-item\">Flex item 3</div>\n</div>","title":"Wrap","lang":"html"}}>
    </Example>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overview`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`For these utilities to have effect, the parent element must be set to `}
      <code {...{"className":"ws-code"}}>
        {`display: flex`}
      </code>
      {` or `}
      <code {...{"className":"ws-code"}}>
        {`display: inline-flex`}
      </code>
      {`. Breakpoint is optional. Breakpoints: base (no breakpoint value), -on-sm, -on-md, -on-lg, -on-xl. `}
      <strong>
        {`Example .pf-u-flex-row-on-lg`}
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
              {`.pf-u-flex-direction-row{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets flex-direction: row`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-flex-direction-row-reverse{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets flex-direction: row-reverse`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-flex-direction-column{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets flex-direction: column`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-flex-direction-column-reverse{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets flex-direction: column-reverse`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-justify-content-flex-start{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets justify-content: flex-start`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-justify-content-flex-end{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets justify-content: flex-end`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-justify-content-center{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets justify-content: center`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-justify-content-space-around{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets justify-content: space-around`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-justify-content-space-between{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets justify-content: space-between`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-align-items-flex-start{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets align-items: flex-start`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-align-items-flex-end{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets align-items: flex-start`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-align-items-center{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets align-items: center`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-align-items-baseline{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets align-items: baseline`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-align-items-stretch{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets align-items: stretch`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-align-self-flex-start{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets align-self: flex-start`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-align-self-flex-end{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets align-self: flex-end`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-align-self-center{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets align-self: center`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-align-self-baseline{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets align-self: baseline`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-align-self-stretch{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets align-self: stretch`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-align-content-flex-start{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets align-content: flex-start`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-align-content-flex-end{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets align-content: flex-end`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-align-content-center{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets align-content: center`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-align-content-space-between{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets align-content: space-between`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-align-content-space-around{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets align-content: space-around`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-align-content-stretch{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets align-content: stretch`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-flex-shrink{1 or 0}{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets flex-shrink to 1 or 0`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-flex-grow{1 or 0}{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets flex-grow to 1 or 0`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-flex-basis{0 or auto}{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets flex-basis to 0 auto`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-flex-fill{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`Sets flex to 1 1 auto`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-flex-wrap{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`sets flex-wrap: wrap`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-flex-nowrap{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`sets flex-wrap: nowrap`}
          </td>
        </tr>
        <tr>
          <td>
            <code {...{"className":"ws-code"}}>
              {`.pf-u-flex-wrap-reverse{-on-[breakpoint]}`}
            </code>
          </td>
          <td>
            <code {...{"className":"ws-code"}}>
              {`*`}
            </code>
          </td>
          <td>
            {`sets flex-wrap: wrap-reverse`}
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
DocumentationUtilitiesFlexCoreDocs.Component.displayName = 'DocumentationUtilitiesFlexCoreDocs';
