---
title: Area Chart
author: dlabrecq
layout: page-tabs-no-design
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
  <!--
    <p>TODO: Add Area chart description</p>
    -->
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
