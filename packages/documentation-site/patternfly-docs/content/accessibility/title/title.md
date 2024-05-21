---
id: Title
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **title**:

- Ensure no heading levels are skipped. For example, a title as a level 4 heading should not come immediately after a level 2 heading.
- Do not choose a heading level size solely for its font styling.
- Ensure the font size of any titles are consistent, and that a title with a lower heading level does not have a larger font size than one with a higher heading level.
- Provide descriptive text content to the title that will make sense when taken out of context.

## Testing

At a minimum, a title should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="title-a11y-checkbox-1" label="No heading levels are skipped within the title's surrounding context." />
  </ListItem>
  <ListItem>
    <Checkbox id="title-a11y-checkbox-2" label="The title's font size is consistent and is not larger than a higher heading level's font size." description={<span>For example, a title with a level 2 heading should not have a larger font size than a title with a level 1 heading or an <code className="ws-code">h1</code> element. Visually this would make the level 1 heading look like a sub-heading.</span>} />
  </ListItem>
    <ListItem>
    <Checkbox id="title-a11y-checkbox-3" label="The title has descriptive text content that makes sense when taken out of context." description={<span>Users that navigate via screen reader may use a rotor menu to view all of the headings on a page, without any other surrounding text. The title's text content must still make sense in this context.</span>} />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `headingLevel="[h1, h2, h3, h4, h5, or h6]"` | `Title` | Sets the internal heading element level. |
| `size="[md, lg, xl, 2xl, 3xl, or 4xl]"` | `Title` | Sets the font size of the component. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `.pf-m-4xl`, `.pf-m-3xl`, `.pf-m-2xl`, `.pf-m-xl`, `.pf-m-lg`, and `.pf-m-md` | `.pf-v6-c-title` | Sets the font size of the component. |
