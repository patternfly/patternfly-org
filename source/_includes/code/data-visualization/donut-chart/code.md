<p>Jump to <a href="#example-code-1">Utilization</a>, <a href="#example-code-2">Relationship of a Set of Values to a Whole</a> or <a href="#example-code-3">Small Donut Chart</a></p>
<h2 id="example-code-1">Utilization</h2>
<div class="example-pf">
  {% include widgets/charts/donut-utilization.html id="donut-chart-1" %}
</div>
<div class="row">
  <div class="example-pf">
    <div class="container-fluid container-cards-pf">
      {% include widgets/charts/donut-utilization.html id="donut-chart-2" %}
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="card-markup-1" href="#card-markup-1">Reference Markup</a></p>
<div class="collapse in" id="card-markup-1">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
{% include widgets/charts/donut-utilization.html id="donut-chart-3" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-2">Relationship of a Set of Values to a Whole</h2>
<div class="example-pf">
  {% include widgets/charts/donut-whole-relationship.html id="donut-chart-4" %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
<div class="collapse in" id="markup-2">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
{% include widgets/charts/donut-whole-relationship.html id="donut-chart-5" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-3">Small Donut Chart</h2>
<div class="example-pf">
  {% include widgets/charts/donut-mini.html id="donut-chart-6" %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-3" href="#markup-3">Reference Markup</a></p>
<div class="collapse in" id="markup-3">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
{% include widgets/charts/donut-mini.html id="donut-chart-7" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
