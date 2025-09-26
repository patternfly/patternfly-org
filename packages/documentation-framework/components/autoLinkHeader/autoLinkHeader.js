import React, { useState } from 'react';
import { Flex, FlexItem, Content, Tooltip, Button } from '@patternfly/react-core';
import LinkIcon from '@patternfly/react-icons/dist/esm/icons/link-icon';
import { slugger } from '../../helpers/slugger';
import { css } from '@patternfly/react-styles';

export const AutoLinkHeader = ({
  id,
  headingLevel,
  children,
  metaText,
  className
}) => {
  const slug = id || slugger(children);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyUrl = (e) => {
    e.preventDefault();
    const url = `${window.location.origin}${window.location.pathname}#${slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
      console.log('URL copied to clipboard:', url);
    }).catch(err => {
      console.error('Failed to copy URL:', err);
    });
  };

  return (
    <Flex alignItems={{ default: 'alignItemsCenter'}} spaceItems={{ default: "spaceItemsSm" }}>
      <FlexItem>
        <Content
          id={slug}
          component={headingLevel}
          className={css('ws-heading', className)}
          tabIndex={-1}
          isEditorial
        >
          <Tooltip
            content="Link copied to clipboard"
            isVisible={showTooltip}
            trigger="manual"
          >
            <button 
              onClick={handleCopyUrl}
              className="ws-heading-anchor" 
              tabIndex="-1" 
              aria-hidden
              aria-label={`Copy link to ${children}`}
            >
              <LinkIcon className="ws-heading-anchor-icon" />
            </button>
          </Tooltip>
          {children}
        </Content>
      </FlexItem>
      {metaText && <FlexItem>{metaText}</FlexItem>}
    </Flex>
  )
};
