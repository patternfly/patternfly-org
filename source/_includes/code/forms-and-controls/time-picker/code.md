<div class="example">
  <div class="row">
    <div class="col-md-5">
      <div class="example-pf">
        {% include widgets/forms/time-picker.html id="time-picker-2" %}
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a></p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js"></script>
<script src="components/moment/min/moment.min.js"></script>
{% include widgets/forms/time-picker.html id="time-picker-2" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
