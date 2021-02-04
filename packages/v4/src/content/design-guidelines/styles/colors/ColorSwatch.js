import React from 'react';
import tokens from '@patternfly/react-tokens/dist/esm/patternfly_variables';
import { Popover } from '@patternfly/react-core';
import { normalizeColor, tokenName } from './helpers';
import './ColorSwatch.css';

const handSVG = (
  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(22, 22)">
      <g transform="translate(-108.000000, -493.000000)">
          <g transform="translate(80.000000, 465.000000)">
              <g transform="translate(28.000000, 28.000000)">
                <path d="M3.3,12.4 C3,12 2.7,11.3 2.1,10.4 C1.8,9.9 0.9,8.9 0.6,8.5 C0.4,8.1 0.4,7.9 0.5,7.5 C0.6,6.9 1.2,6.4 1.9,6.4 C2.4,6.4 2.9,6.8 3.3,7.1 C3.5,7.3 3.8,7.7 4,7.9 C4.2,8.1 4.2,8.2 4.4,8.4 C4.6,8.7 4.7,8.9 4.6,8.5 C4.5,8 4.4,7.2 4.2,6.4 C4.1,5.8 4,5.7 3.9,5.3 C3.8,4.8 3.7,4.5 3.6,4 C3.5,3.7 3.4,2.9 3.3,2.5 C3.2,2 3.2,1.1 3.6,0.7 C3.9,0.4 4.5,0.3 4.9,0.5 C5.4,0.8 5.7,1.5 5.8,1.8 C6,2.3 6.2,3 6.3,3.8 C6.5,4.8 6.8,6.3 6.8,6.6 C6.8,6.2 6.7,5.5 6.8,5.1 C6.9,4.8 7.1,4.4 7.5,4.3 C7.8,4.2 8.1,4.2 8.4,4.2 C8.7,4.3 9,4.5 9.2,4.7 C9.6,5.3 9.6,6.6 9.6,6.5 C9.7,6.1 9.7,5.3 9.9,4.9 C10,4.7 10.4,4.5 10.6,4.4 C10.9,4.3 11.3,4.3 11.6,4.4 C11.8,4.4 12.2,4.7 12.3,4.9 C12.5,5.2 12.6,6.2 12.7,6.6 C12.7,6.7 12.8,6.2 13,5.9 C13.4,5.3 14.8,5.1 14.9,6.5 C14.9,7.2 14.9,7.1 14.9,7.6 C14.9,8.1 14.9,8.4 14.9,8.8 C14.9,9.2 14.8,10.1 14.7,10.5 C14.6,10.8 14.3,11.5 14,11.9 C14,11.9 12.9,13.1 12.8,13.7 C12.7,14.3 12.7,14.3 12.7,14.7 C12.7,15.1 12.8,15.6 12.8,15.6 C12.8,15.6 12,15.7 11.6,15.6 C11.2,15.5 10.7,14.8 10.6,14.5 C10.4,14.2 10.1,14.2 9.9,14.5 C9.7,14.9 9.2,15.6 8.8,15.6 C8.1,15.7 6.7,15.6 5.7,15.6 C5.7,15.6 5.9,14.6 5.5,14.2 C5.2,13.9 4.7,13.4 4.4,13.1 L3.3,12.4 Z" fill="#FFFFFF" fillRule="nonzero"></path>
                <path d="M3.3,12.4 C3,12 2.7,11.3 2.1,10.4 C1.8,9.9 0.9,8.9 0.6,8.5 C0.4,8.1 0.4,7.9 0.5,7.5 C0.6,6.9 1.2,6.4 1.9,6.4 C2.4,6.4 2.9,6.8 3.3,7.1 C3.5,7.3 3.8,7.7 4,7.9 C4.2,8.1 4.2,8.2 4.4,8.4 C4.6,8.7 4.7,8.9 4.6,8.5 C4.5,8 4.4,7.2 4.2,6.4 C4.1,5.8 4,5.7 3.9,5.3 C3.8,4.8 3.7,4.5 3.6,4 C3.5,3.7 3.4,2.9 3.3,2.5 C3.2,2 3.2,1.1 3.6,0.7 C3.9,0.4 4.5,0.3 4.9,0.5 C5.4,0.8 5.7,1.5 5.8,1.8 C6,2.3 6.2,3 6.3,3.8 C6.5,4.8 6.8,6.3 6.8,6.6 C6.8,6.2 6.7,5.5 6.8,5.1 C6.9,4.8 7.1,4.4 7.5,4.3 C7.8,4.2 8.1,4.2 8.4,4.2 C8.7,4.3 9,4.5 9.2,4.7 C9.6,5.3 9.6,6.6 9.6,6.5 C9.7,6.1 9.7,5.3 9.9,4.9 C10,4.7 10.4,4.5 10.6,4.4 C10.9,4.3 11.3,4.3 11.6,4.4 C11.8,4.4 12.2,4.7 12.3,4.9 C12.5,5.2 12.6,6.2 12.7,6.6 C12.7,6.7 12.8,6.2 13,5.9 C13.4,5.3 14.8,5.1 14.9,6.5 C14.9,7.2 14.9,7.1 14.9,7.6 C14.9,8.1 14.9,8.4 14.9,8.8 C14.9,9.2 14.8,10.1 14.7,10.5 C14.6,10.8 14.3,11.5 14,11.9 C14,11.9 12.9,13.1 12.8,13.7 C12.7,14.3 12.7,14.3 12.7,14.7 C12.7,15.1 12.8,15.6 12.8,15.6 C12.8,15.6 12,15.7 11.6,15.6 C11.2,15.5 10.7,14.8 10.6,14.5 C10.4,14.2 10.1,14.2 9.9,14.5 C9.7,14.9 9.2,15.6 8.8,15.6 C8.1,15.7 6.7,15.6 5.7,15.6 C5.7,15.6 5.9,14.6 5.5,14.2 C5.2,13.9 4.7,13.4 4.4,13.1 L3.3,12.4 Z" stroke="#000000" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"></path>
                <line x1="11.6" y1="12.7" x2="11.6" y2="9.3" id="Path" stroke="#000000" strokeWidth="0.75" strokeLinecap="round"></line>
                <line x1="9.6" y1="12.7" x2="9.5" y2="9.3" id="Path" stroke="#000000" strokeWidth="0.75" strokeLinecap="round"></line>
                <line x1="7.6" y1="9.3" x2="7.6" y2="12.7" id="Path" stroke="#000000" strokeWidth="0.75" strokeLinecap="round"></line>
              </g>
          </g>
      </g>
  </g>
);

export function ColorSwatch({
  label,
  color,
  caption,
  children
}) {
  const isBoxShadow = color.includes('BoxShadow');
  const token = tokens[":root"][tokenName(color)];
  const popoverContent = (
    <div className="ws-color-swatch-popover">
      <label className="ws-color-swatch-popover-label">Global CSS variable</label>
      <code className="ws-color-swatch-description-code ws-color-swatch-popover-code ws-code pf-u-font-size-xs">
        {color}
      </code>
      <p>
        <a href={token.value.replace('#', '#color-')}>
          See all global CSS color variables
        </a>
      </p>
      {token && (
        <React.Fragment>
          <label className="ws-color-swatch-popover-label">
            {isBoxShadow ? 'Value' : 'Hex value'}
          </label>
          <p>
            {isBoxShadow ? token.value : `#${normalizeColor(token.value)}`}
          </p>
        </React.Fragment>
      )}
      <label className="ws-color-swatch-popover-label">Usage</label>
      <p>{children}</p>
    </div>
  );

  return (
    <div className="ws-color-swatch">
      <Popover
        position="right"
        aria-label="Global CSS variable"
        bodyContent={popoverContent}
      >
        <svg
          width="44px"
          height="44px"
          viewBox="0 0 44 44"
          style={isBoxShadow ? { boxShadow: `var(${color})` } : {}}
        >
          <circle cx="22" cy="22" r="22" style={{ fill: isBoxShadow ? 'white' : `var(${color})`, stroke: 'var(--pf-global--palette--black-300)' }} />
          {label === 'Hover' && handSVG}
        </svg>
      </Popover>
      <div className="ws-color-swatch-description">
        <label className="ws-color-swatch-description-label">
          {label || token && `#${normalizeColor(token.value)}`} {caption && `(${caption})`}
        </label>
        <code className="ws-color-swatch-description-code ws-code pf-u-font-size-xs">
          {color}
        </code>
      </div>
    </div>
  );
}
