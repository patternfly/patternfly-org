---
title: Donut Chart
author: lhinson
layout: page-tabs
url-js-extra: ['//cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.js', '//cdnjs.cloudflare.com/ajax/libs/d3/3.5.0/d3.min.js']
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>The most common use case for a donut chart are:</p>
    <ul>
    <li>Show progress completion as a percentage.</li>
    <li>Show utilization for an object (e.g. network, CPU, storage, etc.) as a percentage.</li>
    <li>Show the relationship of a set of values to a whole (design and specs for this use case are not addressed at this time, TBD.).</li>
    </ul>
    <p>Jump to <a href="#example-overview-1">Utilization</a>, <a href="#example-overview-2">Relationship to a Whole</a> or <a href="#example-overview-3">Small Donut Chart</a></p>
    <h2 id="example-overview-1">Utilization</h2>
    <div class="row">
      <div class="col-md-3" style="padding-right: 0px;">
        <div class="example-pf">
          <div class="cards-pf">
            <div class="container-fluid container-cards-pf">
              <div class="row row-cards-pf">
                <div class="col-md-12">
                  <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                  {% include widgets/charts/donut-utilization.html chart1="donut-chart-1" %}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-11">
        <h2 id="example-overview-2">Relationship to a Whole</h2>
        <div class="example-pf">
          <div class="cards-pf">
            <div class="container-fluid container-cards-pf">
              <div class="row row-cards-pf">
                <div class="col-md-12">
                  <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                  {% include widgets/charts/donut-whole-relationship.html chart1="donut-chart-2" chart2="donut-chart-3" chart3="donut-chart-4" %}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <h2 id="example-overview-3">Small Donut Chart</h2>
        <div class="example-pf">
          <div class="cards-pf">
            <div class="container-fluid container-cards-pf">
              <div class="row row-cards-pf">
                <div class="col-md-12">
                  <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                  {% include widgets/charts/donut-mini.html chart1="donut-chart-5" %}
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
      <div class="col-md-4 col-lg-3">
        <img src="{{site.baseurl}}assets/img/donut-chart-callout.png" alt="donut-chart-callout"/>
      </div>
      <div class="col-md-8 col-lg-9">
        <ol>
          <li><b>Donut Chart Background Fill:</b> The background color is grey (#d1d1d1)</li>
          <li><b>Donut Chart Fill:</b> The fill starts at 12 o’clock and moves clockwise. The fill color depends on the thresholds.</li>
          <ul>
            <li>When no thresholds exist the indicator is blue (#0088ce).</li>
            <li>When a threshold exists and the percentage has not surpassed any thresholds, the indicator is green (#3f9c35).</li>
            <li>When the utilization percentage has surpassed the warning threshold, but not the error threshold, the indicator is orange (#ec7a08)</li>
            <li>When the utilization percentage has surpassed the error threshold, the indicator is is red (#cc0000).</li>
          </ul>
          <li><b>Label or Icon</b> (optional):</li>
          <ul>
            <li>When the donut chart is a part of a dashboard tile, there is a label in the center of the chart.</li>
            <li>The label may be omitted or replaced by an icon if the chart is used in an object blade or card.</li>
            <li>The label in the center of the chart should show one of the following:</li>
            <ul>
              <li>The used value in a large font size followed by "&lt;units&gt; Used" on a second row.</li>
              <li>The available value in a large font size followed by "&lt;units&gt; Available" on a second row.</li>
              <li>The current percentage in a large font size followed by a "of &lt;total value&gt; &lt;units&gt;" on a second row.</li>
            </ul>
          </ul>
          <li><b>Tooltip</b> (optional): When the donut chart is used to represent utilization, the percentage is displayed in a tooltip on hover.</li>
          <li><b>Warning Threshold Indicator</b> (optional): If a warning threshold exists, that may be visually indicated on the chart. 75% is the typical default value for a warning threshold but some products may have configurable thresholds (design not currently shown, visuals are still TBD).</li>
          <li><b>Error Threshold Indicator</b> (optional): If an error threshold exists, that may be visually indicated on the chart. 90% is the typical default value for an error threshold but some products may have configurable thresholds (design not currently shown, visuals are still TBD).</li>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <p>Jump to <a href="#example-code-1">Utilization</a>, <a href="#example-overview-2">Relationship to a Whole</a> or <a href="#example-code-3">Small Donut Chart</a></p>
        <h2 id="example-code-1">Utilization</h2>
        <div class="row">
          <div class="col-md-3" style="padding-right: 0px;">
            <div class="example-pf">
              <div class="example-pf-demo example-pf-demo-no-padding">
                <div class="cards-pf">
                  <div class="container-fluid container-cards-pf">
                    <div class="row row-cards-pf">
                      <div class="col-md-12">
                        <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                        {% include widgets/charts/donut-utilization.html chart1="donut-chart-6" %}
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
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/charts/donut-utilization.html chart1="donut-chart-6" %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-2">Relationship to a Whole</h2>
        <div class="row">
          <div class="col-md-11">
            <div class="example-pf">
              <div class="example-pf-demo example-pf-demo-no-padding">
                <div class="cards-pf">
                  <div class="container-fluid container-cards-pf">
                    <div class="row row-cards-pf">
                      <div class="col-md-12">
                        <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                        {% include widgets/charts/donut-whole-relationship.html chart1="donut-chart-7" chart2="donut-chart-8" chart3="donut-chart-9" %}
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
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/charts/donut-whole-relationship.html chart1="donut-chart-7" chart2="donut-chart-8" chart3="donut-chart-9" %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-3">Small Donut Chart</h2>
        <div class="row">
          <div class="col-md-4">
            <div class="example-pf">
              <div class="example-pf-demo example-pf-demo-no-padding">
                <div class="cards-pf">
                  <div class="container-fluid container-cards-pf">
                    <div class="row row-cards-pf">
                      <div class="col-md-12">
                        <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                        {% include widgets/charts/donut-mini.html chart1="donut-chart-10" %}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="card-markup-3" href="#card-markup-3">Reference Markup</a></p>
        <div class="collapse in" id="card-markup-3">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/charts/donut-mini.html chart1="donut-chart-10" %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
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
