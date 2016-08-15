---
title: Horizontal Navigation
author: gcardoso
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>It is recommended to use horizontal navigation when you want to provide access to global navigation of an application at the top of every page. This horizontal navigation pattern will support up to three levels of navigation.</p>
    <p>The top level (primary) navigation should always be exposed.  Secondary and tertiary levels can either be persistent or hidden within drop-down menus.  The latter provides less visibility to lower-level categories but saves vertical screen space.</p>
    <p>As a rule of thumb, the horizontal navigation is the preferred choice over <a href="{{site.baseurl}}pattern-library/navigation/vertical-navigation/">vertical navigation</a> when:</p>
    <ul>
      <li>There are a small number of fixed categories.</li>
      <li>You want to provide the best visibility to primary categories by placing them immediately below the page header area.</li>
    </ul>
    <p>Consider using <a href="{{site.baseurl}}pattern-library/navigation/vertical-navigation/">vertical navigation</a> if you need a solution that can easily scale for a large amount of menu items and easily adapt to small screen sizes. Horizontal menus can also be made responsive but it usually requires a transformation from horizontal to vertical. Since vertical menus are already in this format, the transition from desktop to mobile is less disorienting.</p>
    <p>Jump to <a href="#example-overview-1">Standard Horizontal Navigation</a>, or <a href="#example-overview-2">Navbar Variations</a></p>
    <h2 id="example-overview-2">Masthead Design</h2>
    <p>For horizontal navigation, we recommend the masthead design be small in height to reduce vertical real estate, accommodating for the navigation.  The logo area is in the left corner and contains the application product name image file, in the form of a sized SVG graphic.  However, if additional rebranding capabilities are desired, there is an option for a taller masthead which will include a product logo.</p>
    <h3>Option 1</h3>
    <p>
      <img src="{{site.baseurl}}assets/img/Masthead_Horizontal.png" alt="Masthead Horizontal - Option 1" width="1400"/>
    </p>
    <h3>Option 2</h3>
    <p>
      <img src="{{site.baseurl}}assets/img/Masthead_HorizontalVariation.png" alt="Masthead Horizontal - Option 2" width="1400"/>
    </p>
    <h2 id="example-overview-1">Standard Horizontal Navigation</h2>
    <div class="example-pf">
      <iframe src="{{ site.baseurl}}pattern-library/navigation/horizontal-navigation/horizontal-navigation.html"
              width="100%" height="650px;" scrolling="no" seamless></iframe>
    </div>
    <p><a href="{{ site.baseurl}}pattern-library/navigation/horizontal-navigation/horizontal-navigation.html" target="_blank">View full page example</a></p>
    <h2 id="example-overview-2">Navbar Variations</h2>
    <h3>Single-Level Menu Bar</h3>
    <div class="example-pf example-navbar">
      {% include widgets/navigation/horizontal-primary-nav-bar.html %}
    </div>
    <h3>Two-Level Menu Bar</h3>
    <div class="example-pf example-navbar" style="height: 140px;">
      {% include widgets/navigation/horizontal-persistent-secondary-tertiary.html %}
    </div>
    <h3>Menu Bar with Drop-Downs</h3>
    <!-- Giving menus a little room so they don't drop off the page. -->
    <div class="example-pf example-navbar" style="margin-bottom: 150px;">
      {% include widgets/navigation/horizontal-multi-level.html %}
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
  <h2>Default Horizontal Masthead Design</h2>
    <p>
      <img src="{{site.baseurl}}assets/img/Masthead_Horizontal_Annotations.png" alt="Masthead_Horizontal_Annotations" width="1400"/>
    </p>
    <p>The Default Horizontal Masthead Design is the recommended masthead for apps utilizing horizontal navigation.</p>
    <ol>
      <li><strong>Logo Area</strong>: The logo area contains the application product name image file, in the form of a sized SVG graphic</li>
    </ol>
<h2>Horizontal Masthead Design Variation</h2>
    <p>
      <img src="{{site.baseurl}}assets/img/Masthead_HorizontalVariation_Annotations.png" alt="Masthead_HorizontalVariation_Annotations" width="1400"/>
    </p>
    <p>If your app requires additional branding within the Masthead, use the Horizontal Masthead variation. This allows the use of an icon within the Masthead.</p>
    <ol>
      <li><strong>Additional Branding</strong>: If using an icon, it must be the product icon</li>
      <li><strong>Logo Area</strong>: The logo area contains the application product name image file, in the form of a sized SVG graphic</li>
    </ol>

    <h2>Single-Level Menu Bar</h2>
    <p>
      <img src="{{site.baseurl}}assets/img/horizontal-nav-single.png" alt="Horizontal Navbar with Single-Level" width="880"/>
    </p>
    <p>The Single-Level Menu Bar is the default navbar, all other options are added to this basic pattern.</p>
    <ol>
      <li><strong>Menu Item - Selected</strong>: The current selection will be highlighted to indicate the current page.  There will be a current selection at all times.  When an application is opened, the first (left-most) item will be selected by default.</li>
      <li><strong>Menu Item - On-Hover</strong>: Hover state provides feedback that menu items are active.</li>
    </ol>
    <h2>Two-Level Menu Bar</h2>
    <p>
      <img src="{{site.baseurl}}assets/img/horizontal-nav-two.png" alt="Horizontal Navbar with Two-Level" width="880"/>
    </p>
    <p>When a second level of persistent navigation is needed, add a second tier of links.</p>
    <ol>
      <li><strong>Secondary Menu Item Selected</strong>: Show the selected state of both the primary and secondary menu items to tell the user where they are in the hierarchy.  By default the first (left-most) item in both menus is selected.</li>
      <li><strong>Secondary Menu Item On-Hover</strong>: Hover state provides feedback that menu items are active.</li>
      <li><strong>Primary Menu Item On Hover</strong>: When the user hovers over a new primary menu item, the contents of the secondary menu will update to display secondary menu options associated with this item.</li>
    </ol>
    <h2>Menu Bar with Drop-Downs</h2>
    <p>
      <img src="{{site.baseurl}}assets/img/horizontal-nav-dropdown.png" alt="Horizontal Navbar with Drop-Down" width="880"/>
    </p>
    <p>Add a drop-down menu to a single menu bar to expose a vertical list of sub-categories that the user can select from.  Note that when drop-down menus are used, all categories are not required to have secondary navigation.</p>
    <ol>
      <li><strong>Primary Menu Item</strong>: Any primary item that supports a secondary level of navigation will add a down-caret icon  to indicate that a drop-down menu exists.  The primary item will display its selected state when any secondary page within that branch is selected.  This will provide the user feedback about which primary section they are working in.  When an application is initially opened, the first secondary page within the first section will be opened, by default.</li>
      <li><strong>Drop-Down Menu</strong>: Single-clicking a primary item opens the drop down. Clicking anywhere outside of the menu will dismiss it.</li>
      <li><strong>Secondary Menu Item</strong>: Secondary items have hover and selected states.  Clicking an item navigates to a new page and dismisses the menu. If a third level of navigation is to be exposed, a right-facing caret icon will be displayed on the right of the menu item.  Hovering over this item will expose a fly-out menu to the right.</li>
      <li><strong>Fly-Out Menu</strong>: Drop-down menus may also expose an additional level of menus, sometimes called a flyout menu to expose an additional level of the information hierarchy. Flyout menu should appear to the right.</li>
    </ol>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html angular=false %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <p>Jump to <a href="#example-code-1">Standard Horizontal Navigation</a>, <a href="#example-code-2">Single-Level Menu Bar</a>, <a href="#example-code-3">Two-Level Menu Bar</a>, or <a href="#example-code-4">Menu Bar with Drop-Downs</a></p>
        <h2 id="example-code-1">Standard Horizontal Navigation</h2>
        <div class="example-pf">
          <iframe src="{{ site.baseurl}}pattern-library/navigation/horizontal-navigation/horizontal-navigation.html"
                  width="100%" height="650px;" scrolling="no" seamless></iframe>
        </div>
        <p><a href="{{ site.baseurl}}pattern-library/navigation/horizontal-navigation/horizontal-navigation.html" target="_blank">View full page example</a></p>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
        <div class="collapse in" id="markup-1">
          <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
<script src="components/matchHeight/jquery.matchHeight-min.js"></script>
{% include widgets/navigation/horizontal-primary-nav-bar.html %}
<div class="container-fluid container-cards-pf">
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
        <h2 id="example-code-2">Single-Level Menu Bar</h2>
        <div class="example-pf example-navbar" style="padding-bottom: 20px;">
          {% include widgets/navigation/horizontal-primary-nav-bar.html %}
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
        <div class="collapse in" id="markup-2">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/navigation/horizontal-primary-nav-bar.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-3">Two-Level Menu Bar</h2>
        <div class="example-pf example-navbar" style="height: 140px;">
          {% include widgets/navigation/horizontal-persistent-secondary-tertiary.html %}
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-3" href="#markup-3">Reference Markup</a></p>
        <div class="collapse in" id="markup-3">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/navigation/horizontal-persistent-secondary-tertiary.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <h2 id="example-code-4">Menu Bar with Drop-Downs</h2>
        <div class="example-pf example-navbar" style="padding-bottom: 20px;">
          {% include widgets/navigation/horizontal-multi-level.html %}
        </div>
        <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-4" href="#markup-4">Reference Markup</a></p>
        <div class="collapse in" id="markup-4">
          <pre class="prettyprint">{% capture markup_include %}{% include widgets/navigation/horizontal-multi-level.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
        </div>
        <!-- Giving menus a little room so they don't drop off the page. -->
        <div class="collapse in" id="markup-4" style="margin-bottom: 150px;"></div>
      </div>
    </div>
  </div>
</div>
