---
title: Typography
author: Jenny
layout: page
---
# Typography

PatternFly uses Open Sans, an open-licensed, sans serif, typeface designed by Steve Matteson. The type family includes a complete 897 character set, along with Cyrillic character sets. There are ten type-face variants available with this font. Use the CSS rule “@font-face” to include these fonts in your application styles. For more information, check out [Mozilla Developer Network's @font-face Summary](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face).

![#open-sans-image](img/open-sans-image.png)
___

## Typographic Styles

The below style samples represent commonly-used typographic layouts. Check out more samples including description lists, alignment classes, unstyled lists, and inline lists on the [PatternFly Typography test page](https://rawgit.com/patternfly/patternfly/master-dist/dist/tests/typography-2.html).

<h1> Application Heading (h1)</h1>

<h2> Level 2 Heading </h2>

<h3> Level 3 Heading </h3>

<hr />

<b id="style-samples">Style Samples</b>

<section>

<small>This line of small text is meant to be treated as fine print.</small>

<p>
  The following snippet of text is <strong>rendered as bold text</strong>.
</p>

<p>
  The following snippet of text is <em>rendered as italicized text</em>.
</p>

<p>
  The following snippet of text is <a href="#">rendered as link text</a>.
</p></section>

<hr />

| Style                  | Point Size | Weight        | Line Height | Usage                                                                                            |
|------------------------|------------|---------------|-------------|--------------------------------------------------------------------------------------------------|
| Application Header h1  | 24         | 300 (Light)   | 1.1em       | Only to be used in the Application Name at Top of Screen                                         |
| Level 2 Header h2      | 22         | 300 (Light)   | 1.1em       | Only to be used in the Second-Level Headers.                                                     |
| Level 3 Header h3      | 16         | 500 (Regular) | 1.1em       | Only to be used in the Third-Level Headers.                                                      |
| Lead Body Copy         | 13         | 300 (Light)   | 1.4em       | Should only be used before regular body text, for larger ideas or descriptions before real data. |
| Body Copy              | 12         | 500 (Regular) | 1.666em     | This base font size is used for all content and data, with the exception of Lead Body Copy.      |
| Body Copy (Bolded)     | 12         | 700 (Bold)    | 1.666em     | This should be used for descriptors, and for emphasized text.                                    |
| Body Copy (Italicized) | 12         | Italic        | 1.666em     | Italics should be used sparingly. See the PatternFly Typography test page for an example.        |
| Link Text              | 12         | 500 (Regular) | 1.666em     | Link text should always be blue (#0088ce), and should never be underlined.                       |
| Small Text             | 10         | 500 (Regular) | 1.666em     | This is the minimum font size. Use sparingly, only as needed.                                                                   |
{:.table .table-striped .table-bordered}
___

<b>List Samples</b> 
<section>

<div class="row">
  <div class="col-sm-6 col-md-3">
    <h4>
      Unordered
    </h4>

    <ul>
      <li>
        Lorem ipsum
      </li>
      <li>
        Consectetur <ul>
          <li>
            Phasellus
          </li>
          <li>
            Purus
          </li>
        </ul>
      </li>

      <li>
        Faucibus
      </li>
      <li>
        Aenean sit
      </li>
    </ul>
  </div>

  <!-- /col -->

  <div class="col-sm-6 col-md-3">
    <h4>
      Ordered
    </h4>

    <ol>
      <li>
        Lorem
      </li>
      <li>
        Consectetur
      </li>
      <li>
        Aenean sit
      </li>
      <li>
        Eget
      </li>
    </ol>
  </div>

  <!-- /col -->

  <div class="clearfix visible-sm">
  </div>

  <div class="col-sm-6 col-md-3">
    <h4>
      Unstyled
    </h4>

    <ul class="list-unstyled">
      <li>
        Lorem
      </li>
      <li>
        Consectetur
      </li>
      <li>
        Nulla <ul>
          <li>
            Phasellus
          </li>
          <li>
            Purus
          </li>
        </ul>
      </li>

      <li>
        Faucibus
      </li>
      <li>
        Aenean
      </li>
      <li>
        Eget
      </li>
    </ul>
  </div>

  <!-- /col -->

  <div class="col-sm-6 col-md-3">
    <h4>
      Inline
    </h4>

    <ul class="list-inline">
      <li>
        Lorem ipsum
      </li>
      <li>
        Phasellus
      </li>
      <li>
        Nulla
      </li>
    </ul>
  </div>

  <!-- /col -->
<!-- /row -->
</div>
</section>

## Color Usage

| Style 	| Color (Hex#) 	| Usage 	|
|---------------|--------------|------------------------------------------------------------------------|
| Regular Copy 	| #363636 	| This text color is used as often as possible, and always on body text. 	|
| Text Links 	| #0088ce 	| This color is reserved only for links. 	|
| Disabled Text 	| #9c9c9c 	| This color is reserved for disabled text. 	|
{:.table .table-striped .table-bordered}
