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

| React component | React prop  | Which HTML element it appears on in markup | Explanation                                                                          | 
|-----------------|-------------|--------------------------------------------|--------------------------------------------------------------------------------------|
| ProgressStep    | aria-label  | .pf-v6-c-progress-stepper__step               | Provides an accessible label describing the variant and status of the progress step. |


**Note:** When using a progress stepper in an application, it's also wise to consider how to best summarize the overall progress
state to a screen reader user. The [basic progress stepper demo](/components/progress-stepper/react-demos#basic)
demonstrates one approach of using an `aria-live` region which is updated to contain the progress stepper's status and
is visible only to the screen reader.
```js noLive
<div className="pf-screen-reader" aria-live="polite">
  On step 4.
  Step 3 was successful.
</div>
```
