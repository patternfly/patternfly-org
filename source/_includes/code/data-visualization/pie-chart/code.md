<p>Jump to <a href="#example-code-1">Pie Chart</a> or <a href="#example-code-2">Small Pie Chart</a></p>
<h2 id="example-code-1">Pie Chart</h2>
<div class="example-pf">
  {% include widgets/charts/pie-whole-relationship.html id1="pie-chart-5" id2="pie-chart-6" id3="pie-chart-7" %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="card-markup-1" href="#card-markup-1">Reference Markup</a></p>
<div class="collapse in" id="card-markup-1">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
{% include widgets/charts/pie-whole-relationship.html id1="pie-chart-5" id2="pie-chart-6" id3="pie-chart-7" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-2">Small Pie Chart</h2>
<div class="example-pf">
  {% include widgets/charts/pie-mini.html id="pie-chart-8" %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="card-markup-2" href="#card-markup-2">Reference Markup</a></p>
<div class="collapse in" id="card-markup-2">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
{% include widgets/charts/pie-mini.html id="pie-chart-8" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
