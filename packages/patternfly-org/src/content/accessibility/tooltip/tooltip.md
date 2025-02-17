---
id: Tooltip
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **tooltip**:

- Avoid using tooltips on static elements such as a `div` or `span`, except in cases of truncation.

For the PatternFly React library:

- Pass in `aria="labelledby"` to the tooltip component when the tooltip should act as the primary label for its trigger:
  ```noLive
  <Tooltip content="Copy to clipboard" aria="labelledby">
    <button>
      <CopyIcon />
    </button>
  </Tooltip>
  ```

For the HTML/CSS library:

- Pass in `role="tooltip"` to the element acting as the tooltip component.
- Pass in the `aria-labelledby` attribute to the trigger when the tooltip should act as the primary label for its trigger:
  ```noLive
  <div class="pf-v6-c-tooltip pf-m-top" role="tooltip">
    <div class="pf-v6-c-tooltip__arrow"></div>
    <div class="pf-v6-c-tooltip__content" id="tooltip-label-content">
      Copy to clipboard
    </div>
  </div>
  <button aria-labelledby="tooltip-label-content">
    <CopyIcon />
  </button>
  ```
- Pass in the `aria-describedby` attribute to the trigger when the tooltip should act as supplementary information:

  ```noLive
  <div class="pf-v6-c-tooltip pf-m-top" role="tooltip">
    <div class="pf-v6-c-tooltip__arrow"></div>
    <div class="pf-v6-c-tooltip__content" id="tooltip-description-content">
      Supplementary information within a tooltip
    </div>
  </div>
  <button aria-describedby="tooltip-description-content">
    Button text label
  </button>
  ```

## Testing

At a minimum, a tooltip should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-1" label="Unless it is a case of truncation, the tooltip is not placed on a static element." />
  </ListItem>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-2" label={<span>The tooltip component has the <code className="ws-code">role="tooltip"</code> attribute.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-3" label={<span>If the tooltip is meant to act as a primary label, the trigger has the <code className="ws-code">aria-labelledby</code> attribute linked to the tooltip contents.</span>} description="One use case for this is when a button contains only an icon and no visible text label." />
  </ListItem>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-4" label={<span>If the tooltip is meant to act as supplementary information, the trigger has the <code className="ws-code">aria-describedby</code> attribute linked to the tooltip contents.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-5" label="Using a mouse to hover over the triggering element causes the tooltip to trigger, and the tooltip persists while hovering over the trigger or the tooltip itself." description="The exit delay for a tooltip should typically be greater than 0 so that users have enough time to hover the tooltip with their mouse. Too short of an exit delay can make it difficult for users with motor control issues to hover the tooltip before it transitions out." />
  </ListItem>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-6" label="The triggering element can receive focus via keyboard in order to trigger the tooltip, and the tooltip persists as long as the triggering element has focus." />
  </ListItem>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-7" label="Users navigating via screen reader have the contents of the tooltip announced to them when it is triggered." description="This is best achieved by wrapping the tooltip component around the trigger. This is best checked by using a screen reader." />
  </ListItem>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-8" label="The tooltip can be dismissed without having to move the mouse pointer or remove focus from the trigger." description={<span>This is commonly done by pressing <kbd>Escape</kbd>.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-9" label="If the tooltip content is no longer valid, the tooltip automatically gets dismissed." />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-live="polite"` | `Tooltip` | When a value of "polite" is passed in, allows assistive technologies to announce the tooltip contents when it is expected or intended to dynamically update, such as in response to a user action. This should only be passed in when the `children` prop is also used on the tooltip. <br/><br/> `aria-live="polite"` is set by default when using the `reference` prop in order to allow assistive technologies to correctly announce tooltip contents regardless if it will dynamically update or not. |
| `aria="[describedby, labelledby, or none]"` | `Tooltip` | When a value of "describedby" (default behavior) or "labelledby" is passed in, allows assistive technologies to announce the tooltip contents when it is triggered. A value of "describedby" sets the trigger's `aria-describedby` attribute and should be used when the tooltip should act as supplementary information. A value of "labelledby" sets the trigger's `aria-labelledby` attribute and should be used when the tooltip should act as a primary label. <br/><br/> When a value of "none" is passed in, prevents `aria-labelledby` and `aria-describedby` from being set on the trigger. Only pass in a value of "none" when either `aria-labelledby` or `aria-describedby` is manually set on the trigger and the `id` prop is manually passed into the tooltip. <br/><br/> This prop should only be passed in when the `children` prop is also used on the tooltip. |
| `entryDelay={[number in milliseconds]}` | `Tooltip` | Creates a delay in the specified number of milliseconds for when the tooltip appears.<br/><br/>Avoid making the entry delay too long as it can cause users to navigate away before the tooltip appears. |
| `exitDelay={[number in milliseconds]}` | `Tooltip` | Creates a delay in the specified number of milliseconds for when the tooltip disappears.<br/><br/>Avoid making the exit delay `0` or too short, as users must be given enough time to move their mouse pointer into the tooltip or enough time to read it if they are unable to keep their mouse steady. |
| `id` | `Tooltip` | Sets the `id` attribute on the tooltip, which can be passed in as the value to a trigger's `aria-labelledby` or `aria-describedby` attribute. **Required** when either `aria-labelledby` or `aria-describedby` is manually set on the trigger or when the `reference` prop is passed into the tooltip. |
| `reference={[an HTML element or React ref]}` | `Tooltip` | Links the tooltip to a trigger when the `children` prop cannot be used. When passing in this prop, the `id` prop must also be passed in, and either `aria-labelledby` or `aria-describedby` must be set on the trigger with a value of the tooltip's `id`. |

### Aria-live

The following code block shows how you should generally use the `aria-live` prop when the tooltip contents is intended or expected to dynamically update.

```noLive
const [tooltipContent, setTooltipContent] = React.useState("Copy to clipboard");

const onClick = () => {
  setTooltipContent('Successfully copied to clipboard!")
}

<Tooltip aria-live="polite" content={tooltipContent}>
  <button onClick={onClick}>
    <CopyIcon />
  </button>
</Tooltip>
```

### Aria

When passing in `aria="none"` in the following code block, the `id` is passed into the tooltip and `aria-labelledby` is passed into the trigger with a value of the tooltip's `id`.

```noLive
<Tooltip id="tooltip-without-aria" aria="none" content="Copy to clipboard">
  <button aria-labelledby="tooltip-without-aria">
    <CopyIcon />
  </button>
</Tooltip>
```

### Reference

When using the `reference` prop in the following code block, a React ref is created and passed into the tooltip and the trigger as the `reference` and `ref` props, respectively. Additionally, the `id` is passed into the tooltip and `aria-labelledby` is passed into the trigger with a value of the tooltip's `id`.

```noLive
const tooltipRef = React.useRef();

<Tooltip id="tooltip-with-reference" content="Copy to clipboard" reference={tooltipRef} />
<button ref={tooltipRef} aria-labelledby="tooltip-with-reference">
  <CopyIcon />
</button>
```

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-live="polite"` | `.pf-v6-c-tooltip` | Allows assistive technologies to announce the tooltip contents when it is expected or intended to dynamically update, such as in response to a user action. |
| `id` | `.pf-v6-c-tooltip` | Used to link the tooltip to a trigger by passing in the tooltip's `id` as the value to the trigger's `aria-describedby` or `aria-labelledby` attribute. **Required**. |
| `role="tooltip"` | `.pf-v6-c-tooltip` | Adds a tooltip role to the component. **Required**. |
| `aria-describedby="[id of the element that describes this element]"` | Element that triggers the tooltip | Allows assistive technologies to announce the tooltip contents when it is triggered. **Required** when the tooltip should act as supplementary information. |
| `aria-labelledby="[id of the element that labels this element]"` | element that triggers the tooltip | Allows assistive technologies to announce the tooltip contents when it is triggered. **Required** when the tooltip should act as the primarly label of the trigger. |

## Additional considerations

Consumers must ensure they take any additional considerations when customizing a tooltip, using it in a way not described or recommended by PatternFly, or in various other specific use-cases not outlined elsewhere on this page.

- If a tooltip is added to a trigger that is disabled, the trigger must still be able to receive focus. This can often be achieved by using the `aria-disabled` attribute instead of the `disabled` attribute.

## Further reading

To read more about accessibility with tooltips, refer to the following resources:

- [ARIA Authoring Practices Guide - Tooltip widget](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)