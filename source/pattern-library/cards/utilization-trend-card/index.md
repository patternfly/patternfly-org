---
title: Utilization Trend Card
author: rhamilto
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>Utilization cards display the current utilization and a trend of a single metric.  The most common use case for this pattern is seen in a dashboard.</p>
    <p>Jump to <a href="#example-overview-1">Card with a Single Metric</a> or <a href="#example-overview-2">Card with Multiple Metrics</a></p>
    <h2 id="example-overview-1">Card with a Single Metric</h2>
    <div class="example-pf">
      <div class="cards-pf">
        <div class="container-fluid container-cards-pf" style="margin-top: 0;">
          <div class="row row-cards-pf" style="padding-top: 20px;">
            <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
            {% include widgets/card-pf-utilization-single-metric.html chart1="chart-pf-donut-1" chart2="chart-pf-sparkline-1" %}
          </div>
        </div>
      </div>
    </div>
    <h2 id="example-overview-2">Card with Multiple Metrics</h2>
    <div class="example-pf">
      <div class="cards-pf">
        <div class="container-fluid container-cards-pf" style="margin-top: 0;">
          <div class="row row-cards-pf" style="padding-top: 20px;">
            <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
            {% include widgets/card-pf-utilization-multiple-metrics.html chart3="chart-pf-donut-2" chart4="chart-pf-sparkline-2" chart5="chart-pf-donut-3" chart6="chart-pf-sparkline-3" chart7="chart-pf-donut-4" chart8="chart-pf-sparkline-4" %}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Card with a Single Metric</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <img src="{{site.baseurl}}assets/img/singe-metric-utilization-card2.png" alt="singe-metric-utilization-card2" />
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Metric Title:</b> Display the metric name.</li>
          <li><b>Current Value:</b> Display the current value. This could be available, which is the PatternFly default, or used.</li>
          <li><b>Label:</b> The label for the value is left aligned and listed above the total value.</li>
          <li><b>Total Value:</b> The total value is left aligned and listed under the label.</li>
          <li><b>Unit of Measurement:</b> The label for unit of measurement is shown after the total value.</li>
          <li><b>Content Separator:</b> A horizontal line visually separates the content in the card. The content separator is located below the values and above the donut chart. </li>
          <li><b>Donut Chart:</b> See the <a href="{{ site.baseurl}}patterns/donut-chart/">Donut Chart Pattern</a> for more details.</li>
          <li><b>Sparkline:</b> See the <a href="{{ site.baseurl}}patterns/sparkline/">Sparkline Pattern</a> for more details.</li>
          <li><b>Time Frame:</b> The time frame is indicated under the sparkline by small text and is left aligned.</li>
        </ol>
      </div>
    </div>
    <h2>Card with Multiple Metrics</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <img src="{{site.baseurl}}assets/img/multi-metric-utilization-card-callout1.png" alt="multi-metric-utilization-card-callout"/>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Card Title:</b> Use a card title if multiple metrics are shown in one card.</li>
          <li><b>Title Separator:</b> Include a horizontal line under the card title.</li>
          <li><b>Metric Title:</b> Display the metric name.</li>
          <li><b>Current Value:</b> Display the current value. This could be available, which is the PatternFly default, or used.</li>
          <li><b>Label:</b> The label for the value is left aligned and listed above the total value.</li>
          <li><b>Total Value:</b> The total value is left aligned and listed under the label.</li>
          <li><b>Unit of Measurement:</b> The label for unit of measurement is shown after the total value.</li>
          <li><b>Content Separator:</b> A horizontal line visually separates the content in the card. The content separator is located below the values and above the donut chart.</li>
          <li><b>Donut Chart:</b> See the <a href="{{ site.baseurl}}patterns/donut-chart/">Donut Chart Pattern</a> for more details.</li>
          <li><b>Sparkline:</b> See the <a href="{{ site.baseurl}}patterns/sparkline/">Sparkline Pattern</a> for more details.</li>
          <li><b>Time Frame:</b> The time frame is indicated under the sparkline by small text and is left aligned.</li>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html %}
    <p>Jump to <a href="#example-code-1">Card with a Single Metric</a> or <a href="#example-code-2">Card with Multiple Metrics</a></p>
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <h2 id="example-code-1">Card with a Single Metric</h2>
        <div class="example-pf">
          <div class="example-pf-demo example-pf-demo-no-padding">
            <div class="cards-pf">
              <div class="container-fluid container-cards-pf" style="margin-top: 0;">
                <div class="row row-cards-pf" style="padding-top: 20px;">
                  <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                  {% include widgets/card-pf-utilization-single-metric.html chart1="chart-pf-donut-5" chart2="chart-pf-sparkline-5" %}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="card-markup-1" href="#card-markup-1">Reference Markup</a></p>
        <div class="collapse in" id="card-markup-1">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/card-pf-utilization-single-metric.html chart1="chart-pf-donut-5" chart2="chart-pf-sparkline-5" %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-2">Card with Multiple Metrics</h2>
        <div class="example-pf">
          <div class="example-pf-demo example-pf-demo-no-padding">
            <div class="cards-pf">
              <div class="container-fluid container-cards-pf" style="margin-top: 0;">
                <div class="row row-cards-pf" style="padding-top: 20px;">
                  <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                  {% include widgets/card-pf-utilization-multiple-metrics.html chart3="chart-pf-donut-6" chart4="chart-pf-sparkline-6" chart5="chart-pf-donut-7" chart6="chart-pf-sparkline-7" chart7="chart-pf-donut-8" chart8="chart-pf-sparkline-8" %}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="card-markup-2" href="#card-markup-2">Reference Markup</a></p>
        <div class="collapse in" id="card-markup-2">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/card-pf-utilization-multiple-metrics.html chart3="chart-pf-donut-6" chart4="chart-pf-sparkline-6" chart5="chart-pf-donut-7" chart6="chart-pf-sparkline-7" chart7="chart-pf-donut-8" chart8="chart-pf-sparkline-8" %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
      </div>
      <div role="tabpanel" class="tab-pane nested" id="angular">
        <div ng-app="docsApp" ng-controller="DocsController" class="content">
          <div ng-include src="'/components/angular-patternfly/dist/docs/partials/api/patternfly.charts.directive.pfUtilizationChart.html'"></div>
        </div>
      </div>
    </div>
  </div>
</div>
