---
id: Truncate 
section: components
---

import '../components.css';

## Elements

<div class="ws-docs-content-img">
![A text input field containing a string truncated in the middle with an ellipsis. A black tooltip below shows the full text string.](./img/truncate.svg)
</div>

1. **Content:** A long text string that requires truncation.
2. **Ellipsis:** The truncation indicator (...) placed at the start, middle, or end of a string, depending on the [variation](#variations).
3. **Tooltip:** The message shown on hover to display the full text string.  

## Usage
Truncated items are indicated by an ellipsis (...) and are used to reduce multiple lines of text or when a container is being overflowed by content. Truncation should only be used when 3 or more characters are being represented and there are still at least 4 non-truncated characters displayed. 

Truncated items should always include a tooltip on hover, showcasing the full string sequence. 

### Breadcrumbs
Use a breadcrumbs truncate when there isn’t enough room to display the entire breadcrumbs list, or to manage relevance.

<div class="ws-docs-content-img">
![A row of text strings separated by right-angle carets. Between the first two strings, an ellipsis replaces text, and a black tooltip displays "Breadcrumb 2 Breadcrumb 3" to show the truncated items.](./img/breadcrumb-truncate.svg)
</div>

### Long URLs
Use a URL truncate when the URL overflows its container.

<div class="ws-docs-content-img">
![A URL path truncated in the middle by an ellipsis. A black tooltip is displayed above the path showing the full URL.](./img/long-url.svg)
</div>

### Description text/alerts
Use a truncate for description text to create more room on the page.

<div class="ws-docs-content-img">
![Two alert components, one with a title that is truncated at the end with an ellipsis, and one where the description is truncated.](./img/text-alerts.svg)
</div>

### Table inputs
Use truncation when the data within a table overflows its container. If a table column is resizable, the truncated text should adjust accordingly. 

<div class="ws-docs-content-img">
![A data table where one column contains truncated text. An ellipsis appears at the end of the cell content to indicate it has been shortened, and a tooltip displays the full context.](./img/table-truncate.svg)
</div>

## Behavior
A truncate component indicates that a text string has been shortened. When a user hovers over truncated text, the full text will be displayed as a tooltip.

## Variations

### Default (end)
The default truncate is used at the end of a text string to shorten the sequence and indicate that there is more content located elsewhere. 

<div class="ws-docs-content-img">
![A text string where the last several characters are replaced by an ellipsis at the end of the line.](./img/end-line.svg)
</div>

### Start
A start truncate is used at the beginning of a text string to indicate the text is being continued from a previous location. 

<div class="ws-docs-content-img">
![A text string where the beginning characters are replaced by an ellipsis, while the end of the string remains visible.](./img/front-line.svg)
</div>

### Middle
A middle truncate is used to shorten a text string when the end of it can’t be truncated by an ellipsis. Also used when several text strings have the exact same middle characters, but the beginning and endings vary. 

<div class="ws-docs-content-img">
![A text string where an ellipsis is placed in the center, keeping both the start and the end of the string visible.](./img/mid-line.svg)
</div>

## Content considerations
- Include the ellipsis as part of a link when the truncated text is a link.
- Always provide a tooltip to display the entire string to the user upon hover.
- Avoid truncating navigation items.
- Truncate text within tables when it overflows the cell, but avoid truncating table headings.
- Maintain at least 4 visible characters so users can better understand content (for example, don’t truncate “demo1.internal-el6satellite” to “de…”).
- Avoid placing truncation directly before or after punctuation.