<h2 id="example-code-1">Multi-Line</h2>
{% include widgets/communication/about-modal.html aboutModalId="about-modal-2" %}
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">
{% capture markup_include %}{% include widgets/communication/about-modal.html aboutModalId="about-modal" %}{% endcapture %}{{ markup_include | xml_escape }}
  </pre>
</div>
