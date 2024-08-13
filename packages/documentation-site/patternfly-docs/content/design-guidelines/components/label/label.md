---
id: Label
section: components
---
## Labels

### Elements
You can further customize labels by making them filled or unfilled, dismissable, adding icons, or making them clickable links. You can use any combination of these elements in a single label.


<img src="./img/label-features.png" alt="Examples of different label features" width="180"/>


1. **Fill/Unfilled labels:** Offer customization for emphasis.
2. **Dismissible label:** Can be dismissed by clicking on the “x”.
3. **Label with icon:** Can be used to further clarify the label.
4. **Clickable labels:** Has a hover state to show interactiveness.
5. **Editable labels:** Has a dashed underline to communicate editability.

### Usage

Use a **label** when you want to highlight an element on a page to draw attention to it or make it more searchable. Labels can also be used to tag items of the same category. If you want to show a count, use a [badge](/components/badge) instead.

There are 2 specific label types:

<img src="./img/label-features-type.png" alt="Different label types" width="180"/>

1. **Default labels:** Use by default when needing a label.
2. **Compact labels:** Use when confronted by space limitations and a smaller label is required (for example, in a table).

Labels can be used almost anywhere in a UI, but are commonly used in table views and catalogs as shown below. 

<img src="./img/label-table-view.png" alt="Example labels in a table" width="1209"/>

<img src="./img/catalog-view.png" alt="Example labels in a catalog" width="1204"/>

#### Color considerations
Both default and compact labels come in the following default colors: gray, blue, green, orange, red, purple, and cyan. We offer a wide array of colors to allow for color coding labels within UIs. Label colors can be used to indicate status if desired, but do not have to. Regardless, we recommend you avoid using the red label unless it indicates danger or an error state.


<img src="./img/filled-labels.png" alt="Label colors" width="646"/>


While you may use other colors for your labels, we recommend using the ones provided as they have been carefully selected to be accessible with the PatternFly library. If you choose to use other colors, be mindful of picking [accessible text color and icon color](/accessibility/testing-your-accessibility) to go with the label background.


### Variations
* [Unfilled](#when-to-use-filled-or-unfilled-labels)
* [Filled](#when-to-use-filled-or-unfilled-labels)
* [Dismissable](#when-to-use-dismissable-labels)
* [With icons](#when-to-use-labels-with-icons)
* [Clickable](#when-to-use-clickable-labels)
* [Editable](#when-to-use-editable-labels)

#### When to use filled or unfilled labels

Use the filled option to add more visual prominence to a label. If your use case requires a mix of clickable and non-clickable labels, consider using one type for clickable and another for non-clickable. Whatever convention you choose, be sure to maintain consistency through your UI.

1. Unfilled

<img src="./img/unfilled-labels.png" alt="Unfilled labels" width="646"/>

2. Filled

<img src="./img/filled-labels.png" alt="Filled labels" width="646"/>

Use the filled option to add more visual prominence to a label.

#### When to use dismissable labels

Use a dismissable label for labels that are easily removed. A common use case for dismissable labels is when users can edit labels.

<img src="./img/edit-labels.png" alt="Example of dismissable labels" width="646"/>

#### When to use labels with icons
Add an icon to your label in cases where additional visual information is helpful. You can also use them to distinguish labels of the same color if needed.

<img src="./img/labels-with-icons.png" alt="Example of different colored labels with icons" width="318"/>

#### When to use clickable labels
Use a clickable label for actionable labels. A common use case for clickable labels is when a user may want to filter by a specific label. You can also use label links to redirect users to a new page.

<img src="./img/clickable-label.png" alt="Example of a clickable label" width="220"/>

#### When to use editable labels
Use editable labels when you want to allow users to organize and select resources manually. Adding editable labels enables the user to query for objects that have similar, dissimilar, or overlapping labels.

<img src="./img/editable-label-feature.png" alt="Example of a editable label" width="165"/>

## Label groups

Label groups are used to display multiple labels at once. 

### Elements
Label groups have a number of components to them.

<img src="./img/label-group-elements.png" alt="Elements of a label group" width="532"/>

1. **Group category (optional):** indicates the group category
2. **Label:** indicates the labels applied.
3. **Overflow:** indicates if there are more labels to show.
4. **Group close (optional):** deletes the entire label group.

Label groups can use various combinations of these features to build custom label groups.

### Usage
Label groups should be used when there are multiple labels assigned to a component. They can be used almost anywhere in a UI, but are commonly used in table views and description lists. Label groups can be oriented either horizontally or vertically and can optionally be named and be dismissable. You may also make the label group editable to allow users to edit an existing label or add a new label.

#### Label groups in a table
<img src="./img/table-view.png" alt="Table with labels" width="1200"/>

#### Label groups in a table popover
<img src="./img/table-view-2.png" alt="Table with vertical label group in a popover" width="1200"/>

#### Label groups in a description list
<img src="./img/description-list.png" alt="Description list with labels" width="520"/>

### Variations

#### Editable label group

##### Adding a new label to a group, without a group label
This variation can be used when there is a need to add a new label or edit an existing label within a label group, and the label group does not have a group label.

<img src="./img/editable-label-group-in-a-table_1.png" alt="Adding a new label to a group without a group label" width="1200"/>

When the user selects the ‘Add label’ button, a new label is added as the first label in the group. Once the new label is added, the user can overwrite the default value by double clicking the label.
<img src="./img/editable-label-group-in-a-table_1-1.png" alt="Adding a new label to a group without a group label" width="1200"/>

##### Adding a new label to a group, with a group label
This variation can be used when there is a need to add a new label within the label group, and the label group has a group label. 

<img src="./img/editable-label-group-in-a-table_2.png" alt="Add a new label to a group with a group label" width="1200"/>

When the user selects the ‘Add label’ button, a new label is added as the first label in the group. Once the new label is added, the user can overwrite the default value by double clicking the label.
<img src="./img/editable-label-group-in-a-table_2_1.png" alt="OVerwrite default value" width="1200"/>

##### Adding a new label to a label group from a list of preselected labels
This variation can be used when only a fixed set of labels can be added to a label group. 
<img src="./img/editable-label-group-in-a-table_3.png" alt="Add fixed set of labels to a label group" width="1200"/>

When the user selects the ‘Add label’ button, a drop list is displayed with the existing list of values. User selects a new label from the values in the drop list.
<img src="./img/editable-label-group-in-a-table_3_1.png" alt="Add new label and select value from existing list" width="1200"/>

The new label is added with the selected value and can not be changed. 
<img src="./img/editable-label-group-in-a-table_3_2.png" alt="New lavel added with selected value" width="1200"/>

##### Adding a new custom label to a label group
This variation can be used when you want to allow users to customize the labels they add to a label group. 
<img src="./img/editable-label-group-in-a-table_4.png" alt="Add customized label to a label group" width="1200"/>

When the user selects the ‘Add label’ button, it opens up a modal from which they can select the attributes for the new label. These include label text, color, icon, filled vs outlined, ability to dismiss, and editability. The options shown can be customized to fit your use cases.
<img src="./img/editable-label-group-in-a-table_4_1_add-label-model.png" alt="Select custom label properties" width="1200"/>

The new label is created based on the attributes selected by the user and it can not be changed.
<img src="./img/editable-label-group-in-a-table_4_2.png" alt="New custom label added to a label group" width="1200"/>

## Accessibility
For information regarding accessibility, visit the [labels accessbility](components/jump-links/accessibility) tab.