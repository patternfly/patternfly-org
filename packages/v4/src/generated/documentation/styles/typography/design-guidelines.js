import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import { Button, Grid, GridItem } from '@patternfly/react-core';
import { CheckCircleIcon, TimesCircleIcon } from '@patternfly/react-icons';
import { TypographyGrid, LineHeightTitle, SpacingContentItem, Spacer, TitleLevel, styleProps } from '../../../../content/design-guidelines/styles/typography/./typography';
import correct from '../../../../content/design-guidelines/styles/typography/./typography_correct_spacing.png';
import incorrect from '../../../../content/design-guidelines/styles/typography/./typography_incorrect_spacing.png';
import '../../../../content/design-guidelines/styles/typography/./typography.css';

export const DocumentationStylesTypographyDesignGuidelinesDocs = {
  "slug": "/documentation/styles/typography/design-guidelines",
  "source": "design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/master/src/content/design-guidelines/styles/typography/typography.md",
  "section": "styles",
  "id": "Typography",
  "title": "Typography",
  "toc": [
    "Our font family",
    "Usage guidelines",
    "Line height",
    "Spacing"
  ]
};
DocumentationStylesTypographyDesignGuidelinesDocs.liveContext = {
  Button,
  Grid,
  GridItem,
  CheckCircleIcon,
  TimesCircleIcon,
  TypographyGrid,
  LineHeightTitle,
  SpacingContentItem,
  Spacer,
  TitleLevel,
  styleProps,
  correct,
  incorrect
};
DocumentationStylesTypographyDesignGuidelinesDocs.Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Our font family`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`We use Red Hat Display and Red Hat Text.`}
    </p>
    <Button
  style={{borderRadius: '0px', fontWeight: '600', paddingTop: '12px', paddingBottom: '12px', paddingLeft: '24px', paddingRight: '24px'}}
  variant="primary"
  component="a"
  href="https://github.com/RedHatOfficial/RedHatFont"
  target="_blank"
>
      <p {...{"className":"ws-p"}}>
        {`DOWNLOAD`}
      </p>
</Button>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Usage guidelines`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use typography to create visual hierarchy. A consistent and logical hierarchy makes it easier for users to quickly scan and understand information on a page.`}
    </p>
    <TitleLevel
  asGrid
  title="First level title*"
  note="*Not to be used in content block (such as landing pages and login screens)"
  styleProps={styleProps.first}
/>
    <TitleLevel
  asGrid
  title="Second level title"
  styleProps={styleProps.second}
/>
    <TitleLevel
  asGrid
  title="Third level title"
  styleProps={styleProps.third}
/>
    <TitleLevel
  asGrid
  title="Fourth level title"
  styleProps={styleProps.fourth}
/>
    <TitleLevel
  asGrid
  title="Body*"
  note="*Some components use RedHatText at 700 font weight, which is RedHatText Medium (such as alerts and navigation)"
  styleProps={styleProps.body}
/>
    <TitleLevel
  asGrid
  title="Small text"
  styleProps={styleProps.small}
/>
    <TitleLevel
  asGrid
  title="Tiny text*"
  note="*Not to be used in content blocks (only used with data visualizations when 14px is not small enough)"
  styleProps={styleProps.tiny}
/>
    <TitleLevel
  className="ws-typography-code-font"
  asGrid
  title="Code*"
  note="*Used for code blocks "
  styleProps={styleProps.code}
/>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Line height`}
    </AutoLinkHeader>
    <div style={{marginBottom: '32px'}}>
      <p {...{"className":"ws-p"}}>
        {`When measuring spacing in text-based content, plan for line height.`}
      </p>
      <p {...{"className":"ws-p"}}>
        {`For example, if a body of text uses a line height of 1.5 and the body text size is 16px, the final line height would be 24 px (16 * 1.5 = 24). In this case, include the 24px line height as part of the text when creating designs in the design software.`}
      </p>
</div>
    <Grid>
      <GridItem span={12}>
        <LineHeightTitle>
          <CheckCircleIcon color="#52A549"/>
                    <span style={{color: '#151515', marginLeft: '8px'}}>
            <p {...{"className":"ws-p"}}>
              {`Correct`}
            </p>
</span>
</LineHeightTitle>
                <div>
          <p {...{"className":"ws-p"}}>
            {`Include line height space when laying text with spacer elements.`}
          </p>
</div>
                <img
  alt="correct line height space example"
  style={{maxHeight: '158px', padding: '16px'}}
  src={correct}
/>
</GridItem>
            <GridItem span={12}>
        <LineHeightTitle>
          <TimesCircleIcon color="#CC0000"/>
                    <span style={{color: '#151515', marginLeft: '8px'}}>
            <p {...{"className":"ws-p"}}>
              {`Incorrect`}
            </p>
</span>
</LineHeightTitle>
                <div>
          <p {...{"className":"ws-p"}}>
            {`Don't use solely text to align with spacing elements when designing. Always include the line height space.`}
          </p>
</div>
                <img
  alt="incorrect line height space example"
  style={{maxHeight: '124px', padding: '16px'}}
  src={incorrect}
/>
</GridItem>
</Grid>
    <AutoLinkHeader {...{"size":"h2","className":"ws-title ws-h2"}}>
      {`Spacing`}
    </AutoLinkHeader>
    <div style={{marginBottom: '32px'}}>
      <p {...{"className":"ws-p"}}>
        {`Spacing represents margins above and below text. Use spacers to provide appropriate spacing for each type of text. Text leading should be 1.5 times larger than text size.`}
      </p>
</div>
    <div className="pf-l-flex pf-m-space-items-md pf-m-column pf-m-row-on-sm pf-u-mb-xl">
      <Spacer
  size="8"
  color="8"
  description="8px"
/>
            <Spacer
  size="16"
  color="16"
  description="16px"
/>
            <Spacer
  size="24"
  color="24"
  description="24px"
/>
            <Spacer
  size="24"
  description="Line Height"
  showBorder
/>
</div>
    <Grid>
      <GridItem span={12}>
        <div className="spacingItemStyle">
          <div className="spacingTitleStyle">
            <p {...{"className":"ws-p"}}>
              {`First level title`}
            </p>
</div>
</div>
                <Spacer
  size="8"
  color="8"
/>
                <div className="spacingItemStyle">
          <TitleLevel styleProps={styleProps.first}>
            <p {...{"className":"ws-p"}}>
              {`Design is a journey of discovery`}
            </p>
</TitleLevel>
</div>
                <Spacer
  size="16"
  color="16"
/>
                <div className="spacingItemStyle">
          <TitleLevel styleProps={styleProps.body}>
            <p {...{"className":"ws-p"}}>
              {`Body text should be RedHatText at 16px. It should have 24px leading.`}
            </p>
</TitleLevel>
</div>
                <Spacer
  size="24"
  color="24"
/>
                <div className="spacingItemStyle">
          <div className="spacingTitleStyle">
            <p {...{"className":"ws-p"}}>
              {`Second level title`}
            </p>
</div>
</div>
                <Spacer
  size="8"
  color="8"
/>
                <div className="spacingItemStyle">
          <TitleLevel styleProps={styleProps.second}>
            <p {...{"className":"ws-p"}}>
              {`Design is a journey of discovery`}
            </p>
</TitleLevel>
</div>
                <Spacer
  size="16"
  color="16"
/>
                <div className="spacingItemStyle">
          <TitleLevel styleProps={styleProps.body}>
            <p {...{"className":"ws-p"}}>
              {`Body text should be RedHatText at 16px. It should have 24 px leading.`}
            </p>
</TitleLevel>
</div>
                <Spacer
  size="24"
  color="24"
/>
                <div className="spacingItemStyle">
          <div className="spacingTitleStyle">
            <p {...{"className":"ws-p"}}>
              {`Third level title`}
            </p>
</div>
</div>
                <Spacer
  size="8"
  color="8"
/>
                <div className="spacingItemStyle">
          <TitleLevel styleProps={styleProps.third}>
            <p {...{"className":"ws-p"}}>
              {`Design is a journey of discovery`}
            </p>
</TitleLevel>
</div>
                <Spacer
  size="16"
  color="16"
/>
                <div className="spacingItemStyle">
          <TitleLevel styleProps={styleProps.body}>
            <ol {...{"className":"ws-ol"}}>
              <li {...{"className":"ws-li"}}>
                {`Lists should use body text style with 8px between items.`}
              </li>
            </ol>
</TitleLevel>
</div>
                <Spacer
  size="8"
  color="8"
/>
                <div className="spacingItemStyle">
          <TitleLevel styleProps={styleProps.body}>
            <ol {...{"start":2,"className":"ws-ol"}}>
              <li {...{"className":"ws-li"}}>
                {`Lists should use body text style with 8px between items.`}
              </li>
            </ol>
</TitleLevel>
</div>
                <Spacer
  size="8"
  color="8"
/>
                <div className="spacingItemStyle">
          <TitleLevel styleProps={styleProps.body}>
            <p {...{"className":"ws-p"}}>
              {` `}
              {` `}
              {` `}
              {` `}
              {`a. Secondary items in the list should use 8px spacing.`}
            </p>
</TitleLevel>
</div>
                <Spacer
  size="8"
  color="8"
/>
                <div className="spacingItemStyle">
          <TitleLevel styleProps={styleProps.body}>
            <p {...{"className":"ws-p"}}>
              {` `}
              {` `}
              {` `}
              {` `}
              {`b. They use the same body text style as primary items.`}
            </p>
</TitleLevel>
</div>
                <Spacer
  size="24"
  color="24"
/>
                <div className="spacingItemStyle">
          <div className="spacingTitleStyle">
            <p {...{"className":"ws-p"}}>
              {`Fourth level title`}
            </p>
</div>
</div>
                <Spacer
  size="8"
  color="8"
/>
                <div className="spacingItemStyle">
          <TitleLevel styleProps={styleProps.fourth}>
            <p {...{"className":"ws-p"}}>
              {`Design is a journey of discovery`}
            </p>
</TitleLevel>
</div>
                <Spacer
  size="16"
  color="16"
/>
                <div className="spacingItemStyle">
          <TitleLevel styleProps={styleProps.body}>
            <p {...{"className":"ws-p"}}>
              {`Body text should be RedHatText at 16px. It should have a 24px leading.`}
            </p>
</TitleLevel>
</div>
                <Spacer
  size="24"
  color="24"
/>
                <div className="spacingItemStyle">
          <TitleLevel styleProps={styleProps.small}>
            <p {...{"className":"ws-p"}}>
              {`Small text style should be RedHatText at 14px.`}
            </p>
</TitleLevel>
</div>
</GridItem>
</Grid>
  </React.Fragment>
);
DocumentationStylesTypographyDesignGuidelinesDocs.Component.displayName = 'DocumentationStylesTypographyDesignGuidelinesDocs';
