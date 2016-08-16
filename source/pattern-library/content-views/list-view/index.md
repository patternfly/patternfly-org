---
title: List View
author: gcardoso
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>A List View displays data in rows. Each row displays the same set of attributes, although not necessarily displayed in columns, and the attributes may wrap. The List View omits column headers and other visual noise, making it a cleaner visualization than a data table.</p>
    <p>Jump to <a href="#standard">Standard List View</a>, <a href="#expanding-rows">List View with Expanding Rows</a> or <a href="#row-variations">Row Variation Examples</a>.</p>
    <h2 id="standard">Standard List View</h2>

    <div class="example-pf">
      <iframe src="{{site.baseurl}}pattern-library/content-views/list-view/list-view.html"
              width="100%" height="650px;" scrolling="no" seamless></iframe>
    </div>
    <p><a href="{{site.baseurl}}pattern-library/content-views/list-view/list-view.html" target="_blank">View full page example</a></p>
    <h2 id="expanding-rows">List View with Expanding Rows</h2>
    <p>Use a List View with expanding rows when you want to display details in place without requiring drill-down to a new page.  This is useful when you want to allow users to view details of an object without reloading the page or when the detail information is small and does not require its own page. Simple expansion and compound expansion are two variants of this pattern.</p>
    <h3>Simple Expansion</h3>
    <p>Simple expansion supports a single expansion state to expose more detail for a selected row.</p>
    <p><img src="{{site.baseurl}}assets/img/list-view-simple-expansion2.png" alt="List View with Simple Expansion"></p>
    <h3>Compound Expansion</h3>
    <p>Compound expansion supports multiple expansion panels to examine multiple attributes of the selected row.</p>
    <p><img src="{{site.baseurl}}assets/img/list-view-compound-expansion-example.png" alt="List View with Compound Expansion"></p>
    <h2 id="row-variations">Row Variation Examples</h2>
    <p>The following row variations provide some examples of how you might visualize content within a row. You are not limited to these layouts. You may need to adjust the visualizations to best fit your application’s needs. Each row within a list view should have a consistent layout. Do not mix and match.</p>
    <div class="example-pf">
      <div class="cards-pf">
        <div class="container-fluid container-cards-pf">
          <div class="row row-cards-pf">
            <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
            {% include widgets/list-view/list-view-default.html %}
            {% include widgets/list-view/list-view-variation-1.html %}
            {% include widgets/list-view/list-view-variation-2.html %}
            {% include widgets/list-view/list-view-variation-3.html %}
            {% include widgets/list-view/list-view-variation-4.html %}
            {% include widgets/list-view/list-view-variation-5.html %}
            {% include widgets/list-view/list-view-variation-6.html %}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Standard List View</h2>
    <p>
      <img src="{{site.baseurl}}assets/img/live-view-callout.png" alt="Standard List View">
    </p>
    <ol>
      <li><b>Data Toolbar:</b> The Data Toolbar pattern may include filter, sort, actions, find and change view type.</li>
      <li><b>Row:</b>
        <ul>
          <li>If drill down behavior is supported, clicking on an item will link to the appropriate page.</li>
          <li>Each item in List View should have the same layout
            <ul>
              <li>When including titles, Make the title <b>bold</b> rather than appending a colon ( : )</li>
              <li>Links may be displayed within an item</li>
            </ul>
          </li>
          <li>When the viewport size is decreased:
            <ul>
              <li>Content should wrap, displaying multiple rows of data</li>
              <li>Content could be eliminated</li>
            </ul>
          </li>
        </ul>
      </li>
      <li><b>Multi-Selection via Checkboxes</b> (optional)<b>:</b> If multi-selection is supported, checkboxes appear  on the left.  Actions in the Data Toolbar apply to the selected items.</li>
      <li><b>Item Hover:</b> A hover state  should be shown visually when a user hovers over an item.</li>
      <li><b>Inline Actions:</b> Inline actions should be included if the user needs to be able to quickly perform an action on a single item.</li>
    </ol>
    <h2 id="simple-expansion-description">List View with Simple Expansion</h2>
    <p>
      <img src="{{site.baseurl}}assets/img/list-view-simple-expansion-callout.png" alt="List View with Simple Expansion">
    </p>
    <ol>
      <li><b>Icon:</b> Placing the caret at the front of the row signifies that this row is expandable.  The caret icon points to the right when it is closed and down when it is expanded.</li>
      <li><b>Interaction</b>
        <ul>
          <li>Hovering over a row highlights it.  Single clicking anywhere in the row expands the row.  </li>
          <li>If the list supports both expansion and drill-down to details, a button or link must be added to the row to support the drill-down action.</li>
        </ul>
      </li>
      <li><b>Expansion Panel:</b> When the row is expanded, a panel is inserted between the bottom of the row and the top of the next row.  All other content is pushed down the page.  The panel should be sized to accommodate the content.  Content can be anything that is required to convey details of a selected object.  However, we do not recommend placing tables of log lists of items inside the expansion panel.  This could result in nested scrolling (i.e. the master list and the detailed content require separate scroll bars). </li>
      <li><b>Close/Collapse:</b> Clicking the Close icon will collapse the expansion panel and return the list to its original (collapsed) state.  Alternatively, clicking anywhere on the row again will have the same effect.</li>
    </ol>
    <h2 id="compound-expansion-description">List View with Compound Expansion</h2>
    <p>
      <img src="{{site.baseurl}}assets/img/list-view-compound-expansion-callout.png" alt="List View with Compound Expansion">
    </p>
    <ol>
      <li><b>Icon:</b> When the list supports compound expansion, the caret is placed in front of each attribute that is expandable.</li>
      <li><b>Expandable Attribute:</b>
        <ul>
          <li>Hovering over an expandable attribute highlights it.  Note that in this case there is no action that applies to single clicking on the entire row.  The user must explicitly click on the element they want to expand.</li>
          <li>Clicking on any expandable attribute opens the expansion panels with details for the selected attribute, only.  The caret changes direction to point down, and the attribute remains highlighted.</li>
          <li>Hovering over another expandable attribute will highlight it.  Clicking will close the current expansion panel and expand this attribute by opening its row expansion.   This action is exactly equivalent to closing the first panel (by clicking close) and expanding the second panel.</li>
        </ul>
      </li>
      <li><b>Close/Collapse:</b> Click the Close icon to close/collapse the expansion panel.</li>
    </ol>
    <h2>Additional Notes about Behavior</h2>
    <ul>
      <li><b>Empty State:</b> If no items exist, display an Empty State page.  See the <a href="{{site.baseurl}}pattern-library/communication/empty-state/">Empty State</a> pattern for more details.</li>
      <li><b>Vertical Scroll:</b> Use a vertical scrollbar as needed. A horizontal scrollbar should NOT be used.  Instead, the page containing the List View should be responsive.</li>
    </ul>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html %}
    {% include nav-tabs-code.html angular=false %}
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <p>Jump to <a href="#example-code-1">Standard List View</a>, <a href="#example-code-2">Default Row</a>, <a href="#example-code-3">Row Variation #1</a>, <a href="#example-code-4">Row Variation #2</a>, <a href="#example-code-5">Row Variation #3</a>, <a href="#example-code-6">Row Variation #4</a>, <a href="#example-code-7">Row Variation #5</a> or <a href="#example-code-8">Row Variation #6</a>.</p>
        <h2 id="example-code-1">Standard List View</h2>
        <div class="example-pf">
          <iframe src="{{site.baseurl}}pattern-library/content-views/list-view/list-view.html"
                  width="100%" height="650px;" scrolling="no" seamless></iframe>
        </div>
        <p><a href="{{site.baseurl}}pattern-library/content-views/list-view/list-view.html" target="_blank">View full page example</a></p>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
        <div class="collapse in" id="markup-1">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-page.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-2">Default Row</h2>
        <div class="example-pf">
          <div class="example-pf-demo example-pf-demo-no-padding">
            <div class="cards-pf">
              <div class="container-fluid container-cards-pf">
                <div class="row row-cards-pf">
                  {% include widgets/list-view/list-view-default.html %}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
        <div class="collapse in" id="markup-2">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-default.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-3">Row Variation #1</h2>
        <div class="example-pf">
          <div class="example-pf-demo example-pf-demo-no-padding">
            <div class="cards-pf">
              <div class="container-fluid container-cards-pf">
                <div class="row row-cards-pf">
                  <!-- Need to be fixed. It is not displaying the c3 charts. -->
                  {% include widgets/list-view/list-view-variation-1.html %} 
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-3" href="#markup-3">Reference Markup</a></p>
        <div class="collapse in" id="markup-3">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-variation-1.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-4">Row Variation #2</h2>
        <div class="example-pf">
          <div class="example-pf-demo example-pf-demo-no-padding">
            <div class="cards-pf">
              <div class="container-fluid container-cards-pf">
                <div class="row row-cards-pf">
                  {% include widgets/list-view/list-view-variation-2.html %}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-4" href="#markup-4">Reference Markup</a></p>
        <div class="collapse in" id="markup-4">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-variation-2.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-5">Row Variation #3</h2>
        <div class="example-pf">
          <div class="example-pf-demo example-pf-demo-no-padding">
            <div class="cards-pf">
              <div class="container-fluid container-cards-pf">
                <div class="row row-cards-pf">
                  {% include widgets/list-view/list-view-variation-3.html %}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-5" href="#markup-5">Reference Markup</a></p>
        <div class="collapse in" id="markup-5">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-variation-3.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-6">Row Variation #4</h2>
        <div class="example-pf">
          <div class="example-pf-demo example-pf-demo-no-padding">
            <div class="cards-pf">
              <div class="container-fluid container-cards-pf">
                <div class="row row-cards-pf">
                  {% include widgets/list-view/list-view-variation-4.html %}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-6" href="#markup-6">Reference Markup</a></p>
        <div class="collapse in" id="markup-6">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-variation-4.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-7">Row Variation #5</h2>
        <div class="example-pf">
          <div class="example-pf-demo example-pf-demo-no-padding">
            <div class="cards-pf">
              <div class="container-fluid container-cards-pf">
                <div class="row row-cards-pf">
                  {% include widgets/list-view/list-view-variation-5.html %}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-7" href="#markup-7">Reference Markup</a></p>
        <div class="collapse in" id="markup-7">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-variation-5.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-8">Row Variation #6</h2>
        <div class="example-pf">
          <div class="example-pf-demo example-pf-demo-no-padding">
            <div class="cards-pf">
              <div class="container-fluid container-cards-pf">
                <div class="row row-cards-pf">
                  {% include widgets/list-view/list-view-variation-6.html %}
                </div>
              </div>
            </div>
          </div>
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-8" href="#markup-8">Reference Markup</a></p>
        <div class="collapse in" id="markup-8">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-variation-6.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
      </div>
      <div role="tabpanel" class="tab-pane nested" id="angular">
        <div ng-app="docsApp" ng-controller="DocsController" class="content">
          <div ng-include src="'/components/angular-patternfly/dist/docs/partials/api/patternfly.views.directive.pfListView.html'"></div>
        </div>
      </div>
    </div>
  </div>
</div>