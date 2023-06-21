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

    ```noLive
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
    ```noLive
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
- Pass in the `isLiveRegion` prop to the HelperText component when you expect or intend for any helper text items to dynamically update in some way. This can include text that only renders in a specific situation, or when the text itself will change.
    - Only content within the accessibility tree will be announced when updated. CSS updates and updates to text that is hidden via the `aria-hidden` attribute (such as any helper text icons) will not be announced.

The following props/attributes have been added for you or are customizable in PatternFly:

| React prop/attribute | React component that it should be applied to | Which HTML element it appears on in markup | Reason used |
| -- | -- | -- | -- |
| `aria-describedby` | TextInput or another form component |  | Used to pass in one or more `id`'s as a string, allowing assistive technologies to announce the helper text content to users. |
| `id` | HelperText \| HelperTextItem | .pf-v5-c-helper-text \| .pf-v5-c-helper-text__item | Used to pass into a form component's `aria-describedby` prop. |
| `isLiveRegion` | HelperText | .pf-v5-c-helper-text | Creates an `aria-live="polite"` live region, which allows assistive technologies to announce content updates within it. |