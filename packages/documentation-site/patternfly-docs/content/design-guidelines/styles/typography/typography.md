---
id: Typography
section: design-foundations
---

import { Button, EmptyState, EmptyStateBody, EmptyStateVariant, Grid, GridItem, Text, TextContent, TextVariants, Title } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import TimesCircleIcon from '@patternfly/react-icons/dist/esm/icons/times-circle-icon';
import { TypographyGrid, LineHeightTitle, SpacingContentItem, Spacer, TitleLevel, styleProps } from './typography';
import correct from './typography_correct_spacing.png';
import incorrect from './typography_incorrect_spacing.png';
import './typography.css';

You can use **typography** to create visual hierarchy in a UI. By creating a consistent and logical hierarchy, users can more quickly scan and understand information on a page.

This page outlines PatternFly's typography principles and standards, including token values and usage information.

You can place text content on a page using the text or title component: 
- **[Text component:](/components/text)** Used to create formatted blocks of text content. Text accepts all general HTML text formatting tags, including heading, paragraph, and list styles.
- **[Title component:](/components/title)** Used specifically for headings or title text in components. Title is flexible and allows you to set the size of the text and heading level independently.

## PatternFly fonts

We use 3 fonts in PatternFly:
- **Red Hat Display:** Used for larger text, such as headings.
- **Red Hat Text:** Used for smaller text, subheadings, and body text. More readable for long-form text. 
- **Red Hat Mono:** Used to format text as code.

[Download PatternFly's fonts from GitHub.](https://github.com/RedHatOfficial/RedHatFont)

## Headings 

All headings use Red Hat Display bold.

| Example | Tokens | Size | Line height | Usage | 
| --- | --- | --- | --- | --- |
| <Title headingLevel="h5" size='2xl'> Aa </Title> | --pf-t--global--font--size--heading--h1 | 22 | 1.3 | H1 <br /> Page titles |
| <Title headingLevel="h5" size='xl'> Aa </Title>  | --pf-t--global--font--size--heading--h2 | 20 | 1.3 | H2 |
| <Title headingLevel="h5" size='lg'> Aa </Title>  | --pf-t--global--font--size--heading--h3 | 18 | 1.3 | H3 |
| <Title headingLevel="h5" size='md'> Aa </Title>  | --pf-t--global--font--size--heading--h4 <br /> --pf-t--global--font--size--heading--h5 <br /> --pf-t--global--font--size--heading--h6 |16 | 1.3 | H4 <br /> H5 <br /> H6 |

### Customizing heading levels
The [title component](/components/title) allows you to customize the visual hierarchy of text on your page, while keeping the semantic hierarchy consistent with expectations for accessibility. If you use the title component, you can change the text size of different heading levels to customize beyond the default behavior.

For example, you may decide that the default size of 16px for secondary headings is too small and you want to increase the size from 16px (md) to 18px (lg). Rather than make your secondary headings H3’s, you should use the title component to keep them as H4 headings, but change the associated text size from `md` to `lg`. For example: 

<Title headingLevel="h4" size='md'> This is an "md" H4. </Title>

```<Title headingLevel="h5" size='md'> Aa </Title>```

<Title headingLevel="h4" size='lg'> This is a "lg" H4. </Title>

```<Title headingLevel="h5" size='lg'> Aa </Title>```

Make sure that you maintain good visual hierarchy and mapping between heading levels and text sizes. In most cases, H1 should always be your largest heading and subheadings should get progressively smaller as you move down the hierarchy. Rare exceptions to this rule do occur, but should only be used to highlight critical data. For example, there might be scenarios where card titles use a text size that is larger than the H1 page title. 

Refer to the [title component examples](/components/title#custom-sizes) to understand the range of customization options.

## Body text

All body text uses Red Hat Text.

| Example | Tokens | Size | Line height | Usage | 
| --- | --- | --- | --- | --- |
|<p style="font-size:16px">Aa</p>  | --pf-t--global--font--size--body--lg | 16 | 1.5 | Use for larger body, like within extra large empty states.  |
| <TextContent><Text component={TextVariants.p}>Aa</Text></TextContent> | --pf-t--global--font--size--body--default | 14 | 1.5 | Use for standard body text. |
| <TextContent><Text component={TextVariants.small}>Aa</Text></TextContent>  | --pf-t--global--font--size--body--sm | 12 | 1.5 | User for smaller body text, like as helper text. |

## Line height and spacing
Your text's line height has an impact on the use of [spacers](/design-foundations/spacers) in your design. 

Line height is measured in in pixels, and can be calculated by multiplying the font's built-in line height by the text size. 

For example, if a body of text uses a line height of 1.5 and the body text size is 16px, the final line height would be 24 px (16 * 1.5 = 24). In this case, include the 24px line height as part of the text when creating designs in the design software. 

<Grid>
  <GridItem span={12}>
    <LineHeightTitle>
      <CheckCircleIcon color="#52A549" />
      <span style={{marginLeft: 'var(--pf-v6-global--spacer--sm)'}}>Correct</span>
    </LineHeightTitle>
    <div>Include line height space when laying out text with spacers.</div>
    <img alt="correct line height space example" style={{maxHeight: '158px', padding: '16px'}} src={correct} />
  </GridItem>
  <GridItem span={12}>
    <LineHeightTitle>
      <TimesCircleIcon color="#CC0000" />
      <span style={{marginLeft: 'var(--pf-v6-global--spacer--sm)'}}>Incorrect</span>
    </LineHeightTitle>
    <div>Don't align spacing solely to the text. Always include the line height space.</div>
    <img alt="incorrect line height space example" style={{maxHeight: '124px', padding: '16px'}} src={incorrect} />
  </GridItem>
</Grid>
