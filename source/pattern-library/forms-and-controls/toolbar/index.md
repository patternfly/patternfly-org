---
title: Toolbar
author: gcardoso
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>The Toolbar pattern sits above a content view such as a <a href="{{ site.baseurl }}pattern-library/content-views/list-view/">List View</a>, <a href="{{ site.baseurl }}pattern-library/content-views/card-view/">Card View</a> or <a href="{{ site.baseurl }}pattern-library/content-views/table-view/">Table View</a>. The Toolbar provides a framework for a number of content control patterns including, but not limited to:</p>
    <ul>
      <li>Filter</li>
      <li>Sort</li>
      <li>Actions</li>
      <li>Find</li>
      <li>Change View</li>
    </ul>
    <p>These controls may be used either together or individually, and may be substituted for other components. The Toolbar pattern should be used any time content control patterns are needed for a content view.</p>
    <h2 id="example-overview-1">Example</h2>
    <div class="example-pf">
      {% include widgets/layouts/toolbar.html %}
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Description</h2>
    <p>
      <img src="{{site.baseurl}}assets/img/toolbar-design.jpg" alt="Toolbar"/>
    </p>
    <ol>
      <li><b>Filter</b>: Enables a user to quickly reduce the amount on screen at one time by applying stackable filters to a content view.</li>
      <li><b>Component Divider</b>: Visually and spatially separates the toolbar’s component patterns. No divider is needed between left-aligned and right-aligned sets of patterns because they are separated by a significant space.</li>
      <li><b>Sort</b>: Helps users make sense of content by ordering it in a logical fashion based on a single attribute.</li>
      <li><b>Actions</b>: Contains actions for one or more pieces of content in the current view.</li>
      <li><b>Find</b>: Locates a specific item or items by automatically scrolling or paging to all occurrences of an entered query. Unlike filtering, it does not remove content from the view.</li>
      <li><b>Change View</b>: Allows users to utilize the advantages of different content representations by switching between ways of visualizing the same dataset.</li>
      <li><b>Active Filters</b>: A Component of Simple Filter that contains a list of all currently active filters as well as the Clear All Filters action. Not displayed if stackable filters are disabled.</li>
      <li><b>Content and Results Count</b>: Shows the number of content items that satisfy all currently applied filters, as well as the total number of items and the type of item. If no filters are applied, only the total number of items and the item type are displayed (e.g. 40 Virtual Machines). May be displayed to the left of right-aligned content if stackable filters are disabled.</li>
    </ol>
    <h2>Layouts</h2>
    <p>The Toolbar can take different shapes depending on which content controls are included.</p>
    <p>
      <img src="{{site.baseurl}}assets/img/toolbar-layout1.png" width="900" alt="Toolbar"/>
    </p>
    <p>
      <img src="{{site.baseurl}}assets/img/toolbar-layout2.png" width="900" alt="Toolbar"/>
    </p>
    <p>The content controls should be arranged according to the above templates. If one or more component patterns are not needed, the remaining patterns should align to the edge of the toolbar rather than leaving an empty space for the missing pattern.</p>
    <h3>Without Simple Filter</h3>
    <p>
      <img src="{{site.baseurl}}assets/img/toolbar-layout3.png" width="1024" alt="Toolbar"/>
    </p>
    <h3>Without Find and Change View</h3>
    <p>
      <img src="{{site.baseurl}}assets/img/toolbar-layout4.png" width="1024" alt="Toolbar"/>
    </p>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html angular=false %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <h2 id="example-code-1">Example</h2>
        <div class="example-pf">
          {% include widgets/layouts/toolbar.html %}
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
        <div class="collapse in" id="markup-1">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/layouts/toolbar.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
      </div>
    </div>
  </div>
</div>