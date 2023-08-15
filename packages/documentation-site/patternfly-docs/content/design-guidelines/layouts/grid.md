---
id: Grid
section: layouts
---
The **grid** layout places content on a fixed-size 12 column grid.

## Elements

![Grid example image](./img/grid-example.png)
1. **Grid**: The grid container, which holds all grid items
1. **Grid item**: An individual section of content to be placed in the grid

## Usage

Grid items can be ordered in a number of ways to create groups. The span value of all grid items must equal 12, but this can be acheived through any combination of section sizes.

For example, our [basic React example](/layouts/grid) organizes the following grid:

![Grid from React example](./img/original-grid-span.png)

However, by following the rule that all items should span up to 12, the grid can easily be modified and readjusted:

![Adjusted React example grid](./img/adjusted-grid-span.png)

## Variations

You can use gutters to adjust the spacing of items.

![Grid with gutter](./img/grid-gutters.png)

By adjusting the column span, row span, and order at various breakpoints, you can adapt the grid for different screen sizes.