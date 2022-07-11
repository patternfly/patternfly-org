---
id: Alert
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **alert**:

- Add an [alert group](/components/alert-group) for an alert to be rendered inside of if you intend or expect the alert to dynamically appear or update, such as a toast alert.

## Testing

At a minimumm, an alert should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="alert-a11y-checkbox-1" label="If an alert will dynamically appear or update, it is rendered inside of an alert group component." />
  </ListItem>
</List>

## React customization

Various React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `customIcon` | `Alert` | Allows setting a custom icon for the alert. When passing in this prop, be sure the icon has `aria-hidden="true"` to remove it from the accessibility tree, which will prevent assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. |
| `timeout` | `Alert` | Automatically dismisses the alert after the specified time in milliseconds. A value of "true" will dismiss the alert after 8000 milliseconds. When customizing this prop, be sure to provide ample time for users to perceive the alert before it gets dismissed, especially if users have to navigate to another page for additional details related to the alert. |
| `titleHeadingLevel` | `Alert` | Sets the heading level for the alert title (`h4` by default). Be sure to not skip heading levels when using an alert or customizing this prop. |
| `toggleAriaLabel` | `Alert` | Adds an accessible name to the alert toggle when the `isExpandable` prop is also passed in. The value passed in should provide context as to which alert will be expanded/collapsed and what type of information is within the expandable area. By default the value is "[alert variant] alert details". |
| `variantLabel` | `Alert` | Adds variant label text to the alert title that is accessible only to assistive technologies and is not visually rendered. The value passed in should provide additional context that prefaces the alert title. By default the value is "[alert variant] alert:". <br/><br/> The value of this prop and the `title` prop will automatically be applied to the toggle button for expandable alerts if the `toggleAriaLabel` prop has an empty string passed in as its value. |
| `aria-label` | `AlertActionCloseButton` | Adds an accessible name to the alert close button. The value passed in should generally indicate that the the button will close the alert. By default the value is "Close [alert variant] alert: [alert title]". |
| `variantLabel` | `AlertActionCloseButton` | If the `aria-label` prop is not passed into this component, adds variant label text to an alert close button that is accessible only to assistive technologies and is not visually rendered. The value of this prop and the alert's `title` prop are combined to create an accessible name for an alert's close button. The value passed in should provide additional context that prefaces the `title` text. <br/><br/> By default the value is the same as the `variantLabel` on the alert component. |

## HTML/CSS customization

Various HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-label="[variant] alert"` | `.pf-c-alert` | Adds an accessible name to the alert for assistive technologies. The value passed in place of `[variant]` should generally be one of either "default", "success", "danger", "warning", or "information". |
| `.pf-u-screen-reader` | `.pf-c-alert__title <span>` | Should be used to add text to the alert title that is accessible only to assistive technologies and is not visually rendered. The text content of this element should state the type of alert and should preface the alert title. |
| `aria-label="Close [variant] alert: [alert title]"` | `.pf-c-button.pf-m-plain` | Should be used to add an accessible name to the alert close button. |
| `hidden` | `.pf-c-alert__description` | Hides the expandable alert description content. **Required** when `aria-expanded="false"` is passed into `.pf-c-alert__toggle`. |
| `aria-expanded="false"` | `.pf-c-alert__toggle` | Indicates that the alert toggle is collapsed to assistive technologies and that the expandable alert description is hidden. **Required** if the toggle is collapsed. |
| `aria-expanded="true"` | `.pf-c-alert__toggle` | Indicates that the alert toggle is expanded to assistive technologies and that the expandable alert description is visible. **Required** if the toggle is expanded. |
| `aria-label="[variant] alert details"` | `.pf-c-button.pf-m-plain` | Should be used to add an accessible name to the alert toggle when an alert has the `aria-expanded` attribute passed in. |
| `aria-hidden="true"` | `.pf-c-alert__icon <i>` | Removes the expandable alert toggle icon from the accessibility tree, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required**. |

When using JavaScript to automatically dismiss alerts, read the `timeout` prop row in the [React customization](#react-customization) section for details on an accessible implementation.

## Additional considerations

Consumers must ensure they take any additional considerations when customizing an alert, using it in a way not described or recommended by PatternFly, or in various other specific use-cases not outlined elsewhere on this page.

### Toast alerts

Toast alerts present special challenges for accessibility. Assistive technologies announce the arrival and message content of an incoming toast alert, but user focus will not be placed there, making it difficult for users to directly act on the alert itself. In any toast alert containing links for further user action, include text that describes how the user can navigate through the UI to perform the action.
 
For example, this toast alert is not accessible because it does not include text that explains to the user where to go within the UI to perform the action:

<img src="../../design-guidelines/components/alert/img/alert-no-description.png" alt="toast alert without descriptive text" width="600px"/>

In contrast, this toast alert is accessible to users with total, limited, or no vision because it includes text that explains to the user where to go within the UI to perform the action:

<img src="../../design-guidelines/components/alert/img/alert-description.png" alt="alert with descriptive text" width="600px"/>

## Further reading

To read more about accessibility with alerts, refer to the following resources:

- [ARIA Authoring Practices Guide - Alerts](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)
- [WCAG 2.0 success criterion 2.2.3 - no timing](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html), if intending to use alerts that automatically get dismissed