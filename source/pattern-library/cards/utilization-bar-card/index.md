---
title: Utilization Bar Card
author: dlabrecq
layout: page-tabs
url-js-extra: ['components/matchHeight/jquery.matchHeight-min.js']
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>A Utilization Bar Card displays the utilization for metrics using the <a href="{{site.baseurl}}pattern-library/data-visualization/utilization-bar-chart">Utilization Bar Chart</a>.  The most common use case for this pattern is seen in a dashboard.</p>
    <p>Jump to <a href="#example-overview-1">Top Left Description and Top Right Label</a> or <a href="#example-overview-2">Left Description and Right Label</a></p>
    <h2 id="example-overview-1">Top Left Description and Top Right Label</h2>
    <div class="row">
      <div class="col-md-7 col-center">
        <div class="example-pf">
          <div class="cards-pf">
            <div class="container-fluid container-cards-pf">
              <div class="row row-cards-pf">
                <div class="col-md-12">
                  <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                  {% include widgets/cards/utilization-bar-top-labels.html  %}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 id="example-overview-2">Left Description and Right Label</h2>
    <div class="row">
      <div class="col-md-7 col-center">
        <div class="example-pf">
          <div class="cards-pf">
            <div class="container-fluid container-cards-pf">
              <div class="row row-cards-pf">
                <div class="col-md-12">
                  <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                  {% include widgets/cards/utilization-bar-side-labels.html  %}
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
        <img src="{{site.baseurl}}assets/img/utilization-bar-card3.png" alt="utilization-bar-card3"/>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Title:</b> Define a title for the card. See <a href="{{ site.baseurl}}pattern-library/cards/dashboard-card/">Dashboard Cards</a> for more information.</li>
          <li><b>Utilization Bar Chart:</b> See <a href="{{ site.baseurl}}pattern-library/data-visualization/utilization-bar-chart/">Utilization Bar Chart</a> for more information about the chart’s appearance and behavior.</li>
          <li><b>Used Value:</b> Show a value for amount used.</li>
          <li><b>Total Value:</b> In addition to the used value, it is recommended to show the total value. This can be shown with the used value (i.e x of y used) or you may opt to provide this additional information in a tooltip.</li>
          <li><b>Unit of Measurement:</b> The label for unit of measurement is shown after the the value.</li>
          <li><b>Tooltip:</b> It is recommend that the percentage is displayed in a tooltip.</li>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <p>Jump to <a href="#example-code-1">Top Left Description and Top Right Label</a> or <a href="#example-code-2">Left Description and Right Label</a></p>
        <h2 id="example-code-1">Top Left Description and Top Right Label</h2>
        <div class="row">
          <div class="col-md-7 col-center">
            <div class="example-pf">
              <div class="example-pf-demo example-pf-demo-no-padding">
                <div class="cards-pf">
                  <div class="container-fluid container-cards-pf">
                    <div class="row row-cards-pf">
                      <div class="col-md-12">
                        <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                        {% include widgets/cards/utilization-bar-top-labels.html  %}
                      </div>
                    </div>
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
{% include widgets/cards/utilization-bar-top-labels.html %}
          {% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-2">Left Description and Right Label</h2>
        <div class="row">
          <div class="col-md-7 col-center">
            <div class="example-pf">
              <div class="example-pf-demo example-pf-demo-no-padding">
                <div class="cards-pf">
                  <div class="container-fluid container-cards-pf">
                    <div class="row row-cards-pf">
                      <div class="col-md-12">
                        <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                        {% include widgets/cards/utilization-bar-side-labels.html  %}
                      </div>
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
{% include widgets/cards/utilization-bar-side-labels.html %}
          {% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
      </div>
      <div role="tabpanel" class="tab-pane nested" id="angular">
        <div ng-app="docsApp" ng-controller="DocsController" class="content">
          <div ng-include src="'/components/angular-patternfly/dist/docs/partials/api/patternfly.card.directive.pfCard - Utilization.html'"></div>
        </div>
      </div>
    </div>
  </div>
</div>
