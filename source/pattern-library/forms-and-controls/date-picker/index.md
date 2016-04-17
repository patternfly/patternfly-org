---
title: Datepicker
author: dlabrecq
layout: page-tabs
---
<div class="tab-content">
  <div role="tabpanel" class="tab-pane active" id="overview">
    <p>The datepicker allows a user to select a single date. The most common use case is selecting a date for something
    to run or expire. The datepicker widget is based on the Bootstrap-datepicker. See the
    <a href="http://bootstrap-datepicker.readthedocs.org/en/latest/">bootstrap-datepicker doc</a> for complete documentation.</p>
    <p>This pattern should NOT be used when:</p>
    <ul>
      <li>Selecting a date range</li>
    </ul>
    <h2 id="example-overview-1">Example</h2>
    <div class="row">
      <div class="col-md-6 col-center">
        <div class="example-pf">
          <div class="cards-pf">
            <div class="container-fluid container-cards-pf">
              <div class="row row-cards-pf" style="padding-bottom: 20px;">
                <div class="col-md-12">
                  <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                  {% include widgets/forms/bootstrap-datepicker.html id="date-1" %}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="design">
    <h2>Description</h2>
    <div class="row">
      <div class="col-md-5 col-lg-5">
        <img src="{{site.baseurl}}assets/img/datepicker-callout3.png" alt="Date Picker callout3"/>
      </div>
      <div class="col-md-7 col-lg-7">
        <ol>
          <li><b>Input Field:</b> At this time, we recommend that the datepicker field is read only due to the limitations of the input validation.</li>
          <li><b>Calendar Icon:</b> The calendar icon is shown on the right.</li>
          <li><b>Calendar:</b> The calendar is displayed when the user clicks on the input field.</li>
          <li><b>Today Button:</b> This button is a shortcut to select today’s date.</li>
          <li><b>Datepicker Switch:</b> Change the view of the calendar to month or year by clicking on the calendar header.</li>
          <li><b>Previous and Next Buttons:</b> Allows the user to navigate through the months or years.</li>
        </ol>
      </div>
    </div>
  </div>
  <div role="tabpanel" class="tab-pane" id="code">
    {% include nav-tabs-code.html %}
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane nested active" id="html-css">
        <h2 id="example-code-1">Example</h2>
        <div class="row">
          <div class="col-md-6 col-center">
            <div class="example-pf">
              <div class="example-pf-demo example-pf-demo-no-padding">
                <div class="cards-pf">
                  <div class="container-fluid container-cards-pf">
                    <div class="row row-cards-pf" style="padding-bottom: 20px;">
                      <div class="col-md-12">
                        <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
                        {% include widgets/forms/bootstrap-datepicker.html id="date-2" %}
                      </div>
                    </div>
                  </div>
                </div>
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
      </div>
      <div role="tabpanel" class="tab-pane nested" id="angular">
        <div ng-app="docsApp" ng-controller="DocsController" class="content">
          <div ng-include src="'/components/angular-patternfly/dist/docs/partials/api/patternfly.form.directive.pfDatepicker.html'"></div>
        </div>
      </div>
    </div>
  </div>
</div>
