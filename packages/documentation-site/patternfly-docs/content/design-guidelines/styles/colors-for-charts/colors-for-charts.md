---
id: Colors for charts
section: charts
hideSource: true
---

import theSystem from './thesystem.gif';
import oneFamily from './onefamily.gif';
import fewVariables from './fewvariables.png';
import manyVariables from './manyvariables.png';
import nestedVariables from './nestedvariables.png';
import { Alert, Grid, GridItem, Divider } from '@patternfly/react-core';
import ColorsGrid from './colors-grid.js';
import './colors-for-charts.css';

import '../../components/components.css';

## Color palettes

To create well-designed charts, you typically need to use multiple colors to communicate your data. Our chart colors are all pulled from [our standard color palettes](/design-foundations/charts), but, to ensure that your chart colors are distinct from each other, our chart palettes are intentionally limited to offer a smaller range of hues within each color family.

Your data will determine the number of colors and the type of colors you will need. 

<ColorsGrid />

## Usage

Although the chart color system may seem complex, it is completely customizable. Once you choose the base colors you want to use and the total number of colors you will need, the system will still sort them correctly. 

For example, if you select four base colors (and therefore their four respective color families) the system will first use each base color in your chart. Once all base colors have been used, the system will select additional colors from the families you selected. The system alternates between choosing the lightest and darkest values of each family (shown in the animation). The color picking system will continue to alternate between the remaining  lightest and darkest colors of each family. 

In variable-terms: #1a-d base colors, #2a-d [color]-100/[color]-500 alternating, #3a-d [color]-500/[color]-100 alternating, #4a-d [color]-200/[color]-400 alternating, and #5a-d [color]-400/[color]-200 alternating. No matter which base colors you select, this process will remain the same.

<div class="ws-docs-content-img">
![](./thesystem.gif)
</div>

## Best practices

When selecting colors for your chart, adhere to these design patterns and practices: 

1. Within a color family, use the base color before the other, lighter or darker hues. 

1. Follow these uses:
    - **Green family:** Use to show success.
    - **Red orange family:** Use to show failure.
    - **Other color families:** Use for neutral purposes or categories.
    - **Patterns:** Use to deemphasize a section of a chart.
      - Only use for a single chart portion or type of portion to better highlight other sections that utilize solid colors. For example, you could use a pattern on your "success" portions to help "failure" portions stand out.
      - Do not use for every section of a chart.

1. When using red and green base colors together in a single chart, add a pattern to the section that you want to deemphasize. Red and green do not pass accessibility requirements, so a pattern is necessary to improve the chart's accessibility. 

<div class="ws-docs-content-img">
![](./img/Color-and-pattern-usage.png)
</div>

## Examples

### Few chart variables 
When working with *7 or fewer variables*, align each variable to an available base color. 

For example, the following chart displays sales data per product over a period of time:

<div class="ws-docs-content-img">
![](./fewvariables.png)
</div>

### Many chart variables 
If the set of data includes *more than 7 variables*, apply a multichromatic order system that includes all of the colors in the color system.

For example, the following chart displays the cost of living expenses over a period of time:

<div class="ws-docs-content-img">
![](./manyvariables.png)
</div>

### Nested or grouped chart variables
If your dataset includes grouped variables, align each group to a color family. When you select multiple color families, your chart will automatically arrange the order of colors as follows: blue, green, teal, purple, yellow, orange, orange red, and then black. If there are more than 6 groups, this order would restart and continue to cycle.

For example, the following chart includes quarterly sales data that is broken down by geographical locations:

<div class="ws-docs-content-img">
![](./nestedvariables.png)
</div>

### Monochromatic charts

To create a monochromatic effect in your chart, you can also apply a color order system within 1 color family. This effect is particularly helpful for charts with nested variables. 

Within a family, the color order begins by going at the base color, then the lightest, darkest, second lightest, and second darkest colors. Regardless of color family, hues will always follow this order. 

As design tokens, this order looks like: 
1. `--pf-t-chart-color-[colorname]-300` (base color)
1. `--pf-t-chart-color-[colorname]-100` (lightest)
1. `--pf-t-chart-color-[colorname]-500` (darkest)
1. `--pf-t-chart-color-[colorname]-200` (second lightest)
1. `--pf-t-chart-color-[colorname]-400` (second darkest)

<div class="ws-docs-content-img">
![](./onefamily.gif)
</div>