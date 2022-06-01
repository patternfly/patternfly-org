The following is a general template for how accessibility docs should be written for components. Following the code block below are further explanations of each section, including replacement verbiage under certain circumstances.

```
---
id: { Component name (sentence case) }
section: components
---

## Accessibile application

The following guidelines outline some of the ways that a PatternFly { component name } should generally be operable, understandable, and perceivable in order to improve accessibility for users.

{ Explanation(s) for how the component should generally be operable, understandable, and perceivable by various types of users. }

## React library considerations

PatternFly's React library has taken into account various considerations for the standard use of {"a"/"an"} { component name } by ensuring certain accessibility functionality is built-in by default.

{ Explanation(s) of considerations that can be summed up in a sentence or two, and do not need any accompanying code snippets or images. }

Additionally, some further considerations provided by PatternFly are outlined below.

### { Consideration heading }

{ An explanation for a consideration that needs more detail, including what it does or is for and any necessary code snippets or images. }

### Customizable props

The table below outlines the various React props that can be passed in or customized by the consumer, and which can affect accessibility. Each prop includes what component it should be applied to, the reason for using it or what it does, and whether it is ever required.

| Prop | Applied to | Reason | 
|---|---|---|
| propName | ComponentName | Reason for using propName |

## HTML/CSS library considerations

When using PatternFly's HTML/CSS library consumers must take several considerations into account by following the table below, which outlines the various HTML attributes that can affect accessibility. Each attribute includes what element it should be applied to, the reason for using it or what it does, and whether it is ever required.

| Attribute | Applied to | Reason | 
|---|---|---|
| attribute-name | selector | Reason for using attribute-name |

## Additional considerations

Consumers must ensure they take any additional considerations when customizing {"a"/"an"} {component name}, using it in a way not described or recommended by PatternFly, or in various other specific use-cases not outlined elsewhere in this accessibility documentation.

### { Consideration heading }

{ An explanation of the consideration and what a consumer must ensure. }

## Further reading

To read more about accessibility with {component name}'s, refer to the resources listed below.

- { A link to a resource }
```

**Accessible application**:** This section should serve as a higher-level overview for how various types of users should be able to operate, perceive, or understand the component, or what the component should do/how it should function within the context of a page. Use separate paragraphs for different areas of the component functionality/behavior. When referring to specific types of users, use user-first verbiage, e.g. "Users interacting via keyboard..." or "Users with a color deficiency..."

This section should only state what should occur rather than *how* it occurs via mentions of React props or HTML attributes, e.g. "Users interacting via keyboard should be able to press **Tab** to place focus on the component", rather than "The component has `tabindex="0"` to allow focus to be placed on it via keyboard."

Consumers should be able to read this section and have an understanding for whether their application of the component meets the points outlined, regardless of whether they are using the component as-is or customizing it in some way.

**React library considerations**: This section refers only to the React library. It should include what considerations PatternFly has taken and built into the component by default and why, often so that consumers are not required to manually pass anything in themselves (even if there is the option to do so). This can include expanding upon the previous section by explaining *how* some functionality occurs, e.g. "The component has `tabindex="0"` to allow focus to be placed on it via keyboard."

Considerations that do not need a detailed explanation or accompanying code snippets/images should not receive their own sub-section, while more lengthy/significant explanations or considerations that include code snippets/images should be given their own sub-section. 

Consumers should be able to read this section and understand what accessibility functionality is built into the component and for what purpose, so that they have a better understanding of the component's accessibility should they customize it in some way.

If PatternFly has not built any accessibility functionality in by default, the verbiage of the section should be replaced with, "By default, {"a" / "an"} {component name} does not have any accessibility functionality built into it by PatternFly. Any considerations must be taken by the consumer, some of which are outlined in the sub-section below."

**Customizable props**: This sub-section serves to inform consumers of some of the considerations they should take when using the component from the React library. It should only include a table of the various React props that can be passed in and/or customized, and which can affect accessibility. Consumers should be able to read this section and understand how a specific prop should be used and how it will affect accessibility when they pass it in or customize it.

**HTML/CSS library considerations**: This section refers only to the HTML/CSS library. It should only include a table of the various attributes that a consumer can pass in and which can affect accessibility. Consumers should be able to read this section and understand how a specific attribute should be used and how it will affect accessibility when they pass it in.

**Additional considerations**: This section should include any additional considerations a consumer should take. It should only include more general considerations that don't pertain specifically to either the React or HTML/CSS library. If there are no additional considerations, this section can be omitted.

**Further reading**: This section should include any significant resources in regards to the component's accessibility. It can usually include links to a specific section of the WCAG, the WAI-ARIA authoring practices, or other resources that PatternFly may have used in coming to decisions on accessibiltiy functionality. If there are no resources to include, this section can be omitted.