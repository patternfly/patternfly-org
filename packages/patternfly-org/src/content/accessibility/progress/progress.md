---
id: Progress
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';


## Accessibility

To implement an accessible PatternFly **progress** component:
- Ensure a `title` or an `aria-label` are being used to give context to users. Additional context could also be provided via an `aria-labelledby` attribute mapping to the `id` of existing content on the page.
- Ensure that a live region exists on the page through `aria-live` prior to updating the value of the progress component
- Add a message to screen readers inside of the live region when the progress value updates, for example: `Progress value is ${currentValue}%.`


## Testing

At a minimum, a progress component should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="progress-a11y-checkbox-1" label={<span>The progress component has an accessible name via the <code className="ws-code">title</code> or <code className="ws-code">aria-label</code> attribute.</span>} description="This will give context when announced to users of assistive technologies when navigating through a page or a screen reader's rotor menu." />
  </ListItem>
  <ListItem>
    <Checkbox id="progress-a11y-checkbox-2" label={<span>If progress status will dynamically appear or update, there is a live region with <code className="ws-code">aria-live="polite"</code> on page load where updates are rendered.</span>} description="This will allow assistive technologies to announce dynamically rendered updates." />
  </ListItem>
</List>


## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the progress bar]"` | `Progress` | Adds accessible text to the ProgressBar. Required when title not used and there is not any label associated with the progress bar. |
| `aria-labelledby="[id of the element that labels the progress bar]"` | `Progress` | Associates the ProgressBar with its label for accessibility purposes. The `aria-labelledby` attribute should be passed in with a value of the label's id attribute. Required when title not used. |
| `id` | `Progress` | Used as a DOM id for progress component. |
| `label="[text describing current progress value]"` | `Progress` | Adds a text description of current progress value to display instead of percentage. |
| `min={a number}` | `Progress` | Minimum value of progress. |
| `max={a number}` | `Progress` | Maximum value of progress. |
| `valueText="[text describing the current progress value]"` | `Progress` | Adds a visually hidden text description of current progress value, for when value is not a percentage. Also sets the accessibility attribute `aria-valuetext`. This prop should be used alongside the `label` prop. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason |
| -- | -- | -- |
| `role="progressbar"` | `.pf-v6-c-progress__bar` |  This role is used for an element that displays the progress status for a task that takes a long time or consists of several steps. |
| `aria-valuenow=""` | `.pf-v6-c-progress__bar` |  This value needs to be updated as progress continues. |
| `aria-valuemin="0"` | `.pf-v6-c-progress__bar` |  The minimum value for the progress bar. |
| `aria-valuemax="100"` | `.pf-v6-c-progress__bar` |  The maximum value for the progress bar. If the progress is only defined using `aria-valuenow` (e.g a percentage), the value should be set to "100." If the progress is defined using `aria-valuetext`, then this value can be a number other than 100. For example, if `aria-valuetext` is "2 of 5 units," then `aria-valuemax` can be "5" and `aria-valuenow` can be "2." |
| `aria-label="[text that labels the progress bar]"` | `.pf-v6-c-progress__bar` | Provides an accessible name for the progress component. |
| `aria-labelledby="[id of element that labels the progress]"` | `.pf-v6-c-progress__bar` | Provides an accessible name for the progress component. |
| `aria-describedby="[id of element that describes the progress]"` | `.pf-v6-c-progress__bar` | Provides an accessible description for the progress component. |
| `aria-valuetext="[loading state]"` | `.pf-v6-c-progress__bar` |  Provide a text string that communicates current status. Only use if the important information about status is included in the text string. Do not use if percentage is the most important value to communicate. Some screen readers will ignore the percentage value determined from `aria-valuenow` when `aria-valuetext` is used. |
| `aria-hidden="true"` | `.pf-v6-c-progress__status` |  Hides the visible progress bar status from screen readers. This information is communicated by the aria attributes defined on the `.pf-v6-c-progress__bar` element. |


## Additional considerations

Consumers must ensure they take any additional considerations when customizing a progress component, using it in a way not described or recommended by PatternFly, or in various other specific use cases not outlined elsewhere on this page.

### Aria-live

When intending or expecting the progress to contain updates that dynamically appear or update, the recommended method of creating a live region is by using an `aria-live` value of "polite."

If the progress component is intended or expected to contain time sensitive/critical information, `aria-live="assertive"` can instead be manually passed in. This should be used sparingly, as it will interrupt whatever task users are currently in the middle of.

### Aria-atomic and aria-relevant

You can further customize the way assistive technologies announce the contents of a live region via the `aria-atomic` and `aria-relevant` attributes.

- `aria-atomic="true/false"` sets whether assistive technologies should announce the live region as a whole, even if only part of the region changes, (true), or if only the changes to the region should be announced (false). For example:

  ```noLive
    <div className="pf-screen-reader" aria-live="polite">
      // render progress message
      `Progress value is ${currentValue}%.`}
    </div>
    <Progress value={currentValue} title="Title" />
  ```

  In the code block above, if there were 2 progress updates already rendered within the live region and `aria-atomic="true"` was passed in, another update being rendered into the container would cause all 3 updates to be announced. If `aria-atomic="false"` were passed in instead, only the new update would be announced.

- `aria-relevant` sets what types of changes are relevant to a live region and what qualifies as an update to it. The value passed in is a space-separated list of one or more of "additions," "removals," or "text," or "all" for all 3. The default value is "additions text" if there is no ancestor with this attribute passed in. An example for when a value of "removals" is passed in:

  ```noLive
    <div className="pf-screen-reader" aria-live="polite" aria-relevant="additions text removals">
      // render progress message
      `Progress value is ${currentValue}%.`}
    </div>
    <Progress value={currentValue} title="Title" />
  ```

  In the above code block, if an update is removed from the live region, assistive technologies will announce the updated contents (in this case, whichever progress updates are still rendered inside of it).