---
id: Brand
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **brand** component:

- Do not make the brand itself interactive or focusable via keyboard
- Apply alternative text to the brand
- Ensure assistive technologies such as screen readers can navigate to the brand if there is alternative text applied

## Testing

At a minimum, a brand should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="brand-a11y-checkbox-1" label="The brand itself is not interactive and cannot be focused via keyboard." description="If a brand is placed inside of an anchor element, the anchor element should still receive focus." />
  </ListItem>
  <ListItem>
    <Checkbox id="brand-a11y-checkbox-2" label={<span>The brand has alternative text via <code className="ws-code">alt</code>.</span>} description={<span>If the brand is only decorative, the <code className="ws-code">alt</code> should have an empty string passed in as a value.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="brand-a11y-checkbox-3" label="The alternative text of the brand is announced to users via assistive technologies when they navigate to it." description="If the brand is decorative and is given an empty string for its alternative text, the brand should instead be skipped by assistive technologies." />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason |
| -- | -- | -- |
| `alt="[the brand name or text describing the brand]"` | `Brand` | Provides an accessible description of the brand. **Required** <br/><br/> This prop will be used for all `source` elements and the fallback `img` when a `picture` brand is used. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `alt="[the brand name or text describing the brand]"` | `.pf-v6-c-brand > img` | Provides an accessible description of the brand. **Required** <br/><br/> This attribute will be used for all `source` elements and the fallback `img` when a `picture` brand is used. |

## Further reading

To read more about accessibility with a brand, refer to the following resources:

- [WCAG 1.1: Text Alternatives](https://www.w3.org/TR/WCAG21/#text-alternatives)
- [Alternative text](https://webaim.org/techniques/alttext/) by WebAIM
