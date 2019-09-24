---
path: "/design-guidelines/styles/spacers"
---
import { Link } from 'gatsby';

# Spacers
We use spacers to define fixed amounts of space between elements. Spacers make it easy for designers to maintain consistency across screens. Since the same spacer sizes and values are built into the PatternFly codebase, spacers also majorly simplify the design handoff between designers and developers.

<div class="pf-u-display-flex pf-u-flex-direction-row pf-u-mb-lg">
  <div class="spacer4">
  </div>
  <div class="pf-u-display-flex pf-u-flex-direction-column">
    <div class="spacerTitle">4px spacer</div>
    <div class="pf-u-display-flex pf-u-flex-direction-row">
      <p class="pf-u-my-0 pf-u-mr-sm">Global CSS variable </p>
      <code>--pf-global--spacer--xs</code>
    </div>
  </div>
</div>

<div class="pf-u-display-flex pf-u-flex-direction-row pf-u-mb-lg">
  <div class="spacer8">
  </div>
  <div class="pf-u-display-flex pf-u-flex-direction-column">
    <div class="spacerTitle">8px spacer</div>
    <div class="pf-u-display-flex pf-u-flex-direction-row">
      <p class="pf-u-my-0 pf-u-mr-sm">Global CSS variable </p>
      <code>--pf-global--spacer--sm</code>
    </div>
  </div>
</div>

<div class="pf-u-display-flex pf-u-flex-direction-row pf-u-mb-lg">
  <div class="spacer16">
  </div>
  <div class="pf-u-display-flex pf-u-flex-direction-column">
    <div class="spacerTitle">16px spacer</div>
    <div class="pf-u-display-flex pf-u-flex-direction-row">
      <p class="pf-u-my-0 pf-u-mr-sm">Global CSS variable </p>
      <code>--pf-global--spacer--md</code>
    </div>
  </div>
</div>

<div class="pf-u-display-flex pf-u-flex-direction-row pf-u-mb-lg">
  <div class="spacer24">
  </div>
  <div class="pf-u-display-flex pf-u-flex-direction-column">
    <div class="spacerTitle">24px spacer</div>
    <div class="pf-u-display-flex pf-u-flex-direction-row">
      <p class="pf-u-my-0 pf-u-mr-sm">Global CSS variable </p>
      <code>--pf-global--spacer--lg</code>
    </div>
  </div>
</div>

<div class="pf-u-display-flex pf-u-flex-direction-row pf-u-mb-lg">
  <div class="spacer32">
  </div>
  <div class="pf-u-display-flex pf-u-flex-direction-column">
    <div class="spacerTitle">32px spacer</div>
    <div class="pf-u-display-flex pf-u-flex-direction-row">
      <p class="pf-u-my-0 pf-u-mr-sm">Global CSS variable </p>
      <code>--pf-global--spacer--xl</code>
    </div>
  </div>
</div>

<div class="pf-u-display-flex pf-u-flex-direction-row pf-u-mb-lg">
  <div class="spacer48">
  </div>
  <div class="pf-u-display-flex pf-u-flex-direction-column">
    <div class="spacerTitle">48px spacer</div>
    <div class="pf-u-display-flex pf-u-flex-direction-row">
      <p class="pf-u-my-0 pf-u-mr-sm">Global CSS variable </p>
      <code>--pf-global--spacer--2xl</code>
    </div>
  </div>
</div>

<div class="pf-u-display-flex pf-u-flex-direction-row pf-u-mb-lg">
  <div class="spacer64">
  </div>
  <div class="pf-u-display-flex pf-u-flex-direction-column">
    <div class="spacerTitle">64px spacer</div>
    <div class="pf-u-display-flex pf-u-flex-direction-row">
      <p class="pf-u-my-0 pf-u-mr-sm">Global CSS variable </p>
      <code>--pf-global--spacer--3xl</code>
    </div>
  </div>
</div>

<Link to="/documentation/react/css-variables">Click here for all variables</Link>
<div class="pf-u-display-flex demo pf-u-my-3xl pf-u-p-xl">
  <div class="pf-u-display-flex pf-u-flex-direction-column pf-u-mr-3xl">
    <div class="h4 correct">
      <i class="fas fa-check-circle"></i>
      Correct
    </div>
    <p>
      Include spacers in your designs to make it easy for developers to quickly see what size spacer you are using between elements.
    </p>
  </div>
  <div class="pf-u-display-flex pf-u-flex-direction-column">
    <div class="h4 incorrect">
      <i class="fas fa-exclamation-triangle"></i>
      Incorrect
    </div>
      <p>
        Don’t use spacers to design flexible layouts that utilize responsive measurement variables.
      </p>
      <p>
        Don’t use spacers to define both horizontal and vertical space at the same time - spacers should be used to define a single spacing variable.
      </p>
  </div>
</div>

<h1 class="pf-c-title pf-m-2xl">Considering line height and padding</h1>
<p>
  Certain components or elements like icons, buttons, and input fields, have a fixed amount of padding built-in. Remember to take that extra space around each element into account when laying the content out on your page. You may not have as much horizontal or vertical room as you think.
</p>
![Spacers Example](padding-example.png)
<p class="pf-u-mt-3xl">
  When laying out text-based content, remember to take line height into account so you’re leaving the right amount of vertical space between each line of text.
</p>

<div class="border" style="font-size: 36px;">
  Design is a journey of discovery
</div>
<div class="spacer16" style="height: 16px;">
</div>
<p class="border">
  Body text should be Overpass Regular at 16px. It should have leading of 24px because of its relative line height of 1.5.
</p>

<p class="pf-u-mt-3xl">
  You also need to use different spacer sizes depending on the type of text you’re using. For example, you’ll need to provide a 16px spacer between a title and body copy, but only an 8px spacer between items in a bulleted or numbered list.
</p>

<div class="border" style="font-size: 28px">
  Design is a journey of discovery
</div>
<div class="spacer16" style="height: 16px;">
</div>
<p class="border" style="margin-bottom: 0;">
  Body text should be Overpass Regular at 16px. It should have leading of 24px because of its relative line height of 1.5.
</p>
<div class="spacer24" style="height: 24px;">
</div>
<div class="h2 border">
  Design is a journey of discovery
</div>
<div class="spacer16" style="height: 16px;">
</div>
<p class="border" style="margin-bottom: 0;">
  Body text should be Overpass Regular at 16px. It should have leading of 24px because of its relative line height of 1.5.
</p>
<div class="spacer16" style="height: 16px;">
</div>
<p class="border" style="margin-bottom: 0;">
  1. Lists should use body text style with 8px between items.
</p>
<div class="spacer8" style="height: 8px;">
</div>
<p class="border" style="margin-bottom: 0;">
  2. This is the second item in the list.
</p>
<div class="spacer8" style="height: 8px;">
</div>
<p class="border" style="margin-bottom: 0;">
  a. Secondary items in the list should use 8px spacing.
</p>
<div class="spacer8" style="height: 8px;">
</div>
<p class="border" style="margin-bottom: 0;">
  b. They still use the same text styling, however.
</p>

<p class="pf-u-my-3xl">For more information about line height and typography, go to the <Link to="/design-guidelines/styles/typography">typography page</Link>.</p>
