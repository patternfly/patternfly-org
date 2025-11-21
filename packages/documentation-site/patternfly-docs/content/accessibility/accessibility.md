---
id: Overview
title: Accessibility overview
section: accessibility
sortValue: 1
---

**Accessibility** refers to the ways that your product is set up to support different user needs and abilities, making their experience more comfortable and ensuring that they can easily interact with information. PatternFly prioritizes accessibility, so if you contribute to our design system or use PatternFly for your products, you should first familiarize yourself with our accessibility guidelines and recommendations.

No user should feel left behind when using your product. The goal of accessible design is to remove barriers and create inclusive product experiences that work for everyone, regardless of ability. This is best achieved when accessibility is considered early in the design and development process, but it's never too late to start prioritizing accessibility.

There’s always room to improve accessibility. That’s why our guidelines will continually evolve. Your feedback can help create a more inclusive design system, so we welcome you to [contribute to our accessibility documentation](/get-involved/contribute/contribute-documentation) or [get involved in our GitHub Discussions](https://github.com/orgs/patternfly/discussions). 

---

## What does accessibility look like in PatternFly? 

We are committed to testing our components and checking for accessibility compliance, aligning with [level AA in the Web Content Accessibility Guidelines 2.2](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2&currentsidebar=%23col_customize&levels=aaa).

### Component testing and compliance

To ensure that PatternFly's components prioritize accessibility first, we build accessibility into our codebase.

As PatternFly is updated and enhanced, we put changes and new features through a combination of automated and manual testing, using [aXe: The Accessibility Engine](https://www.deque.com/axe/) to ensure that all components pass an accessibility audit before they’re added to PatternFly. 

We also regularly audit keyboard accessibility with both manual testing and integration tests. We aim to provide full support for VoiceOver as our main screen reader, but we still test our components through NVDA and JAWS. As part of our manual audit, every component is run through VoiceOver to make sure they’ll be as accessible as possible in your products.

#### Accessibility standards

We strive for compliance in accordance to [level AA in the Web Content Accessibility Guidelines 2.2](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2&currentsidebar=%23col_customize&levels=aaa) across the core PatternFly HTML and React libraries, as well as our extensions. If you use or contribute to PatternFly, the following accessibility guidelines are some that you can expect PatternFly to adhere to (keep in mind this is not an exhaustive list):

| Guideline  | Link  | Applies to  | Tested |
| :--- | :--- | :--- | :--- |
| Semantic HTML structures are used to accurately communicate the purpose and relationship of UI elements. | [WCAG 1.3.1](//www.w3.org/WAI/WCAG22/quickref#info-and-relationships) | `design` `html` `css` | Automated testing with aXe and manual testing |
| Color is not the only method of communication. Providing meaning with color is supplementary to providing meaning with text. | [WCAG 1.4.1](//www.w3.org/WAI/WCAG22/quickref#use-of-color) | `design` `html` `css` | Manual testing and aXe used |
| Colors used provide sufficient contrast | [WCAG 1.4.3](//www.w3.org/WAI/WCAG22/quickref#contrast-minimum) and [1.4.11](//www.w3.org/WAI/WCAG22/quickref#non-text-contrast) | `css` | Automated testing with aXe |
| Font sizes can scale up to 200% without loss of content or functionality, and up to 400% without needing to scroll in more than one direction.  | [WCAG&nbsp;1.4.4](//www.w3.org/WAI/WCAG22/quickref#resize-text) and [1.4.10](//www.w3.org/WAI/WCAG22/quickref#reflow) | `css` | Manual testing |
| Styles that affect text spacing (line height, space between paragraphs, letter spacing, and word spacing) can be increased without loss of content or functionality. | [WCAG 1.4.12](//www.w3.org/WAI/WCAG22/quickref#text-spacing) | `css` | Manual testing and aXe used |
| Contents that appear on hover and focus are dismissible, hoverable, and persistent. | [WCAG 1.4.13](//www.w3.org/WAI/WCAG22/quickref#content-on-hover-or-focus) | `html` `css` `js` | Manual testing | 
| All functionality is keyboard accessible. | [WCAG 2.1.1](//www.w3.org/WAI/WCAG22/quickref#keyboard) and [2.1.2](//www.w3.org/WAI/WCAG22/quickref#no-keyboard-trap) | `html` | Manual testing |
| Elements in the HTML and in the layout follow a logical order. | [WCAG 1.3.2](//www.w3.org/WAI/WCAG22/quickref#meaningful-sequence) and [2.4.3](//www.w3.org/WAI/WCAG22/quickref#focus-order) | `design` `html` `css` | Manual testing |
| Flashing content does not flash more than three times in any one-second period, or the flash is below the general flash and red flash thresholds. | [WCAG 2.3.1](//www.w3.org/WAI/WCAG22/quickref/?showtechniques=231#three-flashes-or-below-threshold) | `css` | Manual testing|
| Elements with focus are clearly visible. | [WCAG 2.4.7](//www.w3.org/WAI/WCAG22/quickref#focus-visible) | `css` | Manual testing |
| Elements that are focusable are not entirely obscured. | [WCAG 2.4.11](//www.w3.org/WAI/WCAG22/quickref#focus-not-obscured-minimum) | `design` | Manual testing |
| Functionality that uses complex gestures can also be operated with a single pointer without a path-based gesture. | [WCAG 2.5.1](//www.w3.org/WAI/WCAG22/quickref#pointer-gestures) | `design` | Manual testing |
| Pointer events can be canceled.  | [WCAG 2.5.2](//www.w3.org/WAI/WCAG22/quickref#pointer-cancellation) | `js` | Manual testing |
| Visible labels of UI components are either the same as the accessible name or used in the beginning of the accessible name. | [WCAG 2.5.3](//www.w3.org/WAI/WCAG22/quickref#label-in-name) | `html` | Automated testing with aXe and manual testing |
| Any action that involves dragging has a pointer alternative. | [WCAG 2.5.7](//www.w3.org/WAI/WCAG22/quickref#dragging-movements) | `js` | Manual testing |
| The target area for clickable elements is at least 24 by 24 [CSS pixels](//www.w3.org/TR/WCAG22#dfn-css-pixels), with specific exceptions. | [WCAG 2.5.8](//www.w3.org/WAI/WCAG22/quickref/#target-size-minimum) | `css` | Manual testing |
| An accessible name, role, and value are provided for all user interface elements. | [WCAG 4.1.2](//www.w3.org/WAI/WCAG22/quickref#name-role-value) | `design` `html` | Automated testing with aXe and manual testing with VoiceOver |
| Status messages can be programmatically determined through role or properties. | [WCAG 4.1.3](//www.w3.org/WAI/WCAG22/quickref#status-messages) | `html` | Manual testing |

---

## How to design for accessibility

### Experience parity

We believe that all abilities should be treated equally. There should be parity in the experience of all users—one user group shouldn't be prioritized over the other.

To help you achieve this, consider these guidelines:

- Content should be optimized for all input types: touch, mouse, and keyboard.
  - Don’t optimize the experience for one input type at the expense of another.
  - Contents that are mouse-accessible should also be accessible using touch or a keyboard.
  - Don’t show interactive elements on hover. 
  - Interactive elements that display in a pop-up must also display on click, touch, or enter-key events.

- Screen reader content should match visibly rendered content (refer to the [first note for `aria-hidden` state](https://www.w3.org/TR/wai-aria/#h-note-59), but keep in mind this references an older version of WCAG guidelines).

- There should be parity between hover and focus events. Any information that’s available on hover for the mouse user should be available on keyboard focus.
  - Make content that appears on hover available to a screen reader by using `aria-describedby` (refer to [Tooltips & Toggletips example from Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)).

When building accessible user experiences, solving for one can extend to many. Humans are diverse and unique, and designing for accessibility takes that into consideration to create truly inclusive products.

### Understanding users’ needs and assistive technology

#### Assistive technologies

##### Keyboard

A keyboard, used by some in place of a mouse, allows users to navigate through UI elements in the order that they appear on the page, typically using the `<kbd>Tab</kbd>` key. Keyboard users should be able to do anything that mouse users can, including viewing text that is shown upon hover or in popups.

##### Screen readers

A screen reader reads visible and non-visible content (like tooltips or alt text for icons, images, and linkes) aloud. When a user has impaired vision (temporary or permanent) that prevents them from viewing a screen, they can use a screen reader to access the content of a product or application. 

Often, a user may navigate with a keyboard while using a screen reader.

#### User needs by impairment

This section provides information to help you better understand and address some of the needs of [users with diverse abilities](https://www.a11yproject.com/posts/accessibility-is-blind-people/). It is important to note that some users might fall into multiple groups, and some might use tools created for a different group.

##### Motor control

Users with reduced motor control often use a keyboard or computer mouse to access content. Some users may also have difficulty keeping a mouse steady when trying to interact with content.

To design for users with reduced motor control, remember that: 

- Users who rely on a keyboard need elements that are keyboard accessible and highly visible when in focus.
- Users who rely on a mouse or touch need target areas that are large enough to be easily clicked and selected.

##### Vision

###### No vision

Users with no vision rely on screen readers to access web sites and applications. These users often navigate a page by observing specific elements, like headers, links, or form elements.

To design for users with no vision:

- Use [semantic elements](https://www.w3schools.com/html/html5_semantic_elements.asp).
- Write labels that are meaningful when pulled out of context.

###### Low vision

Users with low vision can have different needs depending on the nature of their visual impairment, such as difficulty with color differentiation, blurriness, or lack of vision in central or peripheral areas.

To design for users with low vision:

- Interfaces should not rely on color alone to communicate information.
- Palettes must have sufficient contrast.
- Layouts should be responsive to font size increases.

##### Cognitive processing

Users who have difficulty processing information benefit from well-written content.

To design for users with cognitive processing issues:

- Write content that is clear, concise, and easy to scan.
- Consider visual hierarchy and chunk content into short, related sections. 
- Avoid long paragraphs.

#### Accessibility spectrum

While there are a few main accessibility needs, it is not an exhaustive list. Often the **“Persona Spectrum”**, coined by Microsoft [(Download the Inclusive Guidebook as a PDF)](https://download.microsoft.com/download/b/0/d/b0d4bf87-09ce-4417-8f28-d60703d672ed/inclusive_toolkit_manual_final.pdf), can be used to understand related mismatches and motivations across a spectrum of permanent, temporary, and situational scenarios.


While accessibility tends to focus on those with permanent disabilities, everyone benefits from accessible products:

- Accessible content supports better comprehension across language fluency and literacy levels.
- Alternative text (alt text) makes images accessible to users with low bandwidth connections or older technologies that can’t load the images.
- Closed captioning benefits those in crowded areas, those learning how to read, and those learning a new language.

Accessibility takes **all users** into account.