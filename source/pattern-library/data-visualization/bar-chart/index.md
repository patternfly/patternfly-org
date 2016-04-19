---
title: Bar Chart
author: dlabrecq
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>Bar charts are used to visualize quantitative data. Since bar charts differentiate by length, we recommend that in
     most cases they be used rather than donut or pie charts, which differentiate by angle and area. As a rule of thumb,
     bar charts are a great way to show and compare categorical data. If you want to show continuous data over time, you
     may consider using a line chart instead. If you wish to show the percentage utilization ratio between used and
     available, you should check out the <a href="{{ site.baseurl}}pattern-library/data-visualization/utilization-bar-chart">Utilization Bar Chart pattern</a>.</p>
    <p>Jump to <a href="#example-overview-1">Vertical Bar Chart</a>, <a href="#example-overview-2">Grouped Vertical Bar Chart</a>, <a href="#example-overview-3">Horizontal Bar Chart</a> or <a href="#example-overview-4">Grouped Horizontal Bar Chart</a></p>
    <h2 id="example-overview-1">Vertical Bar Chart</h2>
    <div class="example">
      <div class="row">
        <div class="col-md-5">
          <div class="example-pf">
            {% include widgets/charts/bar-vertical.html id="bar-chart-1" %}
          </div>
        </div>
      </div>
    </div>
    <h2 id="example-overview-2">Grouped Vertical Bar Chart</h2>
    <div class="example">
      <div class="row">
        <div class="col-md-5">
          <div class="example-pf">
            {% include widgets/charts/bar-vertical-group.html id="bar-chart-2" %}
          </div>
        </div>
      </div>
    </div>
    <h2 id="example-overview-3">Horizontal BarChart</h2>
    <div class="example">
      <div class="row">
        <div class="col-md-5">
          <div class="example-pf">
            {% include widgets/charts/bar-horizontal.html id="bar-chart-3" %}
          </div>
        </div>
      </div>
    </div>
    <h2 id="example-overview-4">Grouped Horizontal BarChart</h2>
    <div class="example">
      <div class="row">
        <div class="col-md-5">
          <div class="example-pf">
            {% include widgets/charts/bar-horizontal-group.html id="bar-chart-4" %}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Vertical Bar Chart</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <img src="{{site.baseurl}}assets/img/vertical-bar-chart-callout3.png" alt="vertical-bar-chart-callout3"/>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Horizontal Axis Labels:</b> Horizontal axis labels display the series names and are recommended, but can be omitted if necessary due to space constraints and responsiveness.  If omitted a legend must be available.</li>
          <li><b>Vertical Axis Labels:</b> Vertical axis labels display values.</li>
          <li><b>Axis Tick Marks</b> (optional): There can be both major and minor tick marks on the vertical axis of vertical charts.  Tick marks are not needed on the horizontal axis of vertical charts since the horizontal axis of a vertical bar chart is not a quantitative scale line.</li>
          <li><b>Grid Lines</b> (optional):  Horizontal grid lines are suggested for vertical charts, but should not be used with horizontal bar charts.</li>
          <li><b>Bar</b>
            <ul>
              <li><b>Interaction:</b>
                <ul>
                  <li>If drill down behavior is supported, clicking on a bar will navigate to the appropriate page.</li>
                  <li>If supported, right clicking on an bar will bring up a menu with associated actions. If you are using a grouped bar chart, right clicking on a group will bring up a menu with associated actions for that group.</li>
                </ul>
              </li>
              <li><b>Width:</b> All bars should be the same width.</li>
              <li><b>Color:</b> For recommendations on fill colors, see the <a href="/styles/color-palette/">Color Palette</a>.</li>
              <li><b>Height:</b> Bar height in vertical charts is the dimension that represents its value.</li>
              <li><b>Spacing:</b> Spacing between bars should be equal.  In the case of grouped charts, increase the spacing between main categories.</li>
            </ul>
          </li>
          <li><b>Tooltip:</b> We recommend that the series name and value are displayed on hover.</li>
          <li><b>Legend:</b> It is recommended to include a legend to define the colors on the chart. On the bar chart, the legend may be located left aligned and underneath the chart or left aligned and to the right of the chart.</li>
          <ul>
            <li><b>Interactive Legend</b> (optional): Clicking on a series in the legend should toggle the visibility of the series in the chart.</li>
          </ul>
        </ol>
      </div>
    </div>
    <h2>Horizontal Bar Chart</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <img src="{{site.baseurl}}assets/img/horizontal-bar-chart-callout3.png" alt="horizontal-bar-chart-callout3"/>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Horizontal Axis Labels:</b> Horizontal axis labels display values.</li>
          <li><b>Vertical Axis Labels:</b> Vertical axis labels display the series names and are recommended, but can be omitted if necessary due to space constraints and responsiveness.  If omitted a legend must be available.</li>
          <li><b>Axis Tick Marks</b> (optional): There can be both major and minor tick marks on the horizontal axis of horizontal bar charts.  Tick marks are not needed on the vertical axis of horizontal charts since the vertical axis of a horizontal bar chart is not a quantitative scale line.</li>
          <li><b>Grid Lines</b> (optional): Vertical grid lines are suggested for horizontal charts, but should not be used with vertical charts.</li>
          <li><b>Bar</b>
            <ul>
              <li><b>Interaction:</b>
                <ul>
                  <li>If drill down behavior is supported, clicking on a bar will navigate to the appropriate page.</li>
                  <li>If supported, right clicking on an bar will bring up a menu with associated actions. If you are using a grouped bar chart, right clicking on a group will bring up a menu with associated actions for that group.</li>
                </ul>
              </li>
              <li><b>Width:</b> All bars should be the same width.</li>
              <li><b>Color:</b> For recommendations on fill colors, see the <a href="/styles/color-palette/">Color Palette</a>.</li>
              <li><b>Length:</b> Bar length in horizontal charts is the dimension that represents its value.</li>
              <li><b>Spacing:</b> Spacing between bars should be equal.  In the case of grouped charts, increase the spacing between main categories.</li>
            </ul>
          </li>
          <li><b>Tooltip:</b> We recommend that the series name and value are displayed on hover.</li> <li><b>Legend:</b> It is recommended to include a legend to define the colors on the chart. On the bar chart, the legend may be located left aligned and underneath the chart or left aligned and to the right of the chart.</li>
          <ul>
            <li><b>Interactive Legend</b> (optional): Clicking on a series in the legend should toggle the visibility of the series in the chart.</li>
          </ul>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html angular=false %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
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
      </div>
    </div>
  </div>
</div>
