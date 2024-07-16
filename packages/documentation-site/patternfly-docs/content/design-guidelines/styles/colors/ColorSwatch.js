import React from 'react';
import tokens from '@patternfly/react-tokens/dist/esm/patternfly_variables';
import { Popover, Button } from '@patternfly/react-core';
import { normalizeColor, tokenName } from './helpers';
import './ColorSwatch.css';

export function ColorSwatch({
  label,
  color,
  caption,
  children
}) {
  const isBoxShadow = color.includes('BoxShadow');
  const token = tokens[":where(:root)"][tokenName(color)];
  const popoverContent = (
    <div className="ws-color-swatch-popover">
      <label className="ws-color-swatch-popover-label">Token</label>
      <p>
      <code className="ws-color-swatch-description-code ws-color-swatch-popover-code ws-code pf-v6-u-font-size-xs">
        {color}
      </code>
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
      <p><label className="ws-color-swatch-popover-label">Usage</label></p>
      <p className="ws-color-swatch-usage">{children}</p>
    </div>
  );

  return (
    <div className="ws-color-swatch">
      <Popover
        position="right"
        aria-label="Token"
        bodyContent={popoverContent}
        footerContent={<a href="/tokens/all-patternfly-tokens">All tokens</a>}
        hasAutoWidth
      >
        <Button className="ws-color-swatch-image" variant="plain" aria-label={`Token info for ${color}`}>
          <svg
            width="44px"
            height="44px"
            viewBox="0 0 44 44"
            style={isBoxShadow ? { boxShadow: `var(${color})` } : {}}
          >
            <circle
              cx="22"
              cy="22"
              r="22"
              // style={{ fill: isBoxShadow ? 'white' : `var(${color})`, stroke: 'var(--pf-v6-global--palette--black-300)' }}
            />
          </svg>
        </Button>
      </Popover>
      <div className="ws-color-swatch-description">
        <label className="ws-color-swatch-description-label">
          {label || token && `#${normalizeColor(token.value)}`} {caption && `(${caption})`}
        </label>
        <code className="ws-color-swatch-description-code ws-code pf-v6-u-font-size-xs">
          {color}
        </code>
      </div>
    </div>
  );
}
