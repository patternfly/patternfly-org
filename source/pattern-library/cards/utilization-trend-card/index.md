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
    <div class="example-bg">
      <div class="row">
        <div class="example-pf col-md-5">
          <div class="cards-pf">
            <div class="container-fluid container-cards-pf">
              <div class="row-cards-pf">
                {% include widgets/cards/utilization-trend-single-metric.html id1="chart-pf-donut-1" id2="chart-pf-sparkline-1" %}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 id="example-overview-2">Card with Multiple Metrics</h2>
    <div class="example-bg">
      <div class="row">
        <div class="example-pf">
          <div class="cards-pf">
            <div class="container-fluid container-cards-pf">
              <div class="row-cards-pf">
                {% include widgets/cards/utilization-trend-multiple-metrics.html id3="chart-pf-donut-2" id4="chart-pf-sparkline-2" id5="chart-pf-donut-3" id6="chart-pf-sparkline-3" id7="chart-pf-donut-4" id8="chart-pf-sparkline-4" %}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Card with a Single Metric</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <p>
          <img src="{{site.baseurl}}assets/img/singe-metric-utilization-card2.png" alt="singe-metric-utilization-card2" />
        </p>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Metric Title:</b> Display the metric name.</li>
          <li><b>Current Value:</b> Display the current value. This could be available, which is the PatternFly default, or used.</li>
          <li><b>Label:</b> The label for the value is left aligned and listed above the total value.</li>
          <li><b>Total Value:</b> The total value is left aligned and listed under the label.</li>
          <li><b>Unit of Measurement:</b> The label for unit of measurement is shown after the total value.</li>
          <li><b>Content Separator:</b> A horizontal line visually separates the content in the card. The content separator is located below the values and above the donut chart. </li>
          <li><b>Donut Chart:</b> See the <a href="{{ site.baseurl}}pattern-library/data-visualization/donut-chart/">Donut Chart Pattern</a> for more details.</li>
          <li><b>Sparkline:</b> See the <a href="{{ site.baseurl}}pattern-library/data-visualization/sparkline/">Sparkline Pattern</a> for more details.</li>
          <li><b>Time Frame:</b> The time frame is indicated under the sparkline by small text and is left aligned.</li>
        </ol>
      </div>
    </div>
    <h2>Card with Multiple Metrics</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <p>
          <img src="{{site.baseurl}}assets/img/multi-metric-utilization-card-callout1.png" alt="multi-metric-utilization-card-callout"/>
        </p>
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
          <li><b>Donut Chart:</b> See the <a href="{{ site.baseurl}}pattern-library/data-visualization/donut-chart/">Donut Chart Pattern</a> for more details.</li>
          <li><b>Sparkline:</b> See the <a href="{{ site.baseurl}}pattern-library/data-visualization/sparkline/">Sparkline Pattern</a> for more details.</li>
          <li><b>Time Frame:</b> The time frame is indicated under the sparkline by small text and is left aligned.</li>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <p>Jump to <a href="#example-code-1">Card with a Single Metric</a> or <a href="#example-code-2">Card with Multiple Metrics</a></p>
        <h2 id="example-code-1">Card with a Single Metric</h2>
        <div class="example-bg">
          <div class="row">
            <div class="example-pf col-md-5">
              <div class="cards-pf">
                <div class="container-fluid container-cards-pf">
                  <div class="row-cards-pf">
                    {% include widgets/cards/utilization-trend-single-metric.html id1="chart-pf-donut-5" id2="chart-pf-sparkline-5" %}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
        <div class="collapse in" id="markup-1">
          <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
<body class="cards-pf">
  ...
  <div class="container-fluid container-cards-pf">
    <div class="row row-cards-pf">
      <div class="col-xs-6 col-sm-4 col-md-4">
        {% include widgets/cards/utilization-trend-single-metric.html id1="chart-pf-donut-5" chart2="chart-pf-sparkline-5" %}
      </div>
    </div><!-- /row -->
  </div><!-- /container -->
</body>
          {% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-2">Card with Multiple Metrics</h2>
        <div class="example-bg">
          <div class="row">
            <div class="example-pf">
              <div class="cards-pf">
                <div class="container-fluid container-cards-pf">
                  <div class="row-cards-pf">
                    <div class="col-xs-12">
                      {% include widgets/cards/utilization-trend-multiple-metrics.html id3="chart-pf-donut-6" id4="chart-pf-sparkline-6" id5="chart-pf-donut-7" id6="chart-pf-sparkline-7" id7="chart-pf-donut-8" id8="chart-pf-sparkline-8" %}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
        <div class="collapse in" id="markup-2">
          <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>

<body class="cards-pf">
  ...
  <div class="container-fluid container-cards-pf">
    <div class="row row-cards-pf">
      <div class="col-xs-12">
        {% include widgets/cards/utilization-trend-multiple-metrics.html id3="chart-pf-donut-6" id4="chart-pf-sparkline-6" id5="chart-pf-donut-7" id6="chart-pf-sparkline-7" id7="chart-pf-donut-8" id8="chart-pf-sparkline-8" %}
      </div>
    </div><!-- /row -->
  </div><!-- /container -->
</body>
          {% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
      </div>
      <div role="tabpanel" class="tab-pane nested" id="angular">
        <div ng-app="docsApp" ng-controller="DocsController" class="content">
          <div ng-include src="'/components/angular-patternfly/dist/docs/partials/api/patternfly.charts.directive.pfUtilizationTrendChart.html'"></div>
        </div>
      </div>
    </div>
  </div>
</div>
