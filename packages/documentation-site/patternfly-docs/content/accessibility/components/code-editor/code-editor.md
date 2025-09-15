---
id: Code editor
section: components
---

import { Checkbox, List, ListItem } from '@patternfly/react-core';

## Accessibility

To implement an accessible PatternFly **code editor**:

- Ensure any code editor controls can be navigated to and interacted with via keyboard and other assistive technologies such as screen readers.
- Provide descriptive `aria-label` and tooltips to code editor controls that only display an icon. Refer to our [tooltip accessibility](/components/tooltip/accessibility) documentation for more information on accessible tooltips.
- Update a tooltip's content if the code editor control triggers an action that isn't immediately obvious to users, such as clicking a "copy to clipboard" control.
- Provide a shortcuts menu that can be accessed via mouse, keyboard, or other assistive technologies such as screen readers, especially when using custom, unfamiliar shortcuts.
- Include keyboard shortcuts for both PC and Mac keyboards

## Testing

At a minimum, a chip and chip group should meet the following criteria:

<List isPlain>
  <ListItem>
    <Checkbox id="codeEditor-a11y-checkbox-1" label="Standard keyboard navigation can be used to navigate between code editor controls and the code editor itself." description={<span><kbd>Tab</kbd> navigates to the next control or to the code editor, <kbd>Down Arrow</kbd> while the code editor wrapper is focused navigates into the code editor, and <kbd>Shift</kbd> + <kbd>Tab</kbd> navigates to the previous control or out of the code editor.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="codeEditor-a11y-checkbox-2" label="Standard keyboard interaction can be used to activate or trigger a code editor control." description={<span><kbd>Enter</kbd> or <kbd>Space</kbd> should activate or trigger a button control.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="codeEditor-a11y-checkbox-3" label={<span>Each code editor control has either descriptive visible text content or, if the control content is an icon, a descriptive <code className="ws-code">aria-label</code> and tooltip</span>} description={<span>An <code className="ws-code">aria-label</code> will provide an accessible name to the control itself for assistive technologies such as screen readers, while a tooltip will convey the same information visually to users navigating via keyboard only.</span>} />
  </ListItem>
  <ListItem>
    <Checkbox id="codeEditor-a11y-checkbox-4" label="If a code editor control triggers an action or change that isn't made immediately obvious to users, a tooltip's content is updated to convey the action was successful." description={`For example, clicking a control that copies content to the clipboard does not on its own convey that the action successfully triggered. Updating the tooltip content to "Copied to clipboard" will notify users that the action was successful.`} />
  </ListItem>
  <ListItem>
    <Checkbox id="codeEditor-a11y-checkbox-5" label="If the code editor has keyboard shortcuts, a shortcuts menu is provided and navigable via keyboard." description="A shortcuts menu must be provided especially when the code editor has custom, unfamiliar controls." />
  </ListItem>
  <ListItem>
    <Checkbox id="codeEditor-a11y-checkbox-6" label="If the code editor has keyboard shortcuts, the keyboard shortcuts include the keys for both PC and Mac keyboards." />
  </ListItem>
</List>

## React customization

The following React props have been provided for more fine-tuned control over accessibility.

| Prop | Applied to | Reason | 
|---|---|---|
| `copyButtonAriaLabel="[text that labels the copy button]"` | `CodeEditor` | Adds an accessible name to the code editor's copy button. |
| `copyButtonSuccessTooltipText="[tooltip text to display upon successful copy]"` | `CodeEditor` | Provides text to the code editor's copy button after being clicked. This should typically be a succinct success message, such as "Copied to clipboard". |
| `copyButtonToolTipText="[tooltip text to display for the copy button]"` | `CodeEditor` | Text to display inside the code editor's copy button tooltip. This should typically be the same as the `copyButtonAriaLabel`. |
| `downloadButtonAriaLabel="[text that labels the download button]"` | `CodeEditor` | Adds an accessible name to the code editor's download button. |
| `downloadButtonToolTipText="[tooltip text to display for the download button]"` | `CodeEditor` | Text to display inside the code editor's download button tooltip. This should typically be the same as the `downloadButtonAriaLabel`. |
| `toolTipCopyExitDelay={[number in millseconds]}` | `CodeEditor` | The delay in milliseconds before the code editor's copy button tooltip transitions out. Typically it is best to avoid making this delay `0` or too low in general, as it may make it difficult for users with motor control issues to hover the tooltip and keep it displayed long enough to read its content. |
| `toolTipDelay={[number in millseconds]}` | `CodeEditor` | The delay in milliseconds before any of the code editor's tooltips transition out. Typically it is best to avoid making this delay `0` or too low in general, as it may make it difficult for users with motor control issues to hover the tooltip and keep it displayed long enough to read its content. |
| `uploadButtonAriaLabel="[text that labels the upload button]"` | `CodeEditor` | Adds an accessible name to the code editor's upload button. |
| `uploadButtonToolTipText="[tooltip text to display for the upload button]"` | `CodeEditor` | Text to display inside the code editor's upload button tooltip. This should typically be the same as the `uploadButtonAriaLabel`. |
| `aria-label="[text that labels the code editor control button]"` | `CodeEditorControl` | Adds an accessible name to the code editor control button. |
| `tooltipProps={{props object for the code editor control tooltip}}` | `CodeEditorControl` | An object of tooltip props for the code editor control button. Refer to our [tooltip props](/components/tooltip#props) documentation for more information. Typically the `content` of a code editor control tooltip should be the same as its `aria-label`. |

## HTML/CSS customization

The following HTML attributes and PatternFly classes can be used for more fine-tuned control over accessibility.

| Attribute or class | Applied to | Reason | 
|---|---|---|
| `aria-label="[text that labels the code editor control]"` | `.pf-v6-c-code-editor__controls > button` | Adds an accessible name to a code editor control button. **Required** when the control button content is only an icon. |
| `aria-hidden="true"` | `.pf-v6-c-code-editor__controls > button > i` | Removes the control button icon from the accessibility tree, preventing assistive technologies from potentially announcing duplicate or unnecessary information without visually hiding it. **Required** if the control button contains an icon. |
