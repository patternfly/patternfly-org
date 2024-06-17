---
id: Typography
section: design-foundations
---

import { Button, Grid, GridItem, Text, TextContent, Title } from '@patternfly/react-core';
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
- 2xl and xl are reserved for titles and h1, h2 headings
-

| Example | Token | Size | Line height | Heading level | 
| --- | --- | --- | --- | --- |
| <Title headingLevel="h5" size='2xl'> Aa </Title> |  |  |  |  |  |
| <Title headingLevel="h5" size='xl'> Aa </Title>  |  |  |  |  |  |
| <Title headingLevel="h5" size='lg'> Aa </Title>  |  |  |  |  |  |
| <Title headingLevel="h5" size='md'> Aa </Title>  |  |  |  |  |  |
| <Title headingLevel="h5" size='sm'> Aa </Title>  |  |  |  |  |  |
| <Title headingLevel="h5" size='xs'> Aa </Title>  |  |  |  |  |  |
| <Text> Aa </Text>  |  |  |  |  |  |
|   |  |  |  |  |  |


### Super hero heading (2xl)

<br /> 

|  |  |
| --- | --- | 
| **Example:** | <Title headingLevel="h5" size='2xl'> Design is where science and art break even. </Title> |
| **Usage:** | Use only for XL titles for full page empty states, cards, similar locations. Do not use for page titles.  |
| **Token:** | --pf-t--global--font--size--heading--h1 | 
| **Heading level:** | N/a | 
| **Size:** | 35 |
| **Line height:** | 1.3 |

### Hero heading (xl)

|  |  |
| --- | --- | 
| **Example:** | <Title headingLevel="h5" size='xl'> Design is where science and art break even. </Title> |
| **Usage:** | Use only for XL titles for full page empty states, cards, similar locations. Do not use for page titles.  |
| **Token:** | --pf-t--global--font--size--heading--h1 | 
| **Heading level:** | N/a | 
| **Size:** | 35 |
| **Line height:** | 1.3 |

### First level heading (2xl, H1)

<br /> 

|  |  |
| --- | --- | 
| **Example:** | <Title headingLevel="h5" size='2xl'> Design is where science and art break even. </Title> |
| **Usage:** | Use only for XL titles for full page empty states, cards, similar locations. Do not use for page titles.  |
| **Token:** | --pf-t--global--font--size--heading--h1 | 
| **Heading level:** | H1 | 
| **Size:** | 35 |
| **Line height:** | 1.3 |

### Second level heading (xl, H2) 

|  |  |
| --- | --- | 
| **Example:** | <Title headingLevel="h5" size='xl'> Design is where science and art break even. </Title> |
| **Usage:** | Use only for XL titles for full page empty states, cards, similar locations. Do not use for page titles.  |
| **Token:** | --pf-t--global--font--size--heading--h1 | 
| **Heading level:** | H2 | 
| **Size:** | 35 |
| **Line height:** | 1.3 |

### Third level heading (lg, H3) 

|  |  |
| --- | --- | 
| **Example:** | <Title headingLevel="h5" size='lg'> Design is where science and art break even. </Title> |
| **Usage:** | Use only for XL titles for full page empty states, cards, similar locations. Do not use for page titles.  |
| **Token:** | --pf-t--global--font--size--heading--h1 | 
| **Heading level:** | N/a | 
| **Size:** | 35 |
| **Line height:** | 1.3 |

### Fourth level heading (md, H4)

|  |  |
| --- | --- | 
| **Example:** | <Title headingLevel="h5" size='md'> Design is where science and art break even. </Title> |
| **Usage:** | Use only for XL titles for full page empty states, cards, similar locations. Do not use for page titles.  |
| **Token:** | --pf-t--global--font--size--heading--h1 | 
| **Heading level:** | N/a | 
| **Size:** | 35 |
| **Line height:** | 1.3 |

### Fifth level heading (sm, H4)

|  |  |
| --- | --- | 
| **Example:** | <Title headingLevel="h5" size='sm'> Design is where science and art break even. </Title> |
| **Usage:** | Use only for XL titles for full page empty states, cards, similar locations. Do not use for page titles.  |
| **Token:** | --pf-t--global--font--size--heading--h1 | 
| **Heading level:** | N/a | 
| **Size:** | 35 |
| **Line height:** | 1.3 |

### Sixth level heading (xs, H5)

|  |  |
| --- | --- | 
| **Example:** | <Title headingLevel="h5" size='xs'> Design is where science and art break even. </Title> |
| **Usage:** | Use only for XL titles for full page empty states, cards, similar locations. Do not use for page titles.  |
| **Token:** | --pf-t--global--font--size--heading--h1 | 
| **Heading level:** | N/a | 
| **Size:** | 35 |
| **Line height:** | 1.3 |

## Body text

### Default 

### Large 

### Small

## Code


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

Note that the [text](/components/text) and [title](/components/title) components will automatically apply the proper line height and spacing according to the specified text style.
