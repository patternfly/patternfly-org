---
id: Spinner
section: components
---

**Spinners** are used to indicate to users that an action is in progress. For actions that may take a long time use a [Progress Bar](/documentation/react/components/progress) in place of a Spinner.

Data loading patterns are used to inform users that objects are loading on the screen even though they have yet to appear. A component that we use to demonstrate data loading is a spinner.

## Elements
### Spinner

![spinner-sizes](./img/spinner-sizes.png)

Spinners are offered in different sizes that follow the sizing of our icons. These sizes include extra small, small, medium and large. Depending on the size of information you are loading and the space you are dealing with, we recommend using the spinner size that generally matches.

## Usage

Use a spinner when the data you are dealing with is unknown in both quantity and shape. Spinners are also good to use when in progress of loading a screen that may not have any data, for example an [empty state screen or failed outcome](/design-guidelines/usage-and-behavior/empty-state). A common use case for spinners is within a table view, where the spinner can take up the area of the table before it loads.

Do not use a spinner to replace a [progress bar](/design-guidelines/usage-and-behavior/progress-bar). Spinners are vague in their promises of results to the user and are best to use when the expected wait time is between 1-5 seconds. Do not use a spinner if the loading process is less than 1 second. For experiences longer than 5 seconds, use a progress bar.

## Spinner in context

Spinners are centered within the container AND the viewport by default in all use cases. Although this is the standard position of it, the spinner may be repositioned if necessary for particular screens and screen sizes.

### Spinner in select list (small)

![spinner-in-select](./img/spinner-in-select.png)

### Spinner in cards within a dashboard (medium)

![spinner-in-cards](./img/spinner-in-cards.png)

### Spinner in a data list or table (large)

![spinner-in-table](./img/spinner-in-table.png)

### Spinner in a full page (large)

![spinner-full-page](./img/spinner-full-page.png)

## Related components and demos
**HTML/CSS**
* [Spinner](/documentation/core/components/spinner#component-title)

**React**
* [Spinner](/documentation/react/components/spinner/#component-title)
