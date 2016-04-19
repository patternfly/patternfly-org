---
title: Pie Chart
author: dlabrecq
layout: page-tabs-no-design
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
  <!--
    <p>TBD: Add pie chart description</p>
-->
    <p>Jump to <a href="#example-overview-1">Relationship to a Whole</a> or <a href="#example-overview-2">Small Pie Chart</a></p>
    <h2 id="example-overview-1">Relationship to a Whole</h2>
    <div class="example-pf" style="width: 700px;">
      {% include widgets/charts/pie-whole-relationship.html id1="pie-chart-1" id2="pie-chart-2" id3="pie-chart-3" %}
    </div>
    <h2 id="example-overview-2">Small Pie Chart</h2>
    <div class="example-pf">
      {% include widgets/charts/pie-mini.html id="pie-chart-4" %}
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Description</h2>
    <div class="row">
      <div class="col-md-4 col-lg-3">
      </div>
      <div class="col-md-8 col-lg-9">
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html angular=false %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <p>Jump to <a href="#example-code-1">Relationship to a Whole</a> or <a href="#example-code-2">Small Pie Chart</a></p>
        <h2 id="example-code-1">Relationship to a Whole</h2>
        <div class="example-pf" style="width: 700px;">
          {% include widgets/charts/pie-whole-relationship.html id1="donut-chart-5" id2="pie-chart-6" id3="pie-chart-7" %}
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="card-markup-1" href="#card-markup-1">Reference Markup</a></p>
        <div class="collapse in" id="card-markup-1">
          <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
{% include widgets/charts/pie-whole-relationship.html id1="donut-chart-5" id2="pie-chart-6" id3="pie-chart-7" %}
          {% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-2">Small Pie Chart</h2>
        <div class="example-pf">
          {% include widgets/charts/pie-mini.html id="donut-chart-8" %}
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="card-markup-2" href="#card-markup-2">Reference Markup</a></p>
        <div class="collapse in" id="card-markup-2">
          <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
{% include widgets/charts/pie-mini.html id="pie-chart-8" %}
          {% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
      </div>
    </div>
  </div>
</div>
