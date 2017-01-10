<p>Jump to <a href="#example-code-1">Within a Modal</a>, <a href="#example-code-2">Within a Modal with Error</a>, <a href="#example-code-3">Within a page</a> or <a href="#example-code-4">Within a Page with Error</a></p>
<h2 id="example-code-1">Within a Modal</h2>
<div class="example-pf">
  {% include widgets/forms/input-validation-modal.html id-default="modalInput" id-disabled="modalInputDisabled" id-error="modalInputError" has-error=false %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}
{% include widgets/forms/input-validation-modal.html id-default="modalInput" id-disabled="modalInputDisabled" id-error="modalInputError" has-error=false %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-2">Within a Modal with Error</h2>
<div class="example-pf">
  {% include widgets/forms/input-validation-modal.html id-default="modalInput" id-disabled="modalInputDisabled" id-error="modalInputError" has-error=true %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
<div class="collapse in" id="markup-2">
  <pre class="prettyprint">{% capture markup_include %}
{% include widgets/forms/input-validation-modal.html id-default="modalInput" id-disabled="modalInputDisabled" id-error="modalInputError" has-error=true %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-3">Within a Page</h2>
<div class="example-pf">
  {% include widgets/forms/input-validation-form.html id-default="exampleInput" id-disabled="exampleInputDisabled" id-error="exampleInputError" has-error=false %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-3" href="#markup-3">Reference Markup</a></p>
<div class="collapse in" id="markup-3">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/forms/input-validation-form.html id-default="exampleInput" id-disabled="exampleInputDisabled" id-error="exampleInputError" has-error=false %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-4">Within a Page with Error</h2>
<div class="example-pf">
  {% include widgets/forms/input-validation-form.html id-default="exampleInput" id-disabled="exampleInputDisabled" id-error="exampleInputError" has-error=true %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-4" href="#markup-4">Reference Markup</a></p>
<div class="collapse in" id="markup-4">
  <pre class="prettyprint">{% capture markup_include %}{% include widgets/forms/input-validation-form.html id-default="exampleInput" id-disabled="exampleInputDisabled" id-error="exampleInputError" has-error=true %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
