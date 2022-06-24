---
id: Label
section: components
---

A **label** highlights an element on a page to draw attention to it or make it more searchable. Labels can also be used to tag items of the same category.

**Keyboard users** should be able to interact with the label if it contains interactive elements such as a link or close button. The user should be able to focus on an interactive part of a label using **Tab** to move forward and **Tab + Shift** to move backward through interactive elements.

**Screen reader users** should be able to navigate to the label and read the label text.

The following props/attributes have been added for you or are customizable in PatternFly:

| React component | React prop | Which HTML element it appears on in markup | Explanation | 
|---|---|---|---|
| Label | closeBtnProps | .pf-c-label | Customize the props on the close button of the label. For example, to change the `aria-label`, pass `closeBtnProps={{'aria-label': 'new label'}}` to the Label component. |
