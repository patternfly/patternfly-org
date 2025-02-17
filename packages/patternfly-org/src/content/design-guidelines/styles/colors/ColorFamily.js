import React from 'react';
import tokens from '@patternfly/react-tokens/dist/esm/patternfly_variables';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { css } from '@patternfly/react-styles';
import { normalizeColor, getContrastRatio } from './helpers';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle, Content, ContentVariants, Title } from '@patternfly/react-core';

const palettePrefix = '--pf-t--color--';

export function ColorFamily({
  title,
  family
}) {
  const [expanded, setExpanded] = React.useState([]);
  const rootTokens = tokens[':root'];
  const familyTokens = Object.values(rootTokens).filter(token => token.name.includes(`${palettePrefix}${family}--`));

  if (family === 'gray') {
    const whiteToken = rootTokens.t_color_white;
    familyTokens.unshift(whiteToken);
    const blackToken = rootTokens.t_color_black;
    familyTokens.push(blackToken);
  }

  const expand = name => {
    if (expanded.includes(name)) {
      setExpanded(expanded.filter(token => token !== name));
    } else {
      setExpanded(expanded.concat(name));
    }
  };

  return (
    <React.Fragment>
      <Title headingLevel="h3">{title}</Title>
      <Accordion togglePosition="start">
        {familyTokens.map(token => {
          const isExpanded = expanded.includes(token.name);
          const itemStyle = {
            '--pf-v6-c-accordion__toggle--BackgroundColor': `var(${token.name})`,
            '--pf-v6-c-accordion__toggle--hover--BackgroundColor': `var(${token.name})`,
            fontSize: 'var(--pf-t--global--font--size--md)'
          };
          if (getContrastRatio(token.value, '#151515') > 4.5) {
            itemStyle['--pf-v6-c-accordion__toggle-text--Color'] = '#151515';
          }
          else if (getContrastRatio(token.value, '#151515') <= 4.5) {
            itemStyle['--pf-v6-c-accordion__toggle-text--Color'] = '#FFFFFF';
          }

          const tokenList = Object.values(rootTokens)
            .filter(t => t.value === token.value && !/\d/.test(t.name)) // only show semantic tokens (without digits at the end)
            .map(t => t.name)
            .sort();

          return (
            <AccordionItem isExpanded={isExpanded} style={itemStyle}>
              <AccordionToggle
                onClick={() => expand(token.name)}
                id={token.value.replace('#', 'color-')}
                style={{
                  backgroundColor: `${token.value} !important`,
                  color: itemStyle['--pf-v6-c-accordion__toggle-text--Color']
                }}
              >
                #{normalizeColor(token.value.toUpperCase())}
              </AccordionToggle>
              <AccordionContent>
                {tokenList?.length > 0 ? (
                  <>
                    <Title headingLevel="h4" size="md">Semantic tokens<span className='pf-v6-screen-reader'>for {token.value.toUpperCase()}</span></Title>
                    <Content isEditorial className="pf-v6-u-m-sm" component={ContentVariants.ol} isPlainList>
                      {tokenList.map(tokenName =>
                        <Content isEditorial component={ContentVariants.li} key={tokenName}>{tokenName}</Content>
                      )}
                    </Content>
                  </>
                ) : (
                  <Title headingLevel="h4" size="md">No semantic tokens<span className='pf-v6-screen-reader'>for {token.value.toUpperCase()}</span></Title>
                )}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </React.Fragment>
  );
}
