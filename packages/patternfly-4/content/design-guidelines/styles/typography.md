---
path: "/design-guidelines/styles/typography"
---
import { Button, Grid, GridItem } from '@patternfly/react-core';
import { CheckCircleIcon, TimesCircleIcon } from '@patternfly/react-icons';
import { TypographyGrid, LineHeightTitle, SpacingContentItem, Spacer } from '@content/typography';
import correct from './typography_correct_spacing.png';
import incorrect from './typography_incorrect_spacing.png';

# Typography

## Our font family
We use the open source typeface, Overpass, inspired by Highway Gothic.	We use Red Hat Display and Red Hat Text.


<Button style={{borderRadius: '0px', fontWeight: '600', paddingTop: '12px', paddingBottom: '12px', paddingLeft: '24px', paddingRight: '24px'}} variant="primary" component="a" href="https://fonts.google.com/specimen/Overpass" target="_blank">DOWNLOAD OVERPASS</Button>	<Button style={{borderRadius: '0px', fontWeight: '600', paddingTop: '12px', paddingBottom: '12px', paddingLeft: '24px', paddingRight: '24px'}} variant="primary" component="a" href="https://github.com/RedHatOfficial/RedHatFont" target="_blank">DOWNLOAD</Button>
## Usage guidelines	## Usage guidelines
Use our typographic styles to communicate visual hierarchy. A consistent and logical hierarchy provides a clear pattern for users, making it easier to quickly scan and understand information on a page.	Use our typographic styles to communicate visual hierarchy. A consistent and logical hierarchy provides a clear pattern for users, making it easier to quickly scan and understand information on a page.
<TypographyGrid title="Hero title*" note="*Not to be used in content block (Landing pages, login, etc.)" fontWeight="400" variableName="--pf-global--FontSize--4xl" fontSize="36" lineHeight="1.3">"Design is where science and art break even."</TypographyGrid>	<TypographyGrid title="Hero title*" note="*Not to be used in content block (Landing pages, login, etc.)" fontWeight="400 (medium)" variableName="--pf-global--FontSize--2xl" fontSize="24px" lineHeight="1.3 (31.2px)">"Design is where science and art break even."</TypographyGrid>
<TypographyGrid title="Main title" fontWeight="400" fontSize="28" variableName="--pf-global--FontSize--3xl" lineHeight="1.3">"Design is where science and art break even."</TypographyGrid>	<TypographyGrid title="Second level title" fontWeight="400 medium" fontSize="20px" variableName="--pf-global--FontSize--xl" lineHeight="1.3 (26px)">"Design is where science and art break even."</TypographyGrid>
<TypographyGrid title="Secondary title" fontWeight="400" fontSize="24" variableName="--pf-global--FontSize--2xl" lineHeight="1.3">"Design is where science and art break even."</TypographyGrid>	<TypographyGrid title="Third level title" fontWeight="400 medium" fontSize="18px" variableName="--pf-global--FontSize--lg" lineHeight="1.5 (27px)">"Design is where science and art break even."</TypographyGrid>
<TypographyGrid title="Subtitle" fontWeight="400" fontSize="21" variableName="--pf-global--FontSize--xl" lineHeight="1.5">"Design is where science and art break even."</TypographyGrid>	<TypographyGrid title="Fourth level title" fontWeight="700 bold" fontSize="16px" variableName="--pf-global--FontSize--md" lineHeight="1.5 (24px)">"Design is where science and art break even."</TypographyGrid>
<TypographyGrid title="Fourth level title" fontWeight="500" fontSize="18" variableName="--pf-global--FontSize--lg" lineHeight="1.5">"Design is where science and art break even."</TypographyGrid>	<TypographyGrid title="Body" fontWeight="400 regular" fontSize="16px" variableName="--pf-global--FontSize--md" lineHeight="1.5 (24px)">"Design is where science and art break even."</TypographyGrid>
<TypographyGrid title="Fifth level title" fontWeight="500" fontSize="16" variableName="--pf-global--FontSize--md" lineHeight="1.5">"Design is where science and art break even."</TypographyGrid>	<TypographyGrid title="Small text" fontWeight="400 regular" fontSize="14px" variableName="--pf-global--FontSize--sm" lineHeight="1.5 (27px)">"Design is where science and art break even."</TypographyGrid>
<TypographyGrid title="Body" fontWeight="400" fontSize="16" variableName="--pf-global--FontSize--md" lineHeight="1.5">"Design is where science and art break even."</TypographyGrid>	<TypographyGrid title="Tiny text*" note="*Not to be used in content block (Only used with data visualizations when 14px is not small enough.)" fontWeight="400 regular" fontSize="12px" variableName="--pf-global--FontSize--xs" lineHeight="1.5 (18px)">"Design is where science and art break even."</TypographyGrid>
<TypographyGrid title="Small text" fontWeight="400" fontSize="14" variableName="--pf-global--FontSize--sm" lineHeight="1.3">"Design is where science and art break even."</TypographyGrid>
<TypographyGrid title="Tiny text*" note="*Not to be used in content block (Only used with data visualizations when 14px is not small enough.)" fontWeight="400" fontSize="12" variableName="--pf-global--FontSize--xs" lineHeight="1.3">"Design is where science and art break even."</TypographyGrid>

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
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <div style={{color: '#004368', fontSize: '14px'}}>Hero title</div>  
    </div>
    <Spacer size="8" color="8"/>
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <SpacingContentItem fontWeight="400" fontSize="36" lineHeight="1.3">Design is a journey of discovery</SpacingContentItem>
    </div>
    <Spacer size="16" color="16" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <SpacingContentItem fontWeight="400" fontSize="16" lineHeight="1.5">Body text should be Overpass Regular at 16px. It should have leading of 24px because of its relative line height of 1.5.</SpacingContentItem>
    </div>
    <Spacer size="24" color="24" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <div style={{color: '#004368', fontSize: '14px'}}>Main title</div>
    </div>
    <Spacer size="8" color="8"/>
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <SpacingContentItem fontWeight="400" fontSize="28" lineHeight="1.3">Design is a journey of discovery</SpacingContentItem>
    </div>
    <Spacer size="16" color="16" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <SpacingContentItem fontWeight="400" fontSize="16" lineHeight="1.5">Body text should be Overpass Regular at 16px. It should have leading of 24px because of its relative line height of 1.5.</SpacingContentItem>
    </div>
    <Spacer size="24" color="24" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <div style={{color: '#004368', fontSize: '14px'}}>Secondary title</div>
    </div>
    <Spacer size="8" color="8"/>
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <SpacingContentItem fontWeight="400" fontSize="24" lineHeight="1.3">Design is a journey of discovery</SpacingContentItem>
    </div>
    <Spacer size="16" color="16" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <SpacingContentItem fontWeight="400" fontSize="16" lineHeight="1.5">Body text should be Overpass Regular at 16px. It should have leading of 24px because of its relative line height of 1.5.</SpacingContentItem>
    </div>
    <Spacer size="16" color="16" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <SpacingContentItem fontWeight="400" fontSize="16" lineHeight="1.5">1. Lists should use body text style with 8px between items.</SpacingContentItem>
    </div>
    <Spacer size="8" color="8" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <SpacingContentItem fontWeight="400" fontSize="16" lineHeight="1.5">2. This is the second item in the list.</SpacingContentItem>
    </div>
    <Spacer size="8" color="8" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <SpacingContentItem fontWeight="400" fontSize="16" lineHeight="1.5">&nbsp;&nbsp;&nbsp;&nbsp;a. Secondary items in the list should use 8px spacing.</SpacingContentItem>
    </div>
    <Spacer size="8" color="8" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <SpacingContentItem fontWeight="400" fontSize="16" lineHeight="1.5">&nbsp;&nbsp;&nbsp;&nbsp;b. They still use the same text styling, however.</SpacingContentItem>
    </div>
    <Spacer size="24" color="24" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <div style={{color: '#004368', fontSize: '14px'}}>Subtitle</div>
    </div>
    <Spacer size="8" color="8" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <SpacingContentItem fontWeight="400" fontSize="21" lineHeight="1.5">Design is a journey of discovery</SpacingContentItem>
    </div>
    <Spacer size="16" color="16" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <SpacingContentItem fontWeight="400" fontSize="16" lineHeight="1.5">Body text should be Overpass Regular at 16px. It should have leading of 24px because of its relative line height of 1.5.</SpacingContentItem>
    </div>
    <Spacer size="24" color="24" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <div style={{color: '#004368', fontSize: '14px'}}>Fourth level title</div>
    </div>
    <Spacer size="8" color="8" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <SpacingContentItem fontWeight="400" fontSize="18" lineHeight="1.5">Design is a journey of discovery</SpacingContentItem>
    </div>
    <Spacer size="16" color="16" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <SpacingContentItem fontWeight="400" fontSize="16" lineHeight="1.5">Body text should be Overpass Regular at 16px. It should have leading of 24px because of its relative line height of 1.5.</SpacingContentItem>
    </div>
    <Spacer size="24" color="24" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <div style={{color: '#004368', fontSize: '14px'}}>Fifth level title</div>
    </div>
    <Spacer size="8" color="8" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <SpacingContentItem fontWeight="400" fontSize="16" lineHeight="1.5">Design is a journey of discovery</SpacingContentItem>
    </div>
    <Spacer size="16" color="16" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <SpacingContentItem fontWeight="400" fontSize="16" lineHeight="1.5">Body text should be Overpass Regular at 16px. It should have leading of 24px because of its relative line height of 1.5.</SpacingContentItem>
    </div>
    <Spacer size="24" color="24" />
    <div style={{borderColor: '#3E9DD0', borderWidth: '1px', borderStyle: 'solid'}}>
      <SpacingContentItem fontWeight="400" fontSize="14" lineHeight="1.3">Small text style should be Overpass Regular at 14px.</SpacingContentItem>
    </div>
  </GridItem>
</Grid>
