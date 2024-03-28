---
id: About charts
section: charts
---

_Charts are only available in React_

A **chart** visualizes data in an application. The type of chart you use will depend on your use case and the type of data you need to display.

## Elements
<img src="./img/axis-labels.png" alt="Chart with axis labels" width="713"/> 

1. **Title:** Titles should be left-aligned and appear above your chart.
2. **Axis labels and scale values:**  We recommend using tick marks to clearly mark scale values on the y-axis. The text for axis labels and scale values should be 12px font in standard text color. All scale values should be equally distributed across the axis and the axis label should fall outside the scale values, centered with the axis line.
3. **Legends:** We recommend using legends when charts include more than one variable and therefore use more than one color. When datasets are overlapping, an [interactive legend](#interactive-chart-legends) can be used. If space is not available to display names of horizontal and vertical axes, a legend must be added instead. The legend should list the colors that each variable obtains and the name of the variable. The text on the legend should be 14px size and standard text color. They can either be placed left-aligned to the right of the chart or centered below the chart.
4. **Chart tooltip:** A tooltip will appear on hover over certain elements of a chart, like bars in a bar chart or segments in a donut chart. [Chart tooltips](/charts/tooltips) should display the specific values related to the element the user is hovering over. 

## Chart types
<img src="./img/chart-legend.png" alt="Image displaying what chart types to use when" width="1024"/> 

- [Area chart](/charts/area-chart/design-guidelines): Use to show (potentially multiple) trends over a continuous scale (usually time).
- [Bar chart](/charts/bar-chart/design-guidelines): Use to show and compare categories and their respective data point/value. Bar charts can be plotted vertically or horizontally. The axis that labels the bar is the category, the axis that marks the end point of the bar displays the data points/values.
  - [Stacked bar chart](/charts/stack-chart/design-guidelines): Use to show and compare categorical data of more than one variable. Can be plotted vertically or horizontally.
  - Vertical bar charts (category on the horizontal x axis): Use to show a progression of the categories (or sequential variables). The most common bar chart. 
  - Horizontal bar charts (category on the vertical y axis): Use to show nominal variables. Allows for more space for category labeling.
- [Bullet chart](/charts/bullet-chart/design-guidelines): Use as an extension to the bar chart to measure data with thresholds and static ranges.
- [Donut chart](/charts/donut-chart/design-guidelines): Use to show the relationship of a set of values to a whole or to show progress completion as a percentage. Donut charts are best used to display data with a small number of categories (example: 2-5 categories). Use the middle of the chart to highlight a data point.
  - [Donut utilization](/charts/donut-utilization-chart/design-guidelines): Use to show utilization for an object as a percentage.
  - [Donut utilization with threshold](/charts/donut-utilization-chart/design-guidelines#donut-chart---utilization-with-threshold): Use to show utilization for an object as a percentage in relation to threshold values.
- [Line chart](/charts/line-chart/design-guidelines): Use to compare several data sets or to show data changes over a period of time. Line charts work best when small changes exist within the data.
- [Pie chart](/charts/pie-chart/design-guidelines): Use to show percentages or proportional data. Can be used to show up to five or more data points.
- [Sparkline](/charts/sparkline-chart/design-guidelines): Use to show how values change over time for multiple sets of data. Sparkline charts offer an alternative to the line chart when multiple lines need to be plotted. Axis values are not labeled, but a tooltip can be used to display the value at a given point.

## Charts in cards
If a chart lives in a card, the title of that chart will be placed on the header of that card instead of the chart. The rest of the chart guidelines should be followed for the chart itself.

<img src="./img/chart-on-a-card.png" alt="Chart on a card" width="416"/>

<img src="./img/sparkline-card.png" alt="Sparkline on a card" width="482"/>

## Brush and zoom
The brush and zoom properties allow for magnification of an area, bar, line, or stack chart. If desired, more advanced features can be added through [Victory](https://formidable.com/open-source/victory/guides/brush-and-zoom/).

### Example

<img src="./img/brush-and-zoom.png" alt="Brush and zoom" />

1. **Window:** Click and drag to create a window around the section of the chart that you want to zoom in on.
2. **Magnified chart:** The portion selected will appear above the full chart view.

## Interactive chart legends
For charts that graph more than one data set, use interactive legends to highlight or isolate certain data sets.  This would work well for [line](#line-chart), [area](#area-chart), or [stacked](#stacked-bar-charts) charts, where data sets can overlap.

### Example
On hover

<img src="./img/interaction-legend-hover.png" alt="Interactive legend on hover" />

1. **Legend:** When a user hovers over a legend label, opacity lowers for all other legend labels.
2. **Chart:** Data corresponding to the hovered legend label is highlighted since opacity lowers for all other data sets, too. 

On click

<img src="./img/interaction-legend-hide.png" alt="Interactive legend hidden" />

1. **Legend:** When a user clicks on a legend label, it becomes disabled and the color swatch is replaced with an eye-slashed icon.
2. **Chart:** Data corresponding to the clicked legend label is hidden from view.
