---
id: Right to left handbook
title: PatternFly Right to Left (RTL) handbook
section: developer-resources

---

Bidirectional (Right to Left and Left to Right) language support is an important component of internationalization.

Languages such as Arabic and Hebrew display content right to left (RTL). In the case of an RTL language, the browser will use `dir="RTL"` and `lang="{language code}"` to lay out the page appropriately for the selected language. The default is to lay out the page as a Lef to Right (LTR) language, so setting `dir="RTL"` causes the browser to reverse and lay out the contents from right to left. The W3C provides [information about internationalization and the bidirectional algorithm](https://www.w3.org/TR/i18n-html-tech-bidi/).

There are [many nuances to how content is laid out in LTR/RTL](https://ltr.wtf/explained/bidiintro.html#the-good-the-bad-and-the-ugly), so it isn't always obvious what the correct result should be. Testing your site with native speakers is always recommended. 

Material Design summarizes [what should be reversed in an RTL layout](https://m2.material.io/design/usability/bidirectionality.html#mirroring-layout).

For a comprehensive discussion on RTL Styling, the [RTL Styling 101](https://rtlstyling.com/posts/rtl-styling) guide is very useful.

## Support in PatternFly

PatternFly components have been written to use logical properties - `inline-start`, `inline-end`, `block-start`, and `block-end` - rather than `top`, `bottom`, `left`, and `right` so that attributes like margin and padding will be correctly reflected when laid out in RTL. However, to avoid a sweeping breaking change, PatternFly variable names still use `top`, `bottom`, `left`, and `right`.

PatternFly components have been written to reverse directional icons that are part of the component - for example, the caret indicating expansion of various components is properly reversed.  Likewise, any components using transforms for positioning have also been handled by reversing the direction of the `translateX` value.

Other icons you may have in your interface will not be mirrored automatically, as it may be appropriate to mirror some but not others.
<br />

## Modifiers and mixins supporting RTL

Care should be taken to handle icons appropriately for RTL. [Sometimes an icon should be reversed in RTL](https://m2.material.io/design/usability/bidirectionality.html#mirroring-elements) (for example, when indicating a direction such as an expansion caret), and sometimes it should not be reversed (such as a logo, or an icon indicating time). When the icon should be reversed, the modifier `.pf-v5-m-mirror-inline-rtl` can be used.

Using logical properties handles the majority of cases - but using the `translateX` function can still present a problem. In this case, we've used a mixin that allows us to provide a value for LTR and a value for RTL. In most cases, the RTL value uses another Sass function to inverse (multiply by -1) the value so that the translate function shifts the element in the correct direction.
```
@include pf-v5-bidirectional-style(
  $prop: transform,
  $ltr-val: translateX(var(--translation-value)),
  $rtl-val: translateX(#{pf-v5-calc-inverse(var(--translation-value))})
); 
```


**Tip:** Use the modifier class `.pf-v5-m-mirror-inline-rtl` to reverse an icon or other element only when in RTL.

**Tip:** To set direction manually on an element, use `.pf-v5-m-dir-ltr` or `.pf-v5-m-dir-rtl`.

