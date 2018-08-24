<h2 id="example-code-1">Examples</h2>
<div class="example-pf">
  {% include widgets/forms/filter.html %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/forms/filter.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>