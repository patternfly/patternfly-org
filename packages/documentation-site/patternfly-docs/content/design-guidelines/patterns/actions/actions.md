---
id: Actions
section: patterns
---

An **action** is any process that a user can trigger by clicking or selecting the component that is linked to the action. For example, adding, deleting, editing, filtering, and submitting. These actions are linked to specific PatternFly components, like buttons (most common), menu items, and cards.

To cover common UI patterns, PatternFly components may incorporate other action components into their design. For example, a toolbar may contain an action button, a table may contain action toggle items, and so on.

### Common actions 

- Add/create
- Close/exit
- Clear/delete/remove
- Edit/update
- Manage resource


## Elements 

The following images illustrate some of the common action patterns you may come across, but do not cover all implementations that you will find. 

![alt text](./img/actions-elements.png)

1. **Icons:** Link to actions that cover simple, common processes that are easily identified by an icon. For example, closing, copying, and downloading. 
1. **Buttons:** One of the most common methods of triggering actions that are found in forms, wizards, modals, toolbars, and so on. Buttons include text and/or icon labels to help users identify the action that they will trigger. 

## Usage

Although many PatternFly components already have actions built into their design, you will often need to customize the arrangement of components and actions in your UI. It is important to strategically place actions so that they're easily located and so the data or UI elements they impact is clear.

When labeling or referring to actions in your UI, make sure that you adhere to our [terminology guidelines](/ux-writing/terminology) and align icons with the usage behavior outlined in our [icon design foundations.](/design-foundations/icons#all-icons) 

### When not to use actions 
- Do not use actions in place of text links.

## Variations 

### Single actions 
If there is only a single action, use a primary or secondary button. Use a primary if it is the primary action you would like the user to take on the page, and a secondary button if it is not the primary call to action.

### Multiple actions
If there are multiple possible actions a user can take on the page, house them under an action dropdown. Refer to the [dropdown menu](/components/menus/dropdown/design-guidelines#split-button-with-actions) guidelines for more information.

## Placement

### Page-level actions
Actions that affect a page as a whole should be placed on the top right of a page, at the header level. 

If getting to this page requires drilling down into an item inside a table, those actions should also appear in the row’s kebab of actions. 

### Component-level actions

- Toolbars 
- Tables 
- Data lists
