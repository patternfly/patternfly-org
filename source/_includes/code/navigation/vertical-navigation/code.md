<p>Jump to <a href="#example-code-1">With Primary Menu Icons</a> or <a href="#example-code-2">Without Primary Menu Icons</a></p>
<h2 id="example-code-1">With Primary Menu Icons</h2>
<div class="example-pf">
  <iframe src="{{ site.baseurl}}/pattern-library/navigation/vertical-navigation/vertical-navigation.html"
          width="100%" height="650px;" scrolling="no" seamless></iframe>
</div>
<p><a href="{{ site.baseurl}}/pattern-library/navigation/vertical-navigation/vertical-navigation.html" target="_blank">View full page example</a></p>
<div class="row">
  <div class="col-md-12">
    <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
    <div class="collapse in" id="markup-1">
      <pre class="prettyprint">{% capture markup_include %}
<html class="layout-pf layout-pf-fixed">
...
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
<script src="components/jquery-match-height/dist/jquery.matchHeight-min.js"></script>
{% include widgets/navigation/vertical-navigation.html %}
</html>
      {% endcapture %}{{ markup_include | xml_escape }}</pre>
    </div>
  </div>
</div>
<h2 id="example-code-2">Without Primary Menu Icons</h2>
<div class="example-pf">
  <iframe src="{{ site.baseurl}}/pattern-library/navigation/vertical-navigation/vertical-navigation-without-icons.html"
          width="100%" height="650px;" scrolling="no" seamless></iframe>
</div>
<p><a href="{{ site.baseurl}}/pattern-library/navigation/vertical-navigation/vertical-navigation-without-icons.html" target="_blank">View full page example</a></p>
<div class="row">
  <div class="col-md-12">
    <p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
    <div class="collapse in" id="markup-2">
      <pre class="prettyprint">{% capture markup_include %}
<html class="layout-pf layout-pf-fixed">
...
<script src="components/c3/c3.min.js"></script>
<script src="components/d3/d3.min.js"></script>
<script src="components/jquery-match-height/dist/jquery.matchHeight-min.js"></script>
{% include widgets/navigation/vertical-navigation.html %}
</html>
      {% endcapture %}{{ markup_include | xml_escape }}</pre>
    </div>
  </div>
</div>
