---
title: Dashboard Cards
author: lhinson
layout: page
url-js-extra: ['components/matchHeight/jquery.matchHeight-min.js']
---
<h2>Overview</h2>
<p>This section provides guidance on the base elements of a card for a dashboard view. Some examples of a dashboard card includes:</p>
<ul>
<li><a href="{{site.baseurl}}pattern-library/cards/aggregate-status-card/">Aggregate Status Card</a></li>
<li><a href="{{site.baseurl}}pattern-library/cards/trend-card/">Trend Card</a></li>
<li><a href="{{site.baseurl}}pattern-library/cards/utilization-bar-card/">Utilization Bar Card</a></li>
<li><a href="{{site.baseurl}}pattern-library/cards/utilization-trend-card/">Utilization Trend Card</a></li>
</ul>

<h2>Examples</h2>
<!-- don't copy this example as it's been modified to work within the context of the documentation -->
<div class="cards-pf">
  <div class="container-fluid container-cards-pf">
    <div class="row row-cards-pf" style="padding-top: 20px;">
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div class="card-pf">
          <div class="card-pf-heading">
            <div class="dropdown card-pf-time-frame-filter">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Last 30 Days <span class="caret"></span></button>
              <ul class="dropdown-menu dropdown-menu-right" role="menu">
                <li><a href="#">Last 60 Days</a></li>
                <li><a href="#">Last 90 Days</a></li>
              </ul>
            </div>
            <h2 class="card-pf-title">
              Card Title
            </h2>
          </div>
          <div class="card-pf-body">
            <p>[card contents]</p>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div class="card-pf">
          <h2 class="card-pf-title">
            Card Title
          </h2>
          <div class="card-pf-body">
            <p>[card contents]</p>
          </div>
          <div class="card-pf-footer">
            <div class="dropdown card-pf-time-frame-filter">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Last 30 Days <span class="caret"></span></button>
              <ul class="dropdown-menu dropdown-menu-right" role="menu">
                <li><a href="#">Last 60 Days</a></li>
                <li><a href="#">Last 90 Days</a></li>
              </ul>
            </div>
            <p>
              <a href="#" class="card-pf-link-with-icon"><span class="pficon pficon-add-circle-o"></span>Add New Cluster</a>
            </p>
          </div>
        </div>
      </div>
    </div><!-- /row -->
  </div>
</div>
<script>
  jQuery(function() {
    // matchHeight the contents of each .card-pf and then the .card-pf itself
    jQuery(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
    jQuery(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
    jQuery(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer").matchHeight();
    jQuery(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();
  });
</script>

<p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="dashboard-card-markup" href="#dashboard-card-markup">Reference Markup</a></p>
<div class="collapse" id="dashboard-card-markup">
  <pre class="prettyprint">
&lt;body class="cards-pf"&gt;
  ...
  &lt;div class="container-fluid container-cards-pf"&gt;
    &lt;div class="row row-cards-pf"&gt;
      &lt;div class="col-xs-12 col-sm-12 col-md-6"&gt;
        &lt;div class="card-pf"&gt;
          &lt;div class="card-pf-heading"&gt;
            &lt;div class="dropdown card-pf-time-frame-filter"&gt;
              &lt;button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"&gt;
                Last 30 Days &lt;span class="caret"&gt;&lt;/span&gt;
              &lt;/button&gt;
              &lt;ul class="dropdown-menu dropdown-menu-right" role="menu"&gt;
                &lt;li&gt;&lt;a href="#"&gt;Last 60 Days&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;Last 90 Days&lt;/a&gt;&lt;/li&gt;
              &lt;/ul&gt;
            &lt;/div&gt;
            &lt;h2 class="card-pf-title"&gt;
              Card Title
            &lt;/h2&gt;
          &lt;/div&gt;
          &lt;div class="card-pf-body"&gt;
            &lt;p&gt;[card contents]&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="col-xs-12 col-sm-12 col-md-6"&gt;
        &lt;div class="card-pf"&gt;
          &lt;h2 class="card-pf-title"&gt;
            Card Title
          &lt;/h2&gt;
          &lt;div class="card-pf-body"&gt;
            &lt;p&gt;[card contents]&lt;/p&gt;
          &lt;/div&gt;
          &lt;div class="card-pf-footer"&gt;
            &lt;div class="dropdown card-pf-time-frame-filter"&gt;
              &lt;button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"&gt;
                Last 30 Days &lt;span class="caret"&gt;&lt;/span&gt;
              &lt;/button&gt;
              &lt;ul class="dropdown-menu dropdown-menu-right" role="menu"&gt;
                &lt;li&gt;&lt;a href="#"&gt;Last 60 Days&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;Last 90 Days&lt;/a&gt;&lt;/li&gt;
              &lt;/ul&gt;
            &lt;/div&gt;
            &lt;p&gt;
              &lt;a href="#" class="card-pf-link-with-icon"&gt;&lt;span class="pficon pficon-add-circle-o"&gt;&lt;/span&gt;Add New Cluster&lt;/a&gt;
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
    });
  &lt;/script&gt;
&lt;/body&gt;</pre>
</div>


<h2>Description</h2>

<h3>Style</h3>
<div class="row">
<div class="col-md-7">
<p><img src="{{site.baseurl}}assets/img/card1.png" alt="card1"/></p>
</div>

<div class="col-md-5">
<ol>
<li><b>Background and Borders:</b> All cards on a dashboard should have the same background and border treatment.</li>
<li><b>Top Accent</b> (optional): Add a top accent to a row of cards to give them visual hierarchy</li>
</ol>
</div>
</div>


<h3>Titles</h3>
<div class="row">
<div class="col-md-7">
<p><img src="{{site.baseurl}}assets/img/Card_titleAndSubtitle.png" alt="Card_titleAndSubtitle"/></p>
</div>

<div class="col-md-5">
<ol>
<li><b>Title</b> (optional): If the content of the card is not obvious, add a title to clarify what information is being presented.  The title is always followed by a horizontal separator.</li>
<li><b>Subtitle</b> (optional): Add a subtitle if the card contains the same visualization for different object types.</li>
</ol>
</div>
</div>


<h3 id="dashboard-card-time-frame-filter">Time Frame Filter (optional):</h3>
<div class="row">
<div class="col-md-7">
<p><img src="{{site.baseurl}}assets/img/card_timeframe.png" alt="card_timeframe"/></p>
</div>

<div class="col-md-5">
<p>There are two options that the time frame filter may be placed:</p>
<ol>
<li>If there is a card title, the filter should be displayed on the right of the title panel.</li>
<li>If there is an action panel, the filter can be displayed on the right of the action panel.</li>
</ol>
</div>
</div>

<h3 id="dashboard-card-actions-panel">Actions Panel (optional):</h3>
<div class="row">
<div class="col-md-7">
<p><img src="{{site.baseurl}}assets/img/card_actionspanel.png" alt="card_actionspanel"/></p>
</div>

<div class="col-md-5">
<ol>
<li><b>Actions Panel</b> (optional): Include an actions panel, at the bottom of the card, if there is a primary action that you would like the user to quickly and easily be able to access from the card view.</li>
<li><b>Actions Icon</b> (optional): Include an associated icon with the action button if applicable.</li>
<li><b>Flat Actions Button</b> Within an actions panel, you should have an action, which is represented as a flat button on the left.</li>
</ol>
</div>
</div>
