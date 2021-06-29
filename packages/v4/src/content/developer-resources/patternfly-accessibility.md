---
id: PatternFly's accessibility
section: accessibility
---

As a design system, PatternFly provides accessible building blocks to work with. We do our best to cover all areas that are within our control and take at least some of the accessibility work off your hands.

With constant enhancements to PatternFly, we maintain this accessibility through a combination of automated and manual testing. We use [aXe: The Accessibility Engine](https://www.deque.com/axe/) on our build to ensure that all components pass this accessibility audit before they’re added to PatternFly. 

We regularly audit keyboard accessibility with both manual testing and integration tests. We’re also aiming to provide full support for Voice Over as our main screen reader, but we still test our components through NVDA and JAWS. As part of our manual audit, every component is run through Voice Over to make sure they’ll be as accessible as possible in your products.

## What PatternFly aims to address

Our goal is to meet [level AA in the Web Content Accessibility Guidelines 2.1](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&levels=aaa). If you use PatternFly or contribute to PatternFly as a designer or developer, these are the items you can expect to be covered in PatternFly:


| Guideline  | Link  |  |  |  |  | Tested |
| --- | --- | --- | --- | --- | --- | --- | 
| Semantic HTML structures are used to accurately communicate the purpose and relationship of UI elements. | [WCAG 1.3.1](//www.w3.org/WAI/WCAG21/quickref#info-and-relationships) | `design` | `html` | `css` |  | Automated testing with axe and manual testing |
|Color is not the only method of communication. Providing meaning with color is supplementary to providing meaning with text. | [WCAG 1.4.1](//www.w3.org/WAI/WCAG21/quickref#use-of-color) | `design` | `html` | `css` |  | Manual testing and axe used |
| Colors used provide sufficient contrast | [WCAG 1.4.3](//www.w3.org/WAI/WCAG21/quickref#contrast-minimum) and [1.4.11](//www.w3.org/WAI/WCAG21/quickref#non-text-contrast) |  |  | `css` |  | Automated testing with axe |
| Font sizes can scale up to 200% without loss of content or functionality, and up to 400% without needing to scroll in more than one direction.  | [WCAG&nbsp;1.4.4](//www.w3.org/WAI/WCAG21/quickref#resize-text) and [1.4.10](//www.w3.org/WAI/WCAG21/quickref#reflow) |  |  | `css` |  | Manual testing |
| Styles that affect text spacing (line height, space between paragraphs, letter spacing, and word spacing) can be increased without loss of content or functionality. | [WCAG 1.4.12](//www.w3.org/WAI/WCAG21/quickref#text-spacing) |  |  | `css` |  | Manual testing and axe used |
| Contents that appear on hover and focus are dismissable, hoverable, and persistent. | [WCAG 1.4.13](//www.w3.org/WAI/WCAG21/quickref#content-on-hover-or-focus) |  | `html` | `css` | `js` | Manual testing | 
| All functionality is keyboard accessible. | [WCAG 2.1.1](//www.w3.org/WAI/WCAG21/quickref#keyboard) and [2.1.2](//www.w3.org/WAI/WCAG21/quickref#no-keyboard-trap) |  | `html` |  |  | Manual testing |
| Elements in the HTML and in the layout follow a logical order. | [WCAG 1.3.2](//www.w3.org/WAI/WCAG21/quickref#meaningful-sequence) and [2.4.3](//www.w3.org/WAI/WCAG21/quickref#focus-order) | `design` | `html` | `css` |  | Manual testing |
| Elements with focus are clearly visible. | [WCAG 2.4.7](//www.w3.org/WAI/WCAG21/quickref#focus-visible) |  |  | `css` |  | Manual testing |
| Flashing content does not flash more than three times in any one-second period, or the flash is below the general flash and red flash thresholds. | [WCAG 2.3.1](//www.w3.org/WAI/WCAG21/quickref/?showtechniques=231#three-flashes-or-below-threshold) |  |  | `css` |  | Manual testing|
| Functionality that uses complex gestures can also be operated with a single pointer without a path-based gesture. | [WCAG 2.5.1](//www.w3.org/WAI/WCAG21/quickref#pointer-gestures) | `design` |  |  |  | Manual testing |
| Pointer events can be cancelled.  | [WCAG 2.5.2](//www.w3.org/WAI/WCAG21/quickref#pointer-cancellation) | | | | `js` | Manual testing |
| Visible labels of UI components are either the same as the accessible name or used in the beginning of the accessible name. | [WCAG 2.5.3](//www.w3.org/WAI/WCAG21/quickref#label-in-name) |  | `html` |  |  | Automated testing with axe and manual testing |
| The target area for clickable elements is at least 44 by 44 [CSS pixels](//www.w3.org/TR/WCAG21#dfn-css-pixels). | [WCAG 2.5.5 (AAA)](//www.w3.org/WAI/WCAG21/quickref#target-size)* |  |  | `css` |  | Manual testing |
| An accessible name is provided for all elements. | [WCAG 4.1.2](//www.w3.org/WAI/WCAG21/quickref#name-role-value) | `design` | `html` |  |  | Automated testing with axe and manual testing with VO
| Status messages can be programmatically determined through role or properties. | [WCAG 4.1.3](//www.w3.org/WAI/WCAG21/quickref#status-messages) |  | `html` |  |  | Manual testing |

*WCAG 2.5.5 is included for reference only. This guideline suggests a size that is larger than what PatternFly requires.
