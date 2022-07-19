import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';

export const PfStyledText = ({ children, variableName, fontWeight, lineHeight, fontFamily }) => (
  <div style={{ fontFamily, fontWeight, fontSize: `var(${variableName})`, lineHeight }}>
    {children || 'Design is where science and art break even.'}
  </div>
);

export const TitleLevel = ({ asGrid, styleProps, children, title = '', note = '', className = '' }) => {
  return asGrid ? (
    <TypographyGrid
      title={title}
      note={note}
      className={className}
      {...styleProps}
    />
  ) : (
    <PfStyledText {...styleProps}>{children}</PfStyledText>
  )
}

export const styleProps = {
  superHero: {
    fontWeight: "400",
    fontWeightText: "400 (medium)",
    variableName: "--pf-global--FontSize--4xl",
    fontSize: "36px",
    lineHeight: "1.3",
    fontFamily: "RedHatDisplay",
    textStyle: "4xl (RHD md 36)"
  },
  hero: {
    fontWeight: "400",
    fontWeightText: "400 (medium)",
    variableName: "--pf-global--FontSize--3xl",
    fontSize: "28px",
    lineHeight: "1.3",
    fontFamily: "RedHatDisplay",
    textStyle: "3xl (RHD md 28)"
  },
  first: {
    fontWeight: "400",
    fontWeightText: "400 (medium)",
    variableName: "--pf-global--FontSize--2xl",
    fontSize: "24px",
    lineHeight: "1.3",
    fontFamily: "RedHatDisplay",
    textStyle: "2xl (RHD md 24)"
  },
  second: {
    fontWeight: "400",
    fontWeightText: "400 (medium)",
    fontSize: "20px",
    variableName: "--pf-global--FontSize--xl",
    lineHeight: "1.5",
    fontFamily: "RedHatDisplay",
    textStyle: "xl (RHD md 20)"
  },
  third: {
    fontWeight: "400",
    fontWeightText: "400 (medium)",
    fontSize: "18px",
    variableName: "--pf-global--FontSize--lg",
    lineHeight: "1.5",
    fontFamily: "RedHatDisplay",
    textStyle: "lg (RHD md 18)"
  },
  fourth: {
    fontWeight: "400",
    fontWeightText: "400 (medium)",
    fontSize: "16px",
    variableName: "--pf-global--FontSize--md",
    lineHeight: "1.5",
    fontFamily: "RedHatDisplay",
    textStyle: "md (RHD md 16)"
  },
  body: {
    fontWeight: "400",
    fontWeightText: "400 (regular)",
    fontSize: "16px",
    variableName: "--pf-global--FontSize--md",
    lineHeight: "1.5",
    fontFamily: "RedHatText",
    textStyle: "md (RHT rg 16)"
  },
  small: {
    fontWeight: "400",
    fontWeightText: "400 (regular)",
    fontSize: "14px",
    variableName: "--pf-global--FontSize--sm",
    lineHeight: "1.5",
    fontFamily: "RedHatText",
    textStyle: "sm (RHT rg 14)"
  },
  tiny: {
    fontWeight: "400",
    fontWeightText: "400 (regular)",
    fontSize: "12px",
    variableName: "--pf-global--FontSize--xs",
    lineHeight: "1.5",
    fontFamily: "RedHatText",
    textStyle: "xs (RHT rg 12)"
  },
  code: {
    fontWeight: "400",
    fontWeightText: "400 (regular)",
    fontSize: "16px",
    variableName: "--pf-global--FontSize--md",
    lineHeight: "1.5",
    fontFamily: "RedHatMono",
    textStyle: "Code"
  }
}

export const TypographyGrid = ({title, note, symbol, fontWeight, fontWeightText, fontSize, variableName, lineHeight, fontFamily, textStyle, className}) => (
  <React.Fragment>
    <h3 className={className ? `ws-title ${className}` : 'ws-title'}>{title} {symbol && <span className="ws-typography-gridTitleSymbol">{symbol}</span>}</h3>
    <PfStyledText fontFamily={fontFamily} fontWeight={fontWeight} variableName={variableName} lineHeight={lineHeight}>
      Design is where science and art break even.
    </PfStyledText>
    <Grid gutter="sm">
      <GridItem span={12}>
        <table className="pf-c-table pf-m-compact ws-typography-tableTypography" aria-label="typography usage guidelines breakout">
          <tbody>
            <tr>
              <td className="pf-u-pr-sm">Font family:</td>
              <td>{fontFamily}</td>
            </tr>
            <tr>
              <td>Font weight:</td>
              <td>{fontWeightText}</td>
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
              <td>Text style:</td>
              <td>{textStyle}</td>
            </tr>
            <tr>
              <td>Font size CSS variable:</td>
              <td><code className="ws-code">{variableName}</code></td>
            </tr>
          </tbody>
        </table>
      </GridItem>
      {note && <GridItem span={12}><div className="ws-typography-textColor">{note}</div></GridItem>}
    </Grid>
  </React.Fragment>
);

export const LineHeightTitle = ({ children }) => (
  <div>{children}</div>
);

export const SpacingContentItem = ({children, fontWeight, fontSize, lineHeight}) => (
  <div>
    <PfStyledText fontWeight={fontWeight} fontSize={fontSize} lineHeight={lineHeight}>
      {children}
    </PfStyledText>
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
    <div className="pf-l-flex pf-m-space-items-md pf-m-align-items-center">
      {description && <div>{description}</div>}
      <div className={`
        ws-typography-spacerBox-size-${size}
        ${color ? ` ws-typography-spacerBox-background-${color}` : ''}
        ${showBorder ? " ws-typography-spacerBox-showBorder" : ''}
      `}></div>
    </div>
  )
};
