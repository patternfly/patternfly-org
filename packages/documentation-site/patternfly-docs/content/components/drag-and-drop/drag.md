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

2. **Ghost item:** Upon click and hold, a duplicate "ghost" item with a  `--pf-v6-global--active-color--100` border will appear "on top" of the list. This ghost item represents the initial item being moved.

3. **onDrag event:** While a ghost item is being dragged, the original item will move its position in the list to align with the hovered position.

<div class="ws-docs-content-img">
![Example of what happens when an item is dragged. A blue border appears around the item being dragged and a faded placeholder version stays in the original position.](./img/dnd-simple23.svg)
</div>

4. **postDrag event:** Once dropped, the ghost item will become an item in the list, which will be reordered based on the user’s action. 

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