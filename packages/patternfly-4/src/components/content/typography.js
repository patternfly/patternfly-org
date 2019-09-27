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
    td {
      border-style: hidden;
    }
    tr > td:first-child {
      padding-left: 0 !important;
    };

    tr:nth-child(even) {
      background-color: transparent !important;
    };
  `,
  variableName: css`
    display: inline;
    padding-left: 8px;
    padding-right: 8px;
    background-color: #ffffff;
    border: 1px solid #ededed!important;
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
    border: ${showBorder ? '1px solid #3e9dd0' : 'none'};
  `),
  spacingItemStyle: css`
    border-color: #3E9DD0;
    border-width: 1px;
    border-style: solid;
  `,
  spacingTitleStyle: css`
    color: #004368;
    font-size: 14px;
  `
};

export const PfStyledText = ({ children, variableName, fontWeight, lineHeight, fontFamily, ...rest }) => (
  <StyledText fontFamily={fontFamily} fontWeight={fontWeight} fontSize={`var(${variableName})`} lineHeight={lineHeight}>
    {children || <>Design is where science and art break even.</>}
  </StyledText>
);

export const HeroTitle = ({ children, asGrid }) => {
  const styleProps = {
    fontWeight: "400",
    variableName: "--pf-global--FontSize--2xl",
    fontSize: "24px",
    lineHeight: "1.3",
    fontFamily: "RedHatDisplay"
  };
  return asGrid ? (
    <TypographyGrid 
      title="Hero title*" 
      note="*Not to be used in content block (Landing pages, login, etc.)" 
      {...styleProps}
    />
  ) : (
    <PfStyledText {...styleProps}>{children}</PfStyledText>
  )
};

export const SecondLevelTitle = ({ children, asGrid }) => {
  const styleProps = {
    fontWeight: "400",
    fontSize: "20px",
    variableName: "--pf-global--FontSize--xl",
    lineHeight: "1.3",
    fontFamily: "RedHatDisplay"
  };
  return asGrid ? (
    <TypographyGrid 
      title="Second level title" 
      {...styleProps}
    />
  ) : (
    <PfStyledText {...styleProps}>{children}</PfStyledText>
  )
};

export const ThirdLevelTitle = ({ children, asGrid }) => {
  const styleProps = {
    fontWeight: "400",
    fontSize: "18px",
    variableName: "--pf-global--FontSize--lg",
    lineHeight: "1.5",
    fontFamily: "RedHatDisplay"
  };
  return asGrid ? (
    <TypographyGrid 
      title="Third level title" 
      {...styleProps}
    />
  ) : (
    <PfStyledText {...styleProps}>{children}</PfStyledText>
  )
};

export const FourthLevelTitle = ({ children, asGrid }) => {
  const styleProps = {
    fontWeight: "700",
    fontSize: "16px",
    variableName: "--pf-global--FontSize--md",
    lineHeight: "1.5",
    fontFamily: "RedHatDisplay"
  };
  return asGrid ? (
    <TypographyGrid 
      title="Fourth level title" 
      {...styleProps}
    />
  ) : (
    <PfStyledText {...styleProps}>{children}</PfStyledText>
  )
};

export const BodyText = ({ children, asGrid }) => {
  const styleProps = {
    fontWeight: "400",
    fontSize: "16px",
    variableName: "--pf-global--FontSize--md",
    lineHeight: "1.5",
    fontFamily: "RedHatText"
  };
  return asGrid ? (
    <TypographyGrid 
      title="Body" 
      {...styleProps}
    />
  ) : (
    <PfStyledText {...styleProps}>{children}</PfStyledText>
  )
};

export const SmallText = ({ children, asGrid }) => {
  const styleProps = {
    fontWeight: "400",
    fontSize: "14px",
    variableName: "--pf-global--FontSize--sm",
    lineHeight: "1.5",
    fontFamily: "RedHatText"
  };
  return asGrid ? (
    <TypographyGrid 
      title="Small text" 
      {...styleProps}
    />
  ) : (
    <PfStyledText {...styleProps}>{children}</PfStyledText>
  )
};

export const TinyText = ({ children, asGrid }) => {
  const styleProps = {
    fontWeight: "400",
    fontSize: "12px",
    variableName: "--pf-global--FontSize--xs",
    lineHeight: "1.5",
    fontFamily: "RedHatText"
  };
  return asGrid ? (
    <TypographyGrid 
      title="Tiny text*" 
      note="*Not to be used in content block (Only used with data visualizations when 14px is not small enough.)" 
      {...styleProps}
    />
  ) : (
    <PfStyledText {...styleProps}>{children}</PfStyledText>
  )
};

export const TypographyGrid = ({title, note, symbol, fontWeight, fontSize, variableName, lineHeight, fontFamily}) => (
  <>
    <h3>{title} {symbol && <span css={styles.gridTitleSymbol}>{symbol}</span>}</h3>
    <Grid gutter="sm" css={[styles.gridRowCenter, styles.typographyGrid]}>
      <GridItem span={12} sm={6}>
        <table css={styles.tableTypography} className="pf-c-table pf-m-compact" aria-label="typography usage guidelines breakout">
          <tbody>
            <tr>
              <td className="pf-u-pr-sm">Font family:</td>
              <td>{fontFamily} {fontWeight}</td>
            </tr>
            <tr>
              <td>Line height:</td>
              <td>{lineHeight}</td>
            </tr>
            <tr>
              <td>Font size:</td>
              <td>{fontSize}</td>
            </tr>
            <tr>
              <td>Font size CSS variable:</td>
              <td><span css={styles.variableName}>{variableName}</span></td>
            </tr>
          </tbody>
        </table>
      </GridItem>
      <GridItem span={12} sm={6}>
        <StyledText fontFamily={fontFamily} fontWeight={fontWeight} fontSize={`var(${variableName})`} lineHeight={lineHeight}>
          Design is where science and art break even.
        </StyledText>
      </GridItem>
      {note && <GridItem span={12}><div css={styles.textColor}>{note}</div></GridItem>}
    </Grid>
  </>
);

export const LineHeightTitle = ({ children }) => (
  <div css={styles.lineHeightTitle}>{children}</div>
);

export const SpacingContentItem = ({children, fontWeight, fontSize, lineHeight}) => (
  <div css={styles.spacingContentItem}>
    <StyledText fontWeight={fontWeight} fontSize={fontSize} lineHeight={lineHeight}>
      {children}
    </StyledText>
  </div>
);

export const Spacer = ({color, size, description, showBorder}) => {
  let backgroundColor = null;
  if (color === '8') {
    backgroundColor = '#9bd917';
  } else if (color === '16') {
    backgroundColor = '#51a549';
  } else if (color === '24') {
    backgroundColor = '#1b8793';
  }
  return (
  <div style={{display: "flex", padding: description ? "15px" : "0px"}}>
    {description && <div css={styles.spacerDescription}>{description}</div>}
    <div css={styles.spacerBox(size, backgroundColor, showBorder)}></div>
  </div>
)};

const Dummy = () => (
  <div>dummy</div>
)

export default Dummy;
