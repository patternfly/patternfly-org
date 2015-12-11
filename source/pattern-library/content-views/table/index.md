---
title: Table
author: serena
layout: page
---
<div class="pf-example">
 {% include widgets/datatable.html %}
</div>
<p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="data-tables-markup" href="#data-tables-markup">Reference Markup</a></p>
<div class="collapse" id="data-tables-markup">
  <pre class="prettyprint">{% capture data_tables_markup_include %}{% include widgets/datatable.html %}
<script src="/components/patternfly/components/datatables/media/js/jquery.dataTables.js"></script>
<script>
  // Initialize Datatables
  $(document).ready(function() {
    $('.datatable').dataTable();
  });
</script>{% endcapture %}{{ data_tables_markup_include | xml_escape }}
</pre>
</div>

## Overview

A table organizes data into rows (of items) and columns (of item attributes). Tables make structured data easy to scan, compare, sort, and analyze. Tables can be embedded into other design patterns, including the [Master/Detail][1] pattern and the [Dashboard][2] pattern. Tables are familiar to users and often the correct choice for structured data, but be careful not to overuse tables. Here are some examples of when not to use a table:

  * Do users need to find patterns within a data set? Consider a line chart or a bar chart.
  * Are users going to browse the data set without knowing exactly what to look for? Consider using a Rich List.
  * Do users *not *need to see or compare object attributes? Consider using a List.

[<img class="alignnone wp-image-3631 size-full" src="{{ site.baseurl}}assets/img/tabledescription-e1429714886750.png" alt="tabledescription" width="755" height="521" />][3]

## Description

The recommended design includes a set of features that are integrated into one basic table design. These features have been broken out into separate sections below to highlight each:

  1. [Grid and Empty Table][4] A grid layout displays and organizes data such that it is easy to scan and find items.
  2. [Filtering][5] (optional) Users want to decide which subset of the data they want to see in a table.
  3. [Row Hover][6] When the user hovers over a row, that row will be lightly highlighted.
  4. [Select Multiple Rows][7] Users want to perform an action on multiple rows by selecting a bulk action.
  5. [Expand/Collapse Row][8] (optional)
  6. [Sorting][9]: Allows the user to view data in table in different orders.
  7. [Configuring Columns][10] <span style="line-height: 1.5;">(optional): Users wants to customize the columns shown to them based on their needs.</span>
  8. [Table Actions][11]: Users want to perform actions that don’t focus on selected items, but instead affect the table as a whole.
  9. [Inline Actions][12] (optional)**: **Users want to quickly perform an action on a single row.
 10. [Pagination][13]: Users want to be able to sift through additional data when there is more than one page worth of table items.

* * *

### Grid and Empty Table {#grid-and-empty-table}

A grid layout displays and organizes data such that it is easy to scan and find items.

If a table is empty and there are no items to display, the table&#8217;s column headers, the filter bar (if the filter feature is turned on), table actions (though they will be disabled), and pagination information (also disabled) will still be visible. A message that there are no items to display and in cases where it makes sense there will be a call to action link is shown in the table body instead.

[<img class="alignnone wp-image-3138 " src="{{ site.baseurl}}assets/img/Empty-Table1.png" alt="Empty-Table" width="713" height="102" />][14]

* * *

### Filtering (optional) {#filtering}

The filter feature allows the user to filter the items they are viewing in the table. The filter box is shown in the upper left hand corner of the table. The interaction details for the filter box will follow the [Search][15] pattern.

[<img class="alignnone wp-image-3647 size-full" src="{{ site.baseurl}}assets/img/filter2.png" alt="filter2" width="878" height="133" />][16]

The filter results bar will appear in the table after the user has run a filter. This bar will list the number of filter results along with any criteria that the user specified in the filter box. Filter results can be cleared by either removing each criterion individually, clicking the “View All” link, or by running an empty filter. In this example the table is filtered by &#8220;Days: Th&#8221;.

[<img class="alignnone wp-image-3650 size-full" src="{{ site.baseurl}}assets/img/filter_results3.png" alt="filter_results3" width="878" height="133" />][17]

If the filter returns no results, the user will see the empty table pattern design along with a specific message regarding the fact that there were no matches to their filter. This would include the “View All” link as well.

[<img class="alignnone wp-image-3141" src="{{ site.baseurl}}assets/img/table-filter-41.png" alt="table-filter-4" width="870" height="146" />][18]

* * *

### Row Hover {#row-hover}

When the user hovers over a row, that row will be lightly highlighted. This helps the user to isolate the row, especially when clicking on items in the row. The highlight color should be distinguishable from any other highlight or shading colors used within the table.

[<img class="alignnone wp-image-2462" src="{{ site.baseurl}}assets/img/grid2.png" alt="row highlight" width="728" height="487" />][19]

* * *

### Select Multiple Rows {#multi-select}

Checkboxes allow the user to select multiple rows in order to perform bulk actions on those rows simultaneously. Selecting a row activates the checkbox and highlights the row. This highlight is more prominent than the highlight for hovering over a row. Bulk item actions are activated when a row is selected. The number of rows selected is shown near the bulk item action.

[<img class="alignnone wp-image-2468 " src="{{ site.baseurl}}assets/img/select2.png" alt="bulk item actions" width="731" height="489" />][20]

Selecting the checkbox in the header row selects all rows on the page. If there are multiple pages, the user is given the option to select all rows in the table.

[<img class="alignnone wp-image-2469 " src="{{ site.baseurl}}assets/img/select3.png" alt="row multiselect all" width="729" height="484" />][21]

* * *

### Expand / Collapse (optional) {#expand}

Expand / collapse allows the user to view additional information related to a specific row that isn’t necessary to display for all rows or at all times. I<span style="color: #000000;">nformation shown in the expanded section is read only. If the user needs to interact with content in the expanded area, the <a href="{{ site.baseurl}}wikis/patterns/pattern-development/draft-patterns/master-detail/">Master/Detail</a> pattern should be used instead.</span> Clicking on the caret will expand the row to show the additional information, shown below the row. A down caret indicates the expanded row. Clicking on the down caret will collapse the row back to its original view.

[<img class="alignnone wp-image-2569" src="{{ site.baseurl}}assets/img/expand2.png" alt="expand collapse 2" width="728" height="515" />][22]

The expanded row is not limited to text and can include other read-only data such as a table or image.

[<img class="alignnone wp-image-2567" src="{{ site.baseurl}}assets/img/expand4.png" alt="expand collapse 4" width="728" height="592" />][23]

Clicking on the right caret in the header row expands all rows on the page. The number of rows displayed will not change; rather, the page will scroll to display the additional content.

[<img class="alignnone wp-image-2565" src="{{ site.baseurl}}assets/img/expand6.png" alt="expand collapse 6" width="728" height="570" />][24]

* * *

### Sorting {#sorting}

Sorting allows the user to organize data by one or more columns. Columns that are clickable, shown by blue links, are sortable. The sorted column is shown with a highlight above the column. The direction of the sort is shown with a carat, in this example from lowest value in the first row and increasing downward. See the [data table test page][25] for more details regarding the defined sorting feature.

* * *

### Configuring Columns (optional) {#config-columns}

Table columns can be configured in two ways:

  1. Selecting which columns to show (via a &#8220;column selector&#8221; drop-down)
  2. Rearranging the order of the visible columns (by dragging the column headers)

See the [data table test page][25] for more details regarding the defined configuring columns feature.

* * *

### Table Actions {#table-actions}

Table actions are applied to the entire table, including rows not shown on the first page. Table actions buttons are shown at the top of the table. A &#8216;More&#8217; dropdown is recommended if there are more than 3 available actions. These actions should be labeled with words rather than icons for clarity.

[<img class="alignnone wp-image-2465 " src="{{ site.baseurl}}assets/img/tableaction.png" alt="table actions" width="728" height="496" />][26]

* * *

### Inline Actions {#inline-action}

Inline actions manipulate the data within a single row. The most common action is shown as a button with additional actions, if any, available via a dropdown menu. These actions should be labeled with words rather than icons for clarity.

[<img class="alignnone wp-image-2465 " src="{{ site.baseurl}}assets/img/inline1.png" alt="inline actions" width="728" height="496" />][27]

Once selected, the inline action allows the user to perform an action on the data. In this example, selecting the inline action “Edit” allows the user to directly edit the data within that row. The inline actions for the row in edit mode change to &#8220;Save&#8221; and &#8220;Cancel&#8221;.

[<img class="alignnone wp-image-2466 " src="{{ site.baseurl}}assets/img/inline2.png" alt="inline edit" width="736" height="497" />][28]

More actions are shown in a dropdown menu.

[<img class="alignnone wp-image-2466 " src="{{ site.baseurl}}assets/img/inline3.png" alt="more actions" width="736" height="497" />][29]

* * *

### Pagination {#pagination}

Pagination allows the user to view a manageable subset of the data if the number of rows in the table cannot be easily displayed on one page. Navigation allows the user to advance sequentially to the next or previous page, directly to the first or last page, or to a specific page number.

[<img class="alignnone wp-image-2472 " src="{{ site.baseurl}}assets/img/pagination1.png" alt="pagination" width="727" height="484" />][30]

A page size control allows the user to select the number of rows shown per page.

[<img class="alignnone wp-image-2473 " src="{{ site.baseurl}}assets/img/pagination2.png" alt="pagination 2" width="729" height="485" />][31]

Another pagination option is an infinite scroll design. The table will initially display one page worth of rows. As the user scrolls, additional rows will be displayed below the currently displayed rows.

 [1]: {{site.baseurl}}wikis/patterns/pattern-development/draft-patterns/master-detail/
 [2]: {{site.baseurl}}wikis/patterns/pattern-development/draft-patterns/dashboards/
 [3]: {{site.baseurl}}assets/img/tabledescription.png
 [4]: #grid-and-empty-table
 [5]: #filtering
 [6]: #row-hover
 [7]: #multi-select
 [8]: #expand
 [9]: #sorting
 [10]: #config-columns
 [11]: #table-actions
 [12]: #inline-actions
 [13]: #pagination
 [14]: {{site.baseurl}}assets/img/Empty-Table1.png
 [15]: {{site.baseurl}}wikis/patterns/pattern-development/draft-patterns/search/
 [16]: {{site.baseurl}}assets/img/filter2.png
 [17]: {{site.baseurl}}assets/img/filter_results3.png
 [18]: {{site.baseurl}}assets/img/table-filter-41.png
 [19]: {{site.baseurl}}assets/img/grid2.png
 [20]: {{site.baseurl}}assets/img/select2.png
 [21]: {{site.baseurl}}assets/img/select3.png
 [22]: {{site.baseurl}}assets/img/expand2.png
 [23]: {{site.baseurl}}assets/img/expand4.png
 [24]: {{site.baseurl}}assets/img/expand6.png
 [25]: https://rawgit.com/patternfly/patternfly/master/tests/datatables-columns.html
 [26]: {{site.baseurl}}assets/img/tableaction.png
 [27]: {{site.baseurl}}assets/img/inline1.png
 [28]: {{site.baseurl}}assets/img/inline2.png
 [29]: {{site.baseurl}}assets/img/inline3.png
 [30]: {{site.baseurl}}assets/img/pagination1.png
 [31]: {{site.baseurl}}assets/img/pagination2.png
