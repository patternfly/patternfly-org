---
id: Label
section: components
---

A **label** highlights an element on a page to draw attention to it or make it more searchable. Labels can also be used to tag items of the same category.

If you want to show a count, use a [badge](https://www.patternfly.org/v4/components/badge/react) instead.

## Usage
Labels are easily customized to fit different use cases. There are two main types of labels:
1. Unfilled

<img src="./img/unfilled-labels.png" alt="Unfilled labels" width="646"/>

2. Filled

<img src="./img/filled-labels.png" alt="Filled labels" width="646"/>

Use the filled option to add more visual prominence to a label.

The default colors for labels are gray, blue, green, orange, red, purple, and cyan. We offer a wide array of colors to allow for color coding labels within UIs. If desired, label colors can be used to indicate status. Regardless, we recommend you avoid using the red label unless it indicates danger or an error state.

While you may use other colors for your labels, we recommend using the ones provided as they have been carefully selected to be accessible with the PatternFly library. If you choose to use other colors, be mindful of picking accessible text colors and icon colors to go with the label background.

## Label features
You can further customize labels by making them dismissable, adding icons, or making them clickable links. You can use any combination of these features in a single label.

<img src="./img/label-features.png" alt="Examples of different types of labels" width="180"/>

1. **Dismissible label:** Can be dismissed by clicking on the “x”
2. **Label with icon:** Can be used to further clarify the label
3. **Clickable label:** Has a hover state to show interactiveness

### When to use dismissable labels

For labels that are easily removed or dismissed, use a dismissable label. A common use case for dismissable labels is when users can edit labels.

<img src="./img/edit-labels.png" alt="Example of dismissable labels" width="646"/>

### When to use labels with icons

Optionally add an icon to your label in cases where additional visual information is helpful. You can also use them to distinguish labels of the same color if needed.

<img src="./img/labels-with-icons.png" alt="Example of labels with icons" width="336"/>

### When to use clickable labels

You can also make labels clickable. A common use case for clickable labels is when a user may want to filter by a specific label. You can also use label links to redirect users to a new page.

<img src="./img/clickable-label.png" alt="Example of a clickable label" width="219"/>

## Labels in context
Labels can be used almost anywhere in a UI, but are commonly used in table views and catalogs.

<img src="./img/table-view.png" alt="Example labels in a table" width="1209"/>

<img src="./img/catalog-view.png" alt="Example labels in a catalog" width="1290"/>
