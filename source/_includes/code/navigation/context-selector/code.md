<h2 id="example-code-1">Example</h2>
<div class="example-pf">
    <iframe src="{{ site.baseurl}}/pattern-library/navigation/context-selector/context-selector-vertical-nav.html"
      width="100%" height="650px;" scrolling="no" seamless></iframe>
</div>
<p>
  <a href="https://rawgit.com/patternfly/patternfly/master-dist/dist/tests/context-selector-vertical-nav.html" target="_blank">View full page example</a>
</p>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/framework/context-selector.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>