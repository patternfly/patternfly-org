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
 
When used as a report, it will give an [accessibility report via surge](http://a11y-os.surge.sh/). The UI should be built first in the CI workflow and then a job created to run the a11y script against that build. The a11y script assumes that there is a web server running somewhere that is serving up the pages (for example, in `localhost:8000`) that it can reach. If you want to test a step before deployment, you could follow the path of integrating aXe with Cypress.


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

<Checkbox label="Rotor navigation can discover all information." id="general-criteria-1" /> 

<Checkbox label="Shortcut navigation can discover all information."  description="For example, a keyboard shortcut that navigates between all headings on a page should discover all intended headings." id="general-criteria-2" />

<Checkbox label="Cursor navigation can discover all applicable information." description="Some assistive technologies will have their own means of navigation and focus management. For example, VoiceOver uses a 'VO' key plus right or left arrow keys to navigate a page. This may be different than conventional keyboard navigation." id="general-criteria-3" />

<Checkbox label={<span>Keyboard navigation via the <kbd>tab</kbd> key can discover all information.</span>} description={<span>If content should be hidden from other assistive technology like a screen reader, <span className="ws-code">aria-hidden="true"</span> should be passed instead.</span>} id="general-criteria-4" />

<Checkbox label="UI elements are understandable and usable." body={<><Checkbox label="When you navigate to an element by keyboard or other assistive technology, you can easily understand and use the item." id="general-criteria-5a" /> <Checkbox label="The flow of information makes sense when navigating." description="Assistive technology (like screen readers) navigate the page in DOM order. If you use CSS to visually reposition elements, they may be announced in a nonsensical sequence. If you need something to appear earlier in the page, try to physically move it earlier in the DOM instead.
" id="general-criteria-5b" /></>} id="general-criteria-5" /> <br/>

### Accessibility points

<Checkbox label={<span> <b> Structure: </b> The visual information architecture maps to the various rotor menus that exist by default.</span>} body={<><Checkbox label="Rotor has descriptive and concise headings, landmarks, links, form controls, tables, and other elements." id="accessibility-points-7a" />
<Checkbox label="Heading levels convey structure/content and do not skip levels." description="A common practice is to use a single h1 for the primary headline or logo on a page, h2s for designating major sections, and h3s for supporting sections." id="accessibility-points-7b" />
<Checkbox label="Landmarks" id="accessibility-points-7c" />
<Checkbox label="Links" id="accessibility-points-7d" />
<Checkbox label="Form controls" id="accessibility-points-7e" />
<Checkbox label="Tables" id="accessibility-points-7f" /></>}  id="accessibility-points-7" />
<br/>
<Checkbox label={<span> <b> Labels: </b> </span>} body={<><Checkbox label=<span><b>Link</b> labels  are descriptive, informative, and unique (unless they have the same URL).</span> id="accessibility-points-8a"/> 

  <Checkbox label={<span><b>Buttons and form controls:</b></span>} description={ <span>
    <li> All form controls have clear and descriptive labels. </li>
    <li> Indicate that a button has the expandable control. </li>
  </span>
  }
  id="general-criteria-8b" />
    
    <Checkbox label={<span><b>Form inputs</b> have a label (even if it's not visible).</span>} id="general-criteria-8c" />
    
    <Checkbox label={<span><b>Icons</b> have some some kind of text for screen readers (even if it's not visible.)</span>} id="general-criteria-8d" />

    <Checkbox label={<span><b>Images have proper alt text.</b></span>} description="The exception to this practice is when images are primarily for presentation purposes and are not essential pieces of content. To signify that an image should be skipped by a screen reader, set the value of the alt attribute to an empty string: `alt=””`." id="general-criteria-8e" />

    <Checkbox label={<span> <b>Landmark</b> regions should have labels when there is more than one type of landmark, and they are not the same (such as navigation, main, form, etc.). Section element shouldn’t be used unless it has a label.</span>} id="general-criteria-8f" />

    <Checkbox label={<span><b>Tables</b> and table content is clearly described. <a href="https://webaim.org/techniques/tables/">WebAIM has additional guidance on this.</a></span>} id="general-criteria-8g" />

    <Checkbox label={<span><b>Aria</b> provides descriptive details to screen reader users, without reiterating or overriding the text that is already there. If there is visible text then there doesn’t need to be an <span className="ws-code">aria-label</span>. </span>} description={<span>It’s important to understand that ARIA can only affect the semantics of an element; not the behavior. For example, while you can hide an element from screen readers with <span> className="ws-code">aria-hidden=”true”</span>, that does not change the focus behavior for that element.</span>} id="general-criteria-8h" />

</>}  id="general-criteria-8" />
