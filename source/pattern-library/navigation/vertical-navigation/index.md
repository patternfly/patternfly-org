---
title: Vertical Navigation
author: dlabrecq
layout: page-tabs
submenus: true
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
    <p>The vertical navigation pattern supports up to three levels of navigation (Primary, Secondary and Tertiary).  Each navigation item does not have to have the same number of levels of navigation. To illustrate this, look at the example below:</p>
    <ul>
      <li>The "Dashboard" category has no secondary navigation items</li>
      <li>The "Ipsum" category has secondary level navigation items</li>
      <li>The "Amet" category may have some secondary items which have tertiary navigation items</li>
    </ul>
    <p>Jump to <a href="#example-overview-1">Primary Nav with Icons</a> or <a href="#example-overview-2">Primary Nav without Icons</a></p>
    <h2 id="example-overview-1">Masthead Design</h2>
    <p>Since vertical navigation does not compromise vertical real estate, the masthead is taller than the masthead for products that use horizontal navigation. The taller design allows for a product icon and the option of utilizing a burger bar menu.</p>
    <p>
      <img src="{{site.baseurl}}assets/img/Masthead_Vertical.png" alt="Masthead Vertical" width="1400"/>
    </p>
    <h2 id="example-overview-1">With Primary Menu Icons</h2>
    <div class="example-pf">
      <iframe src="{{ site.baseurl}}pattern-library/navigation/vertical-navigation/vertical-navigation.html"
              width="100%" height="650px;" scrolling="no" seamless></iframe> 
    </div>
    <p><a href="{{ site.baseurl}}pattern-library/navigation/vertical-navigation/vertical-navigation.html" target="_blank">View full page example</a></p>
    <h2 id="example-overview-2">Without Primary Menu Icons</h2>
    <div class="example-pf">
      <iframe src="{{ site.baseurl}}pattern-library/navigation/vertical-navigation/vertical-navigation-without-icons.html"
              width="100%" height="650px;" scrolling="no" seamless></iframe>
    </div>
    <p><a href="{{ site.baseurl}}pattern-library/navigation/vertical-navigation/vertical-navigation-without-icons.html" target="_blank">View full page example</a></p>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
  <h2>Masthead Design</h2>
    <p>
      <img src="{{site.baseurl}}assets/img/Masthead_Vertical_Annotations.png" alt="Masthead_Vertical_Annotations" width="1400"/>
    </p>
    <ol>
      <li><b>Branding</b>: Product icon can also be used in addition to the burger bar OR as a standalone icon.</li>
      <li><b>Burger Bar</b>: If necessary, burger bar icon can be used within the masthead</li>
      <li><b>Logo Area</b>: The logo area contains the application product name image file, in the form of a sized SVG graphic</li>
      </ol>
    
    <h2>Primary Navigation</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <p>
          <img src="{{site.baseurl}}assets/img/navigation-primary-callout.png" alt="nav-callout-1"/>
        </p>
      </div>
      <div class="col-md-5 col-lg-7">
        <ol>
          <li><b>Primary Navigation Icons</b>: (optional): When the primary areas of the UI are easily represented by icons, we recommend using icons in primary navigation.</li>
          <li><b>Selection:</b> A selected primary navigation item is highlighted and includes a vertical blue line decorator.</li>
          <li><b>Hover:</b> On hover, the primary navigation item is highlighted.</li>
        </ol>
      </div>
    </div>
   
    <h2>Primary with Secondary Navigation</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <p>
          <img src="{{site.baseurl}}assets/img/navigation-with-secondary-callout.png" alt="nav-callout-2"/>
        </p>
      </div>
      <div class="col-md-5 col-lg-7">
        <p>Secondary navigation is non-persistent, appearing on hover.  The secondary navigation is shown in a second column that opens to the right.</p>
        <ol>
          <li><b>Label:</b> The label at the top of the secondary menu mirrors the selected primary category to reinforce the user’s current location.</li>
          <li><b>Selection:</b> A selected item in the secondary navigation is highlighted.</li>
          <li><b>Hover:</b> On hover, the secondary navigation is highlighted and underlined.</li>
        </ol>
      </div>
    </div>
   
    <h2>Primary with Tertiary Navigation</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
        <p>
          <img src="{{site.baseurl}}assets/img/navigation-with-tertiary-callout.png" alt="nav-callout-3"/>
        </p>
      </div>
      <div class="col-md-5 col-lg-7">
        <p>Tertiary navigation is non-persistent and only appears on hover.  The tertiary navigation is shown as a third column that opens to the right.</p>
        <ol>
          <li><b>Pin Menu</b> (optional):</li>  
          <ul>
            <li>If the secondary navigation is pinned, the navigation is collapsed to a single column and the secondary navigation is the only menu visible. </li>
            <li>If the tertiary navigation is pinned, the navigation is collapsed to a single column and the tertiary navigation is the only menu visible.</li>
          </ul> 
          <li><b>Label:</b></li>
          <ul>
          <li>The label at the top of the secondary navigation mirrors the selected primary category to reinforce the user’s current location.</li>
          <li>The label at the top of the tertiary navigation mirrors the selected secondary category to reinforce the user’s current location.</li>
          </ul>
          <li><b>Selection:</b> A selected item in the tertiary navigation is highlighted.</li>
          <li><b>Hover:</b> On hover, the tertiary navigation is highlighted and underlined.</li>
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
          <img src="{{site.baseurl}}assets/img/nav-responsive-callout1.png" alt="nav-responsive-callout-1"/>
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
          <img src="{{site.baseurl}}assets/img/nav-responsive-callout2.png" alt="nav-responsive-callout-2"/>
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
          <iframe src="{{ site.baseurl}}pattern-library/navigation/vertical-navigation/vertical-navigation.html"
                  width="100%" height="650px;" scrolling="no" seamless></iframe>
        </div>
        <p><a href="{{ site.baseurl}}pattern-library/navigation/vertical-navigation/vertical-navigation.html" target="_blank">View full page example</a></p>
        <div class="row">
          <div class="col-md-12">
            <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
            <div class="collapse in" id="markup-1">
              <pre class="prettyprint">{% capture markup_include %}
<html class="layout-pf layout-pf-fixed">
...
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
<script src="components/matchHeight/jquery.matchHeight-min.js"></script>
{% include widgets/navigation/vertical-navigation.html %}
</html>
              {% endcapture %}{{ markup_include | xml_escape }}</pre>
            </div>
          </div>
        </div>
        <h2 id="example-code-2">Without Primary Menu Icons</h2>
        <div class="example-pf">
          <iframe src="{{ site.baseurl}}pattern-library/navigation/vertical-navigation/vertical-navigation-without-icons.html"
                  width="100%" height="650px;" scrolling="no" seamless></iframe>
        </div>
        <p><a href="{{ site.baseurl}}pattern-library/navigation/vertical-navigation/vertical-navigation-without-icons.html" target="_blank">View full page example</a></p>
        <div class="row">
          <div class="col-md-12">
            <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
            <div class="collapse in" id="markup-2">
              <pre class="prettyprint">{% capture markup_include %}
<html class="layout-pf layout-pf-fixed">
...
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
<script src="components/matchHeight/jquery.matchHeight-min.js"></script>
{% include widgets/navigation/vertical-navigation.html %}
</html>
              {% endcapture %}{{ markup_include | xml_escape }}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
