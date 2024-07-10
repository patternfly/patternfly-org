---
id: Testing your accessibility
section: accessibility
---
import { Checkbox } from '@patternfly/react-core';

# Testing your product's accessibility 

This guide contains instructions and recommendations that you can use to robustly test your product's accessibility, in order to identify accessibility issues and opportunities for improvement.  

**Keep in mind that this guide will not cover every scenario.**

## Standard testing procedures 

Many accessibility issues can be found by doing a few standard checks. 

### Validate your HTML

Good accessibility practices start with structural, semantic HTML. When a screen reader (or any sort of assistive technology) scans a web page, it gets information about the Document Object Model (DOM), or the HTML structure of the page. No styles or JavaScript will be read by a screen reader. 

Screen readers (like Voice Over (VO), NVDA, or JAWS) don't just turn text into speech. They also use information in the HTML to list all of the headings on a page, give extra navigation controls to data tables, announce how many items are in a list, and more. This makes semantic HTML essential. 

You can use an HTML validation tool to test your product, such as [W3C’s markup validation service](https://validator.w3.org/). 

### Check for accessibility violations with an audit tool

When using PatternFly, we recommend checking for accessibility violations locally via aXe: The Accessibility Engine (using [aXe DevTools](https://www.deque.com/axe/devtools/), the [Chrome extension](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd), or the [Firefox extension](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)). If you want to test prior to deployment, you can integrate aXe with [Cypress](https://www.cypress.io/).
 
#### Bulk testing with the patternfly-ally script

We offer the [patternfly-a11y script](https://github.com/patternfly/patternfly-a11y) for bulk testing, which reports any aXe accessibility violations from a set of pages. You can adapt this script to your needs by creating a configuration file that includes authentication, waits for specific items to finish loading (like a loading spinner), or addresses other items relevant to your use case. As a report, this script will deliver an [accessibility report via surge](http://a11y-os.surge.sh/). 

Before using this script, your UI should be built in the CI workflow. Once built, create a job to run the script against that build. The script assumes that a web server is running and serving your product somewhere that the script can reach (for example, in `localhost:8000`). 

### Test keyboard accessibility

The keyboard is an essential accessibility tool, so it is necessary to ensure that the following requirements are met: 

- All functionality is keyboard accessible.
- Elements in the HTML and in the layout follow a logical order.
- Elements with focus are clearly visible.

### Test without styles

Screen readers cannot access style information, so you should disable styles for your product to test that your information architecture is effective and that elements have adequate text labels.

The [WAVE browser extension from WebAIM](https://wave.webaim.org/) allows you to disable styles if this isn't available in the browser you are using.

### Test with a screen reader 

You can test with any screen reader that is available in your operating system. In PatternFly, we target:
  - [JAWS](https://www.freedomscientific.com/products/software/jaws/) with Chrome, Windows ([JAWS keyboard shortcuts](//dequeuniversity.com/screenreaders/jaws-keyboard-shortcuts)).
  - [VoiceOver](https://support.apple.com/guide/voiceover/welcome/mac) with Safari, Mac ([VoiceOver keyboard shortcuts](//dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts)).
  - [NVDA](https://www.nvaccess.org/download/) with Firefox, Windows ([NVDA keyboard shortcuts](//dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts)).

### Check color contrast

Your UI's colors should pass the following contrast checks to ensure that users across the vision spectrum can understand your product:
    - Text color against background color ([Understanding WCAG 1.4.3](//www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html))
    - Text color against link color ([Technique G183](//www.w3.org/TR/WCAG20-TECHS/G183.html))
    - Visible boundaries of buttons and form elements against adjacent background color ([Understanding WCAG 1.4.11](//www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html))

## Accessibility testing checklist

To keep track of your testing efforts, we recommend referencing the following checklist.

This checklist includes some of the main areas that the PatternFly team checks for to ensure that a UI meets consistent accessibility standards. To evaluate your specific implementation, we recommend checking these same areas in your product. 

### Broad accessibility criteria

<Checkbox label="Rotor navigation can discover all information." id="general-criteria-1" /> 

<Checkbox label="Shortcut navigation can discover all information."  description="For example, a keyboard shortcut that navigates between all headings on a page should discover all intended headings." id="general-criteria-2" />

<Checkbox label="Cursor navigation can discover all applicable information." description="Some assistive technologies will have their own means of navigation and focus management. For example, VoiceOver uses a 'VO' key plus right or left arrow keys to navigate a page. This may be different from conventional keyboard navigation." id="general-criteria-3" />

<Checkbox label={<span>Keyboard navigation via the <kbd>tab</kbd> key can discover all information.</span>} description={<span>If content should be hidden from other assistive technology like a screen reader, <span className="ws-code">aria-hidden="true"</span> should be passed instead.</span>} id="general-criteria-4" />

<Checkbox label="UI elements are understandable and usable." body={<><Checkbox label="When you navigate to an element by keyboard or other assistive technology, you can easily understand and use the item." id="general-criteria-5a" /> <Checkbox label="The flow of information makes sense when navigating." description="Assistive technology (like screen readers) navigate the page in DOM order. If you use CSS to visually reposition elements, they may be announced in a nonsensical sequence. If you need something to appear earlier in the page, try to physically move it earlier in the DOM instead.
" id="general-criteria-5b" /></>} id="general-criteria-5" />

### Structural accessibility criteria

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
    <li> Expandable buttons display the expandable control and utilize <code className="ws-code">aria-expanded</code> to indicate that a button is expandable. <code className="ws-code">aria-expanded</code> should always have a boolean value if a button is meant to be expandable. </li>
  </span>
  }
  id="general-criteria-8b" />
    
    <Checkbox label={<span><b>Form inputs</b> have a label (even if it's not visible).</span>} id="general-criteria-8c" />
    
    <Checkbox label={<span><b>Icons</b> have some kind of text for screen readers (even if it's not visible.)</span>} id="general-criteria-8d" />

    <Checkbox label={<span><b>Images have proper alt text.</b></span>} description={<span>The exception to this practice is when images are primarily for presentation purposes and are not essential pieces of content. To signify that an image should be skipped by a screen reader, set the value of the alt attribute to an empty string: <code className="ws-code">alt=""</code></span>}  id="general-criteria-8e" />

    <Checkbox label={<span> <b>Landmark</b> regions should have labels when there is more than one type of landmark, and they are not the same (such as navigation, main, form, etc.). Section element shouldn’t be used unless it has a label.</span>} id="general-criteria-8f" />

    <Checkbox label={<span><b>Tables</b> and table content is clearly described. WebAIM has additional guidance on <a href="https://webaim.org/techniques/tables/">creating accessible tables</a>.</span>} id="general-criteria-8g" />

    <Checkbox label={<span><b>ARIA</b> labels provide descriptive details to screen reader users, without reiterating or overriding the text that is already there. If there is visible text then there doesn’t need to be an ARIA label. </span>} id="general-criteria-8h" />

</>}  id="general-criteria-8" />
