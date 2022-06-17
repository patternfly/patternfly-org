---
id: Writing accessibility documentation for PatternFly
section: accessibility
---

Accessibility documentation is meant to help consumers improve accessibility for their users. This page focuses on how to write consistent and robust accessibility documentation.

## Content architecture

Your accessibility documentation should generally follow the [design guidelines content architecture](/ux-writing/writing-design-guidelines-for-patternfly#content-architecture), with the below additions.

### Keyboard inputs

When referencing specific inputs on a keyboard, wrap each input in a `kbd` element and capitalize the first letter of the input. When referencing a combination of inputs, place each input in its own `kbd` element with a "+" between them.

Example:

>When a user presses <kbd>Tab</kbd> + <kbd>Shift</kbd>...

### Person first language

When referring to specific types of users in your documentation, use person first language. This places emphasis on the person before the assistive technology, disability, or limitation. 

Example: 

>Users interacting via keyboard...
>
>Users with a color deficiency...

## General structure

Your documentation should follow a defined structure of headings and sections, which are outlined in the following sub-sections. Each section includes default verbiage, usually prefacing the content that you will add in yourself. Depending on your content, you might find it necessary to omit or alter various sections.

### Accessible application

This section should serve as a list of higher-level guidelines for how various types of users should be able to operate, perceive, or understand the component, or what the component should do/how it should function within the context of a page.

Consumers should be able to read this section and have a general understanding for whether their application of the component satisfies the points outlined, regardless of whether they are using the component as-is or customizing it in some way.

Avoid detailing how the component achieves a specific accessibility functionality, and instead only state what the expected functionality is.

| Do | Don't |
|:--|:--|
| "Users interacting via keyboard should be able to..." | "The component has `tabIndex="0"` so that users interacting via keyboard can..." |

Example:

>The following guidelines outline some of the ways that a PatternFly **componentName** should generally be operable, understandable, and perceivable in order to improve accessibility for users.
>
>- Bullet item describing a guideline...

### React library considerations

This section should only refer to the React library. It should include what considerations PatternFly has taken and built into the component by default and why, often so that consumers are not required to manually pass anything in themselves (even if there is the option to do so). This can include expanding upon the previous section by explaining *how* some functionality occurs:

>The component has `tabIndex="0"` so that users interacting via keyboard can...

Consumers should be able to read this section and understand what accessibility functionality is built into the component and for what purpose. This should provide them a better understanding of what functionality affects the component's accessibility should it be customized in some way.

Considerations that do not need a detailed explanation, or accompanying code blocks or images, should not receive their own sub-section. If a consideration has a more lengthy explanation, is considered more significant, or has accompanying code blocks or images, it should be given its own sub-section.

Example:

>PatternFly's React library has taken into account various considerations for the standard use of an accordion by ensuring certain accessibility functionality is built-in by default.
>
>A simple explanation that doesn't require accompanying code blocks or images...
>
>Additionally, some further considerations provided by PatternFly are outlined below.
>
>### Consideration heading
>
>A more complex or significant explanation, with or without accompanying code blocks or images.

If PatternFly has not built any accessibility functionality in by default, the content of the section should be replaced to notify consumers of this. Example:

>By default, PatternFly has not built in any accessibility functionality into the accordion. Any considerations must be taken by the consumer, some of which are outlined in the sub-section below.

### Customizable props

This sub-section should only include a table of the various React props that can be passed in and/or customized, and which can affect accessibility.

Consumers should be able to read this section and understand how a specific prop should be used and how it will affect accessibility when they pass it in or customize it.

Example:

>The table below outlines the various React props that can be passed in or customized by the consumer, and which can affect accessibility. Each prop includes what component it should be applied to, the reason for using it or what it does, and whether it is ever required.
>
>| Prop | Applied to | Reason | 
>|---|---|---|
>| propName | ComponentName | Reason for using propName |

### HTML/CSS library considerations

This section should only refer only to the HTML/CSS library. It should only include a table of the various attributes that a consumer can pass in and which can affect accessibility.

Consumers should be able to read this section and understand how a specific attribute should be used and how it will affect accessibility when they pass it in.

Example:

>When using PatternFly's HTML/CSS library consumers must take several considerations into account by following the table below, which outlines the various HTML attributes that can affect accessibility. Each attribute includes what element it should be applied to, the reason for using it or what it does, and whether it is ever required.
>
>| Attribute | Applied to | Reason | 
>|---|---|---|
>| attribute-name | selector | Reason for using attribute-name |

### Additional considerations

This section should include any additional considerations a consumer should take when using the component. It should only include more general considerations that don't pertain only to the React or HTML/CSS library, and have not been mentioned elsewhere in the documentation.

Depending on your content, you can include sub-sections with a level 3 heading, an unordered list of considerations, or both.

If there are no additional considerations, this section can be omitted.

Example:

>Consumers must ensure they take any additional considerations when customizing an accordion, using it in a way not described or recommended by PatternFly, or in various other specific use-cases not outlined elsewhere in this accessibility documentation.
>
> - A list item for an additional consideration...
>### Consideration heading
>
>An explanation of an additional consideration...

### Further reading

This section should include any significant resources in regards to the component's accessibility. It can usually include links to a specific section of the [WCAG](https://www.w3.org/TR/WCAG21/) or the [ARIA authoring practices guide](https://www.w3.org/WAI/ARIA/apg/), or other resources that PatternFly may have used in coming to decisions on accessibiltiy functionality. 

If there are no resources to include, this section can be omitted.

Example:

>To read more about accessibility with accordions, refer to the resources listed below.
>
>- A resource link