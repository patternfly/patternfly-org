---
path: "/design-guidelines/styles/typography"
---
import { Button, Grid, GridItem, Alert } from '@patternfly/react-core';
import { CheckCircleIcon, TimesCircleIcon } from '@patternfly/react-icons';
import { styles, TypographyGrid, LineHeightTitle, SpacingContentItem, Spacer, HeroTitle, SecondLevelTitle, ThirdLevelTitle, FourthLevelTitle, BodyText, SmallText, TinyText } from '@content/typography';
import correct from './typography_correct_spacing.png';
import incorrect from './typography_incorrect_spacing.png';
import { Link } from 'gatsby';
import ShadowDomPreview from '@content/../ShadowDomPreview';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

# Typography

<ShadowDomPreview isReact>
  <Alert
    variant="info"
    title="Opt-in feature"
    className="pf-u-my-md"
    isInline
  >In a future breaking-change release, the font will default to the Red Hat font. You can opt-in and update to use the Red Hat font now by wrapping your application with the ".pf-m-redhat-font" class. For more information visit the <Link to="/design-guidelines/styles/red-hat-font">Red Hat font</Link> page.</Alert>
</ShadowDomPreview>

## Our font family
We use Red Hat Display and Red Hat Text.

<Button style={{borderRadius: '0px', fontWeight: '600', paddingTop: '12px', paddingBottom: '12px', paddingLeft: '24px', paddingRight: '24px'}} variant="primary" component="a" href="https://github.com/RedHatOfficial/RedHatFont" target="_blank">DOWNLOAD</Button>

## Usage guidelines
Use our typographic styles to communicate visual hierarchy. A consistent and logical hierarchy provides a clear pattern for users, making it easier to quickly scan and understand information on a page.

<HeroTitle asGrid />
<SecondLevelTitle asGrid />
<ThirdLevelTitle asGrid />
<FourthLevelTitle asGrid />
<BodyText asGrid />
<SmallText asGrid />
<TinyText asGrid />

## Line height
<div style={{marginBottom: '32px'}}>When laying out text-based content, you need to factor in line-height when measuring spacing. Line height is a relative number used in CSS that represents a ratio to the text size. For example, body text uses a line height of 1.5. Body text size is 16px. 16*1.5 = 24px line height. So, when creating designs in design software, you must include the 24px line height as a part of the text.</div>

<Grid>
  <GridItem span={5}>
    <LineHeightTitle>
      <CheckCircleIcon color="#52A549" />
      <span style={{color: '#151515', marginLeft: '8px'}}>Correct</span>
    </LineHeightTitle>
    <div>Note how the line height space is included when laying out with spacer elements.</div>
    <img alt="correct line height space example" style={{maxHeight: '170px', padding: '16px'}} src={correct} />
  </GridItem>
  <GridItem span={2}></GridItem>
  <GridItem span={5}>
    <LineHeightTitle>
      <TimesCircleIcon color="#CC0000" />
      <span style={{color: '#151515', marginLeft: '8px'}}>Incorrect</span>
    </LineHeightTitle>
    <div>Do not use the text itself to align with spacing elements when designing. Remember to always include the line height space.</div>
    <img alt="incorrect line height space example" style={{maxHeight: '125px', padding: '16px'}} src={incorrect} />
  </GridItem>
</Grid>

## Spacing
<div style={{marginBottom: '32px'}}>The spacing of the content comes into play with line height too. It represents the margins that are padded on top and bottom of the text itself. When creating specs, it is important to use these spacers to communicate the appropriate spacing for each type of text.</div>

<div style={{display: 'flex', marginBottom: '32px'}}>
  <Spacer size="8" color="8" description="8px" />
  <Spacer size="16" color="16" description="16px" />
  <Spacer size="24" color="24" description="24px" />
  <Spacer size="24" description="Line Height" showBorder />
</div>

<Grid>
  <GridItem span={12}>
    <div css={styles.spacingItemStyle}>
      <div css={styles.spacingTitleStyle}>Hero title</div>  
    </div>
    <Spacer size="8" color="8"/>
    <div css={styles.spacingItemStyle}>
      <HeroTitle>Design is a journey of discovery</HeroTitle>
    </div>
    <Spacer size="16" color="16" />
    <div css={styles.spacingItemStyle}>
      <BodyText>Body text should be RedHatText at 16px. It should have leading of 24px because of its relative line height of 1.5.</BodyText>
    </div>
    <Spacer size="24" color="24" />
    <div css={styles.spacingItemStyle}>
      <div css={styles.spacingTitleStyle}>Second level title</div>
    </div>
    <Spacer size="8" color="8"/>
    <div css={styles.spacingItemStyle}>
      <SecondLevelTitle>Design is a journey of discovery</SecondLevelTitle>
    </div>
    <Spacer size="16" color="16" />
    <div css={styles.spacingItemStyle}>
      <BodyText>Body text should be RedHatText at 16px. It should have leading of 24px because of its relative line height of 1.5.</BodyText>
    </div>
    <Spacer size="24" color="24" />
    <div css={styles.spacingItemStyle}>
      <div css={styles.spacingTitleStyle}>Third level title</div>
    </div>
    <Spacer size="8" color="8"/>
    <div css={styles.spacingItemStyle}>
      <ThirdLevelTitle>Design is a journey of discovery</ThirdLevelTitle>
    </div>
    <Spacer size="16" color="16" />
    <div css={styles.spacingItemStyle}>
      <BodyText>1. Lists should use body text style with 8px between items.</BodyText>
    </div>
    <Spacer size="8" color="8" />
    <div css={styles.spacingItemStyle}>
      <BodyText>2. This is the second item in the list.</BodyText>
    </div>
    <Spacer size="8" color="8" />
    <div css={styles.spacingItemStyle}>
      <BodyText>&nbsp;&nbsp;&nbsp;&nbsp;a. Secondary items in the list should use 8px spacing.</BodyText>
    </div>
    <Spacer size="8" color="8" />
    <div css={styles.spacingItemStyle}>
      <BodyText>&nbsp;&nbsp;&nbsp;&nbsp;b. They still use the same text styling, however.</BodyText>
    </div>
    <Spacer size="24" color="24" />
    <div css={styles.spacingItemStyle}>
      <div css={styles.spacingTitleStyle}>Fourth level title</div>
    </div>
    <Spacer size="8" color="8" />
    <div css={styles.spacingItemStyle}>
      <FourthLevelTitle>Design is a journey of discovery</FourthLevelTitle>
    </div>
    <Spacer size="16" color="16" />
    <div css={styles.spacingItemStyle}>
      <BodyText>Body text should be RedHatText at 16px. It should have leading of 24px because of its relative line height of 1.5.</BodyText>
    </div>
    <Spacer size="24" color="24" />
    <div css={styles.spacingItemStyle}>
      <SmallText>Small text style should be RedHatText at 14px.</SmallText>
    </div>
  </GridItem>
</Grid>