<h2 id="example-code-1">Multi-Field</h2>
{% include widgets/forms/modal-overlay.html %}
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/forms/modal-overlay.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>