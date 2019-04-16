<p>Jump to <a href="#example-code-1">DatePicker</a>, <a href="#example-code-2">TimePicker</a>, <a href="#example-code-3">DateTimePicker</a>,
<a href="#example-code-4">DateRangePicker</a>, <a href="#example-code-5">DateTimeRangePicker</a></p>
<h2 id="example-code-1">DatePicker</h2>
<div class="example-pf">
  <div class="row">
    <div class="col-md-5">
      {% include widgets/forms/single-date-picker.html id="datetimepicker1" %}
    </div>
  </div>
</div>
<p class="reference-markup">
  <a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-1" href="#markup-1">Reference Markup</a>
</p>
<div class="collapse in" id="markup-1">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js"></script>
<script src="components/moment/min/moment.min.js"></script>
{% include widgets/forms/single-date-picker.html id="datetimepicker1" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-2">TimePicker</h2>
<div class="example-pf">
  <div class="row">
    <div class="col-md-5">
      {% include widgets/forms/single-time-picker.html id="datetimepicker2" %}
    </div>
  </div>
</div>
<p class="reference-markup">
  <a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-2" href="#markup-2">Reference Markup</a>
</p>
<div class="collapse in" id="markup-2">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js"></script>
<script src="components/moment/min/moment.min.js"></script>
{% include widgets/forms/single-time-picker.html id="datetimepicker2" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-3">DateTimePicker</h2>
<div class="example-pf">
  <div class="row">
    <div class="col-md-5">
      {% include widgets/forms/date-time-picker.html id="datetimepicker3" %}
    </div>
  </div>
</div>
<p class="reference-markup">
  <a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-3" href="#markup-3">Reference Markup</a>
</p>
<div class="collapse in" id="markup-3">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js"></script>
<script src="components/moment/min/moment.min.js"></script>
{% include widgets/forms/date-time-picker.html id="datetimepicker3" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-4">DateRangePicker</h2>
<div class="example-pf">
  <div class="row">
    <div class="col-md-5">
      {% include widgets/forms/date-range-picker.html rangeId="range1" startId="datetimepicker4" endId="datetimepicker5" %}
    </div>
  </div>
</div>
<p class="reference-markup">
  <a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-4" href="#markup-4">Reference Markup</a>
</p>
<div class="collapse in" id="markup-4">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js"></script>
<script src="components/moment/min/moment.min.js"></script>
{% include widgets/forms/date-range-picker.html rangeId="range1" startId="datetimepicker4" endId="datetimepicker5" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
<h2 id="example-code-5">DateTimeRangePicker</h2>
<div class="example-pf">
  <div class="row">
    <div class="col-md-5">
      {% include widgets/forms/date-time-range-picker.html startId="datetimepicker6" endId="datetimepicker7" %}
    </div>
  </div>
</div>
<p class="reference-markup">
  <a class="collapse-toggle" data-toggle="collapse" aria-expanded="true" aria-controls="markup-5" href="#markup-5">Reference Markup</a>
</p>
<div class="collapse in" id="markup-5">
  <pre class="prettyprint">{% capture markup_include %}
<script src="components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js"></script>
<script src="components/moment/min/moment.min.js"></script>
{% include widgets/forms/date-time-range-picker.html startId="datetimepicker6" endId="datetimepicker7" %}
  {% endcapture %}{{ markup_include | xml_escape }}</pre>
</div>
