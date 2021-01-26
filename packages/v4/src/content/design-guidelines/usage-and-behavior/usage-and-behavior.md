---
id: Usage and behavior
section: Guidelines
related: 
---

## Displaying structured data
Structured data includes any information that is stored in a database or similar regular data structure. The most common ways of presenting structured data are to display it in either a list or a table where rows correspond to records in the database. PatternFly supports two controls for displaying this type of data: the [Data list](/components/data-list) and the [Table](/components/table).

Tables are built from a standard tabular structure of rows and columns. Data lists support any valid HTML layout inside of a row and therefore allow more formatting flexibility. The following table lists some common use cases and recommendations on what component to use.

|                         | [Table](/components/table) | [Data list](/components/data-list) |
|------------------------ | :---: | :-------: |
|You want to display data in a grid with column headings | ✔ | ⛔ |
|Data does not easily fit into a grid or you want multiple lines of data in a row | ⛔ | ✔ |
| You want to display non-text information like images or charts | ✔ [1] | ✔ |
| All rows don’t have the same format | ⛔ | ✔ |

[1] Tables will support inclusion of graphical objects within a cell, but this approach is only recommended when small graphical or media objects are needed.

See the related component design guidelines for more specific guidance and examples.
