<p>Jump to <a href="#example-code-1">Standard Horizontal Navigation</a>, <a href="#example-code-2">Single-Level Menu Bar</a>, <a href="#example-code-3">Two-Level Menu Bar</a>, or <a href="#example-code-4">Menu Bar with Drop-Downs</a></p>
<h2 id="example-code-1">Standard Horizontal Navigation</h2>
<div class="example-pf">
  <iframe src="{{ site.baseurl}}/pattern-library/navigation/horizontal-navigation/horizontal-navigation.html"
          width="100%" height="650px;" scrolling="no" seamless></iframe>
</div>
<p><a href="{{ site.baseurl}}/pattern-library/navigation/horizontal-navigation/horizontal-navigation.html" target="_blank">View full page example</a></p>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
<script src="components/jquery-match-height/dist/jquery.matchHeight-min.js"></script>
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
<div class="example-pf example-navbar">
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
<div class="example-pf example-navbar">
  {% include widgets/navigation/horizontal-multi-level.html %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-4" href="#markup-4">Reference Markup</a></p>
<div class="collapse in" id="markup-4">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/navigation/horizontal-multi-level.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<!-- Giving menus a little room so they don't drop off the page. -->
<div class="collapse in" id="markup-4" style="margin-bottom: 150px;"></div>
