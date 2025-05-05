---
id: Dual list selector
section: components
---

## Usage
Dual list selectors are useful when you have a large set of options for users to pick from that would be difficult to digest in a select list. They’re useful in forms, wizards, and modals as a way for users to make selections from a list of options.

### When to use

* You have a long list of items for users to pick from.
* You want to distinguish the available items from the chosen items.
* You want the ability to group the list of items
* The user can select a large number of items and separating selections from available options would be helpful.

### When not to use
* Users have a list of actions to choose from. Instead, use a dropdown menu or tree view 
* The list of items to choose from has fewer than 20 items. Instead, use a select list.

## Behavior
Users can select one or more items from the available list and use the arrows to move these items to the chosen list. Users can filter down the items by using the search input field.

<div class="ws-docs-content-img">
![dual list behavior with an item being moved to the second row](./img/dual-list-1.gif)
</div>

In an expandable dual list, when users move an item from the available list to the chosen list, the item still appears in its original group structure. For example, if the item Broccoli in the group Folder Vegetables is moved from the available list to the chosen list, the Broccoli item will appear in the chosen list under the Vegetable group. It won’t appear as a stand-alone, single-level item.

<div class="ws-docs-content-img">
![dual list behavior with 1 folder of item being moved to the second row](./img/dual-list-2.gif)
</div>

## Variations
There are two types of dual list selectors: basic dual lists and expandable dual lists.

### Basic dual list 
A basic dual list contains a flat list of items for the user to choose from. 

<div class="ws-docs-content-img">
![dual list with 2 search bars and 2 rows of items](./img/basic-dual-list.svg)
</div>

1. **List labels:** List labels distinguish between the list of available items and the list of chosen items. These labels can be changed based on your use case, and they should be clear and concise. 
2. **Available items list:** The available items list is a list of items that users can choose from. Available list items can have a single level or multiple levels. 
3. **Chosen items list:** The chosen items list is a list of items that users have selected and moved from the available items list. 
4. **Selected item:** A selected item refers to the  visual state of the item when it has been selected by a user.
5. **Arrows:** Arrows are buttons that give users the ability to move items from one list to another. The arrows will enable and disable based on user selections. Single arrows move only selected items. Double arrows move everything from one list to the other (in the direction of the arrow), whether the list contains manually selected items or not.
6. **Number of items:** The number of items is an indicator of how many items are selected among the total items available in the list.
7. **Filter:** The filter is a search field that allows users to filter the list of items.
8. **Sorting (optional):** The sorting ability enables users to sort the list of items presented for easier scanning.
9. **More actions (optional):** The more actions (kebab) menu  stores added actions, such as exporting.

### Expandable dual list
An expandable dual list contains a multi-leveled list of items for users to choose from. Items can be nested in a hierarchical tree to show different groupings or categories, and the list can have up to three levels.

<div class="ws-docs-content-img">
![dual list with 2 rows of items of expandable items](./img/expandable-dual-list.svg)
</div>

1. **Number of items:** indicator of how many items are selected, among the total items available in the list. <u>In expandable lists, only non-folder items are included in the item count.</u>
2. **Folder:** group of items that can be selected and moved from one list of options to the other. When a folder has a mix of selected and unselected items, the checkbox should have a mixed state. When all items in a folder are selected, the folder checkbox should have a selected state.
3. **Selected item:** visual state of an item when it has been selected by a user. 
4. **Item:** item within a folder that can be selected and moved.
5. **Badge (optional):** number of items inside a folder.

### Drag and drop dual list
Drag and drop functionality inside of a dual list allows users to customize the order in which items within the Chosen options are displayed. The fa-grip icon at the start of the item row is used to indicate that the items are draggable.

1. **onDrag event:** Upon click & hold a `--pf-t--global--border--color--brand--clicked` border will show the draggable area that is available. The list item being dragged will also use a `--pf-t--global--border--color--brand--clicked` border to highlight it as the item being dragged.

<div class="ws-docs-content-img">
![dual list with the second row item being dragged to a new position](./img/ondrag-event.svg)
</div>

2. **Ghost row:** Mid onDrag event, a duplicate ghost row will follow the active dragged item. The ghost row will fill the available space and use a `--pf-t--global--border--color--brand--clicked` border to highlight it as the item being dragged. The ghost row icon button will recieve a hover fill using `--pf-t--global--background--color--action--plain--hover`.

<div class="ws-docs-content-img">
![dual list that is acitvely being dragged with a ghost row](./img/ghostrow.svg)
</div>

3. **postDrag event:** Once dropped, the items will be reordered based on the user’s action. The recently dropped row will receive a hover fill using `--pf-t--global--background--color--primary--hover`and the icon button will receive a fill of `--pf-t--global--background--color--action--plain--hover`.

<div class="ws-docs-content-img">
![dual list with an item that was dragged from one position to another](./img/postdrag-event.svg)
</div>
