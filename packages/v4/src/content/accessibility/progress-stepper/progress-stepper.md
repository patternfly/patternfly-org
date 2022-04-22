---
id: Progress stepper
section: components
---

A **progress stepper** is used to provide information to the user about the state of their current progress on a multistep interaction.

**Keyboard users** use standard keyboard navigation (**Tab** and **Shift + Tab**) to move to and between progress steps with popovers. Keyboard users should
be able to open the popover on a progress step using **Enter** or **Space**, and close the popover using **Enter**, **Space**, or **Escape**.

**Screen reader users** should be able to discern the label, status, and optional description of every progress step 
via the `aria-label` prop. This should include all information being communicated by the progress step's icon, such as 
the variant and the completed status, as well as whether the step has an associated popover they can trigger. Screen 
reader users should also be able to access the contents of any popover associated with a step.

The following props/attributes have been added for you and are customizable in PatternFly:

| React component | React prop  | Which HTML element it appears on in markup | Explanation                       | 
|-----------------|-------------|--------------------------------------------|-----------------------------------|
| ProgressStep    | aria-label  | .pf-c-progress-stepper__step               | Progress step for screen readers. |
