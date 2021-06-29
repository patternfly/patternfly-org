---
id: Product development guide
section: accessibility
---
import { AccessibilityDatalist } from './accessibility-datalist.js';

## General questions to consider

To assess how accessible your applications or products are, consider these questions:
- **Is it discoverable/perceivable by all users?** If you can see or click on it, then it should be discoverable and perceivable by all users. You should determine if you can easily navigate to it by keyboard or by screen reader.
- **Is it interactable?** If you can get to it, it should be easy to actually use once you’ve focused on the element. You should be able to interact with it by keyboard (for example, if it’s a button, can you press **Enter** to initiate the action?). Also use a screen reader to ensure you can initiate the action.
- **Is it understandable?** If the element can be found and interacted with, it should be clear what this action does. If it’s a button, you should determine if it has visible text that would be clear out of context of the page. If it doesn’t have visible text, you should check if it has an aria-label or accessible name.


## What products should address

Keep in mind that while PatternFly provides accessible components, we can't guarantee that your products will be accessible. There are a few items outside the scope of PatternFly, so you should keep these items in mind to ensure accessibility in anything you build: 
<br />


<AccessibilityDatalist />

<br />

## Techniques
The [WCAG 2.0 techniques](https://www.w3.org/TR/WCAG20-TECHS/Overview.html#contents) provide examples on how to meet accessibility guidelines. The techniques listed below are adopted as standard within PatternFly for handling specific patterns.


### Labeling with Aria
For sighted users, the context and visual appearance of an element can provide sufficient cues to determine the purpose. But in some situations, this isn’t the case. For example, the X often used in the top-right corner of pop-up divs (light boxes) to indicate the control for closing the div might not be clear to those using assistive technology. 

<img src="./Popover.png" alt="Popover example of close button" />

Aria supplements HTML so that interactions and widgets commonly used in applications can be passed to assistive technologies when there is not otherwise a mechanism natively. 

Only use labels when necessary to make it accessible. If there is visible text, then there doesn’t need to be an aria-label. Aria is meant to add context (through labeling or description) for screen reader users when there isn’t visible text, not override or reiterate what’s already there. If there is visible text, aria might reiterate or override the visible text, so check that your aria is useful.

It’s important to understand that aria can only affect the semantics of an element; it has no effect on the behavior of the element. For example, while you can make an element hidden to screen readers with `aria-hidden=”true”`, that does not change the focus behavior for that element.


### Form fields

Use [explicit linking](https://www.w3.org/TR/WCAG20-TECHS/H44.html) between `label` and form input elements (e.g. `input`, `textarea`, or `select`) when both elements are present. Aside from providing an accessible name to screen readers, this method also increases the clickable area of the form element by making the label clickable, too. ([H44](//www.w3.org/TR/WCAG20-TECHS/H44.html))

When a `label` element cannot accompany a form input element, provide the label using using `aria-label` or `aria-labelledby`. ([ARIA14](//www.w3.org/TR/WCAG20-TECHS/ARIA14.html)) In a single-field form, the submit button label can serve as the field label for sighted users ([G167](//www.w3.org/TR/WCAG20-TECHS/general.html#G167)) as well as assistive devices when using `aria-labelledby`


### Icons

Add `aria-hidden='true' for all icons, either to the icon element or a parent element of the icon. This renders the icon as something that assistive devices can ignore.

When accessibility is concerned, there are two main categories of icons:
- **Decorative icons** are icons that can be removed without affecting the page's information.
- **Semantic icons** are icons that provide information that isn't present on the page. For example, semantic icons can represent status, indicate an alert message type, or replace text as button labels.

The meaning of a semantic icon must be provided in alternative ways to the user. Additionally, follow these guidelines for semantic icons:

- Add a label for the icon in tooltip text that displays on hover and on focus for focusable elements. 

- For **interactive elements** like `<a>` and `<button>` where an icon is used as the label instead of text, provide the label on the interactive element using aria-label. 

  Example: 

    ```html noLive
    <button class="..." aria-label="Close Dialog">
      <i class="..." aria-hidden="true"></i>
    </button>
    ```

- For **non-interactive icons**, include .pf-screen-reader text near the icon. Depending on the component, the .pf-screen-reader text might not be a direct sibling to the icon element.  

  Example: In the alert component, the icon label text is adjacent to the message. This way, when role="alert" is added to .pf-c-alert__body for dynamically displayed alerts, the type of message is announced along with the message text.

    ```html noLive
    <div class="pf-c-alert pf-m-success" aria-label="Success Alert">
      <div aria-hidden="true" class="pf-c-alert__icon">
        <i class="fas fa-check-circle"></i>
      </div>
      <div class="pf-c-alert__body">
        <h4 class="pf-c-alert__title">
          {{#> screen-reader}}Success:{{/screen-reader}} Success alert title
        </h4>
      </div>
    </div>
    ```

### Images
All images should have alt text so that assistive technology can provide an image description. This will help your site’s SEO, too. When an image contains words that are important to understanding the content, the alt text should include those words. This allows the alt text to play the same function on the page as the image. 

**Note**: Alt text does not necessarily describe the visual characteristics of the image itself. It just needs to convey the same meaning as the image. 

The exception to this practice is when images are primarily for presentation purposes and are not essential pieces of content. To signify that an image should be skipped by a screen reader, set the value of the alt attribute to an empty string, such as **alt=””**.

### Trapping focus
The recommended interaction pattern for the modal components like the modal or popover is to trap focus within the modal element of the component when it becomes visible.  

- For keyboard-only users that use the tab key to navigate the interface, this means that focus cannot be shifted outside of the modal when using the tab key. Instead, when focus leaves the last focusable item, it should be placed on the first focusable item of the modal. 
- For screen reader users, the other contents on the page should be hidden from the screen reader.

Based on the [screen reader / browser combinations](https://www.patternfly.org/v4/get-started/accessibility-guide#testing) we use for testing, we recommend applying `aria-hidden="true"` to the parent wrapping element of the page contents. Note that the modal element of the component must not be a descendent of this element with `aria-hidden="true"` and should be included as a sibling to this element.
