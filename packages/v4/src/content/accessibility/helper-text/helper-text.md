---
id: Helper text
section: components
---

**Helper text** is text that often accompanies inputs and other form components. It can be static text that provides additional or clarifying information and will never change, or it can be dynamic text that gets rendered or updated based on user interaction or input.

**Keyboard users** should not be able to place focus on any helper text, as it is not an interactive element.

**Screen reader users** should have static helper text announced to them via the `aria-describedby` attribute when focus is placed on a form component, and they should also have dynamic helper text announced to them via the `aria-live` attribute when the text content gets updated.

## Accessibility application

To ensure helper text is used accessibly, follow these steps when applicable: 

- When there is helper text that won't ever update based on user interaction or input, ensure that the helper text is linked to the form component's `aria-describedby` attribute. This can be accomplished by adding an `id` attribute to either the HelperText or HelperTextItem component.
    - Link the HelperText component when all of the helper text should be announced to users. Otherwise link the HelperTextItem component(s) if only specific helper text should be announced.

    ```
    <TextInput aria-describedby="helper-text" />
    
    <HelperText id="helper-text">
      <HelperTextItem>
        This will be announced.
      </HelperTextItem>
      <HelperTextItem>
        This will also be announced.
      </HelperTextItem>
    </HelperText>
    ```
    ```
    <TextInput aria-describedby="helper-text-item" />
    
    <HelperText>
      <HelperTextItem id="helper-text-item">
        Only this will be announced.
      </HelperTextItem>
      <HelperTextItem>
        This will will not be announced since it is not linked.
      </HelperTextItem>
    </HelperText>
    ```
- Pass in the `aria-live` attribute to the HelperText component when you expect or intend for any helper text to dynamically update in some way. This can include text that only renders in a specific situation, or when the text itself will change.
    - Only content within the accessibility tree will be announced when updated. CSS updates and updates to text that is hidden via the `aria-hidden` attribute (such as any helper text icons) will not be announced.
    - Use `aria-live="polite"` to ensure that users will be notified of content updates only after any current activity from a screen reader has completed. Using a value of `"assertive"` should be avoided unless there is a time-sensitive or critical notification, as this will usually interrupt any current activity from a screen reader. 

The following props/attributes have been added for you or are customizable in PatternFly:

| React prop/attribute | React component that it should be applied to | Which HTML element it appears on in markup | Reason used |
| -- | -- | -- | -- |
| `aria-describedby` | TextInput or another form component |  | Used to pass in one or more `id`'s as a string, allowing assistive technologies to announce the helper text content to users. |
| `id` | HelperText \| HelperTextItem | .pf-c-helper-text \| .pf-c-helper-text__item | Used to pass into a form component's `aria-describedby` prop. |
| `aria-live` | HelperText | .pf-c-helper-text | Creates a live region, which allows assistive technologies to announce content updates within it. |