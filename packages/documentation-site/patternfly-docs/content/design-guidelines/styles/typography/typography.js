import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import { Table, Tr, Tbody, Td } from '@patternfly/react-table';

export const PfStyledText = ({ children, variableName, fontWeight, lineHeight, fontFamily }) => (
  <div style={{ fontFamily, fontWeight, fontSize: `var(${variableName})`, lineHeight }} className="ws-title-level">
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
    variableName: "--pf-v5-global--FontSize--4xl",
    fontSize: "36px",
    lineHeight: "1.3",
    fontFamily: "RedHatDisplay",
    textStyle: "4xl (RHD md 36)"
  },
  hero: {
    fontWeight: "400",
    fontWeightText: "400 (medium)",
    variableName: "--pf-v5-global--FontSize--3xl",
    fontSize: "28px",
    lineHeight: "1.3",
    fontFamily: "RedHatDisplay",
    textStyle: "3xl (RHD md 28)"
  },
  first: {
    fontWeight: "400",
    fontWeightText: "400 (medium)",
    variableName: "--pf-v5-global--FontSize--2xl",
    fontSize: "24px",
    lineHeight: "1.3",
    fontFamily: "RedHatDisplay",
    textStyle: "2xl (RHD md 24)"
  },
  second: {
    fontWeight: "400",
    fontWeightText: "400 (medium)",
    fontSize: "20px",
    variableName: "--pf-v5-global--FontSize--xl",
    lineHeight: "1.5",
    fontFamily: "RedHatDisplay",
    textStyle: "xl (RHD md 20)"
  },
  third: {
    fontWeight: "400",
    fontWeightText: "400 (medium)",
    fontSize: "18px",
    variableName: "--pf-v5-global--FontSize--lg",
    lineHeight: "1.5",
    fontFamily: "RedHatDisplay",
    textStyle: "lg (RHD md 18)"
  },
  fourth: {
    fontWeight: "400",
    fontWeightText: "400 (medium)",
    fontSize: "16px",
    variableName: "--pf-v5-global--FontSize--md",
    lineHeight: "1.5",
    fontFamily: "RedHatDisplay",
    textStyle: "md (RHD md 16)"
  },
  body: {
    fontWeight: "400",
    fontWeightText: "400 (regular)",
    fontSize: "16px",
    variableName: "--pf-v5-global--FontSize--md",
    lineHeight: "1.5",
    fontFamily: "RedHatText",
    textStyle: "md (RHT rg 16)"
  },
  small: {
    fontWeight: "400",
    fontWeightText: "400 (regular)",
    fontSize: "14px",
    variableName: "--pf-v5-global--FontSize--sm",
    lineHeight: "1.5",
    fontFamily: "RedHatText",
    textStyle: "sm (RHT rg 14)"
  },
  tiny: {
    fontWeight: "400",
    fontWeightText: "400 (regular)",
    fontSize: "12px",
    variableName: "--pf-v5-global--FontSize--xs",
    lineHeight: "1.5",
    fontFamily: "RedHatText",
    textStyle: "xs (RHT rg 12)"
  },
  code: {
    fontWeight: "400",
    fontWeightText: "400 (regular)",
    fontSize: "16px",
    variableName: "--pf-v5-global--FontSize--md",
    lineHeight: "1.5",
    fontFamily: "RedHatMono",
    textStyle: "Code"
  }
}

export const TypographyGrid = ({title, note, symbol, fontWeight, fontWeightText, fontSize, variableName, lineHeight, fontFamily, textStyle, className}) => (
  <React.Fragment>
    {title && (
      <h3 className={className ? `ws-title ${className}` : 'ws-title'}>
        {title} {symbol && <span className="ws-typography-gridTitleSymbol">{symbol}</span>}
      </h3>
    )}
    <PfStyledText fontFamily={fontFamily} fontWeight={fontWeight} variableName={variableName} lineHeight={lineHeight}>
      Design is where science and art break even.
    </PfStyledText>
    <Grid gutter="sm">
      <GridItem span={12}>
        <Table variant="compact" className="ws-typography-tableTypography" aria-label="typography usage guidelines breakout">
          <Tbody>
            <Tr>
              <Td className="pf-v5-u-pr-sm">Font family:</Td>
              <Td>{fontFamily}</Td>
            </Tr>
            <Tr>
              <Td>Font weight:</Td>
              <Td>{fontWeightText}</Td>
            </Tr>
            <Tr>
              <Td>Line height:</Td>
              <Td>{lineHeight}</Td>
            </Tr>
            <Tr>
              <Td>Font size:</Td>
              <Td>{fontSize}</Td>
            </Tr>
            <Tr>
              <Td>Text style:</Td>
              <Td>{textStyle}</Td>
            </Tr>
            <Tr>
              <Td>Font size CSS variable:</Td>
              <Td><code className="ws-code">{variableName}</code></Td>
            </Tr>
          </Tbody>
        </Table>
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
    <div className="pf-v5-l-flex pf-m-space-items-md pf-m-align-items-center">
      {description && <div>{description}</div>}
      <div className={`
        ws-typography-spacerBox-size-${size}
        ${color ? ` ws-typography-spacerBox-background-${color}` : ''}
        ${showBorder ? " ws-typography-spacerBox-showBorder" : ''}
      `}></div>
    </div>
  )
};
