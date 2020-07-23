---
id: Truncation
section: content
---

Use truncation whenever the string overflows the container and you don't want multiple lines of text.

Examples:
- Page titles that show object/host names

![#truncation1](./img/truncation1@2x.jpg)

- Table or list view cells that contain long strings or lots of data and that have some method to view the full text

![#truncation1](./img/truncation2@2x.jpg)

## Where to truncate
Whether to design for truncating strings at the beginning, end, or in the middle requires a bit of research.

Does the product you’re designing for have a default truncation scheme? For example, if your product has a default setting for how to truncate host names but also a user preference if users want to change it to suit their naming scheme, you should follow that along with this style guide’s guidelines.

![#truncation1](./img/truncation3@2x.jpg)

If the product doesn't have a default truncation scheme, think about how the product's users are apt to name objects. Is it more likely that the unique part of the name will be at the beginning or end of the string? Based on the answer, you should either truncate at the end of the string (abcdef...) or in the middle of the string (abc...ghi). To decide on a method, ask yourself: *Which part of the string that is not truncated is more likely to differentiate the item?*

## Additional truncation guidelines
- Indicate truncated text with an ellipsis (…). If the text is part of a link, the ellipsis should also be part of the link.
- Avoid abbreviations or truncated text in navigation items (all levels of navigation in the masthead and left navigation).
- In any container holding a string, if there is not sufficient room for the full spelling or hyphenated word, consider abbreviating the text. Do not truncate text in column headings.
- Leave no fewer than 4 characters when truncating text, and preferably leave enough characters to give a fair idea of what the string says (for example, don't truncate “demo1.internal-el6.satellite” to “de…”).
- Ensure that there is at least one method for the user to view the entire string. We recommend using a tooltip (useful for fewer than 150 characters or so). You could also include expanding rows or use overlays.
- Avoid truncation directly before or after punctuation whenever possible. It’s tricky to differentiate whether the punctuation is part of the ellipsis or part of the name (for example, don't truncate “demo1.internal-el6.satellite” to “demo1…”).
- If a table column is resizable, the truncated text should adjust accordingly.