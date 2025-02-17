---
id: About accessibility 
section: accessibility
---

# Accessibility fundamentals 

Accessibility is a foundation of PatternFly, so if you contribute to PatternFly or use it for your products you should first familiarize yourself with our accessibility guidelines and recommendations.

No user should feel left behind when using your product. The goal of accessible design is to remove barriers and create inclusive product experiences that work for everyone, regardless of ability. This is best achieved when accessibility is considered early in the design and development process, but it's never too late to start prioritizing accessibility.

There’s always room to improve accessibility. That’s why our guidelines will continually evolve. Your feedback can help support PatternFly's accessibility, so we welcome you to contribute to our documentation or [get involved in our GitHub discussions](https://github.com/orgs/patternfly/discussions). 

## Assistive technologies

A core consideration for accessibility practices is the assistive technologies that people may use to access your product. While there are many kinds of assistive technologies, PatternFly focuses primarily on accommodating users of keyboards and screen readers.

### Keyboard
Some users can’t use a mouse and rely on other methods of navigation instead, like a keyboard. A keyboard allows users to navigate through UI elements in the order that they appear on the page, typically using the <kbd>Tab</kbd> key. Keyboard users should be able to do anything that mouse users can, including viewing text that is shown upon hover or in popups.  

### Screen readers
When a user has impaired vision (temporary or permanent) that prevents them from viewing a screen, they can use a screen reader that reads visible and non-visible content aloud. Non-visible content includes hidden text, like tooltips, and alternative text (alt text) for icons, images, and links. 

## Understanding users’ needs
Great user experiences don’t just happen. They’re designed, tested, and refined with users in mind. To develop inclusive products, it’s important to understand the varying needs of all users and consider the assistive tools and methods that they use.

This section provides information to help you better understand and address some of the needs of [users with diverse abilities](https://www.a11yproject.com/posts/accessibility-is-blind-people/). It is important to note that some users might fall into multiple groups, and some might use tools created for a different group.

### Motor control
Users with reduced motor control often use a keyboard or computer mouse to access content. Some users may also have difficulty keeping a mouse steady when trying to interact with content.

To design for users with reduced motor control, remember that: 

- Users who rely on a keyboard need elements that are keyboard accessible and highly visible when in focus.
- Users who rely on a mouse or touch need target areas that are large enough to be easily clicked and selected.

### Vision

#### No vision 
Users with no vision rely on screen readers to access web sites and applications. These users often navigate a page by observing specific elements, like headers, links, or form elements.

To design for users with no vision:

- Use [semantic elements](www.w3schools.com/html/html5_semantic_elements.asp).
- Write labels that are meaningful when pulled out of context.

#### Low vision
Users with low vision can have different needs depending on the nature of their visual impairment, such as difficulty with color differentiation, blurriness, or lack of vision in central or peripheral areas.

To design for users with low vision:

- Interfaces should not rely on color alone to communicate information.
- Palettes must have sufficient contrast.
- Layouts should be responsive to font size increases.

### Cognitive processing 
Users who have difficulty processing information benefit from well-written content.

To design for users with cognitive processing issues:

- Write content that is clear, concise, and easy to scan.
- Consider visual hierarchy and chunk content into short, related sections. 
- Avoid long paragraphs.

### Accessibility spectrum

While there are a few main accessibility needs, it is not an exhaustive list. Often the “Persona Spectrum”, coined by Microsoft [(Download the Inclusive Guidebook as a PDF)](https://download.microsoft.com/download/b/0/d/b0d4bf87-09ce-4417-8f28-d60703d672ed/inclusive_toolkit_manual_final.pdf), can be used to understand related mismatches and motivations across a spectrum of permanent, temporary, and situational scenarios.

While accessibility tends to focus on those with permanent disabilities, everyone benefits from accessible products:

- Accessible content supports better comprehension across language fluency and literacy levels.
- Alternative text (alt text) makes images accessible to users with low bandwidth connections or older technologies that can’t load the images.
- Closed captioning benefits those in crowded areas, those learning how to read, and those learning a new language.

Accessibility takes **all users** into account.


<img src="./PF-a11y.png" alt="An accessibility spectrum showing examples of the situational, temporary, and permanent situations for different impairments." />

## Experience parity
We believe that all abilities should be treated equally. There should be parity in the experience of all users—one user group shouldn't be prioritized over the other.
To help you achieve this, consider these guidelines:

- Content should be optimized for all input types: touch, mouse, and keyboard.
  - Don’t optimize the experience for one input type at the expense of another.
  - Contents that are mouse-accessible should also be accessible using touch or a keyboard.
  - Don’t show interactive elements on hover. 
  - Interactive elements that display in a pop-up must also display on click, touch, or enter-key events.

- Screen reader content should match visibly rendered content (refer to the [first note for `aria-hidden` state](https://www.w3.org/TR/wai-aria/#aria-hidden)).

- There should be parity between hover and focus events. Any information that’s available on hover for the mouse user should be available on keyboard focus.
  - Make content that appears on hover available to a screen reader by using `aria-describedby` (refer to [Tooltips & Toggletips example from Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)).

When building accessible user experiences, solving for one can extend to many. Humans are diverse and unique, and designing for accessibility takes that into consideration to create truly inclusive products.
