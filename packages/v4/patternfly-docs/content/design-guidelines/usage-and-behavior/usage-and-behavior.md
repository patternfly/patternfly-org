---
id: Usage and behavior
section: guidelines
---

As you design with PatternFly, you might encounter common use cases where multiple components apply. This page gives advice for which component to use in these situations and shares where to find more detailed usage guidelines.

## Displaying structured data
Structured data includes any information that is stored in a database or similar regular data structure. The most common ways of presenting structured data are to display it in either a list or a table where rows correspond to records in the database. PatternFly supports two controls for displaying this type of data: the [data list](/components/data-list) and the [table](/components/table).

Tables are built from a standard tabular structure of rows and columns. Data lists support any valid HTML layout inside of a row and therefore allow more formatting flexibility.

|           Use case              | [Table](/components/table) | [Data list](/components/data-list) |
|------------------------ | :---: | :-------: |
|You want to display data in a grid with column headings | ✔ | ⛔ |
|Data does not easily fit into a grid or you want multiple lines of data in a row | ⛔ | ✔ |
| You want to display non-text information like images or charts | ✔ [1] | ✔ |
| All rows don’t have the same format | ⛔ | ✔ |

**[1]** Tables will support inclusion of graphical objects within a cell, but this approach is only recommended when small graphical or media objects are needed.

## Providing contextual help on a page
Contextual help can include any on-screen elements intended to guide the user in getting additional information to help them complete a task. Components for displaying contextual help on a page can include [tooltips](/components/tooltip), [popovers](/components/popover), and [hints](/components/hint). Tooltips display whenever the user hovers over an element. Popovers can be shown on hover or click, can contain any HTML content, and are persistent. Hints are static elements that appear inline with other content on a page.


|   Use case              |[Tooltip](/components/tooltip) | [Popover](/components/popover) | [Hint](/components/hint) |
|------------------------ | :---: | :-------: | :---------------: |
|You want to provide a short (no more than 1-2 lines) explanation of new or unfamiliar UI elements as a simple text string that is only shown “on-demand.”|✔|⛔ | ⛔ |
|You want to include formatted text and/or interactive elements in your message body.|⛔|✔|✔|
|You want the information to persist until the user dismisses it.|⛔|✔|✔|
|You want the information to be announced by a screen reader whenever the user tabs to an element.|✔|✔ [1]|✔|
|You want to present additional information that might not be necessary or relevant to all users.|⛔|✔|✔[2]|

**[1]** By default, popovers are only triggered when the user clicks on an element and therefore will not be read by a screen reader when tabbing through an interface. If a popover is triggered on hover (optional behavior), it will behave like a tooltip and its content will be displayed whenever the keyboard user tabs to the trigger element.

**[2]** Hint could be used to convey information to advanced users (“pro-tips,” for example). However because a hint adds static content directly to the page, consider whether it’s important for this information to be shown at all times.

## Progressive disclosure
Progressive disclosure is the practice of hiding information or providing it only when needed in order to simplify a user interface. PatternFly supports several components that can be used to progressively disclose information on a page. The [accordion](/components/accordion) component allows content to be placed in stackable, expandable containers so that content can be hidden from view to simplify presentation and reduce the need for scrolling. [Expandable sections](/components/expandable-section) allow designers to hide a single block of content or settings behind a show/hide link. [Expandable field groups](/components/form) allow designers to group form elements into expandable containers.

| Use case | [Accordion](/components/accordion) | [Expandable section](/components/expandable-section) | [Field groups](/components/form)|
|---- | :----: | :----: | :----: |
|You want to group a list of actions, links, or other data into expandable groups.|✔|⛔|⛔|
|You want to hide advanced or seldomly used options within a form.|⛔|✔|✔|
|You want to give the user the ability to show or hide chunks of information on a long scrolling page.|⛔|✔|⛔

## Inputting data on forms
Data input controls allow the user to input information into a form. There are two types of input controls for bound and unbound input. Bound input controls are constrained to only input data within a defined range. Examples of bound input controls include [sliders](/components/slider) and [number inputs](/components/number-input). Unbound controls do not enforce constraints on entry and include [text inputs](/components/text-input) and [text area](/components/text-area) controls.

| Use case | [Text input](/components/text-input) or [text area](/components/text-area) | [Number input](/components/number-input) | [Slider](/components/slider) |
|------------------------ | :----: | :----: | :----: |
|You want to enter text from the keyboard. Possible values are alpha-numeric, unconstrained, or dependent on context.|✔ [1]|⛔|⛔|
|You want to constrain the input of numeric data to a specified range.|✔ [2]|✔|✔|
|You want to optimize numeric data entry for direct manipulation by touch or using the mouse over the keyboard.|⛔|✔|✔|
|It’s useful for users to visualize where numeric input falls within the range of possible values.|⛔|⛔|✔|

**[1]** If data will always be constrained to a single line, use a text input, otherwise use a text area component for multi-line input.

**[2]** It’s possible to use a standard text input for this use case and validate the entered value, but using either a number input or slider will be a more direct way to constrain the values that a user can input.

## Selecting between options on a form
Depending on the nature of options being presented, [checkbox](/components/checkbox), [radio](/components/radio), or [switch](/components/switch) components may be used. Checkboxes are used to select one or more items from a list of options. Radio buttons are used to select from a set of mutually exclusive options. Switches indicate the state of a binary setting or object — on or off, enabled or disabled.


| Use case | [Checkbox](/components/checkbox) | [Radio](/components/radio) | [Switch](/components/switch) |
|------------------------ | :---: | :-------: | :---------------: |
|The user wants to select one or more items from a list of items.|✔|⛔|✔ [1]|
|The user wants to select from a set of mutually exclusive options.|⛔|✔|⛔|
|The user wants to enable an option or feature.|✔ [2]|✔ [3]|✔|


**[1]** Switches are sometimes used in place of checkboxes in this use case. The advantage of a switch is that it is more mobile friendly as it provides a larger touch target than the standard checkbox.

**[2]** Checkboxes are often used to enable or disable (turn on or off) a feature in software. They provide a concise way to expose on/off settings while being less explicit than a switch.

**[3]** You could use two radio buttons to support choosing between on/off or enabled/disabled options, however this approach uses more space and is not recommended unless it’s important to make both labeled options visible at the same time.

## Displaying progress
It’s important to display progress as a method of providing user feedback for operations that will take more than a few seconds. Use the [progress](/components/progress) component to provide feedback on the percentage of completion for a process or task. Use the [spinner](/components/spinner) and [skeleton](/components/skeleton) components to just indicate activity while the user is waiting for an action to complete.

| Use case | [Progress](/components/progress) | [Spinner](/components/spinner) | [Skeleton](/components/skeleton) |
|------------------------ | :---: | :-------: | :---------------: |
| The user is waiting for a process to complete, but the time left until completion is not known.|⛔|✔|⛔|
|The user is waiting for a process to complete, but the time left until completion is known.|✔|✔ [1]|⛔|
|The user is progressing through a step-by-step task and you want to reflect where they are in the process.|✔|⛔|⛔|
|The user is waiting for a page to load.|✔ [2]|✔ [3]|✔|


**[1]** Although a spinner could be used in this situation, using a progress component is always the preferred method when it is possible to estimate the time to completion or the percentage of the task that is done.

**[2]** Progress bars are not typically used during page loading, but could be used together with skeleton loading if you want to provide the user with more information about time to completion.

**[3]** Spinners may be used to provide feedback on page loading when the shape of the data is not known.

## Displaying object details in context
It is often necessary to display more details about an object listed in a summary view like a list or a table. This can be accomplished by drilling-down into a new page or presenting details on the same page (in context). Three approaches can be used for in-context presentation of object details. Both the [data list](/components/data-list) and [table](/components/table) components support expandable rows for displaying object details directly in the list or table. The [drawer](/components/drawer) component can also be used to create a side-by-side primary-detail view. [Popovers](/components/popover) can also be useful for displaying details about an object in a list or table.

|Use case | [Data list](/components/data-list) or [table](/components/table) row expansion | [Drawer](/components/drawer)| [Popover](/components/popover) |
|------------------------ | :---: | :-------: | :---------------: |
|You want to view details of multiple objects at the same time for comparison.|✔|⛔|⛔|
|Your detailed data is best presented in a horizontal format.|✔|✔ [1]|✔|
|Your detailed data is best presented in a vertical format.|⛔|✔|✔|
|You have only a small amount of detailed data to show.|✔ [2]|✔|✔|
|You don’t want to cover other information while displaying details.|✔|✔ [3]|⛔|

**[1]** Drawers can be attached to either the left, right, or bottom edge of the parent container. To present horizontal data, use a bottom/horizontal drawer to create a top-bottom primary-detail view.

**[2]** Row expansions and drawers can accommodate any amount of information. Showing a small amount of data within a row expansion or drawer may waste space because each presentation type will consume the full width or height of its parent container. Popovers will adjust to the size and shape of their contents.

**[3]** Both inline and overlay drawers are available. If you don’t want to cover content on a page, we recommend the [inline drawer](/components/drawer#basic-inline) variation.

## Dropdown menus for actions and selections
PatternFly provides three types of dropdown components for selecting between items in a menu. The [select](/components/select) component is used to select one or more values from a list. The [options menu](/components/options-menu) is similar to a select but is more often used for selecting between optional settings. [Dropdowns](/components/dropdown) are used to expose a list of possible actions.

| Use case | [Select](/components/select) | [Options menu](/components/options-menu) | [Dropdown](/components/dropdown) |
|------------------------ | :---: | :-------: | :---------------: |
|You want to select a value or multiple values from a list.|✔|⛔|⛔|
|You want to select filter terms from a list.|✔|⛔|⛔|
|You want to make the selected value visible when the menu is closed.|✔|⛔|⛔|
|You want to select options from one or more lists (sorting options, for example).|⛔|✔|⛔|
|You want to expose a list of commands or actions in a limited space.|⛔|⛔|✔|
