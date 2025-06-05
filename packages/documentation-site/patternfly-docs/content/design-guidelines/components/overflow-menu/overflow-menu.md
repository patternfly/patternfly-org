---
id: Overflow menu
section: components
---

import '../components.css';

## Usage 
Use an overflow menu when additional options are available to the user but there is a space constraint. Common usage for overflow menu's happen when switching a UI from a desktop to a mobile device. 

### When to use
* Use an overflow menu in a table toolbar to group a number of actions and create visual space. Avoid having more than 3 actions fully displayed within a toolbar.

**Toolbar overflow in desktop view**

<div class="ws-docs-content-img">
![image showing toolbar overflow](./img/toolbar-overflow.svg)
</div>

**Toolbar overflow in mobile view**

<div class="ws-docs-content-img">
![image showing toolbar overflow on mobile](./img/mobile-toolbar-overflow.svg)
</div>

* Use an overflow menu within a table row when additional actions are available that don’t correspond with a column header.

**Table overflow in desktop view**

<div class="ws-docs-content-img">
![image showing table with overflow](./img/table-overflow.svg)
</div>

**Table overflow in mobile view**

<div class="ws-docs-content-img">
![image showing toolbar overflow on mobile](./img/mobile-table-overflow.svg)
</div>

* Use an overflow menu within a card component to present additional menu options or provide action links.
 
 <div class="ws-docs-content-img">
![image showing card overflow](./img/toolbarcardoverflow.svg)
</div>

### When not to use
* Do not use an overflow menu when there are 2 or fewer actions available to the user. 
* Do not use in conjunction with label groups when there isn’t enough space to display each label. Instead, use an [overflow label](https://v4-archive.patternfly.org/v4/components/label-group).
* Do not use an overflow menu to hide additional content that you don't want to be seen by default, instead use an [expandable section](https://v4-archive.patternfly.org/v4/components/expandable-section/design-guidelines).  

## Behavior
Overflow menus are represented by a kebab button, as the user clicks on the kebab, a horizontal list will appear with additional options to click. 

## Content considerations
* Text should be short and direct so users can quickly scan and decide on an action.
* Text  should be written in sentence case.
* Overflow menus should be placed on the right side of the container. 

