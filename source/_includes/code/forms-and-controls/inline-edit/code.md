<p>Jump to <a href="#example-code-1">Inline Edit for List View</a>, <a href="#example-code-2">Inline Edit for Form</a></p>
<h2 id="example-code-1">Inline Edit for List View</h2>
<div class="example-pf">
  <iframe src="{{site.baseurl}}/pattern-library/content-views/list-view/list-view-inline-edit.html" width="100%" height="650px;" scrolling="no" seamless></iframe>
</div>
<p><a href="{{site.baseurl}}/pattern-library/content-views/list-view/list-view-inline-edit.html" target="_blank">View full page example</a></p>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
<pre class="prettyprint">{% capture markup_include %}{% include widgets/list-view/list-view-page-inline-edit.html %}{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-2">Inline Edit for Form</h2>
<div class="example-pf">
  {% include widgets/forms/inline-edit-for-form.html %}
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a></p>
<div class="collapse in" id="markup-2">
<pre class="prettyprint">{% capture markup_include %}
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.20.1/moment.min.js"></script>
<script src="components/bootstrap-datepicker/dist/js/bootstrap-datepicker.js"></script>
<script src="components/patternfly-bootstrap-combobox/js/bootstrap-combobox.js"></script>
<script src="components/bootstrap-select/dist/js/bootstrap-select.js"></script>

{% include widgets/forms/inline-edit-for-form.html %}
{% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
