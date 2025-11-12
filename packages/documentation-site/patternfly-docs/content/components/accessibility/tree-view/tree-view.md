---
id: Tree view
section: components
---

A **tree view** is a structure that displays data in a hierarchical view. It can be used in a dropdown, drawer, primary-detail, modal, or wizard. Tree views are often used when grouping similar decisions, action items, or navigation elements together.

A default tree view provides a tree structure with items and arrows to expand or collapse child items. Every tree view can be extended with these optional capabilities.

**Keyboard users** should be able to interact with and navigate through the interactive tree view. Initial focus should be set on the first focusable element in the tree view. The user should be able to focus on one element of the tree with **Tab**. Once focused on a tree item, the user should also be able to move between visible nodes using **Up arrow** and **Down arrow**. **Left arrow** can be used to collapse an expanded node, or move to the parent of an already-collapsed or childless node. **Right arrow** should expand the focused node if it is collapsed but has child nodes, move to the first child of an already-expanded node, or do nothing on an end node.

Keyboard interactions for tree view:

|  |  |
| -- | -- |
| Tab | Focus on the first (or previously selected) element of the tree |
| Up arrow | Move up through visible nodes |
| Down arrow | Move down through visible nodes |
| Left arrow | Collapse focused node if expanded, or move to the parent of a collapsed/childless node |
| Right arrow | Expand focused node if collapsed, move to first child if already expanded, or do nothing if end node |

**Screen reader users** should be able to interact with the tree view using their mouse or keyboard. Nodes of a tree view should have descriptive text labels whenever possible. If a tree view node only contains a graphic (such as an icon), it should have alternative text: `aria-label` is the most common way to add this. A tree view should be identified as such when the screen reader first focuses on it. When users navigate to a new node, indicate its branch level , number of child nodes, and number of sibling nodes.

## To make tree view accessible:
- For the search variant, use an aria-label describing what the user can search. For example, `searchProps={{ id: 'input-search', name: 'search-input', 'aria-label': 'Search input example' }}`.
- For the checkbox variant, each of the checkboxes should have an aria-label or be associated: `checkProps: { 'aria-label': 'app-launcher-check', checked: false }`.
- The actions variant should have an aria-label if you are using buttons without visible descriptive text

The following props/attributes have been added for you or are customizable in PatternFly:

| React prop | React component that it should be applied to | Which HTML element it appears on in markup | Reason used |
| -- | -- | -- | -- |
| `checkProps` | TreeViewListItem | checkbox input | Additional properties of the tree view item checkbox; defaulted to `{ checked: false }` |
| `searchProps` | TreeView or TreeViewList | .pf-v6-c-form-control pf-m-search | Additional props for search input |
