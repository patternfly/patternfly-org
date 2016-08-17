---
title: Table View
author: gcardoso
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>The table view organizes data into rows (of items) and columns (of item attributes). Tables make structured data easy to scan, compare, sort, and analyze. Tables can be embedded into other design patterns. Tables are familiar to users and often the correct choice for structured data, but be careful not to overuse tables. Here are some examples of when not to use a table:</p>
    <p>The table pattern should <b>NOT</b> be used if:</p>
    <ul>
      <li>Users need to find patterns within a data set. Consider a line chart or a bar chart.</li>
      <li>Users need to browse the data set without knowing exactly what to look for. Consider using a <a href="{{site.baseurl}}pattern-library/content-views/list-view/">List View</a>.</li>
    </ul>
    <p>
      <img src="{{site.baseurl}}assets/img/table-example.png" alt="Table example">
    </p>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Table States</h2>
    <p>
      <img src="{{site.baseurl}}assets/img/table-callout1.png" alt="Table call-out 1" />
    </p>
    <ol>
      <li><b>Data Toolbar:</b> This version of the Table View is using a Data Toolbar with filter and actions. Item count is also included in the toolbar on the right hand side.</li>
      <li><b>Sorting:</b> Organize data by sorting columns. All columns are sortable, simply click on the column header to sort via info found in that column.</li>
      <ul>
        <li>Active column will be highlighted with a blue line above the column and blue text.  The carat indicates the direction of the sort, in this case from ascending order alphabetically.</li>
      </ul>
      <li><b>Select Row(s):</b> Click on the checkbox to select multiple rows in order to perform bulk actions on those rows simultaneously.</li>
      <ul>
        <li>Selecting a checkbox activates and highlights the row. This highlight is more prominent than the highlight for hovering over a row.</li>
      </ul>
      <li><b>Hover State:</b> When the user hovers over a row, that row will be lightly highlighted and outlined. This helps the user to isolate the row, especially when clicking on items in the row.</li>
      <li><b>Inline Actions:</b>  Inline actions can be performed within a single row to manipulate the data. The most common 1-2 (max) actions are shown as a button with additional actions, if any, available via a dropdown menu. These actions should use words rather than icons for clarity.</li>
      <li><b>Row Shading:</b>  Use alternating row colors to help the user read the content of the table more easily.</li>
    </ol>
    <p>
      <img src="{{site.baseurl}}assets/img/table-callout2.png" alt="Table call-out 2" />
    </p>
    <ol start="7">
      <li><b>Select All Rows:</b> Selecting the checkbox in the header row selects all rows on the page.  The total number of rows selected is shown near the table action buttons.</li>
      <li><b>Filtering</b> (optional):  User can see results of simple filters here. Results include the item and results count, list of active filters (with ability to remove individual filters), and button to clear all filters.</li>
      <li><b>Bulk Item Actions:</b>  Bulk item action buttons are activated when multiple rows are selected.  Some actions are available as both a table action and a bulk item action.   The number of rows selected is shown near the table action buttons.</li>
    </ol>
    <h2>Empty State</h2>
    <p>
      <img src="{{site.baseurl}}assets/img/empty-state-callout.png" alt="Empty State call-out" />
    </p>
    <ol start="10">
      <li><b>Empty State:</b>  If no items exist in the table, display the empty state pattern.  Simple filter feature will be disabled within the data toolbar in this state.  However, table actions will remain enabled.</li>
    </ol>
    <h2>What’s not covered in the current design but will be covered in future sprints:</h2>
    <ul>
      <li>Pagination</li>
      <li>Column customization</li>
      <li>Simple Sort</li>
      <li>Ability to expand and collapse rows to give user the option to view more details on each item</li>
      <li>Multi Column Sort</li>
      <li>Stick Column Headers</li>
    </ul>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html angular=false %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <h2 id="example-code-1">Data Tables</h2>
        <p>See <a href="http://datatables.net">http://datatables.net</a> for complete data tables documentation.</p>
        <p><strong>Note:</strong> <code>jquery.dataTables.js</code> must occur in the HTML source before <code>patternfly*.js</code>.</p>
        <div class="example-pf">
         {% include widgets/datatable.html %}
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="data-tables-markup" href="#data-tables-markup">Reference Markup</a></p>
        <div class="collapse in" id="data-tables-markup">
          <pre class="prettyprint">
{% capture data_tables_markup_include %}{% include widgets/datatable.html %}
<script src="/components/datatables/media/js/jquery.dataTables.js"></script>
<script>
  // Initialize Datatables
  $(document).ready(function() {
    $('.datatable').dataTable();
  });
</script>{% endcapture %}{{ data_tables_markup_include | xml_escape }}
          </pre>
        </div>
      </div>
    </div>
  </div>
</div>