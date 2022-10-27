---
id: Alert group
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **alert group**:

- Ensure the alert group exists in the DOM on page load.

For the PatternFly React library:

- Pass in the `isLiveRegion` prop when intending or expecting to render alerts that will dynamically appear or update.

For the HTML/CSS library:

- Pass in the `aria-live="polite"` attribute when intending or expecting to render alerts that will dynamically appear or update.

## Testing

At a minimum, an alert group should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="alertGroup-a11y-checkbox-1" label="The alert group exists on page load and is not dynamically rendered." description="This should always exist in the DOM, especially when alerts will dynamically appear or update within it." />
  </ListItem>
  <ListItem>
    <Checkbox id="alertGroup-a11y-checkbox-2" label={<span>If alerts will dynamically appear or update, the alert group has the <code class="ws-code">aria-live="polite"</code> attribute.</span>} description="This will allow assistive technologies to announce dynamically rendered alerts." />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `isLiveRegion` | `AlertGroup` | Makes the alert group a live region by setting `aria-live="polite"` and `aria-atomic="false"`. Instead of passing this prop in, you can manually set `aria-live` and `aria-atomic` by passing them in individually. Pass this prop in if you intend or expect the contents of the alert group to be dynamically updated. |
| `isToast` | `AlertGroup` | Adds styling to position alerts in the top-right corner of the viewport. When passing this prop in, the `isLiveRegion` prop must also be passed in. For more information about accessibility with toast alerts, read the [toast alerts](/components/alert/accessibility#toast-alerts) section of the alert accessibility tab. |
| `overflowMessage="[text to display for the overflow message]"` | `AlertGroup` | When functionality is added for overflowing alerts, this prop adds a custom message for the hidden overflow. When passing this prop in, the message should include how many alerts are currently within the overflow and should update as alerts are added or removed. This will allow users of assistive technologies to be notified when an alert is added to the overflow, as otherwise the addition of the alert and the alert contents itself will not be announced to them. <br/><br/> When passing this prop in, the `isLiveRegion` prop must also be passed in. For more information about alert overflow, read [alert group - managing overflow](/components/alert-group/design-guidelines#managing-overflow). |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-live="polite"` | `.pf-c-alert-group` | Makes the alert group a live region. **Required** when alerts are intended or expected to dynamically appear or update within the alert group. |
| `.pf-m-toast` | `.pf-c-alert-group` | Adds styling to position alerts in the top-right corner of the viewport. When passing this prop in, `aria-live="polite"` must also be passed in. For more information about accessibility with toast alerts, read the [toast alerts](/components/alert/accessibility#toast-alerts) section of the alert accessibility tab. |

When using an overflow button for alerts, read the `overflowMessage` prop row in the [React customization](#react-customization) section for details on an accessible implementation.

## Additional considerations

Consumers must ensure they take any additional considerations when customizing an alert group, using it in a way not described or recommended by PatternFly, or in various other specific use-cases not outlined elsewhere on this page.

### Aria-live

When intending or expecting the alert group to contain alerts that dynamically appear or update, the recommended method of creating a live region is by using an `aria-live` value of "polite".

If the alert group is intended or expected to contain time sensitive/critical information, `aria-live="assertive"` can instead be manually passed in. This should be used sparingly, as it will interrupt whatever task users are currently in the middle of.

### Aria-atomic and aria-relevant

You can further customize the way assistive technologies announce the contents of an alert group that is a live region via the `aria-atomic` and `aria-relevant` attributes.

- `aria-atomic="true/false"` sets whether assistive technologies should announce the live region as a whole, even if only part of the region changes, ("true"), or if only the changes to the region should be announced ("false"). For example:

  ```noLive
  <AlertGroup aria-live="polite">
  // rendered alerts...
  </AlertGroup>
  ```

  In the above code block, if there were 2 alerts already rendered within the alert group and `aria-atomic="true"` was passed in, another alert being rendered into the container would cause all 3 alerts to be announced. If `aria-atomic="false"` were passed in instead, only the new alert would be announced.

- `aria-relevant` sets what types of changes are relevant to a live region and what qualifies as an update to it. The value passed in is a space-separated list of one or more of "additions", "removals", or "text", or "all" for all 3. The default value is "additions text" if there is no ancestor with this attribute passed in. An example for when a value of "removals" is passed in:

  ```noLive
  <AlertGroup aria-live="polite" aria-relevant="additions text removals">
  // rendered alerts...
  </AlertGroup>
  ```

  In the above code block, if an alert is removed from the alert group, assistive technologies will announce the updated contents of the alert group (in this case, whichever alerts are still rendered inside of it).