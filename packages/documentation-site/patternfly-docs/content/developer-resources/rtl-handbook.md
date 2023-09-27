---
id: Right-to-left handbook
title: PatternFly right-to-left handbook
section: developer-resources

---

To allow for internationalization of your product's content, it is important to implement bidirectional language support by developing for both right-to-left (RTL) and left-to-right (LTR) languages. 

The default browser behavior displays content following LTR formatting. In order to support RTL languages like Arabic and Hebrew, you will need to explicitly add RTL support. To support RTL languages the browser uses `dir="RTL"` and `lang="{language code}"` to lay out the page appropriately for the selected language. Setting `dir="RTL"` causes the browser to reverse and lay out the contents from right to left. The W3C provides [information about internationalization and the bidirectional algorithm](https://www.w3.org/International/techniques/authoring-html#direction).

## Support in PatternFly

### Components 

PatternFly components have been written to use [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values) - `block-start`, `inline-end`, `block-end`, and `inline-start` - rather than `top`, `right`, `bottom`, and `left`. This allows styles like margin and padding to be correctly laid out in both LTR and RTL. However, to avoid a sweeping breaking change, PatternFly variable names still use `top`, `bottom`, `left`, and `right`.

**Note:** An exception to this support is with any components using popper.js, like tooltips and popovers. 

### Charts 

To support RTL across PatternFly charts, we've added a new `legendDirection` property to the
`<Chart>`, `<ChartPie>`, `<ChartBullet>`, `<ChartDonut>`, and `<ChartDonutUtilization>` components. This property allows you to adjust the direction of chart legend labels. When in RTL, the value of this property should be set to "rtl". 

Additionally, when in RTL, ensure that the `<ChartAxis>` representing a chart's x-axis uses the `invertAxis` property to flip the axis.

**Note:** When using self-defined custom legends and label components, RTL support must be handled manually as `legendDirection` does not apply to custom implementations.

### Icons
PatternFly components have also been written to reverse directional icons that are part of the component. For example, the caret indicating expansion of various components is properly reversed. 

Care should be taken to handle icons appropriately for RTL. Some icons you may have in your interface will not be mirrored automatically. [Sometimes an icon should be reversed in RTL](https://m2.material.io/design/usability/bidirectionality.html#mirroring-elements) (for example, when indicating a direction such as an expansion caret), and sometimes it should not be reversed (such as a logo, or an icon indicating time). When an icon *should* be reversed, but isn't reverse automatically, you can use the modifier `.pf-v5-m-mirror-inline-rtl`.

## PatternFly modifiers supporting RTL

-To reverse an icon or other element when in RTL, use the modifier class `.pf-v5-m-mirror-inline-rtl` or the `shouldMirrorRTL` property of the `<Icon>` React component.

To set direction manually on an element, use `.pf-v5-m-dir-ltr` or `.pf-v5-m-dir-rtl`.

To get the inverse of a number, dimension, or percentage, you can multiply by the variable `--pf-v5-global--inverse--multiplier`, which will have a value of 1 in LTR and -1 in RTL.

## Best practices and resources
- There are [many nuances to how content is laid out through LTR and RTL](https://ltr.wtf/explained/bidiintro.html#the-good-the-bad-and-the-ugly), so it isn't always obvious what the correct result should be. Testing your site with native speakers is always recommended. 
- The W3C's guide for [inline markup and bidirectional text in HTML](https://www.w3.org/International/articles/inline-bidi-markup/) explains how to write HTML within a paragraph or other inline content. 
- The W3C's guide for [structural markup and right-to-left text in HTML](https://www.w3.org/International/articles/inline-bidi-markup/) covers ways of handling text direction at the document level and for elements.
- Material Design summarizes [which UI elements should be reversed in an RTL layout](https://m2.material.io/design/usability/bidirectionality.html#mirroring-layout).
- For a comprehensive discussion on RTL styling, refer to the [RTL Styling 101](https://rtlstyling.com/posts/rtl-styling) guide.