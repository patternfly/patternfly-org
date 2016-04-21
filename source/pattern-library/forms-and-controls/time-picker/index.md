---
title: Timepicker
author: dlabrecq
layout: page-tabs
designtab: false
url-js-extra: ['components/moment/min/moment.min.js', 'components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js']
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>The timepicker allows a user to select a time. The most common use case is selecting a date for something to run
    or expire. The timepicker widget is based on the Bootstrap-datetimepicker. See the
    <a href="http://eonasdan.github.io/bootstrap-datetimepicker/#bootstrap-3-datepicker-v4-docs">Bootstrap 3 Datepicker v4 Docs</a>
    for complete documentation.</p>
    <h2 id="example-overview-1">Example</h2>
    <div class="example">
      <div class="row">
        <div class="col-md-5">
          <div class="example-pf">
            {% include widgets/forms/time-picker.html id="time-picker-1" %}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>TBD: Add timepicker description</h2>
    <div class="row">
      <div class="col-md-7 col-lg-5">
      </div>
      <div class="col-md-5 col-lg-7">
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html angular=false %}
    <div class="tab-content">
      <h2 id="example-code-1">Example</h2>
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <div class="example">
          <div class="row">
            <div class="col-md-5">
              <div class="example-pf" style="padding-bottom: 20px;">
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
      </div>
    </div>
  </div>
</div>
