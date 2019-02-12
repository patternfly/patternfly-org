import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import { StyledText } from '@patternfly/react-styled-system';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export const styles = {
  textColor: css`color: #703FEC;`,
  gridTitle: css`padding-bottom: 8px;`,
  gridTitleSymbol: css`
    font-size: 10px;
    vertical-align: text-bottom;
  `,
  gridRowCenter: css`align-items: center;`,
  gridRowItem: css`padding-bottom: 8px;`,
  typographyGrid: css`
    border-bottom: 1px solid #eaecef;
    margin-bottom: 24px;
    padding-bottom: 24px;
  `,
  spacingContentItem: css`border: 1px solid #703FEC;`,
  spacerDescription: css`
    align-self: center;
    font-size: 12px;
    width: 80px;
    text-align: right;
    padding-right: 10px;
  `,
  spacerBox: (size, backgroundColor, color) => (css`
    align-self: center;
    width: ${size}px;
    height: ${size}px;
    background-color: ${backgroundColor};
    border: ${!color ? '1px solid #703FEC' : 'none'};
  `),
  lineHeightTitle: css`padding-top: 16px; padding-bottom: 16px;`
};

export const TypographyGrid = ({children, title, symbol, fontWeight, fontSize, lineHeight}) => (
  <>
    <div css={[styles.textColor, styles.gridTitle]}>{title} {symbol && <span css={styles.gridTitleSymbol}>{symbol}</span>}</div>
    <Grid gutter="md" css={[styles.gridRowCenter, styles.typographyGrid]}>
      <GridItem span={2} rowSpan={3}>
        <div css={styles.gridRowItem}>Font Family:</div>
        <div css={styles.gridRowItem}>Font Size:</div>
        <div css={styles.gridRowItem}>Line Height:</div>
      </GridItem>
      <GridItem span={4} rowSpan={3}>
        <div css={styles.gridRowItem}>Overpass {fontWeight === '400' ? '(Regular/400)' : '(Semibold/500)'}</div>
        <div css={styles.gridRowItem}>{fontSize}px</div>
        <div css={styles.gridRowItem}>{lineHeight}</div>
      </GridItem>
      <GridItem span={6} rowSpan={3}>
        <StyledText fontWeight={fontWeight} fontSize={fontSize} lineHeight={lineHeight}>
          {children}
        </StyledText>
      </GridItem>
    </Grid>
  </>
);

export const TypographyGridLegend = ({children}) => (
  <Grid css={[styles.gridRowCenter, styles.typographyGrid]}>
    {children}
  </Grid>
);

export const TypographyGridLegendItem = ({symbol, children}) => (
  <>
    <GridItem span={1}>
      <span css={styles.textColor}>{symbol}</span>
    </GridItem>
    <GridItem span={3}>
      <StyledText fontWeight="400" fontSize="14" lineHeight="1.3">
        <span css={styles.textColor}>Special Use Case</span>
      </StyledText>
    </GridItem>
    <GridItem span={8}>
      <StyledText fontWeight="400" fontSize="14" lineHeight="1.3">
        <span>{children}</span>
      </StyledText>
    </GridItem>
  </>
);

export const LineHeightTitle = ({children}) => (
  <div css={styles.lineHeightTitle}>{children}</div>
);

export const SpacingContentItem = ({children, fontWeight, fontSize, lineHeight}) => (
  <div css={styles.spacingContentItem}>
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
    {description && <div css={styles.spacerDescription}>{description}</div>}
    <div css={styles.spacerBox(size, backgroundColor, color)}></div>
  </div>
)};

const Dummy = () => (
  <div>dummy</div>
)

export default Dummy;