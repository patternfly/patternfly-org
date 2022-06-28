---
id: Tooltip
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **tooltip**:

- Avoid using tooltips on static elements such as a `div` or `span`, except in cases of truncation.
- Pass in `role="tooltip"` (HTML/CSS) to the element acting as the tooltip component.
- Pass in `aria="labelledby"` to the tooltip component (PatternFly React) or the `aria-labelledby` attribute to the trigger (HTML/CSS) when the tooltip should act as the primary label for its trigger:
  ```noLive
  // PatternFly React
  <Tooltip content="Copy to clipboard" aria="labelledby">
    <button>
      <CopyIcon />
    </button>
  </Tooltip>

  // HTML/CSS
  <div class="pf-c-tooltip pf-m-top" role="tooltip">
    <div class="pf-c-tooltip__arrow"></div>
    <div class="pf-c-tooltip__content" id="tooltip-label-content">
      Copy to clipboard
    </div>
  </div>
  <button aria-labelledby="tooltip-label-content">
    <CopyIcon />
  </button>
  ```
- Pass in the `aria-describedby` attribute to the trigger (HTML/CSS) when the tooltip should act as supplementary information (this is the default behavior for PatternFly React):
  ```noLive
  // HTML/CSS
  <div class="pf-c-tooltip pf-m-top" role="tooltip">
    <div class="pf-c-tooltip__arrow"></div>
    <div class="pf-c-tooltip__content" id="tooltip-description-content">
      Supplementary information within a tooltip
    </div>
  </div>
  <button aria-describedby="tooltip-description-content">
    Button text label
  </button>
  ```

## Testing

At a minimumm, a tooltip should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-1" label="Unless it is a case of truncation, the tooltip is not placed on a static element." />
  </ListItem>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-2" label={<span>If using the HTML/CSS library, <code class="ws-code">role="tooltip"</code> is passed into the tooltip component.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-3" label={<span>If the tooltip is meant to act as a primary label, the trigger has the <code class="ws-code">aria-labelledby</code> attribute linked to the tooltip contents.</span>} description="One use-case for this is when a button contains only an icon and no visible text label." />
  </ListItem>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-4" label={<span>If the tooltip is meant to act as supplementary information, the trigger has the <code class="ws-code">aria-describedby</code> attribute linked to the tooltip contents.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-5" label="Using a mouse to hover over the triggering element causes the tooltip to trigger, and the tooltip persists when hovering over the tooltip contents." />
  </ListItem>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-6" label="The triggering element can receive focus via keyboard in order to trigger the tooltip, and the tooltip persists as long as the triggering element has focus." />
  </ListItem>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-7" label="Users navigating via screen reader have the contents of the tooltip announced to them when it is triggered." description="This is best achieved by wrapping the tooltip component around the trigger." />
  </ListItem>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-8" label={<span>The tooltip can be dismissed by pressing <kbd>Escape</kbd>.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="tooltip-a11y-checkbox-9" label="If the tooltip content is no longer valid, the tooltip automatically gets dismissed." />
  </ListItem>
</List>

## React customization

Various React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| aria-live | Tooltip | When a value of "polite" is passed in, allows screen readers to announce the tooltip contents when it is expected or intended to dynamically update, such as in response to a user action. This should only be passed in when the `children` prop is also used on the tooltip. <br/><br/> `aria-live="polite"` is set by default when using the `reference` prop in order to allow screen readers to correctly announce tooltip contents regardless if it will dynamically update or not. |
| aria | Tooltip | When a value of "describedby" (default behavior) or "labelledby" is passed in, allows screen readers to announce the tooltip contents when it is triggered. A value of "describedby" sets the trigger's `aria-describedby` attribute and should be used when the tooltip should act as supplementary information. A value of "labelledby" sets the trigger's `aria-labelledby` attribute and should be used when the tooltip should act as a primary label. <br/><br/> When a value of "none" is passed in, prevents `aria-labelledby` and `aria-describedby` from being set on the trigger. Only pass in a value of "none" when either `aria-labelledby` or `aria-describedby` is manually set on the trigger and the `id` prop is manually passed into the tooltip. <br/><br/> This prop should only be passed in when the `children` prop is also used on the tooltip. |
| id | Tooltip | Sets the `id` attribute on the tooltip, which can be passed in as the value to a trigger's `aria-labelledby` or `aria-describedby` attribute. **Required** when either `aria-labelledby` or `aria-describedby` is manually set on the trigger or when the `reference` prop is passed into the tooltip. |
| reference | Tooltip | Links the tooltip to a trigger when the `children` prop cannot be used. When passing in this prop, the `id` prop must also be passed in, and either `aria-labelledby` or `aria-describedby` must be set on the trigger with a value of the tooltip's `id`. |

### Aria-live

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

```noLive
<Tooltip id="tooltip-without-aria" aria="none" content="Copy to clipboard">
  <button aria-labelledby="tooltip-without-aria">
    <CopyIcon />
  </button>
</Tooltip>
```

### Reference

```noLive
const tooltipRef = React.useRef();

<Tooltip id="tooltip-with-reference" content="Copy to clipboard" reference={tooltipRef} />
<button ref={tooltipRef} aria-labelledby="tooltip-with-reference">
  <CopyIcon />
</button>
```
