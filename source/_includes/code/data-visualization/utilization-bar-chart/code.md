<h2 id="example-code-1">Utilization Bar Chart</h2>
<div class="example">
  <div class="row">
    <div class="col-md-5">
      <div class="example-pf">
        {% include widgets/charts/utilization-bar.html id="donut-chart-2" %}
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
{% include widgets/charts/utilization-bar.html id="donut-chart-2" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
