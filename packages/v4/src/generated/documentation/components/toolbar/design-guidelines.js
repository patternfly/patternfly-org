import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport260 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/basic-toolbar-nocallout.png';
import srcImport261 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/items-and-groups.png';
import srcImport262 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/multiple-groups.png';
import srcImport263 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/single-item-as-group.png';
import srcImport264 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/mobile-basic.png';
import srcImport265 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/mobile-expanded.png';
import srcImport266 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/basic-toolbar-nocallout.png';
import srcImport267 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/mobile-basic-copy.png';
import srcImport268 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/toolbar-with-divider.png';
import srcImport269 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/toolbar.png';
import srcImport270 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/toolbar-layout-cardview.png';
import srcImport271 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/toolbar-layout.png';
import srcImport272 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/toolbar-filter-chips.png';
import srcImport273 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/toolbar-2level.png';
import srcImport274 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/basic-toolbar.png';
import srcImport275 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/toolbar-pagination.png';
import srcImport276 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/toolbar-filter-chips.png';
import srcImport277 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/custom-toolbar.png';
import srcImport278 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/responsive-closed.png';
import srcImport279 from '../../../../content/design-guidelines/usage-and-behavior/toolbar/./img/responsive-open.png';

export const DocumentationComponentsToolbarDesignGuidelinesDocs = {
  "slug": "/documentation/components/toolbar/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/toolbar/toolbar.md",
  "section": "components",
  "id": "Toolbar",
  "title": "Toolbar",
  "toc": [
    "Elements",
    "Common toolbar items and groups",
    "Usage",
    "Examples",
    "Related components and demos"
  ]
};
DocumentationComponentsToolbarDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsToolbarDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`Toolbars can be included to allow a user to manage and manipulate a data set. Data can be presented in any valid presentation, a table, a list, or a data visualization (chart), for example. The PatternFly Toolbar component is a flexible layout system that accommodates a variety of configurations that can be adapted to your specific needs.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The toolbar is a container for holding a variety of elements (toolbar items and groups) that are used to manipulate a set of data.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport260} {...{"alt":"toolbar","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`All items should be centered vertically within the height.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Toolbar items and groups`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Toolbar items are individual components that can be placed inside of a toolbar. Buttons, select lists, and pagination controls are examples of items. Often, it makes sense to group sets of like items to create desired associations and to enable items to respond together to changes in viewport width.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Below are examples of: a group of icons, a group of buttons, a group of icons and buttons.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport261} {...{"alt":"toolbar items and groups","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Items within a group have 16px spacing between them. Items that are made up of multiple parts (for example the filter dropdown and input group) are treated as one item in regards to the spacing.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Multiple Groups`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A toolbar can have more than one group of items. Between groups there should be 24px of spacing.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Below is a group of icons next to a group of buttons. Note the cyan 24px spacer between them.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport262} {...{"alt":"multiple groups","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`A single item that doesn't belong to a larger group is treated as a group on its own. It uses a 24px spacer on either side.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Below is a single button next to a group of icons.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport263} {...{"alt":"single item as group","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Toggle groups`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A toggle group can be used when you want to collapse a set of items into an overlay panel at a certain breakpoint. This allows complex toolbars with multiple items and groups of items to be responsive. A toggle group is useful for containing filter controls, for example. When the toolbar responds to adapt to a mobile viewport, the contents contained in a toggle group will collapse into an overlay panel that can be toggled by clicking the Filter icon.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport264} {...{"alt":"Toolbar with toggle group","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport265} {...{"alt":"Toolbar with expanded toggle group","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Overflow menus`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`An overflow menu is a component that can be used in a toolbar (or elsewhere) to group a number of actions that should be collapsed into a kebab at a certain breakpoint. In the toolbar, the overflow menu will commonly be used to group a set of actions that are intended to collapse into the kebab at smaller viewport sizes.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport266} {...{"alt":"toolbar with overflow menu","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport267} {...{"alt":"toolbar with overflow collapsed","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`In the above example, when the viewport size is reduced both the filter controls, contained in a toggle group, and the global actions, contained in an overflow menu, collapse to minimize the space required by the toolbar.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Vertical dividers`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When you have a large toolbar containing many groups of items, use a vertical divider to further
separate the groups visually.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport268} {...{"alt":"toolbar with divider","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Common toolbar items and groups`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport269} {...{"alt":"common toolbar items","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1. Bulk selector:`}
      </strong>
      {` A Bulk selector can be added when you want to give users the ability to select multiple items within a page. Besides allowing the user to select and deselect all items on a page, other application specific options can be added in the dropdown. Bulk selection allows the user to select or deselect all items on a page and provide an indeterminate state that notifies the user when only some items are selected. Bulk selectors should always be the left-most element in a toolbar. When providing a bulk selector in a list view, it should be aligned with the checkboxes.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`2. Filter group:`}
      </strong>
      {` PatternFly supports a variety of common filter types that can be used alone or in combination to construct a custom filter. You may consider placing filters inside of a toggle group to make you toolbar responsive. See `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/filters"}}>
        {`Filters`}
      </PatternflyThemeLink>
      {` for more information about available filters.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`3. Icon button group:`}
      </strong>
      {` Actions or settings that are represented by icons can be added in an Icon button group. In the example, Sort and Export are represented as icons.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`4. Action button group:`}
      </strong>
      {` Any global actions that apply to selected data items are included left-aligned following filter and icon buttons. These may be placed within an overflow menu component to collapse the group as the viewport shrinks. No more than two items should be exposed as buttons. Button labels should be limited in length to preserve horizontal space.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`5. Pagination:`}
      </strong>
      {` When pagination is supported, a Pagination component will be included. Pagination will always be right aligned in the toolbar. If pagination is not supported, substitute the item count for pagination control. For example, report “17 items” to represent the total number of items or “10 of 17 items” to indicate that 10 items were returned as the result of a filter event.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Order of toolbar elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Within the toolbar, layouts may vary depending on the use case.`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`When used, bulk selection should be the left-most element.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Filters and global actions may follow.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`When pagination is used, it should be the right-most element.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`When pagination is not used, the item count should be the right-most element.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Placement in a page`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The toolbar should live as close to possible to the content it controls. For a card view, the toolbar should be placed inside of the page header, above the card grid. This arrangement is also recommended if the user may switch between views (e.g. view as cards or as a list).`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport270} {...{"alt":"toolbar in page header","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`For simple list and table views, the toolbar should always appear above the data set to which it applies. Toolbars should stretch to the width of the data view to which it applies, with the elements aligned in a horizontal row.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport271} {...{"alt":"layout","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Note that there should be no spacers on the left and right edges of the toolbar if there are already padding spacers being used with whatever component the toolbar is placed within (e.g. cards).`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Multi-line toolbars`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In most cases, toolbars should arrange elements in a single horizontal row. The PatternFly toolbar does allow for expansion to multiple rows when needed however. The following are some examples of when a multi-line toolbar may be needed.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Filtering`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport272} {...{"alt":"layout","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`1. Filter Chips:`}
      </strong>
      {` When filters are applied, the toolbar will expand in height to make space for a row of filter chips. Upon clearing the applied filters, the toolbar will collapse to its default height.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Stacked toolbar`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`There may be situations where all of the required elements simply cannot fit is a single line. In this example, we want to expose multiple filter options as separate select lists. This is a good option when providing visibility to available filters is more important than optimizing space.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport273} {...{"alt":"two-line toolbar","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Basic toolbar`}
      </strong>
      {`
`}
      <img src={srcImport274} {...{"alt":"basic","className":"ws-img"}}>
      </img>
      {`
The basic toolbar is sufficient for most cases. It includes filters, global actions, and item count. The Toolbar is shown here with an Attribute-Value (textbox) filter, but a variety of filter types may be used.`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Item count`}
        </strong>
        {`: When a filter is applied, the item count will be updated to represent the filtered subset of items. For example, “10 of 17 items.” The item count should be the right-most element.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Toolbar with pagination`}
      </strong>
      {`
`}
      <img src={srcImport275} {...{"alt":"pagination","className":"ws-img"}}>
      </img>
      {`
When pagination is needed, a pagination component can be used.`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination:`}
        </strong>
        {` When pagination is used, the pagination component replaces the item count. It should be the right-most element.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Toolbar with filter chips`}
      </strong>
      {`
`}
      <img src={srcImport276} {...{"alt":"filterchips","className":"ws-img"}}>
      </img>
      {`
When the current settings of the controls are not sufficient to convey applied filters, filter chips should be used.`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Filter chips:`}
        </strong>
        {` When filters are applied the toolbar will expand and filter chips will be displayed on the second row. Users can clear all filters by clicking the “Clear filters” link, and the toolbar will collapse back into one row.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Custom toolbar`}
      </strong>
      {`
`}
      <img src={srcImport277} {...{"alt":"custom","className":"ws-img"}}>
      </img>
      {`
Custom toolbars can vary by use case. In the above example, the toolbar is primarily comprised of filters.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Responsive toolbar`}
      </strong>
    </p>
    <p {...{"className":"ws-p"}}>
      {`The toolbar adapts to smaller viewport sizes by collapsing or hiding elements that take significant space, including filters and actions. On mobile devices, when used, pagination will be available from the footer, only.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport278} {...{"alt":"responsive1","className":"ws-img"}}>
      </img>
      {`
`}
      <img src={srcImport279} {...{"alt":"responsive2","className":"ws-img"}}>
      </img>
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
        <PatternflyThemeLink {...{"to":"/documentation/core/components/toolbar"}}>
          {`Toolbar`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/overflowmenu"}}>
          {`Overflow menu`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/chip"}}>
          {`Chip`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/chipgroup"}}>
          {`Chip group`}
        </PatternflyThemeLink>
      </li>
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
        <PatternflyThemeLink {...{"to":"/documentation/react/components/toolbar"}}>
          {`Toolbar`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/overflowmenu"}}>
          {`Overflow menu`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/chipgroup"}}>
          {`Chip group`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/pagination"}}>
          {`Pagination`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
DocumentationComponentsToolbarDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsToolbarDesignGuidelinesDocs';
