---
title: Datepicker
author: lhinson
layout: page
---
## Overview

The datepicker allows a user to select a single date. The most common use case is selecting a date for something to run or expire. The datepicker widget is based on the Bootstrap-datepicker. See the [bootstrap-datepicker doc][1] for complete documentation.

This pattern should NOT be used when:

  * Selecting a date range

## Example

<div class="row">
  <div class="col-md-4">
    <div class="pf-example">
      <div class="input-group date">
        <input type="text" class="form-control bootstrap-datepicker" readonly /><span class="input-group-addon"><span class="fa fa-calendar"></span></span>
      </div>
    </div>
  </div>
</div>

<p class="reference-markup">
  <a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="bootstrap-datepicker-markup" href="#bootstrap-datepicker-markup">Reference Markup</a>
</p>

<div class="collapse" id="bootstrap-datepicker-markup">
  <pre class="prettyprint">
&lt;div class="input-group date">
  &lt;input type="text" class="form-control bootstrap-datepicker" readonly>&lt;span class="input-group-addon">&lt;span class="fa fa-calendar">&lt;/span>&lt;/span>
&lt;/div&gt;
&lt;script src="/components/patternfly/components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
  // Initialize Boostrap-datepicker
  $('.input-group.date').datepicker({
    autoclose: true,
    todayBtn: "linked",
    todayHighlight: true
  });
&lt;/script&gt;
</pre>
</div>

## Description

<div class="row">
  <div class="col-md-4">
    <img src="{{site.baseurl}}assets/img/datepicker-callout3.png" alt="datepicker-callout3" />
  </div>

  <div class="col-md-8">
    <ol>
      <li>
        <b>Input Field:</b> At this time, we recommend that the datepicker field is read only due to the limitations of the input validation.
      </li>
      <li>
        <b>Calendar Icon:</b> The calendar icon is shown on the right.
      </li>
      <li>
        <b>Calendar:</b> The calendar is displayed when the user clicks on the input field.
      </li>
      <li>
        <b>Today Button:</b> This button is a shortcut to select today&#8217;s date.
      </li>
      <li>
        <b>Datepicker Switch:</b> Change the view of the calendar to month or year by clicking on the calendar header.
      </li>
      <li>
        <b>Previous and Next Buttons:</b> Allows the user to navigate through the months or years.
      </li>
    </ol>
  </div>
</div>

 [1]: http://bootstrap-datepicker.readthedocs.org/en/latest/
