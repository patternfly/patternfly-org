import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import { StyledText } from '@patternfly/react-styled-system';

export const TypographyGrid = ({children, title, legendItem, fontWeight, fontSize, lineHeight}) => (
  <>
    <span style={{color: "purple"}}>{title} {legendItem && <span style={{fontSize: "10px", verticalAlign: "text-bottom"}}>{legendItem}</span>}</span>
    <Grid gutter="md" style={{borderBottom: "1px solid #eaecef", marginBottom: "10px", paddingBottom: "10px"}}>
      <GridItem span={2} rowSpan={3}>
        Font Family:<br/>
        Font Size:<br/>
        Line Height:
      </GridItem>
      <GridItem span={4} rowSpan={3}>
        Overpass {fontWeight === '400' ? '(Regular/400)' : '(Semibold/500)'}<br/>
        {fontSize}px<br/>
        {lineHeight}
      </GridItem>
      <GridItem span={6} rowSpan={3} style={{alignSelf: 'center'}}>
        <StyledText fontWeight={fontWeight} fontSize={fontSize} lineHeight={lineHeight}>
          {children}
        </StyledText>
      </GridItem>
    </Grid>
  </>
);

export const TypographyGridLegend = () => (
  <Grid style={{borderBottom: "1px solid #eaecef", marginBottom: "10px", paddingBottom: "10px"}}>
    <GridItem span={1}>
      <span style={{color: "purple"}}>&#9679;</span>
    </GridItem>
    <GridItem span={3}>
      <StyledText fontWeight="400" fontSize="14" lineHeight="1.3">
        <span style={{color: "purple"}}>Special Use Case</span>
      </StyledText>
    </GridItem>
    <GridItem span={8}>
      <StyledText fontWeight="400" fontSize="14" lineHeight="1.3">
        <span>Not to be used in content block (Landing pages, login, etc.)</span>
      </StyledText>
    </GridItem>
    <GridItem span={1}>
      <span style={{color: "purple"}}>&#9675;</span>
    </GridItem>
    <GridItem span={3}>
      <StyledText fontWeight="400" fontSize="14" lineHeight="1.3">
        <span style={{color: "purple"}}>Special Use Case</span>
      </StyledText>
    </GridItem>
    <GridItem span={8}>
      <StyledText fontWeight="400" fontSize="14" lineHeight="1.3">
        <span>Not to be used in content block (Only used with data visualizations when 14px is not small enough.)</span>
      </StyledText>
    </GridItem>
  </Grid>
);

export const SpacingContentItem = ({children, fontWeight, fontSize, lineHeight}) => (
  <div style={{border: "1px solid purple"}}>
    <StyledText fontWeight={fontWeight} fontSize={fontSize} lineHeight={lineHeight}>
      {children}
    </StyledText>
  </div>
);

export const Spacer = ({color, size, description}) => {
  let backgroundColor = null;
  if (color === '8') {
    backgroundColor = '#9CD819';
  } else if (color === '16') {
    backgroundColor = '#52A549';
  } else if (color === '24') {
    backgroundColor = '#198793';
  }
  return (
  <div style={{display: "flex", padding: description ? "5px" : "0px"}}>
    {description && <div style={{alignSelf: "center", fontSize: "12px", width: "80px", textAlign: "right", paddingRight: "10px"}}>{description}</div>}
    <div style={{alignSelf: "center", width: `${size}px`, height: `${size}px`, backgroundColor: backgroundColor, border: !color ? "1px solid purple": "none"}}></div>
  </div>
)};

const Dummy = () => (
  <div>dummy</div>
)

export default Dummy;