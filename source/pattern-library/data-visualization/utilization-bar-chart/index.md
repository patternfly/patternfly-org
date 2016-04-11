---
title: Utilization Bar Chart
author: lhinson
layout: page-tabs
url-js-extra: ['//cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.js', '//cdnjs.cloudflare.com/ajax/libs/d3/3.5.0/d3.min.js']
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>The Utilization Bar Chart depicts the percentage utilization ratio between used and available.</p>
    <h2 id="example-overview-1">Utilization Bar Chart</h2>
    <div class="row">
      <div class="col-md-5">
        <div class="example-pf">
          <div class="cards-pf">
            <div class="container-fluid container-cards-pf">
              <div class="row row-cards-pf">
                <div class="col-md-12">
                  <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                  {% include widgets/charts/utilization-bar.html chart1="bar-chart-1" %}
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
        <img src="{{site.baseurl}}assets/img/utilziationbarchart1.png" alt="utilziationbarchart1"/>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Chart Fill:</b> The fill color depends on the thresholds.
            <ul>
              <li>When no thresholds exist the indicator is blue (#0088ce).</li>
              <li>When a threshold exists and the percentage has not surpassed any thresholds, the indicator is green (#3f9c35).</li>
              <li>When the utilization percentage has surpassed the warning threshold, but not the error threshold, the indicator is orange (#ec7a08)</li>
              <li>When the utilization percentage has surpassed the error threshold, the indicator is is red (#cc0000).</li>
            </ul>
            <li><b>Background Fill:</b> The background color is grey (#d1d1d1)</li>
          </li>
          <li><b>Tooltip:</b> It is recommend that the percentage is displayed on hover.</li>
          <li><b>Warning Threshold Indicator</b> (optional):  If a warning threshold exists, that may be visually indicated on the chart. 75% is the typical default value for a warning threshold but some products may have configurable thresholds (design not currently shown, visuals are still TBD).</li>
          <li><b>Error Threshold Indicator</b> (optional): If an error threshold exists, that may be visually indicated on the chart. 90% is the typical default value for an error threshold but some products may have configurable thresholds (design not currently shown, visuals are still TBD).</li>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <h2 id="example-code-1">Utilization Bar Chart</h2>
        <div class="row">
          <div class="col-md-5">
            <div class="example-pf">
              <div class="example-pf-demo example-pf-demo-no-padding">
                <div class="cards-pf">
                  <div class="container-fluid container-cards-pf">
                    <div class="row row-cards-pf">
                      <div class="col-md-12">
                        <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                        {% include widgets/charts/utilization-bar.html chart1="donut-chart-2" %}
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
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/charts/utilization-bar.html chart1="donut-chart-2" %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
      </div>
      <div role="tabpanel" class="tab-pane nested" id="angular">
        <div ng-app="docsApp" ng-controller="DocsController" class="content">
          <div ng-include src="'/components/angular-patternfly/dist/docs/partials/api/patternfly.charts.directive.pfUtilizationBarChart.html'"></div>
        </div>
      </div>
    </div>
  </div>
</div>
