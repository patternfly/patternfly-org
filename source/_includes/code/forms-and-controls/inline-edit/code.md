<h2 id="example-code-1">Examples</h2>
<div class="example-pf">
  {% include widgets/forms/inline-edit-for-form.html %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
<pre class="prettyprint">{% capture markup_include %}
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js"></script>
<script src="components/bootstrap-datepicker/dist/js/bootstrap-datepicker.js"></script>
<script src="components/patternfly-bootstrap-combobox/js/bootstrap-combobox.js"></script>
<script src="components/bootstrap-select/dist/js/bootstrap-select.js"></script>

{% include widgets/forms/inline-edit-for-form.html %}
{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>