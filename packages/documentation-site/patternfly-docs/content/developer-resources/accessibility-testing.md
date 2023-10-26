---
id: Testing your accessibility
section: accessibility
---
import { Checkbox } from '@patternfly/react-core';

# Testing your product's accessibility 

This guide contains instructions and recommendations to comprehensively test your product's accessibility to identify accessibility issues and opportunities for improvement.  

**Keep in mind that this guide will not cover every scenario.**

## General testing recommendations 

Many accessibility issues can be found by doing a few simple checks: 

### Validate your HTML

Good accessibility practices start with structural, semantic HTML. When a screen reader (or any sort of assistive technology) scans a web page, it gets information about the Document Object Model (DOM), or the HTML structure of the page. No styles or JavaScript will be read by a screen reader. 

Screen readers like Voice Over (VO), NVDA, or JAWS don't just turn text into speech. They use information in the HTML to list all of the headings on a page, give extra navigation controls to data tables, announce how many items are in a list, and more. This makes semantic HTML essential. 

There are many tools you can use to validate your HTML, such as [W3C’s markup validation service](https://validator.w3.org/). 

### Check for accessibility violations with an audit tool

 If you are using PatternFly, we recommend using aXe: The Accessibility Engine (using their [DevTools](https://www.deque.com/axe/devtools/) or the [Chrome](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/) extension) to check for accessibility violations locally. 
 
We also offer the [patternfly-a11y script](https://github.com/patternfly/patternfly-a11y) for bulk testing that reports any aXe accessibility violations from a set of pages. To use this script, a configuration file can be set to adapt our script to your specific needs like authentication, waiting for any specific items to finish loading (like a loading spinner), etc. 
 
 When used as a report, it will give an [accessibility report via surge](http://a11y-os.surge.sh/). The UI should be built first in the CI workflow and then a job created to run the a11y script against that build. The a11y script assumes that there is a web server running somewhere that is serving up the pages  that it can reach. (for example, in localhost:8000). If you want to test a step before deployment, you could follow the path of integrating aXe with [Cypress](https://www.cypress.io/).


### Test keyboard accessibility

The keyboard is an essential accessibility tool, so it is necessary to ensure that the following requirements are met: 

  - All functionality is keyboard accessible.
  - Elements in the HTML and in the layout follow a logical order.
  - Elements with focus are clearly visible.

### Test without styles

Because screen readers cannot access style information, you should disable styles for your product and ensure that your information architecture is effective and that there are adequate text labels.

 The [WAVE browser extension from WebAIM](//wave.webaim.org/extension/) provides this feature if it isn't available in the browser you are using.

### Test with a screen reader 

You can use any screen reader that is available in your operating system. To test PatternFly, we target the following screen readers:
  - [JAWS](https://www.freedomscientific.com/products/software/jaws/) with Chrome, Windows ([JAWS keyboard shortcuts](//dequeuniversity.com/screenreaders/jaws-keyboard-shortcuts))
  - [Voiceover](https://support.apple.com/guide/voiceover/welcome/mac) with Safari, Mac ([Voiceover keyboard shortcuts](//dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts))
  - [NVDA](https://www.nvaccess.org/download/) with Firefox, Windows ([NVDA keyboard shortcuts](//dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts))

### Check color contrast

Colors should pass the following contrast checks, to ensure that users across the vision spectrum can understand your product:
    - Text color against background color ([Understanding WCAG 1.4.3](//www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html))
    - Text color against link color ([Technique G183](//www.w3.org/TR/WCAG20-TECHS/G183.html))
    - Visible boundaries of buttons and form elements against adjacent background color ([Understanding WCAG 1.4.11](//www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html))

## Accessibility testing checklist

We recommend referencing the following checklist as you assess your product's accessibility.

These are some of the main areas we check for on the PatternFly team to ensure that components meet consistent accessibility standards, but, to check your complete implementation, we recommend checking these same areas in your products. 

### General criteria

<Checkbox label="Rotor navigation can discover all information." id="general-criteria-1" /><br/>

<Checkbox label="Shortcut navigation can discover all information."  description="For example, a keyboard shortcut that navigates between all headings on a page should discover all intended headings." /><br/>

<Checkbox label="Cursor navigation can discover all applicable information." description="Some assistive technologies will have their own means of navigation and focus management. For example, VoiceOver uses a 'VO' key plus right or left arrow keys to navigate a page. This may be different than conventional keyboard navigation." id="general-criteria-3" /><br/>

<Checkbox label="Keyboard navigation via the 'tab' key can discover all information. If content should be hidden from other assistive technology like a screen reader description="`className="ws-code">aria-hidden="true"</span>` should be passed to it." id="general-criteria-4" />
- Unless content should be hidden from a screen reader (such as offscreen or presentational information) make sure that content is set to aria-hidden=”true”.  <br/>

<Checkbox label="Items are understandable and usable." body={<Checkbox label="When you navigate to an item by keyboard or other assistive technology, you should be able to easily understand and use the item." id="general-criteria-5a" /><Checkbox label="The flow of information makes sense when navigating." description="Assistive technology like screen readers navigate the page in DOM order. If you used CSS to visually reposition elements, they might be announced in a nonsensical sequence. Instead, if you need something to appear earlier in the page, try to physically move it earlier in the DOM.
" id="general-criteria-5b" /></>} id="general-criteria-5" />

### Accessibility points

<checkbox label="Structure: The visual information architecture should map to the various rotor menus that exist by default." id="general-criteria-7" /><br />
- <checkbox label="Check rotor: Are there good headings, landmarks, links, form controls, and other elements? Do they make sense, and are they descriptive without overloading information?" id="general-criteria-8" /><br />
  - <checkbox label="Headings: Check that heading levels convey structure/content and do not skip. A common practice is to use a single h1 for the primary headline or logo on a page, h2s for designating major sections, and h3s for supporting sections." id="general-criteria-9" /><br />
  - <checkbox label="Links" id="general-criteria-10" /><br />
  - <checkbox label="Form controls" id="general-criteria-11" /><br />
  - <checkbox label="Landmarks" id="general-criteria-12" /><br />
  - <checkbox label="Tables" id="general-criteria-13" /><br />


<checkbox label="Labels:" id="general-criteria-14" />
- <checkbox label="Links: Labels should be unique unless they have the same URL. They should be descriptive and informative." id="general-criteria-1" />
- <checkbox label="Buttons and form controls:" id="general-criteria-15" />
  - Confirm that all form controls have effective labels. (Remember that there is a difference between being accessible and having a *good*, accessible experience. Clear, descriptive labels help create a better experience.)
  - **Expandable buttons:** There should be some indication that a button has the expandable control.
- <checkbox label="Form inputs: These inputs should have a label — even if it's not visible." id="general-criteria-16" />
- <checkbox label="Icons: Even if you don’t visibly see text, there should still be some kind of text for screen readers." id="general-criteria-17" />
- <checkbox label="Images: Check all images for proper alt text. The exception to this practice is when images are primarily for presentation purposes and are not essential pieces of content. To signify that an image should be skipped by a screen reader, set the value of the alt attribute to an empty string: `alt=””`." id="general-criteria-18" />
- <checkbox label="Landmarks: Landmark regions should have labels when there is more than one type of landmark and they are not the same (such as navigation, main, form, etc.).
Section element shouldn’t be used unless it has a label." id="general-criteria-19" />
- <checkbox label="Tables: Can you tell what the table is and what’s in it? [WebAIM has additional guidance on this.](https://webaim.org/techniques/tables/)" id="general-criteria-20" />
- <checkbox label="Aria: If there is visible text then there doesn’t need to be an `aria-label`. Aria provides more descriptive details to screen reader users. It doesn’t have to reiterate or override what might already be there so you should check that your aria is useful." id="general-criteria-21" />
  - It’s important to understand that ARIA can only affect the _semantics_ of an element; it has no effect on the _behavior_ of the element. For example, while you can hide an element from screen readers with `aria-hidden=”true”`, that does not change the focus behavior for that element. 
