---
id: Right-to-left handbook
title: PatternFly right-to-left handbook
section: developer-resources

---

To allow for internationalization of your product's content, it is important to implement bidirectional language support by developing for both right-to-left (RTL) and left-to-right (LTR) languages. 

The default browser behavior displays content following LTR formatting. To support RTL languages, like Arabic and Hebrew, you will need to explicitly add RTL support. To support RTL languages the browser uses `dir="RTL"` and `lang="{language code}"` to lay out the page appropriately for the selected language. Setting `dir="RTL"` causes the browser to reverse and lay out the contents from right to left. The W3C provides [information about internationalization and the bidirectional algorithm](https://www.w3.org/International/techniques/authoring-html#direction).

## Support in PatternFly

PatternFly components have been written to use logical properties - `block-start`, `inline-end`, `block-end`, and `inline-start` - rather than `top`, `right`, `bottom`, and `left`. This allows styles like margin and padding to be correctly laid out in both LTR and RTL. However, to avoid a sweeping breaking change, PatternFly variable names still use `top`, `bottom`, `left`, and `right`.

PatternFly components have been written to reverse directional icons that are part of the component - for example, the caret indicating expansion of various components is properly reversed. 

Other icons you may have in your interface will not be mirrored automatically, as it may be appropriate to mirror some but not others. Be sure to review all icons in your product and adjust appropriately. PatternFly has modifier classes listed below that can help with that.
<br />

## PatternFly modifiers supporting RTL

Use the modifier class `.pf-v5-m-mirror-inline-rtl` to reverse an icon or other element only when in RTL.

To set direction manually on an element, use `.pf-v5-m-dir-ltr` or `.pf-v5-m-dir-rtl`.

To reverse a value, you can multiply by the variable `--#{$pf-global}--inverse--multiplier`, which will have a value of 1 in LTR and -1 in RTL.

## Support in your product

Care should be taken to handle icons appropriately for RTL. [Sometimes an icon should be reversed in RTL](https://m2.material.io/design/usability/bidirectionality.html#mirroring-elements) (for example, when indicating a direction such as an expansion caret), and sometimes it should not be reversed (such as a logo, or an icon indicating time). When the icon should be reversed, the modifier `.pf-v5-m-mirror-inline-rtl` can be used.

## Best practices and resources
- There are [many nuances to how content is laid out through LTR and RTL](https://ltr.wtf/explained/bidiintro.html#the-good-the-bad-and-the-ugly), so it isn't always obvious what the correct result should be. Testing your site with native speakers is always recommended. 
- Material Design summarizes [which UI elements should be reversed in an RTL layout](https://m2.material.io/design/usability/bidirectionality.html#mirroring-layout).
- For a comprehensive discussion on RTL styling, refer to the [RTL Styling 101](https://rtlstyling.com/posts/rtl-styling) guide.