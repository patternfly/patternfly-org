---
title: Card View
author: gcardoso
layout: page-tabs
url-js-extra: ['components/matchHeight/jquery.matchHeight-min.js']
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>Card View organizes content into a grid of cards. Card View is useful for displaying a small to moderate amount of content in a way that is not visually overwhelming. If the pieces of content to be displayed are best identified by a graphic or other visual representation, Card View enables a user to easily visualize and compare them. It is also useful when you want to present a large number of objects at once within the same summary page.</p>
    <p>The Card View should NOT be used if:</p>
    <ul>
      <li>Users need to quickly scan a large amount of text-based content. Consider using a <a href="{{ site.baseurl }}pattern-library/content-views/table-view/">Table View</a>.</li>
      <li>You want to display more content about each object that can fit into a small tile. Consider using a <a href="{{ site.baseurl }}pattern-library/content-views/list-view/">List View</a>.</li>
    </ul>
    <p>Jump to <a href="#single-select">Single-Select Card View</a>, <a href="#multi-select">Multi-Select Card View</a> or <a href="#card-variations">Card Variation Examples</a></p>
    <h2 id="single-select">Single-Select Card View</h2>
    <div class="example-pf">
      <iframe src="{{site.baseurl}}pattern-library/content-views/card-view/card-view-single-select.html"
              width="100%" height="650px;" scrolling="no" seamless></iframe>
    </div>
    <p><a href="{{site.baseurl}}pattern-library/content-views/card-view/card-view-single-select.html" target="_blank">View full page example</a></p>
    <h2 id="multi-select">Multi-Select Card View</h2>
    <div class="example-pf">
      <iframe src="{{site.baseurl}}pattern-library/content-views/card-view/card-view-multi-select.html"
              width="100%" height="650px;" scrolling="no" seamless></iframe>
    </div>
    <p><a href="{{site.baseurl}}pattern-library/content-views/card-view/card-view-multi-select.html" target="_blank">View full page example</a></p>
    <h2 id="card-variations">Card Variation Examples</h2>
    <p>The following card variations provide some examples of how you might visualize content within a card. You are not limited to these layouts. You may need to adjust the visualizations and/or combine elements to best fit your application’s needs. Each card within a card view should have a consistent layout. Do not mix and match.</p>
    <h3>Large Card</h3>
    <p>When you have fewer cards and more space to work with, you may consider a larger card option that also shows some status and additional information.</p>
    <div class="example-pf">
      <div class="cards-pf">
        <div class="container-fluid container-cards-pf">
          <div class="row row-cards-pf">
            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
              {% include widgets/cards/object-status.html %}
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3>Small Card</h3>
    <p>If you have many cards and space is tighter, use the smaller card option.</p>
    <div class="example-pf">
      <div class="cards-pf">
        <div class="container-fluid container-cards-pf">
          <div class="row row-cards-pf">
            <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2">
              {% include widgets/cards/object-status.html %}
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3>Mini Card with status</h3>
    <p>Use when you want to display many objects within a grid layout. Any inline actions should be hidden in an actions menu placed in the upper right corner of the card. Status can be reflected through a status icon preceding object name (title) and or a single chart graphic. The bar graph is used here because of its small vertical footprint.</p>
    <div class="example-pf">
      <div class="cards-pf">
        <div class="container-fluid container-cards-pf">
          <div class="row row-cards-pf">
            <div class="col-xs-12 col-sm-3 col-md-2">
              {% include widgets/cards/status-inline-actions-xs.html %}
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3>Mini Card with text</h3>
    <p>Alternatively include a small amount of text based content within the card with links. Inline actions accessible from the actions menu.</p>
    <div class="example-pf">
      <div class="cards-pf">
        <div class="container-fluid container-cards-pf">
          <div class="row row-cards-pf">
            <div class="col-xs-12 col-sm-3 col-md-2">
              {% include widgets/cards/summary-inline-actions-xs.html %}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Description</h2>
    <p>
      <img src="{{site.baseurl}}assets/img/card-view-callout.png" alt="Card View">
    </p>
    <ol>
      <li><b>Toolbar</b>: The <a href="{{ site.baseurl }}pattern-library/forms-and-controls/toolbar/">Toolbar</a> pattern may include filter, sort, actions, find and change view type.  If the user can add new objects that will appear in the view, and Add action should be included here.</li>
      <li><b>Card</b>: The card is a container for displaying content about an object.  At a minimum each card should be uniquely identified with the name of the object that it represents.
        <ul>
          <li>Each Card should have the same layout:
            <ul>
              <li>When including titles, Make the title bold rather than appending a colon ( : )</li>
              <li>Links may be displayed within a card</li>
            </ul>
          </li>
          <li>When the viewport size is decreased:
            <ul>
              <li>The number of cards in each row may decrease</li>
            </ul>
          </li>
          <li>Use tooltips as necessary.</li>
        </ul>
      </li>
      <li><b>Selection</b>:
        <ul>
          <li>When only single-select is supported, a user can drill down on a card by clicking on it.</li>
          <li>If multi-select is supported, a checkbox will be displayed when the user hovers over a card. When it is clicked, that card is selected which is indicated by the check mark in the checkbox as well as a blue outline on the card. The selected checkbox will be shown as long as the card remains selected. Actions in the Toolbar apply to all selected cards.</li>
          <li>For multi-select on mobile devices, checkboxes should be displayed at all times, and should use the device default checkbox rather than the patternfly checkbox.</li>
        </ul>
      </li>
      <li><b>Card Hover</b>: A visual indication is shown when the user hovers over a card.</li>
      <li><b>Inline Actions</b>: Inline actions should be included if the user needs to be able to quickly perform an action on a single card. Very large numbers of actions should be placed in the Actions section of the Toolbar rather than on the card. See <a href="{{ site.baseurl }}pattern-library/content-views/card-view/">Card Variation Examples</a> for some ways that you may represent inline actions on cards.</li>
    </ol>
    <h2>Additional Notes about Behavior</h2>
    <ul>
      <li><b>Empty State:</b> If no cards exist to be displayed, display an Empty State page. See the <a href="{{site.baseurl}}pattern-library/communication/empty-state/">Empty State</a> pattern for more details.</li>
      <li><b>Vertical Scroll:</b> Use a vertical scrollbar as needed. A horizontal scrollbar should NOT be used. Instead, the page containing the Card View should be responsive.</li>
    </ul>
  </div>
  
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <p>Jump to <a href="#example-code-1">Single-Select Card View</a>, <a href="#example-code-2">Multi-Select Card View</a>, <a href="#example-code-3">Large Card</a>, <a href="#example-code-4">Small Card</a>, <a href="#example-code-5">Mini Card with status</a>, <a href="#example-code-6">Mini Card with text</a></p>
        <h2 id="example-code-1">Single-Select Card View</h2>
        <div class="example-pf">
          <iframe src="{{site.baseurl}}pattern-library/content-views/card-view/card-view-single-select.html"
                width="100%" height="650px;" scrolling="no" seamless></iframe>
        </div>
        <p><a href="{{site.baseurl}}pattern-library/content-views/card-view/card-view-single-select.html" target="_blank">View full page example</a></p>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
        <div class="collapse in" id="markup-1">
          <pre class="prettyprint">{% capture markup_include %}
<body class="cards-pf">
{% include widgets/layouts/card-view-single-select.html %}
</body>{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-2">Multi-Select Card View</h2>
        <div class="example-pf">
          <iframe src="{{site.baseurl}}pattern-library/content-views/card-view/card-view-multi-select.html"
                width="100%" height="650px;" scrolling="no" seamless></iframe>
        </div>
        <p><a href="{{site.baseurl}}pattern-library/content-views/card-view/card-view-multi-select.html" target="_blank">View full page example</a></p>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
        <div class="collapse in" id="markup-2">
          <pre class="prettyprint">{% capture markup_include %}
<body class="cards-pf">
{% include widgets/layouts/card-view-multi-select.html %}
</body>{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-3">Large Card</h2>
        <div class="example-pf">
          <div class="example-pf-demo example-pf-demo-no-padding">
            <div class="cards-pf">
              <div class="container-fluid container-cards-pf">
                <div class="row row-cards-pf">
                  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    {% include widgets/cards/object-status.html %}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-3" href="#markup-3">Reference Markup</a></p>
        <div class="collapse in" id="markup-3">
          <pre class="prettyprint">{% capture markup_include %}
<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
  {% include widgets/cards/object-status.html %}
</div>{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-4">Small Card</h2>
        <div class="example-pf">
          <div class="example-pf-demo example-pf-demo-no-padding">
            <div class="cards-pf">
              <div class="container-fluid container-cards-pf">
                <div class="row row-cards-pf">
                  <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2">
                    {% include widgets/cards/object-status.html %}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-4" href="#markup-4">Reference Markup</a></p>
        <div class="collapse in" id="markup-4">
          <pre class="prettyprint">{% capture markup_include %}
<div class="col-xs-12 col-sm-4 col-md-3 col-lg-2">
  {% include widgets/cards/object-status.html %}
</div>{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-5">Mini Card with status</h2>
        <div class="example-pf">
          <div class="example-pf-demo example-pf-demo-no-padding">
            <div class="cards-pf">
              <div class="container-fluid container-cards-pf">
                <div class="row row-cards-pf">
                  <div class="col-xs-12 col-sm-3 col-md-2">
                    {% include widgets/cards/status-inline-actions-xs.html %}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-5" href="#markup-5">Reference Markup</a></p>
        <div class="collapse in" id="markup-5">
          <pre class="prettyprint">{% capture markup_include %}
<div class="col-xs-12 col-sm-3 col-md-2">
  {% include widgets/cards/status-inline-actions-xs.html %}
</div>{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-6">Mini Card with text</h2>
        <div class="example-pf">
          <div class="example-pf-demo example-pf-demo-no-padding">
            <div class="cards-pf">
              <div class="container-fluid container-cards-pf">
                <div class="row row-cards-pf">
                  <div class="col-xs-12 col-sm-3 col-md-2">
                    {% include widgets/cards/summary-inline-actions-xs.html %}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-6" href="#markup-6">Reference Markup</a></p>
        <div class="collapse in" id="markup-6">
          <pre class="prettyprint">{% capture markup_include %}
<div class="col-xs-12 col-sm-3 col-md-2">
  {% include widgets/cards/summary-inline-actions-xs.html %}
</div>{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
      </div>
      <div role="tabpanel" class="tab-pane nested" id="angular">
        <div ng-app="docsApp" ng-controller="DocsController" class="content">
          <div ng-include src="'/components/angular-patternfly/dist/docs/partials/api/patternfly.views.directive.pfCardView.html'"></div>
        </div>
      </div>
    </div>
  </div>
</div>