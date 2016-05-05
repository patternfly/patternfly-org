---
title: Navigation
author: dlabrecq
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>It is recommended to use vertical navigation when your application requires global navigation that is displayed
    on the left. While vertical navigation menus generally consume more space than their horizontal counterparts, they
    have become more popular as desktop monitors move to wide-screen formats. Vertical navigations have several advantages:</p>
    <ul>
      <li>They are scalable. The number of menu items is not constrained by the viewport width.  </li>
      <li>Vertical menus more readily adapt to small screen sizes.  While horizontal menus can also be made responsive, it usually requires a transformation from horizontal to vertical.  Since vertical menus are already in this format, the transition from desktop to mobile is less disorienting.</li>
      <li>Vertical navigation supports common left to right flow. Navigation categories are easily differentiated from other information that may exist in the header area of the application.</li>
    </ul>
    <p>Jump to <a href="#example-overview-1">With Primary Menu Icons</a> or <a href="#example-overview-2">Without Primary Menu Icons</a></p>
    <h2 id="example-overview-1">With Primary Menu Icons</h2>
    <div class="example-pf">
      <iframe src="{{ site.baseurl}}pattern-library/navigation/vertical-navigation/navigation.html"
              width="100%" height="650px;" scrolling="no" seamless></iframe>
    </div>
    <p><a href="{{ site.baseurl}}pattern-library/navigation/vertical-navigation/navigation.html" target="_blank">View full page example</a></p>
    <h2 id="example-overview-2">Without Primary Menu Icons</h2>
    <div class="example-pf">
      <iframe src="{{ site.baseurl}}pattern-library/navigation/vertical-navigation/navigation-without-icons.html"
              width="100%" height="650px;" scrolling="no" seamless></iframe>
    </div>
    <p><a href="{{ site.baseurl}}pattern-library/navigation/vertical-navigation/navigation-without-icons.html" target="_blank">View full page example</a></p>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Primary Navigation with Persistent Secondary</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <p>
          <img src="{{site.baseurl}}assets/img/left-nav-callout-1.png" alt="left-nav-callout-1"/>
        </p>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Icons</b> (optional)<b>:</b> Icons may be used with text labels to speed recognition, and allow menu to be collapsed into reduced width state with only icons and tooltips.</li>
          <li><b>Menu Item:</b>
          <ol type="a">
            <li>Hover state provides feedback that this item is active.</li>
            <li>Selected items are highlighted.</li>
          </ol>
          </li><li><b>Caret Icon:</b> Indicates that there is another level of navigation for this menu item.</li>
        </ol>
      </div>
    </div>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <p>
          <img src="{{site.baseurl}}assets/img/left-nav-callout-2.png" alt="left-nav-callout-2"/>
        </p>
      </div>
      <div class="col-md-5 col-lg-7">
        <p>The secondary navigation is shown in a second column that opens to the right.</p>
        <ol>
          <li><b>Collapse:</b> The user may manually collapse the navigation back to one column.</li>
          <li><b>Primary Category Label:</b> The label at the top of the secondary menu mirrors the selected primary category to reinforce the user’s current location.</li>
          <li><b>Menu Section Labels</b> (optional): Used to visually show content into groupings for secondary menus with many items.</li>
          <li><b>Menu item:</b>
            <ol type="a">
              <li>Selected item in secondary menu is highlighted.</li>
              <li>Active items are highlighted on hover.</li>
            </ol>
          </li>
          <li><b>Status icons</b> (optional)<b>:</b> You may include status icons inline for any secondary menu item.</li>
          <li><b>Total Count Badge</b> (optional): If the category links to a view of objects, you may include a total number of objects as a badge.</li>
        </ol>
      </div>
    </div>
    <h2>Collapsed Primary Navigation with Icons</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <p>
          <img src="{{site.baseurl}}assets/img/left-nav-callout-3.png" alt="left-nav-callout-3"/>
        </p>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Collapsed State:</b> In this state, the primary navigation is collapsed to a thin column with only icons showing.</li>
          <li><b>Expand Primary:</b> Clicking on this arrow icon will expand the primary navigation.</li>
          <li><b>Tooltips:</b> Hover state displays a tooltip with full label name.</li>
        </ol>
      </div>
    </div>
    <h2>Collapsed Primary Navigation without Icons</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <p>
          <img src="{{site.baseurl}}assets/img/left-nav-callout-4b.png" alt="left-nav-callout-4"/>
        </p>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Collapsed State:</b> If primary menu does not include icons, first column is entirely replaced.</li>
          <li><b>Back Link:</b> Back link allows navigation back to the primary menu.</li>
        </ol>
      </div>
    </div>
    <h2>Responsive States</h2>
    <div class="row">
      <div class="col-md-12">
        <ul>
          <li><b>Small Screen (From 768 to 1200px).</b>  In all cases, the secondary navigation, if one exists, will replace the primary menu in a one column layout (same interactions as full-width without icons).</li>
          <li><b>Mobile (less than 768 px).</b>  Navigation is hidden under “hamburger” icon.</li>
        </ul>
      </div>
    </div>
    <h2>Primary Navigation (Responsive State)</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <p>
          <img src="{{site.baseurl}}assets/img/left-nav-callout-51.png" alt="left-nav-callout-5"/>
        </p>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Menu Drawer:</b> When open, the menu appears as a drawer sliding out from the left edge of the viewport.  This will overlay content area.</li>
        </ol>
      </div>
    </div>
    <h2>Secondary Navigation (Responsive State)</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <p>
          <img src="{{site.baseurl}}assets/img/left-nav-callout-6.png" alt="left-nav-callout-6"/>
        </p>
      </div>
      <div class="col-md-5 col-lg-7">
        <p>If you have a secondary level navigation then it will replace the primary navigation menu.</p>
        <ol>
          <li><b>Back Link:</b> Clicking the back link restores the primary-level menu.</li>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html angular=false %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <p>Jump to <a href="#example-code-1">With Primary Menu Icons</a> or <a href="#example-code-2">Without Primary Menu Icons</a></p>
        <h2 id="example-code-1">With Primary Menu Icons</h2>
        <div class="example-pf">
          <iframe src="{{ site.baseurl}}pattern-library/navigation/vertical-navigation/navigation.html"
                  width="100%" height="650px;" scrolling="no" seamless></iframe>
        </div>
        <p><a href="{{ site.baseurl}}pattern-library/navigation/vertical-navigation/navigation.html" target="_blank">View full page example</a></p>
        <div class="row">
          <div class="col-md-12">
            <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
            <div class="collapse in" id="markup-1">
              <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
<script src="components/matchHeight/jquery.matchHeight-min.js"></script>
{% include widgets/navigation/vertical-nav-with-secondary.html %}
<div class="container-fluid container-cards-pf container-pf-nav-pf-vertical container-pf-nav-pf-vertical-with-secondary">
{% include widgets/layouts/cards-alt.html %}
</div>
<script>
  $(document).ready(function() {
    // matchHeight the contents of each .card-pf and then the .card-pf itself
    $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
    $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
    $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer").matchHeight();
    $(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();
    // initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();
    // Initialize the vertical navigation
    $().setupVerticalNavigation(true);
  });
</script>
              {% endcapture %}{{ markup_include | xml_escape }}</pre>
            </div>
          </div>
        </div>
        <h2 id="example-code-2">Without Primary Menu Icons</h2>
        <div class="example-pf">
          <iframe src="{{ site.baseurl}}pattern-library/navigation/vertical-navigation/navigation-without-icons.html"
                  width="100%" height="650px;" scrolling="no" seamless></iframe>
        </div>
        <p><a href="{{ site.baseurl}}pattern-library/navigation/vertical-navigation/navigation-without-icons.html" target="_blank">View full page example</a></p>
        <div class="row">
          <div class="col-md-12">
            <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
            <div class="collapse in" id="markup-2">
              <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
<script src="components/matchHeight/jquery.matchHeight-min.js"></script>
{% include widgets/navigation/vertical-nav-with-secondary.html %}
<div class="container-fluid container-cards-pf container-pf-nav-pf-vertical container-pf-nav-pf-vertical-with-secondary hidden-icons-pf">
{% include widgets/layouts/cards-alt.html %}
</div>
<script>
  $(document).ready(function() {
    // matchHeight the contents of each .card-pf and then the .card-pf itself
    $(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
    $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
    $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer").matchHeight();
    $(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();
    // initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();
    // Initialize the vertical navigation
    $().setupVerticalNavigation(true);
  });
</script>
              {% endcapture %}{{ markup_include | xml_escape }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
