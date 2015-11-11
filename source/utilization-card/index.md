---
title: Utilization Card
author: lhinson
layout: page
---
## Overview

Utilization cards display the current utilization and a trend of a single metric. The most common use case for this pattern is seen in a dashboard.

## Example

![multi-metric-utilization-card][1]

## Description

### Card with a Single Metric

<div class="row">
  <div class="col-md-7">
    <img src="{{ site.baseurl}}wp-content/uploads/2015/08/singe-metric-utilization-card2.png" alt="singe-metric-utilization-card2" />
  </div>

  <div class="col-md-5">
    <ol>
      <li>
        <b>Metric Title:</b> Display the metric name.
      </li>
      <li>
        <b>Current Value:</b> Display the current value. This could be available, which is the PatternFly default, or used.
      </li>
      <li>
        <b>Label:</b> The label for the value is left aligned and listed above the total value.
      </li>
      <li>
        <b>Total Value:</b> The total value is left aligned and listed under the label.
      </li>
      <li>
        <b>Unit of Measurement:</b> The label for unit of measurement is shown after the total value.
      </li>
      <li>
        <b>Content Separator:</b> A horizontal line visually separates the content in the card. The content separator is located below the values and above the donut chart.
      </li>
      <li>
        <b>Donut Chart:</b> See the <a href="{{ site.baseurl}}patterns/donut-chart/">Donut Chart Pattern</a> for more details.
      </li>
      <li>
        <b>Sparkline:</b> See the <a href="{{ site.baseurl}}patterns/sparkline/">Sparkline Pattern</a> for more details.
      </li>
      <li>
        <b>Time Frame:</b> The time frame is indicated under the sparkline by small text and is left aligned.
      </li>
    </ol>
  </div>
</div>

&nbsp;

### Card with Multiple Metrics

<div class="row">
  <div class="col-md-7">
    <img src="{{ site.baseurl}}wp-content/uploads/2015/08/multi-metric-utilization-card-callout1.png" alt="multi-metric-utilization-card-callout" />
  </div>

  <div class="col-md-5">
    <ol>
      <li>
        <b>Card Title:</b> Use a card title if multiple metrics are shown in one card.
      </li>
      <li>
        <b>Title Separator:</b> Include a horizontal line under the card title.
      </li>
      <li>
        <b>Metric Title:</b> Display the metric name.
      </li>
      <li>
        <b>Current Value:</b> Display the current value. This could be available, which is the PatternFly default, or used.
      </li>
      <li>
        <b>Label:</b> The label for the value is left aligned and listed above the total value.
      </li>
      <li>
        <b>Total Value:</b> The total value is left aligned and listed under the label.
      </li>
      <li>
        <b>Unit of Measurement:</b> The label for unit of measurement is shown after the total value.
      </li>
      <li>
        <b>Content Separator:</b> A horizontal line visually separates the content in the card. The content separator is located below the values and above the donut chart.
      </li>
      <li>
        <b>Donut Chart:</b> See the <a href="{{ site.baseurl}}patterns/donut-chart/">Donut Chart Pattern</a> for more details.
      </li>
      <li>
        <b>Sparkline:</b> See the <a href="{{ site.baseurl}}patterns/sparkline/">Sparkline Pattern</a> for more details.
      </li>
      <li>
        <b>Time Frame:</b> The time frame is indicated under the sparkline by small text and is left aligned.
      </li>
    </ol>
  </div>
</div>

 [1]: /wp-content/uploads/2015/08/multi-metric-utilization-card.png
