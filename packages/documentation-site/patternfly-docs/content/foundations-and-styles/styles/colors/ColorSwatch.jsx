import React from 'react';
import tokens from '@patternfly/react-tokens/dist/esm/patternfly_variables';
import { Popover, Stack, StackItem, Split, SplitItem, Title, Button } from '@patternfly/react-core';
import { normalizeColor, tokenName } from './helpers';
import './ColorSwatch.css';

export function ColorSwatch({
  label,
  color,
  caption,
  children
}) {
  const token = tokens[":root"][tokenName(color)];
  const popoverContent = (
    <Stack hasGutter>
      <StackItem>
        <Title headingLevel="h3" size="md">Token</Title>
        <code className="ws-code pf-v6-u-font-size-xs">
          {color}
        </code>
      </StackItem>
      {token && (
        <StackItem>
          <Title headingLevel="h3" size="md">
            {'Hex value'}
          </Title>
          <pC>
            {`#${normalizeColor(token.value)}`}
          </pC>
        </StackItem>
      )}
      <StackItem>
        <Title headingLevel="h3" size="md">Usage</Title>
        <p>{children}</p>
      </StackItem>
    </Stack>
  );

  return (
    <Split hasGutter>
      <SplitItem>
        <Popover
          position="right"
          aria-label="Token"
          bodyContent={popoverContent}
          footerContent={<a href="/tokens/all-patternfly-tokens">All tokens</a>}
          hasAutoWidth
        >
          <Button
            variant="plain"
            aria-label={`Token info for ${color}`}
            {...(color === '--pf-t--global--background--color--primary--default' && {style: {backgroundColor: 'var(--pf-t--global--background--color--primary--hover)'}})}
          >
            <svg
              width="44px"
              height="44px"
              viewBox="0 0 44 44"
            >
              <circle
                cx="22"
                cy="22"
                r="22"
                style={{ fill: `var(${color})`, stroke: 'var(--pf-v6-global--palette--black-300)' }}
              />
            </svg>
          </Button>
        </Popover>
      </SplitItem>
      <SplitItem isFilled>
        <Title headingLevel="h3" size="md">
          {label || token && `#${normalizeColor(token.value)}`} {caption && `(${caption})`}
        </Title>
        <code className="ws-code pf-v6-u-font-size-xs">
          {color}
        </code>
      </SplitItem>
    </Split>
  );
}
