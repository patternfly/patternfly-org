---
title: Heat Map
author: lhinson
layout: page-tabs
url-js-extra: ['//cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.min.js', '//cdnjs.cloudflare.com/ajax/libs/d3/3.5.0/d3.min.js']
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>A heat map is a visualization of objects as blocks in a grid. The blocks are colored to represent an attribute of the object, such as utilization rate. Color enables the user to quickly access high level information for each object.</p>
    <p>The most common use case for a heat map are:</p>
    <ul>
      <li>Users need to quickly assess the utilization rate of objects in a data set. Colored blocks, indicating utilization percentages, provide at a glance status which aids in troubleshooting.</li>
      <li>Users need to scan the status of each object in a data set.</li>
    </ul>
    <h2 id="example-overview-1">Example</h2>
    <div class="row">
      <div class="col-md-10">
        <div class="example-pf">
          <div class="cards-pf">
            <div class="container-fluid container-cards-pf">
              <div class="row row-cards-pf">
                <div class="col-md-12">
                  <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                  <img src="{{site.baseurl}}assets/img/Screen-Shot-2016-03-24-at-4.48.37-PM.png" alt="heat-map-callout1"/>
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
      <div class="col-md-5 col-lg-5">
        <img src="{{site.baseurl}}assets/img/Screen-Shot-2016-03-24-at-4.52.28-PM.png" alt="heat-map-callout2"/>
      </div>
      <div class="col-md-6 col-lg-7">
        <ol>
          <li><b>Block:</b><p></p>
            <ul>
              <li>Each block is a square that represents an object in the a data set.</li>
              <li>All blocks should be the same size. The size of blocks are based on the number of blocks in the heat map.</li>
              <li>Blocks are ordered by the attribute status. The object with the highest percentage will be placed in the top left corner of the map. The remaining object blocks are presented in a descending order by percentage (from top to bottom and left to right).</li>
              <li>The user should be able to click on a block in the heat map to get more detailed information about the object. </li>
              <li>Choose a fill color that best reflects the attribute being represented. Colors should be based on the <a href="/styles/color-palette/">PatternFly Color Palette</a>. Status thresholds can be represented by the following colors:
                <ul>
                  <li>Critical range: Red (#CC0000)</li>
                  <li>Warning range: Orange (#EC7A08)</li>
                  <li>Trending to Warning: Yellow (#F9D67A)</li>
                  <li>No Issues: Light Primary Blue (#BEE1F4)</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><b>Tooltip:</b> Tooltips should include the name of the object as well as a summary of the data represented, for example utilization or object status.</li>
          <li><b>Legend:</b> It is recommended to include a legend to define the colors on the chart. Multiple heat maps may reference a single legend, provided they share the same attribute values. The legend may be located left aligned and underneath the chart or left aligned and to the right of the chart.</li>
          <ul>
            <li><b>Interactive Legend</b> (optional): Clicking on a series in the legend should toggle the visibility of the series in the chart. Hovering over a series in the legend will highlight the blocks associated with that attribute.</li>
          </ul>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html html=false %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="angular">
        <div ng-app="docsApp" ng-controller="DocsController" class="content">
          <div ng-include src="'/components/angular-patternfly/dist/docs/partials/api/patternfly.charts.directive.pfHeatMap.html'"></div>
        </div>
      </div>
    </div>
  </div>
</div>
