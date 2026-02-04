---
id: Label
section: components
---

import '../components.css';

## Labels

### Elements
You can customize labels by adjusting their visual styling or adding functionality to let users click, edit, or remove labels.

<div class="ws-docs-content-img">
![Elements of both status and non-status labels.](./img/label-elements.svg)
</div>

1. **Status label:** Combines color and an icon to communicate a status, like danger, warning, or success.
1. **Filled label:** Can be used for additional emphasis.
1. **Outlined label:** Can be used as a less prominent label style.
1. **Compact label:** Takes up less space than the default label.
1. **Label with icon:** Can utilize a recognizable icon to make the label more clear and identifiable. 
1. **Clickable label:** Is identified by the inclusion of a hover state (as shown in the example image).
1. **Editable label:** Is identified by a dashed underline.
1. **Dismissible label:** Can be removed or dismissed by clicking on the "x" close icon.
1. **Label group:** Contains multiple labels at once.
1. **Overflow label** Contains additional labels that don't fit within the main space of the label group.

### Usage

Labels are useful in a few scenarios: 
- When you want to highlight an element on a page to draw attention to it or make it more searchable. 
- To tag items of the same category. If you want to show a count, use a [badge](/components/badge) instead.
- For use in [filtering](/patterns/filters) to indicate user selections, similar to the now deprecated [chip](/components/chip) component.

There are 2 label sizes:

<div class="ws-docs-content-img">
![Example of default and compact labels.](./img/label-sizes.svg)
</div>

1. **Default labels:** Use by default when needing a label.
2. **Compact labels:** Use when confronted by space limitations and a smaller label is required (for example, in a table).

Labels can be used almost anywhere in a UI. They are commonly used in tables, card views, and filters.

#### Labels in tables

<div class="ws-docs-content-img">
![Example of labels within a table.](./img/table-with-labels.svg)
</div>

#### Labels in card views

<div class="ws-docs-content-img">
![Example of labels on cards in a card view.](./img/card-view-labels.svg)
</div>

#### Filter labels

Labels are typically used in filter and selection use cases to indicate what selections a user has made. They utilize [label groups](#label-groups) to organize selections by category for added clarity. When there are multiple filter labels within a group, any data that matches one or more of the labels will be filtered. It is not required for all filter labels to be applied in order to match a filtered item.

<div class="ws-docs-content-img">
![Example of labels as filters in a toolbar.](./img/label-filters.svg)
</div>

#### Beta and preview labels

To communicate that a feature is in a beta or preview mode, rather than fully released and supported, use a [nonstatus purple label](#nonstatus-labels). 

There are a few common types of preview labels:
1. **Developer preview:** Shared for early evaluation and feedback. These features are likely unstable, unsupported, and not ready for production environments.
2. **Technology preview:** Ready for early use and feedback. These features have limited support and are typically on the roadmap for a future full release.
3. **Beta:** Publicly available but still subject to change. Beta features are typically feature-complete but might still undergo visual or functional changes based on user feedback before being promoted to full support.

Beta and preview labels should use the compact size variant and should be placed beside the title of the new feature or component&mdash;ideally to the right of the title. 

Preview labels should be clickable. When clicked, display a popover with a brief explanation of the preview type (stability, potential limitations) and a "Learn more" to dedicated documentation.

<div class="ws-docs-content-img">
![Developer preview and technology preview labels with descriptive popover above each.](./img/preview-labels.svg)
</div>

#### Deprecated labels

To communicate that a feature or resource is no longer the current recommendation and might be removed in the future, use a [nonstatus gray label](#nonstatus-labels) with "Deprecated" as the text label.


<div class="ws-docs-content-img">
![A gray "deprecated" label with descriptive popover above.](./img/deprecated-label.svg)
</div>

#### Quick start labels
To indicate that clicking a card will initiate a quick start experience, use a [nonstatus green label](#nonstatus-labels) with "Quick start" as the text label. For more guidance, refer to the [quick starts guidelines](/extensions/quick-starts/design-guidelines).

#### Color considerations

Labels can utilize both our [status](/foundations-and-styles/colors#status-and-state-colors)  and [nonstatus](/foundations-and-styles/colors#nonstatus-colors) color palettes.

While you may use other colors for your labels, we recommend using the ones provided as they have been carefully selected to be accessible with the PatternFly library. If you choose to use other colors, be mindful of picking [accessible text color and icon color](/accessibility/test-your-product) to go with the label background.

The colors you should use differs for status and nonstatus labels:

##### Status labels

Status colors can be used to indicate danger, warning, success, info, or custom statuses. 

<div class="ws-docs-content-img">
![Examples of filled status labels in light and dark color themes.](./img/status-labels.svg)
</div>

##### Nonstatus labels

We offer a nonstatus color palette, which you can use to color code labels that don't correspond to any status level, including red, orange, orange red, gold, green, cyan, blue, purple, and gray. 

<div class="ws-docs-content-img">
![Examples of filled non-status labels in light and dark color themes.](./img/nonstatus-labels.svg)
</div>

**Note:** We recommend you avoid using red, unless you're indicating danger or an error state.

### Variations
- [Filled or unfilled labels](#when-to-use-filled-or-unfilled-labels)
- [Labels with icons](#when-to-use-labels-with-icons)
- [Editable labels](#when-to-use-editable-labels)
- [Dismissible labels](#when-to-use-dismissible-labels)
- [Clickable labels](#when-to-use-clickable-labels)

#### When to use filled or unfilled labels

Use the filled option to add more visual prominence to a label. If your use case requires a mix of clickable and non-clickable labels, consider using 1 type for clickable and another for non-clickable. Whatever convention you choose, be sure to maintain consistency through your UI.

Both status and nonstatus labels can be filled or unfilled.

##### Filled

<div class="ws-docs-content-img">
![Examples of all the color options for filled labels in light and dark themes.](./img/Filled-labels.svg)
</div>

##### Unfilled

<div class="ws-docs-content-img">
![Examples of all color options for unfilled labels in light and dark themes.](./img/Unfilled-labels.svg)
</div>

#### When to use labels with icons

While status labels will automatically contain an appropriate icon, you can also add an icon to nonstatus labels, when additional visual information would be helpful. 

<div class="ws-docs-content-img">
![Example of labels with icons in a card.](./img/card-labels.svg)
</div>

Icons can also help distinguish labels of the same color.

#### When to use editable labels
Use editable labels when you want to allow users to organize and select resources manually. Adding editable labels enables the user to query for objects that have similar, dissimilar, or overlapping labels.

<div class="ws-docs-content-img">
![Example showing the before and after of editing a label.](./img/editable-labels.svg)
</div>

#### When to use dismissible labels

Use a dismissible label for labels that can be easily removed. Editable labels are often dismissible as well.

<div class="ws-docs-content-img">
![Example showing the before and after of dismissing a label.](./img/dismissible-labels.svg)
</div>

#### When to use clickable labels
Use a clickable label for labels that trigger actions or link to new pages. Clickable labels include a hover state as shown in the following image.

<div class="ws-docs-content-img">
![Example of a clickable label.](./img/clickable-labels.svg)
</div>

## Label groups

Label groups are used to display multiple labels at once. 

### Elements
Label groups have a number of components to them.

<div class="ws-docs-content-img">
![Elements of a label group.](./img/label-group-elements.svg)
</div>

1. **Label:** Indicates the labels applied.
1. **Group label (optional):** Indicates the group category or name.
1. **Overflow:** Indicates if there are more labels to show.
1. **Group close (optional):** Deletes the entire label group.

You can build custom label groups using various combinations of these features.

### Usage
Label groups should be used when there are multiple labels assigned to a component. They can be used almost anywhere in a UI, but are commonly used in table views and description lists. Label groups can be oriented either horizontally or vertically and can optionally be named and be dismissible. You may also make the label group editable to allow users to edit an existing label or add a new label.

#### Label groups in a table

In a table, basic label groups can be used to display all labels associated with a data source.

<div class="ws-docs-content-img">
![Example of label groups within a table.](./img/table-with-label-group.svg)
</div>

#### Label groups in a table popover

When there are many labels assigned to a table, you can use a popover as a container. 

<div class="ws-docs-content-img">
![Example of a vertical label group within a popover.](./img/label-group-popover.svg)
</div>

#### Label groups in a description list

<div class="ws-docs-content-img">
![Example of a label group within a description list field.](./img/description-list-labels.svg)
</div>

### Variations

#### Editable label group

##### Adding a new label to a group

This pattern can be followed to let users add a new label or edit an existing label within a group.

<div class="ws-docs-content-img">
![Example of a label group within a table with the option to add a new label.](./img/adding-label.svg)
</div>

When a user selects the **Add label** button, a new label is added to the beginning of the group. Once the new label is added, they can overwrite the default value by double clicking the label.

<div class="ws-docs-content-img">
![Example of a label group within a table after a new label is added.](./img/added-label.svg)
</div>

##### Adding a new label to a group from a list of preselected labels

You can provide users with a fixed set of label options to add to a group. 

When a user selects the **Add label** button, display a menu of available label options. They can select a new label from the values in the menu.

<div class="ws-docs-content-img">
![Example of a dropdown menu with options when trying to add a new label to a group.](./img/adding-label-options.svg)
</div>

The new label is added with the selected value and can not be edited. 
##### Adding a new custom label to a label groupgit 

You can allow users to customize the labels they add to a group. 

When a user selects the **Add label** button, it opens up a modal, where they can select the attributes for their new label, including the label type, text, color, icon, and the ability to dismiss or edit. Customize these options to fit your needs.

<div class="ws-docs-content-img">
![Example of a modal used to create a new label.](./img/adding-label-modal.svg)
</div>

Once the new label is created, it cannot be edited. Users will need to add a new label if they want to make changes.
## Accessibility
For information regarding accessibility, visit the [labels accessibility](/components/label/accessibility) tab.