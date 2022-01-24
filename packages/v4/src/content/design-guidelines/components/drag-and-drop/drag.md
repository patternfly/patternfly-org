---
id: Drag and drop
section: components
---
The **drag and drop** interaction can be used to reposition elements on screen into a layout that benefits the user. This gives the user more flexibility to arrange and/or group items without having to make code changes.

## Usage
### Simple list
1. Draggable area: The drag and drop interaction can be triggered with click and hold over any part of the item. The fa-grip icon is used to show that the drag and drop interaction is available.

<img src="./img/simplelist_1.png" alt="Showing the area in which an item can be dragged." width="621"/>

2. Bounding box: Upon click & hold a `$pf-color-blue-400` border will show the draggable area that is available. 

3. onDrag event: The list item being dragged will also use a `$pf-color-blue-400` border to highlight it as the item being dragged and all other list items will switch to a disabled state. The space where the item is being dragged from will remain empty to indicate its original position in the list.

<img src="./img/simplelist_2_3.png" alt="Borders appear around the item and bounding box shows the area in which an item can be dragged." width="693"/>

4. postDrag event: Once dropped, the items will be reordered based on the user’s action. The space left empty is then filled by the next item in the list.

<img src="./img/simplelist_4.png" alt="postDrag drops item into new position and all border highlights are disabled." width="594"/>

5. Error state: If the list item is dragged outside the bounding box the borders on the dragged item will switch to `$pf-color-red-100` and the cursor will change to an error state to indicate an invalid placement. If the user releases the cursor outside the bounding area the dragged item will return to its default position.

<img src="./img/simplelist_5.png" alt="Dragging outside the bounding box shows an error state on the dragged item." width="617"/>

### Multiple lists
PatternFly drag and drop allows users to move items between different list groups. For example, in a To-Do list scenario users can quickly drag list items from the ”In progress” column to the “Done” column.

1. Draggable item

<img src="./img/multiplelist_1.png" alt="Showing the area in which an item can be dragged." width="850"/>


2. onDrag event

<img src="./img/multiplelist_2.png" alt="Borders appear around the item and bounding boxes shows the area in which an item can be dragged." width="850"/> 


3. postDrag event

<img src="./img/multiplelist_3.png" alt="postDrag drops item into new position and all border highlights are disabled." width="850"/> 

4. Error state

<img src="./img/multiplelist_4.png" alt="When dragging outside the bounding box the border color of the dragged item changes to $pf-color-red-100 and the cursor changes to error state." width="850"/> 





### Draggable cards
In a card view, when the selected card has been dropped the others will reposition following a left-to-right flow by default.

1. Draggable item

<img src="./img/cardlist_1.png" alt="Showing the area in which an item can be dragged." width="850"/>


2. onDrag event

<img src="./img/cardlist_2.png" alt="Borders appear around the item and bounding box shows the area in which an item can be dragged." width="850"/> 


3. postDrag event

<img src="./img/cardlist_3.png" alt="postDrag drops item into new position and all border highlights are disabled." width="850"/> 

4. Error state

<img src="./img/cardlist_4.png" alt="When dragging outside the bounding box the border color of the dragged item changes to $pf-color-red-100 and the cursor changes to error state." width="850"/> 

