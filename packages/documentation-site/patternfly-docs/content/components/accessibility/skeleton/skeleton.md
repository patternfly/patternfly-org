---
id: Skeleton
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **skeleton**:

- Ensure at least one skeleton has visually hidden text that can inform users of assistive technologies such as screen readers that some content is loading.
- Provide unique visually hidden text to each skeleton that has such text.

## Testing

At a minimum, a skeleton should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="skeleton-a11y-checkbox-1" label="At least one skeleton has visually hidden text that informs users of assistive technologies that some content is loading." description={<span>This can be achieved by applying the <code className="ws-code">pf-v5-screen-reader</code> class to an element.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="skeleton-a11y-checkbox-2" label="If more than one skeleton has visually hidden text, each of them has unique text." description={<span>For example, if header content and some card content both have hidden text, you should avoid giving both hidden text of "Loading content". Instead you should use something along the lines of "Loading header content" and "Loading card content".</span>} />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `screenreaderText="[visually hidden text that describes the skeleton purpose]"` | `Skeleton` | Adds text that is accessible only to assistive technologies and is not visually rendered. Should be passed in to at least one skeleton, and should be unique among all skeletons with this prop. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `.pf-screen-reader` | `.pf-v6-c-skeleton > span` | Provides an accessible description of the purpose of the skeleton. |

## Additional considerations

Consumers must ensure they take any additional considerations when customizing a skeleton, using it in a way not described or recommended by PatternFly, or in various other specific use-cases not outlined elsewhere on this page.

### When to apply screen reader text

When using multiple skeletons on a page, it's important to not add too many skeletons with screen reader text. Doing so can make it too verbose for users trying to navigate the page with certain assistive technologies.

Typically you should provide no more than one skeleton with screen reader text to each main section of a page. This could be a header, side navigation, a `main` element, and so on.

You may not always need to provide screen reader text to multiple skeletons, however. Having only one skeleton with screen reader text can suffice, especially if the actual content is expected to load in fairly quickly.
