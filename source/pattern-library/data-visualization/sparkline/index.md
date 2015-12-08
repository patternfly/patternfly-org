---
title: Sparkline
author: lhinson
layout: page
---
<h2>Overview</h2>

<p>A sparkline is a small chart that helps users to analyze data and understand trends and patterns (e.g. CPU Utilization in an environment). Sparklines are commonly used in tables, reports and dashboards.</p>

<h2>Example</h2>
<div class="row">
  <div class="col-md-4">
    <div class="chart-pf-sparkline" id="sparkline"></div>
  </div>
</div>
<script>
  var sparkline = c3.generate({
    axis: {
      x: {
        show: false
      },
      y: {
        show: false
      }
    },
    bindto: '#sparkline',
    color: {
      pattern: ['#0088ce', '#00659c', '#3f9c35', '#ec7a08', '#cc0000']
    },
    data: {
      columns: [
        ['Less than one year remaining', 10, 14, 12, 20, 31, 27, 44, 36, 52, 55, 62, 68, 69, 88, 74, 88, 91],
      ],
      type: 'area'
    },
    legend: {
      show: false
    },
    point: {
      r: 1,
      focus: {
        expand: {
          r: 4
        }
      }
    },
    size: {
      height: 80
    },
    tooltip: {
      // because a sparkline should only contain a single data column, the tooltip will only work for a single data column
      contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        for (i = 0; i < d.length; i++) {
          return '<span class="c3-tooltip-sparkline">' + d[i].value + '%' + '</span>'
        }
      }
    }
  });
</script>

<p class="reference-markup"><a class="collapse-toggle collapsed" data-toggle="collapse" aria-expanded="false" aria-controls="sparkline-markup" href="#sparkline-markup">Reference Markup</a></p>
<div class="collapse" id="sparkline-markup">
  <pre class="prettyprint">
&lt;div class="chart-pf-sparkline" id="sparkline"&gt;&lt;/div&gt;
&lt;script&gt;
  var sparkline = c3.generate({
    axis: {
      x: {
        show: false
      },
      y: {
        show: false
      }
    },
    bindto: '#sparkline',
    color: {
      pattern: ['#0088ce', '#00659c', '#3f9c35', '#ec7a08', '#cc0000']
    },
    data: {
      columns: [
        ['Less than one year remaining', 10, 14, 12, 20, 31, 27, 44, 36, 52, 55, 62, 68, 69, 88, 74, 88, 91],
      ],
      type: 'area'
    },
    legend: {
      show: false
    },
    point: {
      r: 1,
      focus: {
        expand: {
          r: 4
        }
      }
    },
    size: {
      height: 80
    },
    tooltip: {
      // because a sparkline should only contain a single data column, the tooltip will only work for a single data column
      contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
        for (i = 0; i < d.length; i++) {
          return '&lt;span class="c3-tooltip-sparkline"&gt;' + d[i].value + '%' + '</span>'
        }
      }
    }
  });
&lt;/script&gt;</pre>
</div>

<h2>Description</h2>

<div class="row">
<div class="col-md-4">
<p><img src="{{site.baseurl}}wp-content/uploads/2015/08/sparkline_callout2.png" alt="sparkline_callout2"/></p>
</div>

<div class="col-md-8">
<ol>
<li><b>Sparkline:</b> The sparkline is blue with a light blue fill, which helps to visually define the x axis.</li>
<li><b>Tooltip:</b> Use a tooltip on hover to display additional information about exact points on the sparkline such as values or percentages. A vertical line and dot may be added to accentuate the user’s hover point.</li>
<!--<li><b>X and Y Axis:</b> A visual representation of the X and Y axis (not shown) can be used if needed.-->
</ol>
</div>
</div>

