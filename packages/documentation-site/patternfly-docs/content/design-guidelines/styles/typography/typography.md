---
id: Typography
section: design-foundations
---

import { Button, Grid, GridItem } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';
import { TypographyGrid, LineHeightTitle, SpacingContentItem, Spacer, TitleLevel, styleProps } from './typography';
import correct from './typography_correct_spacing.png';
import incorrect from './typography_incorrect_spacing.png';
import './typography.css';

## PatternFly fonts
PatternFly's fonts include **Red Hat Display** and **Red Hat Text**. For larger text, such as headings, use Red Hat Display. For smaller text, subheadings, and body text, use Red Hat Text, which is more readable for long-form text. You can [download PatternFly's fonts from GitHub.](https://github.com/RedHatOfficial/RedHatFont)

## Usage 
Use typography to create visual hierarchy. A consistent and logical hierarchy makes it easier for users to quickly scan and understand information on a page.

There are two PatternFly components that can be used to place text content on a page: the [text component](/components/text) and the [title component](/components/title). The text component should be used to create formatted blocks of text content. It accepts all general HTML text formatting tags, including heading, paragraph, and list styles. The title component is intended to be used specifically for headings or title text in components. This component is flexible and allows you to set the size of the text and heading level independently.

## PatternFly text styles 
The following sections outline common text styles that are used in PatternFly applications, how they should be used, and list settings in a table. These tables include the following information: 

- **Text style:** The name used to refer to that text style in the [PatternFly design kit](/get-started/design#getting-the-design-kit).

- **Font family, font weight, line height, and font size:** The styles applied to the text style.

- **Font size CSS variable:** The CSS variable that controls the size of your text. You can customize type sizes in your application by modifying the values associated with these variables. In general, this is not advised, and should be done with caution, as changes to text style can have far reaching side effects on spacing within certain components.

### Super hero heading (4xl)
**Note:** Use only for extra large titles in cards or similar locations. Do not use for page titles.
<TitleLevel
  className="pf-v5-c-title pf-m-lg ws-title-level-heading"
  asGrid
  styleProps={styleProps.superHero} />

### Hero heading (3xl)
**Note:** Use only for extra large titles in cards or similar locations. Do not use for page titles.

<TitleLevel
  className="pf-v5-c-title pf-m-lg ws-title-level-heading"
  asGrid
  styleProps={styleProps.hero} />

### First level heading (2xl, H1)
**Note**: Only 1 first level/H1 heading should ever exist on a page.
<TitleLevel
  className="pf-v5-c-title pf-m-lg ws-title-level-heading"
  asGrid
  styleProps={styleProps.first} />

### Second level heading (xl, H2)
<TitleLevel
  className="pf-v5-c-title pf-m-lg ws-title-level-heading"
  asGrid
  styleProps={styleProps.second} />

### Third level heading (lg, H3)
<TitleLevel
  className="pf-v5-c-title pf-m-lg ws-title-level-heading"
  asGrid
  styleProps={styleProps.third} />

### Fourth level heading (md, H4)
<TitleLevel
  className="pf-v5-c-title pf-m-lg ws-title-level-heading"
  asGrid
  styleProps = {styleProps.fourth} />

### Default body text 
**Note:** This is the default text style for paragraphs, lists, tables, etc. Some components instead use Red Hat Text at 700 font weight, which is Red Hat Text Medium (such as alerts and navigation).
<TitleLevel
  className="pf-v5-c-title pf-m-lg ws-title-level-heading"
  asGrid
  styleProps = {styleProps.body} />

### Small text
<TitleLevel
  className="pf-v5-c-title pf-m-lg ws-title-level-heading"
  asGrid
  styleProps = {styleProps.small} />

### Tiny text
<TitleLevel
  className="pf-v5-c-title pf-m-lg ws-title-level-heading"
  asGrid
  styleProps = {styleProps.tiny} />

### Code
**Note:** Used for code blocks.
<TitleLevel
  className="pf-v5-c-title pf-m-lg ws-title-level-heading"
  asGrid
  styleProps = {styleProps.code} />

## Customizing heading levels
If you use the [title component](/components/title) to create headings on your page, you can modify the default relationship between heading levels and text sizes. When using title, you must specify a heading level that will apply to the target text. The following table shows the default mapping of heading level to text size:

| Heading level | Default size|
|----|-----------|
| H1 | 2xl (24px)|
| H2 | xl (20px) |
| H3 | lg (18px) |
| H4 | md (16px) |
| H5 | md (16px) |
| H6 | md (16px) |

The title component allows you to customize the visual hierarchy of text on your page, while keeping the semantic hierarchy consistent with expectations for accessibility. 

For example, you may decide that 20px secondary headings are too large and you want to drop the size of these headings from 20px (xl) to 18px (lg). Rather than make your secondary headings H3’s, you should use the title component to keep them as H2 headings, but change the associated text size from `xl` to `lg`. You can also choose to use larger primary headers by changing the default text size as the title component will support text sizes up to 4xl (36px).

No matter which visual customizations you choose to make, you should always maintain good visual hierarchy and mapping between heading levels and text sizes. In most cases, H1 should always be your largest heading and subheadings should get progressively smaller as you move down the hierarchy. Exceptions to this rule do occur. For example, there might be cases where card titles will use a text size that is larger than the H1 page title. You should use this approach sparingly and only when it may be important to highlight critical data.

## Line height and spacing
Your text's line height has an impact on the use of [spacers](/design-foundations/spacers) in your design.

Line height is measured in in pixels, and can be calculated by multiplying the font's built-in line height by the text size. 

For example, if a body of text uses a line height of 1.5 and the body text size is 16px, the final line height would be 24 px (16 * 1.5 = 24). In this case, include the 24px line height as part of the text when creating designs in the design software. 

<Grid>
  <GridItem span={12}>
    <LineHeightTitle>
      <CheckCircleIcon color="#52A549" />
      <span style={{marginLeft: 'var(--pf-v5-global--spacer--sm)'}}>Correct</span>
    </LineHeightTitle>
    <div>Include line height space when laying out text with spacers.</div>
    <img alt="correct line height space example" style={{maxHeight: '158px', padding: '16px'}} src={correct} />
  </GridItem>
  <GridItem span={12}>
    <LineHeightTitle>
      <TimesCircleIcon color="#CC0000" />
      <span style={{marginLeft: 'var(--pf-v5-global--spacer--sm)'}}>Incorrect</span>
    </LineHeightTitle>
    <div>Don't align spacing solely to the text. Always include the line height space.</div>
    <img alt="incorrect line height space example" style={{maxHeight: '124px', padding: '16px'}} src={incorrect} />
  </GridItem>
</Grid>

Note that the [text](/components/text) and [title](/components/title) components will automatically apply the proper line height and spacing according to the specified text style.