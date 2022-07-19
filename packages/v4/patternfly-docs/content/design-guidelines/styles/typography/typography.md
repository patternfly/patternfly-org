---
id: Typography
section: guidelines
---

import { Button, Grid, GridItem } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';
import { TypographyGrid, LineHeightTitle, SpacingContentItem, Spacer, TitleLevel, styleProps } from './typography';
import correct from './typography_correct_spacing.png';
import incorrect from './typography_incorrect_spacing.png';
import './typography.css';

## Our font family
We use Red Hat Display and Red Hat Text. Red Hat Display should be used for **larger** text headlines, while Red Hat text should be used for **smaller** subheaders and body text, for better long-form readability.




<Button style={{borderRadius: '0px', fontWeight: '600', paddingTop: '12px', paddingBottom: '12px', paddingLeft: '24px', paddingRight: '24px'}} variant="primary" component="a" href="https://github.com/RedHatOfficial/RedHatFont" target="_blank">DOWNLOAD</Button>

## Usage guidelines
Use typography to create visual hierarchy. A consistent and logical hierarchy makes it easier for users to quickly scan and understand information on a page.

There are two components that can be used to place text content on a page. The [text component](/components/text) should be used for creating formatted blocks of text content and accepts all general HTML text formatting tags, including heading, paragraph, and list styles. The [title component](/components/title) is intended to be used specifically for headings or title text in cards or in similar elements. Title provides the flexibility to set the size of the text and heading level independently.

The table below lists all common text styles that are used in PatternFly applications, how they should be used, style settings, and default heading levels, where applicable. Here are further details about the information contained in the table:

* **Font family, font weight, line height, and font size:** These are the styles applied to that text category in the PatternFly CSS.

* **Text style:** This is the name used to refer to that text style in the PatternFly design kit.

* **Font size CSS variable:** This is the CSS variable that controls the size of this text. You can customize type sizes in your application by modifying the values associated with these variables. In general, this is not advised, and should only be done with caution, as changes to text style can have far reaching side effects on spacing within certain components.

<TitleLevel
  title="Super hero heading (4xl)"
  className="pf-c-title pf-m-lg"
  asGrid
  note="Use only for extra large titles in cards or similar locations. Do not use for page titles"
  styleProps={styleProps.superHero} />

<TitleLevel
    title="Hero heading (3xl)"
    className="pf-c-title pf-m-lg"
    asGrid
    note="Use only for extra large titles in cards or similar locations. Do not use for page titles"
    styleProps={styleProps.hero} />

<TitleLevel
  title="First level heading (2xl, h1)"
  className="pf-c-title pf-m-lg"
  asGrid
  note="Only one first level/h1 heading should ever exist on a page"
  styleProps={styleProps.first} />

<TitleLevel
  title="Second level heading (xl, h2)"
  className="pf-c-title pf-m-lg"
  asGrid
  styleProps={styleProps.second} />

<TitleLevel
  title="Third level heading (lg, h3)"
  className="pf-c-title pf-m-lg"
  asGrid
  styleProps={styleProps.third} />

<TitleLevel
  title="Fourth level heading (md, h4)"
  className="pf-c-title pf-m-lg"
  asGrid
  styleProps = {styleProps.fourth} />

<TitleLevel
  title="Default body text"
  className="pf-c-title pf-m-lg"
  asGrid
  note="This is the default text style for paragraphs, lists, tables, etc. Some components use RedHatText at 700 font weight, which is RedHatText Medium (such as alerts and navigation)"
  styleProps = {styleProps.body} />

<TitleLevel
  title="Small text"
  className="pf-c-title pf-m-lg"
  asGrid
  styleProps = {styleProps.small} />

<TitleLevel
  title="Tiny text"
  className="pf-c-title pf-m-lg"
  asGrid
  styleProps = {styleProps.tiny} />

<TitleLevel
  title="Code"
  className="pf-c-title pf-m-lg"
  asGrid
  note="Used for code blocks "
  styleProps = {styleProps.code} />

  ### Customizing heading levels
  If you use the [title component](/components/title) to create headings on your page, you can modify the default relationship between heading levels and text sizes. In using title, you must specify a heading level that will apply to the target text. The table below shows the default mapping of heading level to text size:


  | Heading level | Default size|
  |----|-----------|
  | h1 | 2xl (24px)|
  | h2 | xl (20px) |
  | h3 | lg (18px) |
  | h4 | md (16px) |
  | h5 | md (16px) |
  | h6 | md (16px) |


  Using this component, you can customize the visual hierarchy of text on your page while keeping the semantic hierarchy consistent with expectations for accessibility. For example, you may decide that 20px secondary headings are too large and you want to drop the size of these headings from 20px (xl) to 18px (lg). Rather than make your secondary headings h3’s, you should use the title component to keep them as h2 headings but change the associated text size from `xl` to `lg`.  You can also choose to use larger primary headers by changing the default text size as the title component will support text sizes up to 4xl (36px).

  No matter what visual customizations you choose to make, you should always maintain good visual hierarchy and mapping between heading levels and text sizes. In most cases, h1 should always be your largest heading and subheadings should get progressively smaller as you move down the hierarchy. Exceptions to this rule do occur. For example, there might be cases where card titles will use a text size that is larger than the h1 page title. We advise this approach to be used sparingly and only when it may be important to highlight critical data as in a dashboard.

## Line height and spacing
Spacing represents margins above and below text. When measuring spacing in text-based content, plan for line height. To get the correct line height in pixels, multiply line height by text size. Use spacers to provide appropriate spacing between lines of text.

For example, if a body of text uses a line height of 1.5 and the body text size is 16px, the final line height would be 24 px (16 * 1.5 = 24). In this case, include the 24px line height as part of the text when creating designs in the design software. Visit the [Spacers](/guidelines/spacers) page for more information about spacer usage.


<Grid>
  <GridItem span={12}>
    <LineHeightTitle>
      <CheckCircleIcon color="#52A549" />
      <span style={{color: '#151515', marginLeft: '8px'}}>Correct</span>
    </LineHeightTitle>
    <div>Include line height space when laying out text with spacers.</div>
    <img alt="correct line height space example" style={{maxHeight: '158px', padding: '16px'}} src={correct} />
  </GridItem>
  <GridItem span={12}>
    <LineHeightTitle>
      <TimesCircleIcon color="#CC0000" />
      <span style={{color: '#151515', marginLeft: '8px'}}>Incorrect</span>
    </LineHeightTitle>
    <div>Don't only use text to align with spacing elements when designing. Always include the line height space.</div>
    <img alt="incorrect line height space example" style={{maxHeight: '124px', padding: '16px'}} src={incorrect} />
  </GridItem>
</Grid>

Note that use of the [text](/components/text) and [title](/components/title) components will automatically apply the proper line height and spacing according to the specified text style.
