---
title: Dashboard Cards
author: dlabrecq
layout: page-tabs
url-js-extra: ['components/matchHeight/jquery.matchHeight-min.js']
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>This section provides guidance on the base elements of a card for a dashboard view.</p>
    <p>Jump to <a href="#example-overview-1">Timeframe filter in header</a> or <a href="#example-overview-2">Timeframe filter in footer</a></p>
    <h2 id="example-overview-1">Timeframe filter in header</h2>
    <div class="example">
      <div class="row">
        <div class="col-md-6">
          <div class="example-pf">
            {% include widgets/cards/dashboard-timeframe-header.html %}
          </div>
        </div>
      </div>
    </div>
    <h2 id="example-overview-2">Timeframe filter in footer</h2>
    <div class="example">
      <div class="row">
        <div class="col-md-6">
          <div class="example-pf">
            {% include widgets/cards/dashboard-timeframe-footer.html %}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Style</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <img src="{{site.baseurl}}assets/img/card1.png" alt="card1"/>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Background and Borders:</b> All cards on a dashboard should have the same background and border treatment.</li>
          <li><b>Top Accent</b> (optional): Add a top accent to a row of cards to give them visual hierarchy</li>
        </ol>
      </div>
    </div>
    <h2>Titles</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <img src="{{site.baseurl}}assets/img/Card_titleAndSubtitle.png" alt="Card_titleAndSubtitle"/>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Title</b> (optional): If the content of the card is not obvious, add a title to clarify what information is being presented.  The title is always followed by a horizontal separator.</li>
          <li><b>Subtitle</b> (optional): Add a subtitle if the card contains the same visualization for different object types.</li>
        </ol>
      </div>
    </div>
    <h2>Time Frame Filter (optional)</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <img src="{{site.baseurl}}assets/img/card_timeframe.png" alt="card_timeframe"/>
      </div>
      <div class="col-md-5 col-lg-7">
        <p>There are two options that the time frame filter may be placed:</p>
        <ol>
          <li>If there is a card title, the filter should be displayed on the right of the title panel.</li>
          <li>If there is an action panel, the filter can be displayed on the right of the action panel.</li>
        </ol>
      </div>
    </div>
    <h2>Actions Panel (optional)</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <img src="{{site.baseurl}}assets/img/card_actionspanel.png" alt="card_actionspanel"/>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Actions Panel</b> (optional): Include an actions panel, at the bottom of the card, if there is a primary action that you would like the user to quickly and easily be able to access from the card view.</li>
          <li><b>Actions Icon</b> (optional): Include an associated icon with the action button if applicable.</li>
          <li><b>Flat Actions Button</b> Within an actions panel, you should have an action, which is represented as a flat button on the left.</li>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <p>Jump to <a href="#example-code-1">Timeframe filter in header</a> or <a href="#example-code-2">Timeframe filter in footer</a></p>
        <h2 id="example-code-1">Timeframe filter in header</h2>
        <div class="example">
          <div class="row">
            <div class="col-md-6">
              <div class="example-pf">
                {% include widgets/cards/dashboard-timeframe-header.html %}
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
        <div class="collapse in" id="markup-1">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/cards/dashboard-timeframe-header.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-2">Timeframe filter in footer</h2>
        <div class="example">
          <div class="row">
            <div class="col-md-6">
              <div class="example-pf">
                {% include widgets/cards/dashboard-timeframe-footer.html %}
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
        <div class="collapse in" id="markup-2">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/cards/dashboard-timeframe-footer.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
      </div>
      <div role="tabpanel" class="tab-pane nested" id="angular">
        <div ng-app="docsApp" ng-controller="DocsController" class="content">
          <div ng-include src="'/components/angular-patternfly/dist/docs/partials/api/patternfly.card.directive.pfCard - Timeframe Filters.html'"></div>
        </div>
      </div>
    </div>
  </div>
</div>
