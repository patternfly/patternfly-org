<p>Jump to <a href="#example-code-1">Examples</a>, <a href="#example-code-2">With Max-Width</a> or <a href="#example-code-3">In Context</a></p>
<h2 id="example-code-1">Examples</h2>
<div class="example-pf">
  {% include widgets/communication/toast-info.html %}<br>
  {% include widgets/communication/toast-success.html %}<br>
  {% include widgets/communication/toast-warning.html %}<br>
  {% include widgets/communication/toast-danger.html %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}
{% include widgets/communication/toast-info.html %}
{% include widgets/communication/toast-success.html %}
{% include widgets/communication/toast-warning.html %}
{% include widgets/communication/toast-danger.html %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-2">With Max-Width</h2>
<div class="example-pf">
  {% include widgets/communication/toast-max-width.html %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
<div class="collapse in" id="markup-2">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/communication/toast-max-width.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-3">In Context</h2>
<p>
  <img src="{{site.baseurl}}/assets/img/example_toast2.png" alt="in-context-example"/>
</p>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-3" href="#markup-3">Reference Markup</a></p>
<div class="collapse in" id="markup-3">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/communication/toast-in-context.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
