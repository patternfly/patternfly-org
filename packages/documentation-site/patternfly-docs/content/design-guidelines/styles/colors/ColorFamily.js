import React from 'react';
import tokens from '@patternfly/react-tokens/dist/esm/patternfly_variables';
import AngleRightIcon from '@patternfly/react-icons/dist/esm/icons/angle-right-icon';
import { css } from '@patternfly/react-styles';
import { normalizeColor, getContrastRatio } from './helpers';
import './ColorFamily.css';

const palettePrefix = '--pf-t--color--';

export function ColorFamily({
  title,
  family
}) {
  const [expanded, setExpanded] = React.useState([]);
  const rootTokens = tokens[':where(:root)'];

  const familyTokens = family === 'shadows'
    ? [rootTokens.global_box_shadow_sm, rootTokens.global_box_shadow_md, rootTokens.global_box_shadow_lg]
    : Object.values(rootTokens).filter(token => token.name.includes(`${palettePrefix}${family}`));
  if (family === 'black') {
    const whiteToken = rootTokens.color_white
    familyTokens.unshift(whiteToken);
  }

  const expandAll = () => {
    if (expanded.length > 0) {
      setExpanded([]);
    } else {
      setExpanded(familyTokens.map(token => token.name));
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
      <dl className="pf-v6-c-accordion pf-v6-u-p-0">
        <dt
          className={css(
            'pf-v6-c-accordion__toggle',
            'ws-color-family-accordion-toggle',
            expanded.length === familyTokens.length && 'pf-m-expanded'
          )}
          onClick={expandAll}
        >
          <h3 className="pf-v6-c-title pf-m-xl">
            <AngleRightIcon className="pf-v6-c-accordion__toggle-icon ws-color-family-toggle-icon" />
            {title}
          </h3>
        </dt>
        {familyTokens.map(token => {
          const isExpanded = expanded.includes(token.name);
          const isShadows = family === 'shadows';
          const tokenClass = css(
            'pf-v6-c-accordion__toggle',
            'ws-color-family-toggle',
            isExpanded && 'pf-m-expanded'
          );
          const itemStyle = {
            background: `var(${token.name})`,
            // fontSize: 'var(--pf-v6-global--FontSize--sm)'
          };
          if (isShadows) {
            itemStyle.marginBottom = '1rem';
            itemStyle.boxShadow = `var(${token.name})`;
          }
          else if (getContrastRatio(token.value, '#151515') <= 4.5) {
            // itemStyle.color = 'var(--pf-v6-global--Color--light-100)';
          }
          else if (getContrastRatio(token.value, '#151515') > 4.5) {
            // itemStyle.color = 'var(--pf-v6-global--palette--black-900)';
          }
          const expandedStyle = {};
          if (isExpanded && !isShadows) {
            const borderLeftWidth = 'var(--pf-v6-c-accordion__toggle--m-expanded--BorderWidth)';
            const borderColor = `var(${token.name})`;
            const borderStyle = 'solid';
            itemStyle.borderLeftWidth = borderLeftWidth;
            itemStyle.borderColor = borderColor;
            itemStyle.borderStyle = borderStyle;
            expandedStyle.borderLeftWidth = borderLeftWidth;
            expandedStyle.borderColor = borderColor;
            expandedStyle.borderStyle = borderStyle;
          }

          return (
            <React.Fragment key={token.name}>
              <dd
                className={`${tokenClass} ws-color-family-accordion-toggle`}
                style={itemStyle}
                onClick={() => expand(token.name)}
                // id={!isShadows ? token.value.replace('#', 'color-') : token.name.replace('--pf-v6-global--BoxShadow--', '')}
              >
                <div>
                  <AngleRightIcon className="pf-v6-c-accordion__toggle-icon ws-color-family-toggle-icon" />
                  {token.name
                    .replace(palettePrefix, '')
                    // .replace('--pf-v6-global--BoxShadow--', 'box shadow ')}
                  }
                </div>
                {!isShadows && (
                  <div className="ws-color-family-color">
                    #{normalizeColor(token.value.toUpperCase())}
                  </div>
                )}
              </dd>
              {isExpanded && (
                <dd className={`${tokenClass} ws-color-family-content`} style={expandedStyle}>
                  <label className="ws-color-family-label">CSS variables</label>
                  {Object.values(rootTokens)
                    .filter(t => t.value === token.value)
                    .map(t => t.name)
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
