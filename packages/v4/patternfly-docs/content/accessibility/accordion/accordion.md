---
id: Accordion
section: components
---


An **accordion** is an interactive container that expands and collapses to hide or reveal the nested content. It takes advantage of progressive disclosure to help reduce page scrolling by allowing users to choose to show or hide more detailed information as needed.

<ins>**To make accordion accessible:**</ins>
- Make sure to include the `isExpanded` prop on the AccordionToggle based on the toggle’s state. This prop adds necessary accessibility attributes and styling such as `aria-expanded=”true/false”`

<br/>

In general, the application launcher component already has accessibility built in. However, if you would like to customize it, you can edit the following:

| React component| Prop or attribute | Which HTML element it appears on in markup | Explanation | 
|---|---|---|---|
| Accordion | aria-label | .pf-c-accordion | Adds accessible text to the Accordion - available for customization |
| AccordionContent | aria-label | .pf-c-accordion__expanded-content | Adds accessible text to the Accordion content - available for customization. |
|AccordionToggle| isExpanded | .pf-c-accordion__toggle | Flag to show if the expanded content of the Accordion item is visible.  This prop adds necessary accessibility attributes and styling such as `aria-expanded=”true/false”`. |