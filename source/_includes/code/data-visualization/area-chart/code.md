<h2 id="example-code-2">Single Area Chart</h2>
<div class="example">
  <div class="row">
    <div class="col-md-7">
      <div class="example-pf">
        {% include widgets/charts/area-single.html id="area-chart-4" %}
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
{% include widgets/charts/area-single.html id="area-chart-4" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
