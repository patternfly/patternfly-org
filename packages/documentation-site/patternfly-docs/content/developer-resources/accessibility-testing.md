---
id: Testing your accessibility
section: accessibility
---

# Testing your product's accessibility 

This guide contains instructions and recommendations to comprehensively test your product's accessibility to identify accessibility issues and opportunities for improvement.  

**Keep in mind that this guide may not cover every scenario.**


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
  - JAWS with Chrome, Windows ([JAWS keyboard shortcuts](//dequeuniversity.com/screenreaders/jaws-keyboard-shortcuts))
  - Voiceover with Safari, Mac ([Voiceover keyboard shortcuts](//dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts))
  - NVDA with Firefox, Windows ([NVDA keyboard shortcuts](//dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts))

### Check color contrast

Colors should pass the following contrast checks, to ensure that users across the vision spectrum can understand your product:
    - Text color against background color ([Understanding WCAG 1.4.3](//www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html))
    - Text color against link color ([Technique G183](//www.w3.org/TR/WCAG20-TECHS/G183.html))
    - Visible boundaries of buttons and form elements against adjacent background color ([Understanding WCAG 1.4.11](//www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html))

## Accessibility testing checklist

We recommend referencing the following checklist as you assess your product's accessibility.

These are some of the main areas we check for on the PatternFly team to ensure that components meet consistent accessibility standards, but, to check your complete implementation, we recommend checking these same areas in your products. 

### General criteria

<label><input type="checkbox" /> VO Rotor Navigation can discover all information. </label><br/>
<label><input type="checkbox" /> VO Shortcut Navigation can discover all information. </label><br/>
<label><input type="checkbox" /> VO Cursor Navigation can discover all information (dependent on component and use case — there should be an easy way to navigate to the component). </label><br/>
<label><input type="checkbox" /> Tabbed Keyboard Navigation can discover all information. </label>
- Unless content should be hidden from a screen reader (such as offscreen or presentational information) make sure that content is set to aria-hidden=”true”.  <br/>

<label><input type="checkbox" /> Items are understandable and usable. </label><br/>
  - <label><input type="checkbox" /> When you navigate to an item by keyboard or by screen reader, you should be able to easily understand and use the item. </label><br/>
  - <label><input type="checkbox" /> The flow of information makes sense when navigating. Screen readers navigate the page in DOM order. If you used CSS to visually reposition elements, they might be announced in a nonsensical sequence. Instead, if you need something to appear earlier in the page, try to physically move it earlier in the DOM.</label>

### Accessibility points

<label><input type="checkbox" /> **Structure:** The visual information architecture should map to the various rotor menus that exist by default. </label><br />
- <label><input type="checkbox" /> **Check rotor:** Are there good headings, landmarks, links, form controls, and other elements? Do they make sense, and are they descriptive without overloading information? </label><br />
  - <label><input type="checkbox" /> Headings: Check that heading levels convey structure/content and do not skip. A common practice is to use a single h1 for the primary headline or logo on a page, h2s for designating major sections, and h3s for supporting sections. </label><br />
  - <label><input type="checkbox" /> Links </label><br />
  - <label><input type="checkbox" /> Form controls </label><br />
  - <label><input type="checkbox" /> Landmarks </label><br />
  - <label><input type="checkbox" /> Tables </label><br />


<label><input type="checkbox" /> **Labels:**</label>
- <label><input type="checkbox" /> **Links:** Labels should be unique unless they have the same URL. They should be descriptive and informative.</label>
- <label><input type="checkbox" /> **Buttons and form controls:**</label>
  - Confirm that all form controls have effective labels. (Remember that there is a difference between being accessible and having a *good*, accessible experience. Clear, descriptive labels help create a better experience.)
  - **Expandable buttons:** There should be some indication that a button has the expandable control.
- <label><input type="checkbox" /> **Form inputs:** These inputs should have a label — even if it's not visible.</label>
- <label><input type="checkbox" /> **Icons**: Even if you don’t visibly see text, there should still be some kind of text for screen readers.</label>
- <label><input type="checkbox" /> **Images**: Check all images for proper alt text. The exception to this practice is when images are primarily for presentation purposes and are not essential pieces of content. To signify that an image should be skipped by a screen reader, set the value of the alt attribute to an empty string: `alt=””`.</label>
- <label><input type="checkbox" /> **Landmarks:** Landmark regions should have labels when there is more than one type of landmark and they are not the same (such as navigation, main, form, etc.).
Section element shouldn’t be used unless it has a label.</label>
- <label><input type="checkbox" /> **Tables**: Can you tell what the table is and what’s in it? [WebAIM has additional guidance on this.](https://webaim.org/techniques/tables/)</label>
- <label><input type="checkbox" /> **Aria**: If there is visible text then there doesn’t need to be an `aria-label`. Aria provides more descriptive details to screen reader users. It doesn’t have to reiterate or override what might already be there so you should check that your aria is useful.</label>
  - It’s important to understand that ARIA can only affect the _semantics_ of an element; it has no effect on the _behavior_ of the element. For example, while you can hide an element from screen readers with `aria-hidden=”true”`, that does not change the focus behavior for that element. 
