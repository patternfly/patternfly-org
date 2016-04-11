---
title: Donut Chart
author: lhinson
layout: page-tabs
url-js-extra: ['//cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.js', '//cdnjs.cloudflare.com/ajax/libs/d3/3.5.0/d3.min.js']
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>The most common use case for line charts is to compare several data sets, or to show data over a period of time. As a rule of thumb, line charts are a great way to show continuous data over time. If you want to show and compare categorical data, you may consider using a bar chart.</p>
    <p>Multiple lines on the same chart allow the user to visualize relationships between varying data sets, such as correlated events, similarities or unexpected differences. We recommend displaying no more than 6 lines on a single graph to avoid confusion.</p>
    <p>Jump to <a href="#example-overview-1">Line Chart</a> or <a href="#example-overview-2">Single Line Chart</a></p>
    <h2 id="example-overview-1">Line Chart</h2>
    <div class="row">
      <div class="col-md-8">
        <div class="example-pf">
          <div class="cards-pf">
            <div class="container-fluid container-cards-pf">
              <div class="row row-cards-pf">
                <div class="col-md-12">
                  <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                  {% include widgets/charts/line-multiple.html chart1="line-chart-1" %}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">Single Line Chart</h2>
        <div class="example-pf">
          <div class="cards-pf">
            <div class="container-fluid container-cards-pf">
              <div class="row row-cards-pf">
                <div class="col-md-12">
                  <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                  {% include widgets/charts/line-single.html chart1="line-chart-2" %}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Description</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <img src="{{site.baseurl}}assets/img/line-chart-callout1.png" alt="line-chart-callout1"/>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Horizontal Axis Labels</b> When visualizing data over a period of time, the horizontal axis labels display time
          </li><li><b>Vertical Axis Labels:</b> When visualizing data over a period of time, the vertical axis labels display values.</li>
          <li><b>Axis Tick Marks</b> (optional): Major and minor tick marks on both axes may be shown.</li>
          <li><b>Grid Lines</b> (optional):</li>
          <ul>
            <li>Horizontal grid lines are recommended.</li>
            <li>Vertical grid lines are not recommended.</li>
          </ul>
          <li><b>Line</b></li>
          <ul>
            <li><b>Interaction</b> (optional): If supported, right clicking on an individual line will bring up a contextual menu with associated actions.  </li>
            <li><b>Data Point:</b> Data points are visually represented as dots on the line. A user can view information related to a specific data point by hovering over it. To help the user see which point they are hovering, the dot expands and a vertical line is displayed. In addition, a tooltip should appear with the associated values for that specific point in time. </li>
            <li><b>Color:</b> For recommendations on line colors, see the Color Palette.</li>
          </ul>
          <li><b>Legend</b> It is recommended to include a legend to define the colors on the chart. On the line chart, may be left aligned and centered underneath the chart or left aligned and to the right of the chart.</li>
          <ul>
            <li><b>Interactive Legend</b> (optional): Clicking on a series in the legend should toggle the visibility of the series in the chart. Hovering over a series in the legend will highlight the blocks associated with that attribute.</li>
          </ul>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <p>Jump to <a href="#example-code-1">Line Chart</a> or <a href="#example-code-2">Single Line Chart</a></p>
        <h2 id="example-code-1">Line Chart</h2>
        <div class="row">
          <div class="col-md-8">
            <div class="example-pf">
              <div class="example-pf-demo example-pf-demo-no-padding">
                <div class="cards-pf">
                  <div class="container-fluid container-cards-pf">
                    <div class="row row-cards-pf">
                      <div class="col-md-12">
                        <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                        {% include widgets/charts/line-multiple.html chart1="line-chart-3" %}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="card-markup-1" href="#card-markup-1">Reference Markup</a></p>
        <div class="collapse in" id="card-markup-1">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/charts/line-multiple.html chart1="line-chart-3" %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-2">Single Line Chart</h2>
        <div class="row">
          <div class="col-md-8">
            <div class="example-pf">
              <div class="example-pf-demo example-pf-demo-no-padding">
                <div class="cards-pf">
                  <div class="container-fluid container-cards-pf">
                    <div class="row row-cards-pf">
                      <div class="col-md-12">
                        <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                        {% include widgets/charts/line-single.html chart1="line-chart-4" %}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="card-markup-2" href="#card-markup-2">Reference Markup</a></p>
        <div class="collapse in" id="card-markup-2">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/charts/line-single.html chart1="donut-chart-4" %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
      </div>
      <div role="tabpanel" class="tab-pane nested" id="angular">
        <div ng-app="docsApp" ng-controller="DocsController" class="content">
          <div ng-include src="'/components/angular-patternfly/dist/docs/partials/api/patternfly.charts.directive.pfLineChart.html'"></div>
        </div>
      </div>
    </div>
  </div>
</div>
