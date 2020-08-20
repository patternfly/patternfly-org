---
id: Typography
section: guidelines
---

import { Button, Grid, GridItem } from '@patternfly/react-core';
import { CheckCircleIcon, TimesCircleIcon } from '@patternfly/react-icons';
import { TypographyGrid, LineHeightTitle, SpacingContentItem, Spacer, TitleLevel, styleProps } from './typography';
import correct from './typography_correct_spacing.png';
import incorrect from './typography_incorrect_spacing.png';
import './typography.css';

## Our font family
We use Red Hat Display and Red Hat Text.

<Button style={{borderRadius: '0px', fontWeight: '600', paddingTop: '12px', paddingBottom: '12px', paddingLeft: '24px', paddingRight: '24px'}} variant="primary" component="a" href="https://github.com/RedHatOfficial/RedHatFont" target="_blank">DOWNLOAD</Button>

## Usage guidelines
Use typography to create visual hierarchy. A consistent and logical hierarchy makes it easier for users to quickly scan and understand information on a page.

<TitleLevel
  asGrid
  title="First level title*"
  note="*Not to be used in content block (such as landing pages and login screens)"
  styleProps={styleProps.first} />
<TitleLevel asGrid title="Second level title" styleProps={styleProps.second} />
<TitleLevel asGrid title="Third level title" styleProps={styleProps.third} />
<TitleLevel asGrid title="Fourth level title" styleProps = {styleProps.fourth} />
<TitleLevel
  asGrid
  title="Body*"
  note="*Some components use RedHatText at 700 font weight, which is RedHatText Medium (such as alerts and navigation)"
  styleProps = {styleProps.body} />
<TitleLevel asGrid title="Small text" styleProps = {styleProps.small} />
<TitleLevel 
  asGrid 
  title="Tiny text*"
  note="*Not to be used in content blocks (only used with data visualizations when 14px is not small enough)"
  styleProps = {styleProps.tiny} />
<TitleLevel
  className="ws-typography-code-font"
  asGrid 
  title="Code*"
  note="*Used for code blocks "
  styleProps = {styleProps.code} />

## Line height
<div style={{marginBottom: '32px'}}>When measuring spacing in text-based content, plan for line height.

For example, if a body of text uses a line height of 1.5 and the body text size is 16px, the final line height would be 24 px (16 * 1.5 = 24). In this case, include the 24px line height as part of the text when creating designs in the design software.
</div>

<Grid>
  <GridItem span={12}>
    <LineHeightTitle>
      <CheckCircleIcon color="#52A549" />
      <span style={{color: '#151515', marginLeft: '8px'}}>Correct</span>
    </LineHeightTitle>
    <div>Include line height space when laying text with spacer elements.</div>
    <img alt="correct line height space example" style={{maxHeight: '158px', padding: '16px'}} src={correct} />
  </GridItem>
  <GridItem span={12}>
    <LineHeightTitle>
      <TimesCircleIcon color="#CC0000" />
      <span style={{color: '#151515', marginLeft: '8px'}}>Incorrect</span>
    </LineHeightTitle>
    <div>Don't use solely text to align with spacing elements when designing. Always include the line height space.</div>
    <img alt="incorrect line height space example" style={{maxHeight: '124px', padding: '16px'}} src={incorrect} />
  </GridItem>
</Grid>

## Spacing
<div style={{marginBottom: '32px'}}>Spacing represents margins above and below text. Use spacers to provide appropriate spacing for each type of text. Text leading should be 1.5 times larger than text size.
</div>

<div className="pf-l-flex pf-m-space-items-md pf-m-column pf-m-row-on-sm pf-u-mb-xl">
  <Spacer size="8" color="8" description="8px" />
  <Spacer size="16" color="16" description="16px" />
  <Spacer size="24" color="24" description="24px" />
  <Spacer size="24" description="Line Height" showBorder />
</div>

<Grid>
  <GridItem span={12}>
    <div className="spacingItemStyle">
      <div className="spacingTitleStyle">First level title</div>  
    </div>
    <Spacer size="8" color="8"/>
    <div className="spacingItemStyle">
      <TitleLevel styleProps={styleProps.first}>Design is a journey of discovery</TitleLevel>
    </div>
    <Spacer size="16" color="16" />
    <div className="spacingItemStyle">
      <TitleLevel styleProps={styleProps.body}>Body text should be RedHatText at 16px. It should have 24px leading.</TitleLevel>
    </div>
    <Spacer size="24" color="24" />
    <div className="spacingItemStyle">
      <div className="spacingTitleStyle">Second level title</div>
    </div>
    <Spacer size="8" color="8"/>
    <div className="spacingItemStyle">
      <TitleLevel styleProps={styleProps.second}>Design is a journey of discovery</TitleLevel>
    </div>
    <Spacer size="16" color="16" />
    <div className="spacingItemStyle">
      <TitleLevel styleProps={styleProps.body}>Body text should be RedHatText at 16px. It should have 24 px leading.</TitleLevel>
    </div>
    <Spacer size="24" color="24" />
    <div className="spacingItemStyle">
      <div className="spacingTitleStyle">Third level title</div>
    </div>
    <Spacer size="8" color="8"/>
    <div className="spacingItemStyle">
      <TitleLevel styleProps={styleProps.third}>Design is a journey of discovery</TitleLevel>
    </div>
    <Spacer size="16" color="16" />
    <div className="spacingItemStyle">
      <TitleLevel styleProps={styleProps.body}>1. Lists should use body text style with 8px between items.</TitleLevel>
    </div>
    <Spacer size="8" color="8" />
    <div className="spacingItemStyle">
      <TitleLevel styleProps={styleProps.body}>2. Lists should use body text style with 8px between items.</TitleLevel>
    </div>
    <Spacer size="8" color="8" />
    <div className="spacingItemStyle">
      <TitleLevel styleProps={styleProps.body}>&nbsp;&nbsp;&nbsp;&nbsp;a. Secondary items in the list should use 8px spacing.</TitleLevel>
    </div>
    <Spacer size="8" color="8" />
    <div className="spacingItemStyle">
      <TitleLevel styleProps={styleProps.body}>&nbsp;&nbsp;&nbsp;&nbsp;b. They use the same body text style as primary items.</TitleLevel>
    </div>
    <Spacer size="24" color="24" />
    <div className="spacingItemStyle">
      <div className="spacingTitleStyle">Fourth level title</div>
    </div>
    <Spacer size="8" color="8" />
    <div className="spacingItemStyle">
      <TitleLevel styleProps={styleProps.fourth}>Design is a journey of discovery</TitleLevel>
    </div>
    <Spacer size="16" color="16" />
    <div className="spacingItemStyle">
      <TitleLevel styleProps={styleProps.body}>Body text should be RedHatText at 16px. It should have a 24px leading.</TitleLevel>
    </div>
    <Spacer size="24" color="24" />
    <div className="spacingItemStyle">
      <TitleLevel styleProps={styleProps.small}>Small text style should be RedHatText at 14px.</TitleLevel>
    </div>
  </GridItem>
</Grid>
