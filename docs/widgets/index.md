---
title: Widgets
author: rhamilto
layout: page
dvew_checkbox:
  - 1
---
<p>
  Part of the job of designing a great user experience involves the proper selection and use of widgets. The PattenFly library consists of components that are commonly used. Broader usage of PattenFly widgets is covered with the
  <a title="Patterns" href="/patterns/">Patterns</a>
  section of this site.
</p>
<p>
  In essence, PatternFly is customized version <a href="http://getbootstrap.com">Bootstrap 3</a> with a few extra widgets thrown in.  Please see <a href="http://getbootstrap.com">http://getbootstrap.com</a> for complete documentation on using these widgets.  Of course, you can always use these examples as reference for building your own version of these widgets independent of Bootstrap.
</p>
<p>
  Below is a list of Bootstrap's widgets as customized for Patternfly, as well as the widgets that PatternFly adds.
</p>
<div class="super-section" id="css">
  <h2>CSS</h2>
  <p>See <a href="http://getbootstrap.com/css/">http://getbootstrap.com/css/</a> for complete CSS documentation.</p>
  <p><strong>Note:</strong> PatternFly incorporates Bootstrap's CSS in its CSS, but it does not incorporate Bootstrap's JavaScript (so as to keep the Bootstrap JavaScript modular--see <a href="http://getbootstrap.com/javascript/#js-overview">http://getbootstrap.com/javascript/#js-overview</a>).</p>
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
</div>
<div class="super-section" id="components">
  <h2>Components</h2>
  <p>See <a href="http://getbootstrap.com/components/">http://getbootstrap.com/components/</a> for complete components documentation.</p>
  <p><strong>Note:</strong> PatternFly incorporates Bootstrap's CSS in its CSS, but it does not incorporate Bootstrap's JavaScript (so as to keep the Bootstrap JavaScript modular--see <a href="http://getbootstrap.com/javascript/#js-overview">http://getbootstrap.com/javascript/#js-overview</a>).</p>
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
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="dropdowns-markup" href="#dropdowns-markup">Reference Markup</a></p>
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
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="button-groups-markup" href="#button-groups-markup">Reference Markup</a></p>
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
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="tabs-markup-1" href="#tabs-markup-1">Reference Markup</a></p>
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
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="tabs-markup-2" href="#tabs-markup-2">Reference Markup</a></p>
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
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="tabs-markup-3" href="#tabs-markup-3">Reference Markup</a></p>
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
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="pagination-markup" href="#pagination-markup">Reference Markup</a></p>
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
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="pager-markup" href="#pager-markup">Reference Markup</a></p>
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
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="labels-markup" href="#labels-markup">Reference Markup</a></p>
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
  <div class="section" id="badges">
    <h3>Badges</h3>
    <p>See <a href="http://getbootstrap.com/components/#badges">http://getbootstrap.com/components/#badges</a> for complete badges documentation.</p>
    <div class="pf-example">
      <a href="#">Inbox <span class="badge">42</span></a>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="badges-markup" href="#badges-markup">Reference Markup</a></p>
    <div class="collapse" id="badges-markup">
      <pre class="prettyprint">
&lt;a href="#"&gt;Inbox &lt;span class="badge"&gt;42&lt;/span&gt;&lt;/a&gt;
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
  <div class="section" id="progress">
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
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="progress-size-extra-small-markup" href="#progress-size-extra-small-markup">Reference Markup</a></p>
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
  <div class="section" id="spinner">
    <h3>Spinner</h3>
    <p><strong>Note:</strong> IE9 requires a conditional class on &lt;html&gt; in order to display an animated gif fallback as it doesn't support CSS animation.  See lines 2-5 of <a href="https://github.com/patternfly/patternfly/blob/master/tests/spinner.html">https://github.com/patternfly/patternfly/blob/master/tests/spinner.html</a>.</p>
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
  </div>
</div>
<div class="super-section" id="javascript">
  <h2>JavaScript</h2>
  <p>See <a href="http://getbootstrap.com/javascript/">http://getbootstrap.com/javascript/</a> for complete javascript documentation.</p>
  <p><strong>Note:</strong> PatternFly incorporates Bootstrap's CSS in its CSS, but it does not incorporate Bootstrap's JavaScript (so as to keep the Bootstrap JavaScript modular--see <a href="http://getbootstrap.com/javascript/#js-overview">http://getbootstrap.com/javascript/#js-overview</a>).</p>
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
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="modal-markup" href="#modal-markup">Reference Markup</a></p>
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
  <div class="section" id="tooltip">
    <h3>Tooltip</h3>
    <p>See <a href="http://getbootstrap.com/javascript/#tooltips">http://getbootstrap.com/javascript/#tooltips</a> for complete tooltip documentation.</p>
    <div class="pf-example tooltip-demo">
      <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="" data-original-title="Tooltip on left">Tooltip on left</button>
      <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
      <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
      <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="" data-original-title="Tooltip on right">Tooltip on right</button>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="tooltip-markup" href="#tooltip-markup">Reference Markup</a></p>
    <div class="collapse" id="tooltip-markup">
      <pre class="prettyprint">
&lt;button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="" data-original-title="Tooltip on left"&gt;Tooltip on left&lt;/button&gt;
&lt;button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="top" title="Tooltip on top"&gt;Tooltip on top&lt;/button&gt;
&lt;button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom"&gt;Tooltip on bottom&lt;/button&gt;
&lt;button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="right" title="" data-original-title="Tooltip on right"&gt;Tooltip on right&lt;/button&gt;
</pre>
    </div>
  </div>
  <div class="section" id="popover">
    <h3>Popover</h3>
    <p>See <a href="http://getbootstrap.com/javascript/#popovers">http://getbootstrap.com/javascript/#popovers</a> for complete popover documentation.</p>
    <p><strong>Note:</strong> Displaying the close (X) icon in popovers requires <a href="https://github.com/patternfly/patternfly/blob/master/dist/js/patternfly.min.js">patternfly.min.js</a> and adding data attribute <strong>data-close="true"</strong>
      to the trigger element.
    </p>
    <div class="pf-example">
      <a href="#" class="btn btn-default" data-toggle="popover" data-html="true" title="" data-content="This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy." data-original-title="1 http smartproxy 1 http http http" data-close="true">Click to toggle popover 1</a>
    </div>
    <div class="pf-example" style="margin-top: 20px;">
      <a href="#" class="btn btn-default" data-toggle="popover" data-html="true" title="" data-content="Close icon with no Title text. This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy." data-close="true">Click to toggle popover 2</a>
    </div>
    <div class="pf-example" style="margin: 20px 0;">
      <a href="#" class="btn btn-default" data-toggle="popover" data-html="true" title="" data-content="Popover with no Close icon.
        This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy." data-original-title="3 popover example">Click to toggle popover 3
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
  &lt;a href="#" class="btn btn-default" data-toggle="popover" data-html="true" title="" data-content="This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy." data-original-title="1 http smartproxy 1 http http http" data-close="true"&gt;Click to toggle popover 1&lt;/a&gt;
&lt;/div&gt;
&lt;div style="margin-top: 20px;"&gt;
  &lt;a href="#" class="btn btn-default" data-toggle="popover" data-html="true" title="" data-content="Close icon with no Title text. This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy." data-close="true"&gt;Click to toggle popover 2&lt;/a&gt;
&lt;/div&gt;
&lt;div style="margin: 20px 0;"&gt;
  &lt;a href="#" class="btn btn-default" data-toggle="popover" data-html="true" title="" data-content="Popover with no Close icon.
    This is more information about a smartproxy. This is more information about a smartproxy. This is more information about a smartproxy." data-original-title="3 popover example"&gt;Click to toggle popover 3
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
  });
&lt;/script&gt;
</pre>
    </div>
  </div>
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
  <div class="section" id="data-tables">
    <h3>Data Tables</h3>
    <p>See <a href="http://datatables.net">http://datatables.net</a> for complete data tables documentation.</p>
    <p><strong>Note:</strong> jquery.dataTables.js must occur in the html source before patternfly*.js.</p>
    <div class="pf-example">
      <table class="datatable table table-striped table-bordered">
        <thead>
          <tr>
            <th>Rendering engine</th>
            <th>Browser</th>
            <th>Platform(s)</th>
            <th>Engine version</th>
            <th>CSS grade</th>
          </tr>
        </thead>
        <tbody>
          <tr class="gradeX">
            <td>Trident</td>
            <td>
              Internet
               Explorer 
              4.0
              </td>
            <td>Win 95+</td>
            <td class="center">4</td>
            <td class="center">X</td>
          </tr>
          <tr class="gradeC">
            <td>Trident</td>
            <td>Internet
               Explorer 5.0</td>
            <td>Win 95+</td>
            <td class="center">5</td>
            <td class="center">C</td>
          </tr>
          <tr class="gradeA">
            <td>Trident</td>
            <td>Internet
               Explorer 5.5</td>
            <td>Win 95+</td>
            <td class="center">5.5</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Trident</td>
            <td>Internet
               Explorer 6</td>
            <td>Win 98+</td>
            <td class="center">6</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Trident</td>
            <td>Internet Explorer 7</td>
            <td>Win XP SP2+</td>
            <td class="center">7</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Trident</td>
            <td>AOL browser (AOL desktop)</td>
            <td>Win XP</td>
            <td class="center">6</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Firefox 1.0</td>
            <td>Win 98+ / OSX.2+</td>
            <td class="center">1.7</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Firefox 1.5</td>
            <td>Win 98+ / OSX.2+</td>
            <td class="center">1.8</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Firefox 2.0</td>
            <td>Win 98+ / OSX.2+</td>
            <td class="center">1.8</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Firefox 3.0</td>
            <td>Win 2k+ / OSX.3+</td>
            <td class="center">1.9</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Camino 1.0</td>
            <td>OSX.2+</td>
            <td class="center">1.8</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Camino 1.5</td>
            <td>OSX.3+</td>
            <td class="center">1.8</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Netscape 7.2</td>
            <td>Win 95+ / Mac OS 8.6-9.2</td>
            <td class="center">1.7</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Netscape Browser 8</td>
            <td>Win 98SE+</td>
            <td class="center">1.7</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Netscape Navigator 9</td>
            <td>Win 98+ / OSX.2+</td>
            <td class="center">1.8</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Mozilla 1.0</td>
            <td>Win 95+ / OSX.1+</td>
            <td class="center">1</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Mozilla 1.1</td>
            <td>Win 95+ / OSX.1+</td>
            <td class="center">1.1</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Mozilla 1.2</td>
            <td>Win 95+ / OSX.1+</td>
            <td class="center">1.2</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Mozilla 1.3</td>
            <td>Win 95+ / OSX.1+</td>
            <td class="center">1.3</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Mozilla 1.4</td>
            <td>Win 95+ / OSX.1+</td>
            <td class="center">1.4</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Mozilla 1.5</td>
            <td>Win 95+ / OSX.1+</td>
            <td class="center">1.5</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Mozilla 1.6</td>
            <td>Win 95+ / OSX.1+</td>
            <td class="center">1.6</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Mozilla 1.7</td>
            <td>Win 98+ / OSX.1+</td>
            <td class="center">1.7</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Mozilla 1.8</td>
            <td>Win 98+ / OSX.1+</td>
            <td class="center">1.8</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Seamonkey 1.1</td>
            <td>Win 98+ / OSX.2+</td>
            <td class="center">1.8</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Gecko</td>
            <td>Epiphany 2.20</td>
            <td>Gnome</td>
            <td class="center">1.8</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Webkit</td>
            <td>Safari 1.2</td>
            <td>OSX.3</td>
            <td class="center">125.5</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Webkit</td>
            <td>Safari 1.3</td>
            <td>OSX.3</td>
            <td class="center">312.8</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Webkit</td>
            <td>Safari 2.0</td>
            <td>OSX.4+</td>
            <td class="center">419.3</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Webkit</td>
            <td>Safari 3.0</td>
            <td>OSX.4+</td>
            <td class="center">522.1</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Webkit</td>
            <td>OmniWeb 5.5</td>
            <td>OSX.4+</td>
            <td class="center">420</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Webkit</td>
            <td>iPod Touch / iPhone</td>
            <td>iPod</td>
            <td class="center">420.1</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Webkit</td>
            <td>S60</td>
            <td>S60</td>
            <td class="center">413</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Presto</td>
            <td>Opera 7.0</td>
            <td>Win 95+ / OSX.1+</td>
            <td class="center">-</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Presto</td>
            <td>Opera 7.5</td>
            <td>Win 95+ / OSX.2+</td>
            <td class="center">-</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Presto</td>
            <td>Opera 8.0</td>
            <td>Win 95+ / OSX.2+</td>
            <td class="center">-</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Presto</td>
            <td>Opera 8.5</td>
            <td>Win 95+ / OSX.2+</td>
            <td class="center">-</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Presto</td>
            <td>Opera 9.0</td>
            <td>Win 95+ / OSX.3+</td>
            <td class="center">-</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Presto</td>
            <td>Opera 9.2</td>
            <td>Win 88+ / OSX.3+</td>
            <td class="center">-</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Presto</td>
            <td>Opera 9.5</td>
            <td>Win 88+ / OSX.3+</td>
            <td class="center">-</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Presto</td>
            <td>Opera for Wii</td>
            <td>Wii</td>
            <td class="center">-</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Presto</td>
            <td>Nokia N800</td>
            <td>N800</td>
            <td class="center">-</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>Presto</td>
            <td>Nintendo DS browser</td>
            <td>Nintendo DS</td>
            <td class="center">8.5</td>
            <td class="center">C/A<sup>1</sup></td>
          </tr>
          <tr class="gradeC">
            <td>KHTML</td>
            <td>Konqureror 3.1</td>
            <td>KDE 3.1</td>
            <td class="center">3.1</td>
            <td class="center">C</td>
          </tr>
          <tr class="gradeA">
            <td>KHTML</td>
            <td>Konqureror 3.3</td>
            <td>KDE 3.3</td>
            <td class="center">3.3</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeA">
            <td>KHTML</td>
            <td>Konqureror 3.5</td>
            <td>KDE 3.5</td>
            <td class="center">3.5</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeX">
            <td>Tasman</td>
            <td>Internet Explorer 4.5</td>
            <td>Mac OS 8-9</td>
            <td class="center">-</td>
            <td class="center">X</td>
          </tr>
          <tr class="gradeC">
            <td>Tasman</td>
            <td>Internet Explorer 5.1</td>
            <td>Mac OS 7.6-9</td>
            <td class="center">1</td>
            <td class="center">C</td>
          </tr>
          <tr class="gradeC">
            <td>Tasman</td>
            <td>Internet Explorer 5.2</td>
            <td>Mac OS 8-X</td>
            <td class="center">1</td>
            <td class="center">C</td>
          </tr>
          <tr class="gradeA">
            <td>Misc</td>
            <td>NetFront 3.1</td>
            <td>Embedded devices</td>
            <td class="center">-</td>
            <td class="center">C</td>
          </tr>
          <tr class="gradeA">
            <td>Misc</td>
            <td>NetFront 3.4</td>
            <td>Embedded devices</td>
            <td class="center">-</td>
            <td class="center">A</td>
          </tr>
          <tr class="gradeX">
            <td>Misc</td>
            <td>Dillo 0.8</td>
            <td>Embedded devices</td>
            <td class="center">-</td>
            <td class="center">X</td>
          </tr>
          <tr class="gradeX">
            <td>Misc</td>
            <td>Links</td>
            <td>Text only</td>
            <td class="center">-</td>
            <td class="center">X</td>
          </tr>
          <tr class="gradeX">
            <td>Misc</td>
            <td>Lynx</td>
            <td>Text only</td>
            <td class="center">-</td>
            <td class="center">X</td>
          </tr>
          <tr class="gradeC">
            <td>Misc</td>
            <td>IE Mobile</td>
            <td>Windows Mobile 6</td>
            <td class="center">-</td>
            <td class="center">C</td>
          </tr>
          <tr class="gradeC">
            <td>Misc</td>
            <td>PSP browser</td>
            <td>PSP</td>
            <td class="center">-</td>
            <td class="center">C</td>
          </tr>
          <tr class="gradeU">
            <td>Other browsers</td>
            <td>All others</td>
            <td>-</td>
            <td class="center">-</td>
            <td class="center">U</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="data-tables-markup" href="#data-tables-markup">Reference Markup</a></p>
    <div class="collapse" id="data-tables-markup">
      <pre class="prettyprint">
&lt;table class="datatable table table-striped table-bordered"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Rendering engine&lt;/th&gt;
      &lt;th&gt;Browser&lt;/th&gt;
      &lt;th&gt;Platform(s)&lt;/th&gt;
      &lt;th&gt;Engine version&lt;/th&gt;
      &lt;th&gt;CSS grade&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr class="gradeX"&gt;
      &lt;td&gt;Trident&lt;/td&gt;
      &lt;td&gt;
        Internet
         Explorer 
        4.0
        &lt;/td&gt;
      &lt;td&gt;Win 95+&lt;/td&gt;
      &lt;td class="center"&gt;4&lt;/td&gt;
      &lt;td class="center"&gt;X&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr class="gradeC"&gt;
      &lt;td&gt;Trident&lt;/td&gt;
      &lt;td&gt;Internet
         Explorer 5.0&lt;/td&gt;
      &lt;td&gt;Win 95+&lt;/td&gt;
      &lt;td class="center"&gt;5&lt;/td&gt;
      &lt;td class="center"&gt;C&lt;/td&gt;
    &lt;/tr&gt;
    ...
  &lt;/tbody&gt;
&lt;/table&gt;
&lt;script src="/components/patternfly/components/datatables/media/js/jquery.dataTables.js"&gt;&lt;/script&gt;
&lt;script&gt;
  // Initialize Datatables
  $(document).ready(function() {
    $('.datatable').dataTable();
  });
&lt;/script&gt;
</pre>
    </div>
  </div>
  <div class="section" id="bootstrap-combobox">
    <h3>Bootstrap Combobox</h3>
    <p>See <a href="https://github.com/danielfarrell/bootstrap-combobox">https://github.com/danielfarrell/bootstrap-combobox</a> for complete Bootstrap Combobox documentation.</p>
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
&lt;script src="/components/patternfly/components/bootstrap-combobox/js/bootstrap-combobox.js"&gt;&lt;/script&gt;
&lt;script&gt;
  // Initialize Boostrap-Combobox
  $('.combobox').combobox();
&lt;/script&gt;
</pre>
    </div>
  </div>
  <div class="section" id="bootstrap-datepicker">
    <h3>Bootstrap-datepicker</h3>
    <p>See <a href="http://bootstrap-datepicker.readthedocs.org/en/latest/">http://bootstrap-datepicker.readthedocs.org/en/latest/</a> for complete Bootstrap-datepicker documentation.</p>
    <div class="pf-example">
      <input type="text" class="form-control bootstrap-datepicker">
    </div>
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="bootstrap-datepicker-markup" href="#bootstrap-datepicker-markup">Reference Markup</a></p>
    <div class="collapse" id="bootstrap-datepicker-markup">
      <pre class="prettyprint">
&lt;input type="text" class="form-control bootstrap-datepicker"&gt;
&lt;script src="/components/patternfly/components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"&gt;&lt;/script&gt;
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
    <h3>Bootstrap-select</h3>
    <p>See <a href="http://silviomoreto.github.io/bootstrap-select/">http://silviomoreto.github.io/bootstrap-select/</a> for complete Bootstrap-select documentation.</p>
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
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="bootstrap-select-markup" href="#bootstrap-select-markup">Reference Markup</a></p>
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
&lt;script src="/components/patternfly/components/bootstrap-select/dist/js/bootstrap-select.min.js"&gt;&lt;/script&gt;
&lt;script&gt;
  // Initialize Boostrap-select
   $('.selectpicker').selectpicker();
&lt;/script&gt;
</pre>
    </div>
  </div>
  <div class="section" id="bootstrap-tree-view">
    <h3>Bootstrap Tree View</h3>
    <p>See <a href="https://github.com/jonmiles/bootstrap-treeview">https://github.com/jonmiles/bootstrap-treeview</a> for complete Bootstrap Tree View documentation.</p>
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
&lt;script src="/components/patternfly/components/bootstrap-treeview/dist/bootstrap-treeview.min.js"&gt;&lt;/script&gt;
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
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="search-markup" href="#search-markup">Reference Markup</a></p>
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
            <img src="/dist/img/brand.svg" alt="PatternFly" />
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
    <p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="info-tip-markup" href="#info-tip-markup">Reference Markup</a></p>
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
      &lt;img src="/dist/img/brand.svg" alt="PatternFly" /&gt;
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
&lt;script src="/components/patternfly/components/google-code-prettify/bin/prettify.min.js"&gt;&lt;/script&gt;
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
              color: {
                pattern: ['#0088ce', '#00659c', '#3f9c35', '#ec7a08', '#cc0000']
              },
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
&lt;script src="/components/patternfly/components/d3/d3.min.js"&gt;&lt;/script&gt;
&lt;script src="/components/patternfly/components/c3/c3.min.js"&gt;&lt;/script&gt;
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
        color: {
          pattern: ['#0088ce', '#00659c', '#3f9c35', '#ec7a08', '#cc0000']
        },
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
    <p>Additional basic chart examples such as sparkline, spline, area, stacked area, bar, stacked bar, and donut are available at <a href="https://rawgit.com/patternfly/patternfly/master/tests/charts.html">https://rawgit.com/patternfly/patternfly/master/tests/charts.html</a></p>
    </div>
</div>