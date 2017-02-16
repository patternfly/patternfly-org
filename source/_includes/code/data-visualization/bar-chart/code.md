<p>Jump to <a href="#example-code-1">Vertical Bar Chart</a>, <a href="#example-code-2">Grouped Vertical Bar Chart</a>, <a href="#example-code-3">Horizontal Bar Chart</a> or <a href="#example-code-4">Grouped Horizontal Bar Chart</a></p>
<h2 id="example-code-1">Vertical Bar Chart</h2>
<div class="example">
  <div class="row">
    <div class="col-md-5">
      <div class="example-pf">
        {% include widgets/charts/bar-vertical.html id="donut-chart-5" %}
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
{% include widgets/charts/bar-vertical.html id="donut-chart-5" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-2">Grouped Vertical Bar Chart</h2>
<div class="example">
  <div class="row">
    <div class="col-md-5">
      <div class="example-pf">
        {% include widgets/charts/bar-vertical-group.html id="bar-chart-6" %}
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
<div class="collapse in" id="markup-2">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
{% include widgets/charts/bar-vertical-group.html id="bar-chart-6" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-3">Horizontal Bar Chart</h2>
<div class="example">
  <div class="row">
    <div class="col-md-5">
      <div class="example-pf">
        {% include widgets/charts/bar-horizontal.html id="bar-chart-7" %}
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-3" href="#markup-3">Reference Markup</a></p>
<div class="collapse in" id="markup-3">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
{% include widgets/charts/bar-horizontal.html id="bar-chart-8" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-4">Grouped Horizontal Bar Chart</h2>
<div class="example">
  <div class="row">
    <div class="col-md-5">
      <div class="example-pf">
        {% include widgets/charts/bar-horizontal-group.html id="bar-chart-8" %}
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-4" href="#markup-4">Reference Markup</a></p>
<div class="collapse in" id="markup-4">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
{% include widgets/charts/bar-horizontal-group.html id="bar-chart-8" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
