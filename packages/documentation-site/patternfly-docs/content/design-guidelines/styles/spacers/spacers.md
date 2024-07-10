---
id: Spacers
section: design-foundations
---
import './spacers.css';


PatternFly designs use spacers to define fixed amounts of space between elements. Spacers make it easy for designers to maintain consistency across screens and  simplify the design handoff between designers and developers.

To see a list of all PatternFly spacer tokens, [search our list of design tokens.](/tokens/all-patternfly-tokens/)

<div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row pf-v6-u-mb-lg">
  <div class="ws-content-spacer4">
  </div>
  <div class="pf-v6-u-display-flex pf-v6-u-flex-direction-column">
    <div class="ws-content-spacerTitle">4px spacer</div>
    <div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row">
      <p class="pf-v6-u-my-0 pf-v6-u-mr-sm ws-content-p">Global CSS variable </p>
      <code className="ws-code">--pf-t--global--spacer--xs</code>
    </div>
  </div>
</div>

<div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row pf-v6-u-mb-lg">
  <div class="ws-content-spacer8">
  </div>
  <div class="pf-v6-u-display-flex pf-v6-u-flex-direction-column">
    <div class="ws-content-spacerTitle">8px spacer</div>
    <div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row">
      <p class="pf-v6-u-my-0 pf-v6-u-mr-sm ws-content-p">Global CSS variable </p>
      <code className="ws-code">--pf-t--global--spacer--sm</code>
    </div>
  </div>
</div>

<div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row pf-v6-u-mb-lg">
  <div class="ws-content-spacer16">
  </div>
  <div class="pf-v6-u-display-flex pf-v6-u-flex-direction-column">
    <div class="ws-content-spacerTitle">16px spacer</div>
    <div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row">
      <p class="pf-v6-u-my-0 pf-v6-u-mr-sm ws-content-p">Global CSS variable </p>
      <code className="ws-code">--pf-t--global--spacer--md</code>
    </div>
  </div>
</div>

<div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row pf-v6-u-mb-lg">
  <div class="ws-content-spacer24">
  </div>
  <div class="pf-v6-u-display-flex pf-v6-u-flex-direction-column">
    <div class="ws-content-spacerTitle">24px spacer</div>
    <div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row">
      <p class="pf-v6-u-my-0 pf-v6-u-mr-sm ws-content-p">Global CSS variable </p>
      <code className="ws-code">--pf-t--global--spacer--lg</code>
    </div>
  </div>
</div>

<div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row pf-v6-u-mb-lg">
  <div class="ws-content-spacer32">
  </div>
  <div class="pf-v6-u-display-flex pf-v6-u-flex-direction-column">
    <div class="ws-content-spacerTitle">32px spacer</div>
    <div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row">
      <p class="pf-v6-u-my-0 pf-v6-u-mr-sm ws-content-p">Global CSS variable </p>
      <code className="ws-code">--pf-t--global--spacer--xl</code>
    </div>
  </div>
</div>

<div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row pf-v6-u-mb-lg">
  <div class="ws-content-spacer48">
  </div>
  <div class="pf-v6-u-display-flex pf-v6-u-flex-direction-column">
    <div class="ws-content-spacerTitle">48px spacer</div>
    <div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row">
      <p class="pf-v6-u-my-0 pf-v6-u-mr-sm ws-content-p">Global CSS variable </p>
      <code className="ws-code">--pf-t--global--spacer--2xl</code>
    </div>
  </div>
</div>

<div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row pf-v6-u-mb-lg">
  <div class="ws-content-spacer64">
  </div>
  <div class="pf-v6-u-display-flex pf-v6-u-flex-direction-column">
    <div class="ws-content-spacerTitle">64px spacer</div>
    <div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row">
      <p class="pf-v6-u-my-0 pf-v6-u-mr-sm ws-content-p">Global CSS variable </p>
      <code className="ws-code">--pf-t--global--spacer--3xl</code>
    </div>
  </div>
</div>

<div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row pf-v6-u-mb-lg">
  <div class="ws-content-spacer80">
  </div>
  <div class="pf-v6-u-display-flex pf-v6-u-flex-direction-column">
    <div class="ws-content-spacerTitle">80px spacer</div>
    <div class="pf-v6-u-display-flex pf-v6-u-flex-direction-row">
      <p class="pf-v6-u-my-0 pf-v6-u-mr-sm ws-content-p">Global CSS variable </p>
      <code className="ws-code">--pf-t--global--spacer--4xl</code>
    </div>
  </div>
</div>

## Best practices

When using spacers, adhere to the following best practices: 

- Include spacers in your designs to make it easy for developers to quickly see what size spacer you are using between elements.
- **Do not** use spacers to design flexible layouts that utilize responsive measurement variables.
- **Do not** use spacers to define both horizontal and vertical space at the same time. Spacers should only be used to define a single spacing variable.

## Considering line height and padding

There are additional considerations to keep in mind when adapting spacers to different line heights and padding, which are common with PatternFly components and text content.

### Using spacers with components

Some components like icons, buttons, and input fields, have a fixed amount of padding built in. Remember to account for this extra space when laying the content out on your page. You may not have as much horizontal or vertical room as you think.

<img src="./padding-example.png" alt="Spacers example" style="background-color: var(--pf-v6-global--palette--white)" />

### Using spacers with text 

When using spacers with text-based content, you should consider line height to ensure that you’re leaving the right amount of vertical space between each line of text. 

  <div class="content-inner-div">
    <div class="ws-content-border" style="font-size: 36px;">
      Design is a journey of discovery
    </div>
    <div class="ws-content-spacer16" style="height: 16px;">
    </div>
    <p class="ws-content-border ws-content-p">
  Body text should be Red Hat Text at 16px. It should have 24px of lead space because of its relative line height of 1.5.
    </p>
  </div>

You also need to use different spacer sizes depending on the type of text you’re using. For example, you’ll need to provide a 16px spacer between a title and body copy, but only an 8px spacer between items in a bulleted or numbered list.

  <div class="content-inner-div">
    <div class="ws-content-border" style="font-size: 28px">
      Design is a journey of discovery
    </div>
    <div class="ws-content-spacer16" style="height: 16px;">
    </div>
    <p class="ws-content-border ws-content-p" style="margin-bottom: 0;">
      Body text should be Red Hat Text at 16px. It should have 24px of leading because of its relative line height of 1.5.
    </p>
    <div class="ws-content-spacer24" style="height: 24px;">
    </div>
    <div class="h2 ws-content-border">
      Design is a journey of discovery
    </div>
    <div class="ws-content-spacer16" style="height: 16px;">
    </div>
    <p class="ws-content-border ws-content-p" style="margin-bottom: 0;">
      Body text should be Red Hat Text at 16px. It should have 24px of leading because of its relative line height of 1.5.
    </p>
    <div class="ws-content-spacer16" style="height: 16px;">
    </div>
    <p class="ws-content-border ws-content-p" style="margin-bottom: 0;">
      1. Lists should use body text style with 8px between items.
    </p>
    <div class="ws-content-spacer8" style="height: 8px;">
    </div>
    <p class="ws-content-border ws-content-p" style="margin-bottom: 0;">
      2. This is the second item in the list.
    </p>
    <div class="ws-content-spacer8" style="height: 8px;">
    </div>
    <p class="ws-content-border ws-content-p" style="margin-bottom: 0;">
      a. Secondary items in the list should use 8px spacing.
    </p>
    <div class="ws-content-spacer8" style="height: 8px;">
    </div>
    <p class="ws-content-border ws-content-p" style="margin-bottom: 0;">
      b. They still use the same text styling, however.
    </p>
  </div>

For more information about line height and typography, read our [typography guidelines.](/design-foundations/typography)

