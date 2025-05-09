---
id: Drag and drop
section: components
---

import '../components.css';

## Usage
### Simple list
1. **Draggable area:** The drag and drop interaction can be triggered with click and hold over any part of the item. The `fa-grip` icon is used to show that the drag and drop interaction is available.

<div class="ws-docs-content-img">
![Example of a data list with items that can be dragged.](./img/dnd-simple1.svg)
</div>

2. **Bounding box:** Upon click & hold a `--pf-v6-global--active-color--100` border will show the draggable area that is available. 

3. **onDrag event:** The list item being dragged will also use a `--pf-v6-global--active-color--100` border to highlight it as the item being dragged and all other list items will switch to a disabled state. The space where the item is being dragged from will remain empty to indicate its original position in the list.

<div class="ws-docs-content-img">
![Example of what happens when an item is dragged. A blue border appears around the item being dragged and a faded placeholder version stays in the original position.](./img/dnd-simple23.svg)
</div>

4. **postDrag event:** Once dropped, the items will be reordered based on the user’s action. The space left empty is then filled by the next item in the list.

<div class="ws-docs-content-img">
![Example of what happens after an item is dragged. The item is dropped into the new position and the border color disappears. The faded placeholder item also disappears.](./img/dnd-simple4.svg)
</div>


### Multiple lists
PatternFly drag and drop allows users to move items between different list groups. For example, in a To-Do list scenario users can quickly drag list items from the ”In progress” column to the “Done” column.

1. **Draggable item**

<div class="ws-docs-content-img">
![An example of multiple data lists with items that can be dragged.](./img/dnd-multi1.svg)
</div>

2. **onDrag event**

<div class="ws-docs-content-img">
![Example of what happens when an item is dragged. A blue border appears around the item being dragged and a faded placeholder version stays in the original position.](./img/dnd-multi2.svg)
</div>

3. **postDrag event**

<div class="ws-docs-content-img">
![Example of what happens after an item is dragged. The item is dropped into the new position and the border color disappears. The faded placeholder item also disappears.](./img/dnd-multi3.svg)
</div>


### Draggable cards
In a card view, when the selected card has been dropped the others will reposition following a left-to-right flow by default.

1. **Draggable item**

<div class="ws-docs-content-img">
![Example of a group of cards that can be dragged.](./img/dnd-cards1.svg)
</div>

2. **onDrag event**

<div class="ws-docs-content-img">
![Example of what happens when a card is dragged. A blue border appears around the card being dragged and a faded placeholder version stays in the original position.](./img/dnd-cards2.svg)
</div>

3. **postDrag event**

<div class="ws-docs-content-img">
![Example of what happens after a card is dragged. The card is dropped into the new position and the border color disappears. The faded placeholder card also disappears.](./img/dnd-cards3.svg)
</div>