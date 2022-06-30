---
id: Alert
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **alert**:

- Add a container that exists in the DOM on page load for the alert(s) to be placed in (we recommend using the [alert group](/components/alert-group) component).
- Make the alert container a live region when using dynamic/toast alerts that will be rendered into the DOM in response to a user action or when an asynchronous event is triggered:
  ```noLive
  <div aria-live="polite">
    // dynamic or toast alerts will be rendered here
  </div>
  ```
  - Use `aria-live="assertive"` <b>only if</b> a dynamic/toast alert requires immediate attention, such as for time-sensitive or critical information.

## Testing

At a minimumm, an alert should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="alert-a11y-checkbox-1" label="A container for alerts to be placed in exists on page load and is not dynamically rendered." description="This container should always exist in the DOM, especially when using dynamic/toast alerts." />
  </ListItem>
  <ListItem>
    <Checkbox id="alert-a11y-checkbox-2" label="If using dynamic/toast alerts, the alert container is made into a live region." description="This will allow assistive technologies to announce dynamically rendered alerts." />
  </ListItem>
  <ListItem>
    <Checkbox id="alert-a11y-checkbox-3" label={<span>An alert container that is a live region uses <code class="ws-code">aria-live="polite"</code>.</span>} description={<span><code class="ws-code">aria-live="assertive"</code> is only used when alerts contain time sensitive/critical information.</span>} />
  </ListItem>
</List>

## React customization

Various React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| aria-label | Alert | Adds an accessible name to the alert for assistive technologies. The value passed in should generally indicate the alert type/severity and the fact that it is an alert. By default the value is "[alert variant] Alert". | 
| titleHeadingLevel | Alert | Sets the heading level for the alert title (`h4` by default). Be sure to not skip heading levels when using an alert or customizing this prop. |
| variantLabel | Alert | Adds variant label text to the alert title that is accessible only to assistive technologies and is not visually rendered. The value passed in should provide additional context that prefaces the alert title. By default the value is "[alert variant] alert:". <br/><br/> The value of this prop and the `title` prop will automatically be applied to the toggle button for expandable alerts if the `toggleAriaLabel` prop has an empty string passed in as its value. |
| isLiveRegion | Alert | Makes the alert a live region by setting `aria-live="polite"` and `aria-atomic="false"`. Instead of passing this prop in, you can manually set `aria-live` and `aria-atomic` by passing them in individually. Pass this prop in if you intend or expect an alert's content to be dynamically updated, or if alerts are not rendered inside a live region container. NEEDS CLARIFICATION. |
| timeout | Alert | Automatically dismisses the alert after the specified time in milliseconds. A value of "true" will dismiss the alert after 8000 milliseconds. When customizing this prop, be sure to provide ample time for users to perceive the alert before it gets dismissed, especially if users have to navigate to another page for additional details related to the alert. |
| customIcon | Alert | Allows setting a custom icon for the alert. When passing in this prop, be sure the icon has `aria-hidden="true"` to remove it from the accessibility tree, which will prevent assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. |
| toggleAriaLabel | Alert | Adds an accessible name to the alert toggle when the `isExpandable` prop is also passed in. The value passed in should provide context as to which alert will be expanded/collapsed and what information is within the expandable area. By default the value is "[alert variant] alert details". |
| aria-label | AlertActionCloseButton | Adds an accessible name to the alert close button. The value passed in should generally indicate that the the button will close the alert. By default the value is "Close [alert variant] alert: [alert title]". |
| variantLabel | AlertActionCloseButton | If the `aria-label` prop is not passed into this component, adds variant label text to an alert close button that is accessible only to assistive technologies and is not visually rendered. The value of this prop and the alert's `title` prop are combined to create an accessible name for an alert's close button. The value passed in should provide additional context that prefaces the `title` text. <br/><br/> By default the value is the same as the `variantLabel` on the alert component. |

## Additional considerations

Consumers must ensure they take any additional considerations when customizing an alert, using it in a way not described or recommended by PatternFly, or in various other specific use-cases not outlined elsewhere on this page.

### Toast alerts

Toast alerts present special challenges for accessibility. Assistive technologies announce the arrival and message content of an incoming toast alert, but user focus will not be placed there, making it difficult for users to directly act on the alert itself. In any toast alert containing links for further user action, include text that describes how the user can navigate through the UI to perform the action.
 
For example, this toast alert is not accessible because it does not include text that explains to the user where to go within the UI to perform the action:

<img src="../../design-guidelines/components/alert/img/alert-no-description.png" alt="toast alert without descriptive text" width="600px"/>

In contrast, this toast alert is accessible to users with total, limited, or no vision because it includes text that explains to the user where to go within the UI to perform the action:

<img src="../../design-guidelines/components/alert/img/alert-description.png" alt="alert with descriptive text" width="600px"/>

### Aria-atomic and aria-relevant

- **Aria-atomic**
The aria-atomic=BOOLEAN sets whether or not the screen reader should always present the live region as a whole, even if only part of the region changes. The possible settings are: false or true. The default setting is: false.

- **Aria-relevant**
The aria-relevant=[LIST_OF_CHANGES] sets what types of changes are relevant to a live region and what qualifies as an update to it. The possible settings are one or more of: additions, removals, text, all. The default setting is: additions text.
