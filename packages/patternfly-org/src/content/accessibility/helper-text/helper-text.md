---
id: Helper text
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **helper text**:

- Give the helper text item an `id`, and pass that `id` to the main element's `aria-describedby` attribute. Alternatively if there are multiple helper text items, the helper text component can be given the `id` to be passed to the main element's `aria-describedby`. For example, the following code block includes two valid examples of passing `id` values to a main element:
  ```noLive
  <TextInput aria-describedby="helper-text-1" />
  <HelperText>
    <HelperTextItem id="helper-text-1">
      Some helper text content
    </HelperTextItem>
  </HelperText>

  <TextInput aria-describedby="helper-text-2" />
  <HelperText id="helper-text-2" component="ul">
    <HelperTextItem component="li">
      Some helper text content
    </HelperTextItem>
    <HelperTextItem component="li">
      Some other helper text content
    </HelperTextItem>
  </HelperText>
  ```
- Structure the helper text as a `ul` element and each helper text item as a `li` element if there is more than one helper text item.
- Make the helper text component an `aria-live` region if the helper text item(s) have static text and styling, but will dynamically render.
- Ensure there is visually hidden text for assistive technologies such as screen readers that conveys the status type if the helper text item has static text and will always be rendered, but the styling will dynamically update.
- Avoid passing interactive content as helper text.

## Testing

At a minimum, a helper text should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="helperText-a11y-checkbox-1" label={<span>Each helper text item has an <code className="ws-code">id</code> attribute, whose value is also passed to the main element's <code className="ws-code">aria-describedby</code> attribute.</span>} description="This allows a user navigating via assistive technologies such as a screen reader to have the helper text content announced to them without having to move focus from the main element." />
  </ListItem>
  <ListItem>
    <Checkbox id="helperText-a11y-checkbox-2" label={<span>If there are multiple helper text items, the helper text component is structured as a <code className="ws-code">ul</code> element and the helper text items are structured as <code className="ws-code">li</code> elements.</span>} description="This lets users known how many helper text items there are within a single helper text component when navigating via assistive technologies such as a screen reader." />
  </ListItem>
  <ListItem>
    <Checkbox id="helperText-a11y-checkbox-3" label="If the helper text item(s) are intended to have static text and styling, but be dynamically rendered, the helper text component is made into a live region." description={<span>The <code className="ws-code">aria-live</code> value should be "polite" when doing so. This will announce to users of assistive technologies when new helper text has rendered, keeping them informed of any remaining criteria or issues that need to be addressed.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="helperText-a11y-checkbox-4" label="If the helper text item(s) are intended to have static text and always be visible, but have dynamic styling, ensure there is visually hidden text within the helper text item that conveys its status type." description={<span>This is best achieved by using our <code className="ws-code">pf-v5-screen-reader</code> class.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="helperText-a11y-checkbox-5" label="There is no interactive content in any helper text items." />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels a helper text list]"` | `HelperText` | Adds an accessible name to the helper text component. Should only be passed when the `component` prop has a value of `"ul"`, especially when there are multiple helper text components on a page. Doing so will help differentiate the lists for users navigating via rotor menus. |
| `component="ul"` | `HelperText` | Sets the wrapper element of the helper text component to an unordered list. **Required** when the helper text component is intended or expected to include multiple helper text items. |
| `id` | `HelperText` | Sets the `id` attribute of the helper text component, which can be passed to the main element's `aria-describedby` attribute when there are multiple helper text items that should all be announced. |
| `isLiveRegion` | `HelperText` | Makes the helper text component a live region with a value of `"polite"`. **Required** when helper text item(s) are intended or expected to have static text, but dynamically render. |
| `component="li"` | `HelperTextItem` | Sets the wrapper element of the helper text item to a list item. **Required** when `HelperText` has `component="ul"` passed in. |
| `id` | `HelperTextItem` | Sets the `id` attribute of the helper text item, which should be passed to the main element's `aria-describedby` attribute. |
| `screenReaderText="[text that conveys status type]"` | `HelperTextItem` | Renders visually hidden text when the `isDynamic` prop is also passed in. Typically this should convey the status type of the helper text item, and will render immediately after the item text. |
| `variant="[default, indeterminate, warning, error, or success]"` | `HelperTextItem` | Sets the text styling and icon. This prop should only be passed in when the helper text item should visually convey some sort of status. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels a helper text list]"` | `ul.pf-v6-c-helper-text` | Adds an accessible name to the helper text component. Should be passed when there are multiple helper text components on a page. Doing so will help differentiate the lists for users navigating via rotor menus. |
| `aria-live="polite"` | `.pf-v6-c-helper-text` | Makes the helper text component a live region. **Required** when helper text item(s) are intended or expected to have static text, but dynamically render. |
| `id` | `.pf-v6-c-helper-text` | Sets the `id` attribute of the helper text component, which can be passed to the main element's `aria-describedby` attribute when there are multiple helper text items that should all be announced. |
| `role="list"` | `ul.pf-v6-c-helper-text` | Indicates that the helper text component is a list element. **Required**.<br/><br/>This role is redundant since `.pf-v6-c-helper-text` can be a `<ul>` element, but it is required for assistive technologies to announce the list properly. |
| `id` | `.pf-v6-c-helper-text__item` | Sets the `id` attribute of the helper text item, which should be passed to the main element's `aria-describedby` attribute if the `.pf-v6-c-helper-text` element is not given an `id` instead. |
| `aria-hidden="true"` | `.pf-v6-c-helper-text__item-icon > i` | Removes the helper text item icon from the accessibility tree, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required**. |
| `.pf-v5-screen-reader` | `.pf-v6-c-helper-text__item.pf-m-dynamic > span` | Renders visually hidden text that is accessible only to assistive technologies such as a screen reader. **Required** if the helper text item is intended or expected to contain static text and always be visible, but have dynamic styling. Typically this should convey the status type of the helper text item. |
 