---
title: Utilization Bar Card
author: rhamilto
layout: page
url-js-extra: ['components/patternfly/components/matchHeight/jquery.matchHeight-min.js']
---
<h2>Overview</h2>
<p>A Utilization Bar Card displays the utilization for metrics using the <a href="{{site.baseurl}}pattern-library/data-visualization/utilization-bar-chart">Utilization Bar Chart</a>.  The most common use case for this pattern is seen in a dashboard.</p>

<h2>Examples</h2>
<h3>Top Left Description and Top Right Label</h3>
<!-- don't copy this example as it's been modified to work within the context of the documentation -->
<div class="row">
  <div class="col-md-7">
    <div class="cards-pf">
      <div class="container-fluid container-cards-pf" style="margin-top: 0;">
        <div class="row row-cards-pf" style="padding-top: 20px;">
          <div class="col-md-12">
            <div class="card-pf">
              <div class="card-pf-heading">
                <h2 class="card-pf-title" style="line-height: 1.1">Top Utilized Clusters</h2>
              </div>
              <div class="card-pf-body">
                <div class="progress-description">RHOS6-Controller</div>
                <div class="progress progress-label-top-right">
                  <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 95%;"  data-toggle="tooltip" title="95% Used">
                    <span><strong>190.0 of 200.0 GB</strong> Used</span>
                  </div>
                  <div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style="width: 5%;" data-toggle="tooltip" title="5% Available">
                    <span class="sr-only">5% Available</span>
                  </div>
                </div>
                <div class="progress-description">CFMEQE-Cluster</div>
                <div class="progress progress-label-top-right">
                  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"  data-toggle="tooltip" title="50% Used">
                    <span><strong>100.0 of 200.0 GB</strong> Used</span>
                  </div>
                  <div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;" data-toggle="tooltip" title="50% Available">
                    <span class="sr-only">50% Available</span>
                  </div>
                </div>
                <div class="progress-description">RHOS-Undercloud</div>
                <div class="progress progress-label-top-right">
                  <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"  data-toggle="tooltip" title="70% Used">
                    <span><strong>140.0 of 200.0 GB</strong> Used</span>
                  </div>
                  <div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%;" data-toggle="tooltip" title="30% Available">
                    <span class="sr-only">30% Available</span>
                  </div>
                </div>
                <div class="progress-description">RHEL6-Controller</div>
                <div class="progress progress-label-top-right">
                  <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="76.5" aria-valuemin="0" aria-valuemax="100" style="width: 76.5%;"  data-toggle="tooltip" title="76.5% Used">
                    <span><strong>153.0 of 200.0 GB</strong> Used</span>
                  </div>
                  <div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="23.5" aria-valuemin="0" aria-valuemax="100" style="width: 23.5%;" data-toggle="tooltip" title="23.5% Available">
                    <span class="sr-only">23.5% Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="utilization-bar-card-markup" href="#utilization-bar-card-markup">Reference Markup</a></p>
<div class="collapse" id="utilization-bar-card-markup">
  <pre class="prettyprint">
&lt;body class="cards-pf"&gt;
  ...
  &lt;div class="container-fluid container-cards-pf"&gt;
    &lt;div class="row row-cards-pf"&gt;
      &lt;div class="col-xs-12 col-sm-6 col-md-4"&gt;
        &lt;div class="card-pf"&gt;
          &lt;div class="card-pf-heading"&gt;
            &lt;h2 class="card-pf-title"&gt;
              Top Utilized Clusters
            &lt;/h2&gt;
          &lt;/div&gt;
          &lt;div class="card-pf-body"&gt;
            &lt;div class="progress-description"&gt;
              RHOS6-Controller
            &lt;/div&gt;
            &lt;div class="progress progress-label-top-right"&gt;
              &lt;div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 95%;"  data-toggle="tooltip" title="95% Used"&gt;
                &lt;span&gt;&lt;strong&gt;190.0 of 200.0 GB&lt;/strong&gt; Used&lt;/span&gt;
              &lt;/div&gt;
              &lt;div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style="width: 5%;" data-toggle="tooltip" title="5% Available"&gt;
                &lt;span class="sr-only"&gt;5% Available&lt;/span&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="progress-description"&gt;
              CFMEQE-Cluster
            &lt;/div&gt;
            &lt;div class="progress progress-label-top-right"&gt;
              &lt;div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"  data-toggle="tooltip" title="50% Used"&gt;
                &lt;span&gt;&lt;strong&gt;100.0 of 200.0 GB&lt;/strong&gt; Used&lt;/span&gt;
              &lt;/div&gt;
              &lt;div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;" data-toggle="tooltip" title="50% Available"&gt;
                &lt;span class="sr-only"&gt;50% Available&lt;/span&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="progress-description"&gt;
              RHOS-Undercloud
            &lt;/div&gt;
            &lt;div class="progress progress-label-top-right"&gt;
              &lt;div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"  data-toggle="tooltip" title="70% Used"&gt;
                &lt;span&gt;&lt;strong&gt;140.0 of 200.0 GB&lt;/strong&gt; Used&lt;/span&gt;
              &lt;/div&gt;
              &lt;div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%;" data-toggle="tooltip" title="30% Available"&gt;
                &lt;span class="sr-only"&gt;30% Available&lt;/span&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="progress-description"&gt;
              RHEL6-Controller
            &lt;/div&gt;
            &lt;div class="progress progress-label-top-right"&gt;
              &lt;div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="76.5" aria-valuemin="0" aria-valuemax="100" style="width: 76.5%;"  data-toggle="tooltip" title="76.5% Used"&gt;
                &lt;span&gt;&lt;strong&gt;153.0 of 200.0 GB&lt;/strong&gt; Used&lt;/span&gt;
              &lt;/div&gt;
              &lt;div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="23.5" aria-valuemin="0" aria-valuemax="100" style="width: 23.5%;" data-toggle="tooltip" title="23.5% Available"&gt;
                &lt;span class="sr-only"&gt;23.5% Available&lt;/span&gt;
              &lt;/div&gt;
            &lt;/div&gt;
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
<h3>Left Description and Right Label</h3>
<!-- don't copy this example as it's been modified to work within the context of the documentation -->
<div class="row">
  <div class="col-md-7">
    <div class="cards-pf">
      <div class="container-fluid container-cards-pf" style="margin-top: 0;">
        <div class="row row-cards-pf" style="padding-top: 20px;">
          <div class="col-md-12">
            <div class="card-pf">
              <div class="card-pf-heading">
                <h2 class="card-pf-title" style="line-height: 1.1">
                  Quotas
                </h2>
              </div>
              <div class="card-pf-body">
                <div class="progress-container progress-description-left progress-label-right">
                  <div class="progress-description">
                    CPU
                  </div>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;" data-toggle="tooltip" title="25% Used">
                      <span><strong>115 of 460</strong> MHz</span>
                    </div>
                    <div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;" data-toggle="tooltip" title="75% Available">
                      <span class="sr-only">75% Available</span>
                    </div>
                  </div>
                </div>
                <div class="progress-container progress-description-left progress-label-right">
                  <div class="progress-description">
                    Memory
                  </div>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;" data-toggle="tooltip" title="8 GB Used">
                      <span><strong>8 of 16</strong> GB</span>
                    </div>
                    <div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;" data-toggle="tooltip" title="8 GB Available">
                      <span class="sr-only">50% Available</span>
                    </div>
                  </div>
                </div>
                <div class="progress-container progress-description-left progress-label-right">
                  <div class="progress-description">
                    Pods
                  </div>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="62.5" aria-valuemin="0" aria-valuemax="100" style="width: 62.5%;" data-toggle="tooltip" title="62.5% Used">
                      <span><strong>5 of 8</strong> Total</span>
                    </div>
                    <div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="37.5" aria-valuemin="0" aria-valuemax="100" style="width: 37.5%;" data-toggle="tooltip" title="37.5% Available">
                      <span class="sr-only">37.5% Available</span>
                    </div>
                  </div>
                </div>
                <div class="progress-container progress-description-left progress-label-right">
                  <div class="progress-description">
                    Services
                  </div>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;" data-toggle="tooltip" title="100% Used">
                      <span><strong>2 of 2</strong> Total</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="utilization-bar-card-markup-2" href="#utilization-bar-card-markup-2">Reference Markup</a></p>
<div class="collapse" id="utilization-bar-card-markup-2">
  <pre class="prettyprint">
&lt;body class="cards-pf"&gt;
  ...
  &lt;div class="container-fluid container-cards-pf"&gt;
    &lt;div class="row row-cards-pf"&gt;
      &lt;div class="col-xs-12 col-sm-6 col-md-4"&gt;
        &lt;div class="card-pf"&gt;
          &lt;div class="card-pf-heading">
            &lt;h2 class="card-pf-title&gt;
              Quotas
            &lt;/h2&gt;
          &lt;/div&gt;
          &lt;div class="card-pf-body"&gt;
            &lt;div class="progress-container progress-description-left progress-label-right"&gt;
              &lt;div class="progress-description"&gt;
                CPU
              &lt;/div&gt;
              &lt;div class="progress"&gt;
                &lt;div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;" data-toggle="tooltip" title="25% Used"&gt;
                  &lt;span&gt;&lt;strong&gt;115 of 460&lt;/strong&gt; MHz&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;" data-toggle="tooltip" title="75% Available"&gt;
                  &lt;span class="sr-only"&gt;75% Available&lt;/span&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="progress-container progress-description-left progress-label-right"&gt;
              &lt;div class="progress-description"&gt;
                Memory
              &lt;/div&gt;
              &lt;div class="progress"&gt;
                &lt;div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;" data-toggle="tooltip" title="8 GB Used"&gt;
                  &lt;span&gt;&lt;strong&gt;8 of 16&lt;/strong&gt; GB&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;" data-toggle="tooltip" title="8 GB Available"&gt;
                  &lt;span class="sr-only"&gt;50% Available&lt;/span&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="progress-container progress-description-left progress-label-right"&gt;
              &lt;div class="progress-description"&gt;
                Pods
              &lt;/div&gt;
              &lt;div class="progress"&gt;
                &lt;div class="progress-bar" role="progressbar" aria-valuenow="62.5" aria-valuemin="0" aria-valuemax="100" style="width: 62.5%;" data-toggle="tooltip" title="62.5% Used"&gt;
                  &lt;span&gt;&lt;strong&gt;5 of 8&lt;/strong&gt; Total&lt;/span&gt;
                &lt;/div&gt;
                &lt;div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="37.5" aria-valuemin="0" aria-valuemax="100" style="width: 37.5%;" data-toggle="tooltip" title="37.5% Available"&gt;
                  &lt;span class="sr-only"&gt;37.5% Available&lt;/span&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="progress-container progress-description-left progress-label-right"&gt;
              &lt;div class="progress-description"&gt;
                Services
              &lt;/div&gt;
              &lt;div class="progress"&gt;
                &lt;div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;" data-toggle="tooltip" title="100% Used"&gt;
                  &lt;span&gt;&lt;strong&gt;2 of 2&lt;/strong&gt; Total&lt;/span&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/div&gt;
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

<script>
  jQuery(function() {
    // matchHeight the contents of each .card-pf and then the .card-pf itself
    jQuery(".row-cards-pf > [class*='col'] > .card-pf .card-pf-title").matchHeight();
    jQuery(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
    jQuery(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-footer").matchHeight();
    jQuery(".row-cards-pf > [class*='col'] > .card-pf").matchHeight();
    // initialize tooltips
    jQuery('[data-toggle="tooltip"]').tooltip();
  });
</script>

<h2>Description</h2>
<div class="row">
<div class="col-md-7">
<p><img src="{{site.baseurl}}assets/img/utilization-bar-card3.png" alt="utilization-bar-card3"/></p>
</div>

<div class="col-md-5">
<ol>
<li><b>Title:</b> Define a title for the card. See <a href="{{site.baseurl}}patterns/dashboard-card-base/">Dashboard Cards</a> for more information.</li>
<li><b>Utilization Bar Chart:</b> See <a href="{{site.baseurl}}utilization-bar-chart/">Utilization Bar Chart</a> for more information about the chart’s appearance and behavior.</li>
<li><b>Used Value:</b> Show a value for amount used.</li>
<li><b>Total Value:</b> In addition to the used value, it is recommended to show the total value. This can be shown with the used value (i.e x of y used) or you may opt to provide this additional information in a tooltip.</li>
<li><b>Unit of Measurement:</b> The label for unit of measurement is shown after the the value.</li>
<li><b>Tooltip:</b> It is recommend that the percentage is displayed in a tooltip.</li>
</ol>
</div>
</div>

