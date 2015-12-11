---
title: Aggregate Status Card
author: lhinson
layout: page
---
<h2>Overview</h2>
<p>The aggregated status card shows a total number of objects and an aggregated status for those objects. The most common use case for this pattern is seen in a dashboard view to illustrate the total count and the status of objects in an environment. The mini card alternate can be used in the case when there is less space available for the status card as well as when there is less information to show in the card.</p>

<h2>Examples</h2>

<h3>Regular Card</h3>
<!-- don't copy this example as it's been modified to work within the context of the documentation -->
<div class="cards-pf">
  <div class="container-fluid container-cards-pf">
    <div class="row row-cards-pf" style="padding-top: 20px;">
      <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
      <div class="col-xs-6 col-sm-4 col-md-4">
        <div class="card-pf card-pf-aggregate-status">
          <h2 class="card-pf-title" style="line-height: 1.1">
            0 Ipsum
          </h2>
          <div class="card-pf-body">
            <p class="card-pf-aggregate-status-notifications">
              <span class="card-pf-aggregate-status-notification tooltip-demo"><a href="#" class="add" data-toggle="tooltip" data-placement="top" title="Add Ipsum"><span class="pficon pficon-add-circle-o"></span></a></span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-4 col-md-4">
        <div class="card-pf card-pf-aggregate-status card-pf-with-action">
          <h2 class="card-pf-title" style="line-height: 1.1">
            <a href="#">2  Amet</a>
          </h2>
          <div class="card-pf-body">
            <p class="card-pf-aggregate-status-notifications">
              <span class="card-pf-aggregate-status-notification"><a href="#"><span class="pficon pficon-error-circle-o"></span>4</a></span>
              <span class="card-pf-aggregate-status-notification"><a href="#"><span class="pficon pficon-warning-triangle-o"></span>1</a></span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-sm-4 col-md-4">
        <div class="card-pf card-pf-aggregate-status card-pf-with-action">
          <h2 class="card-pf-title" style="line-height: 1.1">
            <a href="#">9 Adipiscing</a>
          </h2>
          <div class="card-pf-body">
            <p class="card-pf-aggregate-status-notifications">
              <span class="card-pf-aggregate-status-notification"><span class="pficon pficon-ok"></span></span>
            </p>
          </div>
        </div>
      </div>
    </div><!-- /row -->
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="aggregate-status-card-markup" href="#aggregate-status-card-markup">Reference Markup</a></p>
<div class="collapse" id="aggregate-status-card-markup">
  <pre class="prettyprint">
&lt;body class="cards-pf"&gt;
  ...
  &lt;div class="container-fluid container-cards-pf"&gt;
    &lt;div class="row row-cards-pf"&gt;
      &lt;div class="col-xs-6 col-sm-4 col-md-4"&gt;
        &lt;div class="card-pf card-pf-aggregate-status"&gt;
          &lt;h2 class="card-pf-title"&gt;
            0 Ipsum
          &lt;/h2&gt;
          &lt;div class="card-pf-body"&gt;
            &lt;p class="card-pf-aggregate-status-notifications"&gt;
              &lt;span class="card-pf-aggregate-status-notification"&gt;&lt;a href="#" class="add" data-toggle="tooltip" data-placement="top" title="Add Ipsum"&gt;&lt;span class="pficon pficon-add-circle-o"&gt;&lt;/span&gt;&lt;/a&gt;&lt;/span&gt;
            &lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="col-xs-6 col-sm-4 col-md-4"&gt;
        &lt;div class="card-pf card-pf-aggregate-status card-pf-with-action"&gt;
          &lt;h2 class="card-pf-title"&gt;
            &lt;a href="#"&gt;2  Amet&lt;/a&gt;
          &lt;/h2&gt;
          &lt;div class="card-pf-body"&gt;
            &lt;p class="card-pf-aggregate-status-notifications"&gt;
              &lt;span class="card-pf-aggregate-status-notification"&gt;&lt;a href="#"&gt;&lt;span class="pficon pficon-error-circle-o"&gt;&lt;/span&gt;4&lt;/a&gt;&lt;/span&gt;
              &lt;span class="card-pf-aggregate-status-notification"&gt;&lt;a href="#"&gt;&lt;span class="pficon pficon-warning-triangle-o"&gt;&lt;/span&gt;1&lt;/a&gt;&lt;/span&gt;
            &lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="col-xs-6 col-sm-4 col-md-4"&gt;
        &lt;div class="card-pf card-pf-aggregate-status card-pf-with-action"&gt;
          &lt;h2 class="card-pf-title"&gt;
            &lt;a href="#"&gt;9 Adipiscing&lt;/a&gt;
          &lt;/h2&gt;
          &lt;div class="card-pf-body"&gt;
            &lt;p class="card-pf-aggregate-status-notifications"&gt;
              &lt;span class="card-pf-aggregate-status-notification"&gt;&lt;span class="pficon pficon-ok"&gt;&lt;/span&gt;&lt;/span&gt;
            &lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;&lt;!-- /row --&gt;
  &lt;/div&gt;&lt;!-- /container --&gt;
  &lt;script src="/components/matchHeight/jquery.matchHeight-min.js"&gt;&lt;/script&gt;
  &lt;script&gt;
    $(function() {
      // matchHeight the contents of each .card-pf and then the .card-pf itself
      $(".row-cards-pf &gt; [class*='col'] &gt; .card-pf .card-pf-title").matchHeight();
      $(".row-cards-pf &gt; [class*='col'] &gt; .card-pf &gt; .card-pf-body").matchHeight();
      $(".row-cards-pf &gt; [class*='col'] &gt; .card-pf &gt; .card-pf-footer").matchHeight();
      $(".row-cards-pf &gt; [class*='col'] &gt; .card-pf").matchHeight();
      // initialize tooltips
      $('[data-toggle="tooltip"]').tooltip();
    });
  &lt;/script&gt;
&lt;/body&gt;</pre>
</div>

<h3>Mini Card Alternate</h3>
<!-- don't copy this example as it's been modified to work within the context of the documentation -->
<div class="cards-pf">
  <div class="container-fluid container-cards-pf">
    <div class="row row-cards-pf" style="padding-top: 20px;">
      <!-- Important:  if you need to nest additional .row within a .row.row-cards-pf, do *not* use .row-cards-pf on the nested .row  -->
      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini">
          <h2 class="card-pf-title" style="line-height: 1.1">
            <span class="fa fa-car"></span>
            <a href="#">
              <span class="card-pf-aggregate-status-count">23</span> Cars
            </a>
          </h2>
          <div class="card-pf-body">
            <p class="card-pf-aggregate-status-notifications">
              <span class="card-pf-aggregate-status-notification"><a href="#"><span class="pficon pficon-error-circle-o"></span>3</a></span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini">
          <h2 class="card-pf-title" style="line-height: 1.1">
            <span class="fa fa-paper-plane"></span>
            <a href="#">
              <span class="card-pf-aggregate-status-count">300</span> Paper Services
            </a>
          </h2>
          <div class="card-pf-body">
            <p class="card-pf-aggregate-status-notifications">
              <span class="card-pf-aggregate-status-notification"><a href="#"><span class="pficon pficon-error-circle-o"></span>3</a></span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini">
          <h2 class="card-pf-title" style="line-height: 1.1">
            <span class="fa fa-rebel"></span>
            <a href="#">
              <span class="card-pf-aggregate-status-count">2500</span> Rebel Services
            </a>
          </h2>
        </div>
      </div>
    </div><!-- /row -->
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="aggregate-status-mini-card-markup" href="#aggregate-status-mini-card-markup">Reference Markup</a></p>
<div class="collapse" id="aggregate-status-mini-card-markup">
  <pre class="prettyprint">
&lt;body class="cards-pf"&gt;
  ...
  &lt;div class="container-fluid container-cards-pf"&gt;
    &lt;div class="row row-cards-pf"&gt;
      &lt;div class="col-xs-12 col-sm-6 col-md-4"&gt;
        &lt;div class="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini"&gt;
          &lt;h2 class="card-pf-title"&gt;
            &lt;span class="fa fa-car"&gt;&lt;/span&gt;
            &lt;a href="#"&gt;
              &lt;span class="card-pf-aggregate-status-count"&gt;23&lt;/span&gt; Cars
            &lt;/a&gt;
          &lt;/h2&gt;
          &lt;div class="card-pf-body"&gt;
            &lt;p class="card-pf-aggregate-status-notifications"&gt;
              &lt;span class="card-pf-aggregate-status-notification"&gt;&lt;a href="#"&gt;&lt;span class="pficon pficon-error-circle-o"&gt;&lt;/span&gt;3&lt;/a&gt;&lt;/span&gt;
            &lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="col-xs-12 col-sm-6 col-md-4"&gt;
        &lt;div class="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini"&gt;
          &lt;h2 class="card-pf-title"&gt;
            &lt;span class="fa fa-paper-plane"&gt;&lt;/span&gt;
            &lt;a href="#"&gt;
              &lt;span class="card-pf-aggregate-status-count"&gt;300&lt;/span&gt; Paper Services
            &lt;/a&gt;
          &lt;/h2&gt;
          &lt;div class="card-pf-body"&gt;
            &lt;p class="card-pf-aggregate-status-notifications"&gt;
              &lt;span class="card-pf-aggregate-status-notification"&gt;&lt;a href="#"&gt;&lt;span class="pficon pficon-error-circle-o"&gt;&lt;/span&gt;3&lt;/a&gt;&lt;/span&gt;
            &lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="col-xs-12 col-sm-6 col-md-4"&gt;
        &lt;div class="card-pf card-pf-accented card-pf-aggregate-status card-pf-aggregate-status-mini"&gt;
          &lt;h2 class="card-pf-title"&gt;
            &lt;span class="fa fa-rebel"&gt;&lt;/span&gt;
            &lt;a href="#"&gt;
              &lt;span class="card-pf-aggregate-status-count"&gt;2500&lt;/span&gt; Rebel Services
            &lt;/a&gt;
          &lt;/h2&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;&lt;!-- /row --&gt;
  &lt;/div&gt;&lt;!-- /container --&gt;
&lt;/body&gt;</pre>
</div>

<h2>Description</h2>
<h3>Header Area:</h3>
<div class="row">
<div class="col-md-4">
<p><img src="{{site.baseurl}}assets/img/AggregateStatus_header-callout.png" alt="AggregateStatus_header-callout"/></p>

<p><img src="{{site.baseurl}}assets/img/single_mini_agg_status-header-callout.png" alt="single_mini_agg_status-header-callout"/></p>
</div>

<div class="col-md-8">
<ol>
<li><b>Top Accent</b> (optional): If the aggregate status card is located at the top of a dashboard view, you may opt to add the the blue stripe to the top of the card. If the card is located somewhere other than a dashboard, there is no blue stripe.</li>
<li><b>Object Icon</b> (optional): An object icon can be used before the count and object name.  Make sure you are consistent and either opt to always use the icon or not. Do not mix and match by applying icons to some cards but not others. Icons should be used thoughtfully and sparingly. Ensure that the icon’s visual metaphor provides valuable meaning rather than pointless clutter. Note: In the case of the mini card alternate, it is strongly recommended to use this object icon.</li>
<li><b>Total Number:</b> This is a number that represents a count for the total number of objects in the environment.</li>
<li><b>Object Type Label:</b> Include a label that states the object type.</li>
    </ol>
  </div>
</div>

<h3>Content Area:</h3>
<div class="row">
<div class="col-md-4">
<p><img src="{{site.baseurl}}assets/img/aggstatus_callout.png" alt="aggstatus_callout"/></p>
<p><img src="{{site.baseurl}}assets/img/single_mini_agg_status-number-callout.png" alt="single_mini_agg_status-number-callout"/></p>
</div>

<div class="col-md-8">
<ol>
<li><b>Status Icon(s):</b> A status icon represents the status of the objects in the card. If everything is OK, one status icon for OK should be shown. Otherwise, multiple status icons can be shown to represent each status. Note: In the case of the mini card alternate, it is recommended to limit this to one status icon due to space restrictions.</li>
<li><b>Number Count:</b> This shows the count associated with the icon. In general, a number next to the OK icon is redundant since the total count is already shown in the header area. Therefore, an OK status should be visually represented by an icon only. Alternatively, a card, not located in the dashboard view, may require the number count to be displayed with the OK icon. Note: In the case of the mini card alternate, it is recommended to limit this to one number due to space restrictions.</li>
<li><b>Action Icon</b> (optional): If no objects exists, you may want to display the create or add icon, whichever is the primary action. Note: Currently, only one action icon is supported in this design.</li>
<li><b>Tooltips:</b> Use tooltips as necessary. It is recommended that tooltips are used for the status and action icons.</li>
<li><b>Links:</b> Blue text with an underline on hover reinforces that elements are interactive.</li>
    </ol>
  </div>
</div>
