---
title: Aggregate Status Card
author: dlabrecq
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>The aggregated status card shows a total number of objects and an aggregated status for those objects. The most common use case for this pattern is seen in a dashboard view to illustrate the total count and the status of objects in an environment. The mini card alternate can be used in the case when there is less space available for the status card as well as when there is less information to show in the card.</p>
    <p>Jump to <a href="#example-overview-1">Regular Card</a> or <a href="#example-overview-2">Mini Card Alternate</a></p>
    <h2 id="example-overview-1">Regular Card</h2>
    <div class="example-bg">
      <div class="row">
        <div class="example-pf col-md-9">
          <div class="cards-pf">
            <div class="container-fluid container-cards-pf">
              <div class="row-cards-pf">
                <div class="col-xs-12 col-sm-6 col-md-4" style="padding-left: 0px;">
                  {% include widgets/cards/aggregate-status-ipsum.html %}
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4">
                  {% include widgets/cards/aggregate-status-amet.html %}
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4" style="padding-right: 0px;">
                  {% include widgets/cards/aggregate-status-adipiscing.html %}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 id="example-overview-2">Mini Card Alternate</h2>
    <div class="example-bg">
      <div class="row">
        <div class="example-pf col-md-9">
          <div class="cards-pf">
            <div class="container-fluid container-cards-pf">
              <div class="row-cards-pf">
                <div class="col-xs-12 col-sm-6 col-md-4" style="padding-left: 0px;">
                  {% include widgets/cards/aggregate-status-ipsum-mini.html %}
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4">
                  {% include widgets/cards/aggregate-status-amet-mini.html %}
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4" style="padding-right: 0px;">
                  {% include widgets/cards/aggregate-status-adipiscing-mini.html %}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Header Area</h2>
    <div class="row">
      <div class="col-md-5 col-lg-4">
        <p><img src="{{site.baseurl}}assets/img/AggregateStatus_header-callout.png" alt="AggregateStatus_header-callout"/></p>
        <p><img src="{{site.baseurl}}assets/img/single_mini_agg_status-header-callout.png" alt="single_mini_agg_status-header-callout"/></p>
      </div>
      <div class="col-md-7 col-lg-8">
        <ol>
          <li><b>Top Accent</b> (optional): If the aggregate status card is located at the top of a dashboard view, you may opt to add the the blue stripe to the top of the card. If the card is located somewhere other than a dashboard, there is no blue stripe.</li>
          <li><b>Object Icon</b> (optional): An object icon can be used before the count and object name. Be consistent; either use the icon on all the cards throughout your application, or don't use it in any. Do not mix and match by applying icons to some cards but not others. Use icons thoughtfully and sparingly. Ensure that the icon’s symbol metaphor provides valuable meaning. Note: In the case of the mini card alternate, it is strongly recommended to use this object icon.</li>
          <li><b>Total Number:</b> This is a number that represents a count for the total number of objects in the environment.</li>
          <li><b>Object Type Label:</b> Include a label that states the object type.</li>
        </ol>
      </div>
    </div>
    <h2>Content Area</h2>
    <div class="row">
      <div class="col-md-5 col-lg-4">
        <p><img src="{{site.baseurl}}assets/img/aggstatus_callout.png" alt="aggstatus_callout"/></p>
        <p><img src="{{site.baseurl}}assets/img/single_mini_agg_status-number-callout.png" alt="single_mini_agg_status-number-callout"/></p>
      </div>
      <div class="col-md-7 col-lg-8">
        <ol>
          <li><b>Status Icon(s):</b> This represents the status of the objects in the card. If everything is OK, one status icon for OK should be shown. Otherwise, multiple status icons can be shown to represent each status. Note: In the case of the mini card alternate, it is recommended to limit this to one status icon due to space restrictions.</li>
          <li><b>Number Count:</b> This shows the count associated with the icon. In general, a number next to the OK icon is redundant since the total count is already shown in the header area. Therefore, an OK status should be visually represented by an icon only. Alternatively, a card, not located in the dashboard view, may require the number count to be displayed with the OK icon. Note: In the case of the mini card alternate, it is recommended to limit this to one number due to space restrictions.</li>
          <li><b>Action Icon</b> (optional): If no objects exist, you may want to display the create or add icon, whichever is the primary action. Note: Currently, only one action icon is supported in this design.</li>
          <li><b>Tooltips:</b> Use tooltips as necessary. It is recommended that tooltips are used for the status and action icons.</li>
          <li><b>Links:</b> Blue text with an underline that appears on hover reinforces that elements are interactive.</li>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <p>Jump to <a href="#example-code-1">Regular Card</a> or <a href="#example-code-2">Mini Card Alternate</a></p>
        <h2 id="example-code-1">Regular Card</h2>
        <div class="example-bg">
          <div class="row">
            <div class="example-pf col-md-9">
              <div class="cards-pf">
                <div class="container-fluid container-cards-pf">
                  <div class="row-cards-pf">
                    <div class="col-xs-12 col-sm-6 col-md-4" style="padding-left: 0px;">
                      {% include widgets/cards/aggregate-status-ipsum.html %}
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                      {% include widgets/cards/aggregate-status-amet.html %}
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4" style="padding-right: 0px;">
                      {% include widgets/cards/aggregate-status-adipiscing.html %}
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
<body class="cards-pf">
  ...
  <div class="container-fluid container-cards-pf">
    <div class="row row-cards-pf">
      <div class="col-xs-6 col-sm-4 col-md-4">
        {% include widgets/cards/aggregate-status-ipsum.html %}
      </div>
      <div class="col-xs-6 col-sm-4 col-md-4">
        {% include widgets/cards/aggregate-status-amet.html %}
      </div>
      <div class="col-xs-6 col-sm-4 col-md-4">
        {% include widgets/cards/aggregate-status-adipiscing.html %}
      </div>
    </div><!-- /row -->
  </div><!-- /container -->
  <script src="/components/matchHeight/jquery.matchHeight-min.js"></script>
  <script>
    $(function() {
      // matchHeight the contents of each .card-pf and then the .card-pf itself
      $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
      $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
      $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer").matchHeight();
      $(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();
      // initialize tooltips
      $('[data-toggle="tooltip"]').tooltip();
    });
  </script>
</body>
          {% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-2">Mini Card Alternate</h2>
        <div class="example-bg">
          <div class="row">
            <div class="example-pf col-md-9">
              <div class="cards-pf">
                <div class="container-fluid container-cards-pf">
                  <div class="row-cards-pf">
                    <div class="col-xs-12 col-sm-6 col-md-4" style="padding-left: 0px;">
                      {% include widgets/cards/aggregate-status-ipsum-mini.html %}
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4">
                      {% include widgets/cards/aggregate-status-amet-mini.html %}
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-4" style="padding-right: 0px;">
                      {% include widgets/cards/aggregate-status-adipiscing-mini.html %}
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
<body class="cards-pf">
  ...
  <div class="container-fluid container-cards-pf">
    <div class="row row-cards-pf">
      <div class="col-xs-6 col-sm-4 col-md-4">
        {% include widgets/cards/aggregate-status-ipsum-mini.html %}
      </div>
      <div class="col-xs-6 col-sm-4 col-md-4">                  
        {% include widgets/cards/aggregate-status-amet-mini.html %}
      </div>
      <div class="col-xs-6 col-sm-4 col-md-4">
        {% include widgets/cards/aggregate-status-adipiscing-mini.html %}
      </div>
    </div><!-- /row -->
  </div><!-- /container -->
  <script src="/components/matchHeight/jquery.matchHeight-min.js"></script>
  <script>
    $(function() {
      // matchHeight the contents of each .card-pf and then the .card-pf itself
      $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
      $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
      $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer").matchHeight();
      $(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();
      // initialize tooltips
      $('[data-toggle="tooltip"]').tooltip();
    });
  </script>
</body>
          {% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
      </div>
      <div role="tabpanel" class="tab-pane nested" id="angular">
        <div ng-app="docsApp" ng-controller="DocsController" class="content">
          <div ng-include src="'/components/angular-patternfly/dist/docs/partials/api/patternfly.card.directive.pfAggregateStatusCard.html'"></div>
        </div>
      </div>
    </div>
  </div>
</div>
