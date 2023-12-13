---
id: PatternFly's accessibility
section: accessibility
---

## Component accessibility 

We do our best to build accessibility into PatternFly's components to take some of the accessibility work off your hands.

As PatternFly is updated and enhanced, we maintain  accessibility through a combination of automated and manual testing. We use [aXe: The Accessibility Engine](https://www.deque.com/axe/) to ensure that all components pass an accessibility audit before they’re added to PatternFly. 

We also regularly audit keyboard accessibility with both manual testing and integration tests. We aim to provide full support for VoiceOver as our main screen reader, but we still test our components through NVDA and JAWS. As part of our manual audit, every component is run through VoiceOver to make sure they’ll be as accessible as possible in your products.

## Accessibility standards

Our goal is to meet [level AA in the Web Content Accessibility Guidelines 2.1](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&levels=aaa). If you use or contribute to PatternFly, the following accessibility guidelines are some that you can expect PatternFly to adhere to:

| Guideline  | Link  | Applies to  | Tested |
| --- | --- | --- | --- |
| Semantic HTML structures are used to accurately communicate the purpose and relationship of UI elements. | [WCAG 1.3.1](//www.w3.org/WAI/WCAG21/quickref#info-and-relationships) | `design` `html` `css` | Automated testing with aXe and manual testing |
|Color is not the only method of communication. Providing meaning with color is supplementary to providing meaning with text. | [WCAG 1.4.1](//www.w3.org/WAI/WCAG21/quickref#use-of-color) | `design` `html` `css` | Manual testing and aXe used |
| Colors used provide sufficient contrast | [WCAG 1.4.3](//www.w3.org/WAI/WCAG21/quickref#contrast-minimum) and [1.4.11](//www.w3.org/WAI/WCAG21/quickref#non-text-contrast) | `css` | Automated testing with aXe |
| Font sizes can scale up to 200% without loss of content or functionality, and up to 400% without needing to scroll in more than one direction.  | [WCAG&nbsp;1.4.4](//www.w3.org/WAI/WCAG21/quickref#resize-text) and [1.4.10](//www.w3.org/WAI/WCAG21/quickref#reflow) | `css` | Manual testing |
| Styles that affect text spacing (line height, space between paragraphs, letter spacing, and word spacing) can be increased without loss of content or functionality. | [WCAG 1.4.12](//www.w3.org/WAI/WCAG21/quickref#text-spacing) | `css` | Manual testing and aXe used |
| Contents that appear on hover and focus are dismissible, hoverable, and persistent. | [WCAG 1.4.13](//www.w3.org/WAI/WCAG21/quickref#content-on-hover-or-focus) | `html` `css` `js` | Manual testing | 
| All functionality is keyboard accessible. | [WCAG 2.1.1](//www.w3.org/WAI/WCAG21/quickref#keyboard) and [2.1.2](//www.w3.org/WAI/WCAG21/quickref#no-keyboard-trap) | `html` | Manual testing |
| Elements in the HTML and in the layout follow a logical order. | [WCAG 1.3.2](//www.w3.org/WAI/WCAG21/quickref#meaningful-sequence) and [2.4.3](//www.w3.org/WAI/WCAG21/quickref#focus-order) | `design` `html` `css` | Manual testing |
| Elements with focus are clearly visible. | [WCAG 2.4.7](//www.w3.org/WAI/WCAG21/quickref#focus-visible) | `css` | Manual testing |
| Flashing content does not flash more than three times in any one-second period, or the flash is below the general flash and red flash thresholds. | [WCAG 2.3.1](//www.w3.org/WAI/WCAG21/quickref/?showtechniques=231#three-flashes-or-below-threshold) | `css` | Manual testing|
| Functionality that uses complex gestures can also be operated with a single pointer without a path-based gesture. | [WCAG 2.5.1](//www.w3.org/WAI/WCAG21/quickref#pointer-gestures) | `design` | Manual testing |
| Pointer events can be canceled.  | [WCAG 2.5.2](//www.w3.org/WAI/WCAG21/quickref#pointer-cancellation) | `js` | Manual testing |
| Visible labels of UI components are either the same as the accessible name or used in the beginning of the accessible name. | [WCAG 2.5.3](//www.w3.org/WAI/WCAG21/quickref#label-in-name) | `html` | Automated testing with aXe and manual testing |
| The target area for clickable elements is at least 44 by 44 [CSS pixels](//www.w3.org/TR/WCAG21#dfn-css-pixels). | [WCAG 2.5.5 (AAA)](//www.w3.org/WAI/WCAG21/quickref#target-size)* | `css` | Manual testing |
| An accessible name is provided for all elements. | [WCAG 4.1.2](//www.w3.org/WAI/WCAG21/quickref#name-role-value) | `design` `html` | Automated testing with aXe and manual testing with VoiceOver
| Status messages can be programmatically determined through role or properties. | [WCAG 4.1.3](//www.w3.org/WAI/WCAG21/quickref#status-messages) | `html` | Manual testing |

*WCAG 2.5.5 is included for reference only. This guideline suggests a size that is larger than what PatternFly requires.