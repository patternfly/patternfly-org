import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import { Table, Tr, Tbody, Td } from '@patternfly/react-table';

export const PfStyledText = ({ children, variableName, fontWeight, lineHeight, fontFamily }) => (
  <div style={{ fontFamily: `var(${fontFamily})`, fontWeight, fontSize: `var(${variableName})`, lineHeight }} className="ws-title-level">
    {children || 'Design is where science and art break even.'}
  </div>
);

export const TitleLevel = ({ asGrid, styleProps, children, title = '', className = '' }) => {
  return asGrid ? (
    <TypographyGrid
      title={title}
      className={className}
      {...styleProps}
    />
  ) : (
    <PfStyledText {...styleProps}>{children}</PfStyledText>
  )
}

export const styleProps = {
  superHero: {
    fontWeight: "--pf-t--global--font--weight--body",
    fontWeightText: "400 (medium)",
    variableName: "--pf-t--global--font--size--4xl",
    fontSize: "36px",
    lineHeight: "1.3",
    fontFamily: "--pf-t--global--font--family--heading",
    fontFamilyText: "Red Hat Display",
    textStyle: "4xl (RHD md 36)"
  },
  hero: {
    fontWeight: "--pf-t--global--font--weight--body",
    fontWeightText: "400 (medium)",
    variableName: "--pf-t--global--font--size--3xl",
    fontSize: "28px",
    lineHeight: "1.3",
    fontFamily: "--pf-t--global--font--family--heading",
    fontFamilyText: "Red Hat Display",
    textStyle: "3xl (RHD md 28)"
  },
  first: {
    fontWeight: "--pf-t--global--font--weight--body",
    fontWeightText: "400 (medium)",
    variableName: "--pf-t--global--font--size--2xl",
    fontSize: "24px",
    lineHeight: "1.3",
    fontFamily: "--pf-t--global--font--family--heading",
    fontFamilyText: "Red Hat Display",
    textStyle: "2xl (RHD md 24)"
  },
  second: {
    fontWeight: "--pf-t--global--font--weight--body",
    fontWeightText: "400 (medium)",
    fontSize: "20px",
    variableName: "--pf-t--global--font--size--xl",
    lineHeight: "1.5",
    fontFamily: "--pf-t--global--font--family--heading",
    fontFamilyText: "Red Hat Display",
    textStyle: "xl (RHD md 20)"
  },
  third: {
    fontWeight: "--pf-t--global--font--weight--body",
    fontWeightText: "400 (medium)",
    fontSize: "18px",
    variableName: "--pf-t--global--font--size--lg",
    lineHeight: "1.5",
    fontFamily: "--pf-t--global--font--family--heading",
    fontFamilyText: "Red Hat Display",
    textStyle: "lg (RHD md 18)"
  },
  fourth: {
    fontWeight: "--pf-t--global--font--weight--body",
    fontWeightText: "400 (medium)",
    fontSize: "16px",
    variableName: "--pf-t--global--font--size--md",
    lineHeight: "1.5",
    fontFamily: "--pf-t--global--font--family--heading",
    fontFamilyText: "Red Hat Display",
    textStyle: "md (RHD md 16)"
  },
  body: {
    fontWeight: "--pf-t--global--font--weight--body",
    fontWeightText: "400 (regular)",
    fontSize: "14px",
    variableName: "--pf-t--global--font--size--body--default",
    lineHeight: "1.5",
    fontFamily: "--pf-t--global--font--family--body",
    fontFamilyText: "Red Hat Text",
    textStyle: "md (RHT rg 14)"
  },
  small: {
    fontWeight: "--pf-t--global--font--weight--body",
    fontWeightText: "400 (regular)",
    fontSize: "12px",
    variableName: "--pf-t--global--font--size--body--sm",
    lineHeight: "1.5",
    fontFamily: "--pf-t--global--font--family--body",
    fontFamilyText: "Red Hat Text",
    textStyle: "sm (RHT rg 12)"
  },
  code: {
    fontWeight: "--pf-t--global--font--weight--body",
    fontWeightText: "400 (regular)",
    fontSize: "14px",
    variableName: "--pf-t--global--font--size--body--default",
    lineHeight: "1.5",
    fontFamily: "--pf-t--global--font--family--mono",
    fontFamilyText: "Red Hat Mono",
    textStyle: "Code"
  }
}

export const TypographyGrid = ({title, symbol, fontWeight, fontWeightText, fontFamilyText, fontSize, variableName, lineHeight, fontFamily, textStyle, className}) => (
  <React.Fragment>
    {title && (
      <h3 className={className}>
        {title} {symbol}
      </h3>
    )}
    <PfStyledText fontFamily={fontFamily} fontWeight={fontWeight} variableName={variableName} lineHeight={lineHeight}>
      Design is where science and art break even.
    </PfStyledText>
    <Grid gutter="sm">
      <GridItem span={12}>
        <Table variant="compact" aria-label="typography usage guidelines breakout">
          <Tbody>
            <Tr resetOffset>
              <Td className="pf-v6-u-pr-sm">Font family:</Td>
              <Td>{fontFamilyText}</Td>
            </Tr>
            <Tr resetOffset>
              <Td>Font weight:</Td>
              <Td>{fontWeightText}</Td>
            </Tr>
            <Tr resetOffset>
              <Td>Line height:</Td>
              <Td>{lineHeight}</Td>
            </Tr>
            <Tr resetOffset>
              <Td>Font size:</Td>
              <Td>{fontSize}</Td>
            </Tr>
            <Tr resetOffset>
              <Td>Text style:</Td>
              <Td>{textStyle}</Td>
            </Tr>
            <Tr resetOffset>
              <Td>Font size CSS variable:</Td>
              <Td><code className="ws-code">{variableName}</code></Td>
            </Tr>
          </Tbody>
        </Table>
      </GridItem>
    </Grid>
  </React.Fragment>
);
