---
title: Donut Chart
author: lhinson
layout: page
---
<h2>Overview</h2>

<p>The most common use case for a donut chart are:</p>
<ul>
<li>Show progress completion as a percentage.</li>
<li>Show utilization for an object (e.g. network, CPU, storage, etc.) as a percentage.</li>
<li>Show the relationship of a set of values to a whole (design and specs for this use case are not addressed at this time, TBD.).</li>
</ul>

<h2>Example</h2>
<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-4">
    <div id="donut-1"></div>
  </div>
  <div class="col-xs-12 col-sm-12 col-md-4">
    <div id="donut-2"></div>
  </div>
  <div class="col-xs-12 col-sm-12 col-md-4">
    <div id="donut-3"></div>
  </div>
</div>
<script>
  var donut1 = c3.generate({
    bindto: '#donut-1',
    type: "donut",
    donut: {
      title: "A",
      label: {show: false},
      width: 11
    },
    size: {
      height: 171 // produces a diameter of 150 and a centered chart
    },
    legend: {
      show: false
    },
    color: {
      pattern: ["#3f9c35","#D1D1D1"]
    },
    tooltip: {
      contents: function (d) {
        return '<span class="donut-tooltip-pf" style="white-space: nowrap;">' +
                Math.round(d[0].ratio * 100) + '% ' + d[0].name +
                '</span>';
      }
    },
    data: {
      type: "donut",
      columns: [
        ["Memory Used", 25],
        ["Memory Available", 75]
      ],
      groups: [
        ["used", "available"]
      ],
      order: null
    },
  });

  var donutChartTitle = d3.select("#donut-1").select('text.c3-chart-arcs-title');
  donutChartTitle.text("");
  donutChartTitle.insert('tspan').text("32").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
  donutChartTitle.insert('tspan').text("of 128 GB").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

  var donut2 = c3.generate({
    bindto: '#donut-2',
    type: "donut",
    donut: {
      title: "A",
      label: {show: false},
      width: 11
    },
    size: {
      height: 171 // produces a diameter of 150 and a centered chart
    },
    legend: {
      show: false
    },
    color: {
      pattern: ["#cc0000","#D1D1D1"]
    },
    tooltip: {
      contents: function (d) {
        return '<span class="donut-tooltip-pf" style="white-space: nowrap;">' +
                Math.round(d[0].ratio * 100) + '% ' + d[0].name +
                '</span>';
      }
    },
    data: {
      type: "donut",
      columns: [
        ["Memory Used", 97],
        ["Memory Available", 3]
      ],
      groups: [
        ["used", "available"]
      ],
      order: null
    },
  });

  var donutChartTitle = d3.select("#donut-2").select('text.c3-chart-arcs-title');
  donutChartTitle.text("");
  donutChartTitle.insert('tspan').text("69.82").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
  donutChartTitle.insert('tspan').text("of 71.98 GB").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

  var donut3 = c3.generate({
    bindto: '#donut-3',
    type: "donut",
    donut: {
      title: "A",
      label: {show: false},
      width: 11
    },
    size: {
      height: 171 // produces a diameter of 150 and a centered chart
    },
    legend: {
      show: false
    },
    color: {
      pattern: ["#ec7a08","#D1D1D1"]
    },
    tooltip: {
      contents: function (d) {
        return '<span class="donut-tooltip-pf" style="white-space: nowrap;">' +
                Math.round(d[0].ratio * 100) + '% ' + d[0].name +
                '</span>';
      }
    },
    data: {
      type: "donut",
      columns: [
        ["Memory Used", 75],
        ["Memory Available", 25]
      ],
      groups: [
        ["used", "available"]
      ],
      order: null
    },
  });

  var donutChartTitle = d3.select("#donut-3").select('text.c3-chart-arcs-title');
  donutChartTitle.text("");
  donutChartTitle.insert('tspan').text("75").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
  donutChartTitle.insert('tspan').text("of 100 GB").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);
</script>
<p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="donut-chart-markup" href="#donut-chart-markup">Reference Markup</a></p>
<div class="collapse" id="donut-chart-markup">
  <pre class="prettyprint">
&lt;div class="row"&gt;
  &lt;div class="col-xs-6 col-sm-4 col-md-3"&gt;
    &lt;div id="donut-1"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col-xs-6 col-sm-4 col-md-3"&gt;
    &lt;div id="donut-2"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="col-xs-6 col-sm-4 col-md-3"&gt;
    &lt;div id="donut-3"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
  var donut1 = c3.generate({
    bindto: '#donut-1',
    type: "donut",
    donut: {
      title: "A",
      label: {show: false},
      width: 11
    },
    size: {
      height: 171 // produces a diameter of 150 and a centered chart
    },
    legend: {
      show: false
    },
    color: {
      pattern: ["#3f9c35","#D1D1D1"]
    },
    tooltip: {
      contents: function (d) {
        return '&lt;span class="donut-tooltip-pf" style="white-space: nowrap;"&gt;' +
                Math.round(d[0].ratio * 100) + '% ' + d[0].name +
                '&lt;/span&gt;';
      }
    },
    data: {
      type: "donut",
      columns: [
        ["Memory Used", 25],
        ["Memory Available", 75]
      ],
      groups: [
        ["used", "available"]
      ],
      order: null
    },
  });

  var donutChartTitle = d3.select("#donut-1").select('text.c3-chart-arcs-title');
  donutChartTitle.text("");
  donutChartTitle.insert('tspan').text("32").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
  donutChartTitle.insert('tspan').text("of 128 GB").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

  var donut2 = c3.generate({
    bindto: '#donut-2',
    type: "donut",
    donut: {
      title: "A",
      label: {show: false},
      width: 11
    },
    size: {
      height: 171 // produces a diameter of 150 and a centered chart
    },
    legend: {
      show: false
    },
    color: {
      pattern: ["#cc0000","#D1D1D1"]
    },
    tooltip: {
      contents: function (d) {
        return '&lt;span class="donut-tooltip-pf" style="white-space: nowrap;"&gt;' +
                Math.round(d[0].ratio * 100) + '% ' + d[0].name +
                '&lt;/span&gt;';
      }
    },
    data: {
      type: "donut",
      columns: [
        ["Memory Used", 97],
        ["Memory Available", 3]
      ],
      groups: [
        ["used", "available"]
      ],
      order: null
    },
  });

  var donutChartTitle = d3.select("#donut-2").select('text.c3-chart-arcs-title');
  donutChartTitle.text("");
  donutChartTitle.insert('tspan').text("69.82").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
  donutChartTitle.insert('tspan').text("of 71.98 GB").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);

  var donut3 = c3.generate({
    bindto: '#donut-3',
    type: "donut",
    donut: {
      title: "A",
      label: {show: false},
      width: 11
    },
    size: {
      height: 171 // produces a diameter of 150 and a centered chart
    },
    legend: {
      show: false
    },
    color: {
      pattern: ["#ec7a08","#D1D1D1"]
    },
    tooltip: {
      contents: function (d) {
        return '&lt;span class="donut-tooltip-pf" style="white-space: nowrap;"&gt;' +
                Math.round(d[0].ratio * 100) + '% ' + d[0].name +
                '&lt;/span&gt;';
      }
    },
    data: {
      type: "donut",
      columns: [
        ["Memory Used", 75],
        ["Memory Available", 25]
      ],
      groups: [
        ["used", "available"]
      ],
      order: null
    },
  });

  var donutChartTitle = d3.select("#donut-3").select('text.c3-chart-arcs-title');
  donutChartTitle.text("");
  donutChartTitle.insert('tspan').text("75").classed('donut-title-big-pf', true).attr('dy', 0).attr('x', 0);
  donutChartTitle.insert('tspan').text("of 100 GB").classed('donut-title-small-pf', true).attr('dy', 20).attr('x', 0);
&lt;/script&gt;</pre>
</div>

<h2>Description</h2>

<div class="row">
<div class="col-md-4">
<p><img src="{{site.baseurl}}assets/img/donut-chart-callout.png" alt="donut-chart-callout"/></p>
</div>

<div class="col-md-8">
<ol>
<li><b>Donut Chart Background Fill:</b> The background color is grey (#d1d1d1)</li>
<li><b>Donut Chart Fill:</b> The fill starts at 12 o’clock and moves clockwise. The fill color depends on the thresholds.</li>
<ul>
<li>When no thresholds exist the indicator is blue (#0088ce).</li>
<li>When a threshold exists and the percentage has not surpassed any thresholds, the indicator is green (#3f9c35).</li>
<li>When the utilization percentage has surpassed the warning threshold, but not the error threshold, the indicator is orange (#ec7a08)</li>
<li>When the utilization percentage has surpassed the error threshold, the indicator is is red (#cc0000).</li>
</ul>
<li><b>Label or Icon</b> (optional):</li>
<ul>
<li>When the donut chart is a part of a dashboard tile, there is a label in the center of the chart.
<li>The label may be omitted or replaced by an icon if the chart is used in an object blade or card.</li>
<li>The label in the center of the chart should show one of the following:</li>
<ul>
<li>The used value in a large font size followed by "&lt;units&gt; Used" on a second row.</li>
<li>The available value in a large font size followed by "&lt;units&gt; Available" on a second row.</li>
<li>The current percentage in a large font size followed by a "of &lt;total value&gt; &lt;units&gt;" on a second row.</li>
</ul>
</ul>
<li><b>Tooltip</b> (optional): When the donut chart is used to represent utilization, the percentage is displayed in a tooltip on hover.</li>
<li><b>Warning Threshold Indicator</b> (optional): If a warning threshold exists, that may be visually indicated on the chart. 75% is the typical default value for a warning threshold but some products may have configurable thresholds (design not currently shown, visuals are still TBD).</li>
<li><b>Error Threshold Indicator</b> (optional): If an error threshold exists, that may be visually indicated on the chart. 90% is the typical default value for an error threshold but some products may have configurable thresholds (design not currently shown, visuals are still TBD).</li>
</ol>
  </div>
</div>
