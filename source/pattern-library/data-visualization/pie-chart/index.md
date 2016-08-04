---
title: Pie Chart
author: dlabrecq
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>Pie charts are used to show percentage or proportional data. On hover, the percentage of each category is provided in a tooltip. The  pieces of a pie chart must add up to 100%. It is recommended that there is no more than six categories per one pie chart. Sections within a pie chart may be hard to compare to each other so you should use a pie chart when you want to compare an individual section to the whole. If you wish to show the exact value of each category, please check out the <a href="{{ site.baseurl}}pattern-library/data-visualization/bar-chart"> Bar Chart pattern</a>.</p>
    <p>Jump to <a href="#example-overview-1">Pie Chart with Bottom Legend,</a> <a href="#example-overview-2">Pie Chart with Right Legend,</a> <a href="#example-overview-3">Pie Chart with No Legend,</a> or <a href="#example-overview-4">Small Pie Chart with Label</a></p>
    <h2 id="example-overview-1">Pie Chart with Bottom Legend</h2>
    <div class="example-pf">
      {% include widgets/charts/pie-whole-relationship.html id3="pie-chart-3" %}
    </div>
    <h2 id="example-overview-2">Pie Chart with Right Legend</h2>
    <div class="example-pf">
      {% include widgets/charts/pie-whole-relationship.html id2="pie-chart-2" %}
    </div>
    <h2 id="example-overview-3">Pie Chart with No Legend</h2>
    <div class="example-pf">
      {% include widgets/charts/pie-whole-relationship.html id1="pie-chart-1" id2="pie-chart-2" id3="pie-chart-3" %}
    </div>
    <h2 id="example-overview-4">Small Pie Chart with Label</h2>
    <div class="example-pf">
      {% include widgets/charts/pie-mini.html id="pie-chart-4" %}
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
  <h2>Description</h2>
  <div class="row">
    <div class="col-md-4 col-lg-5">
        <img src="{{site.baseurl}}assets/img/pie-chart-callout.png" alt="pie-chart-callout"/>
    </div>
    <div class="col-md-8 col-lg-7">
      <ol>
        <li><b>Pie Chart Fill:</b> For recommendations on fill colors, see the <a href="/styles/color-palette/">Color Palette</a>.</li>
          <ul>
            <li><b>Interaction</b> (optional):</li>
              <ul>
                <li>If  drill down behavior is supported, clicking on a segment of the pie will navigate to the appropriate page.</li>
                <li>If supported, right clicking on a segment of the pie chart will bring up a menu with associated actions.</li>
              </ul>
          </ul>
        <li><b>Label:</b>(optional): The label may be shown either on top or bottom of the pie chart.</li>
        <li><b>Tooltip</b> (optional): We recommend that the name and percentage are displayed on hover.</li>
        <li><b>Legend</b>: It is recommended to include a legend to show values and define the colors on the chart. On the pie chart, the legend may be located left aligned and underneath the chart or left aligned and to the right of the chart.</li>
          <ul>
            <li><b>Interaction</b> (optional):</li>
              <ul>
                <li>Clicking on a series in the legend should toggle the visibility of the series in the chart.</li>
                <li>Hovering over a series in the legend will highlight the piece of pie associated with that attribute.</li>
              </ul>
          </ul>
        </ol>
        </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html angular=false %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
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
      </div>
    </div>
  </div>
</div>
