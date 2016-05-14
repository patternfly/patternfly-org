---
title: Area Chart
author: dlabrecq
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>A Single Area Chart is used to provide metrics for a single data point. While similar to a line chart in both
    form and function, it offers an area fill for visual emphasis. The area fill below the line also functions to
    indicate cumulative data.</p>
    <ul>
      <li>The most common use case for area charts is to show trending over a continuous scale (usually time.)</li>
      <li>Use this instead of a line chart when you need to provide more visual emphasis than a simple line chart would
      offer. See the <a href="{{site.baseurl}}pattern-library/data-visualization/line-chart/#/_design">Line Charts
      pattern</a> for more information about line charts.</li>
    </ul>
    <p>Jump to <a href="#example-overview-1">Area Chart</a> or <a href="#example-overview-2">Single Area Chart</a></p>
    <h2 id="example-overview-1">Area Chart</h2>
    <div class="example">
      <div class="row">
        <div class="col-md-7">
          <div class="example-pf">
            {% include widgets/charts/area-multiple.html id="area-chart-1" %}
          </div>
        </div>
      </div>
    </div>
    <h2 id="example-overview-2">Single Area Chart</h2>
    <div class="example">
      <div class="row">
        <div class="col-md-7">
          <div class="example-pf">
            {% include widgets/charts/area-single.html id="area-chart-2" %}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Single Area Chart</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <img src="{{site.baseurl}}assets/img/AreaChart_Markup.png" alt="area-chart-callout"/>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Axis Lines:</b></li>
          <ul>
            <li>The “x” axis is commonly used for time values, and the “y” axis is used for metric values.</li>
            <li>Use consistent spacing for the axis line intervals and tick marks.</li>
            <li>Tick marks are optional.</li>
          </ul>
          <li><b>Grid lines:</b></li>
          <ul>
            <li>Horizontal grid lines (recommended): The lines help users associate a point in the chart with a value on the axis.</li>
            <li>Vertical Grid lines (optional): While helpful, in some contexts they might create visual noise.</li>
          </ul>
          <li><b>Data Line:</b></li>
          <ul>
            <li>A solid line is used at the top of the area chart to show a total value.</li>
            <li>Use straight lines (linear interpolation), if it’s important to display more precise data values.</li>
          </ul>
          <li><b>Data Area Fill:</b></li>
          <ul>
            <li>The area fill is presented below the data line.</li>
            <li>Data area fills use colors that conform with the <a href="{{site.baseurl}}styles/color-palette/">PatternFly color palette</a>.</li>
          </ul>
          <li><b>Interactive Data Points:</b></li>
          <ul>
            <li>Specific data points may be represented by dots on the line portion of the area chart.</li>
            <li>To help the user see which point they are hovering, the dot expands and a vertical line is displayed. In addition, a tooltip should appear with the associated values for that specific point in time.</li>
          </ul>
          <li><b>Chart Title:</b> Provide a title that describes the chart.</li>
          <li><b>Legend</b> (optional): Provide a legend that associates the individual data point with a color mapping. It may be used to provide more detailed information in support of the chart title. Position the legend below, or to the right of the chart.</li>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html angular=false %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <p>Jump to <a href="#example-code-1">Area Chart</a> or <a href="#example-code-2">Single Area Chart</a></p>
        <h2 id="example-code-1">Area Chart</h2>
        <div class="example">
          <div class="row">
            <div class="col-md-7">
              <div class="example-pf">
                {% include widgets/charts/area-multiple.html id="area-chart-3" %}
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
        <div class="collapse in" id="markup-1">
          <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
{% include widgets/charts/area-multiple.html id="area-chart-3" %}
          {% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
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
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
        <div class="collapse in" id="markup-2">
          <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
{% include widgets/charts/area-single.html id="area-chart-4" %}
          {% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
      </div>
      <div role="tabpanel" class="tab-pane nested" id="angular">
        <div ng-app="docsApp" ng-controller="DocsController" class="content">
          <div ng-include src="'/components/angular-patternfly/dist/docs/partials/api/patternfly.charts.directive.pfDonutPctChart.html'"></div>
        </div>
      </div>
    </div>
  </div>
</div>
