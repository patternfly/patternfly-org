---
title: Donut Chart
author: lhinson
layout: page
---
<a "/wp-content/uploads/2015/07/donutChart.png"><img src="/wp-content/uploads/2015/07/donutChart.png" alt="donutChart" class="alignnone size-full wp-image-4074" /></a> 

## Overview and Usage Scenarios

The most common use case for a donut chart are:

  * Show progress completion as a percentage.
  * Show utilization for an object (e.g. network, CPU, storage, etc.) as a percentage.
  * Show the relationship of a set of values to a whole (design and specs for this use case are not addressed at this time, TBD.).

## Description

<div class="row">
  <div class="col-md-8">
    <ol>
      <li>
        <b>Donut Chart Background Fill:</b> The background color is grey (#d1d1d1)
      </li>
      <li>
        <b>Donut Chart Fill:</b> The fill starts at 12 o’clock and moves clockwise. There are three possible fill colors, dependent on whether or not there are thresholds.
      </li>
      <ul>
        <li>
          When no thresholds exist, or if the percentage has not surpassed any thresholds, the indicator is blue (#0088ce).
        </li>
        <li>
          When the utilization percentage has surpassed the warning threshold, but not the error threshold, the indicator is orange (#ec7a08)
        </li>
        <li>
          When the utilization percentage has surpassed the error threshold, the indicator is is red (#cc0000).
        </li>
      </ul>
      
      <li>
        <b>Label or Icon</b> (optional):
      </li>
      <ul>
        <li>
          When the donut chart is a part of a dashboard tile, there is a label in the center of the chart. <li>
            The label may be omitted or replaced by an icon if the chart is used in an object blade or card.
          </li>
          <li>
            The label in the center of the chart should show one of the following:
          </li>
          <ul>
            <li>
              The used value in a large font size followed by &#8220;<units> Used&#8221; on a second row.
            </li>
            <li>
              The available value in a large font size followed by &#8220;<units> Available&#8221; on a second row.
            </li>
            <li>
              The current percentage in a large font size followed by a &#8220;of <total value> <units>&#8221; on a second row.
            </li>
          </ul></ul> 
          
          <li>
            <b>Tooltip</b> (optional): When the donut chart is used to represent utilization, the percentage is displayed in a tooltip on hover.
          </li>
          <li>
            <b>Warning Threshold Indicator</b> (optional): If a warning threshold exists, you may show that as a tick mark on the chart. 75% is the typical default value for a warning threshold but some products may have configurable thresholds (design not currently shown, visuals are still TBD).
          </li>
          <li>
            <b>Error Threshold Indicator</b> (optional): If an error threshold exists, you may show that as a tick mark on the chart. 90% is the typical default value for an error threshold but some products may have configurable thresholds (design not currently shown, visuals are still TBD).
          </li></ol> </div> 
          <div class="col-md-4">
            <a /wp-content/uploads/2015/07/donutChart_callout.png"><img src="/wp-content/uploads/2015/07/donutChart_callout.png" alt="donutChart_callout" class="alignnone size-full wp-image-4066" /></a>
          </div></div>