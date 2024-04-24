---
id: Tree view
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **tree view**:

- Provide a unique label for the tree view via `aria-label` or `aria-labelledby`.
- Only pass custom interactive content as a tree view item's secondary action, and never as part of a tree view item's displayed name.
- Ensure any interactive actions for a tree view item follow any applicable accessibility guideliens.
- Provide a typeahead search when the tree view has more than 7 nodes.

For the PatternFly React library:

- Enure the root TreeView component's `isNested` prop is false, and that any nested TreeView components' `isNested` prop are true.
- Pass the `isMultiselectable` property if more than 1 tree node can be selected at a time.

For the HTML/CSS library:

- Ensure only the root `ul.pf-v6-c-tree-view__list` element has the attribute `role="tree"`, and that any nested `ul.pf-v6-c-tree-view__list` elements instead have `role="group"`.
- Pass the `aria-multiselectable="true"` attribute to the tree view list if more than 1 tree node can be selected at a time.

## Testing

At a minimum, a tree view should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="treeview-a11y-checkbox-1" label={<span>The tree view has a unique accessible name provided via <code className="ws-code">aria-label</code> or <code className="ws-code">aria-labelledby</code>.</span>} description="If there are multiple tree views on a page, or other table elements, a unique accessible name makes it easier for users to distinguish one from the others. It also provides improved context if a user is navigating via rotor menu from any assistive technologies such as a screen reader." />
  </ListItem>
  <ListItem>
    <Checkbox id="treeview-a11y-checkbox-2" label={<span>Only the root <code className="ws-code">ul</code> element within the tree view has the attribute <code className="ws-code">role="tree"</code>. Any nested <code className="ws-code">ul</code> elements instead have the attribute <code className="ws-code">role="group"</code></span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="treeview-a11y-checkbox-3" label="If there are more than 7 nodes in the tree view, a typeahead search is provided." />
  </ListItem>
  <ListItem>
    <Checkbox id="treeview-a11y-checkbox-4" label={<span>Within the context of the tree view, each tree view item can be navigated to and interacted with via keyboard. <kbd>Up Arrow</kbd> and <kbd>Down Arrow</kbd> will navigate to the next or previous item without expanding or collapsing any, respectively. <kbd>Left Arrow</kbd> will collapse an expanded item or navigate to its parent. <kbd>Right Arrow</kbd> will expand a collapsed item or navigate to its first child. <kbd>Enter</kbd> and <kbd>Space</kbd> will trigger a default action, typically selecting an item and/or expanding/collapsing it.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="treeview-a11y-checkbox-6" label="A tree view item does not have any custom interactive content passed to it, except as a secondary action." />
  </ListItem>
  <ListItem>
    <Checkbox id="treeview-a11y-checkbox-7" label="If a tree view item contains interactive, secondary actions, those actions follow any applicable accessibility guidelines." />
  </ListItem>
  <ListItem>
    <Checkbox id="treeview-a11y-checkbox-8" label={<span>If more than 1 tree view item can be selected at a time, ensure the tree view list has the <code className="ws-code">aria-multiselectable="true"</code> attribute.</span>} />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the tree view]"` | `TreeView` | Adds an accessible name to the tree view. **Required** if the `aria-labelledby` prop is not passed in. |
| `aria-labelledby="[id of the element that labels the tree view]"` | `TreeView` | Adds an accessible name to the tree view. **Required** if the `aria-label` prop is not passed in. |
| `badgeProps={[object of badge props]}` | `TreeView` | Customizes the badge component when rendered for tree view items. See our [badge accessibility](/components/badge/accessibility) for more information. |
| `checkProps={[object of checkbox props]}` | `TreeView` | Customizes the checkbox when rendered for tree view items. See our [checkbox accessibility](/components/forms/checkbox/accessibility) for more information. |
| `isMultiSelectable` | `TreeView` | Indicates that multiple tree view items can be selected. **Required** if the tree view is intended to allow the selection of multiple items, and should only be passed to the root tree view component.<br/>Note that passing this prop simply indicates that the tree view is multiselectable, and any selection logic must still be handled manually. |
| `isNested` | `TreeView` | Determines the `role` of the tree view list. If true, the role is et to "group", otherwise the role is "tree". **Required** to be true if the tree view is placed within another tree view. |
| `aria-label="[text that labels the tree view search]"` | `TreeViewSearch` | Adds an accessible name to the tree view search. **Required**. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the tree view]"` | `ul.pf-v5-c-tree-view__list` | Adds an accessible name to the tree view. **Required** if the `aria-labelledby` attribute is not passed in. |
| `aria-labelledby="[id of the element that labels the tree view]"` | `ul.pf-v5-c-tree-view__list` | Adds an accessible name to the tree view. **Required** if the `aria-label` attribute is not passed in. |
| `aria-multiselectable="true"` | `ul.pf-v5-c-tree-view__list[role="tree"]` | Indicates that multiple tree view items can be selected. **Required** if the tree view is intended to allow the selection of multiple items.<br/>Note that passing this prop simply indicates that the tree view is multiselectable, and any selection logic must still be handled manually. |
| `role="group"` | `ul.pf-v5-c-tree-view__list` | Identifies the element as a group of nested tree view items. **Required** `ul` elements nested within the root `ul[role="tree"]`. |
| `role="tree"` | `ul.pf-v5-c-tree-view__list` | Identifies the element as a tree widget. **Required** on the root level `ul` of the tree view only. |
| `aria-expanded="false"` | `li.pf-v5-c-tree-view__list-item` | Indicates that the tree view item is collapsed to assistive technologies, and that its children are not visible nor navigable. **Required** if a tree view item is collapsed and it has children nodes. |
| `aria-expanded="true"` | `li.pf-v5-c-tree-view__list-item.pf-m-expanded` | Indicates that the tree view item is expanded to assistive technologies, and that its children are visible and navigable. **Required** if a tree view item is expanded and it has children nodes. |
| `aria-selected="false"` | `li.pf-v5-c-tree-view__list-item` | Indicates that a tree view item is not selected. **Required** if a tree view item is not selected. |
| `aria-selected="true"` | `li.pf-v5-c-tree-view__list-item` | Indicates that a tree view item is currently selected. **Required** if a tree view item is selected. |
| `role="treeitem"` | `li.pf-v5-c-tree-view__list-item` | Identifies the element as a group of nested tree view items. **Required** `ul` elements nested within the root `ul[role="tree"]`. |
| `aria-label="[text that labels the tree view search]"` | `.pf-v5-c-tree-view__search input` | Adds an accessible name to the tree view search. **Required**. |

## Further reading

To read more about accessibility with a tree view, refer to the following resources:

- [ARIA Authoring Practices Guide - Tree View pattern](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/)
