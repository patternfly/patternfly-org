---
id: Code editor
section: components
---

A **code editor** is the open sourced monaco code editor wrapped in PatternFly controls and styles. PatternFly does not 
manage the interactions or the code for the monaco editor itself. 

**Keyboard users** should be able to focus on the code editor controls using **Tab** to move forward and 
**Tab + Shift** to move backward through interactive elements. They should be able to select a focused control 
using **Space** or **Enter**. Keyboard users should also be able to move focus onto the monaco
code editor using **Tab**, and then into the monaco code editor using the **Down arrow**. If focus is in the monaco 
code editor, the user should be able to use **Tab + Shift** to move focus out of the monaco code editor.

**Screen reader users** should be able to navigate through the code editor controls, as well as into and out of the 
monaco code editor. Each control should have an aria-label since they are designed to display only an icon with a 
Tooltip. The Tooltips are not announced by the screen reader, so the aria-label must be descriptive and clear.

The following props/attributes have been added for you or are customizable in PatternFly:

| React prop | React component it should be applied to | Which HTML element it appears on in markup | Reason used |
| -- | -- | -- | -- |
| copyButtonAriaLabel | CodeEditor | `.pf-c-code-editor__controls button` | Aria-label for the copy button |
| downloadButtonAriaLabel | CodeEditor | `.pf-c-code-editor__controls button` | Aria-label for the download button |
| uploadButtonAriaLabel | CodeEditor | `.pf-c-code-editor__controls button` | Aria-label for the upload button |
| 'aria-label' | CodeEditorControl | `.pf-c-code-editor__controls button` | Aria-label for a custom control button |
| shortcutsPopoverButtonText | CodeEditor | `.pf-c-code-editor__keyboard-shortcuts` | Text to show in the button to open the shortcut popover |
| shortcutsPopoverProps | CodeEditor | `.pf-c-code-editor__controls button` | Properties for the shortcut popover. Should contain 'bodyContent' to provide keybaord shortcuts built into the code editor |

The monaco code editor comes with some keyboard shortcuts built in, so it is recommended that consumers communicate 
information about the following built in key commands:

| Opt + F1 | Accessibility helps |
| F1 | View all editor shortcuts |
| Ctrl + Space | Activate auto complete |
| Cmd + S | Save |

Additionally, when implementing a **code editor**, a developer can add additional keyboard controls by adding a command
to the `editor` parameter passed via the `onEditorDidMount` prop. For example:
```
onEditorDidMount = (editor, monaco) => {
    editor.addCommand(monaco.KeyMod.Shift | monaco.KeyCode.Space, () => {console.log("hello")});
};
```