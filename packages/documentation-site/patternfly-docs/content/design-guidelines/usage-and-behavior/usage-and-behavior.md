---
id: Usage and behavior
section: design-foundations
---

# PatternFly component usage and behavior guidelines

As you design with PatternFly, you might encounter common use cases where multiple components could be used. These guidelines outline which component to use in these situations and shares where to find more detailed usage guidelines.

## Displaying structured data
Structured data includes any information that is stored in a database or similar regular data structure. Most commonly, structure data is displayed in either a list or a table, where rows correspond to records in the database. To display this type of content, we recommend using the **[data list](/components/data-list)** and the **[table](/components/table)** components.

- Tables are built from a standard tabular structure of rows and columns. 

- Data lists support any valid HTML layout inside of a row, which enables more formatting flexibility.

Your use case dictates which of these components you should use:

| **Use case** | **Recommended component** |
|----------| ---------- |
| You want to display data in a grid with column headings. | Table |
| Data does not easily fit into a grid or you want multiple lines of data in a row. | Data list |
| You want to display non-text information like images or charts. | Data list or table <br /><br /> **Note:** Tables support graphics within cells, but this approach is only recommended for use with small graphics. |
| All rows don’t have the same format. | Data list |

## Providing contextual help on a page
Contextual help includes any on-screen elements intended to guide the user towards additional information that will help them complete a task. To display this type of content, we recommend using the **[tooltip](/components/tooltip)**, **[popover](/components/popover)**, and **[hint](/components/hint)** components. 

- Tooltips are shown when users hover over an element. 

- Popovers can be shown on hover or click, can contain any HTML content, and are persistent. 

- Hints are static elements that appear inline with other content on a page.

Your use case dictates which of these components you should use:

| **Use case** | **Recommended component** |
|------------------------ | -----------|
| You want to provide a short (no more than 1-2 lines) explanation of new or unfamiliar UI elements as a simple text string that is only shown “on-demand.” |Tooltip|
| You want to include formatted text and/or interactive elements in your message body. | Hint or popover |
| You want the information to persist until the user dismisses it. | Hint or popover |
|You want the information to be announced by a screen reader whenever the user tabs to an element.| Hint, popover, or tooltip <br /><br /> **Note:** By default, popovers are only triggered when the user clicks on an element. Therefore screen readers will not read popover text when tabbing through an interface. If a popover is triggered on hover (optional behavior), it will behave like a tooltip and its content will be announced whenever a keyboard user tabs to the trigger element. |
|You want to present additional information that might not be necessary or relevant to all users.| Hint or popover <br /><br /> **Note:** Hints can be used to convey information to advanced users (such as “pro-tips”). However, since a hint adds static content to a page, you should consider whether it’s important for this information to be shown at all times.|

## Progressive disclosure
Progressive disclosure is the practice of showing and hiding information as needed, in order to simplify a user interface. To progressively disclose content, we recommend using the **[accordion](/components/accordion)**, **[expandable sections](/components/expandable-section)**, and **[expandable field groups](/components/forms/form/#field-groups)**.

- Accordions allow content to be placed in stackable, expandable containers so that content can be hidden from view to simplify presentation and reduce the need for scrolling.

- Expandable sections allow designers to hide a single block of content or settings behind a show/hide link. 

- Expandable field groups allow designers to group form elements into expandable containers.

Your use case dictates which of these components you should use:

| **Use case** | **Recommended component** |
| ------------------------ | ----------- |
| You want to group a list of actions, links, or other data into expandable groups. | Accordion |
|You want to hide advanced or seldomly used options within a form.| Expandable section or field group |
|You want to give the user the ability to show or hide chunks of information on a long scrolling page.| Expandable section |

## Inputting data within forms
Data input controls allow users to input information into a form. Input may be bound or unbound. Bound input controls only allow users to input data within a defined range, such as the **[slider](/components/slider)** and **[number input](/components/number-input)** components. Unbound controls do not enforce constraints, such as the **[text input](/components/forms/text-input)** and **[text area](/components/forms/text-area)** components.

Your use case dictates which of these components you should use:

| **Use case** | **Recommended component** |
|------------------------ | -----------|
|You want to enter text from the keyboard. Possible values are alpha-numeric, unconstrained, or dependent on context.| Text area or text input <br /><br /> **Note:** If data will always be constrained to a single line, use a text input. Use a text area component for multi-line input.|
|You want to constrain the input of numeric data to a specified range.|Number input, slider, text input, or text area <br /><br /> **Note:** You can use a standard text input for this use case and validate the entered value, but using a number input or slider will be a more direct way to constrain the values that a user can input. |
|You want to optimize numeric data entry for direct manipulation by touch or using the mouse over the keyboard.|Number input or slider|
|It’s useful for users to visualize where numeric input falls within the range of possible values.| Slider |

## Selecting between options on a form
There are a few components that you can use to allow users to select form options. Depending on the nature of options being presented, we recommend using the **[checkbox](/components/forms/checkbox)**, **[radio](/components/forms/radio)**, or **[switch](/components/switch)** components. 

- Checkboxes allow users to select one or more items from a list of options. 

- Radio buttons allow users to select from a set of mutually exclusive options.

- Switches indicate the state of a binary setting or object (such as on/off, enabled/disabled).

Your use case dictates which of these components you should use:

| **Use case** | **Recommended component** |
|------------------------ | -----------|
|The user wants to select one or more items from a list of items. | Checkbox or switch <br /><br /> **Note:** Switches are sometimes used in place of checkboxes because they provide a larger touch target than a checkbox, which improves the mobile experience. |
| The user wants to select from a set of mutually exclusive options.| Radio |
|The user wants to enable an option or feature.| Checkbox, radio, or switch <br /><br /> **Note:** Checkboxes are often used to enable or disable software features, because they allow you to concisely display on/off settings. <br /><br /> **Note:** You can use 2 radio buttons to allow users to choose between options like on/off or enabled/disabled, however this approach uses more space and is only recommended when it’s important to make both labeled options visible at the same time.|

## Displaying progress
It’s important to display progress for action that will take more than a few seconds to complete. Use the **[progress](/components/progress)** component to show users the percentage of completion for a process or task. Use the **[spinner](/components/spinner)** and **[skeleton](/components/skeleton)** components to just simply indicate activity while the user is waiting for an action to complete.

Your use case dictates which of these components you should use:

| **Use case** | **Recommended component** |
|------------------------ | -----------|
| The user is waiting for a process to complete, but the time left until completion is not known.| Spinner |
|The user is waiting for a process to complete, but the time left until completion is known.| Progress or spinner <br /><br /> **Note:** A progress component is the preferred recommendation when it is possible to estimate the time to completion or the percentage of the task that is done.|
| The user is progressing through a step-by-step task and you want to reflect where they are in the process.| Progress |
|The user is waiting for a page to load.| Progress, skeleton, or spinner <br /><br /> **Note:** Progress bars are not typically used during page loading, but could be used with the skeleton component if you want to provide the user with more information about time to completion. <br /><br /> **Note:** Spinners may be used to provide feedback on page loading when the details of the data are not known. |

## Displaying object details in context
It is often necessary to display more details about an object listed in a summary view, such as a list or a table. This can be accomplished by drilling-down into a new page or presenting contextual details on the same page. To take these approaches, we recommend using the **[data list](/components/data-list)**, **[drawer](/components/drawer)**, **[table](/components/table)**, and **[popovers](/components/popover)** components.

- Data lists and tables support expandable rows for displaying object details directly in the list or table. 

- Drawers can be used to create a side-by-side primary-detail view. 

- Popovers can be used to display details about an object in a list or table.

Your use case dictates which of these components you should use:

| **Use case** | **Recommended component** |
|------------------------ | -----------|
|You want to view details of multiple objects at the same time for comparison.| Data list or expandable table row |
|Your detailed data is best presented in a horizontal format.| Data list, drawer, expandable table row, or popover <br /><br /> **Note:** Drawers can be attached to either the left, right, or bottom edge of the parent container. To present horizontal data, use a bottom/horizontal drawer to create a top-bottom primary-detail view.|
|Your detailed data is best presented in a vertical format.| Drawer or popover|
|You have only a small amount of detailed data to show.|Data list, drawer, expandable table row, or popover <br /><br /> **Note:** Row expansions and drawers can accommodate any amount of information. Showing a small amount of data within a row expansion or drawer may waste space because each presentation type will consume the full width or height of its parent container. Popovers will adjust to the size and shape of their contents.|
|You don’t want to cover other information while displaying details.|Data list, drawer, or expandable table row <br /><br /> **Note:** Both inline and overlay drawers are available. If you don’t want to cover content on a page, we recommend the [inline drawer](/components/drawer#basic-inline) variation. |

## Dropdown menus for actions and selections
To allow users to select between items in a menu, we recommend using the **[select](/components/menus/select)**, **[options](/components/menus/options-menu)**, or **[dropdown](/components/menus/dropdown)** menu components.

- Select menus allow users to select one or more values from a list. 

- Options menus are similar to a select, but are more appropriate when users make selections from optional settings. 

- Dropdown menus allow you to expose a list of possible actions.

Your use case dictates which of these components you should use:

| **Use case** | **Recommended component** |
|------------------------ | -----------|
|You want to select a value or multiple values from a list.| Select |
|You want to select filter terms from a list.| Select |
|You want to make the selected value visible when the menu is closed.| Select |
|You want to select options from one or more lists (sorting options, for example).| Options menu |
|You want to expose a list of commands or actions in a limited space.| Dropdown |
