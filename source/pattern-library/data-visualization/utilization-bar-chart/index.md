---
title: Utilization Bar Chart
author: lhinson
layout: page
---
<h2>Overview</h2>
<p>The Utilization Bar Chart depicts the percentage utilization ratio between used and available.

<h2>Example</h2>
<div class="row">
  <div class="col-xs-8 col-sm-6 col-md-6">
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;" data-toggle="tooltip" title="25% Used">
        <span class="sr-only">25% Used</span>
      </div>
      <div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;" data-toggle="tooltip" title="75% Available">
        <span class="sr-only">75% Available</span>
      </div>
    </div>
  </div>
</div>
<script>
  // Initialize Tooltip
  jQuery(document).ready(function() {
    jQuery('[data-toggle="tooltip"]').tooltip();
  });
</script>
<p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="utilizatoin-bar-chart-markup" href="#utilizatoin-bar-chart-markup">Reference Markup</a></p>
<div class="collapse" id="utilizatoin-bar-chart-markup">
  <pre class="prettyprint">
&lt;div class="progress"&gt;
  &lt;div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;" data-toggle="tooltip" title="25% Used"&gt;
    &lt;span class="sr-only"&gt;25% Used&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="progress-bar progress-bar-remaining" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;" data-toggle="tooltip" title="75% Available"&gt;
    &lt;span class="sr-only"&gt;75% Available&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
  // Initialize Tooltip
  $(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });
&lt;/script&gt;</pre>
</div>

<h2>Description</h2>
<div class="row">
<div class="col-md-6">
<p><img src="{{site.baseurl}}wp-content/uploads/2015/11/utilziationbarchart1.png" alt="utilziationbarchart1"/></p>
</div>

<div class="col-md-6">
<ol>
<li><b>Chart Fill:</b> The fill color depends on the thresholds.
<ul>
<li>When no thresholds exist the indicator is blue (#0088ce).</li>
<li>When a threshold exists and the percentage has not surpassed any thresholds, the indicator is green (#3f9c35).</li>
<li>When the utilization percentage has surpassed the warning threshold, but not the error threshold, the indicator is orange (#ec7a08)</li>
<li>When the utilization percentage has surpassed the error threshold, the indicator is is red (#cc0000).</li>
</ul>
<li><b>Background Fill:</b> The background color is grey (#d1d1d1)</li>
</li>
<li><b>Tooltip:</b> It is recommend that the percentage is displayed on hover.</li>
<li><b>Warning Threshold Indicator</b> (optional):  If a warning threshold exists, that may be visually indicated on the chart. 75% is the typical default value for a warning threshold but some products may have configurable thresholds (design not currently shown, visuals are still TBD).</li>
<li><b>Error Threshold Indicator</b> (optional): If an error threshold exists, that may be visually indicated on the chart. 90% is the typical default value for an error threshold but some products may have configurable thresholds (design not currently shown, visuals are still TBD).</li>
</ol>
  </div>
</div>
