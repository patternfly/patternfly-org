---
title: Aggregate Status Card
author: lhinson
layout: page
---
## Overview

The aggregated status card shows a total number of objects and an aggregated status for those objects. The most common use case for this pattern is seen in a dashboard view to illustrate the total count and the status (e.g. error, warning, OK) of objects in an environment.

## Example

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
            <a href="#">2 Amet</a>
          </h2>

          <div class="card-pf-body">
            <p class="card-pf-aggregate-status-notifications">
              <span class="card-pf-aggregate-status-notification"><a href="#"><span class="pficon pficon-error-circle-o"></span>4</a></span> <span class="card-pf-aggregate-status-notification"><a href="#"><span class="pficon pficon-warning-triangle-o"></span>1</a></span>
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
    </div>

    <!-- /row -->
  </div>
</div>

<p class="reference-markup">
  <a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="aggregate-status-card-markup" href="#aggregate-status-card-markup">Reference Markup</a>
</p>

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
  &lt;script src="/components/patternfly/components/matchHeight/jquery.matchHeight-min.js"&gt;&lt;/script&gt;
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

## Description

### Header Area:

<div class="row">
  <div class="col-md-4">
    <p>
      <img src="/wp-content/uploads/2015/04/AggregateStatus_header-callout.png" alt="AggregateStatus_header-callout" />
    </p>
  </div>

  <div class="col-md-8">
    <ol>
      <li>
        <b>Top Accent</b> (optional): If the aggregate status card is located at the top of a dashboard view, you may opt to add the the blue stripe to the top of the card. If the card is located somewhere other than a dashboard, there is no blue stripe.
      </li>
      <li>
        <b>Object Icon</b> (optional): There is an option to display an object icon before the count and object name.  Make sure you are consistent and either opt to always use the icon or not. Do not mix and match by applying icons to some cards but not others. Icons should be used thoughtfully and sparingly. Ensure that the icon’s visual metaphor provides valuable meaning rather than pointless clutter.
      </li>
      <li>
        <b>Total Number:</b> This is a number that represents a count for the total number of objects in the environment.
      </li>
      <li>
        <b>Object Type Label:</b> This is text that displays the object type. A tooltip should appear on hover to inform the user about this action.
      </li>
    </ol>
  </div>
</div>

<!--<h3>Action Area (optional):</h3>
<div class="row">
<div class="col-md-4">
<a h"/wp-content/uploads/2015/04/AggregateStatus_actionsAreaSpec.png"><img src="/wp-content/uploads/2015/04/AggregateStatus_actionsAreaSpec.png" alt="AggregateStatus_actionsAreaSpec" class="alignnone size-full wp-image-3870" /></a>
</div>

<div class="col-md-8">
<ol>
  <li><b>Action Menu</b> (optional): If there is more than one action associated with this card, an action menu can be displayed in the top right corner.</li>
<li><b>Action Icon</b> (optional): Alternatively, you may use the add or create action icon. See the <a title="Terminology and Wording" href="/visual-styles/terminology-and-wording//#terms-and-words">Terminology and Wording Style Guide</a> for more information regarding wording recommendations for action labels.</li>
    </ol>
  </div>
</div>

&nbsp;-->

### Content Area:

<div class="row">
  <div class="col-md-4">
    <img src="/wp-content/uploads/2015/04/AggregateStatus-ContentArea-Callout.png" alt="AggregateStatus-ContentArea-Callout" class="alignnone size-full wp-image-4430" />
  </div>

  <div class="col-md-8">
    <ol>
      <li>
        <b>Status Icon(s):</b> A status icon either assures the user that everything is ok or informs them about error or warnings. An error and warning can be displayed together however, avoid showing an OK status with a warning or error. Either everything is OK or it’s not.
      </li>
      <li>
        <b>Number Count:</b> This shows the count associated with the icon. In general, a number next to the OK icon is redundant since the total count is already shown in the header area. Therefore, an OK status should be visually represented by an icon only. Alternatively, a card, not located in the dashboard view, may require the number count to be displayed with the OK icon.
      </li>
      <li>
        <b>Action Icon</b> (optional): If no objects exists, you may want to display the create or add icon, whichever is the primary action.
      </li>
      <li>
        <b>Tooltips:</b> Use tooltips as necessary.
      </li>
      <li>
        <b>Links:</b> Blue text with an underline on hover reinforces that elements are interactive.
      </li>
    </ol>
  </div>
</div>
