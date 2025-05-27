---
id: Expandable section
section: components
---

import '../components.css';

## Elements
An expandable section has two main elements.

<div class="ws-docs-content-img">
![Elements of an expandable section.](./img/exp-sect-elements.svg)
</div>

1. **Toggle (fa-angle-right	):** Indicates whether the section is expanded or collapsed.
2. **Toggle text:** Informs the user what will be shown when the component is expanded.

## Usage
Use an expandable section when you want to hide optional or advanced content by default. They are commonly used in forms to reveal plain text or additional form fields. They can also be used to reveal [charts](https://v4-archive.patternfly.org/v4/charts/about), [cards](https://v4-archive.patternfly.org/v4/components/card), [data lists](https://v4-archive.patternfly.org/v4/components/data-list), or [table views](https://v4-archive.patternfly.org/v4/components/table). Expandable sections can also be used in [alerts](https://v4-archive.patternfly.org/v4/components/alert) to show additional information.

We recommend using dynamic toggle text for an expandable section, which will update the toggle text based on the state of the expandable section. For example, it may read **Show more** when the toggle is collapsed, and **Show less** when the toggle is open.

## Variations

### Expandable section disclosure 

<div class="ws-docs-content-img">
![A collapsed section of content, with a "show more" link beside an expanded content section with a "show less" link and a block of text content.](./img/exp-sect-disclosure.svg)
</div>

### Expandable section for truncated text

<div class="ws-docs-content-img">
![A paragraph of text, truncated at the end, with a link that says "show more", followed by a fully expanded paragraph of text that now has a link that says "show less".](./img/exp-sect-truncate.svg)
</div>

### Expandable section in a form

<div class="ws-docs-content-img">
![Example of an expandable section in a form.](./img/exp-sect-form.svg)
</div>

### Expandable section in an inline alert

<div class="ws-docs-content-img">
![Example of an expandable section in an inline alert.](./img/exp-sect-inline-alert.svg)
</div>

### Expandable section in a side panel

<div class="ws-docs-content-img">
![Example of an expandable section in a side panel.](./img/exp-sect-panel.svg)
</div>

### Expandable section in a documentation page

<div class="ws-docs-content-img">
![Example of an expandable section in a documentation page.](./img/exp-sect-docs-page.svg)
</div>

For more information regarding accessibility, visit the [expandable section accessibility tab](/components/expandable-section/accessibility).
