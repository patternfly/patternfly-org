import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport175 from '../../../../content/design-guidelines/usage-and-behavior/lists-and-tables/./img/standard-list.png';
import srcImport176 from '../../../../content/design-guidelines/usage-and-behavior/lists-and-tables/./img/actionable-list.png';
import srcImport177 from '../../../../content/design-guidelines/usage-and-behavior/lists-and-tables/./img/expandable-list.png';
import srcImport178 from '../../../../content/design-guidelines/usage-and-behavior/lists-and-tables/./img/standard-data-table.png';
import srcImport179 from '../../../../content/design-guidelines/usage-and-behavior/lists-and-tables/./img/compact-data-table.png';
import srcImport180 from '../../../../content/design-guidelines/usage-and-behavior/lists-and-tables/./img/expandable-data-table.png';
import srcImport181 from '../../../../content/design-guidelines/usage-and-behavior/lists-and-tables/./img/compound-expandable-data-table.png';
import srcImport182 from '../../../../content/design-guidelines/usage-and-behavior/lists-and-tables/./img/Mobile-data-table-example.png';
import srcImport183 from '../../../../content/design-guidelines/usage-and-behavior/lists-and-tables/./img/sortable-data-table.png';
import srcImport184 from '../../../../content/design-guidelines/usage-and-behavior/lists-and-tables/./img/data-table-example.png';

export const DocumentationComponentsDataListDesignGuidelinesDocs = {
  "slug": "/documentation/components/data-list/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/lists-and-tables/lists-and-tables.md",
  "section": "components",
  "id": "Data list",
  "title": "Data list",
  "toc": [
    "Data lists",
    "Tables",
    "Tables on mobile",
    "Sorting by columns",
    "Using lists and tables in a page",
    "Components and demos used"
  ]
};
DocumentationComponentsDataListDesignGuidelinesDocs.liveContext = {
  
};
DocumentationComponentsDataListDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`PatternFly offers two components for displaying large data sets: `}
      <PatternflyThemeLink {...{"to":"/documentation/react/components/datalist/"}}>
        {`data list`}
      </PatternflyThemeLink>
      {` and `}
      <PatternflyThemeLink {...{"to":"/documentation/react/components/table/"}}>
        {`table`}
      </PatternflyThemeLink>
      {`. While they satisfy similar use cases, choosing the correct component to use in your design will be dependent on the type of data you need to display.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use `}
      <a {...{"href":"#data-lists"}}>
        {`data lists`}
      </a>
      {` when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`A flexible layout is more important than arranging information in a grid`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You want to include active content like a chart`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Content displayed may vary between rows`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Use `}
      <a {...{"href":"#tables"}}>
        {`tables`}
      </a>
      {` when:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Users will want to consume data as a grid (i.e. structured rows and columns)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`You want column headers`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Data lists`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`PatternFly supports several variations of the data list component.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Standard data list`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport175} {...{"alt":"standard data list","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/toolbar"}}>
            {`Toolbar`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` The toolbar sits above the list and contains controls for manipulating list data. Common actions include filtering, sorting, and pagination.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Row:`}
        </strong>
        {` Row height may be variable and sizes to the content. Rows in a data list may take any supported layout.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Inline actions:`}
        </strong>
        {` These actions apply only to the current row/item.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a data list when the information you want to display is not easily structured into a tabular format, you want a more flexible layout within rows, or you plan to embed rich content like a chart or an image into a row.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When not to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The data list is not recommended for displaying content that is better presented in tabular format with well defined columns and headings. Instead, use a table.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Alternative solutions`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Alternative to a data list include `}
      <a {...{"href":"#tables"}}>
        {`tables`}
      </a>
      {` or card views. Card views and data lists have similar properties, but information in a card view is chunked into a grid of individual cards. In choosing between a data list and a card view, consider the type of data that will be displayed and the format that best suits that data. If you cannot easily fit all of the data that needs to be displayed into a card, a data list might be a better solution.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`How to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Think of each row in a data list as a container for some formatted content. In PatternFly 4, data list rows can accept any `}
      <PatternflyThemeLink {...{"to":"/documentation/react/layouts/bullseye"}}>
        {`layout`}
      </PatternflyThemeLink>
      {` supported by the design system as long as all rows apply the same layout. Here are some common layouts that may be useful in a data list:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/documentation/react/layouts/grid"}}>
            {`Grid`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` When you want to display content in a responsive grid`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/documentation/react/layouts/level"}}>
            {`Level`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` When you want to justify content evenly over the width of the row`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/documentation/react/layouts/split"}}>
            {`Split`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` When you want to distribute content evenly with a main content area in the center`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Actionable data list`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The actionable data list provides checkboxes that enable users to select one or more rows and act on that selection using options in the toolbar.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport176} {...{"alt":"actionable data list","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Checkbox:`}
        </strong>
        {` Enables a user to select a row`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global actions:`}
        </strong>
        {` Actions that can be applied to all selected items`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use actionable data lists when you need to enable a user to select and act on multiple items in the list.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When not to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Do not use actionable data lists when actions are restricted to a single row or object. In this case, place actions inline within the row.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Expandable data list`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The expandable list adds an expansion panel to every row to reveal more details about the item.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport177} {...{"alt":"expandable data list","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expansion caret:`}
        </strong>
        {` Toggles the expansion open and closed`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expansion panel:`}
        </strong>
        {` A container that is revealed when the expansion is open. It can accept any supported layout to present additional content to the user.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use an expandable data list when you have more information than will comfortably fit inside a row, or you want to provide a way for advanced users to access information that is not applicable to all users.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Tables`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Standard table:`}
        </strong>
        {` Combines the styling of a list view with behaviors that are commonly associated with a table (sometimes referred to as a hybrid list)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Compact table:`}
        </strong>
        {` Maximizes the amount of data that can be displayed in a small space`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Standard table`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport178} {...{"alt":"standard table","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          <PatternflyThemeLink {...{"to":"/design-guidelines/usage-and-behavior/toolbar"}}>
            {`Toolbar`}
          </PatternflyThemeLink>
          {`:`}
        </strong>
        {` Sits above the table and contains controls for manipulating table data. Common actions include filtering, sorting, and pagination.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select all:`}
        </strong>
        {` When present, selects all items in a table. If pagination is being used, this will only select items on the current page.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Column headers:`}
        </strong>
        {` Should align with the content they contain. If the user is able to sort on a column, the first click on the header will sort the content of the table on the content in that column. Subsequent clicks will toggle the direction of the sort. Table data can only be sorted on one column at a time. See `}
        <a {...{"href":"#sorting-by-columns"}}>
          {`Sorting by columns`}
        </a>
        {` for more information on the sort component.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Select checkbox:`}
        </strong>
        {` Selects this row`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Global actions:`}
        </strong>
        {` Actions that apply to all selected items`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Inline actions:`}
        </strong>
        {` Actions that apply only to the current row/item`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pagination footer:`}
        </strong>
        {` When present, provides navigation to additional pages`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a standard table when the information you want to display fits into a structured, tabular format (i.e. has distinct rows and columns).`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When not to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Do not use for less structured or variably structured data that cannot be easily organized into columns. In these situations, use a `}
      <a {...{"href":"#data-lists"}}>
        {`data list`}
      </a>
      {`.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`How to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Consider the structure of the data you want to display and organize that information into columns. Columns will typically have column headers. Every row within a table must have a consistent format. If the table row includes actions, they should always be placed in the rightmost column(s).`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Compact table`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport179} {...{"alt":"compact table","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a compact table when you want to show as much data per page as possible and readability is a secondary concern.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Expandable table`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport180} {...{"alt":"expandable table","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expansion:`}
        </strong>
        {` Expands the row`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expansion panel:`}
        </strong>
        {` Contains details associated with a row`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use when you have more information than will comfortably fit inside a row or you want to provide a way for advanced users to access information that is not applicable to all users.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Compound-expandable table`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport181} {...{"alt":"compound expandable table","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expandable cell:`}
        </strong>
        {` A cell that can be clicked to reveal more detail about an item. If the expansion for an item is already open, clicking on a different cell will close the current item and open a new one.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Expansion panel:`}
        </strong>
        {` Contains details associated with an expandable item.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a compound expandable list when you want multiple expansion panels that relate to specific table columns where it would not make sense to combine all of this information into a single, simple expansion.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Tables on mobile`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The PatternFly 4 table is designed to be fully responsive. When columns no longer fit within the width of the viewport, columns are stacked so that data in each row is displayed as sets of attribute-value pairs.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport182} {...{"alt":"mobile table","className":"ws-img"}}>
      </img>
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Sorting by columns`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Sorting by columns is possible for any table variation. Enabling the component within a table eases the ability to scan and read through the content. This option is favored over adding sorting functionality to the toolbar.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport183} {...{"alt":"sortable table","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Sorted column:`}
        </strong>
        {` When a column is being sorted by, the column header will turn blue and the sort icon will represent the direction of the sort. Subsequent clicks on the sortable column header will toggle the direction of the sort.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Hovered sort:`}
        </strong>
        {` When a column is sortable, the sort icon will appear to the right of the column header. Upon hover, the  icon will change to a darker grey indicating that the icon is actionable.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Sortable column:`}
        </strong>
        {` When a column is sortable, the sort icon will appear to the right of the column header in a light grey color. Sorting will not become active until the user selects the column header. This triggers the arrow to point upwards and the content to be sorted in ascending order.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The default sort order for a table should support the primary use case for the application. All columns in a table do not require sort functionality. That is, you can disable the header sort function on some columns and enable it on others.`}
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Example`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If a table contains these two attributes: (System Name | Last Sync) you may want to show the most recently synced system at the top of the table (ie, it is the default sort column), because a primary use case for this table is verifying that you have successfully connected or troubleshot the system’s connection to Cloud Services.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`If a table contains these three attributes: (System Name | Last Sync | Severity) you may want to show the system with the highest Severity because that is the system the user should tend to first.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Using lists and tables in a page`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Lists or a tables should be placed in the body of a page. The width should be set by the containing element.`}
    </p>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport184} {...{"alt":"table in a page","className":"ws-img"}}>
      </img>
    </p>
    <p {...{"className":"ws-p"}}>
      {`In this example, a table is positioned in the body of a page in a card.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Components and demos used`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`HTML/CSS`}
      </strong>
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/datalist"}}>
          {`Data list`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/core/components/table"}}>
          {`Table`}
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
        <PatternflyThemeLink {...{"to":"/documentation/react/components/datalist"}}>
          {`Data list`}
        </PatternflyThemeLink>
      </li>
      <li {...{"className":"ws-li"}}>
        <PatternflyThemeLink {...{"to":"/documentation/react/components/table"}}>
          {`Table`}
        </PatternflyThemeLink>
      </li>
    </ul>
  </React.Fragment>
);
DocumentationComponentsDataListDesignGuidelinesDocs.Component.displayName = 'DocumentationComponentsDataListDesignGuidelinesDocs';
