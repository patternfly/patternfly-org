import React from 'react';
import * as tokens from '@patternfly/react-tokens';
import AngleRightIcon from '@patternfly/react-icons/dist/js/icons/angle-right-icon';
import { css } from '@patternfly/react-styles';
import './ColorFamily.css';

const palettePrefix = '--pf-global--palette--';

function normalizeColor(color) {
  if (color.startsWith('#')) {
    const hex = color.substr(1);
    return hex.length === 3 ? hex.split('').map(char => char.repeat(2)).join('') : hex;
  }
}

function normalizeLuminance(val) {
  val = parseInt(val, 16) / 255;
  return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
}

function getRelativeLuminance(color) {
  // https://www.w3.org/TR/WCAG21/relative-luminance.xml
  const r = normalizeLuminance(color.substr(0, 2));
  const g = normalizeLuminance(color.substr(2, 2));
  const b = normalizeLuminance(color.substr(4, 2));
  return (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
}

function getContrastRatio(c1, c2) {
  // https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
  c1 = normalizeColor(c1);
  c2 = normalizeColor(c2);

  const l1 = getRelativeLuminance(c1);
  const l2 = getRelativeLuminance(c2);

  return (l1 + 0.05) / (l2 + 0.05);
}

export function ColorFamily({
  title,
  family
}) {
  const [expanded, setExpanded] = React.useState([]);

  const familyTokens = family === 'shadows'
    ? [tokens.global_BoxShadow_lg, tokens.global_BoxShadow_md, tokens.global_BoxShadow_sm]
    : Object.values(tokens)
        .filter(token => token.name.includes(`${palettePrefix}${family}`));
  if (family === 'black') {
    familyTokens.unshift(tokens.global_palette_white);
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
      <dl className="pf-c-accordion pf-u-p-0">
        <dt
          className={css(
            'pf-c-accordion__toggle',
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
          const isExpanded = expanded.includes(token.name);
          const isShadows = family === 'shadows';
          const tokenClass = css(
            'pf-c-accordion__toggle',
            'ws-color-family-toggle',
            isExpanded && 'pf-m-expanded'
          );
          const itemStyle = { background: `var(${token.name})`, fontSize: 'var(--pf-global--FontSize--sm)' };
          if (isShadows) {
            itemStyle.marginBottom = '1rem';
            itemStyle.boxShadow = `var(${token.name})`;
          }
          else if (getContrastRatio(token.value, '#151515') <= 4.5) {
            itemStyle.color = tokens.global_palette_black_100.value;
          }
          const expandedStyle = {};
          if (isExpanded) {
            const borderLeftWidth = 'var(--pf-c-accordion__toggle--m-expanded--BorderWidth)';
            const borderColor = !isShadows ? `var(${token.name})` : 'var(--pf-c-accordion__toggle--BorderLeftColor)';
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
              <dt
                className={tokenClass}
                style={itemStyle}
                onClick={() => expand(token.name)}
                id={!isShadows ? token.value.replace('#', 'color-') : token.name.replace('--pf-global--BoxShadow--', '')}
              >
                <div>
                  <AngleRightIcon className="pf-c-accordion__toggle-icon ws-color-family-toggle-icon" />
                  {token.name
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
                  {Object.values(tokens)
                    .filter(t => t.value === token.value)
                    .filter(t => t.name.startsWith('--pf-global'))
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