import React from 'react';
import tokens from '@patternfly/react-tokens/dist/variables/esm/patternfly_variables';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import { css } from '@patternfly/react-styles';
import { normalizeColor, getContrastRatio } from './helpers';
import './ColorFamily.css';

const palettePrefix = '--pf-global--palette--';

export function ColorFamily({
  title,
  family
}) {
  const [expanded, setExpanded] = React.useState([]);

  const familyTokens = family === 'shadows'
    ? tokens[':root'].filter(token => /--pf-global--BoxShadow--(sm|md|lg)$/.test(token.property))
    : tokens[':root'].filter(token => token.property.includes(`${palettePrefix}${family}`));
  if (family === 'black') {
    const whiteToken = tokens[':root'].find(token => token.property === '--pf-global--palette--white');
    familyTokens.unshift(whiteToken);
  }

  const expandAll = () => {
    if (expanded.length > 0) {
      setExpanded([]);
    } else {
      setExpanded(familyTokens.map(token => token.property));
    }
  };

  const expand = name => {
    if (expanded.includes(name)) {
      setExpanded(expanded.filter(token => token !== name));
    } else {
      setExpanded(expanded.concat(name));
    }
  };

  return (
    <React.Fragment>
      <dl className="pf-c-accordion pf-u-p-0">
        <dt
          className={css(
            'pf-c-accordion__toggle',
            'ws-color-family-accordion-toggle',
            expanded.length === familyTokens.length && 'pf-m-expanded'
          )}
          onClick={expandAll}
        >
          <h3 className="pf-c-title pf-m-xl">
            <AngleRightIcon className="pf-c-accordion__toggle-icon ws-color-family-toggle-icon" />
            {title}
          </h3>
        </dt>
        {familyTokens.map(token => {
          const isExpanded = expanded.includes(token.property);
          const isShadows = family === 'shadows';
          const tokenClass = css(
            'pf-c-accordion__toggle',
            'ws-color-family-toggle',
            isExpanded && 'pf-m-expanded'
          );
          const itemStyle = { background: `var(${token.property})`, fontSize: 'var(--pf-global--FontSize--sm)' };
          if (isShadows) {
            itemStyle.marginBottom = '1rem';
            itemStyle.boxShadow = `var(${token.property})`;
          }
          else if (getContrastRatio(token.value, '#151515') <= 4.5) {
            itemStyle.color = '#fafafa';
          }
          const expandedStyle = {};
          if (isExpanded) {
            const borderLeftWidth = 'var(--pf-c-accordion__toggle--m-expanded--BorderWidth)';
            const borderColor = !isShadows ? `var(${token.property})` : 'var(--pf-c-accordion__toggle--BorderLeftColor)';
            const borderStyle = 'solid';
            itemStyle.borderLeftWidth = borderLeftWidth;
            itemStyle.borderColor = borderColor;
            itemStyle.borderStyle = borderStyle;
            expandedStyle.borderLeftWidth = borderLeftWidth;
            expandedStyle.borderColor = borderColor;
            expandedStyle.borderStyle = borderStyle;
          }

          return (
            <React.Fragment key={token.property}>
              <dt
                className={`${tokenClass} ws-color-family-accordion-toggle`}
                style={itemStyle}
                onClick={() => expand(token.property)}
                id={!isShadows ? token.value.replace('#', 'color-') : token.property.replace('--pf-global--BoxShadow--', '')}
              >
                <div>
                  <AngleRightIcon className="pf-c-accordion__toggle-icon ws-color-family-toggle-icon" />
                  {token.property
                    .replace(palettePrefix, '')
                    .replace('--pf-global--BoxShadow--', 'box shadow ')}
                </div>
                {!isShadows && (
                  <div className="ws-color-family-color">
                    #{normalizeColor(token.value.toUpperCase())}
                  </div>
                )}
              </dt>
              {isExpanded && (
                <dd className={`${tokenClass} ws-color-family-content`} style={expandedStyle}>
                  <label className="ws-color-family-label">CSS variables</label>
                  {tokens[':root']
                    .filter(t => t.value === token.value)
                    .map(t => t.property)
                    .sort()
                    .map(tokenName => 
                      <div key={tokenName}>{tokenName}</div>
                    )}
                </dd>
              )}
            </React.Fragment>
          );
        })}
      </dl>
    </React.Fragment>
  );
}