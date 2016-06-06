---
title: Trend Card
author: dlabrecq
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>A trend card displays a trend of one or more metrics. The most common use case for this pattern is in a dashboard. For a single trend card, there are two different sizes of cards to choose from dependent on your application's needs.</p>
    <p>Jump to <a href="#example-overview-1">Small Cards</a> or <a href="#example-overview-2">Large Cards</a></p>
    <h2 id="example-overview-1">Small Cards</h2>
    <p><img src="{{site.baseurl}}assets/img/small-cards-example.png" alt="small-cards-example"/></p>
    <h2 id="example-overview-2">Large Cards</h2>
    <p><img src="{{site.baseurl}}assets/img/large-cards2.png" alt="large-cards2"/></p>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Card with a Single Trend</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <p><img src="{{site.baseurl}}assets/img/single-card-callout.png" alt="single-card-callout"/></p>
        <p><img src="{{site.baseurl}}assets/img/action-card-callout.png" alt="action-card-callout"/></p>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Title:</b> Identify a name for the trend being displayed. If the title does not require much emphasis and the trend is on the right, you may opt to place the title under the actual value versus the top left of the card.</li>
          <li><b>Actual Value or Percentage:</b> The location of the actual value or percentage should be shown. The position may vary dependent on usage. Placement options for the actual value include:
            <ul>
              <li>Above the sparkline</li>
              <li>Left of the sparkline</li>
            </ul>
          </li>
          <li><b>Total Value</b> (ƒoptional): If needed, provide total value next to the actual value to help provide context.</li>
          <li><b>Unit of Measurement:</b> The label for unit of measurement is shown after the the value.</li>
          <li><b>Sparkline:</b> See the<a href="{{ site.baseurl}}pattern-library/data-visualization/sparkline/"> Sparkline pattern</a> for more details.</li>
          <li><b>Tooltip:</b> Use a tooltip on hover to display additional information about exact points on the sparkline (e.g. values and/or percentages). A vertical line and marker helps to accentuate the hover point.</li>
          <li><b>Time Frame</b> (optional): The time frame is indicated by placing a label on one of the following areas:
            <ul>
              <li>Under the title</li>
              <li>Under the sparkline</li>
              <li>In a <a href="{{ site.baseurl}}pattern-library/dashboard/dashboard-card/#example-overview-2">time frame filter</a></li>
            </ul>
            The time frame on a card is optional since there could be a single instance of the time frame label or <a href="{{ site.baseurl}}pattern-library/dashboard/dashboard-card/#example-overview-2">time frame filter</a> that applies to all cards within a single view.
          </li>
          <li><b>Actions Panel</b> (optional): See <a href="{{ site.baseurl}}pattern-library/dashboard/dashboard-card"> actions panel</a> under the Dashboard Cards pattern for more details.</li>
        </ol>
      </div>
    </div>
    <h2>Card with Multiple Trends</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <img src="{{site.baseurl}}assets/img/multi-card-callout.png" alt="multi-card-callout"/>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Title:</b> Identify the name of the group or category of the trends being displayed. For a card with multiple trends, the title is always located at the top left.</li>
          <li><b>Time Frame:</b> The time frame is located under the title in a card with multiple trends.</li>
          <li><b>Trend Label:</b> Since there are multiple trends, each trend should be labeled.</li>
          <li><b>Actual Value:</b> The location of the actual value should be shown to the right of the sparkline.</li>
          <li><b>Total Value</b> (optional): If needed, provide total value next to the actual value to help provide context.</li>
          <li><b>Unit of Measurement:</b> The label for unit of measurement is shown after the the value.</li>
          <li><b>Percentage</b> (optional): The location of the percentage can be shown to the right of the sparkline.</li>
          <li><b>Sparkline:</b> See the<a href="{{ site.baseurl}}pattern-library/data-visualization/sparkline/"> Sparkline pattern</a> for more details.</li>
          <li><b>Tooltip:</b> Use a tooltip on hover to display additional information about exact points on the sparkline such as values or percentages. A vertical line and marker helps to accentuate the user’s hover point.</li>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html html=false %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="angular">
        <div ng-app="docsApp" ng-controller="DocsController" class="content">
          <div ng-include src="'/components/angular-patternfly/dist/docs/partials/api/patternfly.card.directive.pfCard - Trends.html'"></div>
        </div>
      </div>
    </div>
  </div>
</div>
