---
title: Widgets
author: dlabrecq
layout: page-widgets
---
<h3 id="overview">Overview</h3>
<p>
Widgets are reusable controls and elements — building blocks for your UI. Widgets are often used together as elements of
larger <a href="{{site.baseurl}}/pattern-library">Design Patterns</a>.
</p>
<p>
A note on code dependencies: Most PatternFly widgets are customized versions of
<a href="http://getbootstrap.com/components/" target="_blank">Bootstrap Components</a>. PatternFly depends on Bootstrap’s CSS, but
not <a href="http://getbootstrap.com/javascript/#js-overview" target="_blank">Bootstrap’s JavaScript</a>, in order to keep the
Bootstrap JavaScript modular. PatternFly also uses <a href="http://c3js.org/" target="_blank">C3.js</a> for chart components, and
<a href="https://datatables.net/" target="_blank">DataTables.net</a> for table-based components.
</p>
<!--
<div class="super-section">
-->
  <div class="section" id="accordion">
    <h3>Accordion (Collapse)</h3>
    <p>See <a href="http://getbootstrap.com/javascript/#collapse">http://getbootstrap.com/javascript/#collapse</a> for complete accordion documentation.</p>
    <div class="pf-example">
      <div class="panel-group" id="accordion-example" style="width:240px">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion-example" href="#collapseOne">
                Lorem ipsum
              </a>
            </h4>
          </div>
          <div id="collapseOne" class="panel-collapse collapse in">
            <div class="panel-body">
               Praesent sagittis est et arcu fringilla placerat. Cras erat ante, dapibus non mauris ac, volutpat sollicitudin ligula. Morbi gravida nisl vel risus tempor, sit amet luctus erat tempus. Curabitur blandit sem non pretium bibendum. Donec eleifend non turpis vitae vestibulum. Vestibulum ut sem ac nunc posuere blandit sed porta lorem. Cras rutrum velit vel leo iaculis imperdiet.
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion-example" href="#collapseTwo" class="collapsed">
                Dolor sit amet
              </a>
            </h4>
          </div>
          <div id="collapseTwo" class="panel-collapse collapse">
            <div class="panel-body">
              Donec consequat dignissim neque, sed suscipit quam egestas in. Fusce bibendum laoreet lectus commodo interdum. Vestibulum odio ipsum, tristique et ante vel, iaculis placerat nulla. Suspendisse iaculis urna feugiat lorem semper, ut iaculis risus tempus.
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#accordion-example" href="#collapseThree" class="collapsed">
                Consectetur
              </a>
            </h4>
          </div>
          <div id="collapseThree" class="panel-collapse collapse">
            <div class="panel-body">
              Curabitur nisl quam, interdum a venenatis a, consequat a ligula. Nunc nec lorem in erat rhoncus lacinia at ac orci. Sed nec augue congue, vehicula justo quis, venenatis turpis. Nunc quis consectetur purus. Nam vitae viverra lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue felis. Maecenas in dignissim purus, quis pulvinar lectus. Vivamus euismod ultrices diam, in mattis nibh.
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="accordion-markup" href="#accordion-markup">Reference Markup</a></p>
    <div class="collapse" id="accordion-markup">
      <pre class="prettyprint">
&lt;div class="panel-group" id="accordion-markup" style="width:240px"&gt;
  &lt;div class="panel panel-default"&gt;
    &lt;div class="panel-heading"&gt;
      &lt;h4 class="panel-title"&gt;
        &lt;a data-toggle="collapse" data-parent="#accordion-markup" href="#collapseOne"&gt;
          Lorem ipsum
        &lt;/a&gt;
      &lt;/h4&gt;
    &lt;/div&gt;
    &lt;div id="collapseOne" class="panel-collapse collapse in"&gt;
      &lt;div class="panel-body"&gt;
         Praesent sagittis est et arcu fringilla placerat. Cras erat ante, dapibus non mauris ac, volutpat sollicitudin ligula. Morbi gravida nisl vel risus tempor, sit amet luctus erat tempus. Curabitur blandit sem non pretium bibendum. Donec eleifend non turpis vitae vestibulum. Vestibulum ut sem ac nunc posuere blandit sed porta lorem. Cras rutrum velit vel leo iaculis imperdiet.
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="panel panel-default"&gt;
    &lt;div class="panel-heading"&gt;
      &lt;h4 class="panel-title"&gt;
        &lt;a data-toggle="collapse" data-parent="#accordion-markup" href="#collapseTwo" class="collapsed"&gt;
          Dolor sit amet
        &lt;/a&gt;
      &lt;/h4&gt;
    &lt;/div&gt;
    &lt;div id="collapseTwo" class="panel-collapse collapse"&gt;
      &lt;div class="panel-body"&gt;
        Donec consequat dignissim neque, sed suscipit quam egestas in. Fusce bibendum laoreet lectus commodo interdum. Vestibulum odio ipsum, tristique et ante vel, iaculis placerat nulla. Suspendisse iaculis urna feugiat lorem semper, ut iaculis risus tempus.
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="panel panel-default"&gt;
    &lt;div class="panel-heading"&gt;
      &lt;h4 class="panel-title"&gt;
        &lt;a data-toggle="collapse" data-parent="#accordion-markup" href="#collapseThree" class="collapsed"&gt;
          Consectetur
        &lt;/a&gt;
      &lt;/h4&gt;
    &lt;/div&gt;
    &lt;div id="collapseThree" class="panel-collapse collapse"&gt;
      &lt;div class="panel-body"&gt;
        Curabitur nisl quam, interdum a venenatis a, consequat a ligula. Nunc nec lorem in erat rhoncus lacinia at ac orci. Sed nec augue congue, vehicula justo quis, venenatis turpis. Nunc quis consectetur purus. Nam vitae viverra lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue felis. Maecenas in dignissim purus, quis pulvinar lectus. Vivamus euismod ultrices diam, in mattis nibh.
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>
    </div>
  </div>
  <div class="section" id="alerts">
    <h3>Alerts</h3>
    <p>See <a href="http://getbootstrap.com/components/#alerts">http://getbootstrap.com/components/#alerts</a> for complete alerts documentation.</p>
    <div class="pf-example">
      <div class="alert alert-danger">
        <span class="pficon pficon-error-circle-o"></span>
        <strong>Hey there is a problem!</strong> Yeah this is really messed up and you should <a href="#" class="alert-link">know about it</a>.
      </div>
      <div class="alert alert-warning">
        <span class="pficon pficon-warning-triangle-o"></span>
        <strong>There might be a problem here!</strong> We are not really sure, but <a href="#" class="alert-link">it might be bad</a>.
      </div>
      <div class="alert alert-success">
        <span class="pficon pficon-ok"></span>
        <strong>Great job!</strong> This is really working out <a href="#" class="alert-link">great for us</a>.
      </div>
      <div class="alert alert-info">
        <span class="pficon pficon-info"></span>
        <strong>This is some general information.</strong> You should <a href="#" class="alert-link">know about this</a>.
      </div>
      <div class="alert alert-danger alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
          <span class="pficon pficon-close"></span>
        </button>
        <span class="pficon pficon-error-circle-o"></span>
        <strong>Hey there is a problem!</strong> Yeah this is really messed up and you should <a href="#" class="alert-link">know about it</a>.
      </div>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="alerts-markup" href="#alerts-markup">Reference Markup</a></p>
    <div class="collapse" id="alerts-markup">
      <pre class="prettyprint">
&lt;div class="alert alert-danger"&gt;
  &lt;span class="pficon pficon-error-circle-o">&lt;/span&gt;
  &lt;strong&gt;Hey there is a problem!&lt;/strong&gt; Yeah this is really messed up and you should &lt;a href="#" class="alert-link"&gt;know about it&lt;/a&gt;.
&lt;/div&gt;
&lt;div class="alert alert-warning"&gt;
  &lt;span class="pficon pficon-warning-triangle-o"&gt;&lt;/span&gt;
  &lt;strong&gt;There might be a problem here!&lt;/strong&gt; We are not really sure, but &lt;a href="#" class="alert-link"&gt;it might be bad&lt;/a&gt;.
&lt;/div&gt;
&lt;div class="alert alert-success"&gt;
  &lt;span class="pficon pficon-ok"&gt;&lt;/span&gt;
  &lt;strong&gt;Great job!&lt;/strong&gt; This is really working out &lt;a href="#" class="alert-link"&gt;great for us&lt;/a&gt;.
&lt;/div&gt;
&lt;div class="alert alert-info"&gt;
  &lt;span class="pficon pficon-info"&gt;&lt;/span&gt;
  &lt;strong&gt;This is some general information.&lt;/strong&gt; You should &lt;a href="#" class="alert-link"&gt;know about this&lt;/a&gt;.
&lt;/div&gt;
&lt;div class="alert alert-danger alert-dismissable"&gt;
  &lt;button type="button" class="close" data-dismiss="alert" aria-hidden="true"&gt;
    &lt;span class="pficon pficon-close"&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;span class="pficon pficon-error-circle-o"&gt;&lt;/span&gt;
  &lt;strong&gt;Hey there is a problem!&lt;/strong&gt; Yeah this is really messed up and you should &lt;a href="#" class="alert-link"&gt;know about it&lt;/a&gt;.
&lt;/div&gt;
</pre>
    </div>
  </div>
  <div class="section" id="badges">
    <h3>Badges</h3>
    <p>See <a href="http://getbootstrap.com/components/#badges">http://getbootstrap.com/components/#badges</a> for complete badges documentation.</p>
    <div class="pf-example">
      <a href="#">Inbox <span class="badge">42</span></a>
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="badges-markup" href="#badges-markup">Reference Markup</a></p></p>
    <div class="collapse" id="badges-markup">
      <pre class="prettyprint">
&lt;a href="#"&gt;Inbox &lt;span class="badge"&gt;42&lt;/span&gt;&lt;/a&gt;
</pre>
    </div>
  </div>
<!--
  <div class="section" id="basic-charts">
    <h3>Basic Charts</h3>
    <p>See <a href="http://c3js.org/">http://c3js.org/</a> for complete basic charts documentation.</p>
    <h4>Line</h4>
    <div class="pf-example">
      <div id="basic-chart-line"></div>
      <script>
        (function($) {
          $(document).ready(function() {
            var basicChartLine = c3.generate({
              axis: {
                x: {
                  tick: {
                    outer: false
                  }
                },
                y: {
                  tick: {
                    outer: false
                  }
                }
              },
              bindto: '#basic-chart-line',
              color: $().c3ChartDefaults().getDefaultColors(),
              data: {
                columns: [
                  ['data1', 30, 200, 100, 400, 150, 250],
                  ['data2', 50, 220, 310, 240, 115, 25],
                  ['data3', 70, 100, 390, 295, 170, 220],
                  ['data4', 10, 340, 30, 290, 35, 20],
                  ['data5', 90, 150, 160, 165, 180, 5]
                ]
              },
              grid: {
                y: {
                  show: true
                }
              },
              point: {
                r: 4
              }
            });
          });
        })(jQuery);
      </script>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="basic-charts-markup" href="#basic-charts-markup">Reference Markup</a></p>
    <div class="collapse" id="basic-charts-markup">
      <pre class="prettyprint">
&lt;div id="basic-chart-line">&lt;/div&gt;
&lt;script src="/components/d3/d3.min.js"&gt;&lt;/script&gt;
&lt;script src="/components/c3/c3.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
  (function($) {
    $(document).ready(function() {
      var basicChartLine = c3.generate({
        axis: {
          x: {
            tick: {
              outer: false
            }
          },
          y: {
            tick: {
              outer: false
            }
          }
        },
        bindto: '#basic-chart-line',
        color: $().c3ChartDefaults().getDefaultColors(),
        data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 220, 310, 240, 115, 25],
            ['data3', 70, 100, 390, 295, 170, 220],
            ['data4', 10, 340, 30, 290, 35, 20],
            ['data5', 90, 150, 160, 165, 180, 5]
          ]
        },
        grid: {
          y: {
            show: true
          }
        },
        point: {
          r: 4
        }
      });
    });
  })(jQuery);
&lt;/script&gt;
</pre>
    </div>
    <h4>Other Basic Charts</h4>
    <p>Additional basic chart examples such as sparkline, spline, area, stacked area, bar, stacked bar, and donut are available at <a href="https://rawgit.com/patternfly/patternfly/master-dist/dist/tests/index.html">https://rawgit.com/patternfly/patternfly/master-dist/dist/tests/index.html</a></p>
  </div>
-->
  <div class="section" id="bootstrap-combobox">
    <h3>Bootstrap Combobox</h3>
    <p>See <a href="https://github.com/patternfly/patternfly-bootstrap-combobox">https://github.com/patternfly/patternfly-bootstrap-combobox</a> for complete Bootstrap Combobox documentation.</p>
    <div class="pf-example">
      <div class="form-group">
        <label>State</label>
        <select class="combobox form-control">
          <option value="" selected="selected">Select a State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="bootstrap-combobox-markup" href="#bootstrap-combobox-markup">Reference Markup</a></p>
    <div class="collapse" id="bootstrap-combobox-markup">
      <pre class="prettyprint">
&lt;label>State&lt;/label&gt;
  &lt;select class="combobox form-control"&gt;
    &lt;option value="" selected="selected"&gt;Select a State&lt;/option&gt;
    &lt;option value="AL"&gt;Alabama&lt;/option&gt;
    &lt;option value="AK"&gt;Alaska&lt;/option&gt;
    &lt;option value="AZ"&gt;Arizona&lt;/option&gt;
    &lt;option value="AR"&gt;Arkansas&lt;/option&gt;
    &lt;option value="CA"&gt;California&lt;/option&gt;
    &lt;option value="CO"&gt;Colorado&lt;/option&gt;
    &lt;option value="CT"&gt;Connecticut&lt;/option&gt;
    &lt;option value="DE"&gt;Delaware&lt;/option&gt;
    &lt;option value="DC"&gt;District Of Columbia&lt;/option&gt;
    &lt;option value="FL"&gt;Florida&lt;/option&gt;
    &lt;option value="GA"&gt;Georgia&lt;/option&gt;
    &lt;option value="HI"&gt;Hawaii&lt;/option&gt;
    &lt;option value="ID"&gt;Idaho&lt;/option&gt;
    &lt;option value="IL"&gt;Illinois&lt;/option&gt;
    &lt;option value="IN"&gt;Indiana&lt;/option&gt;
    &lt;option value="IA"&gt;Iowa&lt;/option&gt;
    &lt;option value="KS"&gt;Kansas&lt;/option&gt;
    &lt;option value="KY"&gt;Kentucky&lt;/option&gt;
    &lt;option value="LA"&gt;Louisiana&lt;/option&gt;
    &lt;option value="ME"&gt;Maine&lt;/option&gt;
    &lt;option value="MD"&gt;Maryland&lt;/option&gt;
    &lt;option value="MA"&gt;Massachusetts&lt;/option&gt;
    &lt;option value="MI"&gt;Michigan&lt;/option&gt;
    &lt;option value="MN"&gt;Minnesota&lt;/option&gt;
    &lt;option value="MS"&gt;Mississippi&lt;/option&gt;
    &lt;option value="MO"&gt;Missouri&lt;/option&gt;
    &lt;option value="MT"&gt;Montana&lt;/option&gt;
    &lt;option value="NE"&gt;Nebraska&lt;/option&gt;
    &lt;option value="NV"&gt;Nevada&lt;/option&gt;
    &lt;option value="NH"&gt;New Hampshire&lt;/option&gt;
    &lt;option value="NJ"&gt;New Jersey&lt;/option&gt;
    &lt;option value="NM"&gt;New Mexico&lt;/option&gt;
    &lt;option value="NY"&gt;New York&lt;/option&gt;
    &lt;option value="NC"&gt;North Carolina&lt;/option&gt;
    &lt;option value="ND"&gt;North Dakota&lt;/option&gt;
    &lt;option value="OH"&gt;Ohio&lt;/option&gt;
    &lt;option value="OK"&gt;Oklahoma&lt;/option&gt;
    &lt;option value="OR"&gt;Oregon&lt;/option&gt;
    &lt;option value="PA"&gt;Pennsylvania&lt;/option&gt;
    &lt;option value="RI"&gt;Rhode Island&lt;/option&gt;
    &lt;option value="SC"&gt;South Carolina&lt;/option&gt;
    &lt;option value="SD"&gt;South Dakota&lt;/option&gt;
    &lt;option value="TN"&gt;Tennessee&lt;/option&gt;
    &lt;option value="TX"&gt;Texas&lt;/option&gt;
    &lt;option value="UT"&gt;Utah&lt;/option&gt;
    &lt;option value="VT"&gt;Vermont&lt;/option&gt;
    &lt;option value="VA"&gt;Virginia&lt;/option&gt;
    &lt;option value="WA"&gt;Washington&lt;/option&gt;
    &lt;option value="WV"&gt;West Virginia&lt;/option&gt;
    &lt;option value="WI"&gt;Wisconsin&lt;/option&gt;
    &lt;option value="WY"&gt;Wyoming&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;
&lt;script src="/components/bootstrap-combobox/js/bootstrap-combobox.js"&gt;&lt;/script&gt;
&lt;script&gt;
  // Initialize Boostrap-Combobox
  $('.combobox').combobox();
&lt;/script&gt;
</pre>
    </div>
  </div>
  <div class="section" id="bootstrap-datepicker">
    <h3>Bootstrap Datepicker</h3>
    <p>See <a href="http://bootstrap-datepicker.readthedocs.org/en/latest/">http://bootstrap-datepicker.readthedocs.org/en/latest/</a> for complete Bootstrap Datepicker documentation.</p>
    <div class="pf-example">
      <input type="text" class="form-control bootstrap-datepicker">
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="bootstrap-datepicker-markup" href="#bootstrap-datepicker-markup">Reference Markup</a></p></p>
    <div class="collapse" id="bootstrap-datepicker-markup">
      <pre class="prettyprint">
&lt;input type="text" class="form-control bootstrap-datepicker"&gt;
&lt;script src="/components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
  // Initialize Boostrap-datepicker
  $('.bootstrap-datepicker').datepicker({
    autoclose: true,
    todayBtn: "linked",
    todayHighlight: true
  });
&lt;/script&gt;
</pre>
    </div>
  </div>
  <div class="section" id="bootstrap-select">
    <h3>Bootstrap Select</h3>
    <p>See <a href="http://silviomoreto.github.io/bootstrap-select/">http://silviomoreto.github.io/bootstrap-select/</a> for complete Bootstrap Select documentation.</p>
    <div class="pf-example">
      <h4>Single-Select</h4>
      <select class="selectpicker">
        <option>Mustard</option>
        <option>Ketchup</option>
        <option>Relish</option>
        <option disabled>Onions</option>
      </select>
      <h4>Multiple Select</h4>
      <select class="selectpicker" multiple>
        <option>Mustard</option>
        <option>Ketchup</option>
        <option>Relish</option>
        <option disabled>Onions</option>
      </select>
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="bootstrap-select-markup" href="#bootstrap-select-markup">Reference Markup</a></p></p>
    <div class="collapse" id="bootstrap-select-markup">
      <pre class="prettyprint">
&lt;select class="selectpicker"&gt;
  &lt;option&gt;Mustard&lt;/option&gt;
  &lt;option&gt;Ketchup&lt;/option&gt;
  &lt;option&gt;Relish&lt;/option&gt;
  &lt;option disabled&gt;Onions&lt;/option&gt;
&lt;/select&gt;
&lt;select class="selectpicker" multiple&gt;
  &lt;option&gt;Mustard&lt;/option&gt;
  &lt;option&gt;Ketchup&lt;/option&gt;
  &lt;option&gt;Relish&lt;/option&gt;
  &lt;option disabled&gt;Onions&lt;/option&gt;
&lt;/select&gt;
&lt;script src="/components/bootstrap-select/dist/js/bootstrap-select.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
  // Initialize Boostrap-select
   $('.selectpicker').selectpicker();
&lt;/script&gt;
</pre>
    </div>
  </div>
<div class="section" id="bootstrap-switch">
    <h3>Bootstrap Switch</h3>
    <p>See <a href="http://bootstrapswitch.site/">http://bootstrapswitch.site/</a> for complete Bootstrap Switch documentation.</p>
    <div class="pf-example">
      <input class="bootstrap-switch" id="bootstrap-switch-state" type="checkbox" checked>
      <script>
        jQuery(".bootstrap-switch").bootstrapSwitch();
      </script>
    </div>
    <p><p class="reference-markup">
      <a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="bootstrap-switch-markup" href="#bootstrap-switch-markup">Reference Markup</a>
    </p></p>
    <div class="collapse" id="bootstrap-switch-markup">
      <pre class="prettyprint">&lt;input class="bootstrap-switch" id="bootstrap-switch-state" type="checkbox" checked&gt;
&lt;script&gt;
  jQuery(".bootstrap-switch").bootstrapSwitch();
&lt;/script&gt;
&lt;script src="/components/bootstrap-switch/dist/js/bootstrap-switch.min.js"&gt;&lt;/script&gt;
</pre>
    </div>
  </div>
  <div class="section" id="bootstrap-touchspin">
    <h3>Bootstrap Touchspin</h3>
    <p>See <a href="http://www.virtuosoft.eu/code/bootstrap-touchspin/">http://www.virtuosoft.eu/code/bootstrap-touchspin/</a> for complete Bootstrap Touchspin documentation.</p>
    <div class="pf-example">
      <input class="bootstrap-touchspin" id="bootstrap-touchspin-empty" type="text" value="" name="bootstrap-touchspin-empty">
      <script>
          jQuery(".bootstrap-touchspin").TouchSpin();
      </script>
    </div>
    <p><p class="reference-markup">
      <a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="bootstrap-touchspin-markup" href="#bootstrap-touchspin-markup">Reference Markup</a>
    </p></p>
    <div class="collapse" id="bootstrap-touchspin-markup">
      <pre class="prettyprint">&lt;input class="bootstrap-touchspin" id="bootstrap-touchspin-empty" type="text" value="" name="bootstrap-touchspin-empty"&gt;
&lt;script&gt;
    $(".bootstrap-touchspin").TouchSpin();
&lt;/script&gt;
&lt;script src="/components/bootstrap-touchspin/dist/js/jquery.bootstrap-touchspin.min.js"&gt;&lt;/script&gt;
</pre>
    </div>
  </div>
  <div class="section" id="bootstrap-tree-view">
    <h3>Bootstrap Tree View</h3>
    <p>See <a href="https://github.com/patternfly/patternfly-bootstrap-treeview">https://github.com/patternfly/patternfly-bootstrap-treeview</a> for complete Bootstrap Tree View documentation.</p>
    <div class="pf-example">
      <div id="treeview1"></div>
      <script>
        jQuery(function() {
          var defaultData = [
            {
              text: 'Parent 1',
              href: '#parent1',
              tags: ['4'],
              nodes: [
                {
                  text: 'Child 1',
                  href: '#child1',
                  icon: 'fa fa-file-o',
                  tags: ['2'],
                  nodes: [
                    {
                      text: 'Grandchild 1',
                      href: '#grandchild1',
                      icon: 'fa fa-file-o',
                      tags: ['0']
                    },
                    {
                      text: 'Grandchild 2',
                      href: '#grandchild2',
                      icon: 'fa fa-file-o',
                      tags: ['0']
                    }
                  ]
                },
                {
                  text: 'Child 2',
                  href: '#child2',
                  icon: 'fa fa-file-o',
                  tags: ['0']
                }
              ]
            },
            {
              text: 'Parent 2',
              href: '#parent2',
              tags: ['0']
            },
            {
              text: 'Parent 3',
              href: '#parent3',
               tags: ['0']
            },
            {
              text: 'Parent 4',
              href: '#parent4',
              tags: ['0']
            },
            {
              text: 'Parent 5',
              href: '#parent5'  ,
              tags: ['0']
            }
          ];
          jQuery('#treeview1').treeview({
            collapseIcon: "fa fa-angle-down",
            data: defaultData,
            expandIcon: "fa fa-angle-right",
            nodeIcon: "fa fa-folder",
            showBorder: false
          });
        });
      </script>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="bootstrap-tree-view-markup" href="#bootstrap-tree-view-markup">Reference Markup</a></p>
    <div class="collapse" id="bootstrap-tree-view-markup">
      <pre class="prettyprint">
&lt;div id="treeview1"&gt;&lt;/div&gt;
&lt;script src="/components/patternfly-bootstrap-treeview/dist/bootstrap-treeview.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
  $(function() {
    var defaultData = [
      {
        text: 'Parent 1',
        href: '#parent1',
        tags: ['4'],
        nodes: [
          {
            text: 'Child 1',
            href: '#child1',
            icon: 'fa fa-file-o',
            tags: ['2'],
            nodes: [
              {
                text: 'Grandchild 1',
                href: '#grandchild1',
                icon: 'fa fa-file-o',
                tags: ['0']
              },
              {
                text: 'Grandchild 2',
                href: '#grandchild2',
                icon: 'fa fa-file-o',
                tags: ['0']
              }
            ]
          },
          {
            text: 'Child 2',
            href: '#child2',
            icon: 'fa fa-file-o',
            tags: ['0']
          }
        ]
      },
      {
        text: 'Parent 2',
        href: '#parent2',
        tags: ['0']
      },
      {
        text: 'Parent 3',
        href: '#parent3',
         tags: ['0']
      },
      {
        text: 'Parent 4',
        href: '#parent4',
        tags: ['0']
      },
      {
        text: 'Parent 5',
        href: '#parent5'  ,
        tags: ['0']
      }
    ];
    $('#treeview1').treeview({
      collapseIcon: "fa fa-angle-down",
      data: defaultData,
      expandIcon: "fa fa-angle-right",
      nodeIcon: "fa fa-folder",
      showBorder: false
    });
  });
&lt;/script&gt;
</pre>
    </div>
  </div>
  <div class="section" id="breadcrumbs">
    <h3>Breadcrumbs</h3>
    <p>See <a href="http://getbootstrap.com/components/#breadcrumbs">http://getbootstrap.com/components/#breadcrumbs</a> for complete breadcrumbs documentation.</p>
    <div class="pf-example">
      <ol class="breadcrumb">
        <li>
          <a href="#">Back to Top Level</a>
        </li>
        <li>
          <a href="#">Second Level</a>
        </li>
        <li>
          <a href="#">Third Level</a>
        </li>
        <li class="active"> <strong>Fourth Level:</strong>
          Detail about fourth level
        </li>
      </ol>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="breadcrumbs-markup" href="#breadcrumbs-markup">Reference Markup</a></p>
    <div class="collapse" id="breadcrumbs-markup">
      <pre class="prettyprint">
&lt;ol class="breadcrumb"&gt;
  &lt;li&gt;
    &lt;a href="#"&gt;Back to Top Level&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href="#"&gt;Second Level&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href="#"&gt;Third Level&lt;/a&gt;
  &lt;/li&gt;
  &lt;li class="active"&gt; &lt;strong&gt;Fourth Level:&lt;/strong&gt;
    Detail about fourth level
  &lt;/li&gt;
&lt;/ol&gt;
</pre>
    </div>
  </div>
  <div class="section" id="buttons">
    <h3>Buttons</h3>
    <p>See <a href="http://getbootstrap.com/css/#buttons">http://getbootstrap.com/css/#buttons</a> for complete buttons documentation.</p>
    <div class="pf-example">
      <p>
        <button class="btn btn-default" type="button">Secondary</button>
        <button class="btn btn-primary" type="button">Primary</button>
        <button class="btn btn-danger" type="button">Destructive</button>
      </p>
      <p>
        <button class="btn btn-default btn-lg " type="button">Secondary Large</button>
        <button class="btn btn-primary btn-lg " type="button">Primary Large</button>
        <button class="btn btn-danger btn-lg" type="button">Destructive Large</button>
      </p>
      <p>
        <button class="btn btn-default btn-xs" type="button">Secondary Extra Small</button>
        <button class="btn btn-primary btn-xs" type="button">Primary Extra Small</button>
        <button class="btn btn-danger btn-xs" type="button">Destructive Extra Small</button>
      </p>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="buttons-markup" href="#buttons-markup">Reference Markup</a></p>
    <div class="collapse" id="buttons-markup">
      <pre class="prettyprint">
&lt;p&gt;
  &lt;button class="btn btn-default" type="button"&gt;Secondary&lt;/button&gt;
  &lt;button class="btn btn-primary" type="button"&gt;Primary&lt;/button&gt;
  &lt;button class="btn btn-danger" type="button"&gt;Destructive&lt;/button&gt;
&lt;/p&gt;
&lt;p&gt;
  &lt;button class="btn btn-default btn-lg " type="button"&gt;Secondary Large&lt;/button&gt;
  &lt;button class="btn btn-primary btn-lg " type="button"&gt;Primary Large&lt;/button&gt;
  &lt;button class="btn btn-danger btn-lg" type="button"&gt;Destructive Large&lt;/button&gt;
&lt;/p&gt;
&lt;p&gt;
  &lt;button class="btn btn-default btn-xs" type="button"&gt;Secondary Extra Small&lt;/button&gt;
  &lt;button class="btn btn-primary btn-xs" type="button"&gt;Primary Extra Small&lt;/button&gt;
  &lt;button class="btn btn-danger btn-xs" type="button"&gt;Destructive Extra Small&lt;/button&gt;
&lt;/p&gt;
</pre>
    </div>
  </div>
  <div class="section" id="button-groups">
    <h3>Button Groups</h3>
    <p>See <a href="http://getbootstrap.com/components/#btn-groups">http://getbootstrap.com/components/#btn-groups</a> for complete button groups documentation.</p>
    <div class="pf-example">
      <div class="btn-group">
        <button type="button" class="btn btn-default">Left</button>
        <button type="button" class="btn btn-default">Middle</button>
        <button type="button" class="btn btn-default">Right</button>
      </div>
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="button-groups-markup" href="#button-groups-markup">Reference Markup</a></p></p>
    <div class="collapse" id="button-groups-markup">
      <pre class="prettyprint">
&lt;div class="btn-group"&gt;
  &lt;button type="button" class="btn btn-default"&gt;Left&lt;/button&gt;
  &lt;button type="button" class="btn btn-default"&gt;Middle&lt;/button&gt;
  &lt;button type="button" class="btn btn-default"&gt;Right&lt;/button&gt;
&lt;/div&gt;
</pre>
    </div>
  </div>
  <div class="section" id="cnt-remaining-chars">
    <h3>Count Remaining Characters</h3>
    <p><strong>Note:</strong> By default <code>blockInputAtMaxLimit</code> is <strong>false</strong>, meaning that after
      reaching the maximum number of characters specified, the user can still enter additional characters; the remaining
      character count will turn negative.  When <code>blockInputAtMaxLimit</code> is <strong>true</strong>, the user will
      be blocked from entering more characters after reaching the maximum character limit.  The remaining character count
      will stop at 0.  When <code>blockInputAtMaxLimit</code> is <strong>true</strong>, Right-Click 'paste' will only paste
      characters until the maximum character limit is reached.
    </p>
    <div class="pf-example">
      <form>
        <div class="form-group">
          <label for="messageArea"></label>
          <textarea class="form-control" id="messageArea" name="text" placeholder="Type in your message" rows="5"></textarea>
        </div>
            <span class="pull-right chars-remaining-pf">
              <span id="charRemainingCntFld"></span>
              <button id="postBtn" type="submit" class="btn btn-default">Post New Message</button>
            </span>
      </form>
      <script>
  (function($) {
        $('#messageArea').countRemainingChars( {countFld: 'charRemainingCntFld',
          charsMaxLimit: 100,
          charsWarnRemaining: 5,
          blockInputAtMaxLimit: false} );

        $('#messageArea').on("overCharsMaxLimitEvent", function( event, taId ) {
          $('#postBtn').prop("disabled",true);
        });

        $('#messageArea').on("underCharsMaxLimitEvent", function( event, taId) {
          $('#postBtn').prop("disabled",false);
        });
    })(jQuery);
      </script>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="cntRemainingChars-markup" href="#cntRemainingChars-markup">Reference Markup</a></p>
    <div class="collapse" id="cntRemainingChars-markup">
        <pre class="prettyprint">
&lt;form&gt;
  &lt;div class="form-group"&gt;
    &lt;label for="messageArea"&gt;&lt;/label&gt;
    &lt;textarea class="form-control" id="messageArea" name="text" placeholder="Type in your message"
              rows="5"&gt;&lt;/textarea&gt;
  &lt;/div&gt;
  &lt;span class="pull-right chars-remaining-pf"&gt;
    &lt;span id="charRemainingCntFld"&gt;&lt;/span&gt;
    &lt;button id="postBtn" type="submit" class="btn btn-default"&gt;Post New Message&lt;/button&gt;
  &lt;/span&gt;
&lt;/form&gt;
&lt;script&gt;
  (function($) {
    // countFld is the id of the field where you want the 'remaining chars. count' number
    // to be displayed.
    $('#messageArea').countRemainingChars( {countFld: 'charRemainingCntFld',
                                            charsMaxLimit: 100,
                                            charsWarnRemaining: 5,
                                            blockInputAtMaxLimit: false} );

    // taId is the id of the textArea field which triggered the event
    $('#messageArea').on("overCharsMaxLimitEvent", function( event, taId ) {
      $('#postBtn').prop("disabled",true);
    });
    $('#messageArea').on("underCharsMaxLimitEvent", function( event, taId) {
      $('#postBtn').prop("disabled",false);
    });
  })(jQuery);
&lt;/script&gt;
</pre>
    </div>
  </div>
  <div class="section" id="data-tables">
    <h3>Data Tables</h3>
    <p>See <a href="http://datatables.net">http://datatables.net</a> for complete data tables documentation.</p>
    <p><strong>Note:</strong> jquery.dataTables.js must occur in the html source before patternfly*.js.</p>
    <div class="pf-example">
     {% include widgets/table-view/table-view.html %}
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="data-tables-markup" href="#data-tables-markup">Reference Markup</a></p>
    <div class="collapse" id="data-tables-markup">
      <pre class="prettyprint">{% capture data_tables_markup_include %}{% include widgets/table-view/table-view.html %}
<script src="/components/datatables/media/js/jquery.dataTables.js"></script>
<script>
  // Initialize Datatables
  $(document).ready(function() {
    $('.datatable').dataTable();
  });
</script>{% endcapture %}{{ data_tables_markup_include | xml_escape }}
</pre>
    </div>
  </div>
  <div class="section" id="dropdowns">
    <h3>Dropdowns</h3>
    <p>See <a href="http://getbootstrap.com/components/#dropdowns">http://getbootstrap.com/components/#dropdowns</a> for complete dropdowns documentation.</p>
    <div class="pf-example">
      <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
          Dropdown
          <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
          <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Action</a></li>
          <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Another action</a></li>
          <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Something else here</a></li>
          <li role="presentation" class="divider"></li>
          <li role="presentation" class="disabled"><a role="menuitem" tabindex="-1" href="#">Disabled link</a></li>
          <li role="presentation"><a role="menuitem" tabindex="-1" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="dropdowns-markup" href="#dropdowns-markup">Reference Markup</a></p></p>
    <div class="collapse" id="dropdowns-markup">
      <pre class="prettyprint">
&lt;div class="dropdown"&gt;
  &lt;button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"&gt;
    Dropdown
    &lt;span class="caret"&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1"&gt;
    &lt;li role="presentation"&gt;&lt;a role="menuitem" tabindex="-1" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
    &lt;li role="presentation"&gt;&lt;a role="menuitem" tabindex="-1" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
    &lt;li role="presentation"&gt;&lt;a role="menuitem" tabindex="-1" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
    &lt;li role="presentation" class="divider"&gt;&lt;/li&gt;
    &lt;li role="presentation" class="disabled"&gt;&lt;a role="menuitem" tabindex="-1" href="#"&gt;Disabled link&lt;/a&gt;&lt;/li&gt;
    &lt;li role="presentation"&gt;&lt;a role="menuitem" tabindex="-1" href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
</pre>
    </div>
  </div>
  <div class="section" id="fixed-height-accordion">
    <h3>Fixed Height Accordion (Collapse)</h3>
    <p>Same markup as Accordion but in a fixed height container. The content of the collapse areas scroll rather than expanding the outer accordion container.</p>
    <p><strong>Note:</strong> Setting the collapse areas to scroll rather than expand requires <a href="https://github.com/patternfly/patternfly/blob/master/dist/js/patternfly.min.js">patternfly.min.js</a>, initialization via <code>initCollapseHeights()</code></p>
    <div class="pf-example">
      <div class="panel-group" id="fixed-accordion" style="height: 350px; width:240px;">
        <div class="panel panel-default">
          <div class="panel-heading" data-component="collapse-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#fixed-accordion" href="#fixedCollapseOne">
                Lorem ipsum
              </a>
            </h4>
          </div>
          <div id="fixedCollapseOne" class="panel-collapse collapse in">
            <div class="panel-body">
              Praesent sagittis est et arcu fringilla placerat. Cras erat ante, dapibus non mauris ac, volutpat sollicitudin ligula. Morbi gravida nisl vel risus tempor, sit amet luctus erat tempus. Curabitur blandit sem non pretium bibendum. Donec eleifend non turpis vitae vestibulum. Vestibulum ut sem ac nunc posuere blandit sed porta lorem. Cras rutrum velit vel leo iaculis imperdiet.
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading" data-component="collapse-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#fixed-accordion" href="#fixedCollapseTwo" class="collapsed">
                Dolor sit amet
              </a>
            </h4>
          </div>
          <div id="fixedCollapseTwo" class="panel-collapse collapse">
            <div class="panel-body">
              Donec consequat dignissim neque, sed suscipit quam egestas in. Fusce bibendum laoreet lectus commodo interdum. Vestibulum odio ipsum, tristique et ante vel, iaculis placerat nulla. Suspendisse iaculis urna feugiat lorem semper, ut iaculis risus tempus.
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading" data-component="collapse-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#fixed-accordion" href="#fixedCollapseThree" class="collapsed">
                Consectetur
              </a>
            </h4>
          </div>
          <div id="fixedCollapseThree" class="panel-collapse collapse">
            <div class="panel-body">
              Curabitur nisl quam, interdum a venenatis a, consequat a ligula. Nunc nec lorem in erat rhoncus lacinia at ac orci. Sed nec augue congue, vehicula justo quis, venenatis turpis. Nunc quis consectetur purus. Nam vitae viverra lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue felis. Maecenas in dignissim purus, quis pulvinar lectus. Vivamus euismod ultrices diam, in mattis nibh.
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading" data-component="collapse-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#fixed-accordion" href="#fixedCollapseFour" class="collapsed">
                Adipisicing elit
              </a>
            </h4>
          </div>
          <div id="fixedCollapseFour" class="panel-collapse collapse">
            <div class="panel-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.              </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading" data-component="collapse-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#fixed-accordion" href="#fixedCollapseFive" class="collapsed">
                Suspendisse lectus tortor
              </a>
            </h4>
          </div>
          <div id="fixedCollapseFive" class="panel-collapse collapse">
            <div class="panel-body">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading" data-component="collapse-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#fixed-accordion" href="#fixedCollapseSix" class="collapsed">
                Velit mauris
              </a>
            </h4>
          </div>
          <div id="fixedCollapseSix" class="panel-collapse collapse">
            <div class="panel-body">
              Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading" data-component="collapse-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#fixed-accordion" href="#fixedCollapseSeven" class="collapsed">
                Aliquam convallis
              </a>
            </h4>
          </div>
          <div id="fixedCollapseSeven" class="panel-collapse collapse">
            <div class="panel-body">
              Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet.
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading" data-component="collapse-heading">
            <h4 class="panel-title">
              <a data-toggle="collapse" data-parent="#fixed-accordion" href="#fixedCollapseEight" class="collapsed">
                Vulputate dictum
              </a>
            </h4>
          </div>
          <div id="fixedCollapseEight" class="panel-collapse collapse">
            <div class="panel-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a nulla. Ut a orci. Curabitur dolor nunc, egestas at, accumsan at, malesuada nec, magna.
            </div>
          </div>
        </div>
      </div>
    </div>
    <script>
      jQuery(document).ready(function() {
        jQuery('#fixed-accordion').initCollapseHeights();
      });
    </script>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="accordion-markup" href="#fixed-accordion-markup">Reference Markup</a></p>
    <div class="collapse" id="fixed-accordion-markup">
        <pre class="prettyprint">
        &lt;div class="panel-group" id="fixed-accordion" style="height: 350px;"&gt;
          &lt;div class="panel panel-default"&gt;
            &lt;div class="panel-heading" data-component="collapse-heading"&gt;
              &lt;h4 class="panel-title"&gt;
                &lt;a data-toggle="collapse" data-parent="#fixed-accordion" href="#fixedCollapseOne"&gt;
                  Lorem ipsum
                &lt;/a&gt;
              &lt;/h4&gt;
            &lt;/div&gt;
            &lt;div id="fixedCollapseOne" class="panel-collapse collapse in"&gt;
              &lt;div class="panel-body"&gt;
                Praesent sagittis est et arcu fringilla placerat. Cras erat ante, dapibus non mauris ac, volutpat sollicitudin ligula. Morbi gravida nisl vel risus tempor, sit amet luctus erat tempus. Curabitur blandit sem non pretium bibendum. Donec eleifend non turpis vitae vestibulum. Vestibulum ut sem ac nunc posuere blandit sed porta lorem. Cras rutrum velit vel leo iaculis imperdiet.
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="panel panel-default"&gt;
            &lt;div class="panel-heading" data-component="collapse-heading"&gt;
              &lt;h4 class="panel-title"&gt;
                &lt;a data-toggle="collapse" data-parent="#fixed-accordion" href="#fixedCollapseTwo" class="collapsed"&gt;
                  Dolor sit amet
                &lt;/a&gt;
              &lt;/h4&gt;
            &lt;/div&gt;
            &lt;div id="fixedCollapseTwo" class="panel-collapse collapse"&gt;
              &lt;div class="panel-body"&gt;
                Donec consequat dignissim neque, sed suscipit quam egestas in. Fusce bibendum laoreet lectus commodo interdum. Vestibulum odio ipsum, tristique et ante vel, iaculis placerat nulla. Suspendisse iaculis urna feugiat lorem semper, ut iaculis risus tempus.
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="panel panel-default"&gt;
            &lt;div class="panel-heading" data-component="collapse-heading"&gt;
              &lt;h4 class="panel-title"&gt;
                &lt;a data-toggle="collapse" data-parent="#fixed-accordion" href="#fixedCollapseThree" class="collapsed"&gt;
                  Consectetur
                &lt;/a&gt;
              &lt;/h4&gt;
            &lt;/div&gt;
            &lt;div id="fixedCollapseThree" class="panel-collapse collapse"&gt;
              &lt;div class="panel-body"&gt;
                Curabitur nisl quam, interdum a venenatis a, consequat a ligula. Nunc nec lorem in erat rhoncus lacinia at ac orci. Sed nec augue congue, vehicula justo quis, venenatis turpis. Nunc quis consectetur purus. Nam vitae viverra lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu augue felis. Maecenas in dignissim purus, quis pulvinar lectus. Vivamus euismod ultrices diam, in mattis nibh.
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="panel panel-default"&gt;
            &lt;div class="panel-heading" data-component="collapse-heading"&gt;
              &lt;h4 class="panel-title"&gt;
                &lt;a data-toggle="collapse" data-parent="#fixed-accordion" href="#fixedCollapseFour" class="collapsed"&gt;
                  Adipisicing elit
                &lt;/a&gt;
              &lt;/h4&gt;
            &lt;/div&gt;
            &lt;div id="fixedCollapseFour" class="panel-collapse collapse"&gt;
              &lt;div class="panel-body"&gt;
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="panel panel-default"&gt;
            &lt;div class="panel-heading" data-component="collapse-heading"&gt;
              &lt;h4 class="panel-title"&gt;
                &lt;a data-toggle="collapse" data-parent="#fixed-accordion" href="#fixedCollapseFive" class="collapsed"&gt;
                  Suspendisse lectus tortor
                &lt;/a&gt;
              &lt;/h4&gt;
            &lt;/div&gt;
            &lt;div id="fixedCollapseFive" class="panel-collapse collapse"&gt;
              &lt;div class="panel-body"&gt;
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="panel panel-default"&gt;
            &lt;div class="panel-heading" data-component="collapse-heading"&gt;
              &lt;h4 class="panel-title"&gt;
                &lt;a data-toggle="collapse" data-parent="#fixed-accordion" href="#fixedCollapseSix" class="collapsed"&gt;
                  Velit mauris
                &lt;/a&gt;
              &lt;/h4&gt;
            &lt;/div&gt;
            &lt;div id="fixedCollapseSix" class="panel-collapse collapse"&gt;
              &lt;div class="panel-body"&gt;
                Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="panel panel-default"&gt;
            &lt;div class="panel-heading" data-component="collapse-heading"&gt;
              &lt;h4 class="panel-title"&gt;
                &lt;a data-toggle="collapse" data-parent="#fixed-accordion" href="#fixedCollapseSeven" class="collapsed"&gt;
                  Aliquam convallis
                &lt;/a&gt;
              &lt;/h4&gt;
            &lt;/div&gt;
            &lt;div id="fixedCollapseSeven" class="panel-collapse collapse"&gt;
              &lt;div class="panel-body"&gt;
                Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Curabitur iaculis, lorem vel rhoncus faucibus, felis magna fermentum augue, et ultricies lacus lorem varius purus. Curabitur eu amet.
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="panel panel-default"&gt;
            &lt;div class="panel-heading" data-component="collapse-heading"&gt;
              &lt;h4 class="panel-title"&gt;
                &lt;a data-toggle="collapse" data-parent="#fixed-accordion" href="#fixedCollapseEight" class="collapsed"&gt;
                  Vulputate dictum
                &lt;/a&gt;
              &lt;/h4&gt;
            &lt;/div&gt;
            &lt;div id="fixedCollapseEight" class="panel-collapse collapse"&gt;
              &lt;div class="panel-body"&gt;
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a nulla. Ut a orci. Curabitur dolor nunc, egestas at, accumsan at, malesuada nec, magna.
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;script&gt;
          $(document).ready(function() {
            $('#fixed-accordion').initCollapseHeights();
          });
        &lt;/script&gt;
        </pre>
    </div>
  </div>
  <div class="section" id="forms">
    <h3>Forms</h3>
    <p>See <a href="http://getbootstrap.com/css/#forms">http://getbootstrap.com/css/#forms</a> for complete forms documentation.</p>
    <h4>Horizontal Form</h4>
    <div class="pf-example">
      <form class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label" for="textInput">Default</label>
          <div class="col-sm-10">
            <input type="text" id="textInput" class="form-control"></div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label" for="textInputDisabled">Disabled</label>
          <div class="col-sm-10">
            <input type="text" id="textInputDisabled" class="form-control" disabled></div>
        </div>
        <div class="form-group has-error">
          <label class="col-sm-2 control-label" for="inputError">With error</label>
          <div class="col-sm-10">
            <input type="text" id="inputError" class="form-control">
            <span class="help-block">Please correct the error</span>
          </div>
        </div>
      </form>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="forms-markup" href="#forms-markup">Reference Markup</a></p>
    <div class="collapse" id="forms-markup">
      <pre class="prettyprint">
&lt;form class="form-horizontal"&gt;
  &lt;div class="form-group"&gt;
    &lt;label class="col-sm-2 control-label" for="textInput-markup"&gt;Default&lt;/label&gt;
    &lt;div class="col-sm-10"&gt;
      &lt;input type="text" id="textInput-markup" class="form-control"&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="form-group"&gt;
    &lt;label class="col-sm-2 control-label" for="textInputDisabled-markup"&gt;Disabled&lt;/label&gt;
    &lt;div class="col-sm-10"&gt;
      &lt;input type="text" id="textInputDisabled-markup" class="form-control" disabled&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="form-group has-error"&gt;
    &lt;label class="col-sm-2 control-label" for="inputError-markup"&gt;With error&lt;/label&gt;
    &lt;div class="col-sm-10"&gt;
      &lt;input type="text" id="inputError-markup" class="form-control"&gt;
      &lt;span class="help-block"&gt;Please correct the error&lt;/span&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/form&gt;
</pre>
    </div>
  </div>
  <div class="section" id="google-code-prettify">
    <h3>Google Code Prettify</h3>
    <p>See <a href="https://code.google.com/p/google-code-prettify/wiki/GettingStarted">https://code.google.com/p/google-code-prettify/wiki/GettingStarted</a> for complete Google Code Prettify documentation.</p>
    <div class="pf-example">
      <pre class="prettyprint">&lt;p class="my-class"&gt;Sample text here...&lt;/p&gt;</pre>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="google-code-prettify-markup" href="#google-code-prettify-markup">Reference Markup</a></p>
    <div class="collapse" id="google-code-prettify-markup">
      <pre class="prettyprint">
&lt;pre class="prettyprint"&gt;
&lt;p class="my-class"&gt;Sample text here...&lt;/p&gt;
&lt;/pre&gt;
&lt;script src="/components/google-code-prettify/bin/prettify.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
  (function($) {
    $(document).ready(function(){
      prettyPrint();
    });
  })(jQuery);
&lt;/script&gt;
</pre>
    </div>
  </div>
  <div class="section" id="info-tip">
    <h3>Info Tip</h3>
    <p><strong>Note:</strong> Info Tip uses <a href="#dropdowns">Dropdowns</a>.</p>
    <div class="pf-example">
      <nav class="navbar navbar-default navbar-pf" role="navigation">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">
            <img class="navbar-brand-name" src="{{site.baseurl}}/{{site.navbar-brand-alt-icon}}" alt="{{site.title-product}}" />
          </a>
        </div>
        <div class="collapse navbar-collapse navbar-collapse-1">
          <ul class="nav navbar-nav navbar-utility">
            <li class="dropdown open">
              <a href="#" data-toggle="dropdown">
                <span class="pficon pficon-info"></span>
                Messages: <strong>2</strong>
              </a>
              <div class="dropdown-menu infotip bottom-right">
                <div class="arrow"></div>
                <ul class="list-group">
                  <li class="list-group-item">
                    <span class="i pficon pficon-info"></span>
                    Added Datasources TestDS
                  </li>
                  <li class="list-group-item">
                    <span class="i pficon pficon-info"></span>
                    Modified Datasources ExampleDS
                  </li>
                </ul>
                <div class="footer"><a href="#">Clear Messages</a></div>
              </div>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-primary">
            <li>
              <a href="#">First Link</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="info-tip-markup" href="#info-tip-markup">Reference Markup</a></p></p>
    <div class="collapse" id="info-tip-markup">
      <pre class="prettyprint">
&lt;nav class="navbar navbar-default navbar-pf" role="navigation"&gt;
  &lt;div class="navbar-header"&gt;
    &lt;button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-1"&gt;
      &lt;span class="sr-only"&gt;Toggle navigation&lt;/span&gt;
      &lt;span class="icon-bar"&gt;&lt;/span&gt;
      &lt;span class="icon-bar"&gt;&lt;/span&gt;
      &lt;span class="icon-bar"&gt;&lt;/span&gt;
    &lt;/button&gt;
    &lt;a class="navbar-brand" href="/"&gt;
      &lt;img src="{{site.navbar-brand-alt-icon}}" alt="{{site.title-product}}" /&gt;
    &lt;/a&gt;
  &lt;/div&gt;
  &lt;div class="collapse navbar-collapse navbar-collapse-1"&gt;
    &lt;ul class="nav navbar-nav navbar-utility"&gt;
      &lt;li class="dropdown"&gt;
        &lt;a href="#" data-toggle="dropdown"&gt;
          &lt;span class="pficon pficon-info"&gt;&lt;/span&gt;
          Messages: &lt;strong&gt;2&lt;/strong&gt;
        &lt;/a&gt;
        &lt;div class="dropdown-menu infotip bottom-right"&gt;
          &lt;div class="arrow"&gt;&lt;/div&gt;
          &lt;ul class="list-group"&gt;
            &lt;li class="list-group-item"&gt;
              &lt;span class="i pficon pficon-info"&gt;&lt;/span&gt;
              Added Datasources TestDS
            &lt;/li&gt;
            &lt;li class="list-group-item"&gt;
              &lt;span class="i pficon pficon-info"&gt;&lt;/span&gt;
              Modified Datasources ExampleDS
            &lt;/li&gt;
          &lt;/ul&gt;
          &lt;div class="footer"&gt;&lt;a href="#"&gt;Clear Messages&lt;/a&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    &lt;ul class="nav navbar-nav navbar-primary"&gt;
      &lt;li&gt;
        &lt;a href="#"&gt;First Link&lt;/a&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
&lt;/nav&gt;
</pre>
    </div>
  </div>
  <div class="section" id="kebabs">
    <h3>Kebabs</h3>
    <p>Kebabs are a restyled version of a dropdown and support the same feature set. See <a href="http://getbootstrap.com/components/#dropdowns">http://getbootstrap.com/components/#dropdowns</a> for complete dropdowns documentation.</p>
    <div class="pf-example">
      <div class="dropdown  dropdown-kebab-pf">
        <button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebab" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <span class="fa fa-ellipsis-v"></span>
        </button>
        <ul class="dropdown-menu " aria-labelledby="dropdownKebab">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another Action</a></li>
          <li><a href="#">Something Else Here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated Link</a></li>
        </ul>
      </div>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="dropdowns-markup" href="#kebabs-markup">Reference Markup</a></p>
    <div class="collapse" id="kebabs-markup">
      <pre class="prettyprint">
      &lt;div class="dropdown  dropdown-kebab-pf"&gt;
        &lt;button class="btn btn-link dropdown-toggle" type="button" id="dropdownKebab" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"&gt;
          &lt;span class="fa fa-ellipsis-v"&gt;&lt;/span&gt;
        &lt;/button&gt;
        &lt;ul class="dropdown-menu " aria-labelledby="dropdownKebab"&gt;
          &lt;li&gt;&lt;a href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
          &lt;li role="separator" class="divider"&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
      </pre>
    </div>
  </div>
  <div class="section" id="labels">
    <h3>Labels</h3>
    <p>See <a href="http://getbootstrap.com/components/#labels">http://getbootstrap.com/components/#labels</a> for complete labels documentation.</p>
    <div class="pf-example">
      <span class="label label-default">Default</span>
      <span class="label label-primary">Primary</span>
      <span class="label label-success">Success</span>
      <span class="label label-info">Info</span>
      <span class="label label-warning">Warning</span>
      <span class="label label-danger">Danger</span>
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="labels-markup" href="#labels-markup">Reference Markup</a></p></p>
    <div class="collapse" id="labels-markup">
      <pre class="prettyprint">
&lt;span class="label label-default"&gt;Default&lt;/span&gt;
&lt;span class="label label-primary"&gt;Primary&lt;/span&gt;
&lt;span class="label label-success"&gt;Success&lt;/span&gt;
&lt;span class="label label-info"&gt;Info&lt;/span&gt;
&lt;span class="label label-warning"&gt;Warning&lt;/span&gt;
&lt;span class="label label-danger"&gt;Danger&lt;/span&gt;
</pre>
    </div>
  </div>
  <div class="section" id="list-group">
    <h3>List Group</h3>
    <p>See <a href="http://getbootstrap.com/components/#list-group">http://getbootstrap.com/components/#list-group</a> for complete list group documentation.</p>
    <div class="pf-example">
      <ul class="list-group">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="list-group-markup" href="#list-group-markup">Reference Markup</a></p>
    <div class="collapse" id="list-group-markup">
      <pre class="prettyprint">
&lt;ul class="list-group"&gt;
  &lt;li class="list-group-item"&gt;Cras justo odio&lt;/li&gt;
  &lt;li class="list-group-item"&gt;Dapibus ac facilisis in&lt;/li&gt;
  &lt;li class="list-group-item"&gt;Morbi leo risus&lt;/li&gt;
  &lt;li class="list-group-item"&gt;Porta ac consectetur ac&lt;/li&gt;
  &lt;li class="list-group-item"&gt;Vestibulum at eros&lt;/li&gt;
&lt;/ul&gt;
</pre>
    </div>
  </div>
  <div class="section" id="modal">
    <h3>Modal</h3>
    <p>See <a href="http://getbootstrap.com/javascript/#modals">http://getbootstrap.com/javascript/#modals</a> for complete modal documentation.</p>
    <div class="pf-example">
      <button class="btn btn-default" data-toggle="modal" data-target="#myModal">Launch demo modal</button>
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                <span class="pficon pficon-close"></span>
              </button>
              <h4 class="modal-title" id="myModalLabel">Modal Title</h4>
            </div>
            <div class="modal-body">
              <form class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label" for="textInput-modal">Field One</label>
                  <div class="col-sm-9">
                    <input type="text" id="textInput-modal" class="form-control"></div>
                </div>
                <div class="form-group">
                  <label class="col-sm-3 control-label" for="textInput2-modal">Field Two</label>
                  <div class="col-sm-9">
                    <input type="text" id="textInput2-modal" class="form-control"></div>
                </div>
                <div class="form-group">
                  <label class="col-sm-3 control-label" for="textInput3-modal">Field Three</label>
                  <div class="col-sm-9">
                    <input type="text" id="textInput3-modal" class="form-control">
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="modal-markup" href="#modal-markup">Reference Markup</a></p></p>
    <div class="collapse" id="modal-markup">
      <pre class="prettyprint">
&lt;button class="btn btn-default" data-toggle="modal" data-target="#myModal">Launch demo modal&lt;/button&gt;
&lt;div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"&gt;
  &lt;div class="modal-dialog"&gt;
    &lt;div class="modal-content"&gt;
      &lt;div class="modal-header"&gt;
        &lt;button type="button" class="close" data-dismiss="modal" aria-hidden="true"&gt;
          &lt;span class="pficon pficon-close"&gt;&lt;/span&gt;
        &lt;/button&gt;
        &lt;h4 class="modal-title" id="myModalLabel"&gt;Modal Title&lt;/h4&gt;
      &lt;/div&gt;
      &lt;div class="modal-body"&gt;
        &lt;form class="form-horizontal"&gt;
          &lt;div class="form-group"&gt;
            &lt;label class="col-sm-3 control-label" for="textInput-modal-markup"&gt;Field One&lt;/label&gt;
            &lt;div class="col-sm-9"&gt;
              &lt;input type="text" id="textInput-modal-markup" class="form-control"&gt;&lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="form-group"&gt;
            &lt;label class="col-sm-3 control-label" for="textInput2-modal-markup"&gt;Field Two&lt;/label&gt;
            &lt;div class="col-sm-9"&gt;
              &lt;input type="text" id="textInput2-modal-markup" class="form-control"&gt;&lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="form-group"&gt;
            &lt;label class="col-sm-3 control-label" for="textInput3-modal-markup"&gt;Field Three&lt;/label&gt;
            &lt;div class="col-sm-9"&gt;
              &lt;input type="text" id="textInput3-modal-markup" class="form-control"&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/form&gt;
      &lt;/div&gt;
      &lt;div class="modal-footer"&gt;
        &lt;button type="button" class="btn btn-default" data-dismiss="modal"&gt;Cancel&lt;/button&gt;
        &lt;button type="button" class="btn btn-primary"&gt;Save&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>
    </div>
  </div>
  <div class="section" id ="pagination">
    <h3>Pagination</h3>
    <p>See <a href="http://getbootstrap.com/components/#pagination">http://getbootstrap.com/components/#pagination</a> for complete pagination documentation.</p>
    <h4>Default Pagination</h4>
    <div class="pf-example">
      <ul class="pagination">
        <li>
          <a href="#">
            <span class="i fa fa-angle-left"></span>
          </a>
        </li>
        <li>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li>
          <a href="#">
            <span class="i fa fa-angle-right"></span>
          </a>
        </li>
      </ul>
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="pagination-markup" href="#pagination-markup">Reference Markup</a></p></p>
    <div class="collapse" id="pagination-markup">
      <pre class="prettyprint">
&lt;ul class="pagination"&gt;
  &lt;li&gt;
    &lt;a href="#"&gt;
      &lt;span class="i fa fa-angle-left"&gt;&lt;/span&gt;
    &lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href="#"&gt;1&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href="#"&gt;2&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href="#"&gt;3&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href="#"&gt;4&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href="#"&gt;5&lt;/a&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;a href="#"&gt;
      &lt;span class="i fa fa-angle-right"&gt;&lt;/span&gt;
    &lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;
</pre>
    </div>
    <h4>Pager</h4>
    <div class="pf-example">
      <ul class="pager">
        <li class="previous">
          <a href="#">
            <span class="i fa fa-angle-left"></span>
            Previous
          </a>
        </li>
        <li class="next">
          <a href="#">
            Next
            <span class="i fa fa-angle-right"></span>
          </a>
        </li>
      </ul>
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="pager-markup" href="#pager-markup">Reference Markup</a></p></p>
    <div class="collapse" id="pager-markup">
      <pre class="prettyprint">
&lt;ul class="pager"&gt;
  &lt;li class="previous"&gt;
    &lt;a href="#"&gt;
      &lt;span class="i fa fa-angle-left"&gt;&lt;/span&gt;
      Previous
    &lt;/a&gt;
  &lt;/li&gt;
  &lt;li class="next"&gt;
    &lt;a href="#"&gt;
      Next
      &lt;span class="i fa fa-angle-right"&gt;&lt;/span&gt;
    &lt;/a&gt;
  &lt;/li&gt;
&lt;/ul&gt;
</pre>
    </div>
  </div>
  <div class="section" id="panels">
    <h3>Panels</h3>
    <p>See <a href="http://getbootstrap.com/components/#panels">http://getbootstrap.com/components/#panels</a> for complete panels documentation.</p>
    <div class="pf-example">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Panel title</h3>
        </div>
        <div class="panel-body">
          Panel content
        </div>
      </div>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="panels-markup" href="#panels-markup">Reference Markup</a></p>
    <div class="collapse" id="panels-markup">
      <pre class="prettyprint">
&lt;div class="panel panel-default"&gt;
  &lt;div class="panel-heading"&gt;
    &lt;h3 class="panel-title"&gt;Panel title&lt;/h3&gt;
  &lt;/div&gt;
  &lt;div class="panel-body"&gt;
    Panel content
  &lt;/div&gt;
&lt;/div&gt;
</pre>
    </div>
  </div>
  <div class="section" id="popover">
    <h3>Popover</h3>
    <p>See <a href="http://getbootstrap.com/javascript/#popovers">http://getbootstrap.com/javascript/#popovers</a> for complete popover documentation.</p>
    <p><strong>Note:</strong> Displaying the close (X) icon in popovers requires <a href="https://github.com/patternfly/patternfly/blob/master/dist/js/patternfly.min.js">patternfly.min.js</a>, initialization via <code>popover<strong>s</strong>()</code> (note the "s"), and adding data attribute <strong>data-close="true"</strong>
      to the trigger element.
    </p>
    <div class="pf-example">
      <a href="#" class="btn btn-default" data-toggle="popover" data-html="true" title="1 http smartproxy 1 http http http" data-content="This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy." data-close="true">Click to toggle popover 1</a>
    </div>
    <div class="pf-example" style="margin-top: 20px;">
      <a href="#" class="btn btn-default" data-toggle="popover" data-html="true" title="" data-content="Close icon with no Title text. This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy." data-close="true">Click to toggle popover 2</a>
    </div>
    <div class="pf-example" style="margin: 20px 0;">
      <a href="#" class="btn btn-default" data-toggle="popover" data-html="true" title="3 popover example" data-content="Popover with no Close icon.
        This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy.">Click to toggle popover 3
      </a>
    </div>
    <div class="pf-example" style="margin: 20px 0;">
      <a href="#" class="btn btn-default" data-toggle="popover" data-html="true" title="" data-content="Empty Title example.
        This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy.">Click to toggle popover 4
      </a>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="popover-markup" href="#popover-markup">Reference Markup</a></p>
    <div class="collapse" id="popover-markup">
      <pre class="prettyprint">
&lt;div&gt;
  &lt;a href="#" class="btn btn-default" data-toggle="popover" data-html="true" title="1 http smartproxy 1 http http http" data-content="This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy." data-close="true"&gt;Click to toggle popover 1&lt;/a&gt;
&lt;/div&gt;
&lt;div style="margin-top: 20px;"&gt;
  &lt;a href="#" class="btn btn-default" data-toggle="popover" data-html="true" title="" data-content="Close icon with no Title text. This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy." data-close="true"&gt;Click to toggle popover 2&lt;/a&gt;
&lt;/div&gt;
&lt;div style="margin: 20px 0;"&gt;
  &lt;a href="#" class="btn btn-default" data-toggle="popover" data-html="true" title="3 popover example" data-content="Popover with no Close icon.
    This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy."&gt;Click to toggle popover 3
  &lt;/a&gt;
&lt;/div&gt;
&lt;div style="margin: 20px 0;"&gt;
  &lt;a href="#" class="btn btn-default" data-toggle="popover" data-html="true" title="" data-content="Empty Title example.
    This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy."&gt;Click to toggle popover 4
  &lt;/a&gt;
&lt;/div&gt;
&lt;script&gt;
  // Initialize Popovers
  $(document).ready(function() {
    $('[data-toggle=popover]').popovers()
      .on('hidden.bs.popover', function (e) {
        $(e.target).data('bs.popover').inState.click = false;
      });
  });
&lt;/script&gt;
</pre>
    </div>
  </div>
  <div class="section" id="progress-bars">
    <h3>Progress Bars</h3>
    <p>See <a href="http://getbootstrap.com/components/#progress">http://getbootstrap.com/components/#progress</a> for complete progress bar documentation.</p>
    <h4>Basic</h4>
    <div class="pf-example">
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
          <span class="sr-only">60% complete</span>
        </div>
      </div>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="progress-basic-markup" href="#progress-basic-markup">Reference Markup</a></p>
    <div class="collapse" id="progress-basic-markup">
      <pre class="prettyprint">
&lt;div class="progress"&gt;
  &lt;div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"&gt;
    &lt;span class="sr-only"&gt;60% complete&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>
    </div>
    <h4>With Label</h4>
    <div class="pf-example">
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;">
          <span>50%</span>
        </div>
      </div>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="progress-label-markup" href="#progress-label-markup">Reference Markup</a></p>
    <div class="collapse" id="progress-label-markup">
      <pre class="prettyprint">
&lt;div class="progress"&gt;
  &lt;div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"&gt;
    &lt;span&gt;50%&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>
    </div>
    <h5>Label on Left</h5>
    <div class="pf-example">
      <div class="progress progress-label-left">
        <div class="progress-bar" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style="width: 5%;">
          <span>5%</span>
        </div>
      </div>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="progress-label-left-markup" href="#progress-label-left-markup">Reference Markup</a></p>
    <div class="collapse" id="progress-label-left-markup">
      <pre class="prettyprint">
&lt;div class="progress progress-label-left"&gt;
  &lt;div class="progress-bar" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style="width: 5%;"&gt;
    &lt;span&gt;5%&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>
    </div>
    <h5>Label on Top Left and Top Right</h5>
    <div class="pf-example">
      <div class="progress-description">
        <div class="spinner spinner-xs spinner-inline"></div> <strong>Downloading:</strong>  Product Repositories
      </div>
      <div class="progress progress-label-top-right">
        <div class="progress-bar" role="progressbar" aria-valuenow="42.7" aria-valuemin="0" aria-valuemax="100" style="width: 42.7%;">
          <span>42.7% (35 of 82MB)</span>
        </div>
      </div>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="progress-label-left-right-1-markup" href="#progress-label-left-right-1-markup">Reference Markup</a></p>
    <div class="collapse" id="progress-label-left-right-1-markup">
      <pre class="prettyprint">
&lt;div class="progress-description"&gt;
  &lt;div class="spinner spinner-xs spinner-inline"&gt;&lt;/div&gt; &lt;strong&gt;Downloading:&lt;/strong&gt;  Product Repositories
&lt;/div&gt;
&lt;div class="progress progress-label-top-right"&gt;
  &lt;div class="progress-bar" role="progressbar" aria-valuenow="42.7" aria-valuemin="0" aria-valuemax="100" style="width: 42.7%;"&gt;
    &lt;span&gt;42.7% (35 of 82MB)&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>
    </div>
  </div>
  <div class="pf-example">
    <div class="progress-description">
      <span class="count">46,512</span> <strong>Downloading:</strong>  Product Repositories
    </div>
    <div class="progress progress-label-top-right">
      <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">
        <span>100%</span>
      </div>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="progress-label-left-right-2-markup" href="#progress-label-left-right-2-markup">Reference Markup</a></p>
    <div class="collapse" id="progress-label-left-right-2-markup">
      <pre class="prettyprint">
&lt;div class="progress-description"&gt;
  &lt;span class="count"&gt;46,512&lt;/span&gt; &lt;strong&gt;Downloading:&lt;/strong&gt;  Product Repositories
&lt;/div&gt;
&lt;div class="progress progress-label-top-right"&gt;
  &lt;div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"&gt;
    &lt;span&gt;100%&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>
    </div>
  </div>
  <div class="pf-example">
    <div class="progress-description">
      <span class="pficon pficon-ok"></span> <strong>Network Activity:</strong>  10.10.121.02
    </div>
    <div class="progress progress-label-top-right">
      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">
        <span>100%</span>
      </div>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="progress-label-left-right-3-markup" href="#progress-label-left-right-3-markup">Reference Markup</a></p>
    <div class="collapse" id="progress-label-left-right-3-markup">
      <pre class="prettyprint">
&lt;div class="progress-description"&gt;
  &lt;span class="pficon pficon-ok"&gt;&lt;/span&gt; &lt;strong&gt;Network Activity:&lt;/strong&gt;  10.10.121.02
&lt;/div&gt;
&lt;div class="progress progress-label-top-right"&gt;
  &lt;div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"&gt;
    &lt;span&gt;100%&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>
    </div>
    <h4>Additional Sizes</h4>
    <h5>Small</h5>
    <div class="pf-example">
      <div class="progress progress-sm">
        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
          <span class="sr-only">60% complete</span>
        </div>
      </div>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="progress-size-small-markup" href="#progress-size-small-markup">Reference Markup</a></p>
    <div class="collapse" id="progress-size-small-markup">
      <pre class="prettyprint">
&lt;div class="progress progress-sm"&gt;
  &lt;div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"&gt;
    &lt;span class="sr-only"&gt;60% complete&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>
    </div>
    <h5>Extra Small</h5>
    <p><strong>Note:</strong> Extra small does not support labels.</p>
    <div class="pf-example">
      <div class="progress progress-xs">
        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
          <span class="sr-only">60% complete</span>
        </div>
      </div>
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="progress-size-extra-small-markup" href="#progress-size-extra-small-markup">Reference Markup</a></p></p>
    <div class="collapse" id="progress-size-extra-small-markup">
      <pre class="prettyprint">
&lt;div class="progress progress-xs"&gt;
  &lt;div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"&gt;
    &lt;span class="sr-only"&gt;60% complete&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>
    </div>
  </div>
  <div class="section" id="search">
    <h3>Search</h3>
    <div class="pf-example">
      <form role="form" class="search-pf has-button">
        <div class="form-group has-clear">
          <div class="search-pf-input-group">
            <label for="search1" class="sr-only">Search</label>
            <input id="search1" type="search" class="form-control" placeholder="Search">
            <button type="button" class="clear" aria-hidden="true"><span class="pficon pficon-close"></span></button>
          </div>
        </div>
        <div class="form-group">
          <button class="btn btn-default" type="button"><span class="fa fa-search"></span></button>
        </div>
      </form>
      <script>
        (function($) {
          $(document).ready(function() {
            // Hide the clear button if the search input is empty
            $(".search-pf .has-clear .clear").each(function() {
              if (!$(this).prev('.form-control').val()) {
                $(this).hide();
              }
            });
            // Show the clear button upon entering text in the search input
            $(".search-pf .has-clear .form-control").keyup(function () {
              var t = $(this);
              t.next('button').toggle(Boolean(t.val()));
            });
            // Upon clicking the clear button, empty the entered text and hide the clear button
            $(".search-pf .has-clear .clear").click(function () {
              $(this).prev('.form-control').val('').focus();
              $(this).hide();
            });
          });
        })(jQuery);
      </script>
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="search-markup" href="#search-markup">Reference Markup</a></p></p>
    <div class="collapse" id="search-markup">
      <pre class="prettyprint">
&lt;form role="form" class="search-pf has-button"&gt;
  &lt;div class="form-group has-clear"&gt;
    &lt;div class="search-pf-input-group"&gt;
      &lt;label for="search1" class="sr-only"&gt;Search&lt;/label&gt;
      &lt;input id="search1" type="search" class="form-control" placeholder="Search"&gt;
      &lt;button type="button" class="clear" aria-hidden="true"&gt;&lt;span class="pficon pficon-close"&gt;&lt;/span&gt;&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="form-group"&gt;
    &lt;button class="btn btn-default" type="button"&gt;&lt;span class="fa fa-search"&gt;&lt;/span&gt;&lt;/button&gt;
  &lt;/div&gt;
&lt;/form&gt;
&lt;script&gt;
  (function($) {
    $(document).ready(function() {
      // Hide the clear button if the search input is empty
      $(".search-pf .has-clear .clear").each(function() {
        if (!$(this).prev('.form-control').val()) {
          $(this).hide();
        }
      });
      // Show the clear button upon entering text in the search input
      $(".search-pf .has-clear .form-control").keyup(function () {
        var t = $(this);
        t.next('button').toggle(Boolean(t.val()));
      });
      // Upon clicking the clear button, empty the entered text and hide the clear button
      $(".search-pf .has-clear .clear").click(function () {
        $(this).prev('.form-control').val('').focus();
        $(this).hide();
      });
    });
  })(jQuery);
&lt;/script&gt;
</pre>
    </div>
  </div>
  <div class="section" id="spinner">
    <h3>Spinner</h3>
    <p><strong>Note:</strong> IE9 requires a conditional class on &lt;html&gt; in order to display an animated gif fallback as it doesn't support CSS animation.  See lines 2-5 of <a href="https://rawgit.com/patternfly/patternfly/master-dist/dist/tests/spinner.html">https://rawgit.com/patternfly/patternfly/master-dist/dist/tests/spinner.html</a>.</p>
    <div class="pf-example">
      <div class="spinner"></div>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="spinner-markup" href="#spinner-markup">Reference Markup</a></p>
    <div class="collapse" id="spinner-markup">
      <pre class="prettyprint">
&lt;div class="spinner"&gt;&lt;/div&gt;
</pre>
    </div>
    <h4>Additional Sizes</h4>
    <h5>Large</h5>
    <div class="pf-example">
      <div class="spinner spinner-lg"></div>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="spinner-lg-markup" href="#spinner-lg-markup">Reference Markup</a></p>
    <div class="collapse" id="spinner-lg-markup">
      <pre class="prettyprint">
&lt;div class="spinner spinner-lg"&gt;&lt;/div&gt;
</pre>
    </div>
    <h5>Small</h5>
    <div class="pf-example">
      <div class="spinner spinner-sm"></div>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="spinner-sm-markup" href="#spinner-sm-markup">Reference Markup</a></p>
    <div class="collapse" id="spinner-sm-markup">
      <pre class="prettyprint">
&lt;div class="spinner spinner-sm"&gt;&lt;/div&gt;
</pre>
    </div>
    <h5>Extra Small</h5>
    <div class="pf-example">
      <div class="spinner spinner-xs"></div>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="spinner-xs-markup" href="#spinner-xs-markup">Reference Markup</a></p>
    <div class="collapse" id="spinner-xs-markup">
      <pre class="prettyprint">
&lt;div class="spinner spinner-xs"&gt;&lt;/div&gt;
</pre>
    </div>
    <h4>Inline</h4>
    <div class="pf-example">
      <p><span class="spinner spinner-xs spinner-inline"></span> Along with some text</p>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="spinner-inline-markup" href="#spinner-inline-markup">Reference Markup</a></p>
    <div class="collapse" id="spinner-inline-markup">
      <pre class="prettyprint">
&lt;p&gt;&lt;span class="spinner spinner-xs spinner-inline"&gt;&lt;/span&gt; Along with some text&lt;/p&gt;
</pre>
    </div>
    <h4>Inverse (on a dark background)</h4>
    <div class="pf-example">
      <div style="background-color: #000; padding: 10px 0;">
        <div class="spinner spinner-inverse"></div>
      </div>
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="spinner-inverse-markup" href="#spinner-inverse-markup">Reference Markup</a></p></p>
    <div class="collapse" id="spinner-inverse-markup">
      <pre class="prettyprint">
&lt;div class="spinner spinner-inverse"&gt;&lt;/div&gt;
</pre>
    </div>
  </div>
  <div class="section" id="tables">
    <h3>Tables</h3>
    <p>See <a href="http://getbootstrap.com/css/#tables">http://getbootstrap.com/css/#tables</a> for complete tables documentation.</p>
    <p><strong>Note:</strong>  all tables in PatternFly are condensed.</p>
    <div class="pf-example">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="tables-markup" href="#tables-markup">Reference Markup</a></p>
    <div class="collapse" id="tables-markup">
      <pre class="prettyprint">
&lt;table class="table table-striped table-bordered"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;#&lt;/th&gt;
      &lt;th&gt;First Name&lt;/th&gt;
      &lt;th&gt;Last Name&lt;/th&gt;
      &lt;th&gt;Username&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;1&lt;/td&gt;
      &lt;td&gt;Mark&lt;/td&gt;
      &lt;td&gt;Otto&lt;/td&gt;
      &lt;td&gt;@mdo&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;2&lt;/td&gt;
      &lt;td&gt;Jacob&lt;/td&gt;
      &lt;td&gt;Thornton&lt;/td&gt;
      &lt;td&gt;@fat&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;3&lt;/td&gt;
      &lt;td colspan="2"&gt;Larry the Bird&lt;/td&gt;
      &lt;td&gt;@twitter&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>
    </div>
  </div>
  <div class="section" id="tabs">
    <h3>Tabs</h3>
    <p>See <a href="http://getbootstrap.com/components/#nav-tabs">http://getbootstrap.com/components/#nav-tabs</a> for complete tabs documentation.</p>
    <h4>Single Level</h4>
    <div class="pf-example">
      <ul class="nav nav-tabs">
        <li class="active"><a href="#">Tab One</a></li>
        <li><a href="#">Tab Two</a></li>
        <li><a href="#">Tab Three</a></li>
        <li><a href="#">Tab Four</a></li>
        <li><a href="#">Tab Five</a></li>
      </ul>
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="tabs-markup-1" href="#tabs-markup-1">Reference Markup</a></p></p>
    <div class="collapse" id="tabs-markup-1">
      <pre class="prettyprint">
&lt;ul class="nav nav-tabs"&gt;
  &lt;li class="active"&gt;&lt;a href="#"&gt;Tab One&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Tab Two&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Tab Three&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Tab Four&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Tab Five&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre>
    </div>
    <h4>Single Level with Dropdown</h4>
    <div class="pf-example">
      <ul class="nav nav-tabs">
        <li class="active"><a href="#">Tab One</a></li>
        <li><a href="#">Tab Two</a></li>
        <li><a href="#">Tab Three</a></li>
        <li><a href="#">Tab Four</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
            Tab Five <span class="caret"></span>
          </a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="tabs-markup-2" href="#tabs-markup-2">Reference Markup</a></p></p>
    <div class="collapse" id="tabs-markup-2">
      <pre class="prettyprint">
&lt;ul class="nav nav-tabs"&gt;
  &lt;li class="active"&gt;&lt;a href="#"&gt;Tab One&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Tab Two&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Tab Three&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Tab Four&lt;/a&gt;&lt;/li&gt;
  &lt;li class="dropdown"&gt;
    &lt;a class="dropdown-toggle" data-toggle="dropdown" href="#"&gt;
      Tab Five &lt;span class="caret"&gt;&lt;/span&gt;
    &lt;/a&gt;
    &lt;ul class="dropdown-menu" role="menu"&gt;
      &lt;li&gt;&lt;a href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
      &lt;li class="divider"&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#"&gt;Separated link&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;
</pre>
    </div>
    <h4>Single Level with Persistent Secondary Level</h4>
    <p><strong>Note:</strong> the markup semantics used here are sub-optimal in order to easily achieve a responsive layout.</p>
    <div class="pf-example">
      <ul class="nav nav-tabs">
        <li class="active"><a href="#">Tab One</a></li>
        <li><a href="#">Tab Two</a></li>
        <li><a href="#">Tab Three</a></li>
        <li><a href="#">Tab Four</a></li>
        <li><a href="#">Tab Five</a></li>
      </ul>
      <ul class="nav nav-tabs nav-tabs-pf">
        <li class="active"><a href="#">Secondary Tab One</a></li>
        <li><a href="#">Secondary Tab Two</a></li>
        <li><a href="#">Secondary Tab Three</a></li>
        <li><a href="#">Secondary Tab Four</a></li>
        <li><a href="#">Secondary Tab Five</a></li>
      </ul>
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="tabs-markup-3" href="#tabs-markup-3">Reference Markup</a></p></p>
    <div class="collapse" id="tabs-markup-3">
      <pre class="prettyprint">
&lt;ul class="nav nav-tabs"&gt;
  &lt;li class="active"&gt;&lt;a href="#"&gt;Tab One&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Tab Two&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Tab Three&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Tab Four&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Tab Five&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;ul class="nav nav-tabs nav-tabs-pf"&gt;
  &lt;li class="active"&gt;&lt;a href="#"&gt;Secondary Tab One&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Secondary Tab Two&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Secondary Tab Three&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Secondary Tab Four&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Secondary Tab Five&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre>
    </div>
  </div>
  <div class="section" id="timepicker">
    <h3>Timepicker</h3>
    <p>See <a href="http://eonasdan.github.io/bootstrap-datetimepicker/">http://eonasdan.github.io/bootstrap-datetimepicker/</a> for complete Timepicker documentation.</p>
    <div class="pf-example">
      <div class="input-group time-picker-pf" id="time-picker-2">
        <input type="text" class="form-control">
        <span class="input-group-addon btn btn-default">
          <span class="fa fa-clock-o"></span>
        </span>
      </div>
      <script type="text/javascript">
        $(function () {
          $('#time-picker-2').datetimepicker({
            format: 'LT',
            keyBinds: {
              enter: function () {
                $('#time-picker-2').find('input').trigger('change');
                this.hide();
              }
            }
          });
          $('#time-picker-2').data('DateTimePicker').clear();
        });
      </script>
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="timepicker-markup" href="#timepicker-markup">Reference Markup</a></p></p>
    <div class="collapse" id="timepicker-markup">
      <pre class="prettyprint">
&lt;script src="/components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js"&gt;&lt;/script&gt;
&lt;script src="/components/moment/min/moment.min.js"&gt;&lt;/script&gt;
&lt;div class="input-group time-picker-pf" id="time-picker-2"&gt;
  &lt;input type="text" class="form-control"/&gt;
  &lt;span class="input-group-addon btn btn-default"&gt;
    &lt;span class="fa fa-clock-o"&gt;&lt;/span&gt;
  &lt;/span&gt;
&lt;/div&gt;
&lt;script&gt;
  $('#time-picker-2').datetimepicker({
    format: 'LT',
    keyBinds: {
      enter: function () {
        $('#time-picker-2').find('input').trigger('change');
        this.hide();
      }
    }
  });
  $('#time-picker-2').data('DateTimePicker').clear();
&lt;/script&gt;
</pre>
    </div>
  </div>
  <div class="section" id="tooltip">
    <h3>Tooltip</h3>
    <p>See <a href="http://getbootstrap.com/javascript/#tooltips">http://getbootstrap.com/javascript/#tooltips</a> for complete tooltip documentation.</p>
    <div class="pf-example tooltip-demo">
      <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
      <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
      <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
      <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
    </div>
    <p><p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="tooltip-markup" href="#tooltip-markup">Reference Markup</a></p></p>
    <div class="collapse" id="tooltip-markup">
      <pre class="prettyprint">
&lt;button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left"&gt;Tooltip on left&lt;/button&gt;
&lt;button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top"&gt;Tooltip on top&lt;/button&gt;
&lt;button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom"&gt;Tooltip on bottom&lt;/button&gt;
&lt;button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right"&gt;Tooltip on right&lt;/button&gt;
</pre>
    </div>
  </div>
  <div class="section" id="treegrid-table">
    <h3>TreeGrid Table</h3>
    <div class="pf-example">
      <div class="table-responsive">
        <table class="table table-bordered table-hover table-treegrid">
          <thead>
            <tr>
              <th>Column heading</th>
              <th>Column heading</th>
              <th>Column heading</th>
              <th>Column heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="treegrid-node">
                <span class="icon node-icon fa fa-folder"></span>
                Parent 1
              </td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr data-parent="0">
              <td class="treegrid-node">
                <span class="icon node-icon fa fa-file-o"></span>
                Child 1
              </td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr data-parent="1">
              <td class="treegrid-node">
                <span class="icon node-icon fa fa-file-o"></span>
                Grandchild 1
              </td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr data-parent="1">
              <td class="treegrid-node">
                <span class="icon node-icon fa fa-file-o"></span>
                Grandchild 2
              </td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr data-parent="1">
              <td class="treegrid-node">
                <span class="icon node-icon fa fa-file-o"></span>
                Grandchild 3
              </td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr data-parent="0">
              <td class="treegrid-node">
                <span class="icon node-icon fa fa-file-o"></span>
                Child 2
              </td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <td class="treegrid-node">
                <span class="icon node-icon fa fa-folder"></span>
                Parent 2
              </td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr id="parent-3">
              <td class="treegrid-node">
                <span class="icon node-icon fa fa-folder"></span>
                Parent 3
              </td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr data-parent="#parent-3">
              <td class="treegrid-node">
                <span class="icon node-icon fa fa-file-o"></span>
                Child 3
              </td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr id="parent-4" class="collapsed">
              <td class="treegrid-node">
                <span class="icon node-icon fa fa-folder"></span>
                Parent 4
              </td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr data-parent="#parent-4" id="child-4">
              <td class="treegrid-node">
                <span class="icon node-icon fa fa-file-o"></span>
                Child 4
              </td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr data-parent="#child-4">
              <td class="treegrid-node">
                <span class="icon node-icon fa fa-file-o"></span>
                Grandchild 4
              </td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
          </tbody>
        </table>
      </div>
      <script>
        jQuery('.table-treegrid').treegrid();
      </script>
    </div>
    <p class="reference-markup">
    <a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="bootstrap-combobox-markup" href="#treegrid-table-markup">Reference Markup</a></p>
    <div class="collapse" id="treegrid-table-markup">
      <pre class="prettyprint">
&lt;div class="table-responsive"&gt;
  &lt;table class="table table-bordered table-hover table-treegrid"&gt;
    &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Column heading&lt;/th&gt;
      &lt;th&gt;Column heading&lt;/th&gt;
      &lt;th&gt;Column heading&lt;/th&gt;
      &lt;th&gt;Column heading&lt;/th&gt;
    &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td class="treegrid-node"&gt;
        &lt;span class="icon node-icon fa fa-folder"&gt;&lt;/span&gt;
        Parent 1
      &lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr data-parent="0"&gt;
      &lt;td class="treegrid-node"&gt;
        &lt;span class="icon node-icon fa fa-file-o"&gt;&lt;/span&gt;
        Child 1
      &lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr data-parent="1"&gt;
      &lt;td class="treegrid-node"&gt;
        &lt;span class="icon node-icon fa fa-file-o"&gt;&lt;/span&gt;
        Grandchild 1
      &lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr data-parent="1"&gt;
      &lt;td class="treegrid-node"&gt;
        &lt;span class="icon node-icon fa fa-file-o"&gt;&lt;/span&gt;
        Grandchild 2
      &lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr data-parent="1"&gt;
      &lt;td class="treegrid-node"&gt;
        &lt;span class="icon node-icon fa fa-file-o"&gt;&lt;/span&gt;
        Grandchild 3
      &lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr data-parent="0"&gt;
      &lt;td class="treegrid-node"&gt;
        &lt;span class="icon node-icon fa fa-file-o"&gt;&lt;/span&gt;
        Child 2
      &lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td class="treegrid-node"&gt;
        &lt;span class="icon node-icon fa fa-folder"&gt;&lt;/span&gt;
        Parent 2
      &lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr id="parent-3"&gt;
      &lt;td class="treegrid-node"&gt;
        &lt;span class="icon node-icon fa fa-folder"&gt;&lt;/span&gt;
        Parent 3
      &lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr data-parent="#parent-3"&gt;
      &lt;td class="treegrid-node"&gt;
        &lt;span class="icon node-icon fa fa-file-o"&gt;&lt;/span&gt;
        Child 3
      &lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr id="parent-4" class="collapsed"&gt;
      &lt;td class="treegrid-node"&gt;
        &lt;span class="icon node-icon fa fa-folder"&gt;&lt;/span&gt;
        Parent 4
      &lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr data-parent="#parent-4" id="child-4"&gt;
      &lt;td class="treegrid-node"&gt;
        &lt;span class="icon node-icon fa fa-file-o"&gt;&lt;/span&gt;
        Child 4
      &lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr data-parent="#child-4"&gt;
      &lt;td class="treegrid-node"&gt;
        &lt;span class="icon node-icon fa fa-file-o"&gt;&lt;/span&gt;
        Grandchild 4
      &lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
      &lt;td&gt;Column content&lt;/td&gt;
    &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/div&gt;
&lt;script&gt;
  $('.table-treegrid').treegrid();
&lt;/script&gt;
      </pre>
    </div>
  </div>
<!--
</div>
-->
