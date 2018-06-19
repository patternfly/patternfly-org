<h2 id="example-code-1">Example</h2>
<div class="example">
  <div class="row">
    <div class="col-md-5">
      <div class="example-pf">
        {% include widgets/forms/bootstrap-datepicker.html id="date-2" %}
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/bootstrap-datepicker/dist/js/bootstrap-datepicker.js"></script>
{% include widgets/forms/bootstrap-datepicker.html id="date-2" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
