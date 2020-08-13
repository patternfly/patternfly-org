import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport227 from '../../../../content/design-guidelines/usage-and-behavior/pagination/./img/full-page.png';
import srcImport228 from '../../../../content/design-guidelines/usage-and-behavior/pagination/./img/full-pagination.png';
import srcImport229 from '../../../../content/design-guidelines/usage-and-behavior/pagination/./img/mobile-pagination.png';
import srcImport230 from '../../../../content/design-guidelines/usage-and-behavior/pagination/./img/compact-pagination.png';

export const DocumentationComponentsPaginationDesignGuidelinesDocs = {
  "slug": "/documentation/components/pagination/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/pagination/pagination.md",
  "section": "components",
  "id": "Pagination",
  "title": "Pagination",
  "toc": [
    "Full pagination",
    "Compact pagination",
    "Related components and demos"
  ]
};
DocumentationComponentsPaginationDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsPaginationDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Pagination splits data across multiple pages, typically within a table, list, or card view. If you use infinite scrolling, you don't need to use pagination.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Add pagination above and below content views so users can easily navigate as they read through listed items on a page.`}
    </p>
    <img src={srcImport227} {...{"alt":"Example of pagination on full page table","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1. Top pagination:`}
      </strong>
      {` Always right-align pagination in the top toolbar, above content views.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`2. Bottom pagination:`}
      </strong>
      {` Right-align pagination below content views, too.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Full pagination`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use full pagination unless you're restricted to a narrow workspace, then use `}
            <a href="#compact-pagination">{`compact pagination`}</a>
      {`. Full pagination occupies more toolbar territory, so you'll have limited room for other items like bulk selectors, buttons, filters, or input fields.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <a {...{"href":"http://patternfly.org/v4/design-guidelines/usage-and-behavior/toolbar#overflow-menus"}}>
        {`Overflow menus`}
      </a>
      {` allow you to incorporate these toolbar actions using less horizontal space. Toolbar actions automatically form into an overflow menu at specific breaking points. Learn how to customize these breakpoints in our `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/toolbar"}}>
        {`Toolbar`}
      </PatternflyThemeLink>
      {` documentation.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Desktop and mobile views connect with the same breakpoint specifications. On mobile, full pagination condenses to an item count. As a toolbar item, you can add and keep the item count in two ways: in both desktop and mobile views, or just in mobile view.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Desktop full pagination in toolbar`}
    </p>
    <img src={srcImport228} {...{"alt":"Example of full pagination","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1. Items in view:`}
      </strong>
      {` Allows the user to select the item count (number of listed items) per page.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`2. Full pager:`}
      </strong>
      {` Supplies all necessary pagination options including page-back and page-forward, page-first and page-last, and a manual option to type in a desired page number.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Mobile full pagination in toolbar`}
    </p>
    <img src={srcImport229} {...{"alt":"Example of pagination on mobile table view","width":"375","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1. Items in view:`}
      </strong>
      {` At this screen size, the top toolbar only shows the item count to indicate items currently in view. It hides all other pagination controls.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`2. Full pager:`}
      </strong>
      {` Supplies the same pagination options as the desktop full pager, but in the bottom toolbar.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Compact pagination`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Compact pagination fits more actions into top toolbars with limited space. Choose this compact variation when your top toolbar contains many items or looks overcrowded. As with full pagination, the compact variation condenses to an item count for mobile views.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Desktop compact pagination in toolbar`}
    </p>
    <img src={srcImport230} {...{"alt":"Example of compact pagination","width":"990","className":"ws-img"}}>
    </img>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1. Items in view:`}
      </strong>
      {` Allows the user to select the item count (number of listed items) per page, as seen in full pagination.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`2. Compact pager:`}
      </strong>
      {` Supplies the user with page-back and page-next controls only.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Related components and demos`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Core HTML/CSS`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/pagination"}}>
          {`Pagination`}
        </PatternflyThemeLink>
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`React`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/pagination"}}>
          {`Pagination`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
DocumentationComponentsPaginationDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsPaginationDesignGuidelinesDocs';
