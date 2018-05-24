<h2 id="example-code-1">Data Tables</h2>
<p>See <a href="http://datatables.net">http://datatables.net</a> for complete data tables documentation.</p>
<p><strong>Note:</strong> <code>jquery.dataTables.js</code> must occur in the HTML source before <code>patternfly*.js</code>.</p>
<div class="pf-example">
 {% include widgets/table-view/table-view.html %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="data-tables-markup" href="#data-tables-markup">Reference Markup</a></p>
<div class="collapse in" id="data-tables-markup">
  <pre class="prettyprint">
{% capture data_tables_markup_include %}{% include widgets/table-view/table-view.html %}
<script src="/components/datatables/media/js/jquery.dataTables.js"></script>
<script>
// Initialize Datatables
$(document).ready(function() {
$('.datatable').dataTable();
});
</script>{% endcapture %}{{ data_tables_markup_include | xml_escape }}
  </pre>
</div>
