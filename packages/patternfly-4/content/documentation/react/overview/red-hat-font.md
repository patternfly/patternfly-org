---
path: "/documentation/react/overview/red-hat-font/"
---
# Red Hat font in PatternFly

PR - [https://github.com/patternfly/patternfly-next/pull/1813](https://github.com/patternfly/patternfly-next/pull/1813)

Full list of changes - [https://github.com/patternfly/patternfly-next/pull/1813/files](https://github.com/patternfly/patternfly-next/pull/1813/files)

Available in [v2.18.0](https://github.com/patternfly/patternfly-next/releases/tag/v2.18.0)

## To opt-in to the new font

PatternFly has introduced two new fonts - Red Hat Text and Red Hat Display which replace the current Overpass font. These new fonts are feature characteristics which improve the performance and legibility at any type size. They are also designed to support more browsers than the current Overpass font.

The new font will be available in parallel with the current Overpass font to give teams an easier transition period.

Simply add the class `.pf-m-redhat-font` to an element that wraps your application (ideally `<html>` or `<body>`) to adopt the CSS changes that introduce the Red Hat font into PatternFly.

## Changes introduced from this PR that are available whether you opt-in to the new font or not:

-   The Red Hat font has 2 variations ("text" and "display"), and this PR adds font families for both variations. Each font variation was designed with specific characteristics which allow them to perform best in their specific contexts. For more information, see the [RedHatOfficial/RedHatFont repo](https://github.com/RedHatOfficial/RedHatFont/).

	-   "RedHatText": uses a smaller/lighter character with hinting that enables it to fit the pixel grid well at smaller sizes like body text.
		-   `--pf-global--FontFamily--redhatfont--sans-serif`
		-   Font weights
			-   400 (normal)
			-   700 (bold)

	-   "RedHatDisplay": uses a wider/heavier character which matches our logo and is designed to be used for headings and other large sizes.
		-   `--pf-global--FontFamily--redhatfont--heading--sans-serif`
		-   Font weights
			-   300 (light - rarely used)
			-   400 (normal)
			-   700 (bold)

-   Adds new global variable for use with RedHatDisplay
	-   `--pf-global--FontFamily--heading--sans-serif`

-   No longer using a semi-bold font weight with RedHatDisplay/RedHatText

-   Adds new variable for "bold" for use with RedHatDisplay/RedHatText since the bold value was 600 with Overpass, and is now 700 with RedHatDisplay/RedHatText
	-   `--pf-global--FontWeight--redhatfont--bold`

-   Changes the value for `--pf-global--FontSize--xl` from 21px to 20px    
	-   Works better on a mathematical scale for relative sizing

### The following CSS changes are introduced when you apply `.pf-m-redhat-font`:

#### Global variables:

-   SansSerif font var changes from Overpass to RedHatText
    
-   Heading font var defined as RedHatDisplay
    
-   Bold font var changes from 600 to 700
    
-   Semi-bold font var maps to the bold font var
    
-   Link font-weight changes from semi-bold to normal

#### Title component

-   Font-family changes to RedHatDisplay
    
-   The large (`.pf-m-lg`) and medium (`.pf-m-md`) variations’ font-weight changes from semi-bold to normal

#### Expandable component

-   Toggle font-weight changes from semi-bold to normal

#### Empty state component

-   Title font-size is now defined as `--pf-global--FontSize--xl` (20px)

#### Content component

-   `<h1>` - `<h6>` use RedHatDisplay
    
-   `<h2>` line-height changes from `--pf-global--LineHeight--sm` (1.3) to `--pf-global--LineHeight--md` (1.5)
    
-   `<blockquote>` font-weight changes from light to normal
    
-   `<h4>`, `<h5>`, and `<h6>` font-weight changes from semi-bold to normal

#### Card component

-   Card header font-weight is defined as bold
    
-   Card header font-family is defined as RedHatText

#### Button component

-   Font-weight changes from semi-bold to normal

#### Breadcrumb component

-   Link and item font-weight changes from semi-bold to normal

#### Alert component

-   Title now defined as bold

## A note about existing overrides of PatternFly CSS in your application:

With the CSS changes listed above, each change is defined in a `.pf-m-redhat-font` selector in the PatternFly CSS. That means that these variable overrides and new declarations are all in selectors that have a CSS specificity of 10 higher than they would normally.

For example, the existing selector in PatternFly below has a specificity of 10:
```
.pf-c-title {
	--pf-c-title--m-lg--FontWeight: var(--pf-global--FontWeight--normal);
}
```

When opting-in to the new font, that variable is now overridden as below, and the selector has a specificity of 20:
```
.pf-m-redhat-font .pf-c-title {
	--pf-c-title--m-lg--FontWeight: var(--pf-global--FontWeight--normal);
}
```
  

So in your application, if you had overridden `--pf-c-title--m-lg--FontWeight` in your own CSS by defining your override after PatternFly’s CSS in the loading order and using a selector that has the same specificity as the original rule (10) from PatternFly, you will now need to increase the specificity of your override’s rule to match or exceed 20 for your override to still apply after opting-in to the new font.