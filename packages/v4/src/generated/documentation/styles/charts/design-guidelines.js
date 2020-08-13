import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport76 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/axis-labels.png';
import srcImport77 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/area-chart.png';
import srcImport78 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/horizontal-bar-chart.png';
import srcImport79 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/vertical-bar-chart.png';
import srcImport80 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/horizontal-stacked-bar-chart.png';
import srcImport81 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/vertical-stacked-bar-chart.png';
import srcImport82 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/bullet-chart.png';
import srcImport83 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/donut-chart.png';
import srcImport84 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/donut-utilization.png';
import srcImport85 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/donut-utilization-hover.png';
import srcImport86 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/donut-utilization-2.png';
import srcImport87 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/donut-utilization-with-threshold.png';
import srcImport88 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/donut-utilization-with-threshold-hover.png';
import srcImport89 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/line-chart.png';
import srcImport90 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/pie-chart.png';
import srcImport91 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/sparkline.png';
import srcImport92 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/chart-on-a-card.png';
import srcImport93 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/sparkline-card.png';
import srcImport94 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/brush-and-zoom.png';
import srcImport95 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/interactive-legend-hover.png';
import srcImport96 from '../../../../content/design-guidelines/usage-and-behavior/charts/./img/interactive-legend-hide.png';

export const DocumentationStylesChartsDesignGuidelinesDocs = {
  "slug": "/documentation/styles/charts/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/usage-and-behavior/charts/charts.md",
  "section": "styles",
  "id": "Charts",
  "title": "Charts",
  "toc": [
    "Elements",
    "Chart types"
  ]
};
DocumentationStylesChartsDesignGuidelinesDocs.liveContext = {
  
};
DocumentationStylesChartsDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      <em>
        {`Charts are only available in React`}
      </em>
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use charts to visualize data in an application. The type of chart you use will depend on your use case and the type of data you need to display.`}
    </p>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport76} {...{"alt":"Chart with axis labels","width":"713","className":"ws-img"}}>
      </img>
      {` `}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Title:`}
        </strong>
        {` Titles should be left-aligned and appear above your chart.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Axis labels and scale values:`}
        </strong>
        {`  We recommend using tick marks to clearly mark scale values on the y-axis. The text for axis labels and scale values should be 12px font in standard text color. All scale values should be equally distributed across the axis and the axis label should fall outside the scale values, centered with the axis line.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Legends:`}
        </strong>
        {` We recommend using legends when charts include more than one variable and therefore use more than one color. When datasets are overlapping, an `}
        <a {...{"href":"#interactive-chart-legends"}}>
          {`interactive legend`}
        </a>
        {` can be used. If space is not available to display names of horizontal and vertical axes, a legend must be added instead. The legend should list the colors that each variable obtains and the name of the variable. The text on the legend should be 14px size and standard text color. They can either be placed left-aligned to the right of the chart or centered below the chart.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chart tooltip:`}
        </strong>
        {` A tooltip will appear on hover over certain elements of a chart, like bars in a bar chart or segments in a donut chart. Chart tooltips should display the specific values related to the element the user is hovering over.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Chart types`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#area-chart"}}>
          {`Area charts`}
        </a>
        {`: use to show trending over a continuous scale (usually time)`}
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#bar-chart"}}>
          {`Bar charts`}
        </a>
        {`: great way to show and compare categorical data`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <a {...{"href":"#stacked-bar-charts"}}>
              {`Stacked bar charts`}
            </a>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#bullet-chart"}}>
          {`Bullet charts`}
        </a>
        {`: use as an extension to the bar chart to measure data with thresholds and static ranges`}
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#donut-chart"}}>
          {`Donut charts`}
        </a>
        {`: use to show the relationship of a set of values to a whole or progress completion as a percentages`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <a {...{"href":"#donut-chart---utilization"}}>
              {`Donut utilization`}
            </a>
            {`: use to show utilization for an object as a percentages`}
          </li>
          <li {...{"className":"ws-li"}}>
            <a {...{"href":"#donut-chart---utilization-with-threshold"}}>
              {`Donut utilization with threshold`}
            </a>
            {`: use to show utilization for an object in relation to threshold values`}
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#line-chart"}}>
          {`Line chart`}
        </a>
        {`: use to compare several data sets, or to show data over a period of time`}
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#pie-chart"}}>
          {`Pie chart`}
        </a>
        {`: show percentages or proportional data`}
      </li>
      <li {...{"className":"ws-li"}}>
        <a {...{"href":"#sparkline"}}>
          {`Sparkline`}
        </a>
        {`: understand trends and patterns`}
      </li>
    </ul>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Area chart`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`An area chart is used to provide metrics for a single data point. While similar to a line chart in both form and function, it offers an area fill for visual emphasis. The area fill below the line also functions to indicate cumulative data.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The most common use case for area charts is to show trending over a continuous scale (usually time). Use this instead of a line chart when you need to provide more visual emphasis than a simple line chart would offer. It is possible to stack area charts to compare more than one continuous data sets. Stacking area charts will put more emphasis on the difference between the data sets visualized. See `}
      <a {...{"href":"#line-chart"}}>
        {`Line charts`}
      </a>
      {` for more information about them.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Example`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <img src={srcImport77} {...{"alt":"Area chart","width":"489","className":"ws-img"}}>
      </img>
      {` `}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Data area fill:`}
        </strong>
        {` The area fill is presented below the data line. Data area fills use colors that conform with the `}
        <PatternflyThemeLink {...{"to":"/design-guidelines/styles/colors-for-charts"}}>
          {`Colors for charts`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chart tooltip:`}
        </strong>
        {` Use the chart tooltip to drill into the data related to any data point provided on your area chart.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`React component`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/react/charts/chartarea"}}>
        {`Area chart`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Bar chart`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Bar charts are used to visualize and compare categorical data.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Since bar charts differentiate by length, we recommend that in most cases they be used rather than donut or pie charts, which differentiate by angle and area. As a rule of thumb, bar charts are a great way to show and compare categorical data. If you want to show continuous data over time, you may consider using a `}
      <a {...{"href":"#line-chart"}}>
        {`Line chart`}
      </a>
      {` instead. If you wish to show the percentage utilization ratio between used and available, you should check out the `}
      <a {...{"href":"#donut-chart---utilization"}}>
        {`Utilization donut chart`}
      </a>
      {`.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Horizontal vs. vertical bar charts`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The orientation of bar charts is dependent on the data and space at hand. Any bar chart should be able to be displayed in either direction if applicable.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Example`}
    </AutoLinkHeader>
    <img src={srcImport78} {...{"alt":"Horizontal bar chart","width":"737","className":"ws-img"}}>
    </img>
    <br/>
    <img src={srcImport79} {...{"alt":"Vertical bar chart","width":"559","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Bar:`}
        </strong>
        {` All bars should be the same width. The height of the bar represents its value. The spacing between bars should be equal as well, mimicking the axis value spacing. For recommendations on fill colors, see `}
        <PatternflyThemeLink {...{"to":"/design-guidelines/styles/colors-for-charts"}}>
          {`Colors for charts`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`React component`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/react/charts/chartbar"}}>
        {`Bar chart`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Stacked bar charts`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Stacked bar charts describe totals while allowing a degree of internal breakdown of the data. An advantage of stacked bar charts is the order of the stack can be swapped without changing the overall total. These can be illustrated vertically and horizontally depending on available space and the data being described.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Example`}
    </AutoLinkHeader>
    <img src={srcImport80} {...{"alt":"Horizontal stacked bar chart","width":"690","className":"ws-img"}}>
    </img>
    <br/>
    <img src={srcImport81} {...{"alt":"Vertical stacked bar chart","width":"663","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Stacked bar:`}
        </strong>
        {` The first series name is represented by the topmost stacked bar, and the last series name is represented by the bottommost stacked bar. For recommendations on series colors, see `}
        <PatternflyThemeLink {...{"to":"/design-guidelines/styles/colors-for-charts"}}>
          {`Colors for charts`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`React component`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/react/charts/chartstack"}}>
        {`Stacked bar chart`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Bullet chart`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A bullet chart can be thought of as an extension to a bar chart where it measures a dynamic value with thresholds and target values. While similar to `}
      <a {...{"href":"#donut-chart---utilization"}}>
        {`donut utilization charts`}
      </a>
      {`, bullet charts can show underages and overages of data (below 0% and above 100%), be visualized horizontally or vertically, and are capable of packing in a lot of information in a compact space.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Bullet charts are most often used to measure sets of performance data or utilization. They can be used for similar use cases as `}
      <a {...{"href":"#donut-chart---utilization-with-threshold"}}>
        {`donut utilization with threshold`}
      </a>
      {` charts. For example, a user can use a bullet chart to measure values of a set compared to the whole, while also illustrating related thresholds, target values, and underages or overages.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`When deciding which to use, consider the type of data you are dealing with and the importance of tracking underages or overages of data. Also consider the amount of space you have to visualize the data and the surrounding information. Bullet charts consolidate the data and therefore take up less space than donut charts would. They fit very well within text-dense areas, since they can be horizontally or visually illustrated. Bullet charts can also measure data by percentages or integer values, which donut charts cannot.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Example`}
    </AutoLinkHeader>
    <img src={srcImport82} {...{"alt":"Bullet chart","width":"633","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`React component`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/react/charts/chartbullet"}}>
        {`Bullet chart`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Donut chart`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`These are the most common use cases for donut charts:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Showing the relationship of a set of values to a whole`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Showing utilization for an object as a percentage (with or without thresholds)`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`If you need to compare one category to another, consider using a `}
      <a {...{"href":"#bar-chart"}}>
        {`Bar chart`}
      </a>
      {`.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`In donut charts, you can choose to use percentages or integer values to compare parts to the whole. When deciding which to use, consider the information that is most important to your user and what makes the most sense for your use case. For example, if a user knows they have 123 farm animals and they’re interested in knowing how many of those animals are cows, it probably makes more sense to use an integer value. If that same user is interested in knowing how much storage space they have left in their grain silo, a percentage might be better.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`For donut charts, don’t try to represent more than six categories. We recommend using the `}
      <PatternflyThemeLink {...{"to":"/design-guidelines/styles/colors-for-charts"}}>
        {`Colors for charts`}
      </PatternflyThemeLink>
      {` guidelines to represent your data when thresholds are not present.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Example`}
    </AutoLinkHeader>
    <img src={srcImport83} {...{"alt":"Donut chart","width":"501","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Segment fill:`}
        </strong>
        {` We recommend using `}
        {`[Colors for charts]`}
        {` (/design-guidelines/styles/colors-for-charts) for different items within the donut chart.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Segment padding:`}
        </strong>
        {`  Always provide 3px of padding between segments.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chart tooltip:`}
        </strong>
        {` A tooltip will appear upon hover that states the name of the segment and corresponding value. For example, if the segment represents "Bugs," and the value being represented is 25, your chart tooltip would state, "Bugs: 25."`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Label:`}
        </strong>
        {` When the Donut Chart is contained within a dashboard card, there is a label defining what the Donut Chart represents. The label may also represent the total value of the data set. If this optional representation is chosen, it should follow the format of `}
        {`[total numeric value]`}
        {` + `}
        {`[data set label]`}
        {`. The total numeric value should be rounded to two decimal places or less (14 characters max) and should be styled using 24px font in standard text color. The data set label cannot contain more than 24 characters and should be styled using 14px font in secondary text color. They are to be centered within the donut and styled as shown. If the label exceeds the max character count, place it outside of the donut and leave the center empty.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Legend:`}
        </strong>
        {` In order to be compliant with accessibility guidelines, a legend is necessary. Each variable on the legend should report their current value.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`React component`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/react/charts/chartdonut"}}>
        {`Donut chart`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Donut chart - Utilization`}
    </AutoLinkHeader>
    <img src={srcImport84} {...{"alt":"Donut utilization","width":"404","className":"ws-img"}}>
    </img>
    <img src={srcImport85} {...{"alt":"Donut utilization hover","width":"404","className":"ws-img"}}>
    </img>
    <img src={srcImport86} {...{"alt":"Donut utilization 2","width":"404","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Unused segment fill:`}
        </strong>
        {` The unused area of the donut chart will always remain at #EDEDED.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Used segment fill:`}
        </strong>
        {` We recommend using #0066cc for the used area of the donut chart. See `}
        <PatternflyThemeLink {...{"to":"/design-guidelines/styles/colors-for-charts"}}>
          {`Colors for charts`}
        </PatternflyThemeLink>
        {` for other recommended color options.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Utilization label:`}
        </strong>
        {` Both percentages and whole numbers can be used to represent the utilization.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chart tooltip:`}
        </strong>
        {` Since this is a utilization donut chart, the tooltip will display the percentage of data utilized. Chart tooltips only appear on hover over the utilization segment of the chart. We recommend stating the segment name and the utilization value being captured. For example, if the user is tracking GBps utilization, the chart tooltip would state "GBps utilization: 75%."`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`React component`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/react/charts/chartdonututilization"}}>
        {`Donut utilization`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Donut chart - Utilization with threshold`}
    </AutoLinkHeader>
    <img src={srcImport87} {...{"alt":"Donut utilization with threshold","width":"906","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Threshold segment fill:`}
        </strong>
        {` The outer segments of the chart are static and represent the thresholds for your use case. The example diagrams show utilization thresholds for a database and are used to let users know when they move from a safe zone into a danger zone. For threshold segments, use incremental shades of  grey starting at #EDEDED then to #D2D2D2 then to #BBBBBB. Provide 3px of padding between each segment.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Utilization segment fill:`}
        </strong>
        {` This dynamic chart is a concentric circle within the donut thresholds and will represent the data set. For this chart, we recommend using the following colors:`}
      </li>
    </ol>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`#0066cc before the data set has hit a threshold`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`#F0AB00 once the data set has hit the warning threshold`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`#C9190B once the data set has hit the danger threshold`}
      </li>
    </ul>
    <ol {...{"start":3,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Legend:`}
        </strong>
        {` The utilization segment color swatch will change in accordance to the chart.`}
      </li>
    </ol>
    <img src={srcImport88} {...{"alt":"Donut utilization with threshold hover","width":"1018","className":"ws-img"}}>
    </img>
    <ol {...{"start":4,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chart tooltip:`}
        </strong>
        {` Chart tooltips appear on hover for both threshold segments and utilization segments. We recommend stating the threshold name, the segment name, and the value being represented. For example, if the threshold being met is "Danger," and the segment represents "Storage capacity," and the value being represented is 92%, your chart tooltip would state, "Danger: Storage capacity: 92%." We recommend stating the threshold name "at" the percentage the threshold begins (ex. Warning at 60%).`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`React component`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/react/charts/chartdonututilization/#donut-utilization-threshold-examples"}}>
        {`Donut utilization`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Line chart`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A line chart plots a series of discrete data samples that are good for showing continuous data and trend information. Sample values on the line can be measured and extracted.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The most common use case for line charts is to compare several data sets over a period of time. They can be used to project trends into the past or future. A best fit line is created and extended in both directions to do so, but the validity of the projection is not certain. If you want to show and compare categorical data, you may consider using a bar chart.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Multiple lines on the same chart allow the user to visualize relationships between varying data sets, such as correlated events, similarities or unexpected differences. We recommend displaying no more than 6 lines on a single graph to avoid confusion.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Example`}
    </AutoLinkHeader>
    <img src={srcImport89} {...{"alt":"Line chart","width":"1499","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Line:`}
        </strong>
        {` Line charts can optionally visually represent data points as dots on the line. If so, the same interaction that occurs when hovering over one in an `}
        <a {...{"href":"#area-chart"}}>
          {`Area chart`}
        </a>
        {` will occur in line charts. For line colors, we recommend using the `}
        <PatternflyThemeLink {...{"to":"/design-guidelines/styles/colors-for-charts"}}>
          {`Colors for charts`}
        </PatternflyThemeLink>
        {`.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`React component`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/react/charts/chartline"}}>
        {`Line chart`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Pie chart`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Pie charts are commonly used to show percentages or proportional data.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`It makes sense to choose a pie chart when you need to compare a set of values to a whole. For example, you might choose a pie chart when visualizing the number of sales made by a team of five people; each segment of the chart represents one salesperson’s performance in the context of the rest of the team. The sum of all of the segments of the chart must equal 100%, and the data points should be mutually exclusive. It is recommended that there are no more than six segments per single pie chart.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`A pie chart may be the wrong choice when you need to compare categories to one another, because it can be difficult to distinguish small differences between segments. If you wish to compare values to each other, the `}
      <a {...{"href":"#bar-chart"}}>
        {`Bar chart`}
      </a>
      {` may be a more effective pattern.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Example`}
    </AutoLinkHeader>
    <img src={srcImport90} {...{"alt":"Pie chart","width":"428","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Pie chart fill:`}
        </strong>
        {` We recommend that fill colors should be based on the `}
        <PatternflyThemeLink {...{"to":"/design-guidelines/styles/colors-for-charts"}}>
          {`Colors for charts`}
        </PatternflyThemeLink>
        {`.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Legend:`}
        </strong>
        {` Each variable on the legend should report their current value.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`React component`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/react/charts/chartpie"}}>
        {`Pie chart`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Sparkline`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`A sparkline is a small chart that helps users to analyze data and understand trends and patterns.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Usage`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Sparklines are commonly used in tables, reports, and dashboards. A common use case is displaying utilization in an environment over time. Sparklines help to show trends in a series of values or to highlight maximum and minimum values. We recommend using sparklines alone without an axis and placing the name of the item being visualized underneath the chart.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Example`}
    </AutoLinkHeader>
    <img src={srcImport91} {...{"alt":"Sparkline","width":"628","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Axis:`}
        </strong>
        {` We recommend that sparklines are shown without an x or y-axis. Depending on space, a label can be placed underneath or to the left of the sparkline.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`React component`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      <PatternflyThemeLink {...{"to":"/documentation/react/charts/sparkline"}}>
        {`Sparkline`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Charts in cards`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If a chart lives in a card, the title of that chart will be placed on the header of that card instead of the chart. The rest of the chart guidelines should be followed for the chart itself.`}
    </p>
    <img src={srcImport92} {...{"alt":"Chart on a card","width":"416","className":"ws-img"}}>
    </img>
    <img src={srcImport93} {...{"alt":"Sparkline on a card","width":"482","className":"ws-img"}}>
    </img>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Brush and zoom`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The brush and zoom properties allow for magnification of an area, bar, line or stack chart. If desired, more advanced features can be added through `}
      <a {...{"href":"https://formidable.com/open-source/victory/guides/brush-and-zoom/"}}>
        {`Victory`}
      </a>
      {`.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Example`}
    </AutoLinkHeader>
    <img src={srcImport94} {...{"alt":"Brush and zoom","width":"1575","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Window:`}
        </strong>
        {` Click and drag to create a window around the section of the chart that you want to zoom in on`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Magnified chart:`}
        </strong>
        {` The portion selected will appear above the full chart view.`}
      </li>
    </ol>
    <AutoLinkHeader {...{"size":"h3","className":"ws-title ws-h3"}}>
      {`Interactive chart legends`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`For charts that have more than one data set graphed, interactive legends can be used to highlight or isolate certain data sets.  This would work well for `}
      <a {...{"href":"#line-chart"}}>
        {`line`}
      </a>
      {`, `}
      <a {...{"href":"#area-chart"}}>
        {`area`}
      </a>
      {`, or `}
      <a {...{"href":"#stacked-bar-charts"}}>
        {`stacked`}
      </a>
      {` type of charts where overlap of data sets could occur.`}
    </p>
    <AutoLinkHeader {...{"size":"h4","className":"ws-title ws-h4"}}>
      {`Example`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`On hover
`}
      <img src={srcImport95} {...{"alt":"Interactive legend on hover","width":"1499","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Legend:`}
        </strong>
        {` When a user hovers over a legend label, all the other legend labels’ opacity are lowered.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chart:`}
        </strong>
        {` The corresponding data of the hovered legend item, would be highlighted by having the other data sets’ opacity lowered.`}
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`On click
`}
      <img src={srcImport96} {...{"alt":"Interactive legend hidden","width":"1499","className":"ws-img"}}>
      </img>
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Legend:`}
        </strong>
        {` When a user clicks on a legend label, it becomes disabled and the color swatch would be replaced with an eye-slashed icon.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <strong>
          {`Chart:`}
        </strong>
        {` The corresponding data would be made hidden from view.`}
      </li>
    </ol>
  </React.Fragment>
);
DocumentationStylesChartsDesignGuidelinesDocs.Component.displayName = 'DocumentationStylesChartsDesignGuidelinesDocs';
