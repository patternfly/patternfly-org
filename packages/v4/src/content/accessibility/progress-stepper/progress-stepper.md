---
id: Progress stepper
section: components
---

A **progress stepper** is used to provide information to the user about the state of their current progress on a multistep interaction.

**Keyboard users** should be able to use **Tab** and **Shift + Tab** navigate to and between progress steps with popovers. Keyboard users should 
be able to open and close the popover on a progress step using **Enter** or **Space**.

**Screen reader users** should be able to discern the label, status, and optional description of every progress step. 
The aria-label provided to each step should indicate all information being communicated by the progress step's icon, including the variant and the completed status.
Screen reader users should also be able to discern whether a step has an associated popover they can trigger and the contents of that popover.

The following props/attributes have been added for you or are customizable in PatternFly:

| React component | React prop  | Which HTML element it appears on in markup | Explanation                       | 
|-----------------|-------------|--------------------------------------------|-----------------------------------|
| ProgressStep    | aria-label  | .pf-c-progress-stepper__step               | Progress step for screen readers. |
