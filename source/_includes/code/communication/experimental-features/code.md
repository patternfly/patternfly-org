<p>Jump to <a href="#example-code-1">Entry Screen</a> or <a href="#example-code-2">Identifier</a></p>
<h2 id="example-code-1">Experimental Features Entry Screen</h2>
<div class="example-pf">
  {% include widgets/communication/experimental-features-page.html %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/communication/experimental-features-page.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-2">Experimental Feature Identifier on a Component</h2>
<div class="example-pf">
  {% include widgets/communication/experimental-features-component.html %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/communication/experimental-features-component.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
