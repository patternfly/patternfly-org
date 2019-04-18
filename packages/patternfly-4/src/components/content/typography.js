import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import { StyledText } from '@patternfly/react-styled-system';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import './typography.scss';

export const styles = {
  textColor: css`
    color: #004368; 
    max-width: 350px;
    font-size: 14px;
  `,
  tableTypography: css`
    background-color: transparent !important;

    tr > td:first-child {
      padding-left: 0px !important;
    }

    tr:nth-child(even) {
      background-color: transparent !important;
    }
  `,
  gridTitleSymbol: css`
    font-size: 10px;
    vertical-align: text-bottom;
  `,
  spacerBox: (size, backgroundColor, showBorder) => (css`
    align-self: center;
    width: ${size}px;
    height: ${size}px;
    background-color: ${backgroundColor};
    border: ${showBorder ? '1px solid #3E9DD0' : 'none'};
  `)
};

export const TypographyGrid = ({children, title, note, symbol, fontWeight, fontSize, lineHeight}) => (
  <>
    <h3>{title} {symbol && <span css={styles.gridTitleSymbol}>{symbol}</span>}</h3>
    <Grid gutter="sm" css={[styles.gridRowCenter, styles.typographyGrid]}>
      <GridItem span={6}>
        <table css={styles.tableTypography} className="pf-c-table pf-m-compact" aria-label="typography usage guidelines breakout">
          <tbody>
            <tr>
              <td className="pf-u-pr-sm">Font Family:</td>
              <td>Overpass {fontWeight === '400' ? '(Regular/400)' : '(Semibold/500)'}</td>
            </tr>
            <tr>
              <td>Font Size:</td>
              <td>{fontSize}px</td>
            </tr>
            <tr>
              <td>Line Height:</td>
              <td>{lineHeight}</td>
            </tr>
            <tr>
              <td>Global CSS variable:</td>
              <td>.pf-c-title</td>
            </tr>
          </tbody>
        </table>
      </GridItem>
      <GridItem span={6}>
        <StyledText fontWeight={fontWeight} fontSize={fontSize} lineHeight={lineHeight} className="pf4-site-typography-grid">
          {children}
        </StyledText>
      </GridItem>
      {note && <GridItem span={12}><div css={styles.textColor}>{note}</div></GridItem>}
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
    <StyledText fontWeight={fontWeight} fontSize={fontSize} lineHeight={lineHeight} className="pf4-site-typography-grid">
      {children}
    </StyledText>
  </div>
);

export const Spacer = ({color, size, description, showBorder}) => {
  let backgroundColor = null;
  if (color === '8') {
    backgroundColor = '#FF00FF';
  } else if (color === '16') {
    backgroundColor = '#FF9500';
  } else if (color === '24') {
    backgroundColor = '#FFEA00';
  }
  return (
  <div style={{display: "flex", padding: description ? "5px" : "0px"}}>
    {description && <div css={styles.spacerDescription}>{description}</div>}
    <div css={styles.spacerBox(size, backgroundColor, showBorder)}></div>
  </div>
)};

const Dummy = () => (
  <div>dummy</div>
)

export default Dummy;
